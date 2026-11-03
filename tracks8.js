/* Career Glitch — tracks wave 5 (skilled trades II, Nov 1 2026).
   Same shape as tracks7.js, for plumber. Loaded by app.html after
   tracks7.js. Source: ~/workspace/cg-staging/trades/spec.md. */

/* ================= PLUMBER =================
   Source: ~/workspace/cg-staging/trades/spec.md (postings scan + BLS).
   Cluster: PLUMBER IS A YES. THE LICENSE SETS THE PAY. COMMISSION SETS THE TRAP. (High). Code word: FLOW. */
PROF_META.plumber = {
  name: 'Plumber',
  kick: 'Plumber',
  code: 'FLOW',
  count: '42,000',
  srcWhat: 'openings a year in the US (BLS)',
  srcWhatRu: 'вакансий в год в США (BLS)'
};

Object.assign(SEATINFO, {
  plbapp: {
    prof: 'plumber',
    label: 'Apprentice plumber — paid way in',
    verdict: 'YES',
    conf: 'High'
  },
  plbserv: {
    prof: 'plumber',
    label: 'Licensed service plumber (hourly / guaranteed)',
    verdict: 'YES',
    conf: 'High'
  },
  plbfit: {
    prof: 'plumber',
    label: 'Pipefitter / industrial fitter',
    verdict: 'YES',
    conf: 'High'
  },
  plbown: {
    prof: 'plumber',
    label: 'Master plumber / own business',
    verdict: 'YES',
    conf: 'High'
  },
  plbsales: {
    prof: 'plumber',
    label: 'Service tech paid only by commission',
    verdict: 'NO',
    conf: 'Medium'
  }
});

Object.assign(DOORS, {
  plbapp: 'What to do: apply to registered apprenticeships first (you learn on the job and get paid). A chain may offer free training. If so, check the contract for rules about paying it back. Register your hours with the state from day one, so none get lost.',
  plbserv: 'What to do: every shop in our job posts wants what you have. Take the guaranteed pay. Commission can be a bonus on top. Never let it replace your base pay.',
  plbfit: 'What to do: you get in through the same apprenticeship. Tell your sponsor (the program that trains you) you want factory work. Log plant hours. Keep practicing welding.',
  plbown: 'What to do: take the master exam as soon as you qualify. From month one, collect maintenance agreements (customers who pay for regular check-ups). That list is what you can sell one day.',
  plbsales: 'What to do instead: good news, your hours still count! Register them and finish your license. Then find the same kind of company that pays a sure minimum. This NO won\'t follow you.'
});

GRIDINFO.plumber = {
  head: 'Plumber is a YES! Your shortcut to a license that doubles your pay.',
  short: 'Afraid AI will make your years of training worthless? Not in plumbing. AI can\'t fix a pipe, but it can help you study for the exam. “Plumber” can mean five different paychecks. At the same company, a license doubles your pay. Factory pipe work pays union rates (set by the workers\' group). Skip pay only by commission (money only when you sell).'
};

