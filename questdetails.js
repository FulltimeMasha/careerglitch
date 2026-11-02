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
   "Open a job site. Search for accounting jobs in your niche (your narrow area, like tax).",
   "Open one job post that is still open.",
   "Tap Save on it so you keep it.",
   "Find how much it pays. Read that line twice, slowly."
  ],
  "howRu": [
   "Откройте сайт с вакансиями. Найдите вакансии бухгалтеров в вашей нише (узкой области, например tax).",
   "Откройте одну вакансию, которая ещё открыта.",
   "Нажмите Save (сохранить), чтобы вакансия осталась у вас.",
   "Найдите, сколько там платят. Прочитайте эту строку дважды, медленно."
  ]
 },
 "cpa-q10": {
  "how": [
   "Read the quest line again: only 42% pass FAR the first time. FAR is one big part of the CPA exam, about money reports.",
   "Think what one more try would cost: the exam fee again, plus study time.",
   "Write one line in your notes: how much you'll save for a retake, just in case.",
   "Keep that line. It's a backup plan, not a guess that you'll fail."
  ],
  "howRu": [
   "Ещё раз прочитайте строку квеста: только 42% сдают FAR с первого раза. FAR — большая часть экзамена CPA, про финансовые отчёты.",
   "Подумайте, сколько будет стоить ещё одна попытка: снова плата за экзамен плюс время на учёбу.",
   "Запишите в заметки одну строку: сколько денег отложите на пересдачу, на всякий случай.",
   "Сохраните эту строку. Это запасной план, а не прогноз, что вы не сдадите."
  ]
 },
 "cpa-q2": {
  "how": [
   "Read the four choices. Tax means taxes. SEC reporting means official reports for public companies. FDD means checking a business before someone buys it. Controller is the person in charge of a company's money records.",
   "Pick only one: where you want your next job.",
   "Write it down in one line in your notes, for example: My specialty is tax."
  ],
  "howRu": [
   "Прочитайте четыре варианта. Tax — налоги. SEC reporting — официальные отчёты для публичных компаний. FDD — проверка бизнеса перед покупкой. Controller — человек, который отвечает за денежные записи компании.",
   "Выберите только один: где вы хотите следующую работу.",
   "Запишите это одной строкой в заметки, например: Моя специализация — tax."
  ]
 },
 "cpa-q3": {
  "how": [
   "On a job site, open three job posts in your niche, one by one.",
   "In each, look at the requirements for a tool name: NetSuite, Workiva, or Excel.",
   "Write down the tool from each job post. You'll have three names.",
   "Circle the name you see most. That's your answer."
  ],
  "howRu": [
   "На сайте с вакансиями откройте три вакансии в вашей нише, по одной.",
   "В каждой посмотрите требования. Ищите название инструмента: NetSuite, Workiva или Excel.",
   "Запишите инструмент из каждой вакансии. Получится три названия.",
   "Обведите название, которое встречается чаще. Это ваш ответ."
  ]
 },
 "cpa-q4": {
  "how": [
   "Search online for your state CPA board license page. The board is the office that gives the license in your state.",
   "Open the page that shows how to get the license, step by step.",
   "Find the part about college credits. Is your number 120 or 150? Credits are points you get for college classes.",
   "Write your number down in your notes: 120 or 150."
  ],
  "howRu": [
   "Найдите в интернете страницу лицензии CPA board вашего штата. Board — это ведомство, которое выдаёт лицензию в штате.",
   "Откройте страницу, где по шагам написано, как получить лицензию.",
   "Найдите часть про credits. Ваше число — 120 или 150? Credits — это баллы за предметы в колледже.",
   "Запишите ваше число в заметки: 120 или 150."
  ]
 },
 "cpa-q5": {
  "how": [
   "Open a job site. Type Workiva in the search box.",
   "Open one job post that lists Workiva in its requirements. Read that part carefully.",
   "Tap Save on that job post so you keep it.",
   "Remember: this job post shows your way into SEC reporting. That means making official reports for public companies."
  ],
  "howRu": [
   "Откройте сайт с вакансиями. Введите в поиск слово Workiva.",
   "Откройте вакансию, где Workiva есть в требованиях. Внимательно прочитайте эту часть.",
   "Нажмите Save (сохранить), чтобы вакансия осталась у вас.",
   "Запомните: эта вакансия показывает путь в SEC reporting. Это подготовка официальных отчётов для публичных компаний."
  ]
 },
 "cpa-q6": {
  "how": [
   "Scroll down this Path page to the resume block.",
   "Tap the upload button. Pick your resume file from your phone or computer.",
   "Wait a few seconds. Small labels will appear: Evidence found.",
   "Tap Confirm on one label that's true for you. Quest done."
  ],
  "howRu": [
   "Прокрутите страницу Path вниз до блока с резюме.",
   "Нажмите кнопку загрузки. Выберите файл резюме на телефоне или компьютере.",
   "Подождите несколько секунд. Появятся маленькие пометки Evidence found (найдено доказательство).",
   "Нажмите Confirm (подтвердить) на одной пометке, которая про вас правда. Квест выполнен."
  ]
 },
 "cpa-q7": {
  "how": [
   "Open the Radar tab in this app.",
   "Read the newest signal at the top. It has a date.",
   "That's all. Nothing else to do for this quest."
  ],
  "howRu": [
   "Откройте вкладку Radar в этом приложении.",
   "Прочитайте самый новый сигнал наверху. На нём стоит дата.",
   "Это всё. Больше ничего делать не нужно."
  ]
 },
 "cpa-q8": {
  "how": [
   "Open your result card. It's the share box on this page.",
   "Tap the Share button.",
   "Send it to one person or post it. Once it's sent, the quest is done."
  ],
  "howRu": [
   "Откройте карточку с вашим результатом. Это блок на этой странице, которым можно поделиться.",
   "Нажмите кнопку Share (поделиться).",
   "Отправьте её одному знакомому или опубликуйте. Как только отправили, квест выполнен."
  ]
 },
 "cpa-q9": {
  "how": [
   "Think of one task at work you do fully by hand. For example, copying numbers from one file to another.",
   "Write that task in your notes in one clear line.",
   "How many hours does it take in a normal month? Write that number next to it."
  ],
  "howRu": [
   "Вспомните одну задачу на работе, которую вы делаете полностью руками. Например, переносите числа из одного файла в другой.",
   "Запишите эту задачу в заметки одной понятной строкой.",
   "Сколько часов она занимает в обычный месяц? Запишите число рядом."
  ]
 },
 "law-q1": {
  "how": [
   "Open a job site, like LinkedIn or Indeed. Type specialist paralegal in the search box.",
   "Open the first job post that looks like a real full-time job, not an ad.",
   "Tap Save or Bookmark so you can find it again.",
   "This saved job post is now your example. It's the kind of job you're aiming for."
  ],
  "howRu": [
   "Откройте сайт с вакансиями, например LinkedIn или Indeed. Введите в поиск specialist paralegal (помощник юриста в узкой области).",
   "Откройте первую вакансию, похожую на настоящую работу на полный день, а не на рекламу.",
   "Нажмите Save или Bookmark (сохранить), чтобы потом найти её.",
   "Эта вакансия теперь ваш пример. К такой работе вы и идёте."
  ]
 },
 "law-q10": {
  "how": [
   "Search online for CIPP/US. Open a page that explains it simply.",
   "Read what it is: a certificate that shows you know US privacy rules.",
   "Also see who usually gets it and what the exam covers. Just read the headings.",
   "Write one line in your notes: what CIPP/US is, in your own words."
  ],
  "howRu": [
   "Введите в поиске CIPP/US. Откройте страницу, где это объясняют просто.",
   "Прочитайте, что это: сертификат, который показывает, что вы знаете правила о личных данных в США.",
   "Посмотрите, кто обычно его получает и что на экзамене. Хватит заголовков.",
   "Запишите одной строкой в заметки: что такое CIPP/US, своими словами."
  ]
 },
 "law-q2": {
  "how": [
   "Read the three choices. Privacy means protecting people's private data. Diligence means checking documents carefully before a deal. Healthcare means work for hospitals and health companies.",
   "Pick only one: where you want your next job.",
   "Write it down in one line in your notes, for example: My area is privacy."
  ],
  "howRu": [
   "Прочитайте три варианта. Privacy — защита личных данных людей. Diligence — внимательная проверка документов перед сделкой. Healthcare — работа для больниц и медицинских компаний.",
   "Выберите только один: где вы хотите следующую работу.",
   "Запишите это одной строкой в заметки, например: Моя область — privacy."
  ]
 },
 "law-q3": {
  "how": [
   "On a job site, search for senior jobs. Open three different ones, one by one.",
   "In each, scroll to the line about education: what degree it asks for.",
   "Write that line down for each job post. You'll have three lines.",
   "Look at your three lines. Most ask for a bachelor's (a four-year college degree)."
  ],
  "howRu": [
   "На сайте с вакансиями найдите senior-вакансии (для опытных). Откройте три разные, по одной.",
   "В каждой найдите строку про образование: какой диплом просят.",
   "Запишите эту строку для каждой вакансии. Получится три строки.",
   "Посмотрите на три строки. Большинство просит bachelor's (диплом после четырёх лет в колледже или университете)."
  ]
 },
 "law-q4": {
  "how": [
   "Search online for Kira or Harvey. Open the official page of one. These are AI tools for law firms.",
   "Find the part about diligence: carefully checking contracts and papers before a deal.",
   "Read what the AI does: what it reads, what it finds, what a person still checks.",
   "Stop after five minutes. Write one sentence in your notes about what the AI does."
  ],
  "howRu": [
   "Введите в поиске Kira или Harvey. Откройте официальную страницу одного из них. Это AI-инструменты для юридических фирм.",
   "Найдите часть про diligence: внимательную проверку договоров и документов перед сделкой.",
   "Прочитайте, что делает AI: что читает, что находит, что человек всё равно проверяет сам.",
   "Через пять минут остановитесь. Запишите в заметки одно предложение о том, что делает AI."
  ]
 },
 "law-q5": {
  "how": [
   "Search online for the Cooley job post. Or open it on the job site if you saved it.",
   "Find the pay: $135,200–$176,800. Read the whole job post around it.",
   "Look for what you need to get the top pay. For example, more experience or a certain area of law.",
   "Write what it asks for in your own words, next to the pay."
  ],
  "howRu": [
   "Найдите в интернете вакансию Cooley. Или откройте её на сайте, если сохранили.",
   "Найдите оплату $135,200–$176,800. Прочитайте всю вакансию вокруг неё.",
   "Посмотрите, что нужно, чтобы получать по верхней границе. Например, больше опыта или определённая область права.",
   "Запишите своими словами, что там просят, рядом с оплатой."
  ]
 },
 "law-q6": {
  "how": [
   "Scroll down this Path page to the resume block.",
   "Tap the upload button. Pick your resume file from your phone or computer.",
   "Wait a few seconds. Small labels will appear: Evidence found.",
   "Tap Confirm on one label that's true for you. Quest done."
  ],
  "howRu": [
   "Прокрутите страницу Path вниз до блока с резюме.",
   "Нажмите кнопку загрузки. Выберите файл резюме на телефоне или компьютере.",
   "Подождите несколько секунд. Появятся маленькие пометки Evidence found (найдено доказательство).",
   "Нажмите Confirm (подтвердить) на одной пометке, которая про вас правда. Квест выполнен."
  ]
 },
 "law-q7": {
  "how": [
   "Open the Radar tab in this app.",
   "Read the newest signal at the top. It has a date.",
   "That's all. Nothing else to do for this quest."
  ],
  "howRu": [
   "Откройте вкладку Radar в этом приложении.",
   "Прочитайте самый новый сигнал наверху. На нём стоит дата.",
   "Это всё. Больше ничего делать не нужно."
  ]
 },
 "law-q8": {
  "how": [
   "Open your result card. It's the share box on this page.",
   "Tap the Share button.",
   "Send it to one person or post it. Once it's sent, the quest is done."
  ],
  "howRu": [
   "Откройте карточку с вашим результатом. Это блок на этой странице, которым можно поделиться.",
   "Нажмите кнопку Share (поделиться).",
   "Отправьте её одному знакомому или опубликуйте. Как только отправили, квест выполнен."
  ]
 },
 "law-q9": {
  "how": [
   "Think of one small task you repeat at work. For example, filling the same form or checking the same list.",
   "Next time, note the time when you start and finish. Or use a phone timer.",
   "Do the task once, at your normal speed.",
   "Write down how many minutes it took."
  ],
  "howRu": [
   "Вспомните одну маленькую задачу, которую вы повторяете на работе. Например, заполняете одну и ту же форму или проверяете один список.",
   "В следующий раз засеките время начала и конца. Или включите таймер на телефоне.",
   "Сделайте задачу один раз, в обычном темпе.",
   "Запишите, сколько минут это заняло."
  ]
 }
});

