/* Career Glitch — tracks wave 4 (skilled trades I, Nov 1 2026).
   PROF_META / SEATINFO / DOORS / GRIDINFO / TRACKS / RESUME_TERMS /
   RADAR + RU twins for electrician and hvac. Loaded by app.html
   after tracks6.js. Source: ~/workspace/cg-staging/trades/spec.md. */

/* ================= ELECTRICIAN =================
   Source: ~/workspace/cg-staging/trades/spec.md (postings scan + BLS).
   Cluster: ELECTRICIAN IS A YES. THE LICENSE IS THE JOB. THE SEAT DECIDES THE PAY. (High). Code word: VOLT. */
PROF_META.electrician = {
  name: 'Electrician',
  kick: 'Electrician',
  code: 'VOLT',
  count: '72,700',
  srcWhat: 'openings a year in the US (BLS)',
  srcWhatRu: 'вакансий в год в США (BLS)'
};

Object.assign(SEATINFO, {
  elcapp: {
    prof: 'electrician',
    label: 'Apprentice electrician — the door',
    verdict: 'YES',
    conf: 'High'
  },
  elcjour: {
    prof: 'electrician',
    label: 'Journeyman electrician',
    verdict: 'YES',
    conf: 'High'
  },
  elcdata: {
    prof: 'electrician',
    label: 'Industrial / data-center electrician',
    verdict: 'YES',
    conf: 'High'
  },
  elcown: {
    prof: 'electrician',
    label: 'Master electrician / own shop',
    verdict: 'YES',
    conf: 'High'
  },
  elcsales: {
    prof: 'electrician',
    label: 'Commission sales-tech (residential service platform)',
    verdict: 'NO',
    conf: 'Medium'
  }
});

Object.assign(DOORS, {
  elcapp: 'What to do: apply to a registered apprenticeship inside its yearly window — union (IBEW/JATC) or non-union. Get your state apprentice card before you count a single hour.',
  elcjour: 'What to do: you hold the asset. Aim it at the buildings that pay — industrial, hospitals, data centers — and keep your hours logged by work type.',
  elcdata: 'What to do: journeyman license first, then OSHA 30 and NFPA 70E (the electrical-safety card), then apply to the data-center and industrial contractors by name.',
  elcown: 'What to do: pass the master exam when eligible, get the contractor license and insurance before the first solo job, and build a maintenance-contract book — that is what buyers pay for.',
  elcsales: 'What to do instead: take the same license to an hourly shop, to industrial work, or into your own name. The NO is on the pay structure, not on you.'
});

GRIDINFO.electrician = {
  head: 'Electrician is a YES. The license is the job. The seat decides the pay.',
  short: '“Electrician” is five different paychecks — the apprentice door is narrow but real, data-center work pays the top of the trade, and the commission sales seat is the one dead end.'
};

