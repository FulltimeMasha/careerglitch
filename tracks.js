/* ===== PathCheck — the Path (roadmap tracks) + Radar Issue #1 data.
   Every step traces to a line in the five pilot packages
   (~/workspace/pathcheck-{lawyer,cpa,nurse,fpna,creator}-pilot/:
   hr-checklist.md, sample-full-report.md, radar-issue-01.md) or to the
   gate's v1.1 data layer (v11.js doors). Do not invent steps, numbers,
   or claims.
   src = the package section the step comes from.
   Plain-language rewrite 2026-10-30 (founder voice standard): short
   sentences, every term explained in place; facts and digits unchanged. ===== */

var PROF_META = {
  law:   {name:'Legal',            kick:'Legal',            code:'VERDICT', count:46},
  cpa:   {name:'Accounting / CPA', kick:'Accounting / CPA', code:'LEDGER',  count:54},
  nurse: {name:'Nursing',          kick:'Nursing',          code:'PULSE',   count:42},
  fin:   {name:'Finance / FP&A',   kick:'Finance / FP&A',   code:'MODEL',   count:40},
  creator:{name:'Content Creator', kick:'Content Creator — the staff job', code:'UPLOAD',  count:40, srcWhat:'staff job posts', srcWhatRu:'вакансий в штат'},
  analyst:{name:'Business / Data Analyst', kick:'Business / Data Analyst', code:'CHARTS', count:46},
  dataanalyst:{name:'Data Analyst', kick:'Data Analyst', code:'CHARTS', count:24},
  businessanalyst:{name:'Business Analyst', kick:'Business Analyst', code:'BRIEF', count:22}
};

/* Verdict recap per seat — labels distilled from the gate cards' own
   headlines (SEATS in index.html) + confidence from v11.js. */
var SEATINFO = {
  specialist:{prof:'law', label:'Specialist paralegal — privacy / diligence / healthcare', verdict:'YES', conf:'High'},
  paralegal:{prof:'law', label:'Paralegal (generalist)', verdict:'NO — as your final stop', conf:'High'},
  docreview:{prof:'law', label:'Document review', verdict:'NO — as a career', conf:'High'},
  lawstudent:{prof:'law', label:'Law student / law school', verdict:'YES — specialty first', conf:'Medium'},
  bookkeeper:{prof:'cpa', label:'Bookkeeper', verdict:'NO — as your final stop', conf:'High'},
  tax:{prof:'cpa', label:'Tax — preparer / professional', verdict:'NO generalist · YES specialized', conf:'High'},
  staff:{prof:'cpa', label:'Staff accountant (generalist)', verdict:'NO — as your final stop', conf:'High'},
  audit:{prof:'cpa', label:'Audit', verdict:'NO as a final stop · YES as a bridge', conf:'Medium'},
  technical:{prof:'cpa', label:'Technical accounting / SEC reporting', verdict:'YES', conf:'High'},
  fdd:{prof:'cpa', label:'Transaction advisory (FDD) / forensic', verdict:'YES — the top money in our scan', conf:'High'},
  controller:{prof:'cpa', label:'Controller', verdict:'YES — if you own the systems', conf:'High'},
  medsurg:{prof:'nurse', label:'Med-surg nurse', verdict:'NO — as your final stop', conf:'High'},
  specialty:{prof:'nurse', label:'Specialty RN (ICU / ER / OR)', verdict:'YES', conf:'High'},
  travel:{prof:'nurse', label:'Travel nurse', verdict:'YES — after 2 years of specialty', conf:'Medium'},
  nstudent:{prof:'nurse', label:'Nursing student', verdict:'YES — license cheap', conf:'High'},
  np:{prof:'nurse', label:'Nurse practitioner (NP)', verdict:'YES — by specialty', conf:'Medium'},
  crna:{prof:'nurse', label:'CRNA (nurse anesthetist)', verdict:'YES — the hardest way in, the biggest money', conf:'High'},
  lpn:{prof:'nurse', label:'LPN / LVN', verdict:'NO — start as an RN instead', conf:'High'},
  reporting:{prof:'fin', label:'Generalist reporting analyst', verdict:'NO', conf:'High'},
  fpa:{prof:'fin', label:'FP&A analyst / business partner', verdict:'YES', conf:'High'},
  strategic:{prof:'fin', label:'Strategic finance', verdict:'YES', conf:'High'},
  hybrid:{prof:'fin', label:'BI / analytics hybrid', verdict:'YES — the fastest way in', conf:'High'},
  corpdev:{prof:'fin', label:'Corporate development', verdict:'YES — narrow, early window', conf:'Medium'},
  faceless:{prof:'creator', label:'Faceless / AI-mass channel', verdict:'NO', conf:'High'},
  streamer:{prof:'creator', label:'Streamer', verdict:'NO', conf:'High'},
  personality:{prof:'creator', label:'Personality creator — ads & deals only', verdict:'NO as a plan · YES as a way in', conf:'Medium'},
  ugc:{prof:'creator', label:'UGC creator', verdict:'YES', conf:'Medium'},
  educator:{prof:'creator', label:'Educator / expert creator', verdict:'YES', conf:'Medium'},
  creatorbiz:{prof:'creator', label:'Creator with a business', verdict:'YES', conf:'High'},
  /* Staff seats (v2 reframe, 2026-11-01). The six legacy seats above
     stay readable for existing creator leads; the gate matcher no
     longer routes to them. */
  brandcreator:{prof:'creator', label:'Brand content creator — studio of one', verdict:'YES', conf:'Medium'},
  facecreator:{prof:'creator', label:'Face-of-the-brand creator — on camera', verdict:'YES', conf:'Medium'},
  perfcreator:{prof:'creator', label:'Paid-social / performance creator', verdict:'YES', conf:'Medium'},
  agencycreator:{prof:'creator', label:'Agency staff creator', verdict:'NO — as your final stop · YES as a school', conf:'Medium'},
  mediacreator:{prof:'creator', label:'Media / writing-led creator', verdict:'NO', conf:'Medium'},
  genba:{prof:'businessanalyst', label:'Business analyst — requirements & documents', verdict:'NO — as your final stop', conf:'High'},
  reportda:{prof:'dataanalyst', label:'Data analyst — reports & dashboards', verdict:'NO — as your final stop', conf:'High'},
  prodan:{prof:'dataanalyst', label:'Product analyst', verdict:'YES', conf:'High'},
  aneng:{prof:'dataanalyst', label:'Analytics engineer', verdict:'YES — the data-model job', conf:'High'},
  bizops:{prof:'businessanalyst', label:'Strategy & operations analyst', verdict:'YES — if you can get in the room', conf:'Medium'},
  dsgate:{prof:'dataanalyst', label:'Data scientist — the upgrade title', verdict:'YES — a different job', conf:'High'}
};

/* Per-seat door paragraphs — the gate cards' own door copy (SEATS in
   index.html, tags stripped). The track opens with this move. */
