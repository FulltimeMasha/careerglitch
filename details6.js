/* Career Glitch — step details, expansion wave 4 (skilled trades, Nov 1 2026).
   STEP_DETAILS for electrician (elc-), hvac (hvc-) and plumber (plb-),
   verbatim from ~/workspace/cg-staging/trades/spec.md §8 of each part;
   links are the spec's verified link banks (fetched 1 Nov 2026). */
var STEP_DETAILS = (typeof STEP_DETAILS !== "undefined" && STEP_DETAILS) || {};
Object.assign(STEP_DETAILS, {
  'elc-g1': {
    what: 'First pick the way in that pays you. A registered apprenticeship pays from year one. It costs $0. A private school can charge $21,325 to about $42,000. And you may still finish as just a helper.',
    whatRu: 'Сначала выберите путь, где платят вам. Зарегистрированное ученичество (apprenticeship — учёба прямо на работе) платит с первого года. Учёба стоит $0. Частная школа может взять от $21,325 до примерно $42,000. И после неё вы можете стать просто помощником.',
    how: ['Search apprenticeship.gov by your ZIP code for electrician programs', 'Compare your local IBEW/JATC (union training program) with one non-union program', 'Check the school\'s price on its own website before you talk to sales', 'Apply to the apprenticeship first. School is only the backup'],
    howRu: ['Поищите программы для электриков на apprenticeship.gov по вашему ZIP-коду', 'Сравните местный IBEW/JATC (учебная программа профсоюза) и одну программу без профсоюза', 'Узнайте цену школы на её сайте до разговора с продавцами', 'Сначала подайтесь в ученичество. Школа — только запасной вариант'],
    why: 'Apprenticeship pays about $20.30 an hour in year one. School charges five figures for the same first job.',
    whyRu: 'Ученичество платит около $20.30 в час в первый год. Школа берёт пятизначную сумму за ту же первую работу.',
    links: [
      {
        t: 'Apprenticeship Job Finder — Apprenticeship.gov',
        u: 'https://www.apprenticeship.gov/apprenticeship-job-finder'
      },
      {
        t: 'electrical training ALLIANCE (IBEW + NECA)',
        u: 'https://electricaltrainingalliance.org/'
      }
    ]
  },
  'elc-g2': {
    what: 'Apply on time. Apprenticeship classes open once a year. They close when the spots fill up. One example: 2026 class closed, 2027 opens January 1 to March 31.',
    whatRu: 'Подайтесь вовремя. Набор в ученичество — раз в год. Он закрывается, когда места кончаются. Пример: набор 2026 закрыт, на 2027 — с 1 января по 31 марта.',
    how: ['Find the application dates of every program near you', 'Put the opening date in your calendar, not the closing date', 'Get your papers ready early: diploma or GED, grades, photo ID, algebra in your grades', 'Treat the test date like the first day of a job'],
    howRu: ['Найдите даты приёма всех программ рядом с вами', 'Поставьте в календарь дату открытия, а не закрытия', 'Заранее соберите бумаги: диплом или GED, оценки, удостоверение с фото, алгебру в оценках', 'Относитесь к дате теста как к первому дню работы'],
    why: 'Miss the dates and you wait a whole year. By law, classes can\'t be bigger. So set a reminder now!',
    whyRu: 'Пропустите даты — придётся ждать целый год. По закону классы нельзя сделать больше. Поставьте напоминание прямо сейчас!',
    links: [
      {
        t: 'Apprenticeship — IBEW Local 269 (a JATC example)',
        u: 'https://ibew269.com/apprenticeship/'
      },
      {
        t: 'Apprenticeship Job Finder — Apprenticeship.gov',
        u: 'https://www.apprenticeship.gov/apprenticeship-job-finder'
      }
    ]
  },
  'elc-g3': {
    what: 'Get your state apprentice card before you count hours. The card registers you with the state. Hours without it often don\'t count toward the license.',
    whatRu: 'Получите карту ученика в штате до того, как считать часы. Карта — это ваша регистрация в штате. Часы без неё часто не идут в лицензию.',
    how: ['Find the page where your state registers apprentices', 'Register before your first counted shift, or in the first weeks', 'Keep a photo of the card on your phone', 'Ask your sponsor (the employer who trains you) to confirm your hours are reported'],
    howRu: ['Найдите страницу, где ваш штат регистрирует учеников', 'Зарегистрируйтесь до первой смены, которая идёт в зачёт, или в первые недели', 'Держите фото карты в телефоне', 'Попросите спонсора (работодателя, который вас учит) подтвердить, что ваши часы записывают'],
    why: 'The license needs about 8,000 recorded hours. Hours with no record are hard to prove. A simple log saves you.',
    whyRu: 'Для лицензии нужно около 8,000 записанных часов. Часы без записи трудно доказать. Простой журнал вас спасёт.',
    links: [
      {
        t: 'BLS Occupational Outlook Handbook — Electricians',
        u: 'https://www.bls.gov/ooh/construction-and-extraction/electricians.htm'
      }
    ]
  },
  'elc-g4': {
    what: 'Learn the ratio rule in your state. It says how many apprentices one journeyman (licensed electrician) can lead. Often it\'s just one. This number decides how many spots exist near you.',
    whatRu: 'Узнайте правило соотношения (ratio) в вашем штате. Оно говорит, скольких учеников может вести один подмастерье (journeyman). Часто — только одного. От этого зависит, сколько мест есть рядом с вами.',
    how: ['Search your state\'s licensing site for \'apprentice ratio\'', 'Ask the program what ratio they hire by', 'If your state is 1:1, apply to more programs. Spots are rarer', 'Remember this rule when you become a journeyman. It limits your hiring too'],
    howRu: ['Поищите \'apprentice ratio\' на сайте лицензий вашего штата', 'Спросите программу, по какому соотношению они нанимают', 'Если в штате 1:1, подавайтесь в больше программ. Мест меньше', 'Помните это правило, когда станете подмастерьем. Оно ограничит и ваш найм'],
    why: 'A master electrician says it himself: he wants to hire an apprentice every year. The rules won\'t let him keep them all on one team.',
    whyRu: 'Мастер-электрик говорит сам: он хочет брать ученика каждый год. Но правила не дают держать всех в одной бригаде.',
    links: [
      {
        t: 'BLS Occupational Outlook Handbook — Electricians',
        u: 'https://www.bls.gov/ooh/construction-and-extraction/electricians.htm'
      }
    ]
  },
  'elc-p1': {
    what: 'Write down your 8,000 hours by work type as you go: commercial, industrial, service, home. A log is just a notebook or notes app. One line per day.',
    whatRu: 'Записывайте ваши 8,000 часов по видам работ сразу: офисы, заводы, ремонт, дома. Журнал — это просто блокнот или заметки. Одна строка в день.',
    how: ['Write date, site and work type every day', 'Each week, check your total against your program\'s records', 'Fix mistakes the same month, not at the end', 'Keep the log after you get the license. It proves your experience for the next job'],
    howRu: ['Пишите дату, объект и вид работы каждый день', 'Каждую неделю сверяйте сумму с записями программы', 'Исправляйте ошибки в тот же месяц, а не в конце', 'Храните журнал и после лицензии. Он доказывает ваш опыт для следующей работы'],
    why: 'The work you can prove decides the jobs you get later. Factory hours open factory jobs.',
    whyRu: 'Опыт, который вы можете доказать, решает, какую работу вы получите потом. Часы на заводе открывают работу на заводах.',
    links: []
  },
  'elc-p2': {
    what: 'Pass the journeyman exam right after your hours are done. This state license lets you work without a boss watching. 24 of 36 real job posts ask for it.',
    whatRu: 'Сдайте экзамен на подмастерье (journeyman) сразу, как наберёте часы. Эта лицензия штата разрешает работать без присмотра. Её просят в 24 из 36 настоящих вакансий.',
    how: ['Book the exam as soon as your hours are certified', 'Study the code book (NEC — the national electrical rules) like the exam tests it: how fast you find things', 'Take a prep course only if it trains timed lookups, not lectures', 'Didn\'t pass? That\'s OK. Sign up again right away. You remember the most now'],
    howRu: ['Запишитесь на экзамен, как только ваши часы подтверждены', 'Учите книгу правил (NEC — национальные правила электромонтажа) так, как проверяет экзамен: на скорость поиска', 'Берите курс подготовки, только если там тренируют поиск на время, а не лекции', 'Не сдали? Ничего страшного. Сразу записывайтесь снова — сейчас вы помните больше всего'],
    why: 'Every top job post checks for this license. It\'s what the whole apprenticeship is for.',
    whyRu: 'Все лучшие вакансии требуют эту лицензию. Ради неё и нужно всё ученичество.',
    links: [
      {
        t: 'BLS Occupational Outlook Handbook — Electricians',
        u: 'https://www.bls.gov/ooh/construction-and-extraction/electricians.htm'
      }
    ]
  },
  'elc-p3': {
    what: 'Add the safety cards big sites check for: OSHA 30 (30-hour construction safety course) and NFPA 70E (how to work safely near live power).',
    whatRu: 'Добавьте карты безопасности, которые требуют большие объекты: OSHA 30 (30-часовой курс безопасности на стройке) и NFPA 70E (как безопасно работать рядом с током).',
    how: ['Ask your sponsor which cards their big clients require', 'Take OSHA 30 first. Almost everyone checks for it', 'Add NFPA 70E before applying to factory or data-center companies', 'Keep both cards up to date. An expired card quietly gets you rejected'],
    howRu: ['Спросите спонсора, какие карты требуют их крупные клиенты', 'Сначала пройдите OSHA 30. Его требуют почти все', 'Добавьте NFPA 70E до того, как подаваться на заводы или в дата-центры', 'Следите, чтобы обе карты были действующими. С просроченной картой вам тихо откажут'],
    why: 'Data centers and factories check these cards before they even look at your hours.',
    whyRu: 'Дата-центры и заводы смотрят на эти карты раньше, чем на ваши часы.',
    links: []
  },
  'elc-p4': {
    what: 'Keep one specialty fresh: EV charging, solar with batteries, generators, or control wiring. Job posts ask for these the most.',
    whatRu: 'Держите одну специализацию в форме: зарядки для электромобилей (EV), солнечные панели с батареями, генераторы или проводка систем управления. Их чаще всего просят в вакансиях.',
    how: ['Pick the specialty local job posts ask for most', 'Take the training from the equipment maker', 'Write down every specialty hour separately', 'Once a year, check your choice against new job posts'],
    howRu: ['Выберите специализацию, которую чаще всего просят местные вакансии', 'Пройдите обучение у производителя этого оборудования', 'Записывайте часы по специализации отдельно', 'Раз в год сверяйте выбор со свежими вакансиями'],
    why: 'The license gets you hired. The specialty decides how much you get paid.',
    whyRu: 'Лицензия даёт работу. Специализация решает, сколько вам платят.',
    links: [
      {
        t: 'BLS Occupational Outlook Handbook — Electricians',
        u: 'https://www.bls.gov/ooh/construction-and-extraction/electricians.htm'
      }
    ]
  },
  'elc-k1': {
    what: 'Go for the buildings that pay. Data centers, factories and hospitals pay $48.50–$62.00 an hour. New homes pay $24–$30 an hour for the same license.',
    whatRu: 'Выбирайте здания, где платят. Дата-центры, заводы и больницы платят $48.50–$62.00 в час. На стройке жилых домов за ту же лицензию — $24–$30 в час.',
    how: ['List the factory and data-center companies hiring near you', 'Apply to their job posts directly, not to the general pool', 'Put your factory hours from the log first on your resume', 'Take home building work only as a step, not the goal'],
    howRu: ['Составьте список заводских компаний и дата-центров, которые нанимают рядом', 'Подавайтесь прямо в их вакансии, а не в общий поток', 'Поставьте в резюме первыми часы на заводах из журнала', 'Работу на жилых домах берите только как ступеньку, а не как цель'],
    why: 'In this trade, the building sets your pay, not the tool. Top pay is more than double the lowest.',
    whyRu: 'В этом ремесле оплату задаёт здание, а не инструмент. Самая высокая оплата больше самой низкой вдвое с лишним.',
    links: []
  },
  'elc-k2': {
    what: 'If you take repair work, get hourly or guaranteed pay. Commission-only turns your license into a sales target someone else sets.',
    whatRu: 'Если берёте ремонтную работу, просите почасовую или гарантированную оплату. Оплата только с продаж превращает лицензию в план продаж от чужого человека.',
    how: ['Read the pay part of any offer before the duties part', 'Ask in writing: what happens to your pay in a slow week?', 'Compare with real hourly pay: licensed repair work pays $45–$65 an hour', 'If they won\'t write the guarantee down, it\'s OK to say no'],
    howRu: ['В любом предложении сначала читайте про оплату, потом про обязанности', 'Спросите письменно: что будет с оплатой в неделю без заказов?', 'Сравните с реальной почасовой оплатой: ремонт с лицензией — $45–$65 в час', 'Если гарантию не пишут на бумаге, смело отказывайтесь'],
    why: 'The same license pays $45–$65 an hour with no sales target. The target is the employer\'s choice, not how the trade works.',
    whyRu: 'Та же лицензия даёт $45–$65 в час без плана продаж. План — выбор работодателя, а не правило ремесла.',
    links: []
  },
  'elc-k3': {
    what: 'After the journeyman card, look at the master exam. A master license lets you lead others and get permits. In most states, you need it to open your own shop.',
    whatRu: 'После карты подмастерья посмотрите на экзамен на мастера (master). С лицензией мастера можно руководить другими и получать разрешения на работы. В большинстве штатов без неё не открыть свою фирму.',
    how: ['Check what your state needs for master: years as a journeyman plus the exam', 'Put the first date you qualify in your calendar', 'Learn business basics too: estimates, permits, inspections', 'Take the exam as soon as you\'re allowed'],
    howRu: ['Узнайте, что нужно для мастера в вашем штате: годы работы подмастерьем плюс экзамен', 'Поставьте в календарь первую дату, когда вам можно сдавать', 'Учите и основы бизнеса: сметы, разрешения, проверки', 'Сдавайте экзамен, как только вам разрешат'],
    why: 'Every step up — foreman, estimator, owner — asks for the master license or pays like it.',
    whyRu: 'Каждая ступень выше — прораб, сметчик, владелец — требует лицензию мастера или платит как за неё.',
    links: [
      {
        t: 'BLS Occupational Outlook Handbook — Electricians',
        u: 'https://www.bls.gov/ooh/construction-and-extraction/electricians.htm'
      }
    ]
  },
  'elc-k4': {
    what: 'Going solo? Get the contractor license and insurance before your first job alone. In most states the master license comes first. The contractor license lets your business sign contracts.',
    whatRu: 'Уходите в своё дело? Получите лицензию подрядчика (contractor license) и страховку до первого заказа. В большинстве штатов сначала нужна лицензия мастера. Лицензия подрядчика разрешает вашей фирме подписывать договоры.',
    how: ['Read your state\'s contractor rules fully', 'Price insurance and bonding (a money guarantee for clients) before you price jobs', 'Register the business and the license in the same month', 'Start with service contracts. Repeat work is what buyers pay for'],
    howRu: ['Прочитайте правила для подрядчиков вашего штата полностью', 'Узнайте цену страховки и поручительства (bonding — денежная гарантия для клиентов) до расчёта заказов', 'Зарегистрируйте фирму и лицензию в один месяц', 'Начните с договоров на обслуживание. Покупатели платят именно за повторную работу'],
    why: 'Investors have bought 800+ trade shops since 2022. They buy the license, the name and the repeat clients.',
    whyRu: 'С 2022 года инвесторы купили более 800 фирм в ремёслах. Они покупают лицензию, имя и постоянных клиентов.',
    links: []
  },
  'elc-k5': {
    what: 'Each year, check your state\'s ratio and reciprocity rules. Reciprocity means another state accepts your license. A license that works in many states is worth more while workers are scarce.',
    whatRu: 'Каждый год проверяйте правила соотношения и взаимного признания (reciprocity — когда другой штат принимает вашу лицензию). Лицензия, которая работает в разных штатах, стоит дороже, пока рабочих не хватает.',
    how: ['List the states that accept your license today', 'Watch states that change trade laws. Several did in 2026', 'If a state with data centers is next to yours, check the move against real job posts', 'Keep your training hours up to date so the license never expires'],
    howRu: ['Составьте список штатов, которые принимают вашу лицензию сегодня', 'Следите за штатами, которые меняют законы о ремёслах. Несколько сделали это в 2026 году', 'Если рядом штат с дата-центрами, оцените переезд по настоящим вакансиям', 'Вовремя набирайте часы обучения, чтобы лицензия не истекла'],
    why: 'Workers are scarce everywhere, but pay is local. Moving is a raise no boss can block.',
    whyRu: 'Рабочих не хватает везде, а платят по-разному в каждом месте. Переезд — прибавка, которую не запретит ни один начальник.',
    links: []
  },
  'elc-k6': {
    what: 'Don\'t stay in a prefab shop for good. Prefab means building parts in a factory: electrical rooms, pipe racks, ready panels. The work is real. But shop hours pay less and may not count toward the license the same way.',
    whatRu: 'Не оставайтесь в цеху сборки (prefab — детали собирают на заводе: электрощитовые, трубы, готовые щиты) навсегда. Работа настоящая. Но в цеху платят меньше, и часы могут не идти в лицензию так же.',
    how: ['If you work a prefab season, get in writing how the hours are reported', 'Log site hours apart from shop hours', 'Go back to site work before the season becomes your job', 'Learn BIM drawings (digital building models) while there. That skill helps you move up'],
    howRu: ['Если работаете сезон в цеху, письменно уточните, как записывают часы', 'Записывайте часы на объекте отдельно от часов в цеху', 'Вернитесь на объекты, пока сезон не стал вашей работой', 'Пока вы там, выучите чертежи BIM (цифровые модели зданий). Этот навык помогает расти'],
    why: 'Contractors say prefab is growing fast at hospitals and data centers. It moves hours around. It doesn\'t have to limit your pay.',
    whyRu: 'Сами подрядчики пишут, что prefab быстро растёт в больницах и дата-центрах. Он меняет, где идут часы. Но не обязан ограничивать вашу оплату.',
    links: []
  },
  'hvc-g1': {
    what: 'First get the EPA 608 card — Universal if you can. EPA 608 is the federal certificate for handling refrigerant (the cooling gas). Without it, refrigerant work is illegal. No shop can send you to clients as a technician.',
    whatRu: 'Сначала получите карту EPA 608 — Universal (все типы), если получится. EPA 608 — федеральный сертификат для работы с хладагентом (газ в системе охлаждения). Без него работать с хладагентом незаконно. Ни одна фирма не отправит вас к клиентам как техника.',
    how: ['Read the EPA Section 608 page about the certificate types', 'Pick Universal. It covers every type, and commercial shops ask for it', 'Do a practice exam, then book an approved tester', 'Keep the card number in your phone and your resume'],
    howRu: ['Прочитайте страницу EPA Section 608 о видах сертификатов', 'Выберите Universal. Он покрывает все типы, и его просят крупные фирмы', 'Пройдите пробный экзамен, потом запишитесь к одобренному экзаменатору', 'Держите номер карты в телефоне и в резюме'],
    why: '13 of 27 job posts name EPA 608. All 13 require it. It\'s the only federal must-have in this trade.',
    whyRu: '13 из 27 вакансий упоминают EPA 608. Все 13 его требуют. Это единственное федеральное обязательное условие в ремесле.',
    links: [
      {
        t: 'Section 608 Technician Certification — US EPA',
        u: 'https://www.epa.gov/section608'
      }
    ]
  },
  'hvc-g2': {
    what: 'Start as a paid helper or apprentice, not with a $21K–$42K diploma. Jobs that take beginners pay them. Schools charge beginners and still turn out helpers.',
    whatRu: 'Начните как оплачиваемый помощник или ученик, а не с диплома за $21K–$42K. Работа для новичков им платит. Школы берут с новичков деньги и всё равно выпускают помощников.',
    how: ['Apply to helper jobs that say training is paid', 'Ask in writing what the job pays after training', 'Before signing up for a school, compare it with just taking the EPA exam', 'Keep the apprenticeship.gov search as your backup way in'],
    howRu: ['Подавайтесь на работу помощника, где обучение оплачивают', 'Спросите письменно, сколько платят после обучения', 'Прежде чем идти в школу, сравните её с простой сдачей экзамена EPA', 'Держите поиск на apprenticeship.gov как запасной путь'],
    why: 'A union apprentice job pays $15–$30 an hour. The diploma costs five figures to get the same first job.',
    whyRu: 'Профсоюзное ученичество платит $15–$30 в час. Диплом стоит пятизначную сумму ради той же первой работы.',
    links: [
      {
        t: 'Apprenticeship Job Finder — Apprenticeship.gov',
        u: 'https://www.apprenticeship.gov/apprenticeship-job-finder'
      }
    ]
  },
  'hvc-g3': {
    what: 'Learn your state\'s rule. Some states license HVAC (heating and cooling) technicians. Some license only the contractor. Know what your state really checks before you pay for anything.',
    whatRu: 'Узнайте правило вашего штата. Где-то лицензию получают техники HVAC (отопление и кондиционеры). Где-то — только подрядчик (contractor). Узнайте, что ваш штат правда проверяет, прежде чем за что-то платить.',
    how: ['Find your state\'s HVAC licensing page', 'Write down whether the tech, the contractor, or both need a license', 'Look at what local job posts check. They list it', 'Keep the answer next to your EPA card'],
    howRu: ['Найдите страницу лицензий HVAC вашего штата', 'Запишите, кому нужна лицензия: технику, подрядчику или обоим', 'Посмотрите, что проверяют местные вакансии. Они это пишут', 'Храните ответ рядом с картой EPA'],
    why: 'The federal card works everywhere. The license is local. Paying for the wrong paper is a hidden cost here.',
    whyRu: 'Федеральная карта действует везде. А лицензия — своя в каждом штате. Заплатить не за ту бумагу — частая скрытая трата.',
    links: [
      {
        t: 'BLS Occupational Outlook Handbook — HVAC Mechanics and Installers',
        u: 'https://www.bls.gov/ooh/installation-maintenance-and-repair/heating-air-conditioning-and-refrigeration-mechanics-and-installers.htm'
      }
    ]
  },
  'hvc-g4': {
    what: 'Pick repair over install-only early. Diagnosis means finding what\'s really broken. Top jobs pay for that skill. Swapping whole systems is the low-paid end.',
    whatRu: 'С самого начала выбирайте ремонт, а не только монтаж. Диагностика — это найти, что на самом деле сломалось. Лучшие вакансии платят за этот навык. Замена систем целиком — низкооплачиваемая часть.',
    how: ['Ask to ride along on repair calls, not only installs', 'Write down every problem you didn\'t find first. That list is your study plan', 'Learn the electrical side. Most \'not cooling\' calls are there', 'Track in your log how often you fix it the first time'],
    howRu: ['Проситесь ездить на ремонтные вызовы, а не только на монтаж', 'Записывайте каждую поломку, которую не нашли сразу. Этот список — ваш план учёбы', 'Учите электрическую часть. Большинство вызовов «не холодит» — из-за неё', 'Отмечайте в журнале, как часто чините с первого раза'],
    why: 'Repair jobs ask for 2+ years and pay up to $50 an hour for lead techs. Install-only work stops growing sooner and lower.',
    whyRu: 'Ремонтные вакансии просят 2+ года и платят до $50 в час старшему технику. Монтаж без ремонта раньше упирается в потолок, и он ниже.',
    links: []
  },
  'hvc-p1': {
    what: 'Log every system you work on: type, tonnage, problem, fix. Tonnage is how much the system cools. Jobs asking for 2+ years check this record.',
    whatRu: 'Записывайте каждую систему, с которой работали: тип, тоннаж (tonnage — мощность охлаждения), поломку, ремонт. Вакансии, где нужно 2+ года, проверяют эти записи.',
    how: ['One line per call, the same day', 'Write the problem you found, not only the part you changed', 'Count your commercial work separately. It proves you can move up', 'Bring the log to every talk about pay'],
    howRu: ['Одна строка на вызов, в тот же день', 'Пишите найденную поломку, а не только заменённую деталь', 'Считайте работу в коммерческих зданиях отдельно. Это доказывает, что вы готовы расти', 'Приносите журнал на каждый разговор о зарплате'],
    why: 'Anyone can say they have experience. A dated log is proof. Better jobs hire on proof.',
    whyRu: 'Сказать про опыт может каждый. Журнал с датами — доказательство. Лучшие работодатели нанимают по доказательствам.',
    links: []
  },
  'hvc-p2': {
    what: 'Move into commercial work by year two or three: rooftop units, chillers (big cooling machines), refrigeration. Home-only experience keeps you at the lowest pay.',
    whatRu: 'Переходите в коммерческие здания к второму-третьему году: блоки на крышах, чиллеры (большие холодильные машины), холодильное оборудование. Опыт только в домах держит вас на самой низкой оплате.',
    how: ['Tell your shop in writing you want commercial ride-alongs', 'If your shop has no commercial clients, list the companies that do', 'Log your first 25 commercial systems as a group', 'Apply to commercial jobs with the log, not just your years'],
    howRu: ['Скажите фирме письменно, что хотите ездить на коммерческие объекты', 'Если у фирмы нет таких клиентов, составьте список компаний, у которых есть', 'Запишите ваши первые 25 коммерческих систем отдельной группой', 'Подавайтесь на коммерческие вакансии с журналом, а не только с годами стажа'],
    why: 'Commercial repair pays $35–$45 an hour and asks 7–10 years at the top. Start the move years before.',
    whyRu: 'Ремонт в коммерческих зданиях платит $35–$45 в час, а наверху просят 7–10 лет. Начинайте переход за годы до этого.',
    links: []
  },
  'hvc-p3': {
    what: 'Take the NATE exam (the industry\'s technician certificate) once you have the hours. Employers list it as \'preferred\'. It\'s the cheapest proven raise in the trade.',
    whatRu: 'Сдайте экзамен NATE (отраслевой сертификат техника), когда наберёте часы. Работодатели пишут «желательно» (preferred). Это самая дешёвая прибавка в ремесле.',
    how: ['Pick the NATE area where your log has the most work', 'Study from the official materials', 'Book the exam. Then ask for a raise within 30 days of passing', 'Add it to your resume the same week'],
    howRu: ['Выберите направление NATE, где у вас больше всего записей в журнале', 'Готовьтесь по официальным материалам', 'Запишитесь на экзамен. Потом в течение 30 дней после сдачи попросите прибавку', 'Добавьте сертификат в резюме в ту же неделю'],
    why: '6 of 27 job posts name NATE. Never required, always \'preferred\'. When workers are scarce, \'preferred\' means more pay.',
    whyRu: 'NATE упоминают 6 из 27 вакансий. Не обязателен, но всегда «желателен». Когда людей не хватает, «желателен» значит больше денег.',
    links: [
      {
        t: 'NATE — North American Technician Excellence',
        u: 'https://natex.org/'
      }
    ]
  },
  'hvc-p4': {
    what: 'Learn one controls system well: Trane, Johnson Controls, Siemens, Schneider, Distech. Controls are the software that runs heating and cooling in big buildings. Job posts name these brands.',
    whatRu: 'Хорошо выучите одну систему автоматики (controls): Trane, Johnson Controls, Siemens, Schneider, Distech. Это программы, которые управляют отоплением и охлаждением больших зданий. Вакансии называют именно эти марки.',
    how: ['Pick the brand local controls job posts mention most', 'Take the maker\'s own training for it', 'Volunteer for every controls-related call your shop gets', 'Log controls hours apart from repair hours'],
    howRu: ['Выберите марку, которую чаще всего называют местные вакансии по автоматике', 'Пройдите обучение у самого производителя', 'Вызывайтесь на каждый вызов, связанный с автоматикой', 'Записывайте часы по автоматике отдельно от ремонта'],
    why: 'Nine controls jobs pay $60,000–$125,000. None of the nine mentions commission. Knowing the system protects you.',
    whyRu: 'Девять вакансий по автоматике платят $60,000–$125,000. Ни одна из девяти не упоминает комиссию. Знание системы — ваша защита.',
    links: [
      {
        t: 'ACCA — Air Conditioning Contractors of America',
        u: 'https://www.acca.org'
      }
    ]
  },
  'hvc-k1': {
    what: 'Go for controls and commercial jobs. They pay $60K–$125K, as salary or hourly. 9 of 9 controls job posts never mention commission.',
    whatRu: 'Цельтесь в автоматику и коммерческие здания. Там платят $60K–$125K, зарплатой или почасово. 9 из 9 вакансий по автоматике не упоминают комиссию.',
    how: ['Apply directly to controls job posts with your log attached', 'Lead with the brands you can prove', 'Compare total pay, not the big number. Salary with no sales target beats commission', 'Take home work only as a step'],
    howRu: ['Подавайтесь прямо в вакансии по автоматике и прикладывайте журнал', 'Начинайте с марок, опыт с которыми можете доказать', 'Сравнивайте всю оплату, а не крупную цифру. Зарплата без плана продаж лучше комиссии', 'Работу в домах берите только как ступеньку'],
    why: 'The best pay in this trade is in jobs far from selling. The job posts show it in their pay.',
    whyRu: 'Лучшая оплата в ремесле — там, где не надо продавать. Это видно по оплате в вакансиях.',
    links: []
  },
  'hvc-k2': {
    what: 'If you stay in home work, get hourly or guaranteed pay. \'Uncapped commission\' means your pay depends on selling new systems in people\'s homes.',
    whatRu: 'Если остаётесь работать в домах, просите почасовую или гарантированную оплату. «Комиссия без потолка» (uncapped commission) значит: ваш доход зависит от продажи новых систем людям.',
    how: ['Read the pay part before the duties part', 'Ask in writing what a slow month pays', 'Compare with real hourly pay: $28–$35 an hour, $30–$50 for lead techs', 'If they won\'t write down the minimum, that\'s your answer'],
    howRu: ['Сначала читайте про оплату, потом про обязанности', 'Спросите письменно, сколько платят в месяц без заказов', 'Сравните с реальной почасовой оплатой: $28–$35 в час, $30–$50 у старшего техника', 'Не хотят записать минимум — это и есть ответ'],
    why: 'One job post brags only about the commission ceiling. None of them say the minimum.',
    whyRu: 'Одна вакансия хвастается только потолком комиссии. Ни одна не пишет минимум.',
    links: []
  },
  'hvc-k3': {
    what: 'On-call work should be paid. On-call means taking turns on nights and weekends for emergencies. A quarter of job posts include it. Agree on its pay and schedule before you sign.',
    whatRu: 'Дежурства (on-call — ночи и выходные по очереди для аварий) должны оплачиваться. Они есть в четверти вакансий. Договоритесь об оплате и графике до подписания.',
    how: ['Count honestly how many nights a month you\'ll be on call', 'Ask the on-call rate and the minimum pay per callout', 'Write your current terms down (quest 5 does this)', 'Bring the log to your next review and ask for better terms'],
    howRu: ['Честно посчитайте, сколько ночей в месяц будете дежурить', 'Спросите ставку за дежурство и минимум за один выезд', 'Запишите ваши нынешние условия (это делает квест 5)', 'На следующем разговоре о зарплате придите с журналом и просите лучше'],
    why: 'One shop brags about \'minimal on-call\' as its main perk. A union job post lists its schedule as a benefit. Your nights have a price. Make sure you get paid for them.',
    whyRu: 'Одна фирма хвастается «минимумом дежурств» как главным плюсом. Профсоюзная вакансия пишет график как бонус. Ваши ночи чего-то стоят. Убедитесь, что вам за них платят.',
    links: []
  },
  'hvc-k4': {
    what: 'Add data-center skills: precision cooling, large systems, sites that can never stop. BLS says data centers drive growth. And a data center always needs cooling.',
    whatRu: 'Добавьте навыки для дата-центров: точное охлаждение (precision cooling), большие системы, объекты, которые нельзя останавливать. BLS говорит, что рост идёт от дата-центров. А охлаждение им нужно всегда.',
    how: ['Learn how precision cooling differs from normal air conditioning', 'Log hours on chillers and cooling towers', 'Check data-center job posts in your area every month', 'Add controls knowledge. The two skills work together'],
    howRu: ['Узнайте, чем точное охлаждение отличается от обычного кондиционера', 'Наберите в журнал часы на чиллерах и градирнях (cooling towers)', 'Каждый месяц смотрите вакансии дата-центров в вашем регионе', 'Добавьте знание автоматики. Эти два навыка работают вместе'],
    why: 'The +11% growth is real. It\'s buildings full of computers that must never get hot.',
    whyRu: 'Рост +11% — не просто цифра. Это здания, полные компьютеров, которые нельзя перегревать.',
    links: [
      {
        t: 'BLS Occupational Outlook Handbook — HVAC Mechanics and Installers',
        u: 'https://www.bls.gov/ooh/installation-maintenance-and-repair/heating-air-conditioning-and-refrigeration-mechanics-and-installers.htm'
      }
    ]
  },
  'hvc-k5': {
    what: 'Going solo? Your business is the contractor license plus service contracts. Repeat contracts are what buyers pay for when a shop is sold.',
    whatRu: 'Уходите в своё дело? Ваш бизнес — это лицензия подрядчика (contractor license) и договоры на обслуживание. Когда фирму продают, платят именно за постоянные договоры.',
    how: ['First read your state\'s contractor license rules', 'Sell service contracts from month one. Each one adds value to your business', 'Pay your techs fairly. Keeping good people is your edge over big chains', 'Check what your business is worth every year, even if you never sell'],
    howRu: ['Сначала прочитайте правила лицензии подрядчика в вашем штате', 'Продавайте договоры на обслуживание с первого месяца. Каждый делает фирму дороже', 'Платите техникам честно. Удерживать хороших людей — ваш плюс перед большими сетями', 'Каждый год оценивайте, сколько стоит ваша фирма, даже если не будете продавать'],
    why: 'Record deals in 2024–2025 showed the prices openly. Buyers pay extra for the contracts, not the trucks.',
    whyRu: 'Рекордные сделки 2024–2025 открыто показали цены. Покупатели платят много за договоры, а не за машины.',
    links: [
      {
        t: 'ACCA — Air Conditioning Contractors of America',
        u: 'https://www.acca.org'
      }
    ]
  },
  'plb-g1': {
    what: 'Pick your way in on purpose. A registered apprenticeship pays a set wage from year one. Big chains\' free training pays commission after it. Both take the same 4–5 years.',
    whatRu: 'Выбирайте путь осознанно. Зарегистрированное ученичество (apprenticeship — учёба прямо на работе) платит зарплату с первого года. Бесплатное обучение больших сетей потом платит процент с продаж. Оба пути занимают те же 4–5 лет.',
    how: ['List registered programs near you: union (UA), trade groups (PHCC chapters), employers', 'Judge each one by year-three pay, not week-one pay', 'Ask every program how hours are registered with the state', 'Apply first where they pay a set wage'],
    howRu: ['Составьте список зарегистрированных программ рядом: профсоюз (UA), объединения (отделения PHCC), работодатели', 'Сравнивайте их по оплате на третьем году, а не в первую неделю', 'Спросите каждую программу, как часы регистрируют в штате', 'Сначала подавайтесь туда, где платят зарплату'],
    why: 'UA Local 486 pays $24.54 an hour in year one, and training costs $0. The chain\'s own job post ends with minimum wage plus commission.',
    whyRu: 'UA Local 486 платит $24.54 в час в первый год, учёба стоит $0. В вакансии сети в итоге — минимальная оплата плюс процент.',
    links: [
      {
        t: 'Apprenticeship Job Finder — Apprenticeship.gov',
        u: 'https://www.apprenticeship.gov/apprenticeship-job-finder'
      },
      {
        t: 'PHCC — Plumbing-Heating-Cooling Contractors Association',
        u: 'https://www.phccweb.org/'
      }
    ]
  },
  'plb-g2': {
    what: 'Get your state\'s apprentice license or registration before counting hours. Hours without it often don\'t count toward the journeyman license.',
    whatRu: 'Получите лицензию ученика или регистрацию в штате до того, как считать часы. Часы без неё часто не идут в лицензию подмастерья (journeyman).',
    how: ['Find the page where your state registers apprentices', 'Register in your first weeks, not your first year', 'Make sure your sponsor reports your hours', 'Keep a photo of the registration on your phone'],
    howRu: ['Найдите страницу, где ваш штат регистрирует учеников', 'Зарегистрируйтесь в первые недели, а не в первый год', 'Убедитесь, что спонсор записывает ваши часы', 'Держите фото регистрации в телефоне'],
    why: 'The apprenticeship is about 2,000 paid hours a year for 4–5 years. Years the state can\'t see, you may have to redo.',
    whyRu: 'Ученичество — около 2,000 оплачиваемых часов в год, 4–5 лет. Годы, которых штат не видит, возможно, придётся повторить.',
    links: [
      {
        t: 'BLS Occupational Outlook Handbook — Plumbers, Pipefitters, and Steamfitters',
        u: 'https://www.bls.gov/ooh/construction-and-extraction/plumbers-pipefitters-and-steamfitters.htm'
      }
    ]
  },
  'plb-g3': {
    what: 'Before you sign any training contract, look for a repayment clause. Some \'free\' training makes you pay if you leave early.',
    whatRu: 'Перед подписанием учебного договора поищите условие о возврате денег (repayment clause). Некоторое «бесплатное» обучение заставит платить, если уйдёте раньше срока.',
    how: ['Ask for the contract before the first day', 'Look for the words \'repay\', \'repayment\' or \'training cost\'', 'Write down the date when you\'re free to leave', 'If the terms are tough, look again at the registered apprenticeship. It has no such clause'],
    howRu: ['Попросите договор до первого дня', 'Ищите слова «repay», «repayment» или «training cost»', 'Запишите дату, когда вы сможете уйти без долга', 'Если условия жёсткие, ещё раз посмотрите на зарегистрированное ученичество. Там такого нет'],
    why: 'A debt to your boss can tie you to them for years. A paid apprenticeship has no such catch.',
    whyRu: 'Долг работодателю может привязать вас на годы. В ученичестве с зарплатой такого подвоха нет.',
    links: []
  },
  'plb-g4': {
    what: 'Plan the 4–5 years honestly: 2,000 paid hours a year plus classes. The license at the end is what matters. There\'s no shortcut.',
    whatRu: 'Честно спланируйте 4–5 лет: 2,000 оплачиваемых часов в год плюс занятия. Главное — лицензия в конце. Короткого пути нет.',
    how: ['Write down your target journeyman exam date today', 'Plan your money knowing apprentice pay goes up each year', 'Never miss class. Programs drop no-shows first', 'Tell the people close to you the timeline, once, out loud'],
    howRu: ['Сегодня запишите дату, когда хотите сдать экзамен на подмастерье', 'Планируйте деньги с учётом того, что зарплата ученика растёт каждый год', 'Не пропускайте занятия. Прогульщиков отчисляют первыми', 'Один раз скажите близким вслух, сколько это займёт'],
    why: 'BLS describes the same path for everyone: apprentice first, then journeyman, then master. Everyone above you took it.',
    whyRu: 'BLS описывает один путь для всех: сначала ученик, потом подмастерье, потом мастер. Все, кто выше вас, прошли его.',
    links: [
      {
        t: 'BLS Occupational Outlook Handbook — Plumbers, Pipefitters, and Steamfitters',
        u: 'https://www.bls.gov/ooh/construction-and-extraction/plumbers-pipefitters-and-steamfitters.htm'
      }
    ]
  },
  'plb-p1': {
    what: 'Log hours by work type: repair, new building, commercial, factory. The mix decides which journeyman jobs you can get later.',
    whatRu: 'Записывайте часы по видам работ: ремонт, новостройки, коммерческие здания, заводы. От этого зависит, какую работу подмастерья вы получите потом.',
    how: ['One line per day: date, site, type', 'Each week, check your total against your sponsor\'s records', 'Fix mistakes the same month', 'Keep the log after the license. Factory hours open factory jobs'],
    howRu: ['Одна строка в день: дата, объект, вид', 'Каждую неделю сверяйте сумму с записями спонсора', 'Исправляйте ошибки в тот же месяц', 'Храните журнал и после лицензии. Часы на заводах открывают работу на заводах'],
    why: 'A pipefitter job asks for factory work. A repair job asks for repair years. Both want proof, not nice words.',
    whyRu: 'Вакансия монтажника труб просит опыт на заводе. Ремонтная — годы ремонта. Обеим нужны доказательства, а не красивые слова.',
    links: []
  },
  'plb-p2': {
    what: 'Pass the journeyman exam as soon as your hours are done. Every top job post asks for this license. That includes the $110,000–$130,000 repair job.',
    whatRu: 'Сдайте экзамен на подмастерье (journeyman), как только наберёте часы. Эту лицензию требуют все лучшие вакансии. В том числе ремонтная работа за $110,000–$130,000.',
    how: ['Book the exam right after your hours are confirmed', 'Study the code (the rules) like the exam tests it: finding answers fast', 'Keep working for your sponsor while you wait', 'Put the license number on your resume from day one'],
    howRu: ['Запишитесь на экзамен сразу после подтверждения часов', 'Учите правила (code) так, как проверяет экзамен: быстро находить ответы', 'Пока ждёте, продолжайте работать у спонсора', 'Указывайте номер лицензии в резюме с первого дня'],
    why: 'At one company, licensed workers earn about double what apprentices earn. The exam is when you get that raise.',
    whyRu: 'В одной компании мастер с лицензией получает примерно вдвое больше ученика. Экзамен — момент, когда вы получаете эту разницу.',
    links: [
      {
        t: 'BLS Occupational Outlook Handbook — Plumbers, Pipefitters, and Steamfitters',
        u: 'https://www.bls.gov/ooh/construction-and-extraction/plumbers-pipefitters-and-steamfitters.htm'
      }
    ]
  },
  'plb-p3': {
    what: 'Add one certificate that pays: backflow prevention. Backflow devices keep dirty water out of clean pipes. Cities require testing them, and few people are certified to do it.',
    whatRu: 'Добавьте один сертификат, который приносит деньги: backflow prevention (проверка клапанов, которые не пускают грязную воду в чистые трубы). Города требуют их проверять, а людей с таким сертификатом мало.',
    how: ['Find your city or water company\'s backflow rules', 'Take the tester course your state accepts', 'Get on the water company\'s approved tester list, if it has one', 'Renew on time. An expired certificate means losing all that work'],
    howRu: ['Найдите правила backflow вашего города или водоканала', 'Пройдите курс, который принимает ваш штат', 'Попадите в список одобренных проверяющих водоканала, если он есть', 'Продлевайте вовремя. Просрочили сертификат — потеряли всю эту работу'],
    why: 'Required testing is regular, planned work, not emergencies. It\'s the opposite of a 2 a.m. call. And few people can do it, so it pays well.',
    whyRu: 'Обязательные проверки — регулярная плановая работа, не аварии. Это противоположность вызову в 2 часа ночи. И делать её могут немногие, поэтому платят хорошо.',
    links: []
  },
  'plb-p4': {
    what: 'Learn the camera and press tools. Sewer cameras find the problem without digging. Press tools join pipes without fire. Both are standard now. They raise how much one tech earns in a day.',
    whatRu: 'Освойте камеру и пресс-инструменты. Камера для труб находит поломку без раскопок. Пресс-инструмент соединяет трубы без огня. Оба уже стандарт. С ними техник зарабатывает больше за день.',
    how: ['Ask to run the camera on every drain call for a month', 'Practice press fittings until they feel easy', 'Log camera and no-dig (trenchless) jobs as their own type', 'Show camera results with your price. Proof gets you full price'],
    howRu: ['Месяц проситесь работать с камерой на каждом вызове по засорам', 'Тренируйте пресс-соединения, пока не станет легко', 'Записывайте работы с камерой и без раскопок (trenchless) отдельно', 'Прикладывайте к цене снимки с камеры. С доказательством платят полную цену'],
    why: 'BLS lists these tools as standard for plumbers. A tech who finds the problem on a screen earns more than one who guesses with a shovel.',
    whyRu: 'BLS называет эти инструменты стандартными для сантехников. Тот, кто находит поломку на экране, зарабатывает больше того, кто гадает с лопатой.',
    links: [
      {
        t: 'BLS Occupational Outlook Handbook — Plumbers, Pipefitters, and Steamfitters',
        u: 'https://www.bls.gov/ooh/construction-and-extraction/plumbers-pipefitters-and-steamfitters.htm'
      }
    ]
  },
  'plb-k1': {
    what: 'Take repair work with a guaranteed hourly minimum. Commission on top is a bonus. Commission instead of a minimum is a NO job.',
    whatRu: 'Берите ремонтную работу с гарантированным почасовым минимумом. Процент с продаж сверху — бонус. Процент вместо минимума — это работа NO.',
    how: ['Ask every offer one question: what does a slow week pay?', 'Get the answer in writing before you sign', 'Compare with real offers: $35–$40 an hour guaranteed, or 25% commission', 'Pick the guaranteed minimum until you have more license years'],
    howRu: ['Задайте в каждом предложении один вопрос: сколько платят в неделю без заказов?', 'Получите ответ письменно до подписания', 'Сравните с реальными предложениями: $35–$40 в час гарантированно или 25% с продаж', 'Выбирайте гарантированный минимум, пока у вас мало лет с лицензией'],
    why: 'Similar companies in the same market do offer a guarantee. A job that refuses it is showing you how it works.',
    whyRu: 'Похожие компании на том же рынке дают гарантию. Если работодатель отказывает — он показывает, как он работает.',
    links: []
  },
  'plb-k2': {
    what: 'Agree on on-call pay before you sign. BLS says plumbers are often on call (night and weekend emergencies). One shop even brags \'No On-Call\' as its main perk.',
    whatRu: 'Договоритесь об оплате дежурств (on-call — аварийные вызовы ночью и в выходные) до подписания. BLS пишет, что сантехники часто дежурят. А одна фирма хвастается «Без дежурств» (No On-Call) как главным плюсом.',
    how: ['Count honestly how many nights a month you\'ll be on call', 'Ask the minimum pay for one night call', 'Write down your terms before your first on-call week', 'Ask for better terms with your license in hand, not just hope'],
    howRu: ['Честно посчитайте, сколько ночей в месяц будете дежурить', 'Спросите минимальную оплату за один ночной выезд', 'Запишите условия до первого дежурства', 'Просите лучших условий, опираясь на лицензию, а не на надежду'],
    why: 'If \'no on-call\' is a hiring perk, then on-call has a price. Make sure that price is in your pay.',
    whyRu: 'Если «без дежурств» — плюс при найме, значит, у дежурств есть цена. Убедитесь, что она есть в вашей оплате.',
    links: [
      {
        t: 'BLS Occupational Outlook Handbook — Plumbers, Pipefitters, and Steamfitters',
        u: 'https://www.bls.gov/ooh/construction-and-extraction/plumbers-pipefitters-and-steamfitters.htm'
      }
    ]
  },
  'plb-k3': {
    what: 'Think about factory work: pipefitting. It\'s the same job type and the same union. Factory pipes, steam and process systems. Pay is $40.64 to about $54 an hour. All union, all need the card.',
    whatRu: 'Подумайте о заводах: монтаж труб (pipefitting). Это та же профессия и тот же профсоюз. Заводские трубы, пар, технологические системы. Платят от $40.64 до примерно $54 в час. Везде профсоюз, везде нужна карта.',
    how: ['Tell your sponsor you want factory shifts', 'Keep practicing welding. Pipefitters get tested on it', 'Log factory hours as their own group', 'Check UA dispatch (union job board) and factory job posts every month'],
    howRu: ['Скажите спонсору, что хотите работать на заводах', 'Продолжайте тренировать сварку. Монтажников проверяют на ней', 'Записывайте заводские часы отдельной группой', 'Каждый месяц смотрите распределение работы UA (dispatch) и вакансии заводов'],
    why: 'Five of five factory job posts require the journeyman card or license. And they pay the most for it.',
    whyRu: 'Пять из пяти вакансий на заводах требуют карту подмастерья или лицензию. И платят за неё больше всех.',
    links: []
  },
  'plb-k4': {
    what: 'Pass the master exam when you can. The master license lets you lead others and get permits. In some states you also need it for a contractor license for your own shop.',
    whatRu: 'Сдайте экзамен на мастера (master), когда будет можно. С лицензией мастера можно руководить и получать разрешения на работы (permits). В некоторых штатах без неё не получить лицензию подрядчика (contractor license) для своей фирмы.',
    how: ['Check your state\'s rule: years as a journeyman plus the exam', 'Put the first date you can take it in your calendar', 'Learn the business side: estimates, permits, inspections', 'Take it at the first chance. Waiting only costs you'],
    howRu: ['Узнайте правило вашего штата: годы подмастерьем плюс экзамен', 'Поставьте в календарь первую дату, когда можно сдавать', 'Учите бизнес-часть: сметы, разрешения, проверки', 'Сдавайте при первой возможности. Ожидание только вредит'],
    why: 'BLS shows the ladder: journeyman, then master, then contractor. Each step means different pay, not just a new title.',
    whyRu: 'BLS показывает лестницу: подмастерье, потом мастер, потом подрядчик. Каждая ступень — это другая оплата, а не просто новое звание.',
    links: [
      {
        t: 'BLS Occupational Outlook Handbook — Plumbers, Pipefitters, and Steamfitters',
        u: 'https://www.bls.gov/ooh/construction-and-extraction/plumbers-pipefitters-and-steamfitters.htm'
      }
    ]
  },
  'plb-k5': {
    what: 'If you open a shop, what you can sell is your service contracts and your license. That\'s what buyers pay big money for.',
    whatRu: 'Если открываете фирму, продать можно договоры на обслуживание и вашу лицензию. Именно за это покупатели платят большие деньги.',
    how: ['Sell service contracts from month one', 'Keep your license and insurance perfect. They set the price of your business', 'Keep techs on guaranteed pay. A steady team adds to the price', 'Check what your business is worth yearly, even if you never sell'],
    howRu: ['Продавайте договоры на обслуживание с первого месяца', 'Держите лицензию и страховку в идеальном порядке. От них зависит цена фирмы', 'Платите техникам гарантированно. Стабильная команда повышает цену', 'Каждый год оценивайте, сколько стоит фирма, даже если не будете продавать'],
    why: 'Buyers openly pay for repeat contracts. For an owner, building them is like getting a license.',
    whyRu: 'Покупатели открыто платят за постоянные договоры. Для владельца собрать их — всё равно что получить лицензию.',
    links: [
      {
        t: 'PHCC — Plumbing-Heating-Cooling Contractors Association',
        u: 'https://www.phccweb.org/'
      }
    ]
  },
  'plb-k6': {
    what: 'Each year, check your state\'s license and reciprocity rules. Reciprocity means another state accepts your license. Several states changed trade licenses in 2026. A license you can move is worth more each year.',
    whatRu: 'Каждый год проверяйте правила лицензий и взаимного признания (reciprocity — когда другой штат принимает вашу лицензию). В 2026 году несколько штатов изменили правила для ремёсел. Лицензия, с которой можно переехать, дорожает каждый год.',
    how: ['List the states that accept your license today', 'Every January, read your state\'s rule changes for the year', 'If a state with many factories is next to yours, check the move against real job posts', 'Keep your training hours up to date so nothing expires'],
    howRu: ['Составьте список штатов, которые принимают вашу лицензию сегодня', 'Каждый январь читайте, какие правила изменились в вашем штате', 'Если рядом штат с заводами, оцените переезд по настоящим вакансиям', 'Вовремя набирайте часы обучения, чтобы ничего не истекло'],
    why: 'Workers are scarce everywhere, but each state has its own license. Knowing where yours works adds to its value.',
    whyRu: 'Рабочих не хватает везде, но лицензия у каждого штата своя. Знать, где действует ваша, — часть её ценности.',
    links: []
  }
});