TRACKS.plumber = [
  {
    name: 'Getting in',
    steps: [
      {
        id: 'plb-g1',
        t: 'Pick your way in on purpose. A registered apprenticeship pays a set wage from year one. Big chains train you free, then pay commission. Both take the same 4–5 years. So pick the one that pays you more.',
        src: 'HR checklist · Part 2, item 1 — Getting in',
        ru: 'Выбирайте вход осознанно. Зарегистрированное ученичество (учёба на работе, с зарплатой) платит по шкале с первого года. Крупные сети учат бесплатно, но потом платят комиссией. Оба пути занимают те же 4–5 лет. Так выберите тот, где платят больше.',
        sru: 'HR-чек-лист · Часть 2, пункт 1 — Вход'
      },
      {
        id: 'plb-g2',
        t: 'Get your state\'s apprentice license or registration first. Then start counting hours. Unregistered hours often don\'t count toward the journeyman license. That would add months to your path.',
        src: 'HR checklist · Part 2, item 2 — Getting in',
        ru: 'Сначала получите лицензию ученика или регистрацию в штате. Только потом считайте часы. Незарегистрированные часы часто не идут в лицензию сантехника. А это лишние месяцы пути.',
        sru: 'HR-чек-лист · Часть 2, пункт 2 — Вход'
      },
      {
        id: 'plb-g3',
        t: 'Before signing a training contract, look for a payback rule. Some \'free\' training makes you pay if you leave too early.',
        src: 'HR checklist · Part 2, item 3 — Getting in',
        ru: 'Перед подписанием найдите в учебном договоре пункт о возврате денег. Иногда за «бесплатное» обучение надо заплатить. Это если уйти раньше срока.',
        sru: 'HR-чек-лист · Часть 2, пункт 3 — Вход'
      },
      {
        id: 'plb-g4',
        t: 'Plan the 4–5 years honestly: 2,000 paid hours a year plus classes. The license at the end is what counts. You can\'t skip it, but you\'re paid the whole way. AI can help with classes: ask it to explain what you missed.',
        src: 'HR checklist · Part 2, item 4 — Getting in',
        ru: 'Честно спланируйте 4–5 лет: 2,000 оплачиваемых часов в год плюс занятия. Главное — лицензия в конце. Пропустить её нельзя, но платят всё это время. С занятиями поможет AI: попросите объяснить непонятное.',
        sru: 'HR-чек-лист · Часть 2, пункт 4 — Вход'
      }
    ]
  },
  {
    name: 'Proof',
    steps: [
      {
        id: 'plb-p1',
        t: 'Log hours by type of work: service, new construction, commercial, industrial. This mix decides which journeyman jobs you can get later.',
        src: 'HR checklist · Part 2, item 5 — Proof',
        ru: 'Записывайте часы по видам работ: ремонт, новостройки, офисы и магазины, заводы. От этого зависит, на какие работы с лицензией вас потом возьмут.',
        sru: 'HR-чек-лист · Часть 2, пункт 5 — Доказательства'
      },
      {
        id: 'plb-p2',
        t: 'Pass the journeyman exam as soon as your hours are done. Every top job post asks for this license. That includes the $110,000–$130,000 service job. Ask ChatGPT or Claude to quiz you on the code.',
        src: 'HR checklist · Part 2, item 6 — Proof',
        ru: 'Сдайте экзамен на лицензию сантехника (journeyman) сразу, как наберёте часы. Её просят все лучшие вакансии. Включая работу в ремонте за $110,000–$130,000. Попросите ChatGPT или Claude погонять вас по нормам.',
        sru: 'HR-чек-лист · Часть 2, пункт 6 — Доказательства'
      },
      {
        id: 'plb-p3',
        t: 'Add one certificate that pays: backflow prevention. Backflow devices keep dirty water out of clean pipes. Cities require them to be tested. Few people are certified to test them.',
        src: 'HR checklist · Part 2, item 7 — Proof',
        ru: 'Добавьте один сертификат, за который платят: проверка обратных клапанов. Эти клапаны не пускают грязную воду в чистые трубы. Города требуют их проверять. А проверяющих с сертификатом мало.',
        sru: 'HR-чек-лист · Часть 2, пункт 7 — Доказательства'
      },
      {
        id: 'plb-p4',
        t: 'Learn the camera and press tools. Sewer cameras find the problem without digging. Press tools join pipe without fire. Both are standard now. They help one licensed tech earn more per day.',
        src: 'HR checklist · Part 2, item 8 — Proof',
        ru: 'Освойте камеру и пресс-инструменты. Камера находит поломку в трубе без раскопок. Пресс соединяет трубы без огня. Сейчас это стандартный набор. С ними техник с лицензией зарабатывает больше за день.',
        sru: 'HR-чек-лист · Часть 2, пункт 8 — Доказательства'
      }
    ]
  },
  {
    name: 'Get picked',
    steps: [
      {
        id: 'plb-k1',
        t: 'Take service work with a guaranteed hourly minimum. Commission on top is a bonus. Commission instead of a minimum is the NO job.',
        src: 'HR checklist · Part 2, item 9 — Get picked',
        ru: 'Берите работу в ремонте с гарантированным минимумом в час. Комиссия сверху — это бонус. Комиссия вместо минимума — это работа с ответом НЕТ.',
        sru: 'HR-чек-лист · Часть 2, пункт 9 — Вас выбирают'
      },
      {
        id: 'plb-k2',
        t: 'Find out on-call pay before you sign. BLS says plumbers are often on call. One shop in our job posts sells \'No On-Call\' as its main perk.',
        src: 'HR checklist · Part 2, item 10 — Get picked',
        ru: 'До подписания узнайте, как платят за дежурства (аварийные вызовы ночью и в выходные). Госстатистика США (BLS) пишет: сантехники часто дежурят. Одна фирма даже рекламирует «Без дежурств» как главный плюс.',
        sru: 'HR-чек-лист · Часть 2, пункт 10 — Вас выбирают'
      },
      {
        id: 'plb-k3',
        t: 'Think about factory pipe work: pipefitting. Same BLS job, same union (workers\' group). You work on plant pipes, steam and machine systems. Pay is $40.64 to about $54 an hour. All are union jobs and need a union card.',
        src: 'HR checklist · Part 2, item 11 — Get picked',
        ru: 'Подумайте о заводской ветке: монтаж труб на заводах. Та же профессия по BLS и тот же профсоюз. Это трубы на заводах, пар и технологические системы. Платят от $40.64 до примерно $54 в час. Везде профсоюз и нужна его карта.',
        sru: 'HR-чек-лист · Часть 2, пункт 11 — Вас выбирают'
      },
      {
        id: 'plb-k4',
        t: 'Pass the master exam when you can. The master license lets you lead others and get permits. Some states also require it for a contractor license for your own shop.',
        src: 'HR checklist · Part 2, item 12 — Get picked',
        ru: 'Сдайте экзамен на мастера, когда будет можно. С этой лицензией можно руководить людьми и брать разрешения на работы. В некоторых штатах без неё не дадут лицензию подрядчика для своей фирмы.',
        sru: 'HR-чек-лист · Часть 2, пункт 12 — Вас выбирают'
      },
      {
        id: 'plb-k5',
        t: 'If you open a shop, you can sell two things. Your list of maintenance agreements and your license. Buyers pay many times more for that.',
        src: 'HR checklist · Part 2, item 13 — Get picked',
        ru: 'Если открываете фирму, продать можно две вещи. Базу договоров на обслуживание и лицензию. За это покупатели платят в разы больше.',
        sru: 'HR-чек-лист · Часть 2, пункт 13 — Вас выбирают'
      },
      {
        id: 'plb-k6',
        t: 'Check your state\'s license and reciprocity rules every year. Reciprocity means another state accepts your license. Several states changed trade licenses in 2026. A license that works in more states is worth more each year.',
        src: 'HR checklist · Part 2, item 14 — Get picked',
        ru: 'Каждый год проверяйте правила лицензий в своём штате. И какие штаты признают вашу лицензию. В 2026 году несколько штатов поменяли правила. Лицензия, которая работает в разных штатах, дорожает каждый год.',
        sru: 'HR-чек-лист · Часть 2, пункт 14 — Вас выбирают'
      }
    ]
  }
];

