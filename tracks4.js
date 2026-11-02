/* ===== PathCheck — the AI Content Creator track + app data, Nov 1, 2026.
   Own file for the same reason as tracks3.js: tracks.js and tracks2.js
   sit near the ~98 KB single-file upload cap. Loaded by app.html after
   tracks3.js, before quests.js/app.js; every block below ASSIGNS into
   the globals tracks.js / tracks2.js declared — nothing is redeclared.
   Founder ruling 2026-11-01: "AI content creator" is its own
   profession, not the plain Content Creator. Steps trace 1:1 to the
   package's hr-checklist.md Part 2 (the 13-point checklist): items
   1–4 → The gate; items 5–9 → Proof; items 10–13 → Get picked.
   Source: ~/workspace/pathcheck-aicreator-pilot/. Digits come only
   from that package — platform rules, the FTC rulebook, live
   postings, named cases. */

PROF_META.aicreator = {name:'AI Content Creator', kick:'AI Content Creator', code:'PROMPT', count:'3 billion', srcWhat:'videos TikTok has labeled AI-generated', srcWhatRu:'видео, которые TikTok пометил как сгенерированные AI'};

Object.assign(SEATINFO, {
  aimass:{prof:'aicreator', label:'Faceless AI-mass channel', verdict:'NO', conf:'High'},
  persona:{prof:'aicreator', label:'AI influencer / virtual persona', verdict:'NO as a plan', conf:'Medium'},
  aistreamer:{prof:'aicreator', label:'AI streamer / AI VTuber', verdict:'NO as a plan', conf:'Medium'},
  aipipeline:{prof:'aicreator', label:'Real face, AI pipeline', verdict:'YES', conf:'Medium'},
  aiservice:{prof:'aicreator', label:'AI video for brands', verdict:'YES', conf:'Medium'}
});

Object.assign(DOORS, {
  aimass:'What to do instead: keep the pipeline, change the product. Put a real face in front of it. Or sell the same skills to brands as a service. One wave of platform checks can close a channel and take it to zero. A client list does not disappear like that.',
  persona:'What to do instead: sell the studio, not the character. Brands pay agencies to build and run AI personas. Aitana\u2019s \u20AC3,000 months belong to the agency behind her. Be the agency.',
  aistreamer:'What to do instead: if you can build the AI, you are a developer. Price the build. If you want to stream, stream as a person. A human behind an avatar is a streamer, and that map is the Content Creator one.',
  aipipeline:'What to do: you are in a YES seat. Ship ten pieces with the pipeline. Log the minutes per piece. Price against the $154 a brand pays for a human video. Your face is the part nobody can offshore.',
  aiservice:'What to do: you are in a YES seat. Price the gap, not the clip. The gap is hooks, variants and performance reads. Sell retainers. Per-clip pricing races the $4-an-hour board.'
});

GRIDINFO.aicreator = {head:'AI content creator is a NO. AI as your team of helpers is a YES.', short:'“AI content creator” is five different jobs. Faceless AI channels are a dead end. Virtual personas are a bad bet if you do it alone. AI streamers are a bad bet as a plan. A real face with AI helpers is a good bet. AI video sold to brands is a good bet.'};