TRACKS.electrician = [
  {
    name: 'The gate',
    steps: [
      {
        id: 'elc-g1',
        t: 'Choose the paid door first. A registered apprenticeship pays you from year one and charges $0 tuition. A private school can charge $21,325 to about $42,000 and still graduate a helper.',
        src: 'HR checklist · Part 2, item 1 — The gate',
        ru: 'Сначала выберите дверь, где платят вам. Зарегистрированное ученичество (apprenticeship — оплачиваемое обучение на рабочем месте) платит вам с первого года и берёт $0 за обучение. Частная школа может взять от $21,325 до примерно $42,000 — и всё равно выпустить помощника.',
        sru: 'HR-чек-лист · Часть 2, пункт 1 — Ворота'
      },
      {
        id: 'elc-g2',
        t: 'Apply inside the window. Apprenticeship classes open once a year and close when the slots fill. One local\'s notice reads: 2026 class closed, 2027 window January 1 to March 31.',
        src: 'HR checklist · Part 2, item 2 — The gate',
        ru: 'Подавайтесь внутри окна. Классы ученичества открываются раз в год и закрываются, когда места заполнены. Объявление одного профсоюза гласит: класс 2026 закрыт, окно 2027 — с 1 января по 31 марта.',
        sru: 'HR-чек-лист · Часть 2, пункт 2 — Ворота'
      },
      {
        id: 'elc-g3',
        t: 'Get the state apprentice or training card before you count hours. The card is your registration with the state. Hours worked without it often do not count toward the license.',
        src: 'HR checklist · Part 2, item 3 — The gate',
        ru: 'Получите карту ученика (apprentice/training card — регистрация в штате) до того, как начнёте считать часы. Карта — это ваша регистрация в штате. Часы без неё часто не засчитываются в лицензию.',
        sru: 'HR-чек-лист · Часть 2, пункт 3 — Ворота'
      },
      {
        id: 'elc-g4',
        t: 'Learn the ratio rule in your state. The ratio says how many apprentices one journeyman may supervise — on many sites it is one. That number decides how many doors exist near you.',
        src: 'HR checklist · Part 2, item 4 — The gate',
        ru: 'Выучите правило соотношения (ratio) в вашем штате. Оно говорит, сколько учеников может вести один подмастерье (journeyman); на многих объектах — одного. Это число решает, сколько дверей существует рядом с вами.',
        sru: 'HR-чек-лист · Часть 2, пункт 4 — Ворота'
      }
    ]
  },
  {
    name: 'Proof',
    steps: [
      {
        id: 'elc-p1',
        t: 'Log your 8,000 hours by work type as you go — commercial, industrial, service, residential. A log is a notebook or notes app with one line per day.',
        src: 'HR checklist · Part 2, item 5 — Proof',
        ru: 'Записывайте ваши 8,000 часов по видам работ по ходу дела — коммерческая, промышленная, сервисная, жилая. Журнал — это блокнот или приложение заметок, одна строка в день.',
        sru: 'HR-чек-лист · Часть 2, пункт 5 — Доказательства'
      },
      {
        id: 'elc-p2',
        t: 'Pass the journeyman exam on the first cycle after your hours complete. The journeyman license is the state paper that lets you work unsupervised. It is named in 24 of 36 live postings.',
        src: 'HR checklist · Part 2, item 6 — Proof',
        ru: 'Сдайте экзамен на подмастерье (journeyman) в первый цикл после завершения часов. Лицензия подмастерья — бумага штата, которая разрешает работать без присмотра. Её называют в 24 из 36 живых вакансий.',
        sru: 'HR-чек-лист · Часть 2, пункт 6 — Доказательства'
      },
      {
        id: 'elc-p3',
        t: 'Add the safety cards the big sites screen for: OSHA 30 (the 30-hour construction safety course) and NFPA 70E (electrical safety in the workplace — how to work around live energy).',
        src: 'HR checklist · Part 2, item 7 — Proof',
        ru: 'Добавьте карты безопасности, которые проверяют большие объекты: OSHA 30 (30-часовой курс безопасности в строительстве) и NFPA 70E (электробезопасность на рабочем месте — как работать рядом с энергией под напряжением).',
        sru: 'HR-чек-лист · Часть 2, пункт 7 — Доказательства'
      },
      {
        id: 'elc-p4',
        t: 'Keep one specialty current: EV charging, solar plus storage, generators, or controls wiring. These are the demand drivers the postings name.',
        src: 'HR checklist · Part 2, item 8 — Proof',
        ru: 'Держите одну специализацию в актуальном состоянии: зарядка электромобилей (EV), солнечные системы с батареями, генераторы или проводка систем управления (controls). Это драйверы спроса, которые называют вакансии.',
        sru: 'HR-чек-лист · Часть 2, пункт 8 — Доказательства'
      }
    ]
  },
  {
    name: 'Get picked',
    steps: [
      {
        id: 'elc-k1',
        t: 'Aim at the building type that pays. Data centers, plants and hospitals post $48.50–$62.00 an hour for the same license that posts $24–$30 an hour in residential new construction.',
        src: 'HR checklist · Part 2, item 9 — Get picked',
        ru: 'Цельтесь в тип зданий, который платит. Дата-центры, заводы и больницы публикуют $48.50–$62.00 в час за ту же лицензию, которая в жилом новострое публикует $24–$30 в час.',
        sru: 'HR-чек-лист · Часть 2, пункт 9 — Выбор тебя'
      },
      {
        id: 'elc-k2',
        t: 'If you take service work, take it hourly or guaranteed. Commission-only pay converts your license into a sales quota set by someone else.',
        src: 'HR checklist · Part 2, item 10 — Get picked',
        ru: 'Если берёте сервисную работу, берите почасовую или гарантированную оплату. Оплата только с комиссии превращает вашу лицензию в план продаж, который поставил кто-то другой.',
        sru: 'HR-чек-лист · Часть 2, пункт 10 — Выбор тебя'
      },
      {
        id: 'elc-k3',
        t: 'After the journeyman card, price the master exam. The master license lets you supervise others, pull permits, and — in most states — is the license a shop is built on.',
        src: 'HR checklist · Part 2, item 11 — Get picked',
        ru: 'После карты подмастерья оцените экзамен на мастера (master). Лицензия мастера разрешает руководить другими, брать разрешения на работы (permits) и — в большинстве штатов — является лицензией, на которой строится фирма.',
        sru: 'HR-чек-лист · Часть 2, пункт 11 — Выбор тебя'
      },
      {
        id: 'elc-k4',
        t: 'If you go out on your own, get the contractor license and insurance before the first solo job. In most states the master license comes first; the contractor license is what lets the business sign work.',
        src: 'HR checklist · Part 2, item 12 — Get picked',
        ru: 'Если уходите в своё дело, получите лицензию подрядчика (contractor license) и страховку до первой сольной работы. В большинстве штатов сначала идёт лицензия мастера; лицензия подрядчика разрешает бизнесу подписывать работы.',
        sru: 'HR-чек-лист · Часть 2, пункт 12 — Выбор тебя'
      },
      {
        id: 'elc-k5',
        t: 'Re-check your state\'s ratio and reciprocity rules yearly. Reciprocity means another state honors your license. A license that travels is worth more every year the shortage lasts.',
        src: 'HR checklist · Part 2, item 13 — Get picked',
        ru: 'Перепроверяйте правила соотношения и взаимного признания (reciprocity — когда другой штат признаёт вашу лицензию) каждый год. Лицензия, которая путешествует, стоит дороже каждый год, пока длится нехватка.',
        sru: 'HR-чек-лист · Часть 2, пункт 13 — Выбор тебя'
      },
      {
        id: 'elc-k6',
        t: 'Stay off the prefab-shop floor as your final stop. Prefab means factory-built assemblies — electrical rooms, racked conduit, prewired panels. The work is real, but shop hours pay less and may not count toward the license the same way in your state.',
        src: 'HR checklist · Part 2, item 14 — Get picked',
        ru: 'Не оставайтесь на полу цеха заготовок (prefab — заводская сборка: электрические помещения, собранные трубы, готовые щиты) как на конечном месте. Работа настоящая, но цеховые часы платят меньше и могут не засчитываться в лицензию так же в вашем штате.',
        sru: 'HR-чек-лист · Часть 2, пункт 14 — Выбор тебя'
      }
    ]
  }
];

