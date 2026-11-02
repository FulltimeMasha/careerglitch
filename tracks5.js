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
  hosops:{prof:'healthadmin', label:'Running a hospital or health system', verdict:'YES', conf:'High'},
  clinicadmin:{prof:'healthadmin', label:'Running a medical practice or clinic', verdict:'YES', conf:'Medium'},
  ltcadmin:{prof:'healthadmin', label:'Running a nursing home', verdict:'YES', conf:'High'},
  revcycle:{prof:'healthadmin', label:'Billing and insurance payments', verdict:'NO as a place to stay', conf:'Medium'}
});

Object.assign(DOORS, {
  hosops:'A degree or a year as a manager gets you in. Budget work keeps you there.',
  clinicadmin:'Show a budget you ran. Aim at big groups, not one office.',
  ltcadmin:'Get the license first. Every other step waits for it.',
  revcycle:'Run the automation, don’t just feed it. That version of this job pays $145,900–$170,200.'
});

GRIDINFO.healthadmin = {head:'Healthcare administrator is a YES. The paperwork job is a NO.', short:'“Healthcare administrator” is four different jobs. Running a hospital, a practice or a nursing home are good choices. Billing paperwork is a bad place to stay. Software is taking that work over.'};

/* ================= HEALTHCARE ADMINISTRATOR TRACK (14 steps) ================= */
TRACKS.healthadmin = [
 {name:'The gate', steps:[
  {id:'had-g1', t:'Pick your job and write it down: hospital, medical practice, nursing home, or billing. The job title alone tells you nothing.', src:'HR checklist · Part 2, item 1 — The gate', ru:'Выберите вашу работу и запишите её: больница, врачебная практика, дом престарелых или счета и страховые. Одно название профессии ничего не говорит.', sru:'Чек-лист HR · Часть 2, пункт 1 — Ворота'},
  {id:'had-g2', t:'Get the degree your job asks for. Most jobs want a bachelor’s. Fellowships and big hospital systems want a master’s (MHA, MBA or MPH).', src:'HR checklist · Part 2, item 2 — The gate', ru:'Получите нужное образование. Для большинства работ хватит бакалавра. Для fellowship (оплачиваемый год практики) и больших больничных сетей нужен магистр — MHA, MBA или MPH (программы по управлению в медицине и бизнесу).', sru:'Чек-лист HR · Часть 2, пункт 2 — Ворота'},
  {id:'had-g3', t:'Learn the money side. Read a budget and run a budget. Understand a P&L — the page that shows money in and money out.', src:'HR checklist · Part 2, item 3 — The gate', ru:'Разберитесь с деньгами. Научитесь читать и вести бюджет. Поймите P&L — отчёт, где видно, сколько денег пришло и ушло.', sru:'Чек-лист HR · Часть 2, пункт 3 — Ворота'},
  {id:'had-g4', t:'Learn one patient-records system really well. Start with Epic. 10 of 43 job posts name it — more than any other.', src:'HR checklist · Part 2, item 4 — The gate', ru:'Хорошо выучите одну программу для медицинских записей. Начните с Epic. Её называют 10 из 43 вакансий — чаще всех.', sru:'Чек-лист HR · Часть 2, пункт 4 — Ворота'},
  {id:'had-g5', t:'Learn who checks your work. Hospitals: accreditation and state rules. Nursing homes: a state license.', src:'HR checklist · Part 2, item 5 — The gate', ru:'Узнайте, кто проверяет вашу работу. Для больниц — аккредитация и правила штата. Для домов престарелых — лицензия штата (NHA licence). Без неё туда не берут.', sru:'Чек-лист HR · Часть 2, пункт 5 — Ворота'}
 ]},
 {name:'Proof', steps:[
  {id:'had-p1', t:'Run a budget, or help run one. Write down its size and what you changed.', src:'HR checklist · Part 2, item 6 — Proof', ru:'Ведите бюджет или помогайте его вести. Запишите его размер и что вы изменили.', sru:'Чек-лист HR · Часть 2, пункт 6 — Доказательства'},
  {id:'had-p2', t:'Fix one staff problem: a schedule, a gap, a hard-to-fill job. Write down the result.', src:'HR checklist · Part 2, item 7 — Proof', ru:'Решите одну проблему с персоналом: расписание, дыру в сменах, вакансию, на которую никого не найти. Запишите результат.', sru:'Чек-лист HR · Часть 2, пункт 7 — Доказательства'},
  {id:'had-p3', t:'Take charge of one automated task. For example: insurance approvals, a schedule, or rejected claims. A tool does it, you check it.', src:'HR checklist · Part 2, item 8 — Proof', ru:'Возьмите на себя одну автоматизированную задачу. Например: согласования со страховой (prior authorisation), расписание или отказы по счетам (denials). Делает программа, проверяете вы.', sru:'Чек-лист HR · Часть 2, пункт 8 — Доказательства'},
  {id:'had-p4', t:'Pass one outside check: a state inspection, an audit, an accreditation visit or an insurer review. Write down the result.', src:'HR checklist · Part 2, item 9 — Proof', ru:'Пройдите одну внешнюю проверку: инспекцию штата (survey), аудит, проверку на аккредитацию или проверку страховой. Запишите результат.', sru:'Чек-лист HR · Часть 2, пункт 9 — Доказательства'},
  {id:'had-p5', t:'Get the one paper job posts for your job ask for: FACHE, CMPE, CRCP, CRCR, or the state license. Pick by your job, not by the alphabet.', src:'HR checklist · Part 2, item 10 — Proof', ru:'Получите тот документ, который просят вакансии вашей работы: FACHE, CMPE, CRCP или CRCR (сертификаты по управлению и по счетам) — или лицензию штата. Выбирайте по своей работе.', sru:'Чек-лист HR · Часть 2, пункт 10 — Доказательства'}
 ]},
 {name:'Get picked', steps:[
  {id:'had-k1', t:'Apply by the exact job and budget size, not the general title. The same title pays $50,000 in one job post and $160,000 in another.', src:'HR checklist · Part 2, item 11 — Get picked', ru:'Откликайтесь по конкретной работе и размеру бюджета, а не по общему названию. С одним и тем же названием платят $50 000 в одной вакансии и $160 000 в другой.', sru:'Чек-лист HR · Часть 2, пункт 11 — Выбор'},
  {id:'had-k2', t:'Start every application with a number. The budget you ran. The staff you led. The rejected claims or payment wait time you cut.', src:'HR checklist · Part 2, item 12 — Get picked', ru:'Начинайте каждый отклик с цифры. Бюджет, который вы вели. Люди, которыми руководили. Насколько снизили отказы страховых (denial rate) или ожидание оплаты (days in A/R).', sru:'Чек-лист HR · Часть 2, пункт 12 — Выбор'},
  {id:'had-k3', t:'For hospital jobs, apply to admin fellowships while they’re open. Spots are few. Every fellowship asks for a master’s.', src:'HR checklist · Part 2, item 13 — Get picked', ru:'Для работы в больнице подавайтесь на fellowship (оплачиваемая практика для управленцев), пока набор открыт. Мест мало. Везде нужен магистр.', sru:'Чек-лист HR · Часть 2, пункт 13 — Выбор'},
  {id:'had-k4', t:'Check your plan every quarter. Are practices near you being bought up? Any new automation tools? Did your state’s license rules change?', src:'HR checklist · Part 2, item 14 — Get picked', ru:'Проверяйте план раз в квартал. Скупают ли практики рядом с вами? Есть ли новые программы автоматизации? Изменились ли правила лицензий в штате?', sru:'Чек-лист HR · Часть 2, пункт 14 — Выбор'}
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
  {h:'The government says this job grows +24.2% — but that’s one average of four jobs', d:'BLS forecast for 2025–35: median pay $123,860, +155,100 new jobs, about 62,300 openings a year. Hospitals already pay a $133,580 median. Doctors’ offices pay $105,770.', map:'Look at growth for your exact job, not the title. Your job decides your future.', hRu:'Государство говорит, что профессия вырастет на +24,2%. Но это среднее по четырём разным работам', dRu:'Прогноз BLS на 2025–35 годы: средняя зарплата $123 860, +155 100 новых рабочих мест, около 62 300 вакансий в год. Больницы уже платят в среднем $133 580. Врачебные офисы — $105 770.', mapRu:'Смотрите рост по своей работе, а не по названию. Именно работа решает, какое будущее вас ждёт.'},
  {h:'Big companies bought 8,000+ doctors’ practices since 2024', d:'PAI / Avalere, via Becker’s: hospitals and corporate entities employ 82% of physicians; 13,900 practices changed hands in 2024–25. Only 42.2% of physicians remained in private practice in 2024 (AMA).', map:'Your future boss in a practice is now a big company. Show you can run budgets for several clinics.', hRu:'Большие компании купили больше 8 000 врачебных практик с 2024 года', dRu:'PAI / Avalere, по данным Becker’s: 82% врачей работают на больницы и компании. В 2024–25 годах у 13 900 практик сменился владелец. В частной практике в 2024 году осталось только 42,2% врачей (AMA).', mapRu:'Практики теперь принадлежат большим компаниям. Показывайте, что умеете вести бюджеты нескольких клиник сразу.'},
  {h:'A hospital is hiring a manager to automate its billing office', d:'UChicago Medicine’s live posting: Manager, Revenue Cycle Automation and Analytics, $145,900–$170,200 — "reporting, data engineering, and process automation" for hospital billing.', map:'Billing jobs now have two pay ranges. Routine work pays $100,000–$120,000. Running the automation pays $145,900–$170,200. The way in is written in the NO job’s own job posts.', hRu:'Больница ищет менеджера, который автоматизирует отдел счетов', dRu:'Открытая вакансия UChicago Medicine: менеджер по автоматизации и аналитике счетов, $145 900–$170 200. Задачи: «отчёты, работа с данными и автоматизация процессов» для больничных счетов.', mapRu:'В работе со счетами теперь две зарплаты. Рутина — $100 000–$120 000. Управление автоматизацией — $145 900–$170 200. Путь наверх написан прямо в вакансиях работы со знаком NO.'},
  {h:'The records software company sells back-office work as the thing to automate', d:'Epic’s own page: "Automate back-office work so that billing staff can focus on complex, high-dollar accounts." 10 of 43 job posts we checked name Epic.', map:'The tool’s maker says your daily tasks will be automated. Believe them. Budgets, staff and inspectors are not in their sales pitch.', hRu:'Компания, которая делает программу для записей, предлагает автоматизировать бэк-офис (работу с бумагами)', dRu:'Страница самой Epic: «Автоматизируйте работу бэк-офиса, чтобы сотрудники по счетам занимались сложными, дорогими случаями». Epic называют 10 из 43 вакансий, которые мы проверили.', mapRu:'Производитель программы говорит, что ваши ежедневные задачи автоматизируют. Верьте ему. А бюджеты, персонал и проверки он не продаёт.'},
  {h:'Fellowships for 2026–2027 are open. Few spots, master’s only', d:'Five fellowship job posts we checked: NorthBay, Atlantic Health, Ohio State’s James, UNC Rex, Lee Health. Lee Health takes two people a year. Applications close 29 January 2027. All five ask for a master’s degree.', map:'For hospital jobs, the calendar is the way in. If you want a fellowship, the application date is your plan.', hRu:'Набор на fellowship 2026–2027 открыт. Мест мало, только для магистров', dRu:'Пять вакансий fellowship, которые мы проверили: NorthBay, Atlantic Health, Ohio State’s James, UNC Rex, Lee Health. Lee Health берёт двух человек в год. Приём заявок до 29 января 2027 года. Все пять просят магистра.', mapRu:'В больницу входят по календарю. Если вам нужен fellowship, дата подачи заявки — это и есть план.'},
  {h:'Nursing homes still require a license — 8 of 8 job posts, at least $90,000', d:'Every nursing home job post we checked asks for a state nursing home administrator licence. Plus 2–4 years as a licensed administrator. Pay: $90,000–$150,000. BLS: all states require the licence.', map:'This is the safest job here. The law protects it, not trends. Forecast F-HA2 watches this rule.', hRu:'Дома престарелых по-прежнему требуют лицензию — 8 из 8 вакансий, минимум $90 000', dRu:'Каждая вакансия в доме престарелых, которую мы проверили, требует лицензию штата и 2–4 года работы администратором с лицензией. Зарплата: $90 000–$150 000. BLS: лицензию требуют все штаты.', mapRu:'Это самая защищённая работа здесь. Её защищает закон, а не мода. Прогноз F-HA2 следит именно за этим.'}
];

/* ===== Russian (RU) content layer — twins of the blocks above ===== */
PROF_META_RU.healthadmin = 'Администратор здравоохранения';

Object.assign(DOORS_RU, {
  hosops:'Диплом или год работы руководителем помогут войти. Работа с бюджетом поможет остаться.',
  clinicadmin:'Покажите бюджет, который вы вели. Цельтесь в большие группы клиник, а не в один офис.',
  ltcadmin:'Сначала получите лицензию. Всё остальное — после неё.',
  revcycle:'Управляйте автоматизацией, а не обслуживайте её. За это платят $145 900–$170 200.'
});

GRIDINFO_RU.healthadmin = {head:'Администратор здравоохранения — это ДА. Работа с бумагами — это НЕТ.', short:'«Администратор здравоохранения» — это четыре разные работы. Управлять больницей, практикой или домом престарелых — хороший выбор. Счета и бумаги — плохое место, чтобы остаться. Эту работу забирают программы.'};

/* Personalized door steps — RU twins (stored WITHOUT the prefix,
   the app adds its own framing — doorsru.js pattern). */
DOORSTEP_RU.prof.healthadmin = {
  student:'Сначала выберите работу, потом учёбу. Для fellowship (оплачиваемый год практики в больничной сети) нужен магистр — MHA, MBA или MPH (управление в медицине, бизнес, общественное здоровье) из аккредитованной программы. Для практик и домов престарелых магистр не нужен.',
  early:'Называйте вашу работу в каждом отклике. Один бюджет, который вы помогали вести, лучше трёх лет «опыта в медицине» без цифр.',
  mid:'Соберите то, за что платят на вашей работе: бюджет под вашим именем, решённую проблему с персоналом, одну пройденную проверку. Потом получите нужный документ — FACHE, CMPE или лицензию штата.',
  senior:'Ведите больше одной клиники или управляйте автоматизацией во всех. Рост здесь — это масштаб: больше бюджеты, больше зданий. Одна лицензия, никакой рутины.'};
DOORSTEP_RU.seat.hosops = {
  student:'Подавайтесь на fellowship (оплачиваемая практика в больничной сети) на последнем курсе магистратуры. Мест мало, всё решают сроки. Одна сеть, которую мы смотрели, берёт двух человек в год.',
  early:'Если fellowship закрыт, идите в клиники. Туда берут администраторов с одним годом руководящего опыта в любой сфере.',
  mid:'Отвечайте за часть бюджета и решите проблему с персоналом в больнице. Этого хватает для повышения.',
  senior:'Переходите от одного здания к нескольким. Одни правила бюджета, везде готовность к проверкам.'};
DOORSTEP_RU.seat.clinicadmin = {
  student:'Сначала поймите, как практика зарабатывает: расписание, счета, оплаты. Программы — потом. Здесь смотрят на опыт в практиках, а не на дипломы.',
  early:'Ведите ежедневные деньги одной практики: поток пациентов, счета, приём. Записывайте цифры, которые вы улучшили.',
  mid:'Получите CMPE (сертификат по управлению медицинской практикой) — его просят в вакансиях. Отвечайте за P&L (отчёт о доходах и расходах): все счета, оплаты, работу со страховыми. За это платят $120 000–$160 000.',
  senior:'Ведите несколько клиник для группы или большой компании. Владельцы объединились. Хорошие администраторы теперь ведут сразу много клиник.'};
DOORSTEP_RU.seat.ltcadmin = {
  student:'Начните с совета вашего штата: программа Administrator-in-Training (стажировка администратора) и экзамены. Здесь без лицензии ничего не начнётся.',
  early:'Работайте под началом администратора с лицензией. Узнайте, как штат проводит проверки. Первые два года — это учёба на лицензию.',
  mid:'Ведите своё здание: персонал, бюджет, семьи жильцов и проверки штата. За всё отвечаете вы.',
  senior:'Ведите здание, где и проверки проходят хорошо, и бюджет в порядке. Именно за это платят $130 000–$150 000.'};
DOORSTEP_RU.seat.revcycle = {
  student:'Не платите за магистратуру ради рутинной работы со счетами. Сначала изнутри поймите, как идут деньги: счета, отказы, ожидание оплаты (days in A/R).',
  early:'Берите задачи по автоматизации, которую работодатель уже покупает: программу для отказов, отчёты, запуск нового инструмента. Станьте тем, кто этим управляет.',
  mid:'Отвечайте за одну автоматизированную задачу целиком и покажите цифры: отказов меньше, оплата приходит быстрее. Это прямо описание вакансии за $145 900–$170 200.',
  senior:'Управляйте выручкой или автоматизацией в нескольких клиниках. Рутина, которую вы делали руками, теперь — система под вашим управлением.'};

Object.assign(BIGGOALS_RU, {
  hosops:'Управлять больницей или больничной сетью: её бюджетом, зданиями и персоналом. По данным BLS, средняя зарплата — $133 580.',
  clinicadmin:'Вести деньги практики как владелец: P&L (отчёт о доходах и расходах) одной клиники, потом нескольких. За это платят $120 000–$160 000.',
  ltcadmin:'Иметь лицензию и вести здание, где и проверки, и бюджет в порядке. За это платят $130 000–$150 000.',
  revcycle:'Управлять автоматизацией денег — отказами, проверкой страховки, согласованиями, — а не сидеть на рутине. За это платят $145 900–$170 200.'
});
BIGGOAL_PROF_RU.healthadmin = 'Стать администратором, которого зовут, когда под угрозой здание, бюджет или лицензия. В одной из трёх растущих работ.';

/* ================= DATA SCIENTIST =================
   Source: ~/workspace/pathcheck-datascientist-pilot/ (42 postings).
   Cluster: DATA SCIENTIST IS A YES. THE EASY WAY IN IS A NO.
   Sibling of dataanalyst — cross-notes run both ways (below). */
PROF_META.datascientist = {name:'Data Scientist', kick:'Data Scientist', code:'VECTOR', count:'42', srcWhat:'real data scientist job posts we opened', srcWhatRu:'настоящих вакансий data scientist, которые мы открыли'};

Object.assign(SEATINFO, {
  prodds:{prof:'datascientist', label:'Product data scientist', verdict:'YES', conf:'High'},
  coreds:{prof:'datascientist', label:'General data scientist', verdict:'YES', conf:'Medium'},
  mlds:{prof:'datascientist', label:'AI / ML data scientist', verdict:'YES', conf:'Medium'},
  ressci:{prof:'datascientist', label:'Research scientist', verdict:'NO as a plan', conf:'Medium'}
});

Object.assign(DOORS, {
  prodds:'What to do: your job is a YES if you can design a test and defend the result. Get deeper into experiments. Learn to prove what caused what. The Full Report gives the order: statistics → experiments → a set of metrics.',
  coreds:'What to do: your job is a YES if your proof is a model you shipped. A pile of certificates doesn’t count. The Full Report puts the proof in the order employers check it.',
  mlds:'What to do: your job is a YES if you shipped one AI project. And you can show how you checked its answers. The Full Report shows the order.',
  ressci:'What to do instead: keep the research dream, but change the order. Take a product or ML job first. Publish from there if you can. Let a research team come to you.'
});

GRIDINFO.datascientist = {head:'Data scientist is a YES. The easy way in is a NO.', short:'“Data scientist” is four different jobs. Product, general and AI data science are good choices. They pay $130K–$380,000. Research is only 5 of 42 job posts, and needs a PhD. Data analyst is a different job, with its own check.'};

TRACKS.datascientist = [
 {name:'The gate', steps:[
  {id:'dsc-g1', t:'Get Python and SQL to working level. Python is the main coding language here. SQL is how you pull data from a database. 31 of 42 job posts we opened name Python. 23 of 42 name SQL. Working level means: you clean messy data and answer a real question with both. Without help.', src:'HR checklist · Part 6, item 1 — The gate', ru:'Доведите Python и SQL до рабочего уровня. Python — главный язык программирования в этой работе. SQL — язык, чтобы доставать данные из базы. Python просят в 31 из 42 вакансий, которые мы открыли. SQL — в 23 из 42. Рабочий уровень — это когда вы сами чистите грязные данные и отвечаете ими на настоящий вопрос. Без помощи.', sru:'HR-чек-лист · Часть 6, пункт 1 — Ворота'},
  {id:'dsc-g2', t:'Learn statistics well enough to explain your answers. Learn probability and inference — guessing about a big group from a small sample. Know what a p-value doesn’t tell you. A p-value shows how surprising a result is if nothing real is going on. Every job checks statistics. Product jobs depend on it.', src:'HR checklist · Part 6, item 2 — The gate', ru:'Выучите статистику так, чтобы уметь объяснить свои выводы. Нужны вероятность и выводы о большой группе по маленькой выборке. Знайте, чего не говорит p-value. P-value показывает, насколько странный результат, если на самом деле ничего не происходит. Статистику проверяют везде. Работа в product на ней держится.', sru:'HR-чек-лист · Часть 6, пункт 2 — Ворота'},
  {id:'dsc-g3', t:'Pick your job on purpose: product, core, ML or research. The four pay $65,064 to $400,000. Each asks for different degrees. Write down which one your degree and years fit today.', src:'HR checklist · Part 6, item 3 — The gate', ru:'Выберите работу осознанно: product, core, ML или research. Платят от $65,064 до $400,000. Везде просят разные дипломы. Запишите, какая подходит под ваш диплом и опыт сегодня.', sru:'HR-чек-лист · Часть 6, пункт 3 — Ворота'},
  {id:'dsc-g4', t:'Be honest about degrees. 16 of 42 job posts we opened require or prefer a master’s or PhD. If your job asks for one, plan for it. If not, don’t buy one hoping it replaces real work.', src:'HR checklist · Part 6, item 4 — The gate', ru:'Честно проверьте, нужен ли диплом. В 16 из 42 вакансий, которые мы открыли, магистратура или PhD обязательны или желательны. Если вашей работе он нужен — планируйте. Если нет — не покупайте его вместо настоящих проектов.', sru:'HR-чек-лист · Часть 6, пункт 4 — Ворота'}
 ]},
 {name:'Proof', steps:[
  {id:'dsc-p1', t:'Ship one model from start to finish. A real question, messy data, a model you trained, tested and explained. 33 of 42 job posts mention model work. One finished model proves you can do it.', src:'HR checklist · Part 6, item 5 — Proof', ru:'Сделайте одну модель от начала до конца. Настоящий вопрос, грязные данные, модель, которую вы обучили, проверили и объяснили. Работу с моделями упоминают 33 из 42 вакансий. Одна готовая модель — доказательство, что вы умеете.', sru:'HR-чек-лист · Часть 6, пункт 5 — Доказательства'},
  {id:'dsc-p2', t:'Run one experiment or cause-and-effect study from start to finish. An A/B test compares version A and version B. A cause-and-effect study proves one thing caused another. 10 of 12 product job posts mention experiments.', src:'HR checklist · Part 6, item 6 — Proof', ru:'Проведите один эксперимент или исследование причин от начала до конца. A/B-тест сравнивает версию A и версию B. Исследование причин доказывает, что одно вызвало другое. Эксперименты упоминают 10 из 12 вакансий product.', sru:'HR-чек-лист · Часть 6, пункт 6 — Доказательства'},
  {id:'dsc-p3', t:'Build one thing with a large language model and track how well it works. A large language model is the AI behind chatbots. Write down how you checked its answers. 17 of 42 job posts mention AI work. The checking is the skill, not the demo.', src:'HR checklist · Part 6, item 7 — Proof', ru:'Сделайте одну вещь на большой языковой модели и следите, насколько хорошо она работает. Большая языковая модель — это AI внутри чат-ботов. Запишите, как вы проверяли её ответы. Работу с AI упоминают 17 из 42 вакансий. Ценится проверка, а не демо.', sru:'HR-чек-лист · Часть 6, пункт 7 — Доказательства'},
  {id:'dsc-p4', t:'Build a portfolio a stranger can read in five minutes. Three projects. Each one shows: the question, the data, your choice, the result. Research jobs ask for papers and a public portfolio. Other jobs ask for finished work.', src:'HR checklist · Part 6, item 8 — Proof', ru:'Соберите портфолио, которое чужой человек прочтёт за пять минут. Три проекта. В каждом: вопрос, данные, ваше решение, результат. Для research просят статьи и открытое портфолио. Для остальных работ — готовые проекты.', sru:'HR-чек-лист · Часть 6, пункт 8 — Доказательства'},
  {id:'dsc-p5', t:'Build one dashboard that ends with a decision. 12 of 42 job posts mention dashboards — as a task, not the job. Yours must end with “so we did X.” Without a decision, it looks like an analyst’s work.', src:'HR checklist · Part 6, item 9 — Proof', ru:'Сделайте один дашборд, который заканчивается решением. Дашборды упоминают 12 из 42 вакансий — как задачу, а не как всю работу. Ваш должен заканчиваться словами «и поэтому мы сделали X». Без решения это выглядит как работа аналитика.', sru:'HR-чек-лист · Часть 6, пункт 9 — Доказательства'},
  {id:'dsc-p6', t:'Clean one messy, real dataset in public. Not a practice dataset. Job posts ask for real data: incomplete, noisy, very unbalanced. Unbalanced means one kind of example is much rarer than the rest. Your cleaning notes are the proof.', src:'HR checklist · Part 6, item 10 — Proof', ru:'Почистите один настоящий грязный набор данных у всех на виду. Не учебный. Вакансии просят опыт с настоящими данными: неполными, с шумом, сильно несбалансированными. Несбалансированные — это когда одних примеров намного меньше, чем других. Ваши заметки о чистке — доказательство.', sru:'HR-чек-лист · Часть 6, пункт 10 — Доказательства'}
 ]},
 {name:'Get picked', steps:[
  {id:'dsc-k1', t:'Apply to exact job titles. Product data scientist. ML data scientist. Plain “data scientist” jobs are where everyone with a master’s plus two years lines up.', src:'HR checklist · Part 6, item 11 — Get picked', ru:'Откликайтесь на точные названия. Product data scientist. ML data scientist. На просто «data scientist» стоит очередь из людей с магистратурой и двумя годами опыта.', sru:'HR-чек-лист · Часть 6, пункт 11 — Выбор тебя'},
  {id:'dsc-k2', t:'Show how you work with AI. One analysis where AI wrote a draft and you checked it. Show the checking, not just the draft. One job post we saw asks for exactly this: analysis with AI “as a collaborator.”', src:'HR checklist · Part 6, item 12 — Get picked', ru:'Покажите, как вы работаете с AI. Один анализ, где AI сделал черновик, а вы его проверили. Покажите проверку, а не только черновик. Одна вакансия, которую мы видели, просит именно это: анализ с AI «как с соавтором».', sru:'HR-чек-лист · Часть 6, пункт 12 — Выбор тебя'},
  {id:'dsc-k3', t:'Know your price from real job posts. Senior product jobs pay $180K–$380K. ML pays $130K–$285K. Core pays $88K–$250K. Research staff pays $320K–$400K. If your job’s pay doesn’t grow, the job is the problem. Not your negotiating.', src:'HR checklist · Part 6, item 13 — Get picked', ru:'Узнайте свою цену по настоящим вакансиям. Senior в product получают $180K–$380K. ML — $130K–$285K. Core — $88K–$250K. Research staff — $320K–$400K. Если на вашей работе зарплата не растёт, проблема в работе. А не в том, как вы торгуетесь.', sru:'HR-чек-лист · Часть 6, пункт 13 — Выбор тебя'},
  {id:'dsc-k4', t:'Go through this checklist every quarter with fresh job posts. AI work is now in 17 of 42 job posts we saw, and growing. What employers check changes that fast.', src:'HR checklist · Part 6, item 14 — Get picked', ru:'Проходите этот чек-лист раз в квартал по свежим вакансиям. Работу с AI сейчас просят в 17 из 42 вакансий, которые мы видели, и их всё больше. Требования меняются так же быстро.', sru:'HR-чек-лист · Часть 6, пункт 14 — Выбор тебя'}
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
 {h:'The newest job posts say “AI-native” in writing', d:'Anthropic’s growth data scientist job post (read 1 Nov 2026) says the analysis is done with AI as a helper. In the job posts we checked, 17 of 42 mention AI work.', map:'Affects steps dsc-p3 and dsc-k2: do one AI project and show how you work.', hRu:'В новых вакансиях прямо пишут «AI-native»', dRu:'Вакансия data scientist по росту в Anthropic (прочитана 1 ноября 2026): анализ там делают вместе с AI. В вакансиях, которые мы проверили, работу с AI упоминают 17 из 42.', mapRu:'Влияет на шаги dsc-p3 и dsc-k2: сделайте один AI-проект и покажите, как работаете.'},
 {h:'The degree check is the real barrier', d:'16 of 42 job posts require or prefer a master’s or a PhD. Even the job for new grads at $140K–$150K asks for one.', map:'Affects step dsc-g4: check if you need a degree before you pay for anything.', hRu:'Проверка диплома — главный барьер', dRu:'В 16 из 42 вакансий магистратура или PhD обязательны или желательны. Даже работа для выпускников за $140K–$150K требует магистратуру или PhD.', mapRu:'Влияет на шаг dsc-g4: узнайте, нужен ли диплом, до того как за что-то платить.'},
 {h:'Beginner jobs are missing from the job posts', d:'Only five of 42 job posts take people with 0–1 years. Stanford’s August 2026 update: workers aged 22–25 in jobs most affected by AI are about 19% below trend. The reason is less hiring.', map:'Affects step dsc-k1: apply to exact job titles, and build your proof first.', hRu:'Вакансий для новичков (junior) почти нет', dRu:'Только пять из 42 вакансий берут людей с опытом 0–1 год. Данные Stanford за август 2026: работников 22–25 лет в профессиях, которые сильнее всего задел AI, примерно на 19% меньше обычного. Причина — меньше берут на работу.', mapRu:'Влияет на шаг dsc-k1: откликайтесь на точные названия и сначала сделайте проекты-доказательства.'},
 {h:'Offices in cheaper countries hire for this job at 6 years of experience, not zero', d:'ANSR, 24 Sept 2026: big company offices in India hire about 45% more AI and data people than a year ago. The typical new hire has 6 years of experience.', map:'Filter 3: real work matters more than certificates.', hRu:'Офисы в дешёвых странах берут на эту работу с 6 годами опыта, а не с нуля', dRu:'ANSR, 24 сентября 2026: офисы больших компаний в Индии нанимают AI- и data-специалистов примерно на 45% больше, чем год назад. У типичного нового сотрудника 6 лет опыта.', mapRu:'Фильтр 3: настоящие проекты важнее сертификатов.'},
 {h:'Job post of the week: how high product jobs pay', d:'Anthropic pays a growth data scientist $285,000–$380,000 — 7+ years, experiments and cause-and-effect analysis. A fintech product job pays $250,000–$300,000 at 2–3+ years.', map:'The money part — and step dsc-p2: one experiment from start to finish.', hRu:'Вакансия недели: сколько максимум платят в product', dRu:'Anthropic платит data scientist по росту $285,000–$380,000 — нужно 7+ лет, эксперименты и анализ причин. Работа в product в финтехе платит $250,000–$300,000 при 2–3+ годах опыта.', mapRu:'Про деньги — и шаг dsc-p2: один эксперимент от начала до конца.'},
 {h:'Government numbers still show growth', d:'BLS forecast, released 27 Aug 2026: data scientist jobs grow +34.6%, with 95,400 new jobs and a $120,230 median. The field grows, but getting in gets harder. Both are true.', map:'This is the main verdict.', hRu:'Государственная статистика всё ещё показывает рост', dRu:'Прогноз BLS от 27 августа 2026: работ data scientist станет больше на +34.6%, это 95,400 новых мест, средняя зарплата $120,230. Профессия растёт, но войти в неё всё труднее. И то и другое правда.', mapRu:'Это и есть главный вердикт.'}
];

/* ===== Data Scientist — Russian (RU) content layer ===== */
PROF_META_RU.datascientist = 'Дата-сайентист';

Object.assign(DOORS_RU, {
  prodds:'Что делать: ваша работа — ДА, если вы умеете придумать тест и защитить вывод. Глубже изучайте эксперименты и поиск причин. Полный отчёт даёт порядок: статистика, потом эксперименты, потом набор метрик.',
  coreds:'Что делать: ваша работа — ДА, если вы можете показать готовую модель, а не пачку сертификатов. Полный отчёт выстроит доказательства в том порядке, в каком их проверяют работодатели.',
  mlds:'Что делать: ваша работа — ДА, если вы сделали один AI-проект и можете показать, как проверяли его ответы. Полный отчёт покажет порядок.',
  ressci:'Что делать вместо этого: оставьте мечту о research, но поменяйте порядок. Сначала возьмите работу в product или ML. Публикуйтесь оттуда, если можно. Пусть команда research сама вас позовёт.'
});

GRIDINFO_RU.datascientist = {head:'Data scientist — это ДА. Лёгкий путь в профессию — это НЕТ.', short:'«Data scientist» — это четыре разные работы. Product, generalist и data science с AI — хороший выбор, платят $130K–$380,000. Research — 5 из 42 вакансий, и нужен PhD. Data analyst — другая профессия, у неё своя проверка. Там смотрят на инструменты: SQL просят в 24 из 24 вакансий. Здесь смотрят на дипломы, опыт и модели. Переход между ними — статистика, Python и одна готовая модель. Это переход, а не повышение. Общая ловушка у обеих: отчёты по запросу. Их теперь черновит AI. Общее у них только SQL и Python. Проверки, зарплаты и вход — разные.'};

DOORSTEP_RU.prof.datascientist = {
  student:'Выберите работу до того, как решите с дипломом. Магистратура обязательна или желательна в 16 из 42 вакансий. Поэтому посмотрите вакансии вашей работы до того, как платить за учёбу.',
  early:'Сделайте одну модель от начала до конца и опишите её. Новичков берут только 5 из 42 вакансий. Там смотрят на проекты, а не на список курсов.',
  mid:'Сделайте один эксперимент или один готовый AI-проект целиком. Именно это проверяют вакансии за $250K+.',
  senior:'Ваша цена — в решениях и готовых моделях, а не в годах. В product платят $285K–$380K тем, чьи решения изменили продукт.'};
DOORSTEP_RU.seat.prodds = {
  student:'Учите статистику так, будто это и есть работа. Эксперименты просят в 10 из 12 вакансий product.',
  early:'Проведите один A/B-тест от начала до конца, пусть маленький: придумать, прочитать результат, решить. Это как пройти собеседование заранее.',
  mid:'Отвечайте за метрику и решение. В product платят за советы, которые изменили продукт.',
  senior:'Ваша цена — в решениях, а не в отчётах. Anthropic платит $285K–$380K за такое умение решать.'};
DOORSTEP_RU.seat.coreds = {
  student:'Сначала Python и SQL, диплом — потом. Python просят в 31 из 42 вакансий.',
  early:'Сделайте одну модель на настоящих грязных данных и опишите свои решения. Это поможет обойти очередь людей с магистратурой.',
  mid:'Выберите направление — product или ML. Если остаться «на всё руки», зарплата может упасть (есть вакансии и за $65,064).',
  senior:'Ваша цена — готовые модели и знание своей области. Senior в core получают до $250,000 именно за это.'};
DOORSTEP_RU.seat.mlds = {
  student:'Сделайте одну вещь на большой языковой модели и запишите, как проверяли её ответы. Именно умение проверять здесь и ценят.',
  early:'Запустите один AI-проект в работу, пусть маленький. 6 из 7 вакансий здесь просят опыт с AI. Демо — это не то же самое.',
  mid:'Отвечайте за проверку: как команда понимает, что ответы AI хорошие. Это и есть уровень senior.',
  senior:'Ваша цена — AI-системы, которые вы запустили и проверили. Здесь платят до $285,000.'};
DOORSTEP_RU.seat.ressci = {
  student:'Если PhD — правда ваш план, выбирайте лабораторию и тему по статьям, которые хотите писать. Все 5 вакансий research просят публикации.',
  early:'Публикуйтесь с того места, где вы сейчас. Статья на воркшопе или открытое портфолио лучше лишнего года учёбы.',
  mid:'Если у вас есть статьи, подавайтесь — для вас это ДА. Если нет, product и ML платят $250K–$380K и без них.',
  senior:'Ваша цена — ваши публикации. Research на уровне staff платит за них $320K–$400K.'};

Object.assign(BIGGOALS_RU, {
  prodds:'Большая цель: product data scientist, который решает, что выпускать. За проверенные решения платят $250K–$380K.',
  coreds:'Большая цель: data scientist с готовой моделью и понятной специальностью. Senior в core получают до $250,000.',
  mlds:'Большая цель: ML data scientist, который запускает AI и доказывает, что его ответы хорошие. Платят до $285,000.',
  ressci:'Большая цель: research, но сначала через оплачиваемую работу. Публикуйтесь из product или ML. Пусть команды research за $320K–$400K сами вас позовут.'
});
BIGGOAL_PROF_RU.datascientist = 'Большая цель: работа, которую вы выбрали сами, — product, ML или core со специальностью. Платят $180K–$380K. Туда ведут модели и эксперименты, а не новые сертификаты.';

/* ===== Cross-notes onto the dataanalyst side (spec §12.2, app layer).
   tracks5.js loads after tracks3.js, so these mutations land on the
   analyst package's own objects without editing its file. ===== */
if (typeof GRIDINFO !== 'undefined' && GRIDINFO.dataanalyst) {
  GRIDINFO.dataanalyst.short += ' Data scientist now has its own full check (VECTOR): 42 job posts, four jobs, and a degree check this map doesn’t have. The dsgate job on this map is the way in. The full map is on the other side.';
}
if (typeof GRIDINFO_RU !== 'undefined' && GRIDINFO_RU.dataanalyst) {
  GRIDINFO_RU.dataanalyst.short += ' У data scientist теперь своя полная проверка (VECTOR): 42 вакансии, четыре работы и проверка диплома, которой нет на этой карте. Магистратура или PhD обязательны или желательны в 16 из 42 вакансий. Работа dsgate выше — это вход. Полная карта — за ним.';
}
if (typeof DOORS !== 'undefined') DOORS.dsgate = 'What to do: there is now a full check for this job — text VECTOR. Short version: statistics, Python and one model you shipped. A master’s really matters there (16 of 42 job posts). It’s not a rumor.';
if (typeof DOORS_RU !== 'undefined') DOORS_RU.dsgate = 'Что делать: для этой работы теперь есть полная проверка — напишите VECTOR. Коротко: статистика, Python и одна готовая модель. Магистратура там правда важна (16 из 42 вакансий), это не слух.';

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
  otr:'Do long-haul for 12 months, then leave. Get one clean year. Add the license add-ons during it. Then move to local, tanker or flatbed work on this map.',
  regional:'Your job is a YES. Keep it and keep your record clean. Watch the Radar. If driverless trucks ever start on your exact route, start planning your move that week.',
  local:'Your job is a YES. Not here yet? This is what your first year is for. 12 clean months and the three license add-ons. Then apply with your record in hand.',
  tanker:'Your job is a YES. Keep your tanker and hazmat add-ons up to date. Keep your record perfect — this job fires people over paperwork. Next steps from here: LTL long routes and tanker work at plants.',
  flatbed:'Your job is a YES. Your best protection is tying down loads well. Master it and keep proof. The top job posts want oversize, step-deck and car-haul experience.',
  ownerop:'Do the math before you sign anything: your truck, your loan, your numbers. The trap: a lease-to-own deal with the same company that controls your loads.'
});

GRIDINFO.truckdriver = {head:'Truck driver is a YES. Long-haul is a NO.', short:'"Truck driver" is six different jobs. Long-haul OTR is at risk — driverless trucks already drive its routes. Local, tanker, flatbed, regional and owner-operator work are good bets. Each has its own timeline.'};

TRACKS.truckdriver = [
 {name:'The gate', steps:[
  {id:'trk-g1', t:'Pick your job on paper before any school takes your money', src:'HR checklist · Part 1, item 1 — The gate', ru:'Выберите работу на бумаге, до того как школа возьмёт ваши деньги', sru:'HR-чек-лист · Часть 1, пункт 1 — Ворота'},
  {id:'trk-g2', t:'Check the school on the federal registry before you pay', src:'HR checklist · Part 1, item 2 — The gate', ru:'Проверьте школу в федеральном реестре, до того как платить', sru:'HR-чек-лист · Часть 1, пункт 2 — Ворота'},
  {id:'trk-g3', t:'Get your DOT medical card and check your own record (Clearinghouse + MVR)', src:'HR checklist · Part 1, item 3 — The gate', ru:'Получите медкарту DOT и проверьте свою историю (Clearinghouse — база нарушений, MVR — выписка о вождении)', sru:'HR-чек-лист · Часть 1, пункт 3 — Ворота'},
  {id:'trk-g4', t:'Get the Class A CDL the official way: learner’s permit, school from the registry, 3-part driving test', src:'HR checklist · Part 1, item 4 — The gate', ru:'Получите CDL класса A по правилам: ученическое разрешение, школа из реестра, экзамен из 3 частей', sru:'HR-чек-лист · Часть 1, пункт 4 — Ворота'},
  {id:'trk-g5', t:'Decide how you pay for school before you sign anything', src:'HR checklist · Part 1, item 5 — The gate', ru:'Решите, как вы платите за школу, до того как что-то подписывать', sru:'HR-чек-лист · Часть 1, пункт 5 — Ворота'}
 ]},
 {name:'Proof', steps:[
  {id:'trk-p1', t:'Treat your first job as 12 months of experience, not a place to stay', src:'HR checklist · Part 2, item 6 — Proof', ru:'Первая работа — это 12 месяцев опыта, а не место навсегда', sru:'HR-чек-лист · Часть 2, пункт 6 — Доказательства'},
  {id:'trk-p2', t:'Get license add-ons in order: tanker and doubles first, hazmat next', src:'HR checklist · Part 2, item 7 — Proof', ru:'Получайте допуски в права по порядку: сначала цистерна и двойные прицепы, потом опасные грузы', sru:'HR-чек-лист · Часть 2, пункт 7 — Доказательства'},
  {id:'trk-p3', t:'Get the TWIC card if your loads go to ports, plants or rail yards', src:'HR checklist · Part 2, item 8 — Proof', ru:'Получите карту TWIC, если ваши грузы идут в порты, на заводы или железную дорогу', sru:'HR-чек-лист · Часть 2, пункт 8 — Доказательства'},
  {id:'trk-p4', t:'Start a folder for your clean record and keep every clean inspection', src:'HR checklist · Part 2, item 9 — Proof', ru:'Заведите папку с чистой историей и храните каждую чистую проверку', sru:'HR-чек-лист · Часть 2, пункт 9 — Доказательства'},
  {id:'trk-p5', t:'Master one hands-on cargo skill — a robot can’t do it', src:'HR checklist · Part 2, item 10 — Proof', ru:'Освойте один ручной навык с грузом — робот так не умеет', sru:'HR-чек-лист · Часть 2, пункт 10 — Доказательства'}
 ]},
 {name:'Get picked', steps:[
  {id:'trk-k1', t:'At month 12–24, switch jobs with your record folder in hand', src:'HR checklist · Part 3, item 11 — Get picked', ru:'На 12–24-й месяц меняйте работу, с папкой своей истории в руках', sru:'HR-чек-лист · Часть 3, пункт 11 — Выбор вас'},
  {id:'trk-k2', t:'Learn to read pay plans the way trucking companies write them', src:'HR checklist · Part 3, item 12 — Get picked', ru:'Научитесь читать условия оплаты так, как их пишут перевозчики', sru:'HR-чек-лист · Часть 3, пункт 12 — Выбор вас'},
  {id:'trk-k3', t:'Do honest math on owning your own truck before you try it', src:'HR checklist · Part 3, item 13 — Get picked', ru:'Честно посчитайте, выгоден ли свой грузовик, до того как его брать', sru:'HR-чек-лист · Часть 3, пункт 13 — Выбор вас'},
  {id:'trk-k4', t:'Every quarter, check if your route is on the driverless map', src:'HR checklist · Part 3, item 14 — Get picked', ru:'Раз в квартал проверяйте, нет ли вашего маршрута на карте беспилотных грузовиков', sru:'HR-чек-лист · Часть 3, пункт 14 — Выбор вас'}
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
 {h:'The first federal rule for driverless trucks is written — and hazmat is not in it', d:'Oct 7, 2026 · FMCSA exemption (Docket FMCSA-2026-0958, 2026–2031): driverless trucks may use cab beacons instead of warning triangles. The conditions explicitly prohibit hazmat operations under the relief.', map:'For you: your license add-ons now have the law behind them. By written rule, tanker and hazmat trucks keep a human driver. Watch this rule. If hazmat is ever added, we re-check the tanker verdict that week.', hRu:'Написано первое федеральное правило для беспилотных грузовиков — и опасных грузов в нём нет', dRu:'7 октября 2026 · Исключение FMCSA (дело FMCSA-2026-0958, 2026–2031): беспилотные грузовики могут ставить маячки на кабину вместо аварийных треугольников. Но возить опасные грузы по этому исключению прямо запрещено.', mapRu:'Для вас: теперь ваши допуски защищает закон. По правилу, в цистернах и с опасными грузами остаётся водитель-человек. Следите за этим правилом. Если опасные грузы туда добавят, вердикт по цистернам перепроверим в ту же неделю.'},
 {h:'Aurora’s driverless map: 250,000 miles, five routes in the warm South, one weak spot they admit', d:'Feb 11, 2026 · Aurora Innovation: 250,000 driverless miles by Jan 2026; lanes Dallas–Houston, Fort Worth–El Paso, El Paso–Phoenix, Fort Worth–Phoenix (~1,000 mi), Dallas–Laredo. Weather constrained its Texas driverless ops about 40% of the time in 2025 (company’s own figure). "200+ trucks by end of 2026" is an expectation, not a count.', map:'For you: every quarter, check your route against this list. Is your usual route on it, and you drive long-haul? Start planning your move. Northern and city routes are not on it — because of weather, they say.', hRu:'Карта беспилотников Aurora: 250 000 миль, пять трасс на тёплом юге США, одна слабость, которую они признают', dRu:'11 февраля 2026 · Aurora Innovation: 250 000 миль без водителя к январю 2026. Маршруты: Даллас–Хьюстон, Форт-Уэрт–Эль-Пасо, Эль-Пасо–Финикс, Форт-Уэрт–Финикс (около 1 000 миль), Даллас–Ларедо. В 2025 году погода мешала их беспилотникам в Техасе примерно 40% времени (цифра самой компании). «Более 200 грузовиков к концу 2026» — это план, а не факт.', mapRu:'Для вас: раз в квартал сверяйте свой маршрут с этим списком. Ваш обычный маршрут там, а вы на дальних рейсах? Начинайте планировать переход. Северных и городских трасс там нет — причина, по их словам, погода.'},
 {h:'Kodiak: 35 driverless trucks already work in the oilfields. Highway launch is a goal, not a fact yet', d:'Jun 30 / Sep 25, 2026 · Kodiak AI + Atlas Energy: 35 driverless trucks, 40,000+ paid driverless hours hauling frac sand in the Permian Basin (since Dec 2024). Dallas–Houston named as the highway launch lane; unsupervised highway service targeted by end of 2026.', map:'For you: this is the most likely trigger for forecast F-TD1. When paid highway runs start with no safety driver, your Radar will flag it that week. Long-haul drivers in Texas should take it as a sign to move.', hRu:'Kodiak: 35 беспилотных грузовиков уже работают на нефтепромыслах. Запуск на шоссе — пока цель, а не факт', dRu:'30 июня / 25 сентября 2026 · Kodiak AI + Atlas Energy: 35 беспилотных грузовиков, более 40 000 оплаченных часов без водителя. Возят песок для добычи нефти в Пермском бассейне (с декабря 2024). Первым шоссе назван маршрут Даллас–Хьюстон. Ездить по шоссе без водителя хотят начать к концу 2026 года.', mapRu:'Для вас: это самый вероятный повод для прогноза F-TD1. Когда на шоссе начнут возить платные грузы без страхующего водителя, Радар отметит это в ту же неделю. Дальнобойщикам в Техасе это сигнал к переходу.'},
 {h:'Short runs between warehouses went driverless in smaller trucks (Gatik, 85,000 orders)', d:'Aug 25, 2026 · Gatik (company-reported): 85,000 driverless orders completed in Class 3–7 box trucks on fixed warehouse-to-store routes for Walmart, Kroger, Tyson, PepsiCo. Different vehicle class — not Class 8.', map:'For you: not your job — but it proves the rule behind your map. Fixed, repeated, predictable routes get automated first, in any truck size. That’s also why "delivery driver" is a separate PathCheck map.', hRu:'Короткие рейсы между складами ушли беспилотникам на грузовиках поменьше (Gatik, 85 000 заказов)', dRu:'25 августа 2026 · Gatik (цифры самой компании): 85 000 выполненных беспилотных заказов на фургонах классов 3–7 по фиксированным маршрутам склад–магазин для Walmart, Kroger, Tyson, PepsiCo. Другой класс машин — не Class 8.', mapRu:'Для вас: это не ваша работа, но это подтверждает правило вашей карты. Одинаковые, повторяющиеся, предсказуемые маршруты автоматизируют первыми — в грузовике любого размера. Поэтому «водитель доставки» — отдельная карта PathCheck.'},
 {h:'The "driver shortage" argument got weaker — says the industry’s own economist', d:'Oct 2025 · ATA chief economist Bob Costello reframed the shortage as "a quality problem around drivers, much more so than an absolute number". ATRI’s 2025 industry survey ranks the shortage No. 12 — outside its top 10 for the first time.', map:'For you: recruiters will keep talking about the shortage to fill long-haul jobs. The real shortage is experienced drivers with clean records. Your checklist builds exactly that. Become that driver. Don’t buy the slogan.', hRu:'Довод про «нехватку водителей» ослаб — так говорит экономист самой отрасли', dRu:'Октябрь 2025 · Главный экономист ATA Боб Костелло сказал иначе: «проблема в качестве водителей, а не в их числе». В опросе отрасли ATRI 2025 нехватка водителей на 12-м месте — впервые не в первой десятке.', mapRu:'Для вас: вербовщики и дальше будут говорить о нехватке, чтобы набрать людей на дальние рейсы. На самом деле не хватает опытных водителей с чистой историей. Ваш чек-лист делает вас именно таким. Станьте им. Не верьте лозунгу.'},
 {h:'9,985 CDL school locations have been removed from the federal registry', d:'Nov 1, 2026 · FMCSA Training Provider Registry (live counters): 18,338 active providers, 31,129 locations, 9,985 locations removed, 34,876 drivers trained in October 2026 alone.', map:'For you: check the registry twice. Once before you pay any school. Again the week training starts. Already licensed? Check your old school once. If it was removed for fraud, better learn it from the registry than from an employer’s background check.', hRu:'9 985 точек школ CDL удалены из федерального реестра', dRu:'1 ноября 2026 · Реестр учебных центров FMCSA (живые счётчики): 18 338 активных центров, 31 129 точек, 9 985 точек удалено, 34 876 водителей обучено только за октябрь 2026.', mapRu:'Для вас: проверяйте реестр дважды. Первый раз — до того, как платить школе. Второй — в неделю начала учёбы. Права уже есть? Один раз проверьте свою школу. Если её убрали за мошенничество, лучше узнать это из реестра, а не на проверке у работодателя.'}
];

/* ===== Truck Driver — Russian (RU) content layer ===== */
PROF_META_RU.truckdriver = 'Водитель грузовика';

Object.assign(DOORS_RU, {
  otr:'Работайте на дальних рейсах 12 месяцев, а потом уходите. Один чистый год, за него получите допуски в права. Потом переходите на городскую работу, цистерны или платформы на этой карте.',
  regional:'Ваша работа — ДА. Держитесь за неё и берегите чистую историю. Следите за Радаром. Если беспилотники появятся на вашем маршруте, начинайте планировать переход в ту же неделю.',
  local:'Ваша работа — ДА. Ещё не здесь? Ради этого и нужен первый год: 12 чистых месяцев и три допуска в права. Потом подавайтесь с папкой своей истории.',
  tanker:'Ваша работа — ДА. Держите допуски на цистерны и опасные грузы действующими, а историю — идеальной (здесь увольняют за бумаги). Куда дальше: дальние рейсы в LTL (сборные грузы, крупные перевозчики) и цистерны при заводах.',
  flatbed:'Ваша работа — ДА. Вас защищает умение крепить груз. Освойте его и храните доказательства. Самые дорогие вакансии просят опыт с негабаритом, низкими платформами и автовозами.',
  ownerop:'Посчитайте всё до подписи: ваш грузовик, ваш кредит, ваши цифры. Ловушка: лизинг с выкупом у того же перевозчика, который даёт вам грузы.'
});

GRIDINFO_RU.truckdriver = {head:'Водитель грузовика — ДА. Дальние рейсы — НЕТ.', short:'«Водитель грузовика» — это шесть разных работ. Под угрозой только OTR (дальние рейсы между штатами, дома раз в 2–3 недели): беспилотники уже ездят по этим трассам. Городская работа, цистерны, платформы, региональные рейсы и свой грузовик — хороший выбор. У каждой свои сроки.'};

DOORSTEP_RU.prof.truckdriver = {
  student:'до того как школа возьмёт ваши деньги: выберите работу на бумаге — «город», «цистерна», «платформа», а не просто «водитель грузовика». Права одни и те же. Карьера — разная.',
  early:'в этом месяце: запишите дату перехода — 12-й месяц. Водите этот год так, будто сдаёте экзамен. Хорошая работа на этой карте достаётся за чистую историю, а не за мили.',
  mid:'на этой неделе: проверьте свой маршрут по карте беспилотников в Радаре. Длинные трассы в Техасе и Аризоне уже там. Городской работы, цистерн и платформ там нет.',
  senior:'посчитайте свой опыт: дальние рейсы платят в среднем 100 000–107 000 долларов, автовозы — 70 000–120 000+ долларов. С 5+ чистыми годами вам открыта любая работа на этой карте. Выбирайте по деньгам, а не по привычке.'};
DOORSTEP_RU.seat.otr = {
  student:'до того как школа возьмёт ваши деньги: выберите работу на бумаге — напишите «город» или «цистерна», а не «водитель грузовика». Школа продаёт права. Работу выбираете вы.',
  early:'в этом месяце: запишите дату перехода — 12-й месяц. Пусть этот год станет доказательством. Одна авария, которой можно было избежать, стоит дороже любого бонуса.',
  mid:'на этой неделе: найдите свой маршрут на карте беспилотников (она в Радаре). Если ваш обычный маршрут уже есть в беспилотной сети — переходить нужно в этом квартале, а не в этом году.',
  senior:'посчитайте, куда можно уйти, по своим реальным цифрам. Дальние рейсы LTL платят в среднем 100 000–107 000 долларов в год. Там ищут именно ваш опыт и чистую историю.'};
DOORSTEP_RU.seat.regional = {
  student:'когда школы и вербовщики будут уговаривать, спросите одно: «Кто из ваших выпускников ездит по региону и бывает дома каждую неделю?» Если все уходят только в дальние рейсы — школа продаёт одну-единственную работу.',
  early:'в этом месяце: берегите историю. Хорошие перевозчики берут на региональные рейсы по тем же правилам, что и LTL. Один чистый год дороже любого бонуса, ради которого прыгают с работы на работу.',
  mid:'на этой неделе: получите один допуск в права (цистерна — самый дешёвый: один письменный тест). Это полдня, а подходящих региональных вакансий станет больше.',
  senior:'раз в квартал сверяйте свой маршрут с картой беспилотников. Региональные рейсы в безопасности, пока беспилотники идут по длинным трассам. Проверка поможет узнать первым, если это изменится.'};
DOORSTEP_RU.seat.local = {
  student:'сегодня прочитайте три городские вакансии LTL (FedEx Freight, XPO, Old Dominion). Везде просят одно: 1 год опыта и три допуска в права. Это и есть ваш план на школу.',
  early:'в этом месяце: получайте допуски по порядку. Двойные/тройные прицепы и цистерна — это письменные тесты. Проверку биографии для опасных грузов начинайте рано: TSA отвечает дольше всего.',
  mid:'на этой неделе: вы дома каждый день, но платят меньше, чем в LTL? Подавайтесь выше. Городские вакансии за 30,35–36,01 доллара в час берут людей именно с вашей работы. Приложите папку своей истории.',
  senior:'посчитайте дальние рейсы: в среднем 100 000–107 000 долларов в год. Но там ночные рейсы и очередь по стажу. Ваш опыт там ценится — тратьте его с умом.'};
DOORSTEP_RU.seat.tanker = {
  student:'планируйте допуски с первого дня. Цистерна (N) — один письменный тест. Для опасных грузов (H) нужна проверка биографии в TSA (85,25 доллара). Начинайте её за несколько недель до теста. Всё это можно успеть, пока вы в школе.',
  early:'в этом месяце: подайте на проверку TSA для опасных грузов сейчас. Не ждите вакансии на цистерну. Вакансии с бонусом 10 000–12 000 долларов не будут ждать ваших бумаг.',
  mid:'на этой неделе: проверьте свои бумаги так, как их проверит работодатель. Срок медкарты, продление допусков, запись в Clearinghouse (федеральная база нарушений водителей). На цистернах увольняют за бумаги.',
  senior:'посмотрите на цистерны при заводах и дальние рейсы с цистернами в LTL. Допуски те же, а грузы стабильнее. И следите за законом: вас защищает федеральное исключение, а законы меняют.'};
DOORSTEP_RU.seat.flatbed = {
  student:'будьте честны насчёт физической нагрузки. Один перевозчик проверяет, может ли водитель поднять брезент весом 90 фунтов (tarp — им накрывают груз на открытой платформе). Если для вас это нормально — здесь за это платят.',
  early:'в этом месяце: освойте одно умение крепить груз на практике — ремни, цепи, защита углов. Фотографируйте свои лучшие закреплённые грузы. Эти фото помогут получить вакансии от 0,70 доллара за милю и выше.',
  mid:'на этой неделе: добавьте одну специализацию — низкая платформа, негабарит или автовоз. Каждая поднимает оплату. Тяжёлые грузы и автовозы платят больше всех на этой карте: 70 000–120 000+ долларов.',
  senior:'посчитайте свой грузовик, пока вы на этой работе. Владельцы платформ и автовозов сами общаются с теми, кто отправляет грузы. Честно посчитайте всё в таблице (чек-лист, §13) до любого платежа за грузовик.'};
DOORSTEP_RU.seat.ownerop = {
  student:'не покупайте грузовик. Порядок такой: права → один чистый год водителем в компании → ваши собственные цифры. Кто продаёт вам лизинг с выкупом до вашего первого года, просто перекладывает на вас платёж за свой грузовик.',
  early:'в этом месяце: заведите файл расходов. Каждую неделю записывайте, сколько стоил бы этот грузовик, будь он ваш: топливо, страховка 298 долларов в неделю, прицеп 250–450 долларов в неделю. Через год это будет ваш бизнес-план.',
  mid:'на этой неделе: честно посчитайте один реальный груз. Сначала вся сумма, потом минус топливо, страховка, прицеп, ремонт, налоги. Если вам всё ещё платят больше, чем в компании, — это реальный шанс. Если нет — только красивая картинка.',
  senior:'смотрите на процент, а не на общую сумму. Предложения, которые мы видели, платят 80–87% от цены груза. Платят меньше и при этом решают, какие грузы вам давать? Тогда риск на вас, а заработок у них.'};

Object.assign(BIGGOALS_RU, {
  otr:'Сделайте из рискованной работы трамплин: 12 чистых месяцев, нужные допуски — и переход. Городская работа, цистерны или дальние рейсы LTL, с чистой историей.',
  regional:'Ездите по региону, будьте дома каждую неделю и зарабатывайте как на дальних рейсах. Для этого: допуски, идеальная история и проверка маршрута раз в квартал. Тогда беспилотники не застанут вас врасплох.',
  local:'Лучшее в городской работе: LTL платит 36 долларов в час, вы дома каждую ночь. А со стажем — дальние рейсы LTL, в среднем 100 000–107 000 долларов.',
  tanker:'Станьте водителем, которого защищает закон. Все допуски на опасные грузы, идеальные бумаги. Вам звонят первым, когда груз роботу возить запрещено.',
  flatbed:'Деньги специалиста за умелые руки: негабарит, низкая платформа или автовоз — вакансии на 70 000–120 000+ долларов. А фото ваших креплений убеждают работодателя с первого взгляда.',
  ownerop:'Настоящий маленький бизнес на колёсах: 85%+ от цены груза, все расходы известны до доллара. И связи с отправителями грузов — ваши, а не перевозчика.'
});
BIGGOAL_PROF_RU.truckdriver = 'Работа, которую роботы не обесценят. Вы выбрали её сами, у вас все допуски в правах и папка чистой истории. Перевозчики сами борются за вас.';
