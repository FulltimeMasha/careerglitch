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
    label: 'Apprentice plumber — the door',
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
    label: 'Master plumber / own shop',
    verdict: 'YES',
    conf: 'High'
  },
  plbsales: {
    prof: 'plumber',
    label: 'Commission-only service tech',
    verdict: 'NO',
    conf: 'Medium'
  }
});

Object.assign(DOORS, {
  plbapp: 'What to do: apply to registered apprenticeships first. If you take a chain’s free training, read the contract for repayment clauses and get your hours registered with the state from day one.',
  plbserv: 'What to do: you hold the asset every shop in the scan is bidding for. Take the guarantee; let commission be an option on top, never the floor under you.',
  plbfit: 'What to do: the road in is the same apprenticeship — tell your sponsor you want industrial work, log plant hours, and keep welding practice current.',
  plbown: 'What to do: sit the master exam in the first cycle you qualify. Then build the agreement book from month one — it is the sellable asset.',
  plbsales: 'What to do instead: get your hours registered and finish the license — then take Seat 2’s guarantee at the same kind of company. Nothing about this NO follows you.'
});

GRIDINFO.plumber = {
  head: 'Plumber is a YES. The license sets the pay. Commission sets the trap.',
  short: '“Plumber” is five different paychecks — the license is worth double at the same company, the industrial branch pays union scale, and the commission-only seat is the dead end.'
};

