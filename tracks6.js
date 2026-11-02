/* Career Glitch — tracks wave 3 (expansion professions, Nov 1 2026).
   PROF_META / SEATINFO / DOORS / GRIDINFO / TRACKS / RESUME_TERMS /
   RADAR + RU twins for professions that no longer fit tracks5.js.
   Loaded by app.html after tracks5.js. */

/* ================= MENTAL HEALTH COUNSELOR =================
   Source: ~/workspace/pathcheck-counselor-pilot/ (44 core clinical
   postings + BLS). Cluster: MENTAL HEALTH COUNSELOR IS A YES. THE
   PLATFORM GIG IS A NO. (Medium). Code word: SESSION. */
PROF_META.counselor = {name:'Mental Health Counselor', kick:'Mental Health Counselor', code:'SESSION', count:44, srcWhat:'real counselor job posts', srcWhatRu:'настоящих вакансий консультантов'};

Object.assign(SEATINFO, {
  groupcns:{prof:'counselor', label:'Licensed counselor — private / group practice', verdict:'YES', conf:'High'},
  agencycns:{prof:'counselor', label:'Licensed counselor — community / agency / clinic', verdict:'YES', conf:'Medium'},
  platform:{prof:'counselor', label:'Counselor on a therapy app (gig work)', verdict:'NO', conf:'Medium'},
  sudcns:{prof:'counselor', label:'Addiction counselor (certificate only)', verdict:'NO', conf:'Medium'},
  associate:{prof:'counselor', label:'Associate counselor (no full license yet)', verdict:'NO', conf:'High'}
});

Object.assign(DOORS, {
  groupcns:'What to do: your job is a YES. Pick one specialty employers ask for. For example: trauma, couples, teens or addiction. Get the pay rules in writing. Make a list of people who send you clients: psychiatrists, doctors, schools, past supervisors.',
  agencycns:'What to do: your job is a YES. Take it for the license years, free supervision or a steady paycheck. Before you sign, read how many billable hours they want. That number, not the salary, is your real week.',
  platform:'What to do instead: use the app as a bridge or side work. Never as your main job. Move your main hours to a group practice or your own practice. There the clients and the rate are yours.',
  sudcns:'What to do instead: do this job and collect experience. Then move up. Go for your state’s licensed addiction level or a counseling master’s. As a first step, it is a good way in. As the last step, it holds you back.',
  associate:'What to do: this job is a way in, but it costs you. You need 2,000–3,000 hours under supervision. Pick a job that gives you that supervision. It should be board-approved, free and in writing. Log your hours every week.'});

GRIDINFO.counselor = {head:'Mental health counselor is a YES. The platform gig is a NO.', short:'“Mental health counselor” is five different jobs. Licensed practice work is a good bet. Agency work is a good bet. The app gig is a bad place to stay. A certificate without a license is a bad place to stay. The associate years are the way in.'};

