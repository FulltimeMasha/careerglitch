/* ===== Quest detail content — expansion wave 2 (Nov 1, 2026).
   Same QUEST_DETAILS shape as questdetails.js (the quest-fix
   build's format): {how[], howRu[]} keyed by quest id — the
   plain-words micro-steps under "What to do" in the quest sheet. ===== */
var QUEST_DETAILS = (typeof QUEST_DETAILS !== "undefined" && QUEST_DETAILS) || {};
Object.assign(QUEST_DETAILS, {
'healthadmin-q1':{how:['Read the four job names in the table above.','Pick the one whose daily work sounds like yours. Or like the work you want.','Write it as one full sentence: "My job is ___."'],howRu:['Прочитайте названия четырёх работ в таблице выше.','Выберите ту, где каждый день похож на ваш. Или на работу, которую вы хотите.','Запишите одним полным предложением: «Моя работа — ___».']},
 'healthadmin-q2':{how:['Search a job site with the exact job name. Use "practice administrator", not "healthcare admin".','Open the first job post that shows pay.','Save the pay line word for word. That\'s what your job pays today.'],howRu:['Ищите на сайте вакансий точное название работы. Пишите «practice administrator», а не «healthcare admin».','Откройте первую вакансию, где указана зарплата.','Сохраните строку с зарплатой слово в слово. Столько сейчас платят на вашей работе.']},
 'healthadmin-q3':{how:['If your job is in nursing homes: find your state board\'s page for nursing home administrators.','If it\'s a hospital or clinic: open the FACHE or CMPE requirements page.','Write down the one thing you don\'t have yet. That\'s your next goal!'],howRu:['Если ваша работа — дома престарелых: найдите страницу вашего штата для их администраторов.','Если это больница или клиника: откройте страницу требований FACHE или CMPE.','Запишите одно требование, которого у вас пока нет. Это ваша следующая цель!']},
 'healthadmin-q4':{how:['Open Epic\'s page for health systems. The link is in step had-g4.','Find the part about revenue cycle (how a clinic gets paid).','List the tasks it names: scheduling, checking insurance, billing, follow-up.','These are paperwork tasks. If this is your whole day, software is taking over your job. Time to grow past it.'],howRu:['Откройте страницу Epic для больниц. Ссылка — в шаге had-g4.','Найдите часть про revenue cycle (как клиника получает деньги).','Выпишите задачи оттуда: расписание, проверка страховки, счета, звонки по отказам.','Это бумажная работа. Если весь ваш день такой — программы забирают эту работу. Пора расти дальше.']},
 'healthadmin-q5':{how:['Think of the biggest budget you\'ve worked with: a department, a clinic, a program.','Write its size. Add one line you can explain: rent, staff, supplies.','No budget yet? That\'s OK. Take one line from any clinic budget and learn what\'s in it.'],howRu:['Вспомните самый большой бюджет, с которым вы работали: отдел, клиника, программа.','Запишите его размер. И одну статью, которую можете объяснить: аренда, персонал, материалы.','Бюджета пока не было? Ничего страшного. Возьмите одну статью любого бюджета клиники и разберитесь, из чего она.']},
 'healthadmin-q6':{how:['Use the resume upload on this page.','The page marks words it finds: systems, certificates, budget work.','Confirm one mark that\'s true. It becomes proof on your path.'],howRu:['Загрузите резюме на этой странице.','Страница отметит слова, которые найдёт: системы, сертификаты, работу с бюджетом.','Подтвердите одну правдивую отметку. Она станет доказательством на вашем пути.']},
 'healthadmin-q7':{how:['Scroll to today\'s radar news under your path.','Read one item and check its date.','Say in one sentence what it changes for your job. Or that it changes nothing.'],howRu:['Прокрутите к сегодняшней новости радара под вашим путём.','Прочитайте один пункт и проверьте дату.','Скажите одним предложением, что он меняет для вашей работы. Или что ничего не меняет.']},
 'healthadmin-q8':{how:['Open your result card.','Send it to one person whose path looks like yours.','Sharing unlocks your full report. And it gives your friend a heads-up they really need.'],howRu:['Откройте карточку с вашим результатом.','Отправьте её одному человеку, чей путь похож на ваш.','Когда поделитесь, откроется полный отчёт. А другу это важное предупреждение.']},
 'healthadmin-q9':{how:['Pick one task you do by hand again and again.','Start a timer. Do the task once, the normal way.','Write down the minutes. Multiply by how often you do it in a week.','Tools are priced against this number. It\'s also time you could spend leading the work instead.'],howRu:['Выберите одну задачу, которую вы снова и снова делаете руками.','Включите таймер. Сделайте задачу один раз, обычным способом.','Запишите минуты. Умножьте на то, сколько раз в неделю вы это делаете.','С этим числом сравнивают цену программ. И это время, которое вы могли бы тратить на управление, а не на ручную работу.']},
 'healthadmin-q10':{how:['Open the BLS page for medical and health services managers. The link is in step had-g1.','Find the median pay and the growth number.','Write one sentence: what +24.2% means for your job, not just the title.'],howRu:['Откройте страницу BLS о руководителях в медицине. Ссылка — в шаге had-g1.','Найдите медианную зарплату и цифру роста.','Напишите одно предложение: что +24,2% значит для вашей работы, а не просто для названия.']}
});

