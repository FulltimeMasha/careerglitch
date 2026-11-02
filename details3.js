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
  "why": "Excel is named in 7 of 7 junior business-analyst postings — it is the junior seat’s tool.",
  "whyRu": "Excel назван в 7 из 7 вакансий junior business analyst — это инструмент места junior.",
  "links": [
   {
    "t": "Microsoft Support — Create a PivotTable to analyze worksheet data",
    "u": "https://support.microsoft.com/en-us/office/create-a-pivottable-to-analyze-worksheet-data-a9a84538-bfe9-40a9-a8e9-f99134456576?wt.mc_id=otc_excel"
   }
  ]
 },
 "ban-g2": {
  "what": "Bring SQL to working knowledge. SQL is the language you use to ask a database for data. Working knowledge means you can check the data yourself, instead of waiting for someone else’s report.",
  "whatRu": "Доведите SQL до рабочего знания. SQL — это язык, на котором вы запрашиваете данные у базы данных. Рабочее знание значит: вы можете проверить данные сами, а не ждать чужой отчёт.",
  "how": [
   "Learn the SELECT query — the query that reads data from a table",
   "Practise filtering and sorting the results you get back",
   "Practise joining two tables together in one query",
   "Use a query on a real question from your work and save the result"
  ],
  "howRu": [
   "Выучите запрос SELECT — запрос, который читает данные из таблицы",
   "Попрактикуйтесь фильтровать и сортировать результаты, которые вы получаете",
   "Попрактикуйтесь соединять две таблицы в одном запросе",
   "Используйте запрос на настоящем вопросе из своей работы и сохраните результат"
  ],
  "why": "SQL is named in 19 of 22 business-side postings.",
  "whyRu": "SQL назван в 19 из 22 вакансий стороны бизнеса.",
  "links": [
   {
    "t": "Microsoft Learn — Query and modify data with Transact-SQL",
    "u": "https://learn.microsoft.com/en-us/training/paths/get-started-querying-with-transact-sql/"
   }
  ]
 },
 "ban-g3": {
  "what": "Pick your seat on purpose. Under one title there are two seats: the document seat and the decision seat. Write down which seat your skills point at today.",
  "whatRu": "Выберите своё место осознанно. Под одним названием есть два места: место документов и место решений. Запишите, на какое место указывают ваши навыки сегодня.",
  "how": [
   "Write the two seat names on one page: documents and decisions",
   "List your current skills under the seat they fit best",
   "Mark the seat your skills point at today",
   "Keep the page — you will price and apply from it later"
  ],
  "howRu": [
   "Напишите названия двух мест на одной странице: документы и решения",
   "Перечислите свои текущие навыки под местом, которому они подходят лучше",
   "Отметьте место, на которое ваши навыки указывают сегодня",
   "Сохраните страницу — позже вы будете оценивать себя и подаваться с неё"
  ],
  "why": "The two seats on this map post $51K to $194K under one title.",
  "whyRu": "Два места на этой карте публикуют от $51K до $194K под одним названием.",
  "links": [
   {
    "t": "BLS Occupational Outlook Handbook — Management Analysts",
    "u": "https://www.bls.gov/ooh/business-and-financial/management-analysts.htm"
   }
  ]
 },
 "ban-g4": {
  "what": "Use the AI tools hands-on, inside the document work. The tools are Copilot, ChatGPT and Claude. Use them on real documents you already write, and check every draft yourself.",
  "whatRu": "Используйте AI-инструменты руками, внутри работы с документами. Инструменты — Copilot, ChatGPT и Claude. Используйте их на настоящих документах, которые вы уже пишете, и проверяйте каждый черновик сами.",
  "how": [
   "Pick one document you write again and again",
   "Draft it once with an AI tool, then edit the draft yourself",
   "Note what the tool got wrong and what you had to fix",
   "Save the before and after versions as proof of the work"
  ],
  "howRu": [
   "Выберите один документ, который вы пишете снова и снова",
   "Один раз сделайте его черновик AI-инструментом, затем отредактируйте черновик сами",
   "Запишите, что инструмент сделал неверно и что вам пришлось исправить",
   "Сохраните версии до и после как доказательство работы"
  ],
  "why": "A named AI tool appears in 4 of 22 business-side postings, and one employer, SanDisk, makes it a requirement.",
  "whyRu": "Названный AI-инструмент есть в 4 из 22 вакансий стороны бизнеса, а один работодатель, SanDisk, делает его требованием.",
  "links": [
   {
    "t": "Atlassian — Jira Tutorials: Learn Agile With Jira",
    "u": "https://www.atlassian.com/agile/tutorials"
   }
  ]
 },
 "ban-p1": {
  "what": "Take one process you touch. Map it — draw its steps in order. Improve it. Write down the time before and the time after.",
  "whatRu": "Возьмите один процесс, которого вы касаетесь. Нанесите его на карту — нарисуйте его шаги по порядку. Улучшите его. Запишите время до и время после.",
  "how": [
   "Pick one process you touch in your normal work",
   "Time how long it takes now and write the number down",
   "Draw the steps in order and mark the slow step",
   "Change that step, time the process again and write the new number"
  ],
  "howRu": [
   "Выберите один процесс, которого вы касаетесь в обычной работе",
   "Замерьте, сколько он занимает сейчас, и запишите цифру",
   "Нарисуйте шаги по порядку и отметьте медленный шаг",
   "Измените этот шаг, замерьте процесс снова и запишите новую цифру"
  ],
  "why": "Process improvement is a named job in the scan — business process reengineering.",
  "whyRu": "Улучшение процессов — названная работа в скане: business process reengineering.",
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
  "what": "Automate one repetitive task with an AI workflow. Pick a recurring document or status report. Set it up so the draft makes itself, and your job on top is the check.",
  "whatRu": "Автоматизируйте одну повторяющуюся задачу процессом с AI. Выберите повторяющийся документ или отчёт о статусе. Настройте так, чтобы черновик делал себя сам, а ваша работа сверху — проверка.",
  "how": [
   "Pick one document or status report that repeats",
   "Write the steps you follow each time, in order",
   "Build the workflow so the draft is made for you",
   "Check the draft, fix what is wrong, and save the finished version"
  ],
  "howRu": [
   "Выберите один документ или отчёт о статусе, который повторяется",
   "Запишите шаги, которые вы делаете каждый раз, по порядку",
   "Постройте процесс так, чтобы черновик делался за вас",
   "Проверьте черновик, исправьте неверное и сохраните готовую версию"
  ],
  "why": "One posting names this job section in so many words: “AI, Automation & Process Innovation.”",
  "whyRu": "Одна вакансия называет этот раздел работы дословно: «AI, Automation & Process Innovation».",
  "links": [
   {
    "t": "Atlassian — Jira Tutorials: Learn Agile With Jira",
    "u": "https://www.atlassian.com/agile/tutorials"
   }
  ]
 },
 "ban-p3": {
  "what": "Write one decision you drove as a one-page brief. A brief is a short page that makes a case. It has three parts: the call, the number and the ask.",
  "whatRu": "Запишите одно решение, которое вы продвинули, как бриф на одну страницу. Бриф — это короткая страница, которая доказывает дело. В ней три части: призыв, цифра и запрос.",
  "how": [
   "Pick one decision your work helped to make",
   "Write the call in one line — what was decided",
   "Add the number that backed the call",
   "End with the ask — what you needed from others — and keep it to one page"
  ],
  "howRu": [
   "Выберите одно решение, которое ваша работа помогла принять",
   "Напишите призыв одной строкой — что было решено",
   "Добавьте цифру, которая поддержала призыв",
   "Закончите запросом — что вам было нужно от других — и уложитесь в одну страницу"
  ],
  "why": "The bridge out of the document seat is one decision you can point to.",
  "whyRu": "Мост из места документов — это одно решение, на которое вы можете указать.",
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
  "what": "Rebuild one recurring stakeholder report in a BI tool. A BI tool turns data into charts and dashboards — here, Power BI or Tableau. A stakeholder is a person whose decision your work feeds.",
  "whatRu": "Пересоберите один повторяющийся отчёт для стейкхолдеров в BI-инструменте. BI-инструмент превращает данные в графики и дашборды — здесь Power BI или Tableau. Стейкхолдер — человек, чьё решение питает ваша работа.",
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
  "why": "A BI tool is named or required in 9 of 22 business-side postings.",
  "whyRu": "BI-инструмент назван или требуется в 9 из 22 вакансий стороны бизнеса.",
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
  "what": "Apply to decision seats by name. Search and apply for strategy & operations roles. Do not stay only in the plain “business analyst” pool.",
  "whatRu": "Подавайтесь на места решений по именам. Ищите и подавайтесь на роли strategy & operations. Не оставайтесь только в обычном пуле «business analyst».",
  "how": [
   "Search job boards for the words strategy & operations",
   "Read the posting body, not just the title",
   "Check whether the core duty is decisions and stakeholder work",
   "Apply with your decision brief from the proof steps"
  ],
  "howRu": [
   "Ищите на сайтах вакансий слова strategy & operations",
   "Читайте тело вакансии, а не только название",
   "Проверьте, главная ли обязанность — решения и работа со стейкхолдерами",
   "Подавайтесь с вашим брифом решения из шагов доказательств"
  ],
  "why": "The plain “business analyst” pool pays for documents; the strategy postings pay for decisions.",
  "whyRu": "Обычный пул «business analyst» платит за документы; вакансии strategy платят за решения.",
  "links": [
   {
    "t": "BLS Occupational Outlook Handbook — Management Analysts",
    "u": "https://www.bls.gov/ooh/business-and-financial/management-analysts.htm"
   }
  ]
 },
 "ban-k2": {
  "what": "In interviews, lead with a decision you changed. Do not lead with a dashboard you built. Start from the decision, then show the work behind it.",
  "whatRu": "На собеседованиях ведите с решения, которое вы изменили. Не ведите с дашборда, который вы построили. Начинайте с решения, затем показывайте работу за ним.",
  "how": [
   "Prepare your one decision as a short spoken story",
   "Say the decision first, in one line",
   "Then say the number and what you did",
   "Practise saying it out loud before the interview"
  ],
  "howRu": [
   "Подготовьте ваше одно решение как короткий устный рассказ",
   "Сначала скажите решение, одной строкой",
   "Затем скажите цифру и что вы сделали",
   "Потренируйтесь говорить это вслух перед собеседованием"
  ],
  "why": "Stakeholder work is the stated core duty in all 7 strategy & operations postings.",
  "whyRu": "Работа со стейкхолдерами — заявленная главная обязанность во всех 7 вакансиях strategy & operations.",
  "links": [
   {
    "t": "PMI — Professional in Business Analysis (PMI-PBA) Certification",
    "u": "https://www.pmi.org/certifications/business-analysis-pba"
   }
  ]
 },
 "ban-k3": {
  "what": "Answer the pedigree screen with internal proof. The pedigree screen is when a posting asks for consulting or banking years. If you do not have them, bring one decision you changed, with the numbers, and defend it like a case.",
  "whatRu": "Отвечайте на экран родословной внутренним доказательством. Экран родословной — это когда вакансия просит годы консалтинга или банкинга. Если их нет, принесите одно решение, которое вы изменили, с цифрами, и защищайте его как кейс.",
  "how": [
   "Take your one-page decision brief",
   "Learn its numbers so you can say them without the page",
   "Prepare answers for hard questions about the decision",
   "In the interview, present it and defend it step by step"
  ],
  "howRu": [
   "Возьмите ваш бриф решения на одну страницу",
   "Выучите его цифры, чтобы говорить их без страницы",
   "Подготовьте ответы на трудные вопросы о решении",
   "На собеседовании представьте его и защищайте шаг за шагом"
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
  "what": "Price yourself from the scan. Compare any offer with the band for your seat. If your seat’s band is flat, the seat is the problem, not your negotiation.",
  "whatRu": "Оценивайте себя по скану. Сравнивайте любое предложение с вилкой вашего места. Если вилка вашего места плоская, место — проблема, а не ваши переговоры.",
  "how": [
   "Write down the band for your seat from this step",
   "Place any offer inside that band",
   "If the offer sits in the document band, name the seat as the problem",
   "Use the band when you talk about pay"
  ],
  "howRu": [
   "Запишите вилку вашего места из этого шага",
   "Поместите любое предложение внутрь этой вилки",
   "Если предложение сидит в вилке документов, назовите место проблемой",
   "Используйте вилку, когда говорите об оплате"
  ],
  "why": "Document seats post $51K–$95K; strategy & operations posts $96K–$177K; the one systems-owning exception posts $129,840–$194,760.",
  "whyRu": "Места документов публикуют $51K–$95K; strategy & operations публикует $96K–$177K; одно исключение, владеющее системами, публикует $129,840–$194,760.",
  "links": [
   {
    "t": "BLS Occupational Outlook Handbook — Management Analysts",
    "u": "https://www.bls.gov/ooh/business-and-financial/management-analysts.htm"
   }
  ]
 },
 "ban-k5": {
  "what": "Re-run this checklist every quarter, against fresh postings. A quarter is three months. Read new postings for your seat and check what the screen asks for now.",
  "whatRu": "Перепроверяйте этот чек-лист каждый квартал по свежим вакансиям. Квартал — это три месяца. Читайте новые вакансии вашего места и проверяйте, что экран просит сейчас.",
  "how": [
   "Set a date three months from now",
   "On that date, read fresh postings for your seat",
   "Count how many name an AI tool",
   "Update your seat page if the screen has moved"
  ],
  "howRu": [
   "Поставьте дату через три месяца от сегодня",
   "В эту дату прочитайте свежие вакансии вашего места",
   "Посчитайте, сколько из них называют AI-инструмент",
   "Обновите страницу вашего места, если экран сдвинулся"
  ],
  "why": "The AI-tool line on the business side moved from absent to named in 4 of 22 inside one scan window.",
  "whyRu": "Строка AI-инструментов на стороне бизнеса прошла от отсутствия до названной в 4 из 22 внутри одного окна скана.",
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
  "what": "Pick your seat on paper first. A seat is the kind of job you choose inside this title. Write down which seat you take before you make anything: a real face with an AI crew, or AI video sold to brands.",
  "whatRu": "Сначала выберите ваше место на бумаге. Место — это вид работы, который вы выбираете внутри этого названия. Запишите, какое место вы берёте, до того как что-то делать: настоящее лицо с AI-командой или AI-видео, проданное брендам.",
  "how": [
   "Write the two seats that pay on paper: a real face with an AI crew, and AI video sold to brands",
   "Write the three NO seats next to them: the persona, the mass channel and the solo AI streamer",
   "Pick one paying seat and write why it fits you",
   "Judge every later step against that seat only"
  ],
  "howRu": [
   "Запишите на бумаге два места, которые платят: настоящее лицо с AI-командой и AI-видео, проданное брендам",
   "Запишите рядом три места NO: персона, массовый канал и сольный AI-стример",
   "Выберите одно место, которое платит, и напишите, почему оно вам подходит",
   "Проверяйте каждый следующий шаг только против этого места"
  ],
  "why": "The seats that pay are a real face with an AI crew, and AI video sold to brands — the persona, the mass channel and the solo AI streamer are the NO seats.",
  "whyRu": "Места, которые платят, — это настоящее лицо с AI-командой и AI-видео, проданное брендам — персона, массовый канал и сольный AI-стример — места NO.",
  "links": [
   {
    "t": "YouTube channel monetization policies — YouTube Help",
    "u": "https://support.google.com/youtube/answer/1311392"
   }
  ]
 },
 "aic-g2": {
  "what": "Learn the label rules before the first post. A label is the mark that tells viewers the content is AI. Each platform has its own label, and realistic AI with no label is punished everywhere.",
  "whatRu": "Выучите правила пометок до первой публикации. Пометка — это знак, который говорит зрителям, что контент — AI. У каждой платформы своя пометка, и реалистичный AI без пометки наказывает каждая платформа.",
  "how": [
   "On YouTube, learn the disclosure tool for realistic AI content before you upload",
   "On TikTok, learn that TikTok labels detected AI content itself",
   "On Meta, learn the “AI info” mark used on Facebook, Instagram and Threads",
   "Write the three rules down where you can see them before every post"
  ],
  "howRu": [
   "На YouTube выучите инструмент раскрытия для реалистичного AI-контента до загрузки",
   "На TikTok выучите, что TikTok помечает найденный AI-контент сам",
   "На Meta выучите пометку «AI info» для Facebook, Instagram и Threads",
   "Запишите три правила туда, где вы видите их перед каждой публикацией"
  ],
  "why": "Realistic AI with no label is the one mistake every platform punishes.",
  "whyRu": "Реалистичный AI без пометки — единственная ошибка, которую наказывает каждая платформа.",
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
  "what": "Learn the FTC line by heart. The FTC is the US trade regulator. The line is simple: your AI can present, demonstrate and entertain. It cannot give a testimonial — a praise review — for a life it did not live.",
  "whatRu": "Выучите линию FTC наизусть. FTC — это торговый регулятор США. Линия простая: ваш AI может представлять, показывать и развлекать. Он не может давать отзыв — хвалебный рассказ — за жизнь, которую не прожил.",
  "how": [
   "Write the line down: present, demonstrate, entertain — yes; a lived testimonial — no",
   "Check every script against that line before it is made",
   "Remove any line where the AI claims it used, wore or felt something as a human would",
   "Treat a fake AI testimonial as a banned fake review, not as a small shortcut"
  ],
  "howRu": [
   "Запишите линию: представлять, показывать, развлекать — да; прожитый отзыв — нет",
   "Проверяйте каждый скрипт против этой линии до производства",
   "Убирайте любую строку, где AI говорит, что использовал, носил или чувствовал что-то как человек",
   "Считайте фейковый AI-отзыв запрещённым фейковым отзывом, а не маленькой хитростью"
  ],
  "why": "A fake AI testimonial is a banned fake review, with fines per violation.",
  "whyRu": "Фейковый AI-отзыв — это запрещённый фейковый отзыв, со штрафами за нарушение.",
  "links": []
 },
 "aic-g4": {
  "what": "Set up the toolbox once. Pick one generation tool, one editor and one voice tool, and stop there. The tools are not the skill — your judgment is.",
  "whatRu": "Соберите набор инструментов один раз. Выберите один инструмент генерации, один редактор и один голосовой инструмент — и остановитесь. Инструменты — не навык, навык — ваше суждение.",
  "how": [
   "Choose one generation tool and pay for that one only",
   "Choose one editor you will finish every piece in",
   "Choose one voice tool",
   "Add up the monthly cost, then stop shopping for tools"
  ],
  "howRu": [
   "Выберите один инструмент генерации и платите только за него",
   "Выберите один редактор, в котором вы заканчиваете каждую работу",
   "Выберите один голосовой инструмент",
   "Сложите месячную цену, потом перестаньте гоняться за инструментами"
  ],
  "why": "The full toolbox is about $29–60 a month in total — the tools are not the skill.",
  "whyRu": "Весь набор инструментов — около $29–60 в месяц в сумме — инструменты — не навык.",
  "links": [
   {
    "t": "Pricing plans — HeyGen",
    "u": "https://www.heygen.com/pricing"
   }
  ]
 },
 "aic-p1": {
  "what": "Ship 10 finished pieces with the pipeline. The pipeline is your fixed way of making a piece, from idea to finished video. Finish all 10, and write down how many minutes each one took.",
  "whatRu": "Отправьте 10 готовых работ вашим процессом. Процесс — это ваш постоянный способ делать работу, от идеи до готового видео. Закончите все 10 и запишите, сколько минут заняла каждая.",
  "how": [
   "Make the first piece all the way to finished, with your pipeline",
   "Write down the minutes it took, next to the piece",
   "Repeat until you have 10 finished pieces",
   "Keep the minutes list — it becomes the first line of your rate card"
  ],
  "howRu": [
   "Сделайте первую работу до конца вашим процессом",
   "Запишите минуты, которые она заняла, рядом с работой",
   "Повторяйте, пока не будет 10 готовых работ",
   "Сохраните список минут — он станет первой строкой вашей карточки цен"
  ],
  "why": "Your speed is the first line of your rate card.",
  "whyRu": "Ваша скорость — первая строка вашей карточки цен.",
  "links": []
 },
 "aic-p2": {
  "what": "Dub yourself into a second language with the same pipeline. Dub means the same video, spoken in another language. One face, two markets — the same work can now be sold twice.",
  "whatRu": "Продублируйте себя на второй язык тем же процессом. Дубль — значит, то же видео, сказанное на другом языке. Одно лицо, два рынка — ту же работу теперь можно продать дважды.",
  "how": [
   "Take one finished piece that already works",
   "Run it through the same pipeline in a second language",
   "Check the dub is the same piece, not a new video",
   "Offer both language versions as one deliverable"
  ],
  "howRu": [
   "Возьмите одну готовую работу, которая уже работает",
   "Пропустите её через тот же процесс на втором языке",
   "Проверьте, что дубль — та же работа, а не новое видео",
   "Предлагайте обе языковые версии как одну поставку"
  ],
  "why": "The tools cover 175 languages and dialects — one face, two markets.",
  "whyRu": "Инструменты покрывают 175 языков и диалектов — одно лицо, два рынка.",
  "links": [
   {
    "t": "Pricing plans (175 languages and dialects) — HeyGen",
    "u": "https://www.heygen.com/pricing"
   }
  ]
 },
 "aic-p3": {
  "what": "Build a one-page rate card. A rate card is the page that shows your prices. Price it against the two real numbers: what a brand pays for a human video, and what a raw AI clip costs to make. Your price lives in the gap between them.",
  "whatRu": "Соберите карточку цен на одну страницу. Карточка цен — это страница, которая показывает ваши цены. Оцените её против двух настоящих чисел: сколько бренд платит за видео человека и сколько стоит сделать сырой AI-клип. Ваша цена живёт в разрыве между ними.",
  "how": [
   "Write the human-video price and the raw AI clip cost at the top of the page",
   "Put your speed, from your 10 finished pieces, under them",
   "Price your offer in the gap: judgment, volume and speed",
   "Keep the whole card to one page"
  ],
  "howRu": [
   "Напишите цену видео человека и цену сырого AI-клипа вверху страницы",
   "Поставьте под ними вашу скорость из 10 готовых работ",
   "Оцените ваше предложение в разрыве: суждение, объём и скорость",
   "Держите всю карточку на одной странице"
  ],
  "why": "A brand pays $154 for a human video; a raw AI clip costs about $1–11 to make.",
  "whyRu": "Бренд платит $154 за видео человека; сырой AI-клип стоит около $1–11 в производстве.",
  "links": [
   {
    "t": "Pricing plans — HeyGen",
    "u": "https://www.heygen.com/pricing"
   }
  ]
 },
 "aic-p4": {
  "what": "Land two paying clients, or two paid brand deliveries. In this niche there is no license and no board to pass. Paid work is the only credential that exists, so get two of them done.",
  "whatRu": "Возьмите двух платящих клиентов или две оплаченные поставки брендам. В этой нише нет лицензии и нет board, который нужно пройти. Оплаченная работа — единственное удостоверение, которое существует, поэтому сделайте две.",
  "how": [
   "Show your 10 finished pieces and your rate card to a brand or agency",
   "Take the first paid delivery and finish it",
   "Take the second paid delivery and finish it",
   "Keep both as the proof you show the next client"
  ],
  "howRu": [
   "Покажите ваши 10 готовых работ и карточку цен бренду или агентству",
   "Возьмите первую оплаченную поставку и закончите её",
   "Возьмите вторую оплаченную поставку и закончите её",
   "Сохраните обе как доказательство для следующего клиента"
  ],
  "why": "In this niche, paid work is the only credential that exists — there is no license, no union, no board.",
  "whyRu": "В этой нише оплаченная работа — единственное удостоверение, которое существует — лицензии нет, профсоюза нет, board нет.",
  "links": []
 },
 "aic-p5": {
  "what": "Keep a disclosure habit sheet for every platform you post on. A habit sheet is one page that says what gets labeled, and where, on that platform. Update it before you post, not after a problem.",
  "whatRu": "Держите лист привычек раскрытия для каждой платформы, где публикуете. Лист привычек — это одна страница, где сказано, что помечается и где на этой платформе. Обновляйте его до публикации, а не после проблемы.",
  "how": [
   "Make one page per platform you post on",
   "Write on it what gets labeled on that platform, and where the label goes",
   "Add the New York rule if your clients advertise there: ads with an AI performer need a disclosure",
   "Check the sheet before every client delivery"
  ],
  "howRu": [
   "Сделайте одну страницу на каждую платформу, где публикуете",
   "Напишите на ней, что помечается на этой платформе и где ставится пометка",
   "Добавьте правило Нью-Йорка, если ваши клиенты рекламируются там: рекламе с AI-исполнителем нужна пометка",
   "Проверяйте лист перед каждой поставкой клиенту"
  ],
  "why": "If your clients advertise in New York, their ads with an AI performer need a disclosure by law since June 2026.",
  "whyRu": "Если ваши клиенты рекламируются в Нью-Йорке, их рекламе с AI-исполнителем нужна пометка по закону с июня 2026.",
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
  "what": "Sell the gap, not the tool. Offer brands tests and outcomes: many tested hooks for the price of one filmed video. A hook is the opening that makes a viewer stop. Brands never buy “AI content” as a thing.",
  "whatRu": "Продавайте разрыв, а не инструмент. Предлагайте брендам тесты и результаты: много проверенных хуков по цене одного снятого видео. Хук — это начало, которое заставляет зрителя остановиться. Бренды никогда не покупают «AI-контент» как вещь.",
  "how": [
   "Write the offer as tested hooks, not as AI videos",
   "Show how many hooks the brand gets for the price of one filmed video",
   "Name the outcome the brand is buying: tests they can run",
   "Remove the tool names from the offer — the tool is not the product"
  ],
  "howRu": [
   "Напишите предложение как проверенные хуки, а не как AI-видео",
   "Покажите, сколько хуков бренд получает по цене одного снятого видео",
   "Назовите результат, который покупает бренд: тесты, которые можно запустить",
   "Уберите названия инструментов из предложения — инструмент не продукт"
  ],
  "why": "Brands buy tests and outcomes — they never buy “AI content”.",
  "whyRu": "Бренды покупают тесты и результаты — они никогда не покупают «AI-контент».",
  "links": []
 },
 "aic-k2": {
  "what": "Price from the market, never per clip. Sell retainers and deliverable packages only. A retainer is a fixed fee for ongoing work. A per-clip price race ends at the bottom.",
  "whatRu": "Ставьте цену от рынка, никогда не за клип. Продавайте только ретейнеры и пакеты работ. Ретейнер — это постоянная плата за постоянную работу. Гонка цены за клип заканчивается на дне.",
  "how": [
   "Stop quoting a price for one clip on its own",
   "Build packages of deliverables a brand can buy as a set",
   "Offer a retainer for ongoing work",
   "Compare every price with the market, not with the cheapest per-clip offer"
  ],
  "howRu": [
   "Перестаньте называть цену за один клип сам по себе",
   "Соберите пакеты работ, которые бренд может купить как набор",
   "Предложите ретейнер за постоянную работу",
   "Сравнивайте каждую цену с рынком, а не с самым дешёвым предложением за клип"
  ],
  "why": "The offshore board lists this title at $4 an hour — the per-video price race ends at $1.",
  "whyRu": "Офшорная доска публикует это название за $4 в час — гонка цены за видео заканчивается на $1.",
  "links": [
   {
    "t": "Pricing plans — HeyGen",
    "u": "https://www.heygen.com/pricing"
   }
  ]
 },
 "aic-k3": {
  "what": "Build the layer you own. That is a client list, an email list, and an audience that follows the person, not the tool. Tools and labels change. The owned layer is the only asset that grows.",
  "whatRu": "Стройте слой, которым владеете. Это список клиентов, список email и аудитория, которая следует за человеком, а не за инструментом. Инструменты и пометки меняются. Слой владения — единственный актив, который растёт.",
  "how": [
   "Keep a client list with every client you have worked for",
   "Start an email list and point your audience at it",
   "Make the audience follow you, the person, in your posts",
   "Grow the owned layer a little with every delivery"
  ],
  "howRu": [
   "Ведите список клиентов со всеми, для кого вы работали",
   "Начните список email и направляйте на него вашу аудиторию",
   "Делайте так, чтобы аудитория следовала за вами, человеком, в ваших постах",
   "Растите слой владения понемногу с каждой поставкой"
  ],
  "why": "Tool prices and platform labels change every quarter — the owned layer is the only asset that grows.",
  "whyRu": "Цены инструментов и пометки платформ меняются каждый квартал — слой владения — единственный актив, который растёт.",
  "links": []
 },
 "aic-k4": {
  "what": "Re-check every quarter. Every 3 months, look again at tool prices, at label rules, and at your own income split. The split is how much of your money comes from clients and how much from platforms.",
  "whatRu": "Перепроверяйте каждый квартал. Каждые 3 месяца смотрите снова на цены инструментов, на правила пометок и на ваше собственное деление дохода. Деление — это сколько ваших денег идёт от клиентов и сколько от платформ.",
  "how": [
   "Write down the current tool prices again",
   "Read the label rules again on every platform you use",
   "Add up client money and platform money separately",
   "Write the date on the check — the rules on this track are dated 2026 and they will move"
  ],
  "howRu": [
   "Запишите текущие цены инструментов снова",
   "Перечитайте правила пометок на каждой платформе, которую вы используете",
   "Сложите деньги клиентов и деньги платформ отдельно",
   "Напишите дату на проверке — правила на этом треке датированы 2026 годом, и они сдвинутся"
  ],
  "why": "The rules on this track are dated 2026, and they will move.",
  "whyRu": "Правила на этом треке датированы 2026 годом, и они сдвинутся.",
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