/* ================= AI CONTENT CREATOR TRACK (13 steps) ================= */
TRACKS.aicreator = [
  {name:'The gate', steps:[
    {id:'aic-g1', t:'Pick your seat on paper first. The seats that pay are a real face with an AI crew, and AI video sold to brands. The persona, the mass channel and the solo AI streamer are the NO seats.', src:'HR checklist · Part 2, item 1 — The gate', ru:'Сначала выберите ваше место на бумаге. Места, которые платят, — это настоящее лицо с AI-командой и AI-видео, проданное брендам. Персона, массовый канал и сольный AI-стример — места NO.', sru:'HR-чек-лист · Часть 2, пункт 1 — Ворота'},
    {id:'aic-g2', t:'Learn the label rules before the first post. YouTube has a disclosure tool for realistic AI content. TikTok labels detected AI content itself. Meta marks it \u201CAI info\u201D. Realistic AI with no label is the one mistake every platform punishes.', src:'HR checklist · Part 2, item 2 — The gate', ru:'Выучите правила пометок до первой публикации. У YouTube есть инструмент раскрытия для реалистичного AI-контента. TikTok помечает найденный AI-контент сам. Meta ставит «AI info». Реалистичный AI без пометки — единственная ошибка, которую наказывает каждая платформа.', sru:'HR-чек-лист · Часть 2, пункт 2 — Ворота'},
    {id:'aic-g3', t:'Learn the FTC line by heart. Your AI can present, demonstrate and entertain. It cannot give a testimonial it did not live. A fake AI testimonial is a banned fake review, with fines per violation.', src:'HR checklist · Part 2, item 3 — The gate', ru:'Выучите линию FTC наизусть. Ваш AI может представлять, показывать и развлекать. Он не может давать отзыв, который не прожил. Фейковый AI-отзыв — это запрещённый фейковый отзыв, со штрафами за нарушение.', sru:'HR-чек-лист · Часть 2, пункт 3 — Ворота'},
    {id:'aic-g4', t:'Set up the toolbox once. One generation tool. One editor. One voice tool. About $29\u201360 a month in total. The tools are not the skill. Stop shopping for them.', src:'HR checklist · Part 2, item 4 — The gate', ru:'Соберите набор инструментов один раз. Один инструмент генерации. Один редактор. Один голосовой инструмент. Около $29\u201360 в месяц в сумме. Инструменты — не навык. Перестаньте за ними гоняться.', sru:'HR-чек-лист · Часть 2, пункт 4 — Ворота'}
  ]},
  {name:'Proof', steps:[
    {id:'aic-p1', t:'Ship 10 finished pieces with the pipeline. Log the minutes each one took. Your speed is the first line of your rate card.', src:'HR checklist · Part 2, item 5 — Proof', ru:'Отправьте 10 готовых работ вашим процессом. Запишите минуты, которые заняла каждая. Ваша скорость — первая строка вашей карточки цен.', sru:'HR-чек-лист · Часть 2, пункт 5 — Доказательства'},
    {id:'aic-p2', t:'Dub yourself into a second language with the same pipeline. The tools cover 175 languages and dialects. One face, two markets. This is the pipeline seat\u2019s unfair advantage.', src:'HR checklist · Part 2, item 6 — Proof', ru:'Продублируйте себя на второй язык тем же процессом. Инструменты покрывают 175 языков и диалектов. Одно лицо, два рынка. Это несправедливое преимущество места с процессом.', sru:'HR-чек-лист · Часть 2, пункт 6 — Доказательства'},
    {id:'aic-p3', t:'Build a one-page rate card. Price it against the two real numbers. A brand pays $154 for a human video. A raw AI clip costs about $1\u201311 to make. Your price lives in the gap: judgment, volume, speed.', src:'HR checklist · Part 2, item 7 — Proof', ru:'Соберите карточку цен на одну страницу. Оцените её против двух настоящих чисел. Бренд платит $154 за видео человека. Сырой AI-клип стоит около $1\u201311 в производстве. Ваша цена живёт в разрыве: суждение, объём, скорость.', sru:'HR-чек-лист · Часть 2, пункт 7 — Доказательства'},
    {id:'aic-p4', t:'Land two paying clients, or two paid brand deliveries. In this niche, paid work is the only credential that exists. There is no license, no union, no board.', src:'HR checklist · Part 2, item 8 — Proof', ru:'Возьмите двух платящих клиентов или две оплаченные поставки брендам. В этой нише оплаченная работа — единственное удостоверение, которое существует. Лицензии нет, профсоюза нет, board нет.', sru:'HR-чек-лист · Часть 2, пункт 8 — Доказательства'},
    {id:'aic-p5', t:'Keep a disclosure habit sheet for every platform you post on. What gets labeled, and where. If your clients advertise in New York, their ads with an AI performer need a disclosure by law since June 2026.', src:'HR checklist · Part 2, item 9 — Proof', ru:'Держите лист привычек раскрытия для каждой платформы, где публикуете. Что помечается и где. Если ваши клиенты рекламируются в Нью-Йорке, их рекламе с AI-исполнителем нужна пометка по закону с июня 2026.', sru:'HR-чек-лист · Часть 2, пункт 9 — Доказательства'}
  ]},
  {name:'Get picked', steps:[
    {id:'aic-k1', t:'Sell the gap, not the tool. Ten tested hooks for the price of one filmed video. Brands buy tests and outcomes. They never buy \u201CAI content\u201D.', src:'HR checklist · Part 2, item 10 — Get picked', ru:'Продавайте разрыв, а не инструмент. Десять проверенных хуков по цене одного снятого видео. Бренды покупают тесты и результаты. Они никогда не покупают «AI-контент».', sru:'HR-чек-лист · Часть 2, пункт 10 — Выбор тебя'},
    {id:'aic-k2', t:'Price from the market, never per clip. The offshore board lists this title at $4 an hour. Retainers and deliverable packages only. The per-video price race ends at $1.', src:'HR checklist · Part 2, item 11 — Get picked', ru:'Ставьте цену от рынка, никогда не за клип. Офшорная доска публикует это название за $4 в час. Только ретейнеры и пакеты работ. Гонка цены за видео заканчивается на $1.', sru:'HR-чек-лист · Часть 2, пункт 11 — Выбор тебя'},
    {id:'aic-k3', t:'Build the layer you own. A client list. An email list. An audience that follows the person, not the tool. Tool prices and platform labels change every quarter. The owned layer is the only asset that grows.', src:'HR checklist · Part 2, item 12 — Get picked', ru:'Стройте слой, которым владеете. Список клиентов. Список email. Аудиторию, которая следует за человеком, а не за инструментом. Цены инструментов и пометки платформ меняются каждый квартал. Слой владения — единственный актив, который растёт.', sru:'HR-чек-лист · Часть 2, пункт 12 — Выбор тебя'},
    {id:'aic-k4', t:'Re-check every quarter. Tool prices. Label rules. And your own income split: client money against platform money. The rules on this track are dated 2026, and they will move.', src:'HR checklist · Part 2, item 13 — Get picked', ru:'Перепроверяйте каждый квартал. Цены инструментов. Правила пометок. И ваше собственное деление дохода: деньги клиентов против денег платформ. Правила на этом треке датированы 2026 годом, и они сдвинутся.', sru:'HR-чек-лист · Часть 2, пункт 13 — Выбор тебя'}
  ]}
];

