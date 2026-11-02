/* Career Glitch — step details, expansion wave 4 (skilled trades, Nov 1 2026).
   STEP_DETAILS for electrician (elc-), hvac (hvc-) and plumber (plb-),
   verbatim from ~/workspace/cg-staging/trades/spec.md §8 of each part;
   links are the spec's verified link banks (fetched 1 Nov 2026). */
var STEP_DETAILS = (typeof STEP_DETAILS !== "undefined" && STEP_DETAILS) || {};
Object.assign(STEP_DETAILS, {
  'elc-g1': {
    what: 'Choose the paid door first. A registered apprenticeship pays you from year one and charges $0 tuition. A private school can charge $21,325 to about $42,000 and still graduate a helper.',
    whatRu: 'Сначала выберите дверь, где платят вам. Зарегистрированное ученичество (apprenticeship — оплачиваемое обучение на рабочем месте) платит вам с первого года и берёт $0 за обучение. Частная школа может взять от $21,325 до примерно $42,000 — и всё равно выпустить помощника.',
    how: ['Search apprenticeship.gov by your ZIP code for electrician programs', 'Check your local IBEW/JATC and one non-union program side by side', 'Price any school from its own tuition page before you talk to its sales team', 'Apply to the apprenticeship first; keep school as the backup, not the plan'],
    howRu: ['Поищите программы для электриков на apprenticeship.gov по вашему ZIP-коду', 'Сравните местный IBEW/JATC (комитет ученичества профсоюза и подрядчиков) и одну непрофсоюзную программу рядом', 'Возьмите цену любой школы с её собственной страницы оплаты, до разговора с её продавцами', 'Подавайтесь сначала в ученичество; школу держите как запасной вариант, а не как план'],
    why: 'The apprenticeship door pays about $20.30 an hour in year one on published scales. The school door charges five figures for the same first job.',
    whyRu: 'Дверь ученичества платит около $20.30 в час в первый год по опубликованным шкалам. Дверь школы берёт пятизначную сумму за ту же первую работу.',
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
    what: 'Apply inside the window. Apprenticeship classes open once a year and close when the slots fill. One local\'s notice reads: 2026 class closed, 2027 window January 1 to March 31.',
    whatRu: 'Подавайтесь внутри окна. Классы ученичества открываются раз в год и закрываются, когда места заполнены. Объявление одного профсоюза гласит: класс 2026 закрыт, окно 2027 — с 1 января по 31 марта.',
    how: ['Find the application dates for every program within driving distance', 'Put the opening date in your calendar, not the closing date', 'Prepare the standard papers early: diploma or GED, transcripts, photo ID, algebra on the transcript', 'Take the aptitude test date as seriously as a job start date'],
    howRu: ['Найдите даты приёма каждой программы в пределах досягаемости', 'Поставьте в календарь дату открытия, а не закрытия', 'Подготовьте стандартные бумаги заранее: диплом или GED, выписки оценок, удостоверение с фото, алгебру в выписке', 'Относитесь к дате теста на способности как к дате начала работы'],
    why: 'Missing the window costs a full year, not a semester — the ratio rules cap class sizes by law.',
    whyRu: 'Пропуск окна стоит полный год, а не семестр: правила соотношения (ratio — сколько учеников может вести один подмастерье) ограничивают размер классов по закону.',
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
    what: 'Get the state apprentice or training card before you count hours. The card is your registration with the state. Hours worked without it often do not count toward the license.',
    whatRu: 'Получите карту ученика (apprentice/training card — регистрация в штате) до того, как начнёте считать часы. Карта — это ваша регистрация в штате. Часы без неё часто не засчитываются в лицензию.',
    how: ['Find your state board\'s apprentice registration page', 'Register before your first counted shift, or in the first weeks', 'Keep a photo of the card on your phone', 'Ask your sponsor to confirm your hours are being reported'],
    howRu: ['Найдите страницу регистрации учеников board вашего штата', 'Зарегистрируйтесь до первой засчитываемой смены или в первые недели', 'Держите фото карты в телефоне', 'Попросите вашего спонсора подтвердить, что ваши часы подаются в отчётность'],
    why: 'The license needs about 8,000 documented hours. Undocumented hours are years you cannot prove.',
    whyRu: 'Лицензии нужно около 8,000 задокументированных часов. Незадокументированные часы — годы, которые вы не можете доказать.',
    links: [
      {
        t: 'BLS Occupational Outlook Handbook — Electricians',
        u: 'https://www.bls.gov/ooh/construction-and-extraction/electricians.htm'
      }
    ]
  },
  'elc-g4': {
    what: 'Learn the ratio rule in your state. The ratio says how many apprentices one journeyman may supervise — on many sites it is one. That number decides how many doors exist near you.',
    whatRu: 'Выучите правило соотношения (ratio) в вашем штате. Оно говорит, сколько учеников может вести один подмастерье (journeyman); на многих объектах — одного. Это число решает, сколько дверей существует рядом с вами.',
    how: ['Search your state board\'s site for \'apprentice ratio\'', 'Ask the JATC or program what ratio they hire under', 'If your state is 1:1, apply to more programs — each slot is scarcer', 'Remember the rule when you are the journeyman: it becomes your hiring limit too'],
    howRu: ['Поищите \'apprentice ratio\' на сайте board вашего штата', 'Спросите JATC или программу, по какому соотношению они нанимают', 'Если в вашем штате 1:1, подавайтесь в больше программ — каждое место дефицитнее', 'Помните правило, когда станете подмастерьем: оно станет и вашим лимитом найма'],
    why: 'A master electrician\'s own words: he wants to hire an apprentice every year, and the rules will not let him keep them all on one crew.',
    whyRu: 'Слова самого мастера-электрика: он хочет нанимать ученика каждый год, а правила не дают держать всех на одной бригаде.',
    links: [
      {
        t: 'BLS Occupational Outlook Handbook — Electricians',
        u: 'https://www.bls.gov/ooh/construction-and-extraction/electricians.htm'
      }
    ]
  },
  'elc-p1': {
    what: 'Log your 8,000 hours by work type as you go — commercial, industrial, service, residential. A log is a notebook or notes app with one line per day.',
    whatRu: 'Записывайте ваши 8,000 часов по видам работ по ходу дела — коммерческая, промышленная, сервисная, жилая. Журнал — это блокнот или приложение заметок, одна строка в день.',
    how: ['Write date, site and work type every day', 'Keep a weekly total against your program\'s records', 'Fix mismatches the same month, not at graduation', 'Keep the log after the license — it is your experience proof for the next seat'],
    howRu: ['Пишите дату, объект и вид работы каждый день', 'Сверяйте недельную сумму с записями вашей программы', 'Исправляйте расхождения в том же месяце, а не на выпуске', 'Храните журнал и после лицензии — это ваше доказательство опыта для следующего места'],
    why: 'The mix you can prove decides the seats you can take later. Industrial hours open industrial doors.',
    whyRu: 'Состав, который вы можете доказать, решает, какие места вы сможете занять позже. Промышленные часы открывают промышленные двери.',
    links: []
  },
  'elc-p2': {
    what: 'Pass the journeyman exam on the first cycle after your hours complete. The journeyman license is the state paper that lets you work unsupervised. It is named in 24 of 36 live postings.',
    whatRu: 'Сдайте экзамен на подмастерье (journeyman) в первый цикл после завершения часов. Лицензия подмастерья — бумага штата, которая разрешает работать без присмотра. Её называют в 24 из 36 живых вакансий.',
    how: ['Book the exam as soon as your hours are certified', 'Study the code book (NEC — the national electrical rulebook) the way the exam tests it: by lookup speed', 'Take a prep course only if it drills timed lookups, not lectures', 'If you fail, rebook immediately — the knowledge is freshest now'],
    howRu: ['Запишитесь на экзамен, как только ваши часы подтверждены', 'Учите книгу правил (NEC — национальный свод правил электромонтажа) так, как её проверяет экзамен: по скорости поиска', 'Берите подготовительный курс, только если он тренирует поиск на время, а не лекции', 'Если не сдали, перезапишитесь сразу — знания сейчас самые свежие'],
    why: 'Every top posting in the scan screens for this license. It is the product of the whole apprenticeship.',
    whyRu: 'Каждая топовая вакансия в скане проверяет эту лицензию. Она — продукт всего ученичества.',
    links: [
      {
        t: 'BLS Occupational Outlook Handbook — Electricians',
        u: 'https://www.bls.gov/ooh/construction-and-extraction/electricians.htm'
      }
    ]
  },
  'elc-p3': {
    what: 'Add the safety cards the big sites screen for: OSHA 30 (the 30-hour construction safety course) and NFPA 70E (electrical safety in the workplace — how to work around live energy).',
    whatRu: 'Добавьте карты безопасности, которые проверяют большие объекты: OSHA 30 (30-часовой курс безопасности в строительстве) и NFPA 70E (электробезопасность на рабочем месте — как работать рядом с энергией под напряжением).',
    how: ['Ask your sponsor which cards their big-site clients require', 'Take OSHA 30 first — it is the common screen', 'Add NFPA 70E before applying to industrial or data-center contractors', 'Keep both cards current; expired safety cards fail screens silently'],
    howRu: ['Спросите спонсора, какие карты требуют их клиенты на больших объектах', 'Сначала возьмите OSHA 30 — это общий фильтр', 'Добавьте NFPA 70E до подачи в промышленные или дата-центр компании', 'Держите обе карты действующими; просроченные карты безопасности молча проваливают проверки'],
    why: 'Data-center and industrial postings screen for these cards before they read your hours.',
    whyRu: 'Дата-центр и промышленные вакансии проверяют эти карты до того, как читают ваши часы.',
    links: []
  },
  'elc-p4': {
    what: 'Keep one specialty current: EV charging, solar plus storage, generators, or controls wiring. These are the demand drivers the postings name.',
    whatRu: 'Держите одну специализацию в актуальном состоянии: зарядка электромобилей (EV), солнечные системы с батареями, генераторы или проводка систем управления (controls). Это драйверы спроса, которые называют вакансии.',
    how: ['Pick the specialty your local postings repeat most', 'Take the manufacturer\'s own training for that equipment', 'Log every specialty hour separately in your log', 'Re-check the choice once a year against fresh postings'],
    howRu: ['Выберите специализацию, которую чаще всего повторяют местные вакансии', 'Пройдите обучение самого производителя этого оборудования', 'Записывайте каждый час специализации отдельно в журнале', 'Перепроверяйте выбор раз в год по свежим вакансиям'],
    why: 'The general license gets you hired. The specialty decides which band of the pay table you land in.',
    whyRu: 'Общая лицензия даёт работу. Специализация решает, в какой ряд таблицы оплаты вы попадёте.',
    links: [
      {
        t: 'BLS Occupational Outlook Handbook — Electricians',
        u: 'https://www.bls.gov/ooh/construction-and-extraction/electricians.htm'
      }
    ]
  },
  'elc-k1': {
    what: 'Aim at the building type that pays. Data centers, plants and hospitals post $48.50–$62.00 an hour for the same license that posts $24–$30 an hour in residential new construction.',
    whatRu: 'Цельтесь в тип зданий, который платит. Дата-центры, заводы и больницы публикуют $48.50–$62.00 в час за ту же лицензию, которая в жилом новострое публикует $24–$30 в час.',
    how: ['List the industrial and data-center contractors hiring in your region', 'Apply by name to those postings, not to the general pool', 'Lead your resume with industrial hours from your log', 'Keep one residential option only as the bridge, not the destination'],
    howRu: ['Составьте список промышленных и дата-центр подрядчиков, нанимающих в вашем регионе', 'Подавайтесь по именам в эти вакансии, а не в общий поток', 'Ставьте в резюме первыми промышленные часы из вашего журнала', 'Держите жилой вариант только как мост, а не как назначение'],
    why: 'Pay in this trade is set by the building, not by the wrench. The scan\'s top and bottom bands differ by more than double.',
    whyRu: 'Оплату в этом ремесле задаёт здание, а не ключ. Верхняя и нижняя вилки скана различаются больше чем вдвое.',
    links: []
  },
  'elc-k2': {
    what: 'If you take service work, take it hourly or guaranteed. Commission-only pay converts your license into a sales quota set by someone else.',
    whatRu: 'Если берёте сервисную работу, берите почасовую или гарантированную оплату. Оплата только с комиссии превращает вашу лицензию в план продаж, который поставил кто-то другой.',
    how: ['Read the pay paragraph of any offer before the duties paragraph', 'Ask what happens to your pay in a slow week — in writing', 'Compare against the posted hourly bands: licensed service runs $45–$65 an hour', 'Walk away from any offer that will not put the guarantee in writing'],
    howRu: ['Читайте абзац про оплату в любом предложении до абзаца про обязанности', 'Спросите, что будет с вашей оплатой в медленную неделю, — письменно', 'Сравните с опубликованными почасовыми вилками: лицензированный сервис идёт по $45–$65 в час', 'Уходите от предложения, которое не готово дать гарантию письменно'],
    why: 'The same license posts at $45–$65 an hour with no quota. The quota is a choice the employer makes, not a fact of the trade.',
    whyRu: 'Та же лицензия публикуется по $45–$65 в час без плана продаж. План — это выбор работодателя, а не факт ремесла.',
    links: []
  },
  'elc-k3': {
    what: 'After the journeyman card, price the master exam. The master license lets you supervise others, pull permits, and — in most states — is the license a shop is built on.',
    whatRu: 'После карты подмастерья оцените экзамен на мастера (master). Лицензия мастера разрешает руководить другими, брать разрешения на работы (permits) и — в большинстве штатов — является лицензией, на которой строится фирма.',
    how: ['Check your state\'s master requirements: years at journeyman level plus the exam', 'Calendar the earliest date you qualify', 'Study business basics alongside the code: estimating, permits, inspections', 'Sit the exam in the first cycle you are eligible'],
    howRu: ['Проверьте требования вашего штата к мастеру: годы на уровне подмастерья плюс экзамен', 'Поставьте в календарь самую раннюю дату, когда вы подходите', 'Учите основы бизнеса рядом с правилами: сметы, разрешения, инспекции', 'Сдавайте экзамен в первый цикл, когда вы имеете право'],
    why: 'Every rung above journeyman — foreman, estimator, owner — screens for the master paper or prices like it.',
    whyRu: 'Каждая ступень выше подмастерья — прораб, сметчик, владелец — проверяет бумагу мастера или платит как за неё.',
    links: [
      {
        t: 'BLS Occupational Outlook Handbook — Electricians',
        u: 'https://www.bls.gov/ooh/construction-and-extraction/electricians.htm'
      }
    ]
  },
  'elc-k4': {
    what: 'If you go out on your own, get the contractor license and insurance before the first solo job. In most states the master license comes first; the contractor license is what lets the business sign work.',
    whatRu: 'Если уходите в своё дело, получите лицензию подрядчика (contractor license) и страховку до первой сольной работы. В большинстве штатов сначала идёт лицензия мастера; лицензия подрядчика разрешает бизнесу подписывать работы.',
    how: ['Read your state\'s contractor rules end to end', 'Price insurance and bonding before you price jobs', 'Register the business and the license in the same month', 'Start with maintenance agreements — recurring work is the asset buyers pay for'],
    howRu: ['Прочитайте правила вашего штата для подрядчиков целиком', 'Оцените страховку и поручительство (bonding) до оценки работ', 'Зарегистрируйте бизнес и лицензию в одном месяце', 'Начните с договоров обслуживания — повторяющаяся работа и есть актив, за который платят покупатели'],
    why: 'Investor platforms have closed 800+ trade deals since 2022 buying shops. What they buy is the license, the name and the recurring book.',
    whyRu: 'Инвесторские платформы закрыли более 800 сделок в ремеслах с 2022 года, покупая фирмы. Они покупают лицензию, имя и повторяющуюся клиентскую базу.',
    links: []
  },
  'elc-k5': {
    what: 'Re-check your state\'s ratio and reciprocity rules yearly. Reciprocity means another state honors your license. A license that travels is worth more every year the shortage lasts.',
    whatRu: 'Перепроверяйте правила соотношения и взаимного признания (reciprocity — когда другой штат признаёт вашу лицензию) каждый год. Лицензия, которая путешествует, стоит дороже каждый год, пока длится нехватка.',
    how: ['List the states that recognize your license today', 'Watch states rewriting trade law — several did in 2026', 'If a data-center state borders yours, price the move with real postings', 'Keep your continuing-education hours current so the license never lapses'],
    howRu: ['Составьте список штатов, которые признают вашу лицензию сегодня', 'Следите за штатами, переписывающими законы о ремёслах, — несколько сделали это в 2026 году', 'Если штат с дата-центрами граничит с вашим, оцените переезд по настоящим вакансиям', 'Держите часы повышения квалификации в срок, чтобы лицензия никогда не просрочилась'],
    why: 'The shortage is national but the pay is local. Mobility is the journeyman\'s raise that no boss can veto.',
    whyRu: 'Нехватка национальная, а оплата местная. Мобильность — это прибавка подмастерья, которую ни один босс не может отменить.',
    links: []
  },
  'elc-k6': {
    what: 'Stay off the prefab-shop floor as your final stop. Prefab means factory-built assemblies — electrical rooms, racked conduit, prewired panels. The work is real, but shop hours pay less and may not count toward the license the same way in your state.',
    whatRu: 'Не оставайтесь на полу цеха заготовок (prefab — заводская сборка: электрические помещения, собранные трубы, готовые щиты) как на конечном месте. Работа настоящая, но цеховые часы платят меньше и могут не засчитываться в лицензию так же в вашем штате.',
    how: ['If you take a prefab season, confirm in writing how the hours are reported', 'Keep field hours in your log separately from shop hours', 'Rotate back to field work before the season becomes the seat', 'Learn the model side (BIM drawings) while you are there — that skill travels up'],
    howRu: ['Если берёте сезон в цехе, подтвердите письменно, как подаются часы', 'Держите полевые часы в журнале отдельно от цеховых', 'Возвращайтесь в полевую работу до того, как сезон станет местом', 'Выучите сторону моделей (чертежи BIM) пока вы там — этот навык движется вверх'],
    why: 'Contractors\' own publications describe prefab growing fast on hospitals and data centers. It moves hours; it does not have to move your ceiling.',
    whyRu: 'Публикации самих подрядчиков описывают быстрый рост prefab на больницах и дата-центрах. Он двигает часы; он не обязан двигать ваш потолок.',
    links: []
  },
  'hvc-g1': {
    what: 'Get the EPA 608 card first — Universal if you can. EPA 608 is the federal certificate for handling refrigerant. Without it you cannot legally do refrigerant work, and no shop can bill you out as a technician.',
    whatRu: 'Сначала получите карту EPA 608 — Universal (все типы), если можете. EPA 608 — федеральный сертификат на работу с хладагентом (refrigerant — газ в системе охлаждения). Без него вы не можете легально работать с хладагентом, и ни одна фирма не может выставлять вас клиенту как техника.',
    how: ['Read the EPA Section 608 page for the certificate types', 'Pick Universal — it covers every type and is what commercial shops ask for', 'Prepare with a practice exam, then book an approved tester', 'Keep the card number in your phone and your resume'],
    howRu: ['Прочитайте страницу EPA Section 608 о типах сертификатов', 'Выберите Universal — он покрывает все типы, и его просят коммерческие фирмы', 'Подготовьтесь на пробном экзамене и запишитесь к одобренному экзаменатору', 'Держите номер карты в телефоне и в резюме'],
    why: '13 of 27 postings name EPA 608; every one of the 13 requires it. It is the trade\'s one federal gate.',
    whyRu: '13 из 27 вакансий называют EPA 608; все 13 его требуют. Это единственная федеральная дверь ремесла.',
    links: [
      {
        t: 'Section 608 Technician Certification — US EPA',
        u: 'https://www.epa.gov/section608'
      }
    ]
  },
  'hvc-g2': {
    what: 'Enter through a paid helper or apprentice seat, not a $21K–$42K diploma. Postings that take beginners pay them. The schools that charge them still graduate helpers.',
    whatRu: 'Входите через оплачиваемое место помощника или ученика, а не через диплом за $21K–$42K. Вакансии, которые берут новичков, им платят. Школы, которые берут с них деньги, всё равно выпускают помощников.',
    how: ['Apply to helper seats that name paid training', 'Ask what the seat pays after training — in writing', 'Price any school against the EPA exam route before enrolling', 'Keep the apprenticeship.gov finder as your second door'],
    howRu: ['Подавайтесь в места помощников, где названо оплачиваемое обучение', 'Спросите, сколько платит место после обучения, — письменно', 'Сравните любую школу с путём через экзамен EPA до записи', 'Держите поиск apprenticeship.gov как вторую дверь'],
    why: 'The scan\'s own doors: a union apprentice posting pays $15–$30 an hour. The diploma route charges five figures to reach the same first seat.',
    whyRu: 'Двери самого скана: вакансия профсоюзного ученика платит $15–$30 в час. Путь диплома берёт пятизначную сумму за то же первое место.',
    links: [
      {
        t: 'Apprenticeship Job Finder — Apprenticeship.gov',
        u: 'https://www.apprenticeship.gov/apprenticeship-job-finder'
      }
    ]
  },
  'hvc-g3': {
    what: 'Learn your state\'s rule. Some states license HVAC technicians. Some license only the contractor. Know which paper your state actually checks before you pay for anyone\'s version of it.',
    whatRu: 'Выучите правило вашего штата. Некоторые штаты лицензируют техников HVAC. Некоторые — только подрядчика (contractor). Знайте, какую бумагу ваш штат действительно проверяет, прежде чем платить за чужую версию.',
    how: ['Find your state board\'s HVAC page', 'Write down whether the tech, the contractor, or both need a license', 'Ask local postings what they check — they print it', 'File the answer where your EPA card lives'],
    howRu: ['Найдите страницу HVAC board вашего штата', 'Запишите, кому нужна лицензия: технику, подрядчику или обоим', 'Спросите местные вакансии, что они проверяют, — они это печатают', 'Храните ответ там же, где вашу карту EPA'],
    why: 'The federal card is national, but the license is local. Paying for the wrong paper is the quiet cost in this trade.',
    whyRu: 'Федеральная карта национальная, а лицензия местная. Оплата не той бумаги — тихая цена в этом ремесле.',
    links: [
      {
        t: 'BLS Occupational Outlook Handbook — HVAC Mechanics and Installers',
        u: 'https://www.bls.gov/ooh/installation-maintenance-and-repair/heating-air-conditioning-and-refrigeration-mechanics-and-installers.htm'
      }
    ]
  },
  'hvc-g4': {
    what: 'Pick service over install-only early. Diagnosis — finding what is actually wrong — is the skill every top posting pays for. System change-outs are the commodity end of the trade.',
    whatRu: 'Рано выбирайте сервис вместо только монтажа. Диагностика — найти, что на самом деле сломалось, — навык, за который платит каждая топовая вакансия. Замена систем (change-out) — товарный конец ремесла.',
    how: ['Ask for ride-alongs on diagnostic calls, not only installs', 'Write down every fault you did not find first — that list is your training plan', 'Learn the electrical side of the system; most no-cool calls live there', 'Track your first-time-fix rate in your log'],
    howRu: ['Проситесь на диагностические вызовы, а не только на монтаж', 'Записывайте каждую неисправность, которую не нашли первой, — этот список и есть ваш план обучения', 'Учите электрическую сторону системы; большинство вызовов «не холодит» живут там', 'Отмечайте в журнале долю ремонтов с первого раза'],
    why: 'Service postings ask 2+ years and pay to $50 an hour at lead level. Install-only experience caps out lower and earlier.',
    whyRu: 'Сервисные вакансии просят 2+ года и платят до $50 в час на уровне ведущего техника. Опыт только монтажа упирается в потолок ниже и раньше.',
    links: []
  },
  'hvc-p1': {
    what: 'Log every system you touch: type, tonnage, fault, fix. Tonnage is the system\'s cooling size. Your log is the experience record the 2+ year postings screen for.',
    whatRu: 'Записывайте каждую систему, которой касаетесь: тип, тоннаж (tonnage — размер охлаждения системы), неисправность, ремонт. Ваш журнал — это запись опыта, которую проверяют вакансии с требованием 2+ года.',
    how: ['One line per call, the same day', 'Include the fault you found, not only the part you changed', 'Count your commercial lines separately — they are your crossing proof', 'Bring the log to every pay conversation'],
    howRu: ['Одна строка на вызов, в тот же день', 'Включайте найденную неисправность, а не только заменённую деталь', 'Считайте коммерческие строки отдельно — это ваше доказательство перехода', 'Приносите журнал на каждый разговор об оплате'],
    why: 'Experience claims are free. A dated log is proof — and proof is what the better seats hire on.',
    whyRu: 'Заявления об опыте бесплатны. Журнал с датами — доказательство, а по доказательству нанимают лучшие места.',
    links: []
  },
  'hvc-p2': {
    what: 'Cross into commercial work by year two or three: rooftops, chillers, refrigeration. Residential-only experience caps your pay at the lowest employer class in the scan.',
    whatRu: 'Переходите в коммерческую работу к второму-третьему году: крыши (rooftops — блоки на крышах), чиллеры (chillers — большие холодильные машины), холодильное оборудование. Опыт только в жилом секторе ограничивает вашу оплату самым низким классом работодателей в скане.',
    how: ['Tell your shop you want commercial ride-alongs — in writing', 'If the shop has no commercial book, list the contractors that do', 'Log your first 25 commercial systems as a set', 'Apply to commercial seats with the log, not with years alone'],
    howRu: ['Скажите вашей фирме, что хотите коммерческие выезды, — письменно', 'Если у фирмы нет коммерческой базы, составьте список подрядчиков, у которых есть', 'Запишите ваши первые 25 коммерческих систем как отдельный набор', 'Подавайтесь на коммерческие места с журналом, а не только с годами'],
    why: 'Commercial service posts $35–$45 an hour asking 7–10 years at the top. The crossing has to start years before the pay does.',
    whyRu: 'Коммерческий сервис публикует $35–$45 в час и просит 7–10 лет на вершине. Переход должен начаться за годы до этой оплаты.',
    links: []
  },
  'hvc-p3': {
    what: 'Sit the NATE exam in your specialty once you have the hours. NATE is the industry\'s own technician certificate. Employers list it as \'preferred\' — it is the cheapest documented raise in the trade.',
    whatRu: 'Сдайте экзамен NATE (отраслевой сертификат техника) по вашей специализации, когда наберёте часы. Работодатели пишут его как «желательно» (preferred) — это самая дешёвая задокументированная прибавка в ремесле.',
    how: ['Pick the NATE specialty that matches your log\'s biggest block', 'Prepare from the official study materials', 'Book the exam, then book the pay conversation within 30 days of passing', 'Add the certificate to your resume the same week'],
    howRu: ['Выберите специализацию NATE, которая совпадает с самым большим блоком вашего журнала', 'Готовьтесь по официальным учебным материалам', 'Запишитесь на экзамен, а разговор об оплате назначьте в течение 30 дней после сдачи', 'Добавьте сертификат в резюме в ту же неделю'],
    why: 'NATE is named in 6 of 27 postings — never required, always preferred. Preferred, in a shortage, is a pay line.',
    whyRu: 'NATE назван в 6 из 27 вакансий — никогда не требуется, всегда желателен. «Желателен» при нехватке — это строка оплаты.',
    links: [
      {
        t: 'NATE — North American Technician Excellence',
        u: 'https://natex.org/'
      }
    ]
  },
  'hvc-p4': {
    what: 'Learn one controls platform properly: Trane, Johnson Controls, Siemens, Schneider, Distech. Controls are the building automation systems — the software that runs big buildings\' heating and cooling. Postings name platforms, not tools.',
    whatRu: 'Выучите одну платформу автоматики (controls) по-настоящему: Trane, Johnson Controls, Siemens, Schneider, Distech. Controls — это системы автоматизации зданий, программа, которая управляет отоплением и охлаждением больших зданий. Вакансии называют платформы, а не инструменты.',
    how: ['Pick the platform your region\'s controls postings repeat most', 'Take the manufacturer\'s own training path for it', 'Volunteer for every controls-adjacent call your shop gets', 'Log controls hours separately from service hours'],
    howRu: ['Выберите платформу, которую чаще всего повторяют вакансии по автоматике вашего региона', 'Пройдите учебный путь самого производителя по ней', 'Вызывайтесь на каждый вызов рядом с автоматикой, который получает ваша фирма', 'Записывайте часы автоматики отдельно от сервисных часов'],
    why: 'Nine controls postings run $60,000–$125,000. None of the nine mentions commission. The platform is the moat.',
    whyRu: 'Девять вакансий по автоматике идут по $60,000–$125,000. Ни одна из девяти не упоминает комиссию. Платформа — это защита.',
    links: [
      {
        t: 'ACCA — Air Conditioning Contractors of America',
        u: 'https://www.acca.org'
      }
    ]
  },
  'hvc-k1': {
    what: 'Aim at the controls and commercial seats. They post $60K–$125K, pay salary or hourly, and — in 9 of 9 controls postings — never mention commission.',
    whatRu: 'Цельтесь в места автоматики и коммерческие места. Они публикуют $60K–$125K, платят зарплату или почасово и — в 9 из 9 вакансий по автоматике — никогда не упоминают комиссию.',
    how: ['Apply by name to controls postings with your log attached', 'Lead with platform names you can prove', 'Compare total pay, not the headline: salary plus no quota beats commission math', 'Keep one residential option only as a bridge'],
    howRu: ['Подавайтесь по именам в вакансии по автоматике, прикладывая журнал', 'Ставьте первыми названия платформ, которые можете доказать', 'Сравнивайте полную оплату, а не заголовок: зарплата без плана продаж бьёт комиссионную математику', 'Держите жилой вариант только как мост'],
    why: 'The trade\'s top pay is in the seats furthest from the sales floor. The postings prove it in their own pay lines.',
    whyRu: 'Верхняя оплата ремесла — в местах, самых далёких от торгового зала. Вакансии доказывают это своими строками оплаты.',
    links: []
  },
  'hvc-k2': {
    what: 'If you stay residential, take hourly or guaranteed pay. \'Uncapped commission\' means your wage depends on selling replacements in people\'s homes.',
    whatRu: 'Если остаётесь в жилом секторе, берите почасовую или гарантированную оплату. «Комиссия без потолка» (uncapped commission) значит, что ваша зарплата зависит от продажи замен в домах людей.',
    how: ['Read the pay paragraph before the duties paragraph', 'Ask what a slow month pays — in writing', 'Compare with posted hourly bands: $28–$35 an hour, $30–$50 at lead level', 'Treat a refusal to write the floor down as the answer'],
    howRu: ['Читайте абзац про оплату до абзаца про обязанности', 'Спросите, сколько платит медленный месяц, — письменно', 'Сравните с опубликованными почасовыми вилками: $28–$35 в час, $30–$50 на уровне ведущего', 'Считайте отказ записать минимум ответом'],
    why: 'One posting\'s whole pitch is the commission ceiling. None of them print the floor.',
    whyRu: 'Вся реклама одной вакансии — потолок комиссии. Ни одна из них не печатает пол.',
    links: []
  },
  'hvc-k3': {
    what: 'Treat on-call as a priced item. On-call means nights and weekends on rotation for emergencies. It appears in a quarter of the scan\'s postings; negotiate its pay and rotation before you sign.',
    whatRu: 'Считайте дежурства (on-call — ночи и выходные по ротации для аварийных вызовов) платной частью работы. Они встречаются в четверти вакансий скана; обсуждайте их оплату и ротацию до подписания.',
    how: ['Count the rotation: how many nights a month, honestly', 'Ask the on-call pay rate and the minimum callout pay', 'Write your current terms down (quest 5 does this)', 'Renegotiate at your next review with the log in hand'],
    howRu: ['Посчитайте ротацию: сколько ночей в месяц, честно', 'Спросите ставку дежурства и минимальную оплату выезда', 'Запишите ваши текущие условия (квест 5 делает это)', 'Пересматривайте на следующем обзоре с журналом в руках'],
    why: 'One shop advertises \'minimal on-call\' as a headline perk and a union posting prints its rotation as a benefit. The market prices your nights — make sure your pay line does too.',
    whyRu: 'Одна фирма рекламирует «минимум дежурств» как главное преимущество, а профсоюзная вакансия печатает ротацию как благо. Рынок оценивает ваши ночи — убедитесь, что ваша строка оплаты тоже.',
    links: []
  },
  'hvc-k4': {
    what: 'Add the data-center skill set: precision cooling, large tonnage, mission-critical sites. BLS names data centers as the growth driver, and a cooling contract for a data center does not end.',
    whatRu: 'Добавьте набор навыков дата-центров: точное охлаждение (precision cooling), большой тоннаж, объекты, которые не могут остановиться (mission-critical). BLS называет дата-центры драйвером роста, а контракт на охлаждение дата-центра не заканчивается.',
    how: ['Learn how precision cooling differs from comfort cooling', 'Get chiller and cooling-tower hours logged', 'Watch data-center contractor postings in your region monthly', 'Bring controls knowledge — the two specialties stack'],
    howRu: ['Выучите, чем точное охлаждение отличается от комфортного', 'Наберите часы на чиллерах и градирнях (cooling towers) в журнал', 'Следите за вакансиями подрядчиков дата-центров в вашем регионе ежемесячно', 'Приносите знания автоматики — две специализации складываются'],
    why: 'The growth line (+11%) is not abstract: it is buildings full of computers that must never get warm.',
    whyRu: 'Строка роста (+11%) не абстрактна: это здания, полные компьютеров, которым никогда нельзя нагреваться.',
    links: [
      {
        t: 'BLS Occupational Outlook Handbook — HVAC Mechanics and Installers',
        u: 'https://www.bls.gov/ooh/installation-maintenance-and-repair/heating-air-conditioning-and-refrigeration-mechanics-and-installers.htm'
      }
    ]
  },
  'hvc-k5': {
    what: 'If you go out on your own, the contractor license and a maintenance-agreement book are the business. Recurring agreements are what buyers pay for when shops sell.',
    whatRu: 'Если уходите в своё дело, бизнес — это лицензия подрядчика (contractor license) и база договоров обслуживания. Повторяющиеся договоры — то, за что платят покупатели, когда фирмы продаются.',
    how: ['Read your state\'s contractor license rules first', 'Sell maintenance agreements from your first month — every agreement is equity', 'Keep tech pay honest: your shop\'s edge is keeping people platforms churn', 'Price the business yearly, even if you never sell'],
    howRu: ['Сначала прочитайте правила лицензии подрядчика вашего штата', 'Продавайте договоры обслуживания с первого месяца — каждый договор это капитал', 'Держите оплату техников честной: преимущество вашей фирмы — удерживать людей, которых платформы теряют', 'Оценивайте бизнес каждый год, даже если никогда не продадите'],
    why: 'Record deal pace in 2024–2025 priced these books in public. The agreements, not the trucks, carry the multiple.',
    whyRu: 'Рекордный темп сделок в 2024–2025 оценил эти базы открыто. Кратную цену (multiple) несут договоры, а не машины.',
    links: [
      {
        t: 'ACCA — Air Conditioning Contractors of America',
        u: 'https://www.acca.org'
      }
    ]
  },
  'plb-g1': {
    what: 'Choose your door on purpose. A registered apprenticeship pays a wage scale from year one. The big chains\' free training pays commission after it. Both take the same 4–5 years.',
    whatRu: 'Выбирайте дверь осознанно. Зарегистрированное ученичество (apprenticeship — оплачиваемое обучение на рабочем месте) платит шкалу зарплаты с первого года. Бесплатное обучение крупных сетей платит комиссию после него. Оба пути занимают те же 4–5 лет.',
    how: ['List the registered programs near you: union (UA), association (PHCC chapters), employer', 'Price each door by its year-three pay, not its week-one pay', 'Ask every program how hours are registered with the state', 'Apply to the wage door first'],
    howRu: ['Составьте список зарегистрированных программ рядом: профсоюз (UA), ассоциация (отделения PHCC), работодатель', 'Оценивайте каждую дверь по оплате третьего года, а не первой недели', 'Спросите каждую программу, как часы регистрируются в штате', 'Подавайтесь сначала в дверь со шкалой зарплаты'],
    why: 'UA Local 486 pays $24.54 an hour in year one at $0 tuition. The chain door\'s own posting ends at minimum-wage base plus commission.',
    whyRu: 'UA Local 486 платит $24.54 в час в первый год при $0 за обучение. Собственная вакансия сетевой двери заканчивается минимальной базой плюс комиссия.',
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
    what: 'Get the apprentice license or registration your state issues before you start counting hours. Unregistered hours often do not count toward the journeyman license.',
    whatRu: 'Получите лицензию ученика или регистрацию, которую выдаёт ваш штат, до того, как начнёте считать часы. Незарегистрированные часы часто не засчитываются в лицензию подмастерья (journeyman).',
    how: ['Find your state board\'s apprentice registration page', 'Register in your first weeks, not your first year', 'Confirm your sponsor reports your hours', 'Keep a photo of the registration on your phone'],
    howRu: ['Найдите страницу регистрации учеников board вашего штата', 'Зарегистрируйтесь в первые недели, а не в первый год', 'Подтвердите, что ваш спонсор подаёт ваши часы', 'Держите фото регистрации в телефоне'],
    why: 'The apprenticeship is about 2,000 paid hours a year for 4–5 years. Years the state cannot see are years you may have to repeat.',
    whyRu: 'Ученичество — около 2,000 оплачиваемых часов в год за 4–5 лет. Годы, которых штат не видит, могут потребовать повторения.',
    links: [
      {
        t: 'BLS Occupational Outlook Handbook — Plumbers, Pipefitters, and Steamfitters',
        u: 'https://www.bls.gov/ooh/construction-and-extraction/plumbers-pipefitters-and-steamfitters.htm'
      }
    ]
  },
  'plb-g3': {
    what: 'Read any training contract for a repayment clause before you sign. Some \'free\' training charges you for the training if you leave before a set date.',
    whatRu: 'Прочитайте любой учебный договор на условие возврата денег (repayment clause) до подписания. Некоторое «бесплатное» обучение берёт с вас плату за обучение, если вы уйдёте до установленной даты.',
    how: ['Ask for the contract before the first training day', 'Find the words \'repay\', \'repayment\' or \'training cost\' in it', 'Write down the date the obligation ends', 'If the clause is heavy, price the registered apprenticeship again — it has no such clause'],
    howRu: ['Попросите договор до первого учебного дня', 'Найдите в нём слова «repay», «repayment» или «training cost»', 'Запишите дату, когда обязательство заканчивается', 'Если условие тяжёлое, оцените зарегистрированное ученичество ещё раз — там такого условия нет'],
    why: 'A debt to your employer is a lock on your license years. The wage door does not need one.',
    whyRu: 'Долг работодателю — замок на годы вашей лицензии. Двери со шкалой зарплаты он не нужен.',
    links: []
  },
  'plb-g4': {
    what: 'Plan the 4–5 years honestly: 2,000 paid hours a year plus classes. The license at the end is the asset. There is no shortcut that keeps it.',
    whatRu: 'Спланируйте 4–5 лет честно: 2,000 оплачиваемых часов в год плюс занятия. Лицензия в конце — это актив. Сокращения, которое её сохраняет, не существует.',
    how: ['Write your target journeyman exam date today', 'Budget the apprentice years as a rising wage, not a flat one', 'Keep your class attendance perfect — programs drop no-shows first', 'Tell the people close to you the timeline, out loud, once'],
    howRu: ['Запишите вашу целевую дату экзамена на подмастерье сегодня', 'Планируйте годы ученика как растущую зарплату, а не плоскую', 'Держите посещаемость занятий идеальной — программы сначала отчисляют прогульщиков', 'Скажите близким людям сроки вслух, один раз'],
    why: 'BLS describes the same shape for the whole occupation: apprenticeship first, journey level after, master after that. Everyone above you walked it.',
    whyRu: 'BLS описывает ту же форму для всей профессии: сначала ученичество, потом уровень подмастерья, потом мастер. Все выше вас прошли её.',
    links: [
      {
        t: 'BLS Occupational Outlook Handbook — Plumbers, Pipefitters, and Steamfitters',
        u: 'https://www.bls.gov/ooh/construction-and-extraction/plumbers-pipefitters-and-steamfitters.htm'
      }
    ]
  },
  'plb-p1': {
    what: 'Log hours by work type — service, new construction, commercial, industrial. The mix decides which journeyman seats you can prove later.',
    whatRu: 'Записывайте часы по видам работ — сервис, новострой, коммерческая, промышленная. Состав решает, какие места подмастерья вы сможете доказать позже.',
    how: ['One line per day: date, site, type', 'Keep a weekly total against your sponsor\'s records', 'Fix mismatches the same month', 'Keep the log after the license — industrial hours open the industrial branch'],
    howRu: ['Одна строка в день: дата, объект, вид', 'Сверяйте недельную сумму с записями спонсора', 'Исправляйте расхождения в том же месяце', 'Храните журнал и после лицензии — промышленные часы открывают промышленную ветвь'],
    why: 'A pipefitter posting asks for plant work; a service posting asks for service years. Proof beats adjectives in both.',
    whyRu: 'Вакансия монтажника труб просит заводскую работу; сервисная — годы сервиса. Доказательство бьёт прилагательные в обеих.',
    links: []
  },
  'plb-p2': {
    what: 'Pass the journeyman exam as soon as your hours complete. The license is named in every top posting in the scan — including the $110,000–$130,000 service seat.',
    whatRu: 'Сдайте экзамен на подмастерье (journeyman), как только ваши часы завершены. Лицензия названа в каждой топовой вакансии скана — включая сервисное место за $110,000–$130,000.',
    how: ['Book the exam in the first cycle after certification of hours', 'Study code the way the exam tests it: lookups under time pressure', 'Keep working under your sponsor while you wait for the date', 'Carry the license number on your resume from day one'],
    howRu: ['Запишитесь на экзамен в первый цикл после подтверждения часов', 'Учите правила (code) так, как их проверяет экзамен: поиск ответов на время', 'Продолжайте работать у спонсора, пока ждёте дату', 'Носите номер лицензии в резюме с первого дня'],
    why: 'At one company in the scan, the licensed seat pays roughly double the apprentice seat. The exam is the moment the gap is paid.',
    whyRu: 'В одной компании скана лицензированное место платит примерно вдвое больше ученического. Экзамен — момент, когда разрыв выплачивается.',
    links: [
      {
        t: 'BLS Occupational Outlook Handbook — Plumbers, Pipefitters, and Steamfitters',
        u: 'https://www.bls.gov/ooh/construction-and-extraction/plumbers-pipefitters-and-steamfitters.htm'
      }
    ]
  },
  'plb-p3': {
    what: 'Add one priced certificate: backflow prevention. Backflow devices keep dirty water out of clean supply lines. Cities and water systems require their testing, and certified testers are a short list.',
    whatRu: 'Добавьте один сертификат с ценой: проверка обратных клапанов (backflow prevention — устройства, которые не дают грязной воде попасть в чистые линии). Города и водоканалы требуют их проверки, а сертифицированные проверяющие — короткий список.',
    how: ['Find your city or water utility\'s backflow rules', 'Take the tester course your state recognizes', 'Get on the utility\'s approved tester list if one exists', 'Renew on time — a lapsed tester certificate deletes the whole asset'],
    howRu: ['Найдите правила backflow вашего города или водоканала', 'Пройдите курс проверяющего, который признаёт ваш штат', 'Встаньте в одобренный список проверяющих водоканала, если он есть', 'Продлевайте вовремя — просроченный сертификат проверяющего удаляет весь актив'],
    why: 'Required testing is recurring, scheduled, non-emergency work — the opposite of the 2 a.m. call, priced by a short list of names.',
    whyRu: 'Обязательная проверка — повторяющаяся, плановая, неаварийная работа — противоположность вызова в 2 часа ночи, оценённая коротким списком имён.',
    links: []
  },
  'plb-p4': {
    what: 'Learn the camera and the press tools. Sewer cameras find the fault without digging; press tools join pipe without flame. Both are in the standard kit now, and they raise what one licensed tech bills in a day.',
    whatRu: 'Выучите камеру и пресс-инструменты. Камеры для труб находят неисправность без раскопок; пресс-инструменты соединяют трубы без огня. Оба уже в стандартном наборе и поднимают то, что один лицензированный техник выставляет за день.',
    how: ['Ask to run the camera on every drain call for a month', 'Practice press fittings until they are boring', 'Log camera and trenchless jobs as their own category', 'Quote jobs with the camera findings attached — proof sells at full price'],
    howRu: ['Проситесь вести камеру на каждом вызове по сливу в течение месяца', 'Тренируйте пресс-соединения, пока они не станут скучными', 'Записывайте работы с камерой и бестраншейные (trenchless) работы отдельной категорией', 'Оценивайте работы с приложенными результатами камеры — доказательство продаётся по полной цене'],
    why: 'BLS lists these tools in the occupation\'s standard kit. The tech who diagnoses on screen out-bills the tech who guesses with a shovel.',
    whyRu: 'BLS перечисляет эти инструменты в стандартном наборе профессии. Техник, который диагностирует на экране, выставляет больше техника, который угадывает лопатой.',
    links: [
      {
        t: 'BLS Occupational Outlook Handbook — Plumbers, Pipefitters, and Steamfitters',
        u: 'https://www.bls.gov/ooh/construction-and-extraction/plumbers-pipefitters-and-steamfitters.htm'
      }
    ]
  },
  'plb-k1': {
    what: 'Take service work with a guaranteed hourly floor. Commission as an option on top is upside. Commission instead of a floor is the NO seat.',
    whatRu: 'Берите сервисную работу с гарантированным почасовым минимумом (floor). Комиссия как вариант сверху — это плюс. Комиссия вместо минимума — место NO.',
    how: ['Ask every offer one question: what does a slow week pay?', 'Get the answer in writing before you sign', 'Compare with the printed choice in the market: $35–$40 an hour guaranteed, or 25% commission', 'Choose the floor until your license years say otherwise'],
    howRu: ['Задайте каждому предложению один вопрос: сколько платит медленная неделя?', 'Получите ответ письменно до подписания', 'Сравните с напечатанным выбором рынка: $35–$40 в час гарантированно или 25% комиссии', 'Выбирайте минимум, пока годы вашей лицензии не скажут иначе'],
    why: 'The guarantee exists in the same market, at the same kind of company. A seat that refuses it is telling you its model.',
    whyRu: 'Гарантия существует на том же рынке, в том же виде компаний. Место, которое от неё отказывается, рассказывает вам свою модель.',
    links: []
  },
  'plb-k2': {
    what: 'Price on-call before you sign. BLS states the trade\'s norm — plumbers are often on call — and one shop in the scan sells \'No On-Call\' as its headline perk.',
    whatRu: 'Оценивайте дежурства (on-call — аварийные вызовы ночью и в выходные) до подписания. BLS называет норму ремесла — сантехники часто на дежурстве, — а одна фирма в скане продаёт «Без дежурств» (No On-Call) как главное преимущество.',
    how: ['Count the rotation honestly: nights per month', 'Ask the callout minimum pay per night call', 'Write your terms down before the first rotation', 'Renegotiate with your license, not with your hope'],
    howRu: ['Посчитайте ротацию честно: ночей в месяц', 'Спросите минимальную оплату за ночной выезд', 'Запишите ваши условия до первой ротации', 'Пересматривайте с вашей лицензией, а не с надеждой'],
    why: 'If the absence of on-call is a recruiting perk, its presence has a price. Make sure the price is in your pay line.',
    whyRu: 'Если отсутствие дежурств — преимущество при найме, у их присутствия есть цена. Убедитесь, что цена стоит в вашей строке оплаты.',
    links: [
      {
        t: 'BLS Occupational Outlook Handbook — Plumbers, Pipefitters, and Steamfitters',
        u: 'https://www.bls.gov/ooh/construction-and-extraction/plumbers-pipefitters-and-steamfitters.htm'
      }
    ]
  },
  'plb-k3': {
    what: 'Consider the industrial branch: pipefitting. It is the same BLS occupation and the same union — plant piping, steam and process systems — posting $40.64 to about $54 an hour, all union, all card-gated.',
    whatRu: 'Рассмотрите промышленную ветвь: монтаж труб (pipefitting). Это та же профессия BLS и тот же профсоюз — заводские трубы, пар и технологические системы — публикуют от $40.64 до примерно $54 в час, все профсоюзные, все с требованием карты.',
    how: ['Tell your sponsor you want industrial rotations', 'Keep welding practice current — fitters are screened on it', 'Log plant hours as their own block', 'Watch UA dispatch and plant contractor postings monthly'],
    howRu: ['Скажите спонсору, что хотите промышленные ротации', 'Держите практику сварки в актуальном состоянии — монтажников проверяют по ней', 'Записывайте заводские часы отдельным блоком', 'Следите за распределением UA (dispatch) и вакансиями заводских подрядчиков ежемесячно'],
    why: 'Five of five industrial postings require the journeyman card or license — and pay at the top of the scan for it.',
    whyRu: 'Пять из пяти промышленных вакансий требуют карту подмастерья или лицензию — и платят за неё на вершине скана.',
    links: []
  },
  'plb-k4': {
    what: 'Pass the master exam when eligible. The master license unlocks supervising and permitting — and, in states that require it, the contractor license for your own shop.',
    whatRu: 'Сдайте экзамен на мастера (master), когда получите право. Лицензия мастера открывает руководство и разрешения на работы (permits) — и, в штатах, где это требуется, лицензию подрядчика (contractor license) для вашей собственной фирмы.',
    how: ['Check your state\'s rule: years at journey level plus the exam', 'Calendar your first eligible cycle', 'Study the business side: estimating, permits, inspections', 'Sit the exam in the first cycle — eligibility is a wasting asset'],
    howRu: ['Проверьте правило вашего штата: годы на уровне подмастерья плюс экзамен', 'Поставьте в календарь ваш первый доступный цикл', 'Учите сторону бизнеса: сметы, разрешения, инспекции', 'Сдавайте в первый цикл — право на экзамен — тающий актив'],
    why: 'BLS prints the ladder: journey, then master, then contractor. Each rung is a pay structure, not just a title.',
    whyRu: 'BLS печатает лестницу: подмастерье, потом мастер, потом подрядчик. Каждая ступень — структура оплаты, а не только название.',
    links: [
      {
        t: 'BLS Occupational Outlook Handbook — Plumbers, Pipefitters, and Steamfitters',
        u: 'https://www.bls.gov/ooh/construction-and-extraction/plumbers-pipefitters-and-steamfitters.htm'
      }
    ]
  },
  'plb-k5': {
    what: 'If you open a shop, your sellable asset is the maintenance-agreement book and the license on the wall. That is what acquirers pay multiples for.',
    whatRu: 'Если открываете фирму, ваш продаваемый актив — база договоров обслуживания и лицензия на стене. Именно за это покупатели платят кратные суммы (multiples).',
    how: ['Sell maintenance agreements from month one', 'Keep the license and insurance spotless — they are the valuation', 'Keep techs on guaranteed pay; a stable crew is part of the price', 'Price the business yearly even if you never sell'],
    howRu: ['Продавайте договоры обслуживания с первого месяца', 'Держите лицензию и страховку безупречными — они и есть оценка', 'Держите техников на гарантированной оплате; стабильная бригада — часть цены', 'Оценивайте бизнес каждый год, даже если никогда не продадите'],
    why: 'The roll-up\'s own math is public: platforms pay for recurring books. Building one is the owner\'s version of the license.',
    whyRu: 'Математика скупки открыта: платформы платят за повторяющиеся базы. Построить одну — версия лицензии для владельца.',
    links: [
      {
        t: 'PHCC — Plumbing-Heating-Cooling Contractors Association',
        u: 'https://www.phccweb.org/'
      }
    ]
  },
  'plb-k6': {
    what: 'Re-check your state\'s licensing and reciprocity rules yearly. Several states rewrote trade licensing in 2026. A movable license is worth more each year.',
    whatRu: 'Перепроверяйте правила лицензирования и взаимного признания (reciprocity — когда другой штат признаёт вашу лицензию) вашего штата каждый год. Несколько штатов переписали лицензирование ремёсел в 2026 году. Подвижная лицензия стоит дороже каждый год.',
    how: ['List the states that honor your license today', 'Read your board\'s annual rule changes each January', 'If a plant state borders yours, price the move with real postings', 'Keep continuing education current so nothing lapses'],
    howRu: ['Составьте список штатов, которые признают вашу лицензию сегодня', 'Читайте годовые изменения правил вашего board каждый январь', 'Если заводской штат граничит с вашим, оцените переезд по настоящим вакансиям', 'Держите повышение квалификации в срок, чтобы ничего не просрочилось'],
    why: 'The shortage is national; the license is state-shaped. Knowing exactly where yours works is part of its value.',
    whyRu: 'Нехватка национальная; лицензия имеет форму штата. Знать точно, где ваша работает, — часть её цены.',
    links: []
  }
});