Object.assign(RESUME_TERMS, {
  'elc-g1': ['registered apprenticeship', 'jatc', 'ibew', 'neca'],
  'elc-g3': ['apprentice license', 'training card', 'trainee card'],
  'elc-p2': ['journeyman license', 'journeyman electrician', 'el01', 'inside wireman'],
  'elc-p3': ['osha 30', 'nfpa 70e'],
  'elc-p4': ['ev charging', 'evse', 'solar', 'battery storage', 'generator', 'controls'],
  'elc-k3': ['master electrician', 'master license'],
  'elc-k4': ['electrical contractor', 'contractor license']
});

RADAR.electrician = [
  {
    h: 'BLS counts 72,700 openings a year. The training pipe takes 4–5 years per person.',
    d: 'Nov 1, 2026 · BLS Occupational Outlook Handbook',
    map: 'If you are inside an apprenticeship, you hold a scarce asset that appreciates yearly. Do not break the chain of registered hours.',
    hRu: 'BLS считает 72,700 открытых мест в год. Труба обучения занимает 4–5 лет на человека.',
    dRu: '1 ноября 2026 · BLS Occupational Outlook Handbook',
    mapRu: 'Если вы внутри ученичества, у вас дефицитный актив, который дорожает каждый год. Не рвите цепь зарегистрированных часов.'
  },
  {
    h: 'The data-center premium is printed in public: $48.50/hr posted, $62.00/hr on the Data Center Alley scale.',
    d: '2026 · Rosendin posting; IBEW Local 26 wage sheet',
    map: 'Residential postings in the same scan run $24–$50/hr. Aim the license at the building type.',
    hRu: 'Премия дата-центров напечатана открыто: $48.50/hr в вакансии, $62.00/hr по шкале Data Center Alley.',
    dRu: '2026 · вакансия Rosendin; шкала IBEW Local 26',
    mapRu: 'Жилые вакансии в том же скане идут по $24–$50/hr. Цельте лицензию в тип здания.'
  },
  {
    h: 'Apprentice windows are annual — and they close.',
    d: '2026 · IBEW Local 269 apprenticeship notice',
    map: 'The 2026 class is closed; the 2027 window runs January 1 – March 31. Missing it costs a year, not a semester.',
    hRu: 'Окна ученичества годовые — и они закрываются.',
    dRu: '2026 · объявление IBEW Local 269 об ученичестве',
    mapRu: 'Класс 2026 закрыт; окно 2027 идёт с 1 января по 31 марта. Пропуск стоит год, а не семестр.'
  },
  {
    h: 'Prefab is moving hours from the field to the shop.',
    d: 'Jun 2026 · NECA innovation program; EC&M feature',
    map: 'Factory-built electrical rooms and prewired panels are standard on big jobs now. Treat a shop season as experience, not as your seat.',
    hRu: 'Prefab двигает часы с объекта в цех.',
    dRu: 'Июнь 2026 · инновационная программа NECA; статья EC&M',
    mapRu: 'Заводские электрические помещения и готовые щиты теперь стандарт на больших работах. Считайте сезон в цехе опытом, а не своим местом.'
  },
  {
    h: 'The roll-up reached the service truck: 800+ trade deals since 2022.',
    d: '2026 · PitchBook counts via industry analyses',
    map: 'The model’s field signature is commission pay and ticket quotas. If your shop is acquired, read the new pay plan before you judge the new logo.',
    hRu: 'Скупка дошла до сервисной машины: более 800 сделок в ремёслах с 2022 года.',
    dRu: '2026 · подсчёты PitchBook через отраслевые анализы',
    mapRu: 'Подпись модели в поле — комиссионная оплата и планы по чекам. Если вашу фирму купили, читайте новый план оплаты до оценки нового логотипа.'
  },
  {
    h: 'Trade-school prices did not move with the shortage: $21,325 to about $42,000.',
    d: 'Oct 2026 · school-cost comparisons',
    map: 'Registered apprenticeships still pay about $20.30/hr from year one at $0 tuition. A school pitch that starts with financing is selling the loan.',
    hRu: 'Цены торговых школ не сдвинулись с нехваткой: от $21,325 до примерно $42,000.',
    dRu: 'Октябрь 2026 · сравнения цен школ',
    mapRu: 'Зарегистрированные ученичества всё ещё платят около $20.30/hr с первого года при $0 за обучение. Питч школы, который начинается с финансирования, продаёт кредит.'
  }
];