Object.assign(RESUME_TERMS, {
  'plb-g2': ['apprentice license', 'registered apprentice', 'apprentice plumber'],
  'plb-p2': ['journeyman license', 'journeyman plumber', 'plumbing license'],
  'plb-p3': ['backflow', 'backflow prevention', 'backflow tester', 'cross connection'],
  'plb-p4': ['sewer camera', 'camera inspection', 'press tool', 'propress', 'trenchless', 'jetter'],
  'plb-k3': ['pipefitter', 'steamfitter', 'pipe fitting', 'welding', 'ua local'],
  'plb-k4': ['master plumber', 'master license', 'contractor license']
});

RADAR.plumber = [
  {
    h: 'One company shows what a license is worth: $55K–$75K for apprentices, $110K–$130K licensed.',
    d: 'Nov 1, 2026 · Roto-Rooter postings',
    map: 'However you started, the license is the prize. Each year you wait costs about that difference. So keep going — it\'s worth it!',
    hRu: 'Одна компания показывает, сколько стоит лицензия: $55K–$75K ученику, $110K–$130K с лицензией.',
    dRu: '1 ноября 2026 · вакансии Roto-Rooter',
    mapRu: 'Как бы вы ни начали, главный приз — лицензия. Каждый год ожидания стоит примерно эту разницу. Так что вперёд — оно того стоит!'
  },
  {
    h: '“100% commission” is now openly listed as a pay plan.',
    d: '2026 · service plumbing postings',
    map: 'A guaranteed minimum makes it a trade job, not a sales job. One job post offers the choice in writing: $35–$40/hr guaranteed, or 25% commission.',
    hRu: '«100% комиссия» — теперь это открыто пишут в вакансиях.',
    dRu: '2026 · вакансии сервисной сантехники',
    mapRu: 'Гарантированный минимум отличает работу мастера от работы продавца. Одна вакансия даёт выбор письменно: $35–$40 в час гарантированно или 25% комиссии.'
  },
  {
    h: 'The union scale is public: $60.50 an hour in Chicago.',
    d: 'Jun 2025 · UA Local 130 wage sheet',
    map: 'Factory job posts pay $40.64–$54/hr. All union, all need a license. Check factory work before you just take home repair work.',
    hRu: 'Шкала профсоюза открыта: $60.50 в час в Чикаго.',
    dRu: 'Июнь 2025 · шкала UA Local 130',
    mapRu: 'Заводские вакансии платят $40.64–$54 в час. Везде профсоюз и нужна лицензия. Посмотрите на заводы, прежде чем идти в ремонт по домам.'
  },
  {
    h: 'One shop now recruits with “No On-Call.”',
    d: '2026 · employer posting; BLS work-schedule text',
    map: 'BLS says plumbers often work on-call (nights and weekends for emergencies). If \'no on-call\' is a perk, on-call is worth money. Make sure you get paid for it.',
    hRu: 'Одна фирма теперь зазывает людей так: «Без дежурств».',
    dRu: '2026 · вакансия работодателя; текст BLS о графике',
    mapRu: 'Госстатистика США пишет: сантехники часто дежурят (выезжают ночью и в выходные). Если «без дежурств» — это плюс, значит, дежурства стоят денег. Проверьте, что вам за них платят.'
  },
  {
    h: 'The trade itself says: not enough people are being trained.',
    d: 'Oct 2026 · The Trade Traction Podcast transcript',
    map: '“They don’t grow on trees,” says a working contractor. That\'s why shops must train people. Start where you get paid a wage. Once licensed, the shortage works for you.',
    hRu: 'Само ремесло признаёт: людей учат слишком мало.',
    dRu: 'Октябрь 2026 · расшифровка The Trade Traction Podcast',
    mapRu: '«Они не растут на деревьях», — говорит действующий подрядчик. Поэтому фирмы должны учить сами. Начинайте там, где платят зарплату. С лицензией нехватка людей будет работать на вас.'
  },
  {
    h: 'Building new houses pays the least: $18–$29/hr posted.',
    d: '2026 · employer postings',
    map: 'It\'s the lowest pay in our job posts. And when fewer houses get built, it\'s hit first. It\'s fine to collect hours there. Then take your license to repair, business or factory work.',
    hRu: 'Стройка новых домов платит меньше всего: $18–$29 в час.',
    dRu: '2026 · вакансии работодателей',
    mapRu: 'Это самая низкая оплата в вакансиях. И когда домов строят меньше, страдает первой. Там можно спокойно набрать часы. А с лицензией идите в ремонт, на большие объекты или на завод.'
  }
];