var DOORS = {
  specialist:'The best paralegal job post in our scan pays $150K–$200K. There, the paralegal runs Kira and Harvey AI. They do diligence checks and own the deal-closing programs. Diligence means checking a deal before it closes. What to do: pick ONE specialty. Privacy and AI rules is one. Corporate diligence is one. Healthcare rules is one. Master the AI tools in your specialty.',
  paralegal:'What to do instead: don\'t climb the general ladder. Step sideways into one specialty. Pick privacy and AI rules, corporate diligence, or healthcare rules. Use the AI tools. Don\'t compete with them. A J.D. (law degree) only pays off in these same specialties.',
  docreview:'What to do instead: treat document review as paid training. It\'s not a final stop. Move up to the senior specialist job. That job runs the review AI. One such job post pays $150K–$200K, and the paralegal runs Kira and Harvey there. Or aim a J.D. (law degree) at a YES specialty.',
  lawstudent:'What to do instead of “law school in general”: pick your specialty before you take on debt. Pick privacy and AI rules, corporate diligence, or healthcare rules. Build proof for it from year one. Proof means clinics, certificates and programs you know. Don\'t wait until graduation.',
  bookkeeper:'What to do instead: use this job as a starting point, not a home. Move to staff accountant. Then aim at a specialty where you sign the work. One is controller who runs the ERP, at $130–200K + bonus. ERP is the company\'s main money program. Another is narrow tax, at $125–200K. The CPA pays only in a niche. It doesn\'t pay for “accounting in general.”',
  tax:'What to do instead: don\'t sell hours of tax prep. Specialize. Work with pass-through companies or rich clients (high-net-worth). Get the license that 8 of 10 manager job posts demand. Your signature protects your pay. AI does prep work for almost nothing.',
  staff:'What to do instead: pick your niche first. Then pick the exam. The niches are narrow tax, technical accounting / SEC reporting, and deal advisory. A license for “accounting in general” keeps you in the same jobs. AI is taking over those jobs.',
  audit:'What to do instead: get the audit firm name on your resume, then leave. That name opens doors. Practice building financial models. Then move to FDD (deal checks) or technical accounting. Do it before computers take over your current work.',
  technical:'What to do: this specialty is already a YES. Grow the skills that protect your pay. Get better at SEC reporting. Master reporting programs like Workiva. Charge a lot for your signature. The Full Report shows how to move here from a staff job. It also shows the state rule for your exam path.',
  fdd:'What to do instead of collecting certificates: this specialty pays for good calls on real deals. The way in is through audit. Audit gives you the name. Modeling practice gives you the skill. The Full Report shows what this move costs from your current job.',
  controller:'What to do instead of doing the month-end close forever: own the ERP and the close. The close is the month-end money count. Then this job can grow toward CFO. The CFO is the top money boss. The Full Report shows which systems skills HR checks for at this pay.',
  medsurg:'What to do instead: use the med-surg job as a start, not a home. Move into a specialty in the first year or two. The specialties are ICU, ER and OR. Your specialty is what grows. It opens travel pay, the CRNA path, and NP paths that pay well.',
  specialty:'What to do: this specialty is a YES. Go deeper in it. Then pick your next step by real pay numbers, not feelings. The options are travel money, CRNA, and specialty NP. The Full Report puts these steps in order.',
  travel:'What to do instead: build your specialty first. The specialties are ICU, ER and OR. Then take the travel money while it lasts. Save it for your NP or CRNA choice. Don\'t spend it on lifestyle.',
  nstudent:'What to do instead of paying for the longest degree first: get the license cheap, with the ADN (short nursing degree). Take a specialty job first. Let employers pay for RN-to-BSN while you earn. NP comes later. Pick it by specialty, not because others do.',
  np:'What to do instead of “FNP because everyone does FNP”: pick the specialty that pays extra in job posts. Psych pays the most right now. Check your state’s rules before you pay tuition. They show what an NP may do in your state. The same license pays differently in different states.',
  crna:'What to do: build your ICU years on purpose. They are your real application. This is the one specialty where the expensive degree is not a trap. Here, the degree from an approved school is the license itself.',
  lpn:'What to do instead: skip the LPN step. Become an RN through the ADN (short nursing degree). Already an LPN? Check what LPN-to-RN costs. Don\'t spend years in a job where pay stops growing early.',
  reporting:'What to do instead: move to a nearby job. One is FP&A business partner. It pays up to $276,250. Another is the BI / analytics hybrid. It\'s the fastest way in, at $138K–$180,600. Job posts list the skills they want: SQL, then a platform, then BI.',
  fpa:'What to do instead of putting reports together: own a P&L next to one business team. A P&L is a team\'s profit-and-loss sheet. They pay for judgment and trust, not slides. The Full Report puts the skills you lack in order. The skills are SQL, then a platform, then BI.',
  strategic:'What to do instead of collecting certificates first: build a set of real cases. Cases are real problems you solved, like pricing and unit economics. Unit economics is the money math of one sale. Build them on real SQL. The Full Report picks your first cases and puts the skills in order.',
  hybrid:'What to do instead: if you\'re good with data, take this way in. It skips the line. A hybrid job with 1–3 years of experience pays above the typical analyst. The typical pay is $103,570. The Full Report puts the skills in order from your current job.',
  corpdev:'What to do instead: if you\'re still early enough, move now. You can also get the background through a banking or consulting job. Background here means a famous name on your resume. If it\'s too late, don\'t chase it. The FP&A partner and hybrid paths pay about the same without it.',
  faceless:'The way in, if you love this format: make directed work. Directed means you decide what the AI makes. Your face or voice is in it. It has choices a prompt can\'t make. Directed work kept its pay in the 2026 crackdown.',
  streamer:'The way in: use streaming to show off, not as the business. A small live audience that trusts you will buy. Clips become UGC (videos you make for brands). The audience becomes a list. The list buys products. That\'s the creator-with-a-business job. Streaming alone is a NO.',
  personality:'The way in: keep the deals and add a business. A product or affiliate line you control. Affiliate means you earn a cut when your link sells. An email list you own. Deals bring the audience. The business keeps the money. Creator with a business is a YES.',
  ugc:'What to do: get ready for buyers. Make a one-page media kit. Write one sentence on the problem your audience pays to fix. Do two paid jobs. Then raise your price toward $500 as results grow. UGC is a trade: the money is real, and you earn it per video.',
  educator:'What to do: sell proof you\'re an expert, not more videos. Pick one problem your audience pays to solve. Teach it with a face they can check. Then add a course or product under your own name. That makes this the strongest job in the group.',
  creatorbiz:'What to do: run it like the owner you are. Every 3 months check three numbers. RPM. Deal rate. And the share of income you own. RPM is what you earn per 1,000 views. If one platform still controls most of your money, fix that next. The Full Report builds your 18-month plan.',
  brandcreator:'What to do: this job is a YES if you can do it all alone. Idea, filming, editing, posting, and reading the numbers. Then add a rare skill most people don\'t have. That can be trust on camera, paid ad results, or deep knowledge of one industry. Plain content making stops growing where these jobs start.',
  facecreator:'What to do: AI can\'t fake your face believably for one company. Add rare knowledge to it — a trade, a technology, or one industry. Then your face is paid like Fictiv ($110–135K), not like Patriot (about $44–54K).',
  perfcreator:'What to do: learn to read an ad account like you read an audience. Run one paid test from start to finish. A test with a number on it is the rarest proof in this market.',
  agencycreator:'What to do instead: work at an agency for 1–3 years as a school, not a home. Then take your work for several clients to a brand, face or ad job. There, the same skills pay $100K+.',
  mediacreator:'What to do instead: keep writing, but sell video first. In this same scan, the same video skills pay $15–25K more in brand and ad jobs.',
  genba:'What to do instead: move sideways, not up. Your years with stakeholders count for product analyst and strategy jobs. A stakeholder is a person who decides based on your work. Your years of writing documents don\'t add up anywhere. One decision you can point to gets you out.',
  reportda:'What to do instead: keep SQL, but use it for something else. Product analyst jobs hire from reporting jobs. So do analytics engineer jobs. The first runs experiments. The second builds data models. Both pay for decisions.',
  prodan:'What to do: this job is a YES if you can run an experiment from start to finish. Grow experiments and metrics. A metric is a number a team watches. The Full Report puts the skills in order: SQL, then experiments, then metrics you can show.',
  aneng:'What to do: this job is a YES. Go deeper in dbt and one data warehouse. The warehouse is where company data lives. Start with Snowflake. Get better at data modeling. The Full Report puts it in order.',
  bizops:'What to do: this job is a YES, but hard to get into. The way in is years in consulting or banking. Or proof from your own job: one decision you changed, with numbers. The Full Report shows both ways.',
  dsgate:'What to do: this title is a new job, not a promotion. The way in is statistics, Python, and one real model you shipped. You won\'t get this title just by waiting as an analyst.'
};

/* Grid (whole-map) leads — recap from the gate's own grid summaries. */
var GRIDINFO = {
  law:{head:'Law is a YES — if you pick a specialty. The most common way in is a NO.', short:'“Law” is really several very different jobs. Privacy and AI rules will stay needed. Checking companies before big deals will stay needed. Health-care rules will stay needed. Their job posts pay up to $319K. The general paralegal job is a bad bet. Law school with no clear goal is a bad bet.'},
  cpa:{head:'Accounting is a YES — if you pick a specialty. The most common jobs are a NO.', short:'“Accountant” is nine jobs. The general jobs are a bad bet: keeping the books, preparing tax returns, audit as a final stop. Chosen specialties stay needed: narrow tax, reporting for public companies (SEC reporting), checking a company before a sale (FDD), forensic work, and the controller job. They pay $120K–$225K.'},
  nurse:{head:'Nursing is a YES. The most common way in is a NO.', short:'It depends which nurse you become. Specialty RN, psych NP, CRNA and travel nurses will stay needed. Med-surg (the general ward) as your final stop is a dead end, and starting as an LPN is a bad bet. Generalist FNP work is a bad bet in big cities, where too many people already do it.'},
  fin:{head:'“Financial analyst” is five jobs. Three are growing. One is a trap. One is very hard to get into.', short:'“Financial analyst” is five jobs. The general reporting job is a trap. Its typical pay is $103,570, and junior jobs there are down 21%. FP&A partnering pays up to $276,250. Strategic finance and the analytics hybrid pay in that range too.'},
  creator:{head:'STAFF CONTENT CREATOR IS A YES. THE WRITING DESK IS A NO.', short:'The staff content creator job is a YES. It\'s a salaried job inside a company, paying around $77,000 in job posts. Best are the brand, face and ad jobs. The agency job is a school, not a home. The writing-led desk is a NO.'},
  analyst:{head:'Analyst is a YES. The version that only makes reports is a NO.', short:'“Analyst” is six jobs. The two reporting jobs are a bad end point: they write documents about what is needed and make charts on request. The decision jobs are a good choice: product analyst and strategy and operations. Analytics engineering, which builds clean data tables, is also a good choice. They pay $96K–$300K.'},
  dataanalyst:{head:'“Data analyst” is four jobs. One is a trap. Two pay like decision-making jobs. One builds the data models.', short:'“Data analyst” is four different jobs. The reporting job is a bad end point. It means making charts on request for $60K–$75K at entry, and 1,108 people applied for one junior job. The decision job is a good choice: product analyst. The job that builds clean data tables is also a good choice: analytics engineering. They pay $96K–$300K.'},
  businessanalyst:{head:'“Business analyst” is two jobs. One writes documents all day. One helps bosses make decisions.', short:'“Business analyst” is two different jobs. Writing requirement documents is a bad bet: junior pay is $51K–$82K, and AI now drafts those documents. The strategy & operations job is a good bet: Google pays $124K–$177K. Same title. Different work.'}
};

var PHASE_NAMES = ['The gate', 'Proof', 'Get picked'];