/* ===== Electrician — Russian (RU) content layer ===== */
PROF_META_RU.electrician = 'Электрик';

Object.assign(DOORS_RU, {
  elcapp: 'Что делать: подавайтесь в зарегистрированное ученичество (apprenticeship — оплачиваемое обучение на рабочем месте) внутри его годового окна — профсоюзное (IBEW/JATC) или непрофсоюзное. Получите карту ученика вашего штата до того, как засчитаете хоть один час.',
  elcjour: 'Что делать: у вас в руках актив. Цельте его в здания, которые платят, — промышленные объекты, больницы, дата-центры, — и ведите журнал часов по видам работ.',
  elcdata: 'Что делать: сначала лицензия подмастерья (journeyman — лицензия электрика, который может работать сам), потом OSHA 30 и NFPA 70E (карта электробезопасности), потом подавайтесь в дата-центр и промышленные компании по именам.',
  elcown: 'Что делать: сдайте экзамен на мастера (master), когда получите право, получите лицензию подрядчика (contractor license) и страховку до первой сольной работы и стройте базу договоров обслуживания — именно за неё платят покупатели.',
  elcsales: 'Что делать вместо этого: отнесите ту же лицензию в фирму с почасовой оплатой, в промышленную работу или под своё собственное имя. NO относится к структуре оплаты, а не к вам.'
});

GRIDINFO_RU.electrician = {
  head: 'Электрик — это ДА. Лицензия и есть работа. Место решает оплату.',
  short: '«Электрик» — это пять разных зарплат: дверь ученика узкая, но настоящая, работа в дата-центрах платит вершину ремесла, а комиссионное место продаж — единственный тупик.'
};

DOORSTEP_RU.prof.electrician = {
  student: 'Первый шаг, до старта: подавайтесь в зарегистрированное ученичество — профсоюзный комитет (JATC) или непрофсоюзное — внутри его годового окна. Не покупайте сначала диплом за $21K–$42K: его выпускники начинают теми же помощниками.',
  early: 'Первый шаг, как ученик: получите карту ученика вашего штата, потом записывайте каждый час по виду работ с первого дня. Незарегистрированные часы часто не засчитываются в лицензию.',
  mid: 'Первый шаг, как подмастерье (journeyman): цельте лицензию в здания, которые платят, — вакансии дата-центров идут по $48.50 в час, а шкала Data Center Alley — $62.00, — и добавьте OSHA 30 и NFPA 70E (электробезопасность).',
  senior: 'Первый шаг, как мастер (master): оценивайте бизнес, а не часы, — лицензия подрядчика, страховка и база договоров обслуживания. Именно за эту базу покупатели платят кратные суммы.'
};
DOORSTEP_RU.seat.elcapp = {
  student: 'Первый шаг, как студент: найдите окна приёма вашего штата сегодня — классы комитетов ученичества (JATC) открываются раз в год, и пропущенное окно стоит полный год.',
  early: 'Первый шаг, в начале: защищайте цепь — зарегистрированные часы, каждая неделя записана. Лицензия в конце — весь актив.',
  mid: 'Первый шаг, на уровне подмастерья: это место позади вас — ваш шаг — выбор специализации (промышленная, сервисная, проводка систем управления).',
  senior: 'Первый шаг, на уровне мастера: нанимайте и регистрируйте учеников в рамках вашего соотношения (ratio — сколько учеников может вести один подмастерье), — узкое место, которое вы прошли, теперь ваше преимущество при найме.'
};
DOORSTEP_RU.seat.elcsales = {
  student: 'Первый шаг, как студент: не входите в ремесло через «бесплатное обучение» комиссионной фирмы, не прочитав абзац про оплату, — после обучения база может упасть до минимальной зарплаты плюс комиссия.',
  early: 'Первый шаг, в начале: зарегистрируйте ваши часы в штате, как бы фирма вас ни называла. Часы, которые не зарегистрированы, не становятся лицензией.',
  mid: 'Первый шаг, при 3–5 годах: двигайте лицензию, а не план продаж, — сервисные вакансии по $45–$65 в час нанимают те же руки без плана продаж.',
  senior: 'Первый шаг, при 5+ годах: ваши знания клиентов стоят дороже под вашим собственным именем — экзамен на мастера, лицензия подрядчика, ваша собственная база.'
};

Object.assign(BIGGOALS_RU, {
  elcapp: 'Большая цель: лицензия подмастерья (journeyman) — полученная внутри оплачиваемого ученичества, с 8,000 записанных часов и $0 школьного долга.',
  elcjour: 'Большая цель: лицензия, нацеленная в здания, которые платят, — промышленные и дата-центр вилки, а не жилой пол.',
  elcdata: 'Большая цель: место, которое подключает экономику AI, — работа по шкале $62.00/hr с картами безопасности, которые проверяют большие объекты.',
  elcown: 'Большая цель: фирма с вашим именем — лицензия мастера (master), лицензия подрядчика и база договоров обслуживания, за которую покупатель заплатит.',
  elcsales: 'Большая цель: та же лицензия при оплате, которая платит за ремонт, — почасовая, гарантированная или ваше собственное имя на машине.'
});
BIGGOAL_PROF_RU.electrician = 'Большая цель: лицензия, которую нехватка переоценивает вверх, — и место, выбранное по типу здания, а не по привычке.';

