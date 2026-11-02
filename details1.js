/* Step detail content for the PathCheck dashboard (stepdetail.js).
   Format: STEP_DETAILS[stepId] = {what, whatRu, how[], howRu[], why, whyRu,
   links: [{t, u}]} — EN + RU twins; links verified at build time.
   Written from the pilot packages (hr-checklist + sample-full-report). */
var STEP_DETAILS = (typeof STEP_DETAILS !== "undefined" && STEP_DETAILS) || {};
Object.assign(STEP_DETAILS, {
 "law-g1": {
  "what": "Get a bachelor’s degree if you do not have one yet. For the attorney door, the degree that counts is the J.D. — the law degree — and it must come from an accredited school, meaning a school the state accepts.",
  "whatRu": "Получите степень бакалавра, если её ещё нет. Для двери attorney считается J.D. — диплом юриста — и школа должна быть аккредитованной, то есть такой, которую признаёт штат.",
  "how": [
   "Decide which door you are aiming at first: senior paralegal or attorney",
   "Check that the school is accredited before you pay anything",
   "Keep the diploma and transcripts where an employer can see copies",
   "If you aim at attorney, plan the bachelor’s as the step before the J.D."
  ],
  "howRu": [
   "Сначала решите, в какую дверь целитесь: senior paralegal или attorney",
   "Проверьте, что школа аккредитована, до того как платить",
   "Держите диплом и выписки там, где работодатель сможет увидеть копии",
   "Если целитесь в attorney, планируйте бакалавра как шаг перед J.D."
  ],
  "why": "Senior paralegal postings ask for a bachelor’s in 19 of 21 cases; top attorney postings ask for a J.D. in 23 of 25.",
  "whyRu": "Senior-вакансии paralegal просят бакалавра в 19 из 21 случаев; топовые вакансии attorney просят J.D. в 23 из 25.",
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
  "what": "Get a paralegal certificate — a short study program for paralegals. If you can choose, pick a program approved by the ABA, the American Bar Association.",
  "whatRu": "Получите сертификат paralegal — короткую учебную программу для paralegal. Если есть выбор, берите программу, одобренную ABA — American Bar Association.",
  "how": [
   "Open the ABA directory of approved paralegal programs",
   "Check whether the program you like is on that list",
   "Finish the program and keep the certificate",
   "Add the certificate to your resume in plain words"
  ],
  "howRu": [
   "Откройте каталог одобренных ABA программ для paralegal",
   "Проверьте, есть ли ваша программа в этом списке",
   "Закончите программу и сохраните сертификат",
   "Добавьте сертификат в резюме простыми словами"
  ],
  "why": "14 of 21 senior postings ask for a paralegal certificate, and 6 of 21 name an ABA-approved program.",
  "whyRu": "14 из 21 senior-вакансий просят сертификат paralegal, а 6 из 21 называют программу, одобренную ABA.",
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
  "what": "For the attorney door, get a bar license and keep it active and in good standing. Good standing means there are no problems on your record.",
  "whatRu": "Для двери attorney получите лицензию bar и держите её действующей и в хорошем статусе. Хороший статус — значит, в вашем досье нет проблем.",
  "how": [
   "Pick the state where you will work",
   "Read that state’s bar admission rules on the NCBE pages",
   "Pass the bar exam for that state",
   "Keep the license active and check your standing every year"
  ],
  "howRu": [
   "Выберите штат, где будете работать",
   "Прочитайте правила допуска к bar этого штата на страницах NCBE",
   "Сдайте экзамен bar этого штата",
   "Держите лицензию действующей и каждый год проверяйте свой статус"
  ],
  "why": "22 of 25 top postings ask for an active bar license in good standing; 17 of 25 accept a license from at least one US state.",
  "whyRu": "22 из 25 топовых вакансий просят действующую лицензию bar в хорошем статусе; 17 из 25 принимают лицензию хотя бы одного штата США.",
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
  "what": "Get a notary commission in your state. A notary can stamp and sign official papers. It is cheap and fast to get, so do it early.",
  "whatRu": "Получите статус notary в вашем штате. Notary может заверять официальные бумаги печатью и подписью. Это дёшево и быстро, поэтому сделайте это рано.",
  "how": [
   "Find your state’s notary rules — the commission comes from your state",
   "Fill in the state application and pay the state fee",
   "Get your stamp and supplies if your state asks for them",
   "Write the commission on your resume"
  ],
  "howRu": [
   "Найдите правила notary вашего штата — статус выдаёт ваш штат",
   "Заполните заявку штата и оплатите сбор штата",
   "Получите печать и принадлежности, если ваш штат их требует",
   "Впишите статус notary в резюме"
  ],
  "why": "5 of 21 senior paralegal postings name notary status.",
  "whyRu": "5 из 21 senior-вакансий paralegal называют статус notary.",
  "links": [
   {
    "t": "National Notary Association",
    "u": "https://www.nationalnotary.org/"
   }
  ]
 },
 "law-p1": {
  "what": "Go deep in ONE practice area — one kind of law work, like privacy or company deals. Stay in that same area and let the years add up there, instead of spreading over many areas.",
  "whatRu": "Углубитесь в ОДНУ область практики — один вид юридической работы, например privacy или сделки компаний. Оставайтесь в этой области и пусть годы копятся именно там, а не распыляются по многим областям.",
  "how": [
   "Name the one area you will stay in",
   "Say no to work outside that area when you can choose",
   "Take cases and tasks inside that area again and again",
   "Write your resume so the years read as one area, not many"
  ],
  "howRu": [
   "Назовите одну область, в которой останетесь",
   "Отказывайтесь от работы вне этой области, когда есть выбор",
   "Снова и снова берите дела и задачи внутри этой области",
   "Напишите резюме так, чтобы годы читались как одна область, а не много"
  ],
  "why": "Senior jobs start at 5+ years in the same area, and the top tier asks 10+ years.",
  "whyRu": "Senior-уровень начинается с 5+ лет в одной области, а верхний уровень просит 10+ лет.",
  "links": [
   {
    "t": "BLS — Lawyers (official pay and outlook)",
    "u": "https://www.bls.gov/ooh/legal/lawyers.htm"
   }
  ]
 },
 "law-p2": {
  "what": "Learn the main work program of your track, called the platform. On the litigation track (court cases) it is Relativity. On the corporate track it is Carta and iManage Closing Folders. For entity work (papers for companies) it is Diligent Entities, hCue and GEMS.",
  "whatRu": "Выучите главную рабочую программу вашего трека — платформу. На треке litigation (судебные дела) это Relativity. На корпоративном треке это Carta и iManage Closing Folders. Для работы с юрлицами это Diligent Entities, hCue и GEMS.",
  "how": [
   "Name your track first: litigation, corporate, or entity work",
   "Open the training pages of that track’s platform",
   "Learn to do your daily tasks inside the platform, not around it",
   "Ask at work to run or administer the platform, not only to use it"
  ],
  "howRu": [
   "Сначала назовите свой трек: litigation, corporate или работа с юрлицами",
   "Откройте страницы обучения платформы вашего трека",
   "Научитесь делать ежедневные задачи внутри платформы, а не в обход неё",
   "Попроситесь на работе вести или администрировать платформу, а не только пользоваться ею"
  ],
  "why": "Top postings name the platform of the track — Relativity on the litigation track, Carta and iManage Closing Folders on the corporate track.",
  "whyRu": "Топовые вакансии называют платформу трека — Relativity на треке litigation, Carta и iManage Closing Folders на корпоративном треке.",
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
  "what": "Build one AI workflow at your current job. A workflow is the steps you take to finish one task. Pick one task, do it with AI help, and write down the time before and the time after.",
  "whatRu": "Постройте один рабочий процесс с AI на вашей текущей работе. Рабочий процесс — это шаги, которыми вы делаете одну задачу. Выберите одну задачу, сделайте её с помощью AI и запишите время до и время после.",
  "how": [
   "Pick one task you do again and again",
   "Write down how long it takes today",
   "Do the same task with an AI tool and write down the new time",
   "Save both numbers on one page — that page is your proof"
  ],
  "howRu": [
   "Выберите одну задачу, которую делаете снова и снова",
   "Запишите, сколько времени она занимает сегодня",
   "Сделайте ту же задачу с AI-инструментом и запишите новое время",
   "Сохраните оба числа на одной странице — эта страница и есть ваше доказательство"
  ],
  "why": "The Full Report puts this in months 0–3: one documented AI workflow is what top postings describe.",
  "whyRu": "Full Report ставит это в месяцы 0–3: один задокументированный процесс с AI — то, что описывают топовые вакансии.",
  "links": []
 },
 "law-p4": {
  "what": "Show that you can use legal AI tools well. Postings ask for this in plain words. They do not name a brand, so your proof is how you work, not which program you bought.",
  "whatRu": "Покажите, что хорошо умеете пользоваться юридическими AI-инструментами. Вакансии просят это простыми словами. Бренды они не называют, поэтому ваше доказательство — как вы работаете, а не какую программу купили.",
  "how": [
   "Use an AI tool on a real task: research, review, or a summary",
   "Check every answer the tool gives you against the source",
   "Write one short example of a task you did with AI and what you checked",
   "Be ready to tell that example at an interview"
  ],
  "howRu": [
   "Используйте AI-инструмент на настоящей задаче: исследование, проверка или краткое изложение",
   "Проверяйте каждый ответ инструмента по источнику",
   "Запишите один короткий пример задачи, сделанной с AI, и что вы проверили",
   "Будьте готовы рассказать этот пример на собеседовании"
  ],
  "why": "7 of 25 attorney postings ask for legal AI skill in words, and none of them names a brand.",
  "whyRu": "7 из 25 вакансий attorney просят навык юридических AI-инструментов словами, и ни одна не называет бренд.",
  "links": []
 },
 "law-p5": {
  "what": "Know Microsoft Office / 365 program by program — Word, Excel, Outlook and the rest, one by one. Postings name the programs one by one, so learn them one by one.",
  "whatRu": "Знайте Microsoft Office / 365 программу за программой — Word, Excel, Outlook и остальные, по одной. Вакансии называют программы по одной, поэтому и учите их по одной.",
  "how": [
   "List the programs the postings in your track name",
   "Open Microsoft’s own training page for the first program",
   "Practice the tasks your job does in that program",
   "Move to the next program only when the first one feels easy"
  ],
  "howRu": [
   "Выпишите программы, которые называют вакансии вашего трека",
   "Откройте страницу обучения Microsoft по первой программе",
   "Потренируйте задачи, которые ваша работа делает в этой программе",
   "Переходите к следующей программе, только когда первая даётся легко"
  ],
  "why": "Microsoft Office / 365 is still a stated gate in 12–13 of 21 senior paralegal postings.",
  "whyRu": "Microsoft Office / 365 — всё ещё заявленные ворота в 12–13 из 21 senior-вакансий paralegal.",
  "links": [
   {
    "t": "Microsoft 365 help & learning — Microsoft’s own training (official)",
    "u": "https://support.microsoft.com/en-us/training"
   }
  ]
 },
 "law-p6": {
  "what": "Only if your specialty is privacy: get CIPP/US. CIPP/US is the main privacy certificate. It proves you know US privacy laws and rules.",
  "whatRu": "Только если ваша специализация — privacy: получите CIPP/US. CIPP/US — главный сертификат по privacy. Он подтверждает, что вы знаете законы и правила privacy в США.",
  "how": [
   "Open the IAPP page for CIPP/US",
   "Read the exam blueprint — the list of topics the exam covers",
   "Study the topics on that list",
   "Sit the exam and add CIPP/US to your resume"
  ],
  "howRu": [
   "Откройте страницу IAPP по CIPP/US",
   "Прочитайте план экзамена — список тем, которые он покрывает",
   "Учите темы из этого списка",
   "Сдайте экзамен и добавьте CIPP/US в резюме"
  ],
  "why": "CIPP/US appeared in 3 of 3 privacy postings that named any certificate at all.",
  "whyRu": "CIPP/US встретился в 3 из 3 вакансий privacy, где сертификаты назывались вообще.",
  "links": [
   {
    "t": "IAPP — CIPP/US certification (official)",
    "u": "https://iapp.org/certify/cippus/"
   }
  ]
 },
 "law-k1": {
  "what": "Show your years as ONE practice area. When you write your resume and your story, make all your years read as years in that single area.",
  "whatRu": "Покажите свои годы как ОДНУ область практики. Когда пишете резюме и свою историю, сделайте так, чтобы все годы читались как годы в этой одной области.",
  "how": [
   "Write the name of your one area at the top of your resume",
   "Group your jobs and tasks under that area",
   "Cut or shrink work that belongs to other areas",
   "Use the same one-area story at interviews"
  ],
  "howRu": [
   "Напишите название вашей одной области вверху резюме",
   "Сгруппируйте места работы и задачи под этой областью",
   "Сократите или уберите работу из других областей",
   "Используйте ту же историю одной области на собеседованиях"
  ],
  "why": "Top postings ask for 5–10 years in a single practice area.",
  "whyRu": "Топовые вакансии просят 5–10 лет в одной области практики.",
  "links": [
   {
    "t": "BLS — Paralegals and Legal Assistants (official pay and outlook)",
    "u": "https://www.bls.gov/ooh/legal/paralegals-and-legal-assistants.htm"
   }
  ]
 },
 "law-k2": {
  "what": "Lead with business judgment. That means advice that helps the company and weighs the risk — practical advice that unblocks the business, not advice that only recites the law.",
  "whatRu": "Ведите с business judgment. Это советы, которые помогают компании и взвешивают риск, — практичные советы, которые разблокируют бизнес, а не только пересказывают закон.",
  "how": [
   "For one real question, write the risk in plain words",
   "Write what the company can do, not only what it cannot do",
   "Say which choice you would take and why",
   "Keep that example ready for interviews"
  ],
  "howRu": [
   "Для одного настоящего вопроса запишите риск простыми словами",
   "Запишите, что компания может сделать, а не только чего не может",
   "Скажите, какой выбор сделали бы вы и почему",
   "Держите этот пример готовым для собеседований"
  ],
  "why": "Business judgment is the #1 soft-skill phrase in top postings — 7+ of 25 name it.",
  "whyRu": "Business judgment — фраза №1 среди soft skills в топовых вакансиях: её называют 7+ из 25.",
  "links": []
 },
 "law-k3": {
  "what": "Apply at the specialist level, not the generalist level. Aim at senior specialist seats in your one practice area, with your platform and your proof ready.",
  "whatRu": "Подавайтесь на уровне specialist, а не generalist. Цельтесь в места senior specialist в вашей одной области практики, с готовой платформой и доказательствами.",
  "how": [
   "Save the specialist postings in your area",
   "Check your years, platform and proof against each posting",
   "Apply where your one-area story matches the posting",
   "Keep the posted pay band of each seat in your notes"
  ],
  "howRu": [
   "Сохраняйте вакансии specialist в вашей области",
   "Сверяйте свои годы, платформу и доказательства с каждой вакансией",
   "Подавайтесь туда, где ваша история одной области совпадает с вакансией",
   "Держите вилку оплаты каждого места в своих записях"
  ],
  "why": "Two seats to aim at: Gibson Dunn Sr. Corporate Paralegal pays $150K–$200K; Cooley pays $135,200–$176,800.",
  "whyRu": "Два места, в которые целиться: Gibson Dunn Sr. Corporate Paralegal платит $150K–$200K; Cooley платит $135,200–$176,800.",
  "links": []
 },
 "law-k4": {
  "what": "Door B gate: apply to law school only with clear math. The median first salary after law school must beat the debt you would carry. Median means the middle number.",
  "whatRu": "Ворота двери B: подавайтесь в law school только с ясной математикой. Медианная первая зарплата после law school должна бить долг, который вы возьмёте. Медиана — это число посередине.",
  "how": [
   "Take an LSAT diagnostic test to see your real level",
   "Pull the ABA employment reports for your target schools",
   "Write down each school’s median first salary",
   "Compare it with the debt you would leave with — apply only where the salary beats the debt"
  ],
  "howRu": [
   "Пройдите диагностический тест LSAT, чтобы увидеть свой настоящий уровень",
   "Возьмите отчёты ABA о трудоустройстве ваших целевых школ",
   "Запишите медианную первую зарплату каждой школы",
   "Сравните её с долгом, с которым вы выйдете, — подавайтесь только туда, где зарплата бьёт долг"
  ],
  "why": "The median first salary is $100,000 and the median J.D. debt is $112,500.",
  "whyRu": "Медианная первая зарплата — $100,000, а медианный долг за J.D. — $112,500.",
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
  "what": "Get a bachelor’s degree in accounting or finance. This is the first gate: without it, the rest of the CPA path does not open.",
  "whatRu": "Получите степень бакалавра в accounting или finance. Это первые ворота: без неё остальной путь CPA не открывается.",
  "how": [
   "Check that your degree is in accounting or finance, or plan to finish one",
   "Keep the diploma and transcripts ready to show",
   "If your degree is in another field, ask your state board what extra study it asks for"
  ],
  "howRu": [
   "Проверьте, что ваша степень — в accounting или finance, или запланируйте её получить",
   "Держите диплом и выписки готовыми показать",
   "Если степень в другой области, спросите board вашего штата, какую дополнительную учёбу он просит"
  ],
  "why": "Jobs ask for a bachelor’s in accounting or finance in 52 of 52 postings with clear requirements.",
  "whyRu": "Вакансии просят бакалавра в accounting или finance в 52 из 52 случаев с понятными требованиями.",
  "links": [
   {
    "t": "BLS — Accountants and Auditors (official pay and outlook)",
    "u": "https://www.bls.gov/ooh/business-and-financial/accountants-and-auditors.htm"
   }
  ]
 },
 "cpa-g2": {
  "what": "In week 1, check the license route of your state board. The state board is the office that gives the CPA license. In about 32 states the license now comes at 120 credits plus 2 years of experience, and on that route the fifth year of school costs $0.",
  "whatRu": "На неделе 1 проверьте маршрут лицензии в board вашего штата. Board штата — это офис, который выдаёт лицензию CPA. Примерно в 32 штатах лицензию теперь дают при 120 credits плюс 2 года опыта, и на этом маршруте пятый год учёбы стоит $0.",
  "how": [
   "Find your state board of accountancy",
   "Read its license route: how many credits and how many years of experience",
   "Write down which route you are on: 120 credits + 2 years, or 150 credits + 1 year",
   "Price the route before you pay for any extra school"
  ],
  "howRu": [
   "Найдите board of accountancy вашего штата",
   "Прочитайте его маршрут лицензии: сколько credits и сколько лет опыта",
   "Запишите, на каком маршруте вы: 120 credits + 2 года или 150 credits + 1 год",
   "Посчитайте цену маршрута до того, как платить за дополнительную учёбу"
  ],
  "why": "About 32 states now give the license at 120 credits + 2 years of experience; on that route the fifth year of school costs $0.",
  "whyRu": "Около 32 штатов теперь дают лицензию при 120 credits + 2 года опыта; на этом маршруте пятый год учёбы стоит $0.",
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
  "what": "Pass the CPA exam. It has 3 Core sections and 1 Discipline section, and you must pass all of them inside one rolling window — 30 months in most states. Plan money for one retake.",
  "whatRu": "Сдайте CPA exam. У него 3 секции Core и 1 секция Discipline, и все их нужно сдать внутри одного скользящего окна — 30 месяцев в большинстве штатов. Заложите деньги на одну пересдачу.",
  "how": [
   "Apply through your state board and get your Notice to Schedule",
   "Start with FAR, the hardest section, while the window is fresh",
   "Put study hours on the calendar like work shifts",
   "Keep the end of your 30-month window in sight at all times"
  ],
  "howRu": [
   "Подайте заявку через board вашего штата и получите Notice to Schedule",
   "Начните с FAR — самой трудной секции — пока окно свежее",
   "Поставьте часы учёбы в календарь, как рабочие смены",
   "Всегда держите в виду конец вашего 30-месячного окна"
  ],
  "why": "Only 42% pass FAR the first time — FAR is the hardest section.",
  "whyRu": "FAR с первого раза сдают только 42% — FAR самая трудная секция.",
  "links": [
   {
    "t": "This Way To CPA (AICPA) — understanding the CPA Exam (official)",
    "u": "https://www.thiswaytocpa.com/exam/"
   }
  ]
 },
 "cpa-g4": {
  "what": "Pick the Discipline section by your niche — your part of the market — not by pass rate. BAR leads to technical accounting and advisory. ISC leads to IT audit and AI governance. TCP leads to specialized tax.",
  "whatRu": "Выбирайте секцию Discipline по своей нише — вашей части рынка, — а не по проценту сдачи. BAR ведёт в technical accounting и advisory. ISC ведёт в IT audit и AI governance. TCP ведёт в specialized tax.",
  "how": [
   "Name the niche you want to work in",
   "Match it: BAR for technical accounting and advisory, ISC for IT audit and AI governance, TCP for specialized tax",
   "Write the match down before you register",
   "Do not switch the section only because another one looks easier"
  ],
  "howRu": [
   "Назовите нишу, в которой хотите работать",
   "Сопоставьте: BAR — technical accounting и advisory, ISC — IT audit и AI governance, TCP — specialized tax",
   "Запишите это сопоставление до регистрации",
   "Не меняйте секцию только потому, что другая кажется легче"
  ],
  "why": "The Discipline choice is a niche choice: BAR, ISC and TCP lead to three different doors.",
  "whyRu": "Выбор Discipline — это выбор ниши: BAR, ISC и TCP ведут в три разные двери.",
  "links": [
   {
    "t": "This Way To CPA (AICPA) — understanding the CPA Exam (official)",
    "u": "https://www.thiswaytocpa.com/exam/"
   }
  ]
 },
 "cpa-g5": {
  "what": "Work under a licensed CPA and get that experience signed. You need 1 year of this work if you studied 150 credits, and 2 years if you studied 120 credits.",
  "whatRu": "Работайте под руководством лицензированного CPA и получите подпись под этим опытом. Вам нужен 1 год такой работы, если вы учились 150 credits, и 2 года, если учились 120 credits.",
  "how": [
   "Check that your supervisor is a licensed CPA",
   "Ask how your experience will be signed before you start counting it",
   "Keep a simple log of the work you do under that CPA",
   "Send the experience for signing as soon as your route allows"
  ],
  "howRu": [
   "Проверьте, что ваш руководитель — лицензированный CPA",
   "Спросите, как ваш опыт будет подписан, до того как начнёте его считать",
   "Ведите простой журнал работы, которую делаете под этим CPA",
   "Отправьте опыт на подпись, как только ваш маршрут позволит"
  ],
  "why": "Licensure needs supervised experience: 1 year on the 150-credit route, 2 years on the 120-credit route, signed by a licensed CPA in most states.",
  "whyRu": "Лицензии нужен опыт под руководством: 1 год на маршруте 150 credits, 2 года на маршруте 120 credits, в большинстве штатов подписанный лицензированным CPA.",
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
  "what": "Learn NetSuite well. NetSuite is a program where companies keep their money records. Learn to do real company work inside it, not only to look at screens.",
  "whatRu": "Хорошо выучите NetSuite. Это программа, где компании ведут свои денежные записи. Научитесь делать внутри неё настоящую работу компании, а не только смотреть на экраны.",
  "how": [
   "Get access to NetSuite at your job, or ask to join a NetSuite project",
   "Learn the money records your team keeps in NetSuite",
   "Do the month-end tasks inside NetSuite yourself",
   "Write down which NetSuite tasks you can now run alone"
  ],
  "howRu": [
   "Получите доступ к NetSuite на работе или попроситесь в проект с NetSuite",
   "Выучите денежные записи, которые ваша команда ведёт в NetSuite",
   "Сами делайте задачи конца месяца внутри NetSuite",
   "Запишите, какие задачи в NetSuite вы теперь можете вести сами"
  ],
  "why": "18 of 52 job posts ask for NetSuite; for senior accountant jobs in companies it is 10 of 10.",
  "whyRu": "NetSuite просят 18 из 52 вакансий; для senior accountant в компаниях это 10 из 10.",
  "links": []
 },
 "cpa-p2": {
  "what": "Learn GAAP for real. GAAP is the rulebook for how companies count money. Start with ASC 606, the rule for counting money from customers. Then ASC 842, the rule for rent deals, and ASC 718, the rule for paying workers with company stock. SOX 404 is the rule for money checks inside big public companies.",
  "whatRu": "Выучите GAAP по-настоящему. GAAP — книга правил, как компании считают деньги. Начните с ASC 606 — правила, как считать деньги от клиентов. Потом ASC 842 — правило для сделок аренды, и ASC 718 — правило, как платить работникам акциями компании. SOX 404 — правило для проверок денег внутри больших публичных компаний.",
  "how": [
   "Start with ASC 606 and work one real revenue case through it",
   "Then take ASC 842 with one real rent deal",
   "Then take ASC 718 with one real stock-pay case",
   "If you aim at SEC reporting jobs, add SOX 404 last"
  ],
  "howRu": [
   "Начните с ASC 606 и проведите через него один настоящий случай выручки",
   "Потом возьмите ASC 842 с одной настоящей сделкой аренды",
   "Потом возьмите ASC 718 с одним настоящим случаем оплаты акциями",
   "Если целитесь в вакансии SEC reporting, добавьте SOX 404 последним"
  ],
  "why": "Senior job posts name ASC 606 again and again; ASC 842 and ASC 718 appear in SEC reporting, and SOX 404 shows up in SEC reporting jobs.",
  "whyRu": "Senior-вакансии называют ASC 606 снова и снова; ASC 842 и ASC 718 встречаются в SEC reporting, а SOX 404 — в вакансиях SEC reporting.",
  "links": []
 },
 "cpa-p3": {
  "what": "Learn Workiva. Workiva is a program for company reports. It matters in one niche: SEC reporting — reports for public companies — and technical roles.",
  "whatRu": "Выучите Workiva. Workiva — программа для отчётов компаний. Она важна в одной нише: SEC reporting — отчёты для публичных компаний — и в technical-ролях.",
  "how": [
   "Decide first that SEC reporting or a technical role is your niche",
   "Learn how a company report is built inside Workiva",
   "Practice on a report task, not only on lessons",
   "Write down the reporting tasks you can run in Workiva"
  ],
  "howRu": [
   "Сначала решите, что SEC reporting или technical-роль — ваша ниша",
   "Выучите, как отчёт компании собирается внутри Workiva",
   "Тренируйтесь на задаче отчёта, а не только на уроках",
   "Запишите задачи отчётности, которые вы можете вести в Workiva"
  ],
  "why": "6 postings name Workiva, and all of them sit in SEC reporting and technical roles.",
  "whyRu": "Workiva называют 6 вакансий, и все они — в ролях SEC reporting и technical.",
  "links": []
 },
 "cpa-p4": {
  "what": "Learn Excel past the basics. Know pivot tables — tables that sum up big lists in seconds — and VLOOKUP. If you aim at advisory jobs, go further: financial modeling, building money plans in Excel.",
  "whatRu": "Выучите Excel выше базового уровня. Знайте pivot tables — таблицы, которые за секунды сводят большие списки, — и VLOOKUP. Если целитесь в advisory, идите дальше: financial modeling — строить денежные планы в Excel.",
  "how": [
   "Build a pivot table from a real list at work",
   "Use VLOOKUP to join two real lists",
   "Repeat both until you can do them without help",
   "For advisory, build one full money plan — a model — in Excel"
  ],
  "howRu": [
   "Сделайте pivot table из настоящего списка на работе",
   "Используйте VLOOKUP, чтобы соединить два настоящих списка",
   "Повторяйте оба навыка, пока не сможете без помощи",
   "Для advisory постройте один полный денежный план — модель — в Excel"
  ],
  "why": "Staff jobs screen for pivot tables and VLOOKUP in 8 of 8 postings; advisory jobs ask for financial modeling.",
  "whyRu": "Вакансии staff проверяют pivot tables и VLOOKUP в 8 из 8 случаев; вакансии advisory просят financial modeling.",
  "links": [
   {
    "t": "Microsoft 365 help & learning — Microsoft’s own Excel and Office training (official)",
    "u": "https://support.microsoft.com/en-us/training"
   }
  ]
 },
 "cpa-p5": {
  "what": "Learn Power BI. Power BI turns data into charts. Learn it if you aim at advisory work — that is where the postings name it.",
  "whatRu": "Выучите Power BI. Power BI превращает данные в графики. Учите его, если целитесь в advisory, — именно там вакансии его называют.",
  "how": [
   "Take one set of real numbers from your work",
   "Turn it into a clear chart in Power BI",
   "Show the chart to one person and check they understand it",
   "Save the chart as a proof piece for advisory applications"
  ],
  "howRu": [
   "Возьмите один набор настоящих чисел из вашей работы",
   "Превратите его в понятный график в Power BI",
   "Покажите график одному человеку и проверьте, что он понятен",
   "Сохраните график как работу-доказательство для заявок в advisory"
  ],
  "why": "Power BI appears in 4 postings, all of them advisory; SQL appears in 0 of 52 postings.",
  "whyRu": "Power BI встречается в 4 вакансиях, и все они — advisory; SQL встречается в 0 из 52 вакансий.",
  "links": [
   {
    "t": "Training for Power BI — Microsoft Learn",
    "u": "https://learn.microsoft.com/en-us/training/powerplatform/power-bi"
   }
  ]
 },
 "cpa-p6": {
  "what": "Pick ONE industry — one kind of business — and go deep. The top pay bands name their industry. Breadth is not priced; depth is.",
  "whatRu": "Выберите ОДНУ отрасль — один вид бизнеса — и идите глубоко. Верхние вилки оплаты называют свою отрасль. Широта не оплачивается; глубина — да.",
  "how": [
   "Name the one industry you will stay in: for example manufacturing cost accounting, SaaS revenue, pass-through entities, or HNW clients",
   "Take your next seat inside that industry",
   "Learn the money rules that industry uses again and again",
   "Write your resume so the industry reads clearly"
  ],
  "howRu": [
   "Назовите одну отрасль, в которой останетесь: например manufacturing cost accounting, SaaS revenue, pass-through entities или клиенты HNW",
   "Возьмите следующее место внутри этой отрасли",
   "Выучите денежные правила, которые эта отрасль использует снова и снова",
   "Напишите резюме так, чтобы отрасль читалась ясно"
  ],
  "why": "The top pay bands name their industry — manufacturing cost accounting, SaaS revenue, pass-through entities, and HNW and UHNW clients are the named ones.",
  "whyRu": "Верхние вилки оплаты называют свою отрасль — названы manufacturing cost accounting, SaaS revenue, pass-through entities и клиенты HNW и UHNW.",
  "links": [
   {
    "t": "BLS — Accountants and Auditors (official pay and outlook)",
    "u": "https://www.bls.gov/ooh/business-and-financial/accountants-and-auditors.htm"
   }
  ]
 },
 "cpa-k1": {
  "what": "Become the systems person in your current seat. Own one piece of the tech work: run part of the close automation (the close is the month-end money count), own the reconciliation tooling (checking that two records match), or own the ERP — the main money program of the company.",
  "whatRu": "Станьте системным человеком на вашем текущем месте. Возьмите один кусок технической работы: ведите часть автоматизации закрытия (закрытие — подсчёт денег в конце месяца), ведите инструменты сверки (проверки, что две записи совпадают) или ведите ERP — главную денежную программу компании.",
  "how": [
   "Pick one piece: close automation, reconciliation tooling, or the ERP",
   "Ask your manager to make that piece yours in writing",
   "Run it at the next month-end close",
   "Write down what you now own"
  ],
  "howRu": [
   "Выберите один кусок: автоматизация закрытия, инструменты сверки или ERP",
   "Попросите руководителя закрепить этот кусок за вами письменно",
   "Проведите его на следующем закрытии месяца",
   "Запишите, чем вы теперь владеете"
  ],
  "why": "The Full Report puts this in months 0–3: controller and advisory postings ask who ran the stack, not who was processed by it.",
  "whyRu": "Full Report ставит это в месяцы 0–3: вакансии controller и advisory спрашивают, кто вёл стек, а не кого стек обрабатывал.",
  "links": []
 },
 "cpa-k2": {
  "what": "Write down one process you made better. Show the hours before and the hours after on one page. That one page is your proof.",
  "whatRu": "Запишите один процесс, который вы улучшили. Покажите часы до и часы после на одной странице. Эта одна страница — ваше доказательство.",
  "how": [
   "Pick one process you touched",
   "Write the hours it took before your change",
   "Write the hours it takes now",
   "Keep both numbers on one page and bring that page to applications"
  ],
  "howRu": [
   "Выберите один процесс, который вы трогали",
   "Запишите часы, которые он занимал до вашего изменения",
   "Запишите часы, которые он занимает сейчас",
   "Держите оба числа на одной странице и берите эту страницу на заявки"
  ],
  "why": "This one page is the proof the good postings screen for.",
  "whyRu": "Эта одна страница — доказательство, которое ищут хорошие вакансии.",
  "links": []
 },
 "cpa-k3": {
  "what": "Build one proof piece for your niche. Make one technical memo — a short written note that explains a hard case — or one model, or run one controls project. Controls are the checks that keep money safe. Write it all down.",
  "whatRu": "Сделайте одну работу-доказательство для своей ниши. Напишите одно техническое memo — короткую записку, которая объясняет трудный случай, — или сделайте одну модель, или проведите один проект по controls. Controls — проверки, которые берегут деньги. Всё запишите.",
  "how": [
   "Choose the piece that fits your niche: memo, model, or controls project",
   "Build it from a real case, not a made-up one",
   "Write down what the case was and what you decided",
   "Save it where you can show it at an application"
  ],
  "howRu": [
   "Выберите работу под вашу нишу: memo, модель или проект по controls",
   "Сделайте её из настоящего случая, а не выдуманного",
   "Запишите, что это был за случай и что вы решили",
   "Сохраните её там, где сможете показать на заявке"
  ],
  "why": "The Full Report puts this proof piece in months 4–9 of the plan.",
  "whyRu": "Full Report ставит эту работу-доказательство в месяцы 4–9 плана.",
  "links": []
 },
 "cpa-k4": {
  "what": "Save a target list. Collect 10 or more real postings in your niche, read what they ask for, and close your gaps one by one. A gap is a skill they ask for and you do not have yet.",
  "whatRu": "Сохраните целевой список. Соберите 10 или больше настоящих вакансий в вашей нише, прочитайте, что они просят, и закрывайте пробелы один за другим. Пробел — навык, который они просят, а у вас его пока нет.",
  "how": [
   "Save 10 or more real postings in your niche",
   "Write down every skill they ask for",
   "Mark the skills you do not have yet — those are your gaps",
   "Close one gap, then re-check the list"
  ],
  "howRu": [
   "Сохраните 10 или больше настоящих вакансий в вашей нише",
   "Выпишите каждый навык, который они просят",
   "Отметьте навыки, которых у вас пока нет, — это ваши пробелы",
   "Закройте один пробел, потом проверьте список снова"
  ],
  "why": "The month-3 decision gate asks for a target seat list of 10+ real postings in your niche.",
  "whyRu": "Ворота решения месяца 3 просят целевой список из 10+ настоящих вакансий в вашей нише.",
  "links": []
 },
 "cpa-k5": {
  "what": "If you want an FDD seat or a top industry seat, you need a public accounting past. FDD means checking a company’s money before a sale. Public accounting means work at an accounting firm.",
  "whatRu": "Если хотите место FDD или верхнее место в отрасли, вам нужно прошлое в public accounting. FDD — проверка денег компании перед продажей. Public accounting — работа в бухгалтерской фирме.",
  "how": [
   "Decide whether FDD or a top industry seat is your target",
   "Plan a firm seat — audit or tax at an accounting firm — into your route",
   "Stay long enough for the firm years to count",
   "Name those firm years clearly when you apply to industry or FDD"
  ],
  "howRu": [
   "Решите, ваша ли цель — FDD или верхнее место в отрасли",
   "Запланируйте в маршрут место в фирме — audit или tax в бухгалтерской фирме",
   "Останьтесь достаточно долго, чтобы годы в фирме засчитались",
   "Ясно называйте эти годы в фирме, когда подаётесь в отрасль или FDD"
  ],
  "why": "11 postings outside public accounting ask for a firm background in plain words.",
  "whyRu": "11 вакансий вне public accounting просят опыт работы в фирме прямыми словами.",
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
  "what": "Hold an active RN license in your state, and keep it clean — no discipline, no limits on your practice. If you live in a compact state, get the multistate version: one license that works in many states. That multistate license is the key to travel jobs later.",
  "whatRu": "Держите действующую лицензию RN в вашем штате и держите её чистой — без взысканий и без ограничений на практику. Если вы живёте в штате compact, оформите multistate-версию: одна лицензия, которая работает во многих штатах. Эта multistate-лицензия — ключ к работам travel позже.",
  "how": [
   "Check your license status on your state board of nursing site",
   "If your state is in the Nurse Licensure Compact, apply for the multistate license",
   "Set a reminder before the renewal date",
   "Keep the license clean — no discipline on your record"
  ],
  "howRu": [
   "Проверьте статус лицензии на сайте совета медсестёр вашего штата",
   "Если ваш штат входит в Nurse Licensure Compact, подайте на multistate-лицензию",
   "Поставьте напоминание до даты продления",
   "Держите лицензию чистой — без взысканий в вашем деле"
  ],
  "why": "16 of 16 postings ask for an active RN license, and 40 states use the compact system now.",
  "whyRu": "Действующую лицензию RN просят 16 из 16 вакансий, а систему compact сейчас используют 40 штатов.",
  "links": [
   {
    "t": "NCSBN — Nurse Licensure Compact",
    "u": "https://www.ncsbn.org/nurse-licensure-compact.htm"
   }
  ]
 },
 "nur-g2": {
  "what": "Get the license the cheap way: start with the ADN, the short nursing degree. You pass the same NCLEX — the nurse license exam — as BSN graduates. Then do the bridge to the BSN while you already work and earn.",
  "whatRu": "Получите лицензию дёшево: начните с ADN — короткой степени медсестры. Вы сдаёте тот же NCLEX — экзамен на лицензию медсестры — что и выпускники BSN. Потом делайте мост до BSN, уже работая и зарабатывая.",
  "how": [
   "Compare the ADN price at a public college — Wake Tech is the benchmark in this package",
   "Check the program leads to the NCLEX-RN exam",
   "Apply and finish the ADN",
   "Pass the NCLEX and get the license",
   "Plan the RN-to-BSN bridge for your first year of work"
  ],
  "howRu": [
   "Сравните цену ADN в публичном колледже — Wake Tech в этом пакете является ориентиром",
   "Проверьте, что программа ведёт к экзамену NCLEX-RN",
   "Подайте документы и закончите ADN",
   "Сдайте NCLEX и получите лицензию",
   "Запланируйте мост RN-to-BSN на первый год работы"
  ],
  "why": "The ADN costs $5,472 in total tuition at Wake Tech, and its graduates pass the same NCLEX as the BSN.",
  "whyRu": "ADN стоит $5,472 за всё обучение в Wake Tech, и его выпускники сдают тот же NCLEX, что и BSN.",
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
  "what": "Keep your BLS certificate current. BLS is basic life support — help in the first minutes of an emergency, like CPR. When it expires, renew it before you apply for jobs.",
  "whatRu": "Держите сертификат BLS действующим. BLS — это basic life support, помощь в первые минуты беды, например CPR. Когда срок заканчивается, продлите его до подачи на работы.",
  "how": [
   "Check the expiry date on your BLS card",
   "Pick a classroom course or a blended course — online part plus hands-on skills session",
   "Pass the course and get the new card",
   "Save a copy where an employer can see it"
  ],
  "howRu": [
   "Проверьте дату окончания на вашей карте BLS",
   "Выберите очный курс или смешанный курс — онлайн-часть плюс практическая сессия",
   "Пройдите курс и получите новую карту",
   "Сохраните копию там, где работодатель сможет её увидеть"
  ],
  "why": "15 of 16 postings ask for a current BLS certificate.",
  "whyRu": "Действующий сертификат BLS просят 15 из 16 вакансий.",
  "links": [
   {
    "t": "American Heart Association — BLS training",
    "u": "https://cpr.heart.org/en/cpr-courses-and-kits/healthcare-professional/basic-life-support-bls-training"
   }
  ]
 },
 "nur-g4": {
  "what": "Get ACLS, the advanced emergency certificate. It builds on BLS and covers leading help in a serious emergency. Most specialty jobs ask for it at hire or in the first 30–90 days.",
  "whatRu": "Получите ACLS — продвинутый сертификат помощи в беде. Он строится на BLS и учит вести помощь при серьёзной беде. Большинство работ по специальности просят его при найме или в первые 30–90 дней.",
  "how": [
   "Hold a current BLS card first",
   "Take the AHA ACLS course for healthcare professionals",
   "Pass the course and get the ACLS card",
   "If a job gives you 30–90 days, book the course in your first weeks"
  ],
  "howRu": [
   "Сначала держите действующую карту BLS",
   "Пройдите курс ACLS AHA для медицинских работников",
   "Пройдите курс и получите карту ACLS",
   "Если работа даёт вам 30–90 дней, запишитесь на курс в первые недели"
  ],
  "why": "10 of 16 postings name ACLS — this is the real specialty gate.",
  "whyRu": "ACLS называют 10 из 16 вакансий — это настоящие ворота в специальность.",
  "links": [
   {
    "t": "American Heart Association — Healthcare professional courses (ACLS and BLS)",
    "u": "https://cpr.heart.org/en/cpr-courses-and-kits/healthcare-professional/"
   }
  ]
 },
 "nur-g5": {
  "what": "For the NP door, later: get board certification in your specialty. Board certification is an exam that proves your specialty. You also need the state NP license and the DEA registration — the DEA lets you prescribe strong drugs.",
  "whatRu": "Для двери NP, на потом: получите board certification по вашей специальности. Board certification — это экзамен, который доказывает вашу специальность. Ещё нужны лицензия NP штата и регистрация DEA — DEA даёт право выписывать сильные лекарства.",
  "how": [
   "Pick your NP specialty first",
   "Find the board certification exam for that specialty",
   "Check what the exam asks for before you apply",
   "Pass the exam and get certified",
   "Then apply for the state NP license and the DEA registration"
  ],
  "howRu": [
   "Сначала выберите специальность NP",
   "Найдите экзамен board certification по этой специальности",
   "Проверьте, что экзамен требует, до подачи",
   "Сдайте экзамен и получите сертификат",
   "Потом подайте на лицензию NP штата и регистрацию DEA"
  ],
  "why": "In practice, 10 of 10 NP postings ask for board certification in the specialty.",
  "whyRu": "На практике board certification по специальности просят 10 из 10 вакансий NP.",
  "links": [
   {
    "t": "ANCC — Certifications (ANA / nursingworld.org)",
    "u": "https://www.nursingworld.org/our-certifications/"
   }
  ]
 },
 "nur-p1": {
  "what": "Take a specialty first job. Aim for the ICU, the ED or the OR. The ICU is intensive care — the sickest patients. The ED is the emergency room. The OR is the operating room. A general floor can be a start, but the specialty seat is the plan.",
  "whatRu": "Возьмите первую работу по специальности. Цельтесь в ICU, ED или OR. ICU — это интенсивная терапия, самые тяжёлые пациенты. ED — это отделение скорой помощи. OR — это операционная. Общее отделение может быть стартом, но план — место по специальности.",
  "how": [
   "List hospitals near you with ICU, ED and OR units",
   "Apply to specialty seats and to residencies that lead to them",
   "In the interview, ask how new nurses move into the specialty",
   "Pick the offer with a clear specialty path, not only the first pay"
  ],
  "howRu": [
   "Составьте список больниц рядом с вами с отделениями ICU, ED и OR",
   "Подавайтесь на места по специальности и в residency, которые к ним ведут",
   "На собеседовании спросите, как новые медсёстры переходят в специальность",
   "Выбирайте предложение с ясным путём в специальность, а не только по первой оплате"
  ],
  "why": "Your specialty opens travel pay, the CRNA door and the NP doors that pay.",
  "whyRu": "Ваша специальность открывает оплату travel, дверь CRNA и те двери NP, которые платят.",
  "links": [
   {
    "t": "BLS — Registered Nurses (Occupational Outlook Handbook)",
    "u": "https://www.bls.gov/ooh/healthcare/registered-nurses.htm"
   }
  ]
 },
 "nur-p2": {
  "what": "Bank 2 years in your specialty. Stay in the same specialty and build real time in it. The travel market starts at 2 years, and these years also lift you to the top staff pay bands — a pay band is the pay range in a posting.",
  "whatRu": "Накопите 2 года в вашей специальности. Оставайтесь в той же специальности и набирайте в ней настоящее время. Рынок travel начинается с 2 лет, и эти годы также поднимают вас к верхним вилкам оплаты staff — вилка это диапазон оплаты в вакансии.",
  "how": [
   "Stay in one specialty — do not hop between units",
   "Keep a simple record of your start date and your unit",
   "Ask for harder cases as you grow",
   "At 2 years, check travel postings in your specialty"
  ],
  "howRu": [
   "Оставайтесь в одной специальности — не прыгайте между отделениями",
   "Ведите простой учёт даты старта и вашего отделения",
   "Просите более сложные случаи по мере роста",
   "На отметке 2 года проверьте вакансии travel по вашей специальности"
  ],
  "why": "8 of 10 travel postings ask for 2 years in the specialty.",
  "whyRu": "2 года в специальности просят 8 из 10 вакансий travel.",
  "links": [
   {
    "t": "NCSBN — Nurse Licensure Compact (the travel door key)",
    "u": "https://www.ncsbn.org/nurse-licensure-compact.htm"
   }
  ]
 },
 "nur-p3": {
  "what": "Start an online RN-to-BSN in your first year of work. The RN-to-BSN is the bridge — extra study that turns your ADN into a BSN while you work. Start early, while the first job is still new.",
  "whatRu": "Начните онлайн RN-to-BSN в первый год работы. RN-to-BSN — это мост, доучивание, которое превращает ваш ADN в BSN, пока вы работаете. Начинайте рано, пока первая работа ещё новая.",
  "how": [
   "Look for an online RN-to-BSN program you can do while working",
   "Check the total price before you sign up",
   "Ask your employer if it helps pay — check its own policy",
   "Enroll in your first year of work",
   "Study at a pace you can hold next to shifts"
  ],
  "howRu": [
   "Найдите онлайн-программу RN-to-BSN, которую можно делать на работе",
   "Проверьте полную цену до записи",
   "Спросите работодателя, помогает ли он с оплатой — проверьте его правила",
   "Запишитесь в первый год работы",
   "Учитесь в темпе, который выдержите рядом со сменами"
  ],
  "why": "25% of employers hard-require the BSN for new hires and 69.8% prefer it (AACN); the online bridge costs $12,000 in total and can take as little as 2 semesters in Utah.",
  "whyRu": "25% работодателей жёстко требуют BSN у новых сотрудников, а 69.8% предпочитают его (AACN); онлайн-мост стоит $12,000 за всё и в Utah может занять всего 2 семестра.",
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
  "what": "Take your specialty certificate when your experience lets you. For ICU nurses, it is the CCRN. It is not the ticket in — jobs do not require it. It sets you apart, and it tells CRNA schools you are serious.",
  "whatRu": "Сдайте сертификат по специальности, когда опыт позволит. Для медсестёр ICU это CCRN. Это не билет внутрь — работы его не требуют. Он выделяет вас и говорит школам CRNA, что вы серьёзны.",
  "how": [
   "Work in direct care of acutely and critically ill patients",
   "Check the CCRN practice-hour rules on the AACN page",
   "Apply when your hours meet the rule",
   "Prepare for the exam and sit it"
  ],
  "howRu": [
   "Работайте в прямом уходе за остро и критически больными пациентами",
   "Проверьте правила часов практики CCRN на странице AACN",
   "Подайте, когда ваши часы выполнят правило",
   "Подготовьтесь к экзамену и сдайте его"
  ],
  "why": "Jobs prefer the CCRN in 3 of 16 RN postings and require it in 0 — it is a differentiator, not a gate.",
  "whyRu": "Работы предпочитают CCRN в 3 из 16 вакансий RN и требуют его в 0 — это отличие, а не ворота.",
  "links": [
   {
    "t": "AACN — Get your CCRN certification",
    "u": "https://www.aacn.org/certification/get-certified/ccrn-adult"
   }
  ]
 },
 "nur-p5": {
  "what": "Become an AI superuser in your unit. Learn the AI tools of your hospital better than most nurses do. Learn them in real work, on real shifts — not as a course on the side.",
  "whatRu": "Станьте суперпользователем AI в вашем отделении. Выучите AI-инструменты вашей больницы лучше, чем большинство медсестёр. Учите их в настоящей работе, на настоящих сменах — а не как курс сбоку.",
  "how": [
   "List the AI tools your hospital already uses on your unit",
   "Learn one tool well and use it every shift",
   "Check the AI output before you trust it — the nurse still owns the note",
   "Help a colleague learn what you learned",
   "Ask to join any new AI rollout on your unit"
  ],
  "howRu": [
   "Составьте список AI-инструментов, которые ваша больница уже использует в вашем отделении",
   "Хорошо выучите один инструмент и пользуйтесь им каждую смену",
   "Проверяйте результат AI, прежде чем ему доверять — запись всё равно отвечает медсестра",
   "Помогите коллеге выучить то, что выучили вы",
   "Просите включить вас в любой новый запуск AI в вашем отделении"
  ],
  "why": "More than three-quarters of nurses already use AI every day, and only about 10% are superusers (McKinsey).",
  "whyRu": "Больше трёх четвертей медсестёр уже пользуются AI каждый день, а суперпользователей только около 10% (McKinsey).",
  "links": []
 },
 "nur-k1": {
  "what": "Rank residency offers by the ladder, not by the first pay. A residency is a training job for new nurses. A structured residency — training with a clear plan — protects you in the hard first year.",
  "whatRu": "Оценивайте предложения residency по лестнице, а не по первой оплате. Residency — это учебная работа для новых медсестёр. Структурированная residency — обучение с ясным планом — защищает вас в трудный первый год.",
  "how": [
   "For each offer, write down the training plan it promises",
   "Ask if the residency is structured — a clear plan, a coach, a set length",
   "Ask where its nurses go after year one — which units, which specialties",
   "Compare ladders first, pay second",
   "Pick the offer that keeps your specialty path open"
  ],
  "howRu": [
   "Для каждого предложения запишите план обучения, который оно обещает",
   "Спросите, структурированная ли residency — ясный план, наставник, заданный срок",
   "Спросите, куда её медсёстры идут после первого года — в какие отделения, в какие специальности",
   "Сравнивайте сначала лестницы, потом оплату",
   "Выбирайте предложение, которое держит ваш путь в специальность открытым"
  ],
  "why": "22.7% of new RNs leave in their first year (NSI) — a structured residency protects you.",
  "whyRu": "22.7% новых RN уходят в первый год (NSI) — структурированная residency защищает вас.",
  "links": []
 },
 "nur-k2": {
  "what": "Move to the ICU, ED or OR by month 18–24. If your hospital cannot move you by month 24, change hospitals. Do not stay a third year on a general floor — that is the one unforced error in this plan.",
  "whatRu": "Перейдите в ICU, ED или OR к месяцу 18–24. Если ваша больница не может перевести вас к месяцу 24, меняйте больницу. Не оставайтесь третий год на общем отделении — это единственная невынужденная ошибка во всём плане.",
  "how": [
   "From month 12, tell your manager you want the specialty move",
   "Build the transfer file: your cases, your certs, your record",
   "Apply for internal ICU, ED or OR openings",
   "At month 18–24, take the move",
   "If there is no move by month 24, apply to other hospitals"
  ],
  "howRu": [
   "С месяца 12 скажите менеджеру, что хотите переход в специальность",
   "Соберите файл перевода: ваши случаи, ваши сертификаты, ваш учёт",
   "Подавайтесь на внутренние openings ICU, ED или OR",
   "На месяце 18–24 сделайте переход",
   "Если перехода нет к месяцу 24, подавайтесь в другие больницы"
  ],
  "why": "Experienced specialty nurses get sign-on bonuses of $10K–$25K — a sign-on bonus is money you get for joining.",
  "whyRu": "Опытные медсёстры по специальности получают sign-on бонусы $10K–$25K — sign-on бонус это деньги за приход на работу.",
  "links": []
 },
 "nur-k3": {
  "what": "Get charge nurse experience. A charge nurse leads the shift. Relief charge means you lead when the main charge nurse is away. This is the stated way into leadership — the assistant nurse manager posting.",
  "whatRu": "Получите опыт charge nurse. Charge nurse ведёт смену. Relief charge — вы ведёте смену, когда главной charge nurse нет. Это заявленный путь в лидерство — в вакансию assistant nurse manager.",
  "how": [
   "Tell your manager you want relief charge shifts",
   "Take relief charge when the main charge nurse is away",
   "Lead the shift: assignments, problems, handover",
   "Keep a record of the shifts you led",
   "Use that record when you apply for assistant nurse manager"
  ],
  "howRu": [
   "Скажите менеджеру, что хотите смены relief charge",
   "Берите relief charge, когда главной charge nurse нет",
   "Ведите смену: назначения, проблемы, передача смены",
   "Ведите учёт смен, которые вы вели",
   "Используйте этот учёт, когда подаётесь на assistant nurse manager"
  ],
  "why": "The assistant nurse manager posting pays $61.91–$97.72/hr and was the only RN posting that required a BSN.",
  "whyRu": "Вакансия assistant nurse manager платит $61.91–$97.72/hr и была единственной вакансией RN, где требовался BSN.",
  "links": [
   {
    "t": "BLS — Registered Nurses (advancement: charge nurse to management)",
    "u": "https://www.bls.gov/ooh/healthcare/registered-nurses.htm"
   }
  ]
 },
 "nur-k4": {
  "what": "At the NP gate, in year 3–5, go NP only with the right specialty. Pick the specialty by posted pay and by fit. Pick your state with care too: in a Restricted state a doctor must watch your work; in a Full Practice state you work on your own.",
  "whatRu": "У ворот NP, на год 3–5, идите в NP только с правильной специальностью. Выбирайте специальность по опубликованной оплате и по тому, подходит ли она вам. Штат тоже выбирайте с умом: в штате Restricted врач должен следить за вашей работой; в штате Full Practice вы работаете сами.",
  "how": [
   "List NP specialties and their posted pay",
   "Put psych and the medical specialties at the top of the list — not the default generalist path",
   "Check your state on the AANP practice map: Full Practice, Reduced or Restricted",
   "If you may move, weigh a Full Practice state",
   "Choose specialty and state before you choose a school"
  ],
  "howRu": [
   "Составьте список специальностей NP и их опубликованной оплаты",
   "Поставьте psych и медицинские специальности наверх списка — а не путь generalist по умолчанию",
   "Проверьте ваш штат на карте практики AANP: Full Practice, Reduced или Restricted",
   "Если вы можете переехать, взвесьте штат Full Practice",
   "Выбирайте специальность и штат до выбора школы"
  ],
  "why": "Psych posts $200K–$257K; CA, TX and FL are Restricted practice, and 27 states + DC are Full Practice.",
  "whyRu": "Psych публикует $200K–$257K; CA, TX и FL — Restricted practice, а 27 штатов + DC — Full Practice.",
  "links": [
   {
    "t": "AANP — State advocacy and State Practice Environment",
    "u": "https://www.aanp.org/advocacy/state"
   }
  ]
 },
 "nur-k5": {
  "what": "Buy the MSN plus the certificate. Do not pay extra for the DNP. The MSN is the master’s degree the top postings hire on. CRNA is the one exception: there, the doctorate is the license itself.",
  "whatRu": "Покупайте MSN плюс сертификат. Не платите лишнего за DNP. MSN — это магистерская степень, с которой нанимают топовые вакансии. CRNA — единственное исключение: там докторская степень и есть сама лицензия.",
  "how": [
   "Compare MSN programs by total price",
   "Check the program leads to your specialty board certification",
   "Price the DNP version of the same path and see the extra cost",
   "Choose MSN plus certification — unless your target is CRNA",
   "For CRNA, plan for the doctorate, because there it is the license"
  ],
  "howRu": [
   "Сравните программы MSN по полной цене",
   "Проверьте, что программа ведёт к board certification по вашей специальности",
   "Оцените версию DNP того же пути и посмотрите лишнюю стоимость",
   "Выбирайте MSN плюс сертификат — если только ваша цель не CRNA",
   "Для CRNA планируйте докторскую степень, потому что там она и есть лицензия"
  ],
  "why": "Top postings require the DNP in 0 of 16 cases — CRNA is the one exception.",
  "whyRu": "Топовые вакансии требуют DNP в 0 из 16 случаев — CRNA единственное исключение.",
  "links": [
   {
    "t": "ANCC — Certifications (ANA / nursingworld.org)",
    "u": "https://www.nursingworld.org/our-certifications/"
   }
  ]
 }
});
