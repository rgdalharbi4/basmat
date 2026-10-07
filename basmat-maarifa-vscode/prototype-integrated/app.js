const seedKnowledge=[

 {id:1,title:'تعذر دخول الموظف لحسابه بعد إعادة تعيين كلمة المرور',owner:'إيمان الحازمي',showName:true,dept:'إدارة تقنية المعلومات',contact:'٢٣٤٥',challenge:'موظف أعاد تعيين كلمة المرور، وبعدها لم يتمكن من الدخول إلى نظام الموارد البشرية، وظهرت له رسالة تفيد بأن الحساب مقفل.',handling:'تم التحقق من هوية الموظف وفحص حالة حسابه في الدليل النشط، وتبيّن أن الحساب أُقفل بسبب محاولات دخول تلقائية باستخدام كلمة المرور القديمة المحفوظة على أجهزته.',solution:['فك قفل حساب الموظف.','مسح كلمة المرور القديمة المحفوظة من المتصفح.','تسجيل الخروج من الحساب في جميع الأجهزة.','تسجيل الدخول مجددًا باستخدام كلمة المرور الجديدة.'],lesson:'عند إعادة تعيين كلمة المرور يجب مسح كلمة المرور القديمة المحفوظة على جميع الأجهزة قبل أول محاولة دخول، لتفادي قفل الحساب مرة أخرى.',keywords:'كلمة المرور، قفل الحساب، إعادة تعيين، دخول',category:'حل',status:'published',rating:4.5,uses:3,regulation:'سياسة أمن المعلومات',date:'2026-09-12'},

 {id:2,title:'الطابعة الشبكية لا تطبع لعدة موظفين في نفس الوقت',owner:'خالد العتيبي',showName:true,dept:'إدارة تقنية المعلومات',contact:'٢٣٤٥',challenge:'عدة موظفين اشتكوا أن الطابعة المشتركة تظهر بحالة غير متصلة ولا تطبع.',handling:'تم التأكد أولًا هل المشكلة عند موظف واحد أو الجميع، ثم فحص خادم الطباعة.',solution:['فحص حالة خادم الطباعة.','إعادة تشغيل خدمة الطباعة على الخادم.','مسح قائمة الانتظار العالقة.'],lesson:'حدّد أولًا هل المشكلة عند مستخدم واحد أو الجميع، لأن ذلك يحدد هل تفحص الجهاز أو الخادم.',keywords:'طابعة، لا تطبع، خادم الطباعة',category:'إجراء',status:'published',rating:4,uses:5,regulation:'سياسة استخدام الأجهزة والبرمجيات',date:'2026-08-20'},

 {id:3,title:'بطء الاتصال بالشبكة الخاصة (VPN) عند العمل عن بعد',owner:'موظف',showName:false,dept:'إدارة تقنية المعلومات',contact:'٢٣٤٥',challenge:'موظف يشتكي أن اتصال VPN بطيء جدًا رغم أن بقية الموظفين لا يواجهون المشكلة.',handling:'تم فحص الخادم وسعة الشبكة، ثم سؤال الموظف عن نوع اتصاله المنزلي.',solution:['فحص الخادم وسعة الشبكة.','التأكد من ازدحام شبكة Wi-Fi المنزلية.','الانتقال إلى تردد آخر أو استخدام كابل شبكة.'],lesson:'اسأل عن نوع الاتصال عند الموظف قبل فحص الخوادم؛ غالبًا تكون المشكلة محلية.',keywords:'VPN، بطء، عمل عن بعد، إنترنت',category:'تجربة',status:'published',rating:3.5,uses:2,regulation:'سياسة أمن المعلومات',date:'2026-07-15'},

 {id:4,title:'طلب تثبيت برنامج غير معتمد على جهاز الموظف',owner:'سارة العمري',showName:true,dept:'إدارة تقنية المعلومات',contact:'٢٣٤٥',challenge:'موظف يحتاج برنامجًا للعمل ولا يستطيع تثبيته لأنه لا يملك الصلاحية.',handling:'طُلب منه رفع طلب رسمي بدلًا من التثبيت المباشر، مع توضيح سبب الحاجة إلى البرنامج.',solution:['استلام طلب رسمي من الموظف يتضمن اسم البرنامج وسبب الحاجة إليه.','التحقق من أن البرنامج مناسب لمتطلبات العمل ولا يوجد بديل معتمد له.','إرسال البرنامج إلى إدارة أمن المعلومات لمراجعته والتأكد من سلامته.','بعد الموافقة، تثبيت البرنامج على جهاز الموظف بواسطة الجهة التقنية المختصة.'],lesson:'كل برنامج جديد يجب أن يمر بطلب رسمي ومراجعة أمنية، حتى لو كان الموظف مستعجلًا.',keywords:'تثبيت، برنامج، صلاحيات، طلب',category:'إجراء',status:'published',rating:4.5,uses:33,chatViews:45,regulation:'سياسة استخدام الأجهزة والبرمجيات',date:'2026-09-28'},

 {id:5,title:'تجهيز جهاز موظف جديد قبل أول يوم عمل',owner:'نورة الحربي',showName:true,dept:'إدارة تقنية المعلومات',contact:'٢٣٤٥',challenge:'الموظفون الجدد يستلمون أجهزتهم متأخرين، ويضيع أول يوم عمل في التجهيز.',handling:'تم إعداد قائمة تحقق موحدة تشمل الجهاز والحسابات والبرامج الأساسية.',solution:['استلام بيانات الموظف الجديد مسبقًا.','تجهيز الجهاز والحسابات والبرامج الأساسية.','اختبار تسجيل الدخول قبل التسليم.'],lesson:'التجهيز المسبق مع قائمة تحقق ثابتة يوفر أول يوم كامل للموظف الجديد.',keywords:'موظف جديد، تجهيز، جهاز، حساب',category:'درس مستفاد',status:'published',rating:5,uses:8,regulation:'لائحة إدارة الأصول التقنية',date:'2026-06-04'},

 {id:6,title:'تأخر البت في طلبات النقل الداخلي بين الإدارات',owner:'منى الدوسري',showName:true,dept:'إدارة الموارد البشرية',contact:'١١٢٠',challenge:'تراكمت طلبات نقل داخلي لعدة أشهر دون رد، مما سبب استياء الموظفين المتقدمين.',handling:'تم حصر الطلبات المتأخرة، وتصنيفها حسب تاريخ التقديم، وتحديد موعد أسبوعي ثابت للبت فيها مع الإدارات المعنية.',solution:['حصر جميع طلبات النقل المعلّقة في قائمة واحدة.','تحديد موعد أسبوعي ثابت لمراجعتها مع الإدارة المعنية.','إرسال رد للموظف خلال ٥ أيام عمل من تاريخ المراجعة.'],lesson:'تحديد موعد دوري ثابت لمراجعة الطلبات المتراكمة يمنع تكدسها ويحسّن تجربة الموظف.',keywords:'نقل داخلي، طلب، تأخير، موارد بشرية',category:'إجراء',status:'published',rating:4,uses:6,regulation:'لائحة الموارد البشرية',date:'2026-07-02'},

 {id:7,title:'استفسارات متكررة من الموظفات حول آلية طلب إجازة الأمومة',owner:'هيا الزهراني',showName:true,dept:'إدارة الموارد البشرية',contact:'١١٢٥',challenge:'تكرر استفسار عدة موظفات عن خطوات طلب إجازة الأمومة ومدتها ووقت تقديم الطلب المناسب.',handling:'تم إعداد إجابة موحدة توضح الخطوات والمستندات المطلوبة ومدة الإجازة النظامية، ومشاركتها مع الموظفات عبر البريد الداخلي.',solution:['تقديم طلب الإجازة قبل الولادة بمدة لا تقل عن أسبوعين.','إرفاق التقرير الطبي المحدد لتاريخ الولادة المتوقع.','تحديد مدة الإجازة وفق اللائحة، مع إمكانية التمديد بطلب إضافي.'],lesson:'الأسئلة المتكررة عن نفس الإجراء تستحق صياغة إجابة موحدة واحدة بدل الرد على كل استفسار منفردًا.',keywords:'إجازة أمومة، موارد بشرية، طلب، موظفة',category:'درس مستفاد',status:'published',rating:4.5,uses:9,regulation:'لائحة الموارد البشرية',date:'2026-07-02'},

 {id:8,title:'تأخر مراجعة عقد مع مورد خارجي قبل التوقيع',owner:'فيصل القرني',showName:true,dept:'إدارة الشؤون القانونية',contact:'١٣١٠',challenge:'عقد مع مورد كان ينتظر التوقيع، وتأخرت المراجعة القانونية أكثر من أسبوعين دون سبب واضح لصاحب الطلب.',handling:'تم التواصل مع صاحب الطلب لتوضيح مراحل المراجعة المتبقية، وتحديد موعد تسليم نهائي بعد تنسيق مباشر مع المستشار القانوني المختص.',solution:['حصر الملاحظات القانونية على العقد في قائمة واحدة.','التواصل المباشر مع صاحب الطلب لتوضيح سبب التأخير والموعد المتوقع.','تحديد موعد نهائي واضح للرد على العقد.'],lesson:'إشعار صاحب طلب المراجعة بمراحل العمل المتبقية يقلل الاستفسارات المتكررة ويحسّن الشفافية.',keywords:'عقد، مراجعة قانونية، مورد، توقيع',category:'إجراء',status:'published',rating:4,uses:5,regulation:'لائحة المراسلات والتوثيق الإداري',date:'2026-08-11'},

 {id:9,title:'استفسار متكرر عن صلاحية توقيع المذكرات الداخلية',owner:'موظف',showName:false,dept:'إدارة الشؤون القانونية',contact:'١٣١٠',challenge:'عدة إدارات ترسل مذكرات داخلية بدون التأكد من صلاحية التوقيع المطلوبة حسب نوع المذكرة ودرجتها.',handling:'تم توضيح مصفوفة الصلاحيات المعتمدة لكل نوع مذكرة، وربطها بأمثلة عملية لتسهيل الرجوع إليها.',solution:['تحديد نوع المذكرة ودرجتها (عادية/سرية/عاجلة).','مطابقة النوع مع مصفوفة صلاحيات التوقيع المعتمدة.','الرجوع للشؤون القانونية عند وجود أي التباس.'],lesson:'مشاركة مصفوفة الصلاحيات بشكل مرئي وواضح يقلل الأخطاء الإجرائية المتكررة في المراسلات.',keywords:'توقيع، مذكرة، صلاحية، مراسلات',category:'درس مستفاد',status:'published',rating:4.5,uses:7,regulation:'لائحة المراسلات والتوثيق الإداري',date:'2026-06-20'},

 {id:10,title:'تكرار نفس الملاحظات في تقارير تقييم الأداء المؤسسي',owner:'عبير الشهري',showName:true,dept:'إدارة التميز المؤسسي',contact:'١٤٠٥',challenge:'لاحظ فريق التميز تكرار نفس الملاحظات في تقارير التقييم الفصلية لعدة إدارات دون معالجة جذرية.',handling:'تم تصنيف الملاحظات المتكررة في سجل موحد، وربط كل ملاحظة بخطة تحسين محددة ومتابعة تنفيذها فصليًا.',solution:['حصر الملاحظات المتكررة عبر التقارير السابقة.','تصنيفها حسب الإدارة ونوع الفجوة.','ربط كل ملاحظة بخطة تحسين وموعد متابعة.'],lesson:'بدون سجل موحد للملاحظات المتكررة، يصعب قياس تحسّن الإدارات من تقييم لآخر.',keywords:'تقييم أداء، تميز مؤسسي، ملاحظات متكررة',category:'مبادرة',status:'published',rating:4,uses:4,regulation:'دليل مؤشرات الأداء المؤسسي',date:'2026-05-18'},

 {id:11,title:'صعوبة توحيد نماذج قياس رضا المستفيدين بين الإدارات',owner:'تركي آل الشيخ',showName:true,dept:'إدارة التميز المؤسسي',contact:'١٤٠٥',challenge:'كل إدارة تستخدم نموذج استبيان رضا مختلف، مما صعّب مقارنة النتائج على مستوى الجهة ككل.',handling:'تم تصميم نموذج استبيان موحد بمقياس ثابت من ٥ درجات، واعتماده كنموذج رسمي لجميع الإدارات.',solution:['تحديد المحاور المشتركة المطلوب قياسها في جميع الإدارات.','توحيد مقياس التقييم (من ١ إلى ٥) لكل المحاور.','تعميم النموذج الموحد واعتماده بدل النماذج الفردية.'],lesson:'توحيد أداة القياس قبل جمع البيانات أهم من محاولة توحيدها بعد التحليل.',keywords:'رضا المستفيدين، استبيان، تميز مؤسسي، توحيد',category:'حل',status:'published',rating:5,uses:11,regulation:'دليل مؤشرات الأداء المؤسسي',date:'2026-09-03'},

 {id:12,title:'تأخر الرد على استفسارات المواطنين حول إجراء خدمة معينة',owner:'سلطان العنزي',showName:true,dept:'الإدارة العامة للشؤون المحلية',contact:'١٥٢٠',challenge:'وردت شكاوى من مواطنين بسبب تأخر الرد على استفساراتهم حول خطوات إنجاز معاملة معينة.',handling:'تم إعداد دليل إجابات سريعة لأكثر ١٠ استفسارات تكرارًا، وتوزيعه على موظفي التواصل المباشر مع المواطنين.',solution:['حصر أكثر الاستفسارات تكرارًا من سجل المكالمات والزيارات.','إعداد إجابة موحدة ومختصرة لكل استفسار.','تدريب موظفي الاستقبال على الدليل مباشرة.'],lesson:'تحليل الاستفسارات المتكررة دوريًا يسمح بإعداد ردود جاهزة تقلل زمن الانتظار على المواطن.',keywords:'استفسار مواطن، خدمة، شؤون محلية، زمن استجابة',category:'إجراء',status:'published',rating:4.5,uses:14,regulation:'لائحة الدعم الفني ومستويات الخدمة',date:'2026-08-27'},

 {id:13,title:'تكرر أخطاء تعبئة نموذج طلب خدمة ميدانية من المستفيدين',owner:'موظف',showName:false,dept:'الإدارة العامة للشؤون المحلية',contact:'١٥٢٠',challenge:'نسبة كبيرة من نماذج طلب الخدمة الميدانية ترجع للمستفيد بسبب نقص أو خطأ في التعبئة.',handling:'تمت إعادة تصميم النموذج بإضافة أمثلة توضيحية بجانب كل حقل، وتعليمات مختصرة في أعلى النموذج.',solution:['مراجعة أكثر الحقول التي يتكرر فيها الخطأ.','إضافة مثال توضيحي أو ملاحظة قصيرة بجانب كل حقل صعب.','اختبار النموذج المعدّل مع عدد محدود قبل التعميم.'],lesson:'إضافة أمثلة توضيحية داخل النموذج نفسه أكثر فاعلية من كتيب تعليمات منفصل نادرًا ما يُقرأ.',keywords:'نموذج، طلب خدمة، تعبئة، أخطاء متكررة',category:'تجربة',status:'published',rating:4,uses:8,regulation:'لائحة الدعم الفني ومستويات الخدمة',date:'2026-07-29'},

 {id:14,title:'تنسيق مواعيد الزيارات الرسمية بين عدة جهات دون تعارض',owner:'ريان البقمي',showName:true,dept:'مكتب وكيل الإمارة',contact:'١٠٠٥',challenge:'حدث تعارض بين موعدين لزيارات رسمية بسبب عدم وجود تقويم موحد مشترك بين المكاتب المعنية.',handling:'تم اعتماد تقويم إلكتروني مشترك تضاف إليه كل زيارة رسمية فور تحديدها من أي جهة معنية.',solution:['اعتماد تقويم إلكتروني واحد مشترك بين جميع المكاتب المعنية.','تسجيل أي موعد زيارة فور تثبيته مباشرة.','مراجعة التقويم أسبوعيًا قبل تثبيت أي موعد جديد.'],lesson:'تعدد التقاويم المنفصلة بين المكاتب هو السبب الأكثر شيوعًا لتعارض المواعيد الرسمية.',keywords:'تنسيق مواعيد، زيارة رسمية، تقويم مشترك',category:'حل',status:'published',rating:4.5,uses:6,regulation:'لائحة المراسلات والتوثيق الإداري',date:'2026-06-09'},

 {id:15,title:'تأخر تحويل المعاملات الواردة بين المكاتب الداخلية',owner:'موظف',showName:false,dept:'مكتب وكيل الإمارة',contact:'١٠٠٥',challenge:'بعض المعاملات الواردة تأخذ وقتًا طويلاً للوصول للمكتب المختص بسبب تحويلها يدويًا بين عدة موظفين.',handling:'تم تفعيل خطوة تحويل مباشرة من نقطة الاستلام الأولى إلى المكتب المختص مباشرة، دون تمريرها عبر وسطاء.',solution:['تحديد المكتب المختص بكل نوع معاملة بشكل مسبق.','تحويل المعاملة مباشرة من نقطة الاستلام الأولى للمكتب المختص.','تأكيد الاستلام إلكترونيًا بدل التحويل الورقي.'],lesson:'كل حلقة وسيطة في تحويل المعاملة تضيف وقت انتظار غير ضروري؛ التحويل المباشر يختصر الزمن بشكل ملحوظ.',keywords:'معاملات واردة، تحويل، مكتب، تأخير',category:'إجراء',status:'published',rating:4,uses:5,regulation:'لائحة المراسلات والتوثيق الإداري',date:'2026-09-15'}

];

