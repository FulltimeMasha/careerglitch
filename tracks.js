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
  specialist:'This is the job to aim for. AI now does part of legal work, and this paralegal runs it. The best paralegal job post in our scan pays $150K–$200K. There, the paralegal runs Kira and Harvey AI, checks deals before they close, and owns the closing programs. Your shortcut: pick ONE specialty — privacy and AI rules, corporate deal checks, or healthcare rules. Then master the AI tools in it.',
  paralegal:'AI is taking the general paralegal work. Your years still count — just don\'t climb the general ladder. Step sideways into one specialty: privacy and AI rules, corporate deal checks, or healthcare rules. Use the AI tools. Don\'t compete with them. A J.D. (law degree) only pays off in these same specialties.',
  docreview:'Treat document review as paid training, not a final stop. AI already reads documents fast. Move up to the senior specialist job that runs the review AI. One such job post pays $150K–$200K, and the paralegal runs Kira and Harvey there. Or aim a J.D. (law degree) at a YES specialty.',
  lawstudent:'Pick your specialty before you take on debt, not after. AI changes general law work, so a clear specialty protects your years of study. Pick privacy and AI rules, corporate deal checks, or healthcare rules. Build proof from year one: clinics, certificates and programs you know. Don\'t wait for graduation.',
  bookkeeper:'Use this job as a starting point, not a home. AI does more of the bookkeeping each year. Move to staff accountant. Then aim at a specialty where you sign the work. One is controller who runs the ERP (the main money program), at $130–200K + bonus. Another is narrow tax, at $125–200K. The CPA pays only in a niche, not for “accounting in general.”',
  tax:'Don\'t sell hours of tax prep. AI does prep work for almost nothing. Specialize: pass-through companies (owners pay the tax) or rich clients (high-net-worth). Get the license that 8 of 10 manager job posts demand. Your signature protects your pay.',
  staff:'Pick your niche first, then the exam. Then you don\'t study for the wrong thing. The niches are narrow tax, technical accounting / SEC reporting (reports for public companies), and deal advisory. A license for “accounting in general” keeps you in the same jobs. AI is taking over those jobs.',
  audit:'Get the audit firm name on your resume, then leave. That name opens doors. Practice building money models. Then move to FDD (deal checks) or technical accounting. Do it before computers take over your current work.',
  technical:'This specialty is already a YES. You\'re on the right road. Now grow what protects your pay: SEC reporting and programs like Workiva. Charge well for your signature. The Full Report shows the move from a staff job and your state\'s exam rule.',
  fdd:'Skip collecting certificates. This job pays for good calls on real deals — the top money in our scan. AI can\'t make those calls for you. The way in is through audit: audit gives you the name, modeling practice gives you the skill. The Full Report shows what the move costs from your current job.',
  controller:'Don\'t do the month-end close forever. Own the ERP (the main money program) and the close (the month-end money count). AI helps run the routine; you run the system. Then this job can grow toward CFO, the top money boss. The Full Report shows which systems skills HR checks at this pay.',
  medsurg:'Use the general ward job as a start, not a home. Move into a specialty — ICU, ER or OR — in your first year or two. That\'s what makes your pay grow. It opens travel pay, the CRNA path, and NP paths that pay well.',
  specialty:'This specialty is a YES. You\'re on the fast road. Go deeper in it. Then pick your next step by real pay, not feelings: travel money, CRNA, or specialty NP. The Full Report puts these steps in order.',
  travel:'Build your specialty first: ICU, ER or OR. Then take the travel money while it lasts. Save it for your NP or CRNA choice. Don\'t spend it on lifestyle. It\'s fuel for your next jump.',
  nstudent:'Don\'t pay for the longest degree first. Get the license cheap, with the ADN (short nursing degree). Take a specialty job first. Let employers pay for RN-to-BSN while you earn. NP comes later. Pick it by specialty, not because others do.',
  np:'Don\'t pick FNP just because everyone does. Pick the specialty that pays extra in job posts. Psych pays the most right now. Check your state’s rules before you pay tuition. They show what an NP may do there. The same license pays differently in different states.',
  crna:'This is the biggest money and the hardest way in. Build your ICU years on purpose. They are your real application. Here the expensive degree is not a trap: the degree from an approved school is the license itself.',
  lpn:'Skip the LPN step. It saves you years. Become an RN through the ADN (short nursing degree). Already an LPN? Check what LPN-to-RN costs. Don\'t stay where pay stops growing early.',
  reporting:'Report-only work is the part AI does fastest. Move to a job next door. One is FP&A business partner (helps a team plan its money). It pays up to $276,250. Another is the BI / analytics hybrid. It\'s the fastest way in, at $138K–$180,600. Job posts list the skills they want: SQL, then a planning program, then BI.',
  fpa:'Don\'t just put reports together. Own a P&L (a team\'s profit-and-loss sheet) next to one business team. They pay for judgment and trust, not slides. The Full Report puts the skills you lack in order: SQL, then a planning program, then BI.',
  strategic:'Don\'t collect certificates first. Build a set of real cases: problems you solved, like pricing and unit economics (the money math of one sale). Build them on real SQL. The Full Report picks your first cases and puts the skills in order.',
  hybrid:'Good with data? Take this way in. It skips the line. A hybrid job with 1–3 years of experience pays above the typical analyst. The typical pay is $103,570. The Full Report puts the skills in order from your current job.',
  corpdev:'Still early in your career? Move now. Or get the background — a famous name on your resume — through a banking or consulting job. Too late? Don\'t chase it. The FP&A partner and hybrid paths pay about the same without it.',
  faceless:'Love this format? Make directed work: you decide what the AI makes. Your face or voice is in it. It has choices a prompt can\'t make. Directed work kept its pay in the 2026 crackdown.',
  streamer:'Use streaming to show off, not as the business. A small live audience that trusts you will buy. Clips become UGC (videos you make for brands). The audience becomes a list. The list buys products. That\'s the creator-with-a-business job. Streaming alone is a NO.',
  personality:'Keep the deals and add a business you control: a product, or affiliate links (you earn a cut when your link sells), and an email list you own. Deals bring the audience. The business keeps the money. Creator with a business is a YES.',
  ugc:'Get ready for buyers. Make a one-page media kit. Write one sentence on the problem your audience pays to fix. Do two paid jobs. Then raise your price toward $500 as results grow. UGC (videos for brands) is a trade: the money is real, and you earn it per video.',
  educator:'Sell proof you\'re an expert, not more videos. AI can make videos; it can\'t be you. Pick one problem your audience pays to solve. Teach it with a face they can check. Then add a course or product under your own name. That makes this the strongest job in the group.',
  creatorbiz:'Run it like the owner you are. Every 3 months, check three numbers: RPM (what you earn per 1,000 views), deal rate, and the share of income you own. If one app still controls most of your money, fix that next. The Full Report builds your 18-month plan.',
  brandcreator:'This job is a YES if you can do it all alone: idea, filming, editing, posting, and reading the numbers. AI tools make that possible for one person. Then add a rare skill: trust on camera, paid ad results, or deep knowledge of one industry. That\'s what lifts your pay.',
  facecreator:'AI can\'t believably fake your face for one company. Add rare knowledge to it — a trade, a technology, or one industry. Then your face is paid like Fictiv ($110–135K), not like Patriot (about $44–54K).',
  perfcreator:'Learn to read an ad account like you read an audience. Run one paid test from start to finish. A test with a money number on it is the rarest proof in this market.',
  agencycreator:'Work at an agency for 1–3 years as a school, not a home. Then take your work for several clients to a brand, face or ad job. There, the same skills pay $100K+.',
  mediacreator:'Keep writing, but sell video first. In this same scan, the same video skills pay $15–25K more in brand and ad jobs.',
  genba:'AI now drafts requirement documents. So move sideways, not up. Your years with decision-makers count for product analyst and strategy jobs. Your years of writing documents don\'t add up anywhere. One decision you can point to gets you out.',
  reportda:'Keep SQL, but use it for decisions, not chart requests. Product analyst jobs hire from report jobs. So do analytics engineer jobs. The first runs experiments. The second builds data models. Both pay for decisions.',
  prodan:'This job is a YES if you can run an experiment from start to finish. Grow experiments and metrics (numbers a team watches). The Full Report puts the skills in order: SQL, then experiments, then metrics you can show.',
  aneng:'This job is a YES. Every AI answer reads from the tables you build. Go deeper in dbt and one data warehouse, where company data lives. Start with Snowflake. Get better at data modeling. The Full Report puts it in order.',
  bizops:'This job is a YES, but hard to get into. One way in is years in consulting or banking. The shorter way is proof from your own job: one decision you changed, with numbers. The Full Report shows both.',
  dsgate:'This title is a new job, not a promotion. The way in is statistics, Python, and one real model you shipped. Waiting as an analyst won\'t get you this title.'
};

