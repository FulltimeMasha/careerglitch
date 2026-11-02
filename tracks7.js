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
    label: 'Apprentice electrician — the way in',
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
    label: 'Sales tech paid by commission (home repair chain)',
    verdict: 'NO',
    conf: 'Medium'
  }
});

Object.assign(DOORS, {
  elcapp: 'What to do: apply for a registered apprenticeship (you learn on the job and get paid). Signups open once a year, so apply on time. A union (workers\' group, like IBEW/JATC) or non-union both work. Get your state apprentice card before you count any hours.',
  elcjour: 'What to do: your license is worth a lot. Take it to buildings that pay more. That means factories, hospitals, data centers. Log your hours by type of work.',
  elcdata: 'What to do: get the journeyman license first. Then OSHA 30 and NFPA 70E (electrical safety cards). Then apply to data-center and factory contractors directly.',
  elcown: 'What to do: pass the master exam once you can. Get a contractor license (to run your own business) and insurance before your first solo job. Collect maintenance contracts (customers who pay for regular check-ups). That is what buyers pay for.',
  elcsales: 'What to do instead: good news, your license still works! Take it to a shop that pays by the hour. Or to factory work, or your own business. The NO is about how they pay, not about you.'
});

GRIDINFO.electrician = {
  head: 'Electrician is a YES! The license is the job. Where you work decides how much you earn.',
  short: '“Electrician” can mean five different paychecks. Getting in as an apprentice (a paid learner) is hard, but doable. Data centers pay the most. One job to skip: sales paid only by commission (money only when you sell).'
};

