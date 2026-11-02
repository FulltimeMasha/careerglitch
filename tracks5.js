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
PROF_META.healthadmin = {name:'Healthcare Administrator', kick:'Healthcare Administrator', code:'VITALS', count:'155,100', srcWhat:'new healthcare manager jobs the BLS counts by 2035', srcWhatRu:'новых рабочих мест для руководителей здравоохранения, которые бюро статистики труда США (BLS) считает к 2035 году'};

Object.assign(SEATINFO, {
  hosops:{prof:'healthadmin', label:'Hospital / health-system operations', verdict:'YES', conf:'High'},
  clinicadmin:{prof:'healthadmin', label:'Practice / clinic administration', verdict:'YES', conf:'Medium'},
  ltcadmin:{prof:'healthadmin', label:'Long-term care administration', verdict:'YES', conf:'High'},
  revcycle:{prof:'healthadmin', label:'Revenue cycle / payer operations', verdict:'NO as a final stop', conf:'Medium'}
});

Object.assign(DOORS, {
  hosops:'The degree or the management year gets you in. The budget work keeps you.',
  clinicadmin:'Show a budget you ran. Aim at groups and platforms, not one office.',
  ltcadmin:'Get the licence first. Every other step in this seat waits behind it.',
  revcycle:'Own the automation instead of feeding it. That version of this seat pays $145,900–$170,200.'
});

GRIDINFO.healthadmin = {head:'Healthcare administrator is a YES. The paperwork seat is a NO.', short:'“Healthcare administrator” is four different jobs. Hospital operations, practice administration and long-term care administration are good choices. Revenue-cycle paperwork as your final stop is a bad one — the tools that do it are automating it.'};