/* Grid (whole-map) leads — recap from the gate's own grid summaries. */
var GRIDINFO = {
  law:{head:'Your shortcut to a law career that still pays in the age of AI.', short:'AI already does part of a paralegal\'s work. Were your years of study wasted? No — if you pick the right specialty. “Law” is several very different jobs. Three stay needed: privacy and AI rules, checking companies before big deals, and healthcare rules. Their job posts pay up to $319K. The general paralegal job is a bad bet. So is law school with no clear goal. We cut the rest, so your path is shorter.'},
  cpa:{head:'Your shortcut to an accounting career that still pays in the age of AI.', short:'AI already does part of an accountant\'s work. Keeping the books, preparing tax returns and audit as a final stop are now bad bets. What stays with people and pays well: narrow tax, reports for public companies (SEC reporting), checking a company before a sale (FDD), forensic work, and the controller job. They pay $120K–$225K. “Accountant” is nine jobs. We show only the ones worth your years.'},
  nurse:{head:'Your shortcut to the best-paid nursing jobs.', short:'Nursing is a YES. AI is already part of a nurse\'s day, but patients still need people. It depends which nurse you become. Specialty RN, psych NP, CRNA (nurse anesthetist) and travel nurses stay needed. The general ward as a final stop is a dead end. Starting as an LPN is a bad bet. Family NP work is a bad bet in big cities, where too many already do it. Pick the right road and skip wasted years.'},
  fin:{head:'Your shortcut to the finance analyst jobs that are growing.', short:'AI is changing finance work, and report-only jobs feel it first. “Financial analyst” is five jobs. The general reporting job is a trap. Its typical pay is $103,570, and beginner jobs there are down 21%. FP&A partnering (helping a team plan its money) pays up to $276,250. Strategic finance and the analytics hybrid pay in that range too. With AI as a tutor, you learn the tools in months, not years.'},
  creator:{head:'Your shortcut to a salaried content creator job.', short:'AI can now make a video for almost anyone. So companies pay for what AI can\'t do alone: taste, a real face and results. The staff content creator job is a YES. It\'s a salaried job inside a company, paying around $77,000 in job posts. Best are the brand, face and ad jobs. The agency job is a school, not a home. The writing-led desk is a NO. Your phone and AI editing tools are enough to start.'},
  analyst:{head:'Your shortcut to an analyst job that makes decisions, not just reports.', short:'AI now helps anyone make a quick chart. So report-only jobs are a bad end point. “Analyst” is six jobs. The two reporting jobs write documents about needs and make charts on request. The decision jobs are a good choice: product analyst and strategy and operations. Analytics engineering, which builds clean data tables, is a good choice too. They pay $96K–$300K. With AI as a tutor, you learn SQL in weeks.'},
  dataanalyst:{head:'Your shortcut to the data analyst jobs that pay for decisions.', short:'AI now helps anyone make a quick chart. So chart-on-request jobs pay the least. “Data analyst” is four different jobs. The reporting job is a bad end point: $60K–$75K at entry, and 1,108 people applied for one beginner job. The decision job is a good choice: product analyst. The job that builds clean data tables is a good choice too: analytics engineering. They pay $96K–$300K. We cut the rest, so you study only what pays.'},
  businessanalyst:{head:'Your shortcut to the business analyst job that helps bosses decide.', short:'AI now drafts requirement documents — the main work of one business analyst job. So that job is a bad bet: beginner pay is $51K–$82K. The other job is a good bet: strategy & operations, helping bosses make decisions. Google pays $124K–$177K. Same title. Different work. We show you how to cross over fast.'}
};

var PHASE_NAMES = ['Getting in', 'Proof', 'Get picked'];

