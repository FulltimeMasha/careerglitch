/* Step detail content for the PathCheck dashboard (stepdetail.js).
   Format: STEP_DETAILS[stepId] = {what, whatRu, how[], howRu[], why, whyRu,
   links: [{t, u}]} — EN + RU twins; links verified at build time.
   Written from the pilot packages (hr-checklist + sample-full-report). */
var STEP_DETAILS = (typeof STEP_DETAILS !== "undefined" && STEP_DETAILS) || {};
Object.assign(STEP_DETAILS, {
 "ban-g1": {
  "what": "Learn Excel past the basics. Work on pivot tables, lookups and macros. A pivot table sums up a big table in one view. A macro is a small recorded automation — you record steps once and Excel repeats them.",
  "whatRu": "Выучите Excel глубже базового. Работайте со сводными таблицами, поисками по таблицам и макросами. Сводная таблица сводит большую таблицу в один вид. Макрос — это маленькая записанная автоматизация: вы записываете шаги один раз, и Excel повторяет их.",
  "how": [
   "Take one real table from your work and build a pivot table from it",
   "Use a lookup to pull a value from another table into your sheet",
   "Record one short macro for a task you repeat in Excel",
   "Save the file so you can show the pivot, the lookup and the macro"
  ],
  "howRu": [
   "Возьмите одну настоящую таблицу из своей работы и постройте из неё сводную таблицу",
   "Используйте поиск по таблице, чтобы подтянуть значение из другой таблицы в ваш лист",
   "Запишите один короткий макрос для задачи, которую вы повторяете в Excel",
   "Сохраните файл, чтобы можно было показать сводную таблицу, поиск и макрос"
  ],
  "why": "Excel is in 7 of 7 junior business-analyst job posts. Every junior job uses it.",
  "whyRu": "Excel есть в 7 из 7 вакансий junior business analyst. Он нужен на любой работе для новичков.",
  "links": [
   {
    "t": "Microsoft Support — Create a PivotTable to analyze worksheet data",
    "u": "https://support.microsoft.com/en-us/office/create-a-pivottable-to-analyze-worksheet-data-a9a84538-bfe9-40a9-a8e9-f99134456576?wt.mc_id=otc_excel"
   }
  ]
 },
 "ban-g2": {
  "what": "Learn SQL well enough to use it at work. SQL is the language for asking a database for data. Then you can check data yourself. You won’t wait for someone else’s report.",
  "whatRu": "Выучите SQL так, чтобы пользоваться им в работе. SQL — язык, на котором просят данные у базы данных. Тогда вы проверите данные сами. Не придётся ждать чужой отчёт.",
  "how": [
   "Learn the SELECT query — the query that reads data from a table",
   "Practise filtering and sorting the results you get back",
   "Practise joining two tables together in one query",
   "Answer a real work question with a query and save the result"
  ],
  "howRu": [
   "Выучите запрос SELECT — он читает данные из таблицы",
   "Потренируйтесь фильтровать и сортировать результаты",
   "Попрактикуйтесь соединять две таблицы в одном запросе",
   "Ответьте запросом на настоящий вопрос по работе и сохраните результат"
  ],
  "why": "SQL is in 19 of 22 business job posts.",
  "whyRu": "SQL нужен в 19 из 22 бизнес-вакансий.",
  "links": [
   {
    "t": "Microsoft Learn — Query and modify data with Transact-SQL",
    "u": "https://learn.microsoft.com/en-us/training/paths/get-started-querying-with-transact-sql/"
   }
  ]
 },
 "ban-g3": {
  "what": "Pick your job on purpose. One title hides two jobs: the document job and the decision job. Write down which one your skills fit today.",
  "whatRu": "Выберите свою работу осознанно. Под одним названием — две работы: с документами и с решениями. Запишите, к какой подходят ваши навыки сейчас.",
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
   "Сохраните страницу — по ней вы потом сверите оплату и будете подаваться"
  ],
  "why": "Under one title, these two jobs pay $51K to $194K.",
  "whyRu": "Под одним названием эти две работы платят от $51K до $194K.",
  "links": [
   {
    "t": "BLS Occupational Outlook Handbook — Management Analysts",
    "u": "https://www.bls.gov/ooh/business-and-financial/management-analysts.htm"
   }
  ]
 },
 "ban-g4": {
  "what": "Use AI tools yourself, in your document work. The tools are Copilot, ChatGPT and Claude. Try them on real documents you already write. Check every draft yourself.",
  "whatRu": "Пользуйтесь AI-инструментами сами, в работе с документами. Это Copilot, ChatGPT и Claude. Пробуйте их на настоящих документах, которые вы уже пишете. Каждый черновик проверяйте сами.",
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
  "why": "4 of 22 business job posts name an AI tool. One employer, SanDisk, requires it.",
  "whyRu": "4 из 22 бизнес-вакансий называют AI-инструмент. Один работодатель, SanDisk, его требует.",
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
  "why": "Process improvement shows up as its own job: business process reengineering.",
  "whyRu": "Улучшение процессов — это отдельная работа в вакансиях: business process reengineering.",
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
  "whatRu": "Автоматизируйте одну повторяющуюся задачу с помощью AI. Выберите документ или отчёт о статусе, который делаете часто. Настройте так, чтобы черновик готовился сам. Ваша работа — проверить его.",
  "how": [
   "Pick one document or status report that repeats",
   "Write the steps you follow each time, in order",
   "Set it up so the draft is made for you",
   "Check the draft, fix what is wrong, and save the finished version"
  ],
  "howRu": [
   "Выберите один документ или отчёт о статусе, который повторяется",
   "Запишите шаги, которые вы делаете каждый раз, по порядку",
   "Настройте всё так, чтобы черновик делался за вас",
   "Проверьте черновик, исправьте неверное и сохраните готовую версию"
  ],
  "why": "One job post names this part of the job word for word: “AI, Automation & Process Innovation.”",
  "whyRu": "Одна вакансия так и называет этот раздел: «AI, Automation & Process Innovation».",
  "links": [
   {
    "t": "Atlassian — Jira Tutorials: Learn Agile With Jira",
    "u": "https://www.atlassian.com/agile/tutorials"
   }
  ]
 },
 "ban-p3": {
  "what": "Write up one decision you pushed for, on one page. This page is called a brief. It makes your case. It has three parts: the decision, the number and the ask.",
  "whatRu": "Опишите на одной странице одно решение, которого вы добились. Такая страница называется бриф. Она доказывает вашу правоту. В ней три части: решение, цифра и просьба.",
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
  "why": "To move from document work to decision work, you need one decision you can show.",
  "whyRu": "Чтобы уйти из работы с документами в работу с решениями, нужно одно решение, которое можно показать.",
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
  "what": "Rebuild one regular report for stakeholders in a BI tool. A BI tool turns data into charts and dashboards — here, Power BI or Tableau. Stakeholders are people who make decisions using your work.",
  "whatRu": "Пересоберите один регулярный отчёт для стейкхолдеров в BI-инструменте. BI-инструмент превращает данные в графики и дашборды — здесь Power BI или Tableau. Стейкхолдеры — люди, которые принимают решения по вашей работе.",
  "how": [
   "Pick one stakeholder report you send again and again",
   "Pull the numbers for it yourself in the BI tool",
   "Build the same report there, with the same numbers",
   "Share the BI version instead of the old file"
  ],
  "howRu": [
   "Выберите один отчёт для стейкхолдеров, который вы отправляете снова и снова",
   "Достаньте цифры для него сами в BI-инструменте",
   "Постройте там тот же отчёт, с теми же цифрами",
   "Отправляйте BI-версию вместо старого файла"
  ],
  "why": "9 of 22 business job posts name or require a BI tool.",
  "whyRu": "9 из 22 бизнес-вакансий называют или требуют BI-инструмент.",
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
  "what": "Apply to decision jobs by their names. Search and apply for strategy & operations roles. Don’t stick only to plain “business analyst” jobs.",
  "whatRu": "Подавайтесь на работу с решениями по её названиям. Ищите роли strategy & operations и подавайтесь. Не ограничивайтесь обычными вакансиями «business analyst».",
  "how": [
   "Search job boards for the words strategy & operations",
   "Read the whole job post, not just the title",
   "Check if the main duty is decisions and work with stakeholders",
   "Apply with the decision brief you wrote earlier"
  ],
  "howRu": [
   "Ищите на сайтах вакансий слова strategy & operations",
   "Читайте вакансию целиком, а не только название",
   "Проверьте, что главное в работе — решения и общение со стейкхолдерами",
   "Подавайтесь с брифом решения, который вы уже написали"
  ],
  "why": "Plain “business analyst” jobs pay for documents. Strategy jobs pay for decisions.",
  "whyRu": "Обычные вакансии «business analyst» платят за документы. Вакансии strategy платят за решения.",
  "links": [
   {
    "t": "BLS Occupational Outlook Handbook — Management Analysts",
    "u": "https://www.bls.gov/ooh/business-and-financial/management-analysts.htm"
   }
  ]
 },
 "ban-k2": {
  "what": "In interviews, start with a decision you changed. Don’t start with a dashboard you built. Tell the decision first, then show the work behind it.",
  "whatRu": "На собеседовании начинайте с решения, которое вы изменили. Не начинайте с дашборда, который построили. Сначала решение, потом работа за ним.",
  "how": [
   "Prepare your one decision as a short spoken story",
   "Say the decision first, in one line",
   "Then say the number and what you did",
   "Practise saying it out loud before the interview"
  ],
  "howRu": [
   "Подготовьте своё решение как короткий рассказ вслух",
   "Сначала скажите решение, одной фразой",
   "Затем скажите цифру и что вы сделали",
   "Потренируйтесь говорить это вслух перед собеседованием"
  ],
  "why": "In all 7 strategy & operations job posts, the main duty is work with stakeholders.",
  "whyRu": "Во всех 7 вакансиях strategy & operations главная обязанность — работа со стейкхолдерами.",
  "links": [
   {
    "t": "PMI — Professional in Business Analysis (PMI-PBA) Certification",
    "u": "https://www.pmi.org/certifications/business-analysis-pba"
   }
  ]
 },
 "ban-k3": {
  "what": "Some job posts ask for years in consulting or banking. If you don’t have them, use proof from your own job. Bring one decision you changed, with numbers. Defend it like a case study.",
  "whatRu": "Некоторые вакансии просят годы в консалтинге или банке. Если их нет, покажите доказательство из своей работы. Принесите одно решение, которое вы изменили, с цифрами. Защищайте его как кейс.",
  "how": [
   "Take your one-page decision brief",
   "Learn its numbers so you can say them by heart",
   "Prepare answers for hard questions about the decision",
   "In the interview, present it and defend it step by step"
  ],
  "howRu": [
   "Возьмите свой бриф решения на одну страницу",
   "Выучите его цифры, чтобы называть их наизусть",
   "Подготовьте ответы на трудные вопросы о решении",
   "На собеседовании расскажите о нём и защищайте шаг за шагом"
  ],
  "why": "Google asks 4 years of consulting or strategy, plus 2 years of SQL.",
  "whyRu": "Google просит 4 года консалтинга или стратегии плюс 2 года SQL.",
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
  "why": "Document jobs pay $51K–$95K. Strategy & operations pays $96K–$177K. The one exception, a job that owns systems, pays $129,840–$194,760.",
  "whyRu": "Работа с документами платит $51K–$95K. Strategy & operations — $96K–$177K. Одно исключение, работа, которая отвечает за системы, — $129,840–$194,760.",
  "links": [
   {
    "t": "BLS Occupational Outlook Handbook — Management Analysts",
    "u": "https://www.bls.gov/ooh/business-and-financial/management-analysts.htm"
   }
  ]
 },
 "ban-k5": {
  "what": "Redo this checklist every quarter, with new job posts. A quarter is three months. Read new job posts for your job. Check what they ask for now.",
  "whatRu": "Проходите этот чек-лист заново каждый квартал по свежим вакансиям. Квартал — это три месяца. Читайте новые вакансии на вашу работу. Смотрите, что в них требуют сейчас.",
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
  "why": "In a short time, AI tools went from not mentioned to named in 4 of 22 business job posts.",
  "whyRu": "За короткое время AI-инструменты прошли путь от «нигде» до 4 из 22 бизнес-вакансий.",
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
  "what": "First, pick your role on paper. A role here is the kind of job you choose inside this title. Write it down before you make anything: a real face with an AI crew, or AI video sold to brands.",
  "whatRu": "Сначала выберите свою роль на бумаге. Роль — это вид работы внутри этого названия. Запишите её до того, как что-то делать: живой человек в кадре с AI-командой или AI-видео на продажу брендам.",
  "how": [
   "On paper, write the two roles that pay: a real face with an AI crew, and AI video sold to brands",
   "Next to them, write the three NO roles: the persona, the mass channel and the solo AI streamer",
   "Pick one paying role and write why it fits you",
   "Check every later step against that role only"
  ],
  "howRu": [
   "Запишите на бумаге две роли, которые платят: живой человек с AI-командой и AI-видео для брендов",
   "Рядом запишите три роли NO: персона, массовый канал и AI-стример в одиночку",
   "Выберите одну роль, которая платит, и напишите, почему она вам подходит",
   "Сверяйте каждый следующий шаг только с этой ролью"
  ],
  "why": "Two roles pay: a real face with an AI crew, and AI video sold to brands. The persona, the mass channel and the solo AI streamer are NO.",
  "whyRu": "Платят две роли: живой человек с AI-командой и AI-видео для брендов. Персона, массовый канал и AI-стример в одиночку — NO.",
  "links": [
   {
    "t": "YouTube channel monetization policies — YouTube Help",
    "u": "https://support.google.com/youtube/answer/1311392"
   }
  ]
 },
 "aic-g2": {
  "what": "Learn the label rules before your first post. A label tells viewers the content is made by AI. Each platform has its own label. Realistic AI without a label gets punished everywhere.",
  "whatRu": "Выучите правила пометок до первой публикации. Пометка говорит зрителям, что это сделал AI. У каждой платформы своя пометка. За реалистичный AI без пометки наказывают везде.",
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
  "why": "Every platform punishes one mistake: realistic AI with no label.",
  "whyRu": "Все платформы наказывают за одну ошибку: реалистичный AI без пометки.",
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
  "what": "Learn the FTC rule by heart. The FTC is the US agency for fair trade. The rule is simple: your AI can present, show and entertain. It can’t give a testimonial — praise for a product — as if it lived through it.",
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
   "Фейковый AI-отзыв — это запрещённый фейковый отзыв, а не мелкая хитрость"
  ],
  "why": "A fake AI review is a banned fake review. There are fines for each one.",
  "whyRu": "Фейковый AI-отзыв — это запрещённый фейковый отзыв. За каждый — штраф.",
  "links": []
 },
 "aic-g4": {
  "what": "Set up your tools once. Pick one tool that makes video, one editor and one voice tool. Then stop. Tools are not the skill — your judgment is.",
  "whatRu": "Соберите инструменты один раз. Выберите один инструмент, который делает видео, один редактор и один для голоса. И остановитесь. Навык — не инструменты, а ваш вкус и решения.",
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
  "why": "All the tools cost about $29–60 a month in total. The tools are not the skill.",
  "whyRu": "Все инструменты вместе — около $29–60 в месяц. Навык — не в инструментах.",
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
   "Сохраните список минут — это первая строка вашего прайса"
  ],
  "why": "Your speed is the first line of your price list.",
  "whyRu": "Ваша скорость — первая строка вашего прайса.",
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
  "why": "The tools cover 175 languages and dialects. One face, two markets.",
  "whyRu": "Инструменты знают 175 языков и диалектов. Одно лицо — два рынка.",
  "links": [
   {
    "t": "Pricing plans (175 languages and dialects) — HeyGen",
    "u": "https://www.heygen.com/pricing"
   }
  ]
 },
 "aic-p3": {
  "what": "Make a one-page price list. Base it on two real numbers. First: what a brand pays for a video by a human. Second: what a raw AI clip costs to make. Your price goes between them.",
  "whatRu": "Сделайте прайс на одну страницу. Опирайтесь на два настоящих числа. Первое: сколько бренд платит за видео с человеком. Второе: сколько стоит сделать сырой AI-клип. Ваша цена — между ними.",
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
   "Уложите весь прайс в одну страницу"
  ],
  "why": "A brand pays $154 for a video by a human. A raw AI clip costs about $1–11 to make.",
  "whyRu": "Бренд платит $154 за видео с человеком. Сырой AI-клип стоит около $1–11.",
  "links": [
   {
    "t": "Pricing plans — HeyGen",
    "u": "https://www.heygen.com/pricing"
   }
  ]
 },
 "aic-p4": {
  "what": "Get two paying clients, or two paid orders from brands. This niche has no license and no exam board. Paid work is the only proof that counts. So get two done.",
  "whatRu": "Найдите двух платящих клиентов или два оплаченных заказа от брендов. В этой нише нет лицензии и экзаменов. Оплаченная работа — единственное доказательство, которое считается. Сделайте два таких заказа.",
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
  "why": "In this niche, paid work is the only proof that counts. No license, no union, no exam board.",
  "whyRu": "В этой нише считается только оплаченная работа. Ни лицензии, ни профсоюза, ни экзаменов.",
  "links": []
 },
 "aic-p5": {
  "what": "Keep a label cheat sheet for each platform you post on. It’s one page: what needs a label there, and where. Update it before you post, not after a problem.",
  "whatRu": "Ведите шпаргалку по пометкам для каждой платформы, где публикуетесь. Это одна страница: что там надо помечать и где. Обновляйте её до публикации, а не после проблем.",
  "how": [
   "Make one page per platform you post on",
   "On it, write what needs a label on that platform, and where the label goes",
   "If your clients advertise in New York, add its rule: ads with an AI performer must say so",
   "Check the sheet before every client order"
  ],
  "howRu": [
   "Сделайте по одной странице на каждую платформу, где публикуетесь",
   "Напишите на ней, что на этой платформе надо помечать и где ставить пометку",
   "Если клиенты рекламируются в Нью-Йорке, добавьте правило: реклама с AI-актёром должна это указывать",
   "Проверяйте шпаргалку перед каждой сдачей заказа"
  ],
  "why": "Since June 2026, New York law says ads with an AI performer must say so. This matters if your clients advertise there.",
  "whyRu": "С июня 2026 закон Нью-Йорка требует: реклама с AI-актёром должна это указывать. Это важно, если ваши клиенты рекламируются там.",
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
  "whatRu": "Продавайте результат, а не инструмент. Предлагайте брендам тесты и результаты: много проверенных хуков по цене одного снятого видео. Хук — это начало видео, на котором зритель останавливается. Бренды не покупают «AI-контент» как таковой.",
  "how": [
   "Pitch tested hooks, not AI videos",
   "Show how many hooks the brand gets for the price of one filmed video",
   "Name what the brand gets: tests they can run",
   "Take the tool names out of your offer — the tool is not the product"
  ],
  "howRu": [
   "Предлагайте проверенные хуки, а не AI-видео",
   "Покажите, сколько хуков бренд получает по цене одного снятого видео",
   "Назовите, что получает бренд: тесты, которые можно запустить",
   "Уберите из предложения названия инструментов — продаёте не инструмент"
  ],
  "why": "Brands buy tests and results. They never buy “AI content”.",
  "whyRu": "Бренды покупают тесты и результат. «AI-контент» они не покупают никогда.",
  "links": []
 },
 "aic-k2": {
  "what": "Set prices by the market, never per clip. Sell only retainers and packages. A retainer is a fixed fee for ongoing work. If you only compete on price per clip, prices just keep falling.",
  "whatRu": "Ставьте цену по рынку, а не за клип. Продавайте только ретейнеры и пакеты. Ретейнер — это постоянная плата за постоянную работу. Если соревноваться только ценой за клип, цена всё падает и падает.",
  "how": [
   "Stop giving a price for a single clip",
   "Make packages a brand can buy as a set",
   "Offer a retainer for ongoing work",
   "Compare every price with the market, not with the cheapest per-clip offer"
  ],
  "howRu": [
   "Перестаньте называть цену за один клип",
   "Соберите пакеты, которые бренд может купить целиком",
   "Предложите ретейнер за постоянную работу",
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
  "whatRu": "Стройте то, что принадлежит вам. Это список клиентов, email-рассылка и аудитория, которая идёт за вами, а не за инструментом. Инструменты и пометки меняются. Расти будет только то, что ваше.",
  "how": [
   "Keep a client list with every client you have worked for",
   "Start an email list and point your audience at it",
   "In your posts, make people follow you as a person",
   "Add a little to what you own with every order"
  ],
  "howRu": [
   "Ведите список всех клиентов, для кого вы работали",
   "Начните email-рассылку и зовите туда свою аудиторию",
   "В постах делайте так, чтобы люди шли за вами как за человеком",
   "С каждым заказом понемногу растите то, что ваше"
  ],
  "why": "Tool prices and platform labels change every quarter. What you own is the only thing that grows.",
  "whyRu": "Цены инструментов и пометки платформ меняются каждый квартал. Расти будет только то, что ваше.",
  "links": []
 },
 "aic-k4": {
  "what": "Check again every quarter. Every 3 months, look again at tool prices, label rules and your income split. The split is how much money comes from clients and how much from platforms.",
  "whatRu": "Проверяйте всё каждый квартал. Раз в 3 месяца смотрите заново цены инструментов, правила пометок и откуда ваш доход: сколько денег от клиентов, а сколько от платформ.",
  "how": [
   "Write down the current tool prices again",
   "Read the label rules again on every platform you use",
   "Add up client money and platform money separately",
   "Date the check — this track’s rules are from 2026 and they will change"
  ],
  "howRu": [
   "Запишите заново текущие цены инструментов",
   "Перечитайте правила пометок на каждой платформе, которую вы используете",
   "Сложите деньги клиентов и деньги платформ отдельно",
   "Поставьте дату на проверке — правила здесь из 2026 года, и они изменятся"
  ],
  "why": "The rules on this track are from 2026, and they will change.",
  "whyRu": "Правила здесь из 2026 года, и они изменятся.",
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
