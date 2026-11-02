/* ===== Quest detail content — expansion wave 2 (Nov 1, 2026).
   Same QUEST_DETAILS shape as questdetails.js (the quest-fix
   build's format): {how[], howRu[]} keyed by quest id — the
   plain-words micro-steps under "What to do" in the quest sheet. ===== */
var QUEST_DETAILS = (typeof QUEST_DETAILS !== "undefined" && QUEST_DETAILS) || {};
Object.assign(QUEST_DETAILS, {
'healthadmin-q1':{how:['Read the four seat names on the grid above.','Pick the one whose daily work sounds like yours — or like the work you want.','Write it as one full sentence: "My seat is ___."'],howRu:['Прочтите названия четырёх мест в таблице выше.','Выберите то, чья повседневная работа похожа на вашу — или на работу, которую вы хотите.','Запишите одним полным предложением: «Моё место — ___».']},
 'healthadmin-q2':{how:['Search a job board with your seat\'s exact name — "practice administrator", not "healthcare admin".','Open the first posting that prints pay.','Save the pay line word for word. That line is your seat\'s market today.'],howRu:['Ищите на сайте вакансий по точному названию места — «practice administrator», а не «healthcare admin».','Откройте первую вакансию, где указана зарплата.','Сохраните строку с зарплатой слово в слово. Эта строка — рынок вашего места сегодня.']},
 'healthadmin-q3':{how:['If your seat is long-term care: find your state licensing board\'s page for nursing home administrators.','If it is hospital or practice work: open the FACHE or CMPE requirements page.','Write down the one requirement you do not meet yet.'],howRu:['Если ваше место — дом престарелых: найдите страницу лицензионного совета вашего штата для администраторов домов престарелых.','Если это больница или практика: откройте страницу требований FACHE или CMPE.','Запишите то одно требование, которому вы пока не соответствуете.']},
 'healthadmin-q4':{how:['Open Epic\'s page for health systems (the link is in step had-g4).','Find the revenue cycle part.','List the tasks it names: scheduling, eligibility, billing, follow-up.','Those tasks are the paperwork seat. If they are your day, your seat is the one being eaten.'],howRu:['Откройте страницу Epic для больничных систем (ссылка — в шаге had-g4).','Найдите часть про цикл выручки.','Выпишите задачи, которые она называет: расписание, проверка покрытия, счета, дозвоны по отказам.','Эти задачи и есть бумажное место. Если это ваш день — ваше место и есть то, которое едят.']},
 'healthadmin-q5':{how:['Think of the biggest budget you have touched — a department, a practice, a programme.','Write its size and one line you can explain: rent, staffing, supplies.','No budget yet? Write one line from any practice budget and learn what feeds it.'],howRu:['Вспомните самый большой бюджет, к которому вы прикасались, — отдел, практику, программу.','Запишите его размер и одну строку, которую вы можете объяснить: аренда, персонал, материалы.','Бюджета пока нет? Запишите одну строку любого бюджета практики и разберитесь, что её наполняет.']},
 'healthadmin-q6':{how:['Use the resume upload on this page.','The page flags words it finds — systems, certificates, budget work.','Confirm one flag that is true. That confirmation is evidence on your path.'],howRu:['Используйте загрузку резюме на этой странице.','Страница отметит слова, которые найдёт, — системы, сертификаты, работу с бюджетом.','Подтвердите одну отметку, которая правдива. Это подтверждение — доказательство на вашем пути.']},
 'healthadmin-q7':{how:['Scroll to today\'s radar signal under your path.','Read one item and check its date.','Say in one sentence what it changes for your seat — or that it changes nothing.'],howRu:['Прокрутите к сегодняшнему сигналу радара под вашим путём.','Прочтите один пункт и проверьте его дату.','Скажите одним предложением, что он меняет для вашего места, — или что не меняет ничего.']},
 'healthadmin-q8':{how:['Open your verdict card.','Send it to one person whose path looks like yours.','Your share unlocks the full report — and it is the warning your people actually need.'],howRu:['Откройте карточку вашего вердикта.','Отправьте её одному человеку, чей путь похож на ваш.','Ваш репост открывает полный отчёт — и это предупреждение, которое вашим людям действительно нужно.']},
 'healthadmin-q9':{how:['Pick one task you do again and again by hand.','Start a timer. Do the task once, the normal way.','Write the minutes down. Multiply by your week.','That number is what the tools are priced against — and what you could be directing instead.'],howRu:['Выберите одну задачу, которую вы снова и снова делаете руками.','Включите таймер. Сделайте задачу один раз, обычным способом.','Запишите минуты. Умножьте на вашу неделю.','Это число — то, против чего выставляют цену инструментам автоматизации, — и то, чем вы могли бы управлять вместо ручной работы.']},
 'healthadmin-q10':{how:['Open the BLS page for medical and health services managers (link in step had-g1).','Find the median pay and the growth line.','Write one sentence: what +24.2% means for your seat — not for the title.'],howRu:['Откройте страницу BLS о руководителях медицинских служб (ссылка — в шаге had-g1).','Найдите медианную зарплату и строку роста.','Напишите одно предложение: что значит +24,2% для вашего места, а не для названия профессии.']}
});

