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
  aimass:{prof:'aicreator', label:'Faceless channel with mass AI videos', verdict:'NO', conf:'High'},
  persona:{prof:'aicreator', label:'AI influencer / virtual persona', verdict:'NO as a plan', conf:'Medium'},
  aistreamer:{prof:'aicreator', label:'AI streamer / AI VTuber', verdict:'NO as a plan', conf:'Medium'},
  aipipeline:{prof:'aicreator', label:'Real face, AI helpers', verdict:'YES', conf:'Medium'},
  aiservice:{prof:'aicreator', label:'AI video for brands', verdict:'YES', conf:'Medium'}
});

Object.assign(DOORS, {
  aimass:'What to do instead: keep your AI workflow, change what you sell. Put a real face in front. Or sell the same skills to brands. Sadly, one platform check can close a channel overnight. A client list doesn\'t vanish like that.',
  persona:'What to do instead: sell the studio, not the character. Brands pay agencies to make and run AI characters. Aitana’s €3,000 a month goes to her agency. Be the agency.',
  aistreamer:'What to do instead: if you can build the AI, you\'re a developer. Charge for building it. If you want to stream, stream as yourself. A person behind an avatar is a streamer. See the Content Creator map for that.',
  aipipeline:'What to do: this job is a YES. Make ten videos with your AI workflow. Write down the minutes each one took. Compare your price to the $154 a brand pays for a human video. No one can replace your face with cheap labor.',
  aiservice:'What to do: this job is a YES. Charge for your extra value, not per clip. That means hooks, versions and reading the results. Sell monthly deals. Per-clip pricing loses to people who charge $4 an hour.'
});

GRIDINFO.aicreator = {head:'AI content creator is a NO. AI as your team of helpers is a YES.', short:'“AI content creator” is five different jobs. Faceless AI channels are a dead end. Virtual personas are a bad bet if you do it alone. AI streamers are a bad bet as a plan. A real face with AI helpers is a good bet. AI video sold to brands is a good bet.'};