/* ===== Plumber — Russian (RU) content layer ===== */
PROF_META_RU.plumber = 'Сантехник';

Object.assign(DOORS_RU, {
  plbapp: 'Что делать: сначала подавайтесь в зарегистрированное ученичество (учитесь на работе и получаете деньги). Сеть может предложить бесплатное обучение. Тогда проверьте в договоре пункт о возврате денег. И с первого дня регистрируйте часы в штате, чтобы ни один не пропал.',
  plbserv: 'Что делать: все фирмы в вакансиях хотят то, что у вас есть. Берите гарантированную оплату. Комиссия — только бонус сверху, а не замена минимума.',
  plbfit: 'Что делать: вход — через то же ученичество. Скажите тем, кто вас учит, что хотите на завод. Записывайте заводские часы. Не бросайте практику сварки.',
  plbown: 'Что делать: сдайте экзамен на мастера, как только будет можно. С первого месяца собирайте договоры на обслуживание (клиенты платят за регулярные проверки). Когда-нибудь именно их можно будет продать.',
  plbsales: 'Что делать вместо этого: хорошая новость — ваши часы не пропали! Зарегистрируйте их и получите лицензию. Потом найдите такую же фирму, где есть гарантированный минимум. Это «НЕТ» за вами не потянется.'
});

GRIDINFO_RU.plumber = {
  head: 'Сантехник — это ДА! Ваш короткий путь к лицензии, которая удваивает оплату.',
  short: 'Боитесь, что AI обесценит ваши годы учёбы? Не в сантехнике. Трубу AI не починит, а к экзамену готовиться поможет. «Сантехник» — это пять разных зарплат. В той же фирме лицензия удваивает оплату. На заводах платят по шкале профсоюза (объединения рабочих). Обойдите работу только за комиссию (деньги только когда продали).'
};

DOORSTEP_RU.prof.plumber = {
  student: 'Первый шаг, до старта: сначала подавайтесь в зарегистрированное ученичество. Через профсоюз платят $24.54 в час в первый год, учёба $0 (UA Local 486). Если это сеть, проверьте пункт о возврате денег до подписания. У вас получится!',
  early: 'Первый шаг, если вы ученик: с первого дня регистрируйте часы в штате. Записывайте их по видам работ. Незарегистрированные годы не дадут лицензию.',
  mid: 'Первый шаг, если у вас лицензия сантехника: берите работу в ремонте с гарантированным минимумом. Сантехникам с лицензией платят $110,000–$130,000. Одна вакансия открыто даёт выбор: почасово или комиссия.',
  senior: 'Первый шаг, если у вас лицензия мастера: стройте то, что можно продать. Это лицензия подрядчика, если штат требует для неё статус мастера. И база договоров на обслуживание. Её и оценивают покупатели фирм.'
};
DOORSTEP_RU.seat.plbapp = {
  student: 'Первый шаг, если вы студент: выпишите все зарегистрированные программы рядом с вами. И когда у каждой следующий набор. Места с зарплатой заполняются по графику, а не по удаче.',
  early: 'Первый шаг, в начале: каждый месяц проверяйте, что ваши часы уходят в штат. Доверяйте, но проверяйте. Это ваша лицензия.',
  mid: 'Первый шаг, если лицензия сантехника уже есть: этот этап пройден. Теперь проверяйте гарантию оплаты в каждом предложении.',
  senior: 'Первый шаг, если у вас лицензия мастера: учите учеников, как советуют опытные наставники ремесла. Кто-то же научил вас. Нехватка людей держит вашу цену, только пока приходят новые.'
};
DOORSTEP_RU.seat.plbsales = {
  student: 'Первый шаг, если вы студент: если обучение бесплатное, узнайте, кто за него платит. В сетях платите вы — комиссией, после учёбы.',
  early: 'Первый шаг, в начале: регистрируйте часы, даже если фирма платит комиссией. Только часы для лицензии окупятся вам потом.',
  mid: 'Первый шаг, при 3–5 годах: несите лицензию туда, где есть гарантия. Такие вакансии есть: $35–$40 в час гарантированно, комиссия по желанию.',
  senior: 'Первый шаг, при 5+ годах: умение находить поломки уйдёт с вами. А клиенты по продажам — нет. Ставьте на то, что уйдёт с вами: почасовая фирма, завод или своё дело.'
};

Object.assign(BIGGOALS_RU, {
  plbapp: 'Большая цель: лицензия сантехника после ученичества с зарплатой. 4–5 лет вас учат и при этом платят.',
  plbserv: 'Большая цель: работа с лицензией и гарантированным минимумом. По вакансиям — $110K–$130K. Комиссия — только бонус сверху.',
  plbfit: 'Большая цель: заводская работа по профсоюзной шкале. В вакансиях — $40.64–$54 в час, по шкале Чикаго — $60.50 в час.',
  plbown: 'Большая цель: фирма на вашей лицензии мастера. С базой договоров на обслуживание. За неё покупатель платит в разы больше.',
  plbsales: 'Большая цель: те же руки, но с гарантированным минимумом. Почасово в фирме, на заводе по шкале или в своём деле.'
});
BIGGOAL_PROF_RU.plumber = 'Большая цель: стать сантехником из топ 1%. Трубу AI за вас не починит — ваши годы учёбы не пропадут. Лицензию хотят все работодатели. Вы получаете её один раз, а дорожает она каждый год. У вас получится!';
/* ================= CYBERSECURITY =================
   Source: ~/workspace/cg-staging/cybersecurity/spec.md (35 live postings
   + BLS + CyberSeek). Cluster: CYBERSECURITY IS A YES. THE BEGINNER
   DOOR IS THE TRAP. (Medium). Code word: SHIELD. */
