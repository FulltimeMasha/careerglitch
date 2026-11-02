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
  creator:{name:'Content Creator', kick:'Content Creator — the staff job', code:'UPLOAD',  count:40, srcWhat:'staff job postings', srcWhatRu:'вакансий в штат'},
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
  fdd:{prof:'cpa', label:'Transaction advisory (FDD) / forensic', verdict:'YES — the top money in the scan', conf:'High'},
  controller:{prof:'cpa', label:'Controller', verdict:'YES — if you own the systems', conf:'High'},
  medsurg:{prof:'nurse', label:'Med-surg nurse', verdict:'NO — as your final stop', conf:'High'},
  specialty:{prof:'nurse', label:'Specialty RN (ICU / ER / OR)', verdict:'YES', conf:'High'},
  travel:{prof:'nurse', label:'Travel nurse', verdict:'YES — after 2 years of specialty', conf:'Medium'},
  nstudent:{prof:'nurse', label:'Nursing student', verdict:'YES — license cheap', conf:'High'},
  np:{prof:'nurse', label:'Nurse practitioner (NP)', verdict:'YES — by specialty', conf:'Medium'},
  crna:{prof:'nurse', label:'CRNA (nurse anesthetist)', verdict:'YES — the hardest gate, the biggest money', conf:'High'},
  lpn:{prof:'nurse', label:'LPN / LVN', verdict:'NO — start as an RN instead', conf:'High'},
  reporting:{prof:'fin', label:'Generalist reporting analyst', verdict:'NO', conf:'High'},
  fpa:{prof:'fin', label:'FP&A analyst / business partner', verdict:'YES', conf:'High'},
  strategic:{prof:'fin', label:'Strategic finance', verdict:'YES', conf:'High'},
  hybrid:{prof:'fin', label:'BI / analytics hybrid', verdict:'YES — the fastest way in', conf:'High'},
  corpdev:{prof:'fin', label:'Corporate development', verdict:'YES — narrow, early window', conf:'Medium'},
  faceless:{prof:'creator', label:'Faceless / AI-mass channel', verdict:'NO', conf:'High'},
  streamer:{prof:'creator', label:'Streamer', verdict:'NO', conf:'High'},
  personality:{prof:'creator', label:'Personality creator — ads & deals only', verdict:'NO as a plan · YES as a door', conf:'Medium'},
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
  specialist:'The top paralegal posting in our scan pays $150K–$200K. In it, the paralegal runs Kira and Harvey AI. They do diligence checks and own the closing platforms. Diligence means checking a deal before it closes. What to do: pick ONE specialty. Privacy and AI governance is one. Corporate diligence is one. Healthcare regulatory is one. Own the AI tools inside your specialty.',
  paralegal:'What to do instead: do not climb the generalist ladder. Step sideways into one specialty. The specialties are privacy and AI governance, corporate diligence, and healthcare regulatory. Run the AI tools. Do not compete with them. A J.D. only pays if you aim it at the same specialties.',
  docreview:'What to do instead: treat review as paid training. It is not a final stop. Move up to the senior specialist job. That job runs the review AI. One such posting pays $150K–$200K, and the paralegal runs Kira and Harvey there. Or aim a J.D. at a YES specialty.',
  lawstudent:'What to do instead of “law school in general”: pick the specialty before the debt. The specialties are privacy and AI governance, corporate diligence, and healthcare regulatory. Build your file toward it from year one. Your file is your clinics, certificates and platforms. Do not wait until graduation.',
  bookkeeper:'What to do instead: use this job as a launchpad, not a home. Move to staff accountant. Then aim at a specialty where you sign the work. One is controller with ERP ownership, at $130–200K + bonus. ERP is the main money program of a company. One is specialized tax, at $125–200K. The CPA pays only when you aim it at a niche. It does not pay for “accounting in general.”',
  tax:'What to do instead: do not sell hours of prep work. Specialize. Work with pass-through entities or high-net-worth clients. High-net-worth means rich clients. Get the license that 8 of 10 manager postings demand. Your signature is what protects your pay. Prep work is what AI does for almost nothing.',
  staff:'What to do instead: pick the niche first. Then pick the exam. The niches are specialized tax, technical accounting / SEC reporting, and transaction advisory. A license aimed at “accounting in general” puts you back in the same layer. AI is eating that layer.',
  audit:'What to do instead: take the audit name and leave. The audit name opens doors. Build modeling practice. Then cross to FDD or transaction advisory, or to technical accounting. Do it before your layer is fully automated. Automated means the computer does the work.',
  technical:'What to do: this is already a YES specialty. Grow what protects your pay. Grow your SEC reporting craft. Master reporting platforms like Workiva. Price your signature high. The Full Report shows the bridge from a staff job. It also shows the state rule that decides your exam path.',
  fdd:'What to do instead of collecting certificates: this specialty pays for deal judgment. Judgment means good calls on real deals. The bridge runs through audit. Audit gives you the name. Modeling practice gives you the skill. The Full Report prices that bridge from your current job.',
  controller:'What to do instead of processing closes forever: own the ERP and the close. The close is the month-end money count. Then this job grows toward the CFO track. The CFO is the top money boss. The Full Report maps the systems gaps HR screens for at this pay level.',
  medsurg:'What to do instead: take the med-surg job as a ramp, not a home. Move into a specialty in the first year or two. The specialties are ICU, ER and OR. Your specialty is what grows. It opens travel pay, the CRNA path, and the NP paths that pay.',
  specialty:'What to do: this is a YES specialty. Go deeper in your specialty. Then choose your next step with posted numbers, not feelings. The steps are travel money, the CRNA gate, and specialty NP. The Full Report puts the gates in order.',
  travel:'What to do instead: build the specialty first. The specialties are ICU, ER and OR. Then take the travel money while the window is open. Bank it for the NP or CRNA decision. Do not spend it as a lifestyle.',
  nstudent:'What to do instead of buying the longest degree first: get the license cheap, with the ADN. Take a specialty first job. Let employers pay for the bridge (RN-to-BSN) while you earn. NP comes later. Pick it by specialty, not by crowd.',
  np:'What to do instead of “FNP because everyone does FNP”: pick the specialty with the posted pay premium. A premium is the extra pay on top. Psych is the current leader. Check your state’s scope map before you pay tuition. The scope map shows what an NP may do in your state. The same license is worth different money across the state line.',
  crna:'What to do: build your ICU years on purpose. They are the real application. This is the one specialty where the expensive degree is not a trap. Accreditation makes the degree the license itself. Accreditation means the state accepts the school.',
  lpn:'What to do instead: skip the LPN detour. Enter as an RN through the ADN. If you are already an LPN, price the LPN-to-RN bridge. Do not spend years in a job with a low pay ceiling.',
  reporting:'What to do instead: move one job over. One job is FP&A business partner. It posts up to $276,250. One job is the BI / analytics hybrid. It is the fastest way in, at $138K–$180,600. The postings print the skills they want: SQL, then a platform, then BI.',
  fpa:'What to do instead of assembling reports: own a P&L next to a business unit. A P&L is the profit-and-loss sheet of one unit. They pay for judgment and trust, not decks. A deck is a slide pack. The Full Report puts your skills in order against your gaps. The skills are SQL, then a platform, then BI.',
  strategic:'What to do instead of certificate-first planning: build a portfolio of case work. Case work means real problems you solved, like pricing and unit economics. Unit economics is the money math of one sale. Build it on top of real SQL. The Full Report picks your first cases and puts the skills in order.',
  hybrid:'What to do instead: if you are good with data, take this way in. It beats the queue. A hybrid job with 1–3 years of experience posts above the generalist median. The median is $103,570. The Full Report puts the skills in order against your current job.',
  corpdev:'What to do instead: if you are inside the window, move now. You can also borrow the background through a banking or consulting job. Background here means a famous name on your resume. If the window has closed, do not chase it. The FP&A partner path and the hybrid path pay about the same without it.',
  faceless:'The door, if you love this format: make directed work. Directed means you decide what the AI makes. Your face or your voice is inside it. It has choices a prompt cannot make. Directed work is the version that kept its pay in the 2026 crackdown.',
  streamer:'The door: stream as the shop window, not the shop. A small live audience that trusts you is a buyer file. Clips become UGC. UGC means videos you make for brands. The audience becomes a list. The list buys products. That version is the creator-with-a-business seat. This seat, alone, is a NO.',
  personality:'The door: keep the deals — and bolt a business onto them. A product or affiliate line you control. Affiliate means you earn a cut when your link sells. An email list you own. Deals are how the audience arrives. The business is how the money stays. That seat — creator with a business — is a YES.',
  ugc:'What to do: build the buyer file. A one-page media kit. One sentence for the problem your audience buys. Two paid deliveries. Then raise the rate toward $500 as results stack. UGC is a trade: the money is real, and it is earned per video.',
  educator:'What to do: sell proof of expertise, not content volume. Content volume means more and more videos. One problem your audience pays to solve, taught by a face they can check. Then add the business layer — a course or product under your own name — and this becomes the strongest seat in the cluster.',
  creatorbiz:'What to do: run it like the owner you are. Every 3 months check three numbers. RPM. Deal rate. And the share of income you own. RPM is what you earn per 1,000 views. If one platform still controls most of your money, that is the next fix. The Full Report builds your 18-month version.',
  brandcreator:'What to do: this is a YES seat if you can run the whole loop alone: idea, filming, editing, posting, and reading the numbers. Then add the scarce half — the rare skill most people do not have. That can be trust on camera, numbers from paid ads, or deep knowledge of one industry. Normal content making stops growing where these specialist seats start.',
  facecreator:'What to do: your face is the one thing AI cannot make in a believable way for one specific company. Attach rare knowledge to it — a trade, a technology, or one industry. Then your face is paid like Fictiv ($110–135K), not like Patriot (about $44–54K).',
  perfcreator:'What to do: learn to read an ad account the way a creator reads an audience. Run one paid test from start to finish. A test you can point to, with a number on it, is the rarest proof in this market.',
  agencycreator:'What to do instead: take the agency seat for 1–3 years as a school, not as a home. Then move your portfolio — your work for several clients — into a brand, face or performance seat, where the same skills are posted at $100K+.',
  mediacreator:'What to do instead: keep the writing, but sell the video first. The same person’s video skills are paid $15–25K more in brand and performance seats in this same scan.',
  genba:'What to do instead: move sideways, not up. Your stakeholder years transfer to the product analyst and strategy seats. A stakeholder is a person whose decision your work feeds. Your document years do not compound anywhere. The bridge is one decision you can point to.',
  reportda:'What to do instead: keep the SQL, and change what it points at. Product analyst hires from reporting seats. Analytics engineer hires from reporting seats. The first runs experiments. The second builds data models. Both pay decision money.',
  prodan:'What to do: you are in a YES seat if you can run an experiment end to end. Grow experiments and metrics. A metric is the number a team watches. The Full Report puts the skills in order: SQL, then experimentation, then a metrics portfolio.',
  aneng:'What to do: you are in a YES seat. Go deeper in dbt and one warehouse. The warehouse is where the company data lives. Snowflake comes first. Grow the modeling craft. The Full Report puts it in order.',
  bizops:'What to do: this is a YES seat with a gate in front of it. The bridge is consulting or banking years. Or it is internal proof: one decision you changed, with the numbers. The Full Report shows both bridges.',
  dsgate:'What to do: treat this title as a door, not a promotion. The bridge is statistics, Python, and one real model you shipped. The analyst title does not become this one by time served.'
};

