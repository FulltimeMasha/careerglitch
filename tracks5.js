/* ===== PathCheck — expansion wave 2 app data (Nov 1, 2026).
   Own file for the same reason as tracks3.js/tracks4.js: the older
   track files sit near the ~98 KB single-file upload cap. Loaded by
   app.html after tracks4.js, before quests.js; every block ASSIGNS
   into the globals tracks.js / tracks2.js declared — nothing is
   redeclared. Steps trace 1:1 to each package's hr-checklist.md.
   Wave 2 order: healthadmin · datascientist · truckdriver (this
   file), then counselor + the trades + cybersecurity (tracks6.js). */

/* ================= HEALTHCARE ADMINISTRATOR =================
   Source: ~/workspace/pathcheck-healthadmin-pilot/ (43 postings).
   Cluster: HEALTHCARE ADMINISTRATOR IS A YES. THE PAPERWORK SEAT
   IS A NO. Steps trace to hr-checklist.md Part 2, items 1–14. */
PROF_META.healthadmin = {name:'Healthcare Administrator', kick:'Healthcare Administrator', code:'VITALS', count:'155,100', srcWhat:'new healthcare manager jobs the BLS counts by 2035', srcWhatRu:'новых рабочих мест для руководителей в медицине к 2035 году (по данным BLS — статистики труда США)'};

Object.assign(SEATINFO, {
  hosops:{prof:'healthadmin', label:'Running a hospital or a group of hospitals', verdict:'YES', conf:'High'},
  clinicadmin:{prof:'healthadmin', label:'Running a doctor’s office or clinic', verdict:'YES', conf:'Medium'},
  ltcadmin:{prof:'healthadmin', label:'Running a nursing home', verdict:'YES', conf:'High'},
  revcycle:{prof:'healthadmin', label:'Billing and insurance paperwork', verdict:'NO as a place to stay', conf:'Medium'}
});

Object.assign(DOORS, {
  hosops:'A degree or one year as a manager gets you in. Running the budget well gets you promoted.',
  clinicadmin:'Show a budget you ran. Aim at big groups of clinics: they pay more than one small office.',
  ltcadmin:'Get the license first. It’s the shortest way in — everything else comes after it.',
  revcycle:'AI now does the billing. Be the person who runs it, not the one it replaces. That job pays $145,900–$170,200.'
});

GRIDINFO.healthadmin = {head:'Your shortcut to running a hospital, clinic or nursing home.', short:'AI already does much of the billing paperwork in hospitals. People who studied for that work feel lost. Here is what stays with people and pays well. A healthcare administrator runs the business side: money, staff, schedules and inspections. Doctors treat patients; you keep the place working. Running a hospital, a doctor’s office or a nursing home is a good bet. Billing is OK to start, but not to stay. With AI as your tutor, you learn budgets and tools in weeks. Follow the steps and get hired faster.'};

/* ================= HEALTHCARE ADMINISTRATOR TRACK (14 steps) ================= */
TRACKS.healthadmin = [
 {name:'Getting in', steps:[
  {id:'had-g1', t:'Pick one job and write it down: hospital, doctor’s office, nursing home or billing. Then you study only what that job needs.', src:'HR checklist · Part 2, item 1 — Getting in', ru:'Выберите одну работу и запишите её: больница, врачебная практика, дом престарелых или счета. Тогда вы учите только то, что нужно для неё.', sru:'Чек-лист HR · Часть 2, пункт 1 — Вход'},
  {id:'had-g2', t:'Get only the degree your job needs. Most jobs want a bachelor’s. Fellowships (a paid training year) and big hospital groups want a master’s (MHA, MBA or MPH). Don’t pay for more.', src:'HR checklist · Part 2, item 2 — Getting in', ru:'Получите только то образование, которое нужно вашей работе. Большинству хватит бакалавра. Магистр нужен для больших больничных сетей и fellowship (оплачиваемый год обучения в больнице). Это MHA, MBA или MPH (управление в медицине и бизнес). Больше платить не нужно.', sru:'Чек-лист HR · Часть 2, пункт 2 — Вход'},
  {id:'had-g3', t:'Learn how the money works. Read a budget and run one. Learn the P&L: one page with money in and money out. Ask ChatGPT or Claude to explain one line by line. That takes an evening, not a course!', src:'HR checklist · Part 2, item 3 — Getting in', ru:'Разберитесь, как устроены деньги. Научитесь читать и вести бюджет. Поймите P&L — одну страницу, где видно, сколько пришло и сколько ушло. Попросите ChatGPT или Claude объяснить её по строчкам. Это займёт вечер, а не курс!', sru:'Чек-лист HR · Часть 2, пункт 3 — Вход'},
  {id:'had-g4', t:'Learn one patient-records program really well: Epic. 10 of 43 job posts name it, more than any other. One program is enough to start.', src:'HR checklist · Part 2, item 4 — Getting in', ru:'Хорошо выучите одну программу для медицинских записей — Epic. Её называют 10 из 43 вакансий, чаще всех. Для старта хватит одной.', sru:'Чек-лист HR · Часть 2, пункт 4 — Вход'},
  {id:'had-g5', t:'Learn who checks your work. Hospitals face inspectors and state rules. Nursing homes need a state license. Know this, and nothing at work surprises you.', src:'HR checklist · Part 2, item 5 — Getting in', ru:'Узнайте, кто проверяет вашу работу. Больницы проверяют инспекторы и правила штата. Для домов престарелых нужна лицензия штата (NHA — лицензия администратора). Без неё туда не берут.', sru:'Чек-лист HR · Часть 2, пункт 5 — Вход'}
 ]},
 {name:'Proof', steps:[
  {id:'had-p1', t:'Run a budget, or help someone run one. Write down its size and what you changed. This one line beats years of “experience.”', src:'HR checklist · Part 2, item 6 — Proof', ru:'Ведите бюджет или помогайте его вести. Запишите его размер и что вы изменили. Эта строчка сильнее лет «опыта».', sru:'Чек-лист HR · Часть 2, пункт 6 — Доказательства'},
  {id:'had-p2', t:'Fix one staff problem: a messy schedule, empty shifts, or a job nobody wants. Write down what got better. Employers pay for this.', src:'HR checklist · Part 2, item 7 — Proof', ru:'Решите одну проблему с сотрудниками: неудобное расписание, пустые смены или вакансию, на которую никто не идёт. Запишите, что стало лучше. Работодатели платят за это.', sru:'Чек-лист HR · Часть 2, пункт 7 — Доказательства'},
  {id:'had-p3', t:'Take charge of one task an AI program now does. For example: insurance approvals, schedules, or bills insurance refused. The program does it, you check it. That’s the part of the job that stays.', src:'HR checklist · Part 2, item 8 — Proof', ru:'Возьмите на себя одну задачу, которую теперь делает AI-программа. Например: согласования со страховой, расписание или счета, по которым страховая отказала. Делает программа, проверяете вы. Эта часть работы остаётся за людьми.', sru:'Чек-лист HR · Часть 2, пункт 8 — Доказательства'},
  {id:'had-p4', t:'Pass one outside check: a state inspection, an audit, or an insurance review. Write down how it went. It proves you can be trusted.', src:'HR checklist · Part 2, item 9 — Proof', ru:'Пройдите одну внешнюю проверку: инспекцию штата, аудит или проверку страховой. Запишите, как всё прошло. Это доказывает, что вам можно доверять.', sru:'Чек-лист HR · Часть 2, пункт 9 — Доказательства'},
  {id:'had-p5', t:'Get only the certificate your job posts ask for: FACHE, CMPE, CRCP, CRCR, or the state license. One right paper beats five random ones.', src:'HR checklist · Part 2, item 10 — Proof', ru:'Получите один сертификат, который просят вакансии вашей работы: FACHE, CMPE, CRCP, CRCR или лицензию штата. Один нужный документ лучше пяти случайных.', sru:'Чек-лист HR · Часть 2, пункт 10 — Доказательства'}
 ]},
 {name:'Get picked', steps:[
  {id:'had-k1', t:'Apply by the exact job and budget size, not just the title. The same title pays $50,000 in one job post and $160,000 in another! Aim for the higher one.', src:'HR checklist · Part 2, item 11 — Get picked', ru:'Откликайтесь по конкретной работе и размеру бюджета, а не по названию. С одним названием платят $50 000 в одной вакансии и $160 000 в другой! Цельтесь во вторую.', sru:'Чек-лист HR · Часть 2, пункт 11 — Выбор'},
  {id:'had-k2', t:'Start every application with a number. How big was your budget? How many people did you lead? How much did you cut insurance refusals or payment waits? Numbers put you first in line.', src:'HR checklist · Part 2, item 12 — Get picked', ru:'Начинайте каждый отклик с цифры. Какой бюджет вы вели? Сколькими людьми руководили? Насколько меньше стало отказов страховых или ожидания оплаты? Цифры ставят вас первым в очереди.', sru:'Чек-лист HR · Часть 2, пункт 12 — Выбор'},
  {id:'had-k3', t:'For hospital jobs, apply to fellowships (a paid training year) while they’re open. It’s the fastest way in. Spots are few, and all ask for a master’s.', src:'HR checklist · Part 2, item 13 — Get picked', ru:'Для работы в больнице подавайтесь на fellowship (оплачиваемый год обучения для управленцев), пока набор открыт. Это самый быстрый вход. Мест немного, и везде нужен магистр.', sru:'Чек-лист HR · Часть 2, пункт 13 — Выбор'},
  {id:'had-k4', t:'Check your plan every quarter. Are big companies buying doctors’ offices near you? New AI tools at work? New state license rules? Small checks keep you ahead.', src:'HR checklist · Part 2, item 14 — Get picked', ru:'Проверяйте план раз в квартал. Скупают ли большие компании врачебные практики рядом? Появились ли новые AI-программы? Изменились ли правила лицензий? Так вы всегда на шаг впереди.', sru:'Чек-лист HR · Часть 2, пункт 14 — Выбор'}
 ]}
];

