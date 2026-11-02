/* Career Glitch — tracks wave 3 (expansion professions, Nov 1 2026).
   PROF_META / SEATINFO / DOORS / GRIDINFO / TRACKS / RESUME_TERMS /
   RADAR + RU twins for professions that no longer fit tracks5.js.
   Loaded by app.html after tracks5.js. */

/* ================= MENTAL HEALTH COUNSELOR =================
   Source: ~/workspace/pathcheck-counselor-pilot/ (44 core clinical
   postings + BLS). Cluster: MENTAL HEALTH COUNSELOR IS A YES. THE
   PLATFORM GIG IS A NO. (Medium). Code word: SESSION. */
PROF_META.counselor = {name:'Mental Health Counselor', kick:'Mental Health Counselor', code:'SESSION', count:44, srcWhat:'live counselor postings', srcWhatRu:'живых вакансий консультантов'};

Object.assign(SEATINFO, {
  groupcns:{prof:'counselor', label:'Licensed counselor — private / group practice', verdict:'YES', conf:'High'},
  agencycns:{prof:'counselor', label:'Licensed counselor — community / agency / clinic', verdict:'YES', conf:'Medium'},
  platform:{prof:'counselor', label:'Teletherapy platform gig counselor', verdict:'NO', conf:'Medium'},
  sudcns:{prof:'counselor', label:'Substance-use counselor (certificate track)', verdict:'NO', conf:'Medium'},
  associate:{prof:'counselor', label:'Pre-licensed associate counselor', verdict:'NO', conf:'High'}
});

Object.assign(DOORS, {
  groupcns:'What to do: you are in a YES seat. Get one specialty with a name employers print — trauma, couples, teens, addiction at the licensed level. Get the pay formula in writing. Build the referral list: psychiatrists, doctors, schools, past supervisors.',
  agencycns:'What to do: you are in a YES seat. Take it for the license years, the free supervision, or the steady paycheck. Read the billable-hours line before you sign — it, not the salary, is your real week.',
  platform:'What to do instead: keep the platform as a bridge or a side caseload — never the building. Move your main hours to a group practice or your own paneled practice, where the client list and the rate are yours.',
  sudcns:'What to do instead: work this seat, bank the experience, and bridge — to your state’s licensed addictions level or into the counseling master’s. As a first step it is a good door. As the last step it caps you.',
  associate:'What to do: this seat is a door, and the door has a toll — 2,000–3,000 supervised hours. Pick the job that pays the toll for you: board-approved supervision, free, in writing, with your hours logged weekly.'});

GRIDINFO.counselor = {head:'Mental health counselor is a YES. The platform gig is a NO.', short:'“Mental health counselor” is five different jobs. Licensed practice work is a good bet. Agency work is a good bet. The platform gig is a bad final stop. The certificate-only stop is a bad final stop. The associate years are the door.'};

