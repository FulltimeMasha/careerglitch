/* ===== PathCheck — daily micro-quest pools + big-goal lines.
   Split out of tracks.js on 2026-11-01: tracks.js hit the ~98 KB
   single-file upload cap. Loaded by app.html after tracks2.js.
   QUESTS: the daily quest is a MICRO-ACTION (5-15 minutes, doable
   today) — never a track step. Server owns ids + daily pick
   (api/_lib/quests.mjs); pool order MUST match: index i <-> id
   '<prof>-q<i+1>'. BIGGOALS / BIGGOAL_PROF: the destination line on
   the big-goal card (RU twins: BIGGOALS_RU / BIGGOAL_PROF_RU in
   tracks2.js). Texts trace to the pilot packages; digits never change. */


/* ================= DAILY MICRO-QUESTS =================
   The daily quest is a MICRO-ACTION: 5–15 minutes, doable today.
   Never a track step — no degrees, licenses, exams, or jobs. The big
   moves live on the track and on the big-goal card below.
   The server owns the ids + the daily pick (api/_lib/quests.mjs);
   pool order here MUST match the server pool: index i <-> '<prof>-q<i+1>'.
   Texts trace to the pilot packages' own numbers. Digits never change. */
var QUESTS = {
/* ================= LAW QUESTS ================= */
law: [
  {id:'law-q1', t:'Open one job post for a specialist paralegal. Save it. This is the job you aim for.', tag:'5 minutes · look at real jobs', ru:'Откройте одну вакансию specialist paralegal (помощник юриста с узкой специализацией). Сохраните её. Это работа, к которой вы идёте.', tagRu:'5 минут · смотрим вакансии'},
  {id:'law-q2', t:'Pick ONE area of law to aim for. Write it down: privacy, diligence (checking a company before a deal), or healthcare.', tag:'5 minutes · one decision', ru:'Выберите ОДНУ область права. Запишите её: privacy (защита данных), diligence (проверка компании перед сделкой) или healthcare (медицина).', tagRu:'5 минут · одно решение'},
  {id:'law-q3', t:'Open 3 job posts for senior roles. Write down what degree each one wants. Most want a bachelor’s.', tag:'10 minutes · skills over diplomas', ru:'Откройте 3 вакансии для опытных (senior). Запишите, какой диплом просит каждая. Чаще всего — bachelor’s (бакалавр).', tagRu:'10 минут · навыки важнее дипломов'},
  {id:'law-q4', t:'Open the Kira or Harvey site (AI tools for lawyers). Read how the AI checks a company before a deal. Five minutes.', tag:'5 minutes · know the tools', ru:'Откройте сайт Kira или Harvey (AI-инструменты для юристов). Прочитайте, как AI проверяет компанию перед сделкой. Пять минут.', tagRu:'5 минут · узнать инструменты'},
  {id:'law-q5', t:'Find the Cooley job post that pays $135,200–$176,800. Write down what they want for the top pay.', tag:'10 minutes · one number', ru:'Найдите вакансию Cooley, где платят $135,200–$176,800. Запишите, что нужно уметь, чтобы получать по максимуму.', tagRu:'10 минут · одна цифра'},
  {id:'law-q6', t:'Upload your resume on this page. Confirm one fact the app finds in it.', tag:'10 minutes · your file', ru:'Загрузите резюме на этой странице. Подтвердите один факт, который приложение в нём найдёт.', tagRu:'10 минут · ваш файл'},
  {id:'law-q7', t:'Read today’s radar news below. One item, with its date. It shows how jobs are changing.', tag:'5 minutes · one news item', ru:'Прочитайте новость радара ниже. Один пункт, с датой. Так видно, как меняется рынок.', tagRu:'5 минут · одна новость'},
  {id:'law-q8', t:'Share your verdict card with friends. AI may be changing their jobs too. Help them get ready.', tag:'5 minutes · share it', ru:'Покажите друзьям карточку с вашим результатом. AI может менять и их работу. Помогите им подготовиться.', tagRu:'5 минут · поделиться'},
  {id:'law-q9', t:'Pick one task you repeat at work. Time it once. Write down the minutes. Easy win!', tag:'15 minutes · real proof', ru:'Выберите одну задачу, которую повторяете на работе. Засеките время один раз. Запишите минуты. Это легко!', tagRu:'15 минут · реальное доказательство'},
  {id:'law-q10', t:'Look up CIPP/US (a certificate in privacy law). 3 of 3 privacy job posts that named a certificate asked for it.', tag:'10 minutes · one check', ru:'Узнайте, что такое CIPP/US (сертификат по защите данных). Его просили 3 из 3 вакансий privacy, где был назван сертификат.', tagRu:'10 минут · одна проверка'}
],
/* ================= CPA QUESTS ================= */
cpa: [
  {id:'cpa-q1', t:'Open one current job post in your field. Save it. Read twice how much it pays.', tag:'5 minutes · look at real jobs', ru:'Откройте одну открытую вакансию в вашей области. Сохраните её. Дважды прочитайте, сколько там платят.', tagRu:'5 минут · смотрим вакансии'},
  {id:'cpa-q2', t:'Pick ONE specialty and write it down: tax, SEC reporting (reports for public companies), FDD (checking a company before a sale), or controller.', tag:'5 minutes · one decision', ru:'Выберите ОДНУ специализацию и запишите её: tax (налоги), SEC reporting (отчёты публичных компаний), FDD (проверка компании перед продажей) или controller (главный по учёту).', tagRu:'5 минут · одно решение'},
  {id:'cpa-q3', t:'Open 3 job posts in your field. Which tool shows up most: NetSuite, Workiva, or Excel? Write it down.', tag:'10 minutes · skills over diplomas', ru:'Откройте 3 вакансии в вашей области. Какую программу упоминают чаще: NetSuite, Workiva или Excel? Запишите.', tagRu:'10 минут · навыки важнее дипломов'},
  {id:'cpa-q4', t:'Open your state board’s page about the CPA license. How many college credits do you need: 120 or 150? Write it down.', tag:'10 minutes · one page', ru:'Откройте страницу board (совета по лицензиям) вашего штата о лицензии CPA. Сколько нужно учебных кредитов: 120 или 150? Запишите.', tagRu:'10 минут · одна страница'},
  {id:'cpa-q5', t:'Find one job post that asks for Workiva. Save it. This is your way into SEC reporting.', tag:'10 minutes · look at real jobs', ru:'Найдите одну вакансию, где просят Workiva. Сохраните её. Это ваш вход в SEC reporting (отчёты публичных компаний).', tagRu:'10 минут · смотрим вакансии'},
  {id:'cpa-q6', t:'Upload your resume on this page. Confirm one fact the app finds in it.', tag:'10 minutes · your file', ru:'Загрузите резюме на этой странице. Подтвердите один факт, который приложение в нём найдёт.', tagRu:'10 минут · ваш файл'},
  {id:'cpa-q7', t:'Read today’s radar news below. One item, with its date. It shows how jobs are changing.', tag:'5 minutes · one news item', ru:'Прочитайте новость радара ниже. Один пункт, с датой. Так видно, как меняется рынок.', tagRu:'5 минут · одна новость'},
  {id:'cpa-q8', t:'Share your verdict card with friends. AI may be changing their jobs too. Help them get ready.', tag:'5 minutes · share it', ru:'Покажите друзьям карточку с вашим результатом. AI может менять и их работу. Помогите им подготовиться.', tagRu:'5 минут · поделиться'},
  {id:'cpa-q9', t:'Write down one task you do by hand. Add how many hours it takes each month.', tag:'10 minutes · one page', ru:'Запишите одну задачу, которую вы делаете вручную. Добавьте, сколько часов она занимает в месяц.', tagRu:'10 минут · одна страница'},
  {id:'cpa-q10', t:'Only 42% pass FAR (one part of the CPA exam) on the first try. That’s normal! Write down what a retake would cost, so you’re ready.', tag:'5 minutes · one number', ru:'С первого раза FAR (одну из частей экзамена CPA) сдают только 42%. Это нормально! Запишите, сколько стоит пересдача, — и вы будете готовы.', tagRu:'5 минут · одна цифра'}
],
/* ================= NURSE QUESTS ================= */
nurse: [
  {id:'nurse-q1', t:'Open one RN job post in a specialty: ICU, ER, or OR. Save it. This is the job you aim for.', tag:'5 minutes · look at real jobs', ru:'Откройте одну вакансию RN (дипломированная медсестра) в ICU (реанимация), ER (приёмное отделение) или OR (операционная). Сохраните её. Это работа, к которой вы идёте.', tagRu:'5 минут · смотрим вакансии'},
  {id:'nurse-q2', t:'Pick ONE specialty and write it down: ICU, ER, OR, psych, or anesthesia.', tag:'5 minutes · one decision', ru:'Выберите ОДНУ специальность и запишите её: ICU, ER, OR, psych (психиатрия) или anesthesia (анестезия).', tagRu:'5 минут · одно решение'},
  {id:'nurse-q3', t:'Open 3 job posts in your specialty. Which certificate shows up most: BLS, ACLS, or CCRN? Write it down.', tag:'10 minutes · skills over diplomas', ru:'Откройте 3 вакансии по вашей специальности. Какой сертификат просят чаще: BLS, ACLS или CCRN? Запишите.', tagRu:'10 минут · навыки важнее дипломов'},
  {id:'nurse-q4', t:'Check your BLS expiry date. If it ends this year, write the renewal month down.', tag:'5 minutes · one date', ru:'Проверьте, когда кончается ваш BLS (сертификат по первой помощи). Если в этом году — запишите месяц, когда продлить.', tagRu:'5 минут · одна дата'},
  {id:'nurse-q5', t:'Find one job post with a sign-on bonus (money for joining). These are $10K–$25K. Save the number.', tag:'5 minutes · one number', ru:'Найдите вакансию с бонусом за выход на работу. Обычно это $10K–$25K. Сохраните сумму.', tagRu:'5 минут · одна цифра'},
  {id:'nurse-q6', t:'Upload your resume on this page. Confirm one fact the app finds in it.', tag:'10 minutes · your file', ru:'Загрузите резюме на этой странице. Подтвердите один факт, который приложение в нём найдёт.', tagRu:'10 минут · ваш файл'},
  {id:'nurse-q7', t:'Read today’s radar news below. One item, with its date. It shows how jobs are changing.', tag:'5 minutes · one news item', ru:'Прочитайте новость радара ниже. Один пункт, с датой. Так видно, как меняется рынок.', tagRu:'5 минут · одна новость'},
  {id:'nurse-q8', t:'Share your verdict card with friends. AI may be changing their jobs too. Help them get ready.', tag:'5 minutes · share it', ru:'Покажите друзьям карточку с вашим результатом. AI может менять и их работу. Помогите им подготовиться.', tagRu:'5 минут · поделиться'},
  {id:'nurse-q9', t:'Wake Tech’s ADN (a short nursing degree) costs $5,472 total. Find the price of one other ADN. Write down the difference.', tag:'10 minutes · one number', ru:'ADN (короткая программа на медсестру) в Wake Tech стоит всего $5,472. Найдите цену другой программы ADN. Запишите разницу.', tagRu:'10 минут · одна цифра'},
  {id:'nurse-q10', t:'Find your state on the NP practice map (how freely NPs can work): Full, Reduced, or Restricted. Write it down.', tag:'10 minutes · one check', ru:'Найдите ваш штат на карте практики NP (насколько свободно может работать NP): Full, Reduced или Restricted. Запишите.', tagRu:'10 минут · одна проверка'}
],
/* ================= FINANCE / FP&A QUESTS ================= */
fin: [
  {id:'fin-q1', t:'Open one job post for an FP&A partner (the planning team). Save it. Skip plain “analyst” jobs. There are fewer of them each year.', tag:'5 minutes · look at real jobs', ru:'Откройте одну вакансию FP&A partner (финансовое планирование). Сохраните её. Обычные вакансии «analyst» пропустите — их становится меньше.', tagRu:'5 минут · смотрим вакансии'},
  {id:'fin-q2', t:'Pick ONE role and write it down: partner, strategic, hybrid, or corp dev.', tag:'5 minutes · one decision', ru:'Выберите ОДНУ роль и запишите её: partner, strategic, hybrid или corp dev.', tagRu:'5 минут · одно решение'},
  {id:'fin-q3', t:'Open 3 job posts. Count how many ask for SQL. In the jobs we checked, it was 31 of 40.', tag:'10 minutes · skills over diplomas', ru:'Откройте 3 вакансии. Посчитайте, сколько просят SQL. В вакансиях, которые мы проверили, — 31 из 40.', tagRu:'10 минут · навыки важнее дипломов'},
  {id:'fin-q4', t:'Write one SQL query on paper. One table, one filter, one sum. Ten minutes, no computer.', tag:'10 minutes · pen and paper', ru:'Напишите один SQL-запрос на бумаге. Одна таблица, один фильтр, одна сумма. Десять минут, без компьютера.', tagRu:'10 минут · ручка и бумага'},
  {id:'fin-q5', t:'Find one job post that names Anaplan (planning software). Save it. 16 of 40 job posts name such software.', tag:'10 minutes · look at real jobs', ru:'Найдите вакансию, где упомянут Anaplan (программа для планирования). Сохраните её. Такие программы есть в 16 из 40 вакансий.', tagRu:'10 минут · смотрим вакансии'},
  {id:'fin-q6', t:'Upload your resume on this page. Confirm one fact the app finds in it.', tag:'10 minutes · your file', ru:'Загрузите резюме на этой странице. Подтвердите один факт, который приложение в нём найдёт.', tagRu:'10 минут · ваш файл'},
  {id:'fin-q7', t:'Read today’s radar news below. One item, with its date. It shows how jobs are changing.', tag:'5 minutes · one news item', ru:'Прочитайте новость радара ниже. Один пункт, с датой. Так видно, как меняется рынок.', tagRu:'5 минут · одна новость'},
  {id:'fin-q8', t:'Share your verdict card with friends. AI may be changing their jobs too. Help them get ready.', tag:'5 minutes · share it', ru:'Покажите друзьям карточку с вашим результатом. AI может менять и их работу. Помогите им подготовиться.', tagRu:'5 минут · поделиться'},
  {id:'fin-q9', t:'Pick one report you redo every month. Write down how many hours it takes. That is the first thing to automate.', tag:'10 minutes · one page', ru:'Выберите отчёт, который вы переделываете каждый месяц. Запишите, сколько часов он занимает. Его и стоит автоматизировать первым.', tagRu:'10 минут · одна страница'},
  {id:'fin-q10', t:'Check what one job post says about CFA: required, nice to have, or not mentioned. In our check: required in 0 of 40.', tag:'10 minutes · one check', ru:'Посмотрите, что вакансия пишет про CFA: обязателен, желателен или не упомянут. У нас: обязателен в 0 из 40.', tagRu:'10 минут · одна проверка'}
],
/* ================= CREATOR QUESTS — STAFF (v2, 2026-11-01) =================
   Micro-actions for a staff-creator job hunt (the HIRED creator, not
   the independent path). Pool ids unchanged (creator-q1..q10) so the
   server rotation and quest history keep working; quest q8 is the
   share quest (DNA strand: voice, founder ruling). */
creator: [
  {id:'creator-q1', t:'Shoot a 20-second product demo on your phone. One take is fine! Employers want to see you can make it. It doesn’t have to be perfect.', tag:'5 minutes · shoot it', ru:'Снимите 20-секундное демо продукта на телефон. Одного дубля хватит. Работодателю важно, что вы умеете снимать. Идеально быть не должно.', tagRu:'5 минут · снять'},
  {id:'creator-q2', t:'Cut 10 seconds out of an old video. Making videos shorter and tighter is the job. Use CapCut or Premiere.', tag:'10 minutes · one edit', ru:'Вырежьте 10 секунд из старого видео. Делать видео короче и плотнее — это и есть работа. Используйте CapCut или Premiere.', tagRu:'10 минут · один монтаж'},
  {id:'creator-q3', t:'Open one current job post for a staff creator. Save its list of requirements. This is what employers want, in their own words.', tag:'5 minutes · look at real jobs', ru:'Откройте одну свежую вакансию штатного креатора. Сохраните список требований. Это то, чего хотят работодатели, их же словами.', tagRu:'5 минут · смотрим вакансии'},
  {id:'creator-q4', t:'Add one finished work to your portfolio. Write its view count next to it. Numbers are your proof.', tag:'10 minutes · your proof', ru:'Добавьте одну готовую работу в портфолио. Рядом напишите число просмотров. Цифры — лучшее доказательство.', tagRu:'10 минут · ваше доказательство'},
  {id:'creator-q5', t:'Pick one industry. Write down 5 brands in it that post a video every week. That list is your niche.', tag:'10 minutes · one niche', ru:'Выберите одну отрасль. Запишите 5 брендов из неё, которые выкладывают видео каждую неделю. Это и есть ваша ниша.', tagRu:'10 минут · одна ниша'},
  {id:'creator-q6', t:'Message one staff creator or one hiring manager. Praise one specific thing in their content. Ask one real question.', tag:'5 minutes · one message', ru:'Напишите одному штатному креатору или менеджеру, который нанимает. Похвалите что-то конкретное в их контенте. Задайте один настоящий вопрос.', tagRu:'5 минут · одно сообщение'},
  {id:'creator-q7', t:'Today, let one AI tool do one step of your work. For example: captions, a new version, or a first edit. Write down what it saved you.', tag:'10 minutes · one tool', ru:'Сегодня дайте одному AI-инструменту сделать один шаг работы. Например, субтитры, новый вариант или первый монтаж. Запишите, что это вам сэкономило.', tagRu:'10 минут · один инструмент'},
  {id:'creator-q8', t:'Share your PathCheck card in a story or post. Employers hire creators they have already seen.', tag:'5 minutes · share it', ru:'Поделитесь вашей карточкой PathCheck в сторис или посте. Работодатели нанимают тех, кого уже видели.', tagRu:'5 минут · поделиться'},
  {id:'creator-q9', t:'Write 5 hooks for one video idea. A hook is the first seconds that make people stop scrolling. Job posts list hooks as a duty. So practise them.', tag:'10 minutes · five hooks', ru:'Напишите 5 хуков для одной идеи видео. Хук — первые секунды, которые цепляют зрителя. В вакансиях хуки — прямая обязанность. Так что тренируйтесь.', tagRu:'10 минут · пять хуков'},
  {id:'creator-q10', t:'Screenshot your best post. Write two lines on why it worked. This short note is gold for your portfolio.', tag:'5 minutes · your numbers', ru:'Сделайте скриншот вашего самого успешного поста. Напишите две строки: почему он сработал. Такой короткий разбор — золото для портфолио.', tagRu:'5 минут · ваши цифры'},
],
/* ================= ANALYST QUESTS ================= */
analyst: [
  {id:'analyst-q1', t:'Open one job post for a product analyst. Save it. Skip jobs that only build dashboards on request.', tag:'5 minutes · look at real jobs', ru:'Откройте одну вакансию product analyst. Сохраните её. Пропустите вакансии, где только делают дашборды по запросу.', tagRu:'5 минут · смотрим вакансии'},
  {id:'analyst-q2', t:'Pick ONE role and write it down: product, analytics engineer, strategy, or data scientist.', tag:'5 minutes · one decision', ru:'Выберите ОДНУ роль и запишите её: product, analytics engineer, strategy или data scientist.', tagRu:'5 минут · одно решение'},
  {id:'analyst-q3', t:'Open 3 analyst job posts. Count how many ask for SQL. In the jobs we checked: 43 of 46.', tag:'10 minutes · skills over diplomas', ru:'Откройте 3 вакансии аналитика. Посчитайте, сколько просят SQL. В вакансиях, которые мы проверили: 43 из 46.', tagRu:'10 минут · навыки важнее дипломов'},
  {id:'analyst-q4', t:'Write one SQL query on paper. One table, one filter, one sum. Ten minutes, no computer.', tag:'10 minutes · pen and paper', ru:'Напишите один SQL-запрос на бумаге. Одна таблица, один фильтр, одна сумма. Десять минут, без компьютера.', tagRu:'10 минут · ручка и бумага'},
  {id:'analyst-q5', t:'Find one job post for an analytics engineer. Look for dbt (a data tool). 7 of 7 job posts ask for it.', tag:'10 minutes · look at real jobs', ru:'Найдите вакансию analytics engineer. Поищите там dbt (инструмент для данных). Его просят 7 из 7 вакансий.', tagRu:'10 минут · смотрим вакансии'},
  {id:'analyst-q6', t:'Upload your resume on this page. Confirm one fact the app finds in it.', tag:'10 minutes · your file', ru:'Загрузите резюме на этой странице. Подтвердите один факт, который приложение в нём найдёт.', tagRu:'10 минут · ваш файл'},
  {id:'analyst-q7', t:'Read today’s radar news below. One item, with its date. It shows how jobs are changing.', tag:'5 minutes · one news item', ru:'Прочитайте новость радара ниже. Один пункт, с датой. Так видно, как меняется рынок.', tagRu:'5 минут · одна новость'},
  {id:'analyst-q8', t:'Share your verdict card with friends. AI may be changing their jobs too. Help them get ready.', tag:'5 minutes · share it', ru:'Покажите друзьям карточку с вашим результатом. AI может менять и их работу. Помогите им подготовиться.', tagRu:'5 минут · поделиться'},
  {id:'analyst-q9', t:'Pick one dashboard nobody opens. Write down what decision it was meant to help with.', tag:'10 minutes · one page', ru:'Выберите дашборд, который никто не открывает. Запишите, какое решение он должен был помогать принять.', tagRu:'10 минут · одна страница'},
  {id:'analyst-q10', t:'Compare two BLS numbers (US government job data): $101,860 with +10% growth vs $120,230 with +35%. Write down which one is yours.', tag:'10 minutes · one number', ru:'Сравните две цифры BLS (госстатистика США): $101,860 и рост +10% против $120,230 и рост +35%. Запишите, какая из них про вас.', tagRu:'10 минут · одна цифра'}
],
dataanalyst: [
  {id:'dataanalyst-q1', t:'Open one job post for a product analyst. Save it. Skip jobs that only build dashboards on request.', tag:'5 minutes · look at real jobs', ru:'Откройте одну вакансию product analyst. Сохраните её. Пропустите вакансии, где только делают дашборды по запросу.', tagRu:'5 минут · смотрим вакансии'},
  {id:'dataanalyst-q2', t:'Pick ONE role and write it down: product, analytics engineer, or the way into data science.', tag:'5 minutes · one decision', ru:'Выберите ОДНУ роль и запишите её: product, analytics engineer или путь в data scientist.', tagRu:'5 минут · одно решение'},
  {id:'dataanalyst-q3', t:'Open 3 data analyst job posts. Count how many ask for SQL. In the data jobs we checked: 24 of 24.', tag:'10 minutes · skills over diplomas', ru:'Откройте 3 вакансии data analyst. Посчитайте, сколько просят SQL. В вакансиях по данным, которые мы проверили: 24 из 24.', tagRu:'10 минут · навыки важнее дипломов'},
  {id:'dataanalyst-q4', t:'Write one SQL query on paper. One table, one filter, one sum. Ten minutes, no computer.', tag:'10 minutes · pen and paper', ru:'Напишите один SQL-запрос на бумаге. Одна таблица, один фильтр, одна сумма. Десять минут, без компьютера.', tagRu:'10 минут · ручка и бумага'},
  {id:'dataanalyst-q5', t:'Find one job post for an analytics engineer. Look for dbt (a data tool). 7 of 7 job posts ask for it.', tag:'10 minutes · look at real jobs', ru:'Найдите вакансию analytics engineer. Поищите там dbt (инструмент для данных). Его просят 7 из 7 вакансий.', tagRu:'10 минут · смотрим вакансии'},
  {id:'dataanalyst-q6', t:'Upload your resume on this page. Confirm one fact the app finds in it.', tag:'10 minutes · your file', ru:'Загрузите резюме на этой странице. Подтвердите один факт, который приложение в нём найдёт.', tagRu:'10 минут · ваш файл'},
  {id:'dataanalyst-q7', t:'Read today’s radar news below. One item, with its date. It shows how jobs are changing.', tag:'5 minutes · one news item', ru:'Прочитайте новость радара ниже. Один пункт, с датой. Так видно, как меняется рынок.', tagRu:'5 минут · одна новость'},
  {id:'dataanalyst-q8', t:'Share your verdict card with friends. AI may be changing their jobs too. Help them get ready.', tag:'5 minutes · share it', ru:'Покажите друзьям карточку с вашим результатом. AI может менять и их работу. Помогите им подготовиться.', tagRu:'5 минут · поделиться'},
  {id:'dataanalyst-q9', t:'Pick one dashboard nobody opens. Write down what decision it was meant to help with.', tag:'10 minutes · one page', ru:'Выберите дашборд, который никто не открывает. Запишите, какое решение он должен был помогать принять.', tagRu:'10 минут · одна страница'},
  {id:'dataanalyst-q10', t:'Read the BLS numbers (US government job data) for data scientists: typical pay $120,230, growth +35%. Write down what this means for you.', tag:'10 minutes · one number', ru:'Прочитайте данные BLS (госстатистика США) про data scientists: типичная зарплата $120,230, рост +35%. Запишите, что это значит для вас.', tagRu:'10 минут · одна цифра'}
],
businessanalyst: [
  {id:'businessanalyst-q1', t:'Open one job post for a strategy & operations analyst. Save it. Skip jobs that only write documents on request.', tag:'5 minutes · look at real jobs', ru:'Откройте одну вакансию strategy & operations analyst. Сохраните её. Пропустите вакансии, где только пишут документы по запросу.', tagRu:'5 минут · смотрим вакансии'},
  {id:'businessanalyst-q2', t:'Pick ONE role and write it down: documents, or strategy & operations.', tag:'5 minutes · one decision', ru:'Выберите ОДНУ роль и запишите её: документы или strategy & operations.', tagRu:'5 минут · одно решение'},
  {id:'businessanalyst-q3', t:'Open 3 business analyst job posts. Count how many name Jira or Agile. In the BA jobs we checked: 9 of 15.', tag:'10 minutes · skills over diplomas', ru:'Откройте 3 вакансии business analyst. Посчитайте, где упомянуты Jira или Agile. В вакансиях BA, которые мы проверили: 9 из 15.', tagRu:'10 минут · навыки важнее дипломов'},
  {id:'businessanalyst-q4', t:'Take one document you wrote. Rewrite its first page in three lines: the decision, the number, the request.', tag:'10 minutes · pen and paper', ru:'Возьмите документ, который вы написали. Перепишите первую страницу в три строки: решение, цифра, просьба.', tagRu:'10 минут · ручка и бумага'},
  {id:'businessanalyst-q5', t:'Find one business job post that requires an AI tool. SanDisk has one.', tag:'10 minutes · look at real jobs', ru:'Найдите бизнес-вакансию, где AI-инструмент — обязательное требование. Такая есть у SanDisk.', tagRu:'10 минут · смотрим вакансии'},
  {id:'businessanalyst-q6', t:'Upload your resume on this page. Confirm one fact the app finds in it.', tag:'10 minutes · your file', ru:'Загрузите резюме на этой странице. Подтвердите один факт, который приложение в нём найдёт.', tagRu:'10 минут · ваш файл'},
  {id:'businessanalyst-q7', t:'Read today’s radar news below. One item, with its date. It shows how jobs are changing.', tag:'5 minutes · one news item', ru:'Прочитайте новость радара ниже. Один пункт, с датой. Так видно, как меняется рынок.', tagRu:'5 минут · одна новость'},
  {id:'businessanalyst-q8', t:'Share your verdict card with friends. AI may be changing their jobs too. Help them get ready.', tag:'5 minutes · share it', ru:'Покажите друзьям карточку с вашим результатом. AI может менять и их работу. Помогите им подготовиться.', tagRu:'5 минут · поделиться'},
  {id:'businessanalyst-q9', t:'Write down one decision your work changed. One line, with the number.', tag:'10 minutes · one page', ru:'Запишите одно решение, которое изменила ваша работа. Одна строка, с цифрой.', tagRu:'10 минут · одна страница'},
  {id:'businessanalyst-q10', t:'Read the BLS numbers (US government job data) for management analysts: typical pay $101,860, growth +10%, about 94,100 openings a year. Write down what this means for you.', tag:'10 minutes · one number', ru:'Прочитайте данные BLS (госстатистика США) про management analysts: типичная зарплата $101,860, рост +10%, около 94,100 вакансий в год. Запишите, что это значит для вас.', tagRu:'10 минут · одна цифра'}
],
/* ================= AI CONTENT CREATOR QUESTS ================= */
aicreator: [
  {id:'aicreator-q1', t:'Write one sentence about your path: a real face with AI helpers, or AI video for brands. Pin it where you work.', tag:'5 minutes · one decision', ru:'Напишите одно предложение о вашем пути: вы — живое лицо с AI-помощниками или делаете AI-видео для брендов. Повесьте его там, где работаете.', tagRu:'5 минут · одно решение'},
  {id:'aicreator-q2', t:'Re-edit one old video with your AI tools. Time it. Write down the minutes.', tag:'15 minutes · hands on', ru:'Перемонтируйте одно старое видео с помощью ваших AI-инструментов. Засеките время. Запишите минуты.', tagRu:'15 минут · сделать самим'},
  {id:'aicreator-q3', t:'Generate three hooks for one product. Pick the one a human would stop scrolling for.', tag:'10 minutes · three tries', ru:'Сгенерируйте три хука для одного продукта. Выберите тот, на котором человек перестанет листать.', tagRu:'10 минут · три попытки'},
  {id:'aicreator-q4', t:'Read the FTC rule on fake reviews (FTC protects US shoppers). Check your scripts against it. No AI person may pretend to be a real customer.', tag:'10 minutes · one check', ru:'Прочитайте правило FTC (защита покупателей в США) о фейковых отзывах. Проверьте по нему ваши сценарии. AI-персонаж не должен выдавать себя за настоящего покупателя.', tagRu:'10 минут · одна проверка'},
  {id:'aicreator-q5', t:'Make one before/after pair: the same ad, filmed vs made with AI. Save both for your price list.', tag:'15 minutes · one page', ru:'Сделайте пару «до/после»: одна и та же реклама — снятая и сделанная AI. Сохраните обе для вашего прайс-листа.', tagRu:'15 минут · одна страница'},
  {id:'aicreator-q6', t:'Find one brand in your niche with ads marked as AI. Write down what they sell and how the label looks.', tag:'10 minutes · look at real jobs', ru:'Найдите бренд в вашей нише, у которого реклама помечена как AI. Запишите, что они продают и как выглядит пометка.', tagRu:'10 минут · смотрим вакансии'},
  {id:'aicreator-q7', t:'Send one offer to a local brand today: ten AI ads for the price of one filmed video. One message.', tag:'10 minutes · one message', ru:'Напишите сегодня одному местному бренду. Предложите десять AI-реклам по цене одного снятого видео. Одно сообщение.', tagRu:'10 минут · одно сообщение'},
  {id:'aicreator-q8', t:'Share your verdict card with friends. AI may be changing their jobs too. Help them get ready.', tag:'5 minutes · share it', ru:'Покажите друзьям карточку с вашим результатом. AI может менять и их работу. Помогите им подготовиться.', tagRu:'5 минут · поделиться'},
  {id:'aicreator-q9', t:'Use your AI tools to dub one video into another language. Watch it all once before posting.', tag:'15 minutes · one video', ru:'Переозвучьте одно ваше видео на другой язык с помощью AI-инструментов. Перед публикацией посмотрите его целиком.', tagRu:'15 минут · одно видео'},
  {id:'aicreator-q10', t:'Write this month’s numbers: pieces done, minutes per piece, money earned. Three lines.', tag:'10 minutes · your numbers', ru:'Запишите цифры этого месяца: сколько работ сделано, сколько минут на одну, сколько денег пришло. Три строки.', tagRu:'10 минут · ваши числа'}
]
};