Object.assign(RESUME_TERMS, {
  'aic-g4':['heygen','runway','elevenlabs','midjourney','kling','seedance','higgsfield','creatify','arcads','sora'],
  'aic-p3':['media kit','rate card'],
  'aic-p4':['ugc','brand deal','sponsored'],
  'aic-k2':['retainer']
});

/* ===== Radar Issue #1 — from the package's radar-issue-01.md ===== */
RADAR.aicreator = [
  {h:'TikTok has labeled over 3 billion AI videos. Viewers are getting a dial.', d:'Jul 2026 · TikTok Newsroom', map:'The AI-content control in Manage Topics is still a test. Plan as if it ships: if your content only works while viewers cannot turn it down, it does not work.', hRu:'TikTok пометил уже более 3 миллиардов AI-видео. Зрители получают ручку настройки.', dRu:'Июль 2026 · TikTok Newsroom', mapRu:'Контроль AI-контента в Manage Topics всё ещё тест. Исходите из того, что он выйдет: если ваш контент работает только пока зрители не могут его убавить, он не работает.'},
  {h:'YouTube\u2019s enforcement year: 35 million subscribers deleted, then the biggest trailer channels.', d:'Dec 2025 \u2013 Jan 2026 · Deadline / The Next Web', map:'Screen Culture and KH Studio were terminated after fixing their labels once. In this niche the channel is not the asset. Your client list and your owned audience are.', hRu:'Год применения правил YouTube: удалены 35 миллионов подписчиков, потом крупнейшие трейлерные каналы.', dRu:'Декабрь 2025 \u2013 январь 2026 · Deadline / The Next Web', mapRu:'Screen Culture и KH Studio были удалены после того, как один раз исправили пометки. В этой нише канал — не актив. Ваш список клиентов и ваша собственная аудитория — актив.'},
  {h:'TikTok is testing detection for \u201Caccounts dedicated to posting AI-generated spam.\u201D', d:'Jul 2026 · TikTok Newsroom', map:'That sentence is the mass-channel business model, in the platform\u2019s own words. If your posting pattern matches it, you are the test case.', hRu:'TikTok тестирует поиск «аккаунтов, посвящённых публикации AI-спама».', dRu:'Июль 2026 · TikTok Newsroom', mapRu:'Это предложение — бизнес-модель массового канала, словами самой платформы. Если ваш ритм публикаций совпадает с ним, вы и есть тестовый случай.'},
  {h:'New York\u2019s synthetic-performer ad law is in force.', d:'Jun 9, 2026 · NY GBL \u00A7396-b', map:'Ads with an AI performer need a conspicuous disclosure. If you sell AI video to brands, disclosure handling is part of the deliverable now \u2014 put it in the rate card.', hRu:'Закон Нью-Йорка о синтетических исполнителях в рекламе вступил в силу.', dRu:'9 июня 2026 · NY GBL \u00A7396-b', mapRu:'Рекламе с AI-исполнителем нужна заметная пометка. Если вы продаёте AI-видео брендам, работа с пометками теперь часть поставки — внесите её в карточку цен.'},
  {h:'The price board: $40K\u2013$70K in the US, \u20AC50K\u201375K in Europe, $4 an hour offshore.', d:'Nov 1, 2026 · employer postings + OnlineJobs.ph', map:'A finished AI clip costs about $1\u201311 to make; a human UGC video averages $154. Never quote per clip. Quote the gap.', hRu:'Доска цен: $40K\u2013$70K в США, \u20AC50K\u201375K в Европе, $4 в час офшорно.', dRu:'1 ноября 2026 · вакансии работодателей + OnlineJobs.ph', mapRu:'Готовый AI-клип стоит около $1\u201311 в производстве; видео UGC человека в среднем — $154. Никогда не называйте цену за клип. Называйте цену за разрыв.'},
  {h:'The persona scoreboard did not move.', d:'Nov 2026 · Euronews / VirtualHumans.org', map:'Aitana still grosses her agency about \u20AC3,000 a month \u2014 the best-documented number in the category. If a course sells you the persona seat, ask which of the 214 personas they are.', hRu:'Табло персон не сдвинулось.', dRu:'Ноябрь 2026 · Euronews / VirtualHumans.org', mapRu:'Aitana всё ещё приносит своему агентству около \u20AC3,000 в месяц — лучше всего задокументированное число в категории. Если курс продаёт вам место персоны, спросите, кто они из 214 персон.'}
];

