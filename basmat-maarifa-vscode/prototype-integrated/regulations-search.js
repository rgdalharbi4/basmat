/* Independent reference search. No knowledge records, chatbot or generated answers. */
const RegulationSearch = (() => {
  const data = window.REGULATIONS_DATA;
  const esc = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const norm = s => String(s).toLowerCase().normalize('NFKC').replace(/[\u064B-\u065F\u0670\u0640]/g,'').replace(/[أإآٱ]/g,'ا').replace(/ى/g,'ي').replace(/ة/g,'ه');
  const stops = new Set(['في','من','عن','ما','هو','هي','كيف','هل','على','الى','لي','ابحث','اريد','ابي','ايش','اعطني','بشأن','شان']);
  const groups = [
    ['ترقيه','ترقيات','الترقيه','الترقيات','ترقي','يرقي','promotion'],
    ['اجازه','اجازات','الاجازه','الاجازات'],
    ['مؤهل','المؤهل','مؤهلات','المؤهلات','تاهيل'],
    ['بريد','البريد','ايميل','الايميل','email'],
    ['تصيد','التصيد','phishing'],
    ['كلمه','كلمات'],['مرور','المرور','password'],
    ['شبكه','شبكات','الشبكه','الشبكات','واي','wifi','لاسلكيه'],
    ['فيروس','فيروسات','الفيروسات','malware'],
    ['موظف','موظفه','موظفين','الموظفين','الموظف'],
    ['ابتعاث','الابتعاث','مبتعث','ايفاد','الايفاد']
  ];
  const bare = s => s.startsWith('ال') ? s.slice(2) : s;
  const tokens = q => [...new Set(norm(q).split(/[^\p{L}\p{N}]+/u).filter(w => w.length > 1 && !stops.has(w)))].slice(0,32);
  const variants = token => {
    const g = groups.find(g => g.includes(token) || g.includes(bare(token)));
    return [...new Set([token,bare(token),...(g||[])])];
  };
  const index = data.documents.flatMap(doc => doc.sections.map(section => ({doc,section,
    body:norm(section.text),meta:norm(`${doc.name} ${doc.issuer} ${section.label}`)})));
  let current = {query:'',domain:'',type:'',results:[],limit:10};
  function search(query,domain='',type='') {
    const terms = tokens(query);
    if (!terms.length) return [];
    return index.filter(x => (!domain||x.doc.domain===domain)&&(!type||x.doc.type===type)).map(x => {
      const hits = terms.map(t => {const vs=variants(t);return {body:vs.some(v=>x.body.includes(v)),meta:vs.some(v=>x.meta.includes(v))};});
      const coverage = hits.filter(h=>h.body||h.meta).length / terms.length;
      const bodyHits = hits.filter(h=>h.body).length;
      const labelScore = terms.reduce((sum,t)=>sum+(variants(t).some(v=>norm(x.section.label).includes(v))?10:0),0);
      const score = labelScore + bodyHits*5 + hits.filter(h=>h.meta).length*2 + (x.body.includes(norm(query).trim())?8:0);
      return {...x,score,coverage,bodyHits};
    }).filter(x=>x.coverage>=0.5 && (x.bodyHits>0 || x.coverage===1))
      .sort((a,b)=>b.coverage-a.coverage||b.score-a.score||a.section.page-b.section.page);
  }
  function excerpt(text,query) {
    const words=tokens(query).flatMap(variants);
    const n=norm(text);const at=words.map(w=>n.indexOf(w)).filter(i=>i>=0).sort((a,b)=>a-b)[0]||0;
    const start=Math.max(0,at-80), end=Math.min(text.length,start+360);
    return (start?'… ':'')+text.slice(start,end)+(end<text.length?' …':'');
  }
  const sourceUrl = row => `${row.doc.url}#page=${row.section.page}`;
  function catalog(domain='',type='') {
    const docs=data.documents.filter(d=>(!domain||d.domain===domain)&&(!type||d.type===type));
    return docs.length?docs.map(d=>`<article class="rs-result"><div class="rs-tags"><span class="tag">${esc(d.type)}</span><span class="rs-domain">${esc(d.domain)}</span></div><h3>${esc(d.name)}</h3><p class="meta">${esc(d.issuer)} · ${esc(d.version)}</p><p>${esc(d.coverage)}</p><a class="btn btn-outline" href="${esc(d.url)}" target="_blank" rel="noopener noreferrer">فتح المصدر الرسمي ↗</a></article>`).join(''):'<div class="empty">لا توجد مصادر مضافة ضمن هذا الفلتر.</div>';
  }
  function page() {
    current={query:'',domain:'',type:'',results:[],limit:10};
    return `<section class="card rs-search-panel"><form onsubmit="RegulationSearch.run(event)" class="rs-form"><label for="regSearch">ما الموضوع الذي تبحث عنه؟</label><div class="rs-search-line"><input id="regSearch" class="input" maxlength="400" placeholder="ابحث بموضوع، كلمة، أو اسم لائحة أو نظام" autocomplete="off"><button class="btn btn-primary" type="submit">بحث</button></div><div class="rs-filters"><div><label for="regDomain">المجال</label><select id="regDomain" class="input" onchange="RegulationSearch.run()"><option value="">جميع المجالات</option>${[...new Set(data.documents.map(d=>d.domain))].map(s=>`<option>${esc(s)}</option>`).join('')}</select></div><div><label for="regType">نوع المرجع</label><select id="regType" class="input" onchange="RegulationSearch.run()"><option value="">جميع الأنواع</option>${[...new Set(data.documents.map(d=>d.type))].map(s=>`<option>${esc(s)}</option>`).join('')}</select></div></div></form></section><section aria-label="نتائج البحث"><div class="section-title rs-heading"><h2 id="regTitle">المراجع المتاحة</h2><span id="regCount" class="meta">${data.documents.length} مصادر</span></div><div id="regResults" class="rs-results" aria-live="polite">${catalog()}</div></section>`;
  }
  function run(event) {
    if(event)event.preventDefault();
    current={query:document.getElementById('regSearch').value.trim(),domain:document.getElementById('regDomain').value,type:document.getElementById('regType').value,limit:10,results:[]};
    current.results=search(current.query,current.domain,current.type);paint();
  }
  function paint() {
    const {query,results,limit,domain,type}=current;
    document.getElementById('regTitle').textContent=query?`نتائج البحث عن «${query}»`:'المراجع المتاحة';
    document.getElementById('regCount').textContent=query?`${results.length} مقطع مطابق في ${new Set(results.map(r=>r.doc.id)).size} مصادر`:'';
    document.getElementById('regResults').innerHTML=!query?catalog(domain,type):!tokens(query).length?'<div class="empty">اكتب موضوعًا محددًا، مثل الترقيات أو حماية البريد الإلكتروني.</div>':!results.length?'<div class="empty"><h3>لم نجد نصًا مناسبًا في المصادر المتاحة</h3><p>جرّب كلمات أخرى أو وسّع الفلاتر. عدم ظهور نتيجة لا يعني عدم وجود حكم نظامي.</p></div>':results.slice(0,limit).map((r,i)=>`<article class="rs-result"><div class="rs-tags"><span class="tag">${esc(r.doc.type)}</span><span class="rs-domain">${esc(r.doc.domain)}</span></div><h3>${esc(r.doc.name)}</h3><p class="meta">${esc(r.doc.issuer)}</p><div class="rs-reference"><b>${esc(r.section.label)}</b><span>صفحة PDF ${r.section.page}</span></div><blockquote dir="auto">${esc(excerpt(r.section.text,query))}</blockquote><div class="rs-actions"><button class="btn btn-soft" onclick="RegulationSearch.open(${i})">عرض النص المسترجع</button><a class="btn btn-outline" href="${esc(sourceUrl(r))}" target="_blank" rel="noopener noreferrer">فتح المصدر الرسمي ↗</a></div></article>`).join('')+(results.length>limit?'<button class="btn btn-soft rs-more" onclick="RegulationSearch.more()">عرض المزيد من النتائج</button>':'');
  }
  function open(i) {
    const r=current.results[i]; if(!r)return;
    document.getElementById('rsDialog')?.remove();
    const el=document.createElement('dialog');el.id='rsDialog';el.className='rs-dialog';
    el.innerHTML=`<div class="rs-dialog-head"><h2>${esc(r.doc.name)}</h2><button class="btn btn-soft" aria-label="إغلاق النص" onclick="document.getElementById('rsDialog').close()">إغلاق ✕</button></div><p class="meta">${esc(r.doc.issuer)} · ${esc(r.doc.version)}</p><h3>${esc(r.section.label)} — صفحة PDF ${r.section.page}</h3><p class="rs-full-text" dir="auto">${esc(r.section.text)}</p><p class="meta">${r.doc.id==='ecc'?'نص عربي من جداول الضوابط؛ حُذفت رموز ترقيم البنود وبعض المصطلحات الإنجليزية من العرض. راجع الصفحة الرسمية للنص الأصلي الكامل.':'نص مستخرج من النسخة المضافة؛ راجع المصدر الرسمي للنص الكامل وما يسبقه ويتبعه.'}</p><a class="btn btn-primary" href="${esc(sourceUrl(r))}" target="_blank" rel="noopener noreferrer">فتح الصفحة في المصدر الرسمي ↗</a>`;
    el.addEventListener('close',()=>el.remove());document.body.append(el);el.showModal();
  }
  function example(q) {document.getElementById('regSearch').value=q;run();}
  function more() {current.limit+=10;paint();}
  return {page,run,search,example,more,open,norm};
})();