var TRACKS = {
/* ================= LAW ================= */
law: [
  {name:'The gate', steps:[
    {id:'law-g1', t:'Get a bachelor’s degree. 19 of 21 senior paralegal job posts ask for it. To become an attorney, you need a J.D. A J.D. is the law degree. It must come from an accredited school. Accredited means the state accepts the school. 23 of 25 top job posts ask for it.', src:'HR checklist · Parts 1–2, Must-have', ru:'Получите диплом бакалавра. Его требуют 19 из 21 вакансий senior paralegal. Чтобы стать attorney (адвокатом), нужен J.D. J.D. — это диплом юриста. Школа должна быть аккредитованной, то есть признанной штатом. Его требуют 23 из 25 лучших вакансий.', sru:'HR-чек-лист · Части 1–2, обязательное'},
    {id:'law-g2', t:'Get a paralegal certificate. It\'s a short study program for paralegals. 14 of 21 senior job posts ask for one. 6 of 21 name a program approved by the ABA. The ABA is the American Bar Association.', src:'HR checklist · Part 2, Must-have', ru:'Получите сертификат paralegal (помощника юриста). Это короткая учёба. Его просят 14 из 21 senior-вакансий. 6 из 21 хотят программу, одобренную ABA. ABA — это American Bar Association, ассоциация юристов США.', sru:'HR-чек-лист · Часть 2, обязательное'},
    {id:'law-g3', t:'To become an attorney, you need a bar license. It lets you work as a lawyer. It must be active and in good standing. Good standing means no problems on your record. 22 of 25 top job posts ask for it. 17 of 25 accept a license from any one US state.', src:'HR checklist · Part 1, Must-have', ru:'Чтобы стать attorney (адвокатом), нужна лицензия bar. Она даёт право работать юристом. Лицензия должна быть действующей и без нарушений в досье. Её требуют 22 из 25 лучших вакансий. 17 из 25 подходит лицензия любого одного штата США.', sru:'HR-чек-лист · Часть 1, обязательное'},
    {id:'law-g4', t:'Become a notary. A notary can stamp and sign official papers. 5 of 21 senior paralegal job posts name it. It\'s cheap and fast to get.', src:'HR checklist · Part 2, Must-have', ru:'Станьте notary (нотариусом). Notary заверяет официальные бумаги печатью и подписью. Это упоминают 5 из 21 senior-вакансий paralegal. Получить статус дёшево и быстро.', sru:'HR-чек-лист · Часть 2, обязательное'}
  ]},
  {name:'Proof', steps:[
    {id:'law-p1', t:'Go deep in ONE practice area. A practice area is one kind of law work, like privacy or company deals. Senior jobs start at 5+ years in the same area. The top jobs ask for 10+. Gibson Dunn asks for 10 years in an AmLaw 100 firm. That\'s the list of the biggest US law firms.', src:'HR checklist · Part 2, Must-have', ru:'Углубитесь в ОДНУ область права. Например, privacy или сделки компаний. Senior-уровень начинается с 5+ лет в одной области. Лучшие работы просят 10+. Gibson Dunn просит 10 лет в фирме из AmLaw 100. Это список крупнейших юридических фирм США.', sru:'HR-чек-лист · Часть 2, обязательное'},
    {id:'law-p2', t:'Learn the main program for your kind of work. For court cases (litigation), it\'s Relativity. For company deals, it\'s Carta and iManage Closing Folders. For company paperwork, it\'s Diligent Entities, hCue and GEMS.', src:'HR checklist · Part 2, Platform stack', ru:'Выучите главную программу для вашего направления. Для судебных дел (litigation) это Relativity. Для сделок компаний — Carta и iManage Closing Folders. Для документов юрлиц — Diligent Entities, hCue и GEMS.', sru:'HR-чек-лист · Часть 2, стек платформ'},
    {id:'law-p3', t:'Set up one AI workflow at your current job. A workflow is the steps you take to finish one task. Write down the time before and after. Top job posts want exactly this written proof.', src:'Full Report · §5, months 0–3', ru:'Настройте одну задачу с AI на текущей работе. Запишите, сколько времени она занимала до и после. Лучшие вакансии хотят именно такое письменное доказательство.', sru:'Полный отчёт · §5, месяцы 0–3'},
    {id:'law-p4', t:'Show you can use legal AI tools well. 7 of 25 attorney job posts ask for this. They never name a brand.', src:'HR checklist · Part 1, AI-era requirements', ru:'Покажите, что хорошо умеете работать с юридическими AI-инструментами. Это прямо просят 7 из 25 вакансий attorney. Названий инструментов они не дают.', sru:'HR-чек-лист · Часть 1, требования эпохи AI'},
    {id:'law-p5', t:'Know Microsoft Office / 365, program by program. Job posts list the programs one by one. 12–13 of 21 senior paralegal job posts still require it.', src:'HR checklist · Part 2, Must-have', ru:'Знайте Microsoft Office / 365 — каждую программу. Вакансии перечисляют их по одной. Это всё ещё требуют 12–13 из 21 senior-вакансий paralegal.', sru:'HR-чек-лист · Часть 2, обязательное'},
    {id:'law-p6', t:'Privacy specialty only: get CIPP/US. CIPP/US is the main privacy certificate. 3 of 3 privacy job posts that named a certificate named this one.', src:'HR checklist · Part 1, Differentiators', ru:'Только для privacy: получите CIPP/US. Это главный сертификат по защите данных. Все 3 из 3 вакансий privacy, где упомянут сертификат, называют именно его.', sru:'HR-чек-лист · Часть 1, преимущества'}
  ]},
  {name:'Get picked', steps:[
    {id:'law-k1', t:'Show your years as ONE practice area. Top job posts ask for 5–10 years in one area. Write your story so your years look that way.', src:'Gate data · v1.1 door', ru:'Покажите свой опыт как работу в ОДНОЙ области. Лучшие вакансии просят 5–10 лет в одной области. Опишите свою историю так, чтобы это было видно.', sru:'Данные ворот · дверь v1.1'},
    {id:'law-k2', t:'Lead with business judgment. That means advice that helps the company and weighs the risk. It\'s the #1 soft skill in top job posts. 7+ of 25 name it. Give practical advice that gets the business moving.', src:'HR checklist · Part 1, Differentiators', ru:'Делайте упор на business judgment — деловое чутьё. Это советы, которые помогают компании и учитывают риск. Это soft skill №1 в лучших вакансиях. Его называют 7+ из 25. Давайте практичные советы, которые двигают бизнес вперёд.', sru:'HR-чек-лист · Часть 1, преимущества'},
    {id:'law-k3', t:'Apply at the specialist level. Here are two jobs to aim at. Gibson Dunn Sr. Corporate Paralegal pays $150K–$200K. Cooley pays $135,200–$176,800.', src:'HR checklist · Part 2, posted bands', ru:'Подавайтесь на уровень specialist. Вот две работы, в которые стоит целиться. Gibson Dunn Sr. Corporate Paralegal платит $150K–$200K. Cooley платит $135,200–$176,800.', sru:'HR-чек-лист · Часть 2, вилки из вакансий'},
    {id:'law-k4', t:'Before law school, do the math. Your first salary must beat your debt. Look at the typical (median) numbers. The median first salary is $100,000. The median J.D. debt is $112,500.', src:'Full Report · §5, month-3 decision gate', ru:'Прежде чем идти в law school, посчитайте. Первая зарплата должна быть больше долга. Смотрите на типичные (медианные) цифры. Типичная первая зарплата — $100,000. Типичный долг за J.D. — $112,500.', sru:'Полный отчёт · §5, контрольная точка 3-го месяца'}
  ]}
],
/* ================= CPA ================= */
cpa: [
  {name:'The gate', steps:[
    {id:'cpa-g1', t:'Get a bachelor’s degree in accounting or finance. 52 of 52 job posts with clear requirements ask for it.', src:'HR checklist · Filter 5, Must-have', ru:'Получите диплом бакалавра по accounting или finance. Его требуют 52 из 52 вакансий с понятными требованиями.', sru:'HR-чек-лист · Фильтр 5, обязательное'},
    {id:'cpa-g2', t:'Week 1: check how your state board gives the license. The state board is the office that gives the CPA license. About 32 states now give it at 120 credits + 2 years of experience. Credits are study units. That way, the fifth year of school costs $0.', src:'Full Report · §4–§5', ru:'Неделя 1: узнайте, как board вашего штата выдаёт лицензию. Board — это офис, который выдаёт лицензию CPA. Около 32 штатов теперь дают её при 120 credits (учебных единицах) + 2 годах опыта. Так пятый год учёбы стоит $0.', sru:'Полный отчёт · §4–§5'},
    {id:'cpa-g3', t:'Pass the CPA exam. It has 3 Core sections and 1 Discipline section. You must pass them all within a set time. In most states, that\'s 30 months. Only 42% pass FAR the first time. FAR is the hardest section. Save money for one retake.', src:'HR checklist · CPA exam facts', ru:'Сдайте экзамен CPA. В нём 3 секции Core и 1 секция Discipline. Сдать их все нужно за ограниченное время. В большинстве штатов — за 30 месяцев. FAR с первого раза сдают только 42%. FAR — самая трудная секция. Отложите деньги на одну пересдачу.', sru:'HR-чек-лист · факты об экзамене CPA'},
    {id:'cpa-g4', t:'Pick the Discipline section by your niche, not by pass rate. Your niche is your part of the market. BAR leads to technical accounting and advisory. ISC leads to IT audit and AI governance. TCP leads to specialized tax.', src:'Full Report · §4', ru:'Выбирайте секцию Discipline по своей нише, а не по тому, где легче сдать. Ниша — это ваша часть рынка. BAR ведёт в technical accounting и advisory. ISC — в IT audit и AI governance. TCP — в specialized tax.', sru:'Полный отчёт · §4'},
    {id:'cpa-g5', t:'Work under a licensed CPA. You need 1 year of this work if you studied 150 credits. You need 2 years if you studied 120 credits. In most states, a licensed CPA must sign your experience.', src:'HR checklist · CPA exam facts', ru:'Поработайте под руководством лицензированного CPA. Нужен 1 год такой работы, если вы учились 150 credits. Нужно 2 года, если 120 credits. В большинстве штатов ваш опыт должен подписать лицензированный CPA.', sru:'HR-чек-лист · факты об экзамене CPA'}
  ]},
  {name:'Proof', steps:[
    {id:'cpa-p1', t:'Learn NetSuite well. It is a program where companies keep their money records. 18 of 52 job posts ask for it. For senior accountant jobs in companies, it is 10 of 10.', src:'HR checklist · Platform stack', ru:'Хорошо выучите NetSuite. Это программа, где компании ведут свои денежные записи. Её просят 18 из 52 вакансий. Для senior accountant в компаниях это 10 из 10.', sru:'HR-чек-лист · стек платформ'},
    {id:'cpa-p2', t:'Learn GAAP for real. GAAP is the rulebook for how companies count money. Start with ASC 606. It is the rule for counting money from customers. Senior job posts name it again and again. Then learn ASC 842, the rule for rent deals. And ASC 718, the rule for paying workers with company stock. SOX 404 is the rule for money checks inside big public companies. It shows up in SEC reporting jobs.', src:'HR checklist · Filter 5, Must-have', ru:'Выучите GAAP по-настоящему. GAAP — это книга правил, как компании считают деньги. Начните с ASC 606. Это правило, как считать деньги от клиентов. Senior-вакансии называют его снова и снова. Потом выучите ASC 842 — правило для сделок аренды. И ASC 718 — правило, как платить работникам акциями компании. SOX 404 — правило для проверок денег внутри больших публичных компаний. Оно встречается в вакансиях SEC reporting.', sru:'HR-чек-лист · Фильтр 5, обязательное'},
    {id:'cpa-p3', t:'Learn Workiva. Workiva is a program for company reports. 6 job posts name it. All of them are SEC reporting and technical jobs. SEC reporting means reports for public companies. Knowing these reporting programs makes you stand out here.', src:'HR checklist · Platform stack', ru:'Выучите Workiva. Это программа для отчётов компаний. Её называют 6 вакансий. Все — в SEC reporting и technical. SEC reporting — это отчёты публичных компаний. Если вы знаете эти программы, вы выделяетесь в этой нише.', sru:'HR-чек-лист · стек платформ'},
    {id:'cpa-p4', t:'Learn Excel beyond the basics. Know pivot tables and VLOOKUP. A pivot table sums up big lists in seconds. 8 of 8 staff job posts check for them. Advisory jobs ask for more: financial modeling. That means building money plans in Excel.', src:'HR checklist · Platform stack', ru:'Выучите Excel дальше базы. Знайте сводные таблицы (pivot tables) и VLOOKUP. Сводная таблица за секунды подводит итоги по большим спискам. Их проверяют 8 из 8 вакансий staff. В advisory просят больше: financial modeling. Это денежные планы в Excel.', sru:'HR-чек-лист · стек платформ'},
    {id:'cpa-p5', t:'Learn Power BI. Power BI turns data into charts. 4 job posts name it. All of them are advisory. SQL shows up in 0 of 52 job posts. Learn the tools your niche asks for, not famous ones.', src:'HR checklist · Platform stack', ru:'Выучите Power BI. Он превращает данные в графики. Его называют 4 вакансии. Все — в advisory. SQL встречается в 0 из 52 вакансий. Учите то, что просят в вашей нише, а не модные инструменты.', sru:'HR-чек-лист · стек платформ'},
    {id:'cpa-p6', t:'Pick ONE industry and go deep. An industry is one kind of business. The best-paying job posts name theirs. Manufacturing cost accounting is one. SaaS revenue is one — it uses ASC 606. Pass-through entities (small firms whose owners pay the tax) are one. HNW and UHNW clients are one. HNW means rich clients.', src:'HR checklist · Filter 5, Must-have', ru:'Выберите ОДНУ отрасль и разберитесь в ней глубоко. Отрасль — это один вид бизнеса. Лучше всего платят там, где отрасль названа. Например: manufacturing cost accounting. SaaS revenue (тут нужен ASC 606). Pass-through entities (небольшие фирмы, где налог платят владельцы). Клиенты HNW и UHNW. HNW — значит богатые клиенты.', sru:'HR-чек-лист · Фильтр 5, обязательное'}
  ]},
  {name:'Get picked', steps:[
    {id:'cpa-k1', t:'Become the tech person at your current job. Take on one piece of tech work. Run part of the month-end close automation. Or own the tools that check two records match. Or own the ERP. The ERP is the company\'s main money program.', src:'Full Report · §5, months 0–3', ru:'Станьте главным по технике на своей работе. Возьмите на себя одну техническую задачу. Например, автоматизацию закрытия месяца. Или инструменты сверки — проверки, что две записи совпадают. Или ERP — главную денежную программу компании.', sru:'Полный отчёт · §5, месяцы 0–3'},
    {id:'cpa-k2', t:'Write down one process you made better. Show the hours before and after. Good job posts look for exactly this one-page proof.', src:'Full Report · §5, months 0–3', ru:'Опишите один процесс, который вы улучшили. Покажите, сколько часов он занимал до и после. Хорошие вакансии ищут именно такое доказательство на одну страницу.', sru:'Полный отчёт · §5, месяцы 0–3'},
    {id:'cpa-k3', t:'Make one piece of proof for your niche. Write one technical memo. A memo is a short note that explains a hard case. Or build one model. Or run one controls project. Controls are checks that keep money safe. Write it all down.', src:'Full Report · §5, months 4–9', ru:'Сделайте одну работу-доказательство для своей ниши. Напишите одно техническое memo — короткую записку о трудном случае. Или постройте одну модель. Или проведите проект по controls — проверкам, которые берегут деньги. Всё запишите.', sru:'Полный отчёт · §5, месяцы 4–9'},
    {id:'cpa-k4', t:'Save a list of target jobs. Collect 10+ real job posts in your niche. Read what they ask for. Close your gaps one by one. A gap is a skill they want that you don\'t have yet.', src:'Full Report · §5, month-3 decision gate', ru:'Сохраните список вакансий-целей. Соберите 10+ настоящих вакансий в вашей нише. Прочитайте, что они просят. Закрывайте пробелы по одному. Пробел — это навык, которого у вас пока нет.', sru:'Полный отчёт · §5, контрольная точка 3-го месяца'},
    {id:'cpa-k5', t:'Want an FDD job or a top industry job? FDD means checking a company’s money before a sale. You need experience at an accounting firm (public accounting). 11 job posts outside such firms say so plainly.', src:'HR checklist · Filter 5, Must-have', ru:'Хотите работу в FDD или лучшую работу в отрасли? FDD — это проверка денег компании перед продажей. Нужен опыт в бухгалтерской фирме (public accounting). 11 вакансий вне таких фирм прямо это пишут.', sru:'HR-чек-лист · Фильтр 5, обязательное'}
  ]}
],
/* ================= NURSE ================= */
nurse: [
  {name:'The gate', steps:[
    {id:'nur-g1', t:'Keep an active RN license in your state. 16 of 16 job posts ask for it. In a compact state, your license works in many states. 40 states use this system now. Keep that multistate license clean. It\'s your key to travel jobs.', src:'HR checklist · Part 1, Must-have', ru:'Держите лицензию RN в вашем штате действующей. Её просят 16 из 16 вакансий. В штате-участнике compact лицензия работает во многих штатах. Сейчас так делают 40 штатов. Не допускайте нарушений по этой multistate-лицензии. С ней можно работать travel-медсестрой.', sru:'HR-чек-лист · Часть 1, обязательное'},
    {id:'nur-g2', t:'Get the license the cheap way. The ADN costs $5,472 in total tuition at Wake Tech. The ADN is the short nursing degree. You pass the same NCLEX as with a BSN. The NCLEX is the nurse license exam. Then study up to a BSN while you work.', src:'HR checklist · The BSN truth', ru:'Получите лицензию дёшево. ADN — это короткая степень медсестры. В Wake Tech всё обучение стоит $5,472. Вы сдаёте тот же NCLEX, что и с BSN. NCLEX — экзамен на лицензию медсестры. Потом доучитесь до BSN, уже работая.', sru:'HR-чек-лист · правда о BSN'},
    {id:'nur-g3', t:'Keep your BLS certificate current. BLS is basic life support — help in the first minutes of an emergency. 15 of 16 job posts ask for it. Every job wants it.', src:'HR checklist · Part 1, Must-have', ru:'Держите сертификат BLS действующим. BLS — это basic life support, первая помощь в экстренной ситуации. Его просят 15 из 16 вакансий. Он нужен везде.', sru:'HR-чек-лист · Часть 1, обязательное'},
    {id:'nur-g4', t:'Get ACLS. ACLS is the advanced emergency certificate. Most specialty jobs want it at hire or within 30–90 days. 10 of 16 job posts name it. This is the real way into a specialty.', src:'HR checklist · Part 1, Must-have', ru:'Получите ACLS. Это продвинутый сертификат экстренной помощи. Большинство работ по специальности просят его при найме или в течение 30–90 дней. Его называют 10 из 16 вакансий. Без него в специальность не попасть.', sru:'HR-чек-лист · Часть 1, обязательное'},
    {id:'nur-g5', t:'NP path, for later: get board certification in your specialty. It\'s an exam that proves your specialty. In practice, 10 of 10 NP job posts ask for it. You also need the state NP license and the DEA. The DEA lets you prescribe strong drugs.', src:'HR checklist · Part 2, Must-have', ru:'Путь в NP, на потом: получите board certification по специальности. Это экзамен, который подтверждает вашу специальность. На деле его просят 10 из 10 вакансий NP. Ещё нужны лицензия NP штата и DEA. DEA даёт право выписывать сильные лекарства.', sru:'HR-чек-лист · Часть 2, обязательное'}
  ]},
  {name:'Proof', steps:[
    {id:'nur-p1', t:'Take a specialty job first. Work in the ICU, the ED or the OR. The ICU is intensive care — the sickest patients. The ED is the emergency room. The OR is the operating room. Your specialty opens travel pay, the CRNA path and NP paths that pay well.', src:'Full Report · §1–§2', ru:'Первую работу берите по специальности. В ICU, ED или OR. ICU — это реанимация, самые тяжёлые пациенты. ED — приёмное отделение скорой помощи. OR — операционная. Специальность открывает travel-оплату, путь в CRNA и хорошо оплачиваемые пути в NP.', sru:'Полный отчёт · §1–§2'},
    {id:'nur-p2', t:'Get 2 years in your specialty. Travel jobs start there. 8 of 10 travel job posts ask for it. These years also lift you to the top staff pay ranges.', src:'HR checklist · Part 1, Differentiators', ru:'Наберите 2 года в своей специальности. С этого начинаются travel-работы. Это просят 8 из 10 вакансий travel. Эти годы также поднимают вашу зарплату в штате до верхней планки.', sru:'HR-чек-лист · Часть 1, преимущества'},
    {id:'nur-p3', t:'Start an online RN-to-BSN in your first year of work. It costs $12,000 in total. It can take as little as 2 semesters in Utah. 25% of employers hard-require the BSN for new hires. 69.8% prefer it (AACN). The AACN is the nursing schools group.', src:'HR checklist · The BSN truth', ru:'Начните онлайн RN-to-BSN в первый год работы. Всё стоит $12,000. В Utah можно уложиться в 2 семестра. 25% работодателей требуют BSN у новичков обязательно. 69.8% его предпочитают (AACN). AACN — это объединение школ медсестёр.', sru:'HR-чек-лист · правда о BSN'},
    {id:'nur-p4', t:'Take your specialty certificate when you have enough experience. For ICU nurses, it\'s the CCRN. 3 of 16 RN job posts prefer it. 0 require it. It makes you stand out. It also shows CRNA schools you\'re serious.', src:'HR checklist · Certification stack', ru:'Сдайте сертификат по специальности, когда хватит опыта. Для медсестёр ICU это CCRN. Его предпочитают 3 из 16 вакансий RN. Требуют — 0. Он выделяет вас. И показывает школам CRNA, что вы настроены серьёзно.', sru:'HR-чек-лист · стек сертификатов'},
    {id:'nur-p5', t:'Become the AI expert on your unit. Know your hospital\'s AI tools better than most. Over three-quarters of nurses already use AI every day. Only about 10% are experts. That top group stands out when hiring (McKinsey).', src:'Radar Issue #1 · item 2', ru:'Станьте главным по AI в своём отделении. Знайте AI-инструменты больницы лучше большинства. Больше трёх четвертей медсестёр уже пользуются AI каждый день. Но настоящих экспертов только около 10%. Их замечают при найме (McKinsey).', sru:'Радар · Выпуск №1 · пункт 2'}
  ]},
  {name:'Get picked', steps:[
    {id:'nur-k1', t:'Compare residency offers by growth, not by first pay. A residency is a training job for new nurses. 22.7% of new RNs leave in their first year (NSI). A residency with a clear training plan protects you.', src:'Full Report · §5, months 4–12', ru:'Сравнивайте предложения residency по росту, а не по первой зарплате. Residency — это учебная работа для новых медсестёр. 22.7% новых RN уходят в первый год (NSI). Residency с чётким планом обучения вас защитит.', sru:'Полный отчёт · §5, месяцы 4–12'},
    {id:'nur-k2', t:'Move to the ICU, ED or OR by month 18–24. If your hospital can\'t move you by month 24, change hospitals. Experienced specialty nurses get sign-on bonuses of $10K–$25K. A sign-on bonus is money you get for joining.', src:'Full Report · §5, month-12 gate', ru:'Перейдите в ICU, ED или OR к 18–24 месяцу. Если больница не переведёт вас к 24 месяцу, меняйте больницу. Опытным медсёстрам по специальности дают бонус за приход $10K–$25K.', sru:'Полный отчёт · §5, контрольная точка 12-го месяца'},
    {id:'nur-k3', t:'Get charge nurse experience. A charge nurse leads the shift. Relief charge means you lead when the main charge nurse is away. This is the way into the assistant nurse manager job. It pays $61.91–$97.72/hr. It was the only RN job post that required a BSN.', src:'HR checklist · Part 1, Differentiators', ru:'Наберите опыт charge nurse — старшей медсестры смены. Relief charge — вы ведёте смену, когда старшей нет. Так попадают на работу assistant nurse manager. Там платят $61.91–$97.72/hr. Это единственная вакансия RN, где требовали BSN.', sru:'HR-чек-лист · Часть 1, преимущества'},
    {id:'nur-k4', t:'NP step, year 3–5: go NP only in the right specialty. Pick it by real pay. Psych pays $200K–$257K. Pick your state with care, too. CA, TX and FL are Restricted practice. Restricted means a doctor must oversee your work. 27 states + DC are Full Practice. Full Practice means you work on your own.', src:'Full Report · §7–§9', ru:'Шаг в NP, год 3–5: идите в NP только с правильной специальностью. Выбирайте по настоящей зарплате. Psych платит $200K–$257K. Штат тоже выбирайте с умом. CA, TX и FL — Restricted practice: за вашей работой должен следить врач. 27 штатов + DC — Full Practice: вы работаете сами.', sru:'Полный отчёт · §7–§9'},
    {id:'nur-k5', t:'Pay for the MSN plus the certificate. Don\'t pay extra for the DNP. 0 of 16 top job posts require the DNP. CRNA is the one exception. There, the doctorate is the license itself.', src:'HR checklist · Part 2, The degree myth', ru:'Платите за MSN плюс сертификат. Не переплачивайте за DNP. DNP требуют 0 из 16 лучших вакансий. CRNA — единственное исключение. Там докторская степень и есть лицензия.', sru:'HR-чек-лист · Часть 2, миф о степени'}
  ]}
],
/* ================= FINANCE / FP&A =================
   NOTE: this package's hr-checklist.md is truncated mid-Filter-3 on disk;
   the steps below trace to its Filter 1–2 tables and to the Full Report's
   §4 applied checklist (which quotes the full checklist's counts). */
fin: [
  {name:'The gate', steps:[
    {id:'fin-g1', t:'Get a bachelor’s degree in finance or a numbers field. Almost all of the 40 job posts ask for it.', src:'Full Report · §4, applied checklist', ru:'Получите диплом бакалавра по finance или в другой области с цифрами. Его просят почти все из 40 вакансий.', sru:'Полный отчёт · §4, прикладной чек-лист'},
    {id:'fin-g2', t:'Learn advanced Excel and financial modeling. Financial modeling means building money plans in Excel. You need it. But everyone has it. It won\'t make you stand out.', src:'Full Report · §4, applied checklist', ru:'Выучите продвинутый Excel и financial modeling — денежные планы в Excel. Это нужно. Но это есть у всех. Выделиться это не поможет.', sru:'Полный отчёт · §4, прикладной чек-лист'},
    {id:'fin-g3', t:'Skip the CFA for this goal. The CFA is a hard finance certificate. 0 of 40 job posts require it. 3 prefer it. Come back to it only if you move to investing jobs (the buy side).', src:'Full Report · §2, Filter 2', ru:'Не тратьте время на CFA для этой цели. CFA — трудный финансовый сертификат. Его требуют 0 из 40 вакансий. Предпочитают — 3. Возвращайтесь к нему, только если пойдёте в инвестиции (buy side).', sru:'Полный отчёт · §2, Фильтр 2'}
  ]},
  {name:'Proof', steps:[
    {id:'fin-p1', t:'Learn SQL well. SQL is the language for asking databases questions. Learn it until you can write window functions alone. A window function does math across rows. SQL is the #1 ask in this market. 31 of 40 job posts want it.', src:'Full Report · §4–§5', ru:'Хорошо выучите SQL. SQL — язык, на котором задают вопросы базам данных. Учите, пока не сможете сами писать window functions. Они считают сразу по многим строкам. SQL здесь требуют чаще всего (№1). Его просят 31 из 40 вакансий.', sru:'Полный отчёт · §4–§5'},
    {id:'fin-p2', t:'Learn ONE planning platform well. A planning platform is a program for company money plans. 16 of 40 job posts name one. Anaplan is named most: 15 of 40. Job posts strictly require its Certified Model Builder certificate.', src:'Full Report · §4, applied checklist', ru:'Хорошо выучите ОДНУ программу для планирования. Это программа для денежных планов компании. Её называют 16 из 40 вакансий. Чаще всех — Anaplan: 15 из 40. Его сертификат Certified Model Builder вакансии требуют обязательно.', sru:'Полный отчёт · §4, прикладной чек-лист'},
    {id:'fin-p3', t:'Build two BI dashboards on real data. Don\'t just look at dashboards — build them. A BI dashboard is a screen of live charts. 20 of 40 job posts name a BI tool. Tableau gets 14 mentions. Power BI gets 9.', src:'Full Report · §5, months 4–6', ru:'Сделайте два BI-дашборда на настоящих данных. Не смотрите — делайте сами. BI-дашборд — это экран с живыми графиками. BI-инструмент называют 20 из 40 вакансий. Tableau — 14 раз. Power BI — 9.', sru:'Полный отчёт · §5, месяцы 4–6'},
    {id:'fin-p4', t:'Learn Python at analyst level. Know pandas, the Python tool for data tables. Finish one real automation. Automation means the computer does the boring task. 16 of 40 job posts name Python.', src:'Full Report · §4, applied checklist', ru:'Выучите Python на уровне аналитика. Знайте pandas — инструмент Python для таблиц. Доделайте одну настоящую автоматизацию: пусть скучную задачу делает компьютер. Python называют 16 из 40 вакансий.', sru:'Полный отчёт · §4, прикладной чек-лист'},
    {id:'fin-p5', t:'Automate one repeating part of your own reports. Write down the before and after. Show hours per month and the error rate. Top job posts look for exactly this one-page proof.', src:'Full Report · §5, months 0–3', ru:'Автоматизируйте одну повторяющуюся часть своих отчётов. Запишите, как было и как стало. Покажите часы в месяц и долю ошибок. Лучшие вакансии ищут именно такое доказательство на одну страницу.', sru:'Полный отчёт · §5, месяцы 0–3'}
  ]},
  {name:'Get picked', steps:[
    {id:'fin-k1', t:'Own the forecast for one business team, start to finish. A forecast is the money plan for the next months. Top job posts say it like this: “owned a forecast others relied on.”', src:'Full Report · §5, months 0–3', ru:'Отвечайте за прогноз одного отдела от начала до конца. Прогноз — это денежный план на ближайшие месяцы. Лучшие вакансии так и пишут: «owned a forecast others relied on» (отвечал за прогноз, на который полагались другие).', sru:'Полный отчёт · §5, месяцы 0–3'},
    {id:'fin-k2', t:'Apply sideways, to mixed titles. They are FP&A analyst, BI analyst and finance analytics. There, your proof does the work. Don\'t apply to plain “analyst” jobs. They\'re shrinking: −21%.', src:'Radar Issue #1 · item 4', ru:'Подавайтесь на соседние, смешанные должности. Это FP&A analyst, BI analyst и finance analytics. Там за вас говорит ваша работа-доказательство. Не подавайтесь на обычного «analyst». Таких вакансий всё меньше: −21%.', sru:'Радар · Выпуск №1 · пункт 4'},
    {id:'fin-k3', t:'In your new job, become the team\'s go-to person from day one. Go to their regular work meetings (ops reviews). Own their forecast. Show their variance. Variance means plan versus real numbers.', src:'Full Report · §5, months 7–12', ru:'На новой работе с первого дня станьте своим для отдела. Ходите на их рабочие встречи (ops reviews). Ведите их прогноз. Показывайте variance — разницу между планом и фактом.', sru:'Полный отчёт · §5, месяцы 7–12'},
    {id:'fin-k4', t:'Do your checklist again at month 12. Think about the CFA again only if your goal changed. The new goal must be investing jobs.', src:'Full Report · §5, months 7–12', ru:'Пройдите чек-лист снова на 12-м месяце. О CFA думайте, только если цель поменялась. И новая цель — работа в инвестициях.', sru:'Полный отчёт · §5, месяцы 7–12'}
  ]}
],
/* ================= CONTENT CREATOR — STAFF (v2, 2026-11-01) =================
   REFRAMED by the founder ruling of 2026-11-01: the profession is the
   HIRED content creator — a company's staff job — not the independent
   influencer. Steps trace to the v2 pack
   (~/workspace/pathcheck-creator-pilot/hr-checklist-v2.md, the screen
   from 40 real staff postings read in full on 1 Nov 2026).
   Step ids use the NEW prefix cst-: the retired v1 steps (cre-*) stay
   in existing leads' stored progress (they still count toward XP —
   xpOf counts every stored check) but are no longer part of the
   track, so legacy progress can never false-match a new step. */
creator: [
  {name:'The gate', steps:[
    {id:'cst-g1', t:'Shoot three short videos on your phone. Make three kinds: a product demo, a talking-head video (you speak to the camera), and a remake of a trend. 12 of 40 staff job posts mention phone filming. One employer hires on a phone video alone.', src:'HR checklist v2 · Part 1, Stops 0+3', ru:'Снимите три коротких видео на телефон. Три вида: показ продукта, видео, где вы говорите в камеру, и своя версия тренда. Съёмку на телефон упоминают 12 из 40 вакансий в штат. Один работодатель нанимает только по видео с телефона.', sru:'HR-чек-лист v2 · Часть 1, стопы 0+3'},
    {id:'cst-g2', t:'Edit the same raw video twice: once in CapCut and once in Premiere Pro. 21 of 40 job posts name Premiere, and 15 of 40 name CapCut. Employers check you can work both fast and carefully.', src:'HR checklist v2 · Part 1, Stop 2', ru:'Смонтируйте одно и то же видео дважды: в CapCut и в Premiere Pro. Premiere называют 21 из 40 вакансий, CapCut — 15 из 40. Работодатели смотрят, умеете ли вы работать и быстро, и тщательно.', sru:'HR-чек-лист v2 · Часть 1, стоп 2'},
    {id:'cst-g3', t:'Publish 10 posts made for the platform itself: TikTok, Reels or Shorts. That means you make the post inside that app, not copy it from another one. 28 of 40 job posts want you at home on these platforms.', src:'HR checklist v2 · Part 1, Stop 1', ru:'Опубликуйте 10 постов, сделанных прямо в TikTok, Reels или Shorts. То есть пост собран в этом приложении, а не перенесён из другого. 28 из 40 вакансий хотят, чтобы вы свободно чувствовали себя на этих платформах.', sru:'HR-чек-лист v2 · Часть 1, стоп 1'},
    {id:'cst-g4', t:'Make a one-page portfolio with your 6 best pieces. Under each, write its numbers: views, how long people watched, and how many reacted. 22 of 40 job posts ask for a portfolio. Only 8 of 40 ask for a degree. Your videos are your diploma. You\'ve got this! You\'ve got this!', src:'HR checklist v2 · Part 1, Stop 0', ru:'Соберите портфолио на одну страницу: ваши 6 лучших работ. Под каждой — цифры: просмотры, сколько смотрели и сколько людей отреагировало. Портфолио просят 22 из 40 вакансий, а диплом — только 8 из 40. Ваши видео и есть ваш диплом. У вас получится! У вас получится!', sru:'HR-чек-лист v2 · Часть 1, стоп 0'},
  ]},
  {name:'Proof', steps:[
    {id:'cst-p1', t:'Pick your job: brand studio-of-one, face of the brand, paid ads, agency, or media and writing. Studio-of-one means one person does the whole job alone. Write down why your videos fit that job. Pay differs: brand jobs pay around $65K–$85K, and writing jobs pay near $57.5K.', src:'HR checklist v2 · Part 4', ru:'Выберите свою работу: бренд «студия в одном лице», лицо бренда, платная реклама, агентство или медиа и тексты. «Студия в одном лице» — один человек делает всё сам. Запишите, почему ваши видео подходят этой работе. Платят по-разному: у брендов около $65K–$85K, за тексты — около $57.5K.', sru:'HR-чек-лист v2 · Часть 4'},
    {id:'cst-p2', t:'Write the words for every piece in your portfolio: the hook (the first seconds that stop a viewer), the script, the captions, and the call to action (the line that tells the viewer what to do). 24 of 40 job posts list writing the words as a duty.', src:'HR checklist v2 · Part 1, Stop 4', ru:'Напишите тексты к каждой работе в портфолио: хук (первые секунды, которые цепляют зрителя), сценарий, подписи и призыв к действию (что зрителю сделать дальше). Писать тексты — обязанность в 24 из 40 вакансий.', sru:'HR-чек-лист v2 · Часть 1, стоп 4'},
    {id:'cst-p3', t:'Learn to read the numbers: views, retention (how long people keep watching), and CTR (the share of people who clicked). For each piece in your portfolio, write one line: what should you change next time? 23 of 40 job posts list reading the numbers as a duty.', src:'HR checklist v2 · Part 1, Stop 5', ru:'Научитесь читать цифры: просмотры, удержание (как долго смотрят) и CTR (доля тех, кто кликнул). К каждой работе в портфолио напишите одну строку: что изменить в следующий раз? Читать цифры — обязанность в 23 из 40 вакансий.', sru:'HR-чек-лист v2 · Часть 1, стоп 5'},
    {id:'cst-p4', t:'Record a 30-second video of yourself on camera to apply. Say who you are, what you make, and one result with a number. One employer in our scan hires on exactly this video. 13 of 40 job posts want a person on camera.', src:'HR checklist v2 · Part 1, Stop 6', ru:'Запишите 30-секундное видео-заявку, где вы в кадре. Скажите, кто вы, что делаете, и назовите один результат с цифрой. Один работодатель из нашего скана нанимает именно по такому видео. Человека в кадре хотят 13 из 40 вакансий.', sru:'HR-чек-лист v2 · Часть 1, стоп 6'},
  ]},
  {name:'Get picked', steps:[
    {id:'cst-k1', t:'Apply to 10 staff job posts. Send your portfolio first and your resume second. Aim first at brand, face and paid ad jobs. Take an agency job only with a plan to leave in 1–3 years.', src:'HR checklist v2 · Part 4', ru:'Откликнитесь на 10 вакансий в штат. Сначала отправляйте портфолио, потом резюме. Цельтесь сначала в бренды, работу лицом бренда и платную рекламу. В агентство идите, только если знаете, как уйти через 1–3 года.', sru:'HR-чек-лист v2 · Часть 4'},
    {id:'cst-k2', t:'Run one paid ad test from start to finish. Test one hook (the first seconds) against another. Read the CTR (the share of people who clicked). Write up the result. It\'s the rarest proof in this market: work with a money number on it.', src:'HR checklist v2 · Part 4 — performance seat', ru:'Проведите один тест платной рекламы от начала до конца. Сравните один хук (первые секунды видео) с другим. Посмотрите CTR (долю тех, кто кликнул). Запишите результат. Это самое редкое доказательство на рынке: работа с денежной цифрой.', sru:'HR-чек-лист v2 · Часть 4 — место performance'},
    {id:'cst-k3', t:'Set up your own way of using AI for machine work: captions, versions, and first cuts. You lead and you judge the result. Only 2 of 40 job posts name AI tools today. Soon this plus will be a must, asked for by name.', src:'HR checklist v2 · Part 1, Stop 7', ru:'Настройте свой способ работы с ИИ для того, что может делать машина: подписи, варианты, первый монтаж. Вы руководите и оцениваете результат. Сегодня инструменты ИИ называют только 2 из 40 вакансий. Скоро этот плюс станет обязательным, и его будут просить прямо.', sru:'HR-чек-лист v2 · Часть 1, стоп 7'},
    {id:'cst-k4', t:'Add a rare skill most people don\'t have. It can be hosting on camera, a system for paid ads, or deep knowledge of one industry. Every job post above $100K in our scan adds one of these to plain content making.', src:'HR checklist v2 · Part 2 — the pay map', ru:'Добавьте редкий навык, которого нет у большинства. Например, умение вести в кадре, систему платной рекламы или глубокое знание одной отрасли. Каждая вакансия выше $100K в нашем скане добавляет что-то из этого к обычному созданию контента.', sru:'HR-чек-лист v2 · Часть 2 — карта оплаты'},
    {id:'cst-k5', t:'Post breakdowns of your own content, with the numbers. Write what worked, what failed, and what you changed. Managers hire creators they\'ve already seen thinking.', src:'Method v2 · the visionary layer', ru:'Публикуйте разборы своего контента с цифрами. Пишите, что сработало, что нет и что вы поменяли. Нанимают тех, чьи мысли уже видели.', sru:'Метод v2 · визионерский слой'},
    {id:'cst-k6', t:'Check your job again every quarter. Compare your pay range with fresh job posts. See if new job posts name AI tools. Decide your next move to another job. We re-scan the whole market on 1 November 2027.', src:'Radar issue 02', ru:'Каждый квартал заново проверяйте свою работу. Сравнивайте свою зарплату со свежими вакансиями. Смотрите, называют ли новые вакансии инструменты ИИ. Решайте, куда двигаться дальше. Мы заново проверим весь рынок 1 ноября 2027 года.', sru:'Радар, выпуск 02'},
  ]}
]
,
/* ================= BUSINESS / DATA ANALYST =================
   Steps trace 1:1 to the package's hr-checklist.md Part 6 (the 14-point
   checklist): items 1–4 "The gate" → The gate; items 5–9 "Proof" →
   Proof; items 10–14 "Get picked" → Get picked. */
analyst: [
  {name:'The gate', steps:[
    {id:'ana-g1', t:'Get SQL to a working level. Learn joins, aggregations and window functions. Window functions do math across many rows at once. 43 of 46 job posts we opened ask for SQL. Every job on this map needs it.', src:'HR checklist · Part 6, item 1 — The gate', ru:'Освойте SQL до рабочего уровня. Нужны соединения, агрегации и оконные функции. Оконные функции считают сразу по многим строкам. SQL просят 43 из 46 вакансий, которые мы открыли. Без него не взяли бы ни на одну работу с этой карты.', sru:'HR-чек-лист · Часть 6, пункт 1 — Ворота'},
    {id:'ana-g2', t:'Learn one BI tool well. Tableau or Power BI. A BI tool turns data into charts and dashboards. 27 of 46 job posts name one. Reporting jobs work in it all day. Decision jobs show results in it.', src:'HR checklist · Part 6, item 2 — The gate', ru:'Хорошо выучите один BI-инструмент. Tableau или Power BI. BI-инструмент превращает данные в графики и дашборды. Его просят 27 из 46 вакансий. На отчётных работах в нём сидят весь день. На работах, где принимают решения, в нём показывают выводы.', sru:'HR-чек-лист · Часть 6, пункт 2 — Ворота'},
    {id:'ana-g3', t:'Pick your job on purpose. The six jobs on this map pay $51K to $300K. All are called “analyst”. Write down which job your skills fit today.', src:'HR checklist · Part 6, item 3 — The gate', ru:'Выберите свою работу сами, а не наугад. За шесть работ на этой карте платят от $51K до $300K. И все называются «analyst». Запишите, какой работе подходят ваши навыки сегодня.', sru:'HR-чек-лист · Часть 6, пункт 3 — Ворота'},
    {id:'ana-g4', t:'Use AI tools yourself, on real analysis. Copilot, ChatGPT and Claude. 6 of 46 job posts require a named AI tool. This is the newest demand, and it\'s growing.', src:'HR checklist · Part 6, item 4 — The gate', ru:'Работайте с AI-инструментами сами, на настоящих задачах. Copilot, ChatGPT и Claude. 6 из 46 вакансий требуют конкретный AI-инструмент. Это самое новое требование, и оно растёт.', sru:'HR-чек-лист · Часть 6, пункт 4 — Ворота'}
  ]},
  {name:'Proof', steps:[
    {id:'ana-p1', t:'Build one dashboard that helps someone decide. Not one that just fills a request. Write down who opened it and what they decided. If nobody opens it, it didn\'t help yet — so make the next one count.', src:'HR checklist · Part 6, item 5 — Proof', ru:'Сделайте один дашборд, который помог кому-то принять решение. Не просто «сделайте отчёт, потому что попросили». Запишите, кто его открыл и что решил. Если его никто не открыл, он пока не помог — и это нормально, просто сделайте следующий полезнее.', sru:'HR-чек-лист · Часть 6, пункт 5 — Доказательства'},
    {id:'ana-p2', t:'Learn data modeling with dbt. dbt turns raw data into clean tables. 7 of 7 analytics engineer job posts ask for it. Every AI answer reads from these tables.', src:'HR checklist · Part 6, item 6 — Proof', ru:'Выучите моделирование данных в dbt. dbt превращает сырые данные в чистые таблицы. Его просят 7 из 7 вакансий analytics engineer. Из этих таблиц AI берёт данные для каждого ответа.', sru:'HR-чек-лист · Часть 6, пункт 6 — Доказательства'},
    {id:'ana-p3', t:'Learn Python for analysis. 18 of 46 job posts ask for Python. In data analyst posts, it\'s 9 of 9, in some form. Python helps you grow past the pay limit of reporting jobs.', src:'HR checklist · Part 6, item 7 — Proof', ru:'Выучите Python для анализа. Python просят 18 из 46 вакансий. В вакансиях data analyst — 9 из 9, так или иначе. Python поможет вырасти выше зарплатного потолка отчётной работы.', sru:'HR-чек-лист · Часть 6, пункт 7 — Доказательства'},
    {id:'ana-p4', t:'Run one experiment from start to finish. An A/B test, or a metric you set up and defended. A metric is a number a team watches. 4 of 4 product analyst job posts ask for experiments. A metric you own proves you can carry a decision.', src:'HR checklist · Part 6, item 8 — Proof', ru:'Проведите один эксперимент от начала до конца. A/B-тест или метрику, которую вы придумали и отстояли. Метрика — это число, за которым следит команда. Эксперименты просят 4 из 4 вакансий product analyst. Своя метрика показывает: вам можно доверить решение.', sru:'HR-чек-лист · Часть 6, пункт 8 — Доказательства'},
    {id:'ana-p5', t:'Automate one regular report that\'s yours. You used to rebuild it by hand. Now it runs itself. Write down the hours you saved. Job posts that mention AI ask for exactly this.', src:'HR checklist · Part 6, item 9 — Proof', ru:'Автоматизируйте один регулярный отчёт, за который вы отвечаете. Раньше вы собирали его руками. Теперь он делается сам. Запишите, сколько часов сэкономили. Вакансии, где упомянут AI, просят именно это.', sru:'HR-чек-лист · Часть 6, пункт 9 — Доказательства'}
  ]},
  {name:'Get picked', steps:[
    {id:'ana-k1', t:'Apply to decision jobs by their names. Product analyst. Analytics engineer. Strategy & operations. Plain “analyst” jobs are very crowded: 1,108 people applied to one junior job. Named jobs give you a better chance.', src:'HR checklist · Part 6, item 10 — Get picked', ru:'Подавайтесь на работы, где принимают решения, — ищите их по названию. Product analyst. Analytics engineer. Strategy & operations. На обычного «analyst» огромная очередь: 1,108 заявок на одну junior-работу. По точному названию шансов больше. По точному названию шансов больше.', sru:'HR-чек-лист · Часть 6, пункт 10 — Выбор тебя'},
    {id:'ana-k2', t:'In interviews, start with a decision you changed. Not with a dashboard you built. All 7 strategy & operations job posts say working with stakeholders is the main duty. A stakeholder is a person who decides based on your work.', src:'HR checklist · Part 6, item 11 — Get picked', ru:'На собеседовании начните с решения, которое вы изменили. Не с дашборда, который вы сделали. Все 7 вакансий strategy & operations называют работу со стейкхолдерами главной. Стейкхолдер — человек, который решает на основе вашей работы.', sru:'HR-чек-лист · Часть 6, пункт 11 — Выбор тебя'},
    {id:'ana-k3', t:'Show how you work with AI. One analysis where AI wrote a draft and you checked it. Show the checking, not just the draft. The 6 job posts that name AI tools want this proof. In their words: “to build something real”.', src:'HR checklist · Part 6, item 12 — Get picked', ru:'Покажите, как вы работаете с AI. Один анализ: AI сделал черновик, вы проверили. Покажите проверку, а не только черновик. 6 вакансий, где упомянуты AI-инструменты, хотят именно это. Их словами: «to build something real» (сделать что-то настоящее).', sru:'HR-чек-лист · Часть 6, пункт 12 — Выбор тебя'},
    {id:'ana-k4', t:'Know your price from real job posts. Reporting jobs pay $60K–$95K. Product jobs pay $106K–$168K. Analytics engineering pays $130K–$244K at senior and staff level. If your pay stops growing, it\'s not your fault. It\'s the job — so look at a better one.', src:'HR checklist · Part 6, item 13 — Get picked', ru:'Узнайте свою цену по настоящим вакансиям. Отчётные работы: $60K–$95K. Работы в product: $106K–$168K. Analytics engineering: $130K–$244K на уровне senior и staff. Если зарплата не растёт, вы не виноваты. Дело в самой работе — посмотрите на другую.', sru:'HR-чек-лист · Часть 6, пункт 13 — Выбор тебя'},
    {id:'ana-k5', t:'Redo this checklist every quarter with fresh job posts. In one scan, AI tools went from zero to 6 of 46 job posts. Things change fast now, so a quick check keeps you ahead.', src:'HR checklist · Part 6, item 14 — Get picked', ru:'Проходите этот чек-лист заново каждый квартал по свежим вакансиям. За время одного скана AI-инструменты появились с нуля в 6 из 46 вакансий. Всё меняется быстро — короткая проверка поможет быть на шаг впереди.', sru:'HR-чек-лист · Часть 6, пункт 14 — Выбор тебя'}
  ]}
]
};