TRACKS.electrician = [
  {
    name: 'Getting in',
    steps: [
      {
        id: 'elc-g1',
        t: 'Pick the way in that pays you. A registered apprenticeship pays from year one. Learning costs $0. A private school can charge $21,325 to about $42,000. You still come out as a helper.',
        src: 'HR checklist · Part 2, item 1 — Getting in',
        ru: 'Выберите путь, где платят вам. Зарегистрированное ученичество (apprenticeship — обучение прямо на работе, с зарплатой) платит с первого года. Учёба стоит $0. Частная школа берёт от $21,325 до примерно $42,000. А после неё вы всё равно просто помощник.',
        sru: 'HR-чек-лист · Часть 2, пункт 1 — Вход'
      },
      {
        id: 'elc-g2',
        t: 'Apply on time. Apprenticeships take new people once a year. They close when spots fill. One union notice says: 2026 class closed. 2027 applications open January 1 to March 31.',
        src: 'HR checklist · Part 2, item 2 — Getting in',
        ru: 'Подайте заявку вовремя. Набор в ученичество идёт раз в год. Когда места кончаются, набор закрывают. Пример от одного профсоюза: набор 2026 закрыт. На 2027 подают с 1 января по 31 марта.',
        sru: 'HR-чек-лист · Часть 2, пункт 2 — Вход'
      },
      {
        id: 'elc-g3',
        t: 'Get your state apprentice card before you count hours. The card means the state has you on record. Hours without it often don\'t count toward the license.',
        src: 'HR checklist · Part 2, item 3 — Getting in',
        ru: 'Сначала получите карту ученика (apprentice/training card). Только потом считайте часы. Карта значит, что штат вас записал. Часы без неё часто не идут в зачёт лицензии.',
        sru: 'HR-чек-лист · Часть 2, пункт 3 — Вход'
      },
      {
        id: 'elc-g4',
        t: 'Learn your state\'s ratio rule. It says how many apprentices one journeyman can lead. On many sites it is one. So it decides how many spots exist near you.',
        src: 'HR checklist · Part 2, item 4 — Getting in',
        ru: 'Узнайте правило соотношения (ratio) в вашем штате. Оно говорит, скольких учеников ведёт один journeyman (электрик с лицензией). Часто — только одного. От этого зависит, сколько мест есть рядом с вами.',
        sru: 'HR-чек-лист · Часть 2, пункт 4 — Вход'
      }
    ]
  },
  {
    name: 'Proof',
    steps: [
      {
        id: 'elc-p1',
        t: 'Write down your 8,000 hours by type of work as you go. Commercial, industrial, service, homes. Use a notebook or a notes app. One line per day.',
        src: 'HR checklist · Part 2, item 5 — Proof',
        ru: 'Записывайте свои 8,000 часов по видам работ, сразу. Коммерческие объекты, заводы, ремонт, жильё. Хватит блокнота или заметок в телефоне. Одна строка в день.',
        sru: 'HR-чек-лист · Часть 2, пункт 5 — Доказательства'
      },
      {
        id: 'elc-p2',
        t: 'Take the journeyman exam at the first chance after your hours. This state license lets you work without a boss watching. 24 of 36 real job posts ask for it.',
        src: 'HR checklist · Part 2, item 6 — Proof',
        ru: 'Сдавайте экзамен на journeyman при первой возможности после часов. Эта лицензия штата разрешает работать без присмотра. Её просят в 24 из 36 настоящих вакансий.',
        sru: 'HR-чек-лист · Часть 2, пункт 6 — Доказательства'
      },
      {
        id: 'elc-p3',
        t: 'Get the safety cards big sites check. OSHA 30 is a 30-hour building safety course. NFPA 70E teaches how to work safely near live power.',
        src: 'HR checklist · Part 2, item 7 — Proof',
        ru: 'Получите карты безопасности, которые проверяют на больших объектах. OSHA 30 — 30-часовой курс безопасности на стройке. NFPA 70E — как безопасно работать рядом с током.',
        sru: 'HR-чек-лист · Часть 2, пункт 7 — Доказательства'
      },
      {
        id: 'elc-p4',
        t: 'Keep one specialty up to date: EV charging, solar with batteries, generators, or controls wiring. Job posts say these are growing.',
        src: 'HR checklist · Part 2, item 8 — Proof',
        ru: 'Держите одну специализацию в форме: зарядка электромобилей (EV), солнечные панели с батареями, генераторы или проводка систем управления (controls). На них сейчас спрос в вакансиях.',
        sru: 'HR-чек-лист · Часть 2, пункт 8 — Доказательства'
      }
    ]
  },
  {
    name: 'Get picked',
    steps: [
      {
        id: 'elc-k1',
        t: 'Go where the pay is. Data centers, factories and hospitals pay $48.50–$62.00 an hour. New home building pays $24–$30 an hour. Same license.',
        src: 'HR checklist · Part 2, item 9 — Get picked',
        ru: 'Идите туда, где больше платят. Дата-центры, заводы и больницы платят $48.50–$62.00 в час. На стройке новых домов — $24–$30 в час. Лицензия та же.',
        sru: 'HR-чек-лист · Часть 2, пункт 9 — Вас выбирают'
      },
      {
        id: 'elc-k2',
        t: 'If you do repair calls, take hourly or guaranteed pay. Commission-only means you earn only when you sell. Then your skill turns into a sales goal someone else sets.',
        src: 'HR checklist · Part 2, item 10 — Get picked',
        ru: 'Если идёте в ремонт по вызовам, берите оплату за часы или с гарантией. Оплата только с продаж значит: деньги — только когда продали. Тогда ваш навык превращается в план продаж, который ставит кто-то другой.',
        sru: 'HR-чек-лист · Часть 2, пункт 10 — Вас выбирают'
      },
      {
        id: 'elc-k3',
        t: 'After the journeyman card, look into the master exam. The master license lets you lead others and get permits. In most states, you need it to open a shop.',
        src: 'HR checklist · Part 2, item 11 — Get picked',
        ru: 'После лицензии journeyman узнайте про экзамен на master (мастер). С ней можно руководить людьми и брать разрешения на работы (permits). В большинстве штатов без неё свою фирму не открыть.',
        sru: 'HR-чек-лист · Часть 2, пункт 11 — Вас выбирают'
      },
      {
        id: 'elc-k4',
        t: 'If you start your own business, get a contractor license and insurance first. Do it before your first solo job. In most states the master license comes before that. The contractor license lets your business sign jobs.',
        src: 'HR checklist · Part 2, item 12 — Get picked',
        ru: 'Если открываете своё дело, сначала получите лицензию подрядчика (contractor license) и страховку. Это до первого самостоятельного заказа. В большинстве штатов перед этим нужна лицензия master. Лицензия подрядчика даёт фирме право брать заказы.',
        sru: 'HR-чек-лист · Часть 2, пункт 12 — Вас выбирают'
      },
      {
        id: 'elc-k5',
        t: 'Check your state\'s ratio and reciprocity rules every year. Reciprocity means another state accepts your license. While workers are short, such a license gets more valuable every year.',
        src: 'HR checklist · Part 2, item 13 — Get picked',
        ru: 'Каждый год проверяйте правила ratio и reciprocity в вашем штате. Reciprocity — это когда другой штат признаёт вашу лицензию. Пока электриков не хватает, такая лицензия дорожает каждый год.',
        sru: 'HR-чек-лист · Часть 2, пункт 13 — Вас выбирают'
      },
      {
        id: 'elc-k6',
        t: 'Don\'t stay in a prefab shop for good. Prefab means parts built in a factory: electrical rooms, pipe racks, ready panels. The work is real. But shop hours pay less. In your state they may count less toward the license.',
        src: 'HR checklist · Part 2, item 14 — Get picked',
        ru: 'Не оставайтесь в цеху prefab навсегда. Prefab — это сборка на заводе: электрощитовые, трубы, готовые щиты. Работа настоящая. Но в цеху платят меньше. И часы там могут хуже засчитываться в лицензию.',
        sru: 'HR-чек-лист · Часть 2, пункт 14 — Вас выбирают'
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
    h: 'BLS counts 72,700 openings a year. Training one person takes 4–5 years.',
    d: 'Nov 1, 2026 · BLS Occupational Outlook Handbook',
    map: 'In an apprenticeship? You have something rare, and it gets more valuable each year. Keep your hours going without breaks. You\'ve got this.',
    hRu: 'BLS насчитывает 72,700 вакансий в год. Обучение одного человека занимает 4–5 лет.',
    dRu: '1 ноября 2026 · BLS Occupational Outlook Handbook',
    mapRu: 'Вы уже в ученичестве? У вас редкая и ценная вещь. Она дорожает каждый год. Просто не делайте перерывов в часах. У вас получится.'
  },
  {
    h: 'Data centers pay more, and it\'s public: $48.50/hr in a job post, $62.00/hr on the Data Center Alley pay scale.',
    d: '2026 · Rosendin posting; IBEW Local 26 wage sheet',
    map: 'Home jobs in the same job posts pay $24–$50/hr. Choose where to work by building type.',
    hRu: 'Дата-центры платят больше, и это открыто: $48.50/hr в вакансии, $62.00/hr по шкале Data Center Alley.',
    dRu: '2026 · вакансия Rosendin; шкала IBEW Local 26',
    mapRu: 'Работа в жилых домах в тех же вакансиях — $24–$50/hr. Выбирайте работу по типу здания.'
  },
  {
    h: 'Apprentice signups happen once a year. Then they close.',
    d: '2026 · IBEW Local 269 apprenticeship notice',
    map: 'The 2026 class is full. Signups for 2027 run January 1 – March 31. Put it on your calendar now, so you don\'t wait a whole year.',
    hRu: 'Набор в ученичество — раз в год. Потом его закрывают.',
    dRu: '2026 · объявление IBEW Local 269 об ученичестве',
    mapRu: 'Набор 2026 уже закрыт. На 2027 подают с 1 января по 31 марта. Отметьте даты в календаре сейчас — тогда не придётся ждать целый год.'
  },
  {
    h: 'Prefab is moving work from job sites into factories.',
    d: 'Jun 2026 · NECA innovation program; EC&M feature',
    map: 'Big jobs now use electrical rooms and panels built in factories. A season in a factory shop is good experience. Just don\'t stop there.',
    hRu: 'Prefab (заводская сборка) переносит работу со стройки в цех.',
    dRu: 'Июнь 2026 · инновационная программа NECA; статья EC&M',
    mapRu: 'На больших объектах теперь ставят щиты, собранные на заводе. Сезон в цеху — хороший опыт. Только не останавливайтесь на нём.'
  },
  {
    h: 'Investors are buying lots of repair companies: 800+ deals since 2022.',
    d: '2026 · PitchBook counts via industry analyses',
    map: 'Often, the new owners pay by sales instead of by the hour. If your shop gets bought, read the new pay plan first. That\'s what matters, not the new logo.',
    hRu: 'Инвесторы скупают много ремонтных фирм: более 800 сделок с 2022 года.',
    dRu: '2026 · подсчёты PitchBook через отраслевые анализы',
    mapRu: 'Часто новые хозяева платят за продажи, а не за часы. Если вашу фирму купили, сначала спокойно прочитайте новый план оплаты. Важен он, а не новый логотип.'
  },
  {
    h: 'Trade schools stayed pricey despite the worker shortage: $21,325 to about $42,000.',
    d: 'Oct 2026 · school-cost comparisons',
    map: 'An apprenticeship pays about $20.30/hr from year one, and learning is free ($0). If a school talks about a loan first, be careful. It\'s selling you the loan.',
    hRu: 'Цены ремесленных школ не упали, хотя людей не хватает: от $21,325 до примерно $42,000.',
    dRu: 'Октябрь 2026 · сравнения цен школ',
    mapRu: 'Ученичество платит около $20.30/hr с первого года, а учёба бесплатная ($0). Если школа сразу заводит речь о кредите, будьте осторожны. Она продаёт вам кредит.'
  }
];

/* ===== Electrician — Russian (RU) content layer ===== */
PROF_META_RU.electrician = 'Электрик';

Object.assign(DOORS_RU, {
  elcapp: 'Что делать: подайте заявку в зарегистрированное ученичество (вы учитесь на работе и получаете деньги). Набор раз в год, так что не опоздайте. Подходит и профсоюз (объединение рабочих, например IBEW/JATC), и обычная фирма. Получите карту ученика штата до первого часа.',
  elcjour: 'Что делать: ваша лицензия — ценная вещь. Несите её туда, где больше платят. Это заводы, больницы, дата-центры. Записывайте часы по видам работ.',
  elcdata: 'Что делать: сначала лицензия journeyman (электрик, который работает сам). Потом OSHA 30 и NFPA 70E (карты электробезопасности). Потом подавайтесь напрямую в дата-центры и заводские компании.',
  elcown: 'Что делать: сдайте экзамен на master (мастер), когда будет можно. До первого своего заказа получите лицензию подрядчика (contractor license — право вести своё дело) и страховку. Собирайте договоры на обслуживание (клиенты платят за регулярные проверки). Именно за них платят покупатели фирмы.',
  elcsales: 'Что делать вместо этого: хорошая новость — ваша лицензия никуда не делась! Несите её в фирму, где платят за часы. Или на завод, или в своё дело. NO — это про то, как там платят, а не про вас.'
});

GRIDINFO_RU.electrician = {
  head: 'Электрик — это ДА! Лицензия и есть работа. А сколько вы заработаете, зависит от места.',
  short: '«Электрик» — это пять разных зарплат. Попасть в ученики (учиться и получать деньги) непросто, но реально. Больше всех платят в дата-центрах. Одну работу лучше обойти: продажи за комиссию (деньги только когда продали).'
};

DOORSTEP_RU.prof.electrician = {
  student: 'Первый шаг, до старта: подайте заявку в зарегистрированное ученичество. Через профсоюз (JATC) или без него. Набор раз в год. Не тратьте $21K–$42K на диплом: после него тоже начинают помощником. Вы справитесь!',
  early: 'Первый шаг, если вы ученик: получите карту ученика штата. С первого дня записывайте каждый час по видам работ. Незаписанные часы часто не идут в лицензию.',
  mid: 'Первый шаг, если вы journeyman: идите туда, где больше платят. Дата-центры платят $48.50 в час, а по шкале Data Center Alley — $62.00. Добавьте OSHA 30 и NFPA 70E (электробезопасность).',
  senior: 'Первый шаг, если вы master: думайте о бизнесе, а не о часах. Нужны лицензия подрядчика, страховка и договоры на обслуживание (клиенты, которые платят за регулярные проверки). За эти договоры покупатели платят в разы больше.'
};
DOORSTEP_RU.seat.elcapp = {
  student: 'Первый шаг, если вы студент: узнайте сроки набора в вашем штате сегодня. Ученичество (JATC) набирает раз в год. Пропустите — потеряете целый год.',
  early: 'Первый шаг, в начале: не прерывайте часы. Каждая неделя должна быть записана и зарегистрирована. Лицензия в конце — это всё, ради чего вы работаете.',
  mid: 'Первый шаг, если вы уже journeyman: этот этап пройден. Теперь выберите специализацию: заводы, ремонт или проводка систем управления.',
  senior: 'Первый шаг, если вы master: нанимайте и регистрируйте учеников в рамках ratio (сколько учеников ведёт один journeyman). Вы прошли этот узкий вход. Теперь это ваш плюс при найме.'
};
DOORSTEP_RU.seat.elcsales = {
  student: 'Первый шаг, если вы студент: фирма с оплатой за продажи может обещать «бесплатное обучение». Сначала прочитайте пункт про оплату. После обучения может остаться минималка плюс процент с продаж.',
  early: 'Первый шаг, в начале: регистрируйте свои часы в штате. Неважно, как вас называет фирма. Незарегистрированные часы не превратятся в лицензию.',
  mid: 'Первый шаг, при 3–5 годах: растите в лицензии, а не в плане продаж. Ремонтные вакансии на $45–$65 в час берут тех же людей без плана продаж.',
  senior: 'Первый шаг, при 5+ годах: ваши клиенты стоят дороже под вашим именем. Нужны экзамен на master, лицензия подрядчика и своя база клиентов.'
};

Object.assign(BIGGOALS_RU, {
  elcapp: 'Большая цель: лицензия journeyman. Вы получили её на оплачиваемом ученичестве. У вас 8,000 записанных часов и $0 долга за учёбу.',
  elcjour: 'Большая цель: лицензия, которая работает там, где больше платят. Это заводы и дата-центры, а не жилые дома.',
  elcdata: 'Большая цель: работа, которая даёт ток для AI. Оплата по шкале $62.00/hr. Плюс карты безопасности, которые проверяют большие объекты.',
  elcown: 'Большая цель: фирма с вашим именем. У вас лицензия master, лицензия подрядчика и договоры на обслуживание. За них покупатель заплатит.',
  elcsales: 'Большая цель: та же лицензия, но платят за работу руками, а не за продажи. За часы, с гарантией или в своей фирме.'
});
BIGGOAL_PROF_RU.electrician = 'Большая цель: лицензия, которая дорожает, пока электриков не хватает. И работа, которую вы выбрали с умом. У вас получится!';

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
    label: 'Apprentice / helper — the way in',
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
    label: 'Sales tech paid by commission (investor-owned chain)',
    verdict: 'NO',
    conf: 'Medium'
  }
});