TRACKS.counselor = [
 {name:'The gate', steps:[
  {id:'cns-g1', t:'First, pick your job on paper. The jobs that pay: licensed work in a group practice, and agency work. The app gig and certificate-only work are the NO jobs.', src:'HR checklist · Part 2, item 1 — The gate', ru:'Сначала выберите вашу работу на бумаге. Платят две: лицензированная работа в групповой практике и работа в агентстве. Работа через приложение и сертификат без лицензии — это NO.', sru:'HR-чек-лист · Часть 2, пункт 1 — Ворота'},
  {id:'cns-g2', t:'Choose a 60-credit master’s degree your state board accepts. CACREP (it checks counseling programs) is the safest choice. Some states only accept CACREP degrees.', src:'HR checklist · Part 2, item 2 — The gate', ru:'Выберите магистратуру на 60 кредитов (credits). Её должен принимать совет вашего штата (board — он выдаёт лицензии). Самый надёжный вариант — CACREP (проверяет программы по консультированию). Некоторые штаты принимают только его дипломы.', sru:'HR-чек-лист · Часть 2, пункт 2 — Ворота'},
  {id:'cns-g3', t:'Pass the exam your state asks for. There are two: the NCE and the NCMHCE. Both are run by NBCC (the national counselor board).', src:'HR checklist · Part 2, item 3 — The gate', ru:'Сдайте экзамен, который требует ваш штат. Их два: NCE (общий экзамен для консультантов) и NCMHCE (экзамен по клинической работе). Оба проводит NBCC (национальный совет консультантов).', sru:'HR-чек-лист · Часть 2, пункт 3 — Ворота'},
  {id:'cns-g4', t:'Plan your supervised years before they start. After the degree, your state wants 2,000–3,000 hours of work under supervision. Know who your approved supervisor will be.', src:'HR checklist · Part 2, item 4 — The gate', ru:'Спланируйте годы под супервизией заранее. После диплома штат требует 2,000–3,000 рабочих часов под супервизией (когда за вашей работой смотрит опытный специалист с лицензией). Заранее знайте, кто будет вашим супервизором.', sru:'HR-чек-лист · Часть 2, пункт 4 — Ворота'},
  {id:'cns-g5', t:'Get supervision in writing before you take an associate job. Ten job posts we checked give it for free. If it’s not written down, you pay the supervisor yourself.', src:'HR checklist · Part 2, item 5 — The gate', ru:'Прежде чем взять работу associate (консультант без полной лицензии), получите обещание супервизии письменно. Десять вакансий, которые мы проверили, дают её бесплатно. Если это не написано, супервизору платите вы сами.', sru:'HR-чек-лист · Часть 2, пункт 5 — Ворота'}
 ]},
 {name:'Proof', steps:[
  {id:'cns-p1', t:'Finish your practice hours while you study. The usual amount: 100 practicum hours and 600 internship hours. These are the first hours toward your license.', src:'HR checklist · Part 2, item 6 — Proof', ru:'Наберите часы практики, пока учитесь. Обычно это 100 часов практикума (первая работа с клиентами под присмотром) и 600 часов интернатуры (длинная практика). Это первые часы для вашей лицензии.', sru:'HR-чек-лист · Часть 2, пункт 6 — Доказательства'},
  {id:'cns-p2', t:'Write down your supervised hours every week. Keep your own copy. Hours you didn’t write down don’t count for the license.', src:'HR checklist · Part 2, item 7 — Proof', ru:'Записывайте часы под супервизией каждую неделю. Храните свою копию записей. Незаписанные часы для лицензии не считаются.', sru:'HR-чек-лист · Часть 2, пункт 7 — Доказательства'},
  {id:'cns-p3', t:'Pick one specialty with a method employers ask for. Job posts name CBT, DBT, EMDR and motivational interviewing. Pick one and really train in it.', src:'HR checklist · Part 2, item 8 — Proof', ru:'Выберите одну специальность с методом, который просят работодатели. В вакансиях пишут CBT (когнитивно-поведенческая терапия), DBT (диалектическая поведенческая терапия), EMDR (работа с травмой через движения глаз) и мотивационное интервью. Выберите один метод и выучите его по-настоящему.', sru:'HR-чек-лист · Часть 2, пункт 8 — Доказательства'},
  {id:'cns-p4', t:'Learn the notes system your employer uses. Job posts we checked name Epic, Netsmart Avatar and AthenaOne. Write notes fast and clean, with AI help if allowed. That saves your evenings.', src:'HR checklist · Part 2, item 9 — Proof', ru:'Выучите программу для записей, которую использует работодатель. В вакансиях мы видели Epic, Netsmart Avatar и AthenaOne. Пишите записи быстро и аккуратно, с помощью AI, если можно. Так вечера останутся свободными.', sru:'HR-чек-лист · Часть 2, пункт 9 — Доказательства'},
  {id:'cns-p5', t:'Get your insurance paperwork ready. Job posts ask for an NPI (your national provider number) and CAQH (a profile insurers check). With these, an employer can bill insurance for your sessions.', src:'HR checklist · Part 2, item 10 — Proof', ru:'Подготовьте документы для страховых компаний. В вакансиях просят NPI (ваш национальный номер специалиста) и CAQH (анкета, которую проверяют страховые). С ними работодатель может получать оплату от страховой за ваши сессии.', sru:'HR-чек-лист · Часть 2, пункт 10 — Доказательства'}
 ]},
 {name:'Get picked', steps:[
  {id:'cns-k1', t:'Choose where to work by how they pay. Get it in writing. It can be salary, pay per client load, or pay per session. The same license pays $43 an hour in one place and $135,000 a year in another.', src:'HR checklist · Part 2, item 11 — Get picked', ru:'Выбирайте работу по тому, как платят. Просите это письменно. Это может быть зарплата, оплата за число клиентов (productivity pay) или за сессию. С той же лицензией платят $43 в час в одном месте и $135,000 в год в другом.', sru:'HR-чек-лист · Часть 2, пункт 11 — Выбор тебя'},
  {id:'cns-k2', t:'Use the Counseling Compact when your state joins. It lets a licensed counselor work in other member states. Eleven states give permission today. 39 states and DC have passed the law.', src:'HR checklist · Part 2, item 12 — Get picked', ru:'Используйте Counseling Compact (договор штатов, который признаёт лицензии друг друга), когда он заработает в вашем штате. С ним можно работать в других штатах-участниках. Сегодня разрешения выдают одиннадцать штатов. Закон приняли 39 штатов и DC.', sru:'HR-чек-лист · Часть 2, пункт 12 — Выбор тебя'},
  {id:'cns-k3', t:'Build a network of people who send you clients. Psychiatrists, family doctors, school counselors and past supervisors send clients to practices. A waiting list comes from people, not ads.', src:'HR checklist · Part 2, item 13 — Get picked', ru:'Соберите людей, которые будут присылать вам клиентов. Это психиатры, семейные врачи, школьные консультанты и бывшие супервизоры. Очередь клиентов создают люди, а не реклама.', sru:'HR-чек-лист · Часть 2, пункт 13 — Выбор тебя'},
  {id:'cns-k4', t:'Check your state’s rules every year. The AI-therapy law and the Compact map both changed in 2025. Now you can aim for a supervisor or clinical lead job. Job posts list these paid roles.', src:'HR checklist · Part 2, item 14 — Get picked', ru:'Проверяйте правила вашего штата каждый год. Закон об AI-терапии и карта Compact изменились в 2025 году. Сейчас можно целиться в супервизора или клинического руководителя. Такие оплачиваемые роли есть в вакансиях.', sru:'HR-чек-лист · Часть 2, пункт 14 — Выбор тебя'}
 ]}
];