/* ================= BIG GOAL =================
   One line per seat (grid leads fall back to BIGGOAL_PROF). This is
   the destination the daily micro-quests walk toward — the degree,
   the license, the money seat — shown as the GOAL, never as a task.
   Lines distill the packages' own door copy; digits unchanged. */
var BIGGOALS = {
  specialist:'The big goal: a specialist job where you are the boss of the AI. Senior jobs pay $135K–$200K. Privacy jobs pay $212K–$319K.',
  paralegal:'The big goal: grow out of the general paralegal job. It pays $62,890 in the middle and isn’t growing (0%). Pick one specialty instead. Specialists can earn up to $150K–$200K.',
  docreview:'The big goal: move up from document review. Become the senior specialist who runs the review AI. That pays $150K–$200K.',
  lawstudent:'The big goal: a law degree (J.D.) with one specialty in mind. Jobs in privacy and AI rules pay $212K–$319K.',
  bookkeeper:'The big goal: bachelor’s → CPA license → controller. You run the ERP (company money software). Pay: $130–200K + bonus.',
  tax:'The big goal: special tax work. For example, firms taxed through their owners, or very rich clients. It pays $125–200K. Managers there want the license.',
  staff:'The big goal: a CPA license and one specialty. Special tax work pays $125–200K. Deal advice (checking firms before a sale) pays up to $225K.',
  audit:'The big goal: use audit as a bridge, not your last stop. Deal advice jobs pay up to $225K.',
  technical:'The big goal: be the one who signs SEC reports (reports for public companies). Jobs pay $120–184K. 6 of 6 need an active CPA license.',
  fdd:'The big goal: deal advice (checking firms before a sale). It paid the most in the jobs we checked: up to $225K.',
  controller:'The big goal: a controller who runs the ERP system and closes the books each month. Pay: $130–200K + bonus. Next stop: CFO.',
  medsurg:'The big goal: use med-surg (the general ward) as a starting step. Then move to a specialty like ICU, ER, or OR. That opens travel, NP, and CRNA money.',
  specialty:'The big goal: get really good at one specialty. Then pick your next step by real pay: travel jobs, a specialty NP job, or CRNA.',
  travel:'The big goal: a few years in a specialty first. Then travel jobs. Save that money for your NP or CRNA choice.',
  nstudent:'The big goal: get the RN license the cheap way. Start in a specialty job. Let your employer pay for your next studies.',
  np:'The big goal: pick an NP specialty that pays extra. Psych NP jobs pay $200K–$257K.',
  crna:'The big goal: become a CRNA. Here your degree is your license. Typical pay is $236,590.',
  lpn:'The big goal: become an RN, not an LPN. Start with an ADN program (a short nursing degree). That way your pay can keep growing.',
  reporting:'The big goal: step over to a nearby job. An FP&A partner can earn up to $276,250. A BI hybrid job pays $138K–$180,600.',
  fpa:'The big goal: own one team’s P&L (its profit-and-loss sheet) and work right next to that team. You get paid for good judgment. Top jobs pay $276,250.',
  strategic:'The big goal: work in strategic finance. You use SQL and solve real business problems. Top jobs pay $231,940–$276,250.',
  hybrid:'The big goal: a BI / analytics hybrid job. It’s the fastest way into finance. It pays $138K–$180,600.',
  corpdev:'The big goal: get into corporate development (company deals) while it still hires early. Or get the same pay as an FP&A partner.',
  faceless:'The big goal: content you lead, with your face or voice in it. That kind still pays well.',
  streamer:'The big goal: a creator with a business. Your stream is the shop window. Your email list and products are the shop.',
  personality:'The big goal: brand deals plus a business you control. That means your own products and your own email list.',
  ugc:'The big goal: make UGC (videos for brands) your real trade, with a list of buyers. Raise your price toward $500 as paid orders add up.',
  educator:'The big goal: solve one problem your audience will pay for. Teach it as a real person they can trust. Add a product with your name on it.',
  creatorbiz:'The big goal: money that is truly yours. No one app controls most of what you earn.',
  brandcreator:'The big goal: a job at a brand where you do it all yourself. Then add one rare skill. That lifts your pay toward $115–125K.',
  facecreator:'The big goal: be a face people trust, with real knowledge. On-camera jobs pay $110K–$160K.',
  perfcreator:'The big goal: a job where your content brings in sales. Base pay is $65–100K. You get bonuses when your content hits the company’s goals.',
  agencycreator:'The big goal: treat the agency as a 1–3-year school. Then leave with a great portfolio. Go to a brand, on-camera or sales job at $100K+.',
  mediacreator:'The big goal: move from writing to a brand or sales job. You already have the skills. The pay is $15–25K higher.',
  genba:'The big goal: a job where you help make decisions. Your years working with managers count for product analyst or strategy jobs. Years of writing documents count less.',
  reportda:'The big goal: keep using SQL (the database language). Use it as a product analyst or analytics engineer. Those jobs pay for decisions, not reports.',
  prodan:'The big goal: a product analyst who runs experiments from start to finish. Jobs pay $106K–$300,067.',
  aneng:'The big goal: analytics engineer. 7 of 7 jobs ask for dbt (a data tool). Senior pay reaches $244,100.',
  bizops:'The big goal: strategy & operations. Google pays $124K–$177K. To get in, show one decision you changed, with numbers.',
  dsgate:'The big goal: data scientist. It’s a new job, not a promotion. Typical pay is $120,230. Jobs are growing +35%.',
  aimass:'The big goal: make videos the same way, but with a real face or a paying client. That kind of work still pays well.',
  persona:'The big goal: a studio that makes AI characters for brands. The money is in your service, not in the character.',
  aistreamer:'The big goal: skills you can sell without streaming. What you built is software. So sell it like software!',
  aipipeline:'The big goal: be a face brands pay $154 a video for. AI helpers and a second language get you there.',
  aiservice:'The big goal: clients who pay you every month. You charge monthly for your good judgment, never per video.'
};