/* ================= HVAC TECHNICIAN =================
   Source: ~/workspace/cg-staging/trades/spec.md (postings scan + BLS).
   Cluster: HVAC IS A YES. THE FEDERAL CARD OPENS IT. THE SPECIALTY PAYS FOR IT. (High). Code word: FROST. */
PROF_META.hvac = {
  name: 'HVAC Technician',
  kick: 'HVAC Technician',
  code: 'FROST',
  count: '+11%',
  srcWhat: 'growth — the fastest of the three trades (BLS)',
  srcWhatRu: 'рост — самый быстрый из трёх ремёсел (BLS)'
};

Object.assign(SEATINFO, {
  hvcapp: {
    prof: 'hvac',
    label: 'Apprentice / helper — the door',
    verdict: 'YES',
    conf: 'High'
  },
  hvctech: {
    prof: 'hvac',
    label: 'Residential service technician (hourly)',
    verdict: 'YES',
    conf: 'High'
  },
  hvcomm: {
    prof: 'hvac',
    label: 'Commercial HVAC / controls (BAS) specialist',
    verdict: 'YES',
    conf: 'High'
  },
  hvcown: {
    prof: 'hvac',
    label: 'Owner-operator / own shop',
    verdict: 'YES',
    conf: 'High'
  },
  hvcsales: {
    prof: 'hvac',
    label: 'Commission sales-tech (PE platform)',
    verdict: 'NO',
    conf: 'Medium'
  }
});

Object.assign(DOORS, {
  hvcapp: 'What to do: get the EPA 608 card (Universal if you can) and enter through a paid helper seat. Let an employer pay for your hours, not a school for your hope.',
  hvctech: 'What to do: you are in a YES seat on hourly or guaranteed pay. Keep a system log — type, tonnage, fault, fix — it is the record the commercial seats hire on.',
  hvcomm: 'What to do: service years first, then learn one controls platform properly. The specialty is a second apprenticeship inside the trade — which is why it pays.',
  hvcown: 'What to do: get the contractor license your state requires, build the maintenance-agreement book, and keep your techs on pay that does not need a quota to work.',
  hvcsales: 'What to do instead: your EPA card and your system log transfer on day one — to an hourly shop or a commercial contractor. The controls seat sits two or three years past that.'
});

GRIDINFO.hvac = {
  head: 'HVAC is a YES. The federal card opens it. The specialty pays for it.',
  short: '“HVAC technician” is five different paychecks — the door takes months through the federal card, controls pays the top with no commission, and the commission sales seat is the dead end.'
};