var QUEST_DETAILS = (typeof QUEST_DETAILS !== "undefined" && QUEST_DETAILS) || {};
Object.assign(QUEST_DETAILS, {
 "fin-q1": {
  "how": [
   "Open a job site. Search for FP&A partner. FP&A means financial planning and analysis. A partner works closely with one business team, not just on reports.",
   "Open one job post with partner in the title. Read what the job really does each day.",
   "Save or bookmark it. Skip plain analyst job posts for now."
  ],
  "howRu": [
   "Откройте сайт вакансий. Поищите FP&A partner. FP&A — финансовое планирование и анализ. Partner работает рядом с одной командой бизнеса, а не только над отчётами.",
   "Откройте вакансию со словом partner в названии. Прочитайте, что там делают каждый день.",
   "Нажмите «Сохранить» или добавьте в закладки. Обычные вакансии analyst пока пропускайте."
  ]
 },
 "fin-q10": {
  "how": [
   "Open one FP&A job post. Look in the requirements for CFA. CFA is a hard finance certificate that takes years.",
   "Check which it is: it says required, it says preferred, or CFA isn't there.",
   "Write down that one answer. We checked 40 job posts: 0 required it."
  ],
  "howRu": [
   "Откройте одну вакансию FP&A. Поищите в требованиях CFA. CFA — сложный финансовый сертификат, на него уходят годы.",
   "Посмотрите, что там: рядом написано required (обязательно), preferred (желательно) или CFA нет вообще.",
   "Запишите этот один ответ. Мы проверили 40 вакансий: обязателен в 0 из них."
  ]
 },
 "fin-q2": {
  "how": [
   "Look at the choices: partner, strategic, hybrid, or corp dev. Pick the one job you want most.",
   "Write that one word in your notes or on paper.",
   "That one line is your goal. No list, just one."
  ],
  "howRu": [
   "Посмотрите на варианты: partner, strategic, hybrid или corp dev. Выберите одну работу, которую хотите больше всего.",
   "Запишите это слово в заметки или на бумагу.",
   "Эта строка и есть ваша цель. Не список, а только одно."
  ]
 },
 "fin-q3": {
  "how": [
   "Open 3 FP&A job posts on a job site.",
   "In each, look in the requirements for SQL. SQL is the language for pulling numbers from a database.",
   "Count how many of the 3 ask for SQL. Write it down. In our check it was 31 of 40."
  ],
  "howRu": [
   "Откройте 3 вакансии FP&A на сайте вакансий.",
   "В каждой поищите в требованиях SQL. SQL — язык, на котором достают числа из базы данных.",
   "Посчитайте, сколько из 3 просят SQL. Запишите. У нас вышло 31 из 40."
  ]
 },
 "fin-q4": {
  "how": [
   "Take paper and a pen. No computer this time. Give yourself ten minutes.",
   "Write a short SQL query. It needs one table to take numbers from, one filter to pick some rows, and one sum.",
   "Stop when all three parts are there. It doesn't have to be perfect."
  ],
  "howRu": [
   "Возьмите бумагу и ручку. Без компьютера. Дайте себе десять минут.",
   "Напишите короткий SQL-запрос. В нём нужны: одна таблица с числами, один фильтр, который выбирает часть строк, и одна сумма.",
   "Остановитесь, когда все три части готовы. Идеально не надо."
  ]
 },
 "fin-q5": {
  "how": [
   "Open a job site. Search for FP&A jobs with the word Anaplan. Anaplan is a planning tool some finance teams use instead of spreadsheets.",
   "Keep opening job posts until one names Anaplan.",
   "Save that job post. 16 of 40 job posts name such tools."
  ],
  "howRu": [
   "Откройте сайт вакансий. Поищите вакансии FP&A со словом Anaplan. Anaplan — программа для планирования, её используют вместо таблиц.",
   "Открывайте вакансии, пока не найдёте ту, где упомянут Anaplan.",
   "Сохраните эту вакансию. Такие программы упоминают 16 из 40 вакансий."
  ]
 },
 "fin-q6": {
  "how": [
   "Scroll down this Path page to the resume block.",
   "Tap the upload button. Pick your resume file.",
   "Wait for the Evidence found labels. Tap Confirm on one that's true."
  ],
  "howRu": [
   "Прокрутите страницу Path вниз до блока с резюме.",
   "Нажмите кнопку загрузки. Выберите файл резюме.",
   "Дождитесь пометок Evidence found. Нажмите Confirm на одной, которая про вас правда."
  ]
 },
 "fin-q7": {
  "how": [
   "Open the Radar tab in this app.",
   "Read the newest signal. It has a date.",
   "That's all. You've seen how the job market changed."
  ],
  "howRu": [
   "Откройте вкладку Radar в этом приложении.",
   "Прочитайте самый новый сигнал. На нём есть дата.",
   "Это всё. Вы увидели, что поменялось на рынке."
  ]
 },
 "fin-q8": {
  "how": [
   "Open your result card in the share box on this page.",
   "Tap Share.",
   "Send it to one person or post it. Done."
  ],
  "howRu": [
   "Откройте карточку с вашим результатом на этой странице.",
   "Нажмите Share.",
   "Отправьте её одному человеку или опубликуйте. Готово."
  ]
 },
 "fin-q9": {
  "how": [
   "Think of the reports you make at work. Pick one you rebuild every month.",
   "Write its name down in your notes.",
   "Next to it, write how many hours it takes each time. That's the report to automate."
  ],
  "howRu": [
   "Вспомните отчёты, которые делаете на работе. Выберите один, который каждый месяц собираете заново.",
   "Запишите его название в заметки.",
   "Рядом запишите, сколько часов он отнимает каждый раз. Этот отчёт и надо автоматизировать."
  ]
 },
 "nurse-q1": {
  "how": [
   "Open a job site or a hospital jobs page. Search for ICU RN, ER RN, or OR RN. These are intensive care, emergency room and operating room nurse jobs.",
   "Open one job post you'd really want.",
   "Save or bookmark it so you can come back later."
  ],
  "howRu": [
   "Откройте сайт вакансий или страницу вакансий больницы. Поищите ICU RN, ER RN или OR RN. Это медсёстры реанимации, приёмного покоя и операционной.",
   "Откройте одну вакансию, которую вы правда хотели бы.",
   "Нажмите «Сохранить» или добавьте в закладки, чтобы потом вернуться."
  ]
 },
 "nurse-q10": {
  "how": [
   "Search for a nurse practice map. It shows, by state, how freely a nurse practitioner can work alone.",
   "Find your state and read its label: Full, Reduced, or Restricted.",
   "Write that word down next to your state name."
  ],
  "howRu": [
   "Поищите карту практики медсестёр (nurse practice map). Она показывает по штатам, насколько свободно медсестра-практик может работать сама.",
   "Найдите ваш штат и прочитайте пометку: Full, Reduced или Restricted.",
   "Запишите это слово рядом с названием вашего штата."
  ]
 },
 "nurse-q2": {
  "how": [
   "Look at the choices: ICU, ER, OR, psych, or anesthesia. Pick the one you want most.",
   "Write that one word in your notes or on paper.",
   "That one line is your goal. No list, just one."
  ],
  "howRu": [
   "Посмотрите на варианты: ICU, ER, OR, psych или anesthesia. Выберите одно, что хотите больше всего.",
   "Запишите это слово в заметки или на бумагу.",
   "Эта строка и есть ваша цель. Не список, а только одно."
  ]
 },
 "nurse-q3": {
  "how": [
   "Open 3 job posts for your specialty on a job site or hospital jobs page.",
   "In each, look in the requirements for a certificate. BLS is the basic life support card. ACLS is the advanced heart care card. CCRN is a critical care nurse certificate.",
   "Write down the name you saw most in the 3 job posts."
  ],
  "howRu": [
   "Откройте 3 вакансии по вашей специальности на сайте вакансий или больницы.",
   "В каждой посмотрите в требованиях название сертификата. BLS — базовая помощь для спасения жизни. ACLS — расширенная помощь при остановке сердца. CCRN — сертификат медсестры реанимации.",
   "Запишите название, которое встречалось чаще всего в этих 3 вакансиях."
  ]
 },
 "nurse-q4": {
  "how": [
   "Find your BLS card (basic life support). Look in your wallet, your papers folder, or the app or email where your employer keeps it.",
   "Read the expiry date printed on the card.",
   "If it ends this year, write down the month so you know when to renew."
  ],
  "howRu": [
   "Найдите карточку BLS (базовая помощь для спасения жизни). Посмотрите в кошельке, в папке с документами или в приложении и почте, где её хранит работодатель.",
   "Прочитайте дату окончания на карточке.",
   "Если она в этом году, запишите месяц. Так вы не забудете вовремя обновить."
  ]
 },
 "nurse-q5": {
  "how": [
   "Open a job site. Search for RN jobs in your specialty, plus the words sign-on bonus.",
   "Keep opening job posts until one names a sign-on bonus (money for joining). They're $10K–$25K.",
   "Save that job post. Write down the exact bonus amount."
  ],
  "howRu": [
   "Откройте сайт вакансий. Поищите вакансии RN по вашей специальности и добавьте слова sign-on bonus.",
   "Открывайте вакансии, пока не найдёте бонус за выход на работу. Обычно это $10K–$25K.",
   "Сохраните вакансию. Запишите точную сумму бонуса."
  ]
 },
 "nurse-q6": {
  "how": [
   "Scroll down this Path page to the resume block.",
   "Tap the upload button. Pick your resume file.",
   "Wait for the Evidence found labels. Tap Confirm on one that's true."
  ],
  "howRu": [
   "Прокрутите страницу Path вниз до блока с резюме.",
   "Нажмите кнопку загрузки. Выберите файл резюме.",
   "Дождитесь пометок Evidence found. Нажмите Confirm на одной, которая про вас правда."
  ]
 },
 "nurse-q7": {
  "how": [
   "Open the Radar tab in this app.",
   "Read the newest signal. It has a date.",
   "That's all. You've seen how the job market changed."
  ],
  "howRu": [
   "Откройте вкладку Radar в этом приложении.",
   "Прочитайте самый новый сигнал. На нём есть дата.",
   "Это всё. Вы увидели, что поменялось на рынке."
  ]
 },
 "nurse-q8": {
  "how": [
   "Open your result card in the share box on this page.",
   "Tap Share.",
   "Send it to one person or post it. Done."
  ],
  "howRu": [
   "Откройте карточку с вашим результатом на этой странице.",
   "Нажмите Share.",
   "Отправьте её одному человеку или опубликуйте. Готово."
  ]
 },
 "nurse-q9": {
  "how": [
   "Pick one ADN program (a two-year nursing degree). Open its price page. A school site or search result is fine.",
   "Find the total price. Put it next to $5,472, the Wake Tech total.",
   "Take the smaller number from the bigger one. Write down the difference."
  ],
  "howRu": [
   "Выберите одну программу ADN (двухлетняя учёба на медсестру). Откройте страницу с ценой. Подойдёт сайт школы или результат поиска.",
   "Найдите полную цену. Поставьте её рядом с $5,472 — это итог Wake Tech.",
   "Вычтите меньшее число из большего. Запишите разницу."
  ]
 }
});

