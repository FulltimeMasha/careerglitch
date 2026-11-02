/* Step detail content for the PathCheck dashboard (stepdetail.js).
   Format: STEP_DETAILS[stepId] = {what, whatRu, how[], howRu[], why, whyRu,
   links: [{t, u}]} — EN + RU twins; links verified at build time.
   Written from the pilot packages (hr-checklist + sample-full-report). */
var STEP_DETAILS = (typeof STEP_DETAILS !== "undefined" && STEP_DETAILS) || {};
Object.assign(STEP_DETAILS, {
 "law-g1": {
  "what": "Get a bachelor’s degree if you don’t have one. To become an attorney (a licensed lawyer), you also need a J.D., the law degree. Pick a school the state accepts (accredited).",
  "whatRu": "Получите диплом бакалавра, если его ещё нет. Чтобы стать адвокатом, нужен ещё J.D. — диплом юриста. Выбирайте школу, которую признаёт штат.",
  "how": [
   "First choose your goal: senior legal assistant or attorney",
   "Check the school is accredited before you pay anything",
   "Keep copies of your diploma and grades ready for employers",
   "Aiming at attorney? Treat the bachelor’s as the step before the J.D."
  ],
  "howRu": [
   "Сначала выберите цель: опытный помощник юриста или адвокат",
   "До оплаты проверьте, что штат признаёт эту школу",
   "Держите копии диплома и оценок наготове для работодателя",
   "Цель — адвокат? Тогда бакалавр — это ступень перед J.D."
  ],
  "why": "19 of 21 senior legal assistant jobs ask for a bachelor’s. 23 of 25 top attorney jobs ask for a J.D. Without it, the door stays shut.",
  "whyRu": "Бакалавра просят 19 из 21 вакансии опытного помощника юриста. J.D. просят 23 из 25 лучших вакансий адвоката. Без диплома туда не возьмут.",
  "links": [
   {
    "t": "BLS — Paralegals and Legal Assistants (official pay and outlook)",
    "u": "https://www.bls.gov/ooh/legal/paralegals-and-legal-assistants.htm"
   },
   {
    "t": "BLS — Lawyers (official pay and outlook)",
    "u": "https://www.bls.gov/ooh/legal/lawyers.htm"
   }
  ]
 },
 "law-g2": {
  "what": "Get a paralegal certificate. A paralegal helps lawyers with papers and cases. The course is short. If you can, pick one approved by the ABA (American Bar Association).",
  "whatRu": "Получите сертификат помощника юриста (paralegal). Он помогает юристам с бумагами и делами. Курс короткий. Если можно, берите программу, одобренную ABA (Американская ассоциация юристов).",
  "how": [
   "Open the ABA list of approved paralegal programs",
   "Check that the program you like is on that list",
   "Ask ChatGPT or Claude to explain hard terms from the course in plain words",
   "Add the certificate to your resume in plain words"
  ],
  "howRu": [
   "Откройте список программ, одобренных ABA",
   "Проверьте, есть ли там программа, которая вам нравится",
   "Попросите ChatGPT или Claude объяснить трудные термины курса простыми словами",
   "Добавьте сертификат в резюме простыми словами"
  ],
  "why": "14 of 21 senior jobs ask for this certificate. 6 of 21 name an ABA-approved program. It is a short course, not years of school.",
  "whyRu": "Этот сертификат просят 14 из 21 вакансии для опытных. 6 из 21 называют программу ABA. Это короткий курс, а не годы учёбы.",
  "links": [
   {
    "t": "ABA — Approved Paralegal Education Programs (official directory)",
    "u": "https://www.americanbar.org/groups/paralegals/"
   },
   {
    "t": "NALA — Certified Paralegal certification (official)",
    "u": "https://nala.org/certification/"
   }
  ]
 },
 "law-g3": {
  "what": "To work as an attorney, get a bar license. It is your legal right to practice law. Keep it active, with no problems on your record.",
  "whatRu": "Чтобы работать адвокатом, получите адвокатскую лицензию (bar). Это ваше право вести юридические дела. Держите её действующей и без нарушений.",
  "how": [
   "Pick the state where you will work",
   "Read that state’s rules on the NCBE website",
   "Practice bar questions with ChatGPT or Claude as a free tutor",
   "Keep the license active and check your record every year"
  ],
  "howRu": [
   "Выберите штат, где будете работать",
   "Прочитайте правила этого штата на сайте NCBE",
   "Тренируйте вопросы экзамена с ChatGPT или Claude — это бесплатный репетитор",
   "Продлевайте лицензию и раз в год проверяйте, что нарушений нет"
  ],
  "why": "22 of 25 top jobs ask for an active license with a clean record. 17 of 25 accept a license from any one US state. One state is enough. AI tutors make bar prep cheaper than ever.",
  "whyRu": "22 из 25 лучших вакансий просят действующую лицензию без нарушений. 17 из 25 принимают лицензию любого одного штата. Хватит одного. С AI-репетитором готовиться дешевле, чем раньше.",
  "links": [
   {
    "t": "NCBE — the bar exam / UBE by state (official)",
    "u": "https://www.ncbex.org/exams/ube"
   },
   {
    "t": "BLS — Lawyers (official pay and outlook)",
    "u": "https://www.bls.gov/ooh/legal/lawyers.htm"
   }
  ]
 },
 "law-g4": {
  "what": "Become a notary in your state. A notary stamps and signs official papers. It is cheap and quick, so do it early.",
  "whatRu": "Станьте нотариусом (notary) в своём штате. Нотариус заверяет важные бумаги печатью и подписью. Это дёшево и быстро — сделайте это пораньше.",
  "how": [
   "Find your state’s notary rules — your state gives the commission",
   "Fill in the state form and pay the state fee",
   "Get the stamp and supplies if your state asks for them",
   "Add the notary commission to your resume"
  ],
  "howRu": [
   "Найдите правила для нотариусов в вашем штате — статус даёт штат",
   "Заполните заявку штата и оплатите сбор",
   "Купите печать и всё нужное, если штат этого требует",
   "Впишите статус нотариуса в резюме"
  ],
  "why": "5 of 21 senior legal assistant jobs name notary status. A quick, cheap plus that puts you ahead of others.",
  "whyRu": "Статус нотариуса называют 5 из 21 вакансии опытного помощника юриста. Быстрый и дешёвый плюс, который ставит вас впереди.",
  "links": [
   {
    "t": "National Notary Association",
    "u": "https://www.nationalnotary.org/"
   }
  ]
 },
 "law-p1": {
  "what": "Pick ONE kind of law work and stay in it. For example, data privacy or company deals. Let your years add up there. Don’t jump between areas.",
  "whatRu": "Выберите ОДНО направление права и держитесь его. Например, защита данных или сделки компаний. Пусть годы опыта копятся там. Не прыгайте между темами.",
  "how": [
   "Name the one area you will stay in",
   "When you can choose, say no to work outside it",
   "Take cases and tasks in that area again and again",
   "Write your resume so all your years show one area"
  ],
  "howRu": [
   "Назовите одно направление, в котором останетесь",
   "Когда есть выбор, отказывайтесь от работы вне его",
   "Снова и снова берите дела и задачи в этом направлении",
   "Пишите резюме так, чтобы все годы были про одно направление"
  ],
  "why": "Senior jobs start at 5+ years in one area. The top level asks 10+. AI does simple, general legal tasks now. Deep knowledge of one area is what still pays.",
  "whyRu": "Опытных берут от 5+ лет в одном направлении. Самый верх просит 10+. Простые общие задачи AI уже делает сам. Платят за глубокое знание одной темы.",
  "links": [
   {
    "t": "BLS — Lawyers (official pay and outlook)",
    "u": "https://www.bls.gov/ooh/legal/lawyers.htm"
   }
  ]
 },
 "law-p2": {
  "what": "Learn the main program for your kind of work. Court cases: Relativity. Company deals: Carta and iManage Closing Folders. Company paperwork: Diligent Entities, hCue and GEMS.",
  "whatRu": "Выучите главную программу вашего направления. Суды: Relativity. Сделки компаний: Carta и iManage Closing Folders. Бумаги компаний: Diligent Entities, hCue и GEMS.",
  "how": [
   "First pick your direction: court cases, company deals or company paperwork",
   "Ask ChatGPT or Claude for a step-by-step plan of your daily tasks in it",
   "Do your daily tasks inside the program, not around it",
   "At work, ask to run the program, not only use it"
  ],
  "howRu": [
   "Сначала выберите направление: суды, сделки или бумаги компаний",
   "Попросите ChatGPT или Claude расписать по шагам ваши задачи в ней",
   "Делайте ежедневные задачи в самой программе, а не в обход",
   "Попросите на работе отвечать за программу, а не только пользоваться ею"
  ],
  "why": "Top jobs name the program outright. Relativity for court cases. Carta and iManage Closing Folders for company deals. Know it, and you skip the line.",
  "whyRu": "Лучшие вакансии прямо называют программу. Relativity — для судов. Carta и iManage Closing Folders — для сделок. Знаете её — проходите без очереди.",
  "links": [
   {
    "t": "Carta Classroom — Carta’s own learning pages (official)",
    "u": "https://carta.com/learn/"
   },
   {
    "t": "Relativity Certifications",
    "u": "https://www.relativity.com/resources/certification/"
   }
  ]
 },
 "law-p3": {
  "what": "Speed up one task at work with AI. Pick a task you repeat. Do it with AI help. Write down the time before and after.",
  "whatRu": "Ускорьте одну рабочую задачу с помощью AI. Выберите задачу, которая повторяется. Сделайте её с AI. Запишите время до и после.",
  "how": [
   "Pick one task you do again and again",
   "Write down how long it takes today",
   "Do it with an AI tool and write down the new time",
   "Put both numbers on one page — that page is your proof"
  ],
  "howRu": [
   "Выберите одну задачу, которую делаете снова и снова",
   "Запишите, сколько времени она занимает сейчас",
   "Сделайте её с AI-инструментом и запишите новое время",
   "Сохраните оба числа на одной странице — это ваше доказательство"
  ],
  "why": "The Full Report puts this in months 0–3. Top jobs want one AI task written down. AI already does part of a legal assistant’s routine. The person who runs that AI keeps the job — and gets the raise.",
  "whyRu": "Полный отчёт ставит это на месяцы 0–3. Лучшие вакансии хотят один пример работы с AI. AI уже делает часть рутины помощника юриста. Работу и прибавку получает тот, кто этим AI управляет.",
  "links": []
 },
 "law-p4": {
  "what": "Show that you use legal AI tools well. Jobs ask for this, but name no brand. So what matters is how you work, not what you bought.",
  "whatRu": "Покажите, что умеете работать с юридическим AI. Вакансии это просят, но марку не называют. Важно, как вы работаете, а не что купили.",
  "how": [
   "Use AI on a real task: research, review or a summary",
   "Check every AI answer against the source",
   "Write one short example: the task you did with AI and what you checked",
   "Be ready to tell that example at an interview"
  ],
  "howRu": [
   "Используйте AI в настоящей задаче: поиск, проверка или краткий пересказ",
   "Сверяйте каждый ответ AI с источником",
   "Запишите короткий пример: задача с AI и что вы проверили",
   "Будьте готовы рассказать этот пример на собеседовании"
  ],
  "why": "7 of 25 attorney jobs ask for legal AI skills. None names a brand. Any tool works. Your checked example is what gets you the offer.",
  "whyRu": "7 из 25 вакансий адвоката просят навыки юридического AI. Марку не называет ни одна. Подойдёт любой инструмент. Работу даёт ваш проверенный пример.",
  "links": []
 },
 "law-p5": {
  "what": "Know each Microsoft Office / 365 program: Word, Excel, Outlook and the rest. Jobs list them one by one. So learn them one by one.",
  "whatRu": "Знайте каждую программу Microsoft Office / 365: Word, Excel, Outlook и другие. Вакансии перечисляют их по одной. Так и учите — по одной.",
  "how": [
   "List the programs that jobs in your area name",
   "Open Microsoft’s own training page for the first one",
   "Stuck? Ask ChatGPT or Claude how to do it — answers take seconds",
   "Move on only when the first one feels easy"
  ],
  "howRu": [
   "Выпишите программы, которые называют вакансии в вашей сфере",
   "Откройте бесплатное обучение Microsoft по первой программе",
   "Застряли? Спросите ChatGPT или Claude — ответ за секунды",
   "Переходите к следующей, когда первая даётся легко"
  ],
  "why": "Microsoft Office / 365 is still a must in 12–13 of 21 senior legal assistant jobs. Its AI helpers now draft and sort legal papers. Know them, and your years of practice count double.",
  "whyRu": "Microsoft Office / 365 всё ещё обязателен в 12–13 из 21 вакансии опытного помощника юриста. Его AI-помощники уже готовят и сортируют бумаги. Освоите их — ваш опыт будет стоить вдвое дороже.",
  "links": [
   {
    "t": "Microsoft 365 help & learning — Microsoft’s own training (official)",
    "u": "https://support.microsoft.com/en-us/training"
   }
  ]
 },
 "law-p6": {
  "what": "Only if you work in data privacy: get CIPP/US. It is the main privacy certificate. It proves you know US data-protection laws.",
  "whatRu": "Только если ваша тема — защита данных: получите CIPP/US. Это главный сертификат в этой теме. Он доказывает, что вы знаете законы США о данных.",
  "how": [
   "Open the IAPP page for CIPP/US",
   "Read the exam outline — the list of topics it covers",
   "Turn each topic into practice questions with ChatGPT or Claude",
   "Take the exam and add CIPP/US to your resume"
  ],
  "howRu": [
   "Откройте страницу IAPP про CIPP/US",
   "Прочитайте план экзамена — список его тем",
   "Превращайте каждую тему в тренировочные вопросы с ChatGPT или Claude",
   "Сдайте экзамен и добавьте CIPP/US в резюме"
  ],
  "why": "CIPP/US was in 3 of 3 privacy jobs that named any certificate. One certificate, no guessing which to take.",
  "whyRu": "CIPP/US был в 3 из 3 вакансий по защите данных, где назван сертификат. Один сертификат — не нужно гадать, какой брать.",
  "links": [
   {
    "t": "IAPP — CIPP/US certification (official)",
    "u": "https://iapp.org/certify/cippus/"
   }
  ]
 },
 "law-k1": {
  "what": "Show all your years as ONE area of law. In your resume and when you talk, make your story about that one area.",
  "whatRu": "Покажите все годы опыта как ОДНО направление. В резюме и в рассказе о себе — история про одну тему.",
  "how": [
   "Write your one area at the top of your resume",
   "Group your jobs and tasks under that area",
   "Cut or shrink work from other areas",
   "Tell the same one-area story at interviews"
  ],
  "howRu": [
   "Напишите ваше направление вверху резюме",
   "Соберите места работы и задачи под этим направлением",
   "Сократите или уберите работу из других тем",
   "На собеседованиях рассказывайте ту же историю"
  ],
  "why": "Top jobs ask for 5–10 years in one area. A clear one-area story makes you the obvious pick.",
  "whyRu": "Лучшие вакансии просят 5–10 лет в одном направлении. Ясная история про одну тему делает вас очевидным выбором.",
  "links": [
   {
    "t": "BLS — Paralegals and Legal Assistants (official pay and outlook)",
    "u": "https://www.bls.gov/ooh/legal/paralegals-and-legal-assistants.htm"
   }
  ]
 },
 "law-k2": {
  "what": "Give advice that helps the business move forward. Weigh the risk. Suggest what to do. Don’t just repeat what the law says.",
  "whatRu": "Давайте советы, которые помогают компании двигаться дальше. Взвешивайте риск. Предлагайте, что делать. А не просто пересказывайте закон.",
  "how": [
   "Ask AI to list the risks, then add your own judgment on top",
   "Write what the company can do, not only what it can’t",
   "Say which choice you would make and why",
   "Keep that example ready for interviews"
  ],
  "howRu": [
   "Попросите AI перечислить риски, а потом добавьте своё решение",
   "Напишите, что компания может сделать, а не только чего нельзя",
   "Скажите, что выбрали бы вы и почему",
   "Держите этот пример наготове для собеседований"
  ],
  "why": "Business judgment is the #1 personal skill in top jobs. 7+ of 25 name it. AI can quote the law to anyone. Weighing a real business risk is what clients still pay a lawyer for.",
  "whyRu": "Деловое чутьё — личный навык №1 в лучших вакансиях. Его называют 7+ из 25. Процитировать закон AI может кому угодно. За взвешенный риск для бизнеса клиенты по-прежнему платят юристу.",
  "links": []
 },
 "law-k3": {
  "what": "Apply as a narrow expert, not as someone who does a bit of everything. Aim at senior jobs in your one area. Have your program skills and proof ready.",
  "whatRu": "Подавайтесь как узкий эксперт, а не «мастер на все руки». Цельтесь в вакансии для опытных в своём направлении. Программа и доказательства — наготове.",
  "how": [
   "Save expert-level jobs in your area",
   "Check your years, program skills and proof against each one",
   "Apply where your one-area story fits",
   "Write down the pay range of each job"
  ],
  "howRu": [
   "Сохраняйте вакансии для экспертов в своём направлении",
   "Сверяйте с каждой свои годы, программу и доказательства",
   "Подавайтесь туда, где ваша история совпадает с вакансией",
   "Записывайте, сколько платят на каждой работе"
  ],
  "why": "Two jobs to aim at: Gibson Dunn Sr. Corporate Paralegal pays $150K–$200K; Cooley pays $135,200–$176,800. That is top-tier pay for experts.",
  "whyRu": "Две цели: Gibson Dunn Sr. Corporate Paralegal платит $150K–$200K; Cooley платит $135,200–$176,800. Это зарплаты верхнего уровня для экспертов.",
  "links": []
 },
 "law-k4": {
  "what": "Path B check: go to law school only if the math works. The typical first salary must be bigger than your debt.",
  "whatRu": "Проверка для пути B: идите в юридическую школу, только если сходятся цифры. Обычная первая зарплата должна быть больше долга.",
  "how": [
   "Take a practice LSAT test to see your real level",
   "Get the ABA job reports for the schools you want",
   "Write down each school’s typical first salary",
   "Ask ChatGPT or Claude to help you build a simple debt-vs-salary table"
  ],
  "howRu": [
   "Пройдите пробный тест LSAT, чтобы увидеть свой уровень",
   "Возьмите отчёты ABA о работе выпускников нужных школ",
   "Запишите обычную первую зарплату каждой школы",
   "Попросите ChatGPT или Claude помочь сделать таблицу «долг против зарплаты»"
  ],
  "why": "The typical first salary is $100,000. The typical J.D. debt is $112,500. Check first, so you don’t lose years and money.",
  "whyRu": "Обычная первая зарплата — $100,000. Обычный долг за J.D. — $112,500. Проверьте заранее, чтобы не потерять годы и деньги.",
  "links": [
   {
    "t": "LSAC — the LSAT and law school admission (official)",
    "u": "https://lsac.org/"
   },
   {
    "t": "BLS — Lawyers (official pay and outlook)",
    "u": "https://www.bls.gov/ooh/legal/lawyers.htm"
   }
  ]
 }
});
Object.assign(STEP_DETAILS, {
 "cpa-g1": {
  "what": "Get a bachelor’s degree in accounting or finance. This is step one. Without it, the CPA path stays closed.",
  "whatRu": "Получите диплом бакалавра по бухучёту или финансам. Это первый шаг. Без него путь к CPA (лицензированный бухгалтер) закрыт.",
  "how": [
   "Check your degree is in accounting or finance, or plan to finish one",
   "Keep your diploma and grades ready to show",
   "Degree in another field? Ask your state board what extra classes you need. AI tutors help you catch up fast"
  ],
  "howRu": [
   "Проверьте, что диплом — по бухучёту или финансам, или запланируйте его",
   "Держите диплом и оценки наготове",
   "Диплом другой? Спросите совет штата, что досдать. AI-репетитор поможет догнать быстро"
  ],
  "why": "52 of 52 jobs with clear rules ask for this degree. Get it once, and every door after it can open.",
  "whyRu": "52 из 52 вакансий с ясными требованиями просят этот диплом. Получите его — и дальше откроются все двери.",
  "links": [
   {
    "t": "BLS — Accountants and Auditors (official pay and outlook)",
    "u": "https://www.bls.gov/ooh/business-and-financial/accountants-and-auditors.htm"
   }
  ]
 },
 "cpa-g2": {
  "what": "In week 1, check how your state gives the CPA license. In about 32 states you now need 120 credits plus 2 years of work. On that route, a fifth year of school costs $0.",
  "whatRu": "На 1-й неделе узнайте, как ваш штат выдаёт лицензию CPA. Примерно в 32 штатах теперь нужно 120 учебных кредитов и 2 года работы. Тогда пятый год учёбы стоит $0.",
  "how": [
   "Find your state board of accountancy (the office that gives the license)",
   "Read its rules: how many credits and how many years of work",
   "Write down your route: 120 credits + 2 years, or 150 credits + 1 year",
   "Count the cost before you pay for any extra school"
  ],
  "howRu": [
   "Найдите совет по бухучёту вашего штата — он выдаёт лицензию",
   "Прочитайте правила: сколько кредитов и сколько лет работы",
   "Запишите свой путь: 120 кредитов + 2 года или 150 кредитов + 1 год",
   "Посчитайте цену до того, как платить за лишнюю учёбу"
  ],
  "why": "About 32 states now license at 120 credits + 2 years of work. On that route, the fifth year of school costs $0. You earn instead of paying.",
  "whyRu": "Около 32 штатов дают лицензию при 120 кредитах + 2 годах работы. Тогда пятый год учёбы стоит $0. Вы зарабатываете, а не платите.",
  "links": [
   {
    "t": "This Way To CPA (AICPA) — understanding the CPA Exam and applying through your state board (official)",
    "u": "https://www.thiswaytocpa.com/exam/"
   },
   {
    "t": "Boards of Accountancy — NASBA",
    "u": "https://nasba.org/stateboards/"
   }
  ]
 },
 "cpa-g3": {
  "what": "Pass the CPA exam. It has 3 Core parts and 1 Discipline part (your chosen topic). Pass all of them within 30 months in most states. Save money for one retake, just in case. You’ve got this.",
  "whatRu": "Сдайте экзамен CPA. В нём 3 обязательные части (Core) и 1 часть на выбор (Discipline). Сдать всё нужно за 30 месяцев в большинстве штатов. Отложите деньги на одну пересдачу. У вас получится.",
  "how": [
   "Apply through your state board and get your Notice to Schedule (exam permit)",
   "Start with FAR, the hardest part, while you have the most time",
   "Put study hours on your calendar. Use ChatGPT or Claude to explain every question you miss",
   "Always keep the end of your 30-month window in mind"
  ],
  "howRu": [
   "Подайте заявку в совет штата и получите допуск к экзамену (Notice to Schedule)",
   "Начните с FAR — самой трудной части, — пока времени больше всего",
   "Ставьте часы учёбы в календарь. Каждую ошибку разбирайте с ChatGPT или Claude",
   "Всегда помните, когда кончается ваш 30-месячный срок"
  ],
  "why": "Only 42% pass FAR the first time. A retake is normal. Plan for it, and you won’t lose your window. AI can’t sign as a CPA — the license stays yours, and an AI tutor makes it faster to earn.",
  "whyRu": "FAR с первого раза сдают только 42%. Пересдача — это нормально. Заложите её, и срок не сгорит. AI не может подписать как CPA — лицензия остаётся за людьми. А AI-репетитор помогает получить её быстрее.",
  "links": [
   {
    "t": "This Way To CPA (AICPA) — understanding the CPA Exam (official)",
    "u": "https://www.thiswaytocpa.com/exam/"
   }
  ]
 },
 "cpa-g4": {
  "what": "Pick your Discipline part by the work you want, not by pass rate. BAR leads to hard accounting cases and consulting. ISC leads to IT audit and AI oversight. TCP leads to deep tax work.",
  "whatRu": "Выбирайте часть Discipline по работе, которую хотите, а не по проценту сдачи. BAR ведёт в сложный бухучёт и консалтинг. ISC — в IT-аудит и контроль AI. TCP — в сложные налоги.",
  "how": [
   "Name the kind of work you want",
   "Match it: BAR for hard accounting and consulting, ISC for IT audit and AI oversight, TCP for deep tax",
   "Write your choice down before you sign up",
   "Don’t switch just because another part looks easier"
  ],
  "howRu": [
   "Назовите, какой работой хотите заниматься",
   "Сопоставьте: BAR — сложный бухучёт и консалтинг, ISC — IT-аудит и контроль AI, TCP — сложные налоги",
   "Запишите выбор до регистрации",
   "Не меняйте часть только потому, что другая кажется легче"
  ],
  "why": "This part picks your future job. BAR, ISC and TCP lead to three different jobs. ISC fits the AI era: companies need people who check their systems.",
  "whyRu": "Эта часть выбирает вашу будущую работу. BAR, ISC и TCP ведут к трём разным работам. ISC — про время AI: компаниям нужны те, кто проверяет системы.",
  "links": [
   {
    "t": "This Way To CPA (AICPA) — understanding the CPA Exam (official)",
    "u": "https://www.thiswaytocpa.com/exam/"
   }
  ]
 },
 "cpa-g5": {
  "what": "Work under a licensed CPA and get that work signed. You need 1 year if you studied 150 credits. You need 2 years if you studied 120.",
  "whatRu": "Работайте под началом CPA с лицензией. Попросите подписать ваш опыт. Нужен 1 год, если у вас 150 кредитов. И 2 года, если 120.",
  "how": [
   "Check that your boss is a licensed CPA",
   "Ask how your work will be signed before you start counting it",
   "Keep a simple log of your work under that CPA",
   "Send your work for signing as soon as you qualify"
  ],
  "howRu": [
   "Проверьте, что ваш руководитель — CPA с лицензией",
   "Ещё до начала спросите, как подпишут ваш опыт",
   "Ведите простой журнал работы под этим CPA",
   "Отправьте опыт на подпись, как только будет можно"
  ],
  "why": "The license needs signed work. 1 year on the 150-credit route, 2 years on the 120-credit route. In most states a licensed CPA signs it. Ask early, so no month is wasted.",
  "whyRu": "Для лицензии нужен подписанный опыт. 1 год при 150 кредитах, 2 года при 120. Обычно подписывает CPA с лицензией. Спросите заранее — ни один месяц не пропадёт.",
  "links": [
   {
    "t": "This Way To CPA (AICPA) — understanding the CPA Exam and licensure (official)",
    "u": "https://www.thiswaytocpa.com/exam/"
   },
   {
    "t": "Boards of Accountancy — NASBA",
    "u": "https://nasba.org/stateboards/"
   }
  ]
 },
 "cpa-p1": {
  "what": "Learn NetSuite well. It is a program where companies keep their money records. Learn to do real work in it, not just click around.",
  "whatRu": "Хорошо выучите NetSuite. В этой программе компании ведут учёт денег. Учитесь делать в ней настоящую работу, а не просто смотреть.",
  "how": [
   "Get NetSuite access at work, or ask to join a NetSuite project",
   "Learn the money records your team keeps in it",
   "Do the month-end tasks in NetSuite yourself",
   "Write down which NetSuite tasks you can now do alone"
  ],
  "howRu": [
   "Получите доступ к NetSuite на работе или попроситесь в проект с ним",
   "Разберитесь, какие записи команда ведёт в NetSuite",
   "Сами делайте в NetSuite задачи конца месяца",
   "Запишите, какие задачи в NetSuite вы уже делаете сами"
  ],
  "why": "18 of 52 jobs ask for NetSuite. For senior accountant jobs in companies, it is 10 of 10. One program opens most of these doors.",
  "whyRu": "NetSuite просят 18 из 52 вакансий. Для опытных бухгалтеров в компаниях — 10 из 10. Одна программа открывает почти все эти двери.",
  "links": []
 },
 "cpa-p2": {
  "what": "Learn GAAP for real. GAAP is the rulebook for how companies count money. Start with ASC 606: money from customers. Then ASC 842: rent. Then ASC 718: paying staff in company stock. SOX 404 is about money checks in big public companies.",
  "whatRu": "Выучите GAAP по-настоящему. GAAP — правила, как компании считают деньги. Начните с ASC 606: деньги от клиентов. Потом ASC 842: аренда. Потом ASC 718: оплата работникам акциями. SOX 404 — проверки денег в больших публичных компаниях.",
  "how": [
   "Start with ASC 606 and walk one real sales case through it",
   "Then ASC 842 with one real rent deal",
   "Then ASC 718 with one real stock-pay case. Ask ChatGPT or Claude to explain any rule in simple words",
   "Aiming at public-company reports for the SEC? Add SOX 404 last"
  ],
  "howRu": [
   "Начните с ASC 606 и разберите по нему один настоящий случай продаж",
   "Потом ASC 842 на одном настоящем договоре аренды",
   "Потом ASC 718 на случае оплаты акциями. Любое правило попросите ChatGPT или Claude объяснить просто",
   "Цель — отчёты публичных компаний для SEC? Добавьте SOX 404 последним"
  ],
  "why": "Senior jobs name ASC 606 again and again. ASC 842 and ASC 718 show up in public-company reporting. So does SOX 404. Learn in this order and skip what jobs don’t ask.",
  "whyRu": "Вакансии для опытных снова и снова называют ASC 606. ASC 842 и ASC 718 нужны в отчётах публичных компаний. SOX 404 — тоже. Учите в этом порядке, лишнее не берите.",
  "links": []
 },
 "cpa-p3": {
  "what": "Learn Workiva. It is a program for company reports. It matters in one area: reports of public companies for the SEC, and hard accounting roles.",
  "whatRu": "Выучите Workiva. Это программа для отчётов компаний. Она нужна в одной сфере: отчёты публичных компаний для SEC и сложный бухучёт.",
  "how": [
   "First decide that public-company reports or hard accounting is your area",
   "Learn how a company report is built in Workiva",
   "Practice on a real report task, not only lessons",
   "Write down the report tasks you can do in Workiva"
  ],
  "howRu": [
   "Сначала решите, что отчёты публичных компаний или сложный бухучёт — ваше",
   "Разберитесь, как в Workiva собирается отчёт компании",
   "Тренируйтесь на настоящей задаче, а не только на уроках",
   "Запишите, какие отчёты вы умеете делать в Workiva"
  ],
  "why": "6 jobs name Workiva. All of them are public-company reporting and hard accounting roles. Not your area? Skip it and save the time.",
  "whyRu": "Workiva называют 6 вакансий. Все — про отчёты публичных компаний и сложный бухучёт. Не ваша сфера? Пропустите и сэкономьте время.",
  "links": []
 },
 "cpa-p4": {
  "what": "Learn Excel past the basics. Know pivot tables (they sum up big lists fast) and VLOOKUP (it joins two lists). For consulting jobs, go further: money plans built in Excel (financial models).",
  "whatRu": "Выучите Excel лучше базы. Знайте сводные таблицы (быстро считают большие списки) и VLOOKUP (соединяет два списка). Для консалтинга идите дальше: финансовые модели в Excel.",
  "how": [
   "Build a pivot table from a real list at work",
   "Use VLOOKUP to join two real lists",
   "Ask ChatGPT or Claude to write the formula, then repeat it until you can do it alone",
   "For consulting, build one full money plan — a model — in Excel"
  ],
  "howRu": [
   "Сделайте сводную таблицу из настоящего списка на работе",
   "Соедините два настоящих списка через VLOOKUP",
   "Попросите ChatGPT или Claude написать формулу, а потом повторяйте, пока не сможете сами",
   "Для консалтинга постройте в Excel одну полную финансовую модель"
  ],
  "why": "8 of 8 starter jobs test pivot tables and VLOOKUP. Consulting jobs ask for financial models. AI now types many formulas for accountants. You still need to know if the numbers are right. With AI help, you learn this in evenings, not months.",
  "whyRu": "8 из 8 вакансий для начинающих проверяют сводные таблицы и VLOOKUP. Консалтинг просит финансовые модели. AI уже пишет бухгалтерам формулы. Понять, верны ли цифры, должны вы. С AI это учится за вечера, а не месяцы.",
  "links": [
   {
    "t": "Microsoft 365 help & learning — Microsoft’s own Excel and Office training (official)",
    "u": "https://support.microsoft.com/en-us/training"
   }
  ]
 },
 "cpa-p5": {
  "what": "Learn Power BI. It turns numbers into charts. Learn it if you aim at consulting work. That is where jobs ask for it.",
  "whatRu": "Выучите Power BI. Он превращает цифры в графики. Учите его, если цель — консалтинг. Именно там его просят.",
  "how": [
   "Take one set of real numbers from your work",
   "Turn it into a clear chart in Power BI — its built-in AI helper can draft it",
   "Show it to one person and check they understand it",
   "Save the chart as proof for consulting job applications"
  ],
  "howRu": [
   "Возьмите набор настоящих цифр с вашей работы",
   "Сделайте из него понятный график в Power BI — встроенный AI-помощник набросает черновик",
   "Покажите одному человеку и проверьте, что ему понятно",
   "Сохраните график как доказательство для консалтинга"
  ],
  "why": "Power BI is in 4 jobs, all in consulting. SQL is in 0 of 52 jobs. So skip the SQL course and save months.",
  "whyRu": "Power BI есть в 4 вакансиях, все — консалтинг. SQL — в 0 из 52. Так что курс по SQL можно пропустить и сэкономить месяцы.",
  "links": [
   {
    "t": "Training for Power BI — Microsoft Learn",
    "u": "https://learn.microsoft.com/en-us/training/powerplatform/power-bi"
   }
  ]
 },
 "cpa-p6": {
  "what": "Pick ONE industry (one kind of business) and go deep. The best-paid jobs name their industry. A bit of everything doesn’t pay. Depth does.",
  "whatRu": "Выберите ОДНУ отрасль (один вид бизнеса) и копайте глубоко. Самые денежные вакансии называют свою отрасль. За «всего понемногу» не платят. Платят за глубину.",
  "how": [
   "Name your one industry: for example factory cost accounting, subscription software sales, pass-through companies, or wealthy clients",
   "Take your next job in that industry",
   "Learn the money rules that industry uses again and again",
   "Write your resume so the industry is clear at a glance"
  ],
  "howRu": [
   "Назовите свою отрасль: например учёт затрат на заводе, продажи программ по подписке, компании, где налог платят владельцы, или богатые клиенты",
   "Следующую работу берите в этой отрасли",
   "Выучите денежные правила, которые там повторяются",
   "Напишите резюме так, чтобы отрасль была видна сразу"
  ],
  "why": "The best-paid jobs name their industry: factory cost accounting, subscription software sales, pass-through companies, and wealthy and very wealthy clients. That is where the top 1% sits.",
  "whyRu": "Самые денежные вакансии называют отрасль: учёт затрат на заводе, продажи программ по подписке, компании, где налог платят владельцы, богатые и очень богатые клиенты. Там и сидит топ 1%.",
  "links": [
   {
    "t": "BLS — Accountants and Auditors (official pay and outlook)",
    "u": "https://www.bls.gov/ooh/business-and-financial/accountants-and-auditors.htm"
   }
  ]
 },
 "cpa-k1": {
  "what": "Become the tech person at your current job. Own one piece of tech work. For example, automate part of the month-end money count. Or own the tools that check two records match. Or own the ERP, the company’s main money program.",
  "whatRu": "Возьмите на себя технику на своей работе. Возьмите на себя один участок. Например, автоматизируйте подсчёт денег в конце месяца. Или отвечайте за программы сверки записей. Или за ERP — главную денежную программу компании.",
  "how": [
   "Pick one piece: month-end automation, matching tools, or the ERP",
   "Ask your manager to make that piece yours, in writing",
   "Run it at the next month-end",
   "Write down what you are now in charge of"
  ],
  "howRu": [
   "Выберите участок: автоматизация конца месяца, сверка или ERP",
   "Попросите руководителя письменно закрепить его за вами",
   "Проведите его в следующем конце месяца",
   "Запишите, за что вы теперь отвечаете"
  ],
  "why": "The Full Report puts this in months 0–3. Chief accountant and consulting jobs ask who ran the systems, not who just used them. AI already does routine entries. The accountant who runs the systems is the one who stays — and earns more.",
  "whyRu": "Полный отчёт ставит это на месяцы 0–3. Главбухов и консультантов спрашивают, кто управлял системами. Рутинные проводки AI уже делает сам. Остаётся и зарабатывает больше бухгалтер, который управляет системами.",
  "links": []
 },
 "cpa-k2": {
  "what": "Write down one process you made better. Show the hours before and after on one page. That one page is your proof.",
  "whatRu": "Опишите один процесс, который вы улучшили. Покажите часы до и после на одной странице. Эта страница — ваше доказательство.",
  "how": [
   "Pick one process you changed, for example with AI or automation",
   "Write the hours it took before your change",
   "Write the hours it takes now",
   "Keep both numbers on one page and show it when you apply"
  ],
  "howRu": [
   "Выберите процесс, который вы изменили, например с помощью AI или автоматизации",
   "Запишите, сколько часов он занимал до вас",
   "Запишите, сколько часов он занимает сейчас",
   "Держите оба числа на одной странице и показывайте при отклике"
  ],
  "why": "Good jobs look for exactly this one page. AI is taking over routine bookkeeping. Accountants who speed up the work stay valuable. Your page proves you are one of them.",
  "whyRu": "Хорошие вакансии ищут именно такую страницу. Рутинный учёт AI забирает себе. Ценными остаются бухгалтеры, которые ускоряют работу. Ваша страница доказывает, что вы из них.",
  "links": []
 },
 "cpa-k3": {
  "what": "Make one proof piece for your area. It can be a short note that explains a hard case. Or one money model. Or one project on checks that keep money safe. Write it all down.",
  "whatRu": "Сделайте одну работу-доказательство для своей сферы. Это может быть записка про трудный случай. Или финансовая модель. Или проект по проверкам, которые берегут деньги. Всё запишите.",
  "how": [
   "Choose the piece that fits your area: note, model, or checks project",
   "Build it from a real case, not a made-up one",
   "Write what the case was and what you decided",
   "Save it so you can show it when you apply"
  ],
  "howRu": [
   "Выберите, что подходит вашей сфере: записка, модель или проект по проверкам",
   "Делайте на настоящем случае, а не на выдуманном",
   "Запишите, что был за случай и что вы решили",
   "Сохраните, чтобы показать при отклике"
  ],
  "why": "The Full Report puts this proof piece in months 4–9. Real work shown beats years of extra study.",
  "whyRu": "Полный отчёт ставит эту работу на месяцы 4–9. Показанная настоящая работа сильнее лишних лет учёбы.",
  "links": []
 },
 "cpa-k4": {
  "what": "Make a target list. Save 10 or more real jobs in your area. Read what they ask for. Close your gaps one by one. A gap is a skill they want that you don’t have yet.",
  "whatRu": "Составьте список целей. Сохраните 10 или больше настоящих вакансий в своей сфере. Прочитайте, что они просят. Закрывайте пробелы по одному. Пробел — навык, которого у вас пока нет.",
  "how": [
   "Save 10 or more real jobs in your area",
   "Paste the jobs into ChatGPT or Claude and ask it to list every skill they ask for",
   "Mark the ones you don’t have yet — those are your gaps",
   "Close one gap, then check the list again"
  ],
  "howRu": [
   "Сохраните 10 или больше настоящих вакансий в своей сфере",
   "Вставьте вакансии в ChatGPT или Claude и попросите выписать все навыки",
   "Отметьте, чего у вас пока нет, — это ваши пробелы",
   "Закройте один пробел и снова проверьте список"
  ],
  "why": "At the month-3 check, you need a list of 10+ real jobs in your area. You study only what they ask. Nothing extra.",
  "whyRu": "К проверке в месяце 3 нужен список из 10+ настоящих вакансий. Вы учите только то, что они просят. Ничего лишнего.",
  "links": []
 },
 "cpa-k5": {
  "what": "Want an FDD job or a top company job? Then you need years at an accounting firm. FDD means checking a company’s money before it is sold.",
  "whatRu": "Хотите в FDD или на верхнюю должность в компании? Тогда нужны годы в бухгалтерской фирме. FDD — проверка денег компании перед её продажей.",
  "how": [
   "Decide if FDD or a top company job is your goal",
   "Plan a job at an accounting firm (audit or tax) into your path",
   "Stay long enough for the firm years to count",
   "Name those firm years clearly when you apply"
  ],
  "howRu": [
   "Решите, ваша ли цель — FDD или верхняя должность в компании",
   "Заложите в путь работу в бухгалтерской фирме (аудит или налоги)",
   "Останьтесь там достаточно, чтобы годы засчитались",
   "Чётко называйте эти годы, когда откликаетесь"
  ],
  "why": "11 jobs outside accounting firms ask for firm experience directly. Firm years are your ticket to the top jobs.",
  "whyRu": "11 вакансий вне бухгалтерских фирм прямо просят опыт в фирме. Годы в фирме — ваш билет на верхние должности.",
  "links": [
   {
    "t": "BLS — Accountants and Auditors (official pay and outlook)",
    "u": "https://www.bls.gov/ooh/business-and-financial/accountants-and-auditors.htm"
   }
  ]
 }
});
Object.assign(STEP_DETAILS, {
 "nur-g1": {
  "what": "Hold an active RN license (registered nurse) in your state. Keep it clean: no discipline, no limits. If your state is in the compact, get the multistate license. It works in many states. You’ll want it later for travel jobs (short contracts in other cities).",
  "whatRu": "Держите действующую лицензию RN (дипломированная медсестра) в своём штате. Без взысканий и ограничений. Если штат входит в соглашение штатов, оформите лицензию на много штатов. Позже она нужна для выездной работы (контракты в других городах).",
  "how": [
   "Check your license status on your state board of nursing website",
   "If your state is in the Nurse Licensure Compact, apply for the multistate license",
   "Set a reminder before the renewal date",
   "Keep the license clean — no discipline on your record"
  ],
  "howRu": [
   "Проверьте статус лицензии на сайте совета медсестёр штата",
   "Если штат входит в Nurse Licensure Compact, подайте на лицензию на много штатов",
   "Поставьте напоминание до даты продления",
   "Берегите лицензию — без взысканий в деле"
  ],
  "why": "16 of 16 jobs ask for an active RN license. 40 states now use the compact. AI can’t hold a nursing license or touch a patient. Your license is the part that stays human.",
  "whyRu": "Действующую лицензию RN просят 16 из 16 вакансий. Соглашение уже действует в 40 штатах. AI не может иметь лицензию медсестры и лечить руками. Ваша лицензия — то, что остаётся за людьми.",
  "links": [
   {
    "t": "NCSBN — Nurse Licensure Compact",
    "u": "https://www.ncsbn.org/nurse-licensure-compact.htm"
   }
  ]
 },
 "nur-g2": {
  "what": "Get the license the cheap way. Start with the ADN, the short nursing degree. You take the same NCLEX (the nurse license exam) as BSN grads (bachelor’s degree). Then finish the BSN while you work and earn.",
  "whatRu": "Получите лицензию дёшево. Начните с ADN — короткого диплома медсестры. Вы сдаёте тот же NCLEX (экзамен на лицензию), что и выпускники BSN (бакалавриат). А BSN доучите, уже работая и зарабатывая.",
  "how": [
   "Compare ADN prices at public colleges — Wake Tech is the example here",
   "Check that the program leads to the NCLEX-RN exam",
   "Apply and finish the ADN",
   "Pass the NCLEX — practice questions with ChatGPT or Claude as a free tutor",
   "Plan the RN-to-BSN study for your first year of work"
  ],
  "howRu": [
   "Сравните цены ADN в государственных колледжах — пример здесь Wake Tech",
   "Проверьте, что программа ведёт к экзамену NCLEX-RN",
   "Поступите и закончите ADN",
   "Сдайте NCLEX — тренируйтесь с ChatGPT или Claude как с бесплатным репетитором",
   "Запланируйте доучку RN-to-BSN на первый год работы"
  ],
  "why": "The ADN costs $5,472 in total at Wake Tech. Its grads pass the same NCLEX as BSN grads. Same license, years sooner, a fraction of the price.",
  "whyRu": "ADN в Wake Tech стоит $5,472 за всё обучение. Выпускники сдают тот же NCLEX, что и BSN. Та же лицензия — на годы раньше и в разы дешевле.",
  "links": [
   {
    "t": "Wake Tech — Nursing admissions (ADN)",
    "u": "https://www.waketech.edu/admissions-aid/credit/health-sciences/nursing"
   },
   {
    "t": "NCLEX — About the exam (NCSBN)",
    "u": "https://www.nclex.com/About.page"
   }
  ]
 },
 "nur-g3": {
  "what": "Keep your BLS certificate current. BLS is basic life support: first help in an emergency, like CPR. If it has expired, renew it before you apply.",
  "whatRu": "Держите сертификат BLS действующим. BLS — первая помощь в экстренной ситуации, например сердечно-лёгочная реанимация. Если срок истёк, продлите до отклика на вакансии.",
  "how": [
   "Check the expiry date on your BLS card",
   "Pick a classroom course or a mixed one (online part plus hands-on practice)",
   "Pass the course and get the new card",
   "Save a copy where an employer can see it"
  ],
  "howRu": [
   "Проверьте дату окончания на карте BLS",
   "Выберите очный курс или смешанный (онлайн плюс практика руками)",
   "Пройдите курс и получите новую карту",
   "Сохраните копию там, где её увидит работодатель"
  ],
  "why": "15 of 16 jobs ask for a current BLS certificate. It takes a day, and without it you get filtered out.",
  "whyRu": "Действующий BLS просят 15 из 16 вакансий. Это один день, а без него отсеют сразу.",
  "links": [
   {
    "t": "American Heart Association — BLS training",
    "u": "https://cpr.heart.org/en/cpr-courses-and-kits/healthcare-professional/basic-life-support-bls-training"
   }
  ]
 },
 "nur-g4": {
  "what": "Get ACLS, the advanced emergency certificate. It builds on BLS. It teaches you to lead in a serious emergency. Most specialty jobs want it at hire or in the first 30–90 days.",
  "whatRu": "Получите ACLS — продвинутый сертификат экстренной помощи. Он идёт после BLS. Учит руководить в серьёзной экстренной ситуации. Почти все работы по специальности просят его сразу или в первые 30–90 дней.",
  "how": [
   "Hold a current BLS card first",
   "Take the AHA ACLS course for healthcare workers",
   "Pass it and get the ACLS card — ChatGPT or Claude can quiz you on the heart rhythms",
   "If a job gives you 30–90 days, book the course in your first weeks"
  ],
  "howRu": [
   "Сначала держите действующую карту BLS",
   "Пройдите курс ACLS от AHA для медиков",
   "Сдайте его и получите карту ACLS — ChatGPT или Claude погоняют вас по ритмам сердца",
   "Если работа даёт 30–90 дней, запишитесь на курс в первые недели"
  ],
  "why": "10 of 16 jobs name ACLS. It is the real ticket into a specialty — and specialties pay more.",
  "whyRu": "ACLS называют 10 из 16 вакансий. Это настоящий пропуск в специальность — а там платят больше.",
  "links": [
   {
    "t": "American Heart Association — Healthcare professional courses (ACLS and BLS)",
    "u": "https://cpr.heart.org/en/cpr-courses-and-kits/healthcare-professional/"
   }
  ]
 },
 "nur-g5": {
  "what": "For the NP path, later: an NP (nurse practitioner) can diagnose and prescribe. Pass the certification exam in your specialty. You also need a state NP license and DEA registration. DEA lets you prescribe strong drugs.",
  "whatRu": "Для пути NP, на потом: NP — медсестра, которая может ставить диагноз и выписывать лекарства. Сдайте экзамен по своей специальности. Ещё нужны лицензия NP штата и регистрация DEA. DEA даёт право выписывать сильные лекарства.",
  "how": [
   "Pick your NP specialty first",
   "Find the certification exam for that specialty",
   "Check what the exam asks for before you apply",
   "Pass the exam and get certified",
   "Then apply for the state NP license and the DEA registration"
  ],
  "howRu": [
   "Сначала выберите специальность NP",
   "Найдите экзамен по этой специальности",
   "До подачи проверьте, что требуется для экзамена",
   "Сдайте экзамен и получите сертификат",
   "Потом подайте на лицензию NP штата и регистрацию DEA"
  ],
  "why": "In practice, 10 of 10 NP jobs ask for certification in the specialty. It is the gate to the highest nurse pay.",
  "whyRu": "На практике экзамен по специальности просят 10 из 10 вакансий NP. Это вход к самым высоким зарплатам медсестёр.",
  "links": [
   {
    "t": "ANCC — Certifications (ANA / nursingworld.org)",
    "u": "https://www.nursingworld.org/our-certifications/"
   }
  ]
 },
 "nur-p1": {
  "what": "Take a first job in a specialty. Aim for the ICU, ED or OR. ICU: intensive care, the sickest patients. ED: the emergency room. OR: the operating room. A general floor is OK to start. But the plan is a specialty.",
  "whatRu": "Возьмите первую работу по специальности. Цельтесь в ICU, ED или OR. ICU — реанимация, самые тяжёлые пациенты. ED — приёмное отделение скорой помощи. OR — операционная. Общее отделение подойдёт для старта. Но план — специальность.",
  "how": [
   "List hospitals near you with ICU, ED and OR units",
   "Apply to specialty jobs and to new-nurse programs (residencies) that lead there",
   "At the interview, ask how new nurses move into the specialty",
   "Pick the offer with a clear path to a specialty, not just the first pay"
  ],
  "howRu": [
   "Составьте список больниц рядом с отделениями ICU, ED и OR",
   "Откликайтесь на работу по специальности и на программы для новичков, которые туда ведут",
   "На собеседовании спросите, как новички переходят в специальность",
   "Выбирайте место с ясным путём в специальность, а не по первой зарплате"
  ],
  "why": "Your specialty opens travel pay, the CRNA path (nurse anesthetist) and the NP paths that pay well. AI helps with charts, but critical care at the bedside stays with nurses.",
  "whyRu": "Специальность открывает выездные контракты, путь в CRNA (медсестра-анестезист) и денежные пути NP. AI помогает с записями, но тяжёлых пациентов выхаживают медсёстры.",
  "links": [
   {
    "t": "BLS — Registered Nurses (Occupational Outlook Handbook)",
    "u": "https://www.bls.gov/ooh/healthcare/registered-nurses.htm"
   }
  ]
 },
 "nur-p2": {
  "what": "Bank 2 years in your specialty. Stay in one and build real time there. Travel jobs start at 2 years. These years also lift you to the top staff pay.",
  "whatRu": "Наберите 2 года в своей специальности. Не меняйте её. Выездные контракты начинаются с 2 лет. Эти годы ещё поднимают вас к самой высокой штатной зарплате.",
  "how": [
   "Stay in one specialty — don’t hop between units",
   "Keep a simple note of your start date and your unit",
   "Ask for harder cases as you grow",
   "At 2 years, check travel jobs in your specialty"
  ],
  "howRu": [
   "Оставайтесь в одной специальности — не прыгайте между отделениями",
   "Запишите дату старта и своё отделение",
   "По мере роста просите более сложные случаи",
   "На отметке 2 года посмотрите выездные вакансии по своей специальности"
  ],
  "why": "8 of 10 travel jobs ask for 2 years in the specialty. Two focused years open the best-paid contracts.",
  "whyRu": "2 года в специальности просят 8 из 10 выездных вакансий. Два года в одной теме открывают самые денежные контракты.",
  "links": [
   {
    "t": "NCSBN — Nurse Licensure Compact (the travel door key)",
    "u": "https://www.ncsbn.org/nurse-licensure-compact.htm"
   }
  ]
 },
 "nur-p3": {
  "what": "Start an online RN-to-BSN in your first year of work. It turns your ADN into a BSN while you keep working. Start early, while the job is still new.",
  "whatRu": "Начните онлайн-доучку RN-to-BSN в первый год работы. Она превращает ADN в BSN без отрыва от работы. Начинайте рано, пока работа ещё новая.",
  "how": [
   "Find an online RN-to-BSN program you can do while working",
   "Check the total price before you sign up",
   "Ask your employer if it helps pay — check its own policy",
   "Enroll in your first year of work",
   "Study at a pace you can keep next to your shifts — use AI to summarize readings"
  ],
  "howRu": [
   "Найдите онлайн-программу RN-to-BSN, совместимую с работой",
   "Проверьте полную цену до записи",
   "Спросите работодателя, помогает ли он с оплатой — уточните его правила",
   "Запишитесь в первый год работы",
   "Учитесь в темпе, который потянете рядом со сменами — пересказ текстов поручите AI"
  ],
  "why": "25% of employers require the BSN for new hires, and 69.8% prefer it (AACN). The online bridge costs $12,000 in total. In Utah it can take just 2 semesters. You earn the whole time.",
  "whyRu": "25% работодателей требуют BSN у новичков, 69.8% предпочитают его (AACN). Онлайн-доучка стоит $12,000 за всё. В Utah — всего 2 семестра. И всё это время вы зарабатываете.",
  "links": [
   {
    "t": "AACN — American Association of Colleges of Nursing",
    "u": "https://www.aacnnursing.org/"
   },
   {
    "t": "BLS — Registered Nurses (RN-to-BSN path)",
    "u": "https://www.bls.gov/ooh/healthcare/registered-nurses.htm"
   }
  ]
 },
 "nur-p4": {
  "what": "Take your specialty certificate once you have enough experience. For ICU nurses, it is the CCRN. Jobs don’t require it. But it makes you stand out. And it shows CRNA schools you are serious.",
  "whatRu": "Сдайте сертификат по специальности, когда хватит опыта. Для медсестёр реанимации это CCRN. Работы его не требуют. Но он выделяет вас. И показывает школам CRNA, что вы настроены серьёзно.",
  "how": [
   "Work directly with very sick, critical patients",
   "Check the CCRN practice-hour rules on the AACN page",
   "Apply when you have enough hours",
   "Prepare and take the exam — AI can turn your notes into practice questions"
  ],
  "howRu": [
   "Работайте напрямую с тяжёлыми, критическими пациентами",
   "Проверьте правила по часам практики CCRN на странице AACN",
   "Подайте, когда наберёте часы",
   "Подготовьтесь и сдайте экзамен — AI превратит ваши заметки в тренировочные вопросы"
  ],
  "why": "3 of 16 RN jobs prefer the CCRN and 0 require it. It helps you stand out, but it is not a must. Do it when it serves your next step.",
  "whyRu": "CCRN предпочитают 3 из 16 вакансий RN, требуют 0. Он выделяет, но не обязателен. Делайте, когда он нужен для следующего шага.",
  "links": [
   {
    "t": "AACN — Get your CCRN certification",
    "u": "https://www.aacn.org/certification/get-certified/ccrn-adult"
   }
  ]
 },
 "nur-p5": {
  "what": "Become the AI go-to person on your unit. Learn your hospital’s AI tools better than most nurses. Learn them on real shifts, not in a side course.",
  "whatRu": "Станьте тем, кто ведёт AI в своём отделении. Освойте AI-программы больницы лучше большинства медсестёр. Учитесь на настоящих сменах, а не на отдельных курсах.",
  "how": [
   "List the AI tools your hospital already uses on your unit",
   "Learn one tool well and use it every shift",
   "Check what AI writes before you trust it — the nurse still owns the note",
   "Help a colleague learn what you learned",
   "Ask to join when a new AI tool comes to your unit"
  ],
  "howRu": [
   "Выпишите AI-программы, которые больница уже использует в вашем отделении",
   "Хорошо освойте одну и пользуйтесь ею каждую смену",
   "Проверяйте, что пишет AI, — за запись отвечает медсестра",
   "Научите коллегу тому, что освоили сами",
   "Просите включить вас, когда в отделение приходит новая AI-программа"
  ],
  "why": "More than three-quarters of nurses use AI every day. Only about 10% are superusers (McKinsey). AI is taking over nurse paperwork. The nurse who leads it on the unit becomes the one managers promote.",
  "whyRu": "Больше трёх четвертей медсестёр пользуются AI каждый день. Уверенно владеют им лишь около 10% (McKinsey). AI забирает бумажную работу медсестёр. Повышают тех, кто ведёт его в отделении.",
  "links": []
 },
 "nur-k1": {
  "what": "Compare new-nurse program offers (residencies) by where they lead, not by first pay. A residency is a training job for new nurses. One with a clear plan protects you in the hard first year.",
  "whatRu": "Сравнивайте программы для новых медсестёр (residency) по тому, куда они ведут, а не по первой зарплате. Это работа с обучением для новичков. Ясный план защитит вас в трудный первый год.",
  "how": [
   "For each offer, write down the training plan it promises",
   "Ask if it has a clear plan, a coach and a set length",
   "Ask where its nurses go after year one — which units, which specialties",
   "Compare where they lead first, pay second",
   "Pick the offer that keeps your specialty path open"
  ],
  "howRu": [
   "Для каждого предложения запишите обещанный план обучения",
   "Спросите, есть ли ясный план, наставник и чёткий срок",
   "Спросите, куда медсёстры идут после первого года — в какие отделения и специальности",
   "Сначала сравнивайте, куда ведёт, потом — оплату",
   "Выбирайте место, которое оставляет путь в специальность открытым"
  ],
  "why": "22.7% of new RNs leave in their first year (NSI). A program with a clear plan protects you. Quitting in year one costs you the most time.",
  "whyRu": "22.7% новых RN уходят в первый год (NSI). Программа с ясным планом вас защищает. Уйти в первый год — самая большая потеря времени.",
  "links": []
 },
 "nur-k2": {
  "what": "Move to the ICU, ED or OR by month 18–24. If your hospital can’t move you by month 24, change hospitals. Don’t stay a third year on a general floor. That is the one avoidable mistake in this plan.",
  "whatRu": "Перейдите в ICU, ED или OR к месяцу 18–24. Если больница не переводит к месяцу 24, меняйте больницу. Не оставайтесь третий год в общем отделении. Это единственная ошибка плана, которой легко избежать.",
  "how": [
   "From month 12, tell your manager you want the specialty move",
   "Collect your proof: your cases, certificates, record",
   "Apply for open ICU, ED or OR jobs in your hospital",
   "At month 18–24, make the move",
   "No move by month 24? Apply to other hospitals"
  ],
  "howRu": [
   "С месяца 12 скажите руководителю, что хотите в специальность",
   "Соберите доказательства: случаи, сертификаты, личное дело",
   "Откликайтесь на открытые места ICU, ED или OR в своей больнице",
   "На месяце 18–24 переходите",
   "Перевода нет к месяцу 24? Откликайтесь в другие больницы"
  ],
  "why": "Experienced specialty nurses get joining bonuses of $10K–$25K. That is money just for signing on.",
  "whyRu": "Опытные медсёстры по специальности получают бонус за выход $10K–$25K. Это деньги просто за то, что вы пришли.",
  "links": []
 },
 "nur-k3": {
  "what": "Get charge nurse experience. A charge nurse leads the shift. Relief charge means you lead when the main one is away. This is the way into leadership: the assistant nurse manager job.",
  "whatRu": "Получите опыт старшей медсестры смены. Она руководит сменой. Сначала замещайте старшую, когда её нет. Это путь в руководство: на должность заместителя заведующего отделением.",
  "how": [
   "Tell your manager you want relief charge shifts",
   "Lead the shift when the main charge nurse is away",
   "Run the shift: assignments, problems, handover",
   "Keep a record of the shifts you led",
   "Use that record when you apply for assistant nurse manager"
  ],
  "howRu": [
   "Скажите руководителю, что хотите замещать старшую смены",
   "Ведите смену, когда старшей нет",
   "Руководите сменой: распределение, проблемы, передача смены",
   "Записывайте смены, которые вы вели",
   "Покажите эти записи, когда подаётесь на заместителя заведующего"
  ],
  "why": "The assistant nurse manager job pays $61.91–$97.72/hr. It was the only RN job that required a BSN. Leading people is work AI can’t take from you.",
  "whyRu": "Заместитель заведующего получает $61.91–$97.72 в час. Это была единственная вакансия RN, где требовался BSN. Руководить людьми AI за вас не сможет.",
  "links": [
   {
    "t": "BLS — Registered Nurses (advancement: charge nurse to management)",
    "u": "https://www.bls.gov/ooh/healthcare/registered-nurses.htm"
   }
  ]
 },
 "nur-k4": {
  "what": "Decide on NP in year 3–5. Go NP only with the right specialty. Pick it by posted pay and by fit. Pick your state with care too. In a Restricted state, a doctor must oversee your work. In a Full Practice state, you work on your own.",
  "whatRu": "Решение про NP — на год 3–5. Идите в NP только с правильной специальностью. Выбирайте по зарплате в вакансиях и по душе. Штат тоже выбирайте с умом. В «ограниченных» штатах (Restricted) за вами следит врач. В штатах «полной практики» (Full Practice) вы работаете сами.",
  "how": [
   "List NP specialties and how much they pay — AI can help you gather this in an evening",
   "Put psychiatry and the medical specialties at the top — not the usual general path",
   "Check your state on the AANP practice map: Full Practice, Reduced or Restricted",
   "If you can move, weigh a Full Practice state",
   "Choose specialty and state before you choose a school"
  ],
  "howRu": [
   "Составьте список специальностей NP и их зарплат — с AI это займёт вечер",
   "Поставьте наверх психиатрию и медицинские специальности, а не обычный общий путь",
   "Проверьте свой штат на карте AANP: полная, частичная или ограниченная практика",
   "Если можете переехать, присмотритесь к штату полной практики",
   "Выберите специальность и штат до выбора школы"
  ],
  "why": "Psychiatry pays $200K–$257K. CA, TX and FL are Restricted. 27 states + DC are Full Practice. The right choice here is the jump to the top 1% of nurse pay.",
  "whyRu": "Психиатрия платит $200K–$257K. CA, TX и FL — ограниченная практика. 27 штатов + DC — полная. Верный выбор здесь — прыжок в топ 1% зарплат медсестёр.",
  "links": [
   {
    "t": "AANP — State advocacy and State Practice Environment",
    "u": "https://www.aanp.org/advocacy/state"
   }
  ]
 },
 "nur-k5": {
  "what": "Pay for the MSN (master’s degree) plus the certificate. Don’t pay extra for the DNP (doctorate). Top jobs hire with the MSN. CRNA is the one exception. There, the doctorate is the license itself.",
  "whatRu": "Платите за MSN (магистратуру) плюс сертификат. Не переплачивайте за DNP (докторскую). На лучшие работы берут с MSN. Исключение одно — CRNA. Там докторская и есть лицензия.",
  "how": [
   "Compare MSN programs by total price",
   "Check the program leads to your specialty exam",
   "Price the DNP version too and see the extra cost",
   "Choose MSN plus certificate — unless your target is CRNA",
   "For CRNA, plan for the doctorate, because there it is the license"
  ],
  "howRu": [
   "Сравните программы MSN по полной цене",
   "Проверьте, что программа ведёт к экзамену по вашей специальности",
   "Узнайте цену DNP и посмотрите, сколько переплатите",
   "Выбирайте MSN плюс сертификат — если цель не CRNA",
   "Для CRNA планируйте докторскую: там она и есть лицензия"
  ],
  "why": "Top jobs require the DNP in 0 of 16 cases. CRNA is the one exception. Skip the extra degree and save years and money.",
  "whyRu": "Лучшие вакансии требуют DNP в 0 из 16 случаев. CRNA — единственное исключение. Пропустите лишнюю степень и сэкономьте годы и деньги.",
  "links": [
   {
    "t": "ANCC — Certifications (ANA / nursingworld.org)",
    "u": "https://www.nursingworld.org/our-certifications/"
   }
  ]
 }
});