const regulations={

 'سياسة أمن المعلومات':'https\://example.com/nuzum/infosec',

 'سياسة استخدام الأجهزة والبرمجيات':'https\://example.com/nuzum/devices',

 'لائحة إدارة الأصول التقنية':'https\://example.com/nuzum/assets',

 'لائحة الموارد البشرية':'https\://example.com/nuzum/hr',

 'لائحة المراسلات والتوثيق الإداري':'https\://example.com/nuzum/correspondence',

 'دليل مؤشرات الأداء المؤسسي':'https\://example.com/nuzum/kpi-guide'

};

const regulationsList=[

 {name:'سياسة أمن المعلومات',type:'سياسة',desc:'ضوابط حماية الحسابات والبيانات وكلمات المرور والوصول عن بُعد.',keywords:'كلمة المرور حساب دخول قفل VPN أمن حماية بيانات صلاحيات هوية',url:'https\://example.com/nuzum/infosec'},

 {name:'سياسة استخدام الأجهزة والبرمجيات',type:'سياسة',desc:'شروط استخدام أجهزة العمل وتثبيت البرامج المعتمدة.',keywords:'جهاز طابعة برنامج تثبيت برمجيات حاسب صيانة طباعة',url:'https\://example.com/nuzum/devices'},

 {name:'لائحة إدارة الأصول التقنية',type:'لائحة',desc:'تنظيم تسلّم الأصول التقنية وتجهيزها وإعادتها وجردها.',keywords:'أصول جهاز تجهيز موظف جديد عهدة جرد تسليم',url:'https\://example.com/nuzum/assets'},

 {name:'ضوابط العمل عن بُعد',type:'لائحة',desc:'متطلبات الاتصال الآمن والعمل خارج مقر الجهة.',keywords:'عمل عن بعد VPN اتصال إنترنت شبكة منزل',url:'https\://example.com/nuzum/remote'},

 {name:'نظام الأمن السيبراني',type:'نظام',desc:'الإطار العام لحماية الأنظمة والشبكات من التهديدات.',keywords:'أمن سيبراني اختراق شبكة تهديد فيروس تصيد حماية',url:'https\://example.com/nuzum/cyber'},

 {name:'سياسة حماية البيانات الشخصية',type:'سياسة',desc:'تنظيم جمع البيانات الشخصية ومعالجتها ومشاركتها.',keywords:'بيانات شخصية خصوصية موظف معلومات سرية',url:'https\://example.com/nuzum/privacy'},

 {name:'لائحة الدعم الفني ومستويات الخدمة',type:'لائحة',desc:'آلية رفع طلبات الدعم وأزمنة الاستجابة المستهدفة.',keywords:'دعم فني بلاغ طلب تذكرة استجابة خدمة',url:'https\://example.com/nuzum/support'},

 {name:'سياسة النسخ الاحتياطي واستمرارية الأعمال',type:'سياسة',desc:'إجراءات حفظ النسخ الاحتياطية والتعافي عند الأعطال.',keywords:'نسخ احتياطي استرجاع تعافي عطل خادم توقف',url:'https\://example.com/nuzum/backup'},

 {name:'لائحة الموارد البشرية',type:'لائحة',desc:'تنظيم إجراءات التوظيف والنقل والإجازات والتقييم الوظيفي.',keywords:'نقل داخلي ترقية إجازة أمومة تقييم وظيفي توظيف موارد بشرية',url:'https\://example.com/nuzum/hr'},

 {name:'لائحة المراسلات والتوثيق الإداري',type:'لائحة',desc:'تنظيم تحرير المراسلات الرسمية وتوثيقها وتحويلها بين الإدارات والمكاتب.',keywords:'مراسلات تعميم خطاب توقيع مذكرة صلاحية توثيق تحويل معاملة زيارة موعد',url:'https\://example.com/nuzum/correspondence'},

 {name:'دليل مؤشرات الأداء المؤسسي',type:'دليل',desc:'توحيد معايير قياس الأداء والجودة ورضا المستفيدين بين الإدارات.',keywords:'أداء مؤشر جودة رضا مستفيد تميز مؤسسي تقييم استبيان',url:'https\://example.com/nuzum/kpi-guide'}

];

function regNorm(t){return String(t).replace(/[\u064B-\u0652\u0640]/g,'').replace(/[أإآ]/g,'ا').replace(/ى/g,'ي').replace(/ة/g,'ه').toLowerCase()}

function regulationsPage(){return shell(`${crumb('ابحث في اللوائح والأنظمة')}${pageHead('ابحث في اللوائح والأنظمة','ابحث بموضوع أو كلمة أو اسم مرجع، سواء ارتبط بمعرفة في المنصة أو لم يُستخدم من قبل.')}${RegulationSearch.page()}`)}

const employees={

 e1:{name:'سارة العمري',first:'سارة',ext:'٢٣٤٥',title:'موظفة · إدارة تقنية المعلومات',dept:'إدارة تقنية المعلومات',female:true},

 e2:{name:'خالد العتيبي',first:'خالد',ext:'٢٣٤٥',title:'موظف · إدارة تقنية المعلومات',dept:'إدارة تقنية المعلومات',female:false},

 e3:{name:'منى الدوسري',first:'منى',ext:'١١٢٠',title:'موظفة · إدارة الموارد البشرية',dept:'إدارة الموارد البشرية',female:true},

 e4:{name:'فيصل القرني',first:'فيصل',ext:'١٣١٠',title:'موظف · إدارة الشؤون القانونية',dept:'إدارة الشؤون القانونية',female:false},

 e5:{name:'عبير الشهري',first:'عبير',ext:'١٤٠٥',title:'موظفة · إدارة التميز المؤسسي',dept:'إدارة التميز المؤسسي',female:true},

 e6:{name:'سلطان العنزي',first:'سلطان',ext:'١٥٢٠',title:'موظف · الإدارة العامة للشؤون المحلية',dept:'الإدارة العامة للشؤون المحلية',female:false},

 e7:{name:'ريان البقمي',first:'ريان',ext:'١٠٠٥',title:'موظف · مكتب وكيل الإمارة',dept:'مكتب وكيل الإمارة',female:false}

};

const profiles={

 reviewer:{name:'ريم القحطاني',first:'ريم',ext:'٢٣٤٦',title:'مراجع معرفي',female:true},

 manager:{name:'عبدالله الشمري',display:'م. عبدالله الشمري',first:'عبدالله',ext:'٢٠٠١',title:'مدير إدارة تقنية المعلومات',female:false}

};

function reviewerProfile(){const dept=state.reviewerDepartment||Object.values(employees)[0].dept;return {...profiles.reviewer,dept,title:'مراجع معرفي · '+dept,name:dept===Object.values(employees)[0].dept?profiles.reviewer.name:'مراجع '+dept};}
function currentPersonId(){return state.role==='reviewer'?'reviewer:'+cu().dept:state.employeeId||'e1';}
function canReview(k){return Boolean(k&&state.role==='reviewer'&&(k.reviewDepartment||k.dept)===cu().dept);}

function ownsKnowledge(k){return k.ownerId?k.ownerId===currentPersonId():k.owner===cu().name;}
function cu(){if(state.role==='reviewer')return reviewerProfile();if(state.role==='employee')return employees[state.employeeId||'e1'];return profiles[state.role]||employees.e1}

const app=document.getElementById('app'),modal=document.getElementById('modal'),toast=document.getElementById('toast');

let state=JSON.parse(localStorage.getItem('basmat-state')||'null')||{knowledge:seedKnowledge,role:null,user:'سارة',route:'login',notifications:{employee:[],reviewer:[{title:'معرفة جديدة تحتاج إلى المراجعة',body:'طلب تثبيت برنامج غير معتمد على جهاز الموظف',id:4}],manager:[]},benefits:0,notifOpen:false};

function save(){localStorage.setItem('basmat-state',JSON.stringify(state))}

function go(route,id){
 const samePage=state.route===route&&(state.current||null)===(id||null);
 if(!samePage&&state.route&&state.route!=='login'){
  state.navStack=state.navStack||[];
  state.navStack.push({route:state.route,id:state.current||null});
  if(state.navStack.length>30)state.navStack.shift();
 }
 state.route=route;state.current=id||null;state.notifOpen=false;save();render();scrollTo(0,0)
}