var QUEST_DETAILS = (typeof QUEST_DETAILS !== "undefined" && QUEST_DETAILS) || {};
Object.assign(QUEST_DETAILS, {
 "analyst-q1": {
  "how": [
   "Go to a job site like LinkedIn or Indeed. Search for \"product analyst\".",
   "Open one job post. Read what the person would do each day.",
   "Tap Save on it. Skip job posts that only make dashboards (charts) on request."
  ],
  "howRu": [
   "Зайдите на сайт вакансий, например LinkedIn или Indeed. Поищите \"product analyst\".",
   "Откройте одну вакансию. Прочитайте, что человек будет делать каждый день.",
   "Нажмите «Сохранить». Вакансии, где только делают дашборды (графики) по просьбе, пропускайте."
  ]
 },
 "analyst-q10": {
  "how": [
   "BLS is the US Bureau of Labor Statistics. It's the government office that counts pay and job growth.",
   "Look at the two lines side by side: $101,860 with +10% growth, and $120,230 with +35% growth.",
   "Write down which line fits the job you want. That's what \"which house is yours\" means."
  ],
  "howRu": [
   "BLS — Бюро статистики труда США. Это госорган, который считает зарплаты и рост числа рабочих мест.",
   "Посмотрите на две строки рядом: $101,860 и рост +10%, $120,230 и рост +35%.",
   "Запишите, какая строка подходит к работе, которую вы хотите. Это и значит «какой дом ваш»."
  ]
 },
 "analyst-q2": {
  "how": [
   "Look at the four choices: product, analytics engineer, strategy, or data scientist.",
   "Pick only one: the job title you want most.",
   "Write it in one line, for example: \"My job is product analyst.\""
  ],
  "howRu": [
   "Посмотрите на четыре варианта: product, analytics engineer, strategy или data scientist.",
   "Выберите только одну: должность, которую хотите больше всего.",
   "Запишите одной строкой, например: «Моя работа — product analyst»."
  ]
 },
 "analyst-q3": {
  "how": [
   "Go to a job site. Open 3 different analyst job posts, one by one.",
   "In each, look for the word SQL. Mark yes or no.",
   "Write your count, like \"2 of 3 ask for SQL\". In our check it was 43 of 46."
  ],
  "howRu": [
   "Зайдите на сайт вакансий. Откройте 3 разные вакансии аналитика, по одной.",
   "В каждой поищите слово SQL. Отметьте: да или нет.",
   "Запишите итог, например «2 из 3 просят SQL». У нас вышло 43 из 46."
  ]
 },
 "analyst-q4": {
  "how": [
   "Take paper and a pen. No computer needed.",
   "Write the name of one table (just a list of rows), like \"orders\". Then one filter line: only rows where month = May.",
   "Write one sum line: add up the money column. It doesn't need to run. The shape is what counts."
  ],
  "howRu": [
   "Возьмите бумагу и ручку. Компьютер не нужен.",
   "Напишите название одной таблицы (это просто список строк), например \"orders\". Потом строку фильтра: только строки, где month = May.",
   "Напишите строку суммы: сложить столбец с деньгами. Запускать не надо. Важна сама форма."
  ]
 },
 "analyst-q5": {
  "how": [
   "Go to a job site. Search for \"analytics engineer\" and open one job post.",
   "Look at the tools it asks for. Find dbt.",
   "Write down that you found it. In our check, 7 of 7 job posts ask for it."
  ],
  "howRu": [
   "Зайдите на сайт вакансий. Поищите \"analytics engineer\" и откройте одну вакансию.",
   "Посмотрите список инструментов. Найдите dbt.",
   "Запишите, что нашли. У нас dbt просили 7 из 7 вакансий."
  ]
 },
 "analyst-q6": {
  "how": [
   "Scroll down this Path page to the resume block.",
   "Tap the upload button and pick your resume. Wait for the \"Evidence found\" labels.",
   "Tap Confirm on one label that's true for you."
  ],
  "howRu": [
   "Прокрутите страницу Path до блока с резюме.",
   "Нажмите кнопку загрузки и выберите резюме. Дождитесь пометок \"Evidence found\".",
   "Нажмите Confirm на одной пометке, которая про вас правда."
  ]
 },
 "analyst-q7": {
  "how": [
   "Open the Radar tab in this app.",
   "Read the newest signal at the top. It has a date.",
   "That's all for this quest. Nice!"
  ],
  "howRu": [
   "Откройте вкладку Radar в этом приложении.",
   "Прочитайте самый новый сигнал наверху. На нём есть дата.",
   "Это всё. Квест готов!"
  ]
 },
 "analyst-q8": {
  "how": [
   "Open your result card in the share box on this page.",
   "Tap Share.",
   "Send it to one person or post it. Done."
  ],
  "howRu": [
   "Откройте карточку с вашим результатом на этой странице.",
   "Нажмите Share.",
   "Отправьте её одному человеку или опубликуйте. Готово."
  ]
 },
 "analyst-q9": {
  "how": [
   "Think of one dashboard (a page of charts) at work that nobody opens. Or one you know well.",
   "Ask yourself: what choice was it meant to help someone make?",
   "Write that choice in one plain sentence. For example: \"keep this product or stop it.\""
  ],
  "howRu": [
   "Вспомните один дашборд (страницу с графиками) на работе, который никто не открывает. Или тот, что вы хорошо знаете.",
   "Спросите себя: какое решение он должен был помогать принять?",
   "Запишите это решение одним простым предложением. Например: «оставить этот продукт или закрыть»."
  ]
 },
 "dataanalyst-q1": {
  "how": [
   "Go to a job site like LinkedIn or Indeed. Search for \"product analyst\".",
   "Open one job post. Read what the person would do each day.",
   "Tap Save on it. Skip job posts that only make dashboards (charts) on request."
  ],
  "howRu": [
   "Зайдите на сайт вакансий, например LinkedIn или Indeed. Поищите \"product analyst\".",
   "Откройте одну вакансию. Прочитайте, что человек будет делать каждый день.",
   "Нажмите «Сохранить». Вакансии, где только делают дашборды (графики) по просьбе, пропускайте."
  ]
 },
 "dataanalyst-q10": {
  "how": [
   "BLS is the US Bureau of Labor Statistics. It's the government office that counts pay and job growth.",
   "Read the data scientist line: median pay $120,230, growth +35%. Median means half earn more, half earn less.",
   "Write one sentence on what this means for you. For example: do you want to move toward this fast-growing job?"
  ],
  "howRu": [
   "BLS — Бюро статистики труда США. Это госорган, который считает зарплаты и рост числа рабочих мест.",
   "Прочитайте строку про data scientist: медианная зарплата $120,230, рост +35%. Медиана — это когда половина получает больше, половина меньше.",
   "Запишите одним предложением, что это значит для вас. Например: хотите ли вы идти к этой быстро растущей работе?"
  ]
 },
 "dataanalyst-q2": {
  "how": [
   "Look at the three choices: product, analytics engineer, or data scientist.",
   "Pick only one: the job title you want most.",
   "Write it in one line, for example: \"My job is product analyst.\""
  ],
  "howRu": [
   "Посмотрите на три варианта: product, analytics engineer или data scientist.",
   "Выберите только одну: должность, которую хотите больше всего.",
   "Запишите одной строкой, например: «Моя работа — product analyst»."
  ]
 },
 "dataanalyst-q3": {
  "how": [
   "Go to a job site. Open 3 different data analyst job posts, one by one.",
   "In each, look for the word SQL. Mark yes or no.",
   "Write your count, like \"2 of 3 ask for SQL\". In our check it was 24 of 24."
  ],
  "howRu": [
   "Зайдите на сайт вакансий. Откройте 3 разные вакансии data analyst, по одной.",
   "В каждой поищите слово SQL. Отметьте: да или нет.",
   "Запишите итог, например «2 из 3 просят SQL». У нас вышло 24 из 24."
  ]
 },
 "dataanalyst-q4": {
  "how": [
   "Take paper and a pen. No computer needed.",
   "Write the name of one table (just a list of rows), like \"orders\". Then one filter line: only rows where month = May.",
   "Write one sum line: add up the money column. It doesn't need to run. The shape is what counts."
  ],
  "howRu": [
   "Возьмите бумагу и ручку. Компьютер не нужен.",
   "Напишите название одной таблицы (это просто список строк), например \"orders\". Потом строку фильтра: только строки, где month = May.",
   "Напишите строку суммы: сложить столбец с деньгами. Запускать не надо. Важна сама форма."
  ]
 },
 "dataanalyst-q5": {
  "how": [
   "Go to a job site. Search for \"analytics engineer\" and open one job post.",
   "Look at the tools it asks for. Find dbt.",
   "Write down that you found it. In our check, 7 of 7 job posts ask for it."
  ],
  "howRu": [
   "Зайдите на сайт вакансий. Поищите \"analytics engineer\" и откройте одну вакансию.",
   "Посмотрите список инструментов. Найдите dbt.",
   "Запишите, что нашли. У нас dbt просили 7 из 7 вакансий."
  ]
 },
 "dataanalyst-q6": {
  "how": [
   "Scroll down this Path page to the resume block.",
   "Tap the upload button and pick your resume. Wait for the \"Evidence found\" labels.",
   "Tap Confirm on one label that's true for you."
  ],
  "howRu": [
   "Прокрутите страницу Path до блока с резюме.",
   "Нажмите кнопку загрузки и выберите резюме. Дождитесь пометок \"Evidence found\".",
   "Нажмите Confirm на одной пометке, которая про вас правда."
  ]
 },
 "dataanalyst-q7": {
  "how": [
   "Open the Radar tab in this app.",
   "Read the newest signal at the top. It has a date.",
   "That's all for this quest. Nice!"
  ],
  "howRu": [
   "Откройте вкладку Radar в этом приложении.",
   "Прочитайте самый новый сигнал наверху. На нём есть дата.",
   "Это всё. Квест готов!"
  ]
 },
 "dataanalyst-q8": {
  "how": [
   "Open your result card in the share box on this page.",
   "Tap Share.",
   "Send it to one person or post it. Done."
  ],
  "howRu": [
   "Откройте карточку с вашим результатом на этой странице.",
   "Нажмите Share.",
   "Отправьте её одному человеку или опубликуйте. Готово."
  ]
 },
 "dataanalyst-q9": {
  "how": [
   "Think of one dashboard (a page of charts) at work that nobody opens. Or one you know well.",
   "Ask yourself: what choice was it meant to help someone make?",
   "Write that choice in one plain sentence. For example: \"keep this product or stop it.\""
  ],
  "howRu": [
   "Вспомните один дашборд (страницу с графиками) на работе, который никто не открывает. Или тот, что вы хорошо знаете.",
   "Спросите себя: какое решение он должен был помогать принять?",
   "Запишите это решение одним простым предложением. Например: «оставить этот продукт или закрыть»."
  ]
 }
});