PROF_META.cybersecurity = {
  name: 'Cybersecurity',
  kick: 'Cybersecurity',
  code: 'SHIELD',
  count: '35',
  srcWhat: 'real cybersecurity job posts',
  srcWhatRu: 'настоящих вакансий в кибербезопасности'
};

Object.assign(SEATINFO, {
  socanalyst: {
    prof: 'cybersecurity',
    label: 'SOC analyst',
    verdict: 'YES',
    conf: 'Medium'
  },
  secengineer: {
    prof: 'cybersecurity',
    label: 'Security engineer / detection',
    verdict: 'YES',
    conf: 'High'
  },
  cloudsec: {
    prof: 'cybersecurity',
    label: 'Cloud security engineer',
    verdict: 'YES',
    conf: 'High'
  },
  pentester: {
    prof: 'cybersecurity',
    label: 'Penetration tester',
    verdict: 'YES',
    conf: 'Medium'
  },
  grcanalyst: {
    prof: 'cybersecurity',
    label: 'GRC analyst',
    verdict: 'NO',
    conf: 'Medium'
  }
});

Object.assign(DOORS, {
  socanalyst: 'What to do: a fine place to start if you need a job now. But AI already does the easiest part of it. So from week one, plan your step up to Tier 2 (investigating attacks).',
  secengineer: 'What to do: not a first job. SOC analysts (people who watch for attacks) and IT workers move up to it. Aim your practice at it early — it shortens your path.',
  cloudsec: 'What to do: you move here from IT or SOC work. Not a first step from zero.',
  pentester: 'What to do: a great dream job! It\'s just not a first step. Start with IT and SOC work, then climb here.',
  grcanalyst: 'What to do instead: a good choice for later, around year four. For a beginner, pick another first step.'
});

GRIDINFO.cybersecurity = {
  head: 'Your shortcut into cybersecurity — to the part AI can\'t do.',
  short: 'AI already does the easiest beginner work in cybersecurity. Worried your study will be wasted? Here is what stays with people and pays well. “Cybersecurity” means five different jobs. SOC (the team that watches for attacks) hires beginners — plan to move up fast. Engineering and cloud pay the most. GRC (rules and checks) is not a first step.'
};

TRACKS.cybersecurity = [
  {
    name: 'Getting in',
    steps: [
      {
        id: 'cyb-g1',
        t: 'Pick one specialty before you buy any course',
        src: 'HR checklist · Part 1, item 1 — Getting in',
        ru: 'Выберите одну специальность до покупки любого курса',
        sru: 'Чек-лист HR · Часть 1, пункт 1 — Вход'
      },
      {
        id: 'cyb-g2',
        t: 'Get real IT time first — help desk counts',
        src: 'HR checklist · Part 1, item 2 — Getting in',
        ru: 'Сначала наберите реальный опыт в IT — служба поддержки засчитывается',
        sru: 'Чек-лист HR · Часть 1, пункт 2 — Вход'
      },
      {
        id: 'cyb-g3',
        t: 'Earn Security+ — beginner job posts ask for it by name',
        src: 'HR checklist · Part 1, item 3 — Getting in',
        ru: 'Получите Security+ — его прямо называют в вакансиях для новичков',
        sru: 'Чек-лист HR · Часть 1, пункт 3 — Вход'
      },
      {
        id: 'cyb-g4',
        t: 'Learn how networks actually move data',
        src: 'HR checklist · Part 1, item 4 — Getting in',
        ru: 'Разберитесь, как сети на самом деле передают данные',
        sru: 'Чек-лист HR · Часть 1, пункт 4 — Вход'
      },
      {
        id: 'cyb-g5',
        t: 'Get hands-on with one alert system: Splunk or Microsoft Sentinel',
        src: 'HR checklist · Part 1, item 5 — Getting in',
        ru: 'Освойте на практике одну систему оповещений: Splunk или Microsoft Sentinel',
        sru: 'Чек-лист HR · Часть 1, пункт 5 — Вход'
      }
    ]
  },
  {
    name: 'Proof',
    steps: [
      {
        id: 'cyb-p1',
        t: 'Keep a practice log at home: sort 20 alerts, write what each was',
        src: 'HR checklist · Part 2, item 1 — Proof',
        ru: 'Ведите дома журнал практики: разберите 20 оповещений и запишите, что было каждое',
        sru: 'Чек-лист HR · Часть 2, пункт 1 — Доказательства'
      },
      {
        id: 'cyb-p2',
        t: 'Write a small Python script that reads a log file, with AI\'s help',
        src: 'HR checklist · Part 2, item 2 — Proof',
        ru: 'Напишите с помощью AI маленький скрипт на Python для чтения логов',
        sru: 'Чек-лист HR · Часть 2, пункт 2 — Доказательства'
      },
      {
        id: 'cyb-p3',
        t: 'Write three incident reports in plain English',
        src: 'HR checklist · Part 2, item 3 — Proof',
        ru: 'Напишите три отчёта об атаках простыми словами на английском',
        sru: 'Чек-лист HR · Часть 2, пункт 3 — Доказательства'
      },
      {
        id: 'cyb-p4',
        t: 'Map 5 known attacks with the MITRE ATT&CK list',
        src: 'HR checklist · Part 2, item 4 — Proof',
        ru: 'Разберите 5 известных атак по списку MITRE ATT&CK — каталогу приёмов хакеров',
        sru: 'Чек-лист HR · Часть 2, пункт 4 — Доказательства'
      },
      {
        id: 'cyb-p5',
        t: 'Add the one second certificate that matches your specialty',
        src: 'HR checklist · Part 2, item 5 — Proof',
        ru: 'Добавьте один второй сертификат — тот, что подходит вашей специальности',
        sru: 'Чек-лист HR · Часть 2, пункт 5 — Доказательства'
      }
    ]
  },
  {
    name: 'Get picked',
    steps: [
      {
        id: 'cyb-k1',
        t: 'Build your resume from the words in real job posts',
        src: 'HR checklist · Part 3, item 1 — Get picked',
        ru: 'Соберите резюме из слов, которые есть в настоящих вакансиях',
        sru: 'Чек-лист HR · Часть 3, пункт 1 — Выбор'
      },
      {
        id: 'cyb-k2',
        t: 'Apply to in-between jobs and analyst jobs at the same time',
        src: 'HR checklist · Part 3, item 2 — Get picked',
        ru: 'Откликайтесь сразу и на промежуточные работы, и на работу аналитика',
        sru: 'Чек-лист HR · Часть 3, пункт 2 — Выбор'
      },
      {
        id: 'cyb-k3',
        t: 'If you can work on government contracts, say so plainly',
        src: 'HR checklist · Part 3, item 3 — Get picked',
        ru: 'Если вы можете работать по госконтрактам, напишите об этом прямо',
        sru: 'Чек-лист HR · Часть 3, пункт 3 — Выбор'
      },
      {
        id: 'cyb-k4',
        t: 'At 90 days with no interviews, change the target — not the certificate count',
        src: 'HR checklist · Part 3, item 4 — Get picked',
        ru: 'Если за 90 дней нет собеседований, меняйте цель, а не число сертификатов',
        sru: 'Чек-лист HR · Часть 3, пункт 4 — Выбор'
      }
    ]
  }
];