Object.assign(QUEST_DETAILS, {
'datascientist-q1':{how:['Open the four seats on your verdict card','Mark the one your degree and years already point at','Write its name on one line and keep it where you work'], howRu:['Откройте четыре места на карточке вашего вердикта','Отметьте то, на которое уже указывают ваш диплом и ваши годы','Напишите его название одной строкой и держите там, где работаете']},
'datascientist-q2':{how:['Search the exact seat name, not just “data scientist”','Read the degree line in each posting, word for word','Write the count down — it decides your degree plan'], howRu:['Ищите точное название места, а не просто «data scientist»','Прочитайте строку диплома в каждой вакансии, слово в слово','Запишите счёт — он решает ваш план диплома']},
'datascientist-q3':{how:['Pick a question a manager would actually ask','Write the SELECT, the filter and the grouping by hand','Check it once on a real database when you are done'], howRu:['Выберите вопрос, который задал бы настоящий менеджер','Напишите SELECT, фильтр и группировку от руки','Проверьте один раз на настоящей базе, когда закончите']},
'datascientist-q4':{how:['Open the last analysis you sent someone','Find where it stops — usually at a chart','Add the missing last line: “so we should…”'], howRu:['Откройте последний анализ, который вы кому-то отправили','Найдите, где он останавливается — обычно на графике','Добавьте недостающую последнюю строку: «и поэтому мы должны…»']},
'datascientist-q5':{how:['Search “product data scientist” with the quotes','Look for A/B testing, experimentation, or causal inference','If none of the three is there, it is not the product seat'], howRu:['Ищите «product data scientist» в кавычках','Ищите A/B-тестирование, эксперименты или причинный вывод','Если нет ни одного из трёх, это не место product']},
'datascientist-q6':{how:['Upload the resume you actually send, not a draft','Read each piece of evidence it finds, one by one','Confirm only the ones that are true — the rest stay unconfirmed'], howRu:['Загрузите резюме, которое вы правда отправляете, а не черновик','Прочитайте каждое доказательство, которое оно найдёт, по одному','Подтвердите только правдивые — остальные остаются неподтверждёнными']},
'datascientist-q7':{how:['Read one radar item, not the whole issue','Find the step it names on your path','Write one line: what it changes for your seat'], howRu:['Прочитайте один пункт радара, а не весь выпуск','Найдите шаг, который он называет, на вашем пути','Напишите одну строку: что он меняет для вашего места']},
'datascientist-q8':{how:['Open your verdict card from the check','Share the picture — the link in your text is yours alone','Send it to one person whose title looks like yours'], howRu:['Откройте карточку вашего вердикта из проверки','Поделитесь картинкой — ссылка в вашем тексте только ваша','Отправьте одному человеку, чьё название похоже на ваше']},
'datascientist-q9':{how:['Pick the model, not the course project','Write the number you judged it by','Write what it still gets wrong — that line is the proof'], howRu:['Выберите модель, а не учебный проект','Напишите число, по которому вы её оценивали','Напишите, в чём она всё ещё ошибается — эта строка и есть доказательство']},
'datascientist-q10':{how:['Read the two numbers out loud','Compare them with your seat’s posted bands','Write one line: does your seat grow with the field, or against it'], howRu:['Прочитайте две цифры вслух','Сравните их с опубликованными вилками вашего места','Напишите одну строку: ваше место растёт с полем или против него']}
});
/* --- TRUCK DRIVER quest details (truckdriver-q1..q10) --- */
Object.assign(QUEST_DETAILS, {
  'truckdriver-q1': { how: ['Pick from the six seats on your verdict map — not the word "truck driver"', 'Write it as one sentence: "In 12 months I run local LTL in Ohio"', 'Say where you sleep. The seat is mostly a home-time decision'], howRu: ['Выбирайте из шести мест на вашей карте вердиктов — а не слово «водитель грузовика»', 'Напишите одним предложением: «Через 12 месяцев я работаю городским водителем LTL в Огайо»', 'Скажите, где вы ночуете. Место — это в основном решение о том, как часто вы дома'] },
  'truckdriver-q2': { how: ['Open tpr.fmcsa.dot.gov — the federal Training Provider Registry', 'Search the school by name and state', 'Check two things: it appears, and its status is active (not removed)'], howRu: ['Откройте tpr.fmcsa.dot.gov — федеральный реестр учебных центров', 'Найдите школу по названию и штату', 'Проверьте две вещи: она есть в списке, и её статус активный (не удалена)'] },
  'truckdriver-q3': { how: ['No truck needed — do it from memory, sitting anywhere', 'Go front to back: lights, tires, brakes, coupling, leaks, paperwork', 'Missed an item? That item is the quest — it is now on your real list'], howRu: ['Грузовик не нужен — делайте по памяти, сидя где угодно', 'Идите спереди назад: фары, шины, тормоза, сцепка, утечки, бумаги', 'Пропустили пункт? Этот пункт и есть задание — теперь он в вашем настоящем списке'] },
  'truckdriver-q4': { how: ['Search "driverless truck" or "autonomous truck" in any news app', 'Open one story from this month — not a company ad', 'Write the lane or state it names. That geography is the whole point'], howRu: ['Поищите «driverless truck» или «autonomous truck» в любом новостном приложении', 'Откройте одну новость этого месяца — не рекламу компании', 'Запишите маршрут или штат, который там назван. Вся суть — в географии'] },
  'truckdriver-q5': { how: ['Take your CDL out and photograph the endorsement codes on it', 'H = hazmat, N = tanker, T = doubles/triples, X = tanker + hazmat', 'No letters yet? Save the photo anyway — the empty space is the plan'], howRu: ['Достаньте ваши права CDL и сфотографируйте коды допусков на них', 'H — опасные грузы, N — цистерна, T — двойные/тройные прицепы, X — цистерна + опасные грузы', 'Букв пока нет? Всё равно сохраните фото — пустое место и есть план'] },
  'truckdriver-q6': { how: ['A driver’s résumé is a work history: carrier names, years, freight types', 'Type or paste it on this page — plain words are fine', 'The page flags evidence (endorsements, freight, TWIC). Confirm one true hit'], howRu: ['Резюме водителя — это история работы: названия перевозчиков, годы, типы грузов', 'Напечатайте или вставьте её на этой странице — обычными словами, это нормально', 'Страница подсветит доказательства (допуски, грузы, TWIC). Подтвердите одно верное совпадение'] },
  'truckdriver-q7': { how: ['Open this week’s Radar (Profile → Radar)', 'Each signal ends with one move for your checklist', 'Do that one move today — they are sized for a break'], howRu: ['Откройте Radar этой недели (Профиль → Radar)', 'Каждый сигнал заканчивается одним шагом для вашего чек-листа', 'Сделайте этот один шаг сегодня — они рассчитаны на перерыв'] },
  'truckdriver-q8': { how: ['Your verdict card is on your result screen (and in Profile)', 'Post it where your people are — a driver group chat counts', 'One share can free your full report: when 1 person runs their own PathCheck from your link, it opens'], howRu: ['Ваша карточка вердикта — на экране результата (и в Профиле)', 'Опубликуйте её там, где ваши люди, — групповой чат водителей считается', 'Одна отправка может открыть ваш полный отчёт бесплатно: когда 1 человек пройдёт свой PathCheck по вашей ссылке, он откроется'] },
  'truckdriver-q9': { how: ['Pick your best week since you started (or from school: your target numbers)', 'Three numbers only: miles, gross pay, nights at home', 'This is your personal benchmark — every future offer gets compared to it'], howRu: ['Выберите вашу лучшую неделю с начала работы (или из школы: ваши целевые числа)', 'Только три числа: мили, валовая оплата, ночи дома', 'Это ваш личный ориентир — каждое будущее предложение сравнивается с ним'] },
  'truckdriver-q10': { how: ['The BLS page for heavy truck drivers is linked in your path (step details)', 'Find the three numbers: $58,640 median, +3.8%, ~214,500 openings a year', 'Write one sentence: what do those numbers mean for YOUR seat — growing, shrinking, or being repriced?'], howRu: ['Страница BLS для водителей тяжёлых грузовиков есть в вашем пути (детали шагов)', 'Найдите три числа: медиана 58 640 долларов, +3,8%, около 214 500 вакансий в год', 'Напишите одно предложение: что эти числа значат для ВАШЕГО места — оно растёт, сжимается или переоценивается?'] }
});