/* Grid (whole-map) leads: the profession-level big goal. */
var BIGGOAL_PROF = {
  law:'The big goal: pick one specialty: privacy and AI rules. Jobs there pay $212K–$319K.',
  cpa:'The big goal: bachelor’s degree → CPA license → a chosen specialty at $120K–$225K.',
  nurse:'The big goal: get the RN license, then pick a specialty. Psych NP jobs pay $200K–$257K. A CRNA’s typical pay is $236,590.',
  fin:'The big goal: a partner job in FP&A (the money-planning team), working next to one team. Top jobs pay $276,250.',
  creator:'The big goal: a staff creator job in an area that got a YES: brand, on-camera or sales. Typical pay is about $77K. Top jobs pay $140–160K.',
  analyst:'The big goal: a job where you help make decisions. Be a product analyst or an analytics engineer, at $96K–$300K.',
  dataanalyst:'The big goal: a job where you help make decisions. Be a product analyst or an analytics engineer, at $96K–$300K.',
  businessanalyst:'The big goal: a job where you help make decisions. Strategy & operations pays $96K–$177K. Your years with managers count there. Years of writing documents count less.',
  aicreator:'The big goal: AI is your helper, not your product. Be a real face, or build your own list of clients.'
};

/* ================= HEALTHCARE ADMINISTRATOR QUESTS (wave 2) =================
   Appended 2026-11-01: pool order matches api/_lib/quests.mjs
   (index i <-> 'healthadmin-q<i+1>'). Texts trace to the package. */
