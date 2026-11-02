/* Step detail content for the PathCheck dashboard (stepdetail.js).
   Format: STEP_DETAILS[stepId] = {what, whatRu, how[], howRu[], why, whyRu,
   links: [{t, u}]} — EN + RU twins; links verified at build time.
   Written from the pilot packages (hr-checklist + sample-full-report). */
var STEP_DETAILS = (typeof STEP_DETAILS !== "undefined" && STEP_DETAILS) || {};
Object.assign(STEP_DETAILS, {
 "law-g1": {
  "what": "Get a bachelor’s degree if you do not have one yet. For the attorney path, you need a J.D. (the law degree). The school must be accredited. That means the state accepts it.",
  "whatRu": "Получите степень бакалавра, если её ещё нет. Чтобы стать attorney (юристом), нужен J.D. — диплом юриста. Школа должна быть аккредитованной. То есть её признаёт штат.",
  "how": [
   "Decide first which path you want: senior paralegal or attorney",
   "Check that the school is accredited before you pay anything",
   "Keep the diploma and transcripts where an employer can see copies",
   "If you aim at attorney, plan the bachelor’s as the step before the J.D."
  ],
  "howRu": [
   "Сначала решите, какой путь вам нужен: senior paralegal или attorney",
   "Проверьте, что школа аккредитована, до того как платить",
   "Держите диплом и выписки там, где работодатель сможет увидеть копии",
   "Если целитесь в attorney, бакалавр — это шаг перед J.D."
  ],
  "why": "Senior paralegal job posts ask for a bachelor’s in 19 of 21 cases. Top attorney job posts ask for a J.D. in 23 of 25.",
  "whyRu": "Вакансии senior paralegal просят бакалавра в 19 из 21 случая. Топовые вакансии attorney просят J.D. в 23 из 25.",
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
  "what": "Get a paralegal certificate. It is a short course for paralegals (legal assistants). If you can, pick a program approved by the ABA, the American Bar Association.",
  "whatRu": "Получите сертификат paralegal (помощника юриста). Это короткий курс. Если есть выбор, берите программу, одобренную ABA (American Bar Association).",
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
  "why": "14 of 21 senior job posts ask for a paralegal certificate. 6 of 21 name an ABA-approved program.",
  "whyRu": "14 из 21 senior-вакансии просят сертификат paralegal. 6 из 21 называют программу, одобренную ABA.",
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
  "what": "To become an attorney, get a bar license (the right to work as a lawyer). Keep it active and in good standing. Good standing means there are no problems on your record.",
  "whatRu": "Чтобы стать attorney, получите лицензию bar (право работать юристом). Держите её действующей и в хорошем статусе. Хороший статус — значит, в вашем досье нет проблем.",
  "how": [
   "Pick the state where you will work",
   "Read that state’s bar rules on the NCBE pages",
   "Pass the bar exam for that state",
   "Keep the license active and check your standing every year"
  ],
  "howRu": [
   "Выберите штат, где будете работать",
   "Прочитайте правила bar этого штата на страницах NCBE",
   "Сдайте экзамен bar этого штата",
   "Держите лицензию действующей и каждый год проверяйте свой статус"
  ],
  "why": "22 of 25 top job posts ask for an active bar license in good standing. 17 of 25 accept a license from at least one US state.",
  "whyRu": "22 из 25 топовых вакансий просят действующую лицензию bar в хорошем статусе. 17 из 25 принимают лицензию хотя бы одного штата США.",
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
  "why": "5 of 21 senior paralegal job posts name notary status.",
  "whyRu": "5 из 21 senior-вакансий paralegal называют статус notary.",
  "links": [
   {
    "t": "National Notary Association",
    "u": "https://www.nationalnotary.org/"
   }
  ]
 },
 "law-p1": {
  "what": "Go deep in ONE practice area. That is one kind of law work, like privacy or company deals. Stay in that area and let your years add up there. Don’t spread over many areas.",
  "whatRu": "Углубитесь в ОДНУ область права. Например, privacy (защита данных) или сделки компаний. Оставайтесь в ней, пусть годы копятся там. Не распыляйтесь на много областей.",
  "how": [
   "Name the one area you will stay in",
   "Say no to work outside that area when you can choose",
   "Take cases and tasks inside that area again and again",
   "Write your resume so your years show one area, not many"
  ],
  "howRu": [
   "Назовите одну область, в которой останетесь",
   "Отказывайтесь от работы вне этой области, когда есть выбор",
   "Снова и снова берите дела и задачи внутри этой области",
   "Напишите резюме так, чтобы все годы были про одну область"
  ],
  "why": "Senior jobs start at 5+ years in the same area, and the top tier asks 10+ years.",
  "whyRu": "Senior-уровень — это от 5+ лет в одной области. Верхний уровень просит 10+ лет.",
  "links": [
   {
    "t": "BLS — Lawyers (official pay and outlook)",
    "u": "https://www.bls.gov/ooh/legal/lawyers.htm"
   }
  ]
 },
 "law-p2": {
  "what": "Learn the main program of your track (your kind of work). For court cases (litigation) it is Relativity. For company deals (corporate) it is Carta and iManage Closing Folders. For company papers (entity work) it is Diligent Entities, hCue and GEMS.",
  "whatRu": "Выучите главную программу вашего направления. Для судебных дел (litigation) это Relativity. Для сделок компаний (corporate) это Carta и iManage Closing Folders. Для документов компаний это Diligent Entities, hCue и GEMS.",
  "how": [
   "Name your track first: litigation, corporate, or entity work",
   "Open the training pages of that program",
   "Learn to do your daily tasks inside the platform, not around it",
   "At work, ask to manage the program, not only to use it"
  ],
  "howRu": [
   "Сначала выберите направление: litigation, corporate или документы компаний",
   "Откройте страницы обучения этой программы",
   "Научитесь делать ежедневные задачи внутри платформы, а не в обход неё",
   "Попроситесь на работе управлять программой, а не только пользоваться ею"
  ],
  "why": "Top job posts name the main program. Relativity for court cases. Carta and iManage Closing Folders for company deals.",
  "whyRu": "Топовые вакансии называют главную программу. Relativity — для судебных дел. Carta и iManage Closing Folders — для сделок компаний.",
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
  "what": "Build one AI workflow at your job. A workflow is the steps for one task. Pick one task and do it with AI help. Write down the time before and after.",
  "whatRu": "Сделайте один рабочий процесс с AI на вашей работе. Процесс — это шаги для одной задачи. Выберите задачу и сделайте её с AI. Запишите время до и после.",
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
  "why": "The Full Report puts this in months 0–3. Top job posts want one AI workflow written down.",
  "whyRu": "Full Report ставит это на месяцы 0–3. Топовые вакансии хотят один записанный процесс с AI.",
  "links": []
 },
 "law-p4": {
  "what": "Show that you use legal AI tools well. Job posts ask for this. They don’t name a brand. So your proof is how you work, not which program you bought.",
  "whatRu": "Покажите, что хорошо пользуетесь юридическими AI-инструментами. Вакансии это просят. Бренд они не называют. Так что важно, как вы работаете, а не какую программу купили.",
  "how": [
   "Use an AI tool on a real task: research, review, or a summary",
   "Check every answer the tool gives you against the source",
   "Write one short example of a task you did with AI and what you checked",
   "Be ready to tell that example at an interview"
  ],
  "howRu": [
   "Используйте AI на настоящей задаче: поиск, проверка или краткий пересказ",
   "Проверяйте каждый ответ инструмента по источнику",
   "Запишите один короткий пример задачи, сделанной с AI, и что вы проверили",
   "Будьте готовы рассказать этот пример на собеседовании"
  ],
  "why": "7 of 25 attorney job posts ask for legal AI skills. None of them names a brand.",
  "whyRu": "7 из 25 вакансий attorney просят уметь работать с юридическим AI. Ни одна не называет бренд.",
  "links": []
 },
 "law-p5": {
  "what": "Know each Microsoft Office / 365 program: Word, Excel, Outlook and the rest. Job posts name them one by one. So learn them one by one.",
  "whatRu": "Знайте каждую программу Microsoft Office / 365: Word, Excel, Outlook и другие. Вакансии называют их по одной. Вот и учите по одной.",
  "how": [
   "List the programs that job posts in your field name",
   "Open Microsoft’s own training page for the first program",
   "Practice the tasks your job does in that program",
   "Move to the next program only when the first one feels easy"
  ],
  "howRu": [
   "Выпишите программы, которые называют вакансии в вашей сфере",
   "Откройте страницу обучения Microsoft по первой программе",
   "Потренируйте в этой программе задачи вашей работы",
   "Переходите к следующей программе, только когда первая даётся легко"
  ],
  "why": "Microsoft Office / 365 is still a must in 12–13 of 21 senior paralegal job posts.",
  "whyRu": "Microsoft Office / 365 всё ещё обязателен в 12–13 из 21 senior-вакансии paralegal.",
  "links": [
   {
    "t": "Microsoft 365 help & learning — Microsoft’s own training (official)",
    "u": "https://support.microsoft.com/en-us/training"
   }
  ]
 },
 "law-p6": {
  "what": "Only if you work in privacy: get CIPP/US. It is the main privacy certificate. It proves you know US privacy laws and rules.",
  "whatRu": "Только если ваша сфера — privacy (защита данных): получите CIPP/US. Это главный сертификат по privacy. Он доказывает, что вы знаете законы и правила США о данных.",
  "how": [
   "Open the IAPP page for CIPP/US",
   "Read the exam blueprint — the list of topics the exam covers",
   "Study the topics on that list",
   "Sit the exam and add CIPP/US to your resume"
  ],
  "howRu": [
   "Откройте страницу IAPP по CIPP/US",
   "Прочитайте план экзамена — список его тем",
   "Учите темы из этого списка",
   "Сдайте экзамен и добавьте CIPP/US в резюме"
  ],
  "why": "CIPP/US was in 3 of 3 privacy job posts that named any certificate.",
  "whyRu": "CIPP/US был в 3 из 3 вакансий privacy, где вообще назывались сертификаты.",
  "links": [
   {
    "t": "IAPP — CIPP/US certification (official)",
    "u": "https://iapp.org/certify/cippus/"
   }
  ]
 },
 "law-k1": {
  "what": "Show your years as ONE practice area. In your resume and your story, make all years look like one area.",
  "whatRu": "Покажите все свои годы как ОДНУ область. В резюме и в рассказе о себе пусть все годы будут про эту область.",
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
   "На собеседованиях рассказывайте ту же историю про одну область"
  ],
  "why": "Top job posts ask for 5–10 years in one practice area.",
  "whyRu": "Топовые вакансии просят 5–10 лет в одной области практики.",
  "links": [
   {
    "t": "BLS — Paralegals and Legal Assistants (official pay and outlook)",
    "u": "https://www.bls.gov/ooh/legal/paralegals-and-legal-assistants.htm"
   }
  ]
 },
 "law-k2": {
  "what": "Lead with business judgment. That means advice that helps the company move forward. It weighs the risk. It doesn’t just repeat the law.",
  "whatRu": "Показывайте business judgment (деловое чутьё). Это советы, которые помогают компании двигаться дальше. Они взвешивают риск. А не просто пересказывают закон.",
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
  "why": "Business judgment is the #1 soft skill in top job posts. 7+ of 25 name it.",
  "whyRu": "Business judgment — навык №1 среди soft skills в топовых вакансиях. Его называют 7+ из 25.",
  "links": []
 },
 "law-k3": {
  "what": "Apply as a specialist, not a generalist. Aim at senior specialist jobs in your one area. Have your program skills and proof ready.",
  "whatRu": "Подавайтесь как specialist (узкий специалист), а не generalist. Цельтесь в senior-роли в вашей одной области. Программа и доказательства должны быть готовы.",
  "how": [
   "Save the specialist job posts in your area",
   "Check your years, program skills and proof against each job post",
   "Apply where your one-area story fits the job post",
   "Write down the pay range of each job"
  ],
  "howRu": [
   "Сохраняйте вакансии specialist в вашей области",
   "Сверяйте свои годы, программу и доказательства с каждой вакансией",
   "Подавайтесь туда, где ваша история одной области совпадает с вакансией",
   "Записывайте, сколько платят на каждой работе"
  ],
  "why": "Two jobs to aim at: Gibson Dunn Sr. Corporate Paralegal pays $150K–$200K; Cooley pays $135,200–$176,800.",
  "whyRu": "Две работы, куда целиться: Gibson Dunn Sr. Corporate Paralegal платит $150K–$200K; Cooley платит $135,200–$176,800.",
  "links": []
 },
 "law-k4": {
  "what": "Path B check: apply to law school only if the math works. The median first salary must beat your debt. Median means the middle number.",
  "whatRu": "Проверка для пути B: идите в law school, только если сходится математика. Медианная первая зарплата должна быть больше долга. Медиана — это число посередине.",
  "how": [
   "Take an LSAT diagnostic test to see your real level",
   "Pull the ABA employment reports for your target schools",
   "Write down each school’s median first salary",
   "Compare it with your debt after school — apply only where the salary beats the debt"
  ],
  "howRu": [
   "Пройдите диагностический тест LSAT, чтобы увидеть свой настоящий уровень",
   "Возьмите отчёты ABA о трудоустройстве ваших целевых школ",
   "Запишите медианную первую зарплату каждой школы",
   "Сравните её с долгом после учёбы — подавайтесь, только если зарплата больше долга"
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
  "what": "Get a bachelor’s degree in accounting or finance. This is the first step. Without it, the CPA path does not open.",
  "whatRu": "Получите степень бакалавра в accounting или finance. Это первый шаг. Без неё путь к CPA закрыт.",
  "how": [
   "Check that your degree is in accounting or finance, or plan to finish one",
   "Keep the diploma and transcripts ready to show",
   "If your degree is in another field, ask your state board what extra study it asks for"
  ],
  "howRu": [
   "Проверьте, что ваша степень — в accounting или finance, или запланируйте её получить",
   "Держите диплом и выписки готовыми показать",
   "Если степень в другой области, спросите board штата, что ещё нужно доучить"
  ],
  "why": "52 of 52 job posts with clear rules ask for a bachelor’s in accounting or finance.",
  "whyRu": "52 из 52 вакансий с понятными требованиями просят бакалавра в accounting или finance.",
  "links": [
   {
    "t": "BLS — Accountants and Auditors (official pay and outlook)",
    "u": "https://www.bls.gov/ooh/business-and-financial/accountants-and-auditors.htm"
   }
  ]
 },
 "cpa-g2": {
  "what": "In week 1, check your state board’s license route. The state board gives the CPA license. In about 32 states you now need 120 credits plus 2 years of work. On that route, the fifth year of school costs $0.",
  "whatRu": "На неделе 1 узнайте в board вашего штата, как получить лицензию. Board выдаёт лицензию CPA. Примерно в 32 штатах теперь нужно 120 credits (учебных часов) плюс 2 года опыта. Тогда пятый год учёбы стоит $0.",
  "how": [
   "Find your state board of accountancy",
   "Read its license route: how many credits and how many years of experience",
   "Write down which route you are on: 120 credits + 2 years, or 150 credits + 1 year",
   "Count the cost before you pay for any extra school"
  ],
  "howRu": [
   "Найдите board of accountancy вашего штата",
   "Прочитайте его маршрут лицензии: сколько credits и сколько лет опыта",
   "Запишите, на каком маршруте вы: 120 credits + 2 года или 150 credits + 1 год",
   "Посчитайте цену маршрута до того, как платить за дополнительную учёбу"
  ],
  "why": "About 32 states now give the license at 120 credits + 2 years of work. On that route, the fifth year of school costs $0.",
  "whyRu": "Около 32 штатов теперь дают лицензию при 120 credits + 2 года опыта. Тогда пятый год учёбы стоит $0.",
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
  "what": "Pass the CPA exam. It has 3 Core parts and 1 Discipline part. You must pass all of them in one time window — 30 months in most states. Save money for one retake, just in case. You can do this.",
  "whatRu": "Сдайте CPA exam. В нём 3 части Core и 1 часть Discipline. Все нужно сдать за один срок — 30 месяцев в большинстве штатов. Отложите деньги на одну пересдачу, на всякий случай. У вас получится.",
  "how": [
   "Apply through your state board and get your Notice to Schedule (exam permit)",
   "Start with FAR, the hardest part, while you have the most time",
   "Put study hours on the calendar like work shifts",
   "Always keep the end of your 30-month window in mind"
  ],
  "howRu": [
   "Подайте заявку через board вашего штата и получите Notice to Schedule (допуск к экзамену)",
   "Начните с FAR — самой трудной части — пока времени больше всего",
   "Поставьте часы учёбы в календарь, как рабочие смены",
   "Всегда помните, когда кончается ваш 30-месячный срок"
  ],
  "why": "Only 42% pass FAR the first time. It is the hardest part, so a retake is normal.",
  "whyRu": "FAR с первого раза сдают только 42%. Это самая трудная часть, так что пересдача — это нормально.",
  "links": [
   {
    "t": "This Way To CPA (AICPA) — understanding the CPA Exam (official)",
    "u": "https://www.thiswaytocpa.com/exam/"
   }
  ]
 },
 "cpa-g4": {
  "what": "Pick the Discipline part by your niche (your area of work), not by pass rate. BAR leads to technical accounting and advisory. ISC leads to IT audit and AI governance. TCP leads to specialized tax.",
  "whatRu": "Выбирайте часть Discipline по своей нише (сфере работы), а не по проценту сдачи. BAR ведёт в technical accounting и advisory. ISC — в IT audit и AI governance. TCP — в specialized tax.",
  "how": [
   "Name the niche you want to work in",
   "Match it: BAR for technical accounting and advisory, ISC for IT audit and AI governance, TCP for specialized tax",
   "Write this choice down before you sign up",
   "Don’t switch parts just because another one looks easier"
  ],
  "howRu": [
   "Назовите нишу, в которой хотите работать",
   "Сопоставьте: BAR — technical accounting и advisory, ISC — IT audit и AI governance, TCP — specialized tax",
   "Запишите выбор до регистрации",
   "Не меняйте часть только потому, что другая кажется легче"
  ],
  "why": "The Discipline part picks your niche. BAR, ISC and TCP lead to three different jobs.",
  "whyRu": "Discipline — это выбор ниши. BAR, ISC и TCP ведут к трём разным работам.",
  "links": [
   {
    "t": "This Way To CPA (AICPA) — understanding the CPA Exam (official)",
    "u": "https://www.thiswaytocpa.com/exam/"
   }
  ]
 },
 "cpa-g5": {
  "what": "Work under a licensed CPA and get that work signed. You need 1 year if you studied 150 credits. You need 2 years if you studied 120 credits.",
  "whatRu": "Работайте под руководством CPA с лицензией. Попросите подписать ваш опыт. Нужен 1 год, если у вас 150 credits. И 2 года, если 120 credits.",
  "how": [
   "Check that your supervisor is a licensed CPA",
   "Ask how your work will be signed before you start counting it",
   "Keep a simple log of the work you do under that CPA",
   "Send your work for signing as soon as you qualify"
  ],
  "howRu": [
   "Проверьте, что ваш руководитель — лицензированный CPA",
   "Спросите, как подпишут ваш опыт, ещё до начала",
   "Ведите простой журнал работы, которую делаете под этим CPA",
   "Отправьте опыт на подпись, как только будет можно"
  ],
  "why": "To get the license, you need supervised work. 1 year on the 150-credit route, 2 years on the 120-credit route. In most states a licensed CPA signs it.",
  "whyRu": "Для лицензии нужен опыт под руководством. 1 год при 150 credits, 2 года при 120 credits. В большинстве штатов его подписывает CPA с лицензией.",
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
  "what": "Learn GAAP for real. GAAP is the rulebook for how companies count money. Start with ASC 606: money from customers. Then ASC 842: rent deals. Then ASC 718: paying workers with company stock. SOX 404 is about money checks in big public companies.",
  "whatRu": "Выучите GAAP по-настоящему. GAAP — правила, как компании считают деньги. Начните с ASC 606: деньги от клиентов. Потом ASC 842: аренда. Потом ASC 718: оплата работникам акциями. SOX 404 — проверки денег в больших публичных компаниях.",
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
  "why": "Senior job posts name ASC 606 again and again. ASC 842 and ASC 718 show up in SEC reporting. SOX 404 shows up in SEC reporting jobs too.",
  "whyRu": "Senior-вакансии снова и снова называют ASC 606. ASC 842 и ASC 718 встречаются в SEC reporting. SOX 404 — тоже в вакансиях SEC reporting.",
  "links": []
 },
 "cpa-p3": {
  "what": "Learn Workiva. It is a program for company reports. It matters in one niche: SEC reporting (reports of public companies) and technical roles.",
  "whatRu": "Выучите Workiva. Это программа для отчётов компаний. Она нужна в одной нише: SEC reporting (отчёты публичных компаний) и technical-роли.",
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
  "why": "6 job posts name Workiva. All of them are SEC reporting and technical roles.",
  "whyRu": "Workiva называют 6 вакансий. Все они — SEC reporting и technical-роли.",
  "links": []
 },
 "cpa-p4": {
  "what": "Learn Excel past the basics. Know pivot tables (they sum up big lists fast) and VLOOKUP. For advisory jobs, go further: financial modeling (money plans in Excel).",
  "whatRu": "Выучите Excel лучше базы. Знайте pivot tables (быстро сводят большие списки) и VLOOKUP. Для advisory идите дальше: financial modeling — денежные планы в Excel.",
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
  "why": "8 of 8 staff job posts check for pivot tables and VLOOKUP. Advisory jobs ask for financial modeling.",
  "whyRu": "8 из 8 вакансий staff проверяют pivot tables и VLOOKUP. Вакансии advisory просят financial modeling.",
  "links": [
   {
    "t": "Microsoft 365 help & learning — Microsoft’s own Excel and Office training (official)",
    "u": "https://support.microsoft.com/en-us/training"
   }
  ]
 },
 "cpa-p5": {
  "what": "Learn Power BI. It turns data into charts. Learn it if you aim at advisory work. That is where job posts ask for it.",
  "whatRu": "Выучите Power BI. Он превращает данные в графики. Учите его, если целитесь в advisory. Именно там его просят.",
  "how": [
   "Take one set of real numbers from your work",
   "Turn it into a clear chart in Power BI",
   "Show the chart to one person and check they understand it",
   "Save the chart as proof for advisory applications"
  ],
  "howRu": [
   "Возьмите один набор настоящих чисел из вашей работы",
   "Превратите его в понятный график в Power BI",
   "Покажите график одному человеку и проверьте, что он понятен",
   "Сохраните график как доказательство для заявок в advisory"
  ],
  "why": "Power BI is in 4 job posts, all advisory. SQL is in 0 of 52 job posts.",
  "whyRu": "Power BI есть в 4 вакансиях, все — advisory. SQL — в 0 из 52 вакансий.",
  "links": [
   {
    "t": "Training for Power BI — Microsoft Learn",
    "u": "https://learn.microsoft.com/en-us/training/powerplatform/power-bi"
   }
  ]
 },
 "cpa-p6": {
  "what": "Pick ONE industry (one kind of business) and go deep. The best-paid jobs name their industry. Knowing a bit of everything doesn’t pay. Depth does.",
  "whatRu": "Выберите ОДНУ отрасль (один вид бизнеса) и копайте глубоко. Самые денежные вакансии называют свою отрасль. За «всего понемногу» не платят. Платят за глубину.",
  "how": [
   "Name the one industry you will stay in: for example manufacturing cost accounting, SaaS revenue, pass-through entities, or HNW clients (wealthy people)",
   "Take your next job inside that industry",
   "Learn the money rules that industry uses again and again",
   "Write your resume so the industry reads clearly"
  ],
  "howRu": [
   "Назовите одну отрасль, в которой останетесь: например manufacturing cost accounting, SaaS revenue, pass-through entities или клиенты HNW (богатые люди)",
   "Следующую работу берите в этой отрасли",
   "Выучите денежные правила, которые эта отрасль использует снова и снова",
   "Напишите резюме так, чтобы отрасль читалась ясно"
  ],
  "why": "The best-paid jobs name their industry: manufacturing cost accounting, SaaS revenue, pass-through entities, and HNW and UHNW clients.",
  "whyRu": "Самые денежные вакансии называют свою отрасль: manufacturing cost accounting, SaaS revenue, pass-through entities и клиенты HNW и UHNW.",
  "links": [
   {
    "t": "BLS — Accountants and Auditors (official pay and outlook)",
    "u": "https://www.bls.gov/ooh/business-and-financial/accountants-and-auditors.htm"
   }
  ]
 },
 "cpa-k1": {
  "what": "Become the tech person in your current job. Own one piece of tech work. For example, automate part of the close (the month-end money count). Or own the reconciliation tools (they check that two records match). Or own the ERP, the company’s main money program.",
  "whatRu": "Станьте главным по технике на вашей работе. Возьмите себе один кусок. Например, автоматизацию закрытия (подсчёт денег в конце месяца). Или инструменты сверки (проверка, что две записи совпадают). Или ERP — главную денежную программу компании.",
  "how": [
   "Pick one piece: close automation, reconciliation tooling, or the ERP",
   "Ask your manager to make that piece yours in writing",
   "Run it at the next month-end close",
   "Write down what you are now in charge of"
  ],
  "howRu": [
   "Выберите один кусок: автоматизация закрытия, инструменты сверки или ERP",
   "Попросите руководителя закрепить этот кусок за вами письменно",
   "Проведите его на следующем закрытии месяца",
   "Запишите, за что вы теперь отвечаете"
  ],
  "why": "The Full Report puts this in months 0–3. Controller and advisory job posts ask who ran the systems. Not who just used them.",
  "whyRu": "Full Report ставит это на месяцы 0–3. Вакансии controller и advisory спрашивают, кто управлял системами. А не кто просто ими пользовался.",
  "links": []
 },
 "cpa-k2": {
  "what": "Write down one process you made better. Show the hours before and the hours after on one page. That one page is your proof.",
  "whatRu": "Запишите один процесс, который вы улучшили. Покажите часы до и часы после на одной странице. Эта одна страница — ваше доказательство.",
  "how": [
   "Pick one process you touched",
   "Write the hours it took before your change",
   "Write the hours it takes now",
   "Keep both numbers on one page and use it when you apply"
  ],
  "howRu": [
   "Выберите один процесс, который вы трогали",
   "Запишите часы, которые он занимал до вашего изменения",
   "Запишите часы, которые он занимает сейчас",
   "Держите оба числа на одной странице и показывайте её при подаче"
  ],
  "why": "Good job posts look for exactly this one page.",
  "whyRu": "Хорошие вакансии ищут именно такую страницу.",
  "links": []
 },
 "cpa-k3": {
  "what": "Make one proof piece for your niche. It can be a technical memo (a short note that explains a hard case). Or one model. Or one controls project (checks that keep money safe). Write it all down.",
  "whatRu": "Сделайте одну работу-доказательство для своей ниши. Это может быть memo (короткая записка про трудный случай). Или модель. Или проект по controls (проверки, которые берегут деньги). Всё запишите.",
  "how": [
   "Choose the piece that fits your niche: memo, model, or controls project",
   "Build it from a real case, not a made-up one",
   "Write down what the case was and what you decided",
   "Save it so you can show it when you apply"
  ],
  "howRu": [
   "Выберите работу под вашу нишу: memo, модель или проект по controls",
   "Сделайте её из настоящего случая, а не выдуманного",
   "Запишите, что это был за случай и что вы решили",
   "Сохраните её, чтобы показать при подаче"
  ],
  "why": "The Full Report puts this proof piece in months 4–9 of the plan.",
  "whyRu": "Full Report ставит эту работу на месяцы 4–9 плана.",
  "links": []
 },
 "cpa-k4": {
  "what": "Save a target list. Collect 10 or more real job posts in your niche. Read what they ask for. Close your gaps one by one. A gap is a skill they want that you don’t have yet.",
  "whatRu": "Сделайте список целей. Соберите 10 или больше настоящих вакансий в вашей нише. Прочитайте, что они просят. Закрывайте пробелы по одному. Пробел — навык, который просят, а у вас его пока нет.",
  "how": [
   "Save 10 or more real job posts in your niche",
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
  "why": "At the month-3 check, you need a list of 10+ real job posts in your niche.",
  "whyRu": "На проверке в месяце 3 нужен список из 10+ настоящих вакансий в вашей нише.",
  "links": []
 },
 "cpa-k5": {
  "what": "Want an FDD job or a top industry job? Then you need public accounting in your past. FDD means checking a company’s money before a sale. Public accounting means working at an accounting firm.",
  "whatRu": "Хотите работу в FDD или топовую работу в отрасли? Тогда нужен опыт в public accounting. FDD — проверка денег компании перед продажей. Public accounting — работа в бухгалтерской фирме.",
  "how": [
   "Decide if FDD or a top industry job is your goal",
   "Plan a job at an accounting firm (audit or tax) into your path",
   "Stay long enough for the firm years to count",
   "Name those firm years clearly when you apply to industry or FDD"
  ],
  "howRu": [
   "Решите, ваша ли цель — FDD или топовая работа в отрасли",
   "Запланируйте работу в бухгалтерской фирме (audit или tax)",
   "Останьтесь там достаточно долго, чтобы годы засчитались",
   "Ясно называйте эти годы в фирме, когда подаётесь в отрасль или FDD"
  ],
  "why": "11 job posts outside public accounting directly ask for firm experience.",
  "whyRu": "11 вакансий вне public accounting прямо просят опыт в фирме.",
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
  "what": "Hold an active RN license in your state. Keep it clean: no discipline, no limits. If your state is in the compact, get the multistate license. It works in many states. You will need it for travel jobs (short contracts in other places) later.",
  "whatRu": "Держите действующую лицензию RN в вашем штате. Держите её чистой: без взысканий и ограничений. Если ваш штат в compact (союзе штатов), оформите multistate-лицензию. Она работает во многих штатах. Позже она понадобится для travel-работы (контракты в других местах).",
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
  "why": "16 of 16 job posts ask for an active RN license. 40 states now use the compact.",
  "whyRu": "Действующую лицензию RN просят 16 из 16 вакансий. Систему compact сейчас используют 40 штатов.",
  "links": [
   {
    "t": "NCSBN — Nurse Licensure Compact",
    "u": "https://www.ncsbn.org/nurse-licensure-compact.htm"
   }
  ]
 },
 "nur-g2": {
  "what": "Get the license the cheap way. Start with the ADN, the short nursing degree. You pass the same NCLEX (the nurse license exam) as BSN grads. Then finish the BSN while you work and earn.",
  "whatRu": "Получите лицензию дёшево. Начните с ADN — короткой степени медсестры. Вы сдаёте тот же NCLEX (экзамен на лицензию), что и выпускники BSN. Потом доучитесь до BSN, уже работая.",
  "how": [
   "Compare ADN prices at public colleges — Wake Tech is the example here",
   "Check the program leads to the NCLEX-RN exam",
   "Apply and finish the ADN",
   "Pass the NCLEX and get the license",
   "Plan the RN-to-BSN study for your first year of work"
  ],
  "howRu": [
   "Сравните цены ADN в публичных колледжах — пример здесь Wake Tech",
   "Проверьте, что программа ведёт к экзамену NCLEX-RN",
   "Подайте документы и закончите ADN",
   "Сдайте NCLEX и получите лицензию",
   "Запланируйте доучку RN-to-BSN на первый год работы"
  ],
  "why": "The ADN costs $5,472 in total at Wake Tech. Its grads pass the same NCLEX as the BSN.",
  "whyRu": "ADN в Wake Tech стоит $5,472 за всё обучение. Выпускники сдают тот же NCLEX, что и BSN.",
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
  "what": "Keep your BLS certificate current. BLS is basic life support: first help in an emergency, like CPR. When it expires, renew it before you apply.",
  "whatRu": "Держите сертификат BLS действующим. BLS — это первая помощь в экстренной ситуации, например CPR (реанимация). Когда срок кончится, продлите его до подачи на работу.",
  "how": [
   "Check the expiry date on your BLS card",
   "Pick a classroom course or a mixed one (online part plus hands-on practice)",
   "Pass the course and get the new card",
   "Save a copy where an employer can see it"
  ],
  "howRu": [
   "Проверьте дату окончания на вашей карте BLS",
   "Выберите очный курс или смешанный (онлайн плюс практика)",
   "Пройдите курс и получите новую карту",
   "Сохраните копию там, где работодатель сможет её увидеть"
  ],
  "why": "15 of 16 job posts ask for a current BLS certificate.",
  "whyRu": "Действующий сертификат BLS просят 15 из 16 вакансий.",
  "links": [
   {
    "t": "American Heart Association — BLS training",
    "u": "https://cpr.heart.org/en/cpr-courses-and-kits/healthcare-professional/basic-life-support-bls-training"
   }
  ]
 },
 "nur-g4": {
  "what": "Get ACLS, the advanced emergency certificate. It builds on BLS. It teaches you to lead in a serious emergency. Most specialty jobs want it at hire or in the first 30–90 days.",
  "whatRu": "Получите ACLS — продвинутый сертификат экстренной помощи. Он идёт после BLS. Учит руководить помощью в серьёзной ситуации. Большинство работ по специальности просят его при найме или в первые 30–90 дней.",
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
  "why": "10 of 16 job posts name ACLS. This is the real must-have for specialty jobs.",
  "whyRu": "ACLS называют 10 из 16 вакансий. Это настоящий пропуск в специальность.",
  "links": [
   {
    "t": "American Heart Association — Healthcare professional courses (ACLS and BLS)",
    "u": "https://cpr.heart.org/en/cpr-courses-and-kits/healthcare-professional/"
   }
  ]
 },
 "nur-g5": {
  "what": "For the NP path (nurse practitioner), later: get board certification in your specialty. It is an exam that proves your specialty. You also need a state NP license and DEA registration. DEA lets you prescribe strong drugs.",
  "whatRu": "Для пути NP (nurse practitioner), на потом: получите board certification. Это экзамен, который подтверждает вашу специальность. Ещё нужны лицензия NP штата и регистрация DEA. DEA даёт право выписывать сильные лекарства.",
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
  "why": "In practice, 10 of 10 NP job posts ask for board certification in the specialty.",
  "whyRu": "На практике board certification по специальности просят 10 из 10 вакансий NP.",
  "links": [
   {
    "t": "ANCC — Certifications (ANA / nursingworld.org)",
    "u": "https://www.nursingworld.org/our-certifications/"
   }
  ]
 },
 "nur-p1": {
  "what": "Take a specialty first job. Aim for the ICU, ED or OR. The ICU is intensive care, for the sickest patients. The ED is the emergency room. The OR is the operating room. A general floor is OK to start. But the plan is a specialty job.",
  "whatRu": "Возьмите первую работу по специальности. Цельтесь в ICU, ED или OR. ICU — это интенсивная терапия, самые тяжёлые пациенты. ED — это отделение скорой помощи. OR — это операционная. Общее отделение подойдёт для старта. Но план — работа по специальности.",
  "how": [
   "List hospitals near you with ICU, ED and OR units",
   "Apply to specialty jobs and to residencies that lead there",
   "In the interview, ask how new nurses move into the specialty",
   "Pick the offer with a clear path to a specialty, not just the first pay"
  ],
  "howRu": [
   "Составьте список больниц рядом с вами с отделениями ICU, ED и OR",
   "Подавайтесь на работы по специальности и в residency, которые туда ведут",
   "На собеседовании спросите, как новые медсёстры переходят в специальность",
   "Выбирайте предложение с ясным путём в специальность, а не по первой зарплате"
  ],
  "why": "Your specialty opens travel pay, the CRNA path and the NP paths that pay well.",
  "whyRu": "Специальность открывает travel-оплату, путь в CRNA и денежные пути NP.",
  "links": [
   {
    "t": "BLS — Registered Nurses (Occupational Outlook Handbook)",
    "u": "https://www.bls.gov/ooh/healthcare/registered-nurses.htm"
   }
  ]
 },
 "nur-p2": {
  "what": "Bank 2 years in your specialty. Stay in one specialty and build real time there. Travel jobs start at 2 years. These years also lift you to the top staff pay ranges.",
  "whatRu": "Наберите 2 года в вашей специальности. Не меняйте её. Travel-работа начинается с 2 лет. Эти годы ещё поднимают вас к самой высокой оплате staff.",
  "how": [
   "Stay in one specialty — do not hop between units",
   "Keep a simple record of your start date and your unit",
   "Ask for harder cases as you grow",
   "At 2 years, check travel job posts in your specialty"
  ],
  "howRu": [
   "Оставайтесь в одной специальности — не прыгайте между отделениями",
   "Ведите простой учёт даты старта и вашего отделения",
   "Просите более сложные случаи по мере роста",
   "На отметке 2 года проверьте вакансии travel по вашей специальности"
  ],
  "why": "8 of 10 travel job posts ask for 2 years in the specialty.",
  "whyRu": "2 года в специальности просят 8 из 10 вакансий travel.",
  "links": [
   {
    "t": "NCSBN — Nurse Licensure Compact (the travel door key)",
    "u": "https://www.ncsbn.org/nurse-licensure-compact.htm"
   }
  ]
 },
 "nur-p3": {
  "what": "Start an online RN-to-BSN in your first year of work. It is extra study that turns your ADN into a BSN while you work. Start early, while the job is still new.",
  "whatRu": "Начните онлайн RN-to-BSN в первый год работы. Это доучка, которая превращает ADN в BSN без отрыва от работы. Начинайте рано, пока работа ещё новая.",
  "how": [
   "Look for an online RN-to-BSN program you can do while working",
   "Check the total price before you sign up",
   "Ask your employer if it helps pay — check its own policy",
   "Enroll in your first year of work",
   "Study at a pace you can keep next to your shifts"
  ],
  "howRu": [
   "Найдите онлайн-программу RN-to-BSN, которую можно делать на работе",
   "Проверьте полную цену до записи",
   "Спросите работодателя, помогает ли он с оплатой — проверьте его правила",
   "Запишитесь в первый год работы",
   "Учитесь в темпе, который потянете рядом со сменами"
  ],
  "why": "25% of employers require the BSN for new hires, and 69.8% prefer it (AACN). The online bridge costs $12,000 in total. In Utah it can take just 2 semesters.",
  "whyRu": "25% работодателей требуют BSN у новичков, а 69.8% предпочитают его (AACN). Онлайн-доучка стоит $12,000 за всё. В Utah может занять всего 2 семестра.",
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
  "what": "Take your specialty certificate when you have enough experience. For ICU nurses, it is the CCRN. Jobs don’t require it. But it makes you stand out. And it shows CRNA schools you are serious.",
  "whatRu": "Сдайте сертификат по специальности, когда хватит опыта. Для медсестёр ICU это CCRN. Работы его не требуют. Но он выделяет вас. И показывает школам CRNA, что вы настроены серьёзно.",
  "how": [
   "Work directly with very sick and critical patients",
   "Check the CCRN practice-hour rules on the AACN page",
   "Apply when you have enough hours",
   "Prepare for the exam and sit it"
  ],
  "howRu": [
   "Работайте напрямую с тяжёлыми и критическими пациентами",
   "Проверьте правила часов практики CCRN на странице AACN",
   "Подайте, когда наберёте нужные часы",
   "Подготовьтесь к экзамену и сдайте его"
  ],
  "why": "Jobs prefer the CCRN in 3 of 16 RN job posts and require it in 0. It helps you stand out, but it is not a must.",
  "whyRu": "CCRN предпочитают в 3 из 16 вакансий RN и требуют в 0. Он выделяет вас, но он не обязателен.",
  "links": [
   {
    "t": "AACN — Get your CCRN certification",
    "u": "https://www.aacn.org/certification/get-certified/ccrn-adult"
   }
  ]
 },
 "nur-p5": {
  "what": "Become an AI superuser on your unit. Learn your hospital’s AI tools better than most nurses. Learn them on real shifts, not in a side course.",
  "whatRu": "Станьте главным по AI в вашем отделении. Выучите AI-инструменты больницы лучше большинства медсестёр. Учите на настоящих сменах, а не на курсах сбоку.",
  "how": [
   "List the AI tools your hospital already uses on your unit",
   "Learn one tool well and use it every shift",
   "Check what AI writes before you trust it — the nurse still owns the note",
   "Help a colleague learn what you learned",
   "Ask to join when a new AI tool comes to your unit"
  ],
  "howRu": [
   "Составьте список AI-инструментов, которые ваша больница уже использует в вашем отделении",
   "Хорошо выучите один инструмент и пользуйтесь им каждую смену",
   "Проверяйте, что пишет AI, прежде чем доверять — за запись отвечает медсестра",
   "Помогите коллеге выучить то, что выучили вы",
   "Просите взять вас, когда в отделение приходит новый AI-инструмент"
  ],
  "why": "More than three-quarters of nurses use AI every day. Only about 10% are superusers (McKinsey).",
  "whyRu": "Больше трёх четвертей медсестёр пользуются AI каждый день. Суперпользователей — только около 10% (McKinsey).",
  "links": []
 },
 "nur-k1": {
  "what": "Rank residency offers by where they lead, not by first pay. A residency is a training job for new nurses. One with a clear plan protects you in the hard first year.",
  "whatRu": "Сравнивайте предложения residency по тому, куда они ведут, а не по первой зарплате. Residency — учебная работа для новых медсестёр. С ясным планом она защитит вас в трудный первый год.",
  "how": [
   "For each offer, write down the training plan it promises",
   "Ask if the residency is structured — a clear plan, a coach, a set length",
   "Ask where its nurses go after year one — which units, which specialties",
   "Compare where they lead first, pay second",
   "Pick the offer that keeps your specialty path open"
  ],
  "howRu": [
   "Для каждого предложения запишите план обучения, который оно обещает",
   "Спросите, структурированная ли residency — ясный план, наставник, заданный срок",
   "Спросите, куда её медсёстры идут после первого года — в какие отделения, в какие специальности",
   "Сначала сравнивайте, куда ведут, потом оплату",
   "Выбирайте предложение, которое держит ваш путь в специальность открытым"
  ],
  "why": "22.7% of new RNs leave in their first year (NSI). A residency with a clear plan protects you.",
  "whyRu": "22.7% новых RN уходят в первый год (NSI). Residency с ясным планом вас защищает.",
  "links": []
 },
 "nur-k2": {
  "what": "Move to the ICU, ED or OR by month 18–24. If your hospital can’t move you by month 24, change hospitals. Don’t stay a third year on a general floor. That is the one avoidable mistake in this plan.",
  "whatRu": "Перейдите в ICU, ED или OR к месяцу 18–24. Если больница не может перевести вас к месяцу 24, меняйте больницу. Не оставайтесь третий год в общем отделении. Это единственная ошибка в плане, которой легко избежать.",
  "how": [
   "From month 12, tell your manager you want the specialty move",
   "Collect your proof for the move: your cases, certificates, record",
   "Apply for open ICU, ED or OR jobs in your hospital",
   "At month 18–24, take the move",
   "If there is no move by month 24, apply to other hospitals"
  ],
  "howRu": [
   "С месяца 12 скажите менеджеру, что хотите переход в специальность",
   "Соберите всё для перевода: ваши случаи, сертификаты, учёт",
   "Подавайтесь на открытые места ICU, ED или OR в своей больнице",
   "На месяце 18–24 сделайте переход",
   "Если перехода нет к месяцу 24, подавайтесь в другие больницы"
  ],
  "why": "Experienced specialty nurses get sign-on bonuses of $10K–$25K. That is money you get for joining.",
  "whyRu": "Опытные медсёстры по специальности получают sign-on бонус $10K–$25K. Это деньги за то, что вы пришли.",
  "links": []
 },
 "nur-k3": {
  "what": "Get charge nurse experience. A charge nurse leads the shift. Relief charge means you lead when the main one is away. This is the way into leadership: the assistant nurse manager job.",
  "whatRu": "Получите опыт charge nurse (старшей на смене). Relief charge — вы ведёте смену, когда главной нет. Это путь в руководство: на работу assistant nurse manager.",
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
  "why": "The assistant nurse manager job pays $61.91–$97.72/hr. It was the only RN job post that required a BSN.",
  "whyRu": "Работа assistant nurse manager платит $61.91–$97.72/hr. Это была единственная вакансия RN, где требовался BSN.",
  "links": [
   {
    "t": "BLS — Registered Nurses (advancement: charge nurse to management)",
    "u": "https://www.bls.gov/ooh/healthcare/registered-nurses.htm"
   }
  ]
 },
 "nur-k4": {
  "what": "At the NP decision, in year 3–5, go NP only with the right specialty. Pick it by posted pay and by fit. Pick your state with care too. In a Restricted state, a doctor must watch your work. In a Full Practice state, you work on your own.",
  "whatRu": "Решение о NP — на год 3–5. Идите в NP только с правильной специальностью. Выбирайте её по оплате в вакансиях и по себе. Штат тоже выбирайте с умом. В штате Restricted врач должен следить за вашей работой. В штате Full Practice вы работаете сами.",
  "how": [
   "List NP specialties and how much they pay",
   "Put psych and the medical specialties at the top — not the usual general path",
   "Check your state on the AANP practice map: Full Practice, Reduced or Restricted",
   "If you may move, weigh a Full Practice state",
   "Choose specialty and state before you choose a school"
  ],
  "howRu": [
   "Составьте список специальностей NP и сколько они платят",
   "Поставьте psych и медицинские специальности наверх — а не обычный общий путь",
   "Проверьте ваш штат на карте практики AANP: Full Practice, Reduced или Restricted",
   "Если вы можете переехать, взвесьте штат Full Practice",
   "Выбирайте специальность и штат до выбора школы"
  ],
  "why": "Psych pays $200K–$257K. CA, TX and FL are Restricted practice. 27 states + DC are Full Practice.",
  "whyRu": "Psych платит $200K–$257K. CA, TX и FL — Restricted practice. 27 штатов + DC — Full Practice.",
  "links": [
   {
    "t": "AANP — State advocacy and State Practice Environment",
    "u": "https://www.aanp.org/advocacy/state"
   }
  ]
 },
 "nur-k5": {
  "what": "Pay for the MSN plus the certificate. Don’t pay extra for the DNP. The MSN is the master’s degree top jobs hire with. CRNA is the one exception. There, the doctorate is the license itself.",
  "whatRu": "Платите за MSN плюс сертификат. Не переплачивайте за DNP. MSN — магистерская степень, с которой берут на топовые работы. CRNA — единственное исключение. Там докторская степень и есть лицензия.",
  "how": [
   "Compare MSN programs by total price",
   "Check the program leads to your specialty board certification",
   "Price the DNP version too and see the extra cost",
   "Choose MSN plus certification — unless your target is CRNA",
   "For CRNA, plan for the doctorate, because there it is the license"
  ],
  "howRu": [
   "Сравните программы MSN по полной цене",
   "Проверьте, что программа ведёт к board certification по вашей специальности",
   "Узнайте цену DNP и посмотрите, сколько переплатите",
   "Выбирайте MSN плюс сертификат — если только ваша цель не CRNA",
   "Для CRNA планируйте докторскую степень, потому что там она и есть лицензия"
  ],
  "why": "Top job posts require the DNP in 0 of 16 cases. CRNA is the one exception.",
  "whyRu": "Топовые вакансии требуют DNP в 0 из 16 случаев. CRNA — единственное исключение.",
  "links": [
   {
    "t": "ANCC — Certifications (ANA / nursingworld.org)",
    "u": "https://www.nursingworld.org/our-certifications/"
   }
  ]
 }
});