TRACKS.hvac = [
  {
    name: 'The gate',
    steps: [
      {
        id: 'hvc-g1',
        t: 'Get the EPA 608 card first — Universal if you can. EPA 608 is the federal certificate for handling refrigerant. Without it you cannot legally do refrigerant work, and no shop can bill you out as a technician.',
        src: 'HR checklist · Part 2, item 1 — The gate',
        ru: 'Сначала получите карту EPA 608 — Universal (все типы), если можете. EPA 608 — федеральный сертификат на работу с хладагентом (refrigerant — газ в системе охлаждения). Без него вы не можете легально работать с хладагентом, и ни одна фирма не может выставлять вас клиенту как техника.',
        sru: 'HR-чек-лист · Часть 2, пункт 1 — Ворота'
      },
      {
        id: 'hvc-g2',
        t: 'Enter through a paid helper or apprentice seat, not a $21K–$42K diploma. Postings that take beginners pay them. The schools that charge them still graduate helpers.',
        src: 'HR checklist · Part 2, item 2 — The gate',
        ru: 'Входите через оплачиваемое место помощника или ученика, а не через диплом за $21K–$42K. Вакансии, которые берут новичков, им платят. Школы, которые берут с них деньги, всё равно выпускают помощников.',
        sru: 'HR-чек-лист · Часть 2, пункт 2 — Ворота'
      },
      {
        id: 'hvc-g3',
        t: 'Learn your state\'s rule. Some states license HVAC technicians. Some license only the contractor. Know which paper your state actually checks before you pay for anyone\'s version of it.',
        src: 'HR checklist · Part 2, item 3 — The gate',
        ru: 'Выучите правило вашего штата. Некоторые штаты лицензируют техников HVAC. Некоторые — только подрядчика (contractor). Знайте, какую бумагу ваш штат действительно проверяет, прежде чем платить за чужую версию.',
        sru: 'HR-чек-лист · Часть 2, пункт 3 — Ворота'
      },
      {
        id: 'hvc-g4',
        t: 'Pick service over install-only early. Diagnosis — finding what is actually wrong — is the skill every top posting pays for. System change-outs are the commodity end of the trade.',
        src: 'HR checklist · Part 2, item 4 — The gate',
        ru: 'Рано выбирайте сервис вместо только монтажа. Диагностика — найти, что на самом деле сломалось, — навык, за который платит каждая топовая вакансия. Замена систем (change-out) — товарный конец ремесла.',
        sru: 'HR-чек-лист · Часть 2, пункт 4 — Ворота'
      }
    ]
  },
  {
    name: 'Proof',
    steps: [
      {
        id: 'hvc-p1',
        t: 'Log every system you touch: type, tonnage, fault, fix. Tonnage is the system\'s cooling size. Your log is the experience record the 2+ year postings screen for.',
        src: 'HR checklist · Part 2, item 5 — Proof',
        ru: 'Записывайте каждую систему, которой касаетесь: тип, тоннаж (tonnage — размер охлаждения системы), неисправность, ремонт. Ваш журнал — это запись опыта, которую проверяют вакансии с требованием 2+ года.',
        sru: 'HR-чек-лист · Часть 2, пункт 5 — Доказательства'
      },
      {
        id: 'hvc-p2',
        t: 'Cross into commercial work by year two or three: rooftops, chillers, refrigeration. Residential-only experience caps your pay at the lowest employer class in the scan.',
        src: 'HR checklist · Part 2, item 6 — Proof',
        ru: 'Переходите в коммерческую работу к второму-третьему году: крыши (rooftops — блоки на крышах), чиллеры (chillers — большие холодильные машины), холодильное оборудование. Опыт только в жилом секторе ограничивает вашу оплату самым низким классом работодателей в скане.',
        sru: 'HR-чек-лист · Часть 2, пункт 6 — Доказательства'
      },
      {
        id: 'hvc-p3',
        t: 'Sit the NATE exam in your specialty once you have the hours. NATE is the industry\'s own technician certificate. Employers list it as \'preferred\' — it is the cheapest documented raise in the trade.',
        src: 'HR checklist · Part 2, item 7 — Proof',
        ru: 'Сдайте экзамен NATE (отраслевой сертификат техника) по вашей специализации, когда наберёте часы. Работодатели пишут его как «желательно» (preferred) — это самая дешёвая задокументированная прибавка в ремесле.',
        sru: 'HR-чек-лист · Часть 2, пункт 7 — Доказательства'
      },
      {
        id: 'hvc-p4',
        t: 'Learn one controls platform properly: Trane, Johnson Controls, Siemens, Schneider, Distech. Controls are the building automation systems — the software that runs big buildings\' heating and cooling. Postings name platforms, not tools.',
        src: 'HR checklist · Part 2, item 8 — Proof',
        ru: 'Выучите одну платформу автоматики (controls) по-настоящему: Trane, Johnson Controls, Siemens, Schneider, Distech. Controls — это системы автоматизации зданий, программа, которая управляет отоплением и охлаждением больших зданий. Вакансии называют платформы, а не инструменты.',
        sru: 'HR-чек-лист · Часть 2, пункт 8 — Доказательства'
      }
    ]
  },
  {
    name: 'Get picked',
    steps: [
      {
        id: 'hvc-k1',
        t: 'Aim at the controls and commercial seats. They post $60K–$125K, pay salary or hourly, and — in 9 of 9 controls postings — never mention commission.',
        src: 'HR checklist · Part 2, item 9 — Get picked',
        ru: 'Цельтесь в места автоматики и коммерческие места. Они публикуют $60K–$125K, платят зарплату или почасово и — в 9 из 9 вакансий по автоматике — никогда не упоминают комиссию.',
        sru: 'HR-чек-лист · Часть 2, пункт 9 — Выбор тебя'
      },
      {
        id: 'hvc-k2',
        t: 'If you stay residential, take hourly or guaranteed pay. \'Uncapped commission\' means your wage depends on selling replacements in people\'s homes.',
        src: 'HR checklist · Part 2, item 10 — Get picked',
        ru: 'Если остаётесь в жилом секторе, берите почасовую или гарантированную оплату. «Комиссия без потолка» (uncapped commission) значит, что ваша зарплата зависит от продажи замен в домах людей.',
        sru: 'HR-чек-лист · Часть 2, пункт 10 — Выбор тебя'
      },
      {
        id: 'hvc-k3',
        t: 'Treat on-call as a priced item. On-call means nights and weekends on rotation for emergencies. It appears in a quarter of the scan\'s postings; negotiate its pay and rotation before you sign.',
        src: 'HR checklist · Part 2, item 11 — Get picked',
        ru: 'Считайте дежурства (on-call — ночи и выходные по ротации для аварийных вызовов) платной частью работы. Они встречаются в четверти вакансий скана; обсуждайте их оплату и ротацию до подписания.',
        sru: 'HR-чек-лист · Часть 2, пункт 11 — Выбор тебя'
      },
      {
        id: 'hvc-k4',
        t: 'Add the data-center skill set: precision cooling, large tonnage, mission-critical sites. BLS names data centers as the growth driver, and a cooling contract for a data center does not end.',
        src: 'HR checklist · Part 2, item 12 — Get picked',
        ru: 'Добавьте набор навыков дата-центров: точное охлаждение (precision cooling), большой тоннаж, объекты, которые не могут остановиться (mission-critical). BLS называет дата-центры драйвером роста, а контракт на охлаждение дата-центра не заканчивается.',
        sru: 'HR-чек-лист · Часть 2, пункт 12 — Выбор тебя'
      },
      {
        id: 'hvc-k5',
        t: 'If you go out on your own, the contractor license and a maintenance-agreement book are the business. Recurring agreements are what buyers pay for when shops sell.',
        src: 'HR checklist · Part 2, item 13 — Get picked',
        ru: 'Если уходите в своё дело, бизнес — это лицензия подрядчика (contractor license) и база договоров обслуживания. Повторяющиеся договоры — то, за что платят покупатели, когда фирмы продаются.',
        sru: 'HR-чек-лист · Часть 2, пункт 13 — Выбор тебя'
      }
    ]
  }
];