var QUEST_DETAILS = (typeof QUEST_DETAILS !== "undefined" && QUEST_DETAILS) || {};
Object.assign(QUEST_DETAILS, {
 "aicreator-q1": {
  "how": [
   "Choose ONE path. A real face with an AI crew: you're on camera, AI helps make the videos. Or AI video for brands: you make AI videos for companies.",
   "Write it in one sentence that starts with who you are. For example: I am a real face with an AI crew.",
   "Pin that sentence where you work: on the wall, your desk or your phone screen."
  ],
  "howRu": [
   "Выберите ОДИН путь. Настоящее лицо с AI-командой: вы в кадре, AI помогает делать видео. Или AI-видео для брендов: вы делаете AI-видео для компаний.",
   "Напишите это одним предложением о том, кто вы. Например: я — настоящее лицо с AI-командой.",
   "Повесьте эту фразу там, где работаете: на стену, на стол или на экран телефона."
  ]
 },
 "aicreator-q10": {
  "how": [
   "Line one: how many pieces you finished and posted this month.",
   "Line two: how many minutes one piece takes you, on average.",
   "Line three: how much money came in this month. Three lines, done!"
  ],
  "howRu": [
   "Первая строка: сколько работ вы закончили и выложили в этом месяце.",
   "Вторая строка: сколько минут в среднем уходит на одну работу.",
   "Третья строка: сколько денег пришло в этом месяце. Три строки — готово!"
  ]
 },
 "aicreator-q2": {
  "how": [
   "Pick one old video you made. Start a timer on your phone.",
   "Re-edit that video with your AI tools: your usual tools for cutting, captions and sound.",
   "Stop the timer when it's ready. Write down how many minutes it took."
  ],
  "howRu": [
   "Выберите одно старое видео. Включите таймер на телефоне.",
   "Перемонтируйте его с вашими AI-инструментами: для монтажа, субтитров и звука.",
   "Когда готово, остановите таймер. Запишите, сколько минут ушло."
  ]
 },
 "aicreator-q3": {
  "how": [
   "Pick one product and open your AI video or text tool.",
   "Make three different hooks for it. A hook is the first line or shot that makes people stop and watch.",
   "Look at all three. Pick the one a real person would stop scrolling for."
  ],
  "howRu": [
   "Выберите один продукт и откройте ваш AI-инструмент для видео или текста.",
   "Сделайте для него три разных хука. Хук — первая фраза или кадр, из-за которого человек останавливается и смотрит.",
   "Посмотрите все три. Выберите тот, на котором живой человек перестал бы листать."
  ]
 },
 "aicreator-q4": {
  "how": [
   "Search for the FTC fake-review rule in plain words. The FTC is the US office that protects buyers.",
   "Here's the simple version: a made-up AI person can't pretend to be a happy real customer.",
   "Open your scripts. Check each one against that rule. Fix or remove any line where an AI person fakes a review."
  ],
  "howRu": [
   "Поищите правило FTC о фейковых отзывах простыми словами. FTC — ведомство США, которое защищает покупателей.",
   "Если просто: выдуманный AI-человек не может притворяться довольным настоящим покупателем.",
   "Откройте ваши сценарии. Проверьте каждый по этому правилу. Исправьте или уберите строки, где AI-человек изображает отзыв."
  ]
 },
 "aicreator-q5": {
  "how": [
   "Pick one ad idea. Find or make a filmed version, shot with a real camera and a real person.",
   "Make the same ad again with your AI tools. Same product, same main message.",
   "Save both in one folder. Then you can show them side by side on your price list."
  ],
  "howRu": [
   "Выберите одну идею рекламы. Найдите или сделайте снятую версию: настоящая камера, настоящий человек.",
   "Сделайте ту же рекламу с вашими AI-инструментами. Тот же продукт, та же главная мысль.",
   "Сохраните обе версии в одну папку. Так их можно показать рядом в вашем прайсе."
  ]
 },
 "aicreator-q6": {
  "how": [
   "Look in your niche on social media or in an ads library. Find one brand running ads with an AI label.",
   "Open the ad. See how the label shows: small text on the video, or a note in the caption.",
   "Write down the brand, what they sell, and exactly how the AI label shows."
  ],
  "howRu": [
   "Поищите в вашей нише в соцсетях или в библиотеке рекламы. Найдите бренд, у которого реклама с пометкой AI.",
   "Откройте рекламу. Посмотрите, как видна пометка: мелкий текст на видео или заметка в подписи.",
   "Запишите бренд, что они продают и как именно видна пометка AI."
  ]
 },
 "aicreator-q7": {
  "how": [
   "Pick one local brand you know. Find where to message them, like their social media or email.",
   "Write one short message. Offer ten AI ad versions for the price of one filmed video.",
   "Send that one message today. That's the whole quest. You've got this!"
  ],
  "howRu": [
   "Выберите один местный бренд, который знаете. Найдите, куда им написать: соцсети или почта.",
   "Напишите одно короткое сообщение. Предложите десять вариантов рекламы с AI по цене одного снятого видео.",
   "Отправьте это сообщение сегодня. Это весь квест. У вас получится!"
  ]
 },
 "aicreator-q8": {
  "how": [
   "Open your result card in the share box on this page.",
   "Tap Share.",
   "Send it to one person or post it. Done."
  ],
  "howRu": [
   "Откройте карточку с вашим результатом на этой странице.",
   "Нажмите «Поделиться».",
   "Отправьте её одному человеку или опубликуйте. Готово."
  ]
 },
 "aicreator-q9": {
  "how": [
   "Pick one of your videos. Use your dubbing tools to make a version in a second language.",
   "Watch the new version once, start to end. Check that the words and voice sound right.",
   "Post it only after that full watch."
  ],
  "howRu": [
   "Выберите одно ваше видео. Сделайте с помощью дубляжа версию на другом языке.",
   "Посмотрите новую версию один раз от начала до конца. Проверьте, что слова и голос звучат правильно.",
   "Публикуйте только после такого просмотра."
  ]
 },
 "businessanalyst-q1": {
  "how": [
   "Go to a job site like LinkedIn or Indeed. Search for strategy & operations analyst.",
   "Open one job post. Read what this person really does each day.",
   "Save or bookmark it so you can find it later.",
   "Skip job posts that only make documents when asked. Those are the ones to avoid."
  ],
  "howRu": [
   "Зайдите на сайт вакансий, например LinkedIn или Indeed. Поищите strategy & operations analyst.",
   "Откройте одну вакансию. Прочитайте, что этот человек делает каждый день.",
   "Нажмите «Сохранить» или добавьте в закладки, чтобы потом найти.",
   "Пропускайте вакансии, где нужно только делать документы по просьбе. Таких лучше избегать."
  ]
 },
 "businessanalyst-q10": {
  "how": [
   "Go to the BLS website (the US office that shares job numbers). Find the page for management analysts.",
   "Find this line: median pay $101,860, growth +10%, about 94,100 openings a year.",
   "In your own words, write what it means for you. Is this work growing? Do you want a job like it?"
  ],
  "howRu": [
   "Зайдите на сайт BLS (ведомство США, которое публикует цифры о работе). Найдите страницу management analysts.",
   "Найдите строку: медианная зарплата $101,860, рост +10%, около 94,100 свободных мест в год.",
   "Запишите своими словами, что это значит для вас. Такая работа растёт? Хотите такую же?"
  ]
 },
 "businessanalyst-q2": {
  "how": [
   "Think about two jobs. One is mostly documents. The other is strategy & operations: helping the business decide what to do and work better.",
   "Pick only ONE: the one you really want.",
   "Write it in one short line, like a phone note. Keep it where you can see it."
  ],
  "howRu": [
   "Подумайте о двух работах. Одна — в основном документы. Другая — strategy & operations: помогать бизнесу решать, что делать и как работать лучше.",
   "Выберите только ОДНУ: ту, которую правда хотите.",
   "Запишите её одной короткой строкой, например в заметке на телефоне. Держите на виду."
  ]
 },
 "businessanalyst-q3": {
  "how": [
   "Go to a job site. Open 3 different business analyst job posts, one by one.",
   "In each, check the requirements. Count it if it names Jira or Agile.",
   "Write your count out of 3. In our check it was 9 of 15 BA job posts. So these words come up a lot."
  ],
  "howRu": [
   "Зайдите на сайт вакансий. Откройте 3 разные вакансии business analyst, по одной.",
   "В каждой посмотрите требования. Засчитайте, если там есть Jira или Agile.",
   "Запишите ваше число из 3. У нас вышло 9 из 15 вакансий BA. Значит, эти слова встречаются часто."
  ]
 },
 "businessanalyst-q4": {
  "how": [
   "Pick one document you wrote at work. Open its first page.",
   "On a new page, first write the call: what decision you want the reader to make.",
   "Next, the number: one key fact that backs it up. Then the ask: what you want the reader to do.",
   "Keep it to one page. That's your decision brief!"
  ],
  "howRu": [
   "Выберите один документ, который вы написали на работе. Откройте первую страницу.",
   "На новой странице сначала напишите, какое решение должен принять читатель.",
   "Потом одну главную цифру, которая это подтверждает. Потом — что именно читатель должен сделать.",
   "Уложитесь в одну страницу. Это и есть ваш бриф решения!"
  ]
 },
 "businessanalyst-q5": {
  "how": [
   "Go to a job site. Search for business analyst jobs. SanDisk has one like this, so start there.",
   "Open the job post. Read the requirements slowly.",
   "Find where an AI tool is a must-have, not just a nice extra. Write down the tool and the job title."
  ],
  "howRu": [
   "Зайдите на сайт вакансий. Поищите вакансии аналитика в бизнесе. У SanDisk такая есть — начните с неё.",
   "Откройте вакансию. Медленно прочитайте требования.",
   "Найдите, где AI-инструмент обязателен, а не просто плюс. Запишите инструмент и название вакансии."
  ]
 },
 "businessanalyst-q6": {
  "how": [
   "Scroll down this Path page to the resume block.",
   "Tap the upload button. Pick your resume file from your phone or computer.",
   "Wait for the Evidence found labels. Tap Confirm on one that's true for you."
  ],
  "howRu": [
   "Прокрутите страницу пути вниз до блока с резюме.",
   "Нажмите кнопку загрузки. Выберите файл резюме на телефоне или компьютере.",
   "Дождитесь пометок Evidence found. Нажмите Confirm на одной, которая про вас правда."
  ]
 },
 "businessanalyst-q7": {
  "how": [
   "Open the Radar tab in this app.",
   "Read the newest signal at the top. Check that it has a date.",
   "That's all! You read one news item and saw how the job market moves."
  ],
  "howRu": [
   "Откройте вкладку Radar в этом приложении.",
   "Прочитайте самый новый сигнал наверху. Проверьте, что у него есть дата.",
   "Это всё! Вы прочитали одну новость и увидели, как меняется рынок."
  ]
 },
 "businessanalyst-q8": {
  "how": [
   "Open your result card in the share box on this page.",
   "Tap Share.",
   "Send it to one person or post it. Done."
  ],
  "howRu": [
   "Откройте карточку с вашим результатом на этой странице.",
   "Нажмите «Поделиться».",
   "Отправьте её одному человеку или опубликуйте. Готово."
  ]
 },
 "businessanalyst-q9": {
  "how": [
   "Think of one time your work changed a real decision. The team did something differently because of you.",
   "Write it in one line. Add the real number: money, time or people it helped.",
   "Save it where you keep your wins. You'll need it for reviews and interviews."
  ],
  "howRu": [
   "Вспомните случай, когда ваша работа изменила настоящее решение. Команда сделала что-то по-другому благодаря вам.",
   "Запишите это одной строкой. Добавьте настоящую цифру: деньги, время или сколько людей это коснулось.",
   "Сохраните строку там, где храните свои победы. Она пригодится на оценках и собеседованиях."
  ]
 }
});