/* ================= AI CONTENT CREATOR TRACK (13 steps) ================= */
TRACKS.aicreator = [
  {name:'The gate', steps:[
    {id:'aic-g1', t:'First, pick your job on paper. Two jobs pay: a real face with AI helpers, and AI video for brands. AI characters, mass channels and solo AI streamers are a NO.', src:'HR checklist · Part 2, item 1 — The gate', ru:'Сначала выберите работу на бумаге. Платят две: настоящее лицо с AI-помощниками и AI-видео для брендов. Выдуманные персонажи, массовые каналы и AI-стримеры в одиночку — это NO.', sru:'HR-чек-лист · Часть 2, пункт 1 — Ворота'},
    {id:'aic-g2', t:'Learn the AI label rules before your first post. YouTube has a button to mark realistic AI content. TikTok finds and labels AI content itself. Meta marks it “AI info”. Every platform punishes realistic AI with no label.', src:'HR checklist · Part 2, item 2 — The gate', ru:'Узнайте правила AI-пометок до первой публикации. У YouTube есть кнопка, чтобы отметить реалистичный AI-контент. TikTok сам находит и помечает AI. Meta ставит «AI info». Реалистичный AI без пометки наказывает каждая платформа.', sru:'HR-чек-лист · Часть 2, пункт 2 — Ворота'},
    {id:'aic-g3', t:'Learn the FTC (US consumer protection agency) rule by heart. Your AI can present, show and entertain. It can\'t review a product it never used. Fake AI reviews are not allowed, and each one can bring a fine. Stay honest and you\'re safe.', src:'HR checklist · Part 2, item 3 — The gate', ru:'Запомните правило FTC (американского ведомства по защите покупателей). Ваш AI может рассказывать, показывать и развлекать. Но не может хвалить товар, которым не пользовался. Фейковые AI-отзывы запрещены, за каждый — штраф. Будьте честны — и всё будет хорошо.', sru:'HR-чек-лист · Часть 2, пункт 3 — Ворота'},
    {id:'aic-g4', t:'Pick your tools once. One tool to generate. One editor. One voice tool. About $29–60 a month in total. Tools are not the skill. No need to keep shopping for new ones.', src:'HR checklist · Part 2, item 4 — The gate', ru:'Выберите инструменты один раз. Один для генерации. Один редактор. Один для голоса. Всего около $29–60 в месяц. Инструменты — это не навык. Новые искать не нужно.', sru:'HR-чек-лист · Часть 2, пункт 4 — Ворота'}
  ]},
  {name:'Proof', steps:[
    {id:'aic-p1', t:'Make 10 finished videos with your AI workflow. Write down how many minutes each took. Your speed is the first line of your price list.', src:'HR checklist · Part 2, item 5 — Proof', ru:'Сделайте 10 готовых роликов с вашими AI-инструментами. Запишите, сколько минут ушло на каждый. Ваша скорость — первая строка вашего прайса.', sru:'HR-чек-лист · Часть 2, пункт 5 — Доказательства'},
    {id:'aic-p2', t:'Dub yourself into a second language with the same tools. They cover 175 languages and dialects. One face, two markets. That\'s your big edge in this job.', src:'HR checklist · Part 2, item 6 — Proof', ru:'Переозвучьте себя на второй язык теми же инструментами. Они знают 175 языков и диалектов. Одно лицо — два рынка. Это ваше главное преимущество на этой работе.', sru:'HR-чек-лист · Часть 2, пункт 6 — Доказательства'},
    {id:'aic-p3', t:'Make a one-page price list. Base it on two real numbers. A brand pays $154 for a human video. A raw AI clip costs about $1–11 to make. Charge for what\'s in between: taste, volume, speed.', src:'HR checklist · Part 2, item 7 — Proof', ru:'Сделайте прайс на одну страницу. Опирайтесь на две настоящие цифры. Бренд платит $154 за видео с человеком. Сырой AI-ролик стоит около $1–11. Берите деньги за то, что между ними: вкус, объём, скорость.', sru:'HR-чек-лист · Часть 2, пункт 7 — Доказательства'},
    {id:'aic-p4', t:'Get two paying clients, or two paid brand jobs. You can do it! You can do it! In this field, paid work is your only proof. There\'s no license, no union, no official board.', src:'HR checklist · Part 2, item 8 — Proof', ru:'Найдите двух платящих клиентов или сделайте два оплаченных заказа для брендов. У вас получится! У вас получится! Здесь оплаченная работа — ваше единственное доказательство. Нет ни лицензии, ни профсоюза, ни официального совета.', sru:'HR-чек-лист · Часть 2, пункт 8 — Доказательства'},
    {id:'aic-p5', t:'Keep a cheat sheet of AI label rules for each platform you use. What needs a label, and where. If your clients advertise in New York, ads with an AI actor need a label by law since June 2026.', src:'HR checklist · Part 2, item 9 — Proof', ru:'Ведите шпаргалку по правилам AI-пометок для каждой платформы. Что надо помечать и где. Если ваши клиенты дают рекламу в Нью-Йорке, реклама с AI-актёром по закону требует пометки с июня 2026.', sru:'HR-чек-лист · Часть 2, пункт 9 — Доказательства'}
  ]},
  {name:'Get picked', steps:[
    {id:'aic-k1', t:'Sell your extra value, not the tool. Ten tested hooks for the price of one filmed video. Brands buy tests and results. They never buy “AI content”.', src:'HR checklist · Part 2, item 10 — Get picked', ru:'Продавайте свою пользу, а не инструмент. Десять проверенных хуков по цене одного снятого видео. Бренды покупают тесты и результаты. «AI-контент» они не покупают никогда.', sru:'HR-чек-лист · Часть 2, пункт 10 — Выбор тебя'},
    {id:'aic-k2', t:'Set prices by the market, never per clip. A job site for cheap foreign workers lists this job at $4 an hour. Sell only monthly deals and packages. Racing on per-video price ends at $1.', src:'HR checklist · Part 2, item 11 — Get picked', ru:'Ставьте цену по рынку, никогда — за ролик. На сайте с дешёвыми работниками из других стран эта работа стоит $4 в час. Продавайте только помесячно и пакетами. Гонка цен за ролик заканчивается на $1.', sru:'HR-чек-лист · Часть 2, пункт 11 — Выбор тебя'},
    {id:'aic-k3', t:'Build things you own. A client list. An email list. Fans who follow you, not the tool. Tool prices and platform rules change every quarter. Only what you own keeps growing.', src:'HR checklist · Part 2, item 12 — Get picked', ru:'Стройте то, что принадлежит вам. Список клиентов. Список email. Аудиторию, которая идёт за вами, а не за инструментом. Цены и правила платформ меняются каждый квартал. Растёт только то, что ваше.', sru:'HR-чек-лист · Часть 2, пункт 12 — Выбор тебя'},
    {id:'aic-k4', t:'Check again every quarter. Tool prices. Label rules. And where your money comes from: clients or platforms. These rules are from 2026, and they will change.', src:'HR checklist · Part 2, item 13 — Get picked', ru:'Проверяйте каждый квартал. Цены инструментов. Правила пометок. И откуда ваши деньги: от клиентов или от платформ. Эти правила — 2026 года, и они изменятся.', sru:'HR-чек-лист · Часть 2, пункт 13 — Выбор тебя'}
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
  {h:'TikTok has labeled over 3 billion AI videos. Viewers may soon get a switch to see less.', d:'Jul 2026 · TikTok Newsroom', map:'TikTok\'s “see less AI” setting in Manage Topics is still a test. Plan as if it will launch. So make videos people want to watch, even when they could turn AI off.', hRu:'TikTok пометил уже больше 3 миллиардов AI-видео. Скоро зрители смогут их убавить.', dRu:'Июль 2026 · TikTok Newsroom', mapRu:'Настройка «меньше AI» в Manage Topics пока тестируется. Считайте, что её запустят. Поэтому делайте ролики, которые хочется смотреть, даже когда AI можно отключить.'},
  {h:'YouTube’s crackdown year: 35 million subscribers deleted. Then the biggest trailer channels went too.', d:'Dec 2025 \u2013 Jan 2026 · Deadline / The Next Web', map:'Screen Culture and KH Studio were shut down even after fixing their labels once. Here, your channel is not what you own. Your client list and your audience are.', hRu:'Год, когда YouTube взялся за правила: удалено 35 миллионов подписчиков. Потом — крупнейшие каналы с трейлерами.', dRu:'Декабрь 2025 \u2013 январь 2026 · Deadline / The Next Web', mapRu:'Screen Culture и KH Studio закрыли, хотя они один раз исправили пометки. Здесь канал вам не принадлежит. Ваше — это список клиентов и ваша аудитория.'},
  {h:'TikTok is testing detection for \u201Caccounts dedicated to posting AI-generated spam.\u201D', d:'Jul 2026 · TikTok Newsroom', map:'That\'s the mass-channel business, in TikTok’s own words. If you post like that, it\'s time to change course — add your face or sell to brands.', hRu:'TikTok учится находить «аккаунты, которые только и делают, что постят AI-спам».', dRu:'Июль 2026 · TikTok Newsroom', mapRu:'Это и есть бизнес массовых каналов — словами самой платформы. Если вы постите так же, пора менять курс — добавьте своё лицо или работайте с брендами.'},
  {h:'New York’s law on AI actors in ads is now in force.', d:'Jun 9, 2026 · NY GBL \u00A7396-b', map:'Ads with an AI actor need a clear label. If you sell AI video to brands, labels are now part of the job. Put them in your price list.', hRu:'В Нью-Йорке вступил в силу закон об AI-актёрах в рекламе.', dRu:'9 июня 2026 · NY GBL \u00A7396-b', mapRu:'Реклама с AI-актёром должна быть заметно помечена. Если вы продаёте AI-видео брендам, пометки теперь — часть работы. Внесите их в прайс.'},
  {h:'What it pays: $40K–$70K in the US, €50K–75K in Europe, $4 an hour in cheap countries.', d:'Nov 1, 2026 · employer postings + OnlineJobs.ph', map:'A finished AI clip costs about $1–11 to make. A human UGC (customer-style) video costs $154 on average. Never price per clip. Charge for your extra value.', hRu:'Сколько платят: $40K–$70K в США, €50K–75K в Европе, $4 в час в дешёвых странах.', dRu:'1 ноября 2026 · вакансии работодателей + OnlineJobs.ph', mapRu:'Готовый AI-ролик стоит около $1–11. Видео UGC (как от обычного покупателя) с человеком — в среднем $154. Никогда не ставьте цену за ролик. Берите за свою пользу.'},
  {h:'AI characters still aren\'t making more money.', d:'Nov 2026 · Euronews / VirtualHumans.org', map:'Aitana still earns her agency about €3,000 a month. That\'s the best-proven number for AI characters. If a course sells you this job, ask: which of the 214 characters are they?', hRu:'Выдуманные AI-персонажи больше зарабатывать не стали.', dRu:'Ноябрь 2026 · Euronews / VirtualHumans.org', mapRu:'Aitana всё ещё приносит агентству около €3,000 в месяц. Это самая надёжная цифра по AI-персонажам. Если курс продаёт вам эту работу, спросите: кто из 214 персонажей — они?'}
];

/* ===== Russian (RU) content layer — twins of the blocks above ===== */
PROF_META_RU.aicreator = 'AI-контент-креатор';

Object.assign(DOORS_RU, {
  aimass:'Что делать вместо этого: оставьте свои AI-инструменты, но продавайте другое. Добавьте настоящее лицо. Или продавайте те же навыки брендам. К сожалению, одна проверка платформы может закрыть канал. Список клиентов так не пропадёт.',
  persona:'Что делать вместо этого: продавайте студию, а не персонажа. Бренды платят агентствам, чтобы те делали и вели AI-персонажей. Деньги Aitana — €3,000 в месяц — получает её агентство. Станьте агентством.',
  aistreamer:'Что делать вместо этого: если вы умеете делать AI, вы разработчик. Берите деньги за разработку. Хотите стримить — стримьте как человек. Человек за аватаром — обычный стример. Это карта контент-креатора.',
  aipipeline:'Что делать: здесь ответ ДА. Сделайте десять роликов с вашими AI-инструментами. Запишите минуты на каждый. Сравните цену с $154, которые бренд платит за видео с человеком. Ваше лицо никто дешевле не заменит.',
  aiservice:'Что делать: здесь ответ ДА. Берите деньги за свою пользу, а не за ролик. Польза — это хуки, варианты и разбор результатов. Продавайте помесячную работу. При цене за ролик вы конкурируете с теми, кто берёт $4 в час.'
});

GRIDINFO_RU.aicreator = {head:'Создатель ИИ-контента — это НЕТ. ИИ как ваша команда помощников — это ДА.', short:'Создатель ИИ-контента — это пять разных работ. Каналы без лица — тупик. Выдуманные персонажи в одиночку — плохая ставка. ИИ-стримеры — тоже. Настоящее лицо с ИИ-помощниками — хороший путь. ИИ-видео для брендов — тоже.'};

/* Personalized door steps — RU twins of the gate's stage variants
   (PROF_STEPS.aicreator in v11.js; V11[seat].step for the three seats
   that carry their own). Stored WITHOUT the "First step …:" prefix. */
DOORSTEP_RU.seat.aimass = {
  student:'Не делайте дешёвую штамповку своей идеи. Если текстовый запрос может её повторить, YouTube платит за неё $0. Делайте версию с вашим лицом, голосом или именем клиента.',
  early:'Проверьте все свои ролики по правилу YouTube о «неоригинальном контенте». Там сказано: массовый, шаблонный, повторяющийся. Такие ролики одна проверка может обнулить до $0.',
  mid:'Развивайте навык, а не количество роликов. Те же инструменты для брендов приносят $40K–$70K в агентствах. Для загрузок на канал они приносят удаления.',
  senior:'Продавайте свой опыт покупателям. Список клиентов переживёт удаление канала. Подписчики — нет.'
};
DOORSTEP_RU.seat.persona = {
  student:'Любите делать персонажей? Учитесь этому как услуге. Агентства нанимают тех, кто их делает. Зрители персонажам не платят.',
  early:'Посчитайте честно: в мире около 214 известных виртуальных инфлюенсеров. Пока бренд вам не платит, персонаж — это расход, а не доход.',
  mid:'Продавайте студию, а не персонажа. Бренды платят за AI-моделей как за услугу. Так агентство Aitana и получает €3,000 в месяц.',
  senior:'Ваша ценность — список клиентов, а не персонаж. Его и продавайте. Сам персонаж, увы, другим не нужен.'
};
DOORSTEP_RU.seat.aipipeline = {
  student:'Снимите два пробных ролика про товары, которые у вас уже есть. Вы в кадре, AI — на монтаже. Покупатели сначала смотрят на человека.',
  early:'Сделайте первые два оплаченных заказа. Средний оплаченный UGC-ролик — $154. Когда вас проверяют, два готовых заказа важнее любых подписчиков.',
  mid:'Добавьте второй язык. Переозвучьте лучшие ролики — инструменты знают 175 языков. Продайте своё лицо на рынке, куда конкуренты не могут попасть.',
  senior:'Продавайте свой вкус, а не ролики. Ваш опыт — это креативное руководство: хуки, тесты и разбор результатов. Запрос в AI такого не сделает.'
};
DOORSTEP_RU.prof.aicreator = {
  student:'Не делайте персонажа или массовый канал. Учитесь работать с AI на своём лице или для одного местного бренда. Платят только за работу с настоящим лицом и за услуги брендам.',
  early:'Сделайте 10 готовых роликов с AI-инструментами и запишите минуты на каждый. Ваша скорость — ваше первое доказательство. Лицензии здесь нет.',
  mid:'Ставьте цену по рынку: помесячно, сравнивая со средними $154 за видео с человеком. Никогда не за ролик, как на сайтах, где платят $4 в час.',
  senior:'Ваш список клиентов и аудитория — вот что ценно. Берите деньги за вкус — хуки, тесты, результаты, — а не за готовые ролики. Инструменты стоят всем одинаково — $29 в месяц.'
};

Object.assign(BIGGOALS_RU, {
  aimass:'Большая цель: те же AI-инструменты, но с вашим лицом или для клиента. За такую работу всё ещё платят.',
  persona:'Большая цель: студия, которой бренды платят за ИИ-персонажей, — доход приносит услуга, а не персонаж.',
  aistreamer:'Большая цель: навыки, за которые платят и без эфира. Вы сделали программу — продавайте её как программу.',
  aipipeline:'Большая цель: ваше лицо, за которое бренды платят $154 за ролик. AI-помощники и второй язык дают больше заказов.',
  aiservice:'Большая цель: клиенты, которые платят каждый месяц. Вам платят за ваши решения помесячно, а не за один ролик.'
});
BIGGOAL_PROF_RU.aicreator = 'Большая цель: AI — ваша команда помощников, а не ваш товар. Плюс настоящее лицо или свой список клиентов.';
