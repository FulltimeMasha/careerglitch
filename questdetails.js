/* ===== Quest detail content — PathCheck dashboard.
   Founder bug report 2026-11-01: she tapped the daily quest to READ
   it and it completed — «я хотела просто посмотреть, я его не
   поняла». The quest sheet (questdetail.js) shows, under "What to
   do — in plain words", these 2–4 micro-steps per quest: exactly
   how to do it, in full sentences a smart 12-year-old gets first
   try. Keyed by quest id, mirroring the STEP_DETAILS format.
   Numbers only repeat the quest text's own numbers — none invented.
   Coverage: law, cpa, nurse, fin, analyst (legacy), dataanalyst,
   businessanalyst, aicreator — 80 quests. `creator` is NOT here:
   the staff-reframe build owns creator and adds its entries in
   this same format (QUEST_DETAILS, {how[], howRu[]} per quest id,
   in a details file loaded by app.html). ===== */

var QUEST_DETAILS = (typeof QUEST_DETAILS !== "undefined" && QUEST_DETAILS) || {};
Object.assign(QUEST_DETAILS, {
 "cpa-q1": {
  "how": [
   "Open a job board and search for accounting jobs in your niche — your chosen narrow area, like tax.",
   "Open one live posting — live means it is open now and accepting people.",
   "Tap Save on it so you keep it.",
   "Find the pay line in the posting and read it twice, slowly."
  ],
  "howRu": [
   "Откройте сайт с вакансиями и найдите вакансии бухгалтеров в вашей нише — вашей выбранной узкой области, например tax.",
   "Откройте одну живую вакансию — живая значит, что она открыта сейчас и туда берут людей.",
   "Нажмите Save — сохранить — на этой вакансии, чтобы она у вас осталась.",
   "Найдите в вакансии строку оплаты и прочитайте её дважды, медленно."
  ]
 },
 "cpa-q10": {
  "how": [
   "Read the line in the quest again: only 42% pass FAR first try — FAR is one big part of the CPA exam, about financial accounting reports.",
   "Think what one more try would cost you: paying for the exam again plus your study time.",
   "Write one money line in your notes: how much money you will set aside for a retake, just in case.",
   "Keep that line — it is your backup plan, not a prediction that you will fail."
  ],
  "howRu": [
   "Прочитайте строку из квеста ещё раз: только 42% сдают FAR с первого раза — FAR это большой раздел экзамена CPA про финансовую отчётность.",
   "Подумайте, во что вам обойдётся ещё одна попытка: ещё раз плата за экзамен плюс ваше время на учёбу.",
   "Запишите одной строкой в заметки, сколько денег вы отложите на пересдачу, — на всякий случай.",
   "Сохраните эту строку — это ваш запасной план, а не предсказание, что вы не сдадите."
  ]
 },
 "cpa-q2": {
  "how": [
   "Read the four choices: tax means taxes, SEC reporting means official reports for public companies, FDD means checking a business before it is bought, and controller means the person in charge of a company's money records.",
   "Choose only one — the one you want your next job to be in.",
   "Write it down in one line in your notes, for example: My specialty is tax."
  ],
  "howRu": [
   "Прочитайте четыре варианта: tax — это налоги, SEC reporting — это официальные отчёты для публичных компаний, FDD — это проверка бизнеса перед его покупкой, а controller — это человек, который отвечает за денежные записи компании.",
   "Выберите только один вариант — тот, в котором вы хотите вашу следующую работу.",
   "Запишите это одной строкой в заметки, например: Моя специализация — tax."
  ]
 },
 "cpa-q3": {
  "how": [
   "On a job board, open three postings in your niche, one by one.",
   "In each posting, look in the requirements part for a tool name: NetSuite, Workiva, or Excel.",
   "Write down the tool name you saw in each posting, so you have three names in your notes.",
   "Count which name appears most often and circle it — that is your answer."
  ],
  "howRu": [
   "На сайте с вакансиями откройте три вакансии в вашей нише, по одной.",
   "В каждой вакансии посмотрите в части с требованиями название инструмента: NetSuite, Workiva или Excel.",
   "Запишите название инструмента из каждой вакансии, чтобы у вас в заметках было три названия.",
   "Посчитайте, какое название встречается чаще всего, и обведите его — это ваш ответ."
  ]
 },
 "cpa-q4": {
  "how": [
   "Search in your browser for your state CPA board license page — the board is the official office that gives the license in your state.",
   "Open the page that shows the route to get the license, step by step.",
   "Find the part about college credits and read whether your number is 120 credits or 150 — credits are the points you earn for college classes.",
   "Write your number down in your notes: 120 or 150."
  ],
  "howRu": [
   "Найдите в браузере страницу лицензии board вашего штата для CPA — board это официальная организация, которая выдаёт лицензию в вашем штате.",
   "Откройте страницу, где показан маршрут получения лицензии, шаг за шагом.",
   "Найдите часть про кредиты за учёбу и прочитайте, ваше число — 120 credits или 150; credits это баллы, которые вы получаете за занятия в колледже.",
   "Запишите ваше число в заметки: 120 или 150."
  ]
 },
 "cpa-q5": {
  "how": [
   "Open a job board and search for Workiva — type the word Workiva in the search box.",
   "Open one posting that asks for Workiva in its requirements and read that part carefully.",
   "Tap Save on that posting so you keep it.",
   "Remember: this saved posting shows you the door into SEC reporting, which is making official reports for public companies."
  ],
  "howRu": [
   "Откройте сайт с вакансиями и введите в поиск слово Workiva.",
   "Откройте одну вакансию, где Workiva названа в требованиях, и внимательно прочитайте эту часть.",
   "Нажмите Save — сохранить — на этой вакансии, чтобы она у вас осталась.",
   "Запомните: эта сохранённая вакансия показывает вам дверь в SEC reporting — это подготовка официальных отчётов для публичных компаний."
  ]
 },
 "cpa-q6": {
  "how": [
   "Scroll down this Path page until you see the resume block.",
   "Tap the upload button in that block and pick your resume file from your phone or computer.",
   "Wait a few seconds until small labels appear that say Evidence found.",
   "Tap Confirm on one label that is true for you — that is the quest done."
  ],
  "howRu": [
   "Прокрутите эту страницу Path вниз, пока не увидите блок с резюме.",
   "Нажмите кнопку загрузки в этом блоке и выберите файл вашего резюме с телефона или компьютера.",
   "Подождите несколько секунд, пока не появятся маленькие пометки Evidence found — найдено доказательство.",
   "Нажмите Confirm — подтвердить — на одной пометке, которая про вас правда, — квест выполнен."
  ]
 },
 "cpa-q7": {
  "how": [
   "Open the Radar tab in this app.",
   "Read the newest signal at the top — it has a date on it.",
   "That is all — you do not need to do anything else for this quest."
  ],
  "howRu": [
   "Откройте вкладку Radar в этом приложении.",
   "Прочитайте самый новый сигнал наверху — на нём стоит дата.",
   "Это всё — больше для этого квеста ничего делать не нужно."
  ]
 },
 "cpa-q8": {
  "how": [
   "Open your verdict card — the share box on this page with your result on it.",
   "Tap the Share button.",
   "Send it to one person you know, or post it — as soon as it is sent, the quest is done."
  ],
  "howRu": [
   "Откройте вашу карточку вердикта — блок на этой странице с вашим результатом, из которого можно поделиться.",
   "Нажмите кнопку Share — поделиться.",
   "Отправьте её одному знакомому человеку или опубликуйте — как только отправили, квест выполнен."
  ]
 },
 "cpa-q9": {
  "how": [
   "Think of one process at work that you do fully by hand, for example typing numbers from one file into another.",
   "Write that process down in your notes in one clear line.",
   "Think how many hours it takes you in a normal month and write that number next to it."
  ],
  "howRu": [
   "Вспомните один процесс на работе, который вы делаете полностью руками, например переписываете числа из одного файла в другой.",
   "Запишите этот процесс в заметки одной понятной строкой.",
   "Подумайте, сколько часов он занимает у вас в обычный месяц, и запишите это число рядом."
  ]
 },
 "law-q1": {
  "how": [
   "Open a job board, for example LinkedIn or Indeed, and type specialist paralegal in the search box.",
   "Open the first posting that looks like a real full-time job, not an ad.",
   "Tap Save or Bookmark on that posting so you can find it again.",
   "That saved posting is now your example — this is the job shape you are aiming at."
  ],
  "howRu": [
   "Откройте сайт с вакансиями, например LinkedIn или Indeed, и введите в поиск specialist paralegal — это помощник юриста с узкой специализацией.",
   "Откройте первую вакансию, которая выглядит как настоящая работа на полную ставку, а не реклама.",
   "Нажмите Save или Bookmark — сохранить — на этой вакансии, чтобы потом легко её найти.",
   "Эта сохранённая вакансия теперь ваш пример — это форма работы, к которой вы целитесь."
  ]
 },
 "law-q10": {
  "how": [
   "Search in your browser for CIPP/US and open a page that explains it in simple words.",
   "Read what it is: a certificate that shows you know the privacy rules in the United States.",
   "Also look at who usually gets it and what topics the exam covers — just read the headings.",
   "Write one line in your notes: what CIPP/US is, in your own words."
  ],
  "howRu": [
   "Введите в браузере CIPP/US и откройте страницу, где это объясняют простыми словами.",
   "Прочитайте, что это: сертификат, который показывает, что вы знаете правила про частные данные в США.",
   "Посмотрите также, кто обычно его получает и какие темы есть на экзамене, — прочитайте только заголовки.",
   "Запишите одной строкой в заметки: что такое CIPP/US, своими словами."
  ]
 },
 "law-q2": {
  "how": [
   "Read the three choices: privacy means protecting people's private data, diligence means checking documents carefully before a deal, and healthcare means work for hospitals and health companies.",
   "Choose only one — the one you want your next job to be in.",
   "Write it down in one line in your notes, for example: My area is privacy."
  ],
  "howRu": [
   "Прочитайте три варианта: privacy — это защита частных данных людей, diligence — это внимательная проверка документов перед сделкой, а healthcare — это работа для больниц и медицинских компаний.",
   "Выберите только один вариант — тот, в котором вы хотите вашу следующую работу.",
   "Запишите это одной строкой в заметки, например: Моя область — privacy."
  ]
 },
 "law-q3": {
  "how": [
   "On a job board, search for senior postings and open three different ones, one by one.",
   "In each posting, scroll until you find the line about education — the degree it asks for.",
   "Write that line down for each posting, so you have three lines in your notes.",
   "Look at your three lines — most of them ask for a bachelor's, which is a four-year college degree."
  ],
  "howRu": [
   "На сайте с вакансиями найдите senior-вакансии и откройте три разные, по одной.",
   "В каждой вакансии прокрутите текст до строки про образование — какую степень там просят.",
   "Запишите эту строку для каждой вакансии, чтобы у вас в заметках было три строки.",
   "Посмотрите на ваши три строки — большинство просит bachelor's, это степень после четырёх лет учёбы в колледже или университете."
  ]
 },
 "law-q4": {
  "how": [
   "In your browser, search for Kira or Harvey and open the official page of one of them — these are AI tools for law firms.",
   "Find the part that explains diligence — the careful checking of contracts and documents before a deal.",
   "Read what the AI does there: what it reads, what it finds, and what a person still checks.",
   "Stop after five minutes and write one sentence in your notes about what the AI does."
  ],
  "howRu": [
   "Введите в браузере Kira или Harvey и откройте официальную страницу одного из них — это AI-инструменты для юридических фирм.",
   "Найдите часть, где объясняется diligence — внимательная проверка договоров и документов перед сделкой.",
   "Прочитайте, что там делает AI: что он читает, что находит и что человек всё равно проверяет сам.",
   "Через пять минут остановитесь и запишите в заметки одно предложение о том, что делает AI."
  ]
 },
 "law-q5": {
  "how": [
   "Search in your browser for the Cooley posting, or open it on a job board if you saved it there.",
   "Find the pay line with $135,200–$176,800 and read the whole posting around it.",
   "Look for what the posting asks for so a person can get the top of that pay — for example more experience or a chosen practice area.",
   "Write down in your notes, in your own words, what it asks for, next to the pay line."
  ],
  "howRu": [
   "Найдите в браузере вакансию Cooley или откройте её на сайте с вакансиями, если вы её там сохранили.",
   "Найдите строку оплаты $135,200–$176,800 и прочитайте вокруг неё всю вакансию.",
   "Посмотрите, что вакансия просит, чтобы человек мог получить верх этой оплаты, — например больше опыта или выбранную область практики.",
   "Запишите в заметки своими словами, что там просят, рядом со строкой оплаты."
  ]
 },
 "law-q6": {
  "how": [
   "Scroll down this Path page until you see the resume block.",
   "Tap the upload button in that block and pick your resume file from your phone or computer.",
   "Wait a few seconds until small labels appear that say Evidence found.",
   "Tap Confirm on one label that is true for you — that is the quest done."
  ],
  "howRu": [
   "Прокрутите эту страницу Path вниз, пока не увидите блок с резюме.",
   "Нажмите кнопку загрузки в этом блоке и выберите файл вашего резюме с телефона или компьютера.",
   "Подождите несколько секунд, пока не появятся маленькие пометки Evidence found — найдено доказательство.",
   "Нажмите Confirm — подтвердить — на одной пометке, которая про вас правда, — квест выполнен."
  ]
 },
 "law-q7": {
  "how": [
   "Open the Radar tab in this app.",
   "Read the newest signal at the top — it has a date on it.",
   "That is all — you do not need to do anything else for this quest."
  ],
  "howRu": [
   "Откройте вкладку Radar в этом приложении.",
   "Прочитайте самый новый сигнал наверху — на нём стоит дата.",
   "Это всё — больше для этого квеста ничего делать не нужно."
  ]
 },
 "law-q8": {
  "how": [
   "Open your verdict card — the share box on this page with your result on it.",
   "Tap the Share button.",
   "Send it to one person you know, or post it — as soon as it is sent, the quest is done."
  ],
  "howRu": [
   "Откройте вашу карточку вердикта — блок на этой странице с вашим результатом, из которого можно поделиться.",
   "Нажмите кнопку Share — поделиться.",
   "Отправьте её одному знакомому человеку или опубликуйте — как только отправили, квест выполнен."
  ]
 },
 "law-q9": {
  "how": [
   "Think of one small task you do again and again at work, for example filing the same form or checking the same list.",
   "Next time you do it, look at the clock when you start and when you finish, or use a timer on your phone.",
   "Do the task just once for this quest, at your normal speed.",
   "Write down in your notes how many minutes it took."
  ],
  "howRu": [
   "Вспомните одну маленькую задачу, которую вы снова и снова делаете на работе, например заполняете одну и ту же форму или проверяете один и тот же список.",
   "Когда будете делать её в следующий раз, посмотрите на часы в начале и в конце или включите таймер на телефоне.",
   "Для этого квеста сделайте задачу только один раз, в вашем обычном темпе.",
   "Запишите в заметки, сколько минут это заняло."
  ]
 }
});