/* --- MENTAL HEALTH COUNSELOR quest details (counselor-q1..q10) --- */
Object.assign(QUEST_DETAILS, {
'counselor-q1': {how:['Search “licensed professional counselor” plus your state on an employer board (LifeStance posts on Lever).','Open one posting and find the pay line and the license line.','Save the posting — it is your target’s shape.'], howRu:['Ищите «licensed professional counselor» плюс ваш штат на доске работодателя (LifeStance публикует на Lever).','Откройте одну вакансию и найдите строку оплаты и строку лицензии.','Сохраните вакансию — это форма вашей цели.']},
'counselor-q2': {how:['Take the five seats from your verdict card.','Cross out the platform gig and the certificate-only stop as final stops.','Write the one seat left, in one line, where you will see it daily.'], howRu:['Возьмите пять мест из вашей карточки вердикта.','Вычеркните платформу и остановку только на сертификате как конечные остановки.','Запишите оставшееся место одной строкой там, где будете видеть его каждый день.']},
'counselor-q3': {how:['Open any 3 counselor postings — one practice, one agency, one platform if you can.','For each, write the exact license words from its requirements.','Compare: the full license opens all three doors; the associate opens one.'], howRu:['Откройте любые 3 вакансии консультантов — практику, агентство и платформу, если сможете.','Для каждой запишите точные слова о лицензии из её требований.','Сравните: полная лицензия открывает все три двери; младший статус — одну.']},
'counselor-q4': {how:['Open your state board’s counselor license page.','Find two numbers: the supervised hours, and which exam (NCE or NCMHCE) the board names.','Write both numbers on one line and keep it with your degree paperwork.'], howRu:['Откройте страницу лицензии консультанта совета вашего штата (board).','Найдите два числа: часы под супервизией и какой экзамен (NCE или NCMHCE) называет совет.','Запишите оба числа одной строкой и держите с бумагами о дипломе.']},
'counselor-q5': {how:['Search associate counselor postings (Thriveworks and Ellie post them openly).','Look for the words “free supervision” in the benefits list — not in a recruiter’s promise.','Save the posting. That is the market price of the toll, paid by an employer.'], howRu:['Ищите вакансии младших консультантов (associate) — Thriveworks и Ellie публикуют их открыто.','Ищите слова «бесплатная супервизия» (free supervision) в списке льгот — не в обещании рекрутера.','Сохраните вакансию. Это рыночная цена пошлины, оплаченная работодателем.']},
'counselor-q6': {how:['Use the resume upload on this page.','Read what it finds — a license, a method, a record system.','Confirm one true item. Delete anything it guessed wrong.'], howRu:['Используйте загрузку резюме на этой странице.','Прочитайте, что она находит, — лицензию, метод, систему записей.','Подтвердите один верный пункт. Удалите всё, что она угадала неверно.']},
'counselor-q7': {how:['Open the radar block below your path.','Read one item fully — it carries a date and a source.','Write one line: what it changes for your seat.'], howRu:['Откройте блок радара под вашим путём.','Прочитайте один пункт целиком — у него есть дата и источник.','Напишите одну строку: что он меняет для вашего места.']},
'counselor-q8': {how:['Open your verdict card.','Share it where your people actually are — one story, one post, or one group chat.','Your link is in the share text, not on the picture. That is the house rule.'], howRu:['Откройте вашу карточку вердикта.','Поделитесь ею там, где ваши люди на самом деле, — сторис, пост или групповой чат.','Ваша ссылка — в тексте, а не на картинке. Таково правило дома.']},
'counselor-q9': {how:['Choose the method your target postings name most (in our scan: CBT, DBT, EMDR, motivational interviewing).','Find one real training provider and open its price page.','Write the price and the next dates next to your seat line from q2.'], howRu:['Выберите метод, который ваши целевые вакансии называют чаще (в нашем скане: CBT, DBT, EMDR, мотивационное интервью).','Найдите одного настоящего провайдера обучения и откройте его страницу цен.','Запишите цену и ближайшие даты рядом со строкой вашего места из q2.']},
'counselor-q10': {how:['Open the Counseling Compact map (the compact’s own site, or your state board’s compact page).','Find your state and its status word: enacted, live, or absent.','Write the status down — it decides whether a move or a telehealth caseload is legal for you.'], howRu:['Откройте карту Counseling Compact (собственный сайт соглашения или страницу соглашения совета вашего штата).','Найдите ваш штат и его слово статуса: закон принят, работает или отсутствует.','Запишите статус — он решает, законны ли для вас переезд или удалённая нагрузка через границы штатов.']}
});