Object.assign(QUEST_DETAILS, {
'datascientist-q1':{how:['Open the four jobs on your result card','Mark the one your degree and years already fit','Write its name in one line. Keep it where you work'], howRu:['Откройте четыре работы на карточке с результатом','Отметьте ту, к которой уже подходят ваш диплом и стаж','Запишите её название одной строкой. Держите там, где работаете']},
'datascientist-q2':{how:['Search the exact job name, not just “data scientist”','Read the degree line in each job post, word for word','Write down the count. It tells you if you need another degree'], howRu:['Ищите точное название работы, а не просто «data scientist»','В каждой вакансии прочитайте, какой диплом нужен, слово в слово','Запишите итог. Он покажет, нужен ли вам ещё диплом']},
'datascientist-q3':{how:['Pick a question a real manager would ask','Write the SELECT, the filter and the grouping by hand (SQL parts)','When done, test it once on a real database'], howRu:['Выберите вопрос, который задал бы настоящий менеджер','Напишите от руки SELECT, фильтр и группировку (части SQL)','Когда закончите, проверьте один раз на настоящей базе данных']},
'datascientist-q4':{how:['Open the last analysis you sent someone','Find where it stops. Usually it\'s at a chart','Add the missing last line: “so we should…”'], howRu:['Откройте последний анализ, который вы кому-то отправили','Найдите, где он заканчивается. Обычно на графике','Добавьте недостающую последнюю строку: «и поэтому мы должны…»']},
'datascientist-q5':{how:['Search “product data scientist” in quotes','Look for A/B testing, experiments, or causal inference (finding what caused what)','If none of the three is there, it\'s not a product job'], howRu:['Ищите «product data scientist» в кавычках','Ищите A/B-тесты, эксперименты или causal inference (поиск, что на что повлияло)','Если нет ни одного из трёх, это не работа в product']},
'datascientist-q6':{how:['Upload the resume you really send, not a draft','Read each proof it finds, one by one','Confirm only the true ones. Leave the rest'], howRu:['Загрузите резюме, которое вы правда отправляете, а не черновик','Прочитайте каждое найденное доказательство, по одному','Подтвердите только правдивые. Остальные не трогайте']},
'datascientist-q7':{how:['Read one radar item, not the whole issue','Find the step on your path it talks about','Write one line: what it changes for your job'], howRu:['Прочитайте один пункт радара, а не весь выпуск','Найдите шаг на вашем пути, о котором он говорит','Напишите одну строку: что он меняет для вашей работы']},
'datascientist-q8':{how:['Open your result card from the check','Share the picture. The link in your text is just yours','Send it to one person with a job like yours'], howRu:['Откройте карточку с результатом проверки','Поделитесь картинкой. Ссылка в тексте — только ваша','Отправьте одному человеку с похожей работой']},
'datascientist-q9':{how:['Pick a real model you built, not a class project','Write the number you used to judge it','Write what it still gets wrong. That line proves you know your stuff'], howRu:['Выберите настоящую модель, а не учебный проект','Напишите цифру, по которой вы её оценивали','Напишите, в чём она ещё ошибается. Эта строка показывает, что вы разбираетесь']},
'datascientist-q10':{how:['Read the two numbers out loud','Compare them with the pay for your job in job posts','Write one line: is your job growing with the field, or not?'], howRu:['Прочитайте две цифры вслух','Сравните их с тем, сколько платят на вашей работе по вакансиям','Напишите одну строку: ваша работа растёт вместе со всей сферой или нет?']}
});
/* --- TRUCK DRIVER quest details (truckdriver-q1..q10) --- */
Object.assign(QUEST_DETAILS, {
  'truckdriver-q1': { how: ['Pick from the six jobs on your result map, not just "truck driver"', 'Write it as one sentence: "In 12 months I run local LTL in Ohio"', 'Say where you sleep. This job choice is mostly about how often you\'re home'], howRu: ['Выберите из шести работ на карте результата, а не просто «водитель грузовика»', 'Напишите одним предложением: «Через 12 месяцев я работаю городским водителем LTL в Огайо»', 'Скажите, где вы ночуете. Выбор здесь в основном о том, как часто вы дома'] },
  'truckdriver-q2': { how: ['Open tpr.fmcsa.dot.gov. It\'s the official US list of truck schools', 'Search the school by name and state', 'Check two things: the school is listed, and its status is active (not removed)'], howRu: ['Откройте tpr.fmcsa.dot.gov. Это официальный список автошкол для грузовиков в США', 'Найдите школу по названию и штату', 'Проверьте две вещи: школа есть в списке, и статус активный (не удалена)'] },
  'truckdriver-q3': { how: ['No truck needed. Do it from memory, sitting anywhere', 'Go front to back: lights, tires, brakes, coupling, leaks, paperwork', 'Missed something? No worries. That item is now on your real list'], howRu: ['Грузовик не нужен. Делайте по памяти, сидя где угодно', 'Идите спереди назад: фары, шины, тормоза, сцепка, утечки, бумаги', 'Что-то пропустили? Не страшно. Этот пункт теперь в вашем настоящем списке'] },
  'truckdriver-q4': { how: ['Search "driverless truck" or "autonomous truck" in any news app', 'Open one story from this month, not a company ad', 'Write the route or state it names. Where it happens is what matters'], howRu: ['Поищите «driverless truck» или «autonomous truck» в любом новостном приложении', 'Откройте одну новость этого месяца, не рекламу компании', 'Запишите маршрут или штат оттуда. Главное — где это происходит'] },
  'truckdriver-q5': { how: ['Take out your CDL (truck license). Photograph the endorsement codes (extra permissions) on it', 'H = hazmat, N = tanker, T = doubles/triples, X = tanker + hazmat', 'No letters yet? Save the photo anyway. The empty space is your plan'], howRu: ['Достаньте права CDL (права на грузовик). Сфотографируйте коды допусков на них', 'H — опасные грузы, N — цистерна, T — двойные/тройные прицепы, X — цистерна + опасные грузы', 'Букв пока нет? Всё равно сохраните фото. Пустое место — это ваш план'] },
  'truckdriver-q6': { how: ['A driver’s résumé is a work history: companies, years, types of loads', 'Type or paste it on this page. Plain words are fine', 'The page marks proof (endorsements, loads, TWIC). Confirm one true match'], howRu: ['Резюме водителя — это история работы: компании, годы, виды грузов', 'Напечатайте или вставьте его на этой странице. Простыми словами — нормально', 'Страница отметит доказательства (допуски, грузы, TWIC). Подтвердите одно верное'] },
  'truckdriver-q7': { how: ['Open this week’s Radar (Profile → Radar)', 'Each news item ends with one step for your checklist', 'Do that one step today. Each one fits in a break'], howRu: ['Откройте Radar этой недели (Профиль → Radar)', 'Каждая новость заканчивается одним шагом для вашего чек-листа', 'Сделайте этот шаг сегодня. Каждый влезает в перерыв'] },
  'truckdriver-q8': { how: ['Your result card is on your result screen (and in Profile)', 'Post it where your people are. A driver group chat counts', 'One share can unlock your full report. It opens when 1 person runs their own PathCheck from your link'], howRu: ['Карточка с результатом — на экране результата (и в Профиле)', 'Опубликуйте её там, где ваши люди. Чат водителей тоже подходит', 'Один репост может бесплатно открыть полный отчёт. Он откроется, когда 1 человек пройдёт свой PathCheck по вашей ссылке'] },
  'truckdriver-q9': { how: ['Pick your best week since you started (or, from school, your goal numbers)', 'Just three numbers: miles, pay before taxes, nights at home', 'This is your own yardstick. Compare every future offer to it'], howRu: ['Выберите вашу лучшую неделю с начала работы (или, если вы в школе, ваши цели)', 'Только три числа: мили, оплата до налогов, ночи дома', 'Это ваша личная мерка. С ней сравнивайте каждое будущее предложение'] },
  'truckdriver-q10': { how: ['The BLS page for heavy truck drivers is linked in your path (step details)', 'Find the three numbers: $58,640 median, +3.8%, ~214,500 openings a year', 'Write one sentence: what do these numbers mean for YOUR job? Growing, shrinking, or paying differently?'], howRu: ['Страница BLS про водителей тяжёлых грузовиков есть в вашем пути (в деталях шагов)', 'Найдите три числа: медиана 58 640 долларов, +3,8%, около 214 500 вакансий в год', 'Напишите одно предложение: что эти числа значат для ВАШЕЙ работы? Растёт, сокращается или платят по-другому?'] }
});