Object.assign(RESUME_TERMS, {
  'cns-g2':['cacrep'],
  'cns-g3':['nce','ncmhce','nbcc','national counselor examination'],
  'cns-p3':['cbt','dbt','emdr','motivational interviewing','cognitive behavioral','trauma-informed','trauma informed'],
  'cns-p4':['epic','netsmart','avatar','athenaone','athena','ehr','electronic health record','emr'],
  'cns-p5':['npi','caqh','credentialing','insurance panels','paneled'],
  'cns-k3':['referral','referrals']
});

RADAR.counselor = [
 {h:'Illinois banned therapy done by AI. Nevada did too. Utah made chatbots say they are bots.', d:'May–Aug 2025 · IL IDFPR / NV AB 406 / UT HB 452', map:'Illinois fines go up to $10,000 per violation. Nevada’s go up to $15,000. Now the law protects your license. Is your boss asking you to “supervise” an AI that talks to clients? Ask which state law allows that.', hRu:'Иллинойс запретил терапию от AI. Невада — тоже. Юта обязала чат-ботов говорить, что они боты.', dRu:'Май–август 2025 · IDFPR Иллинойса / AB 406 Невады / HB 452 Юты', mapRu:'Штрафы в Иллинойсе — до $10,000 за нарушение, в Неваде — до $15,000. Теперь закон защищает вашу лицензию. Работодатель просит вас «присматривать» за AI, который говорит с клиентами? Спросите, какой закон штата это разрешает.'},
 {h:'Woebot — the most-studied AI therapist — retired its public app.', d:'Jun 30, 2025 · Woebot Health FAQ', map:'The company moved to selling to health plans and employers. Someone says AI therapists will take your job? Ask why the best-known one left the public market.', hRu:'Woebot — самый изученный AI-терапевт — закрыл своё приложение для всех.', dRu:'30 июня 2025 · FAQ Woebot Health', mapRu:'Компания ушла работать со страховыми и работодателями. Вам говорят, что AI-терапевты заберут вашу работу? Спросите, почему самый известный из них ушёл с открытого рынка.'},
 {h:'The Counseling Compact works — in 11 states, not 39.', d:'Sep 30, 2025 launch · Arizona Board of Behavioral Health Examiners', map:'Thirty-nine states and DC passed the law. Eleven could give permissions by October 2026. Planning a move or online clients in other states? Check that your state actually works, not just signed.', hRu:'Counseling Compact работает — в 11 штатах, а не в 39.', dRu:'Запуск 30 сентября 2025 · Совет поведенческого здоровья Аризоны', mapRu:'Тридцать девять штатов и DC приняли закон. Одиннадцать могли выдавать разрешения к октябрю 2026 года. Планируете переезд или онлайн-клиентов из других штатов? Проверьте, что штат уже работает, а не просто подписал.'},
 {h:'App pay vs job pay: $43–$59 an hour vs $75,000–$135,000 a year.', d:'Nov 1, 2026 · employer postings (see the package log)', map:'Same license, two ways to work. Compare the pay in both before you sign. An app is a bridge, not a career.', hRu:'Оплата в приложении против обычной работы: $43–$59 в час против $75,000–$135,000 в год.', dRu:'1 ноября 2026 · вакансии работодателей (см. журнал пакета)', mapRu:'Та же лицензия, два варианта работы. Сравните оплату в обоих до подписания. Приложение — это мост, а не карьера.'},
 {h:'The associate trap is right there in the job posts. Just read them.', d:'Nov 1, 2026 · Thriveworks / Ellie / Helio postings', map:'Some jobs offer free supervision in writing, with $40,000–$71,000 associate pay. If the post says nothing about supervision, you pay for it yourself. That’s 2,000–3,000 hours with a board-approved supervisor. Never sign without a written answer.', hRu:'Ловушка для associate видна прямо в вакансиях. Нужно только их прочитать.', dRu:'1 ноября 2026 · вакансии Thriveworks / Ellie / Helio', mapRu:'Некоторые работы дают бесплатную супервизию письменно, при оплате associate $40,000–$71,000. Если в вакансии о супервизии ни слова, платите вы сами. Это 2,000–3,000 часов с супервизором, одобренным советом штата. Не подписывайте без письменного ответа.'},
 {h:'AI companions are turning into a lawsuit story, not a therapy story.', d:'Oct 2024 – Jan 2026 · Garcia v. Character Technologies', map:'The family lawsuits settled in January 2026. The company had already stopped open chat for under-18s. The lawsuits and shutdowns hit the unlicensed side. The licensed side is where the jobs are.', hRu:'AI-компаньоны — это теперь история про суды, а не про терапию.', dRu:'Октябрь 2024 – январь 2026 · Garcia против Character Technologies', mapRu:'Семейные иски закрыли мировым соглашением в январе 2026 года. Компания ещё раньше закрыла свободный чат для тех, кому меньше 18. Иски и закрытия бьют по тем, у кого нет лицензии. А вакансии — у тех, у кого она есть.'}
];