function goBack(){
 if(state.role==='reviewer'&&state.route==='review-detail'){state.reviewerHomeTab='review';go('employee-home');return;}

 state.navStack=state.navStack||[];
 const previous=state.navStack.pop();
 if(previous){state.route=previous.route;state.current=previous.id||null}
 else state.route=state.role==='reviewer'?'reviewer-home':'employee-home';
 state.notifOpen=false;save();render();scrollTo(0,0)
}

function notify(msg){toast.textContent=msg;toast.classList.add('show');setTimeout(()=>toast.classList.remove('show'),2600)}

function statusText(s){return{published:'منشورة',review:'قيد المراجعة',returned:'أعيدت للتعديل',draft:'مسودة',archived:'مؤرشفة',rejected:'مرفوضة'}[s]||s}

function icon(i){return `<span aria-hidden="true">${i}</span>`}

function header(){let ns=visibleNotifications(),u=cu();return `<header class="header"><div class="brand"><img class="logo-img" src="logo.png" alt="بصمة معرفة"><div class="brand-text"><span>بصمة معرفة</span><small>بوابة إدارة الأثر المعرفي</small></div></div><div class="header-side"><button class="bell" onclick="toggleNotifications()" aria-label="الإشعارات">${svg('bell')}${ns.length?`<i class="badge">${ns.length}</i>`:''}</button><div class="user-pill"><div class="avatar">${svg('user')}</div><div class="user-info"><b>${u.display||u.name}</b><small>${u.title}</small></div></div><button class="logout" onclick="logout()">تسجيل الخروج ${svg('logout')}</button></div></header>${state.notifOpen?notificationsPanel(ns):''}`}

function notificationsPanel(ns){return `<aside class="notif-panel knowledge-notifications" aria-label="الإشعارات"><div class="notification-panel-head"><h2>الإشعارات</h2><button class="close" onclick="toggleNotifications()" aria-label="إغلاق الإشعارات">×</button></div>${ns.length?ns.map(({n,index})=>notificationCard(n,index)).join(''):'<div class="empty">لا توجد إشعارات جديدة</div>'}</aside>`}