Object.assign(QUESTS, {
healthadmin: [
  {id:'healthadmin-q1', t:'Write one sentence: which of four jobs is yours? Hospital, doctor’s office, nursing home, or paperwork.', tag:'5 minutes · pen and paper', ru:'Напишите одно предложение: какая из четырёх работ ваша? Больница, частная клиника, дом престарелых или работа с бумагами.', tagRu:'5 минут · ручка и бумага'},
  {id:'healthadmin-q2', t:'Open one current job post for your role. Save how much it pays.', tag:'10 minutes · job boards', ru:'Откройте одну открытую вакансию для вашей роли. Сохраните, сколько там платят.', tagRu:'10 минут · сайты вакансий'},
  {id:'healthadmin-q3', t:'Check what your role requires. Nursing home: your state’s licence rules. Others: who can get FACHE or CMPE.', tag:'10 minutes · official sites', ru:'Проверьте, что нужно для вашей роли. Для дома престарелых — правила лицензии вашего штата. Для других — кто может получить FACHE или CMPE (сертификаты руководителей).', tagRu:'10 минут · официальные сайты'},
  {id:'healthadmin-q4', t:'Read Epic’s page about billing work (revenue cycle). Write down which tasks it says it automates.', tag:'10 minutes · one page', ru:'Прочитайте страницу Epic о работе со счетами и оплатой (revenue cycle). Запишите, какие задачи, по её словам, она автоматизирует.', tagRu:'10 минут · одна страница'},
  {id:'healthadmin-q5', t:'Write down one budget number you worked with. Or one line from a clinic budget you can explain.', tag:'10 minutes · pen and paper', ru:'Запишите одну цифру из бюджета, с которой вы работали. Или одну строку бюджета клиники, которую можете объяснить.', tagRu:'10 минут · ручка и бумага'},
  {id:'healthadmin-q6', t:'Upload your resume on this page. Confirm one fact the app finds in it.', tag:'10 minutes · on this page', ru:'Загрузите резюме на этой странице. Подтвердите один факт, который приложение в нём найдёт.', tagRu:'10 минут · на этой странице'},
  {id:'healthadmin-q7', t:'Read today’s radar news below. One item, with its date. It shows how jobs are changing.', tag:'5 minutes · on this page', ru:'Прочитайте новость радара ниже. Один пункт, с датой. Так видно, как меняется рынок.', tagRu:'5 минут · на этой странице'},
  {id:'healthadmin-q8', t:'Share your verdict card with friends. AI may be changing their jobs too. Help them get ready.', tag:'5 minutes · share it', ru:'Покажите друзьям карточку с вашим результатом. AI может менять и их работу. Помогите им подготовиться.', tagRu:'5 минут · поделиться'},
  {id:'healthadmin-q9', t:'Time one paperwork task you repeat. For example: a prior authorisation, a schedule, or a denied claim. Write down the minutes.', tag:'15 minutes · a timer', ru:'Засеките время на одну бумажную задачу, которую вы повторяете. Например: согласование со страховой, расписание или отказ страховой. Запишите минуты.', tagRu:'15 минут · таймер'},
  {id:'healthadmin-q10', t:'Read the BLS numbers (US government job data) for this job: $123,860 typical pay, +24.2% growth, 155,100 new jobs. Write what this means for you.', tag:'10 minutes · one page', ru:'Прочитайте данные BLS (госстатистика США) об этой работе: типичная зарплата $123 860, рост +24,2%, 155 100 новых мест. Напишите, что это значит для вас.', tagRu:'10 минут · одна страница'}
]});
Object.assign(BIGGOALS, {
  hosops:'Run a hospital or health system: its budget, buildings and staff. The typical pay is $133,580.',
  clinicadmin:'Run a clinic’s money like an owner. First one location, then several. This job pays $120,000–$160,000.',
  ltcadmin:'Hold the licence and run a nursing home that passes inspections and stays on budget. This job pays $130,000–$150,000.',
  revcycle:'Be the one who makes billing work automatic: denials, insurance checks, prior approvals. Not the one stuck in the queue. That job pays $145,900–$170,200.'
});
BIGGOAL_PROF.healthadmin = 'Become the go-to manager when a building, budget or licence needs saving. Pick one of the three jobs that are growing.';