TRACKS.counselor = [
 {name:'The gate', steps:[
  {id:'cns-g1', t:'Pick your seat on paper first. The seats that pay are licensed work in a group practice, and agency work. The platform gig and the certificate-only stop are the NO seats.', src:'HR checklist · Part 2, item 1 — The gate', ru:'Сначала выберите ваше место на бумаге. Места, которые платят, — лицензированная работа в групповой практике и работа в агентстве. Платформа как конечная остановка и сертификат без лицензии — места NO.', sru:'HR-чек-лист · Часть 2, пункт 1 — Ворота'},
  {id:'cns-g2', t:'Choose a 60-credit master’s degree your state board accepts. CACREP (the national accreditor for counseling programs) is the safest route. Some states require its degree by name.', src:'HR checklist · Part 2, item 2 — The gate', ru:'Выберите магистратуру на 60 учебных кредитов (credits), которую принимает совет вашего штата (board — совет штата, который выдаёт лицензии). CACREP (национальный орган, который проверяет программы консультирования) — самый безопасный путь. Некоторые штаты требуют его диплом по имени.', sru:'HR-чек-лист · Часть 2, пункт 2 — Ворота'},
  {id:'cns-g3', t:'Pass the exam your state names. The two exams are the NCE and the NCMHCE. Both are run by NBCC, the national board for counselors.', src:'HR checklist · Part 2, item 3 — The gate', ru:'Сдайте экзамен, который называет ваш штат. Два экзамена — это NCE (национальный экзамен консультанта) и NCMHCE (национальный экзамен по клиническому консультированию). Оба проводит NBCC — национальный совет консультантов.', sru:'HR-чек-лист · Часть 2, пункт 3 — Ворота'},
  {id:'cns-g4', t:'Plan the supervised years before you start them. Your state wants 2,000–3,000 work hours under supervision after the degree. Know who your approved supervisor will be.', src:'HR checklist · Part 2, item 4 — The gate', ru:'Спланируйте годы под супервизией до того, как они начнутся. Ваш штат хочет от 2,000 до 3,000 рабочих часов под супервизией (наблюдением лицензированного старшего специалиста) после диплома. Знайте, кто будет вашим одобренным супервизором.', sru:'HR-чек-лист · Часть 2, пункт 4 — Ворота'},
  {id:'cns-g5', t:'Get supervision in writing before you accept an associate job. Ten postings in our scan offer it free. Where it is not written, you pay the supervisor yourself.', src:'HR checklist · Part 2, item 5 — The gate', ru:'Получите супервизию письменно до того, как принять работу младшего специалиста (associate — консультант до полной лицензии). Десять вакансий в нашем скане предлагают её бесплатно. Где это не записано, супервизора оплачиваете вы сами.', sru:'HR-чек-лист · Часть 2, пункт 5 — Ворота'}
 ]},
 {name:'Proof', steps:[
  {id:'cns-p1', t:'Finish your practice hours inside the degree. The standard is 100 practicum hours and 600 internship hours. They are the first hours of your license file.', src:'HR checklist · Part 2, item 6 — Proof', ru:'Закончите часы практики внутри диплома. Стандарт — 100 часов практикума (первой практики с клиентами под наблюдением) и 600 часов интернатуры (длинной практики). Это первые часы вашего лицензионного дела.', sru:'HR-чек-лист · Часть 2, пункт 6 — Доказательства'},
  {id:'cns-p2', t:'Log your supervised hours every week. Keep your own copy of the log. Hours that are not logged do not count toward the license.', src:'HR checklist · Part 2, item 7 — Proof', ru:'Записывайте ваши часы под супервизией каждую неделю. Держите вашу собственную копию журнала. Часы, которые не записаны, не идут в счёт лицензии.', sru:'HR-чек-лист · Часть 2, пункт 7 — Доказательства'},
  {id:'cns-p3', t:'Build one specialty with a method employers name. The postings print the words CBT, DBT, EMDR and motivational interviewing. Pick one and train in it for real.', src:'HR checklist · Part 2, item 8 — Proof', ru:'Стройте одну специальность методом, который называют работодатели. Вакансии печатают слова CBT (когнитивно-поведенческая терапия), DBT (диалектическая поведенческая терапия), EMDR (метод работы с травмой движением глаз) и мотивационное интервью. Выберите один метод и учитесь ему по-настоящему.', sru:'HR-чек-лист · Часть 2, пункт 8 — Доказательства'},
  {id:'cns-p4', t:'Learn the record system your employer names. Epic, Netsmart Avatar and AthenaOne appear in our scan. Fast, clean notes — with AI help where your employer allows it — protect your evenings.', src:'HR checklist · Part 2, item 9 — Proof', ru:'Выучите систему записей, которую называет ваш работодатель. Epic, Netsmart Avatar и AthenaOne встречаются в нашем скане. Быстрые, чистые записи — с помощью AI, где работодатель разрешает, — берегут ваши вечера.', sru:'HR-чек-лист · Часть 2, пункт 9 — Доказательства'},
  {id:'cns-p5', t:'Get your panel paperwork in order. Postings name the NPI (your national provider number) and CAQH (the standard credential file insurers use). Credentialing is what lets an employer bill insurance for your sessions.', src:'HR checklist · Part 2, item 10 — Proof', ru:'Приведите в порядок бумаги для страховых панелей (списков страховых компаний, которые платят за ваши сессии). Вакансии называют NPI (ваш национальный номер поставщика услуг) и CAQH (стандартный файл удостоверений, который используют страховщики). Проверка удостоверений (credentialing) — это то, что позволяет работодателю брать плату со страховки за ваши сессии.', sru:'HR-чек-лист · Часть 2, пункт 10 — Доказательства'}
 ]},
 {name:'Get picked', steps:[
  {id:'cns-k1', t:'Choose your setting by the pay formula, in writing. Salary, productivity pay, or pay per session. The same license is $43 an hour in one building and $135,000 a year in another.', src:'HR checklist · Part 2, item 11 — Get picked', ru:'Выбирайте место работы по формуле оплаты, письменно. Зарплата, оплата за число клиентов (productivity pay) или оплата за сессию. Та же лицензия стоит $43 в час в одном здании и $135,000 в год в другом.', sru:'HR-чек-лист · Часть 2, пункт 11 — Выбор тебя'},
  {id:'cns-k2', t:'Use the Counseling Compact when your state goes live. It is the agreement that lets a licensed counselor work in other member states. Eleven states issue privileges today; 39 states and DC have passed the law.', src:'HR checklist · Part 2, item 12 — Get picked', ru:'Используйте Counseling Compact (соглашение штатов о взаимном признании лицензий консультантов), когда ваш штат заработает в нём. Это соглашение, которое позволяет лицензированному консультанту работать в других штатах-участниках. Одиннадцать штатов выдают разрешения сегодня; 39 штатов и DC приняли закон.', sru:'HR-чек-лист · Часть 2, пункт 12 — Выбор тебя'},
  {id:'cns-k3', t:'Build your referral network. Psychiatrists, primary-care doctors, school counselors and past supervisors are where practice clients come from. A waiting list is built by people, not by ads.', src:'HR checklist · Part 2, item 13 — Get picked', ru:'Стройте вашу сеть направлений. Психиатры, врачи первичного звена, школьные консультанты и прошлые супервизоры — оттуда приходят клиенты практики. Лист ожидания строят люди, а не реклама.', sru:'HR-чек-лист · Часть 2, пункт 13 — Выбор тебя'},
  {id:'cns-k4', t:'Re-check your state every year. The AI-therapy law and the compact map both moved in 2025. In this window your supervisor or clinical-lead promotion is priced — postings list paid supervisory roles.', src:'HR checklist · Part 2, item 14 — Get picked', ru:'Перепроверяйте ваш штат каждый год. Закон об AI-терапии и карта соглашения штатов — обе сдвинулись в 2025 году. В это окно оценивается ваше повышение до супервизора или клинического руководителя — вакансии печатают оплачиваемые роли супервизоров.', sru:'HR-чек-лист · Часть 2, пункт 14 — Выбор тебя'}
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
 {h:'Illinois banned AI-provided therapy. Nevada did too. Utah made chatbots disclose.', d:'May–Aug 2025 · IL IDFPR / NV AB 406 / UT HB 452', map:'Illinois fines run to $10,000 per violation; Nevada’s to $15,000. Your license just got a law behind it — if an employer asks you to “supervise” an AI that talks to clients, ask which state law they are reading.', hRu:'Иллинойс запретил терапию от AI. Невада — тоже. Юта заставила чат-ботов раскрываться.', dRu:'Май–август 2025 · IDFPR Иллинойса / AB 406 Невады / HB 452 Юты', mapRu:'Штрафы Иллинойса идут до $10,000 за нарушение; Невады — до $15,000. У вашей лицензии теперь есть закон за спиной: если работодатель просит вас «супервизировать» AI, который говорит с клиентами, спросите, какой закон штата он читает.'},
 {h:'Woebot — the most-studied AI therapist — retired its public app.', d:'Jun 30, 2025 · Woebot Health FAQ', map:'The company moved to health plans and employers. When someone tells you AI therapists are taking your job, ask why the most credible one left the public market.', hRu:'Woebot — самый изученный AI-терапевт — закрыл своё публичное приложение.', dRu:'30 июня 2025 · FAQ Woebot Health', mapRu:'Компания ушла к медицинским планам и работодателям. Когда кто-то говорит вам, что AI-терапевты забирают вашу работу, спросите, почему самый надёжный из них ушёл с публичного рынка.'},
 {h:'The Counseling Compact is live — in 11 states, not 39.', d:'Sep 30, 2025 launch · Arizona Board of Behavioral Health Examiners', map:'Thirty-nine states and DC passed the law; eleven could issue privileges by October 2026. Check “live”, not “signed up”, before planning a move or a cross-state telehealth caseload.', hRu:'Counseling Compact работает — в 11 штатах, а не в 39.', dRu:'Запуск 30 сентября 2025 · Совет поведенческого здоровья Аризоны', mapRu:'Тридцать девять штатов и DC приняли закон; одиннадцать могли выдавать разрешения к октябрю 2026 года. Проверяйте «работает», а не «подписался», до планирования переезда или удалённой нагрузки через границы штатов.'},
 {h:'The platform pay board: $43–$59 an hour vs $75,000–$135,000 a year.', d:'Nov 1, 2026 · employer postings (see the package log)', map:'Same license, two buildings. Price your license in both before you sign with either — a platform is a bridge, not a building.', hRu:'Доска платформенной оплаты: $43–$59 в час против $75,000–$135,000 в год.', dRu:'1 ноября 2026 · вакансии работодателей (см. журнал пакета)', mapRu:'Та же лицензия, два здания. Оцените вашу лицензию в обоих до подписания с любым, — платформа — это мост, а не здание.'},
 {h:'The associate trap is printed in the postings — if you read them.', d:'Nov 1, 2026 · Thriveworks / Ellie / Helio postings', map:'Free supervision is offered in writing at $40,000–$71,000 associate pay. Where the supervision line is blank, you pay a board-approved supervisor yourself, for 2,000–3,000 hours. Never sign without the answer in writing.', hRu:'Ловушка младшего специалиста напечатана в вакансиях — если вы их читаете.', dRu:'1 ноября 2026 · вакансии Thriveworks / Ellie / Helio', mapRu:'Бесплатная супервизия предлагается письменно при оплате младшего специалиста $40,000–$71,000. Где строка супервизии пуста, вы платите одобренному советом супервизору сами, от 2,000 до 3,000 часов. Никогда не подписывайте без ответа письменно.'},
 {h:'AI companions are becoming a liability story, not a therapy story.', d:'Oct 2024 – Jan 2026 · Garcia v. Character Technologies', map:'The family suits settled in January 2026; the company had already ended open-ended chat for under-18s. The unlicensed layer is where the lawsuits and shutdowns are. The licensed layer is where the postings are.', hRu:'AI-компаньоны становятся историей об ответственности, а не о терапии.', dRu:'Октябрь 2024 – январь 2026 · Garcia против Character Technologies', mapRu:'Семейные иски завершились соглашением в январе 2026 года; компания уже закрыла открытый чат для лиц младше 18 лет. Не-лицензированный слой — там иски и закрытия. Лицензированный слой — там вакансии.'}
];

/* ===== Mental Health Counselor — Russian (RU) content layer ===== */
PROF_META_RU.counselor = 'Консультант по психическому здоровью';

Object.assign(DOORS_RU, {
  groupcns:'Что делать: вы в месте YES. Возьмите одну специальность с именем, которое печатают работодатели, — травма, пары, подростки, зависимости на лицензированном уровне. Получите формулу оплаты письменно. Стройте список направлений: психиатры, врачи, школы, прошлые супервизоры.',
  agencycns:'Что делать: вы в месте YES. Берите его ради лицензионных лет, бесплатной супервизии или стабильной зарплаты. Читайте строку об оплачиваемых часах до подписания — она, а не зарплата, и есть ваша настоящая неделя.',
  platform:'Что делать вместо этого: держите платформу как мост или дополнительную нагрузку — никогда как здание. Переносите главные часы в групповую практику или вашу собственную практику со страховыми панелями (списками страховых компаний, которые платят за ваши сессии), где список клиентов и ставка — ваши.',
  sudcns:'Что делать вместо этого: работайте на этом месте, копите опыт и идите через мост — к лицензированному уровню по зависимостям в вашем штате или в магистратуру по консультированию. Как первый шаг это хорошая дверь. Как последний шаг она вас ограничивает.',
  associate:'Что делать: это место — дверь, и у двери есть пошлина — от 2,000 до 3,000 часов под супервизией (наблюдением лицензированного старшего специалиста). Выбирайте работу, которая платит пошлину за вас: супервизия, одобренная советом штата (board), бесплатно, письменно, с записью ваших часов каждую неделю.'});

GRIDINFO_RU.counselor = {head:'Консультант по психическому здоровью — это ДА. Работа через платформу — это НЕТ.', short:'Консультант по психическому здоровью — это пять разных работ. Лицензированная практика — хороший путь. Работа в агентстве — хороший путь. Платформа как конечная остановка — плохой путь. Сертификат без лицензии как конечная остановка — тоже. Годы младшего специалиста (associate) — это дверь.'};

DOORSTEP_RU.prof.counselor = {
  student:'как студент: проверьте диплом по совету вашего штата до оплаты следующего семестра — программа на 60 кредитов, которую принимает совет (аккредитация CACREP — самая безопасная), и есть лицензия; диплом, который совет не принимает, — это 40–100+ тысяч долларов украшения.',
  early:'как младший специалист: выбирайте работу по строке супервизии — супервизия, одобренная советом, бесплатно и письменно (10 вакансий в нашем скане предлагают её), и ваши часы записаны каждую неделю. Лицензия — в 2,000–3,000 часах от вас; незаписанные часы не считаются.',
  mid:'лицензия на руках: оцените лицензию в обоих зданиях до подписания — групповая практика публикует $75,000–$135,000, платформы публикуют $43–$59 в час только за живые сессии. Та же лицензия, ваш выбор здания.',
  senior:'при 5+ годах: ваше следующее повышение — это роль, а не прибавка, — клинический супервизор, свой лист ожидания по специальности или собственная практика со страховыми панелями. Соглашение штатов (11 штатов работают) может расширить вашу карту.'};
DOORSTEP_RU.seat.groupcns = {
  student:'как студент: цельте практикум в место групповой практики — место, которое платит $75,000–$135,000, нанимает лицензию плюс специальность, а специальность начинается именно на практикуме.',
  early:'как младший специалист: если можете, берите работу младшего специалиста внутри групповой практики — то же здание, и ваши часы под супервизией идут в счёт лицензии, которую требует это место.',
  mid:'лицензия на руках: получите формулу оплаты письменно — зарплата или доля от числа клиентов, и что считается оплачиваемым часом. Каждая вакансия групповой практики в нашем скане платит по числу клиентов.',
  senior:'при 5+ годах: повышение — это собственность или супервизия: собственная практика со страховыми панелями или роль клинического руководителя. Оцените оба варианта против вашей текущей доли.'};
DOORSTEP_RU.seat.agencycns = {
  student:'как студент: места практикума в агентствах учат объёму и кризисной работе — двум вещам, по которым отбирают вакансии агентств. Выбирайте такое место осознанно, а не случайно.',
  early:'как младший специалист: агентства — самое надёжное место по супервизии: Helio Health даёт супервизию для лицензии бесплатно внутри работы. Подтвердите вашу письменно.',
  mid:'лицензия на руках: читайте строку оплачиваемых часов до строки зарплаты — одно агентство печатает не менее 95 оплачиваемых часов в месяц. Это число и есть описание вашей работы.',
  senior:'при 5+ годах: стаж в агентстве покупает роли руководителя программы и супервизора — или это ваш выход в оплату практики. Решите, что именно, на бумаге.'};
DOORSTEP_RU.seat.platform = {
  student:'как студент: не стройте план диплома вокруг приложения — платформам нужна полная лицензия, и они отказывают всем, кому ещё нужна супервизия. Эта работа не может быть вашим входом.',
  early:'как младший специалист: дверь платформы сегодня для вас закрыта — её вакансия отказывает клиницистам, которым требуется супервизия. Проведите эти годы там, где супервизия бесплатна и записана.',
  mid:'лицензия на руках: если берёте часы на платформе, ограничивайте их — дополнительная нагрузка, никогда не здание. Ваши главные часы принадлежат месту, где список клиентов — ваш.',
  senior:'при 5+ годах: ваши годы стоят ставки, которую назначаете вы. На платформе ставку назначают за вас, за живой час. Один раз оцените разницу в долларах до продления.'};
DOORSTEP_RU.seat.sudcns = {
  student:'как студент: если работа с зависимостями — призвание, входите через сертификат, когда деньги впритык, — и решите сейчас, письменно, что мост (лицензированный уровень или магистратура) — часть плана.',
  early:'в начале: записывайте всё — часы по зависимостям под супервизией и опыт лечения; это валюта, которую считают программы моста и лицензированные работодатели.',
  mid:'при 3–5 годах: вы близко к опубликованному потолку этого места ($79,886 в нашем скане). Решение о мосте теперь стоит примерно $40K в год — примите его в этом году.',
  senior:'при 5+ годах: ваш опыт — актив: оцените его как супервизора или руководителя программы, или перенесите через мост на лицензированное место. Не давайте ему сидеть под потолком сертификата.'};
DOORSTEP_RU.seat.associate = {
  student:'как студент: ваши часы практикума (100) и интернатуры (600) — первые записанные часы вашей карьеры: держите собственную копию каждого журнала с первого дня.',
  early:'как младший специалист: это ваше место. Супервизия письменно, часы записаны каждую неделю, экзамен — как только позволит ваш штат. Всё остальное — шум, пока лицензия не на руках.',
  mid:'лицензия на руках: вы покинули это место — всё равно храните журналы часов и записи супервизии. Советы и работодатели могут попросить их годы спустя.',
  senior:'при 5+ годах: станьте супервизором, который был нужен вам, — оплачиваемые роли супервизоров публикуются на этом рынке, а хорошая супервизия — самая дефицитная вещь в нём.'};

Object.assign(BIGGOALS_RU, {
  groupcns:'Большая цель: полная лицензия, проданная там, где она оценивается выше всего, — групповая или частная практика по $75,000–$135,000, с одной специальностью, которая заполняет лист ожидания.',
  agencycns:'Большая цель: стабильное лицензированное место — оплата агентства с квотой, прочитанной и принятой осознанно, или место с супервизией, которое доводит вас до полной лицензии.',
  platform:'Большая цель: часы, которые принадлежат вам, — практика или место в группе, где список клиентов и ставка ваши, а платформа остаётся, если вообще остаётся, как дополнительная нагрузка.',
  sudcns:'Большая цель: через мост — от места с сертификатом к лицензированному уровню, где ваш опыт с зависимостями наконец встречает вилки $75,000–$135,000.',
  associate:'Большая цель: полная лицензия — от 2,000 до 3,000 часов под супервизией, записанных, с супервизией, которую вам не пришлось покупать.'
});
BIGGOAL_PROF_RU.counselor = 'Большая цель: полная лицензия, на месте, которое оценивает её выше всего, — групповая или частная практика по $75,000–$135,000.';