Object.assign(RESUME_TERMS, {
  'had-g2':['bachelor','master','MHA','MBA','MPH','healthcare administration','health administration'],
  'had-g3':['budget','P&L','profit and loss','financial management','forecast','operating budget','capital budget'],
  'had-g4':['Epic','Cerner','Oracle Health','Meditech','Athena','EHR','EMR'],
  'had-g5':['accreditation','Joint Commission','CMS','survey','compliance','NHA','licensed nursing home administrator','LNHA'],
  'had-p1':['budget','P&L','forecast','variance','revenue','cost center'],
  'had-p2':['staffing','scheduling','recruitment','retention','coverage','FTE'],
  'had-p3':['automation','prior authorization','denials','workflow','Kodiak','Optum360','Availity','analytics'],
  'had-p4':['accreditation','audit','survey','quality','patient safety','compliance','HIPAA'],
  'had-p5':['FACHE','CMPE','FACMPE','CRCP','CRCR','CMOM','NHA','LNHA'],
  'had-k2':['denial rate','days in A/R','accounts receivable','collections','patient satisfaction'],
  'had-k3':['administrative fellowship','fellowship','CAHME']
});

/* ===== Radar Issue #1 — from the package's radar-issue-01.md ===== */
RADAR.healthadmin = [
  {h:'The government says this job grows +24.2%. That’s an average of four different jobs', d:'BLS forecast for 2025–35: median pay $123,860, +155,100 new jobs, about 62,300 openings a year. Hospitals already pay a $133,580 median. Doctors’ offices pay $105,770.', map:'For you: check growth for your own job, not the whole title. That’s how you pick the job that will still pay.', hRu:'Государство говорит, что профессия вырастет на +24,2%. Но это среднее по четырём разным работам', dRu:'Прогноз BLS на 2025–35 годы: средняя зарплата $123 860, +155 100 новых рабочих мест, около 62 300 вакансий в год. Больницы уже платят в среднем $133 580. Врачебные офисы — $105 770.', mapRu:'Для вас: смотрите рост своей работы, а не общего названия. Так вы выберете работу, которая будет платить и дальше.'},
  {h:'Big companies bought 8,000+ doctors’ offices since 2024', d:'PAI / Avalere, via Becker’s: hospitals and corporate entities employ 82% of physicians; 13,900 practices changed hands in 2024–25. Only 42.2% of physicians remained in private practice in 2024 (AMA).', map:'For you: your future boss may be a big company, not one doctor. Show you can run budgets for several clinics. That’s where pay goes up.', hRu:'Большие компании купили больше 8 000 врачебных практик с 2024 года', dRu:'PAI / Avalere, по данным Becker’s: 82% врачей работают на больницы и компании. В 2024–25 годах у 13 900 практик сменился владелец. В частной практике в 2024 году осталось только 42,2% врачей (AMA).', mapRu:'Для вас: начальником может стать большая компания, а не один врач. Покажите, что умеете вести бюджеты нескольких клиник. Там и платят больше.'},
  {h:'A hospital is hiring a manager to teach computers to do billing', d:'UChicago Medicine’s live posting: Manager, Revenue Cycle Automation and Analytics, $145,900–$170,200 — "reporting, data engineering, and process automation" for hospital billing.', map:'For you: billing pays two ways now. Routine work: $100,000–$120,000. Running the computer tools: $145,900–$170,200. Aim for the second — the path is written in the NO job’s own job posts.', hRu:'Больница ищет менеджера, который научит компьютеры выставлять счета', dRu:'Открытая вакансия UChicago Medicine: менеджер по автоматизации и аналитике счетов, $145 900–$170 200. Задачи: «отчёты, работа с данными и автоматизация процессов» для больничных счетов.', mapRu:'Для вас: за счета теперь платят по-разному. Рутина — $100 000–$120 000. Управление программами — $145 900–$170 200. Цельтесь во второе. Этот путь описан прямо в вакансиях работы со знаком NO.'},
  {h:'The company that makes the records program says office paperwork should be done by computers', d:'Epic’s own page: "Automate back-office work so that billing staff can focus on complex, high-dollar accounts." 10 of 43 job posts we checked name Epic.', map:'For you: the tool’s maker says daily paperwork goes to computers. Believe them. Budgets, people and inspections still need you — learn those first.', hRu:'Компания, которая делает программу для записей, говорит: бумажную работу в офисе должны делать компьютеры', dRu:'Страница самой Epic: «Автоматизируйте офисную работу, чтобы сотрудники по счетам занимались сложными, дорогими случаями». Epic называют 10 из 43 вакансий, которые мы проверили.', mapRu:'Для вас: производитель говорит, что бумажная рутина уйдёт компьютерам. Верьте ему. Бюджеты, люди и проверки всё равно нужны вам — учите их в первую очередь.'},
  {h:'Fellowships for 2026–2027 are open. Few spots, master’s only', d:'Five fellowship job posts we checked: NorthBay, Atlantic Health, Ohio State’s James, UNC Rex, Lee Health. Lee Health takes two people a year. Applications close 29 January 2027. All five ask for a master’s degree.', map:'For you: a fellowship is the fastest way into a hospital, but timing is everything. Mark the application date. That date is your plan.', hRu:'Набор на оплачиваемый год обучения в больнице (fellowship) 2026–2027 открыт. Мест мало, только для магистров', dRu:'Пять таких вакансий, которые мы проверили: NorthBay, Atlantic Health, Ohio State’s James, UNC Rex, Lee Health. Lee Health берёт двух человек в год. Приём заявок до 29 января 2027 года. Все пять просят магистра.', mapRu:'Для вас: fellowship — самый быстрый вход в больницу, но важно не опоздать. Отметьте дату подачи заявки. Эта дата и есть ваш план.'},
  {h:'Nursing homes still need a license — 8 of 8 job posts, at least $90,000', d:'Every nursing home job post we checked asks for a state nursing home administrator licence. Plus 2–4 years as a licensed administrator. Pay: $90,000–$150,000. BLS: all states require the licence.', map:'For you: this is the safest job here. The law protects it, so AI can’t just take it. Forecast F-HA2 keeps an eye on this rule.', hRu:'Дома престарелых по-прежнему требуют лицензию — 8 из 8 вакансий, минимум $90 000', dRu:'Каждая вакансия в доме престарелых, которую мы проверили, требует лицензию штата и 2–4 года работы администратором с лицензией. Зарплата: $90 000–$150 000. BLS: лицензию требуют все штаты.', mapRu:'Для вас: это самая надёжная работа здесь. Её защищает закон, поэтому AI её просто так не заберёт. Прогноз F-HA2 следит за этим правилом.'}
];

/* ===== Russian (RU) content layer — twins of the blocks above ===== */
PROF_META_RU.healthadmin = 'Администратор здравоохранения';

Object.assign(DOORS_RU, {
  hosops:'Диплом или год работы руководителем помогут войти. Умение вести бюджет поможет расти.',
  clinicadmin:'Покажите бюджет, который вы вели. Цельтесь в большие группы клиник: там платят больше, чем в одном офисе.',
  ltcadmin:'Сначала получите лицензию. Это самый короткий вход — всё остальное потом.',
  revcycle:'Счета теперь делает AI. Станьте тем, кто им управляет, а не тем, кого он заменяет. За это платят $145 900–$170 200.'
});

GRIDINFO_RU.healthadmin = {head:'Ваш короткий путь в администраторы больниц и клиник.', short:'AI уже делает большую часть бумажной работы со счетами в больницах. Те, кто учился на это, растеряны. Вот что остаётся за людьми и хорошо оплачивается. Администратор здравоохранения ведёт хозяйство: деньги, сотрудников, расписание и проверки. Врачи лечат, а вы делаете так, чтобы всё работало. Управлять больницей, врачебной практикой или домом престарелых — хороший выбор. Счета подходят для старта, но не навсегда. С AI-помощником бюджеты и программы учатся за недели. Идите по шагам — и дойдёте до работы быстрее.'};

/* Personalized door steps — RU twins (stored WITHOUT the prefix,
   the app adds its own framing — doorsru.js pattern). */