/* ================= DATA SCIENTIST QUESTS (wave 2) =================
   Pool order matches api/_lib/quests.mjs (index i <-> 'datascientist-q<i+1>'). */
Object.assign(QUESTS, {
datascientist: [
  {id:'datascientist-q1', t:'Pick ONE role and write it down: product, core, ML, or research.', tag:'5 minutes · one decision', ru:'Выберите ОДНУ роль и запишите её: product, core, ML или research.', tagRu:'5 минут · одно решение'},
  {id:'datascientist-q2', t:'Open 3 data scientist job posts for your role. Count how many ask for a master’s. In the jobs we checked: 16 of 42 ask for a master’s or PhD.', tag:'10 minutes · look at real jobs', ru:'Откройте 3 вакансии data scientist для вашей роли. Посчитайте, сколько просят магистратуру. В вакансиях, которые мы проверили: 16 из 42 просят магистратуру или PhD.', tagRu:'10 минут · смотрим вакансии'},
  {id:'datascientist-q3', t:'Write one SQL query on paper. One table, one filter, one grouping. Ten minutes, no computer.', tag:'10 minutes · pen and paper', ru:'Напишите один SQL-запрос на бумаге. Одна таблица, один фильтр, одна группировка. Десять минут, без компьютера.', tagRu:'10 минут · ручка и бумага'},
  {id:'datascientist-q4', t:'Take one old analysis of yours. Write the decision it should have ended with. One sentence.', tag:'10 minutes · one sentence', ru:'Возьмите один ваш старый анализ. Напишите решение, которым он должен был закончиться. Одно предложение.', tagRu:'10 минут · одно предложение'},
  {id:'datascientist-q5', t:'Find one product data scientist job post. Look for experiments. 10 of 12 product job posts ask for experiments or cause-and-effect analysis.', tag:'10 minutes · look at real jobs', ru:'Найдите вакансию product data scientist. Поищите там эксперименты. 10 из 12 таких вакансий просят эксперименты или анализ причин и следствий.', tagRu:'10 минут · смотрим вакансии'},
  {id:'datascientist-q6', t:'Upload your resume on this page. Confirm one fact the app finds in it.', tag:'10 minutes · your file', ru:'Загрузите резюме на этой странице. Подтвердите один факт, который приложение в нём найдёт.', tagRu:'10 минут · ваш файл'},
  {id:'datascientist-q7', t:'Read today’s radar news below. One item, with its date. It shows how jobs are changing.', tag:'5 minutes · one news item', ru:'Прочитайте новость радара ниже. Один пункт, с датой. Так видно, как меняется рынок.', tagRu:'5 минут · одна новость'},
  {id:'datascientist-q8', t:'Share your verdict card with friends. AI may be changing their jobs too. Help them get ready.', tag:'5 minutes · share it', ru:'Покажите друзьям карточку с вашим результатом. AI может менять и их работу. Помогите им подготовиться.', tagRu:'5 минут · поделиться'},
  {id:'datascientist-q9', t:'Pick one model you trained. Write down how you knew it was good. One honest paragraph.', tag:'10 minutes · one page', ru:'Выберите одну модель, которую вы обучили. Запишите, как вы поняли, что она хорошая. Один честный абзац.', tagRu:'10 минут · одна страница'},
  {id:'datascientist-q10', t:'Read the BLS numbers (US government job data) for data scientists: typical pay $120,230, growth +34.6%. Write down what this means for you.', tag:'10 minutes · one number', ru:'Прочитайте данные BLS (госстатистика США) про data scientists: типичная зарплата $120,230, рост +34.6%. Запишите, что это значит для вас.', tagRu:'10 минут · одна цифра'}
]});
Object.assign(BIGGOALS, {
  prodds:'The big goal: a product data scientist who decides what gets launched. Jobs pay $250K–$380,000 for decisions backed by tests.',
  coreds:'The big goal: a data scientist with a launched model and a clear specialty. Senior core jobs pay up to $250,000.',
  mlds:'The big goal: an ML data scientist who launches AI and can prove it works well. This job pays up to $285,000.',
  ressci:'The big goal: do research while you hold a paid job. Publish from a product or ML job. Then research teams paying $320K–$400K will come to you.'
});
BIGGOAL_PROF.datascientist = 'The big goal: a job you picked yourself: product, ML, or specialized core. It pays $180K–$380K. You get there with models and experiments, not more certificates.';

/* --- TRUCK DRIVER pool (truckdriver-q1..q10) ---
   Every quest is doable from the cab or on a break, phone-only,
   in 5–15 minutes, never while driving (package spec §6). */
Object.assign(QUESTS, {
truckdriver: [
 {id:'truckdriver-q1', t:'Write in one sentence which job you want: local, tanker, flatbed, regional, long-haul or your own truck', tag:'5 min', ru:'Напишите одним предложением, какую работу вы хотите: по городу, цистерна, платформа, региональные рейсы, дальние рейсы или свой грузовик', tagRu:'5 мин'},
 {id:'truckdriver-q2', t:'Look up one CDL school on the federal Training Provider Registry. Is it listed and active?', tag:'10 min', ru:'Найдите одну школу CDL (права на грузовик) в федеральном реестре Training Provider Registry. Она там есть и работает?', tagRu:'10 мин'},
 {id:'truckdriver-q3', t:'From memory, list what you check before you drive off (pre-trip inspection). Add anything you forgot', tag:'10 min', ru:'По памяти перечислите, что вы проверяете перед выездом (pre-trip inspection). Всё, что забыли, допишите в список', tagRu:'10 мин'},
 {id:'truckdriver-q4', t:'Find one news headline about driverless trucks from this month. Write down which route or state it names', tag:'10 min', ru:'Найдите одну новость этого месяца про беспилотные грузовики. Запишите, какой маршрут или штат там назван', tagRu:'10 мин'},
 {id:'truckdriver-q5', t:'Take a photo of the extra letters on your CDL (H, N, T, X). None yet? Then this is your list of what to get', tag:'5 min', ru:'Сфотографируйте буквы-допуски на ваших правах CDL (H, N, T, X — опасные грузы, цистерна, двойные прицепы, цистерна+опасные грузы). Пока ни одной? Тогда это ваш список, что получить', tagRu:'5 мин'},
 {id:'truckdriver-q6', t:'Add your work history on this page: companies, years, what you hauled. Confirm one fact the app finds.', tag:'10 min', ru:'Добавьте на этой странице вашу историю работы: компании, годы, что возили. Подтвердите один факт, который найдёт приложение.', tagRu:'10 мин'},
 {id:'truckdriver-q7', t:'Open this week’s PathCheck Radar. Do the one step it suggests.', tag:'10 min', ru:'Откройте PathCheck Radar этой недели. Сделайте один шаг, который он советует.', tagRu:'10 мин'},
 {id:'truckdriver-q8', t:'Share your verdict card with friends. AI may be changing their jobs too. Help them get ready.', tag:'5 min', ru:'Покажите друзьям карточку с вашим результатом. AI может менять и их работу. Помогите им подготовиться.', tagRu:'5 мин'},
 {id:'truckdriver-q9', t:'Write down your best paid week so far: miles driven, pay before tax, nights at home. Three numbers', tag:'5 min', ru:'Запишите вашу лучшую по деньгам неделю: сколько миль проехали, сколько получили до налогов, сколько ночей были дома. Три числа', tagRu:'5 мин'},
 {id:'truckdriver-q10', t:'Read the BLS numbers (US government job data) for your job: typical pay $58,640, +3.8% growth, about 214,500 openings a year. Write what this means for you', tag:'10 min', ru:'Прочитайте данные BLS (госстатистика США) про вашу работу: типичная зарплата 58 640 долларов, рост +3,8%, около 214 500 вакансий в год. Напишите, что это значит для вас', tagRu:'10 мин'}
]});
Object.assign(BIGGOALS, {
  otr:'Use this job to build savings and skills. Get 12 clean months and your extra license letters. Then move up to local, tanker or linehaul pay, with a clean record.',
  regional:'Keep the job that gets you home every week, but earn like long-haul. Add extra license letters. Keep a spotless record. Check your routes four times a year, so driverless trucks never surprise you.',
  local:'The best city job: LTL pay (shared loads) at $36 an hour, home every day. As you gain years, you can move to linehaul runs. Those average $100,000–$107,000.',
  tanker:'Be the driver the law protects. Get every hazmat letter (for dangerous loads). Keep your paperwork spotless. You get first call on loads no robot may carry.',
  flatbed:'Special skills, special pay: oversize, step-deck or car hauling. These jobs pay $70,000–$120,000+. Keep photos of loads you tied down well. They help you get hired fast.',
  ownerop:'A real small business on wheels. You keep 85%+ of the load pay. You know your costs to the dollar. Your clients are yours, not the carrier’s.'
});
BIGGOAL_PROF.truckdriver = 'A job robots can’t make cheaper. You choose it yourself. You get every license you can. Your clean record makes companies compete for you.';