/* ===== Resume keyword map — terms named in the packages' checklists
   (tools, platforms, credentials). The resume SUGGESTS a step; the human
   confirms it. No invented terms: every term appears in a package file. ===== */
var RESUME_TERMS = {
  'law-g1':['bachelor','juris doctor','j.d.','law degree'],
  'law-g2':['paralegal certificate','paralegal studies','aba-approved','aba approved','paralegal program'],
  'law-g3':['bar admission','admitted to the bar','state bar','member of the bar'],
  'law-g4':['notary'],
  'law-p1':['privacy law','corporate transactions','healthcare law','due diligence','entity governance','employment law','securities law'],
  'law-p2':['relativity','carta','imanage','closing folders','diligent entities','hcue','gems','concordance','everlaw'],
  'law-p3':['ai-enabled','ai workflow','harvey','kira','cocounsel','workflow automation'],
  'law-p4':['legal ai','lexis','westlaw','ai tools'],
  'law-p5':['microsoft office','office 365','microsoft 365'],
  'law-p6':['cipp','cipm','aigp'],
  'law-k2':['business judgment'],
  'law-k4':['lsat','law school'],
  'cpa-g1':['degree in accounting','bachelor of accounting','accounting degree','bba in accounting','bs in accounting','b.s. in accounting'],
  'cpa-g2':['150 credits','150 credit','150 semester','120 credits','120 credit','semester hours','credit hours'],
  'cpa-g3':['cpa','cpa exam','cpa candidate','uniform cpa'],
  'cpa-g4':['information systems and controls','tax compliance and planning','business analysis and reporting'],
  'cpa-g5':['supervised experience','experience verification'],
  'cpa-p1':['netsuite'],
  'cpa-p2':['asc 606','asc 842','asc 718','sox','sarbanes-oxley','gaap','revenue recognition'],
  'cpa-p3':['workiva','blackline','active disclosure'],
  'cpa-p4':['excel','vlookup','pivot table','pivot tables','financial modeling','financial modelling'],
  'cpa-p5':['power bi','powerbi','tableau','alteryx'],
  'cpa-p6':['pass-through','passthrough','high-net-worth','high net worth','uhnw','cost accounting','saas revenue'],
  'cpa-k1':['erp implementation','netsuite implementation','close automation','reconciliation automation'],
  'cpa-k2':['process improvement','process improvements'],
  'cpa-k3':['technical memo','accounting memo','financial model'],
  'cpa-k5':['big 4','big four','deloitte','pwc','kpmg','public accounting'],
  'nur-g1':['rn license','registered nurse','nclex','compact license','multistate license'],
  'nur-g2':['adn','associate degree in nursing','asn','associate of science in nursing'],
  'nur-g3':['bls','basic life support'],
  'nur-g4':['acls','advanced cardiovascular life support'],
  'nur-g5':['dea','pmhnp-bc','aanp','ancc','board certified'],
  'nur-p1':['icu','intensive care','emergency department','emergency room','operating room','critical care','telemetry','cath lab'],
  'nur-p2':['travel nurse','travel rn','travel contract'],
  'nur-p3':['bsn','bachelor of science in nursing','rn-to-bsn','rn to bsn'],
  'nur-p4':['ccrn','cen','cnor','tncc','nrp'],
  'nur-p5':['epic','cerner','ehr','abridge'],
  'nur-k1':['nurse residency','residency program','preceptor'],
  'nur-k3':['charge nurse','relief charge','assistant nurse manager','nurse manager'],
  'nur-k4':['pmhnp','psychiatric-mental health','nurse practitioner','full practice'],
  'nur-k5':['msn','master of science in nursing','dnp'],
  'fin-g1':['degree in finance','finance degree','degree in economics','bachelor of finance'],
  'fin-g2':['excel','financial modeling','financial modelling','vlookup','three-statement','dcf'],
  'fin-g3':['cfa','chartered financial analyst'],
  'fin-p1':['sql','mysql','postgresql','window functions'],
  'fin-p2':['anaplan','adaptive','pigment','model builder'],
  'fin-p3':['tableau','power bi','looker','dashboard','dashboards'],
  'fin-p4':['python','pandas'],
  'fin-p5':['automated','automation','process improvement'],
  'fin-k1':['forecast','forecasting','variance analysis','budget cycle'],
  'fin-k3':['business partner','business partnering','stakeholder'],
  'cre-g1':['partner program','watch hours','monetized','monetization'],
  'cre-g2':['original content','original videos'],
  'cre-g3':['tiktok','creator rewards'],
  'cre-g4':['on-screen','on screen'],
  'cre-p1':['media kit'],
  'cre-p3':['ugc','brand deal','brand deals','paid deal','paid deals'],
  'cre-p4':['rate','rates'],
  'cre-k1':['online course','course','affiliate'],
  'cre-k2':['email list'],
  'cre-k4':['rpm'],
  'cre-k6':['editing','captions','scripts'],
  'cst-g1':['short-form video','short form','tiktok','reels','shorts','vertical video'],
  'cst-g2':['capcut','premiere','premiere pro','after effects'],
  'cst-g3':['tiktok','instagram','reels','youtube shorts','content calendar'],
  'cst-g4':['portfolio','reel','showreel'],
  'cst-p1':['content creator','social media','brand content'],
  'cst-p2':['copywriting','scripting','captions','hooks','cta'],
  'cst-p3':['analytics','ctr','retention','engagement','performance data'],
  'cst-p4':['on-camera','on camera','application video','presenter'],
  'cst-k1':['applied','application','cover letter'],
  'cst-k2':['paid social','a/b test','ab test','ctr','conversion','ad creative'],
  'cst-k3':['runway','midjourney','firefly','chatgpt','ai tools','generative ai'],
  'cst-k4':['hosting','paid social','niche','expertise'],
  'cst-k5':['published','breakdown','case study'],
  'cst-k6':['market research','salary','benchmark'],
  'ana-g1':['sql'],
  'ana-g2':['tableau','power bi','looker'],
  'ana-g4':['copilot','chatgpt','claude'],
  'ana-p1':['dashboard','dashboards'],
  'ana-p2':['dbt','data modeling','data modelling'],
  'ana-p3':['python','pandas'],
  'ana-p4':['a/b testing','a/b test','experimentation','hypothesis testing'],
  'ana-p5':['automation','automated reports','etl']
};