DOORSTEP_RU.prof.healthadmin = {
  student:'Сначала выберите работу, потом учёбу — так вы не потратите лишние годы. Для fellowship (оплачиваемый год обучения в больнице) нужен магистр: MHA, MBA или MPH из проверенной программы. Для практик и домов престарелых магистр не нужен.',
  early:'Называйте свою работу в каждом отклике. Один бюджет, который вы помогали вести, сильнее трёх лет «опыта в медицине» без цифр.',
  mid:'Соберите то, за что платят: бюджет под вашим именем, решённую проблему с сотрудниками, одну пройденную проверку. Потом получите нужный документ — FACHE, CMPE или лицензию штата. У вас получится!',
  senior:'Ведите несколько клиник или управляйте программами во всех. Здесь растут так: бюджеты больше, зданий больше. Одна лицензия — и никакой рутины.'};
DOORSTEP_RU.seat.hosops = {
  student:'Подавайтесь на fellowship (оплачиваемый год обучения в больнице) на последнем курсе магистратуры. Мест мало, поэтому важно не опоздать. Одна сеть, которую мы смотрели, берёт двух человек в год.',
  early:'Если набор на fellowship (год обучения в больнице) закрыт — не страшно, идите в клиники. Туда берут администраторов с одним годом руководящего опыта в любой сфере.',
  mid:'Отвечайте за часть бюджета и решите проблему с сотрудниками в больнице. Этого хватает, чтобы вас повысили.',
  senior:'Переходите от одного здания к нескольким. Правила бюджета одни, и везде вы готовы к проверкам.'};
DOORSTEP_RU.seat.clinicadmin = {
  student:'Сначала поймите, как практика зарабатывает: расписание, счета, оплаты. Программы — потом. Здесь важнее опыт в практиках, чем дипломы.',
  early:'Ведите ежедневные деньги одной практики: поток пациентов, счета, приём. Записывайте, что стало лучше благодаря вам.',
  mid:'Получите CMPE (сертификат для управляющих врачебной практикой) — его просят в вакансиях. Отвечайте за P&L (страница доходов и расходов): все счета, оплаты, работу со страховыми. За это платят $120 000–$160 000.',
  senior:'Ведите несколько клиник для группы или большой компании. Владельцы объединились. Хорошие администраторы теперь управляют сразу многими клиниками.'};
DOORSTEP_RU.seat.ltcadmin = {
  student:'Начните с совета вашего штата: программа Administrator-in-Training (стажировка администратора) и экзамены. Здесь всё начинается с лицензии.',
  early:'Работайте рядом с администратором, у которого есть лицензия. Узнайте, как штат проводит проверки. Первые два года — это ваша учёба на лицензию.',
  mid:'Ведите своё здание: сотрудники, бюджет, семьи жильцов и проверки штата. Здесь всё решаете вы — и у вас получится.',
  senior:'Ведите здание, где и проверки проходят хорошо, и бюджет в порядке. Именно за это платят $130 000–$150 000.'};
DOORSTEP_RU.seat.revcycle = {
  student:'Не платите за магистратуру ради рутины со счетами: её забирает AI. Сначала изнутри поймите, как движутся деньги: счета, отказы, ожидание оплаты.',
  early:'Берите задачи с программами, которые работодатель уже покупает: программа для отказов, отчёты, запуск нового инструмента. Станьте тем, кто ими управляет.',
  mid:'Отвечайте за одну задачу с программой целиком и покажите цифры: отказов меньше, деньги приходят быстрее. Это прямо описание вакансии за $145 900–$170 200.',
  senior:'Управляйте деньгами или программами сразу в нескольких клиниках. То, что вы раньше делали руками, теперь работает под вашим управлением.'};

Object.assign(BIGGOALS_RU, {
  hosops:'Управлять больницей или группой больниц: бюджетом, зданиями и людьми. По данным BLS, обычная зарплата здесь — $133 580.',
  clinicadmin:'Вести деньги практики как хозяин: P&L (страница доходов и расходов) одной клиники, потом нескольких. За это платят $120 000–$160 000.',
  ltcadmin:'Иметь лицензию и вести здание, где и проверки, и бюджет в порядке. За это платят $130 000–$150 000.',
  revcycle:'Управлять программами, которые работают с деньгами, — отказами, проверкой страховки, согласованиями. А не сидеть на рутине. За это платят $145 900–$170 200.'
});
BIGGOAL_PROF_RU.healthadmin = 'Стать администратором из топ 1% — тем, кого зовут первым спасать здание, бюджет или лицензию. AI забирает бумажную рутину, а эта работа остаётся за людьми. Выберите одну из трёх растущих работ и идите только по нужным шагам.';

/* ================= DATA SCIENTIST =================
   Source: ~/workspace/pathcheck-datascientist-pilot/ (42 postings).
   Cluster: DATA SCIENTIST IS A YES. THE EASY WAY IN IS A NO.
   Sibling of dataanalyst — cross-notes run both ways (below). */
PROF_META.datascientist = {name:'Data Scientist', kick:'Data Scientist', code:'VECTOR', count:'42', srcWhat:'real data scientist job posts we opened', srcWhatRu:'настоящих вакансий специалистов по данным (data scientist), которые мы открыли'};

Object.assign(SEATINFO, {
  prodds:{prof:'datascientist', label:'Product data scientist', verdict:'YES', conf:'High'},
  coreds:{prof:'datascientist', label:'General data scientist', verdict:'YES', conf:'Medium'},
  mlds:{prof:'datascientist', label:'AI / ML data scientist', verdict:'YES', conf:'Medium'},
  ressci:{prof:'datascientist', label:'Research scientist', verdict:'NO as a plan', conf:'Medium'}
});

Object.assign(DOORS, {
  prodds:'What to do: your job is a YES if you can plan a test and explain the result. Learn experiments: they show what caused what. The Full Report gives the shortest order: statistics → experiments → a few key numbers to track.',
  coreds:'What to do: your job is a YES if you can show one finished model (a program that learned from data). Skip the pile of certificates — it won’t get you hired. The Full Report shows proof in the order employers check it.',
  mlds:'What to do: your job is a YES if you finished one AI project and can show how you checked its answers. Checking AI is the part that stays with people. The Full Report shows the steps. You’ve got this!',
  ressci:'What to do instead: keep your research dream, just change the order. Take a product or ML job first — it pays now. Write papers from there. Then research teams will find you.'
});

GRIDINFO.datascientist = {head:'Your shortcut to becoming a data scientist.', short:'AI now writes simple reports and code, and people who studied for years feel lost. Here is what still pays. A data scientist digs into big piles of numbers to find answers: what customers like, what happens next, what to change. It’s really four different jobs. Product, general and AI data science pay $130K–$380,000. Research is only 5 of 42 job posts, and needs a PhD. Data analyst is a different job, with its own check. With AI as your tutor, you learn Python and statistics faster. Follow the steps and skip useless courses.'};

