/* Step detail content for the PathCheck dashboard (stepdetail.js).
   Format: STEP_DETAILS[stepId] = {what, whatRu, how[], howRu[], why, whyRu,
   links: [{t, u}]} — EN + RU twins; links verified at build time.
   Written from the pilot packages (hr-checklist + sample-full-report). */
var STEP_DETAILS = (typeof STEP_DETAILS !== "undefined" && STEP_DETAILS) || {};
Object.assign(STEP_DETAILS, {
 "fin-g1": {
  "what": "Get a bachelor’s degree in finance or a numbers field, like business, economics or maths. Almost every job post here asks for it. It is the entry ticket. It does not make you stand out.",
  "whatRu": "Получите степень бакалавра в finance или в области с числами: business, economics или maths. Её просят почти все вакансии. Это входной билет. Он вас не выделяет.",
  "how": [
   "Pick a degree in finance or a numbers field",
   "If you already study something close, finish it — do not restart",
   "Keep your maths and accounting basics strong",
   "Finish the degree before you chase certificates"
  ],
  "howRu": [
   "Выберите степень в finance или в области с числами",
   "Если вы уже учитесь чему-то близкому, закончите это — не начинайте заново",
   "Держите сильными основы maths и accounting",
   "Закончите степень, прежде чем гнаться за сертификатами"
  ],
  "why": "Almost all of the 40 job posts ask for a bachelor’s in finance or a numbers field.",
  "whyRu": "Степень бакалавра в finance или в области с числами просят почти все из 40 вакансий.",
  "links": [
   {
    "t": "BLS — Financial Analysts (Occupational Outlook Handbook)",
    "u": "https://www.bls.gov/ooh/business-and-financial/financial-analysts.htm"
   }
  ]
 },
 "fin-g2": {
  "what": "Learn advanced Excel and financial modeling. That means building money plans in Excel: forecasts, budgets and what-if cases. You need this. But everyone serious has it. So it won’t make you stand out.",
  "whatRu": "Выучите продвинутый Excel и financial modeling. Это денежные планы в Excel: прогнозы, бюджеты и «что если». Это нужно. Но это есть у всех серьёзных кандидатов. Так что вас это не выделит.",
  "how": [
   "Practise lookups, pivot tables and a tidy model layout in Excel",
   "Build a full money plan in Excel: forecast, budget and a what-if case",
   "Check your model for errors before you show it",
   "Keep one model you can show as proof of your level"
  ],
  "howRu": [
   "Потренируйте в Excel поиск (lookups), сводные таблицы (pivots) и аккуратную структуру модели",
   "Постройте полный денежный план в Excel: прогноз, бюджет и случай «что если»",
   "Проверяйте модель на ошибки, прежде чем её показывать",
   "Держите одну модель, которую можно показать как доказательство вашего уровня"
  ],
  "why": "Advanced Excel and financial modeling are the basics here. You need them, but they won’t set you apart.",
  "whyRu": "Продвинутый Excel и financial modeling — это база. Нужно, но не выделяет.",
  "links": [
   {
    "t": "Create a PivotTable to analyze worksheet data — Microsoft Support",
    "u": "https://support.microsoft.com/en-us/office/create-a-pivottable-to-analyze-worksheet-data-a9a84538-bfe9-40a9-a8e9-f99134456576?wt.mc_id=otc_excel"
   }
  ]
 },
 "fin-g3": {
  "what": "Skip the CFA for this goal. The CFA is a hard finance certificate with three exams. FP&A jobs (company budgets and forecasts) don’t need it. Come back to it only if you move to the buy side. Buy side means investing jobs.",
  "whatRu": "Пропустите CFA для этой цели. CFA — трудный финансовый сертификат с тремя экзаменами. Для работ FP&A (бюджеты и прогнозы компании) он не нужен. Вернитесь к нему, только если уйдёте в buy side. Buy side — это работа в инвестициях.",
  "how": [
   "Don’t sign up for CFA Level I if you aim at FP&A",
   "Spend that study time on SQL and the planning program instead",
   "Write down the one thing that would change this: moving to investing jobs",
   "Come back to this question only if that really happens"
  ],
  "howRu": [
   "Не записывайтесь на CFA Level I, если цель — FP&A",
   "Лучше потратьте это время на SQL и программу планирования",
   "Запишите, что может это изменить: переход в инвестиции",
   "Вернитесь к вопросу, только если это правда случится"
  ],
  "why": "0 of 40 job posts require the CFA. 3 prefer it.",
  "whyRu": "CFA требуют 0 из 40 вакансий. Предпочитают — 3.",
  "links": []
 },
 "fin-p1": {
  "what": "Learn SQL well. SQL is the language for asking databases questions. It pulls out the numbers you need. Learn it until you can write window functions alone. A window function does maths across rows, like a running total.",
  "whatRu": "Хорошо выучите SQL. SQL — язык, на котором задают вопросы базе данных. Он достаёт нужные числа. Учите, пока не сможете писать window functions сами. Window function считает по строкам, например нарастающий итог.",
  "how": [
   "Start with SELECT, WHERE and JOIN on money tables",
   "Practise grouping and totals with GROUP BY",
   "Learn CTEs — named steps inside one query",
   "Practise window functions until you can write them alone",
   "Use SQL on real data from your own work, not only exercises"
  ],
  "howRu": [
   "Начните с SELECT, WHERE и JOIN на денежных таблицах",
   "Практикуйте группировки и итоги с GROUP BY",
   "Выучите CTE — шаги с названиями внутри одного запроса",
   "Практикуйте window functions, пока не сможете писать их сами",
   "Используйте SQL на настоящих данных с вашей работы, а не только в упражнениях"
  ],
  "why": "SQL is the #1 skill here: 31 of 40 job posts ask for it.",
  "whyRu": "SQL — навык №1: его просят 31 из 40 вакансий.",
  "links": [
   {
    "t": "Query and modify data with Transact-SQL — Microsoft Learn",
    "u": "https://learn.microsoft.com/en-us/training/paths/get-started-querying-with-transact-sql/"
   }
  ]
 },
 "fin-p2": {
  "what": "Learn ONE planning platform, deep. It is a program for company money plans: budgets and forecasts for the whole company. Don’t learn three a little. Learn one well.",
  "whatRu": "Выучите ОДНУ программу планирования, глубоко. Это программа для денежных планов компании: бюджетов и прогнозов. Не учите три понемногу. Выучите одну хорошо.",
  "how": [
   "If your employer runs a platform, learn that one first",
   "Otherwise start with Anaplan, the one job posts name most",
   "Take the maker’s own model-builder training",
   "Build a real money plan in it, not only test lessons",
   "Aim for the Certified Model Builder certificate in Anaplan"
  ],
  "howRu": [
   "Если у вашего работодателя есть платформа, сначала учите её",
   "Иначе начните с Anaplan — его чаще всех называют вакансии",
   "Пройдите обучение model builder от самой компании-разработчика",
   "Постройте в ней настоящий денежный план, а не только учебные уроки",
   "Цельтесь в сертификат Certified Model Builder в Anaplan"
  ],
  "why": "Job posts name a planning platform in 16 of 40 cases. Anaplan is named most, 15 of 40. Its Certified Model Builder certificate is a must in job posts.",
  "whyRu": "Вакансии называют программу планирования в 16 из 40 случаев. Чаще всех — Anaplan, 15 из 40. Его сертификат Certified Model Builder в вакансиях обязателен.",
  "links": [
   {
    "t": "Anaplan Academy Certification Programs",
    "u": "https://www.anaplan.com/academy/certification-programs/"
   }
  ]
 },
 "fin-p3": {
  "what": "Build two BI dashboards on real data. A BI dashboard is a screen of live charts. Don’t just look at other people’s dashboards. Build your own, on real data.",
  "whatRu": "Постройте два BI-дашборда на настоящих данных. BI-дашборд — это экран с живыми графиками. Не просто смотрите чужие дашборды. Стройте свои, на настоящих данных.",
  "how": [
   "Pick one BI tool — Tableau or Power BI",
   "Take real data from your own team or work",
   "Build the first dashboard: the main numbers, clean and clear",
   "Build a second dashboard for a different question",
   "Save screenshots and links — this is proof you can show"
  ],
  "howRu": [
   "Выберите один BI-инструмент — Tableau или Power BI",
   "Возьмите настоящие данные вашей команды или работы",
   "Постройте первый дашборд: главные числа, чисто и ясно",
   "Постройте второй дашборд для другого вопроса",
   "Сохраните скриншоты и ссылки — это доказательство, которое можно показать"
  ],
  "why": "20 of 40 job posts name a BI tool. Tableau is named 14 times and Power BI 9 times.",
  "whyRu": "BI-инструмент называют 20 из 40 вакансий. Tableau — 14 раз, Power BI — 9.",
  "links": [
   {
    "t": "Training for Power BI — Microsoft Learn",
    "u": "https://learn.microsoft.com/en-us/training/powerplatform/power-bi"
   }
  ]
 },
 "fin-p4": {
  "what": "Learn Python at analyst level. Python is a programming language. Know pandas, the Python tool for data tables. Then make one real automation: a task the computer now does for you at work.",
  "whatRu": "Выучите Python на уровне аналитика. Python — язык программирования. Знайте pandas — инструмент Python для таблиц. Потом сделайте одну настоящую автоматизацию: задачу, которую теперь за вас делает компьютер.",
  "how": [
   "Learn Python basics: tables, files and simple scripts",
   "Learn pandas to clean and join data tables",
   "Pick one boring task from your own reports",
   "Automate it with Python and use it in real work",
   "Keep the code and the result — this is your proof"
  ],
  "howRu": [
   "Выучите основы Python: таблицы, файлы и простые скрипты",
   "Выучите pandas, чтобы чистить и соединять таблицы данных",
   "Выберите одну скучную задачу из ваших отчётов",
   "Автоматизируйте её на Python и используйте в настоящей работе",
   "Сохраните код и результат — это ваше доказательство"
  ],
  "why": "Python appears in 16 of 40 job posts.",
  "whyRu": "Python встречается в 16 из 40 вакансий.",
  "links": [
   {
    "t": "pandas: getting started tutorials",
    "u": "https://pandas.pydata.org/docs/getting_started/intro_tutorials/"
   }
  ]
 },
 "fin-p5": {
  "what": "Automate one repeating part of your reports. Write down before and after. Show hours per month and the error rate (how often the old way made mistakes). Top job posts look for exactly this one page.",
  "whatRu": "Автоматизируйте одну повторяющуюся часть своих отчётов. Запишите «до» и «после». Покажите часы в месяц и долю ошибок (как часто старый способ ошибался). Топовые вакансии ищут именно такую страницу.",
  "how": [
   "Pick one repeating part of your reports",
   "Write down the before: hours per month and the error rate",
   "Automate that piece with Python, SQL or your existing tools",
   "Write down the after: hours per month and the error rate now",
   "Put before and after on one page and keep it for when you apply"
  ],
  "howRu": [
   "Выберите одну повторяющуюся часть ваших отчётов",
   "Запишите «до»: часы в месяц и долю ошибок",
   "Автоматизируйте этот кусок на Python, SQL или ваших текущих инструментах",
   "Запишите «после»: часы в месяц и долю ошибок теперь",
   "Соберите «до» и «после» на одной странице для подачи на работу"
  ],
  "why": "Top job posts look for exactly this one page of proof.",
  "whyRu": "Топовые вакансии ищут именно такую страницу доказательств.",
  "links": []
 },
 "fin-k1": {
  "what": "Own the forecast of one business unit, start to finish. A forecast is the money plan for the next months. Own means: you build it, you update it, and others rely on your numbers.",
  "whatRu": "Ведите прогноз одного подразделения от начала до конца. Прогноз — денежный план на следующие месяцы. Вести — значит: вы его строите, обновляете, и другие верят вашим числам.",
  "how": [
   "Ask to run one small unit’s forecast this quarter",
   "Build its forecast end to end: data in, numbers out",
   "Update it on schedule — don’t hand it back",
   "Present the forecast to the unit’s people yourself",
   "Keep proof that others used your forecast"
  ],
  "howRu": [
   "Вызовитесь вести прогноз одного небольшого подразделения в этом квартале",
   "Постройте его прогноз от начала до конца: данные внутрь, числа наружу",
   "Обновляйте его по графику — не отдавайте обратно",
   "Сами показывайте прогноз людям подразделения",
   "Сохраните доказательство, что другие использовали ваш прогноз"
  ],
  "why": "Top job posts use these words: “owned a forecast others relied on.”",
  "whyRu": "Топовые вакансии пишут так: «owned a forecast others relied on» — вёл прогноз, на который полагались другие.",
  "links": [
   {
    "t": "FPAC certification (AFP)",
    "u": "https://fpacert.financialprofessionals.org/certification/what-is-fp-a"
   }
  ]
 },
 "fin-k2": {
  "what": "Apply to mixed job titles: FP&A analyst, BI analyst and finance analytics. These jobs mix finance and data. There, your proof does the work for you. Don’t apply to plain “analyst” jobs.",
  "whatRu": "Подавайтесь на смешанные должности: FP&A analyst, BI analyst и finance analytics. Там соединяются finance и data. Там за вас говорят ваши доказательства. Не подавайтесь на обычные «analyst».",
  "how": [
   "Search for FP&A analyst, BI analyst and finance analytics titles",
   "Start each application with your proof: the automation page and the dashboards",
   "Match your SQL and platform skills to the words in the job post",
   "Skip plain “analyst” job posts that ask for no data or platform skills"
  ],
  "howRu": [
   "Ищите названия FP&A analyst, BI analyst и finance analytics",
   "Начинайте каждую заявку с доказательств: страницы автоматизации и дашбордов",
   "Сверяйте ваши навыки SQL и платформы со словами в вакансии",
   "Пропускайте обычные вакансии «analyst», где не нужны data или программы"
  ],
  "why": "Plain “analyst” jobs are shrinking: −21%.",
  "whyRu": "Обычных вакансий «analyst» становится меньше: −21%.",
  "links": [
   {
    "t": "BLS — Financial Analysts (Occupational Outlook Handbook)",
    "u": "https://www.bls.gov/ooh/business-and-financial/financial-analysts.htm"
   }
  ]
 },
 "fin-k3": {
  "what": "In the new job, become the unit’s go-to person from day one. When that unit needs numbers, it comes to you. Go to their ops reviews (regular work meetings). Own their forecast. Show their variance: plan versus real numbers.",
  "whatRu": "На новой работе с первого дня станьте «своим» для подразделения. Когда ему нужны числа, оно идёт к вам. Ходите на их ops reviews (рабочие встречи). Ведите их прогноз. Показывайте variance: план против факта.",
  "how": [
   "In week one, ask to join the unit’s ops reviews",
   "Learn how the unit really works, not only its numbers",
   "Take ownership of the unit’s forecast",
   "Prepare and show the variance: plan versus real numbers",
   "Be in the meeting when the unit talks about its results"
  ],
  "howRu": [
   "На первой неделе попроситесь на ops reviews подразделения",
   "Узнайте, как подразделение работает на самом деле, а не только его числа",
   "Возьмите на себя прогноз подразделения",
   "Готовьте и показывайте variance: план против факта",
   "Будьте на встрече, когда подразделение обсуждает результаты"
  ],
  "why": "Top job posts pay for the partner role: one person who owns a unit’s forecast and explains its variance in meetings.",
  "whyRu": "Топовые вакансии платят за роль партнёра: человека, который ведёт прогноз подразделения и объясняет variance на встречах.",
  "links": [
   {
    "t": "FPAC certification (AFP)",
    "u": "https://fpacert.financialprofessionals.org/certification/what-is-fp-a"
   }
  ]
 },
 "fin-k4": {
  "what": "Run your checklist again at month 12. Check each item with fresh eyes: degree, Excel, SQL, platform, dashboards, Python, proof. Think about the CFA again only if your goal changed to investing jobs.",
  "whatRu": "На месяце 12 пройдите чек-лист снова. Проверьте каждый пункт свежим взглядом: степень, Excel, SQL, программа, дашборды, Python, доказательство. О CFA думайте снова, только если цель сменилась на инвестиции.",
  "how": [
   "At month 12, go through your checklist item by item",
   "Mark what is now done and what is still a gap",
   "Fix the biggest remaining gap next",
   "Ask about the CFA once more: is your goal now investing jobs?",
   "If not, leave the CFA on hold and keep building the partner path"
  ],
  "howRu": [
   "На месяц 12 пройдите ваш чек-лист пункт за пунктом",
   "Отметьте, что теперь сделано, а что ещё пробел",
   "Следующим закройте самый большой оставшийся пробел",
   "Снова спросите себя про CFA: ваша цель теперь инвестиции?",
   "Если нет, оставьте CFA на паузе и идите дальше к роли партнёра"
  ],
  "why": "The CFA is for a different goal: 0 of 40 FP&A job posts require it.",
  "whyRu": "CFA — для другой цели: его требуют 0 из 40 вакансий FP&A.",
  "links": []
 }
});
Object.assign(STEP_DETAILS, {
 "ana-g1": {
  "what": "Bring your SQL to working level. Write joins (linking two or more tables), aggregations (totals and counts by group) and window functions (math across rows) without help. This is the basic skill. Every job above it expects you to have it.",
  "whatRu": "Доведите SQL до рабочего уровня. Пишите без подсказок соединения (связь двух и более таблиц), агрегации (итоги и подсчёты по группам) и оконные функции (расчёты по строкам). Это базовый навык. Каждая работа выше ждёт, что он у вас есть.",
  "how": [
   "Take a table you know and join it to a second table on a shared column",
   "Group the joined rows: count, sum and average per group",
   "Add one window function, for example a running total or a rank inside each group",
   "Rewrite the same three queries from memory until you need no help",
   "Save the queries — they are your first proof"
  ],
  "howRu": [
   "Возьмите знакомую таблицу и соедините её со второй по общему столбцу",
   "Сгруппируйте строки и посчитайте количество, сумму и среднее по группам",
   "Добавьте одну оконную функцию, например нарастающий итог или ранг внутри каждой группы",
   "Пишите те же три запроса по памяти, пока не сможете без подсказок",
   "Сохраните запросы — это ваши первые доказательства"
  ],
  "why": "SQL is named in 43 of 46 job posts we opened. Every job on this map needs it.",
  "whyRu": "SQL назван в 43 из 46 вакансий, которые мы открыли. Он нужен на каждой работе этой карты.",
  "links": [
   {
    "t": "Microsoft Learn: Query and modify data with Transact-SQL",
    "u": "https://learn.microsoft.com/en-us/training/paths/get-started-querying-with-transact-sql/"
   }
  ]
 },
 "ana-g2": {
  "what": "Learn one BI tool deeply: Tableau or Power BI, not both at once. A BI tool turns data into charts and dashboards. Learn to connect data, clean it, build charts and show a full dashboard.",
  "whatRu": "Выучите один BI-инструмент глубоко: Tableau или Power BI, не оба сразу. Он превращает данные в графики и дашборды. Научитесь подключать данные, чистить их, строить графики и показывать готовый дашборд.",
  "how": [
   "Pick one tool, Tableau or Power BI — the one your target job posts name most",
   "Connect the tool to a data table and build the basic charts: bar, line and a table of key numbers",
   "Clean and shape the data inside the tool before you chart it",
   "Build one full dashboard from those charts",
   "Present the dashboard out loud once, as if to a manager"
  ],
  "howRu": [
   "Выберите один инструмент, Tableau или Power BI, — тот, что чаще в нужных вам вакансиях",
   "Подключите инструмент к таблице данных и постройте базовые графики: столбцы, линию и таблицу ключевых чисел",
   "Почистите и подготовьте данные в инструменте, прежде чем строить графики",
   "Соберите из этих графиков один полный дашборд",
   "Один раз покажите дашборд вслух, как будто менеджеру"
  ],
  "why": "27 of 46 job posts name a BI tool. Reporting jobs work in it every day. Decision jobs use it to present.",
  "whyRu": "BI-инструмент называют 27 из 46 вакансий. Работы reporting живут в нём. Работы, где принимают решения, в нём показывают итоги.",
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
  "whatRu": "Выберите свою роль осознанно. Не подавайтесь просто на слово «analyst». На этой карте шесть ролей, и платят им очень по-разному. Запишите, какой роли подходят ваши навыки сегодня. Эта строка решает, что учить дальше.",
  "how": [
   "List the six roles on this map: business analyst (documents), reporting data analyst, product analyst, analytics engineer, strategy & operations, data scientist",
   "Next to each role, write what it is paid to make: a document, a dashboard, a decision or a data model",
   "Honestly mark the role your skills fit today",
   "Mark the role you want next — it can be a different one",
   "Keep this line where you will see it when you apply"
  ],
  "howRu": [
   "Выпишите шесть ролей этой карты: business analyst (документы), reporting data analyst, product analyst, analytics engineer, strategy & operations, data scientist",
   "Рядом с каждой ролью напишите, за что ей платят: документ, дашборд, решение или модель данных",
   "Честно отметьте роль, которой подходят ваши навыки сегодня",
   "Отметьте роль, которую хотите следующей, — это может быть другая",
   "Держите эту строку на виду, когда подаётесь"
  ],
  "why": "The six roles on this map pay $51K to $300K for the same word “analyst”.",
  "whyRu": "Шесть ролей на этой карте платят от $51K до $300K за одно и то же слово «analyst».",
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
  "what": "Use AI tools yourself on real analysis: Copilot, ChatGPT and Claude. Not on toy tasks. Give the tool a real question from work. Let it draft. Then check what it gives you.",
  "whatRu": "Сами пользуйтесь AI-инструментами на настоящем анализе: Copilot, ChatGPT и Claude. Не на игрушечных задачах. Дайте инструменту настоящий вопрос с работы. Пусть сделает черновик. Потом проверьте, что он дал.",
  "how": [
   "Pick one real analysis task from your current work",
   "Ask one AI tool to draft the first version: a query, a chart or a summary",
   "Check every number in the draft against the source data yourself",
   "Note one place where the draft was wrong and how you caught it",
   "Repeat with a second tool, so you know more than one"
  ],
  "howRu": [
   "Выберите одну настоящую задачу анализа из вашей текущей работы",
   "Попросите один AI-инструмент сделать первую версию: запрос, график или сводку",
   "Проверьте каждое число черновика по исходным данным сами",
   "Отметьте одно место, где черновик ошибся, и как вы это поймали",
   "Повторите со вторым инструментом, чтобы знать не один"
  ],
  "why": "6 of 46 job posts require a named AI tool. This is the newest demand, and it is growing.",
  "whyRu": "6 из 46 вакансий требуют конкретный AI-инструмент. Это самое новое требование, и оно растёт.",
  "links": [
   {
    "t": "Microsoft Learn: Microsoft 365 Copilot hub",
    "u": "https://learn.microsoft.com/en-us/copilot/microsoft-365/"
   }
  ]
 },
 "ana-p1": {
  "what": "Build one dashboard that helps someone make a decision. Not one that just answers a request. Start from the choice a person must make. Build only what that choice needs. Write down who opened it and what they decided.",
  "whatRu": "Постройте один дашборд, который помогает принять решение. А не просто выполняет запрос. Начните с выбора, который нужно сделать человеку. Стройте только то, что нужно для этого выбора. Запишите, кто его открыл и что решил.",
  "how": [
   "Name the decision first, in one sentence: who decides what, and when",
   "Name the person who will open the dashboard — it needs an owner with a decision to make",
   "Build only the charts that answer that decision",
   "Show it to that person and watch them use it",
   "Write down who opened it and what they decided — keep that note as the proof"
  ],
  "howRu": [
   "Сначала назовите решение одной фразой: кто решает что и когда",
   "Назовите человека, который будет его открывать, — у дашборда должен быть хозяин, которому надо что-то решить",
   "Постройте только те графики, которые отвечают на это решение",
   "Покажите его этому человеку и посмотрите, как он им пользуется",
   "Запишите, кто его открыл и что решил, — сохраните эту запись как доказательство"
  ],
  "why": "If nobody opens a dashboard, it didn’t help anyone. Reporting jobs are judged by whether people open their work.",
  "whyRu": "Если дашборд никто не открывает, он никому не помог. Работу reporting оценивают по тому, открывают ли её результат.",
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
  "what": "Learn data modeling with dbt. Data modeling means turning raw tables into clean tables people can trust. dbt is the tool that builds those clean tables.",
  "whatRu": "Выучите моделирование данных с dbt. Это когда сырые таблицы превращают в чистые, которым можно доверять. dbt — инструмент, который строит эти чистые таблицы.",
  "how": [
   "Open the dbt docs and read what a model is: one SQL select that becomes one clean table",
   "Build one model from a raw table you know",
   "Add a simple test to the model, for example checking that a column is never empty",
   "Run the model and check the clean table it produced",
   "Write one line on what the clean table is for — people and AI both read it"
  ],
  "howRu": [
   "Откройте документацию dbt и прочитайте, что такое модель: один SQL-запрос, который становится одной чистой таблицей",
   "Постройте одну модель из сырой таблицы, которую вы знаете",
   "Добавьте модели простой тест, например проверку, что столбец никогда не пустой",
   "Запустите модель и проверьте чистую таблицу, которую она сделала",
   "Напишите одной строкой, зачем эта таблица, — её читают и люди, и AI"
  ],
  "why": "7 of 7 analytics-engineer job posts name dbt. Every AI answer reads from these models.",
  "whyRu": "dbt называют 7 из 7 вакансий analytics engineer. Каждый ответ AI берёт данные из этих моделей.",
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
  "what": "Learn Python for analysis. Analysts use this programming language when a spreadsheet or BI tool is not enough. Learn it on data tasks: read a table, clean it, group it, chart it.",
  "whatRu": "Выучите Python для анализа. Аналитики берут этот язык, когда таблиц или BI-инструмента мало. Учите его на задачах с данными: прочитать таблицу, почистить, сгруппировать, построить график.",
  "how": [
   "Go through the start of the official Python tutorial to learn the basic words",
   "Open a data table with pandas — the Python tool for working with tables",
   "Clean the table: drop empty rows and fix the column names",
   "Group the table and calculate totals, like you would in SQL",
   "Make one chart from the grouped table"
  ],
  "howRu": [
   "Пройдите начало официального учебника Python, чтобы освоить базовые слова",
   "Откройте таблицу данных с помощью pandas — инструмента Python для работы с таблицами",
   "Почистите таблицу: уберите пустые строки и поправьте названия столбцов",
   "Сгруппируйте таблицу и посчитайте итоги, как вы делали бы в SQL",
   "Постройте один график по сгруппированной таблице"
  ],
  "why": "18 of 46 job posts name Python. In data-analyst job posts it is 9 of 9, in some form.",
  "whyRu": "Python называют 18 из 46 вакансий. В вакансиях data analyst — 9 из 9, в той или иной форме.",
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
  "what": "Run one experiment from start to finish. An experiment is a fair test. One group gets the change, one does not. One number (the metric the team watches) shows which is better. Or pick one metric yourself and explain why this number and not another.",
  "whatRu": "Проведите один эксперимент от начала до конца. Эксперимент — это честный тест. Одна группа получает изменение, другая нет. Одно число (метрика, за которой следит команда) показывает, что лучше. Или выберите метрику сами и объясните, почему именно это число.",
  "how": [
   "Write the question in one sentence: what change might move which number",
   "Choose the one number that will judge the test",
   "Split the audience, or the time, into two groups: with the change and without it",
   "Run the test and collect the metric for both groups",
   "Write the result and your call: keep the change or drop it — and why"
  ],
  "howRu": [
   "Запишите вопрос одной фразой: какое изменение может сдвинуть какое число",
   "Выберите одно число, по которому оценят тест",
   "Разделите аудиторию или время на две группы: с изменением и без него",
   "Запустите тест и соберите метрику по обеим группам",
   "Запишите результат и ваше решение: оставить изменение или убрать — и почему"
  ],
  "why": "4 of 4 product-analyst job posts name experiments. A metric you own proves you can lead a decision.",
  "whyRu": "Эксперименты называют 4 из 4 вакансий product analyst. Своя метрика доказывает, что вы умеете вести решение.",
  "links": [
   {
    "t": "General guidance on conducting A/B experiments — Google Cloud",
    "u": "https://docs.cloud.google.com/retail/docs/a-b-testing"
   }
  ]
 },
 "ana-p5": {
  "what": "Automate one report you make again and again by hand. Set it up to refresh and run by itself. Write down the hours you saved.",
  "whatRu": "Автоматизируйте один отчёт, который вы снова и снова собираете руками. Настройте, чтобы он обновлялся и работал сам. Запишите, сколько часов сэкономили.",
  "how": [
   "Pick the report you rebuild by hand most often",
   "Write down how long one manual rebuild takes you",
   "Connect the report to its data, so numbers update on their own instead of being pasted in",
   "Set the refresh to run on a schedule",
   "Run it once, check the numbers match your last hand-made version, and write down the hours saved"
  ],
  "howRu": [
   "Выберите отчёт, который вы пересобираете руками чаще всего",
   "Запишите, сколько времени занимает одна ручная пересборка",
   "Подключите отчёт к данным, чтобы числа обновлялись сами, а не вставлялись руками",
   "Поставьте обновление на расписание",
   "Запустите один раз, сверьте числа с последней ручной версией и запишите сэкономленные часы"
  ],
  "why": "Job posts that name AI want exactly this: a report once made by hand now runs by itself.",
  "whyRu": "Вакансии, где есть AI, хотят ровно это: отчёт, который делали руками, теперь работает сам.",
  "links": [
   {
    "t": "Microsoft Learn: Training for Power BI",
    "u": "https://learn.microsoft.com/en-us/training/powerplatform/power-bi"
   }
  ]
 },
 "ana-k1": {
  "what": "Apply to decision roles by name: product analyst, analytics engineer, strategy & operations. Search for these exact titles. Not the plain word “analyst”.",
  "whatRu": "Подавайтесь на роли, где принимают решения, по названию: product analyst, analytics engineer, strategy & operations. Ищите именно эти названия. А не просто «analyst».",
  "how": [
   "Change your search words: use the role names, not just “analyst”",
   "Read each job post and check for the real work: decisions, experiments or data models",
   "Skip job posts where the main output is a document or a dashboard on request",
   "Start your application with the role you picked earlier",
   "Track which role each application goes to"
  ],
  "howRu": [
   "Поменяйте слова поиска: названия ролей, а не только «analyst»",
   "В каждой вакансии читайте текст и ищите настоящую работу: решения, эксперименты или модели данных",
   "Пропускайте вакансии, где главное — документ или дашборд по запросу",
   "Начинайте заявку с роли, которую вы выбрали раньше",
   "Отмечайте, на какую роль ушла каждая заявка"
  ],
  "why": "Plain “analyst” jobs got 1,108 applications for one junior job. That’s why it pays to aim smarter.",
  "whyRu": "На одну обычную вакансию «analyst» уровня junior пришло 1,108 заявок. Поэтому лучше целиться точнее.",
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
  "what": "In interviews, start with a decision you changed, not a dashboard you built. A stakeholder is a person who decides based on your work. Tell that story first: what was at stake, what your work showed, what they decided.",
  "whatRu": "На собеседовании начинайте с решения, которое вы изменили, а не с дашборда. Стейкхолдер — человек, который решает на основе вашей работы. Сначала расскажите эту историю: что было на кону, что показала ваша работа, что решили.",
  "how": [
   "Pick one decision your work changed",
   "Write the story in three lines: the situation, what your analysis showed, what was decided",
   "Start your interview answer with that story, not a tool name",
   "Keep the dashboard as a detail, not the main point",
   "Prepare a second decision story the same way"
  ],
  "howRu": [
   "Выберите одно решение, которое изменила ваша работа",
   "Запишите историю в три строки: ситуация, что показал ваш анализ, что решили",
   "Начинайте ответ на собеседовании с этой истории, а не с названия инструмента",
   "Дашборд — это деталь, а не главное",
   "Подготовьте вторую историю решения таким же способом"
  ],
  "why": "In all 7 strategy & operations job posts, working with stakeholders is the main duty.",
  "whyRu": "Во всех 7 вакансиях strategy & operations главная обязанность — работа со стейкхолдерами.",
  "links": [
   {
    "t": "BLS Occupational Outlook: Management Analysts",
    "u": "https://www.bls.gov/ooh/business-and-financial/management-analysts.htm"
   }
  ]
 },
 "ana-k3": {
  "what": "Show your AI workflow: one analysis where AI made the draft and you checked it. Show your checks, not just the draft.",
  "whatRu": "Покажите, как вы работаете с AI: один анализ, где AI сделал черновик, а вы проверили. Покажите свои проверки, а не только черновик.",
  "how": [
   "Take the analysis from the earlier step where AI drafted and you checked",
   "Keep both versions: the AI draft and your checked final version",
   "Write down each check you ran on the draft, in plain words",
   "Mark one error the AI made and how your check caught it",
   "Present it in that order: draft, checks, final"
  ],
  "howRu": [
   "Возьмите анализ с прошлого шага, где AI сделал черновик, а вы проверили",
   "Сохраните обе версии: черновик AI и вашу проверенную финальную версию",
   "Запишите каждую проверку черновика простыми словами",
   "Отметьте одну ошибку AI и то, как ваша проверка её поймала",
   "Покажите в этом порядке: черновик, проверки, финал"
  ],
  "why": "The 6 job posts that name AI tools want this proof. In their words: “to build something real”.",
  "whyRu": "6 вакансий, где названы AI-инструменты, хотят именно такое доказательство. Их словами: «to build something real».",
  "links": [
   {
    "t": "Microsoft Learn: Microsoft 365 Copilot hub",
    "u": "https://learn.microsoft.com/en-us/copilot/microsoft-365/"
   }
  ]
 },
 "ana-k4": {
  "what": "Set your price from real job posts, not from feelings. Find the pay range for your role and ask inside it. If that range is flat (no room to grow), the role is the problem, not you. Then it’s time to look at a new role.",
  "whatRu": "Оценивайте себя по настоящим вакансиям, а не по ощущениям. Узнайте, сколько платят на вашей роли, и просите в этих пределах. Если расти там некуда, проблема в роли, а не в вас. Тогда пора смотреть на другую роль.",
  "how": [
   "Find your role in the three pay ranges in the “why” line below",
   "Write down your role’s pay range and where you sit in it",
   "Compare any offer to that range, not to your current pay",
   "If the range is flat, go back to the role step and pick your next role"
  ],
  "howRu": [
   "Найдите свою роль в трёх диапазонах оплаты из строки «почему» ниже",
   "Запишите, сколько платят на вашей роли и где в этих пределах вы",
   "Сравнивайте любое предложение с этими цифрами, а не с текущей зарплатой",
   "Если расти некуда, вернитесь к шагу выбора роли и выберите следующую"
  ],
  "why": "Reporting roles pay $60K–$95K; product roles pay $106K–$168K; analytics engineering pays $130K–$244K at senior and staff level.",
  "whyRu": "Роли reporting платят $60K–$95K; роли product — $106K–$168K; analytics engineering — $130K–$244K на уровне senior и staff.",
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
  "what": "Re-check this list every quarter (every three months) against new job posts. Open new job posts for your role. Count the named tools again. Update your plan based on what changed.",
  "whatRu": "Перепроверяйте этот список каждый квартал (раз в три месяца) по новым вакансиям. Откройте свежие вакансии для вашей роли. Снова посчитайте названные инструменты. Обновите план по тому, что изменилось.",
  "how": [
   "Set a date three months from now",
   "Open a fresh set of job posts for your role",
   "Count again: SQL, your BI tool, Python, dbt and any named AI tool",
   "Compare the new counts with the counts on this page",
   "Update your next learning step based on what changed"
  ],
  "howRu": [
   "Поставьте дату через три месяца от сегодня",
   "Откройте свежие вакансии для вашей роли",
   "Посчитайте снова: SQL, ваш BI-инструмент, Python, dbt и любой названный AI-инструмент",
   "Сравните новые числа с числами на этой странице",
   "Обновите следующий шаг учёбы по тому, что изменилось"
  ],
  "why": "AI tools went from not named at all to 6 of 46 in one round of checking. The demands for your role now change that fast.",
  "whyRu": "AI-инструментов не было вовсе, а за один раунд проверки стало 6 из 46. Требования к вашей роли теперь меняются так быстро.",
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
  "what": "Bring your SQL to working level. Write joins (linking two or more tables), aggregations (totals and counts by group) and window functions (math across rows) without help. This is the basic skill. Every job above it expects you to have it.",
  "whatRu": "Доведите SQL до рабочего уровня. Пишите без подсказок соединения (связь двух и более таблиц), агрегации (итоги и подсчёты по группам) и оконные функции (расчёты по строкам). Это базовый навык. Каждая работа выше ждёт, что он у вас есть.",
  "how": [
   "Take a table you know and join it to a second table on a shared column",
   "Group the joined rows: count, sum and average per group",
   "Add one window function, for example a running total or a rank inside each group",
   "Rewrite the same three queries from memory until you need no help",
   "Save the queries — they are your first proof"
  ],
  "howRu": [
   "Возьмите знакомую таблицу и соедините её со второй по общему столбцу",
   "Сгруппируйте строки и посчитайте количество, сумму и среднее по группам",
   "Добавьте одну оконную функцию, например нарастающий итог или ранг внутри каждой группы",
   "Пишите те же три запроса по памяти, пока не сможете без подсказок",
   "Сохраните запросы — это ваши первые доказательства"
  ],
  "why": "SQL is named in 24 of 24 data job posts we opened. Every job on this map needs it.",
  "whyRu": "SQL назван в 24 из 24 вакансий по данным, которые мы открыли. Он нужен на каждой работе этой карты.",
  "links": [
   {
    "t": "Microsoft Learn: Query and modify data with Transact-SQL",
    "u": "https://learn.microsoft.com/en-us/training/paths/get-started-querying-with-transact-sql/"
   }
  ]
 },
 "dan-g2": {
  "what": "Learn one BI tool deeply: Tableau or Power BI, not both at once. A BI tool turns data into charts and dashboards. Learn to connect data, clean it, build charts and show a full dashboard.",
  "whatRu": "Выучите один BI-инструмент глубоко: Tableau или Power BI, не оба сразу. Он превращает данные в графики и дашборды. Научитесь подключать данные, чистить их, строить графики и показывать готовый дашборд.",
  "how": [
   "Pick one tool, Tableau or Power BI — the one your target job posts name most",
   "Connect the tool to a data table and build the basic charts: bar, line and a table of key numbers",
   "Clean and shape the data inside the tool before you chart it",
   "Build one full dashboard from those charts",
   "Present the dashboard out loud once, as if to a manager"
  ],
  "howRu": [
   "Выберите один инструмент, Tableau или Power BI, — тот, что чаще в нужных вам вакансиях",
   "Подключите инструмент к таблице данных и постройте базовые графики: столбцы, линию и таблицу ключевых чисел",
   "Почистите и подготовьте данные в инструменте, прежде чем строить графики",
   "Соберите из этих графиков один полный дашборд",
   "Один раз покажите дашборд вслух, как будто менеджеру"
  ],
  "why": "18 of 24 data job posts name or require a BI tool. In data-analyst job posts it is 9 of 9.",
  "whyRu": "BI-инструмент называют или требуют 18 из 24 вакансий по данным. В вакансиях data analyst — 9 из 9.",
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
  "whatRu": "Выберите свою роль осознанно. Не подавайтесь на все похожие названия. На этой карте четыре роли, и за похожие названия платят очень по-разному. Запишите, какой роли подходят ваши навыки сегодня. Эта строка решает, что учить дальше.",
  "how": [
   "List the four roles on this map: reporting data analyst, product analyst, analytics engineer, data scientist",
   "Next to each role, write what it is paid to make: a dashboard, a decision or a data model",
   "Honestly mark the role your skills fit today",
   "Mark the role you want next — it can be a different one",
   "Keep this line where you will see it when you apply"
  ],
  "howRu": [
   "Выпишите четыре роли этой карты: reporting data analyst, product analyst, analytics engineer, data scientist",
   "Рядом с каждой ролью напишите, за что ей платят: дашборд, решение или модель данных",
   "Честно отметьте роль, которой подходят ваши навыки сегодня",
   "Отметьте роль, которую хотите следующей, — это может быть другая",
   "Держите эту строку на виду, когда подаётесь"
  ],
  "why": "The four roles on this map pay $60K to $300K for similar titles.",
  "whyRu": "Четыре роли на этой карте платят от $60K до $300K за похожие названия.",
  "links": [
   {
    "t": "BLS Occupational Outlook: Data Scientists",
    "u": "https://www.bls.gov/ooh/math/data-scientists.htm"
   }
  ]
 },
 "dan-g4": {
  "what": "Use AI tools yourself on real analysis: Copilot, ChatGPT and Claude. Not on toy tasks. Give the tool a real question from work. Let it draft. Then check what it gives you.",
  "whatRu": "Сами пользуйтесь AI-инструментами на настоящем анализе: Copilot, ChatGPT и Claude. Не на игрушечных задачах. Дайте инструменту настоящий вопрос с работы. Пусть сделает черновик. Потом проверьте, что он дал.",
  "how": [
   "Pick one real analysis task from your current work",
   "Ask one AI tool to draft the first version: a query, a chart or a summary",
   "Check every number in the draft against the source data yourself",
   "Note one place where the draft was wrong and how you caught it",
   "Repeat with a second tool, so you know more than one"
  ],
  "howRu": [
   "Выберите одну настоящую задачу анализа из вашей текущей работы",
   "Попросите один AI-инструмент сделать первую версию: запрос, график или сводку",
   "Проверьте каждое число черновика по исходным данным сами",
   "Отметьте одно место, где черновик ошибся, и как вы это поймали",
   "Повторите со вторым инструментом, чтобы знать не один"
  ],
  "why": "Two of 24 data job posts already name an AI tool as a must or a duty. One asks people “to build something real”.",
  "whyRu": "Две из 24 вакансий по данным уже называют AI-инструмент требованием или обязанностью. Одна просит «to build something real».",
  "links": [
   {
    "t": "Microsoft Learn: Microsoft 365 Copilot hub",
    "u": "https://learn.microsoft.com/en-us/copilot/microsoft-365/"
   }
  ]
 },
 "dan-p1": {
  "what": "Build one dashboard that helps someone make a decision. Not one that just answers a request. Start from the choice a person must make. Build only what that choice needs. Write down who opened it and what they decided.",
  "whatRu": "Постройте один дашборд, который помогает принять решение. А не просто выполняет запрос. Начните с выбора, который нужно сделать человеку. Стройте только то, что нужно для этого выбора. Запишите, кто его открыл и что решил.",
  "how": [
   "Name the decision first, in one sentence: who decides what, and when",
   "Name the person who will open the dashboard — it needs an owner with a decision to make",
   "Build only the charts that answer that decision",
   "Show it to that person and watch them use it",
   "Write down who opened it and what they decided — keep that note as the proof"
  ],
  "howRu": [
   "Сначала назовите решение одной фразой: кто решает что и когда",
   "Назовите человека, который будет его открывать, — у дашборда должен быть хозяин, которому надо что-то решить",
   "Постройте только те графики, которые отвечают на это решение",
   "Покажите его этому человеку и посмотрите, как он им пользуется",
   "Запишите, кто его открыл и что решил, — сохраните эту запись как доказательство"
  ],
  "why": "If nobody opens a dashboard, it didn’t help anyone. Reporting jobs are judged by whether people open their work.",
  "whyRu": "Если дашборд никто не открывает, он никому не помог. Работу reporting оценивают по тому, открывают ли её результат.",
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
  "what": "Learn data modeling with dbt. Data modeling means turning raw tables into clean tables people can trust. dbt is the tool that builds those clean tables.",
  "whatRu": "Выучите моделирование данных с dbt. Это когда сырые таблицы превращают в чистые, которым можно доверять. dbt — инструмент, который строит эти чистые таблицы.",
  "how": [
   "Open the dbt docs and read what a model is: one SQL select that becomes one clean table",
   "Build one model from a raw table you know",
   "Add a simple test to the model, for example checking that a column is never empty",
   "Run the model and check the clean table it produced",
   "Write one line on what the clean table is for — people and AI both read it"
  ],
  "howRu": [
   "Откройте документацию dbt и прочитайте, что такое модель: один SQL-запрос, который становится одной чистой таблицей",
   "Постройте одну модель из сырой таблицы, которую вы знаете",
   "Добавьте модели простой тест, например проверку, что столбец никогда не пустой",
   "Запустите модель и проверьте чистую таблицу, которую она сделала",
   "Напишите одной строкой, зачем эта таблица, — её читают и люди, и AI"
  ],
  "why": "7 of 7 analytics-engineer job posts name dbt. Every AI answer reads from these models.",
  "whyRu": "dbt называют 7 из 7 вакансий analytics engineer. Каждый ответ AI берёт данные из этих моделей.",
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
  "what": "Get hands-on with one cloud warehouse, Snowflake first. A warehouse is where the company’s data lives in the cloud. Open it, find data there, and run your SQL inside it. Not only on your own computer.",
  "whatRu": "Поработайте руками с одним облачным хранилищем данных, сначала со Snowflake. Хранилище — место, где данные компании живут в облаке. Откройте его, найдите данные и запускайте свой SQL там. А не только на своём компьютере.",
  "how": [
   "Read Snowflake’s page on warehouses: a warehouse is the computer power that runs your queries",
   "Open Snowflake and run one of your known SQL queries there",
   "Find one table and join it to a second table inside the warehouse",
   "Note what the warehouse is called in your target job posts",
   "Save one query you ran in the warehouse as proof"
  ],
  "howRu": [
   "Прочитайте страницу Snowflake о хранилищах: это вычислительная мощность, которая запускает ваши запросы",
   "Откройте Snowflake и запустите там один из ваших знакомых SQL-запросов",
   "Найдите одну таблицу и соедините её со второй прямо в хранилище",
   "Отметьте, как хранилище называется в нужных вам вакансиях",
   "Сохраните один запрос из хранилища как доказательство"
  ],
  "why": "12 of 24 data job posts name a warehouse. In analytics-engineer job posts it is 7 of 7.",
  "whyRu": "Хранилище называют 12 из 24 вакансий по данным. В вакансиях analytics engineer — 7 из 7.",
  "links": [
   {
    "t": "Snowflake Docs: Virtual warehouses",
    "u": "https://docs.snowflake.com/en/user-guide/warehouses"
   }
  ]
 },
 "dan-p4": {
  "what": "Learn Python for analysis. Analysts use this programming language when a spreadsheet or BI tool is not enough. Learn it on data tasks: read a table, clean it, group it, chart it.",
  "whatRu": "Выучите Python для анализа. Аналитики берут этот язык, когда таблиц или BI-инструмента мало. Учите его на задачах с данными: прочитать таблицу, почистить, сгруппировать, построить график.",
  "how": [
   "Go through the start of the official Python tutorial to learn the basic words",
   "Open a data table with pandas — the Python tool for working with tables",
   "Clean the table: drop empty rows and fix the column names",
   "Group the table and calculate totals, like you would in SQL",
   "Make one chart from the grouped table"
  ],
  "howRu": [
   "Пройдите начало официального учебника Python, чтобы освоить базовые слова",
   "Откройте таблицу данных с помощью pandas — инструмента Python для работы с таблицами",
   "Почистите таблицу: уберите пустые строки и поправьте названия столбцов",
   "Сгруппируйте таблицу и посчитайте итоги, как вы делали бы в SQL",
   "Постройте один график по сгруппированной таблице"
  ],
  "why": "15 of 24 data job posts name Python. In data-analyst job posts it is 9 of 9, in some form.",
  "whyRu": "Python называют 15 из 24 вакансий по данным. В вакансиях data analyst — 9 из 9, в той или иной форме.",
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
  "what": "Run one experiment from start to finish. An experiment is a fair test. One group gets the change, one does not. One number (the metric the team watches) shows which is better. Or pick one metric yourself and explain why this number and not another.",
  "whatRu": "Проведите один эксперимент от начала до конца. Эксперимент — это честный тест. Одна группа получает изменение, другая нет. Одно число (метрика, за которой следит команда) показывает, что лучше. Или выберите метрику сами и объясните, почему именно это число.",
  "how": [
   "Write the question in one sentence: what change might move which number",
   "Choose the one number that will judge the test",
   "Split the audience, or the time, into two groups: with the change and without it",
   "Run the test and collect the metric for both groups",
   "Write the result and your call: keep the change or drop it — and why"
  ],
  "howRu": [
   "Запишите вопрос одной фразой: какое изменение может сдвинуть какое число",
   "Выберите одно число, по которому оценят тест",
   "Разделите аудиторию или время на две группы: с изменением и без него",
   "Запустите тест и соберите метрику по обеим группам",
   "Запишите результат и ваше решение: оставить изменение или убрать — и почему"
  ],
  "why": "4 of 4 product-analyst job posts name experiments. A metric you own proves you can lead a decision.",
  "whyRu": "Эксперименты называют 4 из 4 вакансий product analyst. Своя метрика доказывает, что вы умеете вести решение.",
  "links": [
   {
    "t": "General guidance on conducting A/B experiments — Google Cloud",
    "u": "https://docs.cloud.google.com/retail/docs/a-b-testing"
   }
  ]
 },
 "dan-p6": {
  "what": "Automate one report you make again and again by hand. Set it up to refresh and run by itself. Write down the hours you saved.",
  "whatRu": "Автоматизируйте один отчёт, который вы снова и снова собираете руками. Настройте, чтобы он обновлялся и работал сам. Запишите, сколько часов сэкономили.",
  "how": [
   "Pick the report you rebuild by hand most often",
   "Write down how long one manual rebuild takes you",
   "Connect the report to its data, so numbers update on their own instead of being pasted in",
   "Set the refresh to run on a schedule",
   "Run it once, check the numbers match your last hand-made version, and write down the hours saved"
  ],
  "howRu": [
   "Выберите отчёт, который вы пересобираете руками чаще всего",
   "Запишите, сколько времени занимает одна ручная пересборка",
   "Подключите отчёт к данным, чтобы числа обновлялись сами, а не вставлялись руками",
   "Поставьте обновление на расписание",
   "Запустите один раз, сверьте числа с последней ручной версией и запишите сэкономленные часы"
  ],
  "why": "Job posts that name AI want exactly this: a report once made by hand now runs by itself.",
  "whyRu": "Вакансии, где есть AI, хотят ровно это: отчёт, который делали руками, теперь работает сам.",
  "links": [
   {
    "t": "Microsoft Learn: Training for Power BI",
    "u": "https://learn.microsoft.com/en-us/training/powerplatform/power-bi"
   }
  ]
 },
 "dan-k1": {
  "what": "Apply to decision roles by name: product analyst, analytics engineer. Search for these exact titles. Not the plain words “data analyst”.",
  "whatRu": "Подавайтесь на роли, где принимают решения, по названию: product analyst, analytics engineer. Ищите именно эти названия. А не просто «data analyst».",
  "how": [
   "Change your search words: use the role names, not just “data analyst”",
   "Read each job post and check for the real work: decisions, experiments or data models",
   "Skip job posts where the main output is a dashboard or a report on request",
   "Start your application with the role you picked earlier",
   "Track which role each application goes to"
  ],
  "howRu": [
   "Поменяйте слова поиска: названия ролей, а не только «data analyst»",
   "В каждой вакансии читайте текст и ищите настоящую работу: решения, эксперименты или модели данных",
   "Пропускайте вакансии, где главное — дашборд или отчёт по запросу",
   "Начинайте заявку с роли, которую вы выбрали раньше",
   "Отмечайте, на какую роль ушла каждая заявка"
  ],
  "why": "Plain “data analyst” jobs got 1,108 applications for one junior job. That’s why it pays to aim smarter.",
  "whyRu": "На одну обычную вакансию «data analyst» уровня junior пришло 1,108 заявок. Поэтому лучше целиться точнее.",
  "links": [
   {
    "t": "BLS Occupational Outlook: Data Scientists",
    "u": "https://www.bls.gov/ooh/math/data-scientists.htm"
   }
  ]
 },
 "dan-k2": {
  "what": "Show your AI workflow: one analysis where AI made the draft and you checked it. Show your checks, not just the draft.",
  "whatRu": "Покажите, как вы работаете с AI: один анализ, где AI сделал черновик, а вы проверили. Покажите свои проверки, а не только черновик.",
  "how": [
   "Take the analysis from the earlier step where AI drafted and you checked",
   "Keep both versions: the AI draft and your checked final version",
   "Write down each check you ran on the draft, in plain words",
   "Mark one error the AI made and how your check caught it",
   "Present it in that order: draft, checks, final"
  ],
  "howRu": [
   "Возьмите анализ с прошлого шага, где AI сделал черновик, а вы проверили",
   "Сохраните обе версии: черновик AI и вашу проверенную финальную версию",
   "Запишите каждую проверку черновика простыми словами",
   "Отметьте одну ошибку AI и то, как ваша проверка её поймала",
   "Покажите в этом порядке: черновик, проверки, финал"
  ],
  "why": "Job posts that name AI tools want this proof. In their words: “to build something real”.",
  "whyRu": "Вакансии, где названы AI-инструменты, хотят именно такое доказательство. Их словами: «to build something real».",
  "links": [
   {
    "t": "Microsoft Learn: Microsoft 365 Copilot hub",
    "u": "https://learn.microsoft.com/en-us/copilot/microsoft-365/"
   }
  ]
 },
 "dan-k3": {
  "what": "Set your price from real job posts, not from feelings. Find the pay range for your role and ask inside it. If that range is flat (no room to grow), the role is the problem, not you. Then it’s time to look at a new role.",
  "whatRu": "Оценивайте себя по настоящим вакансиям, а не по ощущениям. Узнайте, сколько платят на вашей роли, и просите в этих пределах. Если расти там некуда, проблема в роли, а не в вас. Тогда пора смотреть на другую роль.",
  "how": [
   "Find your role in the three pay ranges in the “why” line below",
   "Write down your role’s pay range and where you sit in it",
   "Compare any offer to that range, not to your current pay",
   "If the range is flat, go back to the role step and pick your next role"
  ],
  "howRu": [
   "Найдите свою роль в трёх диапазонах оплаты из строки «почему» ниже",
   "Запишите, сколько платят на вашей роли и где в этих пределах вы",
   "Сравнивайте любое предложение с этими цифрами, а не с текущей зарплатой",
   "Если расти некуда, вернитесь к шагу выбора роли и выберите следующую"
  ],
  "why": "Reporting roles pay $60K–$95K; product roles pay $106K–$168K; analytics engineering pays $130K–$244K at senior and staff level.",
  "whyRu": "Роли reporting платят $60K–$95K; роли product — $106K–$168K; analytics engineering — $130K–$244K на уровне senior и staff.",
  "links": [
   {
    "t": "BLS Occupational Outlook: Data Scientists",
    "u": "https://www.bls.gov/ooh/math/data-scientists.htm"
   }
  ]
 },
 "dan-k4": {
  "what": "Re-check this list every quarter (every three months) against new job posts. Open new job posts for your role. Count the named tools again. Update your plan based on what changed.",
  "whatRu": "Перепроверяйте этот список каждый квартал (раз в три месяца) по новым вакансиям. Откройте свежие вакансии для вашей роли. Снова посчитайте названные инструменты. Обновите план по тому, что изменилось.",
  "how": [
   "Set a date three months from now",
   "Open a fresh set of job posts for your role",
   "Count again: SQL, your BI tool, Python, dbt, your warehouse and any named AI tool",
   "Compare the new counts with the counts on this page",
   "Update your next learning step based on what changed"
  ],
  "howRu": [
   "Поставьте дату через три месяца от сегодня",
   "Откройте свежие вакансии для вашей роли",
   "Посчитайте снова: SQL, ваш BI-инструмент, Python, dbt, ваше хранилище и любой названный AI-инструмент",
   "Сравните новые числа с числами на этой странице",
   "Обновите следующий шаг учёбы по тому, что изменилось"
  ],
  "why": "On the data side, AI tools went from not named to 2 of 24 in one round of checking. The demands for your role now change that fast.",
  "whyRu": "В вакансиях по данным AI-инструментов не было, а за один раунд проверки стало 2 из 24. Требования к вашей роли теперь меняются так быстро.",
  "links": [
   {
    "t": "BLS Occupational Outlook: Data Scientists",
    "u": "https://www.bls.gov/ooh/math/data-scientists.htm"
   }
  ]
 }
});