/* --- MENTAL HEALTH COUNSELOR pool (counselor-q1..q10) --- */
Object.assign(QUESTS, {
counselor: [
  {id:'counselor-q1', t:'Open one job post for a licensed counselor in a group practice. Save it. These pay $75,000–$135,000. This is the job you aim for.', tag:'5 minutes · look at real jobs', ru:'Откройте одну вакансию лицензированного консультанта в групповой практике. Сохраните её. Там платят $75,000–$135,000. Это работа, к которой вы идёте.', tagRu:'5 минут · смотрим вакансии'},
  {id:'counselor-q2', t:'Pick ONE path and write it down: group practice, agency, or the license first. Gig apps don’t count.', tag:'5 minutes · one decision', ru:'Выберите ОДИН путь и запишите его: групповая практика, агентство или сначала лицензия. Подработка через приложения не в счёт.', tagRu:'5 минут · одно решение'},
  {id:'counselor-q3', t:'Open 3 counselor job posts. Write down which license each one wants: full license, associate, or certificate.', tag:'10 minutes · skills over diplomas', ru:'Откройте 3 вакансии консультантов. Запишите, какую лицензию просит каждая: полную, младшую (associate) или сертификат.', tagRu:'10 минут · навыки важнее дипломов'},
  {id:'counselor-q4', t:'Find how many supervised hours your state needs: 2,000, 3,000, or another number. Write it down with your exam: NCE or NCMHCE.', tag:'10 minutes · one page', ru:'Узнайте, сколько часов под присмотром опытного коллеги (супервизии) требует ваш штат: 2,000, 3,000 или другое число. Запишите его и ваш экзамен: NCE или NCMHCE.', tagRu:'10 минут · одна страница'},
  {id:'counselor-q5', t:'Find one associate job post that promises free supervision in writing. Save it. That is worth real money. Someone else pays for your supervision.', tag:'10 minutes · look at real jobs', ru:'Найдите вакансию для младшего специалиста, где письменно обещают бесплатную супервизию. Сохраните её. Это стоит денег: за вашу супервизию платят за вас.', tagRu:'10 минут · смотрим вакансии'},
  {id:'counselor-q6', t:'Upload your resume on this page. Confirm one fact the app finds in it.', tag:'10 minutes · your file', ru:'Загрузите резюме на этой странице. Подтвердите один факт, который приложение в нём найдёт.', tagRu:'10 минут · ваш файл'},
  {id:'counselor-q7', t:'Read today’s radar news below. One item, with its date. It shows how jobs are changing.', tag:'5 minutes · one news item', ru:'Прочитайте новость радара ниже. Один пункт, с датой. Так видно, как меняется рынок.', tagRu:'5 минут · одна новость'},
  {id:'counselor-q8', t:'Share your verdict card with friends. AI may be changing their jobs too. Help them get ready.', tag:'5 minutes · share it', ru:'Покажите друзьям карточку с вашим результатом. AI может менять и их работу. Помогите им подготовиться.', tagRu:'5 минут · поделиться'},
  {id:'counselor-q9', t:'Pick one method: CBT, DBT, EMDR, or motivational interviewing. Find one real training in it. Write down its price and dates.', tag:'10 minutes · one method', ru:'Выберите один метод: CBT, DBT, EMDR или мотивационное интервью. Найдите настоящее обучение по нему. Запишите цену и даты.', tagRu:'10 минут · один метод'},
  {id:'counselor-q10', t:'Find your state on the Counseling Compact map (one license, many states). Is it passed, live, or not in? Eleven states are live today. Write yours down.', tag:'10 minutes · one check', ru:'Найдите ваш штат на карте Counseling Compact (одна лицензия для нескольких штатов): закон принят, уже работает или штата нет. Сегодня работают одиннадцать штатов. Запишите, что у вас.', tagRu:'10 минут · одна проверка'}
]
});
Object.assign(BIGGOALS, {
  groupcns:'The big goal: a full license, used where it pays most. A group or private practice pays $75,000–$135,000. Add one specialty so clients line up to see you.',
  agencycns:'The big goal: a steady licensed job. Either agency pay, where you know and accept how many clients you must see. Or a job with supervision that leads to the full license.',
  platform:'The big goal: be the boss of your own hours. Work in a practice or group where your clients and prices are yours. Keep app work only as a side job, if at all.',
  sudcns:'The big goal: step up from a certificate to a full license. There your addiction work experience pays $75,000–$135,000.',
  associate:'The big goal: the full license. Log 2,000–3,000 supervised hours. Try to get your supervision for free.'
});
BIGGOAL_PROF.counselor = 'The big goal: the full license, in the job that pays most for it. That’s group or private practice, at $75,000–$135,000.';

/* ===== Skilled trades quest pools (Nov 1 2026) — verbatim from
   ~/workspace/cg-staging/trades/spec.md §6 of each part. ===== */