/* --- MENTAL HEALTH COUNSELOR quest details (counselor-q1..q10) --- */
Object.assign(QUEST_DETAILS, {
'counselor-q1': {how:['Search “licensed professional counselor” plus your state on a company\'s job page (LifeStance posts on Lever).','Open one job post. Find how much it pays and what license it needs.','Save it. This is what your goal looks like.'], howRu:['Ищите «licensed professional counselor» и ваш штат на сайте вакансий компании (LifeStance публикует на Lever).','Откройте одну вакансию. Найдите, сколько платят и какая нужна лицензия.','Сохраните её. Вот так выглядит ваша цель.']},
'counselor-q2': {how:['Take the five jobs from your result card.','Cross out app gig work and certificate-only jobs. They\'re fine steps, but not the goal.','Write the one job left in one line. Put it where you\'ll see it every day.'], howRu:['Возьмите пять работ с карточки результата.','Вычеркните подработку через приложения и работу только с сертификатом. Это ступеньки, а не цель.','Запишите оставшуюся работу одной строкой там, где будете видеть её каждый день.']},
'counselor-q3': {how:['Open any 3 counselor job posts: one clinic, one agency, one app company if you can.','For each, write the exact license words from the requirements.','Compare: the full license opens all three. The associate (beginner) license opens one.'], howRu:['Откройте любые 3 вакансии психологов-консультантов: клиника, агентство и онлайн-сервис, если получится.','Для каждой запишите точные слова о лицензии из требований.','Сравните: полная лицензия открывает все три. Начальная (associate) — одну.']},
'counselor-q4': {how:['Open your state board\'s counselor license page.','Find two things: the supervised hours, and which exam (NCE or NCMHCE) they name.','Write both on one line. Keep it with your diploma papers.'], howRu:['Откройте страницу лицензии консультанта в вашем штате (board).','Найдите две вещи: сколько часов под присмотром наставника нужно и какой экзамен (NCE или NCMHCE) требуют.','Запишите оба в одну строку. Храните вместе с документами о дипломе.']},
'counselor-q5': {how:['Search associate counselor job posts (Thriveworks and Ellie post them openly).','Look for “free supervision” in the benefits list, not in a recruiter\'s promise.','Save the job post. It shows an employer paying for your supervision.'], howRu:['Ищите вакансии начинающих консультантов (associate). Thriveworks и Ellie публикуют их открыто.','Ищите слова «бесплатная супервизия» (free supervision) в списке льгот, а не в обещаниях рекрутера.','Сохраните вакансию. Она показывает, что работодатель сам платит за ваше наставничество.']},
'counselor-q6': {how:['Use the resume upload on this page.','Read what it finds: a license, a method, a records system.','Confirm one true item. Delete anything it got wrong.'], howRu:['Загрузите резюме на этой странице.','Прочитайте, что она нашла: лицензию, метод, систему записей.','Подтвердите один верный пункт. Удалите всё, что она угадала неправильно.']},
'counselor-q7': {how:['Open the radar box below your path.','Read one item fully. It has a date and a source.','Write one line: what it changes for your job.'], howRu:['Откройте блок радара под вашим путём.','Прочитайте один пункт целиком. У него есть дата и источник.','Напишите одну строку: что он меняет для вашей работы.']},
'counselor-q8': {how:['Open your result card.','Share it where your people really are: one story, one post, or one group chat.','Your link goes in the text, not on the picture. That\'s our rule.'], howRu:['Откройте карточку с результатом.','Поделитесь там, где правда есть ваши люди: сторис, пост или групповой чат.','Ваша ссылка — в тексте, а не на картинке. Такое у нас правило.']},
'counselor-q9': {how:['Pick the method your dream job posts name most (we saw: CBT, DBT, EMDR, motivational interviewing).','Find one real training place. Open its price page.','Write the price and next dates next to your job line from q2.'], howRu:['Выберите метод, который чаще всего называют вакансии вашей мечты (у нас: CBT, DBT, EMDR, мотивационное интервью).','Найдите одно настоящее место обучения. Откройте страницу с ценами.','Запишите цену и ближайшие даты рядом со строкой вашей работы из q2.']},
'counselor-q10': {how:['Open the Counseling Compact map (a deal between states to accept each other\'s licenses). Use its own site or your state\'s page.','Find your state and its status: enacted, live, or absent.','Write it down. It decides if you can move, or see clients in other states online.'], howRu:['Откройте карту Counseling Compact (договор штатов признавать лицензии друг друга). На его сайте или на странице вашего штата.','Найдите ваш штат и его статус: закон принят, уже работает или нет.','Запишите статус. От него зависит, можно ли вам переехать или вести клиентов из других штатов онлайн.']}
});