Object.assign(RESUME_TERMS, {
  'cyb-g3': ['comptia security+'],
  'cyb-g4': ['tcp/ip', 'dns', 'linux', 'windows'],
  'cyb-g5': ['splunk', 'microsoft sentinel', 'siem'],
  'cyb-p1': ['alert triage', 'incident response'],
  'cyb-p2': ['python'],
  'cyb-p3': ['incident reporting'],
  'cyb-p4': ['mitre att&ck'],
  'cyb-p5': ['comptia cysa+', 'sc-200', 'pentest+', 'az-500'],
  'cyb-k3': ['public trust', 'security clearance']
});

RADAR.cybersecurity = [
  {
    h: 'Microsoft ships AI agents that sort alerts',
    d: '18 November 2025 — Microsoft began adding Security Copilot agents to Microsoft 365 E5 accounts. The agents sort phishing emails, alerts and access checks. Sorting alerts is exactly a Tier-1 SOC analyst\'s job.',
    map: 'Software now does the easiest SOC work. Get in if you can, and keep learning to move up. Investigating attacks is the step above.',
    hRu: 'Microsoft выпускает AI-агентов, которые разбирают оповещения',
    dRu: '18 ноября 2025 года Microsoft начала добавлять агентов Security Copilot в аккаунты Microsoft 365 E5. Агенты разбирают фишинг (поддельные письма), оповещения и проверки доступа. Разбор оповещений — это ровно работа аналитика SOC первого уровня. SOC — центр, который следит за атаками.',
    mapRu: 'Самую простую работу в SOC теперь делает программа. Входите, если можете, и учитесь дальше, чтобы расти. Расследование атак — ступень выше.'
  },
  {
    h: 'The first reported AI-run spying campaign',
    d: '13 November 2025 — Anthropic reported an AI model doing an estimated 80–90% of the hands-on work. It hit about 30 targets. Only one source, not confirmed by others. The model also made up passwords during the attack.',
    map: 'Attacks grow faster than human hackers alone could grow them. So the work of finding and hunting attacks grows too.',
    hRu: 'Первая известная шпионская атака, которой управлял AI',
    dRu: '13 ноября 2025 года Anthropic сообщила: AI-модель сделала примерно 80–90% практической работы. Целей было примерно 30. Источник один, другие не подтвердили. А ещё модель выдумывала пароли во время атаки.',
    mapRu: 'Атак становится больше, чем смогли бы сделать одни люди. Значит, растёт и работа по поиску атак.'
  },
  {
    h: 'A security giant cuts jobs and credits AI',
    d: 'May 2025 — CrowdStrike cut about 500 jobs (5%). The CEO’s letter to the SEC (US market regulator) credits AI. It says AI “flattens our hiring curve”. It doesn\'t say the cuts were analysts.',
    map: 'Even security companies hire fewer people as they grow. The field grows +21%, but getting in still takes effort. You can do it.',
    hRu: 'Гигант безопасности сокращает людей и объясняет это AI',
    dRu: 'Май 2025 года — CrowdStrike сократила около 500 мест (5%). Директор написал в SEC (регулятор рынка США), что причина — AI. По его словам, AI «сглаживает кривую найма». Не сказано, что сократили именно аналитиков.',
    mapRu: 'Даже компании по безопасности растут, а нанимают меньше. Сфера вырастет на +21%, но вход всё равно потребует усилий. У вас получится.'
  },
  {
    h: 'ISC2 stops publishing its “workforce gap” number',
    d: 'December 2025 — ISC2’s Workforce Study (16,029 people) gave no gap number, for the first time. The old 4.8M counted felt need, not real openings. Real top gaps: AI skills (41%) and cloud security (36%). Now budget blocks hiring more than lack of people does.',
    map: 'You don\'t need to repeat “millions of unfilled jobs”. The source dropped that number. The real gaps have names. And both are YES on this map!',
    hRu: 'ISC2 больше не публикует число «нехватки кадров»',
    dRu: 'Декабрь 2025 года — исследование ISC2 (16 029 человек) впервые вышло без числа нехватки. Старые 4,8 млн — это ощущения, а не вакансии. Главная настоящая нехватка: навыки работы с AI (41%) и облачная безопасность (36%). Теперь найму больше мешают деньги, а не нехватка людей.',
    mapRu: 'Не нужно повторять про «миллионы пустых мест». Источник сам убрал это число. У настоящей нехватки есть названия. И обе — ДА на этой карте!'
  },
  {
    h: 'Employers ask beginners for senior certificates',
    d: 'June 2025 — ISC2’s hiring study (929 managers): 38% of employers reportedly require CISA for beginner jobs. 34% require CISSP. Both certificates need years of experience by their own rules. Same study: 90% of managers would consider IT experience alone.',
    map: 'Job posts ask for too much, but real hiring is kinder. IT experience is what gets you in.',
    hRu: 'Работодатели просят у новичков старшие сертификаты',
    dRu: 'Июнь 2025 года — исследование найма ISC2 (929 менеджеров). Говорят, 38% работодателей требуют CISA от новичков, 34% — CISSP. Но по своим правилам оба сертификата требуют годы опыта. Там же: 90% менеджеров рассмотрят и одного опыта в IT.',
    mapRu: 'В вакансиях просят слишком много, но на деле нанимают мягче. Опыт в IT — вот что открывает вход.'
  },
  {
    h: 'Fewer job posts accept beginners again',
    d: '1 October 2026 — AKA Security’s job post study: posts open to 0–2 years fell from 18.3% to 13.6%. Beginner posts asking for Python rose from 22.7% to 46.6%. Beginner posts expecting AI tools rose from 0.7% to 20.4%.',
    map: 'The way in changes every year: toward experience, Python and AI tools. This track follows that order, with no extra steps.',
    hRu: 'Доля вакансий для новичков снова уменьшается',
    dRu: '1 октября 2026 года — исследование вакансий AKA Security. Вакансий для 0–2 лет опыта стало меньше: было 18,3%, стало 13,6%. Python в вакансиях для новичков: было 22,7%, стало 46,6%. Работа с AI в вакансиях для новичков: было 0,7%, стало 20,4%.',
    mapRu: 'Вход меняется каждый год: нужно больше опыта, Python и AI-инструменты. Этот путь построен в таком же порядке — без лишних шагов.'
  }
];