var QUEST_DETAILS = (typeof QUEST_DETAILS !== "undefined" && QUEST_DETAILS) || {};
Object.assign(QUEST_DETAILS, {
 "fin-q1": {
  "how": [
   "Open a job board and search for FP&A partner — FP&A means financial planning and analysis, and a partner works closely with one business team, not just on reports.",
   "Open one posting with partner in the title and read what the job actually does day to day.",
   "Tap Save or bookmark it, and skip plain analyst postings for now."
  ],
  "howRu": [
   "Откройте сайт вакансий и поищите FP&A partner — FP&A означает финансовое планирование и анализ, а partner работает тесно с одной командой бизнеса, а не только над отчётами.",
   "Откройте одну вакансию со словом partner в названии и прочитайте, что там правда делают каждый день.",
   "Нажмите «Сохранить» или добавьте её в закладки, а обычные вакансии analyst пока пропускайте."
  ]
 },
 "fin-q10": {
  "how": [
   "Open one FP&A posting on a job board and look in the requirements part for CFA — CFA is a hard finance certificate that takes years to get.",
   "Decide which it is in this posting: the word required next to it, the word preferred next to it, or CFA is not there at all.",
   "Write down that one answer. Our scan: required in 0 of 40."
  ],
  "howRu": [
   "Откройте одну вакансию FP&A на сайте вакансий и посмотрите в разделе требований CFA — CFA это сложный финансовый сертификат, на который уходят годы.",
   "Решите, что именно в этой вакансии: рядом с ним стоит слово required, рядом стоит слово preferred, или CFA там вообще нет.",
   "Запишите этот один ответ. Наш скан: требуется в 0 из 40."
  ]
 },
 "fin-q2": {
  "how": [
   "Look at the choices: partner, strategic, hybrid, or corp dev — think about which seat you want most, and pick only one.",
   "Write that one word down in your notes or on paper.",
   "That one line is your target — do not write a list, just the one."
  ],
  "howRu": [
   "Посмотрите на варианты: partner, strategic, hybrid или corp dev — подумайте, какое место вы хотите больше всего, и выберите только одно.",
   "Запишите это одно слово в заметки или на бумагу.",
   "Эта одна строка и есть ваша цель — не пишите список, только одно."
  ]
 },
 "fin-q3": {
  "how": [
   "Open 3 FP&A postings on a job board.",
   "In each posting, look in the requirements part for the word SQL — SQL is the language used to pull numbers out of a database.",
   "Count how many of the 3 ask for SQL and write that count down. In our scan it was 31 of 40."
  ],
  "howRu": [
   "Откройте 3 вакансии FP&A на сайте вакансий.",
   "В каждой вакансии посмотрите в разделе требований слово SQL — SQL это язык, на котором достают числа из базы данных.",
   "Посчитайте, в скольких из 3 просят SQL, и запишите это число. В нашем скане это было 31 из 40."
  ]
 },
 "fin-q4": {
  "how": [
   "Take a sheet of paper and a pen — no computer for this one, and give yourself ten minutes.",
   "Write a short SQL query: name one table to take numbers from, add one filter that picks only some rows, and add one sum that adds numbers up.",
   "Stop when those three parts are on the page — it does not have to be perfect."
  ],
  "howRu": [
   "Возьмите лист бумаги и ручку — для этого задания без компьютера, и дайте себе десять минут.",
   "Напишите короткий SQL-запрос: назовите одну таблицу, откуда брать числа, добавьте один фильтр, который выбирает только часть строк, и добавьте одну сумму, которая складывает числа.",
   "Остановитесь, когда эти три части есть на странице — идеально быть не должно."
  ]
 },
 "fin-q5": {
  "how": [
   "Open a job board and search for FP&A jobs adding the word Anaplan — Anaplan is a planning tool some finance teams use instead of spreadsheets.",
   "Open postings until you find one that names Anaplan in the text.",
   "Save that posting. Platforms are named in 16 of 40 postings."
  ],
  "howRu": [
   "Откройте сайт вакансий и поищите вакансии FP&A, добавив слово Anaplan — Anaplan это инструмент планирования, который некоторые финансовые команды используют вместо таблиц.",
   "Открывайте вакансии, пока не найдёте одну, где Anaplan назван в тексте.",
   "Сохраните эту вакансию. Платформы названы в 16 из 40 вакансий."
  ]
 },
 "fin-q6": {
  "how": [
   "Scroll to the resume block on this Path page.",
   "Tap the upload button and pick your resume file.",
   "Wait for the Evidence found chips to appear, then tap Confirm on one chip that is true."
  ],
  "howRu": [
   "Пролистайте к блоку резюме на этой странице Path.",
   "Нажмите кнопку загрузки и выберите файл вашего резюме.",
   "Дождитесь плашек Evidence found и нажмите Confirm на одной плашке, которая верна."
  ]
 },
 "fin-q7": {
  "how": [
   "Open the Radar tab in this app.",
   "Read the newest signal — it has a date on it.",
   "That is all — you have seen how the market moved."
  ],
  "howRu": [
   "Откройте вкладку Radar в этом приложении.",
   "Прочитайте самый новый сигнал — на нём есть дата.",
   "Это всё — вы увидели, как двинулся рынок."
  ]
 },
 "fin-q8": {
  "how": [
   "Open your verdict card in the share box on this page.",
   "Tap Share.",
   "Send it to one person or post it — done."
  ],
  "howRu": [
   "Откройте вашу карточку вердикта в блоке шеринга на этой странице.",
   "Нажмите Share.",
   "Отправьте её одному человеку или опубликуйте — готово."
  ]
 },
 "fin-q9": {
  "how": [
   "Think of the reports you make at work and pick one that you rebuild again every month.",
   "Write its name down in your notes.",
   "Next to it, write how many hours it eats each time — that report is your automation target."
  ],
  "howRu": [
   "Вспомните отчёты, которые вы делаете на работе, и выберите один, который вы пересобираете заново каждый месяц.",
   "Запишите его название в заметки.",
   "Рядом запишите, сколько часов он ест каждый раз — этот отчёт и есть ваша цель автоматизации."
  ]
 },
 "nurse-q1": {
  "how": [
   "Open a job board or a hospital careers page and search for ICU RN, ER RN, or OR RN — these are intensive care, emergency room, and operating room nurse jobs.",
   "Open one posting that looks like a job you would actually want.",
   "Tap Save or bookmark it, so you can come back to it later."
  ],
  "howRu": [
   "Откройте сайт вакансий или страницу вакансий больницы и поищите ICU RN, ER RN или OR RN — это медсестра реанимации, приёмного покоя и операционной.",
   "Откройте одну вакансию, похожую на работу, которую вы правда хотели бы получить.",
   "Нажмите «Сохранить» или добавьте её в закладки, чтобы потом к ней вернуться."
  ]
 },
 "nurse-q10": {
  "how": [
   "Search for a nurse practice map — it shows, state by state, how freely a nurse practitioner may work on their own.",
   "Find your state on the map and read its label: Full, Reduced, or Restricted.",
   "Write that word down next to your state name."
  ],
  "howRu": [
   "Поищите карту практики медсестёр — она показывает по штатам, насколько свободно практикующая медсестра может работать самостоятельно.",
   "Найдите ваш штат на карте и прочитайте его пометку: Full, Reduced или Restricted.",
   "Запишите это слово рядом с названием вашего штата."
  ]
 },
 "nurse-q2": {
  "how": [
   "Look at the choices: ICU, ER, OR, psych, or anesthesia — think about which one you want most, and pick only one.",
   "Write that one word down in your notes or on paper.",
   "That one line is your target — do not write a list, just the one."
  ],
  "howRu": [
   "Посмотрите на варианты: ICU, ER, OR, psych или anesthesia — подумайте, что вы хотите больше всего, и выберите только одно.",
   "Запишите это одно слово в заметки или на бумагу.",
   "Эта одна строка и есть ваша цель — не пишите список, только одно."
  ]
 },
 "nurse-q3": {
  "how": [
   "Open 3 postings for your specialty on a job board or hospital careers page.",
   "In each posting, look in the requirements part for a certificate name: BLS is the basic life support card, ACLS is the advanced heart life support card, and CCRN is a critical care nurse certificate.",
   "Write down the name you saw most often across the 3 postings."
  ],
  "howRu": [
   "Откройте 3 вакансии по вашей специальности на сайте вакансий или на странице вакансий больницы.",
   "В каждой вакансии посмотрите в разделе требований название сертификата: BLS — это базовый сертификат поддержки жизни, ACLS — расширенный сертификат помощи при остановке сердца, а CCRN — сертификат медсестры реанимации.",
   "Запишите название, которое встретилось чаще всего в этих 3 вакансиях."
  ]
 },
 "nurse-q4": {
  "how": [
   "Find your BLS card — look in your wallet, your certificate folder, or the app or email where your employer keeps it. BLS is your basic life support certificate.",
   "Read the expiry date printed on the card.",
   "If that date falls in this year, write down the month it ends, so you know when to renew it."
  ],
  "howRu": [
   "Найдите вашу карточку BLS — посмотрите в кошельке, в папке с сертификатами или в приложении и почте, где её хранит работодатель. BLS — это ваш базовый сертификат поддержки жизни.",
   "Прочитайте дату окончания, которая напечатана на карточке.",
   "Если эта дата выпадает на этот год, запишите месяц, в котором она заканчивается, чтобы знать, когда обновлять."
  ]
 },
 "nurse-q5": {
  "how": [
   "Open a job board and search for RN jobs in your specialty, adding the words sign-on bonus to your search.",
   "Open postings until you find one that names a sign-on bonus — they run $10K–$25K.",
   "Save that posting and write down the exact bonus number it shows."
  ],
  "howRu": [
   "Откройте сайт вакансий и поищите вакансии RN по вашей специальности, добавив к поиску слова sign-on bonus.",
   "Открывайте вакансии, пока не найдёте одну, где назван бонус за выход на работу — они идут $10K–$25K.",
   "Сохраните эту вакансию и запишите точное число бонуса, которое там указано."
  ]
 },
 "nurse-q6": {
  "how": [
   "Scroll to the resume block on this Path page.",
   "Tap the upload button and pick your resume file.",
   "Wait for the Evidence found chips to appear, then tap Confirm on one chip that is true."
  ],
  "howRu": [
   "Пролистайте к блоку резюме на этой странице Path.",
   "Нажмите кнопку загрузки и выберите файл вашего резюме.",
   "Дождитесь плашек Evidence found и нажмите Confirm на одной плашке, которая верна."
  ]
 },
 "nurse-q7": {
  "how": [
   "Open the Radar tab in this app.",
   "Read the newest signal — it has a date on it.",
   "That is all — you have seen how the market moved."
  ],
  "howRu": [
   "Откройте вкладку Radar в этом приложении.",
   "Прочитайте самый новый сигнал — на нём есть дата.",
   "Это всё — вы увидели, как двинулся рынок."
  ]
 },
 "nurse-q8": {
  "how": [
   "Open your verdict card in the share box on this page.",
   "Tap Share.",
   "Send it to one person or post it — done."
  ],
  "howRu": [
   "Откройте вашу карточку вердикта в блоке шеринга на этой странице.",
   "Нажмите Share.",
   "Отправьте её одному человеку или опубликуйте — готово."
  ]
 },
 "nurse-q9": {
  "how": [
   "Pick one ADN program — ADN is the two-year nursing degree — and open its tuition or cost page. A school website or search result is fine.",
   "Find its total price and put it next to $5,472, the Wake Tech total.",
   "Subtract the smaller number from the bigger one and write down the difference."
  ],
  "howRu": [
   "Выберите одну программу ADN — ADN это двухлетняя программа медсестёр — и откройте её страницу с ценой обучения. Подойдёт сайт учебного заведения или результат поиска.",
   "Найдите её полную цену и поставьте рядом с $5,472 — итогом Wake Tech.",
   "Вычтите меньшее число из большего и запишите разницу."
  ]
 }
});