TRACKS.datascientist = [
 {name:'Getting in', steps:[
  {id:'dsc-g1', t:'Get good at Python and SQL first — that’s the fastest start. Python is the language for giving computers orders. SQL is how you ask a database for data. 31 of 42 job posts we opened ask for Python. 23 of 42 ask for SQL. Good enough means you can clean messy data and answer a real question alone. Ask ChatGPT or Claude to explain every error you hit.', src:'HR checklist · Part 6, item 1 — Getting in', ru:'Сначала освойте Python и SQL — это самый быстрый старт. Python — язык, на котором дают команды компьютеру. SQL — способ попросить данные у базы. Python просят в 31 из 42 вакансий, которые мы открыли. SQL — в 23 из 42. Достаточно — это когда вы сами чистите грязные данные и отвечаете на настоящий вопрос. Каждую ошибку просите объяснить ChatGPT или Claude.', sru:'HR-чек-лист · Часть 6, пункт 1 — Вход'},
  {id:'dsc-g2', t:'Learn statistics well enough to explain your answers. Learn chances and how to judge a big group from a small one. Know what a p-value can’t tell you. A p-value shows how surprising a result would be if nothing real was happening. Every job checks statistics, product jobs most of all.', src:'HR checklist · Part 6, item 2 — Getting in', ru:'Выучите статистику так, чтобы объяснять свои выводы. Нужны вероятности и умение судить о большой группе по маленькой. Знайте, чего не скажет p-value. Это число показывает, насколько странным был бы результат, если на самом деле ничего не происходит. Статистику проверяют везде. Больше всего — в продуктовой работе.', sru:'HR-чек-лист · Часть 6, пункт 2 — Вход'},
  {id:'dsc-g3', t:'Pick your job on purpose: product, general (core), ML or research. Pay runs from $65,064 to $400,000. Each wants different degrees. Write down which fits your degree and experience today. Then you study only what it needs.', src:'HR checklist · Part 6, item 3 — Getting in', ru:'Выберите работу осознанно: продуктовая, универсальная, ML (машинное обучение) или исследования. Платят от $65,064 до $400,000. Везде просят разные дипломы. Запишите, какая подходит под ваш диплом и опыт сегодня. Тогда вы учите только нужное.', sru:'HR-чек-лист · Часть 6, пункт 3 — Вход'},
  {id:'dsc-g4', t:'Be honest about degrees. 16 of 42 job posts we opened want a master’s or PhD. If your job needs one, plan for it. If not, skip it and do real projects — it’s faster.', src:'HR checklist · Part 6, item 4 — Getting in', ru:'Честно проверьте, нужен ли диплом. 16 из 42 вакансий, которые мы открыли, просят магистратуру или PhD (учёную степень). Если вашей работе он нужен — планируйте. Если нет — не платите, а делайте настоящие проекты. Так быстрее.', sru:'HR-чек-лист · Часть 6, пункт 4 — Вход'}
 ]},
 {name:'Proof', steps:[
  {id:'dsc-p1', t:'Make one model from start to finish. A model is a program that learns from data. Take a real question and messy data. Train the model, test it, explain it. 33 of 42 job posts mention models. One finished model says more than any course!', src:'HR checklist · Part 6, item 5 — Proof', ru:'Сделайте одну модель от начала до конца. Модель — это программа, которая учится на данных. Возьмите настоящий вопрос и грязные данные. Обучите модель, проверьте, объясните. Модели упоминают 33 из 42 вакансий. Одна готовая модель скажет о вас больше любого курса!', sru:'HR-чек-лист · Часть 6, пункт 5 — Доказательства'},
  {id:'dsc-p2', t:'Run one experiment from start to finish. An A/B test shows people version A or B and sees which works better. A cause study shows one thing really caused another. 10 of 12 product job posts ask for this. Do it once, and you’re ahead.', src:'HR checklist · Part 6, item 6 — Proof', ru:'Проведите один эксперимент от начала до конца. A/B-тест показывает людям версию A или версию B и смотрит, какая лучше. Исследование причин показывает, что одно правда вызвало другое. Эксперименты просят 10 из 12 продуктовых вакансий. Сделайте один раз — и вы впереди.', sru:'HR-чек-лист · Часть 6, пункт 6 — Доказательства'},
  {id:'dsc-p3', t:'Build one thing with a large language model (the AI inside chatbots). Track how well it works and write down how you checked its answers. 17 of 42 job posts mention AI. Checking AI’s answers is the skill employers now pay for.', src:'HR checklist · Part 6, item 7 — Proof', ru:'Сделайте одну вещь на большой языковой модели (это AI внутри чат-ботов). Следите, насколько хорошо она работает, и запишите, как вы проверяли её ответы. AI упоминают 17 из 42 вакансий. Проверять ответы AI — то умение, за которое теперь платят.', sru:'HR-чек-лист · Часть 6, пункт 7 — Доказательства'},
  {id:'dsc-p4', t:'Make a portfolio a stranger can read in five minutes. Three projects. Each shows the question, the data, your choices and the result. Research jobs also want papers. Other jobs just want finished work, not extra courses.', src:'HR checklist · Part 6, item 8 — Proof', ru:'Соберите портфолио, которое незнакомый человек прочтёт за пять минут. Три проекта. В каждом: вопрос, данные, ваш выбор и результат. Для исследований просят ещё и статьи. Остальным нужны готовые проекты, а не лишние курсы.', sru:'HR-чек-лист · Часть 6, пункт 8 — Доказательства'},
  {id:'dsc-p5', t:'Make one dashboard (a page of charts) that ends with a decision. 12 of 42 job posts mention dashboards. End yours with “so we did X.” That’s what lifts you above an analyst.', src:'HR checklist · Part 6, item 9 — Proof', ru:'Сделайте один дашборд (страницу с графиками), который заканчивается решением. Дашборды упоминают 12 из 42 вакансий. Ваш должен заканчиваться словами «и поэтому мы сделали X». Именно это поднимает вас выше аналитика.', sru:'HR-чек-лист · Часть 6, пункт 9 — Доказательства'},
  {id:'dsc-p6', t:'Clean one messy, real data set where people can see it. Not a practice one. Job posts want real data: with gaps, mistakes, and some kinds much rarer than others. Write notes on how you cleaned it. Those notes are proof employers trust.', src:'HR checklist · Part 6, item 10 — Proof', ru:'Почистите один настоящий грязный набор данных у всех на виду. Не учебный. Вакансии хотят настоящие данные: с пропусками, ошибками, и где одних примеров намного меньше других. Записывайте, как чистили. Этим заметкам работодатели верят.', sru:'HR-чек-лист · Часть 6, пункт 10 — Доказательства'}
 ]},
 {name:'Get picked', steps:[
  {id:'dsc-k1', t:'Apply to exact job titles: product data scientist, ML data scientist. Plain “data scientist” jobs have a long line of people with a master’s and two years. Exact titles get you hired faster.', src:'HR checklist · Part 6, item 11 — Get picked', ru:'Откликайтесь на точные названия вакансий: Product data scientist (продуктовая работа), ML data scientist (машинное обучение). На просто «data scientist» — длинная очередь людей с магистратурой и двумя годами опыта. С точным названием вас возьмут быстрее.', sru:'HR-чек-лист · Часть 6, пункт 11 — Вас выбирают'},
  {id:'dsc-k2', t:'Show how you work with AI tools. One project where AI wrote a draft and you checked it. Show the checking, not just the draft. One job post asks for exactly this: work with AI “as a collaborator.” This keeps you needed.', src:'HR checklist · Part 6, item 12 — Get picked', ru:'Покажите, как вы работаете с AI-инструментами. Один проект, где AI сделал черновик, а вы его проверили. Покажите проверку, а не только черновик. Одна вакансия просит ровно это: работу с AI «как с соавтором». Так вы остаётесь нужным специалистом.', sru:'HR-чек-лист · Часть 6, пункт 12 — Вас выбирают'},
  {id:'dsc-k3', t:'Know your worth from real job posts. Experienced product people earn $180K–$380K. ML pays $130K–$285K. General (core) pays $88K–$250K. Top research pays $320K–$400K. Pay not growing? It’s the job, not you.', src:'HR checklist · Part 6, item 13 — Get picked', ru:'Узнайте свою цену по настоящим вакансиям. Опытные в продуктовой работе получают $180K–$380K. ML — $130K–$285K. Универсальная работа — $88K–$250K. Исследования ведущего уровня — $320K–$400K. Зарплата не растёт? Дело в работе, а не в вас.', sru:'HR-чек-лист · Часть 6, пункт 13 — Вас выбирают'},
  {id:'dsc-k4', t:'Go through this checklist every quarter with new job posts. AI is now in 17 of 42 job posts we saw, and growing. Things change fast — small checks keep you near the top.', src:'HR checklist · Part 6, item 14 — Get picked', ru:'Проходите этот чек-лист раз в квартал по свежим вакансиям. AI сейчас просят в 17 из 42 вакансий, которые мы видели, и их всё больше. Всё меняется быстро — регулярные проверки держат вас среди лучших.', sru:'HR-чек-лист · Часть 6, пункт 14 — Вас выбирают'}
 ]}
];

Object.assign(RESUME_TERMS, {
  'dsc-g1':['python','sql','pandas'],
  'dsc-g2':['statistics','statistical','hypothesis testing','a/b testing'],
  'dsc-g4':['master','phd','m.s.','ph.d'],
  'dsc-p1':['machine learning','modeling','modelling','scikit-learn','regression'],
  'dsc-p2':['a/b testing','a/b test','experimentation','causal inference'],
  'dsc-p3':['llm','large language model','generative ai','genai','prompt'],
  'dsc-p4':['github','portfolio','kaggle'],
  'dsc-p5':['dashboard','tableau','looker','power bi'],
  'dsc-p6':['data cleaning','etl','data wrangling'],
  'dsc-k2':['copilot','chatgpt','claude','cursor']
});