Object.assign(QUESTS, {
  electrician: [
    {
      id: 'electrician-q1',
      t: 'Find your state’s journeyman license (the license to work on your own). Write its name and the hours it needs. Use your state board’s site.',
      tag: '10 minutes · one page',
      ru: 'Найдите лицензию journeyman в вашем штате (с ней электрик может работать сам). Запишите название и сколько часов нужно. Смотрите на сайте board вашего штата.',
      tagRu: '10 минут · одна страница'
    },
    {
      id: 'electrician-q2',
      t: 'Find when the next apprenticeship near you takes applications. Union or not, both count. Put the date in your calendar.',
      tag: '10 minutes · one date',
      ru: 'Узнайте, когда рядом с вами следующий набор в ученичество (apprenticeship — обучение на работе за зарплату). С профсоюзом или без. Поставьте дату в календарь.',
      tagRu: '10 минут · одна дата'
    },
    {
      id: 'electrician-q3',
      t: 'Compare two ways in, on paper: a registered apprenticeship ($0 tuition, and you get paid) and one private school (its real price).',
      tag: '15 minutes · two prices',
      ru: 'Сравните на бумаге два пути: зарегистрированное ученичество ($0 за учёбу, и вам платят) и одну частную школу (её настоящую цену).',
      tagRu: '15 минут · две цены'
    },
    {
      id: 'electrician-q4',
      t: 'Read one current journeyman job post to the end. Write down which license it asks for and what it pays.',
      tag: '10 minutes · one job post',
      ru: 'Прочитайте до конца одну открытую вакансию journeyman. Запишите, какую лицензию она просит и сколько платит.',
      tagRu: '10 минут · одна вакансия'
    },
    {
      id: 'electrician-q5',
      t: 'Start a log of your work hours today: date, site, type of work. Fill in this week from memory.',
      tag: '10 minutes · your log',
      ru: 'Начните сегодня журнал рабочих часов: дата, объект, вид работы. Эту неделю заполните по памяти.',
      tagRu: '10 минут · ваш журнал'
    },
    {
      id: 'electrician-q6',
      t: 'Upload your resume on this page. Confirm one license or certificate it finds.',
      tag: '10 minutes · your file',
      ru: 'Загрузите резюме на этой странице. Подтвердите одну лицензию или сертификат, которые найдёт приложение.',
      tagRu: '10 минут · ваш файл'
    },
    {
      id: 'electrician-q7',
      t: 'Read today’s radar news below. One item, with its date. It shows how jobs are changing.',
      tag: '5 minutes · one news item',
      ru: 'Прочитайте новость радара ниже. Один пункт, с датой. Так видно, как меняется рынок.',
      tagRu: '5 минут · одна новость'
    },
    {
      id: 'electrician-q8',
      t: 'Share your verdict card with friends. AI may be changing their jobs too. Help them get ready.',
      tag: '5 minutes · share it',
      ru: 'Покажите друзьям карточку с вашим результатом. AI может менять и их работу. Помогите им подготовиться.',
      tagRu: '5 минут · поделиться'
    },
    {
      id: 'electrician-q9',
      t: 'Compare pay in your city. Take two job posts: one in homes, one in factories or data centers. Write down the gap.',
      tag: '10 minutes · two numbers',
      ru: 'Сравните оплату в вашем городе. Возьмите две вакансии: одну в жилых домах, другую на заводе или в дата-центре. Запишите разницу.',
      tagRu: '10 минут · два числа'
    },
    {
      id: 'electrician-q10',
      t: 'Read the BLS numbers (US government job data) for electricians: typical pay $63,190, growth +9.2%, about 72,700 openings a year. Write down what this means for you.',
      tag: '10 minutes · one number',
      ru: 'Прочитайте данные BLS (госстатистика США) про электриков: типичная зарплата $63,190, рост +9.2%, около 72,700 вакансий в год. Запишите, что это значит для вас.',
      tagRu: '10 минут · одно число'
    }
  ],
  hvac: [
    {
      id: 'hvac-q1',
      t: 'Check which EPA 608 types you have (the card for working with refrigerant). Or book the exam. Commercial companies want Universal.',
      tag: '10 minutes · one card',
      ru: 'Проверьте, какие типы EPA 608 у вас есть (сертификат на работу с хладагентом). Или запишитесь на экзамен. Фирмы, которые обслуживают бизнес, просят Universal — все типы сразу.',
      tagRu: '10 минут · один сертификат'
    },
    {
      id: 'hvac-q2',
      t: 'Start a log of your jobs. List the last five systems you worked on: type, size, problem, fix. Paper is fine.',
      tag: '10 minutes · your log',
      ru: 'Начните журнал работ. Запишите последние пять систем, с которыми работали: тип, мощность, поломка, ремонт. Можно на бумаге.',
      tagRu: '10 минут · ваш журнал'
    },
    {
      id: 'hvac-q3',
      t: 'Compare two ways in, on paper: the EPA 608 exam (a few hundred dollars) and one private HVAC school (its real price).',
      tag: '15 minutes · two prices',
      ru: 'Сравните на бумаге два пути: экзамен EPA 608 (несколько сотен долларов) и одну частную школу HVAC (её настоящую цену).',
      tagRu: '15 минут · две цены'
    },
    {
      id: 'hvac-q4',
      t: 'Read one current controls job post (building automation) to the end. Write down which system it names and what it pays.',
      tag: '10 minutes · one job post',
      ru: 'Прочитайте до конца одну открытую вакансию по controls (автоматика зданий). Запишите, какую систему она называет и сколько платит.',
      tagRu: '10 минут · одна вакансия'
    },
    {
      id: 'hvac-q5',
      t: 'Write down your on-call deal today: shift schedule, pay, nights per month. One honest page.',
      tag: '10 minutes · one page',
      ru: 'Запишите, как сейчас устроены ваши дежурства (on-call — вызовы ночью и в выходные): график, оплата, ночей в месяц. Одна честная страница.',
      tagRu: '10 минут · одна страница'
    },
    {
      id: 'hvac-q6',
      t: 'Upload your resume on this page. Confirm one license or certificate it finds.',
      tag: '10 minutes · your file',
      ru: 'Загрузите резюме на этой странице. Подтвердите одну лицензию или сертификат, которые найдёт приложение.',
      tagRu: '10 минут · ваш файл'
    },
    {
      id: 'hvac-q7',
      t: 'Read today’s radar news below. One item, with its date. It shows how jobs are changing.',
      tag: '5 minutes · one news item',
      ru: 'Прочитайте новость радара ниже. Один пункт, с датой. Так видно, как меняется рынок.',
      tagRu: '5 минут · одна новость'
    },
    {
      id: 'hvac-q8',
      t: 'Share your verdict card with friends. AI may be changing their jobs too. Help them get ready.',
      tag: '5 minutes · share it',
      ru: 'Покажите друзьям карточку с вашим результатом. AI может менять и их работу. Помогите им подготовиться.',
      tagRu: '5 минут · поделиться'
    },
    {
      id: 'hvac-q9',
      t: 'Ask one commercial or controls tech: which system should I learn first? Write down the answer.',
      tag: '10 minutes · one question',
      ru: 'Спросите одного техника по коммерческим объектам или по автоматике: какую систему учить первой? Запишите ответ.',
      tagRu: '10 минут · один вопрос'
    },
    {
      id: 'hvac-q10',
      t: 'Read the BLS numbers (US government job data) for HVAC: typical pay $61,010, growth +11%, about 40,600 openings a year. Write down what this means for you.',
      tag: '10 minutes · one number',
      ru: 'Прочитайте данные BLS (госстатистика США) про HVAC: типичная зарплата $61,010, рост +11%, около 40,600 вакансий в год. Запишите, что это значит для вас.',
      tagRu: '10 минут · одно число'
    }
  ],
  plumber: [
    {
      id: 'plumber-q1',
      t: 'Write down your state’s license steps in order: apprentice, journeyman, master. Add how many years each step takes.',
      tag: '10 minutes · one ladder',
      ru: 'Запишите ступени лицензии в вашем штате по порядку: ученик (apprentice), journeyman (можно работать самому), мастер (master). Добавьте, сколько лет нужно на каждую.',
      tagRu: '10 минут · одна лестница'
    },
    {
      id: 'plumber-q2',
      t: 'Find one registered apprenticeship near you. Find its next application date. Put it in your calendar.',
      tag: '10 minutes · one date',
      ru: 'Найдите рядом одно зарегистрированное ученичество (apprenticeship — обучение на работе за зарплату). Узнайте дату следующего набора. Поставьте её в календарь.',
      tagRu: '10 минут · одна дата'
    },
    {
      id: 'plumber-q3',
      t: 'Find a training offer from a big plumbing chain. Read the pay part to the end. Write down what you earn after training.',
      tag: '10 minutes · one contract',
      ru: 'Найдите предложение обучения от крупной сети. Дочитайте до конца, что там про оплату. Запишите, сколько будете получать после учёбы.',
      tagRu: '10 минут · один договор'
    },
    {
      id: 'plumber-q4',
      t: 'Start a log of your work hours today: date, site, type of work — service, construction, commercial, industrial.',
      tag: '10 minutes · your log',
      ru: 'Начните сегодня журнал рабочих часов: дата, объект, вид работы — сервис, стройка, коммерческие объекты, заводы.',
      tagRu: '10 минут · ваш журнал'
    },
    {
      id: 'plumber-q5',
      t: 'Find your city’s backflow rule (backflow devices keep dirty water out of clean pipes). Who must test them, and how often? One page of notes.',
      tag: '10 minutes · one rule',
      ru: 'Найдите правило вашего города про backflow (устройства, которые не пускают грязную воду в чистую сеть). Кто обязан их проверять и как часто? Одна страница заметок.',
      tagRu: '10 минут · одно правило'
    },
    {
      id: 'plumber-q6',
      t: 'Upload your resume on this page. Confirm one license or certificate it finds.',
      tag: '10 minutes · your file',
      ru: 'Загрузите резюме на этой странице. Подтвердите одну лицензию или сертификат, которые найдёт приложение.',
      tagRu: '10 минут · ваш файл'
    },
    {
      id: 'plumber-q7',
      t: 'Read today’s radar news below. One item, with its date. It shows how jobs are changing.',
      tag: '5 minutes · one news item',
      ru: 'Прочитайте новость радара ниже. Один пункт, с датой. Так видно, как меняется рынок.',
      tagRu: '5 минут · одна новость'
    },
    {
      id: 'plumber-q8',
      t: 'Share your verdict card with friends. AI may be changing their jobs too. Help them get ready.',
      tag: '5 minutes · share it',
      ru: 'Покажите друзьям карточку с вашим результатом. AI может менять и их работу. Помогите им подготовиться.',
      tagRu: '5 минут · поделиться'
    },
    {
      id: 'plumber-q9',
      t: 'Compare two job posts: one with fixed hourly pay, one paid by commission. Write what each pays in a slow week.',
      tag: '10 minutes · two offers',
      ru: 'Сравните две вакансии: одну с гарантированной почасовой оплатой, другую с процентом от продаж. Запишите, сколько каждая платит в неделю, когда мало заказов.',
      tagRu: '10 минут · два предложения'
    },
    {
      id: 'plumber-q10',
      t: 'Read the BLS numbers (US government job data) for plumbers: typical pay $63,800, growth +7%, about 42,000 openings a year. Write down what this means for you.',
      tag: '10 minutes · one number',
      ru: 'Прочитайте данные BLS (госстатистика США) про сантехников: типичная зарплата $63,800, рост +7%, около 42,000 вакансий в год. Запишите, что это значит для вас.',
      tagRu: '10 минут · одно число'
    }
  ]
});
Object.assign(BIGGOALS, {
  elcapp: 'Big goal: the journeyman license (you can work on your own). Earn it in a paid apprenticeship: 8,000 logged hours and $0 school debt.',
  elcjour: 'Big goal: use your license where it pays most. Factories and data centers pay more than homes.',
  elcdata: 'Big goal: wire the data centers that run AI. Union pay is $62.00/hr. Get the safety cards big sites ask for.',
  elcown: 'Big goal: your own business with your name on it. Get the master and contractor licenses. Build a list of regular clients a buyer would pay for.',
  elcsales: 'Big goal: same license, but paid for fixing, not selling. Hourly, guaranteed pay, or your own business.',
  hvcapp: 'Big goal: the federal card plus a paid job. Become a tech a company sends to clients in your first year. No big student loan.',
  hvctech: 'Big goal: lead tech pay, by the hour. $30–$50 an hour for finding problems people trust you with. Get your on-call pay in writing.',
  hvcomm: 'Big goal: a controls job (building automation). Master one system. Salary is $60K–$125K, with no sales targets.',
  hvcown: 'Big goal: your own business that’s worth a lot. Service contracts and a good local name make buyers pay many times your yearly profit.',
  hvcsales: 'Big goal: same skills, but paid for fixing, not selling. Hourly, commercial work, or your own business.',
  plbapp: 'Big goal: the journeyman license after a paid apprenticeship. 4–5 years where you learn and get paid.',
  plbserv: 'Big goal: a licensed job with guaranteed base pay. Jobs pay $110K–$130K. Commission only as a bonus on top.',
  plbfit: 'Big goal: factory work at union pay. Plant jobs pay $40.64–$54/hr. Chicago’s union pay is $60.50/hr.',
  plbown: 'Big goal: your own business, built on your master license. Regular service clients make it worth many times its yearly profit.',
  plbsales: 'Big goal: same skills, with guaranteed pay. Hourly at a company, factory work at union pay, or your own business.'
});
BIGGOAL_PROF.electrician = 'Big goal: a license that pays more each year, because electricians are scarce. Choose your job by building type, not by habit.';
BIGGOAL_PROF.hvac = 'Big goal: a trade AI can’t do and can’t send abroad. Aim at the data centers where AI lives.';
BIGGOAL_PROF.plumber = 'Big goal: a license every employer wants. You earn it once. It keeps paying more while plumbers are scarce.';
/* ===== Cybersecurity quest pool (Nov 1 2026) — verbatim from
   ~/workspace/cg-staging/cybersecurity/spec.md §6 (time-tags composed
   in house style; the spec's strand tags live in DNA_QUEST_TAGS). ===== */