Object.assign(RESUME_TERMS, {
  'hvc-g1': ['epa 608', 'epa section 608', 'epa universal', 'universal certification', 'type ii'],
  'hvc-p3': ['nate', 'nate certified', 'nate certification'],
  'hvc-p4': ['bas', 'bms', 'building automation', 'johnson controls', 'metasys', 'trane', 'siemens', 'distech', 'niagara', 'controls'],
  'hvc-k4': ['data center', 'precision cooling', 'chiller', 'cooling tower']
});

RADAR.hvac = [
  {
    h: 'BLS names your biggest customer: the data center.',
    d: 'Nov 1, 2026 · BLS Occupational Outlook Handbook',
    map: 'The +11% outlook names commercial construction “including data centers” as the driver. Precision cooling experience is the specialty the decade hires for.',
    hRu: 'BLS называет вашего крупнейшего клиента: дата-центр.',
    dRu: '1 ноября 2026 · BLS Occupational Outlook Handbook',
    mapRu: 'Прогноз +11% называет коммерческое строительство «включая дата-центры» драйвером. Опыт точного охлаждения — специализация, которую нанимает десятилетие.'
  },
  {
    h: 'Controls is the top of the pay table — with no commission in it.',
    d: 'Nov 1, 2026 · 27 live postings',
    map: 'Nine controls postings run $60,000–$125,000; zero mention commission. After your service years, learn one platform properly.',
    hRu: 'Автоматика — вершина таблицы оплаты, и в ней нет комиссии.',
    dRu: '1 ноября 2026 · 27 живых вакансий',
    mapRu: 'Девять вакансий по автоматике идут по $60,000–$125,000; ни одна не упоминает комиссию. После сервисных лет выучите одну платформу по-настоящему.'
  },
  {
    h: 'The roll-up’s 2025 pace: 202 HVAC deals, investors in about half.',
    d: '2026 · Capstone Partners via industry summary',
    map: 'When your shop sells, the pay plan changes before the trucks do. Read yours.',
    hRu: 'Темп скупки 2025 года: 202 сделки HVAC, инвесторы примерно в половине.',
    dRu: '2026 · Capstone Partners через отраслевую сводку',
    mapRu: 'Когда вашу фирму продают, план оплаты меняется раньше машин. Читайте ваш.'
  },
  {
    h: 'On-call is being sold back to you as a perk — which prices it.',
    d: '2026 · employer postings',
    map: 'One posting advertises “Minimal On Call!”; a union posting prints its 7–8 week rotation as a feature. Negotiate your nights before signing.',
    hRu: 'Дежурства продают вам обратно как преимущество — значит, у них есть цена.',
    dRu: '2026 · вакансии работодателей',
    mapRu: 'Одна вакансия рекламирует «Минимум дежурств!»; профсоюзная печатает ротацию раз в 7–8 недель как благо. Обсуждайте ваши ночи до подписания.'
  },
  {
    h: 'The EPA card is still the whole gate: 13 of 27 postings name it, all require it.',
    d: 'Nov 1, 2026 · postings scan',
    map: 'If you hold Type II only, the Universal upgrade is the cheapest door in this trade.',
    hRu: 'Карта EPA — всё ещё вся дверь: 13 из 27 вакансий её называют, все требуют.',
    dRu: '1 ноября 2026 · скан вакансий',
    mapRu: 'Если у вас только Type II, переход на Universal (все типы) — самая дешёвая дверь в этом ремесле.'
  },
  {
    h: 'AI exposure check: this job ranks #472 of 785 for AI applicability.',
    d: '2026 · Microsoft Research ranking, via trade evidence scan',
    map: 'The systems getting smarter create controls work. The risk to price is the pay structure, not the robot.',
    hRu: 'Проверка подверженности AI: эта работа — №472 из 785 по применимости AI.',
    dRu: '2026 · рейтинг Microsoft Research, через скан доказательств ремесла',
    mapRu: 'Системы, которые умнеют, создают работу по автоматике. Риск, который надо оценивать, — структура оплаты, а не робот.'
  }
];

/* ===== HVAC Technician — Russian (RU) content layer ===== */
PROF_META_RU.hvac = 'Техник HVAC (отопление, вентиляция, кондиционирование)';