/* ===== Cybersecurity — Russian (RU) content layer ===== */
PROF_META_RU.cybersecurity = 'Кибербезопасность';

Object.assign(DOORS_RU, {
  socanalyst: 'Что делать: хорошее место для старта, если работа нужна сейчас. Но простую часть этой работы уже делает AI. С первой недели планируйте шаг на второй уровень — расследование атак.',
  secengineer: 'Что делать: это не первая работа. Сюда переходят аналитики SOC (центр наблюдения за атаками) и люди из IT. Готовьтесь к ней заранее — так путь короче.',
  cloudsec: 'Что делать: сюда переходят из IT или SOC. Это не первый шаг с нуля.',
  pentester: 'Что делать: отличная работа мечты! Просто не для первого шага. Начните с IT и SOC, а потом поднимайтесь сюда.',
  grcanalyst: 'Что делать вместо этого: хороший выбор на потом, примерно на четвёртый год. Новичку лучше выбрать другой первый шаг.'
});

GRIDINFO_RU.cybersecurity = {
  head: 'Ваш короткий путь в кибербезопасность — туда, где AI не заменит.',
  short: 'AI уже делает самую простую работу новичков в кибербезопасности. Боитесь, что учёба пропадёт зря? Вот что остаётся за людьми и хорошо оплачивается. «Кибербезопасность» — это пять разных работ. В SOC (центр, который следит за атаками) берут новичков — планируйте быстро расти. Больше всех платят инженерам и защите облака. Пентест (взлом по заказу) — это вторая работа. GRC (правила и проверки) — не для первого шага.'
};