RADAR.datascientist = [
 {h:'New job posts say “AI-native”: they want people who work with AI every day', d:'Anthropic’s growth data scientist job post (read 1 Nov 2026) says the analysis is done with AI as a helper. In the job posts we checked, 17 of 42 mention AI work.', map:'For you: this helps with steps dsc-p3 and dsc-k2. Do one AI project and show how you work. That puts you ahead of people who only study.', hRu:'В новых вакансиях пишут «AI-native» — то есть ищут тех, кто работает с AI каждый день', dRu:'Вакансия специалиста по данным для роста продукта в Anthropic (прочитана 1 ноября 2026): анализ там делают вместе с AI. В вакансиях, которые мы проверили, работу с AI упоминают 17 из 42.', mapRu:'Для вас: помогает с шагами dsc-p3 и dsc-k2. Сделайте один AI-проект и покажите, как работаете. Так вы обгоните тех, кто просто учится.'},
 {h:'Degrees matter most here', d:'16 of 42 job posts require or prefer a master’s or a PhD. Even the job for new grads at $140K–$150K asks for one.', map:'For you: step dsc-g4. Find out if your job needs a degree before you pay for anything. That can save you years.', hRu:'Здесь главное — диплом', dRu:'В 16 из 42 вакансий магистратура или PhD обязательны или желательны. Даже работа для выпускников за $140K–$150K требует магистратуру или PhD.', mapRu:'Для вас: шаг dsc-g4. Узнайте, нужен ли диплом вашей работе, до того как платить. Это может сэкономить годы.'},
 {h:'There are very few jobs for beginners right now', d:'Only five of 42 job posts take people with 0–1 years. Stanford’s August 2026 update: workers aged 22–25 in jobs most affected by AI are about 19% below trend. The reason is less hiring.', map:'For you: step dsc-k1. Apply to exact job titles and build proof projects first. Projects are what get beginners in.', hRu:'Вакансий для новичков сейчас очень мало', dRu:'Только пять из 42 вакансий берут людей с опытом 0–1 год. Данные Stanford за август 2026: работников 22–25 лет в профессиях, которые сильнее всего задел AI, примерно на 19% меньше обычного. Причина — меньше берут на работу.', mapRu:'Для вас: шаг dsc-k1. Откликайтесь на точные названия и сначала сделайте проекты-доказательства. Новичков берут именно за проекты.'},
 {h:'Offices in cheaper countries hire for this job at 6 years of experience, not zero', d:'ANSR, 24 Sept 2026: big company offices in India hire about 45% more AI and data people than a year ago. The typical new hire has 6 years of experience.', map:'Filter 3: real projects matter more than certificates. Skip the extra courses.', hRu:'Офисы в дешёвых странах берут на эту работу с 6 годами опыта, а не с нуля', dRu:'ANSR, 24 сентября 2026: офисы больших компаний в Индии нанимают специалистов по AI и данным примерно на 45% больше, чем год назад. У типичного нового сотрудника 6 лет опыта.', mapRu:'Фильтр 3: настоящие проекты важнее сертификатов. Лишние курсы можно пропустить.'},
 {h:'Job post of the week: how much top product jobs pay', d:'Anthropic pays a growth data scientist $285,000–$380,000 — 7+ years, experiments and cause-and-effect analysis. A fintech product job pays $250,000–$300,000 at 2–3+ years.', map:'For you: this is where the money is. Step dsc-p2 gets you there: one experiment from start to finish.', hRu:'Вакансия недели: сколько платят лучшие продуктовые работы', dRu:'Anthropic платит специалисту по данным для роста продукта $285,000–$380,000 — нужно 7+ лет, эксперименты и анализ причин. Продуктовая работа в финтехе (финансовые приложения) платит $250,000–$300,000 при 2–3+ годах опыта.', mapRu:'Для вас: вот где деньги. Туда ведёт шаг dsc-p2: один эксперимент от начала до конца.'},
 {h:'Government numbers still say this job is growing', d:'BLS forecast, released 27 Aug 2026: data scientist jobs grow +34.6%, with 95,400 new jobs and a $120,230 median. The field grows, but getting in gets harder. Both are true.', map:'For you: the field grows, so the path is worth it. Just come in with proof, not only courses.', hRu:'Государственная статистика всё ещё говорит: профессия растёт', dRu:'Прогноз BLS от 27 августа 2026: работ для специалистов по данным станет больше на +34.6%, это 95,400 новых мест, средняя зарплата $120,230. Профессия растёт, но войти в неё всё труднее. И то и другое правда.', mapRu:'Для вас: профессия растёт, так что путь того стоит. Только приходите с доказательствами, а не с одними курсами.'}
];

/* ===== Data Scientist — Russian (RU) content layer ===== */
PROF_META_RU.datascientist = 'Дата-сайентист';

Object.assign(DOORS_RU, {
  prodds:'Что делать: ваша работа — ДА, если вы умеете придумать тест и объяснить результат. Изучайте эксперименты: они показывают, что чем вызвано. Полный отчёт даст самый короткий порядок: статистика, потом эксперименты, потом несколько главных цифр.',
  coreds:'Что делать: ваша работа — ДА, если вы можете показать готовую модель (программу, которая учится на данных). Пачка сертификатов на работу не приведёт. Полный отчёт покажет доказательства в том порядке, в каком их ищут работодатели.',
  mlds:'Что делать: ваша работа — ДА, если вы сделали один AI-проект и можете показать, как проверяли его ответы. Проверка AI остаётся за людьми. Полный отчёт покажет шаги. У вас получится!',
  ressci:'Что делать вместо этого: не бросайте мечту об исследованиях — просто поменяйте порядок. Сначала возьмите продуктовую работу или ML: там платят уже сейчас. Пишите статьи оттуда. Тогда исследовательская команда сама вас найдёт.'
});

GRIDINFO_RU.datascientist = {head:'Ваш короткий путь в специалисты по данным (data scientist).', short:'AI уже пишет простые отчёты и код. Те, кто годами учился, растеряны. Вот что по-прежнему хорошо оплачивается. Специалист по данным ищет ответы в больших таблицах цифр: что нравится клиентам, что будет дальше, что изменить. Это четыре разные работы. Продуктовая, универсальная и работа с AI — хороший выбор, платят $130K–$380,000. Исследования — 5 из 42 вакансий, и нужен PhD. Аналитик данных — другая профессия со своей проверкой. Там смотрят на инструменты: SQL просят в 24 из 24 вакансий. Здесь смотрят на дипломы, опыт и модели. Перейти можно через статистику, Python и одну готовую модель. Это переход, а не повышение. Общая ловушка у обеих: отчёты по запросу — их теперь пишет AI. Общее у них только SQL и Python. С AI-помощником Python и статистика учатся быстрее. Идите по шагам — без лишних курсов.'};

DOORSTEP_RU.prof.datascientist = {
  student:'Выберите работу до того, как решать с дипломом. Магистратуру просят в 16 из 42 вакансий. Посмотрите вакансии своей работы, прежде чем платить за учёбу. Так вы не потратите лишние годы.',
  early:'Сделайте одну модель от начала до конца и опишите её. Новичков берут только 5 из 42 вакансий. Там смотрят на проекты, а не на список курсов. Ваш проект — ваш билет!',
  mid:'Сделайте один эксперимент или один готовый AI-проект целиком. Именно это ищут вакансии за $250K+. Это ваш шаг к топу.',
  senior:'Ваша цена — в решениях и готовых моделях, а не в годах. В продуктовой работе платят $285K–$380K тем, чьи решения изменили продукт.'};
DOORSTEP_RU.seat.prodds = {
  student:'Учите статистику так, будто это и есть работа. Эксперименты просят в 10 из 12 продуктовых вакансий. Непонятное просите объяснить AI — так быстрее.',
  early:'Проведите один A/B-тест от начала до конца, пусть маленький: придумать, посмотреть результат, решить. Это как пройти собеседование заранее!',
  mid:'Отвечайте за одну важную цифру и решение по ней. В продуктовой работе платят за советы, которые изменили продукт.',
  senior:'Ваша цена — в решениях, а не в отчётах. Anthropic платит $285K–$380K за умение принимать такие решения.'};
DOORSTEP_RU.seat.coreds = {
  student:'Сначала Python и SQL, диплом — потом. Python просят в 31 из 42 вакансий.',
  early:'Сделайте одну модель на настоящих грязных данных и опишите свои решения. Так можно обойти очередь людей с магистратурой.',
  mid:'Выберите направление — продуктовое или ML. Если остаться «на все руки», зарплата может упасть (есть вакансии и за $65,064).',
  senior:'Ваша цена — готовые модели и знание своей области. Опытные в универсальной работе получают до $250,000 именно за это.'};
DOORSTEP_RU.seat.mlds = {
  student:'Сделайте одну вещь на большой языковой модели и запишите, как проверяли её ответы. Именно умение проверять здесь и ценят.',
  early:'Запустите один AI-проект по-настоящему, пусть маленький. 6 из 7 вакансий здесь просят опыт с AI. Демо — это ещё не то.',
  mid:'Отвечайте за проверку: как команда понимает, что ответы AI хорошие. Это и есть уровень опытного специалиста.',
  senior:'Ваша цена — AI-системы, которые вы запустили и проверили. Здесь платят до $285,000.'};
DOORSTEP_RU.seat.ressci = {
  student:'Если PhD — правда ваш план, выбирайте лабораторию и тему по статьям, которые мечтаете написать. Все 5 исследовательских вакансий просят статьи.',
  early:'Пишите статьи с того места, где вы сейчас. Статья на небольшой конференции или открытое портфолио лучше лишнего года учёбы.',
  mid:'Если у вас есть статьи, смело подавайтесь — для вас это ДА. Если нет, продуктовая работа и ML платят $250K–$380K и без них.',
  senior:'Ваша цена — ваши статьи. Исследования ведущего уровня платят за них $320K–$400K.'};

Object.assign(BIGGOALS_RU, {
  prodds:'Большая цель: продуктовый специалист по данным, который решает, что выпускать. За проверенные решения платят $250K–$380K.',
  coreds:'Большая цель: специалист по данным с готовой моделью и понятной специальностью. Опытные в универсальной работе получают до $250,000.',
  mlds:'Большая цель: специалист по машинному обучению, который запускает AI и доказывает, что его ответы хорошие. Платят до $285,000.',
  ressci:'Большая цель: исследования, но через оплачиваемую работу. Пишите статьи из продуктовой работы или ML. Пусть исследовательские команды за $320K–$400K сами вас позовут.'
});
BIGGOAL_PROF_RU.datascientist = 'Стать специалистом по данным из топ 1%. AI забирает простые отчёты, а модели и решения остаются за людьми. Это продуктовая работа, ML или универсальная со своей темой: $180K–$380K. Дойти можно без лишней учёбы: модели и эксперименты, а не новые сертификаты.';