/* ===== Skilled trades quest details (Nov 1 2026) — how-lines verbatim
   from ~/workspace/cg-staging/trades/spec.md §6 of each part. ===== */
Object.assign(QUEST_DETAILS, {
  'electrician-q1': {
    how: ['Open your state licensing board\'s site', 'Find the journeyman electrician page', 'Write the license name and required hours'],
    howRu: ['Откройте сайт лицензионного board вашего штата', 'Найдите страницу лицензии подмастерья-электрика (journeyman)', 'Запишите название лицензии и требуемые часы']
  },
  'electrician-q2': {
    how: ['Search apprenticeship.gov for your ZIP code', 'Check your local IBEW/JATC page too', 'Calendar the opening date, not the closing one'],
    howRu: ['Поищите на apprenticeship.gov по вашему ZIP-коду', 'Проверьте также страницу местного IBEW/JATC', 'Поставьте в календарь дату открытия, а не закрытия']
  },
  'electrician-q3': {
    how: ['Price one private program from its own tuition page', 'Write the apprenticeship\'s year-one wage beside it', 'Keep the page — it is your answer to every school pitch'],
    howRu: ['Возьмите цену одной частной программы с её собственной страницы оплаты', 'Запишите рядом зарплату первого года ученичества', 'Сохраните страницу — это ваш ответ на любой питч школы']
  },
  'electrician-q4': {
    how: ['Pick a posting that prints pay', 'Copy the license line exactly', 'Note construction, service or industrial'],
    howRu: ['Выберите вакансию, где напечатана оплата', 'Скопируйте строку про лицензию точно', 'Отметьте: строительство, сервис или промышленность']
  },
  'electrician-q5': {
    how: ['Use a notebook or a notes app', 'One line per day is enough', 'Split hours by work type — the mix matters later'],
    howRu: ['Возьмите блокнот или приложение заметок', 'Одной строки в день достаточно', 'Делите часы по виду работы — состав важен позже']
  },
  'electrician-q6': {
    how: ['Upload the file on this page', 'Check each license it finds against your real cards', 'Fix one wrong line in the resume itself'],
    howRu: ['Загрузите файл на этой странице', 'Сверьте каждую найденную лицензию с вашими настоящими документами', 'Исправьте одну неверную строку в самом резюме']
  },
  'electrician-q7': {
    how: ['Open the radar block below', 'Read the newest item fully', 'Write one sentence: what it changes for you'],
    howRu: ['Откройте блок радара ниже', 'Прочитайте новейший пункт целиком', 'Напишите одно предложение: что он меняет для вас']
  },
  'electrician-q8': {
    how: ['Open your verdict card', 'Share it where your people actually are', 'Keep the link — your people get their own check from it'],
    howRu: ['Откройте карточку вашего вердикта', 'Поделитесь там, где ваши люди действительно находятся', 'Сохраните ссылку — по ней ваши люди получат свою проверку']
  },
  'electrician-q9': {
    how: ['Find one residential posting with pay', 'Find one industrial or data-center posting with pay', 'Write the hourly gap as one number'],
    howRu: ['Найдите одну вакансию в жилом секторе с оплатой', 'Найдите одну промышленную или дата-центр вакансию с оплатой', 'Запишите разрыв в час одним числом']
  },
  'electrician-q10': {
    how: ['Open the BLS electricians page', 'Find the Quick Facts box', 'Write which of the three numbers matters most to you, and why'],
    howRu: ['Откройте страницу BLS про электриков', 'Найдите блок Quick Facts', 'Запишите, какое из трёх чисел важнее всего для вас, и почему']
  },
  'hvac-q1': {
    how: ['Open the EPA Section 608 page', 'Match your card against the types listed', 'If you hold Type II only, price the Universal upgrade'],
    howRu: ['Откройте страницу EPA Section 608', 'Сверьте вашу карту с перечисленными типами', 'Если у вас только Type II, оцените переход на Universal (все типы)']
  },
  'hvac-q2': {
    how: ['Take your last five calls from memory or invoices', 'One line each: type, tonnage, fault, fix', 'Keep the log where tomorrow\'s calls can join it'],
    howRu: ['Возьмите последние пять вызовов по памяти или счетам', 'По одной строке: тип, тоннаж, неисправность, ремонт', 'Держите журнал там, куда завтрашние вызовы смогут добавиться']
  },
  'hvac-q3': {
    how: ['Price the exam route from an EPA-approved tester', 'Price one school from its own tuition page', 'Write the difference as one number'],
    howRu: ['Оцените путь экзамена у одобренного EPA экзаменатора', 'Возьмите цену одной школы с её страницы оплаты', 'Запишите разницу одним числом']
  },
  'hvac-q4': {
    how: ['Pick a controls posting that prints pay', 'Copy the platform name exactly', 'Note the years of controls it asks'],
    howRu: ['Выберите вакансию по автоматике, где напечатана оплата', 'Скопируйте название платформы точно', 'Отметьте, сколько лет опыта в автоматике она просит']
  },
  'hvac-q5': {
    how: ['Count last month\'s on-call nights', 'Write what each night paid', 'Write the rotation you would accept — before you need it'],
    howRu: ['Посчитайте ночные дежурства прошлого месяца', 'Запишите, сколько платила каждая ночь', 'Запишите ротацию, которую вы примете, — до того, как она понадобится']
  },
  'hvac-q6': {
    how: ['Upload the file on this page', 'Check each certificate it finds against your real cards', 'Fix one wrong line in the resume itself'],
    howRu: ['Загрузите файл на этой странице', 'Сверьте каждый найденный сертификат с вашими настоящими документами', 'Исправьте одну неверную строку в самом резюме']
  },
  'hvac-q7': {
    how: ['Open the radar block below', 'Read the newest item fully', 'Write one sentence: what it changes for you'],
    howRu: ['Откройте блок радара ниже', 'Прочитайте новейший пункт целиком', 'Напишите одно предложение: что он меняет для вас']
  },
  'hvac-q8': {
    how: ['Open your verdict card', 'Share it where your people actually are', 'Keep the link — your people get their own check from it'],
    howRu: ['Откройте карточку вашего вердикта', 'Поделитесь там, где ваши люди действительно находятся', 'Сохраните ссылку — по ней ваши люди получат свою проверку']
  },
  'hvac-q9': {
    how: ['Pick someone whose seat you want', 'Ask one question, not five', 'Write the platform name down — it goes on your plan'],
    howRu: ['Выберите человека, чьё место вы хотите', 'Задайте один вопрос, а не пять', 'Запишите название платформы — оно пойдёт в ваш план']
  },
  'hvac-q10': {
    how: ['Open the BLS HVAC page', 'Find the Quick Facts box', 'Write which of the three numbers matters most to you, and why'],
    howRu: ['Откройте страницу BLS про HVAC', 'Найдите блок Quick Facts', 'Запишите, какое из трёх чисел важнее всего для вас, и почему']
  },
  'plumber-q1': {
    how: ['Open your state plumbing board\'s site', 'Write the three license levels in order', 'Add the years or hours each one needs'],
    howRu: ['Откройте сайт plumbing board вашего штата', 'Запишите три уровня лицензий по порядку', 'Добавьте годы или часы, которые нужны каждому']
  },
  'plumber-q2': {
    how: ['Search apprenticeship.gov by ZIP code', 'Check the UA local and association programs too', 'Calendar the opening date'],
    howRu: ['Поищите на apprenticeship.gov по ZIP-коду', 'Проверьте также местный профсоюз UA и программы ассоциаций', 'Поставьте дату открытия в календарь']
  },
  'plumber-q3': {
    how: ['Find the pay paragraph, not the headline', 'Write the post-training pay exactly as printed', 'Look for a repayment clause and note it'],
    howRu: ['Найдите абзац про оплату, а не заголовок', 'Запишите оплату после обучения точно, как напечатано', 'Поищите условие возврата денег за обучение и отметьте его']
  },
  'plumber-q4': {
    how: ['One line per day is enough', 'Split hours by work type from the start', 'Keep the log after the license — it is your proof'],
    howRu: ['Одной строки в день достаточно', 'Делите часы по видам работ с самого начала', 'Храните журнал и после лицензии — это ваше доказательство']
  },
  'plumber-q5': {
    how: ['Search your city or water utility\'s backflow page', 'Write who may test and how often tests are due', 'Note whether a separate tester certificate exists'],
    howRu: ['Поищите страницу про backflow вашего города или водоканала', 'Запишите, кто может проверять и как часто проверки нужны', 'Отметьте, есть ли отдельный сертификат проверяющего']
  },
  'plumber-q6': {
    how: ['Upload the file on this page', 'Check each license it finds against your real cards', 'Fix one wrong line in the resume itself'],
    howRu: ['Загрузите файл на этой странице', 'Сверьте каждую найденную лицензию с вашими настоящими документами', 'Исправьте одну неверную строку в самом резюме']
  },
  'plumber-q7': {
    how: ['Open the radar block below', 'Read the newest item fully', 'Write one sentence: what it changes for you'],
    howRu: ['Откройте блок радара ниже', 'Прочитайте новейший пункт целиком', 'Напишите одно предложение: что он меняет для вас']
  },
  'plumber-q8': {
    how: ['Open your verdict card', 'Share it where your people actually are', 'Keep the link — your people get their own check from it'],
    howRu: ['Откройте карточку вашего вердикта', 'Поделитесь там, где ваши люди действительно находятся', 'Сохраните ссылку — по ней ваши люди получат свою проверку']
  },
  'plumber-q9': {
    how: ['Find one posting with a guaranteed hourly line', 'Find one with commission in the pay line', 'Write what each pays in a week with no calls'],
    howRu: ['Найдите вакансию со строкой гарантированной почасовой оплаты', 'Найдите вакансию с комиссией в строке оплаты', 'Запишите, сколько платит каждая в неделю без вызовов']
  },
  'plumber-q10': {
    how: ['Open the BLS plumbers page', 'Find the Quick Facts box', 'Write which of the three numbers matters most to you, and why'],
    howRu: ['Откройте страницу BLS про сантехников', 'Найдите блок Quick Facts', 'Запишите, какое из трёх чисел важнее всего для вас, и почему']
  }
});