/* ===== Mental Health Counselor — Russian (RU) content layer ===== */
PROF_META_RU.counselor = 'Консультант по психическому здоровью';

Object.assign(DOORS_RU, {
  groupcns:'Что делать: ваша работа — YES. Выберите одну специальность, которую ищут работодатели. Например: травма, пары, подростки или зависимости. Получите условия оплаты письменно. Соберите тех, кто будет присылать клиентов: психиатры, врачи, школы, бывшие супервизоры.',
  agencycns:'Что делать: ваша работа — YES. Берите её ради лет до лицензии, бесплатной супервизии или стабильной зарплаты. До подписания узнайте, сколько оплачиваемых часов от вас ждут. Это число, а не зарплата, и есть ваша настоящая неделя.',
  platform:'Что делать вместо этого: держите приложение как мост или подработку. Не как основную работу. Основные часы переносите в групповую практику или свою практику. Там клиенты и ставка — ваши.',
  sudcns:'Что делать вместо этого: работайте здесь и набирайтесь опыта. Потом идите дальше: к лицензии по зависимостям в вашем штате или в магистратуру по консультированию. Для старта это хороший вход. Но если остаться здесь, рост остановится.',
  associate:'Что делать: эта работа — вход, но за него надо заплатить. Нужно 2,000–3,000 часов под супервизией (за вашей работой смотрит опытный специалист с лицензией). Выбирайте работу, где супервизию дают вам. Она должна быть одобрена советом штата (board), бесплатной и письменной. Записывайте часы каждую неделю.'});