var QUEST_DETAILS = (typeof QUEST_DETAILS !== "undefined" && QUEST_DETAILS) || {};
Object.assign(QUEST_DETAILS, {
 "analyst-q1": {
  "how": [
   "Go to a job board like LinkedIn or Indeed and search for \"product analyst\".",
   "Open one posting and read what the person would do day to day.",
   "Tap Save on that posting, and skip postings that are only about making dashboards when someone asks for one."
  ],
  "howRu": [
   "Зайдите на сайт вакансий, например LinkedIn или Indeed, и поищите \"product analyst\".",
   "Откройте одну вакансию и прочитайте, что человек будет делать каждый день.",
   "Нажмите «Сохранить» у этой вакансии и пропускайте вакансии только про дашборды по запросу."
  ]
 },
 "analyst-q10": {
  "how": [
   "BLS is the US Bureau of Labor Statistics — the government's job-numbers office that counts pay and how fast jobs grow.",
   "Look at the two lines side by side: $101,860 at +10% growth, and $120,230 at +35% growth.",
   "Write down which line matches the seat you aim at — that is what \"which house is yours\" means."
  ],
  "howRu": [
   "BLS — это Бюро статистики труда США, государственный офис, который считает зарплаты и то, как быстро растёт число рабочих мест.",
   "Посмотрите на две строки рядом: $101,860 при росте +10% и $120,230 при росте +35%.",
   "Запишите, какая строка совпадает с местом, в которое вы целитесь, — это и значит «какой дом ваш»."
  ]
 },
 "analyst-q2": {
  "how": [
   "Look at the four choices: product, analytics engineer, strategy, or data scientist.",
   "Pick only one — the job title you want most, not all of them.",
   "Write it down in one line, for example: \"My seat is product analyst.\""
  ],
  "howRu": [
   "Посмотрите на четыре варианта: product, analytics engineer, strategy или data scientist.",
   "Выберите только один — должность, которую хотите больше всего, а не все сразу.",
   "Запишите это одной строкой, например: «Моё место — product analyst»."
  ]
 },
 "analyst-q3": {
  "how": [
   "Go to a job board and open 3 different analyst postings, one by one.",
   "In each posting, look for the word SQL and mark yes or no.",
   "Write down your count, like \"2 of 3 ask for SQL\" — in our scan it was 43 of 46."
  ],
  "howRu": [
   "Зайдите на сайт вакансий и откройте 3 разные вакансии аналитика, по одной.",
   "В каждой вакансии поищите слово SQL и отметьте: да или нет.",
   "Запишите свой подсчёт, например «2 из 3 просят SQL» — в нашем скане было 43 из 46."
  ]
 },
 "analyst-q4": {
  "how": [
   "Take a sheet of paper and a pen — no computer needed.",
   "Write the name of one table, which is just a list of rows, like \"orders\", then write one filter line: only rows where month = May.",
   "Write one sum line: add up the money column. It does not need to run anywhere — the shape is the point."
  ],
  "howRu": [
   "Возьмите лист бумаги и ручку — компьютер не нужен.",
   "Напишите название одной таблицы — это просто список строк, например \"orders\", — затем одну строку фильтра: только строки, где month = May.",
   "Напишите одну строку суммы: сложить столбец с деньгами. Запускать это нигде не нужно — важна сама форма."
  ]
 },
 "analyst-q5": {
  "how": [
   "Go to a job board and search for \"analytics engineer\", then open one posting.",
   "Look through the list of tools it asks for and find the line with dbt.",
   "Write down that you found it — in our scan, 7 of 7 postings ask for it."
  ],
  "howRu": [
   "Зайдите на сайт вакансий, поищите \"analytics engineer\" и откройте одну вакансию.",
   "Просмотрите список инструментов, которые там просят, и найдите строку с dbt.",
   "Запишите, что вы её нашли, — в нашем скане dbt просят 7 из 7 вакансий."
  ]
 },
 "analyst-q6": {
  "how": [
   "Scroll to the resume block on this Path page.",
   "Tap the upload button, pick your resume file, and wait for the \"Evidence found\" chips to appear.",
   "Tap Confirm on one chip that is true for you."
  ],
  "howRu": [
   "Прокрутите до блока резюме на этой странице Path.",
   "Нажмите кнопку загрузки, выберите файл своего резюме и дождитесь плашек \"Evidence found\".",
   "Нажмите Confirm на одной плашке, которая про вас — правда."
  ]
 },
 "analyst-q7": {
  "how": [
   "Open the Radar tab in this app.",
   "Read the newest signal at the top — it has a date on it.",
   "That is all you need to do for this quest."
  ],
  "howRu": [
   "Откройте вкладку Radar в этом приложении.",
   "Прочитайте самый новый сигнал наверху — на нём есть дата.",
   "Это всё, что нужно сделать в этом квесте."
  ]
 },
 "analyst-q8": {
  "how": [
   "Open your verdict card in the share box on this page.",
   "Tap Share.",
   "Send it to one person or post it — done."
  ],
  "howRu": [
   "Откройте свою карточку вердикта в блоке шеринга на этой странице.",
   "Нажмите Share.",
   "Отправьте её одному человеку или опубликуйте — готово."
  ]
 },
 "analyst-q9": {
  "how": [
   "Think of one dashboard at work that nobody opens, or pick one you know well.",
   "Ask yourself: what choice was this dashboard supposed to help someone make?",
   "Write that decision down in one plain sentence, for example: \"whether to keep this product or stop it.\""
  ],
  "howRu": [
   "Вспомните один дашборд на работе, который никто не открывает, или выберите один знакомый вам.",
   "Спросите себя: какое решение этот дашборд должен был помогать принять?",
   "Запишите это решение одним простым предложением, например: «оставлять этот продукт или закрывать его»."
  ]
 },
 "dataanalyst-q1": {
  "how": [
   "Go to a job board like LinkedIn or Indeed and search for \"product analyst\".",
   "Open one posting and read what the person would do day to day.",
   "Tap Save on that posting, and skip postings that are only about making dashboards when someone asks for one."
  ],
  "howRu": [
   "Зайдите на сайт вакансий, например LinkedIn или Indeed, и поищите \"product analyst\".",
   "Откройте одну вакансию и прочитайте, что человек будет делать каждый день.",
   "Нажмите «Сохранить» у этой вакансии и пропускайте вакансии только про дашборды по запросу."
  ]
 },
 "dataanalyst-q10": {
  "how": [
   "BLS is the US Bureau of Labor Statistics — the government's job-numbers office that counts pay and how fast jobs grow.",
   "Read the data-scientist line there: median pay $120,230 and growth +35% — median means half of people earn more and half earn less.",
   "Write down in one sentence what this means for your seat, for example whether this faster-growing seat is the one you want to move toward."
  ],
  "howRu": [
   "BLS — это Бюро статистики труда США, государственный офис, который считает зарплаты и то, как быстро растёт число рабочих мест.",
   "Прочитайте там строку про data scientists: медианная зарплата $120,230 и рост +35% — медиана значит, что половина людей зарабатывает больше, а половина меньше.",
   "Запишите одним предложением, что это значит для вашего места, например: хотите ли вы двигаться к этому быстрее растущему месту."
  ]
 },
 "dataanalyst-q2": {
  "how": [
   "Look at the three choices: product, analytics engineer, or the data-scientist door.",
   "Pick only one — the job title you want most, not all of them.",
   "Write it down in one line, for example: \"My seat is product analyst.\""
  ],
  "howRu": [
   "Посмотрите на три варианта: product, analytics engineer или дверь data scientist.",
   "Выберите только один — должность, которую хотите больше всего, а не все сразу.",
   "Запишите это одной строкой, например: «Моё место — product analyst»."
  ]
 },
 "dataanalyst-q3": {
  "how": [
   "Go to a job board and open 3 different data analyst postings, one by one.",
   "In each posting, look for the word SQL and mark yes or no.",
   "Write down your count, like \"2 of 3 ask for SQL\" — in our data-side scan it was 24 of 24."
  ],
  "howRu": [
   "Зайдите на сайт вакансий и откройте 3 разные вакансии data analyst, по одной.",
   "В каждой вакансии поищите слово SQL и отметьте: да или нет.",
   "Запишите свой подсчёт, например «2 из 3 просят SQL» — в нашем скане стороны данных было 24 из 24."
  ]
 },
 "dataanalyst-q4": {
  "how": [
   "Take a sheet of paper and a pen — no computer needed.",
   "Write the name of one table, which is just a list of rows, like \"orders\", then write one filter line: only rows where month = May.",
   "Write one sum line: add up the money column. It does not need to run anywhere — the shape is the point."
  ],
  "howRu": [
   "Возьмите лист бумаги и ручку — компьютер не нужен.",
   "Напишите название одной таблицы — это просто список строк, например \"orders\", — затем одну строку фильтра: только строки, где month = May.",
   "Напишите одну строку суммы: сложить столбец с деньгами. Запускать это нигде не нужно — важна сама форма."
  ]
 },
 "dataanalyst-q5": {
  "how": [
   "Go to a job board and search for \"analytics engineer\", then open one posting.",
   "Look through the list of tools it asks for and find the line with dbt.",
   "Write down that you found it — in our scan, 7 of 7 postings ask for it."
  ],
  "howRu": [
   "Зайдите на сайт вакансий, поищите \"analytics engineer\" и откройте одну вакансию.",
   "Просмотрите список инструментов, которые там просят, и найдите строку с dbt.",
   "Запишите, что вы её нашли, — в нашем скане dbt просят 7 из 7 вакансий."
  ]
 },
 "dataanalyst-q6": {
  "how": [
   "Scroll to the resume block on this Path page.",
   "Tap the upload button, pick your resume file, and wait for the \"Evidence found\" chips to appear.",
   "Tap Confirm on one chip that is true for you."
  ],
  "howRu": [
   "Прокрутите до блока резюме на этой странице Path.",
   "Нажмите кнопку загрузки, выберите файл своего резюме и дождитесь плашек \"Evidence found\".",
   "Нажмите Confirm на одной плашке, которая про вас — правда."
  ]
 },
 "dataanalyst-q7": {
  "how": [
   "Open the Radar tab in this app.",
   "Read the newest signal at the top — it has a date on it.",
   "That is all you need to do for this quest."
  ],
  "howRu": [
   "Откройте вкладку Radar в этом приложении.",
   "Прочитайте самый новый сигнал наверху — на нём есть дата.",
   "Это всё, что нужно сделать в этом квесте."
  ]
 },
 "dataanalyst-q8": {
  "how": [
   "Open your verdict card in the share box on this page.",
   "Tap Share.",
   "Send it to one person or post it — done."
  ],
  "howRu": [
   "Откройте свою карточку вердикта в блоке шеринга на этой странице.",
   "Нажмите Share.",
   "Отправьте её одному человеку или опубликуйте — готово."
  ]
 },
 "dataanalyst-q9": {
  "how": [
   "Think of one dashboard at work that nobody opens, or pick one you know well.",
   "Ask yourself: what choice was this dashboard supposed to help someone make?",
   "Write that decision down in one plain sentence, for example: \"whether to keep this product or stop it.\""
  ],
  "howRu": [
   "Вспомните один дашборд на работе, который никто не открывает, или выберите один знакомый вам.",
   "Спросите себя: какое решение этот дашборд должен был помогать принять?",
   "Запишите это решение одним простым предложением, например: «оставлять этот продукт или закрывать его»."
  ]
 }
});