TRACKS.plumber = [
  {
    name: 'The gate',
    steps: [
      {
        id: 'plb-g1',
        t: 'Choose your door on purpose. A registered apprenticeship pays a wage scale from year one. The big chains\' free training pays commission after it. Both take the same 4–5 years.',
        src: 'HR checklist · Part 2, item 1 — The gate',
        ru: 'Выбирайте дверь осознанно. Зарегистрированное ученичество (apprenticeship — оплачиваемое обучение на рабочем месте) платит шкалу зарплаты с первого года. Бесплатное обучение крупных сетей платит комиссию после него. Оба пути занимают те же 4–5 лет.',
        sru: 'HR-чек-лист · Часть 2, пункт 1 — Ворота'
      },
      {
        id: 'plb-g2',
        t: 'Get the apprentice license or registration your state issues before you start counting hours. Unregistered hours often do not count toward the journeyman license.',
        src: 'HR checklist · Part 2, item 2 — The gate',
        ru: 'Получите лицензию ученика или регистрацию, которую выдаёт ваш штат, до того, как начнёте считать часы. Незарегистрированные часы часто не засчитываются в лицензию подмастерья (journeyman).',
        sru: 'HR-чек-лист · Часть 2, пункт 2 — Ворота'
      },
      {
        id: 'plb-g3',
        t: 'Read any training contract for a repayment clause before you sign. Some \'free\' training charges you for the training if you leave before a set date.',
        src: 'HR checklist · Part 2, item 3 — The gate',
        ru: 'Прочитайте любой учебный договор на условие возврата денег (repayment clause) до подписания. Некоторое «бесплатное» обучение берёт с вас плату за обучение, если вы уйдёте до установленной даты.',
        sru: 'HR-чек-лист · Часть 2, пункт 3 — Ворота'
      },
      {
        id: 'plb-g4',
        t: 'Plan the 4–5 years honestly: 2,000 paid hours a year plus classes. The license at the end is the asset. There is no shortcut that keeps it.',
        src: 'HR checklist · Part 2, item 4 — The gate',
        ru: 'Спланируйте 4–5 лет честно: 2,000 оплачиваемых часов в год плюс занятия. Лицензия в конце — это актив. Сокращения, которое её сохраняет, не существует.',
        sru: 'HR-чек-лист · Часть 2, пункт 4 — Ворота'
      }
    ]
  },
  {
    name: 'Proof',
    steps: [
      {
        id: 'plb-p1',
        t: 'Log hours by work type — service, new construction, commercial, industrial. The mix decides which journeyman seats you can prove later.',
        src: 'HR checklist · Part 2, item 5 — Proof',
        ru: 'Записывайте часы по видам работ — сервис, новострой, коммерческая, промышленная. Состав решает, какие места подмастерья вы сможете доказать позже.',
        sru: 'HR-чек-лист · Часть 2, пункт 5 — Доказательства'
      },
      {
        id: 'plb-p2',
        t: 'Pass the journeyman exam as soon as your hours complete. The license is named in every top posting in the scan — including the $110,000–$130,000 service seat.',
        src: 'HR checklist · Part 2, item 6 — Proof',
        ru: 'Сдайте экзамен на подмастерье (journeyman), как только ваши часы завершены. Лицензия названа в каждой топовой вакансии скана — включая сервисное место за $110,000–$130,000.',
        sru: 'HR-чек-лист · Часть 2, пункт 6 — Доказательства'
      },
      {
        id: 'plb-p3',
        t: 'Add one priced certificate: backflow prevention. Backflow devices keep dirty water out of clean supply lines. Cities and water systems require their testing, and certified testers are a short list.',
        src: 'HR checklist · Part 2, item 7 — Proof',
        ru: 'Добавьте один сертификат с ценой: проверка обратных клапанов (backflow prevention — устройства, которые не дают грязной воде попасть в чистые линии). Города и водоканалы требуют их проверки, а сертифицированные проверяющие — короткий список.',
        sru: 'HR-чек-лист · Часть 2, пункт 7 — Доказательства'
      },
      {
        id: 'plb-p4',
        t: 'Learn the camera and the press tools. Sewer cameras find the fault without digging; press tools join pipe without flame. Both are in the standard kit now, and they raise what one licensed tech bills in a day.',
        src: 'HR checklist · Part 2, item 8 — Proof',
        ru: 'Выучите камеру и пресс-инструменты. Камеры для труб находят неисправность без раскопок; пресс-инструменты соединяют трубы без огня. Оба уже в стандартном наборе и поднимают то, что один лицензированный техник выставляет за день.',
        sru: 'HR-чек-лист · Часть 2, пункт 8 — Доказательства'
      }
    ]
  },
  {
    name: 'Get picked',
    steps: [
      {
        id: 'plb-k1',
        t: 'Take service work with a guaranteed hourly floor. Commission as an option on top is upside. Commission instead of a floor is the NO seat.',
        src: 'HR checklist · Part 2, item 9 — Get picked',
        ru: 'Берите сервисную работу с гарантированным почасовым минимумом (floor). Комиссия как вариант сверху — это плюс. Комиссия вместо минимума — место NO.',
        sru: 'HR-чек-лист · Часть 2, пункт 9 — Выбор тебя'
      },
      {
        id: 'plb-k2',
        t: 'Price on-call before you sign. BLS states the trade\'s norm — plumbers are often on call — and one shop in the scan sells \'No On-Call\' as its headline perk.',
        src: 'HR checklist · Part 2, item 10 — Get picked',
        ru: 'Оценивайте дежурства (on-call — аварийные вызовы ночью и в выходные) до подписания. BLS называет норму ремесла — сантехники часто на дежурстве, — а одна фирма в скане продаёт «Без дежурств» (No On-Call) как главное преимущество.',
        sru: 'HR-чек-лист · Часть 2, пункт 10 — Выбор тебя'
      },
      {
        id: 'plb-k3',
        t: 'Consider the industrial branch: pipefitting. It is the same BLS occupation and the same union — plant piping, steam and process systems — posting $40.64 to about $54 an hour, all union, all card-gated.',
        src: 'HR checklist · Part 2, item 11 — Get picked',
        ru: 'Рассмотрите промышленную ветвь: монтаж труб (pipefitting). Это та же профессия BLS и тот же профсоюз — заводские трубы, пар и технологические системы — публикуют от $40.64 до примерно $54 в час, все профсоюзные, все с требованием карты.',
        sru: 'HR-чек-лист · Часть 2, пункт 11 — Выбор тебя'
      },
      {
        id: 'plb-k4',
        t: 'Pass the master exam when eligible. The master license unlocks supervising and permitting — and, in states that require it, the contractor license for your own shop.',
        src: 'HR checklist · Part 2, item 12 — Get picked',
        ru: 'Сдайте экзамен на мастера (master), когда получите право. Лицензия мастера открывает руководство и разрешения на работы (permits) — и, в штатах, где это требуется, лицензию подрядчика (contractor license) для вашей собственной фирмы.',
        sru: 'HR-чек-лист · Часть 2, пункт 12 — Выбор тебя'
      },
      {
        id: 'plb-k5',
        t: 'If you open a shop, your sellable asset is the maintenance-agreement book and the license on the wall. That is what acquirers pay multiples for.',
        src: 'HR checklist · Part 2, item 13 — Get picked',
        ru: 'Если открываете фирму, ваш продаваемый актив — база договоров обслуживания и лицензия на стене. Именно за это покупатели платят кратные суммы (multiples).',
        sru: 'HR-чек-лист · Часть 2, пункт 13 — Выбор тебя'
      },
      {
        id: 'plb-k6',
        t: 'Re-check your state\'s licensing and reciprocity rules yearly. Several states rewrote trade licensing in 2026. A movable license is worth more each year.',
        src: 'HR checklist · Part 2, item 14 — Get picked',
        ru: 'Перепроверяйте правила лицензирования и взаимного признания (reciprocity — когда другой штат признаёт вашу лицензию) вашего штата каждый год. Несколько штатов переписали лицензирование ремёсел в 2026 году. Подвижная лицензия стоит дороже каждый год.',
        sru: 'HR-чек-лист · Часть 2, пункт 14 — Выбор тебя'
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
    h: 'The license premium, printed by one company: $55K–$75K apprentice, $110K–$130K licensed.',
    d: 'Nov 1, 2026 · Roto-Rooter postings',
    map: 'Whatever door you entered through, the asset is the license. Every decision that delays it costs roughly that gap, per year.',
    hRu: 'Премия лицензии, напечатанная одной компанией: $55K–$75K ученику, $110K–$130K лицензированному.',
    dRu: '1 ноября 2026 · вакансии Roto-Rooter',
    mapRu: 'Через какую бы дверь вы ни вошли, актив — лицензия. Каждое решение, которое её откладывает, стоит примерно этот разрыв, в год.'
  },
  {
    h: '“100% commission” is now a posted pay plan.',
    d: '2026 · service plumbing postings',
    map: 'A guaranteed floor is the line between a trade job and a sales job. One posting offers the choice in writing: $35–$40/hr guaranteed, or 25% commission.',
    hRu: '«100% комиссия» — теперь опубликованный план оплаты.',
    dRu: '2026 · вакансии сервисной сантехники',
    mapRu: 'Гарантированный минимум — линия между работой ремесла и работой продаж. Одна вакансия предлагает выбор письменно: $35–$40/hr гарантированно или 25% комиссии.'
  },
  {
    h: 'The union scale is public: $60.50 an hour in Chicago.',
    d: 'Jun 2025 · UA Local 130 wage sheet',
    map: 'Industrial postings in the scan run $40.64–$54/hr, all union, all license-gated. Price the industrial branch before defaulting to residential service.',
    hRu: 'Шкала профсоюза открыта: $60.50 в час в Чикаго.',
    dRu: 'Июнь 2025 · шкала UA Local 130',
    mapRu: 'Промышленные вакансии в скане идут по $40.64–$54/hr, все профсоюзные, все с лицензией. Оцените промышленную ветвь до ухода в жилой сервис по умолчанию.'
  },
  {
    h: 'One shop now recruits with “No On-Call.”',
    d: '2026 · employer posting; BLS work-schedule text',
    map: 'BLS states the norm — plumbers are often on call. If its absence is a perk, its presence has a price. Make sure yours is paid.',
    hRu: 'Одна фирма теперь нанимает словами «Без дежурств» (No On-Call).',
    dRu: '2026 · вакансия работодателя; текст BLS о графике',
    mapRu: 'BLS называет норму — сантехники часто на дежурстве. Если его отсутствие — преимущество, у его присутствия есть цена. Убедитесь, что ваша оплачена.'
  },
  {
    h: 'The training shortage is the trade’s own diagnosis.',
    d: 'Oct 2026 · The Trade Traction Podcast transcript',
    map: '“They don’t grow on trees” — a working contractor on why shops must train. Enter through a door that pays a wage and let the shortage work for you at the license end.',
    hRu: 'Нехватка обучения — диагноз самого ремесла.',
    dRu: 'Октябрь 2026 · расшифровка The Trade Traction Podcast',
    mapRu: '«Они не растут на деревьях» — работающий подрядчик о том, почему фирмы должны учить. Входите через дверь, которая платит зарплату, и дайте нехватке работать на вас у лицензионного конца.'
  },
  {
    h: 'New construction is the floor, not the ladder: $18–$29/hr posted.',
    d: '2026 · employer postings',
    map: 'The lowest band in the scan, and the most exposed to the housing cycle. Build hours there if you must; aim the license at service, commercial or industrial.',
    hRu: 'Новострой — это пол, а не лестница: опубликовано $18–$29/hr.',
    dRu: '2026 · вакансии работодателей',
    mapRu: 'Самая низкая вилка скана и самая открытая жилищному циклу. Набирайте там часы, если нужно; цельте лицензию в сервис, коммерческую или промышленную работу.'
  }
];

/* ===== Plumber — Russian (RU) content layer ===== */
PROF_META_RU.plumber = 'Сантехник';

Object.assign(DOORS_RU, {
  plbapp: 'Что делать: подавайтесь сначала в зарегистрированные ученичества. Если берёте бесплатное обучение сети, прочитайте договор на условия возврата денег за обучение (repayment clauses) и зарегистрируйте ваши часы в штате с первого дня.',
  plbserv: 'Что делать: у вас актив, за который торгуется каждая фирма в скане. Берите гарантию; комиссия пусть будет вариантом сверху, а не полом под вами.',
  plbfit: 'Что делать: дорога внутрь — то же ученичество: скажите вашему спонсору, что хотите промышленную работу, записывайте заводские часы и держите практику сварки в актуальном состоянии.',
  plbown: 'Что делать: сдайте экзамен на мастера (master) в первый цикл, когда получите право. Потом стройте базу договоров обслуживания с первого месяца — это и есть продаваемый актив.',
  plbsales: 'Что делать вместо этого: зарегистрируйте ваши часы и завершите лицензию — потом возьмите гарантированную оплату в компании того же типа. Ничто из этого NO не следует за вами.'
});

GRIDINFO_RU.plumber = {
  head: 'Сантехник — это ДА. Лицензия задаёт оплату. Комиссия задаёт ловушку.',
  short: '«Сантехник» — это пять разных зарплат: лицензия стоит вдвое в той же компании, промышленная ветвь платит по профсоюзной шкале, а место только на комиссии — тупик.'
};

DOORSTEP_RU.prof.plumber = {
  student: 'Первый шаг, до старта: подавайтесь сначала в зарегистрированное ученичество — профсоюзная дверь платит $24.54 в час в первый год при $0 за обучение (UA Local 486). Прочитайте учебный договор любой сети на условия возврата денег до того, как что-либо подпишете.',
  early: 'Первый шаг, как ученик: зарегистрируйте ваши часы в штате с первого дня и записывайте их по видам работ. Незарегистрированные годы не становятся лицензией.',
  mid: 'Первый шаг, как подмастерье (journeyman): берите сервисную работу с гарантированным минимумом — рынок публикует $110,000–$130,000 для лицензированных подмастерьев, а одна вакансия печатает выбор «почасово или комиссия» открыто.',
  senior: 'Первый шаг, как мастер (master): стройте продаваемый актив — лицензию подрядчика (contractor license), где ваш штат требует статус мастера, и базу договоров обслуживания. Именно эту базу оценивают покупатели фирм.'
};
DOORSTEP_RU.seat.plbapp = {
  student: 'Первый шаг, как студент: составьте список всех зарегистрированных программ в пределах досягаемости и их следующего окна. Дверь со шкалой зарплаты заполняется по календарю, а не по удаче.',
  early: 'Первый шаг, в начале: подтверждайте каждый месяц, что ваши часы подаются в штат. Доверяйте, но проверяйте — это ваша лицензия.',
  mid: 'Первый шаг, на уровне подмастерья: это место позади вас — ваш шаг — проверка гарантии в каждом предложении с этого момента.',
  senior: 'Первый шаг, на уровне мастера: учите учеников так, как спорят собственные тренеры ремесла, — кто-то сделал вас; нехватка — ваша сила в цене, только пока труба продолжает течь.'
};
DOORSTEP_RU.seat.plbsales = {
  student: 'Первый шаг, как студент: если обучение бесплатное, найдите, кто за него платит. В модели сети — вы, комиссией, после выпуска.',
  early: 'Первый шаг, в начале: получите зарегистрированные часы даже внутри комиссионной фирмы. Часы лицензии — единственные часы, которые платят вам позже.',
  mid: 'Первый шаг, при 3–5 годах: перенесите лицензию на гарантию — такие предложения опубликованы: $35–$40 в час гарантированно, комиссия как вариант.',
  senior: 'Первый шаг, при 5+ годах: ваша репутация диагноста переносима, а ваша книга продаж — нет. Оценивайте переносимую: фирма с почасовой оплатой, промышленная ветвь или ваше собственное имя.'
};

Object.assign(BIGGOALS_RU, {
  plbapp: 'Большая цель: лицензия подмастерья (journeyman) в конце ученичества с зарплатой — 4–5 лет, которые платят вам, пока делают вас.',
  plbserv: 'Большая цель: лицензированное место на гарантированном минимуме — работа по опубликованным $110K–$130K, комиссия только как вариант сверху.',
  plbfit: 'Большая цель: промышленная ветвь по профсоюзной шкале — заводская работа по опубликованным $40.64–$54/hr, $60.50/hr по опубликованной шкале Чикаго.',
  plbown: 'Большая цель: фирма, стоящая на вашей лицензии мастера (master), — с базой договоров обслуживания, которую покупатель оценивает в кратных суммах.',
  plbsales: 'Большая цель: те же руки на гарантированном минимуме — почасово в фирме, промышленно по шкале или ваше собственное имя на машине.'
});
BIGGOAL_PROF_RU.plumber = 'Большая цель: лицензия, за которую торгуется весь рынок, — получена один раз, оценивается каждый год, пока длится нехватка.';
/* ================= CYBERSECURITY =================
   Source: ~/workspace/cg-staging/cybersecurity/spec.md (35 live postings
   + BLS + CyberSeek). Cluster: CYBERSECURITY IS A YES. THE BEGINNER
   DOOR IS THE TRAP. (Medium). Code word: SHIELD. */
PROF_META.cybersecurity = {
  name: 'Cybersecurity',
  kick: 'Cybersecurity',
  code: 'SHIELD',
  count: '35',
  srcWhat: 'live cybersecurity postings',
  srcWhatRu: 'живых вакансий кибербезопасности'
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
  socanalyst: 'What to do: enter here if you must start now — and plan your climb to Tier 2 from week one.',
  secengineer: 'What to do: not a first job. It is where SOC analysts and IT workers climb to — aim your practice at it early.',
  cloudsec: 'What to do: a move you make from IT or SOC work — not a first step from zero.',
  pentester: 'What to do: dream job, wrong first step. The road in runs through IT and SOC work first.',
  grcanalyst: 'What to do instead: fine specialty at year four. As a beginner’s final stop: no.'
});

GRIDINFO.cybersecurity = {
  head: 'Five jobs hide inside one word.',
  short: '“Cybersecurity” is five different jobs — SOC hires beginners but its first rung is being eaten, engineering and cloud pay the top, and GRC is the dead end as a first stop.'
};

TRACKS.cybersecurity = [
  {
    name: 'The gate',
    steps: [
      {
        id: 'cyb-g1',
        t: 'Pick one specialty before you buy any course',
        src: 'HR checklist · Part 1, item 1 — The gate',
        ru: 'Выберите одну специальность до покупки любого курса',
        sru: 'Чек-лист HR · Часть 1, пункт 1 — Ворота'
      },
      {
        id: 'cyb-g2',
        t: 'Get real IT time first — help desk counts',
        src: 'HR checklist · Part 1, item 2 — The gate',
        ru: 'Сначала наберите реальный опыт в IT — служба поддержки засчитывается',
        sru: 'Чек-лист HR · Часть 1, пункт 2 — Ворота'
      },
      {
        id: 'cyb-g3',
        t: 'Earn Security+ — the certificate the door asks for by name',
        src: 'HR checklist · Part 1, item 3 — The gate',
        ru: 'Получите Security+ — сертификат, который на входе называют по имени',
        sru: 'Чек-лист HR · Часть 1, пункт 3 — Ворота'
      },
      {
        id: 'cyb-g4',
        t: 'Learn how networks actually move data',
        src: 'HR checklist · Part 1, item 4 — The gate',
        ru: 'Разберитесь, как сети на самом деле передают данные',
        sru: 'Чек-лист HR · Часть 1, пункт 4 — Ворота'
      },
      {
        id: 'cyb-g5',
        t: 'Get hands-on with one alert system: Splunk or Microsoft Sentinel',
        src: 'HR checklist · Part 1, item 5 — The gate',
        ru: 'Освойте руками одну систему оповещений о риске: Splunk или Microsoft Sentinel',
        sru: 'Чек-лист HR · Часть 1, пункт 5 — Ворота'
      }
    ]
  },
  {
    name: 'Proof',
    steps: [
      {
        id: 'cyb-p1',
        t: 'Keep a home-lab log: sort 20 alerts and write what each one was',
        src: 'HR checklist · Part 2, item 1 — Proof',
        ru: 'Ведите журнал домашней лаборатории: разберите 20 оповещений и запишите, чем было каждое',
        sru: 'Чек-лист HR · Часть 2, пункт 1 — Доказательства'
      },
      {
        id: 'cyb-p2',
        t: 'Write one small Python script that reads a log file',
        src: 'HR checklist · Part 2, item 2 — Proof',
        ru: 'Напишите один маленький скрипт на Python, который читает файл журнала',
        sru: 'Чек-лист HR · Часть 2, пункт 2 — Доказательства'
      },
      {
        id: 'cyb-p3',
        t: 'Write three incident reports in plain English',
        src: 'HR checklist · Part 2, item 3 — Proof',
        ru: 'Напишите три отчёта об инцидентах простым английским языком',
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
        t: 'Build your resume from the words in live postings',
        src: 'HR checklist · Part 3, item 1 — Get picked',
        ru: 'Соберите резюме из слов, которые стоят в живых вакансиях',
        sru: 'Чек-лист HR · Часть 3, пункт 1 — Выбор'
      },
      {
        id: 'cyb-k2',
        t: 'Apply to bridge jobs and analyst jobs at the same time',
        src: 'HR checklist · Part 3, item 2 — Get picked',
        ru: 'Откликайтесь на переходные и аналитические вакансии одновременно',
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
    d: '18 November 2025 — Microsoft began rolling Security Copilot agents into Microsoft 365 E5 accounts. The agents do phishing triage, alert triage and access reviews. Alert triage is the exact work of a Tier-1 SOC analyst.',
    map: 'The bottom rung of the SOC ladder is now a software feature. Enter if you can — and climb.',
    hRu: 'Microsoft выпускает ИИ-агентов, которые разбирают оповещения',
    dRu: '18 ноября 2025 года Microsoft начала внедрять агентов Security Copilot в аккаунты Microsoft 365 E5. Агенты разбирают фишинг — поддельные письма, — оповещения и проверки доступа. Разбор оповещений — точная работа аналитика SOC первого уровня, центра мониторинга атак.',
    mapRu: 'Нижняя ступень лестницы SOC теперь — функция программы. Входите, если можете, — и поднимайтесь.'
  },
  {
    h: 'The first reported AI-run espionage campaign',
    d: '13 November 2025 — Anthropic reported an AI model running an estimated 80–90% of the tactical work across about 30 targets. One source, no independent confirmation, and the model hallucinated credentials during the operation.',
    map: 'Attack volume grows faster than human attackers could grow it. Detection and hunting work grows with it.',
    hRu: 'Первая сообщённая шпионская кампания под управлением ИИ',
    dRu: '13 ноября 2025 года Anthropic сообщила, что модель ИИ выполнила примерно 80–90% тактической работы по примерно 30 целям. Один источник, независимого подтверждения нет, а модель во время операции выдумывала пароли.',
    mapRu: 'Объём атак растёт быстрее, чем могли бы расти живые атакующие. Работа по обнаружению и охоте растёт вместе с ним.'
  },
  {
    h: 'A security giant cuts jobs and credits AI',
    d: 'May 2025 — CrowdStrike cut about 500 jobs (5%). The CEO’s letter, filed with the SEC, credits AI efficiencies and says AI “flattens our hiring curve”. The filing does not say the cuts were analysts.',
    map: 'Even security sellers hire slower per dollar of growth. The +21% field growth will not feel like a boom at the door.',
    hRu: 'Гигант безопасности сокращает места и называет причину — ИИ',
    dRu: 'Май 2025 года — CrowdStrike сократила около 500 мест (5%). Письмо директора, поданное в SEC (регулятор рынка США), называет причиной эффективность ИИ и говорит, что ИИ «сглаживает кривую найма». В документе не сказано, что сокращения коснулись аналитиков.',
    mapRu: 'Даже продавцы безопасности нанимают медленнее на каждый доллар роста. Рост поля на +21% не будет ощущаться как бум у двери.'
  },
  {
    h: 'ISC2 drops the “workforce gap” number',
    d: 'December 2025 — ISC2’s Workforce Study (16,029 respondents) published no gap number, for the first time. The old 4.8M counted perceived need, not openings. Top real gaps: AI skills (41%) and cloud security (36%); budget now blocks staffing more than people do.',
    map: 'Stop repeating “millions of unfilled jobs” — the source retired it. The real gaps have names, and both are YES on this map.',
    hRu: 'ISC2 убирает число «разрыва кадров»',
    dRu: 'Декабрь 2025 года — исследование ISC2 (16 029 респондентов) впервые вышло без числа разрыва. Старые 4,8 млн считали ощущаемую потребность, а не вакансии. Настоящие главные разрывы: навыки ИИ (41%) и облачная безопасность (36%); теперь найму больше мешает бюджет, чем нехватка людей.',
    mapRu: 'Перестаньте повторять «миллионы незаполненных мест» — источник сам убрал это число. У настоящих разрывов есть имена, и оба на этой карте — ДА.'
  },
  {
    h: 'Employers ask beginners for senior certificates',
    d: 'June 2025 — ISC2’s hiring study (929 managers): 38% of employers were reported to require CISA for entry-level roles, 34% to require CISSP. Both certificates demand years of experience by their own rules. Same study: 90% of managers would consider prior IT experience alone.',
    map: 'Posting text is broken; hiring behavior is not. IT experience is the currency the door accepts.',
    hRu: 'Работодатели просят у новичков старшие сертификаты',
    dRu: 'Июнь 2025 года — исследование найма ISC2 (929 менеджеров): сообщается, что 38% работодателей требуют CISA на начальные роли и 34% требуют CISSP. Оба сертификата по своим правилам требуют годы опыта. То же исследование: 90% менеджеров рассмотрели бы один только прошлый опыт в IT.',
    mapRu: 'Текст вакансий сломан; поведение при найме — нет. Опыт в IT — валюта, которую принимает дверь.'
  },
  {
    h: 'The beginner share of postings shrinks again',
    d: '1 October 2026 — AKA Security’s postings study: postings accepting 0–2 years fell from 18.3% to 13.6%; entry postings mentioning Python rose from 22.7% to 46.6%; entry postings expecting AI tool use rose from 0.7% to 20.4%.',
    map: 'The door moves every year: toward experience, Python and AI tools. This track is built in that order.',
    hRu: 'Доля вакансий для новичков снова уменьшается',
    dRu: '1 октября 2026 года — исследование вакансий AKA Security: доля вакансий, принимающих 0–2 года опыта, упала с 18,3% до 13,6%; начальные вакансии с упоминанием Python выросли с 22,7% до 46,6%; начальные вакансии, ожидающие умение работать с ИИ, выросли с 0,7% до 20,4%.',
    mapRu: 'Дверь движется каждый год: к опыту, к Python и к инструментам ИИ. Этот путь построен в таком порядке.'
  }
];

/* ===== Cybersecurity — Russian (RU) content layer ===== */
PROF_META_RU.cybersecurity = 'Кибербезопасность';

Object.assign(DOORS_RU, {
  socanalyst: 'Что делать: входите сюда, если нужно начать сейчас, — и планируйте подъём на второй уровень (Tier 2 — расследования) с первой недели.',
  secengineer: 'Что делать: это не первая работа. Сюда поднимаются аналитики SOC и работники IT — нацеливайте вашу практику сюда рано.',
  cloudsec: 'Что делать: этот шаг делают из работы в IT или SOC — не первый шаг с нуля.',
  pentester: 'Что делать: работа мечты, неверный первый шаг. Дорога внутрь идёт сначала через работу в IT и SOC.',
  grcanalyst: 'Что делать вместо этого: хорошая специальность на четвёртый год. Как конечная остановка новичка — нет.'
});

GRIDINFO_RU.cybersecurity = {
  head: 'Пять работ прячутся внутри одного слова.',
  short: '«Кибербезопасность» — это пять разных работ. Работа аналитика SOC — настоящий найм, но первую ступень едят. Инженерия безопасности и облачная безопасность платят вершину. Тестирование на проникновение — вторая работа. GRC — это НЕТ как конечная остановка новичка.'
};

DOORSTEP_RU.prof.cybersecurity = {
  student: 'Первый шаг, как студент: сначала выберите специальность — у пяти работ внутри этого слова разные двери.',
  early: 'Первый шаг, в начале: наберите настоящее время в IT. Служба поддержки засчитывается: 90% менеджеров по найму говорят, что прошлого опыта в IT достаточно, чтобы вас рассмотреть.',
  mid: 'Первый шаг, на среднем уровне: поднимитесь на один этаж: от сортировки оповещений к их расследованию. Этот шаг и есть вся карьера.',
  senior: 'Первый шаг, на старшем уровне: продавайте суждение, а не сертификаты: обнаружение, облачная защита или владение аудитом — работа, которую черновики ИИ не могут подписать.'
};
DOORSTEP_RU.seat.socanalyst = {
  student: 'Первый шаг, как студент: откройте список рабочих ролей NICE Framework (официальный каталог киберпрофессий) и прочитайте, чем аналитик киберзащиты (Cyber Defense Analyst) занимается весь день на самом деле.',
  early: 'Первый шаг, в начале: получите один месяц любой работы в IT — служба поддержки засчитывается — и начните Security+ в тот же месяц.',
  mid: 'Первый шаг, на среднем уровне: перестаньте сортировать. Возьмите расследования: возьмите следующее оповещение, которого коснётся ваша команда, и напишите его полную историю.',
  senior: 'Первый шаг, на старшем уровне: переходите к охоте на угрозы или правилам обнаружения — работе над ступенью, которую забрали агенты.'
};
DOORSTEP_RU.seat.secengineer = {
  student: 'Первый шаг, как студент: учите Python до любого сертификата: один маленький скрипт в неделю.',
  early: 'Первый шаг, в начале: на вашей работе в SOC или IT автоматизируйте одну скучную задачу и сохраните скрипт как доказательство.',
  mid: 'Первый шаг, на среднем уровне: напишите ваше первое правило обнаружения для настоящей системы оповещений и проверьте его на старых оповещениях.',
  senior: 'Первый шаг, на старшем уровне: владейте одной зоной обнаружения целиком: правила, настройка и числа, которые доказывают, что они работают.'
};
DOORSTEP_RU.seat.cloudsec = {
  student: 'Первый шаг, как студент: выберите одно облако — AWS или Azure — и разберитесь, как работают его аккаунты и доступы.',
  early: 'Первый шаг, в начале: из работы в IT или SOC берите каждый облачный запрос, который получает ваша команда. Облачное время здесь — валюта.',
  mid: 'Первый шаг, на среднем уровне: сдайте экзамен AZ-500 или AWS Certified Security – Specialty — имена, которые повторяют вакансии.',
  senior: 'Первый шаг, на старшем уровне: охраняйте целое облачное хозяйство, а не один аккаунт: ограждения (guardrails — автоматические правила защиты), оповещения и доказательства для аудиторов.'
};
DOORSTEP_RU.seat.pentester = {
  student: 'Первый шаг, как студент: сначала постройте базу: сети, Linux, Windows. Вакансии проверяют все три.',
  early: 'Первый шаг, в начале: два года работы в IT или SOC — настоящая заявка. Лаборатории — практика, а не замена.',
  mid: 'Первый шаг, на среднем уровне: начните подготовку к OSCP — 3 из 6 вакансий нашего разбора называют этот сертификат обязательным.',
  senior: 'Первый шаг, на старшем уровне: специализируйтесь: веб-приложения или красная команда (red team — атаки с разрешения). Специалисты возглавляют вилку оплаты в нашем разборе.'
};
DOORSTEP_RU.seat.grcanalyst = {
  student: 'Первый шаг, как студент: не начинайте здесь. Каждая вакансия нашего разбора требует сначала 3+ года работы в безопасности.',
  early: 'Первый шаг, в начале: сначала постройте годы в безопасности в SOC или IT; GRC нанимает изнутри поля.',
  mid: 'Первый шаг, на среднем уровне: с 3+ годами в безопасности выучите один список правил глубоко: NIST 800-53 или ISO 27001.',
  senior: 'Первый шаг, на старшем уровне: ведите аудиты и владейте доказательствами. Старший GRC в нашем разборе платит до $209,618.'
};

Object.assign(BIGGOALS_RU, {
  socanalyst: 'Большая цель: дойти до расследований второго уровня за первый год — до того, как ступень сортировки сожмётся под вами.',
  secengineer: 'Большая цель: владеть одной зоной обнаружения целиком: правила, которые написали вы, и числа, доказывающие, что они ловят настоящие атаки.',
  cloudsec: 'Большая цель: охранять целое облачное хозяйство на AWS или Azure — аккаунты, доступы и оповещения — с сертификатом, который повторяют вакансии.',
  pentester: 'Большая цель: получить OSCP после настоящих лет в безопасности и проверять системы, за атаку на которые компании платят раньше преступников.',
  grcanalyst: 'Большая цель: прийти в GRC изнутри работы в безопасности — с годами, которые требует каждая вакансия, а не с чеком за быстрый курс.'
});
BIGGOAL_PROF_RU.cybersecurity = 'Большая цель: стать аналитиком, который расследует, а не только сортирует: реальное время в IT, одна специальность и доказательства, которые можно показать.';