/* ===== Skilled trades quest details (Nov 1 2026) — how-lines verbatim
   from ~/workspace/cg-staging/trades/spec.md §6 of each part. ===== */
Object.assign(QUEST_DETAILS, {
  'electrician-q1': {
    how: ['Open your state\'s licensing website', 'Find the journeyman electrician page', 'Write down the license name and hours needed'],
    howRu: ['Откройте сайт лицензий вашего штата', 'Найдите страницу лицензии подмастерья-электрика (journeyman)', 'Запишите название лицензии и сколько часов нужно']
  },
  'electrician-q2': {
    how: ['Search apprenticeship.gov for your ZIP code', 'Also check your local IBEW/JATC page (union training)', 'Put the opening date in your calendar, not the closing one'],
    howRu: ['Поищите на apprenticeship.gov по вашему ZIP-коду', 'Проверьте и страницу местного IBEW/JATC (обучение от профсоюза)', 'Поставьте в календарь дату открытия, а не закрытия']
  },
  'electrician-q3': {
    how: ['Find one private school\'s price on its own website', 'Write the apprentice\'s year-one pay next to it', 'Keep the page. It\'s your answer to any school sales pitch'],
    howRu: ['Найдите цену одной частной школы на её сайте', 'Запишите рядом зарплату ученика за первый год', 'Сохраните страницу. Это ваш ответ на любые уговоры школы']
  },
  'electrician-q4': {
    how: ['Pick a job post that shows pay', 'Copy the license line exactly', 'Note: construction, repair, or factory'],
    howRu: ['Выберите вакансию, где указана оплата', 'Точно скопируйте строку про лицензию', 'Отметьте: стройка, ремонт или завод']
  },
  'electrician-q5': {
    how: ['Use a notebook or a notes app', 'One line per day is enough', 'Split hours by work type. The mix matters later'],
    howRu: ['Возьмите блокнот или заметки в телефоне', 'Одной строки в день достаточно', 'Делите часы по видам работ. Это пригодится потом']
  },
  'electrician-q6': {
    how: ['Upload the file on this page', 'Check each license it finds against your real cards', 'Fix one wrong line in the resume itself'],
    howRu: ['Загрузите файл на этой странице', 'Сверьте каждую найденную лицензию с вашими настоящими документами', 'Исправьте одну неверную строку в самом резюме']
  },
  'electrician-q7': {
    how: ['Open the radar box below', 'Read the newest item fully', 'Write one sentence: what it changes for you'],
    howRu: ['Откройте блок радара ниже', 'Прочитайте самый новый пункт целиком', 'Напишите одно предложение: что он меняет для вас']
  },
  'electrician-q8': {
    how: ['Open your result card', 'Share it where your people really are', 'Keep the link. Your friends can do their own check with it'],
    howRu: ['Откройте карточку с результатом', 'Поделитесь там, где правда есть ваши люди', 'Сохраните ссылку. По ней друзья пройдут свою проверку']
  },
  'electrician-q9': {
    how: ['Find one job post for home work that shows pay', 'Find one factory or data-center job post that shows pay', 'Write the hourly difference as one number'],
    howRu: ['Найдите вакансию на работу в домах, где указана оплата', 'Найдите вакансию на заводе или в дата-центре, где указана оплата', 'Запишите разницу в час одним числом']
  },
  'electrician-q10': {
    how: ['Open the BLS electricians page', 'Find the Quick Facts box (key numbers)', 'Write which of the three numbers matters most to you, and why'],
    howRu: ['Откройте страницу BLS про электриков', 'Найдите блок Quick Facts (главные цифры)', 'Запишите, какое из трёх чисел важнее всего для вас, и почему']
  },
  'hvac-q1': {
    how: ['Open the EPA Section 608 page', 'Compare your card with the types listed', 'If you only have Type II, check the price of Universal'],
    howRu: ['Откройте страницу EPA Section 608', 'Сравните вашу карту с типами в списке', 'Если у вас только Type II, узнайте цену Universal (все типы)']
  },
  'hvac-q2': {
    how: ['Remember your last five calls, or look at invoices', 'One line each: type, tonnage (size), problem, fix', 'Keep the log handy so you can add tomorrow\'s calls'],
    howRu: ['Вспомните последние пять вызовов или посмотрите счета', 'По строке на каждый: тип, тоннаж (мощность), поломка, ремонт', 'Держите журнал под рукой, чтобы добавлять завтрашние вызовы']
  },
  'hvac-q3': {
    how: ['Check the price of just taking the exam with an EPA-approved tester', 'Find one school\'s price on its own website', 'Write the difference as one number'],
    howRu: ['Узнайте цену простой сдачи экзамена у одобренного EPA экзаменатора', 'Найдите цену одной школы на её сайте', 'Запишите разницу одним числом']
  },
  'hvac-q4': {
    how: ['Pick a controls job post that shows pay', 'Copy the system brand name exactly', 'Note how many years of controls work it asks for'],
    howRu: ['Выберите вакансию по автоматике, где указана оплата', 'Точно скопируйте название системы', 'Отметьте, сколько лет опыта в автоматике просят']
  },
  'hvac-q5': {
    how: ['Count how many nights you were on call last month', 'Write what each night paid', 'Decide now how many on-call nights you\'d accept. Write it down'],
    howRu: ['Посчитайте ночные дежурства за прошлый месяц', 'Запишите, сколько заплатили за каждую ночь', 'Решите заранее, сколько дежурств вы готовы брать. Запишите']
  },
  'hvac-q6': {
    how: ['Upload the file on this page', 'Check each certificate it finds against your real cards', 'Fix one wrong line in the resume itself'],
    howRu: ['Загрузите файл на этой странице', 'Сверьте каждый найденный сертификат с вашими настоящими документами', 'Исправьте одну неверную строку в самом резюме']
  },
  'hvac-q7': {
    how: ['Open the radar box below', 'Read the newest item fully', 'Write one sentence: what it changes for you'],
    howRu: ['Откройте блок радара ниже', 'Прочитайте самый новый пункт целиком', 'Напишите одно предложение: что он меняет для вас']
  },
  'hvac-q8': {
    how: ['Open your result card', 'Share it where your people really are', 'Keep the link. Your friends can do their own check with it'],
    howRu: ['Откройте карточку с результатом', 'Поделитесь там, где правда есть ваши люди', 'Сохраните ссылку. По ней друзья пройдут свою проверку']
  },
  'hvac-q9': {
    how: ['Pick someone who has the job you want', 'Ask one question, not five. People like short questions', 'Write down the system they use. It goes in your plan'],
    howRu: ['Выберите человека, у которого работа, которую вы хотите', 'Задайте один вопрос, а не пять. Короткие вопросы людям приятнее', 'Запишите, с какой системой они работают. Это пойдёт в ваш план']
  },
  'hvac-q10': {
    how: ['Open the BLS HVAC page', 'Find the Quick Facts box (key numbers)', 'Write which of the three numbers matters most to you, and why'],
    howRu: ['Откройте страницу BLS про HVAC', 'Найдите блок Quick Facts (главные цифры)', 'Запишите, какое из трёх чисел важнее всего для вас, и почему']
  },
  'plumber-q1': {
    how: ['Open your state\'s plumbing license website', 'Write the three license levels in order', 'Add the years or hours each one needs'],
    howRu: ['Откройте сайт лицензий сантехников вашего штата', 'Запишите три уровня лицензий по порядку', 'Добавьте годы или часы, которые нужны каждому']
  },
  'plumber-q2': {
    how: ['Search apprenticeship.gov by ZIP code', 'Also check the local UA union and trade group programs', 'Calendar the opening date'],
    howRu: ['Поищите на apprenticeship.gov по ZIP-коду', 'Проверьте также местный профсоюз UA и программы объединений', 'Поставьте дату открытия в календарь']
  },
  'plumber-q3': {
    how: ['Find the pay part, not the big headline', 'Write the pay after training exactly as written', 'Look for a repayment clause (paying back training if you leave). Note it'],
    howRu: ['Найдите часть про оплату, а не громкий заголовок', 'Запишите оплату после обучения точно, как написано', 'Поищите условие о возврате денег за учёбу, если уйдёте. Отметьте его']
  },
  'plumber-q4': {
    how: ['One line per day is enough', 'Split hours by work type from the start', 'Keep the log after the license. It\'s your proof'],
    howRu: ['Одной строки в день достаточно', 'Делите часы по видам работ с самого начала', 'Храните журнал и после лицензии. Это ваше доказательство']
  },
  'plumber-q5': {
    how: ['Find your city or water company\'s backflow page (clean-water valve rules)', 'Write who can test and how often tests are needed', 'Note if there\'s a separate tester certificate'],
    howRu: ['Найдите страницу про backflow (клапаны для чистой воды) вашего города или водоканала', 'Запишите, кто может проверять и как часто нужно', 'Отметьте, есть ли отдельный сертификат для проверяющих']
  },
  'plumber-q6': {
    how: ['Upload the file on this page', 'Check each license it finds against your real cards', 'Fix one wrong line in the resume itself'],
    howRu: ['Загрузите файл на этой странице', 'Сверьте каждую найденную лицензию с вашими настоящими документами', 'Исправьте одну неверную строку в самом резюме']
  },
  'plumber-q7': {
    how: ['Open the radar box below', 'Read the newest item fully', 'Write one sentence: what it changes for you'],
    howRu: ['Откройте блок радара ниже', 'Прочитайте самый новый пункт целиком', 'Напишите одно предложение: что он меняет для вас']
  },
  'plumber-q8': {
    how: ['Open your result card', 'Share it where your people really are', 'Keep the link. Your friends can do their own check with it'],
    howRu: ['Откройте карточку с результатом', 'Поделитесь там, где правда есть ваши люди', 'Сохраните ссылку. По ней друзья пройдут свою проверку']
  },
  'plumber-q9': {
    how: ['Find one job post with guaranteed hourly pay', 'Find one that pays commission (a cut of sales)', 'Write what each pays in a week with no calls'],
    howRu: ['Найдите вакансию с гарантированной почасовой оплатой', 'Найдите вакансию, где платят процент с продаж', 'Запишите, сколько каждая заплатит в неделю без вызовов']
  },
  'plumber-q10': {
    how: ['Open the BLS plumbers page', 'Find the Quick Facts box (key numbers)', 'Write which of the three numbers matters most to you, and why'],
    howRu: ['Откройте страницу BLS про сантехников', 'Найдите блок Quick Facts (главные цифры)', 'Запишите, какое из трёх чисел важнее всего для вас, и почему']
  }
});

