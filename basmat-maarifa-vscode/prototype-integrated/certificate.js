/* شهادة الأثر: قالب معتمد وبيانات الموظف الحالي، دون خدمات خارجية. */
const CERTIFICATE_THRESHOLD = 20;
let certificateFontReady;
function certificatePoints(){
 if(!['employee','reviewer'].includes(state.role)) return 0;
 return state.knowledge.filter(k=>k.status==='published'&&ownsKnowledge(k)).reduce((sum,k)=>sum+Math.max(0,Number(k.uses)||0),0);
}
function certificatePdf(jpeg,width,height){
 const encode=s=>new TextEncoder().encode(s), chunks=[], offsets=[0]; let size=0;
 const add=data=>{const b=typeof data==='string'?encode(data):data; chunks.push(b);size+=b.length;};
 const object=(n,body)=>{offsets[n]=size;add(`${n} 0 obj\n${body}\nendobj\n`);};
 add('%PDF-1.4\n');
 object(1,'<< /Type /Catalog /Pages 2 0 R >>');
 object(2,'<< /Type /Pages /Kids [3 0 R] /Count 1 >>');
 object(3,'<< /Type /Page /Parent 2 0 R /MediaBox [0 0 841.89 595.28] /Resources << /XObject << /Im0 4 0 R >> >> /Contents 5 0 R >>');
 offsets[4]=size;
 add(`4 0 obj\n<< /Type /XObject /Subtype /Image /Width ${width} /Height ${height} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${jpeg.length} >>\nstream\n`);add(jpeg);add('\nendstream\nendobj\n');
 const content='q\n841.89 0 0 595.28 0 0 cm\n/Im0 Do\nQ\n';
 object(5,`<< /Length ${encode(content).length} >>\nstream\n${content}endstream`);
 const start=size;add('xref\n0 6\n0000000000 65535 f \n');
 for(let n=1;n<=5;n++)add(`${String(offsets[n]).padStart(10,'0')} 00000 n \n`);
 add(`trailer\n<< /Size 6 /Root 1 0 R >>\nstartxref\n${start}\n%%EOF`);
 return new Blob(chunks,{type:'application/pdf'});
}
async function drawPersonalCertificate(employee,date=new Date(),employeeId='employee'){
 const template=new Image(); template.src=CERTIFICATE_TEMPLATE;
 await new Promise((resolve,reject)=>{template.onload=resolve;template.onerror=()=>reject(new Error('تعذر تحميل قالب الشهادة'));});
 if(document.fonts && typeof FontFace!=='undefined'){
  if(!certificateFontReady){const font=new FontFace('ArabicCertificate',`url(${CERTIFICATE_FONT})`);certificateFontReady=font.load().then(loaded=>document.fonts.add(loaded)).catch(error=>{certificateFontReady=undefined;throw error;});}
  await certificateFontReady;
 }
 const canvas=document.createElement('canvas');canvas.width=2982;canvas.height=2110;
 const ctx=canvas.getContext('2d');ctx.scale(2,2);ctx.drawImage(template,0,0,1491,1055);
 ctx.fillStyle='#005443';ctx.textAlign='center';ctx.direction='rtl';
 const text=(value,y,size,bold=false,maxWidth=1100)=>{let s=size;do{ctx.font=`${bold?'bold ':''}${s}px ArabicCertificate, Arial, sans-serif`;if(ctx.measureText(value).width<=maxWidth)break;s--;}while(s>16);ctx.fillText(value,745.5,y);};
 text('تُمنح هذه الشهادة إلى',466,34);
 text(employee.name,570,78,true);
 text(employee.dept,647,34);
 text('تقديرًا للمساهمة في مشاركة المعرفة المؤسسية، وما حققته المعارف',716,30);
 text('من استفادة لدى موظفي الإمارة عبر منصة بصمة معرفة.',766,30);
 ctx.font='23px ArabicCertificate, Arial, sans-serif';ctx.textAlign='right';
 ctx.fillText('تاريخ الإصدار: '+date.toLocaleDateString('ar-SA',{timeZone:'Asia/Riyadh',year:'numeric',month:'long',day:'numeric',calendar:'gregory'}),1414,990);
 ctx.textAlign='left';ctx.direction='ltr';
 const id='BM-'+date.getFullYear()+'-'+String(employeeId).replace(/[^a-zA-Z0-9_-]/g,'');
 ctx.fillText(id+' : رقم الشهادة',80,990);
 return canvas;
}
async function downloadCertificate(button){
 if(state.role!=='employee'||certificatePoints()<CERTIFICATE_THRESHOLD){notify('يلزم الحصول على ٢٠ نقطة لتحميل الشهادة');return;}
 const employee={...cu()},employeeId=state.employeeId||'e1';
 if(button)button.disabled=true;
 try{
  const canvas=await drawPersonalCertificate(employee,new Date(),employeeId);
  const binary=atob(canvas.toDataURL('image/jpeg',0.95).split(',')[1]);
  const jpeg=Uint8Array.from(binary,c=>c.charCodeAt(0));
  const url=URL.createObjectURL(certificatePdf(jpeg,canvas.width,canvas.height));
  const a=document.createElement('a');a.href=url;a.download='شهادة-بصمة-معرفة-'+employee.name.replace(/[\\/:*?"<>|]/g,'-')+'.pdf';document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),60000);
  notify('تم تجهيز شهادتك للتحميل');
 }catch(error){console.error(error);notify('تعذر تحميل الشهادة، حاولي مرة أخرى');}
 finally{if(button)button.disabled=false;}
}
