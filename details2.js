/* Step detail content for the PathCheck dashboard (stepdetail.js).
   Format: STEP_DETAILS[stepId] = {what, whatRu, how[], howRu[], why, whyRu,
   links: [{t, u}]} — EN + RU twins; links verified at build time.
   Written from the pilot packages (hr-checklist + sample-full-report). */
var STEP_DETAILS = (typeof STEP_DETAILS !== "undefined" && STEP_DETAILS) || {};
Object.assign(STEP_DETAILS, {
 "fin-g1": {
  "what": "Get a bachelor’s degree in finance or a numbers field — like business, economics or maths. Almost every posting in this market asks for it. It is the entry ticket, not the thing that sets you apart.",
  "whatRu": "Получите степень бакалавра в finance или в области с числами — например business, economics или maths. Её просят почти все вакансии на этом рынке. Это входной билет, а не то, что вас выделяет.",
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
  "why": "Almost all of the 40 postings ask for a bachelor’s degree in finance or a numbers field.",
  "whyRu": "Степень бакалавра в finance или в области с числами просят почти все из 40 вакансий.",
  "links": [
   {
    "t": "BLS — Financial Analysts (Occupational Outlook Handbook)",
    "u": "https://www.bls.gov/ooh/business-and-financial/financial-analysts.htm"
   }
  ]
 },
 "fin-g2": {
  "what": "Learn advanced Excel and financial modeling. Financial modeling means building money plans in Excel — forecasts, budgets and what-if cases. You need this. But it is only the floor: every serious candidate has it, so it does not set you apart.",
  "whatRu": "Выучите продвинутый Excel и financial modeling. Financial modeling — это строить денежные планы в Excel: прогнозы, бюджеты и случаи «что если». Это нужно. Но это только порог: это есть у каждого серьёзного кандидата, поэтому это вас не выделяет.",
  "how": [
   "Practise lookups, pivots and clean model structure in Excel",
   "Build a full money plan in Excel: forecast, budget and a what-if case",
   "Check your model for errors before you show it",
   "Keep one model you can show as proof of your level"
  ],
  "howRu": [
   "Практикуйте lookups, pivots и чистую структуру модели в Excel",
   "Постройте полный денежный план в Excel: прогноз, бюджет и случай «что если»",
   "Проверяйте модель на ошибки, прежде чем её показывать",
   "Держите одну модель, которую можно показать как доказательство вашего уровня"
  ],
  "why": "Advanced Excel and financial modeling are the floor in this market — needed, but not a differentiator.",
  "whyRu": "Продвинутый Excel и financial modeling — порог на этом рынке: нужно, но не выделяет.",
  "links": [
   {
    "t": "Create a PivotTable to analyze worksheet data — Microsoft Support",
    "u": "https://support.microsoft.com/en-us/office/create-a-pivottable-to-analyze-worksheet-data-a9a84538-bfe9-40a9-a8e9-f99134456576?wt.mc_id=otc_excel"
   }
  ]
 },
 "fin-g3": {
  "what": "Skip the CFA for this target. The CFA is a hard finance certificate with three exams. For FP&A jobs it is not the gate. Come back to it only if you move to the buy side — the buy side means investing jobs.",
  "whatRu": "Пропустите CFA для этой цели. CFA — это трудный финансовый сертификат с тремя экзаменами. Для работ FP&A это не ворота. Вернитесь к нему, только если уйдёте в buy side — buy side означает работы в инвестициях.",
  "how": [
   "Do not sign up for CFA Level I for an FP&A target",
   "Put the study time into SQL and the planning platform instead",
   "Write down the one case that would change this: a move to investing roles",
   "Revisit the question only if that case becomes real"
  ],
  "howRu": [
   "Не записывайтесь на CFA Level I ради цели FP&A",
   "Вложите время учёбы вместо этого в SQL и платформу планирования",
   "Запишите единственный случай, который это изменит: переход в инвестиционные роли",
   "Возвращайтесь к вопросу, только если этот случай станет настоящим"
  ],
  "why": "Jobs require the CFA in 0 of 40 postings and prefer it in 3.",
  "whyRu": "Работы требуют CFA в 0 из 40 вакансий и предпочитают его в 3.",
  "links": []
 },
 "fin-p1": {
  "what": "Learn SQL well. SQL is the language that asks databases questions — it pulls the numbers you need out of a database. Learn it until you can write window functions alone. A window function does maths across rows, like a running total.",
  "whatRu": "Хорошо выучите SQL. SQL — это язык, который задаёт вопросы базам данных: он достаёт из базы числа, которые вам нужны. Учите его, пока не сможете писать window functions сами. Window function делает математику по строкам, например бегущую сумму.",
  "how": [
   "Start with SELECT, WHERE and JOIN on finance-shaped data — data shaped like money tables",
   "Practise grouping and totals with GROUP BY",
   "Learn CTEs — named steps inside one query",
   "Practise window functions until you can write them alone",
   "Use SQL on real pulls from your own work, not only exercises"
  ],
  "howRu": [
   "Начните с SELECT, WHERE и JOIN на данных в форме finance — данных в форме денежных таблиц",
   "Практикуйте группировки и итоги с GROUP BY",
   "Выучите CTE — названные шаги внутри одного запроса",
   "Практикуйте window functions, пока не сможете писать их сами",
   "Используйте SQL на настоящих выгрузках из вашей работы, а не только в упражнениях"
  ],
  "why": "SQL is the #1 demand in this market: 31 of 40 postings ask for it.",
  "whyRu": "SQL — спрос №1 на этом рынке: его просят 31 из 40 вакансий.",
  "links": [
   {
    "t": "Query and modify data with Transact-SQL — Microsoft Learn",
    "u": "https://learn.microsoft.com/en-us/training/paths/get-started-querying-with-transact-sql/"
   }
  ]
 },
 "fin-p2": {
  "what": "Learn ONE planning platform, deep. A planning platform is a program for company money plans — budgets and forecasts the whole company uses. Do not learn three platforms a little. Learn one platform well.",
  "whatRu": "Выучите ОДНУ платформу планирования, глубоко. Платформа планирования — это программа для денежных планов компании: бюджетов и прогнозов, которыми пользуется вся компания. Не учите три платформы понемногу. Хорошо выучите одну.",
  "how": [
   "If your employer runs a platform, learn that one first",
   "Otherwise start with Anaplan, the most named platform in the postings",
   "Work through the vendor’s own model-builder training path",
   "Build a real money plan in the platform, not only test lessons",
   "Aim for the Certified Model Builder certificate in Anaplan"
  ],
  "howRu": [
   "Если у вашего работодателя есть платформа, сначала учите её",
   "Иначе начните с Anaplan — платформы, которую вакансии называют чаще всех",
   "Пройдите собственный учебный путь model builder от vendor",
   "Постройте в платформе настоящий денежный план, а не только тестовые уроки",
   "Цельтесь в сертификат Certified Model Builder в Anaplan"
  ],
  "why": "Postings name a planning platform in 16 of 40 cases; Anaplan is the most named at 15 of 40, and its Certified Model Builder certificate is a hard requirement in postings.",
  "whyRu": "Вакансии называют платформу планирования в 16 из 40 случаев; Anaplan называют чаще всех — 15 из 40, а его сертификат Certified Model Builder — жёсткое требование в вакансиях.",
  "links": [
   {
    "t": "Anaplan Academy Certification Programs",
    "u": "https://www.anaplan.com/academy/certification-programs/"
   }
  ]
 },
 "fin-p3": {
  "what": "Build two BI dashboards on real data. A BI dashboard is a screen of live charts that updates from data. Do not just look at dashboards other people built — build them yourself, on real data.",
  "whatRu": "Постройте два BI-дашборда на настоящих данных. BI-дашборд — это экран живых графиков, который обновляется из данных. Не просто смотрите на дашборды, которые построили другие, — стройте их сами, на настоящих данных.",
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
  "why": "A BI tool is named in 20 of 40 postings; Tableau gets 14 mentions and Power BI gets 9.",
  "whyRu": "BI-инструмент назван в 20 из 40 вакансий; Tableau получает 14 упоминаний, а Power BI — 9.",
  "links": [
   {
    "t": "Training for Power BI — Microsoft Learn",
    "u": "https://learn.microsoft.com/en-us/training/powerplatform/power-bi"
   }
  ]
 },
 "fin-p4": {
  "what": "Learn Python at analyst level. Python is a programming language. Know pandas — the Python tool for data tables. Then ship one real automation: a piece of work the computer now does for you, used in real work.",
  "whatRu": "Выучите Python на уровне аналитика. Python — это язык программирования. Знайте pandas — инструмент Python для таблиц данных. Потом доведите до работы одну настоящую автоматизацию: кусок работы, который теперь за вас делает компьютер, в настоящей работе.",
  "how": [
   "Learn Python basics: tables, files and simple scripts",
   "Learn pandas to clean and join data tables",
   "Pick one boring task from your own reports",
   "Automate it with Python and use it in real work",
   "Keep the code and the result — this is your proof piece"
  ],
  "howRu": [
   "Выучите основы Python: таблицы, файлы и простые скрипты",
   "Выучите pandas, чтобы чистить и соединять таблицы данных",
   "Выберите одну скучную задачу из ваших отчётов",
   "Автоматизируйте её на Python и используйте в настоящей работе",
   "Сохраните код и результат — это ваша работа-доказательство"
  ],
  "why": "Python appears in 16 of 40 postings.",
  "whyRu": "Python встречается в 16 из 40 вакансий.",
  "links": [
   {
    "t": "pandas: getting started tutorials",
    "u": "https://pandas.pydata.org/docs/getting_started/intro_tutorials/"
   }
  ]
 },
 "fin-p5": {
  "what": "Automate one repeating piece of your own reports. Write down the before and the after. Show hours per month and the error rate — how often the old way made mistakes. This one page of proof is what top postings screen for.",
  "whatRu": "Автоматизируйте один повторяющийся кусок своих отчётов. Запишите до и после. Покажите часы в месяц и долю ошибок — как часто старый способ ошибался. Эта одна страница доказательств — то, что проверяют топовые вакансии.",
  "how": [
   "Pick one repeating piece of your reporting pack",
   "Write down the before: hours per month and the error rate",
   "Automate that piece with Python, SQL or your existing tools",
   "Write down the after: hours per month and the error rate now",
   "Put before and after on one page and keep it for applications"
  ],
  "howRu": [
   "Выберите один повторяющийся кусок вашего пакета отчётов",
   "Запишите «до»: часы в месяц и долю ошибок",
   "Автоматизируйте этот кусок на Python, SQL или ваших текущих инструментах",
   "Запишите «после»: часы в месяц и долю ошибок теперь",
   "Соберите «до» и «после» на одной странице и держите её для подач"
  ],
  "why": "This one page of proof is what top postings screen for.",
  "whyRu": "Эта одна страница доказательств — то, что проверяют топовые вакансии.",
  "links": []
 },
 "fin-k1": {
  "what": "Own the forecast of one business unit, start to finish. A forecast is the money plan for the next months. Own it means: you build it, you update it, and other people rely on your numbers.",
  "whatRu": "Ведите прогноз одного бизнес-подразделения от начала до конца. Прогноз — это денежный план на следующие месяцы. Вести — значит: вы его строите, вы его обновляете, и другие люди полагаются на ваши числа.",
  "how": [
   "Volunteer for one small business unit’s forecast this quarter",
   "Build its forecast end to end: data in, numbers out",
   "Update it on the cycle — do not hand it back",
   "Present the forecast to the unit’s people yourself",
   "Keep proof that others used your forecast"
  ],
  "howRu": [
   "Вызовитесь вести прогноз одного малого подразделения в этом квартале",
   "Постройте его прогноз от начала до конца: данные внутрь, числа наружу",
   "Обновляйте его по циклу — не отдавайте обратно",
   "Сами показывайте прогноз людям подразделения",
   "Сохраните доказательство, что другие использовали ваш прогноз"
  ],
  "why": "Top postings say it in these words: “owned a forecast others relied on.”",
  "whyRu": "Топовые вакансии говорят этими словами: «owned a forecast others relied on» — вёл прогноз, на который полагались другие.",
  "links": [
   {
    "t": "FPAC certification (AFP)",
    "u": "https://fpacert.financialprofessionals.org/certification/what-is-fp-a"
   }
  ]
 },
 "fin-k2": {
  "what": "Apply sideways, to hybrid titles. Hybrid titles are FP&A analyst, BI analyst and finance analytics — jobs that mix finance and data. There, your proof piece does the competing. Do not apply to the plain “analyst” pool.",
  "whatRu": "Подавайтесь вбок, в гибридные названия. Гибридные названия — это FP&A analyst, BI analyst и finance analytics — работы, которые смешивают finance и data. Там конкурирует ваша работа-доказательство. Не подавайтесь в обычный пул «analyst».",
  "how": [
   "Search for FP&A analyst, BI analyst and finance analytics titles",
   "Lead each application with your proof piece — the automation page and the dashboards",
   "Match your SQL and platform skills to the words in the posting",
   "Skip plain “analyst” postings with no data or platform stack"
  ],
  "howRu": [
   "Ищите названия FP&A analyst, BI analyst и finance analytics",
   "Начинайте каждую подачу с вашей работы-доказательства — страницы автоматизации и дашбордов",
   "Сверяйте ваши навыки SQL и платформы со словами в вакансии",
   "Пропускайте обычные вакансии «analyst» без стека data или платформы"
  ],
  "why": "The plain “analyst” pool is shrinking: −21%.",
  "whyRu": "Обычный пул «analyst» сжимается: −21%.",
  "links": [
   {
    "t": "BLS — Financial Analysts (Occupational Outlook Handbook)",
    "u": "https://www.bls.gov/ooh/business-and-financial/financial-analysts.htm"
   }
  ]
 },
 "fin-k3": {
  "what": "In the new seat, become the unit’s person from day one. The unit’s person means: when that business unit needs its numbers, it comes to you. Go to their ops reviews — their regular work meetings. Own their forecast. Show their variance — variance means plan versus real numbers.",
  "whatRu": "На новом месте станьте человеком подразделения с первого дня. Человек подразделения — значит: когда этому подразделению нужны его числа, оно идёт к вам. Ходите на их ops reviews — их обычные рабочие встречи. Ведите их прогноз. Показывайте их variance — variance это план против настоящих чисел.",
  "how": [
   "In week one, ask to join the unit’s ops reviews",
   "Learn how the unit really works, not only its numbers",
   "Take ownership of the unit’s forecast",
   "Prepare and show the variance: plan versus real numbers",
   "Be in the room when the unit talks about its results"
  ],
  "howRu": [
   "На первой неделе попроситесь на ops reviews подразделения",
   "Выучите, как подразделение правда работает, а не только его числа",
   "Возьмите на себя прогноз подразделения",
   "Готовьте и показывайте variance: план против настоящих чисел",
   "Будьте в комнате, когда подразделение говорит о своих результатах"
  ],
  "why": "Top postings pay for the partner seat: a named person who owns a unit’s forecast and shows its variance in the room.",
  "whyRu": "Топовые вакансии платят за место партнёра: названного человека, который ведёт прогноз подразделения и показывает его variance в комнате.",
  "links": [
   {
    "t": "FPAC certification (AFP)",
    "u": "https://fpacert.financialprofessionals.org/certification/what-is-fp-a"
   }
  ]
 },
 "fin-k4": {
  "what": "Run your checklist again at month 12. Check every item with fresh eyes: degree, Excel, SQL, platform, dashboards, Python, proof piece. Think about the CFA again only if your target changed — the new target must be investing roles.",
  "whatRu": "Пройдите ваш чек-лист снова на месяц 12. Проверьте каждый пункт свежими глазами: степень, Excel, SQL, платформа, дашборды, Python, работа-доказательство. Думайте о CFA снова, только если ваша цель сменилась — новая цель должна быть инвестиционными ролями.",
  "how": [
   "At month 12, go through your checklist item by item",
   "Mark what is now done and what is still a gap",
   "Fix the biggest remaining gap next",
   "Ask the CFA question once more: is your target now investing roles?",
   "If not, leave the CFA parked and keep building the partner track"
  ],
  "howRu": [
   "На месяц 12 пройдите ваш чек-лист пункт за пунктом",
   "Отметьте, что теперь сделано, а что ещё пробел",
   "Следующим закройте самый большой оставшийся пробел",
   "Ещё раз задайте вопрос CFA: ваша цель теперь инвестиционные роли?",
   "Если нет, оставьте CFA на паузе и продолжайте строить путь партнёра"
  ],
  "why": "The CFA belongs to a different target: jobs require it in 0 of 40 FP&A postings.",
  "whyRu": "CFA относится к другой цели: работы требуют его в 0 из 40 вакансий FP&A.",
  "links": []
 }
});
Object.assign(STEP_DETAILS, {
 "ana-g1": {
  "what": "Bring your SQL to working level: write joins (connecting two or more tables), aggregations (totals and counts over groups) and window functions (calculations across a set of rows) without help. This is the floor skill. Every seat above it assumes you already have it.",
  "whatRu": "Доведите SQL до рабочего уровня: пишите соединения (связь двух и более таблиц), агрегации (итоги и подсчёты по группам) и оконные функции (вычисления по набору строк) без подсказок. Это базовый навык. Каждое место выше него считает, что он у вас уже есть.",
  "how": [
   "Take one table you know and write a query that joins it to a second table on a shared column",
   "Group the joined rows and aggregate them: count, sum and average per group",
   "Add one window function, for example a running total or a rank inside each group",
   "Rewrite the same three queries from memory until you can write them without hand-holding",
   "Save the queries — they are your first proof pieces"
  ],
  "howRu": [
   "Возьмите одну знакомую таблицу и напишите запрос, который соединяет её со второй таблицей по общему столбцу",
   "Сгруппируйте соединённые строки и посчитайте агрегации: количество, сумму и среднее по каждой группе",
   "Добавьте одну оконную функцию, например нарастающий итог или ранг внутри каждой группы",
   "Переписывайте те же три запроса по памяти, пока не сможете писать их без подсказок",
   "Сохраните запросы — это ваши первые доказательства"
  ],
  "why": "SQL is named in 43 of 46 postings we opened — it is the floor of every seat on this map.",
  "whyRu": "SQL назван в 43 из 46 вакансий, которые мы открыли, — это пол каждого места на этой карте.",
  "links": [
   {
    "t": "Microsoft Learn: Query and modify data with Transact-SQL",
    "u": "https://learn.microsoft.com/en-us/training/paths/get-started-querying-with-transact-sql/"
   }
  ]
 },
 "ana-g2": {
  "what": "Learn one BI tool deeply — Tableau or Power BI, not both at once. A BI tool turns data into charts and dashboards. Learn the one tool well enough to connect data, clean it, build charts and present a full dashboard in it.",
  "whatRu": "Выучите один BI-инструмент глубоко — Tableau или Power BI, не оба сразу. BI-инструмент превращает данные в графики и дашборды. Выучите один инструмент так, чтобы подключать данные, чистить их, строить графики и презентовать в нём полный дашборд.",
  "how": [
   "Pick one tool — Tableau or Power BI — the one your target postings name most",
   "Connect the tool to a data table and build the basic charts: bar, line and a table of key numbers",
   "Clean and model the data inside the tool before you chart it",
   "Build one full dashboard from those charts",
   "Present the dashboard out loud once, as if to a manager"
  ],
  "howRu": [
   "Выберите один инструмент — Tableau или Power BI — тот, который ваши целевые вакансии называют чаще",
   "Подключите инструмент к таблице данных и постройте базовые графики: столбцы, линию и таблицу ключевых чисел",
   "Почистите и смоделируйте данные внутри инструмента, прежде чем строить графики",
   "Соберите из этих графиков один полный дашборд",
   "Один раз презентуйте дашборд вслух, как будто менеджеру"
  ],
  "why": "A BI tool is named in 27 of 46 postings; reporting seats live in the BI tool, and decision seats present in it.",
  "whyRu": "BI-инструмент назван в 27 из 46 вакансий; места reporting живут в BI-инструменте, а места решений в нём презентуют.",
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
  "what": "Pick your seat on purpose instead of applying to the word “analyst”. This map has six seats, and they post very different pay for the same word. Write down which seat your skills point at today. That one line decides what you learn next.",
  "whatRu": "Выберите своё место осознанно, а не подавайтесь на слово «analyst». На этой карте шесть мест, и они публикуют очень разные деньги за одно и то же слово. Запишите, на какое место указывают ваши навыки сегодня. Эта одна строка решает, что вы учите дальше.",
  "how": [
   "List the six seats on this map: business analyst (documents), reporting data analyst, product analyst, analytics engineer, strategy & operations, data scientist",
   "Next to each seat, write the main thing it is paid to produce: a document, a dashboard, a decision or a data model",
   "Mark the seat your current skills honestly point at today",
   "Mark the seat you want next — it can be a different seat",
   "Keep the written line where you will see it when you apply"
  ],
  "howRu": [
   "Выпишите шесть мест этой карты: business analyst (документы), reporting data analyst, product analyst, analytics engineer, strategy & operations, data scientist",
   "Рядом с каждым местом напишите главное, за что ему платят: документ, дашборд, решение или модель данных",
   "Отметьте место, на которое ваши навыки честно указывают сегодня",
   "Отметьте место, которое хотите следующим, — это может быть другое место",
   "Держите записанную строку там, где увидите её при подаче"
  ],
  "why": "The six seats on this map post $51K to $300K for the same word “analyst”.",
  "whyRu": "Шесть мест на этой карте публикуют от $51K до $300K за одно и то же слово «analyst».",
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
  "what": "Use the AI tools with your hands, on real analysis — Copilot, ChatGPT and Claude. Not on toy tasks: give the tool a real question from your work, let it draft, and check what it gives you.",
  "whatRu": "Используйте AI-инструменты руками, на настоящем анализе, — Copilot, ChatGPT и Claude. Не на игрушечных задачах: дайте инструменту настоящий вопрос из вашей работы, пусть сделает черновик, и проверьте, что он дал.",
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
   "Повторите со вторым инструментом, чтобы знать больше одного"
  ],
  "why": "A named AI tool is a requirement in 6 of 46 postings — the newest line on the screen, and it is spreading.",
  "whyRu": "Названный AI-инструмент — требование в 6 из 46 вакансий. Это самая новая строка экрана, и она распространяется.",
  "links": [
   {
    "t": "Microsoft Learn: Microsoft 365 Copilot hub",
    "u": "https://learn.microsoft.com/en-us/copilot/microsoft-365/"
   }
  ]
 },
 "ana-p1": {
  "what": "Build one dashboard that answers a decision, not a dashboard that answers a request. Start from the choice a person has to make, build only what that choice needs, and write down who opened it and what they decided.",
  "whatRu": "Постройте один дашборд, который отвечает на решение, а не дашборд, который отвечает на запрос. Начните с выбора, который человеку нужно сделать, постройте только то, что нужно этому выбору, и запишите, кто его открыл и что решил.",
  "how": [
   "Name the decision first, in one sentence: who decides what, and when",
   "Name the person who will open the dashboard — a dashboard needs an owner with a decision",
   "Build only the charts that answer that decision",
   "Show it to that person and watch them use it",
   "Write down who opened it and what they decided — keep that note as the proof"
  ],
  "howRu": [
   "Сначала назовите решение одной фразой: кто решает что и когда",
   "Назовите человека, который будет открывать дашборд, — дашборду нужен владелец с решением",
   "Постройте только те графики, которые отвечают на это решение",
   "Покажите его этому человеку и посмотрите, как он им пользуется",
   "Запишите, кто его открыл и что решил, — сохраните эту запись как доказательство"
  ],
  "why": "A dashboard nobody opens is a failed project — the reporting seat is judged by whether anyone opens its output.",
  "whyRu": "Дашборд, который никто не открывает, — провальный проект: место reporting судят по тому, открывает ли кто-то его результат.",
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
  "what": "Learn data modeling with dbt. Data modeling means turning raw tables into clean tables that other people can trust. dbt is the tool that builds those clean data tables from raw data.",
  "whatRu": "Выучите моделирование данных с dbt. Моделирование данных — это превращение сырых таблиц в чистые таблицы, которым другие люди могут доверять. dbt — инструмент, который строит эти чистые таблицы данных из сырых данных.",
  "how": [
   "Open the dbt docs and read what a model is: one SQL select that becomes one clean table",
   "Build one model from a raw table you know",
   "Add a simple test to the model, for example checking that a column is never empty",
   "Run the model and check the clean table it produced",
   "Write one line on what the clean table is for — models are read by people and by AI"
  ],
  "howRu": [
   "Откройте документацию dbt и прочитайте, что такое модель: один SQL-запрос, который становится одной чистой таблицей",
   "Постройте одну модель из сырой таблицы, которую вы знаете",
   "Добавьте модели простой тест, например проверку, что столбец никогда не пустой",
   "Запустите модель и проверьте чистую таблицу, которую она сделала",
   "Напишите одной строкой, для чего нужна эта чистая таблица, — модели читают люди и AI"
  ],
  "why": "dbt is named in 7 of 7 analytics-engineer postings; the models are the layer every AI answer is read from.",
  "whyRu": "dbt назван в 7 из 7 вакансий analytics engineer; модели — это слой, из которого читается каждый ответ AI.",
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
  "what": "Learn Python for analysis — the programming language analysts use when a spreadsheet or a BI tool is not enough. Learn it on data tasks: reading a table, cleaning it, grouping it and charting it.",
  "whatRu": "Выучите Python для анализа — язык программирования, который аналитики используют, когда таблицы или BI-инструмента не хватает. Учите его на задачах с данными: прочитать таблицу, почистить её, сгруппировать и построить график.",
  "how": [
   "Work through the start of the official Python tutorial, so the basic words of the language are familiar",
   "Open a data table with pandas — the Python tool for working with tables",
   "Clean the table: drop empty rows and fix the column names",
   "Group the table and calculate totals, like you would in SQL",
   "Make one chart from the grouped table"
  ],
  "howRu": [
   "Пройдите начало официального учебника Python, чтобы базовые слова языка стали знакомыми",
   "Откройте таблицу данных с помощью pandas — инструмента Python для работы с таблицами",
   "Почистите таблицу: уберите пустые строки и поправьте названия столбцов",
   "Сгруппируйте таблицу и посчитайте итоги, как вы делали бы в SQL",
   "Постройте один график по сгруппированной таблице"
  ],
  "why": "Python is named in 18 of 46 postings, and in 9 of 9 data-analyst postings in some form.",
  "whyRu": "Python назван в 18 из 46 вакансий, а в вакансиях data analyst — в 9 из 9, в той или иной форме.",
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
  "what": "Run one experiment from start to finish. An experiment is a fair test: one group gets the change, one group does not, and one number — the metric, the number a team watches — says which is better. Or define one metric yourself and defend it: say why this number, and not another.",
  "whatRu": "Проведите один эксперимент от начала до конца. Эксперимент — это честный тест: одна группа получает изменение, другая — нет, и одно число — метрика, число, за которым следит команда, — говорит, что лучше. Или определите одну метрику сами и защитите её: скажите, почему это число, а не другое.",
  "how": [
   "Write the question in one sentence: what change might move which number",
   "Choose the one metric the test will be judged by",
   "Split the audience, or the time, into two groups: with the change and without it",
   "Run the test and collect the metric for both groups",
   "Write the result and your call: keep the change or drop it — and why"
  ],
  "howRu": [
   "Запишите вопрос одной фразой: какое изменение может сдвинуть какое число",
   "Выберите одну метрику, по которой будут судить тест",
   "Разделите аудиторию или время на две группы: с изменением и без него",
   "Запустите тест и соберите метрику по обеим группам",
   "Запишите результат и ваше решение: оставить изменение или убрать — и почему"
  ],
  "why": "Experimentation is named in 4 of 4 product-analyst postings; a metric you own is proof you can hold a decision.",
  "whyRu": "Эксперименты названы в 4 из 4 вакансий product analyst; метрика, которой вы владеете, — доказательство, что вы можете держать решение.",
  "links": [
   {
    "t": "General guidance on conducting A/B experiments — Google Cloud",
    "u": "https://docs.cloud.google.com/retail/docs/a-b-testing"
   }
  ]
 },
 "ana-p5": {
  "what": "Automate one recurring report you own — a report you now rebuild by hand again and again. Set it up so it refreshes and runs itself, and write down the hours you saved.",
  "whatRu": "Автоматизируйте один повторяющийся отчёт, которым вы владеете, — отчёт, который вы сейчас пересобираете руками снова и снова. Настройте его так, чтобы он обновлялся и работал сам, и запишите сэкономленные часы.",
  "how": [
   "Pick the report you rebuild by hand most often",
   "Write down how long one manual rebuild takes you",
   "Connect the report to its data source, so the numbers refresh instead of being pasted in",
   "Set the refresh to run on a schedule",
   "Run it once, check the numbers match your last manual version, and write down the hours saved"
  ],
  "howRu": [
   "Выберите отчёт, который вы пересобираете руками чаще всего",
   "Запишите, сколько времени занимает одна ручная пересборка",
   "Подключите отчёт к его источнику данных, чтобы числа обновлялись, а не вставлялись вручную",
   "Поставьте обновление на расписание",
   "Запустите один раз, проверьте, что числа совпали с вашей последней ручной версией, и запишите сэкономленные часы"
  ],
  "why": "The AI-naming postings ask for exactly this pattern: a report that used to be rebuilt by hand now runs itself.",
  "whyRu": "Вакансии, называющие AI, просят ровно этот паттерн: отчёт, который пересобирали руками, теперь работает сам.",
  "links": [
   {
    "t": "Microsoft Learn: Training for Power BI",
    "u": "https://learn.microsoft.com/en-us/training/powerplatform/power-bi"
   }
  ]
 },
 "ana-k1": {
  "what": "Apply to decision seats by name: product analyst, analytics engineer, strategy & operations. Search and apply under those exact titles, not under the plain word “analyst”.",
  "whatRu": "Подавайтесь на места решений по именам: product analyst, analytics engineer, strategy & operations. Ищите и подавайтесь под этими точными названиями, а не под обычным словом «analyst».",
  "how": [
   "Rewrite your search terms: use the seat names, not just “analyst”",
   "For each posting, read the body and check for the seat’s real work: decisions, experiments or data models",
   "Skip postings whose core product is a document or a dashboard on request",
   "Open your application with the seat you picked in the gate step",
   "Track which seat each application goes to"
  ],
  "howRu": [
   "Перепишите поисковые запросы: используйте имена мест, а не только «analyst»",
   "В каждой вакансии читайте текст и проверяйте настоящую работу места: решения, эксперименты или модели данных",
   "Пропускайте вакансии, где главный продукт — документ или дашборд по запросу",
   "Открывайте заявку местом, которое вы выбрали на шаге ворот",
   "Отмечайте, на какое место уходит каждая заявка"
  ],
  "why": "The plain “analyst” pool is where 1,108 applications landed on one junior seat.",
  "whyRu": "Обычный пул «analyst» — это куда упали 1,108 заявок на одно место junior.",
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
  "what": "In interviews, lead with a decision you changed, not with a dashboard you built. A stakeholder is a person whose decision your work feeds. Tell the decision story first: what was at stake, what your work showed, and what they decided.",
  "whatRu": "На собеседованиях ведите с решения, которое вы изменили, а не с дашборда, который вы построили. Стейкхолдер — человек, чьё решение питает ваша работа. Сначала расскажите историю решения: что стояло на кону, что показала ваша работа и что решили.",
  "how": [
   "Pick one decision your work changed",
   "Write the story in three lines: the situation, what your analysis showed, what was decided",
   "Open the interview answer with that story, not with a tool name",
   "Keep the dashboard as the supporting detail, not the headline",
   "Prepare a second decision story the same way"
  ],
  "howRu": [
   "Выберите одно решение, которое изменила ваша работа",
   "Запишите историю в три строки: ситуация, что показал ваш анализ, что решили",
   "Открывайте ответ на собеседовании этой историей, а не названием инструмента",
   "Держите дашборд как поддерживающую деталь, а не как заголовок",
   "Подготовьте вторую историю решения таким же способом"
  ],
  "why": "Stakeholder work is the stated core duty in all 7 strategy & operations postings.",
  "whyRu": "Работа со стейкхолдерами — заявленная главная обязанность во всех 7 вакансиях strategy & operations.",
  "links": [
   {
    "t": "BLS Occupational Outlook: Management Analysts",
    "u": "https://www.bls.gov/ooh/business-and-financial/management-analysts.htm"
   }
  ]
 },
 "ana-k3": {
  "what": "Show the AI workflow: one analysis where AI made the draft and you verified it. Show the verification — the checks you ran — not just the draft.",
  "whatRu": "Покажите процесс с AI: один анализ, где AI сделал черновик, а вы проверили. Покажите проверку — проверки, которые вы провели, — а не только черновик.",
  "how": [
   "Take the analysis from the gate step where AI drafted and you checked",
   "Keep both versions: the AI draft and your checked final version",
   "Write down each check you ran on the draft, in plain words",
   "Mark one error the AI made and how your check caught it",
   "Present it in that order: draft, checks, final"
  ],
  "howRu": [
   "Возьмите анализ с шага ворот, где AI сделал черновик, а вы проверили",
   "Сохраните обе версии: черновик AI и вашу проверенную финальную версию",
   "Запишите каждую проверку черновика простыми словами",
   "Отметьте одну ошибку AI и то, как ваша проверка её поймала",
   "Покажите в этом порядке: черновик, проверки, финал"
  ],
  "why": "The 6 postings that name AI tools ask for this proof — in their words: “to build something real”.",
  "whyRu": "6 вакансий, называющих AI-инструменты, просят ровно это доказательство. Их словами: «to build something real».",
  "links": [
   {
    "t": "Microsoft Learn: Microsoft 365 Copilot hub",
    "u": "https://learn.microsoft.com/en-us/copilot/microsoft-365/"
   }
  ]
 },
 "ana-k4": {
  "what": "Price yourself from the scan, not from feelings. Find your seat’s posted band and ask inside it. If your seat’s band is flat, the seat is the problem, not your negotiation — change seats.",
  "whatRu": "Оценивайте себя по скану, а не по ощущениям. Найдите опубликованную вилку вашего места и просите внутри неё. Если вилка вашего места плоская, проблема — место, а не ваши переговоры: меняйте место.",
  "how": [
   "Find your seat in the three bands in the “why” line below",
   "Write down the band for your seat and your place inside it",
   "Compare any offer against that band, not against your current pay",
   "If the band is flat, go back to the seat step and pick the seat you move to next"
  ],
  "howRu": [
   "Найдите своё место в трёх вилках из строки «почему» ниже",
   "Запишите вилку вашего места и ваше место внутри неё",
   "Сравнивайте любое предложение с этой вилкой, а не с вашей текущей зарплатой",
   "Если вилка плоская, вернитесь к шагу выбора места и выберите место, куда двигаетесь дальше"
  ],
  "why": "Reporting seats post $60K–$95K; product seats post $106K–$168K; analytics engineering posts $130K–$244K at senior and staff level.",
  "whyRu": "Места reporting публикуют $60K–$95K; места product — $106K–$168K; analytics engineering — $130K–$244K на уровне senior и staff.",
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
  "what": "Re-run this checklist every quarter — every three months — against fresh postings. Open new postings for your seat, count the named tools again, and update your plan from what moved.",
  "whatRu": "Перепроверяйте этот чек-лист каждый квартал — каждые три месяца — по свежим вакансиям. Открывайте новые вакансии вашего места, снова считайте названные инструменты и обновляйте план по тому, что сдвинулось.",
  "how": [
   "Set a date three months from now",
   "Open a fresh set of postings for your seat",
   "Count again: SQL, your BI tool, Python, dbt and any named AI tool",
   "Compare the new counts with the counts on this page",
   "Update your next learning step from what moved"
  ],
  "howRu": [
   "Поставьте дату через три месяца от сегодня",
   "Откройте свежий набор вакансий вашего места",
   "Посчитайте снова: SQL, ваш BI-инструмент, Python, dbt и любой названный AI-инструмент",
   "Сравните новые числа с числами на этой странице",
   "Обновите ваш следующий шаг учёбы по тому, что сдвинулось"
  ],
  "why": "The AI-tool line moved from absent to 6 of 46 inside one scan window — your seat’s screen now moves that fast.",
  "whyRu": "Строка AI-инструментов прошла от отсутствия до 6 из 46 внутри одного окна скана — экран вашего места теперь движется так быстро.",
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
  "what": "Bring your SQL to working level: write joins (connecting two or more tables), aggregations (totals and counts over groups) and window functions (calculations across a set of rows) without help. This is the floor skill. Every seat above it assumes you already have it.",
  "whatRu": "Доведите SQL до рабочего уровня: пишите соединения (связь двух и более таблиц), агрегации (итоги и подсчёты по группам) и оконные функции (вычисления по набору строк) без подсказок. Это базовый навык. Каждое место выше него считает, что он у вас уже есть.",
  "how": [
   "Take one table you know and write a query that joins it to a second table on a shared column",
   "Group the joined rows and aggregate them: count, sum and average per group",
   "Add one window function, for example a running total or a rank inside each group",
   "Rewrite the same three queries from memory until you can write them without hand-holding",
   "Save the queries — they are your first proof pieces"
  ],
  "howRu": [
   "Возьмите одну знакомую таблицу и напишите запрос, который соединяет её со второй таблицей по общему столбцу",
   "Сгруппируйте соединённые строки и посчитайте агрегации: количество, сумму и среднее по каждой группе",
   "Добавьте одну оконную функцию, например нарастающий итог или ранг внутри каждой группы",
   "Переписывайте те же три запроса по памяти, пока не сможете писать их без подсказок",
   "Сохраните запросы — это ваши первые доказательства"
  ],
  "why": "SQL is named in 24 of 24 data-side postings we opened — it is the floor of every seat on this map.",
  "whyRu": "SQL назван в 24 из 24 вакансий стороны данных, которые мы открыли, — это пол каждого места на этой карте.",
  "links": [
   {
    "t": "Microsoft Learn: Query and modify data with Transact-SQL",
    "u": "https://learn.microsoft.com/en-us/training/paths/get-started-querying-with-transact-sql/"
   }
  ]
 },
 "dan-g2": {
  "what": "Learn one BI tool deeply — Tableau or Power BI, not both at once. A BI tool turns data into charts and dashboards. Learn the one tool well enough to connect data, clean it, build charts and present a full dashboard in it.",
  "whatRu": "Выучите один BI-инструмент глубоко — Tableau или Power BI, не оба сразу. BI-инструмент превращает данные в графики и дашборды. Выучите один инструмент так, чтобы подключать данные, чистить их, строить графики и презентовать в нём полный дашборд.",
  "how": [
   "Pick one tool — Tableau or Power BI — the one your target postings name most",
   "Connect the tool to a data table and build the basic charts: bar, line and a table of key numbers",
   "Clean and model the data inside the tool before you chart it",
   "Build one full dashboard from those charts",
   "Present the dashboard out loud once, as if to a manager"
  ],
  "howRu": [
   "Выберите один инструмент — Tableau или Power BI — тот, который ваши целевые вакансии называют чаще",
   "Подключите инструмент к таблице данных и постройте базовые графики: столбцы, линию и таблицу ключевых чисел",
   "Почистите и смоделируйте данные внутри инструмента, прежде чем строить графики",
   "Соберите из этих графиков один полный дашборд",
   "Один раз презентуйте дашборд вслух, как будто менеджеру"
  ],
  "why": "A BI tool is named or required in 18 of 24 data-side postings, and in 9 of 9 data-analyst postings.",
  "whyRu": "BI-инструмент назван или требуется в 18 из 24 вакансий стороны данных, а в вакансиях data analyst — в 9 из 9.",
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
  "what": "Pick your seat on purpose instead of applying to overlapping titles. This map has four seats, and they post very different pay for titles that sound alike. Write down which seat your skills point at today. That one line decides what you learn next.",
  "whatRu": "Выберите своё место осознанно, а не подавайтесь на пересекающиеся названия. На этой карте четыре места, и они публикуют очень разные деньги за похожие названия. Запишите, на какое место указывают ваши навыки сегодня. Эта одна строка решает, что вы учите дальше.",
  "how": [
   "List the four seats on this map: reporting data analyst, product analyst, analytics engineer, data scientist",
   "Next to each seat, write the main thing it is paid to produce: a dashboard, a decision or a data model",
   "Mark the seat your current skills honestly point at today",
   "Mark the seat you want next — it can be a different seat",
   "Keep the written line where you will see it when you apply"
  ],
  "howRu": [
   "Выпишите четыре места этой карты: reporting data analyst, product analyst, analytics engineer, data scientist",
   "Рядом с каждым местом напишите главное, за что ему платят: дашборд, решение или модель данных",
   "Отметьте место, на которое ваши навыки честно указывают сегодня",
   "Отметьте место, которое хотите следующим, — это может быть другое место",
   "Держите записанную строку там, где увидите её при подаче"
  ],
  "why": "The four seats on this map post $60K to $300K for overlapping titles.",
  "whyRu": "Четыре места на этой карте публикуют от $60K до $300K за пересекающиеся названия.",
  "links": [
   {
    "t": "BLS Occupational Outlook: Data Scientists",
    "u": "https://www.bls.gov/ooh/math/data-scientists.htm"
   }
  ]
 },
 "dan-g4": {
  "what": "Use the AI tools with your hands, on real analysis — Copilot, ChatGPT and Claude. Not on toy tasks: give the tool a real question from your work, let it draft, and check what it gives you.",
  "whatRu": "Используйте AI-инструменты руками, на настоящем анализе, — Copilot, ChatGPT и Claude. Не на игрушечных задачах: дайте инструменту настоящий вопрос из вашей работы, пусть сделает черновик, и проверьте, что он дал.",
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
   "Повторите со вторым инструментом, чтобы знать больше одного"
  ],
  "why": "Two of 24 data-side postings already name an AI tool as a requirement or a duty — one asks for them “to build something real”.",
  "whyRu": "Две из 24 вакансий стороны данных уже называют AI-инструмент требованием или обязанностью. Одна просит их словами «to build something real».",
  "links": [
   {
    "t": "Microsoft Learn: Microsoft 365 Copilot hub",
    "u": "https://learn.microsoft.com/en-us/copilot/microsoft-365/"
   }
  ]
 },
 "dan-p1": {
  "what": "Build one dashboard that answers a decision, not a dashboard that answers a request. Start from the choice a person has to make, build only what that choice needs, and write down who opened it and what they decided.",
  "whatRu": "Постройте один дашборд, который отвечает на решение, а не дашборд, который отвечает на запрос. Начните с выбора, который человеку нужно сделать, постройте только то, что нужно этому выбору, и запишите, кто его открыл и что решил.",
  "how": [
   "Name the decision first, in one sentence: who decides what, and when",
   "Name the person who will open the dashboard — a dashboard needs an owner with a decision",
   "Build only the charts that answer that decision",
   "Show it to that person and watch them use it",
   "Write down who opened it and what they decided — keep that note as the proof"
  ],
  "howRu": [
   "Сначала назовите решение одной фразой: кто решает что и когда",
   "Назовите человека, который будет открывать дашборд, — дашборду нужен владелец с решением",
   "Постройте только те графики, которые отвечают на это решение",
   "Покажите его этому человеку и посмотрите, как он им пользуется",
   "Запишите, кто его открыл и что решил, — сохраните эту запись как доказательство"
  ],
  "why": "A dashboard nobody opens is a failed project — the reporting seat is judged by whether anyone opens its output.",
  "whyRu": "Дашборд, который никто не открывает, — провальный проект: место reporting судят по тому, открывает ли кто-то его результат.",
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
  "what": "Learn data modeling with dbt. Data modeling means turning raw tables into clean tables that other people can trust. dbt is the tool that builds those clean data tables from raw data.",
  "whatRu": "Выучите моделирование данных с dbt. Моделирование данных — это превращение сырых таблиц в чистые таблицы, которым другие люди могут доверять. dbt — инструмент, который строит эти чистые таблицы данных из сырых данных.",
  "how": [
   "Open the dbt docs and read what a model is: one SQL select that becomes one clean table",
   "Build one model from a raw table you know",
   "Add a simple test to the model, for example checking that a column is never empty",
   "Run the model and check the clean table it produced",
   "Write one line on what the clean table is for — models are read by people and by AI"
  ],
  "howRu": [
   "Откройте документацию dbt и прочитайте, что такое модель: один SQL-запрос, который становится одной чистой таблицей",
   "Постройте одну модель из сырой таблицы, которую вы знаете",
   "Добавьте модели простой тест, например проверку, что столбец никогда не пустой",
   "Запустите модель и проверьте чистую таблицу, которую она сделала",
   "Напишите одной строкой, для чего нужна эта чистая таблица, — модели читают люди и AI"
  ],
  "why": "dbt is named in 7 of 7 analytics-engineer postings; the models are the layer every AI answer is read from.",
  "whyRu": "dbt назван в 7 из 7 вакансий analytics engineer; модели — это слой, из которого читается каждый ответ AI.",
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
  "what": "Get one cloud warehouse into your hands — Snowflake first. A warehouse is the database where the company’s data lives in the cloud. Open it, find data there, and run your SQL inside it, not only on your own computer.",
  "whatRu": "Возьмите в руки один облачный склад данных — сначала Snowflake. Склад — это база, где данные компании живут в облаке. Откройте его, найдите там данные и запускайте ваш SQL внутри него, а не только на своём компьютере.",
  "how": [
   "Read Snowflake’s own page on warehouses: a warehouse is the computing power that runs your queries",
   "Open Snowflake and run one of your known SQL queries there",
   "Find one table and join it to a second table inside the warehouse",
   "Note how the warehouse is named in the postings you target",
   "Save one query you ran in the warehouse as proof"
  ],
  "howRu": [
   "Прочитайте собственную страницу Snowflake о складах: склад — это вычислительная мощность, которая запускает ваши запросы",
   "Откройте Snowflake и запустите там один из ваших знакомых SQL-запросов",
   "Найдите одну таблицу и соедините её со второй таблицей внутри склада",
   "Отметьте, как склад назван в вакансиях, на которые вы целитесь",
   "Сохраните один запрос, который вы запустили в складе, как доказательство"
  ],
  "why": "A warehouse is named in 12 of 24 data-side postings, and in 7 of 7 analytics-engineer postings.",
  "whyRu": "Склад назван в 12 из 24 вакансий стороны данных, а в вакансиях analytics engineer — в 7 из 7.",
  "links": [
   {
    "t": "Snowflake Docs: Virtual warehouses",
    "u": "https://docs.snowflake.com/en/user-guide/warehouses"
   }
  ]
 },
 "dan-p4": {
  "what": "Learn Python for analysis — the programming language analysts use when a spreadsheet or a BI tool is not enough. Learn it on data tasks: reading a table, cleaning it, grouping it and charting it.",
  "whatRu": "Выучите Python для анализа — язык программирования, который аналитики используют, когда таблицы или BI-инструмента не хватает. Учите его на задачах с данными: прочитать таблицу, почистить её, сгруппировать и построить график.",
  "how": [
   "Work through the start of the official Python tutorial, so the basic words of the language are familiar",
   "Open a data table with pandas — the Python tool for working with tables",
   "Clean the table: drop empty rows and fix the column names",
   "Group the table and calculate totals, like you would in SQL",
   "Make one chart from the grouped table"
  ],
  "howRu": [
   "Пройдите начало официального учебника Python, чтобы базовые слова языка стали знакомыми",
   "Откройте таблицу данных с помощью pandas — инструмента Python для работы с таблицами",
   "Почистите таблицу: уберите пустые строки и поправьте названия столбцов",
   "Сгруппируйте таблицу и посчитайте итоги, как вы делали бы в SQL",
   "Постройте один график по сгруппированной таблице"
  ],
  "why": "Python is named in 15 of 24 data-side postings, and in 9 of 9 data-analyst postings in some form.",
  "whyRu": "Python назван в 15 из 24 вакансий стороны данных, а в вакансиях data analyst — в 9 из 9, в той или иной форме.",
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
  "what": "Run one experiment from start to finish. An experiment is a fair test: one group gets the change, one group does not, and one number — the metric, the number a team watches — says which is better. Or define one metric yourself and defend it: say why this number, and not another.",
  "whatRu": "Проведите один эксперимент от начала до конца. Эксперимент — это честный тест: одна группа получает изменение, другая — нет, и одно число — метрика, число, за которым следит команда, — говорит, что лучше. Или определите одну метрику сами и защитите её: скажите, почему это число, а не другое.",
  "how": [
   "Write the question in one sentence: what change might move which number",
   "Choose the one metric the test will be judged by",
   "Split the audience, or the time, into two groups: with the change and without it",
   "Run the test and collect the metric for both groups",
   "Write the result and your call: keep the change or drop it — and why"
  ],
  "howRu": [
   "Запишите вопрос одной фразой: какое изменение может сдвинуть какое число",
   "Выберите одну метрику, по которой будут судить тест",
   "Разделите аудиторию или время на две группы: с изменением и без него",
   "Запустите тест и соберите метрику по обеим группам",
   "Запишите результат и ваше решение: оставить изменение или убрать — и почему"
  ],
  "why": "Experimentation is named in 4 of 4 product-analyst postings; a metric you own is proof you can hold a decision.",
  "whyRu": "Эксперименты названы в 4 из 4 вакансий product analyst; метрика, которой вы владеете, — доказательство, что вы можете держать решение.",
  "links": [
   {
    "t": "General guidance on conducting A/B experiments — Google Cloud",
    "u": "https://docs.cloud.google.com/retail/docs/a-b-testing"
   }
  ]
 },
 "dan-p6": {
  "what": "Automate one recurring report you own — a report you now rebuild by hand again and again. Set it up so it refreshes and runs itself, and write down the hours you saved.",
  "whatRu": "Автоматизируйте один повторяющийся отчёт, которым вы владеете, — отчёт, который вы сейчас пересобираете руками снова и снова. Настройте его так, чтобы он обновлялся и работал сам, и запишите сэкономленные часы.",
  "how": [
   "Pick the report you rebuild by hand most often",
   "Write down how long one manual rebuild takes you",
   "Connect the report to its data source, so the numbers refresh instead of being pasted in",
   "Set the refresh to run on a schedule",
   "Run it once, check the numbers match your last manual version, and write down the hours saved"
  ],
  "howRu": [
   "Выберите отчёт, который вы пересобираете руками чаще всего",
   "Запишите, сколько времени занимает одна ручная пересборка",
   "Подключите отчёт к его источнику данных, чтобы числа обновлялись, а не вставлялись вручную",
   "Поставьте обновление на расписание",
   "Запустите один раз, проверьте, что числа совпали с вашей последней ручной версией, и запишите сэкономленные часы"
  ],
  "why": "The AI-naming postings ask for exactly this pattern: a report that used to be rebuilt by hand now runs itself.",
  "whyRu": "Вакансии, называющие AI, просят ровно этот паттерн: отчёт, который пересобирали руками, теперь работает сам.",
  "links": [
   {
    "t": "Microsoft Learn: Training for Power BI",
    "u": "https://learn.microsoft.com/en-us/training/powerplatform/power-bi"
   }
  ]
 },
 "dan-k1": {
  "what": "Apply to decision seats by name: product analyst, analytics engineer. Search and apply under those exact titles, not under the plain words “data analyst”.",
  "whatRu": "Подавайтесь на места решений по именам: product analyst, analytics engineer. Ищите и подавайтесь под этими точными названиями, а не под обычными словами «data analyst».",
  "how": [
   "Rewrite your search terms: use the seat names, not just “data analyst”",
   "For each posting, read the body and check for the seat’s real work: decisions, experiments or data models",
   "Skip postings whose core product is a dashboard or a report on request",
   "Open your application with the seat you picked in the gate step",
   "Track which seat each application goes to"
  ],
  "howRu": [
   "Перепишите поисковые запросы: используйте имена мест, а не только «data analyst»",
   "В каждой вакансии читайте текст и проверяйте настоящую работу места: решения, эксперименты или модели данных",
   "Пропускайте вакансии, где главный продукт — дашборд или отчёт по запросу",
   "Открывайте заявку местом, которое вы выбрали на шаге ворот",
   "Отмечайте, на какое место уходит каждая заявка"
  ],
  "why": "The plain “data analyst” pool is where 1,108 applications landed on one junior seat.",
  "whyRu": "Обычный пул «data analyst» — это куда упали 1,108 заявок на одно место junior.",
  "links": [
   {
    "t": "BLS Occupational Outlook: Data Scientists",
    "u": "https://www.bls.gov/ooh/math/data-scientists.htm"
   }
  ]
 },
 "dan-k2": {
  "what": "Show the AI workflow: one analysis where AI made the draft and you verified it. Show the verification — the checks you ran — not just the draft.",
  "whatRu": "Покажите процесс с AI: один анализ, где AI сделал черновик, а вы проверили. Покажите проверку — проверки, которые вы провели, — а не только черновик.",
  "how": [
   "Take the analysis from the gate step where AI drafted and you checked",
   "Keep both versions: the AI draft and your checked final version",
   "Write down each check you ran on the draft, in plain words",
   "Mark one error the AI made and how your check caught it",
   "Present it in that order: draft, checks, final"
  ],
  "howRu": [
   "Возьмите анализ с шага ворот, где AI сделал черновик, а вы проверили",
   "Сохраните обе версии: черновик AI и вашу проверенную финальную версию",
   "Запишите каждую проверку черновика простыми словами",
   "Отметьте одну ошибку AI и то, как ваша проверка её поймала",
   "Покажите в этом порядке: черновик, проверки, финал"
  ],
  "why": "The postings that name AI tools ask for this proof — in their words: “to build something real”.",
  "whyRu": "Вакансии, называющие AI-инструменты, просят ровно это доказательство. Их словами: «to build something real».",
  "links": [
   {
    "t": "Microsoft Learn: Microsoft 365 Copilot hub",
    "u": "https://learn.microsoft.com/en-us/copilot/microsoft-365/"
   }
  ]
 },
 "dan-k3": {
  "what": "Price yourself from the scan, not from feelings. Find your seat’s posted band and ask inside it. If your seat’s band is flat, the seat is the problem, not your negotiation — change seats.",
  "whatRu": "Оценивайте себя по скану, а не по ощущениям. Найдите опубликованную вилку вашего места и просите внутри неё. Если вилка вашего места плоская, проблема — место, а не ваши переговоры: меняйте место.",
  "how": [
   "Find your seat in the three bands in the “why” line below",
   "Write down the band for your seat and your place inside it",
   "Compare any offer against that band, not against your current pay",
   "If the band is flat, go back to the seat step and pick the seat you move to next"
  ],
  "howRu": [
   "Найдите своё место в трёх вилках из строки «почему» ниже",
   "Запишите вилку вашего места и ваше место внутри неё",
   "Сравнивайте любое предложение с этой вилкой, а не с вашей текущей зарплатой",
   "Если вилка плоская, вернитесь к шагу выбора места и выберите место, куда двигаетесь дальше"
  ],
  "why": "Reporting seats post $60K–$95K; product seats post $106K–$168K; analytics engineering posts $130K–$244K at senior and staff level.",
  "whyRu": "Места reporting публикуют $60K–$95K; места product — $106K–$168K; analytics engineering — $130K–$244K на уровне senior и staff.",
  "links": [
   {
    "t": "BLS Occupational Outlook: Data Scientists",
    "u": "https://www.bls.gov/ooh/math/data-scientists.htm"
   }
  ]
 },
 "dan-k4": {
  "what": "Re-run this checklist every quarter — every three months — against fresh postings. Open new postings for your seat, count the named tools again, and update your plan from what moved.",
  "whatRu": "Перепроверяйте этот чек-лист каждый квартал — каждые три месяца — по свежим вакансиям. Открывайте новые вакансии вашего места, снова считайте названные инструменты и обновляйте план по тому, что сдвинулось.",
  "how": [
   "Set a date three months from now",
   "Open a fresh set of postings for your seat",
   "Count again: SQL, your BI tool, Python, dbt, your warehouse and any named AI tool",
   "Compare the new counts with the counts on this page",
   "Update your next learning step from what moved"
  ],
  "howRu": [
   "Поставьте дату через три месяца от сегодня",
   "Откройте свежий набор вакансий вашего места",
   "Посчитайте снова: SQL, ваш BI-инструмент, Python, dbt, ваш склад и любой названный AI-инструмент",
   "Сравните новые числа с числами на этой странице",
   "Обновите ваш следующий шаг учёбы по тому, что сдвинулось"
  ],
  "why": "The AI-tool line on the data side moved from absent to named in 2 of 24 inside one scan window — your seat’s screen now moves that fast.",
  "whyRu": "Строка AI-инструментов на стороне данных прошла от отсутствия до названной в 2 из 24 внутри одного окна скана — экран вашего места теперь движется так быстро.",
  "links": [
   {
    "t": "BLS Occupational Outlook: Data Scientists",
    "u": "https://www.bls.gov/ooh/math/data-scientists.htm"
   }
  ]
 }
});