/* ===== Cybersecurity quest details (Nov 1 2026) — how-lines verbatim
   from ~/workspace/cg-staging/cybersecurity/spec.md §6. ===== */
Object.assign(QUEST_DETAILS, {
  'cybersecurity-q1': {
    how: ['Open any job site. Search "SOC analyst Tier 1" (a starter security job).', 'Open three job posts, one by one.', 'Find how many years each one asks for. Write the three numbers down.'],
    howRu: ['Откройте любой сайт вакансий. Введите «SOC analyst Tier 1» (начальная работа в безопасности).', 'Откройте три вакансии по одной.', 'Найдите, сколько лет опыта просит каждая. Запишите три числа.']
  },
  'cybersecurity-q2': {
    how: ['Search "Splunk free training" or "Microsoft Sentinel free lab". Open the official one.', 'Sign up for a free account.', 'Open the sample alerts. Pick one: real attack or noise? Say why, out loud.'],
    howRu: ['Введите «Splunk free training» или «Microsoft Sentinel free lab». Откройте официальный сайт.', 'Заведите бесплатный аккаунт.', 'Откройте учебные тревоги. Выберите одну: настоящая атака или шум? Скажите вслух, почему.']
  },
  'cybersecurity-q3': {
    how: ['Take a blank note.', 'Write what the analyst watches, what they click, and who they call. One line each, plain words.', 'If a line sounds like a course ad, rewrite it until a 12-year-old gets it.'],
    howRu: ['Возьмите пустую заметку.', 'Напишите, за чем аналитик следит, куда нажимает и кому звонит. По строке, простыми словами.', 'Если строка звучит как реклама курса, перепишите так, чтобы понял двенадцатилетний.']
  },
  'cybersecurity-q4': {
    how: ['Take any alert text from a job post or a practice lab.', 'Paste it into an AI. Ask for a version a 12-year-old would get.', 'Take one fact from the answer. Check it on one official page.'],
    howRu: ['Возьмите любой текст тревоги из вакансии или учебной лаборатории.', 'Вставьте его в ИИ. Попросите объяснить так, чтобы понял двенадцатилетний.', 'Возьмите один факт из ответа. Проверьте его на официальной странице.']
  },
  'cybersecurity-q5': {
    how: ['List every job or side gig where you fixed computers, accounts or networks for others.', 'Honestly write the number of months next to each.', 'Add them up. That\'s your real starting point. Job posts pay for years, not certificates.'],
    howRu: ['Перечислите все работы и подработки, где вы чинили компьютеры, аккаунты или сети для других.', 'Честно напишите рядом число месяцев.', 'Сложите. Это ваша настоящая точка старта. Вакансии платят за годы опыта, а не за сертификаты.']
  },
  'cybersecurity-q6': {
    how: ['Use the resume upload on this page.', 'Read what it finds in your file.', 'Confirm one true item. Employers will see it as proof.'],
    howRu: ['Загрузите резюме на этой странице.', 'Прочитайте, что она нашла в вашем файле.', 'Подтвердите один верный пункт. Работодатель увидит его как доказательство.']
  },
  'cybersecurity-q7': {
    how: ['Scroll to the radar news under this quest.', 'Read the one item and its date.', 'Say in one line what it changes in your plan.'],
    howRu: ['Прокрутите до новости радара под этим заданием.', 'Прочитайте один пункт и его дату.', 'Скажите одной строкой, что это меняет в вашем плане.']
  },
  'cybersecurity-q8': {
    how: ['Open your result card.', 'Send it to one person whose job is also changing because of AI. Or post it where your people are.', 'Your link goes with it. That\'s how your friends find their own check.'],
    howRu: ['Откройте карточку с вашим результатом.', 'Отправьте её человеку, чью работу тоже меняет ИИ. Или опубликуйте там, где ваши люди.', 'Ваша ссылка идёт вместе с карточкой. Так друзья найдут свою проверку.']
  },
  'cybersecurity-q9': {
    how: ['Open any news story about a company that got hacked.', 'Write six lines: who, what was taken, how they got in, what happened next.', 'Plain words only. If a line needs a dictionary, rewrite it.'],
    howRu: ['Откройте любую новость о взломе компании.', 'Напишите шесть строк: кто, что украли, как проникли, что было дальше.', 'Только простые слова. Если нужен словарь, перепишите строку.']
  },
  'cybersecurity-q10': {
    how: ['Find a post on a forum or social media where a SOC analyst describes a real shift.', 'Read one full post.', 'Save the one detail that surprised you. That\'s what the job is really like, not the ad version.'],
    howRu: ['Найдите на форуме или в соцсетях пост аналитика SOC о настоящей смене.', 'Прочитайте один пост целиком.', 'Сохраните одну деталь, которая вас удивила. Такая работа на самом деле, а не в рекламе.']
  }
});