Object.assign(DOORS_RU, {
  hvcapp: 'Что делать: получите карту EPA 608 (Universal — все типы, если можете) и входите через оплачиваемое место помощника. Пусть работодатель платит за ваши часы, а не школа — за вашу надежду.',
  hvctech: 'Что делать: вы в месте YES на почасовой или гарантированной оплате. Ведите журнал систем — тип, тоннаж (tonnage — мощность охлаждения), неисправность, ремонт: это запись, по которой нанимают коммерческие места.',
  hvcomm: 'Что делать: сначала годы сервиса, потом выучите одну платформу автоматики (controls) по-настоящему. Эта специализация — второе ученичество внутри ремесла, поэтому она и платит.',
  hvcown: 'Что делать: получите лицензию подрядчика, которую требует ваш штат, стройте базу договоров обслуживания и держите ваших техников на оплате, которой не нужен план продаж.',
  hvcsales: 'Что делать вместо этого: ваша карта EPA и ваш журнал систем переносятся в первый же день — в фирму с почасовой оплатой или к коммерческому подрядчику. Место автоматики — в двух-трёх годах после этого.'
});

GRIDINFO_RU.hvac = {
  head: 'HVAC — это ДА. Федеральная карта открывает дверь. Специализация платит.',
  short: '«Техник HVAC» — это пять разных зарплат: дверь занимает месяцы через федеральную карту, автоматика платит вершину без комиссии, а комиссионное место продаж — тупик.'
};

DOORSTEP_RU.prof.hvac = {
  student: 'Первый шаг, до старта: получите карту EPA 608 — федеральный экзамен на хладагент (refrigerant — газ в системе охлаждения). Он стоит несколько сотен долларов с подготовкой, и без него ни одна фирма не может выставить вас клиенту как техника. Диплом за $21K–$42K пока пропустите.',
  early: 'Первый шаг, как помощник: начните журнал систем — тип, тоннаж, неисправность, ремонт — с первой недели. Этот журнал — запись опыта, которую проверяют вакансии с требованием 2+ года.',
  mid: 'Первый шаг, при 3–5 годах: переходите в коммерческую работу — крыши (rooftops — блоки на крышах), чиллеры (chillers — большие холодильные машины), холодильное оборудование. Потом выучите одну платформу автоматики (controls); вакансии по автоматике идут по $60K–$125K без строки комиссии.',
  senior: 'Первый шаг, при 5+ годах: оценивайте базу, а не часы: если у вас своя фирма или вы её строите, её цена — договоры обслуживания и имя; именно это покупал рекордный темп сделок 2024–2025 годов.'
};
DOORSTEP_RU.seat.hvcapp = {
  student: 'Первый шаг, как студент: запишитесь на экзамен EPA 608 до любого тура по школам. Universal (все типы) — версия, которую просят коммерческие фирмы.',
  early: 'Первый шаг, в начале: станьте помощником, которого отправляют, — чистая машина, письменные заметки, системы записаны. Фирмы повышают помощника, которого можно выставить клиенту.',
  mid: 'Первый шаг, при 3–5 годах: это место позади вас — ваш шаг — переход в коммерческую работу и одна платформа автоматики.',
  senior: 'Первый шаг, при 5+ годах: нанимайте помощников так, как наняли вас, — оплачиваемое место и журнал бьют выпускника дипломной мельницы и для вашей машины.'
};
DOORSTEP_RU.seat.hvcsales = {
  student: 'Первый шаг, как студент: если предложение «бесплатного обучения» заканчивается комиссионной оплатой, прочитайте абзац про оплату дважды. Обучение настоящее; план продаж — тоже.',
  early: 'Первый шаг, в начале: ведите ваш собственный журнал систем даже внутри фирмы с планом продаж. Журнал — ваш; книга цен — их.',
  mid: 'Первый шаг, при 3–5 годах: двигайте запись, а не план, — коммерческие подрядчики нанимают по доказательству диагностики и платят за него $35–$45 в час.',
  senior: 'Первый шаг, при 5+ годах: ваша репутация на кухнях домовладельцев стоит дороже под вашим собственным именем — лицензия подрядчика, честная почасовая оплата, своя база.'
};

Object.assign(BIGGOALS_RU, {
  hvcapp: 'Большая цель: федеральная карта плюс оплачиваемое место — техник, которого фирма может выставлять клиенту, внутри вашего первого года, без пятизначного кредита.',
  hvctech: 'Большая цель: оплата ведущего техника на почасовых условиях — $30–$50 в час за диагностику, которой доверяют, с дежурствами, оценёнными письменно.',
  hvcomm: 'Большая цель: место автоматики — одна освоенная платформа, $60K–$125K зарплатной работы и никакого плана продаж в строке оплаты.',
  hvcown: 'Большая цель: фирма, чья база и есть актив, — договоры обслуживания и местное имя, которое покупатель оценивает в кратных числах.',
  hvcsales: 'Большая цель: те же руки при оплате, которая платит за ремонт, — почасовая, коммерческая или ваше собственное имя на машине.'
});
BIGGOAL_PROF_RU.hvac = 'Большая цель: ремесло, которое AI не может ни вывезти за границу, ни сделать сам, — нацеленное в здания, где AI живёт.';