/* ===== Russian (RU) content layer — twins of the blocks above ===== */
PROF_META_RU.aicreator = 'AI-контент-креатор';

Object.assign(DOORS_RU, {
  aimass:'Что делать вместо этого: оставьте процесс, смените продукт. Поставьте настоящее лицо перед ним. Или продайте те же навыки брендам как услугу. Канал платформа может закрыть одной волной проверок — и всё станет нулём. Список клиентов так не исчезает.',
  persona:'Что делать вместо этого: продавайте студию, а не персонажа. Бренды платят агентствам за постройку и ведение AI-персон. Месяцы Aitana по \u20AC3,000 принадлежат агентству за ней. Будьте агентством.',
  aistreamer:'Что делать вместо этого: если вы можете построить AI, вы разработчик. Оценивайте постройку. Если хотите стримить, стримьте как человек. Человек за аватаром — стример, и та карта — карта контент-креатора.',
  aipipeline:'Что делать: вы в месте, где ответ ДА. Сделайте десять работ вашим процессом. Запишите минуты на работу. Ставьте цену против $154, которые бренд платит за видео человека. Ваше лицо — часть, которую нельзя отдать дешёвым работникам в других странах.',
  aiservice:'Что делать: вы в месте, где ответ ДА. Оценивайте разрыв, а не клип. Разрыв — это хуки, варианты и чтение результатов. Продавайте постоянную оплату за месяц (ретейнеры). Цена за клип гоняется за самой дешёвой ценой — $4 в час.'
});

GRIDINFO_RU.aicreator = {head:'Создатель ИИ-контента — это НЕТ. ИИ как ваша команда помощников — это ДА.', short:'Создатель ИИ-контента — это пять разных работ. Каналы без лица — тупик. Выдуманные персонажи в одиночку — плохая ставка. ИИ-стримеры — тоже. Настоящее лицо с ИИ-помощниками — хороший путь. ИИ-видео для брендов — тоже.'};