/* ===== Cross-notes onto the dataanalyst side (spec §12.2, app layer).
   tracks5.js loads after tracks3.js, so these mutations land on the
   analyst package's own objects without editing its file. ===== */
if (typeof GRIDINFO !== 'undefined' && GRIDINFO.dataanalyst) {
  GRIDINFO.dataanalyst.short += ' Data scientist now has its own full check (VECTOR): 42 job posts, four jobs, and a degree check this map doesn’t have. The dsgate job on this map is your way in. The full path is on the other side.';
}
if (typeof GRIDINFO_RU !== 'undefined' && GRIDINFO_RU.dataanalyst) {
  GRIDINFO_RU.dataanalyst.short += ' У профессии data scientist (специалист по данным) теперь своя полная проверка (VECTOR): 42 вакансии, четыре работы и проверка диплома, которой нет на этой карте. Магистратуру или PhD просят в 16 из 42 вакансий. Работа dsgate выше — ваш вход. Полный путь — за ним.';
}
if (typeof DOORS !== 'undefined') DOORS.dsgate = 'What to do: there’s now a full check for this job — text VECTOR. Short version: statistics, Python and one finished model. A master’s really matters there (16 of 42 job posts). That’s a fact, not a rumor.';
if (typeof DOORS_RU !== 'undefined') DOORS_RU.dsgate = 'Что делать: для этой работы теперь есть полная проверка — напишите VECTOR. Коротко: статистика, Python и одна готовая модель. Магистратура там правда важна (16 из 42 вакансий). Это факт, а не слух.';

/* ================= TRUCK DRIVER =================
   Source: ~/workspace/pathcheck-truckdriver-pilot/ (37 postings
   opened in full + BLS + FMCSA/TSA). Cluster: TRUCK DRIVER IS A
   YES. THE LONG-HAUL SEAT IS A NO. (Medium). Code word: HAUL. */
PROF_META.truckdriver = {name:'Truck Driver', kick:'Truck Driver', code:'HAUL', count:'2.2 million', srcWhat:'drivers in the US — and trucks with no driver already carry paid loads in Texas', srcWhatRu:'водителей в США — а грузовики без водителя уже возят платные грузы в Техасе'};

Object.assign(SEATINFO, {
  otr:{prof:'truckdriver', label:'Long-haul OTR', verdict:'NO', conf:'Medium'},
  regional:{prof:'truckdriver', label:'Regional (home weekly)', verdict:'YES', conf:'Medium'},
  local:{prof:'truckdriver', label:'Local & LTL city (home every day)', verdict:'YES', conf:'High'},
  tanker:{prof:'truckdriver', label:'Tanker & hazmat (dangerous goods)', verdict:'YES', conf:'High'},
  flatbed:{prof:'truckdriver', label:'Flatbed / heavy haul / car haul', verdict:'YES', conf:'Medium'},
  ownerop:{prof:'truckdriver', label:'Owner-operator', verdict:'YES', conf:'Medium'}
});

Object.assign(DOORS, {
  otr:'Treat long-haul as 12 months of practice, then move on. Drive one clean year: no tickets, no crashes. Add extra license skills along the way. Then switch to local, tanker or flatbed work. You can do it!',
  regional:'Great news: your job is a YES! Keep it and keep your record clean. Watch the Radar. If trucks with no driver ever start on your route, plan your next move that same week.',
  local:'Great news: your job is a YES! Not here yet? That’s what your first year is for. 12 clean months and three extra license skills. Then apply with your clean record in hand.',
  tanker:'Great news: your job is a YES! Keep your tanker and hazmat (dangerous goods) skills current. Keep your papers perfect — this job is strict about them. Next steps up: LTL long routes and tanker work at factories.',
  flatbed:'Great news: your job is a YES! Your superpower is tying down loads safely. Get really good at it and keep photos as proof. The best job posts want people who’ve hauled oversize loads, step-decks and cars.',
  ownerop:'Do the math before you sign anything: your truck, your loan, your costs. Watch out for one trap: a lease-to-own deal with the same company that picks your loads.'
});

GRIDINFO.truckdriver = {head:'Your shortcut to a truck driving job robots can’t take.', short:'Trucks with no driver already carry paid loads in Texas. Many drivers who paid for school now feel lost. Here is what stays with people and pays. A truck driver moves goods in a big truck, across a city or across states. It’s really six different jobs. Long-haul OTR is the risky one: trucks with no driver already drive those routes. Local, tanker, flatbed, regional and owner-operator work are good bets. Each has its own timing. Follow the steps to get your license fast and land a job that stays.'};

TRACKS.truckdriver = [
 {name:'Getting in', steps:[
  {id:'trk-g1', t:'Pick your job on paper before any school takes your money', src:'HR checklist · Part 1, item 1 — Getting in', ru:'Выберите работу на бумаге, до того как школа возьмёт ваши деньги', sru:'HR-чек-лист · Часть 1, пункт 1 — Вход'},
  {id:'trk-g2', t:'Check the school on the federal list before you pay — skip the fake ones', src:'HR checklist · Part 1, item 2 — Getting in', ru:'Проверьте школу в федеральном реестре до оплаты — так вы не попадёте к обманщикам', sru:'HR-чек-лист · Часть 1, пункт 2 — Вход'},
  {id:'trk-g3', t:'Get your DOT medical card and check your own driving record (Clearinghouse + MVR)', src:'HR checklist · Part 1, item 3 — Getting in', ru:'Получите медкарту DOT и проверьте свою историю вождения (Clearinghouse — база нарушений, MVR — выписка о вождении)', sru:'HR-чек-лист · Часть 1, пункт 3 — Вход'},
  {id:'trk-g4', t:'Get the Class A CDL (big-truck license) the right way: learner’s permit, a school from the official list, 3-part driving test', src:'HR checklist · Part 1, item 4 — Getting in', ru:'Получите права CDL класса A (права на большой грузовик) правильно: ученическое разрешение, школа из официального списка, экзамен из 3 частей', sru:'HR-чек-лист · Часть 1, пункт 4 — Вход'},
  {id:'trk-g5', t:'Decide how you pay for school before you sign anything', src:'HR checklist · Part 1, item 5 — Getting in', ru:'Решите, как вы платите за школу, до того как что-то подписывать', sru:'HR-чек-лист · Часть 1, пункт 5 — Вход'}
 ]},
 {name:'Proof', steps:[
  {id:'trk-p1', t:'Treat your first job as 12 months of practice, not forever', src:'HR checklist · Part 2, item 6 — Proof', ru:'Первая работа — это 12 месяцев практики, а не навсегда', sru:'HR-чек-лист · Часть 2, пункт 6 — Доказательства'},
  {id:'trk-p2', t:'Add extra license skills in order: tanker and double trailers first, hazmat next', src:'HR checklist · Part 2, item 7 — Proof', ru:'Добавляйте допуски в права по порядку: сначала цистерна и двойные прицепы, потом опасные грузы', sru:'HR-чек-лист · Часть 2, пункт 7 — Доказательства'},
  {id:'trk-p3', t:'Get the TWIC card if your loads go to ports, factories or train yards', src:'HR checklist · Part 2, item 8 — Proof', ru:'Получите карту TWIC, если ваши грузы едут в порты, на заводы или к железной дороге', sru:'HR-чек-лист · Часть 2, пункт 8 — Доказательства'},
  {id:'trk-p4', t:'Keep a folder of your clean record and save every inspection you pass', src:'HR checklist · Part 2, item 9 — Proof', ru:'Заведите папку чистой истории вождения и храните каждую пройденную проверку', sru:'HR-чек-лист · Часть 2, пункт 9 — Доказательства'},
  {id:'trk-p5', t:'Get really good at one hands-on cargo skill — robots can’t do it', src:'HR checklist · Part 2, item 10 — Proof', ru:'Освойте одно умение руками для работы с грузом — роботы так не могут', sru:'HR-чек-лист · Часть 2, пункт 10 — Доказательства'}
 ]},
 {name:'Get picked', steps:[
  {id:'trk-k1', t:'At month 12–24, move to a better job with your clean record folder in hand', src:'HR checklist · Part 3, item 11 — Get picked', ru:'На 12–24-й месяц переходите на работу получше, с папкой чистой истории в руках', sru:'HR-чек-лист · Часть 3, пункт 11 — Вас выбирают'},
  {id:'trk-k2', t:'Learn to read pay deals the way trucking companies write them', src:'HR checklist · Part 3, item 12 — Get picked', ru:'Научитесь понимать условия оплаты так, как их пишут перевозчики', sru:'HR-чек-лист · Часть 3, пункт 12 — Вас выбирают'},
  {id:'trk-k3', t:'Do honest math on owning your own truck before you try it', src:'HR checklist · Part 3, item 13 — Get picked', ru:'Честно посчитайте, выгоден ли свой грузовик, до того как его брать', sru:'HR-чек-лист · Часть 3, пункт 13 — Вас выбирают'},
  {id:'trk-k4', t:'Every quarter, check if your route is on the map of trucks with no driver', src:'HR checklist · Part 3, item 14 — Get picked', ru:'Раз в квартал проверяйте, нет ли вашего маршрута на карте грузовиков без водителя', sru:'HR-чек-лист · Часть 3, пункт 14 — Вас выбирают'}
 ]}
];