var QUEST_DETAILS = (typeof QUEST_DETAILS !== "undefined" && QUEST_DETAILS) || {};
Object.assign(QUEST_DETAILS, {
 "aicreator-q1": {
  "how": [
   "Choose ONE seat: a real face with an AI crew, meaning you on camera with AI helping you make videos, or AI video for brands, meaning you make AI videos for companies.",
   "Write it in one sentence that starts with what you are, for example: I am a real face with an AI crew.",
   "Pin that sentence where you work - on your wall, your desk or your phone home screen."
  ],
  "howRu": [
   "Выберите ОДНО место: настоящее лицо с AI-командой, то есть вы в кадре, а AI помогает вам делать видео, или AI-видео для брендов, то есть вы делаете AI-видео для компаний.",
   "Напишите это одним предложением, которое начинается с того, кто вы, например: я - настоящее лицо с AI-командой.",
   "Прикрепите это предложение там, где вы работаете, - на стену, на стол или на главный экран телефона."
  ]
 },
 "aicreator-q10": {
  "how": [
   "Count how many pieces you finished and shipped this month and write that as line one.",
   "Work out how many minutes one piece takes you on average and write that as line two.",
   "Add up the money that came in this month and write that as line three - three lines, done."
  ],
  "howRu": [
   "Посчитайте, сколько работ вы закончили и отправили в этом месяце, и запишите это первой строкой.",
   "Посчитайте, сколько минут у вас в среднем занимает одна работа, и запишите это второй строкой.",
   "Сложите деньги, которые пришли в этом месяце, и запишите это третьей строкой - три строки, готово."
  ]
 },
 "aicreator-q2": {
  "how": [
   "Pick one old video you already made and start a timer on your phone.",
   "Re-cut that same video using your AI pipeline - your usual AI tools for cutting, captions and sound.",
   "Stop the timer when the new version is ready and write down how many minutes it took."
  ],
  "howRu": [
   "Выберите одно старое видео, которое вы уже сделали, и включите таймер на телефоне.",
   "Перемонтируйте это же видео вашим AI-процессом - вашими обычными AI-инструментами для монтажа, субтитров и звука.",
   "Остановите таймер, когда новая версия готова, и запишите, сколько минут это заняло."
  ]
 },
 "aicreator-q3": {
  "how": [
   "Pick one product and open your AI video or text tool.",
   "Make three different hooks for it - a hook is the first line or first shot that makes someone stop and watch.",
   "Read or watch all three and pick the one a real human would stop scrolling for."
  ],
  "howRu": [
   "Выберите один продукт и откройте ваш AI-инструмент для видео или текста.",
   "Сделайте для него три разных хука - хук это первая фраза или первый кадр, который заставляет человека остановиться и смотреть.",
   "Прочитайте или посмотрите все три и выберите тот, на котором настоящий человек остановит прокрутку."
  ]
 },
 "aicreator-q4": {
  "how": [
   "Search for the FTC fake-review rule in plain words - the FTC is the US consumer-protection agency, the office that protects buyers.",
   "Read what it says in simple language: a made-up AI person must not pretend to be a happy customer giving a real testimonial.",
   "Open your current scripts and check them one by one against that rule. Fix or remove any line where an AI person fakes a testimonial."
  ],
  "howRu": [
   "Поищите правило FTC о фейковых отзывах простыми словами - FTC это агентство США по защите потребителей, ведомство, которое защищает покупателей.",
   "Прочитайте простыми словами, что там сказано: выдуманный AI-человек не должен изображать довольного покупателя, который даёт настоящий отзыв.",
   "Откройте ваши текущие скрипты и проверьте их по одному по этому правилу. Исправьте или уберите любую строку, где AI-человек изображает отзыв."
  ]
 },
 "aicreator-q5": {
  "how": [
   "Pick one ad idea and find or make the filmed style version - shot with a real camera and a real person.",
   "Make the same ad again with your AI tools, with the same product and the same main message.",
   "Save both versions together in one folder, so you can show them side by side on your rate card."
  ],
  "howRu": [
   "Выберите одну идею рекламы и найдите или сделайте снятую версию - снятую настоящей камерой с настоящим человеком.",
   "Сделайте ту же рекламу снова вашими AI-инструментами, с тем же продуктом и той же главной мыслью.",
   "Сохраните обе версии вместе в одной папке, чтобы показывать их рядом в вашей карточке цен."
  ]
 },
 "aicreator-q6": {
  "how": [
   "Look in your niche on social media or in an ads library and find one brand that is running ads with an AI label on them.",
   "Open the ad and look at how the label shows - for example small text on the video or a note in the caption.",
   "Write down the brand, what they sell, and exactly how the AI label shows."
  ],
  "howRu": [
   "Посмотрите в вашей нише в соцсетях или в библиотеке рекламы и найдите один бренд, который крутит рекламу с пометкой AI.",
   "Откройте рекламу и посмотрите, как видна пометка, - например мелкий текст на видео или заметка в подписи.",
   "Запишите бренд, что они продают и как именно видна пометка AI."
  ]
 },
 "aicreator-q7": {
  "how": [
   "Pick one local brand you know and find where to message them, like their social media inbox or email.",
   "Write one short message offering them this: ten AI ad variants for the price of one filmed video.",
   "Send that one message today - that is the whole quest."
  ],
  "howRu": [
   "Выберите один локальный бренд, который вы знаете, и найдите, куда им написать, например в сообщения их соцсетей или на почту.",
   "Напишите одно короткое сообщение и предложите им это: десять вариантов рекламы с AI по цене одного снятого видео.",
   "Отправьте это одно сообщение сегодня - это и есть весь квест."
  ]
 },
 "aicreator-q8": {
  "how": [
   "Open your verdict card in the share box on this page.",
   "Tap Share.",
   "Send it to one person or post it - done."
  ],
  "howRu": [
   "Откройте вашу карточку вердикта в блоке шеринга на этой странице.",
   "Нажмите «Поделиться».",
   "Отправьте её одному человеку или опубликуйте - готово."
  ]
 },
 "aicreator-q9": {
  "how": [
   "Pick one of your videos and run it through your dubbing pipeline to make a version in a second language.",
   "Watch the new version fully once, from start to end, and check the words and voice sound right.",
   "Only post it after that full watch."
  ],
  "howRu": [
   "Выберите одно ваше видео и прогоните его через ваш процесс дубляжа, чтобы сделать версию на втором языке.",
   "Посмотрите новую версию целиком один раз, от начала до конца, и проверьте, что слова и голос звучат правильно.",
   "Публикуйте её только после этого полного просмотра."
  ]
 },
 "businessanalyst-q1": {
  "how": [
   "Go to a job board like LinkedIn or Indeed and search for strategy & operations analyst.",
   "Open one posting and read what the person in this job actually does day to day.",
   "Tap Save or bookmark it, so you can find it again later.",
   "Skip postings that are only about making documents when someone asks for them - that is the pool to avoid."
  ],
  "howRu": [
   "Зайдите на сайт вакансий, например LinkedIn или Indeed, и поищите strategy & operations analyst.",
   "Откройте одну вакансию и прочитайте, что человек на этой работе реально делает каждый день.",
   "Нажмите «Сохранить» или добавьте в закладки, чтобы потом легко найти её снова.",
   "Пропускайте вакансии, где вся работа - только делать документы, когда кто-то попросит: это тот пул, которого надо избегать."
  ]
 },
 "businessanalyst-q10": {
  "how": [
   "Go to the BLS website - BLS is the US government office that publishes job numbers - and find the page for management analysts.",
   "Find this line: median pay $101,860, growth +10%, and about 94,100 openings a year.",
   "Write down in your own words what that means for your seat: is this kind of work growing, and do you want a seat like it?"
  ],
  "howRu": [
   "Зайдите на сайт BLS - BLS это государственное ведомство США, которое публикует цифры по работе, - и найдите страницу про management analysts.",
   "Найдите эту строку: медианная зарплата $101,860, рост +10% и около 94,100 открытых мест в год.",
   "Запишите своими словами, что это значит для вашего места: растёт ли такая работа и хотите ли вы место вроде этого?"
  ]
 },
 "businessanalyst-q2": {
  "how": [
   "Think about the two seats: working mainly with documents, or strategy & operations, which means helping the business decide what to do and how to run better.",
   "Pick only ONE of them - the one you actually want to aim at.",
   "Write it down in one short line, for example on a note on your phone, and keep it where you can see it."
  ],
  "howRu": [
   "Подумайте о двух местах: работа в основном с документами или strategy & operations - то есть помогать бизнесу решать, что делать и как работать лучше.",
   "Выберите только ОДНО из них - то, в которое вы правда целитесь.",
   "Запишите его одной короткой строкой, например в заметке на телефоне, и держите там, где вы её видите."
  ]
 },
 "businessanalyst-q3": {
  "how": [
   "Go to a job board and open 3 different business analyst postings, one by one.",
   "In each posting, look in the requirements and count it if it names Jira or Agile.",
   "Write down your count out of 3. In our scan it was 9 of 15 BA-family postings, so these words show up a lot."
  ],
  "howRu": [
   "Зайдите на сайт вакансий и откройте 3 разные вакансии business analyst, по одной.",
   "В каждой вакансии посмотрите требования и засчитайте её, если там названы Jira или Agile.",
   "Запишите ваше число из 3. В нашем скане было 9 из 15 вакансий семьи BA, то есть эти слова встречаются очень часто."
  ]
 },
 "businessanalyst-q4": {
  "how": [
   "Pick one document you wrote at work and open its first page.",
   "On a new page, write first the call: what decision you want the reader to make.",
   "Next write the number: the one key figure that supports that decision. Then write the ask: what exactly you want the reader to do.",
   "Keep it to that one page - that is your decision brief."
  ],
  "howRu": [
   "Выберите один документ, который вы написали на работе, и откройте его первую страницу.",
   "На новой странице сначала напишите призыв: какое решение вы хотите, чтобы принял читатель.",
   "Дальше напишите цифру: одну главную цифру, которая поддерживает это решение. Потом напишите запрос: что именно вы хотите, чтобы читатель сделал.",
   "Уложитесь в эту одну страницу - это и есть ваш бриф решения."
  ]
 },
 "businessanalyst-q5": {
  "how": [
   "Go to a job board and search for business-side analyst jobs - a good place to start is the company SanDisk, which has one like this.",
   "Open the posting and read the requirements list slowly.",
   "Find the line that names an AI tool as a requirement, not just as a nice extra, and write down the tool and the job title."
  ],
  "howRu": [
   "Зайдите на сайт вакансий и поищите вакансии аналитика со стороны бизнеса - начать можно с компании SanDisk, у неё есть такая вакансия.",
   "Откройте вакансию и медленно прочитайте список требований.",
   "Найдите строку, где AI-инструмент назван именно требованием, а не просто плюсом, и запишите инструмент и название вакансии."
  ]
 },
 "businessanalyst-q6": {
  "how": [
   "Scroll down to the resume block on this Path page.",
   "Tap the upload button and pick your resume file from your phone or computer.",
   "Wait for the Evidence found chips to appear, then tap Confirm on one chip that is true for you."
  ],
  "howRu": [
   "Прокрутите вниз до блока с резюме на этой странице пути.",
   "Нажмите кнопку загрузки и выберите файл вашего резюме с телефона или компьютера.",
   "Дождитесь плашек Evidence found и нажмите Confirm на одной плашке, которая про вас - правда."
  ]
 },
 "businessanalyst-q7": {
  "how": [
   "Open the Radar tab in this app.",
   "Read the newest signal at the top and check it has a date.",
   "That is all - one item read, and you have seen the market moving."
  ],
  "howRu": [
   "Откройте вкладку Radar в этом приложении.",
   "Прочитайте самый новый сигнал наверху и проверьте, что у него есть дата.",
   "Это всё - один пункт прочитан, и вы увидели рынок в движении."
  ]
 },
 "businessanalyst-q8": {
  "how": [
   "Open your verdict card in the share box on this page.",
   "Tap Share.",
   "Send it to one person or post it - done."
  ],
  "howRu": [
   "Откройте вашу карточку вердикта в блоке шеринга на этой странице.",
   "Нажмите «Поделиться».",
   "Отправьте её одному человеку или опубликуйте - готово."
  ]
 },
 "businessanalyst-q9": {
  "how": [
   "Think of one time your work changed a real decision at work - something the team did differently because of you.",
   "Write it in one line and put the real number from that work in the line, like money, time or people affected.",
   "Save the line where you keep your wins - you will need it for reviews and interviews."
  ],
  "howRu": [
   "Вспомните один раз, когда ваша работа изменила настоящее решение на работе - что-то, что команда стала делать иначе из-за вас.",
   "Запишите это одной строкой и вставьте в строку настоящую цифру из той работы, например деньги, время или число людей, которых это коснулось.",
   "Сохраните строку там, где вы храните свои победы, - она пригодится для оценок и собеседований."
  ]
 }
});