/* ===== Cybersecurity quest details (Nov 1 2026) — how-lines verbatim
   from ~/workspace/cg-staging/cybersecurity/spec.md §6. ===== */
Object.assign(QUEST_DETAILS, {
  'cybersecurity-q1': {
    how: ['Open any job board and search "SOC analyst Tier 1".', 'Open three postings, one by one.', 'Find the years line in each. Write the three numbers down.'],
    howRu: ['Откройте любой сайт вакансий и введите «SOC analyst Tier 1».', 'Откройте три вакансии по одной.', 'Найдите в каждой строку про годы опыта. Запишите три числа.']
  },
  'cybersecurity-q2': {
    how: ['Search "Splunk free training" or "Microsoft Sentinel free lab" and open the official one.', 'Sign in with a free account.', 'Open the sample alerts and decide for one alert: real attack or noise. Say why, out loud.'],
    howRu: ['Введите «Splunk free training» или «Microsoft Sentinel free lab» и откройте официальный вариант.', 'Войдите через бесплатный аккаунт.', 'Откройте учебные оповещения и решите по одному: настоящая атака или шум. Скажите вслух, почему.']
  },
  'cybersecurity-q3': {
    how: ['Take a blank note.', 'Write what the analyst watches, what they click, and who they call — one line each, plain words.', 'If a line sounds like a course ad, rewrite it until a 12-year-old gets it.'],
    howRu: ['Возьмите пустую заметку.', 'Напишите, за чем аналитик следит, куда нажимает и кому звонит — по одной строке, простыми словами.', 'Если строка звучит как реклама курса, перепишите её, пока не поймёт двенадцатилетний.']
  },
  'cybersecurity-q4': {
    how: ['Pick any alert text from a posting or a lab.', 'Paste it to an AI and ask for the 12-year-old version.', 'Take one claim from the answer and check it against one official page.'],
    howRu: ['Возьмите любой текст оповещения из вакансии или лаборатории.', 'Вставьте его ИИ и попросите версию для двенадцатилетнего.', 'Возьмите одно утверждение из ответа и сверьте с одной официальной страницей.']
  },
  'cybersecurity-q5': {
    how: ['List every job or gig where you fixed computers, accounts or networks for other people.', 'Write months next to each, honestly.', 'Add them up. That total is your real starting line — postings pay in years, not certificates.'],
    howRu: ['Перечислите все работы, где вы чинили компьютеры, аккаунты или сети для других людей.', 'Напишите рядом число месяцев, честно.', 'Сложите всё. Эта сумма — ваш настоящий старт: вакансии платят за годы, а не за сертификаты.']
  },
  'cybersecurity-q6': {
    how: ['Use the resume upload on this page.', 'Read what it finds in your file.', 'Confirm one true item. That confirmation is what employers will see as proof.'],
    howRu: ['Используйте загрузку резюме на этой странице.', 'Прочитайте, что она находит в вашем файле.', 'Подтвердите один верный пункт. Именно это подтверждение работодатель увидит как доказательство.']
  },
  'cybersecurity-q7': {
    how: ['Scroll to the radar signal under this quest.', 'Read the one item and its date.', 'Say in one line what it changes for your plan.'],
    howRu: ['Прокрутите до сигнала радара под этим заданием.', 'Прочитайте один пункт и его дату.', 'Скажите одной строкой, что это меняет в вашем плане.']
  },
  'cybersecurity-q8': {
    how: ['Open your verdict card.', 'Send it to one person whose job AI is also eating, or post it where your people are.', 'Your link travels with it — that is how your people find their own check.'],
    howRu: ['Откройте карточку вашего вердикта.', 'Отправьте её одному человеку, чью работу ИИ тоже ест, или опубликуйте там, где ваши люди.', 'Ваша ссылка идёт вместе с карточкой — так ваши люди находят свою проверку.']
  },
  'cybersecurity-q9': {
    how: ['Open any news story about a company getting hacked.', 'Write six lines: who, what they took, how they got in, what happened next.', 'Plain words only. If a line needs a dictionary, rewrite it.'],
    howRu: ['Откройте любую новость о взломе компании.', 'Напишите шесть строк: кто, что украли, как вошли, что было дальше.', 'Только простые слова. Если для строки нужен словарь, перепишите её.']
  },
  'cybersecurity-q10': {
    how: ['Search a forum or social feed for a SOC analyst writing about a real shift.', 'Read one full post.', 'Save the one detail that surprised you. That detail is the job as it is, not as it is sold.'],
    howRu: ['Найдите на форуме или в соцсети пост аналитика SOC о настоящей смене.', 'Прочитайте один пост целиком.', 'Сохраните одну деталь, которая вас удивила. Эта деталь — работа как она есть, а не как её продают.']
  }
});


