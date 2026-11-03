/* Step detail content for the PathCheck dashboard (stepdetail.js).
   Format: STEP_DETAILS[stepId] = {what, whatRu, how[], howRu[], why, whyRu,
   links: [{t, u}]} — EN + RU twins; links verified at build time.
   Written from the pilot packages (hr-checklist + sample-full-report). */
var STEP_DETAILS = (typeof STEP_DETAILS !== "undefined" && STEP_DETAILS) || {};
Object.assign(STEP_DETAILS, {
 "ban-g1": {
  "what": "Learn Excel beyond the basics: pivot tables, lookups and macros. A pivot table turns a big table into one short summary. A macro records your clicks once, then Excel repeats them for you. With ChatGPT or Claude as a tutor, this takes evenings, not a semester.",
  "whatRu": "Выучите Excel глубже базового: сводные таблицы, поиск по таблицам и макросы. Сводная таблица сжимает большую таблицу в короткую сводку. Макрос запоминает ваши действия, а потом Excel повторяет их сам. С ChatGPT или Claude в роли учителя это займёт вечера, а не семестр.",
  "how": [
   "Take one real table from your work and build a pivot table from it. Stuck? Ask ChatGPT or Claude to explain each click",
   "Use a lookup to pull a value from another table into your sheet",
   "Record one short macro for a task you repeat in Excel",
   "Save the file so you can show the pivot, the lookup and the macro"
  ],
  "howRu": [
   "Возьмите одну настоящую таблицу из своей работы и постройте из неё сводную таблицу. Застряли — попросите ChatGPT или Claude объяснить каждый шаг",
   "Подтяните значение из другой таблицы в свой лист с помощью поиска по таблице",
   "Запишите один короткий макрос для задачи, которую вы повторяете в Excel",
   "Сохраните файл, чтобы показать сводную таблицу, поиск и макрос"
  ],
  "why": "Excel is in 7 of 7 beginner business-analyst job posts. Without it you don't pass the first filter. Learn it fast with AI and you're already ahead.",
  "whyRu": "Excel есть в 7 из 7 вакансий для начинающих бизнес-аналитиков. Без него не пройти даже первый отбор. Выучите его быстро с AI — и вы уже впереди.",
  "links": [
   {
    "t": "Microsoft Support — Create a PivotTable to analyze worksheet data",
    "u": "https://support.microsoft.com/en-us/office/create-a-pivottable-to-analyze-worksheet-data-a9a84538-bfe9-40a9-a8e9-f99134456576?wt.mc_id=otc_excel"
   }
  ]
 },
 "ban-g2": {
  "what": "Learn SQL well enough to use it at work. SQL is the language for asking a database for data. Then you check data yourself and don't wait for someone else's report. AI can explain any query line by line, so you learn much faster than before.",
  "whatRu": "Выучите SQL так, чтобы пользоваться им в работе. SQL — язык, на котором просят данные у базы данных. Тогда вы проверите данные сами. Не придётся ждать чужой отчёт. AI объяснит любой запрос по строчкам — так учиться намного быстрее.",
  "how": [
   "Learn the SELECT query — the query that reads data from a table",
   "Practise filtering and sorting the results you get back",
   "Practise joining two tables together in one query. Ask an AI chat to check your query and explain mistakes",
   "Answer a real work question with a query and save the result"
  ],
  "howRu": [
   "Выучите запрос SELECT — он читает данные из таблицы",
   "Потренируйтесь фильтровать и сортировать результаты",
   "Попрактикуйтесь соединять две таблицы в одном запросе. Попросите AI проверить запрос и объяснить ошибки",
   "Ответьте запросом на настоящий вопрос по работе и сохраните результат"
  ],
  "why": "SQL is in 19 of 22 business job posts. With it you find answers yourself in minutes. That alone puts you ahead of most applicants.",
  "whyRu": "SQL нужен в 19 из 22 вакансий в бизнесе. С ним вы сами находите ответы за минуты. Уже это ставит вас впереди большинства кандидатов.",
  "links": [
   {
    "t": "Microsoft Learn — Query and modify data with Transact-SQL",
    "u": "https://learn.microsoft.com/en-us/training/paths/get-started-querying-with-transact-sql/"
   }
  ]
 },
 "ban-g3": {
  "what": "Choose your job on purpose. One title covers two jobs. In one you prepare documents. In the other you help bosses decide. AI already writes many documents. Write down which job fits your skills today.",
  "whatRu": "Выберите работу осознанно. Под одним названием — две разные работы. В одной вы готовите документы. В другой помогаете руководству принимать решения. Документы AI уже пишет во многом сам. Запишите, какая работа подходит вашим навыкам сейчас.",
  "how": [
   "Write the two job types on one page: documents and decisions",
   "List your current skills under the job they fit best",
   "Mark the job your skills fit today",
   "Keep the page — later you will check pay and apply from it"
  ],
  "howRu": [
   "Напишите на одной странице две работы: документы и решения",
   "Разнесите свои навыки под ту работу, которой они подходят",
   "Отметьте работу, к которой подходят ваши навыки сейчас",
   "Сохраните страницу — по ней вы потом сверите оплату и будете откликаться"
  ],
  "why": "Under one title, these two jobs pay $51K to $194K. AI is taking over the document part. Decisions stay with people — and they pay the most.",
  "whyRu": "Под одним названием эти две работы платят от $51K до $194K. Работу с документами всё больше забирает AI. Решения остаются за людьми — и за них платят больше всего.",
  "links": [
   {
    "t": "BLS Occupational Outlook Handbook — Management Analysts",
    "u": "https://www.bls.gov/ooh/business-and-financial/management-analysts.htm"
   }
  ]
 },
 "ban-g4": {
  "what": "Use AI tools in your own document work: Copilot, ChatGPT and Claude. Try them on real documents you already write. Always check every draft yourself.",
  "whatRu": "Пользуйтесь AI сами, когда пишете документы: Copilot, ChatGPT и Claude. Пробуйте на настоящих документах, которые вы уже пишете. Каждый черновик проверяйте сами.",
  "how": [
   "Pick one document you write again and again",
   "Draft it once with an AI tool, then edit the draft yourself",
   "Note what the tool got wrong and what you had to fix",
   "Save the before and after versions as proof of the work"
  ],
  "howRu": [
   "Выберите один документ, который вы пишете снова и снова",
   "Один раз напишите его черновик с AI, потом поправьте сами",
   "Запишите, где инструмент ошибся и что пришлось исправить",
   "Сохраните версии «до» и «после» — это доказательство работы"
  ],
  "why": "4 of 22 business job posts name an AI tool. One employer, SanDisk, requires it. AI now writes the analyst's first drafts. The analyst who checks and fixes them keeps the job.",
  "whyRu": "4 из 22 вакансий в бизнесе называют AI-инструмент. Один работодатель, SanDisk, его требует. Черновики аналитика теперь пишет AI. Работу сохраняет тот аналитик, кто умеет их проверять и править.",
  "links": [
   {
    "t": "Atlassian — Jira Tutorials: Learn Agile With Jira",
    "u": "https://www.atlassian.com/agile/tutorials"
   }
  ]
 },
 "ban-p1": {
  "what": "Take one process you are part of. Map it — draw its steps in order. Make it better. Write down the time before and after.",
  "whatRu": "Возьмите один рабочий процесс, в котором вы участвуете. Нарисуйте его шаги по порядку. Улучшите его. Запишите время до и после.",
  "how": [
   "Pick one process from your normal work",
   "Time how long it takes now and write the number down",
   "Draw the steps in order and mark the slow step",
   "Change that step, time the process again and write the new number"
  ],
  "howRu": [
   "Выберите один процесс из своей обычной работы",
   "Замерьте, сколько он занимает сейчас, и запишите цифру",
   "Нарисуйте шаги по порядку и отметьте медленный шаг",
   "Измените этот шаг, замерьте процесс снова и запишите новую цифру"
  ],
  "why": "Making work faster is a job of its own. Job posts call it business process reengineering. A before-and-after number proves you can do it. AI can map the steps with you in an hour.",
  "whyRu": "Ускорять работу — это отдельная профессия. В вакансиях она называется business process reengineering (перестройка рабочих процессов). Цифры «до» и «после» доказывают, что вы это умеете. AI поможет расписать шаги за час.",
  "links": [
   {
    "t": "PMI — Professional in Business Analysis (PMI-PBA) Certification",
    "u": "https://www.pmi.org/certifications/business-analysis-pba"
   },
   {
    "t": "Atlassian — Jira Tutorials: Learn Agile With Jira",
    "u": "https://www.atlassian.com/agile/tutorials"
   }
  ]
 },
 "ban-p2": {
  "what": "Automate one repeating task with an AI workflow. Pick a document or status report you make often. Set it up so the draft makes itself. Your job is to check it.",
  "whatRu": "Отдайте AI одну повторяющуюся задачу. Выберите документ или отчёт о ходе работ, который делаете часто. Настройте так, чтобы черновик готовился сам. Ваша работа — проверить его.",
  "how": [
   "Pick one document or status report that repeats",
   "Write the steps you follow each time, in order",
   "Set it up so the draft is made for you",
   "Check the draft, fix what is wrong, and save the finished version"
  ],
  "howRu": [
   "Выберите один документ или отчёт о ходе работ, который повторяется",
   "Запишите шаги, которые вы делаете каждый раз, по порядку",
   "Настройте всё так, чтобы черновик делался за вас",
   "Проверьте черновик, исправьте неверное и сохраните готовую версию"
  ],
  "why": "One job post names this part of the job word for word: “AI, Automation & Process Innovation.” AI will take this routine from analysts anyway. Be the analyst who runs it, not the one it replaces.",
  "whyRu": "Одна вакансия так и называет этот раздел: «AI, Automation & Process Innovation» (AI, автоматизация и новые процессы). Эту рутину у аналитиков AI всё равно заберёт. Будьте тем, кто им управляет, а не тем, кого он заменит.",
  "links": [
   {
    "t": "Atlassian — Jira Tutorials: Learn Agile With Jira",
    "u": "https://www.atlassian.com/agile/tutorials"
   }
  ]
 },
 "ban-p3": {
  "what": "Write up one decision you pushed for, on one page. The page makes your case. It has three parts: the decision, the number and the ask. We'll call it your decision page.",
  "whatRu": "Опишите на одной странице одно решение, которого вы добились. Эта страница доказывает, что вы были правы. В ней три части: решение, цифра и просьба. Дальше будем звать её «страница решения».",
  "how": [
   "Pick one decision your work helped to make",
   "Write the decision in one line — what was decided",
   "Add the number that supported it",
   "End with the ask — what you needed from others. Keep it to one page"
  ],
  "howRu": [
   "Выберите одно решение, которое ваша работа помогла принять",
   "Напишите решение одной строкой — что решили",
   "Добавьте цифру, на которой оно держалось",
   "В конце — просьба: что вам было нужно от других. Не больше одной страницы"
  ],
  "why": "To move from documents to decisions, you need one decision you can show. That move is where the pay jumps. And AI can't make that decision for you.",
  "whyRu": "Чтобы перейти от документов к решениям, нужно одно решение, которое можно показать. Именно на этом переходе растёт зарплата. И это решение AI за вас не примет.",
  "links": [
   {
    "t": "PMI — Professional in Business Analysis (PMI-PBA) Certification",
    "u": "https://www.pmi.org/certifications/business-analysis-pba"
   },
   {
    "t": "IIBA — ECBA Certification",
    "u": "https://www.iiba.org/business-analysis-certifications/ecba/"
   }
  ]
 },
 "ban-p4": {
  "what": "Rebuild one regular report in Power BI or Tableau. These tools turn data into charts that update themselves. Make it for the people who decide based on your work. Both tools now have AI helpers that build a first chart for you.",
  "whatRu": "Переделайте один регулярный отчёт в Power BI или Tableau. Эти программы превращают данные в графики, которые обновляются сами. Делайте отчёт для тех, кто принимает решения по вашей работе. В обеих программах уже есть AI-помощники для первого графика.",
  "how": [
   "Pick one report for decision-makers that you send again and again",
   "Pull the numbers for it yourself in Power BI or Tableau",
   "Build the same report there, with the same numbers",
   "Share the new version instead of the old file"
  ],
  "howRu": [
   "Выберите один отчёт для руководства, который вы отправляете снова и снова",
   "Достаньте цифры для него сами в Power BI или Tableau",
   "Постройте там тот же отчёт, с теми же цифрами",
   "Отправляйте новую версию вместо старого файла"
  ],
  "why": "9 of 22 business job posts name or require a BI tool like these. One live report shows your skill in seconds. It beats any course certificate.",
  "whyRu": "9 из 22 вакансий в бизнесе называют или требуют такую программу. Один живой отчёт показывает навык за секунды. Это сильнее любого сертификата курсов.",
  "links": [
   {
    "t": "Microsoft Learn — Training for Power BI",
    "u": "https://learn.microsoft.com/en-us/training/powerplatform/power-bi?WT.mc_id=powerbi_landingpage-docs-link"
   },
   {
    "t": "Tableau — Author Learning Path",
    "u": "https://www.tableau.com/learn/learning-paths/author"
   }
  ]
 },
 "ban-k1": {
  "what": "Apply to decision jobs by their real names. Search for strategy & operations roles. Don’t stick only to plain “business analyst” jobs.",
  "whatRu": "Откликайтесь на работу с решениями по её настоящему названию. Ищите вакансии strategy & operations (стратегия и операции). Не ограничивайтесь обычными вакансиями «бизнес-аналитик».",
  "how": [
   "Search job boards for the words strategy & operations",
   "Read the whole job post, not just the title",
   "Check if the main duty is decisions and work with decision-makers",
   "Apply with the decision page you wrote earlier"
  ],
  "howRu": [
   "Ищите на сайтах вакансий слова strategy & operations",
   "Читайте вакансию целиком, а не только название",
   "Проверьте, что главное в работе — решения и общение с руководством",
   "Откликайтесь со страницей решения, которую вы уже написали"
  ],
  "why": "Plain “business analyst” jobs pay for documents — the part AI does more of each year. Strategy jobs pay for decisions, and they pay more. The right search words are your shortest way up.",
  "whyRu": "Обычные вакансии «бизнес-аналитик» платят за документы — а их всё больше пишет AI. Вакансии по стратегии платят за решения, и платят больше. Верные слова в поиске — ваш самый короткий путь наверх.",
  "links": [
   {
    "t": "BLS Occupational Outlook Handbook — Management Analysts",
    "u": "https://www.bls.gov/ooh/business-and-financial/management-analysts.htm"
   }
  ]
 },
 "ban-k2": {
  "what": "In interviews, start with a decision you changed. Don’t start with a dashboard you built. Tell the decision first, then show the work behind it.",
  "whatRu": "На собеседовании начинайте с решения, которое вы изменили. Не начинайте с панели графиков, которую построили. Сначала решение, потом работа за ним.",
  "how": [
   "Prepare your one decision as a short spoken story",
   "Say the decision first, in one line",
   "Then say the number and what you did",
   "Practise saying it out loud before the interview. An AI chat can play the interviewer"
  ],
  "howRu": [
   "Подготовьте своё решение как короткий рассказ вслух",
   "Сначала скажите решение, одной фразой",
   "Затем скажите цифру и что вы сделали",
   "Потренируйтесь говорить это вслух перед собеседованием. AI может сыграть интервьюера"
  ],
  "why": "In all 7 strategy & operations job posts, the main duty is working with decision-makers. Lead with a decision and you sound like one of them.",
  "whyRu": "Во всех 7 вакансиях по стратегии главное — работа с руководством. Начнёте с решения — и сразу звучите как свой.",
  "links": [
   {
    "t": "PMI — Professional in Business Analysis (PMI-PBA) Certification",
    "u": "https://www.pmi.org/certifications/business-analysis-pba"
   }
  ]
 },
 "ban-k3": {
  "what": "Some job posts ask for years in consulting or banking. If you don’t have them, use proof from your own job. Bring one decision you changed, with numbers. Defend it like a case study.",
  "whatRu": "Некоторые вакансии просят годы в консалтинге или банке. Если их нет, покажите доказательство из своей работы. Принесите одно решение, которое вы изменили, с цифрами. Защищайте его, как на экзамене.",
  "how": [
   "Take your decision page",
   "Learn its numbers so you can say them by heart",
   "Prepare answers for hard questions. Ask an AI chat to fire tough questions at you",
   "In the interview, present it and defend it step by step"
  ],
  "howRu": [
   "Возьмите свою страницу решения",
   "Выучите её цифры, чтобы называть их наизусть",
   "Подготовьте ответы на трудные вопросы. Попросите AI задать вам самые неудобные",
   "На собеседовании расскажите о решении и защищайте его шаг за шагом"
  ],
  "why": "Google asks 4 years of consulting or strategy, plus 2 years of SQL. A strong decision with numbers can stand in for those years. That's your shortcut.",
  "whyRu": "Google просит 4 года консалтинга или стратегии плюс 2 года SQL. Сильное решение с цифрами может заменить эти годы. Это и есть ваш короткий путь.",
  "links": [
   {
    "t": "Microsoft Learn — Query and modify data with Transact-SQL",
    "u": "https://learn.microsoft.com/en-us/training/paths/get-started-querying-with-transact-sql/"
   },
   {
    "t": "IIBA — ECBA Certification",
    "u": "https://www.iiba.org/business-analysis-certifications/ecba/"
   }
  ]
 },
 "ban-k4": {
  "what": "Check your pay against real job posts. Compare any offer with the pay range for your job. If that range is low and flat, it's not your fault. The job pays that way — so look at a better-paid job.",
  "whatRu": "Сверяйте свою цену с настоящими вакансиями. Сравните любое предложение с тем, сколько платят на вашей работе. Если там платят мало и без роста, дело не в вас. Так платит сама работа — посмотрите на работу, где платят больше.",
  "how": [
   "Write down the pay range for your job from this step",
   "See where any offer falls in that range",
   "If the offer is in the document-job range, it's the job, not you",
   "Use the range when you talk about pay"
  ],
  "howRu": [
   "Запишите из этого шага, сколько платят на вашей работе",
   "Посмотрите, куда в эти рамки попадает любое предложение",
   "Если предложение на уровне работы с документами, дело в работе, а не в вас",
   "Опирайтесь на эти цифры, когда говорите об оплате"
  ],
  "why": "Document jobs pay $51K–$95K. Strategy & operations pays $96K–$177K. The one exception, a job that runs company systems, pays $129,840–$194,760. Know this and you won't settle for the low end.",
  "whyRu": "Работа с документами платит $51K–$95K. Работа по стратегии — $96K–$177K. Одно исключение — работа, которая отвечает за системы компании: $129,840–$194,760. Зная это, вы не согласитесь на нижнюю планку.",
  "links": [
   {
    "t": "BLS Occupational Outlook Handbook — Management Analysts",
    "u": "https://www.bls.gov/ooh/business-and-financial/management-analysts.htm"
   }
  ]
 },
 "ban-k5": {
  "what": "Redo this checklist every quarter, with new job posts. A quarter is three months. Read new job posts for your job. Check what they ask for now.",
  "whatRu": "Проходите этот список заново каждый квартал по свежим вакансиям. Квартал — это три месяца. Читайте новые вакансии на вашу работу. Смотрите, что в них требуют сейчас.",
  "how": [
   "Set a date three months from now",
   "On that date, read new job posts for your job",
   "Count how many name an AI tool",
   "Update your job page if the asks have changed"
  ],
  "howRu": [
   "Поставьте дату через три месяца",
   "В этот день прочитайте свежие вакансии на вашу работу",
   "Посчитайте, сколько из них называют AI-инструмент",
   "Обновите страницу своей работы, если требования поменялись"
  ],
  "why": "In a short time, AI tools went from not mentioned to named in 4 of 22 business job posts. AI is changing what analysts are hired for. A quick check keeps you learning only what pays.",
  "whyRu": "За короткое время AI-инструменты прошли путь от «нигде» до 4 из 22 вакансий в бизнесе. AI меняет то, за что берут аналитиков. Короткая проверка — и вы учите только то, за что платят.",
  "links": [
   {
    "t": "BLS Occupational Outlook Handbook — Management Analysts",
    "u": "https://www.bls.gov/ooh/business-and-financial/management-analysts.htm"
   }
  ]
 }
});
Object.assign(STEP_DETAILS, {
 "aic-g1": {
  "what": "First, pick your role on paper. A role is the kind of work you do under this title. Two kinds pay: you on camera with AI helpers, or AI videos made for brands. Write yours down before you make anything.",
  "whatRu": "Сначала выберите свою роль на бумаге. Роль — это вид работы под этим названием. Платят два вида: вы сами в кадре с AI-помощниками или AI-видео на заказ для брендов. Запишите свою роль до первого видео.",
  "how": [
   "On paper, write the two roles that pay: you on camera with AI helpers, and AI video made for brands",
   "Next to them, write the three NO roles: a made-up AI character, a mass channel and a solo AI streamer",
   "Pick one paying role and write why it fits you",
   "Check every later step against that role only"
  ],
  "howRu": [
   "Запишите на бумаге две роли, которые платят: вы в кадре с AI-помощниками и AI-видео для брендов",
   "Рядом запишите три роли NO: выдуманный AI-персонаж, массовый канал и AI-стример в одиночку",
   "Выберите одну роль, которая платит, и напишите, почему она вам подходит",
   "Сверяйте каждый следующий шаг только с этой ролью"
  ],
  "why": "Two roles pay: you on camera with AI helpers, and AI video made for brands. A made-up AI character, a mass channel and a solo AI streamer are NO. AI made video cheap for everyone. Only these two roles still earn — skip the rest and save months.",
  "whyRu": "Платят две роли: вы в кадре с AI-помощниками и AI-видео для брендов. Выдуманный персонаж, массовый канал и AI-стример в одиночку — NO. AI сделал видео дешёвым для всех. Зарабатывают только эти две роли — не тратьте месяцы на остальное.",
  "links": [
   {
    "t": "YouTube channel monetization policies — YouTube Help",
    "u": "https://support.google.com/youtube/answer/1311392"
   }
  ]
 },
 "aic-g2": {
  "what": "Learn the AI label rules before your first post. A label tells viewers a video was made with AI. Each platform has its own label. Realistic AI with no label gets punished everywhere.",
  "whatRu": "До первой публикации выучите правила пометок. Пометка говорит зрителю: это сделал AI. У каждой соцсети своя пометка. За реалистичный AI без пометки наказывают везде.",
  "how": [
   "On YouTube, learn the tool for marking realistic AI content before you upload",
   "On TikTok, know that TikTok labels AI content it finds by itself",
   "On Meta, learn the “AI info” label on Facebook, Instagram and Threads",
   "Write the three rules where you’ll see them before every post"
  ],
  "howRu": [
   "На YouTube до загрузки разберитесь, как отметить реалистичный AI-контент",
   "На TikTok знайте: TikTok сам помечает AI-контент, который нашёл",
   "На Meta узнайте про пометку «AI info» в Facebook, Instagram и Threads",
   "Запишите три правила там, где будете видеть их перед каждой публикацией"
  ],
  "why": "Every platform punishes one mistake: realistic AI with no label. Learn the rule first and your channel stays safe.",
  "whyRu": "Все соцсети наказывают за одну ошибку: реалистичный AI без пометки. Выучите правило заранее — и ваш канал в безопасности.",
  "links": [
   {
    "t": "Disclosing use of GenAI content — YouTube Help",
    "u": "https://support.google.com/youtube/answer/14328491"
   },
   {
    "t": "Our Approach to Labeling AI-Generated Content — Meta",
    "u": "https://about.fb.com/news/2024/04/metas-approach-to-labeling-ai-generated-content-and-manipulated-media/"
   }
  ]
 },
 "aic-g3": {
  "what": "Learn the FTC rule by heart. The FTC is the US agency for fair trade. The rule is simple: your AI can present, show and entertain. It can’t praise a product as if it used it.",
  "whatRu": "Выучите правило FTC наизусть. FTC — это ведомство США, которое следит за честной торговлей. Правило простое: ваш AI может представлять, показывать и развлекать. Но он не может хвалить товар, будто сам им пользовался.",
  "how": [
   "Write the rule down: present, show, entertain — yes; a review from lived experience — no",
   "Check every script against that rule before you make it",
   "Remove any line where the AI says it used, wore or felt something like a human",
   "A fake AI review is a banned fake review. It’s not a small shortcut"
  ],
  "howRu": [
   "Запишите правило: представлять, показывать, развлекать — да; отзыв «из личного опыта» — нет",
   "Сверяйте каждый сценарий с этим правилом до съёмки",
   "Убирайте каждую фразу, где AI говорит, что пользовался, носил или чувствовал что-то как человек",
   "Поддельный AI-отзыв — это запрещённый поддельный отзыв, а не мелкая хитрость"
  ],
  "why": "A fake AI review is a banned fake review. There are fines for each one. Brands pick creators who keep them out of trouble.",
  "whyRu": "Поддельный AI-отзыв — это запрещённый поддельный отзыв. За каждый — штраф. Бренды выбирают тех, кто не подставит их под штраф.",
  "links": []
 },
 "aic-g4": {
  "what": "Set up your tools once. Pick one tool that makes video, one editor and one voice tool. Then stop. Tools are not the skill — your judgment is.",
  "whatRu": "Соберите инструменты один раз. Выберите одну программу, которая делает видео, один редактор и одну программу для голоса. И остановитесь. Навык — не в программах, а в вашем вкусе и решениях.",
  "how": [
   "Choose one video-making tool and pay only for that one",
   "Choose one editor to finish every video in",
   "Choose one voice tool",
   "Add up the monthly cost, then stop shopping for tools"
  ],
  "howRu": [
   "Выберите один инструмент для создания видео и платите только за него",
   "Выберите один редактор, в котором доделываете каждое видео",
   "Выберите один инструмент для голоса",
   "Сложите, сколько это стоит в месяц, и перестаньте искать новые инструменты"
  ],
  "why": "All the tools cost about $29–60 a month in total. The tools are not the skill. Stop shopping and start making — that's the fastest way in.",
  "whyRu": "Все инструменты вместе — около $29–60 в месяц. Навык — не в инструментах. Хватит выбирать, начинайте делать — так быстрее всего.",
  "links": [
   {
    "t": "Pricing plans — HeyGen",
    "u": "https://www.heygen.com/pricing"
   }
  ]
 },
 "aic-p1": {
  "what": "Finish 10 videos using your process. Your process is your fixed way to make a video, from idea to done. Finish all 10. Write down how many minutes each one took. You've got this!",
  "whatRu": "Сделайте 10 готовых видео своим способом. Способ — это ваш постоянный порядок работы, от идеи до готового видео. Доделайте все 10. Запишите, сколько минут ушло на каждое. У вас получится!",
  "how": [
   "Make the first video from start to finish, using your process",
   "Write down the minutes it took next to it",
   "Repeat until you have 10 finished videos",
   "Keep the minutes list — it becomes the first line of your price list"
  ],
  "howRu": [
   "Сделайте первое видео от начала до конца своим способом",
   "Запишите рядом, сколько минут оно заняло",
   "Повторяйте, пока не будет 10 готовых видео",
   "Сохраните список минут — это первая строка вашего списка цен"
  ],
  "why": "Your speed is the first line of your price list. Faster videos mean more orders and more money.",
  "whyRu": "Ваша скорость — первая строка вашего списка цен. Чем быстрее вы делаете, тем больше заказов и денег.",
  "links": []
 },
 "aic-p2": {
  "what": "Dub yourself into a second language with the same process. Dubbing means the same video in another language. One face, two markets. You can sell the same work twice.",
  "whatRu": "Переозвучьте себя на второй язык тем же способом. Это то же видео, но на другом языке. Одно лицо — два рынка. Одну работу можно продать дважды.",
  "how": [
   "Take one finished video that already works",
   "Make it again with the same process, in a second language",
   "Check the dub is the same video, not a new one",
   "Sell both language versions as one order"
  ],
  "howRu": [
   "Возьмите одно готовое видео, которое уже работает",
   "Сделайте его тем же способом на втором языке",
   "Проверьте, что это то же видео, а не новое",
   "Продавайте обе языковые версии как один заказ"
  ],
  "why": "The tools cover 175 languages and dialects. One face, two markets. One piece of work, two paychecks.",
  "whyRu": "Инструменты знают 175 языков и диалектов. Одно лицо — два рынка. Одна работа — два заработка.",
  "links": [
   {
    "t": "Pricing plans (175 languages and dialects) — HeyGen",
    "u": "https://www.heygen.com/pricing"
   }
  ]
 },
 "aic-p3": {
  "what": "Make a one-page price list. Base it on two real numbers. First: what a brand pays for a video by a human. Second: what a raw AI clip costs to make. Your price goes between them.",
  "whatRu": "Сделайте список цен на одну страницу. Опирайтесь на два настоящих числа. Первое: сколько бренд платит за видео с человеком. Второе: сколько стоит сделать сырой AI-клип. Ваша цена — между ними.",
  "how": [
   "At the top, write the human-video price and the raw AI clip cost",
   "Under them, put your speed from your 10 finished videos",
   "Set your price in between, for your judgment, volume and speed",
   "Keep the whole price list to one page"
  ],
  "howRu": [
   "Вверху напишите цену видео с человеком и цену сырого AI-клипа",
   "Под ними — ваша скорость по 10 готовым видео",
   "Поставьте цену между ними: за ваш вкус, объём и скорость",
   "Уложите весь список цен в одну страницу"
  ],
  "why": "A brand pays $154 for a video by a human. A raw AI clip costs about $1–11 to make. Price in between: the brand saves, and you earn well.",
  "whyRu": "Бренд платит $154 за видео с человеком. Сырой AI-клип стоит около $1–11. Цена между ними — и бренду выгодно, и вы хорошо зарабатываете.",
  "links": [
   {
    "t": "Pricing plans — HeyGen",
    "u": "https://www.heygen.com/pricing"
   }
  ]
 },
 "aic-p4": {
  "what": "Get two paying clients, or two paid orders from brands. This niche has no license and no exam board. Paid work is the only proof that counts. So get two done.",
  "whatRu": "Найдите двух платящих клиентов или два оплаченных заказа от брендов. В этой работе нет лицензии и экзаменов. Оплаченная работа — единственное доказательство, которое считается. Сделайте два таких заказа.",
  "how": [
   "Show your 10 finished videos and your price list to a brand or agency",
   "Take the first paid order and finish it",
   "Take the second paid order and finish it",
   "Keep both as proof for the next client"
  ],
  "howRu": [
   "Покажите бренду или агентству 10 готовых видео и прайс",
   "Возьмите первый оплаченный заказ и доделайте его",
   "Возьмите второй оплаченный заказ и доделайте его",
   "Сохраните оба как доказательство для следующего клиента"
  ],
  "why": "In this niche, paid work is the only proof that counts. No license, no union, no exam board. So no years of school: two paid orders and you're in.",
  "whyRu": "Здесь считается только оплаченная работа. Ни лицензии, ни профсоюза, ни экзаменов. Значит, годы учёбы не нужны: два оплаченных заказа — и вы в деле.",
  "links": []
 },
 "aic-p5": {
  "what": "Keep a label cheat sheet for each platform you post on. It’s one page: what needs a label there, and where. Update it before you post, not after a problem.",
  "whatRu": "Ведите шпаргалку по пометкам для каждой соцсети, где публикуетесь. Это одна страница: что там надо помечать и где. Обновляйте её до публикации, а не после проблем.",
  "how": [
   "Make one page per platform you post on",
   "On it, write what needs a label on that platform, and where the label goes",
   "If your clients advertise in New York, add its rule: ads with an AI performer must say so",
   "Check the sheet before every client order"
  ],
  "howRu": [
   "Сделайте по одной странице на каждую соцсеть, где публикуетесь",
   "Напишите на ней, что в этой соцсети надо помечать и где ставить пометку",
   "Если клиенты рекламируются в Нью-Йорке, добавьте правило: реклама с AI-актёром должна это указывать",
   "Проверяйте шпаргалку перед каждой сдачей заказа"
  ],
  "why": "Since June 2026, New York law says ads with an AI performer must say so. This matters if your clients advertise there. Clients stay with a creator they can trust.",
  "whyRu": "С июня 2026 закон Нью-Йорка требует: реклама с AI-актёром должна это указывать. Это важно, если ваши клиенты рекламируются там. Клиенты остаются с тем, кому доверяют.",
  "links": [
   {
    "t": "Disclosing use of GenAI content — YouTube Help",
    "u": "https://support.google.com/youtube/answer/14328491"
   },
   {
    "t": "Our Approach to Labeling AI-Generated Content — Meta",
    "u": "https://about.fb.com/news/2024/04/metas-approach-to-labeling-ai-generated-content-and-manipulated-media/"
   }
  ]
 },
 "aic-k1": {
  "what": "Sell the result, not the tool. Offer brands tests and results: many tested hooks for the price of one filmed video. A hook is the opening that makes a viewer stop scrolling. Brands never buy “AI content” as such.",
  "whatRu": "Продавайте результат, а не инструмент. Предлагайте брендам проверки: много вариантов начала видео по цене одного снятого ролика. Начало — первые секунды, на которых зритель перестаёт листать. Бренды не покупают «AI-контент» как таковой.",
  "how": [
   "Pitch tested hooks, not AI videos",
   "Show how many hooks the brand gets for the price of one filmed video",
   "Name what the brand gets: tests they can run",
   "Take the tool names out of your offer — the tool is not the product"
  ],
  "howRu": [
   "Предлагайте проверенные начала видео, а не AI-видео",
   "Покажите, сколько вариантов начала бренд получает по цене одного снятого видео",
   "Назовите, что получает бренд: проверки, которые можно запустить",
   "Уберите из предложения названия инструментов — продаёте не инструмент"
  ],
  "why": "Brands buy tests and results. They never buy “AI content”. Sell results and you don't drown among cheap AI clips.",
  "whyRu": "Бренды покупают проверки и результат. «AI-контент» они не покупают никогда. Продаёте результат — и не тонете среди дешёвых AI-клипов.",
  "links": []
 },
 "aic-k2": {
  "what": "Set prices by the market, never per clip. Sell only retainers and packages. A retainer is a fixed fee for ongoing work. If you only compete on price per clip, prices just keep falling.",
  "whatRu": "Ставьте цену по рынку, а не за клип. Продавайте только пакеты и ежемесячную оплату. Ежемесячная оплата — постоянная сумма за постоянную работу. Если соревноваться только ценой за клип, цена всё падает и падает.",
  "how": [
   "Stop giving a price for a single clip",
   "Make packages a brand can buy as a set",
   "Offer a retainer for ongoing work",
   "Compare every price with the market, not with the cheapest per-clip offer"
  ],
  "howRu": [
   "Перестаньте называть цену за один клип",
   "Соберите пакеты, которые бренд может купить целиком",
   "Предложите ежемесячную оплату за постоянную работу",
   "Сравнивайте каждую цену с рынком, а не с самым дешёвым предложением за клип"
  ],
  "why": "Job sites with cheap overseas workers list this job at $4 an hour. The price per video drops as low as $1. So sell packages, not single clips.",
  "whyRu": "На сайтах с дешёвыми исполнителями из других стран эту работу ставят за $4 в час. Цена за видео падает до $1. Поэтому продавайте пакеты, а не отдельные клипы.",
  "links": [
   {
    "t": "Pricing plans — HeyGen",
    "u": "https://www.heygen.com/pricing"
   }
  ]
 },
 "aic-k3": {
  "what": "Build what you own. That’s a client list, an email list, and fans who follow you, not the tool. Tools and labels change. What you own is the only thing that grows.",
  "whatRu": "Стройте то, что принадлежит вам. Это список клиентов, рассылка писем и люди, которые идут за вами, а не за инструментом. Инструменты и пометки меняются. Расти будет только то, что ваше.",
  "how": [
   "Keep a client list with every client you have worked for",
   "Start an email list and point your audience at it",
   "In your posts, make people follow you as a person",
   "Add a little to what you own with every order"
  ],
  "howRu": [
   "Ведите список всех клиентов, для кого вы работали",
   "Начните рассылку писем и зовите туда своих зрителей",
   "В постах делайте так, чтобы люди шли за вами как за человеком",
   "С каждым заказом понемногу растите то, что ваше"
  ],
  "why": "Tool prices and platform labels change every quarter. What you own is the only thing that grows. AI tools come and go; your clients stay.",
  "whyRu": "Цены инструментов и пометки соцсетей меняются каждый квартал. Расти будет только то, что ваше. AI-программы приходят и уходят, а клиенты остаются.",
  "links": []
 },
 "aic-k4": {
  "what": "Check again every quarter. Every 3 months, look again at tool prices, label rules and your income split. The split is how much money comes from clients and how much from platforms.",
  "whatRu": "Проверяйте всё каждый квартал. Раз в 3 месяца смотрите заново цены инструментов, правила пометок и откуда ваш доход: сколько денег от клиентов, а сколько от соцсетей.",
  "how": [
   "Write down the current tool prices again",
   "Read the label rules again on every platform you use",
   "Add up client money and platform money separately",
   "Date the check — this track’s rules are from 2026 and they will change"
  ],
  "howRu": [
   "Запишите заново текущие цены инструментов",
   "Перечитайте правила пометок в каждой соцсети, где вы публикуетесь",
   "Сложите деньги клиентов и деньги соцсетей отдельно",
   "Поставьте дату на проверке — правила здесь из 2026 года, и они изменятся"
  ],
  "why": "The rules on this track are from 2026, and they will change. AI video tools change fastest of all. A short check keeps you ahead of people who stopped looking.",
  "whyRu": "Правила здесь из 2026 года, и они изменятся. AI-программы для видео меняются быстрее всего. Короткая проверка — и вы впереди тех, кто перестал следить.",
  "links": [
   {
    "t": "Disclosing use of GenAI content — YouTube Help",
    "u": "https://support.google.com/youtube/answer/14328491"
   },
   {
    "t": "YouTube channel monetization policies — YouTube Help",
    "u": "https://support.google.com/youtube/answer/1311392"
   }
  ]
 }
});