/* ================= HEALTHCARE ADMINISTRATOR TRACK (14 steps) ================= */
TRACKS.healthadmin = [
 {name:'The gate', steps:[
  {id:'had-g1', t:'Pick your seat and write it down: hospital operations, practice administration, long-term care, or revenue cycle. The title alone tells you nothing.', src:'HR checklist · Part 2, item 1 — The gate', ru:'Выберите своё место и запишите его: операции больницы, управление врачебной практикой, управление домом престарелых или цикл выручки. Само название профессии вам ничего не говорит.', sru:'Чек-лист HR · Часть 2, пункт 1 — Ворота'},
  {id:'had-g2', t:'Get the degree your seat checks: a bachelor’s degree for most seats, a master’s degree (MHA, MBA or MPH) for the fellowship and health-system door.', src:'HR checklist · Part 2, item 2 — The gate', ru:'Получите образование, которое проверяет именно ваше место: степень бакалавра для большинства мест, степень магистра (MHA, MBA или MPH — программы по управлению в здравоохранении и бизнесу) для двери стипендии-практики (fellowship) и больничных систем.', sru:'Чек-лист HR · Часть 2, пункт 2 — Ворота'},
  {id:'had-g3', t:'Learn the money work: read a budget, run a budget, and understand a P&L — the page that shows money in and money out.', src:'HR checklist · Part 2, item 3 — The gate', ru:'Научитесь денежной работе: читать бюджет, вести бюджет и понимать P&L — отчёт о прибылях и убытках, страницу, где видно деньги на входе и на выходе.', sru:'Чек-лист HR · Часть 2, пункт 3 — Ворота'},
  {id:'had-g4', t:'Learn one record system deeply. Start with Epic — it is named in 10 of 43 postings, more than any other system.', src:'HR checklist · Part 2, item 4 — The gate', ru:'Выучите одну систему медицинских записей глубоко. Начните с Epic — она названа в 10 из 43 вакансий, чаще любой другой системы.', sru:'Чек-лист HR · Часть 2, пункт 4 — Ворота'},
  {id:'had-g5', t:'Learn who checks your work: accreditation and state rules for hospitals, and the state licence if you picked long-term care.', src:'HR checklist · Part 2, item 5 — The gate', ru:'Узнайте, кто проверяет вашу работу: аккредитация и правила штата для больниц, а если вы выбрали дома престарелых — лицензия штата (NHA licence), без которой туда не берут.', sru:'Чек-лист HR · Часть 2, пункт 5 — Ворота'}
 ]},
 {name:'Proof', steps:[
  {id:'had-p1', t:'Run one budget, or help run one, and write down its size and what you changed.', src:'HR checklist · Part 2, item 6 — Proof', ru:'Ведите один бюджет или помогайте вести — и запишите его размер и то, что вы изменили.', sru:'Чек-лист HR · Часть 2, пункт 6 — Доказательства'},
  {id:'had-p2', t:'Fix one staffing problem — a schedule, a gap, a hard-to-fill role — and write down the result.', src:'HR checklist · Part 2, item 7 — Proof', ru:'Решите одну проблему с персоналом — расписание, дыру в сменах, роль, на которую никого не найти, — и запишите результат.', sru:'Чек-лист HR · Часть 2, пункт 7 — Доказательства'},
  {id:'had-p3', t:'Own one piece of automation: a prior-authorisation flow, a schedule, or a denials queue that now runs with a tool and your check.', src:'HR checklist · Part 2, item 8 — Proof', ru:'Возьмите на себя один кусок автоматизации: поток предварительных согласований со страховыми (prior authorisation), расписание или очередь отказов (denials), которая теперь работает с инструментом — и под вашим контролем.', sru:'Чек-лист HR · Часть 2, пункт 8 — Доказательства'},
  {id:'had-p4', t:'Pass one outside check — a survey, an audit, an accreditation visit or a payer review — and write down the result.', src:'HR checklist · Part 2, item 9 — Proof', ru:'Пройдите одну внешнюю проверку — инспекцию штата (survey), аудит, аккредитационный визит или проверку страховой — и запишите результат.', sru:'Чек-лист HR · Часть 2, пункт 9 — Доказательства'},
  {id:'had-p5', t:'Earn the one paper your seat’s postings name: FACHE, CMPE, CRCP or CRCR, or the state licence. Pick by seat, not by alphabet.', src:'HR checklist · Part 2, item 10 — Proof', ru:'Получите тот один документ, который называют вакансии вашего места: FACHE, CMPE, CRCP или CRCR (сертификаты по управлению и по циклу выручки) — или лицензию штата. Выбирайте по месту, а не по алфавиту.', sru:'Чек-лист HR · Часть 2, пункт 10 — Доказательства'}
 ]},
 {name:'Get picked', steps:[
  {id:'had-k1', t:'Apply by the seat’s name and budget size, not by the general title — the same title pays $50,000 in one posting and $160,000 in another.', src:'HR checklist · Part 2, item 11 — Get picked', ru:'Откликайтесь по названию места и размеру бюджета, а не по общему названию профессии: одно и то же название платит $50 000 в одной вакансии и $160 000 в другой.', sru:'Чек-лист HR · Часть 2, пункт 11 — Выбор'},
  {id:'had-k2', t:'Lead every application with a number: the budget you ran, the staff you led, the denial rate or days in A/R you moved.', src:'HR checklist · Part 2, item 12 — Get picked', ru:'Начинайте каждый отклик с цифры: бюджет, который вы вели, персонал, которым руководили, процент отказов (denial rate) или срок ожидания денег от страховых (days in A/R), который вы сдвинули.', sru:'Чек-лист HR · Часть 2, пункт 12 — Выбор'},
  {id:'had-k3', t:'For the hospital seat, apply to administrative fellowships while a group is open — groups are small, and every fellowship posting asks for a master’s degree.', src:'HR checklist · Part 2, item 13 — Get picked', ru:'Для больничного места подавайтесь на административные стипендии-практики (fellowships), пока набор открыт: группы маленькие, и каждая такая вакансия требует степень магистра.', sru:'Чек-лист HR · Часть 2, пункт 13 — Выбор'},
  {id:'had-k4', t:'Re-check your plan every quarter: practice buy-outs near you, new automation tools, and your state’s licence rules.', src:'HR checklist · Part 2, item 14 — Get picked', ru:'Перепроверяйте план каждый квартал: скупку практик рядом с вами, новые инструменты автоматизации и лицензионные правила вашего штата.', sru:'Чек-лист HR · Часть 2, пункт 14 — Выбор'}
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
  {h:'The federal count grows this job +24.2% — as one average of four seats', d:'BLS projections 2025–35: median pay $123,860, +155,100 new jobs, about 62,300 openings a year. Hospitals already pay a $133,580 median; physician offices $105,770.', map:'Read growth by seat, never by title. Your seat decides which future you get.', hRu:'Федеральный подсчёт растит эту профессию на +24,2% — одним средним числом на четыре места', dRu:'Прогнозы BLS на 2025–35 годы: медианная зарплата $123 860, +155 100 новых рабочих мест, около 62 300 открытых позиций в год. Больницы уже платят медиану $133 580; врачебные офисы — $105 770.', mapRu:'Читайте рост по местам, а не по названию. Ваше место решает, какое будущее вы получите.'},
  {h:'Corporate buyers acquired 8,000+ physician practices since 2024', d:'PAI / Avalere, via Becker’s: hospitals and corporate entities employ 82% of physicians; 13,900 practices changed hands in 2024–25. Only 42.2% of physicians remained in private practice in 2024 (AMA).', map:'The practice seat’s employer is becoming a platform. Aim your proof at multi-site budgets.', hRu:'Корпоративные покупатели приобрели больше 8 000 врачебных практик с 2024 года', dRu:'PAI / Avalere, по данным Becker’s: больницы и корпоративные структуры нанимают 82% врачей; в 2024–25 годах сменили владельца 13 900 практик. В частной практике в 2024 году остались только 42,2% врачей (AMA).', mapRu:'Работодатель места администратора практики становится платформой. Цельте доказательства в бюджеты нескольких точек сразу.'},
  {h:'A hospital hires a manager whose product is automating the billing office', d:'UChicago Medicine’s live posting: Manager, Revenue Cycle Automation and Analytics, $145,900–$170,200 — "reporting, data engineering, and process automation" for hospital billing.', map:'The revenue-cycle seat has two pay bands now: the routine queue at $100,000–$120,000, the automation owner at $145,900–$170,200. The door is printed in the NO seat’s own postings.', hRu:'Больница нанимает менеджера, чей продукт — автоматизация отдела счетов', dRu:'Живая вакансия UChicago Medicine: менеджер по автоматизации и аналитике цикла выручки, $145 900–$170 200 — «отчётность, инженерия данных и автоматизация процессов» для больничных счетов.', mapRu:'У места цикла выручки теперь два зарплатных коридора: рутинная очередь за $100 000–$120 000 и владелец автоматизации за $145 900–$170 200. Дверь напечатана в вакансиях самого места со знаком NO.'},
  {h:'The record-system vendor sells the back office as the thing to automate', d:'Epic’s own page: "Automate back-office work so that billing staff can focus on complex, high-dollar accounts." Epic is named in 10 of 43 postings in this scan.', map:'When the tool’s maker names your daily queue as the thing to automate, believe the maker. Budgets, staffing and regulators are not in the sales pitch.', hRu:'Поставщик системы записей продаёт бэк-офис как то, что нужно автоматизировать', dRu:'Страница самой Epic: «Автоматизируйте работу бэк-офиса, чтобы сотрудники по счетам занимались сложными, дорогими случаями». Epic названа в 10 из 43 вакансий этого обзора.', mapRu:'Когда производитель инструмента называет вашу повседневную очередь тем, что надо автоматизировать, — верьте производителю. Бюджеты, персонал и регуляторы в рекламный текст не входят.'},
  {h:'The fellowship door for 2026–2027 is open — small and master’s-gated', d:'Five fellowship postings in this scan: NorthBay, Atlantic Health, Ohio State’s James, UNC Rex, Lee Health. Lee Health takes two fellows a year and closes applications 29 January 2027. All five name a master’s degree.', map:'The hospital seat’s front door is a calendar. If the fellowship is your door, the application date is the plan.', hRu:'Дверь fellowship на 2026–2027 годы открыта — маленькая и только для магистров', dRu:'Пять вакансий fellowship в этом обзоре: NorthBay, Atlantic Health, Ohio State’s James, UNC Rex, Lee Health. Lee Health берёт двух стипендиатов в год и закрывает заявки 29 января 2027 года. Все пять называют степень магистра.', mapRu:'Парадная дверь больничного места — это календарь. Если fellowship — ваша дверь, дата заявки и есть план.'},
  {h:'The licence wall in long-term care is holding — 8 of 8 postings, floor $90,000', d:'Every long-term care posting in this scan requires an active state nursing home administrator licence plus 2–4 years as a licensed administrator. Bands: $90,000–$150,000. BLS: all states require the licence.', map:'The most protected seat in this package is protected by law, not fashion. Forecast F-HA2 watches exactly this wall.', hRu:'Лицензионная стена в домах престарелых держится — 8 из 8 вакансий, пол $90 000', dRu:'Каждая вакансия домов престарелых в этом обзоре требует действующую лицензию штата и 2–4 года работы лицензированным администратором. Коридоры: $90 000–$150 000. BLS: лицензию требуют все штаты.', mapRu:'Самое защищённое место в этом пакете защищено законом, а не модой. Прогноз F-HA2 следит именно за этой стеной.'}
];

/* ===== Russian (RU) content layer — twins of the blocks above ===== */
PROF_META_RU.healthadmin = 'Администратор здравоохранения';

Object.assign(DOORS_RU, {
  hosops:'Диплом или год управления впускают вас внутрь. Бюджетная работа удерживает вас там.',
  clinicadmin:'Покажите бюджет, который вы вели. Цельтесь в группы и платформы, а не в один офис.',
  ltcadmin:'Сначала получите лицензию. Каждый другой шаг в этом месте ждёт за ней.',
  revcycle:'Владейте автоматизацией, а не кормите её. Та версия этого места платит $145 900–$170 200.'
});

GRIDINFO_RU.healthadmin = {head:'Администратор здравоохранения — это ДА. Бумажное место — это НЕТ.', short:'«Администратор здравоохранения» — это четыре разные работы. Операции больницы, управление практикой и управление домом престарелых — хорошие выборы. Бумажная работа цикла выручки как конечная остановка — плохой выбор: инструменты, которые её делают, её и автоматизируют.'};

/* Personalized door steps — RU twins (stored WITHOUT the prefix,
   the app adds its own framing — doorsru.js pattern). */
DOORSTEP_RU.prof.healthadmin = {
  student:'Выберите место до того, как выбирать учёбу. Дверь fellowship (оплачиваемый год практики в больничной системе) хочет степень магистра — MHA, MBA или MPH (программы управления здравоохранением, бизнеса и общественного здоровья) аккредитованной программы. Двери практик и лицензий — нет.',
  early:'Называйте своё место в каждом отклике. Бюджет, который вы помогали вести, бьёт три года «опыта в здравоохранении» без цифр.',
  mid:'Соберите доказательства, за которые платит ваше место: бюджет с вашим именем, исправленную проблему с персоналом, одну пройденную внешнюю проверку. Затем возьмите документ, который называет ваше место, — FACHE, CMPE или лицензию штата.',
  senior:'Ведите больше одной площадки — или владейте автоматизацией на всех них. Верх этой карты — масштаб: бюджеты больше, зданий больше, одна лицензия, никакой очереди.'};
DOORSTEP_RU.seat.hosops = {
  student:'Подавайтесь на административные fellowship (оплачиваемые программы практики в больничных системах) в последний год магистратуры — группы маленькие, и календарь здесь и есть план. Одна система в нашем обзоре берёт двух стипендиатов в год.',
  early:'Берите дверь клиник, если fellowship не открыта: операторы нанимают администраторов с одним годом управления в любой сфере.',
  mid:'Владейте строкой бюджета и проблемой с персоналом в больнице или системе. Эта пара — всё основание для повышения.',
  senior:'Переходите от одного здания к масштабу системы — несколько площадок, одна логика бюджета, готовность к проверкам везде.'};
DOORSTEP_RU.seat.clinicadmin = {
  student:'Сначала выучите, как практика зарабатывает деньги, а потом уже её программы: расписание, счета, сборы. Это место проверяет годы в практиках, а не дипломы.',
  early:'Ведите повседневные деньги одной практики — поток пациентов, счета, стойку приёма — и записывайте цифры, которые вы сдвинули.',
  mid:'Получите CMPE (сертификат управления медицинской практикой), который называют вакансии, и возьмите P&L (отчёт о прибылях и убытках): полный цикл выручки, сборы, работу со страховыми. Та версия публикуется за $120 000–$160 000.',
  senior:'Ведите несколько площадок для группы или платформы. Владельцы объединились; администраторы, которые хорошо ставят цены, ведут портфели.'};
DOORSTEP_RU.seat.ltcadmin = {
  student:'Начните с совета вашего штата: путь Administrator-in-Training (стажировка администратора) и экзамены. В этом месте ничего не происходит до лицензии.',
  early:'Работайте под лицензированным администратором и выучите инспекцию так, как её проводит штат. Ваши первые два года — ученичество лицензии.',
  mid:'Держите своё здание: персонал, бюджет, семьи и инспекцию штата — за всё отвечаете лично вы.',
  senior:'Ведите здание, у которого и инспекционная история, и бюджет держатся. Именно эту историю покупают вакансии за $130 000–$150 000.'};
DOORSTEP_RU.seat.revcycle = {
  student:'Не покупайте степень магистра ради рутинной версии этого места. Сначала выучите денежный поток — счета, отказы, срок ожидания денег (days in A/R) — изнутри одной живой очереди.',
  early:'Берите работу по автоматизации, которую ваш работодатель уже покупает: платформу отказов, отчётность, внедрение инструмента. Станьте человеком, который этим управляет.',
  mid:'Владейте одним автоматизированным потоком от начала до конца и покажите цифры: процент отказов вниз, срок ожидания денег вниз. Это дословно описание вакансии за $145 900–$170 200.',
  senior:'Ведите целостность выручки или автоматизацию на нескольких площадках. Очередь, в которой вы работали, теперь — система, которой вы управляете.'};

Object.assign(BIGGOALS_RU, {
  hosops:'Вести операции больницы или больничной системы — её бюджет, её здания, её персонал: место, которому BLS платит медиану $133 580.',
  clinicadmin:'Вести деньги практики как владелец: P&L (отчёт о прибылях и убытках) одной точки, потом нескольких — та версия этого места, которая публикуется за $120 000–$160 000.',
  ltcadmin:'Держать лицензию и здание, у которого и инспекционная история, и бюджет держатся крепко, — место, которое платит $130 000–$150 000.',
  revcycle:'Владеть автоматизацией денежного потока — отказами, проверкой покрытия, согласованиями, — а не работать в его очереди. Эта работа публикуется за $145 900–$170 200.'
});
BIGGOAL_PROF_RU.healthadmin = 'Стать администратором, которого владельцы и системы зовут, когда на кону здание, бюджет или лицензия, — в одном из трёх растущих мест.';

/* ================= DATA SCIENTIST =================
   Source: ~/workspace/pathcheck-datascientist-pilot/ (42 postings).
   Cluster: DATA SCIENTIST IS A YES. THE EASY WAY IN IS A NO.
   Sibling of dataanalyst — cross-notes run both ways (below). */
PROF_META.datascientist = {name:'Data Scientist', kick:'Data Scientist', code:'VECTOR', count:'42', srcWhat:'live data scientist postings we opened', srcWhatRu:'живых вакансий data scientist, которые мы открыли'};

Object.assign(SEATINFO, {
  prodds:{prof:'datascientist', label:'Product data scientist', verdict:'YES', conf:'High'},
  coreds:{prof:'datascientist', label:'Generalist / core data scientist', verdict:'YES', conf:'Medium'},
  mlds:{prof:'datascientist', label:'ML-focused data scientist', verdict:'YES', conf:'Medium'},
  ressci:{prof:'datascientist', label:'Research scientist', verdict:'NO as a plan', conf:'Medium'}
});

Object.assign(DOORS, {
  prodds:'What to do: you are in a YES seat if you can design a test and defend the call — deepen experiments and causal work. The Full Report sequences statistics → experiments → a metrics portfolio.',
  coreds:'What to do: you are in a YES seat if your proof is a shipped model, not a wall of certificates — the Full Report sequences the proof in the order postings screen for it.',
  mlds:'What to do: you are in a YES seat if you have shipped one AI project and can show how you checked its output — the Full Report sequences it.',
  ressci:'What to do instead: keep the research ambition, change the order — take the product or ML seat first, publish from inside it if the work allows, and let a research team recruit you.'
});

GRIDINFO.datascientist = {head:'Data scientist is a YES. The easy way in is a NO.', short:'“Data scientist” is four different jobs. Product, generalist and AI-focused data science are good choices, posting $130K–$380,000. Research science is 5 of 42 postings behind a PhD. Data analyst is a different profession, with its own check.'};

TRACKS.datascientist = [
 {name:'The gate', steps:[
  {id:'dsc-g1', t:'Bring Python and SQL to working level. Python is the main programming language for this work; SQL is the language you use to ask a database for data. Python is named in 31 of 42 postings we opened. SQL is named in 23 of 42. Working level means you clean messy data and answer a real question with both, without help.', src:'HR checklist · Part 6, item 1 — The gate', ru:'Доведите Python и SQL до рабочего уровня. Python — главный язык программирования для этой работы; SQL — язык, на котором вы запрашиваете данные у базы данных. Python назван в 31 из 42 вакансий, которые мы открыли. SQL назван в 23 из 42. Рабочий уровень значит: вы чистите грязные данные и отвечаете на настоящий вопрос обоими, без помощи.', sru:'HR-чек-лист · Часть 6, пункт 1 — Ворота'},
  {id:'dsc-g2', t:'Learn statistics until you can defend it. Probability and inference — inference means drawing a conclusion about a big group from a smaller sample. Know what a p-value does not say. A p-value is a measure of how surprising a result is, if nothing were going on. Every seat screens for statistics. The product seat lives on it.', src:'HR checklist · Part 6, item 2 — The gate', ru:'Выучите статистику так, чтобы могли её защитить. Вероятность и вывод — вывод значит: делать заключение о большой группе по меньшей выборке. Знайте, чего не говорит p-value. P-value — мера того, насколько удивителен результат, если бы ничего не происходило. Каждое место проверяет статистику. Место product живёт на ней.', sru:'HR-чек-лист · Часть 6, пункт 2 — Ворота'},
  {id:'dsc-g3', t:'Pick your seat on purpose. Product, core, ML, or research. The four seats post $65,064 to $400,000 and screen for different degrees. Write down which seat your degree and your years point at today.', src:'HR checklist · Part 6, item 3 — The gate', ru:'Выберите своё место осознанно. Product, core, ML или research. Четыре места публикуют от $65,064 до $400,000 и проверяют разные дипломы. Запишите, на какое место указывают ваш диплом и ваши годы сегодня.', sru:'HR-чек-лист · Часть 6, пункт 3 — Ворота'},
  {id:'dsc-g4', t:'Do the degree check honestly. A master’s or a PhD is required or preferred in 16 of 42 postings we opened. If your seat asks for one, plan for it. If your seat does not ask, do not buy one hoping it replaces proof.', src:'HR checklist · Part 6, item 4 — The gate', ru:'Проведите проверку диплома честно. Магистратура или PhD требуются или предпочитаются в 16 из 42 вакансий, которые мы открыли. Если ваше место просит диплом, планируйте его. Если не просит, не покупайте его в надежде, что он заменит доказательства.', sru:'HR-чек-лист · Часть 6, пункт 4 — Ворота'}
 ]},
 {name:'Proof', steps:[
  {id:'dsc-p1', t:'Ship one model, end to end. A real question, messy data, a model you trained, judged, and explained. Modeling work is named in 33 of 42 postings. One finished model is the proof of it.', src:'HR checklist · Part 6, item 5 — Proof', ru:'Отправьте одну модель от начала до конца. Настоящий вопрос, грязные данные, модель, которую вы обучили, оценили и объяснили. Работа с моделями названа в 33 из 42 вакансий. Одна законченная модель — её доказательство.', sru:'HR-чек-лист · Часть 6, пункт 5 — Доказательства'},
  {id:'dsc-p2', t:'Run one experiment or causal study, end to end. An A/B test tries version A against version B. A causal study proves one thing caused another. Experimentation is named in 10 of 12 product postings.', src:'HR checklist · Part 6, item 6 — Proof', ru:'Проведите один эксперимент или причинное исследование от начала до конца. A/B-тест пробует версию A против версии B. Причинное исследование доказывает, что одно вызвало другое. Эксперименты названы в 10 из 12 вакансий product.', sru:'HR-чек-лист · Часть 6, пункт 6 — Доказательства'},
  {id:'dsc-p3', t:'Build one thing with a large language model, and keep its score. A large language model is the AI system behind chatbots. Write down how you checked its output. AI work is named in 17 of 42 postings. The check is the skill, not the demo.', src:'HR checklist · Part 6, item 7 — Proof', ru:'Постройте одну вещь с большой языковой моделью и сохраните её оценку. Большая языковая модель — это AI-система за чат-ботами. Запишите, как вы проверяли её вывод. Работа с AI названа в 17 из 42 вакансий. Навык — проверка, а не демо.', sru:'HR-чек-лист · Часть 6, пункт 7 — Доказательства'},
  {id:'dsc-p4', t:'Build a portfolio a stranger can read in five minutes. Three projects. Each one: the question, the data, the choice you made, the result. Research postings ask for papers and a public portfolio. Every other seat asks for shipped work in its own words.', src:'HR checklist · Part 6, item 8 — Proof', ru:'Соберите портфолио, которое незнакомец прочитает за пять минут. Три проекта. В каждом: вопрос, данные, выбор, который вы сделали, результат. Вакансии research просят статьи и публичное портфолио. Каждое другое место просит отправленную работу своими словами.', sru:'HR-чек-лист · Часть 6, пункт 8 — Доказательства'},
  {id:'dsc-p5', t:'Build one dashboard that ends in a decision. Dashboards are named in 12 of 42 postings — as a duty, not the job. Yours must end with “so we did X.” A dashboard with no decision reads as an analyst portfolio.', src:'HR checklist · Part 6, item 9 — Proof', ru:'Постройте один дашборд, который заканчивается решением. Дашборды названы в 12 из 42 вакансий — как обязанность, а не работа. Ваш должен заканчиваться словами «и поэтому мы сделали X». Дашборд без решения читается как портфолио аналитика.', sru:'HR-чек-лист · Часть 6, пункт 9 — Доказательства'},
  {id:'dsc-p6', t:'Clean one messy, real dataset in public. Not a tutorial dataset. Postings screen on real data by name: incomplete, noisy, highly imbalanced. Imbalanced means one kind of example is much rarer than the others. Your cleaning notes are the proof.', src:'HR checklist · Part 6, item 10 — Proof', ru:'Почистите один грязный, настоящий набор данных публично. Не учебный набор. Вакансии проверяют настоящие данные по именам: неполные, шумные, сильно несбалансированные. Несбалансированные значит: один вид примеров намного реже остальных. Ваши заметки о чистке — доказательство.', sru:'HR-чек-лист · Часть 6, пункт 10 — Доказательства'}
 ]},
 {name:'Get picked', steps:[
  {id:'dsc-k1', t:'Apply to seats by name. Product data scientist. ML data scientist. The plain “data scientist” pool is where the master’s-plus-two-years queue forms.', src:'HR checklist · Part 6, item 11 — Get picked', ru:'Подавайтесь на места по именам. Product data scientist. ML data scientist. Обычный пул «data scientist» — это где образуется очередь «магистратура плюс два года».', sru:'HR-чек-лист · Часть 6, пункт 11 — Выбор тебя'},
  {id:'dsc-k2', t:'Show the AI workflow. One analysis where the AI drafted and you verified. Show the verification, not just the draft. One posting in our scan asks for this in so many words: analysis done with the AI “as a collaborator.”', src:'HR checklist · Part 6, item 12 — Get picked', ru:'Покажите процесс с AI. Один анализ, где AI сделал черновик, а вы проверили. Покажите проверку, а не только черновик. Одна вакансия в нашем скане просит это дословно: анализ, сделанный с AI «как с соавтором».', sru:'HR-чек-лист · Часть 6, пункт 12 — Выбор тебя'},
  {id:'dsc-k3', t:'Price yourself from the scan. Product seats post $180K–$380K at senior level. ML posts $130K–$285K. Core posts $88K–$250K. Research staff posts $320K–$400K. If your seat’s band is flat, the seat is the problem. Not your negotiation.', src:'HR checklist · Part 6, item 13 — Get picked', ru:'Оценивайте себя по скану. Места product публикуют $180K–$380K на уровне senior. ML публикует $130K–$285K. Core публикует $88K–$250K. Research staff публикует $320K–$400K. Если вилка вашего места плоская, место — проблема. Не ваши переговоры.', sru:'HR-чек-лист · Часть 6, пункт 13 — Выбор тебя'},
  {id:'dsc-k4', t:'Re-run this checklist every quarter, against fresh postings. The AI-work line in our scan is at 17 of 42 and moving. Your seat’s screen now moves that fast.', src:'HR checklist · Part 6, item 14 — Get picked', ru:'Перепроверяйте этот чек-лист каждый квартал по свежим вакансиям. Строка работы с AI в нашем скане — 17 из 42, и она движется. Экран вашего места теперь движется так быстро.', sru:'HR-чек-лист · Часть 6, пункт 14 — Выбор тебя'}
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
 {h:'The newest postings are “AI-native” in writing', d:'Anthropic’s growth data-scientist posting, read 1 Nov 2026, says its analysis work is done with an AI collaborator. Across our scan, AI work is named in 17 of 42 postings.', map:'Moves step dsc-p3 and dsc-k2 — one AI project, and show the workflow.', hRu:'Новейшие вакансии «AI-native» письменно', dRu:'Вакансия data scientist по росту в Anthropic, прочитанная 1 ноября 2026, говорит, что её аналитическая работа делается с AI-соавтором. По нашему скану работа с AI названа в 17 из 42 вакансий.', mapRu:'Двигает шаги dsc-p3 и dsc-k2 — один AI-проект и показ процесса.'},
 {h:'The degree screen is the real gate', d:'A master’s or a PhD is required or preferred in 16 of 42 postings. Even the new-grad seat at $140K–$150K asks for a master’s or a PhD.', map:'Moves step dsc-g4 — do the degree check before you pay for anything.', hRu:'Экран диплома — настоящие ворота', dRu:'Магистратура или PhD требуются или предпочитаются в 16 из 42 вакансий. Даже место для новых выпускников за $140K–$150K просит магистратуру или PhD.', mapRu:'Двигает шаг dsc-g4 — проведите проверку диплома до того, как заплатите за что-либо.'},
 {h:'The junior rung is missing from the postings', d:'Five of 42 postings open at 0–1 years. Stanford’s August 2026 update finds workers aged 22–25 in the most AI-exposed jobs about 19% below trend, through reduced hiring.', map:'Moves step dsc-k1 — apply to seats by name, and build the proof first.', hRu:'Ступень junior отсутствует в вакансиях', dRu:'Пять из 42 вакансий открыты на 0–1 год. Обновление Stanford за август 2026 находит работников 22–25 лет в самых подверженных AI работах примерно на 19% ниже тренда — через сокращение найма.', mapRu:'Двигает шаг dsc-k1 — подавайтесь на места по именам и сначала стройте доказательство.'},
 {h:'Offshore hires this job at 6 years, not at zero', d:'ANSR, 24 Sept 2026: India’s global capability centers hire AI and data talent up about 45% year over year, and the median hire carries 6 years of experience.', map:'Filter 3 — the proof steps outrank the certificate steps.', hRu:'Офшор нанимает эту работу на 6 годах, а не на нуле', dRu:'ANSR, 24 сентября 2026: глобальные центры в Индии нанимают AI- и data-талант примерно на 45% больше год к году, а средний нанятый несёт 6 лет опыта.', mapRu:'Фильтр 3 — шаги доказательств стоят выше шагов сертификатов.'},
 {h:'Posting of the week: the product seat shows its ceiling', d:'Anthropic posts data scientist, growth at $285,000–$380,000 — 7+ years, experiments and causal inference. A fintech product seat posts $250,000–$300,000 at 2–3+ years.', map:'The money corner — and step dsc-p2, one experiment end to end.', hRu:'Вакансия недели: место product показывает свой потолок', dRu:'Anthropic публикует data scientist по росту за $285,000–$380,000 — 7+ лет, эксперименты и причинный вывод. Место product в финтехе публикует $250,000–$300,000 на 2–3+ годах.', mapRu:'Денежный угол — и шаг dsc-p2, один эксперимент от начала до конца.'},
 {h:'The official line still points up', d:'BLS projections, released 27 Aug 2026: data scientists grow +34.6%, with 95,400 new jobs and a $120,230 median. The field grows; the door narrows. Both are true.', map:'The cluster verdict itself.', hRu:'Официальная строка всё ещё смотрит вверх', dRu:'Прогнозы BLS, выпущенные 27 августа 2026: data scientists растут на +34.6%, с 95,400 новыми рабочими местами и медианой $120,230. Поле растёт; дверь сужается. И то и другое правда.', mapRu:'Сам кластерный вердикт.'}
];

/* ===== Data Scientist — Russian (RU) content layer ===== */
PROF_META_RU.datascientist = 'Дата-сайентист';

Object.assign(DOORS_RU, {
  prodds:'Что делать: вы в месте ДА, если можете спроектировать тест и защитить решение: углубляйте эксперименты и причинную работу. Полный отчёт выстраивает порядок: статистика, потом эксперименты, потом портфолио метрик.',
  coreds:'Что делать: вы в месте ДА, если ваше доказательство — отправленная модель, а не стена сертификатов: Полный отчёт выстраивает доказательство в том порядке, в котором его проверяют вакансии.',
  mlds:'Что делать: вы в месте ДА, если вы отправили один AI-проект и можете показать, как проверяли его вывод: Полный отчёт выстраивает это по порядку.',
  ressci:'Что делать вместо этого: сохраните амбицию research, измените порядок: сначала возьмите место product или ML, публикуйтесь изнутри него, если работа позволяет, и пусть команда research наймёт вас сама.'
});

GRIDINFO_RU.datascientist = {head:'Data scientist — это ДА. Лёгкий путь внутрь — это НЕТ.', short:'«Data scientist» — это четыре разные работы. Product, generalist и data science с фокусом на AI — хорошие выборы, публикуют $130K–$380,000. Research — 5 из 42 вакансий за дипломом PhD. Data analyst — другая профессия, у неё своя проверка. Её экран — инструменты: SQL в 24 из 24 её вакансий. Экран этой профессии — дипломы, годы и модели. Мост между ними — статистика, Python и одна отправленная модель: мост, а не повышение. У двух профессий одна общая ловушка: версия reporting любой из них оплачивается за производство артефакта по запросу — а это тот артефакт, который черновит AI. У них общий пол (SQL и Python) и больше ничего: не экран, не зарплата, не дверь.'};

DOORSTEP_RU.prof.datascientist = {
  student:'Выберите место до того, как ваш план диплома затвердеет: магистратура требуется или предпочитается в 16 из 42 вакансий, поэтому проверьте вакансии вашего места до того, как заплатите за неё.',
  early:'Отправьте одну модель от начала до конца и опишите её: только 5 из 42 вакансий берут новичков, и они проверяют доказательства, а не списки курсов.',
  mid:'Владейте одним экспериментом или одним отправленным AI-проектом: это два доказательства, которые проверяют вакансии за $250K+.',
  senior:'Оценивайте послужной список решений и отправленные модели, а не годы: места product публикуют $285K–$380K для людей, чьи решения изменили то, что было построено.'};
DOORSTEP_RU.seat.prodds = {
  student:'Учите статистику так, будто это и есть работа: место product проверяет эксперименты, названные в 10 из 12 его вакансий.',
  early:'Проведите один A/B-тест от начала до конца, пусть маленький: спроектировать, прочитать, решить. Это собеседование места product, сделанное заранее.',
  mid:'Владейте метрикой и решением: вакансии product платят за рекомендации, которые изменили то, что было построено.',
  senior:'Оценивайте решения, а не анализы: Anthropic публикует $285K–$380K за суждение этого места.'};
DOORSTEP_RU.seat.coreds = {
  student:'Сначала Python и SQL, план диплома — вторым: Python назван в 31 из 42 вакансий.',
  early:'Отправьте одну модель на грязных настоящих данных и опишите выборы: это описание — ваш путь мимо очереди магистратуры.',
  mid:'Специализируйтесь к месту — product или ML: коридор generalist расширяется вниз (вход за $65,064 существует), если вы останетесь общим.',
  senior:'Оценивайте отправленные модели и область: места core на уровне senior публикуют до $250,000 ровно за это.'};
DOORSTEP_RU.seat.mlds = {
  student:'Постройте одну вещь с большой языковой моделью и запишите, как вы проверяли её вывод: проверка — навык, который проверяет это место.',
  early:'Отправьте один AI-проект в производство, пусть маленький: 6 из 7 вакансий этого места называют работу с AI; демо — не то же доказательство.',
  mid:'Владейте оценкой: как команда узнаёт, что вывод AI хороший. Это версия senior этого места.',
  senior:'Оценивайте AI-системы, которые вы отправили и судили: это место публикует до $285,000.'};
DOORSTEP_RU.seat.ressci = {
  student:'Если PhD правда ваш план, выберите лабораторию и тему по статьям, которые хотите написать: все 5 вакансий research просят публикации.',
  early:'Публикуйтесь оттуда, где вы есть: статья на воркшопе или публичное портфолио бьёт тихий лишний год диплома.',
  mid:'Если у вас есть статьи, подавайтесь: место для вас — ДА. Если нет, места product и ML платят $250K–$380K без них.',
  senior:'Оценивайте послужной список публикаций: research на уровне staff публикует за него $320K–$400K.'};

Object.assign(BIGGOALS_RU, {
  prodds:'Большая цель: product data scientist, который решает, что отправляется, — вакансии платят $250K–$380K за проверенные, защищённые решения.',
  coreds:'Большая цель: data scientist с отправленной моделью и названной специальностью — места core на уровне senior публикуют до $250,000.',
  mlds:'Большая цель: ML data scientist, который отправляет AI и может доказать, что его вывод хороший, — место публикует до $285,000.',
  ressci:'Большая цель: research сначала изнутри оплачиваемого места — публикуйтесь из места product или ML, и пусть команды research за $320K–$400K наймут вас.'
});
BIGGOAL_PROF_RU.datascientist = 'Большая цель: место, выбранное осознанно, — product, ML или специализированный core — за $180K–$380K, достигнутое моделями и экспериментами, а не новыми сертификатами.';

/* ===== Cross-notes onto the dataanalyst side (spec §12.2, app layer).
   tracks5.js loads after tracks3.js, so these mutations land on the
   analyst package's own objects without editing its file. ===== */
if (typeof GRIDINFO !== 'undefined' && GRIDINFO.dataanalyst) {
  GRIDINFO.dataanalyst.short += ' Data scientist now has its own full check (VECTOR): 42 postings, four seats, and a degree screen this map does not have. The dsgate seat on this map is the door; the full map is on the other side of it.';
}
if (typeof GRIDINFO_RU !== 'undefined' && GRIDINFO_RU.dataanalyst) {
  GRIDINFO_RU.dataanalyst.short += ' У data scientist теперь своя полная проверка (VECTOR): 42 вакансии, четыре места и экран диплома, которого нет на этой карте, — магистратура или PhD требуются или предпочитаются в 16 из её 42 вакансий. Место dsgate выше — это дверь; полная карта — по другую её сторону.';
}
if (typeof DOORS !== 'undefined') DOORS.dsgate = 'What to do: the full check of this job now exists — text VECTOR. Short version: statistics, Python, and one model you shipped; a master’s is a real screen there (16 of 42 postings), not a rumor.';
if (typeof DOORS_RU !== 'undefined') DOORS_RU.dsgate = 'Что делать: полная проверка этой работы теперь существует — напишите VECTOR. Короткая версия: статистика, Python и одна модель, которую вы отправили; магистратура там настоящий экран (16 из 42 вакансий), а не слух.';

/* ================= TRUCK DRIVER =================
   Source: ~/workspace/pathcheck-truckdriver-pilot/ (37 postings
   opened in full + BLS + FMCSA/TSA). Cluster: TRUCK DRIVER IS A
   YES. THE LONG-HAUL SEAT IS A NO. (Medium). Code word: HAUL. */
PROF_META.truckdriver = {name:'Truck Driver', kick:'Truck Driver', code:'HAUL', count:'2.2 million', srcWhat:'drivers in the US — and driverless trucks already run paid freight in Texas', srcWhatRu:'водителей в США — а беспилотные грузовики уже возят платные грузы в Техасе'};

Object.assign(SEATINFO, {
  otr:{prof:'truckdriver', label:'Long-haul OTR', verdict:'NO', conf:'Medium'},
  regional:{prof:'truckdriver', label:'Regional (home weekly)', verdict:'YES', conf:'Medium'},
  local:{prof:'truckdriver', label:'Local & LTL city (home daily)', verdict:'YES', conf:'High'},
  tanker:{prof:'truckdriver', label:'Tanker & hazmat', verdict:'YES', conf:'High'},
  flatbed:{prof:'truckdriver', label:'Flatbed / heavy haul / car haul', verdict:'YES', conf:'Medium'},
  ownerop:{prof:'truckdriver', label:'Owner-operator', verdict:'YES', conf:'Medium'}
});

Object.assign(DOORS, {
  otr:'Use long-haul as a 12-month bank, not a home — one clean year, the endorsement letters bought during it, then move to a local, tanker or flatbed seat on this map.',
  regional:'You are in a YES seat — hold it and keep the record clean. Watch the Radar: if your exact lane ever appears on a driverless network list, your move clock starts that week.',
  local:'You are in a YES seat — and if you are not here yet, this is the seat the first year is for: 12 clean months, the three endorsement letters, then apply with your record file in hand.',
  tanker:'You are in a YES seat — keep the tanker and hazmat letters current and the record spotless (this seat fires for paperwork). The next doors from here: LTL linehaul and plant-side tanker work.',
  flatbed:'You are in a YES seat — the skill that protects you is load securement, so master it and keep proof: oversize, step-deck and car-haul experience are what the top postings screen for.',
  ownerop:'Price it before you sign anything — your truck, your financing, your spreadsheet. The trap version of this seat is a lease-purchase at the same carrier that controls your loads.'
});

GRIDINFO.truckdriver = {head:'Truck driver is a YES. The long-haul seat is a NO.', short:'"Truck driver" is six different jobs. Long-haul OTR is the exposed one — driverless trucks already run its lanes. Local, tanker, flatbed, regional and owner-operator work are good bets with different clocks.'};

TRACKS.truckdriver = [
 {name:'The gate', steps:[
  {id:'trk-g1', t:'Pick your seat on paper before any school takes your money', src:'HR checklist · Part 1, item 1 — The gate', ru:'Выберите место на бумаге, до того как любая школа возьмёт ваши деньги', sru:'HR-чек-лист · Часть 1, пункт 1 — Ворота'},
  {id:'trk-g2', t:'Check the school on the federal registry before you pay', src:'HR checklist · Part 1, item 2 — The gate', ru:'Проверьте школу в федеральном реестре, до того как платить', sru:'HR-чек-лист · Часть 1, пункт 2 — Ворота'},
  {id:'trk-g3', t:'Get your DOT medical card and know your own record (Clearinghouse + MVR)', src:'HR checklist · Part 1, item 3 — The gate', ru:'Получите медкарту DOT и знайте свою историю (Clearinghouse + выписка MVR)', sru:'HR-чек-лист · Часть 1, пункт 3 — Ворота'},
  {id:'trk-g4', t:'Get the Class A CDL the federal way: permit, registry training, 3-part skills test', src:'HR checklist · Part 1, item 4 — The gate', ru:'Получите CDL класса A по федеральным правилам: ученическое разрешение, обучение из реестра, экзамен из 3 частей', sru:'HR-чек-лист · Часть 1, пункт 4 — Ворота'},
  {id:'trk-g5', t:'Decide how the school gets paid before you sign anything', src:'HR checklist · Part 1, item 5 — The gate', ru:'Решите, как оплачивается школа, до того как что-либо подписывать', sru:'HR-чек-лист · Часть 1, пункт 5 — Ворота'}
 ]},
 {name:'Proof', steps:[
  {id:'trk-p1', t:'Treat your first job as a 12-month experience bank, not a home', src:'HR checklist · Part 2, item 6 — Proof', ru:'Относитесь к первой работе как к банку опыта на 12 месяцев, а не как к дому', sru:'HR-чек-лист · Часть 2, пункт 6 — Доказательства'},
  {id:'trk-p2', t:'Buy the endorsement letters in order: tanker and doubles first, hazmat next', src:'HR checklist · Part 2, item 7 — Proof', ru:'Покупайте буквы-допуски по порядку: сначала цистерна и двойные прицепы, потом опасные грузы', sru:'HR-чек-лист · Часть 2, пункт 7 — Доказательства'},
  {id:'trk-p3', t:'Add the TWIC card when your target freight touches ports, plants or rail', src:'HR checklist · Part 2, item 8 — Proof', ru:'Добавьте карту TWIC, когда ваш целевой груз касается портов, заводов или железной дороги', sru:'HR-чек-лист · Часть 2, пункт 8 — Доказательства'},
  {id:'trk-p4', t:'Start your clean-record file and keep every clean inspection', src:'HR checklist · Part 2, item 9 — Proof', ru:'Заведите папку чистой истории и храните каждую чистую проверку', sru:'HR-чек-лист · Часть 2, пункт 9 — Доказательства'},
  {id:'trk-p5', t:'Master one hands-on freight skill — a robot cannot do it', src:'HR checklist · Part 2, item 10 — Proof', ru:'Освойте один ручной навык работы с грузом — робот этого не умеет', sru:'HR-чек-лист · Часть 2, пункт 10 — Доказательства'}
 ]},
 {name:'Get picked', steps:[
  {id:'trk-k1', t:'At month 12–24, move seats with your record file in hand', src:'HR checklist · Part 3, item 11 — Get picked', ru:'На 12–24-й месяц переходите на другое место с папкой истории в руках', sru:'HR-чек-лист · Часть 3, пункт 11 — Выбор вас'},
  {id:'trk-k2', t:'Learn to read pay plans the way carriers write them', src:'HR checklist · Part 3, item 12 — Get picked', ru:'Научитесь читать планы оплаты так, как их пишут перевозчики', sru:'HR-чек-лист · Часть 3, пункт 12 — Выбор вас'},
  {id:'trk-k3', t:'Price the owner-operator door honestly before you touch it', src:'HR checklist · Part 3, item 13 — Get picked', ru:'Честно посчитайте дверь своего грузовика, до того как её трогать', sru:'HR-чек-лист · Часть 3, пункт 13 — Выбор вас'},
  {id:'trk-k4', t:'Once a quarter, check your lane against the driverless map', src:'HR checklist · Part 3, item 14 — Get picked', ru:'Раз в квартал проверяйте свой маршрут по карте беспилотных трасс', sru:'HR-чек-лист · Часть 3, пункт 14 — Выбор вас'}
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
 {h:'The first federal driverless-truck rule is written — and hazmat is left out of it', d:'Oct 7, 2026 · FMCSA exemption (Docket FMCSA-2026-0958, 2026–2031): driverless trucks may use cab beacons instead of warning triangles. The conditions explicitly prohibit hazmat operations under the relief.', map:'Your checklist: the endorsement stack just got a legal wall behind it. Tanker & hazmat keeps a person in the seat by written rule — watch this docket; if hazmat is ever added, the tanker verdict gets re-checked the same week.', hRu:'Написано первое федеральное правило для беспилотных грузовиков — и опасные грузы из него исключены', dRu:'7 октября 2026 · Исключение FMCSA (дело FMCSA-2026-0958, 2026–2031): беспилотные грузовики могут использовать маячки на кабине вместо аварийных треугольников. Условия прямо запрещают перевозку опасных грузов в рамках этого послабления.', mapRu:'Ваш чек-лист: за набором допусков теперь стоит юридическая стена. Цистерны и опасные грузы сохраняют человека на месте письменным правилом — следите за этим делом; если опасные грузы когда-нибудь добавят, вердикт по цистернам перепроверят в ту же неделю.'},
 {h:'Aurora’s driverless map: 250,000 miles, five Sun Belt lanes, one admitted weakness', d:'Feb 11, 2026 · Aurora Innovation: 250,000 driverless miles by Jan 2026; lanes Dallas–Houston, Fort Worth–El Paso, El Paso–Phoenix, Fort Worth–Phoenix (~1,000 mi), Dallas–Laredo. Weather constrained its Texas driverless ops about 40% of the time in 2025 (company’s own figure). "200+ trucks by end of 2026" is an expectation, not a count.', map:'Your checklist: run the quarterly lane check against this exact list. If your regular lane is on it and you run long-haul, your move clock is running. Northern and city lanes are not on it — weather is the stated reason.', hRu:'Карта беспилотных трасс Aurora: 250 000 миль, пять трасс Солнечного пояса, одна признанная слабость', dRu:'11 февраля 2026 · Aurora Innovation: 250 000 беспилотных миль к январю 2026; маршруты Даллас–Хьюстон, Форт-Уэрт–Эль-Пасо, Эль-Пасо–Финикс, Форт-Уэрт–Финикс (около 1 000 миль), Даллас–Ларедо. Погода ограничивала её беспилотные операции в Техасе примерно 40% времени в 2025 году (собственная цифра компании). «Более 200 грузовиков к концу 2026» — ожидание, а не подсчёт.', mapRu:'Ваш чек-лист: проводите квартальную проверку маршрута именно по этому списку. Если ваш обычный маршрут на нём и вы на дальних рейсах — ваши часы переезда идут. Северных и городских трасс на нём нет — причина названа: погода.'},
 {h:'Kodiak: 35 driverless trucks already work the oilfields; the highway launch is a target, not a fact', d:'Jun 30 / Sep 25, 2026 · Kodiak AI + Atlas Energy: 35 driverless trucks, 40,000+ paid driverless hours hauling frac sand in the Permian Basin (since Dec 2024). Dallas–Houston named as the highway launch lane; unsupervised highway service targeted by end of 2026.', map:'Your checklist: this is forecast F-TD1’s most likely trigger. When driver-out highway service actually starts — paying freight, no safety driver — your Radar flags it that week, and Texas long-haul drivers treat it as a move signal.', hRu:'Kodiak: 35 беспилотных грузовиков уже работают на нефтепромыслах; запуск на шоссе — цель, а не факт', dRu:'30 июня / 25 сентября 2026 · Kodiak AI + Atlas Energy: 35 беспилотных грузовиков, более 40 000 оплаченных беспилотных часов на перевозке песка для гидроразрыва в Пермском бассейне (с декабря 2024). Даллас–Хьюстон назван стартовым шоссе; беспилотный сервис на шоссе намечен к концу 2026 года.', mapRu:'Ваш чек-лист: это самый вероятный триггер прогноза F-TD1. Когда сервис на шоссе без водителя действительно начнётся — платный груз, без страхующего водителя, — ваш Радар отметит это в ту же неделю, а дальнобойщики Техаса воспримут как сигнал к переезду.'},
 {h:'The middle mile went driverless in a smaller truck (Gatik, 85,000 orders)', d:'Aug 25, 2026 · Gatik (company-reported): 85,000 driverless orders completed in Class 3–7 box trucks on fixed warehouse-to-store routes for Walmart, Kroger, Tyson, PepsiCo. Different vehicle class — not Class 8.', map:'Your checklist: not your seat — but it proves the pattern your map is built on: fixed + repeated + predictable automates first, in every truck size. It is also why "delivery driver" is a separate PathCheck map, not a seat on yours.', hRu:'Средняя миля ушла беспилотникам на грузовике поменьше (Gatik, 85 000 заказов)', dRu:'25 августа 2026 · Gatik (цифры самой компании): 85 000 выполненных беспилотных заказов на фургонах классов 3–7 по фиксированным маршрутам склад–магазин для Walmart, Kroger, Tyson, PepsiCo. Другой класс машин — не Class 8.', mapRu:'Ваш чек-лист: это не ваше место, но доказательство закономерности, на которой построена ваша карта: фиксированное + повторяющееся + предсказуемое автоматизируется первым, в любом размере грузовика. Поэтому «водитель доставки» — отдельная карта PathCheck, а не место на вашей.'},
 {h:'The "driver shortage" shield got thinner — from the industry’s own economist', d:'Oct 2025 · ATA chief economist Bob Costello reframed the shortage as "a quality problem around drivers, much more so than an absolute number". ATRI’s 2025 industry survey ranks the shortage No. 12 — outside its top 10 for the first time.', map:'Your checklist: recruiters will keep selling the shortage to fill long-haul seats. The shortage that exists is for experienced, clean-record drivers — the profile your checklist builds. Become the scarce version; do not rent the slogan.', hRu:'Щит «нехватки водителей» стал тоньше — из уст экономиста самой индустрии', dRu:'Октябрь 2025 · Главный экономист ATA Боб Костелло переформулировал нехватку: «проблема качества водителей, а не абсолютного их числа». Опрос индустрии ATRI 2025 ставит нехватку водителей на 12-е место — впервые вне первой десятки.', mapRu:'Ваш чек-лист: вербовщики продолжат продавать нехватку, чтобы заполнить места на дальних рейсах. Нехватка, которая существует, — это опытные водители с чистой историей: профиль, который строит ваш чек-лист. Станьте редкой версией; не арендуйте лозунг.'},
 {h:'9,985 CDL school locations have been removed from the federal registry', d:'Nov 1, 2026 · FMCSA Training Provider Registry (live counters): 18,338 active providers, 31,129 locations, 9,985 locations removed, 34,876 drivers trained in October 2026 alone.', map:'Your checklist: the registry check, applied twice — check any school before money moves, and again the week training starts. Already licensed? Check the school that trained you once: a later removal for fraud is something you want to learn from the registry, not from a carrier’s background check.', hRu:'9 985 точек школ CDL удалены из федерального реестра', dRu:'1 ноября 2026 · Реестр учебных центров FMCSA (живые счётчики): 18 338 активных центров, 31 129 точек, 9 985 точек удалено, 34 876 водителей обучено только за октябрь 2026.', mapRu:'Ваш чек-лист: проверка реестра, применённая дважды — проверяйте любую школу до перевода денег и ещё раз в неделю начала обучения. Права уже есть? Проверьте школу, которая вас учила, один раз: позднее удаление за мошенничество лучше узнать из реестра, а не из проверки биографии у перевозчика.'}
];

/* ===== Truck Driver — Russian (RU) content layer ===== */
PROF_META_RU.truckdriver = 'Водитель грузовика';

Object.assign(DOORS_RU, {
  otr:'Используйте дальние рейсы как банк на 12 месяцев, а не как дом: один чистый год, за этот год купите буквы-допуски в права, потом переходите на городское, цистерное или платформенное место на этой карте.',
  regional:'Вы на месте с вердиктом ДА — держитесь за него и берегите чистую историю. Следите за Радаром: если ваш точный маршрут появится в списке беспилотных сетей, ваши часы на переезд запустятся в ту же неделю.',
  local:'Вы на месте с вердиктом ДА. А если вы ещё не здесь — именно ради этого места и нужен первый год: 12 чистых месяцев, три буквы-допуска в права, потом подавайтесь с папкой своей истории в руках.',
  tanker:'Вы на месте с вердиктом ДА — держите допуски на цистерну и опасные грузы действующими, а историю безупречной (на этом месте увольняют за бумаги). Следующие двери отсюда: магистральные рейсы LTL (less-than-truckload — сборные грузы, крупные городские перевозчики) и цистерны при заводах.',
  flatbed:'Вы на месте с вердиктом ДА — защищает вас навык крепления груза: осваивайте его и храните доказательства. Опыт с негабаритом, низкорамными платформами и автовозами — это то, по чему отбирают в самых дорогих вакансиях.',
  ownerop:'Посчитайте всё до подписи: ваш грузовик, ваш кредит, ваша таблица. Ловушечная версия этого места — лизинг с выкупом у того же перевозчика, который контролирует ваши грузы.'
});

GRIDINFO_RU.truckdriver = {head:'Водитель грузовика — ДА. Место дальнобойщика на длинных рейсах — НЕТ.', short:'«Водитель грузовика» — это шесть разных работ. OTR (over-the-road — дальние рейсы между штатами, дом раз в 2–3 недели) — единственное открытое место: беспилотные грузовики уже ездят по его трассам. Городская работа, цистерны, платформы, региональные рейсы и свой грузовик — хорошие ставки, у каждой свой срок.'};

DOORSTEP_RU.prof.truckdriver = {
  student:'до того как любая школа возьмёт ваши деньги: выберите целевое место на бумаге — «город», «цистерна», «платформа», а не «водитель грузовика». Права одни и те же. Карьера — нет.',
  early:'в этом месяце: запишите дату переезда на 12-й месяц, а потом ведите машину так, будто год — это доказательство: хорошие места на этой карте покупают чистые истории, а не мили.',
  mid:'на этой неделе: проверьте ваш точный маршрут по карте беспилотных трасс в Радаре. Длинные трассы в Техасе и Аризоне уже на ней; городская работа, цистерны и платформы — нет.',
  senior:'посчитайте свои годы: магистральные вакансии дают в среднем 100 000–107 000 долларов, автовозы — 70 000–120 000+ долларов. При 5+ чистых годах на этой карте для вас открыты все двери. Выбирайте по деньгам, а не по привычке.'};
DOORSTEP_RU.seat.otr = {
  student:'до того как любая школа возьмёт ваши деньги: выберите целевое место на бумаге — напишите «город» или «цистерна», а не «водитель грузовика». Школы продают права. Место — ваше решение.',
  early:'в этом месяце: запишите дату переезда — 12-й месяц. Потом ведите этот год как доказательство: ни одна предотвратимая авария не стоит дороже любого бонуса в вашем плане оплаты.',
  mid:'на этой неделе: найдите свой маршрут на карте беспилотных трасс (она в вашем Радаре). Если ваш обычный маршрут есть в опубликованной беспилотной сети — окно переезда у вас этот квартал, а не этот год.',
  senior:'посчитайте свои двери выхода по вашим реальным цифрам: магистральные вакансии LTL в среднем дают 100 000–107 000 долларов в год, а ваши годы и чистая история — именно то, по чему там отбирают.'};
DOORSTEP_RU.seat.regional = {
  student:'когда школы и вербовщики будут вас уговаривать, задайте один вопрос: «кто из ваших выпускников работает регионально, домой каждую неделю?» Если все уходят только в дальние рейсы — эта школа продаёт одно-единственное место.',
  early:'в этом месяце: берегите историю. Региональные места у хороших перевозчиков отбирают по тому же, что и LTL: один чистый год дороже любого бонуса за подпись, ради которого прыгают с места на место.',
  mid:'на этой неделе: добавьте одну букву-допуск (цистерна — самая дешёвая: один письменный тест). Это стоит полдня и расширяет список региональных вакансий, на которые вы подходите.',
  senior:'проведите квартальную проверку маршрута: ваш маршрут против карты беспилотных трасс. Региональные рейсы в безопасности, пока внедрение идёт по длинным трассам; проверка — это способ узнать первым, если это изменится.'};
DOORSTEP_RU.seat.local = {
  student:'сегодня прочитайте три городские вакансии LTL (FedEx Freight, XPO, Old Dominion). Все просят одно и то же: 1 год опыта и три буквы-допуска в права. Этот список теперь — ваш план на школу.',
  early:'в этом месяце: покупайте буквы-допуски по порядку — двойные/тройные прицепы и цистерна сдаются письменными тестами; проверку биографии для опасных грузов начинайте рано: ожидание в TSA — самая медленная часть.',
  mid:'на этой неделе: если вы дома каждый день, но не на деньгах LTL, — подавайтесь выше: городские вакансии по 30,35–36,01 доллара в час нанимают именно с вашего места, с вашей папкой истории в приложении.',
  senior:'посчитайте дверь магистральных рейсов: опубликованные средние — 100 000–107 000 долларов в год, с ночными рейсами и очередью по стажу. Ваши годы там — валюта; тратьте их обдуманно.'};
DOORSTEP_RU.seat.tanker = {
  student:'планируйте буквы с первого дня: цистерна (N) — один письменный тест; опасные грузы (H) требуют проверки биографии в TSA (85,25 доллара), начатой за недели до теста. Выстройте их, пока вы ещё в школе.',
  early:'в этом месяце: подавайте на проверку TSA для опасных грузов сейчас, а не когда появится вакансия цистерны, — вакансии с бонусами 10 000–12 000 долларов не будут ждать ваши бумаги.',
  mid:'на этой неделе: проверьте свои бумаги так, как это место проверяет вас: срок медкарты, продление допусков, запись в Clearinghouse (федеральная база нарушений водителей). В цистернах увольняют за бумаги.',
  senior:'посмотрите на двери цистерн при заводах и магистральных цистерн LTL — те же буквы, стабильнее грузы. И держите один глаз на правиле: ваша защита — письменное федеральное исключение, а правила пересматривают.'};
DOORSTEP_RU.seat.flatbed = {
  student:'будьте честны с физической стороной до того, как целиться сюда: один перевозчик на платформах проверяет на инструктаже, поднимет ли водитель тяжёлый брезент весом 90 фунтов (tarp — брезент для укрытия груза на открытой платформе). Если это нормально — место за это платит.',
  early:'в этом месяце: освойте один навык крепления на практике — ремни, цепи, защита углов — и фотографируйте свои лучше всех закреплённые грузы. Этот альбом — ваша заявка на вакансии от 0,70 доллара за милю и выше.',
  mid:'на этой неделе: добавьте одну специализацию — низкорамная платформа, негабарит или автовоз. Каждая — шаг в оплате по вакансиям: тяжёлые перевозки и автовозы — вершина всей этой карты, 70 000–120 000+ долларов.',
  senior:'посчитайте дверь своего грузовика изнутри этого места: владельцы на платформах и автовозах держат связи с грузоотправителями. Прогоните честную таблицу (чек-лист, §13) до любого платежа за грузовик.'};
DOORSTEP_RU.seat.ownerop = {
  student:'не покупайте грузовик. Порядок дверей такой: права → один чистый год водителем в компании → ваши собственные цифры. Кто продаёт вам лизинг с выкупом до вашего первого года — продаёт вам платёж за свой грузовик.',
  early:'в этом месяце: заведите файл расходов — каждую неделю записывайте, во сколько этот грузовик обошёлся бы вам как владельцу (топливо, страховка 298 долларов в неделю, прицеп 250–450 долларов в неделю). Год такого файла — это ваш бизнес-план.',
  mid:'на этой неделе: прогоните один реальный груз через честную математику: вал, потом топливо, страховка, прицеп, обслуживание, налоги. Если груз всё ещё платит вам больше, чем работа в компании, — дверь настоящая. Если нет — это просто краска.',
  senior:'проверяйте процент, а не вал: открытые нами предложения платят 80–87% от цены груза. Если ваш перевозчик платит ниже этой полосы и контролирует ваши грузы — риск держите вы, а бизнес держат они.'};

Object.assign(BIGGOALS_RU, {
  otr:'Превратите открытое место в банк: 12 чистых месяцев, купленный набор букв-допусков — и выход: деньги городского, цистерного или магистрального места с целой историей.',
  regional:'Держите место «домой каждую неделю» и заставьте его платить как дальние рейсы: добавленные допуски, безупречная история и проверка маршрута каждый квартал, чтобы карта роботов никогда не застала вас врасплох.',
  local:'Вершина городской игры: деньги LTL по 36 долларов в час, дома каждую ночь, а магистральная очередь — опубликованные средние 100 000–107 000 долларов — как приз за ваш стаж.',
  tanker:'Будьте водителем, которого защищает сам закон: полный набор допусков на опасные грузы, безупречные бумаги, первый звонок за грузами, к которым роботу прикасаться запрещено.',
  flatbed:'Деньги специалиста за руки специалиста: негабарит, низкорамная платформа или автовоз — вакансии на 70 000–120 000+ долларов — с альбомом креплений, который нанимает вас с первого взгляда.',
  ownerop:'Настоящий малый бизнес на колёсах: 85%+ от цены груза, расходы известные до доллара, связи с грузоотправителями — ваши, а не перевозчика.'
});
BIGGOAL_PROF_RU.truckdriver = 'Место, которое роботы не могут уценить: выбранное нарочно, с правами до самого верха и папкой чистой истории, из-за которой перевозчики соревнуются за вас.';