/* ===== AI PRODUCT MANAGER — quest details (Nov 1 2026, spec §6).
   q6/q7/q8 reuse the standing house texts. ===== */
Object.assign(QUEST_DETAILS, {
  'aipm-q1': {
    how: ['Open your result card. Read the six jobs.', 'For each, ask: does my past prove I fit?', 'Write the winner in your path notes. One job, by name.'],
    howRu: ['Откройте карточку с результатом. Прочитайте шесть работ.', 'Для каждой спросите: доказывает ли моё прошлое, что я подхожу?', 'Запишите победителя в заметки пути. Одна работа, по названию.']
  },
  'aipm-q2': {
    how: ['Open 5 real job posts for your job, on real company sites.', 'Mark each one that asks for 5 or more years of product work.', 'Write the count where you\'ll see it before you apply.'],
    howRu: ['Откройте 5 настоящих вакансий вашей работы на сайтах компаний.', 'Отметьте каждую, где просят 5 и более лет работы с продуктом.', 'Запишите число там, где увидите его перед откликами.']
  },
  'aipm-q3': {
    how: ['Open a chatbot you really use.', 'Ask it one question where a wrong answer would matter.', 'Write down exactly what it got wrong. A confident lie is the best thing to catch.'],
    howRu: ['Откройте чат-бота, которым вы правда пользуетесь.', 'Задайте один вопрос, где ошибка была бы важна.', 'Запишите точно, в чём он ошибся. Уверенная неправда — самая ценная находка.']
  },
  'aipm-q4': {
    how: ['Pick the AI feature you know best, one you use every week.', 'Write 5 questions its users really ask.', 'Write the right answer next to each, in plain words. You\'ve just started an eval set (a test for AI)!'],
    howRu: ['Выберите AI-функцию, которую знаете лучше всего, — ту, что используете каждую неделю.', 'Напишите 5 вопросов, которые её пользователи правда задают.', 'Напишите правильный ответ рядом с каждым, простыми словами. Вы начали свой набор evals (тест для AI)!']
  },
  'aipm-q5': {
    how: ['Find one platform PM job post on the company\'s own site.', 'Read it to the very end. Platform job posts hide key requirements at the bottom.', 'Save the one requirement you can\'t prove yet. It\'s now a step on your path.'],
    howRu: ['Найдите одну вакансию platform PM на сайте самой компании.', 'Прочитайте до самого конца. Важные требования в таких вакансиях прячутся внизу.', 'Сохраните одно требование, которое пока не можете доказать. Теперь это шаг на вашем пути.']
  },
  'aipm-q6': {
    how: ['Use the resume upload on this page.', 'Read what it finds in your file.', 'Confirm one true item. Employers will see it as proof.'],
    howRu: ['Загрузите резюме на этой странице.', 'Прочитайте, что она нашла в вашем файле.', 'Подтвердите один верный пункт. Работодатель увидит его как доказательство.']
  },
  'aipm-q7': {
    how: ['Scroll to the radar news under this quest.', 'Read the one item and its date.', 'Say in one line what it changes in your plan.'],
    howRu: ['Прокрутите до новости радара под этим заданием.', 'Прочитайте один пункт и его дату.', 'Скажите одной строкой, что это меняет в вашем плане.']
  },
  'aipm-q8': {
    how: ['Open your result card.', 'Send it to one person whose job is also changing because of AI. Or post it where your people are.', 'Your link goes with it. That\'s how your friends find their own check.'],
    howRu: ['Откройте карточку с вашим результатом.', 'Отправьте её человеку, чью работу тоже меняет ИИ. Или опубликуйте там, где ваши люди.', 'Ваша ссылка идёт вместе с карточкой. Так друзья найдут свою проверку.']
  },
  'aipm-q9': {
    how: ['Think of the last time an AI feature annoyed you or someone you know.', 'Write the failure in one plain line: what it did, to whom, what it cost.', 'Keep the line. In this job, failure stories are great for interviews.'],
    howRu: ['Вспомните, когда AI-функция в последний раз разозлила вас или знакомого.', 'Запишите ошибку одной простой строкой: что сделала, с кем, чего это стоило.', 'Сохраните строку. В этой профессии истории ошибок — отличный материал для собеседований.']
  },
  'aipm-q10': {
    how: ['Find the line on your result card: the government doesn\'t count this job yet.', 'Say it out loud once. It just means there are no official numbers yet.', 'Then look again at what your job pays. Those numbers come from real job posts, not the government.'],
    howRu: ['Найдите строку на карточке результата: государство эту работу пока не считает.', 'Скажите это вслух один раз. Это просто значит, что официальных цифр пока нет.', 'Потом ещё раз посмотрите, сколько платят на вашей работе. Эти цифры — из настоящих вакансий, а не от государства.']
  }
});