/* Grid (whole-map) leads — recap from the gate's own grid summaries. */
var GRIDINFO = {
  law:{head:'Law is a YES — if you pick a specialty. The most common way in is a NO.', short:'“Law” is really several very different jobs. Privacy and AI rules will stay needed. Checking companies before big deals will stay needed. Health-care rules will stay needed. Their postings go up to $319K. The general paralegal job is a bad bet. Law school with no clear goal is a bad bet.'},
  cpa:{head:'Accounting is a YES — if you pick a specialty. The most common jobs are a NO.', short:'“Accountant” is nine jobs. The general jobs are a bad bet: keeping the books, preparing tax returns, audit as a final stop. Chosen specialties stay needed: narrow tax, reporting for public companies (SEC reporting), checking a company before a sale (FDD), forensic work, and the controller job. They post $120K–$225K.'},
  nurse:{head:'Nursing is a YES. The most common way in is a NO.', short:'It depends which nurse you become. Specialty RN, psych NP, CRNA and travel nurses will stay needed. Med-surg (the general ward) as your final stop is a dead end, and starting as an LPN is a bad bet. Generalist FNP work is a bad bet in big cities, where too many people already do it.'},
  fin:{head:'“Financial analyst” is five jobs. Three are growing. One is a trap. One has a locked door.', short:'“Financial analyst” is five jobs. The general reporting job is a trap. Its median pay is $103,570, and junior jobs there are down 21%. FP&A partnering posts up to $276,250, and strategic finance and the analytics hybrid post in that range too.'},
  creator:{head:'STAFF CONTENT CREATOR IS A YES. THE WRITING DESK IS A NO.', short:'The staff content creator job is a YES. It is a salaried job inside a company, centered near $77,000 in the postings — in the brand, face and performance seats. The agency seat is a school, not a home. The writing-led desk is a NO.'},
  analyst:{head:'Analyst is a YES. The version that only makes reports is a NO.', short:'“Analyst” is six jobs. The two reporting jobs are a bad end point: they write documents about what is needed and make charts on request. The decision jobs are a good choice: product analyst and strategy and operations. Analytics engineering, which builds clean data tables, is also a good choice. They post at $96K–$300K.'},
  dataanalyst:{head:'“Data analyst” is four jobs. One is a trap. Two pay like decision-making jobs. One builds the data models.', short:'“Data analyst” is four different jobs. The reporting job is a bad end point. It means making charts on request for $60K–$75K at entry, and 1,108 people applied for one junior seat. The decision job is a good choice: product analyst. The job that builds clean data tables is also a good choice: analytics engineering. They post $96K–$300K.'},
  businessanalyst:{head:'“Business analyst” is two jobs. One writes documents all day. One helps bosses make decisions.', short:'“Business analyst” is two different jobs. The job of writing requirement documents is a bad bet: junior pay is $51K–$82K, and AI now drafts its main product. The strategy & operations job is a good bet: Google posts $124K–$177K. Same title. Different work.'}
};

var PHASE_NAMES = ['The gate', 'Proof', 'Get picked'];