GRIDINFO_RU.counselor = {head:'Консультант по психическому здоровью — это ДА. Работа через приложение — это НЕТ.', short:'Консультант по психическому здоровью — это пять разных работ. Лицензированная практика — хороший вариант. Работа в агентстве — хороший вариант. Приложение — плохое место, чтобы остаться. Сертификат без лицензии — тоже. Годы associate (без полной лицензии) — это вход.'};

DOORSTEP_RU.prof.counselor = {
  student:'как студент: до оплаты семестра проверьте, примет ли диплом совет вашего штата. Нужна программа на 60 кредитов (CACREP — самая надёжная). Только с таким дипломом будет лицензия. Диплом, который совет не принимает, — это 40–100+ тысяч долларов впустую.',
  early:'как младший специалист: выбирайте работу по супервизии. Она должна быть одобрена советом, бесплатной и письменной (10 вакансий, которые мы видели, её дают). Записывайте часы каждую неделю. До лицензии — 2,000–3,000 часов. Незаписанные часы не считаются.',
  mid:'лицензия на руках: сравните оплату в двух местах до подписания. Групповая практика платит $75,000–$135,000. Приложения платят $43–$59 в час только за проведённые сессии. Лицензия та же, выбор за вами.',
  senior:'при 5+ годах: следующий шаг — новая роль, а не прибавка. Это клинический супервизор, своя очередь клиентов или своя практика. Compact (договор штатов, работает в 11 штатах) может дать вам больше штатов для работы.'};
DOORSTEP_RU.seat.groupcns = {
  student:'как студент: проходите практикум в групповой практике. Там платят $75,000–$135,000 и берут людей с лицензией и специальностью. А специальность начинается как раз на практикуме.',
  early:'как младший специалист: если можете, работайте associate прямо в групповой практике. Ваши часы под супервизией пойдут в счёт лицензии, которая там нужна.',
  mid:'лицензия на руках: получите условия оплаты письменно. Зарплата или процент от числа клиентов? Что считается оплачиваемым часом? Все групповые практики, которые мы видели, платят по числу клиентов.',
  senior:'при 5+ годах: дальше — своё дело или супервизия. Это своя практика или роль клинического руководителя. Сравните оба варианта с тем, что получаете сейчас.'};