var TRACKS = {
/* ================= LAW ================= */
law: [
  {name:'Getting in', steps:[
    {id:'law-g1', t:'Get a bachelor’s degree. 19 of 21 senior paralegal job posts ask for it. Want to be an attorney (a lawyer who goes to court)? Then you need a J.D., the US law degree. It must come from a school the state accepts. 23 of 25 top job posts ask for it.', src:'HR checklist · Parts 1–2, Must-have', ru:'Получите диплом бакалавра. Его просят 19 из 21 вакансий опытного помощника юриста. Хотите стать адвокатом? Тогда нужен J.D. — диплом юриста в США. Школа должна быть признана штатом. Его просят 23 из 25 лучших вакансий.', sru:'HR-чек-лист · Части 1–2, обязательное'},
    {id:'law-g2', t:'Get a paralegal certificate. It\'s short study, not years of school. 14 of 21 senior job posts ask for one. 6 of 21 name a program approved by the ABA (the American Bar Association).', src:'HR checklist · Part 2, Must-have', ru:'Получите сертификат помощника юриста (paralegal). Это короткая учёба, а не годы в вузе. Его просят 14 из 21 вакансий для опытных. 6 из 21 хотят программу, одобренную ABA (Американской ассоциацией юристов).', sru:'HR-чек-лист · Часть 2, обязательное'},
    {id:'law-g3', t:'Going for attorney? You need a bar license: the right to work as a lawyer. Keep it active, with no problems on your record. 22 of 25 top job posts ask for it. 17 of 25 accept a license from any one US state.', src:'HR checklist · Part 1, Must-have', ru:'Идёте в адвокаты? Нужна лицензия юриста (bar). Она даёт право работать адвокатом. Держите её действующей и без нарушений. Её требуют 22 из 25 лучших вакансий. 17 из 25 подходит лицензия любого одного штата США.', sru:'HR-чек-лист · Часть 1, обязательное'},
    {id:'law-g4', t:'Become a notary: a person who stamps and signs official papers. 5 of 21 senior paralegal job posts name it. It\'s cheap and fast. An easy plus on your resume.', src:'HR checklist · Part 2, Must-have', ru:'Станьте нотариусом (notary). Это человек, который заверяет бумаги печатью и подписью. Это упоминают 5 из 21 вакансий опытного помощника юриста. Это дёшево и быстро. Лёгкий плюс в резюме.', sru:'HR-чек-лист · Часть 2, обязательное'}
  ]},
  {name:'Proof', steps:[
    {id:'law-p1', t:'Go deep in ONE area of law, like privacy or company deals. This is what moves your pay up. Senior jobs start at 5+ years in one area. The top jobs ask for 10+. Gibson Dunn asks for 10 years in an AmLaw 100 firm (the 100 biggest US law firms).', src:'HR checklist · Part 2, Must-have', ru:'Углубитесь в ОДНУ область права. Например, защита данных или сделки компаний. Именно это поднимает зарплату. Опытный уровень — от 5+ лет в одной области. Лучшие работы просят 10+. Gibson Dunn просит 10 лет в фирме из AmLaw 100. Это 100 крупнейших юридических фирм США.', sru:'HR-чек-лист · Часть 2, обязательное'},
    {id:'law-p2', t:'Learn the main program for your kind of work. Employers check for it by name. For court cases, it\'s Relativity. For company deals, it\'s Carta and iManage Closing Folders. For company paperwork, it\'s Diligent Entities, hCue and GEMS.', src:'HR checklist · Part 2, Platform stack', ru:'Выучите главную программу для своего направления. Работодатели ищут её по названию. Для судебных дел это Relativity. Для сделок компаний — Carta и iManage Closing Folders. Для документов компаний — Diligent Entities, hCue и GEMS.', sru:'HR-чек-лист · Часть 2, стек платформ'},
    {id:'law-p3', t:'Hand one task at your current job to AI. Write down the time before and after. Top job posts want exactly this written proof. It shows you lead AI instead of losing work to it.', src:'Full Report · §5, months 0–3', ru:'Поручите AI одну задачу на текущей работе. Запишите, сколько времени она занимала до и после. Лучшие вакансии хотят именно такое письменное доказательство. Оно показывает: AI работает на вас, а не вместо вас.', sru:'Полный отчёт · §5, месяцы 0–3'},
    {id:'law-p4', t:'Show you use legal AI tools well. AI already does part of legal work, so this keeps your years of study paying. 7 of 25 attorney job posts ask for it. They never name a brand.', src:'HR checklist · Part 1, AI-era requirements', ru:'Покажите, что хорошо работаете с юридическими AI-программами. AI уже делает часть работы юриста. Это умение сохраняет ценность ваших лет учёбы. Это прямо просят 7 из 25 вакансий адвокатов. Названий программ они не дают.', sru:'HR-чек-лист · Часть 1, требования эпохи AI'},
    {id:'law-p5', t:'Know Microsoft Office / 365, program by program. Job posts list each one. 12–13 of 21 senior paralegal job posts still require it. Quick to learn, easy to prove.', src:'HR checklist · Part 2, Must-have', ru:'Знайте Microsoft Office / 365 — каждую программу. Вакансии перечисляют их по одной. Это всё ещё требуют 12–13 из 21 вакансий опытного помощника юриста. Выучить быстро, показать легко.', sru:'HR-чек-лист · Часть 2, обязательное'},
    {id:'law-p6', t:'Privacy only: get CIPP/US, the main privacy certificate. Ask ChatGPT or Claude to quiz you as you study. 3 of 3 privacy job posts that named a certificate named this one.', src:'HR checklist · Part 1, Differentiators', ru:'Только для защиты данных: получите CIPP/US. Это главный сертификат в этой области. Попросите ChatGPT или Claude гонять вас по вопросам. Все 3 из 3 таких вакансий, где упомянут сертификат, называют именно его.', sru:'HR-чек-лист · Часть 1, преимущества'}
  ]},
  {name:'Get picked', steps:[
    {id:'law-k1', t:'Tell your story as ONE area of law. Top job posts ask for 5–10 years in one area. Write your resume so your years read that way.', src:'Gate data · v1.1 door', ru:'Расскажите свой опыт как работу в ОДНОЙ области права. Лучшие вакансии просят 5–10 лет в одной области. Напишите резюме так, чтобы это было видно.', sru:'Данные ворот · дверь v1.1'},
    {id:'law-k2', t:'Lead with business judgment: advice that helps the company and weighs the risk. It\'s the #1 people skill in top job posts. 7+ of 25 name it. Give practical advice that moves the business forward.', src:'HR checklist · Part 1, Differentiators', ru:'Делайте упор на деловое чутьё. Это советы, которые помогают компании и учитывают риск. В лучших вакансиях это личное качество №1. Его называют 7+ из 25. Давайте практичные советы, которые двигают дело вперёд.', sru:'HR-чек-лист · Часть 1, преимущества'},
    {id:'law-k3', t:'Apply at the specialist level. That\'s where the top money is. Two jobs to aim at: Gibson Dunn Sr. Corporate Paralegal pays $150K–$200K. Cooley pays $135,200–$176,800.', src:'HR checklist · Part 2, posted bands', ru:'Подавайтесь на уровень узкого специалиста. Там самые большие деньги. Две работы-цели. Gibson Dunn Sr. Corporate Paralegal платит $150K–$200K. Cooley платит $135,200–$176,800.', sru:'HR-чек-лист · Часть 2, вилки из вакансий'},
    {id:'law-k4', t:'Before law school, do the math, so the degree pays you back. Your first salary must beat your debt. The typical (median) first salary is $100,000. The typical J.D. debt is $112,500.', src:'Full Report · §5, month-3 decision gate', ru:'Прежде чем идти на юрфак, посчитайте. Диплом должен окупиться. Первая зарплата должна быть больше долга. Типичная (медианная) первая зарплата — $100,000. Типичный долг за J.D. — $112,500.', sru:'Полный отчёт · §5, контрольная точка 3-го месяца'}
  ]}
],
/* ================= CPA ================= */
cpa: [
  {name:'Getting in', steps:[
    {id:'cpa-g1', t:'Get a bachelor’s degree in accounting or finance. 52 of 52 job posts with clear requirements ask for it. This one you can\'t skip.', src:'HR checklist · Filter 5, Must-have', ru:'Получите диплом бакалавра по бухгалтерии или финансам. Его требуют 52 из 52 вакансий с понятными требованиями. Без него никак.', sru:'HR-чек-лист · Фильтр 5, обязательное'},
    {id:'cpa-g2', t:'Week 1: check how your state gives the CPA license. The state board, the office in charge, decides. About 32 states now give it at 120 credits (study units) + 2 years of work. That way, the fifth year of school costs $0. A whole year saved.', src:'Full Report · §4–§5', ru:'Неделя 1: узнайте, как ваш штат выдаёт лицензию CPA (дипломированного бухгалтера). Это решает совет штата. Около 32 штатов дают её при 120 учебных кредитах + 2 годах опыта. Тогда пятый год учёбы стоит $0. Целый год экономии.', sru:'Полный отчёт · §4–§5'},
    {id:'cpa-g3', t:'Pass the CPA exam. It has 3 Core parts and 1 Discipline part (your chosen field). You must pass all of them within a set time. In most states, that\'s 30 months. Only 42% pass FAR, the hardest part, the first time. Ask ChatGPT or Claude to quiz you daily. Save money for one retake.', src:'HR checklist · CPA exam facts', ru:'Сдайте экзамен CPA. В нём 3 основные части (Core) и 1 часть по выбору (Discipline). Сдать все нужно за ограниченное время. В большинстве штатов — за 30 месяцев. FAR — самую трудную часть — с первого раза сдают только 42%. Попросите ChatGPT или Claude гонять вас по вопросам каждый день. Отложите деньги на одну пересдачу.', sru:'HR-чек-лист · факты об экзамене CPA'},
    {id:'cpa-g4', t:'Pick your Discipline part by your future job, not by pass rate. Then you won\'t study twice. BAR leads to technical accounting and advisory. ISC leads to IT audit and AI rules. TCP leads to specialized tax.', src:'Full Report · §4', ru:'Выбирайте часть по выбору под будущую работу, а не там, где легче сдать. Так не придётся учиться дважды. BAR ведёт в сложный учёт и консалтинг. ISC — в проверку IT-систем и правил для AI. TCP — в узкие налоги.', sru:'Полный отчёт · §4'},
    {id:'cpa-g5', t:'Work under a licensed CPA. You need 1 year of it after 150 credits. You need 2 years after 120 credits. In most states, a licensed CPA must sign off your experience.', src:'HR checklist · CPA exam facts', ru:'Поработайте под руководством лицензированного CPA. Нужен 1 год, если у вас 150 кредитов. Или 2 года, если 120 кредитов. В большинстве штатов ваш опыт должен подписать лицензированный CPA.', sru:'HR-чек-лист · факты об экзамене CPA'}
  ]},
  {name:'Proof', steps:[
    {id:'cpa-p1', t:'Learn NetSuite well. It\'s the program where companies keep their money records. 18 of 52 job posts ask for it. For senior accountant jobs in companies, it\'s 10 of 10. Without it, that job stays closed.', src:'HR checklist · Platform stack', ru:'Хорошо выучите NetSuite. В этой программе компании ведут денежные записи. Её просят 18 из 52 вакансий. Для опытного бухгалтера в компании — 10 из 10. Без неё на эту работу не попасть.', sru:'HR-чек-лист · стек платформ'},
    {id:'cpa-p2', t:'Learn GAAP for real: the rulebook for how companies count money. Ask Claude to explain each rule with an example. Start with ASC 606, the rule for money from customers. Senior job posts name it again and again. Then ASC 842, the rule for rent deals. And ASC 718, for paying workers in company stock. SOX 404 is the rule for money checks in big public companies. It shows up in SEC reporting jobs.', src:'HR checklist · Filter 5, Must-have', ru:'Выучите GAAP по-настоящему. Это книга правил, как компании считают деньги. Попросите Claude объяснить каждое правило на примере. Начните с ASC 606 — как считать деньги от клиентов. Вакансии для опытных называют его снова и снова. Потом ASC 842 — правило для аренды. И ASC 718 — как платить работникам акциями. SOX 404 — правило проверок денег в больших компаниях на бирже. Оно встречается в работе с отчётами для биржи (SEC).', sru:'HR-чек-лист · Фильтр 5, обязательное'},
    {id:'cpa-p3', t:'Learn Workiva, a program for company reports. 6 job posts name it. All are SEC reporting and technical jobs: reports for public companies. Few people know it, so it makes you stand out fast.', src:'HR checklist · Platform stack', ru:'Выучите Workiva — программу для отчётов компаний. Её называют 6 вакансий. Все — про отчёты для биржи (SEC) и сложный учёт. Её знают немногие. Поэтому она быстро вас выделит.', sru:'HR-чек-лист · стек платформ'},
    {id:'cpa-p4', t:'Learn Excel beyond the basics: pivot tables and VLOOKUP. A pivot table sums up big lists in seconds. 8 of 8 staff job posts check for them. Advisory jobs ask for more: financial modeling, or money plans in Excel.', src:'HR checklist · Platform stack', ru:'Выучите Excel дальше базы: сводные таблицы и VLOOKUP (ВПР). Сводная таблица за секунды подводит итог по большим спискам. Их проверяют 8 из 8 вакансий рядового бухгалтера. В консалтинге просят больше: денежные планы в Excel.', sru:'HR-чек-лист · стек платформ'},
    {id:'cpa-p5', t:'Learn Power BI. It turns data into charts. 4 job posts name it, all in advisory. SQL shows up in 0 of 52. So skip the trendy tools. Learn what your job asks for. It saves you months.', src:'HR checklist · Platform stack', ru:'Выучите Power BI. Он превращает данные в графики. Его называют 4 вакансии, все — в консалтинге. SQL встречается в 0 из 52. Так что модные инструменты пропустите. Учите то, что просит ваша работа. Это сэкономит месяцы.', sru:'HR-чек-лист · стек платформ'},
    {id:'cpa-p6', t:'Pick ONE industry and go deep. The best-paying job posts name theirs. Factory cost accounting is one. SaaS revenue (software subscriptions) is one — it uses ASC 606. Pass-through firms (small firms whose owners pay the tax) are one. Rich clients, called HNW and UHNW, are one.', src:'HR checklist · Filter 5, Must-have', ru:'Выберите ОДНУ отрасль и разберитесь в ней глубоко. Больше всего платят там, где отрасль названа. Например: учёт затрат на заводах. Доходы от подписок на программы (SaaS, тут нужен ASC 606). Небольшие фирмы, где налог платят владельцы. Богатые клиенты (HNW и UHNW).', sru:'HR-чек-лист · Фильтр 5, обязательное'}
  ]},
  {name:'Get picked', steps:[
    {id:'cpa-k1', t:'Become the tech person at your current job. AI is taking the routine part of accounting. The person who runs the tools stays needed. Automate part of the month-end close. Or own the tools that check two records match. Or own the ERP, the company\'s main money program.', src:'Full Report · §5, months 0–3', ru:'Возьмите на себя технику на своей работе. AI забирает рутину бухгалтера. А тот, кто управляет программами, остаётся нужен. Автоматизируйте часть закрытия месяца. Или отвечайте за сверку — проверку, что две записи совпадают. Или за ERP — главную денежную программу компании.', sru:'Полный отчёт · §5, месяцы 0–3'},
    {id:'cpa-k2', t:'Write down one process you made better. Show the hours before and after. Good job posts look for exactly this one-page proof. It counts more than another certificate.', src:'Full Report · §5, months 0–3', ru:'Опишите один процесс, который вы улучшили. Покажите часы до и после. Хорошие вакансии ищут именно такое доказательство на одну страницу. Оно весит больше ещё одного сертификата.', sru:'Полный отчёт · §5, месяцы 0–3'},
    {id:'cpa-k3', t:'Make one piece of proof for the job you want. Write one technical memo: a short note on a hard case. Or build one model. Or run one controls project (checks that keep money safe). Write it all down.', src:'Full Report · §5, months 4–9', ru:'Сделайте одну работу-доказательство для работы мечты. Напишите короткую записку о трудном случае. Или постройте одну денежную модель. Или проведите проект по проверкам, которые берегут деньги. Всё запишите.', sru:'Полный отчёт · §5, месяцы 4–9'},
    {id:'cpa-k4', t:'Save 10+ real job posts for the job you want. Read what they ask for. Close your gaps one by one: the skills you don\'t have yet. Then you study only what counts.', src:'Full Report · §5, month-3 decision gate', ru:'Сохраните 10+ настоящих вакансий на работу, которую хотите. Прочитайте, что они просят. Закрывайте пробелы по одному — навыки, которых пока нет. Так вы учите только то, что нужно.', sru:'Полный отчёт · §5, контрольная точка 3-го месяца'},
    {id:'cpa-k5', t:'Want an FDD job (checking a company’s money before a sale) or a top industry job? First get experience at an accounting firm. 11 job posts outside such firms say so plainly.', src:'HR checklist · Filter 5, Must-have', ru:'Хотите проверять деньги компаний перед продажей (FDD)? Или лучшую работу в отрасли? Сначала наберите опыт в бухгалтерской фирме. 11 вакансий вне таких фирм прямо это пишут.', sru:'HR-чек-лист · Фильтр 5, обязательное'}
  ]}
],
/* ================= NURSE ================= */
nurse: [
  {name:'Getting in', steps:[
    {id:'nur-g1', t:'Keep an active RN license (registered nurse) in your state. 16 of 16 job posts ask for it. 40 states now share one license system, called compact. There, your license works across states. Keep it clean. It\'s your key to travel jobs.', src:'HR checklist · Part 1, Must-have', ru:'Держите лицензию RN (дипломированной медсестры) действующей. Её просят 16 из 16 вакансий. 40 штатов уже признают лицензии друг друга (система compact). Там ваша лицензия работает в разных штатах. Берегите её от нарушений. С ней открыты разъездные контракты.', sru:'HR-чек-лист · Часть 1, обязательное'},
    {id:'nur-g2', t:'Get the license the cheap, short way. The ADN, a short nursing degree, costs $5,472 in total at Wake Tech. You take the same NCLEX (license exam) as with a BSN (bachelor\'s degree). Practice NCLEX questions with ChatGPT or Claude. Finish the BSN later, while you earn.', src:'HR checklist · The BSN truth', ru:'Получите лицензию коротким и дешёвым путём. ADN — короткая степень медсестры. В Wake Tech вся учёба стоит $5,472. Экзамен на лицензию (NCLEX) тот же, что и после бакалавриата (BSN). Тренируйтесь на вопросах с ChatGPT или Claude. Бакалавриат закончите потом, уже получая зарплату.', sru:'HR-чек-лист · правда о BSN'},
    {id:'nur-g3', t:'Keep your BLS certificate current. BLS is basic life support: help in the first minutes of an emergency. 15 of 16 job posts ask for it. Every job wants it.', src:'HR checklist · Part 1, Must-have', ru:'Держите сертификат BLS действующим. BLS — это первая помощь в первые минуты экстренной ситуации. Его просят 15 из 16 вакансий. Он нужен везде.', sru:'HR-чек-лист · Часть 1, обязательное'},
    {id:'nur-g4', t:'Get ACLS, the advanced emergency certificate. It\'s your real ticket into a specialty, where pay grows. Most specialty jobs want it at hire or within 30–90 days. 10 of 16 job posts name it.', src:'HR checklist · Part 1, Must-have', ru:'Получите ACLS — продвинутый сертификат экстренной помощи. Это настоящий пропуск в узкую специальность, где растёт зарплата. Его просят при найме или в течение 30–90 дней. Его называют 10 из 16 вакансий.', sru:'HR-чек-лист · Часть 1, обязательное'},
    {id:'nur-g5', t:'For later, the NP path (a nurse who can diagnose and prescribe): get board-certified in your specialty. It\'s an exam that proves your specialty. In practice, 10 of 10 NP job posts ask for it. You also need the state NP license and the DEA, which lets you prescribe strong drugs.', src:'HR checklist · Part 2, Must-have', ru:'На потом — путь в NP (медсестра, которая ставит диагноз и выписывает лекарства). Сдайте экзамен по своей специальности (board certification). На деле его просят 10 из 10 вакансий NP. Ещё нужны лицензия NP штата и DEA. DEA даёт право выписывать сильные лекарства.', sru:'HR-чек-лист · Часть 2, обязательное'}
  ]},
  {name:'Proof', steps:[
    {id:'nur-p1', t:'Take a specialty job first: ICU, ED or OR. The ICU is intensive care, for the sickest patients. The ED is the emergency room. The OR is the operating room. This is your shortcut to bigger pay: travel jobs, the CRNA path and well-paid NP paths.', src:'Full Report · §1–§2', ru:'Первую работу берите по узкой специальности: ICU, ED или OR. ICU — реанимация, самые тяжёлые пациенты. ED — приёмное отделение скорой. OR — операционная. Это короткий путь к большим деньгам. Отсюда — разъездные контракты, путь в анестезисты (CRNA) и хорошо оплачиваемые пути в NP.', sru:'Полный отчёт · §1–§2'},
    {id:'nur-p2', t:'Get 2 years in your specialty. Travel jobs start there: 8 of 10 travel job posts ask for it. These years also lift you to the top of staff pay.', src:'HR checklist · Part 1, Differentiators', ru:'Наберите 2 года в своей специальности. С этого начинаются разъездные контракты: их просят 8 из 10 таких вакансий. Эти годы ещё и поднимают вашу зарплату в штате до верхней планки.', sru:'HR-чек-лист · Часть 1, преимущества'},
    {id:'nur-p3', t:'Start an online RN-to-BSN in your first year of work. It costs $12,000 in total. In Utah, it can take just 2 semesters. 25% of employers require the BSN for new hires. 69.8% prefer it (AACN, the nursing schools group). You study while you earn. No lost years.', src:'HR checklist · The BSN truth', ru:'Начните онлайн-программу RN-to-BSN (бакалавриат для работающих медсестёр) в первый год работы. Всё стоит $12,000. В Юте можно уложиться в 2 семестра. 25% работодателей требуют BSN у новичков. 69.8% его предпочитают (AACN — объединение школ медсестёр). Вы учитесь и получаете зарплату. Без потерянных лет.', sru:'HR-чек-лист · правда о BSN'},
    {id:'nur-p4', t:'When you have enough experience, take your specialty certificate. For ICU nurses, it\'s the CCRN. 3 of 16 RN job posts prefer it. 0 require it. Still, it makes you stand out. It also shows CRNA schools you\'re serious.', src:'HR checklist · Certification stack', ru:'Когда хватит опыта, сдайте сертификат по специальности. Для реанимации это CCRN. Его предпочитают 3 из 16 вакансий RN. Требуют — 0. Но он вас выделяет. И показывает школам анестезистов (CRNA), что вы настроены серьёзно.', sru:'HR-чек-лист · стек сертификатов'},
    {id:'nur-p5', t:'Become the AI expert on your unit. AI is already part of a nurse\'s day. Over three-quarters of nurses use it every day. Only about 10% are experts. That top group stands out when hiring (McKinsey). Be in it.', src:'Radar Issue #1 · item 2', ru:'Станьте тем, кто ведёт AI в своём отделении. AI уже стал частью дня медсестры. Больше трёх четвертей медсестёр пользуются им каждый день. Экспертов — только около 10%. Их замечают при найме (McKinsey). Будьте среди них.', sru:'Радар · Выпуск №1 · пункт 2'}
  ]},
  {name:'Get picked', steps:[
    {id:'nur-k1', t:'Compare residency offers by growth, not first pay. A residency is a training job for new nurses. 22.7% of new RNs leave in their first year (NSI). A clear training plan keeps you on track.', src:'Full Report · §5, months 4–12', ru:'Выбирайте программу для новичков (residency) по росту, а не по первой зарплате. Это учебная работа для новых медсестёр. 22.7% новых медсестёр уходят в первый год (NSI). Чёткий план обучения удержит вас на пути.', sru:'Полный отчёт · §5, месяцы 4–12'},
    {id:'nur-k2', t:'Move to the ICU, ED or OR by month 18–24. If your hospital can\'t move you by month 24, change hospitals. Don\'t lose time. Experienced specialty nurses get $10K–$25K just for joining.', src:'Full Report · §5, month-12 gate', ru:'Перейдите в ICU, ED или OR к 18–24 месяцу. Если больница не переведёт вас к 24 месяцу — меняйте больницу. Не теряйте время. Опытным медсёстрам узкой специальности платят $10K–$25K просто за приход.', sru:'Полный отчёт · §5, контрольная точка 12-го месяца'},
    {id:'nur-k3', t:'Get charge nurse experience: the nurse who leads the shift. Relief charge means you lead when the main one is away. This is the way into assistant nurse manager. It pays $61.91–$97.72/hr. It was the only RN job post that required a BSN.', src:'HR checklist · Part 1, Differentiators', ru:'Наберите опыт старшей медсестры смены (charge nurse). Для начала подменяйте старшую, когда её нет. Так попадают в помощники заведующей отделением. Там платят $61.91–$97.72/hr. Это единственная вакансия RN, где требовали BSN.', sru:'HR-чек-лист · Часть 1, преимущества'},
    {id:'nur-k4', t:'NP step, year 3–5: go NP only in a specialty that pays. Choose by real pay: psych pays $200K–$257K. Choose your state with care too. CA, TX and FL are Restricted: a doctor must oversee your work. 27 states + DC are Full Practice: you work on your own.', src:'Full Report · §7–§9', ru:'Шаг в NP, год 3–5: идите туда только со специальностью, за которую платят. Выбирайте по настоящей зарплате: психиатрия — $200K–$257K. Штат тоже выбирайте с умом. В CA, TX и FL за вашей работой должен следить врач. В 27 штатах + DC вы работаете сами.', sru:'Полный отчёт · §7–§9'},
    {id:'nur-k5', t:'Pay for the MSN (master\'s) plus the certificate. Don\'t pay extra for the DNP (doctorate). 0 of 16 top job posts require it. That saves you years and money. CRNA is the one exception. There, the doctorate is the license itself.', src:'HR checklist · Part 2, The degree myth', ru:'Платите за магистратуру (MSN) плюс сертификат. Не переплачивайте за докторскую степень (DNP). Её требуют 0 из 16 лучших вакансий. Это экономит годы и деньги. Исключение одно — анестезисты (CRNA). Там докторская степень и есть лицензия.', sru:'HR-чек-лист · Часть 2, миф о степени'}
  ]}
],
/* ================= FINANCE / FP&A =================
   NOTE: this package's hr-checklist.md is truncated mid-Filter-3 on disk;
   the steps below trace to its Filter 1–2 tables and to the Full Report's
   §4 applied checklist (which quotes the full checklist's counts). */
fin: [
  {name:'Getting in', steps:[
    {id:'fin-g1', t:'Get a bachelor’s degree in finance or another numbers field. Almost all of the 40 job posts ask for it.', src:'Full Report · §4, applied checklist', ru:'Получите диплом бакалавра по финансам или в другой области с цифрами. Его просят почти все из 40 вакансий.', sru:'Полный отчёт · §4, прикладной чек-лист'},
    {id:'fin-g2', t:'Learn advanced Excel and financial modeling (money plans in Excel). You need it. But everyone has it. Learn it fast with AI help and move on. It won\'t make you stand out.', src:'Full Report · §4, applied checklist', ru:'Выучите продвинутый Excel и денежные планы в нём. Это нужно. Но это есть у всех. Освойте быстро, с помощью AI, и идите дальше. Выделиться это не поможет.', sru:'Полный отчёт · §4, прикладной чек-лист'},
    {id:'fin-g3', t:'Skip the CFA for this goal. It\'s a hard finance certificate. 0 of 40 job posts require it. 3 prefer it. That\'s time you save. Come back to it only if you move to investing jobs.', src:'Full Report · §2, Filter 2', ru:'Для этой цели CFA пропустите. Это трудный финансовый сертификат. Его требуют 0 из 40 вакансий. Предпочитают — 3. Сэкономленное время — ваше. Вернитесь к нему, только если пойдёте в инвестиции.', sru:'Полный отчёт · §2, Фильтр 2'}
  ]},
  {name:'Proof', steps:[
    {id:'fin-p1', t:'Learn SQL well: the language for asking databases questions. Keep going until you can write window functions alone (math across many rows). With ChatGPT or Claude as a tutor, it takes weeks, not years. SQL is the #1 ask here: 31 of 40 job posts want it.', src:'Full Report · §4–§5', ru:'Хорошо выучите SQL — язык, на котором задают вопросы базам данных. Учите, пока не сможете сами писать оконные функции. Они считают сразу по многим строкам. С ChatGPT или Claude в роли учителя это недели, а не годы. SQL здесь просят чаще всего (№1): 31 из 40 вакансий.', sru:'Полный отчёт · §4–§5'},
    {id:'fin-p2', t:'Learn ONE planning program well: where companies build money plans. 16 of 40 job posts name one. Anaplan is named most: 15 of 40. Job posts strictly require its Certified Model Builder certificate. One program, not five.', src:'Full Report · §4, applied checklist', ru:'Хорошо выучите ОДНУ программу для денежных планов компании. Её называют 16 из 40 вакансий. Чаще всех — Anaplan: 15 из 40. Его сертификат Certified Model Builder требуют обязательно. Одну программу, а не пять.', sru:'Полный отчёт · §4, прикладной чек-лист'},
    {id:'fin-p3', t:'Build two dashboards (screens of live charts) on real data. Don\'t just look at them. Build them. 20 of 40 job posts name a chart tool. Tableau gets 14 mentions. Power BI gets 9.', src:'Full Report · §5, months 4–6', ru:'Сделайте две панели с живыми графиками на настоящих данных. Не смотрите — делайте сами. Программу для графиков называют 20 из 40 вакансий. Tableau — 14 раз. Power BI — 9.', sru:'Полный отчёт · §5, месяцы 4–6'},
    {id:'fin-p4', t:'Learn Python at analyst level. Know pandas, the Python tool for data tables. AI can explain every line of code to you. Finish one real automation, so the computer does a boring task. 16 of 40 job posts name Python.', src:'Full Report · §4, applied checklist', ru:'Выучите Python на уровне аналитика. Знайте pandas — инструмент Python для таблиц. AI объяснит вам каждую строку кода. Доведите до конца одну автоматизацию: пусть скучную задачу делает компьютер. Python называют 16 из 40 вакансий.', sru:'Полный отчёт · §4, прикладной чек-лист'},
    {id:'fin-p5', t:'Automate one repeating part of your own reports. Write down before and after: hours per month and the error rate. Top job posts look for exactly this one-page proof.', src:'Full Report · §5, months 0–3', ru:'Автоматизируйте одну повторяющуюся часть своих отчётов. Запишите, как было и как стало: часы в месяц и долю ошибок. Лучшие вакансии ищут именно такое доказательство на одну страницу.', sru:'Полный отчёт · §5, месяцы 0–3'}
  ]},
  {name:'Get picked', steps:[
    {id:'fin-k1', t:'Own the forecast for one team, start to finish: the money plan for the next months. Top job posts say it like this: “owned a forecast others relied on.” That line gets you hired.', src:'Full Report · §5, months 0–3', ru:'Отвечайте за прогноз одного отдела от начала до конца. Прогноз — денежный план на ближайшие месяцы. Лучшие вакансии ищут именно это: прогноз, на который опирались другие. Такая строка в резюме приводит к найму.', sru:'Полный отчёт · §5, месяцы 0–3'},
    {id:'fin-k2', t:'Apply sideways, to mixed titles: FP&A analyst (planning analyst), BI analyst and finance analytics. There, your proof does the talking. Skip plain “analyst” jobs. They\'re shrinking: −21%.', src:'Radar Issue #1 · item 4', ru:'Подавайтесь на соседние, смешанные должности. Аналитик по планированию (FP&A analyst), аналитик данных и графиков (BI analyst), финансовая аналитика. Там за вас говорит ваша работа. Обычного «аналитика» обходите: таких вакансий всё меньше, −21%.', sru:'Радар · Выпуск №1 · пункт 4'},
    {id:'fin-k3', t:'In your new job, become the team\'s go-to person from day one. Join their regular work meetings. Run their forecast. Show their variance: plan versus real numbers.', src:'Full Report · §5, months 7–12', ru:'На новой работе с первого дня станьте своим для отдела. Ходите на их рабочие встречи. Ведите их прогноз. Показывайте разницу между планом и фактом.', sru:'Полный отчёт · §5, месяцы 7–12'},
    {id:'fin-k4', t:'Do your checklist again at month 12. Think about the CFA again only if your new goal is investing jobs.', src:'Full Report · §5, months 7–12', ru:'Пройдите чек-лист снова на 12-м месяце. О CFA думайте, только если новая цель — работа в инвестициях.', sru:'Полный отчёт · §5, месяцы 7–12'}
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
  {name:'Getting in', steps:[
    {id:'cst-g1', t:'Shoot three short videos on your phone: a product demo, a video where you talk to the camera, and your take on a trend. 12 of 40 staff job posts mention phone filming. One employer hires on a phone video alone. No film school needed.', src:'HR checklist v2 · Part 1, Stops 0+3', ru:'Снимите три коротких видео на телефон: показ продукта, разговор в камеру и своя версия тренда. Съёмку на телефон упоминают 12 из 40 вакансий в штат. Один работодатель нанимает только по видео с телефона. Киношкола не нужна.', sru:'HR-чек-лист v2 · Часть 1, стопы 0+3'},
    {id:'cst-g2', t:'Edit the same raw video twice: once in CapCut and once in Premiere Pro. 21 of 40 job posts name Premiere, and 15 of 40 name CapCut. Employers check you can work both fast and carefully.', src:'HR checklist v2 · Part 1, Stop 2', ru:'Смонтируйте одно и то же видео дважды: в CapCut и в Premiere Pro. Premiere называют 21 из 40 вакансий, CapCut — 15 из 40. Работодатели смотрят, умеете ли вы работать и быстро, и тщательно.', sru:'HR-чек-лист v2 · Часть 1, стоп 2'},
    {id:'cst-g3', t:'Publish 10 posts made right inside TikTok, Reels or Shorts. Don\'t copy them from another app. 28 of 40 job posts want you at home in these apps.', src:'HR checklist v2 · Part 1, Stop 1', ru:'Опубликуйте 10 постов, сделанных прямо в TikTok, Reels или Shorts. Не переносите их из другого приложения. 28 из 40 вакансий хотят, чтобы вы свободно чувствовали себя в этих приложениях.', sru:'HR-чек-лист v2 · Часть 1, стоп 1'},
    {id:'cst-g4', t:'Make a one-page portfolio with your 6 best pieces. Under each, write its numbers: views, how long people watched, and how many reacted. 22 of 40 job posts ask for a portfolio. Only 8 of 40 ask for a degree. Your videos are your diploma. You\'ve got this!', src:'HR checklist v2 · Part 1, Stop 0', ru:'Соберите портфолио на одну страницу: ваши 6 лучших работ. Под каждой — цифры: просмотры, сколько смотрели и сколько людей отреагировало. Портфолио просят 22 из 40 вакансий, а диплом — только 8 из 40. Ваши видео и есть ваш диплом. У вас получится!', sru:'HR-чек-лист v2 · Часть 1, стоп 0'},
  ]},
  {name:'Proof', steps:[
    {id:'cst-p1', t:'Pick your job: brand studio-of-one, face of the brand, paid ads, agency, or media and writing. Studio-of-one means one person does the whole job alone. Write down why your videos fit that job. Pay differs: brand jobs pay around $65K–$85K, and writing jobs pay near $57.5K.', src:'HR checklist v2 · Part 4', ru:'Выберите свою работу: бренд «студия в одном лице» (вы делаете всё сами), лицо бренда, платная реклама, агентство или медиа и тексты. Запишите, почему ваши видео подходят этой работе. Платят по-разному: у брендов около $65K–$85K, за тексты — около $57.5K.', sru:'HR-чек-лист v2 · Часть 4'},
    {id:'cst-p2', t:'Write the words for every piece in your portfolio: the hook (the first seconds that stop a viewer), the script, the captions, and the call to action. Let AI draft five hooks, then pick and fix the best. 24 of 40 job posts list writing the words as a duty.', src:'HR checklist v2 · Part 1, Stop 4', ru:'Напишите тексты к каждой работе в портфолио: зацепку (первые секунды, которые останавливают зрителя), сценарий, подписи и призыв к действию. Пусть AI набросает пять зацепок, а вы выберите и доработайте лучшую. Писать тексты — обязанность в 24 из 40 вакансий.', sru:'HR-чек-лист v2 · Часть 1, стоп 4'},
    {id:'cst-p3', t:'Learn to read the numbers: views, retention (how long people keep watching), and CTR (the share of people who clicked). For each piece in your portfolio, write one line: what should you change next time? 23 of 40 job posts list reading the numbers as a duty.', src:'HR checklist v2 · Part 1, Stop 5', ru:'Научитесь читать цифры: просмотры, удержание (как долго смотрят) и CTR (доля тех, кто кликнул). К каждой работе в портфолио напишите одну строку: что изменить в следующий раз? Читать цифры — обязанность в 23 из 40 вакансий.', sru:'HR-чек-лист v2 · Часть 1, стоп 5'},
    {id:'cst-p4', t:'Record a 30-second video of yourself on camera to apply. Say who you are, what you make, and one result with a number. One employer in our scan hires on exactly this video. 13 of 40 job posts want a person on camera.', src:'HR checklist v2 · Part 1, Stop 6', ru:'Запишите 30-секундное видео-заявку, где вы в кадре. Скажите, кто вы, что делаете, и назовите один результат с цифрой. Один работодатель из нашей проверки нанимает именно по такому видео. Человека в кадре хотят 13 из 40 вакансий.', sru:'HR-чек-лист v2 · Часть 1, стоп 6'},
  ]},
  {name:'Get picked', steps:[
    {id:'cst-k1', t:'Apply to 10 staff job posts. Send your portfolio first and your resume second. Aim first at brand, face and paid ad jobs. Take an agency job only with a plan to leave in 1–3 years.', src:'HR checklist v2 · Part 4', ru:'Откликнитесь на 10 вакансий в штат. Сначала отправляйте портфолио, потом резюме. Цельтесь сначала в бренды, работу лицом бренда и платную рекламу. В агентство идите, только если знаете, как уйти через 1–3 года.', sru:'HR-чек-лист v2 · Часть 4'},
    {id:'cst-k2', t:'Run one paid ad test from start to finish. Test one hook (the first seconds) against another. Read the CTR (the share of people who clicked). Write up the result. It\'s the rarest proof in this market: work with a money number on it.', src:'HR checklist v2 · Part 4 — performance seat', ru:'Проведите один тест платной рекламы от начала до конца. Сравните одну зацепку (первые секунды видео) с другой. Посмотрите CTR (долю тех, кто нажал). Запишите результат. Это самое редкое доказательство на рынке: работа с денежной цифрой.', sru:'HR-чек-лист v2 · Часть 4 — работа в платной рекламе'},
    {id:'cst-k3', t:'Set up your own way of using AI for machine work: captions, versions, and first cuts. You lead and you judge the result. AI now does the routine part of this job. Only 2 of 40 job posts name AI tools today. Soon it will be a must, asked for by name.', src:'HR checklist v2 · Part 1, Stop 7', ru:'Настройте свой способ работы с AI для машинной части: подписи, варианты, первый монтаж. Вы руководите и оцениваете результат. AI уже берёт на себя рутину этой работы. Сегодня AI-инструменты называют только 2 из 40 вакансий. Скоро это станет обязательным, и его будут просить прямо.', sru:'HR-чек-лист v2 · Часть 1, стоп 7'},
    {id:'cst-k4', t:'Add a rare skill most people don\'t have. It can be hosting on camera, a system for paid ads, or deep knowledge of one industry. Every job post above $100K in our scan adds one of these to plain content making.', src:'HR checklist v2 · Part 2 — the pay map', ru:'Добавьте редкий навык, которого нет у большинства. Например, умение вести в кадре, систему платной рекламы или глубокое знание одной отрасли. Каждая вакансия выше $100K в нашей проверке добавляет что-то из этого к обычному созданию контента.', sru:'HR-чек-лист v2 · Часть 2 — карта оплаты'},
    {id:'cst-k5', t:'Post breakdowns of your own content, with the numbers. Write what worked, what failed, and what you changed. Managers hire creators they\'ve already seen thinking.', src:'Method v2 · the visionary layer', ru:'Публикуйте разборы своего контента с цифрами. Пишите, что сработало, что нет и что вы поменяли. Нанимают тех, чьи мысли уже видели.', sru:'Метод v2 · визионерский слой'},
    {id:'cst-k6', t:'Check your job again every quarter. Compare your pay range with fresh job posts. See if new job posts name AI tools. Decide your next move to another job. We re-scan the whole market on 1 November 2027.', src:'Radar issue 02', ru:'Каждый квартал заново проверяйте свою работу. Сравнивайте свою зарплату со свежими вакансиями. Смотрите, называют ли новые вакансии AI-инструменты. Решайте, куда двигаться дальше. Мы заново проверим весь рынок 1 ноября 2027 года.', sru:'Радар, выпуск 02'},
  ]}
]
,
/* ================= BUSINESS / DATA ANALYST =================
   Steps trace 1:1 to the package's hr-checklist.md Part 6 (the 14-point
   checklist): items 1–4 "Getting in" → Getting in; items 5–9 "Proof" →
   Proof; items 10–14 "Get picked" → Get picked. */
analyst: [
  {name:'Getting in', steps:[
    {id:'ana-g1', t:'Get SQL to a working level: joins, aggregations and window functions (math across many rows at once). With ChatGPT or Claude as a tutor, it takes weeks. 43 of 46 job posts we opened ask for SQL. Every job on this map needs it.', src:'HR checklist · Part 6, item 1 — Getting in', ru:'Освойте SQL до рабочего уровня: соединения таблиц, итоги и оконные функции. Оконные функции считают сразу по многим строкам. С ChatGPT или Claude в роли учителя это займёт недели. SQL просят 43 из 46 вакансий, которые мы открыли. Он нужен на любой работе с этой карты.', sru:'HR-чек-лист · Часть 6, пункт 1 — Вход'},
    {id:'ana-g2', t:'Learn one chart tool well: Tableau or Power BI. It turns data into charts and dashboards. 27 of 46 job posts name one. Report jobs work in it all day. Decision jobs use it to show results.', src:'HR checklist · Part 6, item 2 — Getting in', ru:'Хорошо выучите одну программу для графиков: Tableau или Power BI. Она превращает данные в графики и панели. Её просят 27 из 46 вакансий. На работе с отчётами в ней сидят весь день. Там, где принимают решения, в ней показывают выводы.', sru:'HR-чек-лист · Часть 6, пункт 2 — Вход'},
    {id:'ana-g3', t:'Pick your job on purpose. The six jobs on this map pay $51K to $300K, and all are called “analyst”. Write down which one your skills fit today. That\'s how you skip the wrong road.', src:'HR checklist · Part 6, item 3 — Getting in', ru:'Выберите свою работу осознанно. Шесть работ на этой карте платят от $51K до $300K. И все называются «аналитик». Запишите, какой из них подходят ваши навыки сегодня. Так вы не свернёте не туда.', sru:'HR-чек-лист · Часть 6, пункт 3 — Вход'},
    {id:'ana-g4', t:'Use AI tools yourself, on real analysis: Copilot, ChatGPT and Claude. 6 of 46 job posts require a named AI tool. Employers\' asks are changing, and this one is growing. Start now and you\'re ahead.', src:'HR checklist · Part 6, item 4 — Getting in', ru:'Работайте с AI сами, на настоящих задачах: Copilot, ChatGPT и Claude. 6 из 46 вакансий требуют конкретную AI-программу. Требования работодателей меняются, и это растёт. Начнёте сейчас — будете впереди.', sru:'HR-чек-лист · Часть 6, пункт 4 — Вход'}
  ]},
  {name:'Proof', steps:[
    {id:'ana-p1', t:'Build one dashboard (a screen of charts) that helps someone decide. Not one that just fills a request. Write down who opened it and what they decided. If nobody opens it, it didn\'t help yet — so make the next one count.', src:'HR checklist · Part 6, item 5 — Proof', ru:'Сделайте одну панель с графиками, которая помогла кому-то решить. Не отчёт «потому что попросили». Запишите, кто её открыл и что решил. Никто не открыл? Это нормально. Просто сделайте следующую полезнее.', sru:'HR-чек-лист · Часть 6, пункт 5 — Доказательства'},
    {id:'ana-p2', t:'Learn data modeling with dbt. It turns raw data into clean tables. 7 of 7 analytics engineer job posts ask for it. Every AI answer reads from these tables. So in the age of AI, this skill matters more.', src:'HR checklist · Part 6, item 6 — Proof', ru:'Выучите моделирование данных в dbt. dbt превращает сырые данные в чистые таблицы. Его просят 7 из 7 вакансий инженера данных. Из этих таблиц AI берёт данные для каждого ответа. Значит, в эпоху AI этот навык ценнее.', sru:'HR-чек-лист · Часть 6, пункт 6 — Доказательства'},
    {id:'ana-p3', t:'Learn Python for analysis. AI can explain every line to you. 18 of 46 job posts ask for Python. In data analyst posts, it\'s 9 of 9, in some form. Python helps you grow past the pay limit of report jobs.', src:'HR checklist · Part 6, item 7 — Proof', ru:'Выучите Python для анализа. AI объяснит вам каждую строку. Python просят 18 из 46 вакансий. В вакансиях аналитика данных — 9 из 9, так или иначе. Python поможет пробить зарплатный потолок работы с отчётами.', sru:'HR-чек-лист · Часть 6, пункт 7 — Доказательства'},
    {id:'ana-p4', t:'Run one experiment from start to finish: an A/B test (compare two versions), or a metric you set up and defended. A metric is a number a team watches. 4 of 4 product analyst job posts ask for experiments. Your own metric proves you can carry a decision.', src:'HR checklist · Part 6, item 8 — Proof', ru:'Проведите один эксперимент от начала до конца. Сравните две версии (A/B-тест). Или придумайте и отстойте свою метрику — число, за которым следит команда. Эксперименты просят 4 из 4 вакансий аналитика продукта. Своя метрика показывает: вам можно доверить решение.', sru:'HR-чек-лист · Часть 6, пункт 8 — Доказательства'},
    {id:'ana-p5', t:'Automate one regular report that\'s yours. You used to rebuild it by hand. Now it runs itself. Write down the hours you saved. Job posts that mention AI ask for exactly this.', src:'HR checklist · Part 6, item 9 — Proof', ru:'Автоматизируйте один регулярный отчёт, за который вы отвечаете. Раньше вы собирали его руками. Теперь он делается сам. Запишите, сколько часов сэкономили. Вакансии, где упомянут AI, просят именно это.', sru:'HR-чек-лист · Часть 6, пункт 9 — Доказательства'}
  ]},
  {name:'Get picked', steps:[
    {id:'ana-k1', t:'Apply to decision jobs by their exact names: product analyst, analytics engineer, strategy & operations. Plain “analyst” jobs are very crowded: 1,108 people applied to one beginner job. Exact names give you a better chance.', src:'HR checklist · Part 6, item 10 — Get picked', ru:'Подавайтесь на работы, где принимают решения. Ищите их по точному названию: product analyst (аналитик продукта), analytics engineer (инженер данных), strategy & operations (стратегия и операции). На обычного «аналитика» огромная очередь: 1,108 заявок на одну работу для новичка. По точному названию шансов больше.', sru:'HR-чек-лист · Часть 6, пункт 10 — Вас выбирают'},
    {id:'ana-k2', t:'In interviews, start with a decision you changed, not a dashboard you built. All 7 strategy & operations job posts call work with decision-makers the main duty. These are the people who act on your work.', src:'HR checklist · Part 6, item 11 — Get picked', ru:'На собеседовании начните с решения, которое вы изменили. Не с панели графиков, которую сделали. Все 7 вакансий по стратегии и операциям называют главным работу с теми, кто принимает решения. Это люди, которые действуют по вашим выводам.', sru:'HR-чек-лист · Часть 6, пункт 11 — Вас выбирают'},
    {id:'ana-k3', t:'Show how you work with AI. One analysis where AI wrote a draft and you checked it. Show the checking, not just the draft. The 6 job posts that name AI tools want this proof. In their words: “to build something real”.', src:'HR checklist · Part 6, item 12 — Get picked', ru:'Покажите, как вы работаете с AI. Один анализ: AI сделал черновик, вы проверили. Покажите проверку, а не только черновик. 6 вакансий, где названы AI-программы, хотят именно это. Их словами: «сделать что-то настоящее».', sru:'HR-чек-лист · Часть 6, пункт 12 — Вас выбирают'},
    {id:'ana-k4', t:'Know your price from real job posts. Report jobs pay $60K–$95K. Product jobs pay $106K–$168K. Analytics engineering pays $130K–$244K for experienced people. Pay stuck? It\'s not your fault. It\'s the job — so aim at a better one.', src:'HR checklist · Part 6, item 13 — Get picked', ru:'Узнайте свою цену по настоящим вакансиям. Работа с отчётами: $60K–$95K. Аналитик продукта: $106K–$168K. Инженер данных: $130K–$244K для опытных. Зарплата не растёт? Вы не виноваты. Дело в самой работе — цельтесь в другую.', sru:'HR-чек-лист · Часть 6, пункт 13 — Вас выбирают'},
    {id:'ana-k5', t:'Redo this checklist every quarter with fresh job posts. In one scan, AI tools went from zero to 6 of 46 job posts. AI changes what employers ask for, fast. A quick check keeps you ahead.', src:'HR checklist · Part 6, item 14 — Get picked', ru:'Проходите этот чек-лист каждый квартал по свежим вакансиям. За одну нашу проверку AI-программы появились с нуля в 6 из 46 вакансий. AI быстро меняет требования работодателей. Короткая проверка держит вас впереди.', sru:'HR-чек-лист · Часть 6, пункт 14 — Вас выбирают'}
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
  {id:'phase-1',       icon:'◆', name:'Phase 1 Cleared', hint:'Finish “Getting in”', nameRu:'Фаза 1 пройдена', hintRu:'Пройдите фазу «Вход»'},
  {id:'phase-2',       icon:'◆', name:'Phase 2 Cleared', hint:'Finish “Proof”', nameRu:'Фаза 2 пройдена', hintRu:'Пройдите фазу «Доказательства»'},
  {id:'phase-3',       icon:'◆', name:'Phase 3 Cleared', hint:'Finish “Get picked”', nameRu:'Фаза 3 пройдена', hintRu:'Пройдите фазу «Вас выбирают»'},
  {id:'halfway',       icon:'◐', name:'Halfway There',   hint:'Reach 50% of your path', nameRu:'Полпути', hintRu:'Дойдите до 50% своего пути'},
  {id:'full-path',     icon:'★', name:'Full Path',       hint:'Check every step — TOP 1% path complete', nameRu:'Весь путь', hintRu:'Отметьте все шаги — путь к TOP 1% пройден'},
  {id:'streak-3',      icon:'🔥', name:'3-Day Streak',   hint:'Check steps 3 days in a row', nameRu:'Серия 3 дня', hintRu:'Отмечайте шаги 3 дня подряд'},
  {id:'streak-7',      icon:'🔥', name:'7-Day Streak',   hint:'Check steps 7 days in a row', nameRu:'Серия 7 дней', hintRu:'Отмечайте шаги 7 дней подряд'},
  {id:'radar-reader',  icon:'📡', name:'Radar Reader',   hint:'Open your Radar section', nameRu:'Читатель радара', hintRu:'Откройте раздел «Радар»'},
  {id:'resume-loaded', icon:'📄', name:'Resume Loaded',  hint:'Load your resume into your path', nameRu:'Резюме загружено', hintRu:'Загрузите резюме в свой путь'},
  {id:'proof-hunter',  icon:'🎯', name:'Proof Hunter',   hint:'Confirm 3 steps your resume proves', nameRu:'Охотник за доказательствами', hintRu:'Подтвердите 3 шага, которые доказывает ваше резюме'}
];