var TRACKS = {
/* ================= LAW ================= */
law: [
  {name:'The gate', steps:[
    {id:'law-g1', t:'Get a bachelor’s degree. Senior paralegal jobs ask for it in 19 of 21 postings. For the attorney door, you need a J.D. A J.D. is the law degree. It must come from an accredited school. Accredited means the state accepts the school. Top jobs ask for it in 23 of 25 postings.', src:'HR checklist · Parts 1–2, Must-have', ru:'Получите степень бакалавра. Её требуют 19 из 21 вакансий senior paralegal. Для двери attorney нужен J.D. J.D. — это диплом юриста. Школа должна быть аккредитованной. Аккредитованная — значит, штат её признаёт. Топовые вакансии требуют его в 23 из 25 случаев.', sru:'HR-чек-лист · Части 1–2, обязательное'},
    {id:'law-g2', t:'Get a paralegal certificate. It is a short study program for paralegals. 14 of 21 senior postings ask for one. 6 of 21 name a program approved by the ABA. The ABA is the American Bar Association.', src:'HR checklist · Part 2, Must-have', ru:'Получите сертификат paralegal. Это короткая учебная программа для paralegal. Его просят 14 из 21 senior-вакансий. 6 из 21 называют программу, одобренную ABA. ABA — это American Bar Association, ассоциация юристов США.', sru:'HR-чек-лист · Часть 2, обязательное'},
    {id:'law-g3', t:'Attorney door: you need a bar license. A bar license lets you work as a lawyer. It must be active and in good standing. Good standing means no problems on your record. 22 of 25 top postings ask for it. 17 of 25 accept a license from at least one US state.', src:'HR checklist · Part 1, Must-have', ru:'Дверь attorney: нужна лицензия bar. Лицензия bar даёт право работать юристом. Она должна быть действующей и в хорошем статусе. Хороший статус — значит, без проблем в вашем досье. Её требуют 22 из 25 топовых вакансий. 17 из 25 принимают лицензию хотя бы одного штата США.', sru:'HR-чек-лист · Часть 1, обязательное'},
    {id:'law-g4', t:'Get a notary commission. A notary can stamp and sign official papers. 5 of 21 senior paralegal postings name it. It is cheap and fast to get.', src:'HR checklist · Part 2, Must-have', ru:'Получите статус notary. Notary может заверять официальные бумаги печатью и подписью. Его называют 5 из 21 senior-вакансий paralegal. Получить его дёшево и быстро.', sru:'HR-чек-лист · Часть 2, обязательное'}
  ]},
  {name:'Proof', steps:[
    {id:'law-p1', t:'Go deep in ONE practice area. A practice area is one kind of law work, like privacy or company deals. Senior jobs start at 5+ years in the same area. The top tier asks 10+. Gibson Dunn asks 10 years in an AmLaw 100 firm. That is the list of the biggest US law firms.', src:'HR checklist · Part 2, Must-have', ru:'Углубитесь в ОДНУ область практики. Область практики — это один вид юридической работы, например privacy или сделки компаний. Senior-уровень начинается с 5+ лет в одной области. Верхний уровень просит 10+. Gibson Dunn просит 10 лет в фирме AmLaw 100. Это список крупнейших юридических фирм США.', sru:'HR-чек-лист · Часть 2, обязательное'},
    {id:'law-p2', t:'Learn the platform of your track. A platform is the main work program. On the litigation track, it is Relativity. Litigation means court cases. On the corporate track, it is Carta and iManage Closing Folders. For entity work, it is Diligent Entities, hCue and GEMS. Entity work means papers for companies.', src:'HR checklist · Part 2, Platform stack', ru:'Выучите платформу своего трека. Платформа — это главная рабочая программа. На треке litigation это Relativity. Litigation — это судебные дела. На корпоративном треке это Carta и iManage Closing Folders. Для работы с юрлицами это Diligent Entities, hCue и GEMS.', sru:'HR-чек-лист · Часть 2, стек платформ'},
    {id:'law-p3', t:'Build one AI workflow at your current job. A workflow is the steps you do to finish one task. Write down the time before and the time after. This paper proof is what top postings describe.', src:'Full Report · §5, months 0–3', ru:'Постройте один рабочий процесс с AI на вашей текущей работе. Рабочий процесс — это шаги, которыми вы делаете одну задачу. Запишите время до и время после. Это письменное доказательство — то, что описывают топовые вакансии.', sru:'Полный отчёт · §5, месяцы 0–3'},
    {id:'law-p4', t:'Show you can use legal AI tools well. 7 of 25 attorney postings ask for this in words. They never name a brand.', src:'HR checklist · Part 1, AI-era requirements', ru:'Покажите, что хорошо умеете пользоваться юридическими AI-инструментами. Это требуют словами 7 из 25 вакансий attorney. Бренды они никогда не называют.', sru:'HR-чек-лист · Часть 1, требования эпохи AI'},
    {id:'law-p5', t:'Know Microsoft Office / 365, program by program. Postings name the programs one by one. It is still a stated gate in 12–13 of 21 senior paralegal postings.', src:'HR checklist · Part 2, Must-have', ru:'Знайте Microsoft Office / 365, программу за программой. Вакансии называют программы по одной. Это всё ещё заявленные ворота в 12–13 из 21 senior-вакансий paralegal.', sru:'HR-чек-лист · Часть 2, обязательное'},
    {id:'law-p6', t:'Privacy specialty only: get CIPP/US. CIPP/US is the main privacy certificate. It appeared in 3 of 3 privacy postings that named any certificate at all.', src:'HR checklist · Part 1, Differentiators', ru:'Только для специализации privacy: получите CIPP/US. CIPP/US — главный сертификат по privacy. Он встретился в 3 из 3 вакансий privacy, где сертификаты назывались вообще.', sru:'HR-чек-лист · Часть 1, преимущества'}
  ]},
  {name:'Get picked', steps:[
    {id:'law-k1', t:'Show your years as ONE practice area. Top postings ask for 5–10 years in a single area. Write your story so your years read that way.', src:'Gate data · v1.1 door', ru:'Покажите свои годы как ОДНУ область практики. Топовые вакансии просят 5–10 лет в одной области. Напишите свою историю так, чтобы годы читались именно так.', sru:'Данные ворот · дверь v1.1'},
    {id:'law-k2', t:'Lead with business judgment. Business judgment means advice that helps the company and weighs the risk. It is the #1 soft-skill phrase in top postings. 7+ of 25 name it. Give practical advice that unblocks the business.', src:'HR checklist · Part 1, Differentiators', ru:'Ведите с business judgment. Business judgment — это советы, которые помогают компании и взвешивают риск. Это фраза №1 среди soft skills в топовых вакансиях. Её называют 7+ из 25. Давайте практичные советы, которые разблокируют бизнес.', sru:'HR-чек-лист · Часть 1, преимущества'},
    {id:'law-k3', t:'Apply at the specialist level. Here are two seats to aim at. Gibson Dunn Sr. Corporate Paralegal pays $150K–$200K. Cooley pays $135,200–$176,800.', src:'HR checklist · Part 2, posted bands', ru:'Подавайтесь на уровне specialist. Вот два места, в которые целиться. Gibson Dunn Sr. Corporate Paralegal платит $150K–$200K. Cooley платит $135,200–$176,800.', sru:'HR-чек-лист · Часть 2, вилки из вакансий'},
    {id:'law-k4', t:'Door B gate: apply to law school only with clear math. The median first salary must beat the debt. Median means the middle number. The median first salary is $100,000. The median J.D. debt is $112,500.', src:'Full Report · §5, month-3 decision gate', ru:'Ворота двери B: подавайтесь в law school только с ясной математикой. Медианная первая зарплата должна бить долг. Медиана — это среднее по середине число. Медианная первая зарплата — $100,000. Медианный долг за J.D. — $112,500.', sru:'Полный отчёт · §5, контрольная точка 3-го месяца'}
  ]}
],
/* ================= CPA ================= */
cpa: [
  {name:'The gate', steps:[
    {id:'cpa-g1', t:'Get a bachelor’s degree in accounting or finance. Jobs ask for it in 52 of 52 postings with clear requirements.', src:'HR checklist · Filter 5, Must-have', ru:'Получите степень бакалавра в accounting или finance. Её требуют 52 из 52 вакансий с понятными требованиями.', sru:'HR-чек-лист · Фильтр 5, обязательное'},
    {id:'cpa-g2', t:'Week 1: check the license route of your state board. The state board is the office that gives the CPA license. About 32 states now give the license at 120 credits + 2 years of experience. Credits are study units. On that route, the fifth year of school costs $0.', src:'Full Report · §4–§5', ru:'Неделя 1: проверьте маршрут лицензии в board вашего штата. Board штата — это офис, который выдаёт лицензию CPA. Около 32 штатов теперь дают лицензию при 120 credits + 2 года опыта. Credits — это учебные единицы. На этом маршруте пятый год учёбы стоит $0.', sru:'Полный отчёт · §4–§5'},
    {id:'cpa-g3', t:'Pass the CPA exam. The exam has 3 Core sections and 1 Discipline section. You must pass all of them inside one rolling window. The window is 30 months in most states. Only 42% pass FAR the first time. FAR is the hardest section. Plan money for one retake.', src:'HR checklist · CPA exam facts', ru:'Сдайте CPA exam. У экзамена 3 секции Core и 1 секция Discipline. Все их нужно сдать внутри одного скользящего окна. Окно — 30 месяцев в большинстве штатов. FAR с первого раза сдают только 42%. FAR — самая трудная секция. Заложите деньги на одну пересдачу.', sru:'HR-чек-лист · факты об экзамене CPA'},
    {id:'cpa-g4', t:'Pick the Discipline section by your niche, not by pass rate. Your niche is your part of the market. BAR leads to technical accounting and advisory. ISC leads to IT audit and AI governance. TCP leads to specialized tax.', src:'Full Report · §4', ru:'Выбирайте секцию Discipline по своей нише, а не по проценту сдачи. Ниша — это ваша часть рынка. BAR ведёт в technical accounting и advisory. ISC ведёт в IT audit и AI governance. TCP ведёт в specialized tax.', sru:'Полный отчёт · §4'},
    {id:'cpa-g5', t:'Work under a licensed CPA. You need 1 year of this work if you studied 150 credits. You need 2 years if you studied 120 credits. In most states, a licensed CPA must sign your experience.', src:'HR checklist · CPA exam facts', ru:'Работайте под руководством лицензированного CPA. Вам нужен 1 год такой работы, если вы учились 150 credits. Вам нужно 2 года, если вы учились 120 credits. В большинстве штатов лицензированный CPA должен подписать ваш опыт.', sru:'HR-чек-лист · факты об экзамене CPA'}
  ]},
  {name:'Proof', steps:[
    {id:'cpa-p1', t:'Learn NetSuite well. It is a program where companies keep their money records. 18 of 52 job posts ask for it. For senior accountant jobs in companies, it is 10 of 10.', src:'HR checklist · Platform stack', ru:'Хорошо выучите NetSuite. Это программа, где компании ведут свои денежные записи. Её просят 18 из 52 вакансий. Для senior accountant в компаниях это 10 из 10.', sru:'HR-чек-лист · стек платформ'},
    {id:'cpa-p2', t:'Learn GAAP for real. GAAP is the rulebook for how companies count money. Start with ASC 606. It is the rule for counting money from customers. Senior job posts name it again and again. Then learn ASC 842, the rule for rent deals. And ASC 718, the rule for paying workers with company stock. SOX 404 is the rule for money checks inside big public companies. It shows up in SEC reporting jobs.', src:'HR checklist · Filter 5, Must-have', ru:'Выучите GAAP по-настоящему. GAAP — это книга правил, как компании считают деньги. Начните с ASC 606. Это правило, как считать деньги от клиентов. Senior-вакансии называют его снова и снова. Потом выучите ASC 842 — правило для сделок аренды. И ASC 718 — правило, как платить работникам акциями компании. SOX 404 — правило для проверок денег внутри больших публичных компаний. Оно встречается в вакансиях SEC reporting.', sru:'HR-чек-лист · Фильтр 5, обязательное'},
    {id:'cpa-p3', t:'Learn Workiva. Workiva is a program for company reports. 6 postings name it. All of them sit in SEC reporting and technical roles. SEC reporting means reports for public companies. Owning the reporting stack sets you apart in this niche.', src:'HR checklist · Platform stack', ru:'Выучите Workiva. Workiva — программа для отчётов компаний. Её называют 6 вакансий. Все они — в ролях SEC reporting и technical. SEC reporting — это отчёты для публичных компаний. Владение стеком отчётности выделяет вас в этой нише.', sru:'HR-чек-лист · стек платформ'},
    {id:'cpa-p4', t:'Learn Excel past the basics. Know pivot tables and VLOOKUP. A pivot table sums up big lists in seconds. Staff jobs screen for them in 8 of 8 postings. Advisory jobs ask for more: financial modeling. That means building money plans in Excel.', src:'HR checklist · Platform stack', ru:'Выучите Excel выше базового уровня. Знайте pivot tables и VLOOKUP. Pivot table за секунды сводит большие списки. Вакансии staff проверяют их в 8 из 8 случаев. Вакансии advisory просят больше: financial modeling. Это значит строить денежные планы в Excel.', sru:'HR-чек-лист · стек платформ'},
    {id:'cpa-p5', t:'Learn Power BI. Power BI turns data into charts. It appears in 4 postings. All of them are advisory. SQL appears in 0 of 52 postings. Learn the tools your niche names, not famous tools.', src:'HR checklist · Platform stack', ru:'Выучите Power BI. Power BI превращает данные в графики. Он встречается в 4 вакансиях. Все они — advisory. SQL встречается в 0 из 52 вакансий. Учите инструменты, которые называет ваша ниша, а не знаменитые инструменты.', sru:'HR-чек-лист · стек платформ'},
    {id:'cpa-p6', t:'Pick ONE industry and go deep. An industry is one kind of business. The top pay bands name theirs. A pay band is the pay range in a posting. Manufacturing cost accounting is one. SaaS revenue is one — it uses ASC 606. Pass-through entities are one. HNW and UHNW clients are one. HNW means rich clients.', src:'HR checklist · Filter 5, Must-have', ru:'Выберите ОДНУ отрасль и идите глубоко. Отрасль — это один вид бизнеса. Верхние вилки оплаты называют свою. Вилка — это диапазон оплаты в вакансии. Manufacturing cost accounting — одна. SaaS revenue — одна, она использует ASC 606. Pass-through entities — одна. Клиенты HNW и UHNW — одна. HNW значит богатые клиенты.', sru:'HR-чек-лист · Фильтр 5, обязательное'}
  ]},
  {name:'Get picked', steps:[
    {id:'cpa-k1', t:'Become the systems person in your current seat. Own one piece of the tech work. Run part of the close automation. The close is the month-end money count. Or own the reconciliation tooling. Reconciliation means checking two records match. Or own the ERP. The ERP is the main money program of the company.', src:'Full Report · §5, months 0–3', ru:'Станьте системным человеком на вашем текущем месте. Возьмите один кусок технической работы. Ведите часть автоматизации закрытия. Закрытие — это подсчёт денег в конце месяца. Или ведите инструменты сверки. Сверка — это проверка, что две записи совпадают. Или ведите ERP. ERP — главная денежная программа компании.', sru:'Полный отчёт · §5, месяцы 0–3'},
    {id:'cpa-k2', t:'Write down one process you made better. Show the hours before and the hours after. This one page is the proof the good postings screen for.', src:'Full Report · §5, months 0–3', ru:'Запишите один процесс, который вы улучшили. Покажите часы до и часы после. Эта одна страница — доказательство, которое ищут хорошие вакансии.', sru:'Полный отчёт · §5, месяцы 0–3'},
    {id:'cpa-k3', t:'Build one proof piece for your niche. Make one technical memo. A memo is a short written note that explains a hard case. Or make one model. Or run one controls project. Controls are the checks that keep money safe. Write it all down.', src:'Full Report · §5, months 4–9', ru:'Сделайте одну работу-доказательство для своей ниши. Напишите одно техническое memo. Memo — это короткая записка, которая объясняет трудный случай. Или сделайте одну модель. Или проведите один проект по controls. Controls — это проверки, которые берегут деньги. Всё запишите.', sru:'Полный отчёт · §5, месяцы 4–9'},
    {id:'cpa-k4', t:'Save a target list. Collect 10+ real postings in your niche. Read what they ask for. Close your gaps one by one. A gap is a skill they ask for and you do not have yet.', src:'Full Report · §5, month-3 decision gate', ru:'Сохраните целевой список. Соберите 10+ настоящих вакансий в вашей нише. Прочитайте, что они просят. Закрывайте свои пробелы один за другим. Пробел — это навык, который они просят, а у вас его пока нет.', sru:'Полный отчёт · §5, контрольная точка 3-го месяца'},
    {id:'cpa-k5', t:'Want an FDD seat or a top industry seat? FDD means checking a company’s money before a sale. You need a public accounting past. Public accounting means work at an accounting firm. 11 postings outside public accounting ask for a firm background in plain words.', src:'HR checklist · Filter 5, Must-have', ru:'Хотите место FDD или верхнее место в отрасли? FDD — это проверка денег компании перед продажей. Вам нужно прошлое в public accounting. Public accounting — это работа в бухгалтерской фирме. 11 вакансий вне public accounting просят опыт работы в фирме прямыми словами.', sru:'HR-чек-лист · Фильтр 5, обязательное'}
  ]}
],
/* ================= NURSE ================= */
nurse: [
  {name:'The gate', steps:[
    {id:'nur-g1', t:'Hold an active RN license in your state. 16 of 16 postings ask for it. In a compact state, your license works in many states. 40 states use this system now. Keep that multistate license clean. It is the key to the travel door.', src:'HR checklist · Part 1, Must-have', ru:'Держите действующую лицензию RN в вашем штате. Её просят 16 из 16 вакансий. В штате compact ваша лицензия работает во многих штатах. Эту систему сейчас используют 40 штатов. Держите эту multistate-лицензию чистой. Это ключ к двери travel.', sru:'HR-чек-лист · Часть 1, обязательное'},
    {id:'nur-g2', t:'Get the license the cheap way. The ADN costs $5,472 in total tuition at Wake Tech. The ADN is the short nursing degree. You pass the same NCLEX as the BSN. The NCLEX is the nurse license exam. Then do the bridge while you work. The bridge is the extra study to the BSN.', src:'HR checklist · The BSN truth', ru:'Получите лицензию дёшево. ADN стоит $5,472 за всё обучение в Wake Tech. ADN — это короткая степень медсестры. Вы сдаёте тот же NCLEX, что и BSN. NCLEX — экзамен на лицензию медсестры. Потом делайте мост уже на работе. Мост — это доучивание до BSN.', sru:'HR-чек-лист · правда о BSN'},
    {id:'nur-g3', t:'Keep your BLS certificate current. BLS is basic life support — help in the first minutes of an emergency. 15 of 16 postings ask for it. Every job wants this checkbox.', src:'HR checklist · Part 1, Must-have', ru:'Держите сертификат BLS действующим. BLS — это basic life support, помощь в первые минуты беды. Его просят 15 из 16 вакансий. Эту галочку хочет каждая работа.', sru:'HR-чек-лист · Часть 1, обязательное'},
    {id:'nur-g4', t:'Get ACLS. ACLS is the advanced emergency certificate. Most specialty jobs ask for it at hire or within 30–90 days. 10 of 16 postings name it. This is the real specialty gate.', src:'HR checklist · Part 1, Must-have', ru:'Получите ACLS. ACLS — это продвинутый сертификат помощи в беде. Большинство работ по специальности просят его при найме или в течение 30–90 дней. Его называют 10 из 16 вакансий. Это настоящие ворота в специальность.', sru:'HR-чек-лист · Часть 1, обязательное'},
    {id:'nur-g5', t:'NP door, for later: get board certification in your specialty. Board certification is an exam that proves your specialty. In practice, 10 of 10 NP postings ask for it. You also need the state NP license and the DEA. The DEA lets you prescribe strong drugs.', src:'HR checklist · Part 2, Must-have', ru:'Дверь NP, на потом: получите board certification по вашей специальности. Board certification — это экзамен, который доказывает вашу специальность. На практике его просят 10 из 10 вакансий NP. Ещё нужны лицензия NP штата и DEA. DEA даёт право выписывать сильные лекарства.', sru:'HR-чек-лист · Часть 2, обязательное'}
  ]},
  {name:'Proof', steps:[
    {id:'nur-p1', t:'Take a specialty first job. Work in the ICU, the ED or the OR. The ICU is intensive care — the sickest patients. The ED is the emergency room. The OR is the operating room. Your specialty opens travel pay, the CRNA door and the NP doors that pay.', src:'Full Report · §1–§2', ru:'Возьмите первую работу по специальности. Работайте в ICU, ED или OR. ICU — это интенсивная терапия, самые тяжёлые пациенты. ED — это отделение скорой помощи. OR — это операционная. Ваша специальность открывает оплату travel, дверь CRNA и те двери NP, которые платят.', sru:'Полный отчёт · §1–§2'},
    {id:'nur-p2', t:'Bank 2 years in your specialty. The travel market starts there. 8 of 10 travel postings ask for it. These years also lift you to the top staff pay bands. A pay band is the pay range in a posting.', src:'HR checklist · Part 1, Differentiators', ru:'Накопите 2 года в вашей специальности. Рынок travel начинается там. Его просят 8 из 10 вакансий travel. Эти годы также поднимают вас к верхним вилкам оплаты staff. Вилка — это диапазон оплаты в вакансии.', sru:'HR-чек-лист · Часть 1, преимущества'},
    {id:'nur-p3', t:'Start an online RN-to-BSN in your first year of work. It costs $12,000 in total. It can take as little as 2 semesters in Utah. 25% of employers hard-require the BSN for new hires. 69.8% prefer it (AACN). The AACN is the nursing schools group.', src:'HR checklist · The BSN truth', ru:'Начните онлайн RN-to-BSN в первый год работы. Это стоит $12,000 за всё. В Utah это может занять всего 2 семестра. 25% работодателей жёстко требуют BSN у новых сотрудников. 69.8% предпочитают его (AACN). AACN — это группа школ медсестёр.', sru:'HR-чек-лист · правда о BSN'},
    {id:'nur-p4', t:'Take your specialty certificate when your experience lets you. For ICU nurses, it is the CCRN. Jobs prefer it in 3 of 16 RN postings. They require it in 0. It sets you apart. It also tells CRNA schools you are serious.', src:'HR checklist · Certification stack', ru:'Сдайте сертификат по специальности, когда опыт позволит. Для медсестёр ICU это CCRN. Работы предпочитают его в 3 из 16 вакансий RN. Требуют его в 0. Он выделяет вас. Он также говорит школам CRNA, что вы серьёзны.', sru:'HR-чек-лист · стек сертификатов'},
    {id:'nur-p5', t:'Become an AI superuser in your unit. Learn the AI tools of your hospital better than most. More than three-quarters of nurses already use AI every day. Only about 10% are superusers. That top tier stands out at hiring (McKinsey).', src:'Radar Issue #1 · item 2', ru:'Станьте суперпользователем AI в вашем отделении. Выучите AI-инструменты вашей больницы лучше большинства. Больше трёх четвертей медсестёр уже пользуются AI каждый день. Суперпользователей только около 10%. Этот верхний уровень выделяется при найме (McKinsey).', sru:'Радар · Выпуск №1 · пункт 2'}
  ]},
  {name:'Get picked', steps:[
    {id:'nur-k1', t:'Rank residency offers by the ladder, not by the first pay. A residency is a training job for new nurses. 22.7% of new RNs leave in their first year (NSI). A structured residency protects you. Structured means the training has a clear plan.', src:'Full Report · §5, months 4–12', ru:'Оценивайте предложения residency по лестнице, а не по первой оплате. Residency — это учебная работа для новых медсестёр. 22.7% новых RN уходят в первый год (NSI). Структурированная residency защищает вас. Структурированная — значит, у обучения есть ясный план.', sru:'Полный отчёт · §5, месяцы 4–12'},
    {id:'nur-k2', t:'Move to the ICU, ED or OR by month 18–24. If your hospital cannot move you by month 24, change hospitals. Experienced specialty nurses get sign-on bonuses of $10K–$25K. A sign-on bonus is money you get for joining.', src:'Full Report · §5, month-12 gate', ru:'Перейдите в ICU, ED или OR к месяцу 18–24. Если ваша больница не может перевести вас к месяцу 24, меняйте больницу. Опытные медсёстры по специальности получают sign-on бонусы $10K–$25K. Sign-on бонус — это деньги за приход на работу.', sru:'Полный отчёт · §5, контрольная точка 12-го месяца'},
    {id:'nur-k3', t:'Get charge nurse experience. A charge nurse leads the shift. Relief charge means you lead when the main charge nurse is away. This is the stated way into the assistant nurse manager posting. It pays $61.91–$97.72/hr. It was the only RN posting that required a BSN.', src:'HR checklist · Part 1, Differentiators', ru:'Получите опыт charge nurse. Charge nurse ведёт смену. Relief charge — вы ведёте смену, когда главной charge nurse нет. Это заявленный путь в вакансию assistant nurse manager. Она платит $61.91–$97.72/hr. Это была единственная вакансия RN, где требовался BSN.', sru:'HR-чек-лист · Часть 1, преимущества'},
    {id:'nur-k4', t:'NP gate, year 3–5: go NP only with the right specialty. Pick it by posted pay. Psych posts $200K–$257K. Pick your state with care, too. CA, TX and FL are Restricted practice. Restricted means a doctor must watch your work. 27 states + DC are Full Practice. Full Practice means you work on your own.', src:'Full Report · §7–§9', ru:'Ворота NP, год 3–5: идите в NP только с правильной специальностью. Выбирайте её по опубликованной оплате. Psych публикует $200K–$257K. Штат тоже выбирайте с умом. CA, TX и FL — Restricted practice. Restricted — значит, врач должен следить за вашей работой. 27 штатов + DC — Full Practice. Full Practice — значит, вы работаете сами.', sru:'Полный отчёт · §7–§9'},
    {id:'nur-k5', t:'Buy the MSN plus the certificate. Do not pay extra for the DNP. Top postings require the DNP in 0 of 16 cases. CRNA is the one exception. There, the doctorate is the license itself.', src:'HR checklist · Part 2, The degree myth', ru:'Покупайте MSN плюс сертификат. Не платите лишнего за DNP. Топовые вакансии требуют DNP в 0 из 16 случаев. CRNA — единственное исключение. Там докторская степень и есть сама лицензия.', sru:'HR-чек-лист · Часть 2, миф о степени'}
  ]}
],
/* ================= FINANCE / FP&A =================
   NOTE: this package's hr-checklist.md is truncated mid-Filter-3 on disk;
   the steps below trace to its Filter 1–2 tables and to the Full Report's
   §4 applied checklist (which quotes the full checklist's counts). */
fin: [
  {name:'The gate', steps:[
    {id:'fin-g1', t:'Get a bachelor’s degree in finance or a numbers field. Almost all of the 40 postings ask for it.', src:'Full Report · §4, applied checklist', ru:'Получите степень бакалавра в finance или в области с числами. Её просят почти все из 40 вакансий.', sru:'Полный отчёт · §4, прикладной чек-лист'},
    {id:'fin-g2', t:'Learn advanced Excel and financial modeling. Financial modeling means building money plans in Excel. You need it. But it is only the floor. It does not set you apart.', src:'Full Report · §4, applied checklist', ru:'Выучите продвинутый Excel и financial modeling. Financial modeling — это строить денежные планы в Excel. Это нужно. Но это только порог. Это не выделяет вас.', sru:'Полный отчёт · §4, прикладной чек-лист'},
    {id:'fin-g3', t:'Skip the CFA for this target. The CFA is a hard finance certificate. Jobs require it in 0 of 40 postings. They prefer it in 3. Come back to it only if you move to the buy side. The buy side means investing jobs.', src:'Full Report · §2, Filter 2', ru:'Пропустите CFA для этой цели. CFA — это трудный финансовый сертификат. Работы требуют его в 0 из 40 вакансий. Предпочитают его в 3. Вернитесь к нему, только если уйдёте в buy side. Buy side — это работы в инвестициях.', sru:'Полный отчёт · §2, Фильтр 2'}
  ]},
  {name:'Proof', steps:[
    {id:'fin-p1', t:'Learn SQL well. SQL is the language that asks databases questions. Learn it until you can write window functions alone. A window function does math across rows. SQL is the #1 demand in this market. 31 of 40 postings ask for it.', src:'Full Report · §4–§5', ru:'Хорошо выучите SQL. SQL — это язык, который задаёт вопросы базам данных. Учите его, пока не сможете писать window functions сами. Window function делает математику по строкам. SQL — спрос №1 на этом рынке. Его просят 31 из 40 вакансий.', sru:'Полный отчёт · §4–§5'},
    {id:'fin-p2', t:'Learn ONE planning platform, deep. A planning platform is a program for company money plans. Postings name one in 16 of 40 cases. Anaplan is the most named: 15 of 40. Its Certified Model Builder certificate is a hard requirement in postings.', src:'Full Report · §4, applied checklist', ru:'Выучите ОДНУ платформу планирования, глубоко. Платформа планирования — программа для денежных планов компании. Вакансии называют её в 16 из 40 случаев. Anaplan называют чаще всех: 15 из 40. Его сертификат Certified Model Builder — жёсткое требование в вакансиях.', sru:'Полный отчёт · §4, прикладной чек-лист'},
    {id:'fin-p3', t:'Build two BI dashboards on real data. Do not just look at dashboards — build them. A BI dashboard is a screen of live charts. A BI tool is named in 20 of 40 postings. Tableau gets 14 mentions. Power BI gets 9.', src:'Full Report · §5, months 4–6', ru:'Постройте два BI-дашборда на настоящих данных. Не просто смотрите на дашборды — стройте их. BI-дашборд — это экран живых графиков. BI-инструмент назван в 20 из 40 вакансий. Tableau получает 14 упоминаний. Power BI получает 9.', sru:'Полный отчёт · §5, месяцы 4–6'},
    {id:'fin-p4', t:'Learn Python at analyst level. Know pandas, the Python tool for data tables. Ship one real automation. Automation means the computer does the boring task. Python appears in 16 of 40 postings.', src:'Full Report · §4, applied checklist', ru:'Выучите Python на уровне аналитика. Знайте pandas — инструмент Python для таблиц данных. Доведите до работы одну настоящую автоматизацию. Автоматизация — значит, скучную задачу делает компьютер. Python встречается в 16 из 40 вакансий.', sru:'Полный отчёт · §4, прикладной чек-лист'},
    {id:'fin-p5', t:'Automate one repeating piece of your own reports. Write down the before and the after. Show hours per month and the error rate. This one page of proof is what top postings screen for.', src:'Full Report · §5, months 0–3', ru:'Автоматизируйте один повторяющийся кусок своих отчётов. Запишите до и после. Покажите часы в месяц и долю ошибок. Эта одна страница доказательств — то, что проверяют топовые вакансии.', sru:'Полный отчёт · §5, месяцы 0–3'}
  ]},
  {name:'Get picked', steps:[
    {id:'fin-k1', t:'Own the forecast of one business unit, start to finish. A forecast is the money plan for the next months. Top postings say it in these words: “owned a forecast others relied on.”', src:'Full Report · §5, months 0–3', ru:'Ведите прогноз одного бизнес-подразделения от начала до конца. Прогноз — это денежный план на следующие месяцы. Топовые вакансии говорят этими словами: «owned a forecast others relied on».', sru:'Полный отчёт · §5, месяцы 0–3'},
    {id:'fin-k2', t:'Apply sideways, to hybrid titles. Hybrid titles are FP&A analyst, BI analyst and finance analytics. There, your proof piece does the competing. Do not apply to the plain “analyst” pool. It is shrinking: −21%.', src:'Radar Issue #1 · item 4', ru:'Подавайтесь вбок, в гибридные названия. Гибридные названия — это FP&A analyst, BI analyst и finance analytics. Там конкурирует ваша работа-доказательство. Не подавайтесь в обычный пул «analyst». Он сжимается: −21%.', sru:'Радар · Выпуск №1 · пункт 4'},
    {id:'fin-k3', t:'In the new seat, become the unit’s person from day one. Go to their ops reviews. Ops reviews are their regular work meetings. Own their forecast. Show their variance. Variance means plan versus real numbers.', src:'Full Report · §5, months 7–12', ru:'На новом месте станьте человеком подразделения с первого дня. Ходите на их ops reviews. Ops reviews — это их обычные рабочие встречи. Ведите их прогноз. Показывайте их variance. Variance — это план против настоящих чисел.', sru:'Полный отчёт · §5, месяцы 7–12'},
    {id:'fin-k4', t:'Run your checklist again at month 12. Think about the CFA again only if your target changed. The new target must be investing roles.', src:'Full Report · §5, months 7–12', ru:'Пройдите ваш чек-лист снова на месяц 12. Думайте о CFA снова, только если ваша цель сменилась. Новая цель должна быть инвестиционными ролями.', sru:'Полный отчёт · §5, месяцы 7–12'}
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
    {id:'cst-g1', t:'Shoot three short videos on your phone. Make three kinds: a product demo, a talking-head video (you speak to the camera), and a remake of a trend. Filming on a phone is named in 12 of 40 staff postings. One employer hires on a phone video alone.', src:'HR checklist v2 · Part 1, Stops 0+3', ru:'Снимите три коротких видео на телефон. Сделайте три вида: демо продукта, видео, где вы говорите в камеру, и переделку тренда. Съёмка на телефон названа в 12 из 40 вакансий в штат. Один работодатель нанимает по одному видео, снятому на телефон.', sru:'HR-чек-лист v2 · Часть 1, стопы 0+3'},
    {id:'cst-g2', t:'Cut the same raw video twice: once in CapCut and once in Premiere Pro. Premiere is named in 21 of 40 postings, and CapCut in 15 of 40. Employers check that you can work at both speeds.', src:'HR checklist v2 · Part 1, Stop 2', ru:'Смонтируйте одно и то же исходное видео дважды: один раз в CapCut и один раз в Premiere Pro. Premiere назван в 21 из 40 вакансий, а CapCut — в 15 из 40. Работодатели проверяют, что вы умеете работать на обеих скоростях.', sru:'HR-чек-лист v2 · Часть 1, стоп 2'},
    {id:'cst-g3', t:'Publish 10 posts made for the platform itself: TikTok, Reels or Shorts. Made for the platform means you build the post inside that app, not copy it over from another one. Being at home on the platforms is named in 28 of 40 postings.', src:'HR checklist v2 · Part 1, Stop 1', ru:'Опубликуйте 10 постов, сделанных для самой платформы: TikTok, Reels или Shorts. Сделанный для платформы — значит, вы собираете пост внутри этого приложения, а не копируете его из другого. Свободное владение платформами названо в 28 из 40 вакансий.', sru:'HR-чек-лист v2 · Часть 1, стоп 1'},
    {id:'cst-g4', t:'Build a one-page portfolio with your 6 best pieces. Under each piece, write its numbers: views, how long people kept watching, and how many reacted. 22 of 40 postings ask for a portfolio, and only 8 of 40 ask for a degree. Your videos are your diploma.', src:'HR checklist v2 · Part 1, Stop 0', ru:'Соберите портфолио на одну страницу: ваши 6 лучших работ. Под каждой работой напишите её цифры: просмотры, как долго люди смотрели и сколько людей отреагировало. Портфолио просят 22 из 40 вакансий, а диплом — только 8 из 40. Ваши видео — это и есть ваш диплом.', sru:'HR-чек-лист v2 · Часть 1, стоп 0'},
  ]},
  {name:'Proof', steps:[
    {id:'cst-p1', t:'Pick your seat: the brand studio-of-one, the face of the brand, paid-social performance, the agency, or the media and writing-led desk. Studio-of-one means one person does the whole job alone. Write down why your videos fit the seat you picked. The seats pay differently: brand seats center at $65K–$85K, and the writing desk sits near $57.5K.', src:'HR checklist v2 · Part 4', ru:'Выберите своё место: бренд «студия в одном лице», лицо бренда, платная реклама (performance), агентство или медиа и письменный стол. «Студия в одном лице» — значит, один человек делает всю работу сам. Запишите, почему ваши видео подходят выбранному месту. Места платят по-разному: места брендов центрируются на $65K–$85K, а письменный стол — около $57.5K.', sru:'HR-чек-лист v2 · Часть 4'},
    {id:'cst-p2', t:'Write the words for every piece in your portfolio: the hook (the first seconds that stop a viewer), the script, the captions, and the call to action (the line that tells the viewer what to do). Writing the words is a named duty in 24 of 40 postings.', src:'HR checklist v2 · Part 1, Stop 4', ru:'Напишите слова к каждой работе в портфолио: хук (первые секунды, которые останавливают зрителя), сценарий, подписи и призыв к действию (строка, которая говорит зрителю, что делать). Написание слов — названная обязанность в 24 из 40 вакансий.', sru:'HR-чек-лист v2 · Часть 1, стоп 4'},
    {id:'cst-p3', t:'Learn to read the numbers: views, retention (how long people keep watching), and CTR (the share of people who clicked). For each piece in your portfolio, write one line: what do the numbers say you should change next time? Reading the numbers is a duty in 23 of 40 postings.', src:'HR checklist v2 · Part 1, Stop 5', ru:'Научитесь читать цифры: просмотры, удержание (как долго люди смотрят) и CTR (доля людей, которые кликнули). К каждой работе в портфолио напишите одну строку: что цифры говорят изменить в следующий раз? Чтение цифр — обязанность в 23 из 40 вакансий.', sru:'HR-чек-лист v2 · Часть 1, стоп 5'},
    {id:'cst-p4', t:'Record a 30-second application video of yourself on camera. Say who you are, what you make, and one result with a number. One employer in our scan hires on exactly this video. 13 of 40 postings ask for a person on camera.', src:'HR checklist v2 · Part 1, Stop 6', ru:'Запишите 30-секундное видео-заявку, где вы сами в кадре. Скажите, кто вы, что вы делаете, и назовите один результат с цифрой. Один работодатель из нашего скана нанимает именно по такому видео. Человека в кадре просят 13 из 40 вакансий.', sru:'HR-чек-лист v2 · Часть 1, стоп 6'},
  ]},
  {name:'Get picked', steps:[
    {id:'cst-k1', t:'Apply to 10 staff postings. Send your portfolio first and your resume second. Aim first at brand, face and performance seats. Take an agency seat only with an exit plan for 1–3 years.', src:'HR checklist v2 · Part 4', ru:'Откликнитесь на 10 вакансий в штат. Отправляйте сначала портфолио, а резюме — вторым. Цельтесь сначала в места бренда, лица и платной рекламы. Место в агентстве берите только с планом выхода через 1–3 года.', sru:'HR-чек-лист v2 · Часть 4'},
    {id:'cst-k2', t:'Run one paid-social test from start to finish. Test one hook (the first seconds) against another. Read the CTR (the share of people who clicked). Write up the result. This is the rarest proof in this market: a piece of work with a money number on it.', src:'HR checklist v2 · Part 4 — performance seat', ru:'Проведите один тест платной рекламы от начала до конца. Проверьте один хук (первые секунды видео) против другого. Прочитайте CTR (долю людей, которые кликнули). Запишите результат. Это редчайшее доказательство на этом рынке: работа с денежной цифрой на ней.', sru:'HR-чек-лист v2 · Часть 4 — место performance'},
    {id:'cst-k3', t:'Build your own way of working with AI for the parts a machine can do: captions, variants, and first cuts. You lead the work and you judge what comes out. Only 2 of 40 postings name AI tools today. This plus is becoming a gate: soon postings will ask for it by name.', src:'HR checklist v2 · Part 1, Stop 7', ru:'Постройте свой способ работы с ИИ для частей, которые может делать машина: подписи, варианты и первые монтажи. Вы ведёте работу и вы судите, что получилось. Конкретные инструменты ИИ сегодня называют только 2 из 40 вакансий. Этот плюс становится воротами: скоро вакансии будут просить его по имени.', sru:'HR-чек-лист v2 · Часть 1, стоп 7'},
    {id:'cst-k4', t:'Add the scarce half — the rare skill most people do not have. It can be hosting on camera, a system for paid ads, or deep knowledge of one industry. Every posting above $100K in our scan adds one of these to normal content making.', src:'HR checklist v2 · Part 2 — the pay map', ru:'Добавьте дефицитную половину — редкий навык, которого нет у большинства. Это может быть ведение в кадре, система платной рекламы или глубокое знание одной отрасли. Каждая вакансия выше $100K в нашем скане добавляет что-то из этого к обычному созданию контента.', sru:'HR-чек-лист v2 · Часть 2 — карта оплаты'},
    {id:'cst-k5', t:'Publish breakdowns of your own content, with the numbers. Write what worked, what failed, and what you changed. Hiring managers hire creators they have already seen thinking.', src:'Method v2 · the visionary layer', ru:'Публикуйте разборы своего контента с цифрами. Пишите, что сработало, что провалилось и что вы изменили. Нанимающие менеджеры берут креаторов, которых они уже видели думающими.', sru:'Метод v2 · визионерский слой'},
    {id:'cst-k6', t:'Check your seat again every quarter. Compare your pay band with fresh postings. Check whether new postings name AI tools. Decide your next move to another seat. We re-scan the whole market on 1 November 2027.', src:'Radar issue 02', ru:'Проверяйте своё место заново каждый квартал. Сравнивайте вашу вилку оплаты со свежими вакансиями. Смотрите, называют ли новые вакансии инструменты ИИ. Решайте ваш следующий переход в другое место. Мы перепроверяем весь рынок 1 ноября 2027 года.', sru:'Радар, выпуск 02'},
  ]}
]
,
/* ================= BUSINESS / DATA ANALYST =================
   Steps trace 1:1 to the package's hr-checklist.md Part 6 (the 14-point
   checklist): items 1–4 "The gate" → The gate; items 5–9 "Proof" →
   Proof; items 10–14 "Get picked" → Get picked. */
analyst: [
  {name:'The gate', steps:[
    {id:'ana-g1', t:'Bring SQL to working level. Joins, aggregations and window functions. Window functions are calculations across a set of rows. SQL is named in 43 of 46 postings we opened. It is the floor of every seat on this map.', src:'HR checklist · Part 6, item 1 — The gate', ru:'Доведите SQL до рабочего уровня. Соединения, агрегации и оконные функции. Оконные функции — это вычисления по набору строк. SQL назван в 43 из 46 вакансий, которые мы открыли. Это пол каждого места на этой карте.', sru:'HR-чек-лист · Часть 6, пункт 1 — Ворота'},
    {id:'ana-g2', t:'Learn one BI tool deeply. Tableau or Power BI. A BI tool turns data into charts and dashboards. One is named in 27 of 46 postings. Reporting seats live in the BI tool. Decision seats present in it.', src:'HR checklist · Part 6, item 2 — The gate', ru:'Выучите один BI-инструмент глубоко. Tableau или Power BI. BI-инструмент превращает данные в графики и дашборды. Один назван в 27 из 46 вакансий. Места reporting живут в BI-инструменте. Места решений в нём презентуют.', sru:'HR-чек-лист · Часть 6, пункт 2 — Ворота'},
    {id:'ana-g3', t:'Pick your seat on purpose. The six seats on this map post $51K to $300K for the same word “analyst”. Write down which seat your skills point at today.', src:'HR checklist · Part 6, item 3 — The gate', ru:'Выберите своё место осознанно. Шесть мест на этой карте публикуют от $51K до $300K за одно и то же слово «analyst». Запишите, на какое место указывают ваши навыки сегодня.', sru:'HR-чек-лист · Часть 6, пункт 3 — Ворота'},
    {id:'ana-g4', t:'Use the AI tools hands-on, on real analysis. Copilot, ChatGPT and Claude. A named AI tool is a requirement in 6 of 46 postings. It is the newest line on the screen, and it is spreading.', src:'HR checklist · Part 6, item 4 — The gate', ru:'Используйте AI-инструменты руками, на настоящем анализе. Copilot, ChatGPT и Claude. Названный AI-инструмент — требование в 6 из 46 вакансий. Это самая новая строка экрана, и она распространяется.', sru:'HR-чек-лист · Часть 6, пункт 4 — Ворота'}
  ]},
  {name:'Proof', steps:[
    {id:'ana-p1', t:'Build one dashboard that answers a decision. Not a dashboard that answers a request. Write down who opened it and what they decided. A dashboard nobody opens is a failed project.', src:'HR checklist · Part 6, item 5 — Proof', ru:'Постройте один дашборд, который отвечает на решение. Не дашборд, который отвечает на запрос. Запишите, кто его открыл и что решил. Дашборд, который никто не открывает, — провальный проект.', sru:'HR-чек-лист · Часть 6, пункт 5 — Доказательства'},
    {id:'ana-p2', t:'Learn data modeling with dbt. dbt is the tool that builds clean data tables from raw data. It is named in 7 of 7 analytics-engineer postings. The models are the layer every AI answer is read from.', src:'HR checklist · Part 6, item 6 — Proof', ru:'Выучите моделирование данных с dbt. dbt — инструмент, который строит чистые таблицы данных из сырых данных. Он назван в 7 из 7 вакансий analytics engineer. Модели — это слой, из которого читается каждый ответ AI.', sru:'HR-чек-лист · Часть 6, пункт 6 — Доказательства'},
    {id:'ana-p3', t:'Learn Python for analysis. Python is named in 18 of 46 postings. In data-analyst postings it is named in 9 of 9, in some form. The reporting seat’s ceiling is partly a Python wall.', src:'HR checklist · Part 6, item 7 — Proof', ru:'Выучите Python для анализа. Python назван в 18 из 46 вакансий. В вакансиях data analyst он назван в 9 из 9, в той или иной форме. Потолок места reporting — частично стена Python.', sru:'HR-чек-лист · Часть 6, пункт 7 — Доказательства'},
    {id:'ana-p4', t:'Run one experiment end to end. An A/B test, or a metric you defined and defended. A metric is the number a team watches. Experimentation is named in 4 of 4 product-analyst postings. A metric you own is proof you can hold a decision.', src:'HR checklist · Part 6, item 8 — Proof', ru:'Проведите один эксперимент от начала до конца. A/B-тест или метрику, которую вы определили и защитили. Метрика — это число, за которым следит команда. Эксперименты названы в 4 из 4 вакансий product analyst. Метрика, которой вы владеете, — доказательство, что вы можете держать решение.', sru:'HR-чек-лист · Часть 6, пункт 8 — Доказательства'},
    {id:'ana-p5', t:'Automate one recurring report you own. A report you used to rebuild by hand now runs itself. Write down the hours you saved. The AI-naming postings ask for exactly this pattern.', src:'HR checklist · Part 6, item 9 — Proof', ru:'Автоматизируйте один повторяющийся отчёт, которым вы владеете. Отчёт, который вы пересобирали руками, теперь работает сам. Запишите сэкономленные часы. Вакансии, называющие AI, просят ровно этот паттерн.', sru:'HR-чек-лист · Часть 6, пункт 9 — Доказательства'}
  ]},
  {name:'Get picked', steps:[
    {id:'ana-k1', t:'Apply to decision seats by name. Product analyst. Analytics engineer. Strategy & operations. The plain “analyst” pool is where 1,108 applications landed on one junior seat.', src:'HR checklist · Part 6, item 10 — Get picked', ru:'Подавайтесь на места решений по именам. Product analyst. Analytics engineer. Strategy & operations. Обычный пул «analyst» — это куда упали 1,108 заявок на одно место junior.', sru:'HR-чек-лист · Часть 6, пункт 10 — Выбор тебя'},
    {id:'ana-k2', t:'In interviews, lead with a decision you changed. Not with a dashboard you built. Stakeholder work is the stated core duty in all 7 strategy & operations postings. A stakeholder is a person whose decision your work feeds.', src:'HR checklist · Part 6, item 11 — Get picked', ru:'На собеседованиях ведите с решения, которое вы изменили. Не с дашборда, который вы построили. Работа со стейкхолдерами — заявленная главная обязанность во всех 7 вакансиях strategy & operations. Стейкхолдер — человек, чьё решение питает ваша работа.', sru:'HR-чек-лист · Часть 6, пункт 11 — Выбор тебя'},
    {id:'ana-k3', t:'Show the AI workflow. One analysis where AI drafted and you verified. Show the verification, not just the draft. The 6 postings that name AI tools ask for this proof. In their words: “to build something real”.', src:'HR checklist · Part 6, item 12 — Get picked', ru:'Покажите процесс с AI. Один анализ, где AI сделал черновик, а вы проверили. Покажите проверку, а не только черновик. 6 вакансий, называющих AI-инструменты, просят ровно это доказательство. Их словами: «to build something real».', sru:'HR-чек-лист · Часть 6, пункт 12 — Выбор тебя'},
    {id:'ana-k4', t:'Price yourself from the scan. Reporting seats post $60K–$95K. Product seats post $106K–$168K. Analytics engineering posts $130K–$244K at senior and staff level. If your seat’s band is flat, the seat is the problem. Not your negotiation.', src:'HR checklist · Part 6, item 13 — Get picked', ru:'Оценивайте себя по скану. Места reporting публикуют $60K–$95K. Места product публикуют $106K–$168K. Analytics engineering публикует $130K–$244K на уровне senior и staff. Если вилка вашего места плоская, место — проблема. Не ваши переговоры.', sru:'HR-чек-лист · Часть 6, пункт 13 — Выбор тебя'},
    {id:'ana-k5', t:'Re-run this checklist every quarter, against fresh postings. The AI-tool line moved from absent to 6 of 46 inside one scan window. Your seat’s screen now moves that fast.', src:'HR checklist · Part 6, item 14 — Get picked', ru:'Перепроверяйте этот чек-лист каждый квартал по свежим вакансиям. Строка AI-инструментов прошла от отсутствия до 6 из 46 внутри одного окна скана. Экран вашего места теперь движется так быстро.', sru:'HR-чек-лист · Часть 6, пункт 14 — Выбор тебя'}
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