function escapeKnowledge(value){return String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
function visibleNotifications(){return (state.notifications[state.role]||[]).map((n,index)=>({n,index})).filter(({n})=>{if(state.role!=='employee')return true;const k=state.knowledge.find(k=>k.id===n.id);return n.recipientId?n.recipientId===state.employeeId:!k||k.owner===cu().name})}
function addKnowledgeNotification(role,k,type){
 const titles={submitted:'معرفة جديدة تحتاج إلى المراجعة',resubmitted:'تمت إعادة إرسال المعرفة بعد التعديل',returned:'أُعيدت معرفتك للتعديل',published:'تم اعتماد ونشر معرفتك',rejected:'تم رفض معرفتك'};
 state.notifications[role]=state.notifications[role]||[];
 state.notifications[role].unshift({title:titles[type],body:k.title,id:k.id,type,owner:k.owner,recipientId:role==='employee'?k.ownerId:undefined,reason:type==='returned'?k.returnReason:type==='rejected'?k.rejectReason:undefined,createdAt:new Date().toISOString()});
}
function notificationCard(n,index){
 const k=state.knowledge.find(k=>k.id===n.id),type=n.type||(state.role==='reviewer'?(/تعديل/.test(n.title)?'resubmitted':'submitted'):/رفض/.test(n.title)?'rejected':/تعديل/.test(n.title)?'returned':'published');
 const title=escapeKnowledge(n.body||k?.title||''),owner=escapeKnowledge(n.owner||k?.owner||'الموظف'),reason=escapeKnowledge(n.reason||(type==='returned'?k?.returnReason:k?.rejectReason)||'');
 const close=`<button class="close notification-dismiss" onclick="dismissNotification(${index})" aria-label="إزالة الإشعار">×</button>`;
 if(type==='submitted'||type==='resubmitted')return `<article class="knowledge-notification reviewer-notification"><div class="notification-top"><span class="notification-chip">${type==='resubmitted'?'تحديث جديد':'معرفة جديدة'}</span><span class="notification-time">${n.createdAt?new Intl.DateTimeFormat('ar-SA',{day:'numeric',month:'short',hour:'numeric',minute:'2-digit'}).format(new Date(n.createdAt)):'جديد'}</span>${close}</div><h3>${type==='resubmitted'?'تمت إعادة إرسال المعرفة بعد التعديل':'وصلت معرفة جديدة للمراجعة'}</h3><p>${type==='resubmitted'?'أعاد':'أرسل'} <b>${owner}</b> ${type==='resubmitted'?'إرسال ':''}معرفة <b>«${title}»</b>${type==='resubmitted'?' بعد تنفيذ التعديلات المطلوبة':''}، وهي جاهزة للمراجعة.</p><button class="btn btn-primary w100" onclick="openNotification(${index})">مراجعة المعرفة ${svg('book')}</button></article>`;
 const returned=type==='returned',rejected=type==='rejected';
 return `<article class="knowledge-notification ${returned?'notification-warning':rejected?'notification-rejected':'notification-published'}">${close}<div class="notification-content"><div class="notification-symbol ${returned?'warning':rejected?'danger':'success'}">${returned?'⚠':rejected?'×':'✓'}</div><div class="notification-copy"><div class="notification-title"><h3>${returned?'أُعيدت معرفتك للتعديل':rejected?'تم رفض معرفتك':'تم اعتماد ونشر معرفتك'}</h3>${returned?'<span class="notification-chip warning">تحتاج إلى إجراء</span>':''}</div><h4>${title}</h4><p>${returned?'أعاد المراجع المعرفي معرفتك لاستكمال بعض التعديلات قبل اعتمادها. يمكنك الاطلاع على ملاحظته وتعديل المعرفة ثم إعادة إرسالها للمراجعة.':rejected?'لم تُعتمد معرفتك للنشر. يمكنك الاطلاع على سبب الرفض أدناه.':'تم اعتماد معرفتك ونشرها بنجاح، وأصبحت متاحة للموظفين في منصة بصمة معرفة.'}</p>${reason&&(returned||rejected)?`<div class="notification-reason"><b>${returned?'ملاحظة المراجع':'سبب الرفض'}:</b><br>${reason}</div>`:''}<button class="${returned?'btn btn-primary':'notification-link'}" onclick="openNotification(${index})">${returned?'تعديل المعرفة':rejected?'عرض تفاصيل المعرفة':'عرض المعرفة'} <span aria-hidden="true">‹</span></button></div></div></article>`;
}
function dismissNotification(index){state.notifications[state.role].splice(index,1);save();render()}
function showKnowledgeSuccess({title,message,note='',badge='',reviewer=false,danger=false}){
 modal.innerHTML=`<section class="modal knowledge-success ${reviewer?'reviewer-success':''}" role="dialog" aria-modal="true" aria-labelledby="knowledge-success-title"><div class="knowledge-success-icon ${danger?'danger':''}">${danger?'×':'✓'}</div>${badge?`<span class="notification-chip ${danger?'danger':'warning'}">${escapeKnowledge(badge)}</span>`:''}<h2 id="knowledge-success-title">${escapeKnowledge(title)}</h2><p>${escapeKnowledge(message)}</p>${note?`<div class="knowledge-success-note">${escapeKnowledge(note)}</div>`:''}<div class="knowledge-success-actions">${reviewer?`<button class="btn btn-primary w100" onclick="closeModal();state.reviewerHomeTab='review';go('employee-home')">العودة إلى قائمة المعارف</button>`:`<button class="btn btn-primary w100" onclick="closeModal();go('impact')">الانتقال إلى أثري المعرفي</button><button class="btn btn-outline w100" onclick="closeModal();go('employee-home')">العودة إلى الرئيسية</button>`}</div></section>`;
 modal.classList.remove('hidden');
}

function pageBackButton(){
 const mainPages=['login','employee-home','reviewer-home','manager-home'];
 if(mainPages.includes(state.route))return '';
 return `<div class="page-back"><button class="btn btn-outline back-button" onclick="goBack()">${svg('arrowRight')} رجوع</button></div>`
}

function shell(content){return `<div class="shell">${header()}<main class="container">${content}${pageBackButton()}</main></div>`}

function crumb(text){return `<div class="crumb"><button class="crumb-home" onclick="go('employee-home')">الرئيسية</button> ← <b>${text}</b></div>`}

function pageHead(title,desc='',actions=''){return `<div class="page-head"><div><h1>${title}</h1>${desc?`<p>${desc}</p>`:''}</div>${actions?`<div class="actions">${actions}</div>`:''}</div>`}

function login(){return `<section class="login-page"><div class="login-card"><div class="login-brand"><img class="logo-img login-logo" src="logo.png" alt=""><h1>بصمة معرفة</h1></div><div class="login-body"><div class="tabs"><button id="empTab" class="tab active" onclick="setLoginRole('employee')">موظف</button><button id="revTab" class="tab" onclick="setLoginRole('reviewer')">مراجع معرفي</button><button id="mgrTab" class="tab" onclick="setLoginRole('manager')">مدير الإدارة</button></div><div id="empSelectWrap" class="field"><label>اختر الموظف (تجريبي)</label><select id="empSelect" class="input">${Object.entries(employees).map(([id,e])=>`<option value="${id}">${e.name} — ${e.dept}</option>`).join('')}</select></div><div class="field"><label>الرقم الوظيفي</label><input class="input" value="10234" placeholder="أدخل الرقم الوظيفي"></div><div class="field"><label>كلمة المرور</label><input type="password" class="input" value="12345678" placeholder="أدخل كلمة المرور"></div><button class="btn btn-gold w100" onclick="doLogin()">تسجيل الدخول</button></div></div></section>`}

let loginRole='employee';function setLoginRole(r){loginRole=r;document.getElementById('empTab').classList.toggle('active',r==='employee');document.getElementById('revTab').classList.toggle('active',r==='reviewer');document.getElementById('mgrTab').classList.toggle('active',r==='manager');document.getElementById('empSelectWrap').classList.toggle('hidden',r!=='employee')}function doLogin(){state.role=loginRole;if(loginRole==='employee'){const sel=document.getElementById('empSelect');state.employeeId=sel?sel.value:'e1'}go('employee-home')}function logout(){state.role=null;loginRole='employee';go('login')}

function employeeHome(){

 let published=state.knowledge.filter(k=>k.status==='published').sort((a,b)=>String(b.publishedAt||b.date||'').localeCompare(String(a.publishedAt||a.date||''))||b.id-a.id).slice(0,3);

 let regulationPrompt='ابحث بموضوع أو كلمة في جميع المراجع المتاحة، واعرض النص والمصدر الرسمي.';

 let regulationAction='ابحث الآن';

 let managerCard=state.role==='manager'?`<div class="card feature clickable" onclick="go('manager-home')"><div class="feature-icon">▥</div><h3>المؤشرات</h3><p>اطّلع على مؤشرات المعرفة والأداء.</p></div>`:'';

 return shell(`${pageHead(cu().female?'مرحبًا بكِ في بصمة معرفة':'مرحبًا بك في بصمة معرفة',cu().female?'اختاري الخدمة التي تحتاجينها وابدئي مباشرة.':'اختر الخدمة التي تحتاجها وابدأ مباشرة.')}

 ${['employee','reviewer'].includes(state.role)?`<div class="home-points-row"><button class="home-points" onclick="go('impact')" aria-label="نقاطي: ${certificatePoints()}، عرض أثري المعرفي"><span class="home-points-symbol" aria-hidden="true">★</span><span><small>نقاطي</small><strong>${new Intl.NumberFormat('ar-SA').format(certificatePoints())} <span>نقطة</span></strong></span><span class="home-points-arrow" aria-hidden="true">‹</span></button></div>`:''}<div class="reg-banner" onclick="go('regulations-page')"><div class="reg-banner-icon">⚖</div><div class="reg-banner-text"><h3>ابحث في اللوائح والأنظمة</h3><p>${regulationPrompt}</p></div><span class="reg-banner-go">${regulationAction} ‹</span></div>

 <div class="grid grid-4 home-features">

  <div class="card feature clickable" onclick="go('submit')"><div class="feature-icon">✎</div><h3>بصمتي</h3><p>وثّقي خبرتك وشاركي معرفتك.</p></div>

  <div class="card feature clickable" onclick="go('ask')"><div class="feature-icon">◌</div><h3>اسأل خبيرًا</h3><p>اكتبي سؤالك وابحث في المعرفة المعتمدة.</p></div>

  <div class="card feature clickable" onclick="go('minute')"><div class="feature-icon">▶</div><h3>دقيقة معرفة</h3><p>شاهدي محتوى معرفيًا مختصرًا.</p></div>

  <div class="card feature clickable" onclick="go('browse')"><div class="feature-icon">▤</div><h3>تصفّح المعرفة</h3><p>استعرضي جميع المعارف المنشورة.</p></div>

  ${managerCard}

 </div>

 <div class="home-lower">

  <section class="home-knowledge">

   <div class="section-title"><h2>أحدث المعارف</h2><button class="btn btn-soft" onclick="go('browse')">عرض الكل</button></div>

   <div class="list">${published.map(k=>knowledgeRow(k)).join('')}</div>

  </section>

  <aside class="home-impact">

   <div class="section-title"><h2>الأثر المعرفي</h2><span class="impact-star">★</span></div>

   <div class="impact-card featured"><span class="tag">خبير الشهر ★</span><h3>أحمد المطيري</h3><p>إدارة تقنية المعلومات</p><strong>٣٦ استفادة</strong></div>

   <div class="impact-card"><span class="tag">وسام الأثر المعرفي</span><h3>إيمان الحازمي</h3><p>«لمعرفتها الأعلى استفادة وتقييمًا»</p></div>

   <button class="btn btn-outline w100" onclick="go('impact')">عرض الأثر المعرفي</button>

  </aside>

 </div>`)

}

function knowledgeRow(k){return `<div class="card knowledge-row"><div class="feature-icon">▤</div><div class="grow"><h3>${k.title}</h3><div class="meta"><span>${k.dept}</span><span class="tag">${k.category}</span><span>★ ${k.rating||'جديد'}</span><span>تاريخ النشر: ${formatPublishDate(k.publishedAt||k.date)}</span></div></div><button class="btn btn-gold" onclick="go('detail',${k.id})">عرض المعرفة ‹</button></div>`}

function formatPublishDate(date){if(!date)return 'غير متوفر';const d=new Date(date.length===10?date+'T12:00:00':date);return Number.isNaN(d.getTime())?'غير متوفر':new Intl.DateTimeFormat('ar-SA-u-ca-gregory',{day:'numeric',month:'long',year:'numeric',timeZone:'Asia/Riyadh'}).format(d);}

function formatMonthYear(date){if(!date)return'';return new Intl.DateTimeFormat('ar-SA-u-ca-gregory',{month:'long',year:'numeric'}).format(new Date(`${date.slice(0,7)}-01T12:00:00`))}

function browse(){let pubs=state.knowledge.filter(k=>['published','archived'].includes(k.status)),months=[...new Set(pubs.map(k=>k.date.slice(0,7)))].sort().reverse();return shell(`${crumb('تصفح المعرفة')}${pageHead('تصفّح المعرفة','استعرض المعارف المؤسسية المعتمدة واطّلع على تفاصيلها.')}<div class="filters browse-filters"><input id="search" class="input" placeholder="ابحث بعنوان المعرفة أو كلمة مفتاحية" oninput="filterKnowledge()"><select id="dept" class="select" onchange="filterKnowledge()"><option>جميع الإدارات</option>${[...new Set(pubs.map(k=>k.dept))].map(d=>`<option>${d}</option>`).join('')}</select><select id="cat" class="select" onchange="filterKnowledge()"><option>جميع التصنيفات</option><option>حل</option><option>إجراء</option><option>تجربة</option><option>درس مستفاد</option><option>كود</option><option>مبادرة</option></select><select id="month" class="select" onchange="filterKnowledge()"><option value="">جميع التواريخ</option>${months.map(m=>`<option value="${m}">${formatMonthYear(m)}</option>`).join('')}</select></div><div id="knowledgeGrid" class="grid grid-2">${pubs.map(knowledgeCard).join('')}</div>`)}

function knowledgeCard(k){return `<article class="card k-card" data-title="${k.title} ${k.keywords}" data-cat="${k.category}" data-dept="${k.dept}" data-date="${k.date}"><div class="actions"><span class="tag">${k.category}</span>${k.status==='archived'?'<span class="status archived">مؤرشفة</span>':''}</div><h3>${k.title}</h3><div class="meta knowledge-card-meta"><span>صاحب المعرفة: ${k.showName?k.owner:'موظف'}</span><span>${k.dept}</span><span>تاريخ النشر: ${formatMonthYear(k.date)}</span><span>★ ${k.rating} من 5</span></div><button class="btn btn-gold" onclick="go('detail',${k.id})">عرض المعرفة ‹</button></article>`}

function filterKnowledge(){let q=document.getElementById('search').value.trim(),dept=document.getElementById('dept').value,cat=document.getElementById('cat').value,month=document.getElementById('month').value;document.querySelectorAll('#knowledgeGrid article').forEach(c=>{let ok=(!q||c.dataset.title.includes(q))&&(dept==='جميع الإدارات'||c.dataset.dept===dept)&&(cat==='جميع التصنيفات'||c.dataset.cat===cat)&&(!month||c.dataset.date.startsWith(month));c.classList.toggle('hidden',!ok)})}

function detail(){let k=state.knowledge.find(x=>x.id===state.current)||state.knowledge[0];return shell(`${crumb('تفاصيل المعرفة')}<button class="btn btn-soft" onclick="goBack()">العودة إلى النتائج</button><div class="card" style="margin-top:18px"><span class="tag">${k.category}</span><h1 class="detail-title">${k.title}</h1><div class="detail-meta meta"><span>صاحب المعرفة: ${k.showName?k.owner:'موظف'}</span><span>الإدارة: ${k.dept}</span><span>تاريخ النشر: ${k.date}</span><span>التقييم: ★ ${k.rating}</span><span>مصدر المعرفة: <a href="${regulations[k.regulation]}" target="_blank">${k.regulation} ↗</a></span></div>${k.status!=='published'?`<p class="notice"><b>الحالة:</b> ${statusText(k.status)}${k.rejectReason||k.returnReason?`<br><b>${k.status==='rejected'?'سبب الرفض':'ملاحظة المراجع'}:</b> ${escapeKnowledge(k.rejectReason||k.returnReason)}`:''}</p>`:''}<section class="block"><h2>الموقف أو التحدي</h2><p>${k.challenge}</p></section><section class="block"><h2>كيف تم التعامل معه؟</h2><p>${k.handling}</p></section><section class="block"><h2>الحل الذي نجح</h2><div class="steps">${k.solution.map(s=>`<div class="step">${s}</div>`).join('')}</div></section><section class="block"><h2>الدرس المستفاد</h2><p>${k.lesson}</p></section></div>`)}

function benefit(id,yes){if(yes){let k=state.knowledge.find(x=>x.id===id);k.uses++;state.benefits++;save();notify('شكرًا لك، أُضيفت الاستفادة إلى الأثر المعرفي لصاحب المعرفة.')}else notify('شكرًا لملاحظتك، سنستخدمها لتحسين المعرفة.')}

function ask(){chatAwaitingAnotherQuestion=false;return shell(`${crumb('اسأل خبيرًا')}${pageHead('اسأل خبيرًا','اكتب سؤالك بطريقتك، وسأبحث أولًا في المعارف واللوائح المعتمدة.')}<div class="card chat expert-chat"><div id="messages" class="messages"><div class="msg bot"><b>مرحبًا ${cu().first} 👋</b><br>اكتبي المشكلة التي تواجهك وسأبحث لك عن أقرب معرفة معتمدة.</div></div><form class="chat-form" onsubmit="askQuestion(event)"><input id="question" class="input" placeholder="اكتب مشكلتك هنا..." autocomplete="off"><button class="btn btn-primary">إرسال</button></form></div>`)}

const ASK_SYNONYMS=[[/الولاده|الوضع بعد الولاده|اجازه الحمل/g,'اجازه امومه'],[/كلمه السر|الباسورد|الرمز السري|رمز الدخول/g,'كلمه المرور'],[/انصب|انزل|حمل|تنزيل|تنصيب/g,'تثبيت'],[/من البيت|من المنزل|بعيد عن المكتب/g,'عمل عن بعد'],[/ردوا علي|ما حد رد|تاخروا بالرد/g,'تاخر الرد'],[/انتقال|نقل بين الادارات|نقل وظيفي/g,'نقل داخلي']];

const ASK_STOPWORDS=new Set(['من','عن','الى','إلى','هذا','هذه','التي','الذي','كيف','ماذا','متى','اين','وين','ليش','ليه','هل','ابغى','ابي','ابغي','ممكن','ياليت','لو','سمحت','سمحتوا','والله','يا','خبير','ياخبير','عندي','عندنا','وش','ايش','لازم','ابد','جدا','مشكلتي','مشكله','موظف']);

function askDestem(w){if(w.length>3&&/^[وف]/.test(w))w=w.slice(1);if(w.length>3&&w.startsWith('ال'))w=w.slice(2);return w}

function knowledgeMatch(q){
 let n=regNorm(q);
 ASK_SYNONYMS.forEach(([pat,rep])=>{n=n.replace(pat,rep)});
 let words=[...new Set(n.split(/[\s،,؟?.]+/).map(askDestem).filter(w=>w.length>1&&!ASK_STOPWORDS.has(w)))];
 if(!words.length)return null;
 let published=state.knowledge.filter(x=>x.status==='published');
 let scored=published.map(k=>{
  let title=regNorm(k.title),kw=regNorm(k.keywords||''),body=regNorm(k.challenge+' '+k.handling+' '+k.lesson);
  let score=words.reduce((s,w)=>s+(title.includes(w)?3:0)+(kw.includes(w)?2:0)+(body.includes(w)?1:0),0);
  return {k,score};
 }).sort((a,b)=>b.score-a.score);
 let top=scored[0];
 return top&&top.score>=3?top:null;
}

function expertMessages(k){let slot=`chat-detail-${k.id}-${Date.now()}`;return [

 `<div class="msg bot"><span class="bot-label">حالة مشابهة</span>أعتقد أن مشكلتك تشبه هذه الحالة:<br><b>${k.title}</b></div>`,

 `<div class="msg bot"><b>الموقف</b><br>${k.challenge}</div>`,

 `<div class="msg bot"><b>الحل الذي نجح</b><br>${k.solution.join(' ثم ')}</div>`,

 `<div class="chat-options"><div id="${slot}" class="chat-detail-slot"></div><p>يمكنك الاطلاع على تفاصيل إضافية:</p><div class="answer-actions answer-grid"><button onclick="showChatDetail('${slot}',${k.id},'handling',this)">كيف تعاملنا معها؟</button><button onclick="showChatDetail('${slot}',${k.id},'regulation',this)">اللائحة والمختص</button><button onclick="showChatDetail('${slot}',${k.id},'lesson',this)">الدرس المستفاد</button><button onclick="showChatDetail('${slot}',${k.id},'contact',this)">تواصل مع المختص</button></div><div class="feedback-final"><div class="conversation-actions"><button onclick="chatHelpful(this,${k.id})">أفادني</button><button onclick="chatThank(this,${k.id})">شكرًا لصاحب الخبرة</button><button onclick="chatNotHelpful(this,${k.id})">لا تشابه مشكلتي</button></div><div class="chat-rating"><span>قيّمي فائدة الإجابة:</span><button onclick="rateChat(this,1)">☆</button><button onclick="rateChat(this,2)">☆</button><button onclick="rateChat(this,3)">☆</button><button onclick="rateChat(this,4)">☆</button><button onclick="rateChat(this,5)">☆</button></div></div></div>`

]}

function appendExpertMessages(k){let box=document.getElementById('messages'),items=expertMessages(k);items.forEach((html,i)=>setTimeout(()=>{box.insertAdjacentHTML('beforeend',html);box.scrollTop=box.scrollHeight},350+i*430))}

let chatAwaitingAnotherQuestion=false;
function conversationClosing(q,awaiting=chatAwaitingAnotherQuestion){
 const text=regNorm(q).replace(/[^\p{L}\p{N}\s]/gu,' ').replace(/\s+/g,' ').trim();
 const thanks='(?:شكرا(?: لك| لكِ| لكم| جزيلا| كثيرا)?|شكرًا|مشكور(?:ه|ين)?|يعطيك العافيه|الله يعافيك|تسلم(?:ين)?|جزاك الله خير(?:ا)?)';
 const ending='(?:خلاص|بس كذا|هذا كل شي|هذا كل شيء|انتهينا|مع السلامه|باي|ما عندي(?: اي)? (?:استفسار|سؤال)(?: ثاني| اخر| آخر)?|ماعندي(?: اي)? (?:استفسار|سؤال)(?: ثاني| اخر| آخر)?|ما عندي شي ثاني|ماعندي شي ثاني|لا يوجد(?: لدي)? (?:استفسار|سؤال)(?: اخر| آخر)?|لا احتاج(?: شيئا| شيء| شي)?(?: اخر| آخر| ثاني)?|لا(?: شكرا(?: لك)?)?|لا شكرا لك|لا خلاص)';
 const phrase=new RegExp(`^(?:${thanks}|${ending})(?: (?:${thanks}|${ending}))*(?: يا خبير)?$`);
 if(!phrase.test(text))return null;
 if(/^(لا|لا شكرا|لا شكرا لك)$/.test(text)&&!awaiting&&text==='لا')return null;
 return 'على الرحب والسعة! إذا احتجت مساعدة لاحقًا، اكتب استفسارك هنا. يومك سعيد.';
}

function isGreeting(q){let text=q.trim().replace(/[!؟،,.]/g,' ').replace(/\s+/g,' ');return /^(السلام عليكم( ورحمة الله( وبركاته)?)?|سلام|مرحبا|مرحباً|اهلا|أهلا|هلا|صباح الخير|مساء الخير)( يا خبير| جميعا| جميعاً)?$/.test(text)}

function isGeneralHelpRequest(q){
 const text=regNorm(q).replace(/[^\p{L}\p{N}\s]/gu,' ').replace(/\s+/g,' ').trim();
 return /^(?:(?:انا )?(?:لدي|عندي) (?:مشكله|سؤال|استفسار)(?: واحتاج مساعده)?|(?:انا )?(?:احتاج|اريد|ابي|ابغي|ابغى) (?:مساعده|اسال|استفسر)|(?:هل )?(?:يمكنك|ممكن|تقدر|تقدرين) (?:مساعدتي|تساعدني)|ساعدني|كيف (?:تقدر|يمكنك) (?:تساعدني|مساعدتي))$/.test(text);
}

function noMatchResponse(){let slot=`no-match-${Date.now()}`;return `<div class="msg bot"><b>لم أجد معرفة مطابقة لمشكلتك.</b><br>يمكنك التواصل مع المختص للحصول على المساعدة.</div><div class="chat-options no-match-options"><div id="${slot}" class="chat-detail-slot"></div><div class="answer-actions"><button onclick="showNoMatchContact('${slot}',this)">التواصل مع المختص</button></div><div class="chat-rating"><span>قيّمي فائدة الإجابة:</span><button onclick="rateChat(this,1)">☆</button><button onclick="rateChat(this,2)">☆</button><button onclick="rateChat(this,3)">☆</button><button onclick="rateChat(this,4)">☆</button><button onclick="rateChat(this,5)">☆</button></div></div>`}

function askQuestion(e){e.preventDefault();let inp=document.getElementById('question'),q=inp.value.trim();if(!q)return;let box=document.getElementById('messages');box.insertAdjacentHTML('beforeend',`<div class="msg user">${q}</div>`);inp.value='';box.scrollTop=box.scrollHeight;const closing=conversationClosing(q);chatAwaitingAnotherQuestion=false;if(closing){setTimeout(()=>addChatMessage(closing),300);return}if(isGreeting(q)){setTimeout(()=>{box.insertAdjacentHTML('beforeend',`<div class="msg bot"><b>وعليكم السلام، أهلًا وسهلًا بكِ 👋</b><br>كيف أقدر أساعدك اليوم؟ اكتبي مشكلتك وسأبحث لكِ في المعارف المعتمدة.</div>`);box.scrollTop=box.scrollHeight},300);return}if(isGeneralHelpRequest(q)){setTimeout(()=>addChatMessage("أكيد، كيف أقدر أساعدك؟ وضّح المشكلة التي تواجهك، وسأبحث لك عن معرفة معتمدة تساعدك."),300);return}let result=knowledgeMatch(q);if(result&&result.score){result.k.chatViews=(result.k.chatViews||0)+1;logChat(q,true);appendExpertMessages(result.k)}else{logChat(q,false);setTimeout(()=>{box.insertAdjacentHTML('beforeend',noMatchResponse());box.scrollTop=box.scrollHeight},350)}}

function addChatMessage(html,type='bot'){let box=document.getElementById('messages');box.insertAdjacentHTML('beforeend',`<div class="msg ${type}">${html}</div>`);box.scrollTop=box.scrollHeight}

function showNoMatchContact(slot,btn){let target=document.getElementById(slot);target.insertAdjacentHTML('beforeend',`<div class="msg bot detail-reply"><b>بيانات التواصل مع المختص</b><br><b>الموظف المختص:</b> موظف الدعم الفني<br><b>الإدارة:</b> إدارة تقنية المعلومات<br><b>التحويلة:</b> ٢٣٤٥</div>`);btn.remove();target.closest('.chat-options').scrollIntoView({behavior:'smooth',block:'end'})}

function showChatDetail(slot,id,type,btn){let k=state.knowledge.find(x=>x.id===id),target=document.getElementById(slot),options=target.closest('.chat-options'),name=k.showName?k.owner:'موظف',regulationUrl=regulations[k.regulation]||'#',content={handling:`<b>كيف تم التعامل معها؟</b><br>${k.handling}`,lesson:`<b>الدرس المستفاد</b><br>${k.lesson}`,regulation:`<b>اللائحة المرتبطة:</b> <a class="regulation-link" href="${regulationUrl}" target="_blank" rel="noopener">${k.regulation} ↗</a><br><b>الإدارة المسؤولة:</b> ${k.dept}<br><b>الموظف المختص:</b> ${name}`,contact:`<b>تواصل مع المختص</b><br>الموظف: ${name}<br>الإدارة: ${k.dept}<br>التحويلة: <b>${k.contact||'٢٣٤٥'}</b>`}[type];target.insertAdjacentHTML('beforeend',`<div class="msg bot detail-reply">${content}</div>`);btn.remove();let remaining=options.querySelector('.answer-grid');if(remaining&&!remaining.children.length){remaining.remove();let label=options.querySelector(':scope > p');if(label)label.remove()}options.querySelector('.feedback-final').scrollIntoView({behavior:'smooth',block:'end'})}

function chatFollowup(id,type){let k=state.knowledge.find(x=>x.id===id);addChatMessage(type==='handling'?`<b>كيف تم التعامل معها؟</b><br>${k.handling}`:`<b>الدرس المستفاد</b><br>${k.lesson}`)}

function chatRegulation(id){let k=state.knowledge.find(x=>x.id===id);addChatMessage(`<b>اللائحة المرتبطة</b><br>${k.regulation}<br><span class="meta">الجهة المختصة: ${k.dept}</span>`)}

function chatContact(id){let k=state.knowledge.find(x=>x.id===id)||state.knowledge[0];addChatMessage(`<b>بيانات التواصل مع المختص</b><br>${k.dept}<br>التحويلة: <b>${k.contact||'٢٣٤٥'}</b>`)}

function chatHelpful(btn,id){benefit(id,true);btn.closest('.conversation-actions').innerHTML='<strong class="thanks">شكرًا لك، سُجلت استفادتك في الأثر المعرفي.</strong>'}

function chatThank(btn,id){btn.closest('.conversation-actions').innerHTML='<strong class="thanks">وصل شكرك إلى صاحب المعرفة 💚</strong>'}

function chatNotHelpful(btn,id){btn.closest('.conversation-actions').innerHTML='<strong>حسنًا، اكتبي تفاصيل أكثر عن مشكلتك.</strong>';addChatMessage('وضّحي متى بدأت المشكلة وما الرسالة التي تظهر لك، وسأبحث مرة أخرى.')}

function rateChat(btn,n){
 const row=btn.closest('.chat-rating');if(!row||row.dataset.submitted==='true')return;
 row.dataset.submitted='true';
 [...row.querySelectorAll('button')].forEach((star,i)=>{star.textContent=i<n?'★':'☆';star.classList.toggle('rated',i<n);star.disabled=true;star.setAttribute('aria-label',`${i+1} من 5 نجوم`)});
 row.querySelector('span').textContent=`تقييمك: ${n} من 5 نجوم`;
 chatAwaitingAnotherQuestion=true;
 addChatMessage('شكرًا لتقييمك. هل لديك استفسار آخر أقدر أساعدك فيه؟');
 document.getElementById('question').focus();
}

function minuteBrowseContent(){let vids=state.knowledge.filter(k=>k.status==='published').slice(0,6);return `<p class="minute-intro">محتوى معرفي مختصر للاستماع والمشاهدة، ويمكنك مشاركة دقيقتك المعرفية وإرسالها للمراجعة.</p><div class="grid grid-3">${vids.map(k=>`<div class="card"><div class="video-thumb"><div class="video-art"></div><button class="play" onclick="go('video',${k.id})">▶</button></div><h3>${k.title}</h3><div class="meta">صاحب المعرفة: ${k.showName?k.owner:'موظف'}</div><button class="btn btn-gold w100" style="margin-top:18px" onclick="go('video',${k.id})">مشاهدة الفيديو ‹</button></div>`).join('')}</div>`}

function minuteRecordContent(){return `<p class="minute-intro">سجّل أو ارفع محتوى معرفيًا مختصرًا، ثم أرسله للمراجعة قبل نشره.</p><form class="card minute-form" onsubmit="submitMinute(event)"><div class="minute-fields"><label>عنوان الدقيقة <b>*</b><input class="input" required placeholder="اكتب عنوانًا مختصرًا وواضحًا لدقيقتك المعرفية..."></label><label>اسم المتحدث<input class="input" value="${cu().name}" readonly></label></div><label>ملخص قصير <b>*</b><textarea class="input" rows="4" required placeholder="اكتب نبذة أو ملخصًا موجزًا يوضح الفكرة الأساسية للدقيقة المعرفية..."></textarea></label><fieldset class="minute-kind"><legend>اختر نوع المحتوى <b>*</b></legend><label><input type="radio" name="minuteType" value="video" checked onchange="updateMinuteType()"> فيديو</label><label><input type="radio" name="minuteType" value="audio" onchange="updateMinuteType()"> صوت</label></fieldset><h3>خيار التسجيل أو الرفع <b>*</b></h3><div class="minute-upload-grid"><div class="upload-box"><span class="upload-icon">●</span><b id="minuteRecordTitle">التسجيل مباشرة من المتصفح</b><small id="minuteRecordHint">استخدم الكاميرا والميكروفون للتسجيل المباشر</small><button type="button" class="btn btn-primary" onclick="notify('بدأ التسجيل التجريبي')">بدء التسجيل</button></div><label class="upload-box"><span class="upload-icon gold">↥</span><b id="minuteUploadTitle">رفع ملف صوتي أو فيديو</b><small>اسحب الملف هنا أو انقر لاختيار ملف</small><input type="file" accept="video/*,audio/*"></label></div><div class="minute-submit"><button class="btn btn-gold">إرسال للمراجعة</button></div></form>`}

function minute(){return shell(`${crumb('دقيقة معرفة')}${pageHead('دقيقة معرفة','محتوى معرفي مختصر يمكنك الاطلاع عليه خلال دقائق لتعزيز الكفاءة وحماية الأصول المعرفية للمؤسسة.')}<div class="minute-tabs"><button id="minuteWatchTab" class="active" onclick="switchMinuteTab('watch')">◉ استمع وشاهد</button><button id="minuteRecordTab" onclick="switchMinuteTab('record')">♩ سجّل دقيقتك</button></div><div id="minuteContent">${minuteBrowseContent()}</div>`)}

function switchMinuteTab(tab){let content=document.getElementById('minuteContent'),watch=document.getElementById('minuteWatchTab'),record=document.getElementById('minuteRecordTab');watch.classList.toggle('active',tab==='watch');record.classList.toggle('active',tab==='record');content.innerHTML=tab==='watch'?minuteBrowseContent():minuteRecordContent()}

function updateMinuteType(){let type=document.querySelector('[name=minuteType]:checked')?.value,isVideo=type==='video';document.getElementById('minuteRecordTitle').textContent=isVideo?'التسجيل مباشرة من المتصفح':'تسجيل صوتي مباشر';document.getElementById('minuteRecordHint').textContent=isVideo?'استخدم الكاميرا والميكروفون للتسجيل المباشر':'استخدم الميكروفون لتسجيل المقطع الصوتي';document.getElementById('minuteUploadTitle').textContent=isVideo?'رفع ملف فيديو':'رفع ملف صوتي'}

function submitMinute(e){e.preventDefault();showModal('تم إرسال دقيقتك للمراجعة','شكرًا لمشاركتك. أُرسل المحتوى إلى المراجع المعرفي لاعتماده قبل النشر.',`<button class="btn btn-primary w100" onclick="closeModal();switchMinuteTab('watch')">العودة إلى دقيقة معرفة</button>`)}

function video(){let k=state.knowledge.find(x=>x.id===state.current)||state.knowledge[0];return shell(`${crumb('دقيقة معرفة ← مشاهدة الفيديو')}<button class="btn btn-soft" onclick="go('minute')">العودة إلى دقيقة معرفة</button><div class="card" style="margin-top:18px"><h1 class="detail-title">${k.title}</h1><p class="meta">صاحب المعرفة: ${k.showName?k.owner:'موظف'}</p><div class="video-thumb" style="margin-top:20px"><div class="video-art"></div><button class="play" onclick="notify('تشغيل تجريبي للفيديو')">▶</button><div class="progress"></div></div><p class="notice" style="margin-top:15px">يوضح هذا الفيديو الخطوات الأساسية المرتبطة بالمعرفة بصورة مختصرة.</p></div>`)}

function submit(){return shell(`${crumb('بصمتي ← وثّق خبرتك')}${pageHead('وثّق خبرتك','شارك معرفتك لتصبح متاحة لزملائك بعد مراجعتها واعتمادها.')}

<form class="card" onsubmit="submitKnowledge(event)">

 <div class="submit-types">

  <button type="button" class="submit-type active" onclick="setSubmitType('writing',this)">✎ <b>كتابة</b></button>

  <button type="button" class="submit-type" onclick="setSubmitType('audio',this)">♬ <b>صوت</b></button>

  <button type="button" class="submit-type" onclick="setSubmitType('video',this)">▣ <b>فيديو</b></button>

 </div>

 <div class="field"><label>عنوان المعرفة</label><input id="ktitle" class="input" required placeholder="اكتب عنوانًا واضحًا ومختصرًا"></div>

 <div id="mediaBox" class="media-box hidden"></div>

 <div id="writingFields" class="grid grid-2"><div class="field"><label>ما الموقف أو التحدي؟</label><textarea id="k1" class="textarea" required placeholder="صِف الموقف أو المشكلة التي واجهتك، ومتى حدثت."></textarea></div><div class="field"><label>كيف تعاملت معه؟</label><textarea id="k2" class="textarea" required placeholder="اذكر الإجراءات التي جرّبتها للتعامل مع الموقف."></textarea></div><div class="field"><label>ما الحل الذي نجح؟</label><textarea id="k3" class="textarea" required placeholder="اكتب خطوات الحل الناجح بالترتيب: ١، ٢، ٣…"></textarea></div><div class="field"><label>ما الدرس المستفاد؟</label><textarea id="k4" class="textarea" required placeholder="ما الذي تعلّمته؟ وما النصيحة التي تفيد الآخرين؟"></textarea></div></div>

 <div class="divider"></div>

 <div class="audience-card">

  <b>حدد نطاق ظهور المعرفة</b><p class="meta">يمكن نشر المعرفة لجميع الإدارات أو تخصيصها لإدارات محددة.</p>

  <div class="actions audience-options"><label><input type="radio" name="audience" value="all" checked onchange="updateAudience('all')"> جميع الإدارات</label><label><input type="radio" name="audience" value="specific" onchange="updateAudience('specific')"> إدارات محددة</label></div>

  <div id="departmentChoices" class="department-choices hidden"><label><input type="checkbox" value="إدارة تقنية المعلومات"> إدارة تقنية المعلومات</label><label><input type="checkbox" value="إدارة الموارد البشرية"> إدارة الموارد البشرية</label><label><input type="checkbox" value="إدارة الشؤون القانونية"> إدارة الشؤون القانونية</label><label><input type="checkbox" value="إدارة التميز المؤسسي"> إدارة التميز المؤسسي</label><label><input type="checkbox" value="الإدارة العامة للشؤون المحلية"> الإدارة العامة للشؤون المحلية</label><label><input type="checkbox" value="مكتب وكيل الإمارة"> مكتب وكيل الإمارة</label></div>

 </div>

 <div class="identity-grid">

  <div class="identity-card"><b>هل ترغب في ظهور اسمك؟</b><div class="actions identity-options"><label><input type="radio" name="show" value="yes" checked onchange="updateIdentity(true)"> نعم، أظهر اسمي</label><label><input type="radio" name="show" value="no" onchange="updateIdentity(false)"> لا، اعرض «موظف» فقط</label></div><p class="meta">عند إخفاء الاسم، تُنشر المعرفة باسم «موظف»، وتبقى محفوظة في أثرك المعرفي وتُحتسب لك نقاطها وحوافزها. يظهر اسمك للمراجع المختص فقط.</p><label class="identity-label" for="displayName">الاسم الظاهر</label><input id="displayName" class="input identity-input" value="${cu().name}" readonly></div>

  <div class="reg-card contact-card"><b>تحويلة التواصل</b><strong>${cu().ext}</strong></div>

 </div>

 <div class="review-footer"><span class="meta">يمكن حفظ النموذج كمسودة أو إرساله للمراجع المعرفي.</span><div class="actions"><button type="button" class="btn btn-outline" onclick="notify('تم حفظ المعرفة كمسودة')">حفظ كمسودة</button><button class="btn btn-gold">إرسال للمراجعة</button></div></div>

</form>`)}

function setSubmitType(type,button){

 document.querySelectorAll('.submit-type').forEach(x=>x.classList.remove('active'));button.classList.add('active');

 let box=document.getElementById('mediaBox'),writing=document.getElementById('writingFields'),fields=writing.querySelectorAll('textarea');

 if(type==='writing'){box.classList.add('hidden');box.innerHTML='';writing.classList.remove('hidden');fields.forEach(x=>x.required=true);return}

 writing.classList.add('hidden');fields.forEach(x=>x.required=false);box.classList.remove('hidden');

 box.innerHTML=type==='audio'?`<div class="record-panel audio-record"><div class="record-symbol">♬</div><h3>سجّل معرفتك صوتيًا</h3><p>اضغط على زر التسجيل وابدأ بمشاركة معرفتك.</p><div class="record-timer">٠٠:٠٠</div><div class="record-actions"><button type="button" class="record-button" onclick="notify('بدأ التسجيل الصوتي التجريبي')">● بدء التسجيل</button><span>أو</span><label class="btn btn-outline file-button">اختيار ملف صوتي<input type="file" accept="audio/*" hidden></label></div></div>`:`<div class="record-panel video-record"><div class="video-preview"><div class="camera-symbol">▣</div><p>معاينة الكاميرا</p></div><h3>سجّل معرفتك بالفيديو</h3><p>ابدأ التسجيل بالكاميرا أو اختر فيديو محفوظًا على جهازك.</p><div class="record-actions"><button type="button" class="record-button" onclick="notify('بدأ تسجيل الفيديو التجريبي')">● بدء التسجيل</button><span>أو</span><label class="btn btn-outline file-button">اختيار ملف فيديو<input type="file" accept="video/*" hidden></label></div></div>`

}

function updateIdentity(show){document.getElementById('displayName').value=show?cu().name:'موظف'}

function updateAudience(scope){document.getElementById('departmentChoices').classList.toggle('hidden',scope!=='specific')}

function submitKnowledge(e){e.preventDefault();let scope=document.querySelector('[name=audience]:checked').value,targetDepartments=scope==='all'?['جميع الإدارات']:[...document.querySelectorAll('#departmentChoices input:checked')].map(x=>x.value);if(scope==='specific'&&!targetDepartments.length){notify('اختاري إدارة واحدة على الأقل.');return}let id=Math.max(...state.knowledge.map(k=>k.id))+1,sol=document.getElementById('k3').value.split(/\n|[١٢٣٤٥٦٧٨٩][.\-]/).map(x=>x.trim()).filter(Boolean);state.knowledge.push({id,title:document.getElementById('ktitle').value,owner:cu().name,ownerId:currentPersonId(),showName:document.querySelector('[name=show]:checked').value==='yes',dept:cu().dept,visibility:scope,targetDepartments,contact:cu().ext,challenge:document.getElementById('k1').value,handling:document.getElementById('k2').value,solution:sol.length?sol:[document.getElementById('k3').value],lesson:document.getElementById('k4').value,keywords:'',category:'غير مصنفة',status:'review',rating:0,uses:0,regulation:'سياسة استخدام الأجهزة والبرمجيات',date:new Date().toISOString().slice(0,10)});addKnowledgeNotification('reviewer',state.knowledge.find(k=>k.id===id),'submitted');save();showKnowledgeSuccess({title:'تم إرسال معرفتك للمراجعة',message:`شكرًا لمساهمتك، تم إرسال معرفتك إلى المراجع المعرفي في ${cu().dept} لمراجعتها وتصنيفها.`,note:'يمكنك متابعة حالة المعرفة من صفحة أثري المعرفي'})}

function svg(name){

 const p={

  star:'<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>',

  book:'<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>',

  thumb:'<path d="M7 10v12"/><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"/>',

  trend:'<polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>',

  users:'<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',

  msg:'<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',

  bell:'<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>',

  user:'<circle cx="12" cy="8" r="4"/><path d="M4 21v-1a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v1"/>',

  logout:'<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/>',

  check:'<circle cx="12" cy="12" r="9"/><path d="m8.5 12.5 2.5 2.5 4.5-5"/>',

  download:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>'

  ,arrowRight:'<line x1="5" y1="12" x2="19" y2="12"/><polyline points="13 6 19 12 13 18"/>'

 }[name];

 return `<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${p}</svg>`

}

function impact(){

 const GOAL=60,

  ar=n=>String(n).replace(/\d/g,d=>'٠١٢٣٤٥٦٧٨٩'[d]),

  mine=state.knowledge.filter(ownsKnowledge),

  pubs=mine.filter(k=>k.status==='published'),

  uses=pubs.reduce((a,k)=>a+k.uses,0),

  points=certificatePoints(),

  pct=Math.min(100,Math.round(points/GOAL*100)),

  left=Math.max(0,GOAL-points),

  top=[...pubs].sort((a,b)=>b.uses-a.uses)[0],

  level=points>=GOAL?'صانع أثر معرفي':points>=20?'مساهم مؤثر':'مساهم جديد';

 return shell(`<div class="impact-page">

 ${crumb('نقاط الأثر المعرفي')}

 ${pageHead('نقاط الأثر المعرفي','يُقاس أثرك بالاستخدام الفعلي لمعارفك ومدى استفادة الموظفين منها.')}

 <div class="im-grid">

  <div class="im-card"><div class="im-body"><span class="im-label">نقاطي</span><div class="im-value"><strong>${ar(points)}</strong>نقطة</div><span class="im-level">${level}</span></div><div class="im-ico">${svg('star')}</div></div>

  <div class="im-card"><div class="im-body"><span class="im-label">المعارف المنشورة</span><div class="im-value"><strong>${ar(pubs.length)}</strong>معرفة</div><span class="im-sub">متاحة للموظفين بالكامل</span></div><div class="im-ico">${svg('book')}</div></div>

  <div class="im-card"><div class="im-body"><span class="im-label">إجمالي مرات الاستفادة</span><div class="im-value"><strong>${ar(uses)}</strong>استفادة</div><span class="im-sub"><i class="im-dot"></i>ضغط «أفادتني»</span></div><div class="im-ico">${svg('thumb')}</div></div>

  <div class="im-card"><div class="im-body"><span class="im-label">أعلى معرفة أثرًا</span><span class="im-top-title">${top?top.title:'لا توجد معرفة منشورة بعد'}</span>${top?`<span class="im-sub">${ar(top.uses)} نقطة مكتسبة</span>`:''}</div><div class="im-ico">${svg('trend')}</div></div>

 </div>

 <div class="im-progress">

  <div class="im-progress-top"><span><i class="im-dot"></i>${left?`تبقّى ${ar(left)} نقطة للحصول على وسام صانع الأثر المعرفي`:'مبروك! حصلتِ على وسام صانع الأثر المعرفي'}</span><span class="im-progress-num">${ar(Math.min(points,GOAL))} من ${ar(GOAL)} نقطة (${ar(pct)}٪)</span></div>

  <div class="im-track"><div class="im-fill" style="width:${pct}%"></div></div>

 </div>

 <div class="im-reward">

  <div class="im-reward-icon">${svg('check')}</div>

  <div class="im-reward-text"><b>مكافآتي</b><span>${points>=20?'حصلت على شهادة شكر وتقدير لمساهمتك في نشر المعرفة المؤسسية':'اجمع ٢٠ نقطة للحصول على شهادة شكر وتقدير'}</span></div>

  <button class="btn btn-outline" ${points>=20?'':'disabled'} onclick="downloadCertificate(this)">تحميل الشهادة ${svg('download')}</button>

 </div>

 <h2 class="im-h">بصماتي وأثرها</h2>

 <div class="list">${mine.length?mine.map(k=>`

  <div class="im-item">

   <div class="im-item-main">

    <div class="im-tags"><span class="status ${k.status}">● ${statusText(k.status)}</span><span class="tag im-cat">${k.category}</span></div>

    <h3>${k.title}</h3>

    ${k.status==='published'?`<div class="im-meta">

      <span>الظهور في نتائج الشات بوت: <b>${ar(k.chatViews||0)} مرة</b></span>

      <span>مرات الاستفادة (أفادتني): <b>${ar(k.uses)}</b></span>

      <span>النقاط المكتسبة: <b class="im-gold">${ar(k.uses)} نقطة</b></span>

      <span>تقييم الرضا: <b>★ ${ar(k.rating)}</b> من ${ar(5)}</span></div>`

    :(k.returnReason||k.rejectReason)?`<p class="notice">${k.status==='rejected'?'سبب الرفض':'ملاحظة المراجع'}: ${k.rejectReason||k.returnReason}</p>`:''}

   </div>

   ${k.status==='returned'?`<button class="btn btn-primary" onclick="go('edit',${k.id})">متابعة التعديل</button>`:`<button class="btn btn-outline" onclick="go('detail',${k.id})">عرض تفاصيل الأثر</button>`}

  </div>`).join(''):'<div class="card empty">لم تضف أي معرفة بعد.</div>'}</div>

 </div>`)

}

function editKnowledge(){
 const k=state.knowledge.find(x=>x.id===state.current);
 if(!k||k.owner!==cu().name||k.status!=='returned')return shell(`${pageHead('تعديل المعرفة','هذه المعرفة غير متاحة للتعديل حاليًا.')}<button class="btn btn-primary" onclick="go('impact')">العودة إلى أثري المعرفي</button>`);
 return shell(`${crumb('أثري المعرفي ← تعديل المعرفة')}${pageHead('تعديل المعرفة','حدّث المعرفة وفق ملاحظة المراجع ثم أعد إرسالها.')}<div class="notice"><b>ملاحظة المراجع المعرفي:</b> ${escapeKnowledge(k.returnReason||'')}</div><form class="card" style="margin-top:18px" onsubmit="resubmit(event,${k.id})"><div class="field"><label>عنوان المعرفة</label><input id="etitle" class="input" required value="${escapeKnowledge(k.title)}"></div><div class="grid grid-2"><div class="field"><label>ما الموقف أو التحدي؟</label><textarea id="e1" class="textarea" required>${escapeKnowledge(k.challenge)}</textarea></div><div class="field"><label>كيف تعاملت معه؟</label><textarea id="e2" class="textarea" required>${escapeKnowledge(k.handling)}</textarea></div><div class="field"><label>ما الحل الذي نجح؟</label><textarea id="e3" class="textarea" required>${escapeKnowledge(k.solution.map((s,i)=>`${i+1}. ${s}`).join('\n'))}</textarea></div><div class="field"><label>ما الدرس المستفاد؟</label><textarea id="e4" class="textarea" required>${escapeKnowledge(k.lesson)}</textarea></div></div><div class="review-footer"><button type="button" class="btn btn-outline" onclick="saveKnowledgeEdits(${k.id})">حفظ التعديلات كمسودة</button><button class="btn btn-gold">إعادة الإرسال للمراجعة</button></div></form>`)
}
function saveKnowledgeEdits(id,showConfirmation=true){
 const k=state.knowledge.find(x=>x.id===id);if(!k||k.owner!==cu().name||k.status!=='returned')return false;
 const values=['etitle','e1','e2','e3','e4'].map(id=>document.getElementById(id).value.trim());
 if(values.some(v=>!v)){notify('يرجى إكمال عنوان المعرفة والإجابات الأربع.');return false}
 [k.title,k.challenge,k.handling]=values;
 k.solution=values[3].split('\n').map(x=>x.replace(/^[0-9١-٩]+[.\-]\s*/, '').trim()).filter(Boolean);k.lesson=values[4];save();
 if(showConfirmation)showKnowledgeSuccess({title:'تم حفظ تعديلات المعرفة',message:'تم حفظ تعديلاتك كمسودة، ويمكنك العودة لاستكمالها وإعادة إرسالها للمراجعة.',note:'حالة المعرفة ما زالت: أعيدت للتعديل'});
 return true;
}

function resubmit(e,id){e.preventDefault();if(!saveKnowledgeEdits(id,false))return;const k=state.knowledge.find(x=>x.id===id);k.status='review';k.resubmittedAt=new Date().toISOString();delete k.returnReason;addKnowledgeNotification('reviewer',k,'resubmitted');save();showKnowledgeSuccess({title:'تمت إعادة إرسال المعرفة',message:'تم حفظ تعديلاتك وإعادة إرسال المعرفة إلى المراجع المعرفي لمراجعتها من جديد.',note:'تغيّرت حالة المعرفة إلى: قيد المراجعة'})}

function reviewerHome(){let list=state.knowledge.filter(k=>k.status!=='draft'&&canReview(k)),count=s=>state.knowledge.filter(k=>k.status===s&&canReview(k)).length;return shell(`${pageHead('مراجعة المعارف','راجع المعارف المرسلة من موظفي إدارتك، وصنّفها قبل اعتمادها ونشرها.')}<div class="grid grid-4"><div class="card metric"><span>تحتاج إلى المراجعة</span><strong>${count('review')}</strong></div><div class="card metric"><span>تم نشرها</span><strong>${count('published')}</strong></div><div class="card metric"><span>أُعيدت للتعديل</span><strong>${count('returned')}</strong></div><div class="card metric"><span>إجمالي المعارف</span><strong>${list.length}</strong></div></div><div class="tabs" style="margin-top:28px"><button class="tab active" onclick="reviewFilter('review',this)">تحتاج إلى المراجعة</button><button class="tab" onclick="reviewFilter('published',this)">منشورة</button><button class="tab" onclick="reviewFilter('returned',this)">أُعيدت للتعديل</button><button class="tab" onclick="reviewFilter('rejected',this)">المرفوضة</button><button class="tab" onclick="reviewFilter('archived',this)">المؤرشفة</button><button class="tab" onclick="reviewFilter('all',this)">الكل</button></div><div id="reviewList" class="list">${list.map(reviewItem).join('')}</div>`)}

function reviewItem(k){let reviewable=k.status==='review';return `<div class="card review-item ${reviewable?'':'hidden'}" data-status="${k.status}"><div class="review-top"><div><div class="actions"><span class="status ${k.status}">${statusText(k.status)}</span><span class="tag">${k.category}</span></div><h3>${k.title}</h3><div class="meta"><span>اسم الموظف: ${k.owner}</span><span>الرقم الوظيفي: ١٠٢٣٤</span><span>${k.dept}</span><span>${k.date}</span></div></div><div class="actions"><button class="btn ${reviewable?'btn-primary':'btn-outline'}" onclick="go('review-detail',${k.id})">${reviewable?'مراجعة المعرفة ✎':'عرض التفاصيل'}</button></div></div></div>`}

function reviewFilter(status,el){document.querySelectorAll('.tabs .tab').forEach(x=>x.classList.remove('active'));el.classList.add('active');document.querySelectorAll('#reviewList>[data-status]').forEach(x=>x.classList.toggle('hidden',status!=='all'&&x.dataset.status!==status))}

function reviewDetail(){let k=state.knowledge.find(x=>x.id===state.current);if(!canReview(k))return shell('<p>هذه المعرفة ليست ضمن المعارف المسندة إلى إدارتك.</p>');if(k.status!=='review')return reviewerReadOnly(k);return shell(`${crumb('مراجعة المعارف ← مراجعة المعرفة')}${pageHead('مراجعة المعرفة','راجع المحتوى، ثم اختر التصنيف المناسب واتخذ الإجراء.')}<div class="card review-item"><span class="status ${k.status}">${statusText(k.status)}</span><h2>${k.title}</h2><div class="grid grid-4"><div class="reg-card">اسم الموظف<br><b>${k.owner}</b></div><div class="reg-card">الرقم الوظيفي<br><b>١٠٢٣٤</b></div><div class="reg-card">الإدارة<br><b>${k.dept}</b></div><div class="reg-card">تاريخ الإرسال<br><b>${k.date}</b></div></div></div><div class="section-title"><h2>محتوى المعرفة</h2></div><div class="grid grid-2"><div class="card block"><h2>ما الموقف أو التحدي؟</h2><p>${k.challenge}</p></div><div class="card block"><h2>كيف تعاملت معه؟</h2><p>${k.handling}</p></div><div class="card block"><h2>ما الحل الذي نجح؟</h2><div class="steps">${k.solution.map(s=>`<div class="step">${s}</div>`).join('')}</div></div><div class="card block"><h2>ما الدرس المستفاد؟</h2><p>${k.lesson}</p></div></div><p class="review-check-note"><span aria-hidden="true">⚠</span> تحقق من التصنيف واللائحة قبل النشر.</p><div class="grid grid-2" style="margin-top:12px"><div class="card"><h2>تصنيف المعرفة</h2><p class="meta">اختر نوع التصنيف المناسب.</p><div class="radio-cards">${['حل','إجراء','تجربة','درس مستفاد','كود'].map(c=>`<div class="radio-card ${k.category===c?'selected':''}" onclick="chooseCategory(this,'${c}')">${c}</div>`).join('')}<div class="radio-card ${k.category==='مبادرة'?'selected':''}" onclick="chooseCategory(this,'مبادرة')">مبادرة</div></div></div><div class="card"><h2>اللائحة المرتبطة</h2><p class="meta">اقتراح آلي اعتمادًا على محتوى المعرفة.</p><div class="reg-card"><span class="tag">اقتراح الذكاء الاصطناعي</span><h3>${k.regulation}</h3><a href="${regulations[k.regulation]}" target="_blank">فتح رابط اللائحة ↗</a></div></div></div><div class="card review-footer"><button class="btn btn-outline" onclick="reviewEditModal(${k.id})">تعديل واستكمال المعرفة</button><div class="actions"><button class="btn btn-outline" onclick="returnModal(${k.id})">إرجاع للتعديل</button><button class="btn btn-danger" onclick="rejectModal(${k.id})">رفض</button><button class="btn btn-primary" onclick="approve(${k.id})" ${k.category==='غير مصنفة'?'disabled':''}>اعتماد ونشر</button></div></div>${reviewTransferSection(k)}`)}

function reviewerReadOnly(k){return shell(`${crumb('مراجعة المعارف ← تفاصيل المعرفة')}${pageHead('تفاصيل المعرفة','هذه المعرفة للعرض فقط ولا تحتاج إلى إجراء جديد.')}<div class="card review-item"><div class="actions"><span class="status ${k.status}">${statusText(k.status)}</span><span class="tag">${k.category}</span></div><h2>${k.title}</h2><div class="grid grid-4"><div class="reg-card">اسم الموظف<br><b>${k.owner}</b></div><div class="reg-card">الإدارة<br><b>${k.dept}</b></div><div class="reg-card">تاريخ النشر<br><b>${k.date}</b></div><div class="reg-card">الحالة<br><b>${statusText(k.status)}</b></div></div></div><div class="section-title"><h2>محتوى المعرفة</h2></div><div class="grid grid-2"><div class="card block"><h2>ما الموقف أو التحدي؟</h2><p>${k.challenge}</p></div><div class="card block"><h2>كيف تم التعامل معه؟</h2><p>${k.handling}</p></div><div class="card block"><h2>الحل الذي نجح</h2><div class="steps">${k.solution.map(s=>`<div class="step">${s}</div>`).join('')}</div></div><div class="card block"><h2>الدرس المستفاد</h2><p>${k.lesson}</p></div></div><div class="notice">الحالة الحالية: ${statusText(k.status)}. لا تتوفر إجراءات مراجعة أو اعتماد لهذه المعرفة.</div>`)}

function chooseCategory(el,c){document.querySelectorAll('.radio-card').forEach(x=>x.classList.remove('selected'));el.classList.add('selected');let k=state.knowledge.find(x=>x.id===state.current);k.category=c;save();document.querySelector('.review-footer .btn-primary').disabled=false}

function returnModal(id){showReviewReason(id,'returned')}
function showReviewReason(id,type){
 const rejection=type==='rejected';
 modal.innerHTML=`<section class="modal review-reason-dialog" role="dialog" aria-modal="true" aria-labelledby="review-reason-title"><div class="modal-head"><h2 id="review-reason-title">${rejection?'رفض المعرفة':'إرجاع المعرفة للتعديل'}</h2><button class="close" onclick="closeModal()" aria-label="إغلاق">×</button></div><p>${rejection?'اكتب سبب الرفض ليصل إلى الموظف. لن تُنشر هذه المعرفة.':'اكتب ملاحظاتك وحدّد التعديلات المطلوبة ليتمكن الموظف من تعديل معرفته.'}</p><form onsubmit="event.preventDefault();${rejection?'rejectKnowledge':'returnKnowledge'}(${id})"><div class="field"><label for="reviewReason">${rejection?'سبب الرفض':'ملاحظات المراجع'} <span aria-hidden="true">*</span></label><textarea id="reviewReason" class="textarea" required placeholder="${rejection?'وضّح سبب رفض المعرفة…':'وضّح التعديلات المطلوبة…'}"></textarea><p id="reviewReasonError" class="reason-error hidden" role="alert">${rejection?'يرجى كتابة سبب الرفض.':'يرجى كتابة ملاحظاتك قبل الإرجاع.'}</p></div><div class="review-reason-actions"><button class="btn ${rejection?'btn-danger':'btn-primary'}" type="submit">${rejection?'تأكيد الرفض':'إرسال الملاحظات وإرجاع المعرفة'}</button><button class="btn btn-outline" type="button" onclick="closeModal()">إلغاء</button></div></form></section>`;modal.classList.remove('hidden');document.getElementById('reviewReason').focus();
}
function reviewReasonValue(){const value=document.getElementById('reviewReason').value.trim();document.getElementById('reviewReasonError').classList.toggle('hidden',Boolean(value));return value}

function returnKnowledge(id){const reason=reviewReasonValue();if(!reason)return;const k=state.knowledge.find(x=>x.id===id);if(!k||k.status!=='review'||!canReview(k))return;k.status='returned';k.returnReason=reason;delete k.rejectReason;addKnowledgeNotification('employee',k,'returned');save();render();showKnowledgeSuccess({title:'تمت إعادة المعرفة للتعديل',message:'تم إرسال ملاحظاتك إلى الموظف، وسيصله إشعار بسبب إرجاع المعرفة.',badge:'أُعيدت للتعديل',reviewer:true})}

function rejectModal(id){showReviewReason(id,'rejected')}

function rejectKnowledge(id){const reason=reviewReasonValue();if(!reason)return;const k=state.knowledge.find(x=>x.id===id);if(!k||k.status!=='review'||!canReview(k))return;k.status='rejected';k.rejectReason=reason;delete k.returnReason;addKnowledgeNotification('employee',k,'rejected');save();render();showKnowledgeSuccess({title:'تم رفض المعرفة',message:'تم إرسال سبب الرفض إلى الموظف، وسيصله إشعار يوضح السبب.',badge:'مرفوضة',reviewer:true,danger:true})}

function approve(id){const k=state.knowledge.find(x=>x.id===id);if(!k||k.status!=='review'||!canReview(k))return;k.status='published';k.publishedAt=new Date().toISOString();k.date=k.publishedAt.slice(0,10);delete k.returnReason;delete k.rejectReason;addKnowledgeNotification('employee',k,'published');save();render();showKnowledgeSuccess({title:'تم اعتماد ونشر المعرفة',message:`تم نشر «${k.title}» وأصبحت متاحة للموظفين في منصة بصمة معرفة، وأُرسل إشعار إلى صاحب المعرفة.`,badge:'منشورة',reviewer:true})}

function autoArchive(){const archiveAfterDays=365,limit=archiveAfterDays*24*60*60*1000,now=Date.now();state.knowledge.forEach(k=>{if(k.status==='published'&&now-new Date(k.date).getTime()>limit)k.status='archived'});save()}

function setMgFilter(key,val){state.mgFilter=Object.assign({dept:'all',period:'all'},state.mgFilter,{[key]:val});save();render()}

function logChat(q,matched){state.chatLog=state.chatLog||[];state.chatLog.push({date:new Date().toISOString().slice(0,10),matched,q});save()}

function managerHome(){

 const ar=n=>String(n).replace(/\d/g,d=>'٠١٢٣٤٥٦٧٨٩'[d]),

  f=Object.assign({dept:'all',period:'all'},state.mgFilter),

  now=new Date(),day=864e5,

  cut=f.period==='month'?new Date(now.getFullYear(),now.getMonth(),1):f.period==='3m'?new Date(now-90*day):f.period==='year'?new Date(now.getFullYear(),0,1):null,

  inP=d=>!cut||new Date(d)>=cut,

  deptList=[...new Set(state.knowledge.map(k=>k.dept))],

  all=state.knowledge.filter(k=>f.dept==='all'||k.dept===f.dept),

  pubs=all.filter(k=>k.status==='published'&&inP(k.date)),

  allPub=all.filter(k=>k.status==='published'),

  uses=pubs.reduce((a,k)=>a+k.uses,0),

  monthStart=new Date(now.getFullYear(),now.getMonth(),1),

  newM=allPub.filter(k=>new Date(k.date)>=monthStart).length,

  before=allPub.length-newM,

  growth=before?Math.round(newM/before*100):(newM?100:0),

  contributors=new Set(pubs.map(k=>k.owner)).size,

  allLog=state.chatLog||[],

  log=allLog.filter(l=>inP(l.date)),

  matched=log.filter(l=>l.matched).length,

  success=log.length?Math.round(matched/log.length*100):null,

  covAll=allLog.length?Math.round(allLog.filter(l=>l.matched).length/allLog.length*100):null,

  rated=pubs.filter(k=>k.rating>0),

  avg=rated.length?rated.reduce((a,k)=>a+k.rating,0)/rated.length:0,

  sat=rated.length?Math.round(avg/5*100):null,

  nodata='لا توجد بيانات بعد',

  kpis=[

   {label:'المعارف المعتمدة',icon:'book',val:ar(pubs.length),unit:'معرفة منشورة',sub:`${ar(uses)} استفادة إجمالًا`},

   {label:'نمو قاعدة المعرفة',icon:'trend',val:ar(growth)+'٪',unit:'هذا الشهر',sub:`${ar(newM)} معرفة جديدة مقابل ${ar(before)} سابقة`},

   {label:'المساهمون',icon:'users',val:ar(contributors),unit:'مساهم',sub:'عدد أصحاب المعارف المنشورة'},

   {label:'نجاح المساعد الذكي',icon:'msg',val:success===null?'—':ar(success)+'٪',unit:success===null?'':'إجابات مطابقة',sub:success===null?nodata:`${ar(matched)} من ${ar(log.length)} سؤال وجد معرفة مطابقة`},

   {label:'رضا المستخدمين',icon:'star',val:sat===null?'—':ar(sat)+'٪',unit:'',sub:sat===null?nodata:`متوسط ${ar(avg.toFixed(1))} من ٥ (${ar(rated.length)} معرفة مقيّمة)`}

  ],

  cols=['#9aa5b8','#9aa5b8','#dcaf38','#4f7f6c','#1f5443'],

  months=[4,3,2,1,0].map(i=>{const d=new Date(now.getFullYear(),now.getMonth()-i,1),key=`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}`;return{name:new Intl.DateTimeFormat('ar-SA-u-ca-gregory',{month:'long'}).format(d),n:allLog.filter(l=>!l.matched&&l.date.startsWith(key)).length}}),

  maxv=Math.max(1,...months.map(m=>m.n)),

  totalUn=months.reduce((a,m)=>a+m.n,0),

  gapLabel=n=>n===0?'لا أسئلة':n<=3?`${ar(n)} فقط`:n<=10?`${ar(n)} أسئلة`:`${ar(n)} سؤال`,

  trend=totalUn===0?(allLog.length?'كل الأسئلة وجدت إجابة':nodata):months[4].n<=months[3].n?'مسار إيجابي هابط':'ارتفاع في الأسئلة',

  palette=['#1f5443','#dcaf38','#4f7f6c','#c9d1de'],

  byDept=Object.entries(pubs.reduce((m,k)=>(m[k.dept]=(m[k.dept]||0)+1,m),{})).sort((a,b)=>b[1]-a[1]),

  recent=pubs.filter(k=>new Date(k.date)>=new Date(now-180*day)).length,

  fresh=pubs.length?Math.round(recent/pubs.length*100):null,

  pending=all.filter(k=>k.status==='review').length,

  returned=all.filter(k=>k.status==='returned').length,

  rejected=all.filter(k=>k.status==='rejected').length;

 return shell(`<div class="manager-page">

 ${crumb('لوحة مؤشرات الأداء')}

 ${pageHead('لوحة مؤشرات الأداء','متابعة مؤشرات المعرفة وتفاعل المستخدمين بحسب البيانات المتاحة في المنصة.',`<div class="mg-filters"><label>الإدارة:<select class="select" onchange="setMgFilter('dept',this.value)"><option value="all">جميع الإدارات</option>${deptList.map(d=>`<option ${f.dept===d?'selected':''}>${d}</option>`).join('')}</select></label><label>الفترة:<select class="select" onchange="setMgFilter('period',this.value)">${[['all','كل الفترات'],['month','هذا الشهر'],['3m','آخر ٣ أشهر'],['year','هذا العام']].map(p=>`<option value="${p[0]}" ${f.period===p[0]?'selected':''}>${p[1]}</option>`).join('')}</select></label></div>`)}

 <div class="mg-kpis">${kpis.map(k=>`<div class="mg-kpi"><div class="mg-kpi-top"><span>${k.label}</span><div class="mg-ico ${k.icon==='trend'||k.icon==='star'?'gold':''}">${svg(k.icon)}</div></div><div class="mg-val"><strong>${k.val}</strong><span>${k.unit}</span></div><div class="mg-sub">${k.sub}</div></div>`).join('')}</div>

 <div class="mg-row">

  <div class="mg-card">

   <div class="mg-head"><h2 class="mg-title g">مؤشر الفجوات المعرفية</h2><span class="mg-chip">${covAll===null?'بانتظار الأسئلة':`تغطية ${ar(covAll)}٪`}</span></div>

   <p class="mg-desc">أسئلة الشات بوت التي لم تجد معرفة مطابقة، وتُسجَّل تلقائيًا كلما سأل الموظفون.</p>

   <div class="mg-inner"><div class="mg-inner-head"><span>الأسئلة دون إجابة عبر الأشهر الأخيرة</span><span>${trend}</span></div>

    <div class="mg-bars">${months.map((m,i)=>`<div class="mg-bar-row"><span class="lbl">${m.name}</span><div class="mg-track"><div class="mg-fill" style="width:${Math.max(2,Math.round(m.n/maxv*100))}%;background:${cols[i]}"></div></div><span class="cnt">${gapLabel(m.n)}</span></div>`).join('')}</div></div>

   <div class="mg-cover"><div><b>نسبة الأسئلة المجابة من قاعدة المعرفة</b><br><small>${allLog.length?`محسوبة من ${ar(allLog.length)} سؤال مسجّل`:nodata}</small></div><strong>${covAll===null?'—':ar(covAll)+'٪'}</strong></div>

  </div>

  <div class="mg-card">

   <div class="mg-head"><h2 class="mg-title">مساهمة الإدارات في نشر المعرفة</h2><span class="mg-total">إجمالي: ${ar(pubs.length)} معرفة</span></div>

   <p class="mg-desc">توزيع المعارف المنشورة حسب الإدارة.</p>

   ${byDept.length?byDept.map((d,i)=>`<div class="mg-dept"><div class="mg-dept-top"><b>${d[0]}</b><span><b>${ar(d[1])}</b> معرفة (${ar(Math.round(d[1]/pubs.length*100))}٪)</span></div><div class="mg-track"><div class="mg-fill" style="width:${Math.round(d[1]/byDept[0][1]*100)}%;background:${palette[i%palette.length]}"></div></div></div>`).join(''):`<div class="empty">${nodata}</div>`}

  </div>

 </div>

 <div class="mg-row">

  <div class="mg-card mg-flex">

   <div class="mg-flex-main"><div class="mg-head"><h2 class="mg-title g">حداثة المعارف</h2><span class="mg-chip">${fresh===null?'لا بيانات':fresh>=80?'محقق':'يحتاج تحديث'}</span></div><p class="mg-desc">المعارف المنشورة أو المحدّثة خلال آخر ٦ أشهر (${ar(recent)} من ${ar(pubs.length)}).</p><div class="mg-track"><div class="mg-fill" style="width:${fresh||0}%;background:#1f5443"></div></div></div>

   <div class="mg-circle"><strong>${fresh===null?'—':ar(fresh)+'٪'}</strong><small>معارف حديثة</small></div>

  </div>

  <div class="mg-card mg-flex">

   <div class="mg-flex-main"><div class="mg-head"><h2 class="mg-title">حالة طلبات المراجعة</h2><span class="mg-chip">${pending?'يحتاج متابعة':'لا متأخرات'}</span></div><p class="mg-desc">المعارف المرسلة وحالتها لدى المراجع المعرفي.</p><div class="mg-sub"><i class="im-dot" style="background:#dcaf38"></i>أُعيدت للتعديل: ${ar(returned)}  •  <i class="im-dot" style="background:#b42318"></i>مرفوضة: ${ar(rejected)}</div></div>

   <div class="mg-time"><b>${ar(pending)}</b><small>بانتظار المراجعة</small></div>

  </div>

 </div>

 <p class="mg-note">* جميع الأرقام محسوبة من البيانات الموجودة في المنصة. مؤشرات الشات بوت والفجوات تبدأ بالتراكم مع أول سؤال يُطرح.</p>

 </div>`)}

function toggleNotifications(){state.notifOpen=!state.notifOpen;render()}
function openNotification(i){
 const n=state.notifications[state.role][i];if(!n)return;
 const k=state.knowledge.find(k=>k.id===n.id);
 if(!k){notify('هذه المعرفة لم تعد متاحة.');return}
 state.notifications[state.role].splice(i,1);save();
 if(state.role==='reviewer')go('review-detail',k.id);
 else if(k.status==='returned'&&k.owner===cu().name)go('edit',k.id);
 else go('detail',k.id);
}

function showModal(title,text,actions){modal.innerHTML=`<div class="modal"><div class="modal-head"><h2>${title}</h2><button class="close" onclick="closeModal()">×</button></div><p>${text}</p>${actions||''}</div>`;modal.classList.remove('hidden')}function closeModal(){modal.classList.add('hidden');modal.innerHTML=''}

function render(){let routes={login,regulationsPage,employeeHome,browse,detail,ask,minute,video,submit,impact,edit:editKnowledge,editKnowledge,reviewerHome,reviewDetail,managerHome};let key=state.route.replace(/-([a-z])/g,(_,x)=>x.toUpperCase());app.innerHTML=(routes[key]||login)()}

autoArchive();render();