/* ===== Badges — earned deterministically from path state. ===== */
var BADGE_DEFS = [
  {id:'first-step',    icon:'✦', name:'First Step',      hint:'Check your first step', nameRu:'Первый шаг', hintRu:'Отметьте свой первый шаг'},
  {id:'phase-1',       icon:'◆', name:'Phase 1 Cleared', hint:'Finish “The gate”', nameRu:'Фаза 1 пройдена', hintRu:'Пройдите фазу «Ворота»'},
  {id:'phase-2',       icon:'◆', name:'Phase 2 Cleared', hint:'Finish “Proof”', nameRu:'Фаза 2 пройдена', hintRu:'Пройдите фазу «Доказательства»'},
  {id:'phase-3',       icon:'◆', name:'Phase 3 Cleared', hint:'Finish “Get picked”', nameRu:'Фаза 3 пройдена', hintRu:'Пройдите фазу «Выбор тебя»'},
  {id:'halfway',       icon:'◐', name:'Halfway There',   hint:'Reach 50% of your path', nameRu:'Полпути', hintRu:'Дойдите до 50% своего пути'},
  {id:'full-path',     icon:'★', name:'Full Path',       hint:'Check every step — TOP 1% path complete', nameRu:'Весь путь', hintRu:'Отметьте все шаги — путь к TOP 1% пройден'},
  {id:'streak-3',      icon:'🔥', name:'3-Day Streak',   hint:'Check steps 3 days in a row', nameRu:'Серия 3 дня', hintRu:'Отмечайте шаги 3 дня подряд'},
  {id:'streak-7',      icon:'🔥', name:'7-Day Streak',   hint:'Check steps 7 days in a row', nameRu:'Серия 7 дней', hintRu:'Отмечайте шаги 7 дней подряд'},
  {id:'radar-reader',  icon:'📡', name:'Radar Reader',   hint:'Open your Radar section', nameRu:'Читатель радара', hintRu:'Откройте раздел «Радар»'},
  {id:'resume-loaded', icon:'📄', name:'Resume Loaded',  hint:'Load your resume into your path', nameRu:'Резюме загружено', hintRu:'Загрузите резюме в свой путь'},
  {id:'proof-hunter',  icon:'🎯', name:'Proof Hunter',   hint:'Confirm 3 steps your resume proves', nameRu:'Охотник за доказательствами', hintRu:'Подтвердите 3 шага, которые доказывает ваше резюме'}
];