DOORSTEP_RU.seat.agencycns = {
  student:'как студент: практикум в агентстве учит работать с большим потоком клиентов и с кризисами. Именно это агентства ищут в вакансиях. Выбирайте такое место осознанно.',
  early:'как младший специалист: в агентствах супервизию дают надёжнее всего. Например, Helio Health даёт её бесплатно прямо на работе. Подтвердите вашу письменно.',
  mid:'лицензия на руках: сначала смотрите на оплачиваемые часы, потом на зарплату. Одно агентство требует минимум 95 оплачиваемых часов в месяц. Это число и есть ваша работа.',
  senior:'при 5+ годах: опыт в агентстве ведёт к роли руководителя программы или супервизора. Или это ваш переход в практику, где платят больше. Решите, что именно, на бумаге.'};
DOORSTEP_RU.seat.platform = {
  student:'как студент: не стройте учёбу вокруг приложения. Платформам нужна полная лицензия. Тех, кому нужна супервизия, они не берут. Через них начать нельзя.',
  early:'как младший специалист: в приложения вас пока не возьмут. Они отказывают тем, кому нужна супервизия. Проведите эти годы там, где супервизия бесплатная и письменная.',
  mid:'лицензия на руках: если работаете в приложении, ограничьте часы. Это подработка, а не основная работа. Основные часы — там, где клиенты ваши.',
  senior:'при 5+ годах: с вашим опытом ставку назначаете вы. В приложении ставку назначают за вас, за каждый час с клиентом. Посчитайте разницу в долларах до продления договора.'};
DOORSTEP_RU.seat.sudcns = {
  student:'как студент: если зависимости — ваше призвание и денег мало, начните с сертификата. Но сразу решите письменно, куда пойдёте дальше: к лицензии или в магистратуру.',
  early:'в начале: записывайте всё — часы работы с зависимостями под супервизией и опыт лечения. Это ценят программы для следующего шага и работодатели с лицензией.',
  mid:'при 3–5 годах: вы почти у потолка оплаты ($79,886 по вакансиям, которые мы видели). Решение идти дальше теперь стоит около $40K в год. Примите его в этом году.',
  senior:'при 5+ годах: ваш опыт ценен. Станьте супервизором или руководителем программы. Или получите лицензию и перейдите на работу с ней. Не оставайтесь под потолком сертификата.'};
DOORSTEP_RU.seat.associate = {
  student:'как студент: часы практикума (100) и интернатуры (600) — первые записанные часы вашей карьеры. Храните свою копию каждой записи с первого дня.',
  early:'как младший специалист: это ваша работа. Супервизия письменно, часы записаны каждую неделю. Экзамен — как только разрешит штат. Пока нет лицензии, всё остальное неважно.',
  mid:'лицензия на руках: вы уже не associate, но храните записи часов и супервизии. Совет штата или работодатель могут попросить их через годы.',
  senior:'при 5+ годах: станьте супервизором, которого не хватало вам. За супервизию платят — такие вакансии есть. А хороших супервизоров очень мало.'};

Object.assign(BIGGOALS_RU, {
  groupcns:'Большая цель: полная лицензия там, где за неё платят больше всего. Это групповая или частная практика за $75,000–$135,000. Плюс одна специальность, на которую к вам стоит очередь.',
  agencycns:'Большая цель: стабильная работа с лицензией. Это агентство, где вы заранее знаете и принимаете норму часов. Или работа с супервизией, которая доведёт вас до полной лицензии.',
  platform:'Большая цель: ваши собственные часы. Практика или работа в группе, где клиенты и ставка ваши. Приложение — максимум подработка.',
  sudcns:'Большая цель: перейти с сертификата на лицензию. Там ваш опыт с зависимостями оплачивают по $75,000–$135,000.',
  associate:'Большая цель: полная лицензия. Это 2,000–3,000 часов под супервизией, все записаны. И за супервизию вы не платили сами.'
});
BIGGOAL_PROF_RU.counselor = 'Большая цель: полная лицензия и работа, где за неё платят больше всего. Это групповая или частная практика за $75,000–$135,000.';