/* Personalized door steps — RU twins of the gate's stage variants
   (PROF_STEPS.aicreator in v11.js; V11[seat].step for the three seats
   that carry their own). Stored WITHOUT the "First step …:" prefix. */
DOORSTEP_RU.seat.aimass = {
  student:'Не стройте слоп-версию своей идеи. Слоп — значит, шаблонный контент толпой. Если текстовый запрос может её пересобрать, YouTube платит за неё $0. Стройте версию с вашим лицом, вашим голосом или именем клиента на ней.',
  early:'Проверьте всё, что вы опубликовали, против правила YouTube о неаутентичном контенте. Массовый, общий, повторяющийся — точная формулировка. Этот каталог — одна волна применения правил от $0.',
  mid:'Двигайте процесс, а не каталог. Те же инструменты, нацеленные в бренды, платят $40K\u2013$70K на вакансиях агентств. Нацеленные в загрузки, они платят удалениями.',
  senior:'Цельте свои годы в покупателей. Список клиентов переживает удаление канала. Число подписчиков — нет.'
};
DOORSTEP_RU.seat.persona = {
  student:'Если вы любите ремесло персонажей, учите его как навык услуги. Агентства нанимают строителей персон. Аудитории не платят персонам.',
  early:'Считайте честно: в мире существует около 214 задокументированных виртуальных инфлюенсеров. Пока бренд уже не платит вам, персона — расход, а не доход.',
  mid:'Продавайте студию, а не персонажа. Бренды платят за AI-моделей как за услугу. Так агентство Aitana делает свои месяцы по \u20AC3,000.',
  senior:'Ваш актив — это список клиентов за персонажем. Оценивайте его. У самого персонажа второго покупателя нет.'
};
DOORSTEP_RU.seat.aipipeline = {
  student:'Снимите два образца видео для продуктов, которые у вас уже есть. С вашим лицом в них и AI на монтаже. Покупатели проверяют сначала человека.',
  early:'Закройте свои первые две оплаченные поставки. Средняя оплаченная работа UGC — $154. Две законченные поставки бьют любое число подписчиков, когда покупатель вас проверяет.',
  mid:'Добавьте второй язык. Продублируйте ваши лучшие работы — инструменты покрывают 175 языков — и продайте то же лицо на рынок, куда ваши конкуренты войти не могут.',
  senior:'Продавайте суждение, а не клипы. Ваши годы оцениваются как креативное руководство: хуки, тесты и чтение результатов, которые запрос отправить не может.'
};
DOORSTEP_RU.prof.aicreator = {
  student:'Не стройте персону или массовый канал. Стройте навык процесса на вашем собственном лице или для одного локального бренда. Места, которые платят, — это место настоящего лица и место услуги брендам.',
  early:'Отправьте 10 готовых работ вашим процессом и запишите минуты на работу. Ваша скорость — ваше первое удостоверение. Лицензии в этом рынке нет.',
  mid:'Ставьте цену от рынка: ретейнеры, оценённые против среднего $154 за видео человека, никогда не за клип против офшорной доски по $4 в час.',
  senior:'Ваш список клиентов и ваша аудитория — это актив. Оценивайте суждение — хуки, тесты, результаты, — а не рендеры. Счёт за инструменты — $29 в месяц для всех.'
};

Object.assign(BIGGOALS_RU, {
  aimass:'Большая цель: тот же процесс создания видео, но с настоящим лицом или с клиентом, — версия этой работы, которая сохранила оплату.',
  persona:'Большая цель: студия, которой бренды платят за ИИ-персонажей, — доход приносит услуга, а не персонаж.',
  aistreamer:'Большая цель: навыки, за которые платят и без прямого эфира, — то, что вы построили, это программа; продавайте её как программу.',
  aipipeline:'Большая цель: лицо, за которое бренды платят $154 за видео, а команда ИИ-помощников и второй язык умножают результат.',
  aiservice:'Большая цель: список клиентов, которые платят каждый месяц, — ваши верные решения оплачиваются за месяц, а не за один клип.'
});
BIGGOAL_PROF_RU.aicreator = 'Большая цель: искусственный интеллект как ваша команда помощников, а не ваш продукт, — настоящее лицо или ваш собственный список клиентов.';