Object.assign(RESUME_TERMS, {
  'trk-g4': ['cdl', 'class a', 'commercial driver license', "commercial driver's license"],
  'trk-p2': ['hazmat', 'tanker endorsement', 'doubles', 'triples', 'endorsement'],
  'trk-p3': ['twic'],
  'trk-p4': ['csa', 'psp', 'mvr', 'roadside inspection'],
  'trk-p5': ['flatbed', 'tanker', 'car hauler', 'load securement', 'oversize'],
  'trk-k3': ['owner operator', 'own authority', 'mc number']
});

RADAR.truckdriver = [
 {h:'The first US rule for trucks with no driver is written — and dangerous goods are not in it', d:'Oct 7, 2026 · FMCSA exemption (Docket FMCSA-2026-0958, 2026–2031): driverless trucks may use cab beacons instead of warning triangles. The conditions explicitly prohibit hazmat operations under the relief.', map:'For you: your extra license skills now have the law on their side. Trucks with tankers and dangerous goods must keep a human driver. We’re watching this rule. If it ever changes, we’ll re-check the tanker answer that same week.', hRu:'Написано первое правило США для грузовиков без водителя — и опасных грузов в нём нет', dRu:'7 октября 2026 · Исключение FMCSA (дело FMCSA-2026-0958, 2026–2031): беспилотные грузовики могут ставить маячки на кабину вместо аварийных треугольников. Но возить опасные грузы по этому исключению прямо запрещено.', mapRu:'Для вас: теперь закон на стороне ваших допусков. В цистернах и с опасными грузами должен быть водитель-человек. Мы следим за этим правилом. Если оно изменится, мы перепроверим ответ по цистернам в ту же неделю.'},
 {h:'Aurora’s map of trucks with no driver: 250,000 miles, five routes in the warm South, one weak spot they admit', d:'Feb 11, 2026 · Aurora Innovation: 250,000 driverless miles by Jan 2026; lanes Dallas–Houston, Fort Worth–El Paso, El Paso–Phoenix, Fort Worth–Phoenix (~1,000 mi), Dallas–Laredo. Weather constrained its Texas driverless ops about 40% of the time in 2025 (company’s own figure). "200+ trucks by end of 2026" is an expectation, not a count.', map:'For you: every quarter, check your route against this list. Is your usual route on it, and you drive long-haul? Time to plan your next move. Northern and city routes are not on it — bad weather is the reason, they say.', hRu:'Карта грузовиков без водителя от Aurora: 250 000 миль, пять трасс на тёплом юге США, одна слабость, которую они признают', dRu:'11 февраля 2026 · Aurora Innovation: 250 000 миль без водителя к январю 2026. Маршруты: Даллас–Хьюстон, Форт-Уэрт–Эль-Пасо, Эль-Пасо–Финикс, Форт-Уэрт–Финикс (около 1 000 миль), Даллас–Ларедо. В 2025 году погода мешала их беспилотникам в Техасе примерно 40% времени (цифра самой компании). «Более 200 грузовиков к концу 2026» — это план, а не факт.', mapRu:'Для вас: раз в квартал сверяйте свой маршрут с этим списком. Ваш обычный маршрут там, а вы на дальних рейсах? Пора планировать переход. Северных и городских трасс там нет — по их словам, мешает погода.'},
 {h:'Kodiak: 35 trucks with no driver already work in the oil fields. Highways are still a goal, not a fact', d:'Jun 30 / Sep 25, 2026 · Kodiak AI + Atlas Energy: 35 driverless trucks, 40,000+ paid driverless hours hauling frac sand in the Permian Basin (since Dec 2024). Dallas–Houston named as the highway launch lane; unsupervised highway service targeted by end of 2026.', map:'For you: this is the most likely trigger for forecast F-TD1. When paid highway trips start with no backup driver, your Radar will tell you that week. Long-haul drivers in Texas should take it as a sign to switch.', hRu:'Kodiak: 35 грузовиков без водителя уже работают на нефтяных полях. Шоссе — пока цель, а не факт', dRu:'30 июня / 25 сентября 2026 · Kodiak AI + Atlas Energy: 35 беспилотных грузовиков, более 40 000 оплаченных часов без водителя. Возят песок для добычи нефти в Пермском бассейне (с декабря 2024). Первым шоссе назван маршрут Даллас–Хьюстон. Ездить по шоссе без водителя хотят начать к концу 2026 года.', mapRu:'Для вас: это самый вероятный повод для прогноза F-TD1. Когда по шоссе начнут возить платные грузы без запасного водителя, Радар скажет вам в ту же неделю. Дальнобойщикам в Техасе это знак переходить.'},
 {h:'Short trips between warehouses now use smaller trucks with no driver (Gatik, 85,000 orders)', d:'Aug 25, 2026 · Gatik (company-reported): 85,000 driverless orders completed in Class 3–7 box trucks on fixed warehouse-to-store routes for Walmart, Kroger, Tyson, PepsiCo. Different vehicle class — not Class 8.', map:'For you: not your job — but it shows the rule behind your map. Routes that are the same every day get automated first, in any truck size. That’s also why "delivery driver" has its own PathCheck map.', hRu:'Короткие поездки между складами теперь делают грузовики поменьше без водителя (Gatik, 85 000 заказов)', dRu:'25 августа 2026 · Gatik (цифры самой компании): 85 000 выполненных беспилотных заказов на фургонах классов 3–7 по фиксированным маршрутам склад–магазин для Walmart, Kroger, Tyson, PepsiCo. Другой класс машин — не Class 8.', mapRu:'Для вас: это не ваша работа, но она показывает правило вашей карты. Маршруты, которые каждый день одинаковые, автоматизируют первыми — в грузовике любого размера. Поэтому у «водителя доставки» своя карта PathCheck.'},
 {h:'The "not enough drivers" story got weaker — says the industry’s own expert', d:'Oct 2025 · ATA chief economist Bob Costello reframed the shortage as "a quality problem around drivers, much more so than an absolute number". ATRI’s 2025 industry survey ranks the shortage No. 12 — outside its top 10 for the first time.', map:'For you: recruiters will keep saying there aren’t enough drivers, to fill long-haul jobs. What’s really missing are experienced drivers with clean records. Your checklist turns you into exactly that driver. Be that driver!', hRu:'История про «нехватку водителей» ослабла — так говорит эксперт самой отрасли', dRu:'Октябрь 2025 · Главный экономист ATA Боб Костелло сказал иначе: «проблема в качестве водителей, а не в их числе». В опросе отрасли ATRI 2025 нехватка водителей на 12-м месте — впервые не в первой десятке.', mapRu:'Для вас: вербовщики и дальше будут говорить, что водителей не хватает, чтобы набрать людей на дальние рейсы. На самом деле не хватает опытных водителей с чистой историей. Ваш чек-лист делает вас именно таким. Станьте им!'},
 {h:'9,985 CDL school locations have been taken off the official US list', d:'Nov 1, 2026 · FMCSA Training Provider Registry (live counters): 18,338 active providers, 31,129 locations, 9,985 locations removed, 34,876 drivers trained in October 2026 alone.', map:'For you: check the list twice. Once before you pay any school. Again the week classes start. Already have your license? Check your old school once. If it was removed for cheating, better to find out now than from a future boss.', hRu:'9 985 адресов школ CDL убрали из официального списка США', dRu:'1 ноября 2026 · Реестр учебных центров FMCSA (живые счётчики): 18 338 активных центров, 31 129 точек, 9 985 точек удалено, 34 876 водителей обучено только за октябрь 2026.', mapRu:'Для вас: проверяйте список дважды. Первый раз — до того, как платить школе. Второй — в неделю начала учёбы. Права уже есть? Один раз проверьте свою школу. Если её убрали за обман, лучше узнать сейчас, а не от будущего начальника.'}
];

/* ===== Truck Driver — Russian (RU) content layer ===== */
PROF_META_RU.truckdriver = 'Водитель грузовика';

Object.assign(DOORS_RU, {
  otr:'Поработайте на дальних рейсах 12 месяцев, а потом идите дальше. Один чистый год — без штрафов и аварий. За этот год получите допуски в права. Потом переходите на городскую работу, цистерны или платформы. У вас получится!',
  regional:'Отличная новость: ваша работа — ДА! Держитесь за неё и берегите чистую историю. Следите за Радаром. Если грузовики без водителя появятся на вашем маршруте, начинайте планировать переход в ту же неделю.',
  local:'Отличная новость: ваша работа — ДА! Ещё не здесь? Для этого и нужен первый год: 12 чистых месяцев и три допуска в права. Потом подавайтесь с папкой своей чистой истории.',
  tanker:'Отличная новость: ваша работа — ДА! Держите допуски на цистерны и опасные грузы действующими, а бумаги — в идеальном порядке (здесь к ним очень строги). Куда дальше: дальние рейсы в LTL (сборные грузы, крупные перевозчики) и цистерны при заводах.',
  flatbed:'Отличная новость: ваша работа — ДА! Ваша суперсила — надёжно крепить груз. Освойте это хорошо и храните фото как доказательство. Лучшие вакансии ищут опыт с негабаритом, низкими платформами и автовозами.',
  ownerop:'Посчитайте всё до подписи: ваш грузовик, ваш кредит, ваши расходы. Осторожно с ловушкой: лизинг с выкупом у того же перевозчика, который даёт вам грузы.'
});

