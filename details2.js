/* Step detail content for the PathCheck dashboard (stepdetail.js).
   Format: STEP_DETAILS[stepId] = {what, whatRu, how[], howRu[], why, whyRu,
   links: [{t, u}]} — EN + RU twins; links verified at build time.
   Written from the pilot packages (hr-checklist + sample-full-report). */
var STEP_DETAILS = (typeof STEP_DETAILS !== "undefined" && STEP_DETAILS) || {};
Object.assign(STEP_DETAILS, {
 "fin-g1": {
  "what": "Get a bachelor’s degree in finance or a numbers field, like business, economics or maths. Almost every job asks for it. It gets you in the door. It won’t make you stand out.",
  "whatRu": "Получите диплом бакалавра по финансам или в области с цифрами: бизнес, экономика, математика. Его просят почти все вакансии. Это входной билет. Выделиться он не поможет.",
  "how": [
   "Pick a degree in finance or a numbers field",
   "Already studying something close? Finish it — don’t restart",
   "Keep your maths and accounting basics strong — AI tutors fill gaps fast",
   "Finish the degree before you chase certificates"
  ],
  "howRu": [
   "Выберите диплом по финансам или в области с цифрами",
   "Уже учитесь чему-то близкому? Закончите — не начинайте заново",
   "Держите сильной базу по математике и бухучёту — AI-репетитор быстро закроет пробелы",
   "Сначала диплом, потом сертификаты"
  ],
  "why": "Almost all of the 40 jobs ask for a bachelor’s in finance or a numbers field. Don’t restart. Use what you already studied.",
  "whyRu": "Диплом по финансам или в области с цифрами просят почти все из 40 вакансий. Не начинайте заново. Используйте то, что уже выучили.",
  "links": [
   {
    "t": "BLS — Financial Analysts (Occupational Outlook Handbook)",
    "u": "https://www.bls.gov/ooh/business-and-financial/financial-analysts.htm"
   }
  ]
 },
 "fin-g2": {
  "what": "Learn advanced Excel and financial models. That means money plans in Excel: forecasts, budgets and what-if cases. You need this. But every serious candidate has it. So it won’t set you apart.",
  "whatRu": "Выучите продвинутый Excel и финансовые модели. Это денежные планы в Excel: прогнозы, бюджеты и «что если». Это нужно. Но это есть у всех серьёзных кандидатов. Выделиться не поможет.",
  "how": [
   "Practice lookups, pivot tables and a tidy model layout in Excel",
   "Build a full money plan: forecast, budget and a what-if case — ask ChatGPT or Claude when stuck",
   "Check your model for errors before you show it",
   "Keep one model you can show as proof of your level"
  ],
  "howRu": [
   "Потренируйте в Excel поиск по таблицам, сводные таблицы и аккуратную модель",
   "Постройте полный план: прогноз, бюджет и «что если» — застряли, спросите ChatGPT или Claude",
   "Проверьте модель на ошибки, прежде чем показывать",
   "Сохраните одну модель как доказательство вашего уровня"
  ],
  "why": "Advanced Excel and financial models are the basics here. You need them, but they won’t set you apart. AI now writes Excel formulas in seconds. So learn this fast and move on.",
  "whyRu": "Продвинутый Excel и финансовые модели — это база. Нужно, но не выделяет. Формулы в Excel AI уже пишет за секунды. Так что освойте быстро и идите дальше.",
  "links": [
   {
    "t": "Create a PivotTable to analyze worksheet data — Microsoft Support",
    "u": "https://support.microsoft.com/en-us/office/create-a-pivottable-to-analyze-worksheet-data-a9a84538-bfe9-40a9-a8e9-f99134456576?wt.mc_id=otc_excel"
   }
  ]
 },
 "fin-g3": {
  "what": "Skip the CFA for this goal. The CFA is a hard finance certificate with three exams. Company budget and forecast jobs (FP&A) don’t need it. Come back to it only if you move into investing jobs.",
  "whatRu": "Пропустите CFA для этой цели. CFA — трудный финансовый сертификат из трёх экзаменов. Для работы с бюджетами и прогнозами компании (FP&A) он не нужен. Вернитесь к нему, только если уйдёте в инвестиции.",
  "how": [
   "Don’t sign up for CFA Level I if you aim at budget and forecast jobs",
   "Spend that study time on SQL and a planning program instead",
   "Write down the one thing that would change this: moving into investing",
   "Come back to this question only if that really happens"
  ],
  "howRu": [
   "Не записывайтесь на CFA Level I, если цель — бюджеты и прогнозы",
   "Потратьте это время на SQL и программу планирования",
   "Запишите, что может изменить решение: переход в инвестиции",
   "Вернитесь к вопросу, только если это правда случится"
  ],
  "why": "0 of 40 jobs require the CFA. 3 prefer it. Skipping it saves you years of study.",
  "whyRu": "CFA требуют 0 из 40 вакансий. Предпочитают — 3. Пропустив его, вы сэкономите годы учёбы.",
  "links": []
 },
 "fin-p1": {
  "what": "Learn SQL well. SQL is the language for asking a database questions. It pulls out the numbers you need. Keep going until you can write window functions alone. They do maths across rows, like a running total.",
  "whatRu": "Хорошо выучите SQL. Это язык, на котором задают вопросы базе данных. Он достаёт нужные цифры. Учите, пока не напишете оконные функции сами. Они считают по строкам, например нарастающий итог.",
  "how": [
   "Start with SELECT, WHERE and JOIN on money tables",
   "Practice grouping and totals with GROUP BY",
   "Learn CTEs — named steps inside one query",
   "Practice window functions until you can write them alone — ask AI to explain each error",
   "Use SQL on real data from your own work, not only exercises"
  ],
  "howRu": [
   "Начните с SELECT, WHERE и JOIN на денежных таблицах",
   "Потренируйте группировки и итоги через GROUP BY",
   "Выучите CTE — именованные шаги внутри одного запроса",
   "Тренируйте оконные функции, пока не напишете сами — каждую ошибку пусть объяснит AI",
   "Работайте с настоящими данными со своей работы, а не только с упражнениями"
  ],
  "why": "SQL is the #1 skill here: 31 of 40 jobs ask for it. With an AI tutor, you can learn it in weeks, not years. This one skill moves you ahead of most finance people.",
  "whyRu": "SQL — навык №1: его просят 31 из 40 вакансий. С AI-репетитором его можно выучить за недели, а не годы. Один этот навык ставит вас впереди большинства финансистов.",
  "links": [
   {
    "t": "Query and modify data with Transact-SQL — Microsoft Learn",
    "u": "https://learn.microsoft.com/en-us/training/paths/get-started-querying-with-transact-sql/"
   }
  ]
 },
 "fin-p2": {
  "what": "Learn ONE planning program, deep. It holds a company’s money plans: budgets and forecasts for the whole company. Don’t learn three a little. Learn one well.",
  "whatRu": "Выучите ОДНУ программу планирования, глубоко. В ней живут денежные планы компании: бюджеты и прогнозы. Не учите три понемногу. Выучите одну хорошо.",
  "how": [
   "If your employer uses one, learn that one first",
   "Otherwise start with Anaplan — jobs name it most",
   "Take the maker’s own model-building training",
   "Build a real money plan in it, not only test lessons",
   "Aim for the Certified Model Builder certificate in Anaplan"
  ],
  "howRu": [
   "Если у работодателя есть такая программа, учите сначала её",
   "Иначе начните с Anaplan — его вакансии называют чаще всех",
   "Пройдите обучение по построению моделей от самого разработчика",
   "Постройте в ней настоящий денежный план, а не только учебные задания",
   "Цельтесь в сертификат Certified Model Builder в Anaplan"
  ],
  "why": "16 of 40 jobs name a planning program. Anaplan is named most, 15 of 40. Its Certified Model Builder certificate is a must in those jobs. One program, learned deep, is a shortcut.",
  "whyRu": "Программу планирования называют 16 из 40 вакансий. Чаще всех — Anaplan, 15 из 40. Его сертификат Certified Model Builder там обязателен. Одна программа, выученная глубоко, — это короткий путь.",
  "links": [
   {
    "t": "Anaplan Academy Certification Programs",
    "u": "https://www.anaplan.com/academy/certification-programs/"
   }
  ]
 },
 "fin-p3": {
  "what": "Build two dashboards on real data. A dashboard is a screen of live charts (BI tools make them). Don’t just look at other people’s. Build your own, on real data.",
  "whatRu": "Постройте два дашборда на настоящих данных. Дашборд — экран с живыми графиками. Их делают в программах бизнес-аналитики (BI). Не смотрите только чужие. Стройте свои.",
  "how": [
   "Pick one BI tool — Tableau or Power BI",
   "Take real data from your own team or work",
   "Build the first dashboard: the main numbers, clean and clear",
   "Build a second one for a different question — the built-in AI helpers can draft it",
   "Save screenshots and links — this is proof you can show"
  ],
  "howRu": [
   "Выберите одну программу — Tableau или Power BI",
   "Возьмите настоящие данные своей команды или работы",
   "Постройте первый дашборд: главные цифры, чисто и понятно",
   "Постройте второй для другого вопроса — встроенный AI-помощник набросает черновик",
   "Сохраните скриншоты и ссылки — это доказательство для работодателя"
  ],
  "why": "20 of 40 jobs name a BI tool. Tableau is named 14 times and Power BI 9 times. Two real dashboards show more than any course.",
  "whyRu": "Программу бизнес-аналитики называют 20 из 40 вакансий. Tableau — 14 раз, Power BI — 9. Два настоящих дашборда показывают больше любого курса.",
  "links": [
   {
    "t": "Training for Power BI — Microsoft Learn",
    "u": "https://learn.microsoft.com/en-us/training/powerplatform/power-bi"
   }
  ]
 },
 "fin-p4": {
  "what": "Learn Python at analyst level. Python is a programming language. Know pandas, its tool for data tables. Then automate one real task: something the computer now does for you at work.",
  "whatRu": "Выучите Python на уровне аналитика. Python — язык программирования. Знайте pandas — его инструмент для таблиц. Потом автоматизируйте одну настоящую задачу: пусть её делает компьютер.",
  "how": [
   "Learn Python basics: tables, files and simple scripts",
   "Learn pandas to clean and join data tables",
   "Pick one boring task from your own reports",
   "Automate it with Python — ChatGPT or Claude can help write the code",
   "Keep the code and the result — this is your proof"
  ],
  "howRu": [
   "Выучите основы Python: таблицы, файлы, простые скрипты",
   "Выучите pandas, чтобы чистить и соединять таблицы",
   "Выберите одну скучную задачу из своих отчётов",
   "Автоматизируйте её на Python — ChatGPT или Claude помогут написать код",
   "Сохраните код и результат — это ваше доказательство"
  ],
  "why": "Python appears in 16 of 40 jobs. With AI writing code beside you, a finance person can learn this in weeks.",
  "whyRu": "Python встречается в 16 из 40 вакансий. Когда AI помогает писать код, финансист осваивает это за недели.",
  "links": [
   {
    "t": "pandas: getting started tutorials",
    "u": "https://pandas.pydata.org/docs/getting_started/intro_tutorials/"
   }
  ]
 },
 "fin-p5": {
  "what": "Automate one repeating part of your reports. Write down before and after. Show hours per month and the error rate (how often the old way made mistakes). Top jobs look for exactly this one page.",
  "whatRu": "Автоматизируйте одну повторяющуюся часть своих отчётов. Запишите «до» и «после». Покажите часы в месяц и долю ошибок старого способа. Лучшие вакансии ищут именно такую страницу.",
  "how": [
   "Pick one repeating part of your reports",
   "Write down the before: hours per month and the error rate",
   "Automate it with Python, SQL, AI or your current tools",
   "Write down the after: hours per month and the error rate now",
   "Put before and after on one page and keep it for applications"
  ],
  "howRu": [
   "Выберите одну повторяющуюся часть своих отчётов",
   "Запишите «до»: часы в месяц и долю ошибок",
   "Автоматизируйте её на Python, SQL, с AI или в текущих программах",
   "Запишите «после»: часы в месяц и долю ошибок сейчас",
   "Сведите «до» и «после» на одну страницу для откликов"
  ],
  "why": "Top jobs look for exactly this one page of proof. AI is taking over routine report work in finance. The person who automates it is the one who gets promoted.",
  "whyRu": "Лучшие вакансии ищут именно такую страницу. Рутинные отчёты в финансах AI уже забирает. Повышают того, кто их автоматизирует.",
  "links": []
 },
 "fin-k1": {
  "what": "Own the forecast of one business unit, start to finish. A forecast is the money plan for the coming months. Own means: you build it, you update it, and others rely on your numbers.",
  "whatRu": "Ведите прогноз одного подразделения от начала до конца. Прогноз — денежный план на ближайшие месяцы. Вести — значит строить, обновлять, и другие опираются на ваши цифры.",
  "how": [
   "Ask to run one small unit’s forecast this quarter",
   "Build its forecast end to end: data in, numbers out",
   "Update it on schedule — don’t hand it back",
   "Present the forecast to the unit’s people yourself",
   "Keep proof that others used your forecast"
  ],
  "howRu": [
   "Вызовитесь вести прогноз небольшого подразделения в этом квартале",
   "Постройте его целиком: данные на входе, цифры на выходе",
   "Обновляйте по графику — не отдавайте обратно",
   "Сами представляйте прогноз людям подразделения",
   "Сохраните доказательства, что ваш прогноз использовали"
  ],
  "why": "Top jobs use these words: “owned a forecast others relied on.” AI can draft numbers. People trust a person who stands behind them.",
  "whyRu": "Лучшие вакансии пишут так: «вёл прогноз, на который полагались другие». Цифры AI может набросать. Доверяют человеку, который за них отвечает.",
  "links": [
   {
    "t": "FPAC certification (AFP)",
    "u": "https://fpacert.financialprofessionals.org/certification/what-is-fp-a"
   }
  ]
 },
 "fin-k2": {
  "what": "Apply to mixed job titles: FP&A analyst, BI analyst and finance analytics. These jobs mix money and data. There, your proof does the talking. Skip plain “analyst” jobs.",
  "whatRu": "Откликайтесь на смешанные должности: FP&A analyst, BI analyst, finance analytics. Там соединяются финансы и данные. Там за вас говорят доказательства. Обычные вакансии «аналитик» пропускайте.",
  "how": [
   "Search for FP&A analyst, BI analyst and finance analytics titles",
   "Open each application with your proof: the automation page and the dashboards",
   "Match your SQL and program skills to the words in the job",
   "Skip plain “analyst” jobs that ask for no data or program skills"
  ],
  "howRu": [
   "Ищите должности FP&A analyst, BI analyst и finance analytics",
   "Начинайте каждый отклик с доказательств: страница автоматизации и дашборды",
   "Сверяйте свои навыки SQL и программ со словами в вакансии",
   "Пропускайте обычные вакансии «аналитик» без данных и программ"
  ],
  "why": "Plain “analyst” jobs are shrinking: −21%. AI does much of that old work now. Mixed money-and-data jobs are where the hiring is.",
  "whyRu": "Обычных вакансий «аналитик» становится меньше: −21%. Большую часть той работы теперь делает AI. Нанимают туда, где деньги соединены с данными.",
  "links": [
   {
    "t": "BLS — Financial Analysts (Occupational Outlook Handbook)",
    "u": "https://www.bls.gov/ooh/business-and-financial/financial-analysts.htm"
   }
  ]
 },
 "fin-k3": {
  "what": "In the new job, become the unit’s go-to person from day one. When they need numbers, they come to you. Join their regular work meetings. Own their forecast. Show the gap between plan and real numbers.",
  "whatRu": "На новой работе с первого дня станьте своим человеком для подразделения. Нужны цифры — идут к вам. Ходите на их рабочие встречи. Ведите их прогноз. Показывайте разницу между планом и фактом.",
  "how": [
   "In week one, ask to join the unit’s regular work meetings",
   "Learn how the unit really works, not only its numbers",
   "Take ownership of the unit’s forecast",
   "Prepare and show the gap: plan versus real numbers",
   "Be in the room when the unit talks about its results"
  ],
  "howRu": [
   "В первую неделю попроситесь на рабочие встречи подразделения",
   "Узнайте, как оно работает на деле, а не только по цифрам",
   "Возьмите на себя прогноз подразделения",
   "Готовьте и показывайте разницу между планом и фактом",
   "Будьте на встрече, когда обсуждают результаты"
  ],
  "why": "Top jobs pay for the partner role: one person who owns a unit’s forecast and explains the gap in meetings. AI can’t sit in that room and earn trust. That is top 1% work.",
  "whyRu": "Лучшие вакансии платят за роль партнёра: человек ведёт прогноз и объясняет разницу на встречах. AI не сидит на встрече и не завоёвывает доверие. Это работа топ 1%.",
  "links": [
   {
    "t": "FPAC certification (AFP)",
    "u": "https://fpacert.financialprofessionals.org/certification/what-is-fp-a"
   }
  ]
 },
 "fin-k4": {
  "what": "Run your checklist again at month 12. Check each item with fresh eyes: degree, Excel, SQL, planning program, dashboards, Python, proof. Think about the CFA again only if your goal changed to investing.",
  "whatRu": "На месяце 12 пройдите чек-лист заново. Свежим взглядом проверьте каждый пункт: диплом, Excel, SQL, программа, дашборды, Python, доказательство. О CFA думайте снова, только если цель — инвестиции.",
  "how": [
   "At month 12, go through your checklist item by item",
   "Mark what is done and what is still a gap",
   "Fix the biggest gap next",
   "Ask about the CFA once more: is your goal now investing?",
   "If not, keep the CFA on hold and keep building the partner path"
  ],
  "howRu": [
   "На месяце 12 пройдите чек-лист пункт за пунктом",
   "Отметьте, что сделано, а что ещё пробел",
   "Следующим закройте самый большой пробел",
   "Снова спросите себя про CFA: цель теперь инвестиции?",
   "Если нет, оставьте CFA на паузе и идите к роли партнёра"
  ],
  "why": "The CFA is for a different goal: 0 of 40 budget and forecast (FP&A) jobs require it. A yearly check keeps you from studying what no one asks for.",
  "whyRu": "CFA — для другой цели: его требуют 0 из 40 вакансий по бюджетам и прогнозам (FP&A). Проверка раз в год не даст учить то, что никто не просит.",
  "links": []
 }
});
Object.assign(STEP_DETAILS, {
 "ana-g1": {
  "what": "Get your SQL to working level. Without help, write joins (linking tables), totals and counts by group, and window functions (maths across rows). This is the base skill. Every better-paid job expects it.",
  "whatRu": "Доведите SQL до рабочего уровня. Без подсказок пишите соединения таблиц, итоги и подсчёты по группам и оконные функции (расчёты по строкам). Это базовый навык. Его ждут на каждой работе выше.",
  "how": [
   "Take a table you know and join it to a second one on a shared column",
   "Group the rows: count, sum and average per group",
   "Add one window function, like a running total or a rank in each group",
   "Write the same three queries from memory — ask ChatGPT or Claude to explain each mistake",
   "Save the queries — they are your first proof"
  ],
  "howRu": [
   "Возьмите знакомую таблицу и соедините со второй по общему столбцу",
   "Сгруппируйте строки: количество, сумма и среднее по группам",
   "Добавьте оконную функцию, например нарастающий итог или место в группе",
   "Пишите те же три запроса по памяти — каждую ошибку пусть объяснят ChatGPT или Claude",
   "Сохраните запросы — это ваши первые доказательства"
  ],
  "why": "SQL is named in 43 of 46 jobs we opened. Every job on this map needs it. With an AI tutor, you can reach working level in weeks.",
  "whyRu": "SQL назван в 43 из 46 открытых нами вакансий. Он нужен на каждой работе этой карты. С AI-репетитором до рабочего уровня — недели.",
  "links": [
   {
    "t": "Microsoft Learn: Query and modify data with Transact-SQL",
    "u": "https://learn.microsoft.com/en-us/training/paths/get-started-querying-with-transact-sql/"
   }
  ]
 },
 "ana-g2": {
  "what": "Learn one BI tool deeply: Tableau or Power BI, not both at once. It turns data into charts and dashboards (screens of charts). Learn to connect data, clean it, chart it and show a full dashboard.",
  "whatRu": "Глубоко выучите одну программу бизнес-аналитики (BI): Tableau или Power BI, не обе сразу. Она превращает данные в графики и дашборды. Научитесь подключать данные, чистить, строить графики и показывать готовый дашборд.",
  "how": [
   "Pick Tableau or Power BI — whichever your target jobs name most",
   "Connect it to a data table and build basic charts: bars, a line and a table of key numbers",
   "Clean and shape the data in the tool before you chart it — its AI helper can speed this up",
   "Build one full dashboard from those charts",
   "Present the dashboard out loud once, as if to a manager"
  ],
  "howRu": [
   "Выберите Tableau или Power BI — то, что чаще в нужных вам вакансиях",
   "Подключите таблицу и постройте базовые графики: столбцы, линию и таблицу главных цифр",
   "Почистите и подготовьте данные в программе — встроенный AI-помощник ускорит это",
   "Соберите из графиков один полный дашборд",
   "Один раз расскажите дашборд вслух, как руководителю"
  ],
  "why": "27 of 46 jobs name a BI tool. Report jobs work in it every day. Decision jobs use it to present. One tool, learned deep, is enough.",
  "whyRu": "Программу BI называют 27 из 46 вакансий. Аналитики отчётов работают в ней каждый день. Те, кто готовит решения, в ней показывают итоги. Одной программы, выученной глубоко, хватит.",
  "links": [
   {
    "t": "Tableau: Free Training Videos",
    "u": "https://www.tableau.com/learn/training"
   },
   {
    "t": "Microsoft Learn: Training for Power BI",
    "u": "https://learn.microsoft.com/en-us/training/powerplatform/power-bi"
   }
  ]
 },
 "ana-g3": {
  "what": "Pick your role on purpose. Don’t just apply to the word “analyst”. This map has six roles, and they pay very differently for the same word. Write down which role your skills fit today. That one line decides what you learn next.",
  "whatRu": "Выберите роль осознанно. Не откликайтесь просто на слово «аналитик». На этой карте шесть ролей, и платят им очень по-разному. Запишите, какой роли подходят ваши навыки сегодня. Эта строка решает, что учить дальше.",
  "how": [
   "List the six roles on this map: business analyst (writes documents), report analyst, product analyst, analytics engineer, strategy and operations, data scientist",
   "Next to each, write what it is paid to make: a document, a dashboard, a decision or a data model",
   "Honestly mark the role your skills fit today",
   "Mark the role you want next — it can be a different one",
   "Keep this line in sight when you apply"
  ],
  "howRu": [
   "Выпишите шесть роли этой карты: бизнес-аналитик (пишет документы), аналитик отчётов, продуктовый аналитик, инженер-аналитик, стратегия и процессы, специалист по данным (data scientist)",
   "Рядом с каждой напишите, за что ей платят: документ, дашборд, решение или модель данных",
   "Честно отметьте роль, которой подходят ваши навыки сегодня",
   "Отметьте роль, которую хотите следующей, — это может быть другая",
   "Держите эту строку на виду, когда откликаетесь"
  ],
  "why": "The six roles on this map pay $51K to $300K for the same word “analyst”. Pick the right one, and you skip years of the wrong study.",
  "whyRu": "Шесть ролей на этой карте платят от $51K до $300K за одно слово «аналитик». Выберете верную — не потратите годы не на то.",
  "links": [
   {
    "t": "BLS Occupational Outlook: Management Analysts",
    "u": "https://www.bls.gov/ooh/business-and-financial/management-analysts.htm"
   },
   {
    "t": "BLS Occupational Outlook: Data Scientists",
    "u": "https://www.bls.gov/ooh/math/data-scientists.htm"
   }
  ]
 },
 "ana-g4": {
  "what": "Use AI tools yourself on real analysis: Copilot, ChatGPT and Claude. Not on toy tasks. Give the tool a real work question. Let it draft. Then check what it gives you.",
  "whatRu": "Сами работайте с AI на настоящем анализе: Copilot, ChatGPT и Claude. Не на игрушечных задачах. Дайте настоящий рабочий вопрос. Пусть сделает черновик. Потом проверьте.",
  "how": [
   "Pick one real analysis task from your current work",
   "Ask one AI tool to draft the first version: a query, a chart or a summary",
   "Check every number in the draft against the source data yourself",
   "Note one place the draft was wrong and how you caught it",
   "Repeat with a second tool, so you know more than one"
  ],
  "howRu": [
   "Выберите одну настоящую задачу анализа со своей работы",
   "Попросите AI сделать первую версию: запрос, график или сводку",
   "Сами сверьте каждую цифру черновика с исходными данными",
   "Отметьте, где черновик ошибся и как вы это поймали",
   "Повторите с другим AI, чтобы знать не один"
  ],
  "why": "6 of 46 jobs require a named AI tool. This is the newest demand, and it is growing. AI already writes simple queries for analysts. The one who checks it is the one who gets hired.",
  "whyRu": "6 из 46 вакансий требуют конкретный AI-инструмент. Это самое новое требование, и оно растёт. Простые запросы AI уже пишет за аналитиков. Берут того, кто умеет его проверять.",
  "links": [
   {
    "t": "Microsoft Learn: Microsoft 365 Copilot hub",
    "u": "https://learn.microsoft.com/en-us/copilot/microsoft-365/"
   }
  ]
 },
 "ana-p1": {
  "what": "Build one dashboard that helps someone make a decision. Not one that just answers a request. Start from the choice a person must make. Build only what that choice needs. Write down who opened it and what they decided.",
  "whatRu": "Постройте один дашборд, который помогает принять решение. А не просто выполняет просьбу. Начните с выбора, который стоит перед человеком. Стройте только то, что нужно для него. Запишите, кто открыл и что решил.",
  "how": [
   "Name the decision first, in one sentence: who decides what, and when",
   "Name the person who will open it — a dashboard needs an owner with a decision to make",
   "Build only the charts that answer that decision",
   "Show it to that person and watch them use it",
   "Write down who opened it and what they decided — that note is your proof"
  ],
  "howRu": [
   "Сначала назовите решение одной фразой: кто, что и когда решает",
   "Назовите человека, который будет открывать дашборд, — ему нужно что-то решить",
   "Стройте только графики, которые отвечают на это решение",
   "Покажите ему дашборд и посмотрите, как он им пользуется",
   "Запишите, кто открыл и что решил, — эта запись и есть доказательство"
  ],
  "why": "If nobody opens a dashboard, it helped no one. Report jobs are judged by whether people open their work. AI can draw charts now. Knowing which decision they serve is your value.",
  "whyRu": "Если дашборд никто не открывает, он никому не помог. Аналитиков отчётов оценивают по тому, открывают ли их работу. Графики AI уже рисует сам. Ваша ценность — понять, для какого решения они нужны.",
  "links": [
   {
    "t": "Tableau: Free Training Videos",
    "u": "https://www.tableau.com/learn/training"
   },
   {
    "t": "Microsoft Learn: Training for Power BI",
    "u": "https://learn.microsoft.com/en-us/training/powerplatform/power-bi"
   }
  ]
 },
 "ana-p2": {
  "what": "Learn data modeling with dbt. Data modeling means turning messy raw tables into clean tables people can trust. dbt is the tool that builds them.",
  "whatRu": "Выучите моделирование данных в dbt. Это когда сырые, грязные таблицы превращают в чистые, которым можно доверять. dbt — программа, которая их строит.",
  "how": [
   "Open the dbt docs and read what a model is: one SQL query that becomes one clean table",
   "Build one model from a raw table you know",
   "Add a simple test, like checking a column is never empty",
   "Run the model and check the clean table it made",
   "Write one line on what the table is for — people and AI both read it"
  ],
  "howRu": [
   "Откройте документацию dbt: модель — это один SQL-запрос, который становится чистой таблицей",
   "Постройте одну модель из знакомой сырой таблицы",
   "Добавьте простую проверку, например что столбец никогда не пустой",
   "Запустите модель и проверьте чистую таблицу",
   "Напишите одной строкой, зачем эта таблица, — её читают и люди, и AI"
  ],
  "why": "7 of 7 analytics-engineer jobs name dbt. Every AI answer at a company reads from these models. So the people who build them get more valuable as AI grows.",
  "whyRu": "dbt называют 7 из 7 вакансий инженера-аналитика. Каждый ответ AI в компании берёт данные из этих моделей. Чем больше AI, тем ценнее те, кто их строит.",
  "links": [
   {
    "t": "dbt Learn: Course Catalog",
    "u": "https://learn.getdbt.com/"
   },
   {
    "t": "dbt Docs: What is dbt?",
    "u": "https://docs.getdbt.com/docs/introduction"
   }
  ]
 },
 "ana-p3": {
  "what": "Learn Python for analysis. Analysts use this programming language when a spreadsheet or BI tool isn’t enough. Learn it on data tasks: read a table, clean it, group it, chart it.",
  "whatRu": "Выучите Python для анализа. Аналитики берут этот язык, когда таблиц и BI мало. Учите его на задачах с данными: прочитать таблицу, почистить, сгруппировать, построить график.",
  "how": [
   "Go through the start of the official Python tutorial to learn the basics",
   "Open a data table with pandas — the Python tool for tables",
   "Clean it: drop empty rows and fix column names — ask AI to help when the code breaks",
   "Group the table and count totals, like in SQL",
   "Make one chart from the grouped table"
  ],
  "howRu": [
   "Пройдите начало официального учебника Python, чтобы понять основы",
   "Откройте таблицу через pandas — инструмент Python для таблиц",
   "Почистите: уберите пустые строки, поправьте названия столбцов — если код сломался, спросите AI",
   "Сгруппируйте таблицу и посчитайте итоги, как в SQL",
   "Постройте один график по сгруппированной таблице"
  ],
  "why": "18 of 46 jobs name Python. In data analyst jobs it is 9 of 9, in some form. With AI beside you, Python takes weeks, not years.",
  "whyRu": "Python называют 18 из 46 вакансий. В вакансиях аналитика данных — 9 из 9, в той или иной форме. С AI рядом Python осваивается за недели, а не годы.",
  "links": [
   {
    "t": "Python.org: The Python Tutorial",
    "u": "https://docs.python.org/3/tutorial/"
   },
   {
    "t": "pandas: Getting started tutorials",
    "u": "https://pandas.pydata.org/docs/getting_started/intro_tutorials/"
   }
  ]
 },
 "ana-p4": {
  "what": "Run one experiment start to finish. An experiment is a fair test. One group gets the change, one doesn’t. One number the team watches shows which is better. Or pick the number yourself and explain why this one.",
  "whatRu": "Проведите один эксперимент от начала до конца. Эксперимент — честный тест. Одна группа получает изменение, другая нет. Одно число, за которым следит команда, показывает, что лучше. Или выберите число сами и объясните почему.",
  "how": [
   "Write the question in one sentence: which change might move which number",
   "Choose the one number that will judge the test",
   "Split the users, or the time, into two groups: with the change and without",
   "Run the test and collect the number for both groups",
   "Write the result and your call: keep the change or drop it — and why"
  ],
  "howRu": [
   "Запишите вопрос одной фразой: какое изменение может сдвинуть какое число",
   "Выберите одно число, по которому оцените тест",
   "Разделите пользователей или время на две группы: с изменением и без",
   "Проведите тест и соберите число по обеим группам",
   "Запишите результат и решение: оставить или убрать — и почему"
  ],
  "why": "4 of 4 product analyst jobs name experiments. A number you own proves you can lead a decision. AI can run the maths. Deciding what to test is still a human job — and it pays more.",
  "whyRu": "Эксперименты называют 4 из 4 вакансий продуктового аналитика. Своё число доказывает, что вы умеете вести решение. Посчитать может AI. Решить, что проверять, — работа человека, и платят за неё больше.",
  "links": [
   {
    "t": "General guidance on conducting A/B experiments — Google Cloud",
    "u": "https://docs.cloud.google.com/retail/docs/a-b-testing"
   }
  ]
 },
 "ana-p5": {
  "what": "Automate one report you build by hand again and again. Set it to refresh and run by itself. Write down the hours you saved.",
  "whatRu": "Автоматизируйте отчёт, который вы снова и снова собираете руками. Пусть он обновляется и работает сам. Запишите, сколько часов сэкономили.",
  "how": [
   "Pick the report you rebuild by hand most often",
   "Write down how long one rebuild by hand takes",
   "Connect the report to its data, so numbers update on their own — AI can help write the setup",
   "Set the refresh to run on a schedule",
   "Run it once, check the numbers match your last hand-made version, and write down the hours saved"
  ],
  "howRu": [
   "Выберите отчёт, который чаще всего пересобираете руками",
   "Запишите, сколько занимает одна ручная сборка",
   "Подключите отчёт к данным, чтобы цифры обновлялись сами, — настроить поможет AI",
   "Поставьте обновление по расписанию",
   "Запустите, сверьте цифры с последней ручной версией и запишите сэкономленные часы"
  ],
  "why": "Jobs that name AI want exactly this: a report once made by hand now runs by itself. AI is taking over hand-made reports. The analyst who automates them is the one who stays.",
  "whyRu": "Вакансии с AI хотят ровно это: отчёт, который делали руками, теперь работает сам. Ручные отчёты AI забирает. Остаётся аналитик, который их автоматизирует.",
  "links": [
   {
    "t": "Microsoft Learn: Training for Power BI",
    "u": "https://learn.microsoft.com/en-us/training/powerplatform/power-bi"
   }
  ]
 },
 "ana-k1": {
  "what": "Apply to decision roles by name: product analyst, analytics engineer, strategy and operations. Search these exact titles. Not the plain word “analyst”.",
  "whatRu": "Откликайтесь на роли, где готовят решения, по названию: продуктовый аналитик, инженер-аналитик, стратегия и процессы. Ищите именно эти названия. А не просто «аналитик».",
  "how": [
   "Change your search words: role names, not just “analyst”",
   "Read each job and look for the real work: decisions, experiments or data models",
   "Skip jobs where the main output is a document or a dashboard on request",
   "Open each application with the role you picked earlier",
   "Track which role each application goes to"
  ],
  "howRu": [
   "Поменяйте слова поиска: названия ролей, а не только «аналитик»",
   "В каждой вакансии ищите настоящую работу: решения, эксперименты или модели данных",
   "Пропускайте вакансии, где главное — документ или дашборд по просьбе",
   "Начинайте отклик с роли, которую выбрали раньше",
   "Отмечайте, на какую роль ушёл каждый отклик"
  ],
  "why": "One plain “analyst” job for beginners got 1,108 applications. AI now does much of that simple work. Aim at decision roles, and you skip the crowd.",
  "whyRu": "На одну обычную вакансию «аналитик» для новичков пришло 1,108 откликов. Простую часть этой работы теперь делает AI. Цельтесь в роли решений — и обойдёте толпу.",
  "links": [
   {
    "t": "BLS Occupational Outlook: Management Analysts",
    "u": "https://www.bls.gov/ooh/business-and-financial/management-analysts.htm"
   },
   {
    "t": "BLS Occupational Outlook: Data Scientists",
    "u": "https://www.bls.gov/ooh/math/data-scientists.htm"
   }
  ]
 },
 "ana-k2": {
  "what": "At interviews, start with a decision you changed, not a dashboard you built. The people who decide based on your work matter most. Tell that story first: what was at stake, what your work showed, what they decided.",
  "whatRu": "На собеседовании начинайте с решения, которое вы изменили, а не с дашборда. Главное — люди, которые решают по вашей работе. Сначала эта история: что было на кону, что показал анализ, что решили.",
  "how": [
   "Pick one decision your work changed",
   "Write the story in three lines: the situation, what your analysis showed, what was decided",
   "Open your interview answer with that story, not a tool name",
   "Keep the dashboard as a detail, not the main point",
   "Prepare a second decision story the same way"
  ],
  "howRu": [
   "Выберите одно решение, которое изменила ваша работа",
   "Запишите историю в три строки: ситуация, что показал анализ, что решили",
   "Начинайте ответ с этой истории, а не с названия программы",
   "Дашборд — деталь, а не главное",
   "Так же подготовьте вторую историю"
  ],
  "why": "In all 7 strategy and operations jobs, working with the people who decide is the main duty. AI makes charts. People trust a person who changed a decision.",
  "whyRu": "Во всех 7 вакансиях «стратегия и процессы» главная обязанность — работа с теми, кто принимает решения. Графики делает AI. Доверяют человеку, который изменил решение.",
  "links": [
   {
    "t": "BLS Occupational Outlook: Management Analysts",
    "u": "https://www.bls.gov/ooh/business-and-financial/management-analysts.htm"
   }
  ]
 },
 "ana-k3": {
  "what": "Show how you work with AI: one analysis where AI made the draft and you checked it. Show your checks, not just the draft.",
  "whatRu": "Покажите, как вы работаете с AI: один анализ, где AI сделал черновик, а вы проверили. Покажите проверки, а не только черновик.",
  "how": [
   "Take the analysis from the earlier step where AI drafted and you checked",
   "Keep both versions: the AI draft and your checked final",
   "Write down each check you ran, in plain words",
   "Mark one AI mistake and how your check caught it",
   "Present it in that order: draft, checks, final"
  ],
  "howRu": [
   "Возьмите анализ с прошлого шага, где AI сделал черновик, а вы проверили",
   "Сохраните обе версии: черновик AI и проверенный итог",
   "Запишите каждую проверку простыми словами",
   "Отметьте одну ошибку AI и как вы её поймали",
   "Показывайте в таком порядке: черновик, проверки, итог"
  ],
  "why": "The 6 jobs that name AI tools want this proof. In their words: “to build something real”. It shows you are an analyst AI makes stronger, not one it replaces.",
  "whyRu": "6 вакансий с AI-инструментами хотят именно это доказательство. Их словами: «построить что-то настоящее». Это показывает: AI вас усиливает, а не заменяет.",
  "links": [
   {
    "t": "Microsoft Learn: Microsoft 365 Copilot hub",
    "u": "https://learn.microsoft.com/en-us/copilot/microsoft-365/"
   }
  ]
 },
 "ana-k4": {
  "what": "Set your price from real jobs, not feelings. Find the pay range for your role and ask within it. If the range is flat (no room to grow), the role is the problem, not you. Then look at a new role.",
  "whatRu": "Оценивайте себя по настоящим вакансиям, а не по ощущениям. Узнайте вилку зарплат своей роли и просите в её пределах. Если расти некуда, дело в роли, а не в вас. Тогда смотрите на другую роль.",
  "how": [
   "Find your role in the three pay ranges in the “why” line below",
   "Write down your role’s range and where you sit in it",
   "Compare any offer to that range, not to your current pay",
   "If the range is flat, go back to the role step and pick your next role"
  ],
  "howRu": [
   "Найдите свою роль в трёх вилках зарплат в строке «почему» ниже",
   "Запишите вилку своей роли и где в ней вы",
   "Сравнивайте любое предложение с вилкой, а не с текущей зарплатой",
   "Если расти некуда, вернитесь к шагу выбора роли и выберите следующую"
  ],
  "why": "Report roles pay $60K–$95K. Product roles pay $106K–$168K. Analytics engineering pays $130K–$244K for experienced and lead people. The role you pick sets your ceiling.",
  "whyRu": "Аналитик отчётов: $60K–$95K. Продуктовый аналитик: $106K–$168K. Инженер-аналитик: $130K–$244K на опытном и ведущем уровне. Выбранная роль задаёт ваш потолок.",
  "links": [
   {
    "t": "BLS Occupational Outlook: Management Analysts",
    "u": "https://www.bls.gov/ooh/business-and-financial/management-analysts.htm"
   },
   {
    "t": "BLS Occupational Outlook: Data Scientists",
    "u": "https://www.bls.gov/ooh/math/data-scientists.htm"
   }
  ]
 },
 "ana-k5": {
  "what": "Re-check this list every three months against new jobs. Open fresh jobs for your role. Count the named tools again. Update your plan to match what changed.",
  "whatRu": "Раз в три месяца сверяйте этот список со свежими вакансиями. Откройте новые вакансии для своей роли. Снова посчитайте названные программы. Поправьте план под изменения.",
  "how": [
   "Set a date three months from now",
   "Open a fresh set of jobs for your role — AI can help sort them",
   "Count again: SQL, your BI tool, Python, dbt and any named AI tool",
   "Compare the new counts with the counts on this page",
   "Update your next learning step to match what changed"
  ],
  "howRu": [
   "Поставьте дату через три месяца",
   "Откройте свежие вакансии для своей роли — разобрать их поможет AI",
   "Посчитайте снова: SQL, ваша программа BI, Python, dbt и любые названные AI-инструменты",
   "Сравните новые цифры с цифрами на этой странице",
   "Поправьте следующий шаг учёбы под изменения"
  ],
  "why": "AI tools went from not named at all to 6 of 46 in one round of checking. What employers ask for now changes that fast. A check every three months keeps you from learning yesterday’s skills.",
  "whyRu": "AI-инструментов не было вовсе, а за одну проверку стало 6 из 46. Требования работодателей теперь меняются так быстро. Проверка раз в три месяца не даст учить вчерашнее.",
  "links": [
   {
    "t": "BLS Occupational Outlook: Management Analysts",
    "u": "https://www.bls.gov/ooh/business-and-financial/management-analysts.htm"
   },
   {
    "t": "BLS Occupational Outlook: Data Scientists",
    "u": "https://www.bls.gov/ooh/math/data-scientists.htm"
   }
  ]
 }
});
Object.assign(STEP_DETAILS, {
 "dan-g1": {
  "what": "Get your SQL to working level. Without help, write joins (linking tables), totals and counts by group, and window functions (maths across rows). This is the base skill. Every better-paid job expects it.",
  "whatRu": "Доведите SQL до рабочего уровня. Без подсказок пишите соединения таблиц, итоги и подсчёты по группам и оконные функции (расчёты по строкам). Это базовый навык. Его ждут на каждой работе выше.",
  "how": [
   "Take a table you know and join it to a second one on a shared column",
   "Group the rows: count, sum and average per group",
   "Add one window function, like a running total or a rank in each group",
   "Write the same three queries from memory — ask ChatGPT or Claude to explain each mistake",
   "Save the queries — they are your first proof"
  ],
  "howRu": [
   "Возьмите знакомую таблицу и соедините со второй по общему столбцу",
   "Сгруппируйте строки: количество, сумма и среднее по группам",
   "Добавьте оконную функцию, например нарастающий итог или место в группе",
   "Пишите те же три запроса по памяти — каждую ошибку пусть объяснят ChatGPT или Claude",
   "Сохраните запросы — это ваши первые доказательства"
  ],
  "why": "SQL is named in 24 of 24 data jobs we opened. Every job on this map needs it. With an AI tutor, you can reach working level in weeks.",
  "whyRu": "SQL назван в 24 из 24 открытых нами вакансий по данным. Он нужен на каждой работе этой карты. С AI-репетитором до рабочего уровня — недели.",
  "links": [
   {
    "t": "Microsoft Learn: Query and modify data with Transact-SQL",
    "u": "https://learn.microsoft.com/en-us/training/paths/get-started-querying-with-transact-sql/"
   }
  ]
 },
 "dan-g2": {
  "what": "Learn one BI tool deeply: Tableau or Power BI, not both at once. It turns data into charts and dashboards (screens of charts). Learn to connect data, clean it, chart it and show a full dashboard.",
  "whatRu": "Глубоко выучите одну программу бизнес-аналитики (BI): Tableau или Power BI, не обе сразу. Она превращает данные в графики и дашборды. Научитесь подключать данные, чистить, строить графики и показывать готовый дашборд.",
  "how": [
   "Pick Tableau or Power BI — whichever your target jobs name most",
   "Connect it to a data table and build basic charts: bars, a line and a table of key numbers",
   "Clean and shape the data in the tool before you chart it — its AI helper can speed this up",
   "Build one full dashboard from those charts",
   "Present the dashboard out loud once, as if to a manager"
  ],
  "howRu": [
   "Выберите Tableau или Power BI — то, что чаще в нужных вам вакансиях",
   "Подключите таблицу и постройте базовые графики: столбцы, линию и таблицу главных цифр",
   "Почистите и подготовьте данные в программе — встроенный AI-помощник ускорит это",
   "Соберите из графиков один полный дашборд",
   "Один раз расскажите дашборд вслух, как руководителю"
  ],
  "why": "18 of 24 data jobs name or require a BI tool. In data analyst jobs it is 9 of 9. One tool, learned deep, is enough.",
  "whyRu": "Программу BI называют или требуют 18 из 24 вакансий по данным. У аналитика данных — 9 из 9. Одной программы, выученной глубоко, хватит.",
  "links": [
   {
    "t": "Tableau: Free Training Videos",
    "u": "https://www.tableau.com/learn/training"
   },
   {
    "t": "Microsoft Learn: Training for Power BI",
    "u": "https://learn.microsoft.com/en-us/training/powerplatform/power-bi"
   }
  ]
 },
 "dan-g3": {
  "what": "Pick your role on purpose. Don’t apply to every title that sounds alike. This map has four roles, and they pay very differently for similar titles. Write down which role your skills fit today. That one line decides what you learn next.",
  "whatRu": "Выберите роль осознанно. Не откликайтесь на все похожие названия. На этой карте четыре роли, и платят им очень по-разному. Запишите, какой роли подходят ваши навыки сегодня. Эта строка решает, что учить дальше.",
  "how": [
   "List the four roles on this map: report analyst, product analyst, analytics engineer, data scientist",
   "Next to each, write what it is paid to make: a dashboard, a decision or a data model",
   "Honestly mark the role your skills fit today",
   "Mark the role you want next — it can be a different one",
   "Keep this line in sight when you apply"
  ],
  "howRu": [
   "Выпишите четыре роли этой карты: аналитик отчётов, продуктовый аналитик, инженер-аналитик, специалист по данным (data scientist)",
   "Рядом с каждой напишите, за что ей платят: дашборд, решение или модель данных",
   "Честно отметьте роль, которой подходят ваши навыки сегодня",
   "Отметьте роль, которую хотите следующей, — это может быть другая",
   "Держите эту строку на виду, когда откликаетесь"
  ],
  "why": "The four roles on this map pay $60K to $300K for similar titles. Pick the right one, and you skip years of the wrong study.",
  "whyRu": "Четыре роли на этой карте платят от $60K до $300K за похожие названия. Выберете верную — не потратите годы не на то.",
  "links": [
   {
    "t": "BLS Occupational Outlook: Data Scientists",
    "u": "https://www.bls.gov/ooh/math/data-scientists.htm"
   }
  ]
 },
 "dan-g4": {
  "what": "Use AI tools yourself on real analysis: Copilot, ChatGPT and Claude. Not on toy tasks. Give the tool a real work question. Let it draft. Then check what it gives you.",
  "whatRu": "Сами работайте с AI на настоящем анализе: Copilot, ChatGPT и Claude. Не на игрушечных задачах. Дайте настоящий рабочий вопрос. Пусть сделает черновик. Потом проверьте.",
  "how": [
   "Pick one real analysis task from your current work",
   "Ask one AI tool to draft the first version: a query, a chart or a summary",
   "Check every number in the draft against the source data yourself",
   "Note one place the draft was wrong and how you caught it",
   "Repeat with a second tool, so you know more than one"
  ],
  "howRu": [
   "Выберите одну настоящую задачу анализа со своей работы",
   "Попросите AI сделать первую версию: запрос, график или сводку",
   "Сами сверьте каждую цифру черновика с исходными данными",
   "Отметьте, где черновик ошибся и как вы это поймали",
   "Повторите с другим AI, чтобы знать не один"
  ],
  "why": "Two of 24 data jobs already name an AI tool as a must or a duty. One asks people “to build something real”. AI already writes simple queries. The analyst who checks it gets hired.",
  "whyRu": "Две из 24 вакансий по данным уже требуют AI-инструмент. Одна просит «построить что-то настоящее». Простые запросы AI уже пишет сам. Берут аналитика, который умеет его проверять.",
  "links": [
   {
    "t": "Microsoft Learn: Microsoft 365 Copilot hub",
    "u": "https://learn.microsoft.com/en-us/copilot/microsoft-365/"
   }
  ]
 },
 "dan-p1": {
  "what": "Build one dashboard that helps someone make a decision. Not one that just answers a request. Start from the choice a person must make. Build only what that choice needs. Write down who opened it and what they decided.",
  "whatRu": "Постройте один дашборд, который помогает принять решение. А не просто выполняет просьбу. Начните с выбора, который стоит перед человеком. Стройте только то, что нужно для него. Запишите, кто открыл и что решил.",
  "how": [
   "Name the decision first, in one sentence: who decides what, and when",
   "Name the person who will open it — a dashboard needs an owner with a decision to make",
   "Build only the charts that answer that decision",
   "Show it to that person and watch them use it",
   "Write down who opened it and what they decided — that note is your proof"
  ],
  "howRu": [
   "Сначала назовите решение одной фразой: кто, что и когда решает",
   "Назовите человека, который будет открывать дашборд, — ему нужно что-то решить",
   "Стройте только графики, которые отвечают на это решение",
   "Покажите ему дашборд и посмотрите, как он им пользуется",
   "Запишите, кто открыл и что решил, — эта запись и есть доказательство"
  ],
  "why": "If nobody opens a dashboard, it helped no one. Report jobs are judged by whether people open their work. AI can draw charts now. Knowing which decision they serve is your value.",
  "whyRu": "Если дашборд никто не открывает, он никому не помог. Аналитиков отчётов оценивают по тому, открывают ли их работу. Графики AI уже рисует сам. Ваша ценность — понять, для какого решения они нужны.",
  "links": [
   {
    "t": "Tableau: Free Training Videos",
    "u": "https://www.tableau.com/learn/training"
   },
   {
    "t": "Microsoft Learn: Training for Power BI",
    "u": "https://learn.microsoft.com/en-us/training/powerplatform/power-bi"
   }
  ]
 },
 "dan-p2": {
  "what": "Learn data modeling with dbt. Data modeling means turning messy raw tables into clean tables people can trust. dbt is the tool that builds them.",
  "whatRu": "Выучите моделирование данных в dbt. Это когда сырые, грязные таблицы превращают в чистые, которым можно доверять. dbt — программа, которая их строит.",
  "how": [
   "Open the dbt docs and read what a model is: one SQL query that becomes one clean table",
   "Build one model from a raw table you know",
   "Add a simple test, like checking a column is never empty",
   "Run the model and check the clean table it made",
   "Write one line on what the table is for — people and AI both read it"
  ],
  "howRu": [
   "Откройте документацию dbt: модель — это один SQL-запрос, который становится чистой таблицей",
   "Постройте одну модель из знакомой сырой таблицы",
   "Добавьте простую проверку, например что столбец никогда не пустой",
   "Запустите модель и проверьте чистую таблицу",
   "Напишите одной строкой, зачем эта таблица, — её читают и люди, и AI"
  ],
  "why": "7 of 7 analytics-engineer jobs name dbt. Every AI answer at a company reads from these models. So the people who build them get more valuable as AI grows.",
  "whyRu": "dbt называют 7 из 7 вакансий инженера-аналитика. Каждый ответ AI в компании берёт данные из этих моделей. Чем больше AI, тем ценнее те, кто их строит.",
  "links": [
   {
    "t": "dbt Learn: Course Catalog",
    "u": "https://learn.getdbt.com/"
   },
   {
    "t": "dbt Docs: What is dbt?",
    "u": "https://docs.getdbt.com/docs/introduction"
   }
  ]
 },
 "dan-p3": {
  "what": "Get hands-on with one cloud data warehouse, Snowflake first. A warehouse is where a company’s data lives in the cloud. Open it, find data there, and run your SQL inside it. Not only on your own computer.",
  "whatRu": "Поработайте руками в одном облачном хранилище данных, начните со Snowflake. Хранилище — место, где данные компании живут в облаке. Откройте его, найдите данные и запускайте SQL там. А не только на своём компьютере.",
  "how": [
   "Read Snowflake’s page on warehouses: a warehouse is the computing power that runs your queries",
   "Open Snowflake and run one of your known SQL queries there",
   "Find one table and join it to a second one inside the warehouse",
   "Note what the warehouse is called in your target jobs",
   "Save one query you ran there as proof"
  ],
  "howRu": [
   "Прочитайте страницу Snowflake о хранилищах: это мощность, которая выполняет ваши запросы",
   "Откройте Snowflake и запустите там знакомый SQL-запрос",
   "Найдите таблицу и соедините её со второй прямо в хранилище",
   "Отметьте, как хранилище называется в нужных вам вакансиях",
   "Сохраните один запрос оттуда как доказательство"
  ],
  "why": "12 of 24 data jobs name a warehouse. In analytics engineer jobs it is 7 of 7. This is where company AI gets its data, too.",
  "whyRu": "Хранилище называют 12 из 24 вакансий по данным. У инженера-аналитика — 7 из 7. Отсюда же берёт данные AI компании.",
  "links": [
   {
    "t": "Snowflake Docs: Virtual warehouses",
    "u": "https://docs.snowflake.com/en/user-guide/warehouses"
   }
  ]
 },
 "dan-p4": {
  "what": "Learn Python for analysis. Analysts use this programming language when a spreadsheet or BI tool isn’t enough. Learn it on data tasks: read a table, clean it, group it, chart it.",
  "whatRu": "Выучите Python для анализа. Аналитики берут этот язык, когда таблиц и BI мало. Учите его на задачах с данными: прочитать таблицу, почистить, сгруппировать, построить график.",
  "how": [
   "Go through the start of the official Python tutorial to learn the basics",
   "Open a data table with pandas — the Python tool for tables",
   "Clean it: drop empty rows and fix column names — ask AI to help when the code breaks",
   "Group the table and count totals, like in SQL",
   "Make one chart from the grouped table"
  ],
  "howRu": [
   "Пройдите начало официального учебника Python, чтобы понять основы",
   "Откройте таблицу через pandas — инструмент Python для таблиц",
   "Почистите: уберите пустые строки, поправьте названия столбцов — если код сломался, спросите AI",
   "Сгруппируйте таблицу и посчитайте итоги, как в SQL",
   "Постройте один график по сгруппированной таблице"
  ],
  "why": "15 of 24 data jobs name Python. In data analyst jobs it is 9 of 9, in some form. With AI beside you, Python takes weeks, not years.",
  "whyRu": "Python называют 15 из 24 вакансий по данным. У аналитика данных — 9 из 9, в той или иной форме. С AI рядом Python осваивается за недели, а не годы.",
  "links": [
   {
    "t": "Python.org: The Python Tutorial",
    "u": "https://docs.python.org/3/tutorial/"
   },
   {
    "t": "pandas: Getting started tutorials",
    "u": "https://pandas.pydata.org/docs/getting_started/intro_tutorials/"
   }
  ]
 },
 "dan-p5": {
  "what": "Run one experiment start to finish. An experiment is a fair test. One group gets the change, one doesn’t. One number the team watches shows which is better. Or pick the number yourself and explain why this one.",
  "whatRu": "Проведите один эксперимент от начала до конца. Эксперимент — честный тест. Одна группа получает изменение, другая нет. Одно число, за которым следит команда, показывает, что лучше. Или выберите число сами и объясните почему.",
  "how": [
   "Write the question in one sentence: which change might move which number",
   "Choose the one number that will judge the test",
   "Split the users, or the time, into two groups: with the change and without",
   "Run the test and collect the number for both groups",
   "Write the result and your call: keep the change or drop it — and why"
  ],
  "howRu": [
   "Запишите вопрос одной фразой: какое изменение может сдвинуть какое число",
   "Выберите одно число, по которому оцените тест",
   "Разделите пользователей или время на две группы: с изменением и без",
   "Проведите тест и соберите число по обеим группам",
   "Запишите результат и решение: оставить или убрать — и почему"
  ],
  "why": "4 of 4 product analyst jobs name experiments. A number you own proves you can lead a decision. AI can run the maths. Deciding what to test is still a human job — and it pays more.",
  "whyRu": "Эксперименты называют 4 из 4 вакансий продуктового аналитика. Своё число доказывает, что вы умеете вести решение. Посчитать может AI. Решить, что проверять, — работа человека, и платят за неё больше.",
  "links": [
   {
    "t": "General guidance on conducting A/B experiments — Google Cloud",
    "u": "https://docs.cloud.google.com/retail/docs/a-b-testing"
   }
  ]
 },
 "dan-p6": {
  "what": "Automate one report you build by hand again and again. Set it to refresh and run by itself. Write down the hours you saved.",
  "whatRu": "Автоматизируйте отчёт, который вы снова и снова собираете руками. Пусть он обновляется и работает сам. Запишите, сколько часов сэкономили.",
  "how": [
   "Pick the report you rebuild by hand most often",
   "Write down how long one rebuild by hand takes",
   "Connect the report to its data, so numbers update on their own — AI can help write the setup",
   "Set the refresh to run on a schedule",
   "Run it once, check the numbers match your last hand-made version, and write down the hours saved"
  ],
  "howRu": [
   "Выберите отчёт, который чаще всего пересобираете руками",
   "Запишите, сколько занимает одна ручная сборка",
   "Подключите отчёт к данным, чтобы цифры обновлялись сами, — настроить поможет AI",
   "Поставьте обновление по расписанию",
   "Запустите, сверьте цифры с последней ручной версией и запишите сэкономленные часы"
  ],
  "why": "Jobs that name AI want exactly this: a report once made by hand now runs by itself. AI is taking over hand-made reports. The analyst who automates them is the one who stays.",
  "whyRu": "Вакансии с AI хотят ровно это: отчёт, который делали руками, теперь работает сам. Ручные отчёты AI забирает. Остаётся аналитик, который их автоматизирует.",
  "links": [
   {
    "t": "Microsoft Learn: Training for Power BI",
    "u": "https://learn.microsoft.com/en-us/training/powerplatform/power-bi"
   }
  ]
 },
 "dan-k1": {
  "what": "Apply to decision roles by name: product analyst, analytics engineer. Search these exact titles. Not the plain words “data analyst”.",
  "whatRu": "Откликайтесь на роли, где готовят решения, по названию: продуктовый аналитик, инженер-аналитик. Ищите именно эти названия. А не просто «аналитик данных».",
  "how": [
   "Change your search words: role names, not just “data analyst”",
   "Read each job and look for the real work: decisions, experiments or data models",
   "Skip jobs where the main output is a dashboard or a report on request",
   "Open each application with the role you picked earlier",
   "Track which role each application goes to"
  ],
  "howRu": [
   "Поменяйте слова поиска: названия ролей, а не только «аналитик данных»",
   "В каждой вакансии ищите настоящую работу: решения, эксперименты или модели данных",
   "Пропускайте вакансии, где главное — дашборд или отчёт по просьбе",
   "Начинайте отклик с роли, которую выбрали раньше",
   "Отмечайте, на какую роль ушёл каждый отклик"
  ],
  "why": "One plain “data analyst” job for beginners got 1,108 applications. AI now does much of that simple work. Aim at decision roles, and you skip the crowd.",
  "whyRu": "На одну обычную вакансию «аналитик данных» для новичков пришло 1,108 откликов. Простую часть этой работы теперь делает AI. Цельтесь в роли решений — и обойдёте толпу.",
  "links": [
   {
    "t": "BLS Occupational Outlook: Data Scientists",
    "u": "https://www.bls.gov/ooh/math/data-scientists.htm"
   }
  ]
 },
 "dan-k2": {
  "what": "Show how you work with AI: one analysis where AI made the draft and you checked it. Show your checks, not just the draft.",
  "whatRu": "Покажите, как вы работаете с AI: один анализ, где AI сделал черновик, а вы проверили. Покажите проверки, а не только черновик.",
  "how": [
   "Take the analysis from the earlier step where AI drafted and you checked",
   "Keep both versions: the AI draft and your checked final",
   "Write down each check you ran, in plain words",
   "Mark one AI mistake and how your check caught it",
   "Present it in that order: draft, checks, final"
  ],
  "howRu": [
   "Возьмите анализ с прошлого шага, где AI сделал черновик, а вы проверили",
   "Сохраните обе версии: черновик AI и проверенный итог",
   "Запишите каждую проверку простыми словами",
   "Отметьте одну ошибку AI и как вы её поймали",
   "Показывайте в таком порядке: черновик, проверки, итог"
  ],
  "why": "Jobs that name AI tools want this proof. In their words: “to build something real”. It shows AI makes you stronger, not replaceable.",
  "whyRu": "Вакансии с AI-инструментами хотят именно это доказательство. Их словами: «построить что-то настоящее». Это показывает: AI вас усиливает, а не заменяет.",
  "links": [
   {
    "t": "Microsoft Learn: Microsoft 365 Copilot hub",
    "u": "https://learn.microsoft.com/en-us/copilot/microsoft-365/"
   }
  ]
 },
 "dan-k3": {
  "what": "Set your price from real jobs, not feelings. Find the pay range for your role and ask within it. If the range is flat (no room to grow), the role is the problem, not you. Then look at a new role.",
  "whatRu": "Оценивайте себя по настоящим вакансиям, а не по ощущениям. Узнайте вилку зарплат своей роли и просите в её пределах. Если расти некуда, дело в роли, а не в вас. Тогда смотрите на другую роль.",
  "how": [
   "Find your role in the three pay ranges in the “why” line below",
   "Write down your role’s range and where you sit in it",
   "Compare any offer to that range, not to your current pay",
   "If the range is flat, go back to the role step and pick your next role"
  ],
  "howRu": [
   "Найдите свою роль в трёх вилках зарплат в строке «почему» ниже",
   "Запишите вилку своей роли и где в ней вы",
   "Сравнивайте любое предложение с вилкой, а не с текущей зарплатой",
   "Если расти некуда, вернитесь к шагу выбора роли и выберите следующую"
  ],
  "why": "Report roles pay $60K–$95K. Product roles pay $106K–$168K. Analytics engineering pays $130K–$244K for experienced and lead people. The role you pick sets your ceiling.",
  "whyRu": "Аналитик отчётов: $60K–$95K. Продуктовый аналитик: $106K–$168K. Инженер-аналитик: $130K–$244K на опытном и ведущем уровне. Выбранная роль задаёт ваш потолок.",
  "links": [
   {
    "t": "BLS Occupational Outlook: Data Scientists",
    "u": "https://www.bls.gov/ooh/math/data-scientists.htm"
   }
  ]
 },
 "dan-k4": {
  "what": "Re-check this list every three months against new jobs. Open fresh jobs for your role. Count the named tools again. Update your plan to match what changed.",
  "whatRu": "Раз в три месяца сверяйте этот список со свежими вакансиями. Откройте новые вакансии для своей роли. Снова посчитайте названные программы. Поправьте план под изменения.",
  "how": [
   "Set a date three months from now",
   "Open a fresh set of jobs for your role — AI can help sort them",
   "Count again: SQL, your BI tool, Python, dbt, your warehouse and any named AI tool",
   "Compare the new counts with the counts on this page",
   "Update your next learning step to match what changed"
  ],
  "howRu": [
   "Поставьте дату через три месяца",
   "Откройте свежие вакансии для своей роли — разобрать их поможет AI",
   "Посчитайте снова: SQL, ваша программа BI, Python, dbt, ваше хранилище и любые названные AI-инструменты",
   "Сравните новые цифры с цифрами на этой странице",
   "Поправьте следующий шаг учёбы под изменения"
  ],
  "why": "In data jobs, AI tools went from not named to 2 of 24 in one round of checking. What employers ask for now changes that fast. A check every three months keeps you current.",
  "whyRu": "В вакансиях по данным AI-инструментов не было, а за одну проверку стало 2 из 24. Требования работодателей меняются так быстро. Проверка раз в три месяца держит вас в курсе.",
  "links": [
   {
    "t": "BLS Occupational Outlook: Data Scientists",
    "u": "https://www.bls.gov/ooh/math/data-scientists.htm"
   }
  ]
 }
});