Object.assign(DOORS, {
  hvcapp: 'What to do: get the EPA 608 card (Universal if you can). Start as a paid helper. Let a boss pay for your hours. Don\'t pay a school for hope.',
  hvctech: 'What to do: you\'re in a YES job with hourly or guaranteed pay. Keep a log of every system: type, tonnage, fault, fix. Commercial jobs hire based on that log.',
  hvcomm: 'What to do: do service work for a few years first. Then learn one controls platform well. It\'s like a second apprenticeship. That\'s why it pays more.',
  hvcown: 'What to do: get the contractor license your state requires. Build a list of maintenance agreements. Pay your techs in a way that needs no sales targets.',
  hvcsales: 'What to do instead: don\'t worry, nothing is lost! Your EPA card and your notes about systems go with you. Take them to a shop that pays by the hour. In two or three years you can move to controls.'
});

GRIDINFO.hvac = {
  head: 'HVAC is a YES! A federal card gets you in. A special skill gets you paid more.',
  short: '“HVAC technician” can mean five different paychecks. You can get the federal card in a few months. Controls (computer systems that run big buildings) pays the most. One job to skip: sales paid only by commission.'
};

TRACKS.hvac = [
  {
    name: 'Getting in',
    steps: [
      {
        id: 'hvc-g1',
        t: 'Get the EPA 608 card first. Universal if you can. It\'s the federal certificate for working with refrigerant (the cooling gas). The law says you need it for that work. With it, shops can send you to clients as a tech.',
        src: 'HR checklist · Part 2, item 1 — Getting in',
        ru: 'Сначала получите карту EPA 608. Лучше Universal (все типы). Это федеральный сертификат на работу с хладагентом (газ в системе охлаждения). По закону без него с хладагентом работать нельзя. А с ним фирма может отправлять вас к клиентам как техника.',
        sru: 'HR-чек-лист · Часть 2, пункт 1 — Вход'
      },
      {
        id: 'hvc-g2',
        t: 'Start as a paid helper or apprentice. Skip the $21K–$42K diploma. Job posts for beginners pay them. Schools charge them and still turn out helpers.',
        src: 'HR checklist · Part 2, item 2 — Getting in',
        ru: 'Начинайте оплачиваемым помощником или учеником. Не покупайте диплом за $21K–$42K. Вакансии для новичков им платят. А школы берут деньги и выпускают тех же помощников.',
        sru: 'HR-чек-лист · Часть 2, пункт 2 — Вход'
      },
      {
        id: 'hvc-g3',
        t: 'Learn your state\'s rule. Some states license HVAC techs. Some license only the contractor. Find out which paper your state checks. Then decide what to pay for.',
        src: 'HR checklist · Part 2, item 3 — Getting in',
        ru: 'Узнайте правило вашего штата. В одних штатах лицензия нужна технику HVAC. В других — только подрядчику (contractor). Узнайте, какую бумагу реально проверяют. Только потом за неё платите.',
        sru: 'HR-чек-лист · Часть 2, пункт 3 — Вход'
      },
      {
        id: 'hvc-g4',
        t: 'Choose repair work over install-only early on. Diagnosis means finding what\'s really broken. Every top job post pays for it. Swapping whole systems pays the least.',
        src: 'HR checklist · Part 2, item 4 — Getting in',
        ru: 'С самого начала выбирайте ремонт, а не только монтаж. Диагностика — это найти, что на самом деле сломалось. За неё платят все лучшие вакансии. Замена систем целиком (change-out) оплачивается хуже всего.',
        sru: 'HR-чек-лист · Часть 2, пункт 4 — Вход'
      }
    ]
  },
  {
    name: 'Proof',
    steps: [
      {
        id: 'hvc-p1',
        t: 'Write down every system you work on: type, tonnage, fault, fix. Tonnage is how much the system can cool. Jobs asking for 2+ years check this log.',
        src: 'HR checklist · Part 2, item 5 — Proof',
        ru: 'Записывайте каждую систему, с которой работали: тип, тоннаж (tonnage — мощность охлаждения), поломка, ремонт. Этот журнал — ваш опыт. Его проверяют вакансии, где нужно 2+ года.',
        sru: 'HR-чек-лист · Часть 2, пункт 5 — Доказательства'
      },
      {
        id: 'hvc-p2',
        t: 'Move into commercial work by year two or three: rooftop units, chillers, refrigeration. Home-only experience keeps you at the lowest pay in our job posts.',
        src: 'HR checklist · Part 2, item 6 — Proof',
        ru: 'К второму-третьему году переходите на коммерческие объекты. Это блоки на крышах (rooftops), чиллеры (chillers — большие холодильные машины), холодильное оборудование. Если работать только в домах, оплата будет самой низкой.',
        sru: 'HR-чек-лист · Часть 2, пункт 6 — Доказательства'
      },
      {
        id: 'hvc-p3',
        t: 'Take the NATE exam in your specialty once you have the hours. NATE is the trade\'s own tech certificate. Employers mark it \'preferred\'. It\'s the cheapest proven way to a raise.',
        src: 'HR checklist · Part 2, item 7 — Proof',
        ru: 'Когда наберёте часы, сдайте экзамен NATE (сертификат техника от самой отрасли). Работодатели пишут «желательно» (preferred). Это самый дешёвый способ получить прибавку.',
        sru: 'HR-чек-лист · Часть 2, пункт 7 — Доказательства'
      },
      {
        id: 'hvc-p4',
        t: 'Learn one controls platform well: Trane, Johnson Controls, Siemens, Schneider, Distech. Controls are the software that runs heating and cooling in big buildings. Job posts ask for platforms, not tools.',
        src: 'HR checklist · Part 2, item 8 — Proof',
        ru: 'Хорошо освойте одну платформу автоматики (controls): Trane, Johnson Controls, Siemens, Schneider, Distech. Controls — программы, которые управляют отоплением и охлаждением больших зданий. В вакансиях просят платформы, а не инструменты.',
        sru: 'HR-чек-лист · Часть 2, пункт 8 — Доказательства'
      }
    ]
  },
  {
    name: 'Get picked',
    steps: [
      {
        id: 'hvc-k1',
        t: 'Aim at controls and commercial jobs. They pay $60K–$125K, as salary or hourly. In 9 of 9 controls job posts, there\'s no commission.',
        src: 'HR checklist · Part 2, item 9 — Get picked',
        ru: 'Цельтесь в автоматику и коммерческие объекты. Там платят $60K–$125K, зарплатой или почасово. В 9 из 9 вакансий по автоматике нет комиссии.',
        sru: 'HR-чек-лист · Часть 2, пункт 9 — Вас выбирают'
      },
      {
        id: 'hvc-k2',
        t: 'If you stay in homes, take hourly or guaranteed pay. \'Uncapped commission\' means your pay depends on selling new systems to homeowners.',
        src: 'HR checklist · Part 2, item 10 — Get picked',
        ru: 'Если остаётесь работать по домам, берите почасовую или гарантированную оплату. «Комиссия без потолка» (uncapped commission) — значит, ваш доход зависит от продаж новых систем людям.',
        sru: 'HR-чек-лист · Часть 2, пункт 10 — Вас выбирают'
      },
      {
        id: 'hvc-k3',
        t: 'On-call should be paid extra. On-call means taking turns on nights and weekends for emergencies. A quarter of our job posts have it. Agree on its pay and schedule before you sign.',
        src: 'HR checklist · Part 2, item 11 — Get picked',
        ru: 'Дежурства (on-call — ночи и выходные по очереди, для аварий) должны оплачиваться. Они есть в четверти вакансий. Договоритесь об оплате и графике до подписания.',
        sru: 'HR-чек-лист · Часть 2, пункт 11 — Вас выбирают'
      },
      {
        id: 'hvc-k4',
        t: 'Learn data-center skills: precision cooling, big systems, sites that can never shut down. BLS says data centers drive growth. Their cooling contracts never end.',
        src: 'HR checklist · Part 2, item 12 — Get picked',
        ru: 'Освойте навыки для дата-центров: точное охлаждение (precision cooling), большие системы, объекты, которые нельзя остановить (mission-critical). BLS говорит, что рост дают дата-центры. А договор на их охлаждение не заканчивается.',
        sru: 'HR-чек-лист · Часть 2, пункт 12 — Вас выбирают'
      },
      {
        id: 'hvc-k5',
        t: 'If you start your own business, the business is two things. A contractor license and a list of maintenance agreements. When shops sell, buyers pay for repeat agreements.',
        src: 'HR checklist · Part 2, item 13 — Get picked',
        ru: 'Если открываете своё дело, бизнес — это две вещи. Лицензия подрядчика (contractor license) и база договоров на обслуживание. Когда фирму продают, платят именно за постоянные договоры.',
        sru: 'HR-чек-лист · Часть 2, пункт 13 — Вас выбирают'
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
    map: 'BLS expects +11% growth. It says commercial building, “including data centers,” drives it. Precision cooling is the skill this decade will hire for.',
    hRu: 'BLS называет вашего крупнейшего клиента: дата-центр.',
    dRu: '1 ноября 2026 · BLS Occupational Outlook Handbook',
    mapRu: 'BLS ждёт рост +11%. Причина — коммерческое строительство, «включая дата-центры». Точное охлаждение — навык, на который будут нанимать в это десятилетие.'
  },
  {
    h: 'Controls pays the most — and has no commission.',
    d: 'Nov 1, 2026 · 27 live postings',
    map: 'Nine controls job posts pay $60,000–$125,000. None mention commission. After your service years, learn one platform well.',
    hRu: 'Автоматика платит больше всех — и без комиссии.',
    dRu: '1 ноября 2026 · 27 живых вакансий',
    mapRu: 'Девять вакансий по автоматике платят $60,000–$125,000. Ни в одной нет комиссии. После лет в ремонте хорошо освойте одну платформу.'
  },
  {
    h: 'Company buyouts in 2025: 202 HVAC deals. Investors were in about half.',
    d: '2026 · Capstone Partners via industry summary',
    map: 'When a shop is sold, the pay plan often changes first. Read yours, so there are no surprises.',
    hRu: 'Скупка фирм в 2025 году: 202 сделки в HVAC. Примерно в половине — инвесторы.',
    dRu: '2026 · Capstone Partners через отраслевую сводку',
    mapRu: 'Когда фирму продают, первым часто меняется план оплаты. Прочитайте свой, чтобы не было сюрпризов.'
  },
  {
    h: 'Some bosses now brag about little on-call (night and weekend emergency shifts). So those shifts are worth money.',
    d: '2026 · employer postings',
    map: 'One job post brags “Minimal On Call!” A union post sells on-call every 7–8 weeks as a plus. Agree on your nights before signing.',
    hRu: 'Некоторые фирмы хвалятся, что дежурств (вызовов ночью и в выходные) мало. Значит, дежурства стоят денег.',
    dRu: '2026 · вакансии работодателей',
    mapRu: 'Одна вакансия хвалится: «Минимум дежурств!» Профсоюзная пишет как плюс: дежурство раз в 7–8 недель. Договоритесь о ночах до подписания.'
  },
  {
    h: 'The EPA card is still the key: 13 of 27 job posts name it. All require it.',
    d: 'Nov 1, 2026 · postings scan',
    map: 'If you only have Type II, upgrade to Universal. It\'s the cheapest step up in this trade.',
    hRu: 'Карта EPA — всё ещё главный вход: её называют 13 из 27 вакансий. Нужна она везде.',
    dRu: '1 ноября 2026 · скан вакансий',
    mapRu: 'Если у вас только Type II, перейдите на Universal (все типы). Это самый дешёвый шаг вперёд в этом ремесле.'
  },
  {
    h: 'AI check: this job ranks #472 of 785 for how much AI can do it.',
    d: '2026 · Microsoft Research ranking, via trade evidence scan',
    map: 'Smarter systems mean more controls work for people. The thing to watch is how you get paid, not robots.',
    hRu: 'Проверка на AI: эта работа — №472 из 785 по тому, сколько её может делать AI.',
    dRu: '2026 · рейтинг Microsoft Research, через скан доказательств ремесла',
    mapRu: 'Умные системы дают людям больше работы по автоматике. Следить стоит за тем, как вам платят, а не за роботами.'
  }
];

/* ===== HVAC Technician — Russian (RU) content layer ===== */
PROF_META_RU.hvac = 'Техник HVAC (отопление, вентиляция, кондиционирование)';

Object.assign(DOORS_RU, {
  hvcapp: 'Что делать: получите карту EPA 608 (лучше Universal — все типы). Начните оплачиваемым помощником. Пусть за ваши часы платит работодатель. А не вы школе — за надежду.',
  hvctech: 'Что делать: у вас работа с YES, почасовой или гарантированной оплатой. Ведите журнал систем: тип, тоннаж (tonnage — мощность охлаждения), поломка, ремонт. По нему нанимают на коммерческие объекты.',
  hvcomm: 'Что делать: сначала несколько лет ремонта. Потом хорошо освойте одну платформу автоматики (controls). Это как второе ученичество. Поэтому там и платят больше.',
  hvcown: 'Что делать: получите лицензию подрядчика, если её требует штат. Собирайте договоры на обслуживание. Платите техникам так, чтобы не нужен был план продаж.',
  hvcsales: 'Что делать вместо этого: не переживайте, ничего не потеряно! Карта EPA и ваши записи о системах — ваши. Несите их в фирму, где платят за часы. А через два-три года можно перейти в автоматику.'
});

GRIDINFO_RU.hvac = {
  head: 'HVAC — это ДА! Федеральная карта открывает вход. А особый навык приносит больше денег.',
  short: '«Техник HVAC» — это пять разных зарплат. Федеральную карту можно получить за несколько месяцев. Больше всех платят в автоматике (компьютерные системы больших зданий). Одну работу лучше обойти: продажи за комиссию.'
};

DOORSTEP_RU.prof.hvac = {
  student: 'Первый шаг, до старта: получите карту EPA 608. Это федеральный экзамен на работу с хладагентом (газ в системе охлаждения). С подготовкой он стоит несколько сотен долларов. Без него фирма не может отправить вас к клиенту. Диплом за $21K–$42K пока не нужен.',
  early: 'Первый шаг, если вы помощник: с первой недели ведите журнал систем. Тип, тоннаж, поломка, ремонт. Этот журнал — ваш опыт для вакансий, где нужно 2+ года.',
  mid: 'Первый шаг, при 3–5 годах: переходите на коммерческие объекты. Это блоки на крышах (rooftops), чиллеры (chillers — большие холодильные машины), холодильники. Потом освойте одну платформу автоматики (controls). Там платят $60K–$125K без комиссии.',
  senior: 'Первый шаг, при 5+ годах: считайте ценность базы, а не часов. Если у вас своя фирма, её цена — договоры на обслуживание и имя. Именно это покупали в рекордные 2024–2025 годы.'
};
DOORSTEP_RU.seat.hvcapp = {
  student: 'Первый шаг, если вы студент: запишитесь на экзамен EPA 608, прежде чем смотреть школы. Коммерческие фирмы просят Universal (все типы).',
  early: 'Первый шаг, в начале: станьте помощником, которого можно послать к клиенту. Чистая машина, записи по каждому вызову, все системы в журнале. Такого помощника повышают.',
  mid: 'Первый шаг, при 3–5 годах: этот этап пройден. Теперь — коммерческие объекты и одна платформа автоматики.',
  senior: 'Первый шаг, при 5+ годах: нанимайте помощников так же, как наняли вас. Оплачиваемое место и журнал лучше, чем выпускник платной школы.'
};
DOORSTEP_RU.seat.hvcsales = {
  student: 'Первый шаг, если вы студент: «бесплатное обучение» может закончиться оплатой с продаж. Тогда прочитайте пункт про оплату дважды. Обучение настоящее. План продаж — тоже.',
  early: 'Первый шаг, в начале: ведите свой журнал систем, даже если в фирме план продаж. Журнал — ваш. Прайс — их.',
  mid: 'Первый шаг, при 3–5 годах: растите в навыках, а не в продажах. Коммерческие подрядчики нанимают тех, кто умеет находить поломки. Платят $35–$45 в час.',
  senior: 'Первый шаг, при 5+ годах: домовладельцы вам доверяют. Под своим именем это стоит дороже. Нужны лицензия подрядчика, честная почасовая оплата и своя база клиентов.'
};

Object.assign(BIGGOALS_RU, {
  hvcapp: 'Большая цель: федеральная карта и оплачиваемая работа. Уже в первый год вы техник, которого шлют к клиентам. И без кредита на десятки тысяч.',
  hvctech: 'Большая цель: оплата ведущего техника, почасовая. $30–$50 в час за диагностику, которой доверяют. Оплата дежурств прописана в договоре.',
  hvcomm: 'Большая цель: работа в автоматике. Одна освоенная платформа, $60K–$125K зарплаты. И никакого плана продаж.',
  hvcown: 'Большая цель: фирма, ценность которой — её база. Договоры на обслуживание и местное имя. За это покупатель платит в разы больше.',
  hvcsales: 'Большая цель: те же умелые руки, но платят за ремонт, а не за продажи. За часы, на больших объектах или в своей фирме.'
});
BIGGOAL_PROF_RU.hvac = 'Большая цель: ремесло, которое AI не заберёт и не увезёт в другую страну. И работа в зданиях, где живёт AI. Звучит здорово, правда?';