GRIDINFO_RU.truckdriver = {head:'Ваш короткий путь к работе водителем, которую роботы не заберут.', short:'Грузовики без водителя уже возят платные грузы в Техасе. Многие, кто заплатил за школу, растеряны. Вот что остаётся за людьми и хорошо оплачивается. Водитель грузовика возит товары на большой машине — по городу или между штатами. Это шесть разных работ. Рискованная только OTR (дальние рейсы между штатами, дома раз в 2–3 недели): там уже ездят грузовики без водителя. Городская работа, цистерны, платформы, региональные рейсы и свой грузовик — хороший выбор. У каждой свои сроки. Идите по шагам — так вы быстрее получите права и работу, которая останется.'};

DOORSTEP_RU.prof.truckdriver = {
  student:'до того как школа возьмёт ваши деньги: выберите работу на бумаге — «город», «цистерна», «платформа», а не просто «водитель грузовика». Права одни и те же. А карьеры разные.',
  early:'в этом месяце: запишите дату перехода — 12-й месяц. Водите этот год аккуратно, как на экзамене. Хорошую работу на этой карте дают за чистую историю, а не за мили.',
  mid:'на этой неделе: найдите свой маршрут на карте грузовиков без водителя в Радаре. Длинные трассы в Техасе и Аризоне уже там. Городской работы, цистерн и платформ там нет.',
  senior:'посчитайте свой опыт: дальние рейсы платят в среднем 100 000–107 000 долларов, автовозы — 70 000–120 000+ долларов. С 5+ чистыми годами вам открыта любая работа на этой карте. Выбирайте по деньгам, а не по привычке.'};
DOORSTEP_RU.seat.otr = {
  student:'до того как школа возьмёт ваши деньги: выберите работу на бумаге — напишите «город» или «цистерна», а не «водитель грузовика». Школа продаёт права. А работу выбираете вы.',
  early:'в этом месяце: запишите дату перехода — 12-й месяц. Пусть этот год станет вашим доказательством. Одна авария, которой можно было избежать, стоит дороже любого бонуса. Берегите себя!',
  mid:'на этой неделе: найдите свой маршрут на карте грузовиков без водителя (она в Радаре). Если ваш обычный маршрут уже там — переходить лучше в этом квартале, а не в этом году.',
  senior:'посчитайте, куда можно перейти, по своим цифрам. Дальние рейсы LTL (сборные грузы) платят в среднем 100 000–107 000 долларов в год. Там ищут именно ваш опыт и чистую историю.'};
DOORSTEP_RU.seat.regional = {
  student:'когда школы и вербовщики будут уговаривать, задайте один вопрос: «Кто из ваших выпускников ездит по региону и бывает дома каждую неделю?» Если все уходят только в дальние рейсы — школа готовит только к одной работе.',
  early:'в этом месяце: берегите историю. Хорошие перевозчики берут на региональные рейсы так же, как на сборные грузы (LTL). Один чистый год дороже любого бонуса, ради которого прыгают с работы на работу.',
  mid:'на этой неделе: получите один допуск в права (цистерна — самый дешёвый: один письменный тест). Это всего полдня, а подходящих вакансий станет больше.',
  senior:'раз в квартал сверяйте свой маршрут с картой грузовиков без водителя. Региональные рейсы в безопасности, пока такие грузовики ездят по длинным трассам. Проверка поможет узнать первым, если что-то изменится.'};
DOORSTEP_RU.seat.local = {
  student:'сегодня прочитайте три городские вакансии LTL (сборные грузы): FedEx Freight, XPO, Old Dominion. Везде просят одно: 1 год опыта и три допуска в права. Это и есть ваш план на школу. Всё понятно и реально!',
  early:'в этом месяце: получайте допуски по порядку. Двойные/тройные прицепы и цистерна — это письменные тесты. Проверку биографии для опасных грузов начинайте пораньше: TSA отвечает дольше всего.',
  mid:'на этой неделе: вы дома каждый день, но платят меньше, чем на сборных грузах (LTL)? Смело подавайтесь выше. Городские вакансии за 30,35–36,01 доллара в час берут людей именно с вашей работы. Приложите папку своей истории.',
  senior:'посчитайте дальние рейсы: в среднем 100 000–107 000 долларов в год. Но там ночные поездки и очередь по стажу. Ваш опыт там ценят — используйте его с умом.'};
DOORSTEP_RU.seat.tanker = {
  student:'планируйте допуски с первого дня. Цистерна (N) — один письменный тест. Для опасных грузов (H) нужна проверка биографии в TSA (85,25 доллара). Начните её за несколько недель до теста. Всё можно успеть, пока вы в школе.',
  early:'в этом месяце: подайте на проверку TSA для опасных грузов уже сейчас. Не ждите вакансии на цистерну. Вакансии с бонусом 10 000–12 000 долларов не будут ждать ваших бумаг.',
  mid:'на этой неделе: проверьте свои бумаги так, как их проверит работодатель. Срок медкарты, продление допусков, запись в Clearinghouse (база нарушений водителей). На цистернах к бумагам очень строги.',
  senior:'посмотрите на цистерны при заводах и дальние рейсы с цистернами на сборных грузах (LTL). Допуски те же, а работа стабильнее. И следите за законом: сейчас он защищает вас от беспилотников, но законы иногда меняют.'};
DOORSTEP_RU.seat.flatbed = {
  student:'честно подумайте про физическую нагрузку. Один перевозчик проверяет, может ли водитель поднять брезент весом 90 фунтов (им накрывают груз на открытой платформе). Если вам это по силам — здесь за это хорошо платят.',
  early:'в этом месяце: научитесь хорошо крепить груз — ремни, цепи, защита углов. Фотографируйте свои лучшие закреплённые грузы. Эти фото помогут получить вакансии от 0,70 доллара за милю и выше.',
  mid:'на этой неделе: добавьте одну специализацию — низкая платформа, негабарит или автовоз. Каждая поднимает оплату. Тяжёлые грузы и автовозы платят больше всех на этой карте: 70 000–120 000+ долларов.',
  senior:'посчитайте свой грузовик, пока работаете здесь. Владельцы платформ и автовозов сами договариваются с теми, кто отправляет грузы. Честно посчитайте всё в таблице (чек-лист, §13) до любого платежа за грузовик.'};
DOORSTEP_RU.seat.ownerop = {
  student:'пока не покупайте грузовик. Порядок такой: права → один чистый год водителем в компании → ваши собственные цифры. Кто продаёт вам лизинг с выкупом раньше, просто перекладывает на вас платёж за свой грузовик.',
  early:'в этом месяце: заведите файл расходов. Каждую неделю записывайте, сколько стоил бы этот грузовик, будь он ваш: топливо, страховка 298 долларов в неделю, прицеп 250–450 долларов в неделю. Через год это станет вашим бизнес-планом.',
  mid:'на этой неделе: честно посчитайте один настоящий груз. Сначала вся сумма, потом вычтите топливо, страховку, прицеп, ремонт, налоги. Если вы всё ещё получаете больше, чем в компании, — это реальный шанс. Если нет — только красивая картинка.',
  senior:'смотрите на процент, а не на общую сумму. Предложения, которые мы видели, платят 80–87% от цены груза. Платят меньше и при этом сами решают, какие грузы вам давать? Тогда риск у вас, а заработок у них.'};

Object.assign(BIGGOALS_RU, {
  otr:'Сделайте из рискованной работы трамплин: 12 чистых месяцев, нужные допуски — и вперёд! Городская работа, цистерны или дальние рейсы на сборных грузах (LTL), с чистой историей.',
  regional:'Ездите по региону, будьте дома каждую неделю и зарабатывайте как на дальних рейсах. Для этого: допуски, идеальная история и проверка маршрута раз в квартал. Тогда грузовики без водителя вас не застанут врасплох.',
  local:'Лучшее в городской работе: сборные грузы (LTL) платят 36 долларов в час, и вы дома каждую ночь. А со стажем — дальние рейсы, в среднем 100 000–107 000 долларов.',
  tanker:'Станьте водителем, которого защищает закон. Все допуски на опасные грузы, идеальные бумаги. Вам звонят первым, когда груз роботу возить запрещено.',
  flatbed:'Деньги специалиста за умелые руки: негабарит, низкая платформа или автовоз — вакансии на 70 000–120 000+ долларов. А фото ваших креплений покажут работодателю, какой вы мастер.',
  ownerop:'Настоящий маленький бизнес на колёсах: 85%+ от цены груза, все расходы известны до доллара. И связи с отправителями грузов — ваши, а не перевозчика.'
});
BIGGOAL_PROF_RU.truckdriver = 'Стать водителем из топ 1% — на работе, которую роботы не смогут забрать. Вы выбрали её сами, у вас все допуски в правах и папка чистой истории. Перевозчики сами будут звать вас к себе.';