DOORSTEP_RU.prof.cybersecurity = {
  student: 'Первый шаг, если вы студент: сначала выберите специальность. Пять работ — пять разных путей. Так вы не купите лишних курсов.',
  early: 'Первый шаг, в начале: наберите настоящий опыт в IT. Служба поддержки тоже считается. 90% менеджеров говорят: опыта в IT хватит, чтобы вас рассмотреть.',
  mid: 'Первый шаг, на среднем уровне: поднимитесь на ступень выше. От сортировки оповещений — к их расследованию. В этом шаге вся карьера.',
  senior: 'Первый шаг, на старшем уровне: продавайте своё экспертное мнение, а не сертификаты. Поиск атак, защита облака или аудит. Эту работу AI не может подписать.'
};
DOORSTEP_RU.seat.socanalyst = {
  student: 'Первый шаг, если вы студент: откройте NICE Framework (официальный каталог киберпрофессий). Прочитайте, что весь день делает аналитик киберзащиты (Cyber Defense Analyst).',
  early: 'Первый шаг, в начале: устройтесь на любую работу в IT хотя бы на месяц. Служба поддержки тоже подходит. В тот же месяц начните готовиться к Security+.',
  mid: 'Первый шаг, на среднем уровне: хватит только сортировать. Берите расследования. Возьмите следующее оповещение команды и опишите его историю целиком.',
  senior: 'Первый шаг, на старшем уровне: переходите к поиску угроз или правилам обнаружения. Это работа на ступень выше той, что забрали AI-агенты.'
};
DOORSTEP_RU.seat.secengineer = {
  student: 'Первый шаг, если вы студент: учите Python раньше любых сертификатов. Один маленький скрипт в неделю. AI объяснит каждую строку.',
  early: 'Первый шаг, в начале: на работе в SOC или IT автоматизируйте одну скучную задачу. Сохраните скрипт как доказательство.',
  mid: 'Первый шаг, на среднем уровне: напишите своё первое правило обнаружения для настоящей системы оповещений. Проверьте его на старых оповещениях.',
  senior: 'Первый шаг, на старшем уровне: возьмите одну зону обнаружения целиком. Правила, настройка и цифры, которые доказывают, что это работает.'
};
DOORSTEP_RU.seat.cloudsec = {
  student: 'Первый шаг, если вы студент: выберите одно облако — AWS или Azure. Разберитесь, как в нём устроены аккаунты и доступы.',
  early: 'Первый шаг, в начале: на работе в IT или SOC берите каждую облачную задачу команды. Здесь ценится опыт с облаком.',
  mid: 'Первый шаг, на среднем уровне: сдайте AZ-500 или AWS Certified Security – Specialty. Эти названия чаще всего есть в вакансиях.',
  senior: 'Первый шаг, на старшем уровне: защищайте всё облако компании, а не один аккаунт. Это автоматические правила защиты, оповещения и доказательства для аудиторов.'
};
DOORSTEP_RU.seat.pentester = {
  student: 'Первый шаг, если вы студент: сначала основы: сети, Linux, Windows. Вакансии проверяют все три.',
  early: 'Первый шаг, в начале: два года в IT или SOC — вот сильная заявка. Домашние лаборатории — это практика, а не замена опыту.',
  mid: 'Первый шаг, на среднем уровне: начните готовиться к OSCP. 3 из 6 вакансий в нашем разборе требуют этот сертификат.',
  senior: 'Первый шаг, на старшем уровне: выберите узкую специализацию: веб-приложения или атаки с разрешения (red team). В нашем разборе узким специалистам платят больше всех.'
};
DOORSTEP_RU.seat.grcanalyst = {
  student: 'Первый шаг, если вы студент: не начинайте здесь. Каждая вакансия в нашем разборе требует сначала 3+ года в безопасности.',
  early: 'Первый шаг, в начале: сначала наберите годы в безопасности, в SOC или IT. В GRC (правила и проверки) берут тех, кто уже работает в этой сфере.',
  mid: 'Первый шаг, на среднем уровне: с 3+ годами в безопасности глубоко изучите один набор правил: NIST 800-53 или ISO 27001.',
  senior: 'Первый шаг, на старшем уровне: ведите аудиты и отвечайте за доказательства. Опытному специалисту GRC в нашем разборе платят до $209,618.'
};

Object.assign(BIGGOALS_RU, {
  socanalyst: 'Большая цель: за первый год дорасти до расследований второго уровня. Пока простую сортировку не забрал AI.',
  secengineer: 'Большая цель: отвечать за одну зону обнаружения целиком. Ваши правила и цифры, что они ловят настоящие атаки.',
  cloudsec: 'Большая цель: защищать всё облако компании на AWS или Azure. Аккаунты, доступы и оповещения. Плюс сертификат, который просят вакансии.',
  pentester: 'Большая цель: получить OSCP после настоящих лет в безопасности. И взламывать системы по заказу компаний — раньше, чем это сделают преступники.',
  grcanalyst: 'Большая цель: прийти в GRC из работы в безопасности. С годами опыта, которые требует каждая вакансия. А не с чеком за быстрый курс.'
});
BIGGOAL_PROF_RU.cybersecurity = 'Большая цель: стать аналитиком из топ 1% — тем, кто расследует атаки. Простую сортировку AI уже делает сам. Расследование остаётся за людьми. Нужны опыт в IT, одна специальность и доказательства. У вас получится!';