Object.assign(QUESTS, {cybersecurity: [
  {
    id: 'cybersecurity-q1',
    t: 'Read 3 current job posts for SOC analysts (people who watch for attacks). Write down how many years of experience each wants.',
    tag: '10 minutes · three job posts',
    ru: 'Прочитайте 3 открытые вакансии аналитика SOC (центр, который следит за атаками). Запишите, сколько лет опыта просит каждая.',
    tagRu: '10 минут · три вакансии'
  },
  {
    id: 'cybersecurity-q2',
    t: 'Spend 10 minutes in a free Splunk or Sentinel practice lab (tools that show attack alerts). Sort one alert.',
    tag: '10 minutes · one lab',
    ru: 'Потратьте 10 минут на бесплатный тренажёр Splunk или Sentinel (программы, которые показывают тревоги об атаках). Разберите одну тревогу.',
    tagRu: '10 минут · один тренажёр'
  },
  {
    id: 'cybersecurity-q3',
    t: 'Write 5 plain lines: what a SOC analyst actually does all day.',
    tag: '10 minutes · five lines',
    ru: 'Напишите 5 простых строк: чем на самом деле весь день занят аналитик SOC.',
    tagRu: '10 минут · пять строк'
  },
  {
    id: 'cybersecurity-q4',
    t: 'Ask an AI to explain one security alert like you are 12. Then check one fact it gave you.',
    tag: '10 minutes · one alert',
    ru: 'Попросите ИИ объяснить одно оповещение об атаке так, будто вам 12 лет. Потом проверьте один факт из его ответа.',
    tagRu: '10 минут · одно оповещение'
  },
  {
    id: 'cybersecurity-q5',
    t: 'Count your time in IT. Every month of help desk, support or admin work counts.',
    tag: '10 minutes · your list',
    ru: 'Посчитайте, сколько вы проработали в IT. Считается каждый месяц в поддержке, помощи пользователям или администрировании.',
    tagRu: '10 минут · ваш список'
  },
  {
    id: 'cybersecurity-q6',
    t: 'Upload your resume on this page. Confirm one fact the app finds in it.',
    tag: '10 minutes · your file',
    ru: 'Загрузите резюме на этой странице. Подтвердите один факт, который приложение в нём найдёт.',
    tagRu: '10 минут · ваш файл'
  },
  {
    id: 'cybersecurity-q7',
    t: 'Read today’s radar news below. One item, with its date. It shows how jobs are changing.',
    tag: '5 minutes · one news item',
    ru: 'Прочитайте новость радара ниже. Один пункт, с датой. Так видно, как меняется рынок.',
    tagRu: '5 минут · одна новость'
  },
  {
    id: 'cybersecurity-q8',
    t: 'Share your verdict card with friends. AI may be changing their jobs too. Help them get ready.',
    tag: '5 minutes · share it',
    ru: 'Покажите друзьям карточку с вашим результатом. AI может менять и их работу. Помогите им подготовиться.',
    tagRu: '5 минут · поделиться'
  },
  {
    id: 'cybersecurity-q9',
    t: 'Take one news story about a hack. Write 6 plain lines: what happened, in order.',
    tag: '10 minutes · one story',
    ru: 'Возьмите одну новость о взломе. Напишите 6 простых строк: что произошло, по порядку.',
    tagRu: '10 минут · одна новость'
  },
  {
    id: 'cybersecurity-q10',
    t: 'Find one working analyst’s public post about their shift. Save one thing no course told you.',
    tag: '10 minutes · one post',
    ru: 'Найдите публичный пост работающего аналитика о его смене. Сохраните одну вещь, о которой не говорил ни один курс.',
    tagRu: '10 минут · один пост'
  }
]});
Object.assign(BIGGOALS, {
  socanalyst: 'The big goal: move up to Tier 2 (looking into attacks) in your first year. Alert-sorting jobs are getting fewer, so moving up early keeps you safe.',
  secengineer: 'The big goal: own one area of catching attacks. Write the rules yourself. Show numbers that prove they catch real attacks.',
  cloudsec: 'The big goal: protect a company’s whole cloud on AWS or Azure: accounts, access and alerts. Get the certificate jobs keep asking for.',
  pentester: 'The big goal: get the OSCP (a hacking certificate) after years in security. Then companies pay you to attack their systems before criminals do.',
  grcanalyst: 'The big goal: move into GRC (security rules and risk) from a security job. Every job wants years of experience, not just a bootcamp.'
});
BIGGOAL_PROF.cybersecurity = 'The big goal: be the analyst who digs into attacks, not just sorts alerts. Get real IT experience, one specialty, and proof you can show.';
/* ===== AI PRODUCT MANAGER — quest pool (Nov 1 2026, spec §6).
   Specialty pool written to the scan. House slots (q6/q7/q8) reuse
   the standing texts verbatim. aipm-q1 is the seat-pick quest. ===== */
Object.assign(QUESTS, {aipm: [
  {
    id: 'aipm-q1',
    t: 'Pick your role: platform, evals (tests that check AI answers), feature, enterprise, growth, or an entry program. Write it on this path. These six roles pay $83,000 to $490,000. Each wants different experience.',
    tag: '10 min',
    ru: 'Выберите вашу роль: platform, evals (тесты, которые проверяют ответы AI), feature, enterprise, growth или программа для новичков. Запишите её на этом пути. Эти шесть ролей платят от $83,000 до $490,000. Каждой нужен свой опыт.',
    tagRu: '10 минут'
  },
  {
    id: 'aipm-q2',
    t: 'Count how many real job posts for your role ask for 5+ years. Write the number down. Of 26 posts that name years, 20 ask for 5+. Know your number before you plan.',
    tag: '10 min · a count',
    ru: 'Посчитайте, сколько настоящих вакансий для вашей роли просят 5+ лет опыта. Запишите число. Из 26 вакансий, где указан опыт, 20 просят 5+. Узнайте ваше число до того, как строить план.',
    tagRu: '10 минут · подсчёт'
  },
  {
    id: 'aipm-q3',
    t: 'Check one AI answer today. Ask your chatbot a hard question. Write down what it got wrong. Wrong but sure of itself counts double.',
    tag: '5 min',
    ru: 'Проверьте сегодня один ответ AI. Задайте вашему чат-боту трудный вопрос. Запишите, в чём он ошибся. Уверенная ошибка считается вдвойне.',
    tagRu: '5 минут'
  },
  {
    id: 'aipm-q4',
    t: 'Write 5 test questions for an AI feature you know well. Put the right answer next to each. Nice — that’s your first set of evals (tests for AI)!',
    tag: '15 min',
    ru: 'Напишите 5 тестовых вопросов для AI-функции, которую хорошо знаете. Рядом с каждым — правильный ответ. Готово — это ваш первый набор evals (тестов для AI)!',
    tagRu: '15 минут'
  },
  {
    id: 'aipm-q5',
    t: 'Read one real platform PM job post to the end. Save one requirement you can’t prove yet.',
    tag: '10 min · one job post',
    ru: 'Прочитайте до конца одну настоящую вакансию platform PM. Сохраните одно требование, которое вы пока не можете подтвердить.',
    tagRu: '10 минут · одна вакансия'
  },
  {
    id: 'aipm-q6',
    t: 'Upload or update your resume in this app and tap Confirm on your steps.',
    tag: '5 min · proof',
    ru: 'Загрузите или обновите резюме в этом приложении и нажмите Confirm на ваших шагах.',
    tagRu: '5 минут · доказательство'
  },
  {
    id: 'aipm-q7',
    t: 'Read this week’s Radar slowly. Save the one news item that changes your plan.',
    tag: '5 min · radar',
    ru: 'Спокойно прочитайте Радар этой недели. Сохраните одну новость, которая меняет ваш план.',
    tagRu: '5 минут · радар'
  },
  {
    id: 'aipm-q8',
    t: 'Share your check result with someone who is choosing a career. Your Full Report becomes free.',
    tag: '2 min · share',
    ru: 'Поделитесь результатом вашей проверки с кем-то, кто выбирает карьеру. Ваш Полный отчёт станет бесплатным.',
    tagRu: '2 минуты · поделиться'
  },
  {
    id: 'aipm-q9',
    t: 'Write down one mistake your AI feature made with a real user. Or one it could make. One honest line.',
    tag: '5 min',
    ru: 'Запишите одну ошибку, которую ваша AI-функция сделала с настоящим пользователем. Или могла бы сделать. Одна честная строка.',
    tagRu: '5 минут'
  },
  {
    id: 'aipm-q10',
    t: 'Say out loud: “The official statistics do not count this job yet.” So there are no exact numbers for it. Now look again at what your role pays.',
    tag: '5 min',
    ru: 'Скажите вслух: «Государство эту работу пока не считает». Значит, точных цифр по ней нет. Теперь ещё раз посмотрите, сколько платят на вашей работе.',
    tagRu: '5 минут'
  }
]});
Object.assign(BIGGOALS, {
  platpm: 'The big goal: a platform PM who decides what the AI model can do. Jobs pay $347K–$490K for that.',
  evalpm: 'The big goal: be the person who proves an AI’s answers are good. This job is growing fast in the field. It pays $151K–$253K.',
  featpm: 'The big goal: an AI feature PM whose features pass evals (tests for AI). It’s the most common job. People grow into it from regular product work.',
  entpm: 'The big goal: a PM for AI agents in one industry: law, health or finance. It pays $149K–$300K.',
  growpm: 'The big goal: a growth PM on an AI product. Your experiments prove your work. It pays $275K–$305K.',
  apmpm: 'The big goal: by year two, get into an entry program or a nearby job. Then climb step by step. You’ve got this!'
});
BIGGOAL_PROF.aipm = 'Become a top 1% AI product manager. They earn up to $490K a year (a usual start is $117K+). You can get there without extra years of school: only the steps employers really pay for.';