/* ===== AI PRODUCT MANAGER — quest details (Nov 1 2026, spec §6).
   q6/q7/q8 reuse the standing house texts. ===== */
Object.assign(QUEST_DETAILS, {
  'aipm-q1': {
    how: ['Open your verdict card and read the six seats.', 'For each seat ask: does my past prove this one?', 'Write the winner into your path notes. One seat, named.'],
    howRu: ['Откройте вашу карточку вердикта и прочитайте шесть мест.', 'Для каждого места спросите: моё прошлое доказывает это место?', 'Запишите победителя в заметки пути. Одно место, названное.']
  },
  'aipm-q2': {
    how: ['Open 5 real postings in your seat, from real company sites.', 'Mark each one that asks for 5 or more years of product work.', 'Write the count where future-you will see it before applying.'],
    howRu: ['Откройте 5 настоящих вакансий вашего места, с настоящих сайтов компаний.', 'Отметьте каждую, которая просит 5 и более лет продуктовой работы.', 'Запишите число там, где будущий вы увидит его до откликов.']
  },
  'aipm-q3': {
    how: ['Open a chatbot you actually use.', 'Ask it one question where being wrong has a cost.', 'Write down exactly what it got wrong — a confident falsehood is the most valuable line on the page.'],
    howRu: ['Откройте чат-бота, которым вы правда пользуетесь.', 'Задайте ему один вопрос, где ошибка чего-то стоит.', 'Запишите точно, что он сказал не так, — уверенная неправда — самая ценная строка на странице.']
  },
  'aipm-q4': {
    how: ['Pick the AI feature you know best — one you use weekly.', 'Write 5 questions its users really ask.', 'Write the right answer beside each one, in plain words. That page is an eval set, started.'],
    howRu: ['Выберите AI-функцию, которую вы знаете лучше всего, — ту, которой пользуетесь каждую неделю.', 'Напишите 5 вопросов, которые её пользователи правда задают.', 'Напишите правильный ответ рядом с каждым, простыми словами. Эта страница — начатый набор evals.']
  },
  'aipm-q5': {
    how: ['Find one platform PM posting on the company’s own site.', 'Read it to the last line — platform postings hide the screen at the bottom.', 'Save the single requirement you cannot prove today. That requirement is a step on your path now.'],
    howRu: ['Найдите одну вакансию platform PM на собственном сайте компании.', 'Прочитайте её до последней строки — вакансии platform прячут экран внизу.', 'Сохраните единственное требование, которое вы сегодня не можете доказать. Это требование теперь — шаг на вашем пути.']
  },
  'aipm-q6': {
    how: ['Use the resume upload on this page.', 'Read what it finds in your file.', 'Confirm one true item. That confirmation is what employers will see as proof.'],
    howRu: ['Используйте загрузку резюме на этой странице.', 'Прочитайте, что она находит в вашем файле.', 'Подтвердите один верный пункт. Именно это подтверждение работодатель увидит как доказательство.']
  },
  'aipm-q7': {
    how: ['Scroll to the radar signal under this quest.', 'Read the one item and its date.', 'Say in one line what it changes for your plan.'],
    howRu: ['Прокрутите до сигнала радара под этим заданием.', 'Прочитайте один пункт и его дату.', 'Скажите одной строкой, что это меняет в вашем плане.']
  },
  'aipm-q8': {
    how: ['Open your verdict card.', 'Send it to one person whose job AI is also eating, or post it where your people are.', 'Your link travels with it — that is how your people find their own check.'],
    howRu: ['Откройте карточку вашего вердикта.', 'Отправьте её одному человеку, чью работу ИИ тоже ест, или опубликуйте там, где ваши люди.', 'Ваша ссылка идёт вместе с карточкой — так ваши люди находят свою проверку.']
  },
  'aipm-q9': {
    how: ['Think of the last time an AI feature annoyed you or a user you know.', 'Write the failure in one plain line: what it did, to whom, what it cost.', 'Keep the line. Failure stories are interview material in this profession.'],
    howRu: ['Вспомните последний раз, когда AI-функция разозлила вас или знакомого пользователя.', 'Запишите ошибку одной простой строкой: что она сделала, с кем, чего это стоило.', 'Сохраните строку. Истории ошибок — материал для собеседований в этой профессии.']
  },
  'aipm-q10': {
    how: ['Find the line on your verdict card: the official statistics do not count this job.', 'Say it out loud once, so it stops sounding like a loophole and starts sounding like the market.', 'Then re-read your seat’s pay band — the bands come from real postings, not from the statistics office.'],
    howRu: ['Найдите строку на вашей карточке вердикта: официальная статистика не считает эту работу.', 'Скажите её вслух один раз, чтобы она перестала звучать как лазейка и начала звучать как рынок.', 'Потом перечитайте вилку вашего места — вилки берутся из настоящих вакансий, а не из статистического бюро.']
  }
});
