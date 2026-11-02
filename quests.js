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
  {id:'law-q1', t:'Open one specialist paralegal posting. Save it. That posting is the shape of your target.', tag:'5 minutes · eyes on the market', ru:'Откройте одну вакансию specialist paralegal. Сохраните её. Эта вакансия — форма вашей цели.', tagRu:'5 минут · глаза на рынке'},
  {id:'law-q2', t:'Write down the ONE practice area you aim at. One line: privacy, diligence, or healthcare.', tag:'5 minutes · one decision', ru:'Запишите ОДНУ область практики, в которую целитесь. Одна строка: privacy, diligence или healthcare.', tagRu:'5 минут · одно решение'},
  {id:'law-q3', t:'Open 3 senior postings. Write the degree line each one asks for. Most ask for a bachelor’s.', tag:'10 minutes · proof over paper', ru:'Откройте 3 senior-вакансии. Запишите строку о степени, которую просит каждая. Большинство просит bachelor’s.', tagRu:'10 минут · доказательство вместо бумаг'},
  {id:'law-q4', t:'Open the Kira or Harvey page. Read what the AI does in a diligence check. Five minutes.', tag:'5 minutes · know the tools', ru:'Откройте страницу Kira или Harvey. Прочитайте, что AI делает в проверке diligence. Пять минут.', tagRu:'5 минут · знай инструменты'},
  {id:'law-q5', t:'Find the Cooley pay line: $135,200–$176,800. Now write what the top of that range asks for.', tag:'10 minutes · one number', ru:'Найдите строку оплаты Cooley: $135,200–$176,800. Теперь запишите, что просят за верх этой вилки.', tagRu:'10 минут · одна цифра'},
  {id:'law-q6', t:'Upload your resume on this page. Confirm one piece of evidence it finds.', tag:'10 minutes · your file', ru:'Загрузите резюме на этой странице. Подтвердите одно доказательство, которое оно найдёт.', tagRu:'10 минут · ваш файл'},
  {id:'law-q7', t:'Read today’s radar signal below. One item, with a date. That is the market moving.', tag:'5 minutes · one signal', ru:'Прочитайте сегодняшний сигнал радара ниже. Один пункт, с датой. Это рынок в движении.', tagRu:'5 минут · один сигнал'},
  {id:'law-q8', t:'Share your verdict card. Your people should know their path is being eaten too.', tag:'5 minutes · share it', ru:'Поделитесь карточкой вашего вердикта. Ваши люди тоже должны знать, что их путь едят.', tagRu:'5 минут · поделиться'},
  {id:'law-q9', t:'Pick one task you repeat at work. Time it once. Write the minutes down.', tag:'15 minutes · real proof', ru:'Выберите одну задачу, которую повторяете на работе. Замерьте её один раз. Запишите минуты.', tagRu:'15 минут · настоящее доказательство'},
  {id:'law-q10', t:'Check what CIPP/US is. It showed up in 3 of 3 privacy postings that named a certificate.', tag:'10 minutes · one check', ru:'Проверьте, что такое CIPP/US. Он встретился в 3 из 3 вакансий privacy, где сертификаты назывались вообще.', tagRu:'10 минут · одна проверка'}
],
/* ================= CPA QUESTS ================= */
cpa: [
  {id:'cpa-q1', t:'Open one live posting in your niche. Save it. Read its pay line twice.', tag:'5 minutes · eyes on the market', ru:'Откройте одну живую вакансию в вашей нише. Сохраните её. Прочитайте строку оплаты дважды.', tagRu:'5 минут · глаза на рынке'},
  {id:'cpa-q2', t:'Write down the ONE specialty you aim at. One line: tax, SEC reporting, FDD, or controller.', tag:'5 minutes · one decision', ru:'Запишите ОДНУ специализацию, в которую целитесь. Одна строка: tax, SEC reporting, FDD или controller.', tagRu:'5 минут · одно решение'},
  {id:'cpa-q3', t:'Open 3 postings in your niche. Write the tool named most: NetSuite, Workiva, or Excel.', tag:'10 minutes · proof over paper', ru:'Откройте 3 вакансии в вашей нише. Запишите инструмент, который называют чаще: NetSuite, Workiva или Excel.', tagRu:'10 минут · доказательство вместо бумаг'},
  {id:'cpa-q4', t:'Open your state board’s license route page. Write down your number: 120 credits or 150.', tag:'10 minutes · one page', ru:'Откройте страницу маршрута лицензии board вашего штата. Запишите ваше число: 120 credits или 150.', tagRu:'10 минут · одна страница'},
  {id:'cpa-q5', t:'Find one posting that asks for Workiva. Save it. That posting is the SEC-reporting door.', tag:'10 minutes · eyes on the market', ru:'Найдите одну вакансию, которая просит Workiva. Сохраните её. Эта вакансия — дверь в SEC reporting.', tagRu:'10 минут · глаза на рынке'},
  {id:'cpa-q6', t:'Upload your resume on this page. Confirm one piece of evidence it finds.', tag:'10 minutes · your file', ru:'Загрузите резюме на этой странице. Подтвердите одно доказательство, которое оно найдёт.', tagRu:'10 минут · ваш файл'},
  {id:'cpa-q7', t:'Read today’s radar signal below. One item, with a date. That is the market moving.', tag:'5 minutes · one signal', ru:'Прочитайте сегодняшний сигнал радара ниже. Один пункт, с датой. Это рынок в движении.', tagRu:'5 минут · один сигнал'},
  {id:'cpa-q8', t:'Share your verdict card. Your people should know their path is being eaten too.', tag:'5 minutes · share it', ru:'Поделитесь карточкой вашего вердикта. Ваши люди тоже должны знать, что их путь едят.', tagRu:'5 минут · поделиться'},
  {id:'cpa-q9', t:'Write down one process you do by hand. Add the hours it eats each month.', tag:'10 minutes · one page', ru:'Запишите один процесс, который вы делаете руками. Добавьте часы, которые он ест каждый месяц.', tagRu:'10 минут · одна страница'},
  {id:'cpa-q10', t:'Read the FAR number once: only 42% pass it first try. Write your retake money line.', tag:'5 minutes · one number', ru:'Прочитайте число FAR один раз: с первого раза его сдают только 42%. Запишите вашу строку денег на пересдачу.', tagRu:'5 минут · одна цифра'}
],
/* ================= NURSE QUESTS ================= */
nurse: [
  {id:'nurse-q1', t:'Open one specialty RN posting: ICU, ER, or OR. Save it. That is the shape of your target.', tag:'5 minutes · eyes on the market', ru:'Откройте одну вакансию RN по специальности: ICU, ER или OR. Сохраните её. Это форма вашей цели.', tagRu:'5 минут · глаза на рынке'},
  {id:'nurse-q2', t:'Write down the ONE specialty you aim at. One line: ICU, ER, OR, psych, or anesthesia.', tag:'5 minutes · one decision', ru:'Запишите ОДНУ специальность, в которую целитесь. Одна строка: ICU, ER, OR, psych или anesthesia.', tagRu:'5 минут · одно решение'},
  {id:'nurse-q3', t:'Open 3 specialty postings. Write the certificate named most: BLS, ACLS, or CCRN.', tag:'10 minutes · proof over paper', ru:'Откройте 3 вакансии по специальности. Запишите сертификат, который называют чаще: BLS, ACLS или CCRN.', tagRu:'10 минут · доказательство вместо бумаг'},
  {id:'nurse-q4', t:'Check your BLS expiry date. If it ends this year, write the renewal month down.', tag:'5 minutes · one date', ru:'Проверьте дату окончания вашего BLS. Если он кончается в этом году, запишите месяц обновления.', tagRu:'5 минут · одна дата'},
  {id:'nurse-q5', t:'Find one posting with a sign-on bonus. They run $10K–$25K. Save the number.', tag:'5 minutes · one number', ru:'Найдите одну вакансию с sign-on бонусом. Они идут $10K–$25K. Сохраните число.', tagRu:'5 минут · одна цифра'},
  {id:'nurse-q6', t:'Upload your resume on this page. Confirm one piece of evidence it finds.', tag:'10 minutes · your file', ru:'Загрузите резюме на этой странице. Подтвердите одно доказательство, которое оно найдёт.', tagRu:'10 минут · ваш файл'},
  {id:'nurse-q7', t:'Read today’s radar signal below. One item, with a date. That is the market moving.', tag:'5 minutes · one signal', ru:'Прочитайте сегодняшний сигнал радара ниже. Один пункт, с датой. Это рынок в движении.', tagRu:'5 минут · один сигнал'},
  {id:'nurse-q8', t:'Share your verdict card. Your people should know their path is being eaten too.', tag:'5 minutes · share it', ru:'Поделитесь карточкой вашего вердикта. Ваши люди тоже должны знать, что их путь едят.', tagRu:'5 минут · поделиться'},
  {id:'nurse-q9', t:'Price one ADN program against $5,472 — the Wake Tech total. Write down the difference.', tag:'10 minutes · one number', ru:'Сравните цену одной программы ADN с $5,472 — итогом Wake Tech. Запишите разницу.', tagRu:'10 минут · одна цифра'},
  {id:'nurse-q10', t:'Find your state on the practice map: Full, Reduced, or Restricted. Write it down.', tag:'10 minutes · one check', ru:'Найдите ваш штат на карте практики: Full, Reduced или Restricted. Запишите его.', tagRu:'10 минут · одна проверка'}
],
/* ================= FINANCE / FP&A QUESTS ================= */
fin: [
  {id:'fin-q1', t:'Open one FP&A partner posting. Save it. Skip the plain “analyst” pool — it shrinks.', tag:'5 minutes · eyes on the market', ru:'Откройте одну вакансию FP&A partner. Сохраните её. Пропустите обычный пул «analyst» — он сжимается.', tagRu:'5 минут · глаза на рынке'},
  {id:'fin-q2', t:'Write down the ONE seat you aim at. One line: partner, strategic, hybrid, or corp dev.', tag:'5 minutes · one decision', ru:'Запишите ОДНО место, в которое целитесь. Одна строка: partner, strategic, hybrid или corp dev.', tagRu:'5 минут · одно решение'},
  {id:'fin-q3', t:'Open 3 postings. Count the ones that ask for SQL. In our scan it was 31 of 40.', tag:'10 minutes · proof over paper', ru:'Откройте 3 вакансии. Посчитайте те, что просят SQL. В нашем скане это было 31 из 40.', tagRu:'10 минут · доказательство вместо бумаг'},
  {id:'fin-q4', t:'Write one SQL query on paper. One table, one filter, one sum. Ten minutes, no computer.', tag:'10 minutes · paper first', ru:'Напишите один SQL-запрос на бумаге. Одна таблица, один фильтр, одна сумма. Десять минут, без компьютера.', tagRu:'10 минут · сначала бумага'},
  {id:'fin-q5', t:'Find one posting that names Anaplan. Save it. Platforms are named in 16 of 40 postings.', tag:'10 minutes · eyes on the market', ru:'Найдите одну вакансию, которая называет Anaplan. Сохраните её. Платформы названы в 16 из 40 вакансий.', tagRu:'10 минут · глаза на рынке'},
  {id:'fin-q6', t:'Upload your resume on this page. Confirm one piece of evidence it finds.', tag:'10 minutes · your file', ru:'Загрузите резюме на этой странице. Подтвердите одно доказательство, которое оно найдёт.', tagRu:'10 минут · ваш файл'},
  {id:'fin-q7', t:'Read today’s radar signal below. One item, with a date. That is the market moving.', tag:'5 minutes · one signal', ru:'Прочитайте сегодняшний сигнал радара ниже. Один пункт, с датой. Это рынок в движении.', tagRu:'5 минут · один сигнал'},
  {id:'fin-q8', t:'Share your verdict card. Your people should know their path is being eaten too.', tag:'5 minutes · share it', ru:'Поделитесь карточкой вашего вердикта. Ваши люди тоже должны знать, что их путь едят.', tagRu:'5 минут · поделиться'},
  {id:'fin-q9', t:'Pick one report you rebuild every month. Write the hours it eats. That is your automation target.', tag:'10 minutes · one page', ru:'Выберите один отчёт, который вы пересобираете каждый месяц. Запишите часы, которые он ест. Это ваша цель автоматизации.', tagRu:'10 минут · одна страница'},
  {id:'fin-q10', t:'Check the CFA line in one posting: required, preferred, or absent. Our scan: required in 0 of 40.', tag:'10 minutes · one check', ru:'Проверьте строку CFA в одной вакансии: требуется, предпочитается или отсутствует. Наш скан: требуется в 0 из 40.', tagRu:'10 минут · одна проверка'}
],
/* ================= CREATOR QUESTS — STAFF (v2, 2026-11-01) =================
   Micro-actions for a staff-creator job hunt (the HIRED creator, not
   the independent path). Pool ids unchanged (creator-q1..q10) so the
   server rotation and quest history keep working; quest q8 is the
   share quest (DNA strand: voice, founder ruling). */
creator: [
  {id:'creator-q1', t:'Shoot a 20-second product demo on your phone. One take is fine. The employers check that you can make the thing, not that it shines.', tag:'5 minutes · shoot it', ru:'Снимите 20-секундное демо продукта на телефон. Один дубль — это нормально. Работодатели проверяют, что вы умеете делать, а не то, что всё блестит.', tagRu:'5 минут · снять'},
  {id:'creator-q2', t:'Cut 10 seconds out of an old video. Making a video tighter is the job itself. Do it in CapCut or Premiere.', tag:'10 minutes · one edit', ru:'Вырежьте 10 секунд из старого видео. Делать видео плотнее — это и есть сама работа. Сделайте это в CapCut или Premiere.', tagRu:'10 минут · один монтаж'},
  {id:'creator-q3', t:'Open one staff-creator posting that is open now, and save its list of requirements. That list is your market, written in the employer’s own words.', tag:'5 minutes · eyes on the market', ru:'Откройте одну вакансию штатного креатора, которая открыта сейчас, и сохраните её список требований. Этот список — ваш рынок, написанный словами самого работодателя.', tagRu:'5 минут · глаза на рынке'},
  {id:'creator-q4', t:'Add one finished piece to your portfolio, with its view count written next to it. The numbers are the proof.', tag:'10 minutes · your proof', ru:'Добавьте одну законченную работу в ваше портфолио и напишите рядом число её просмотров. Цифры — это доказательство.', tagRu:'10 минут · ваше доказательство'},
  {id:'creator-q5', t:'Pick one industry and write down 5 brands in it that post a video every week. That list is the map of your niche.', tag:'10 minutes · one niche', ru:'Выберите одну отрасль и запишите 5 брендов в ней, которые публикуют видео каждую неделю. Этот список — карта вашей ниши.', tagRu:'10 минут · одна ниша'},
  {id:'creator-q6', t:'Write to one staff creator or one hiring manager. Give one specific compliment about their content, and ask one real question.', tag:'5 minutes · one message', ru:'Напишите одному штатному креатору или одному нанимающему менеджеру. Скажите один конкретный комплимент их контенту и задайте один настоящий вопрос.', tagRu:'5 минут · одно сообщение'},
  {id:'creator-q7', t:'Use one AI tool for one step of your work today: the captions, a new variant, or a first cut. Write down what it saved you.', tag:'10 minutes · one tool', ru:'Используйте один инструмент ИИ для одного шага вашей работы сегодня: подписи, новый вариант или первый монтаж. Запишите, что он вам сэкономил.', tagRu:'10 минут · один инструмент'},
  {id:'creator-q8', t:'Share your PathCheck card in one story or post. The staff job goes to the creator the employers have already seen.', tag:'5 minutes · share it', ru:'Поделитесь вашей карточкой PathCheck в одной сторис или в одном посте. Штатную работу получает креатор, которого работодатели уже видели.', tagRu:'5 минут · поделиться'},
  {id:'creator-q9', t:'Write 5 hooks for the same video idea. A hook is the first seconds that stop a viewer. The postings name hooks as a duty, so practise the duty.', tag:'10 minutes · five hooks', ru:'Напишите 5 хуков для одной идеи видео. Хук — это первые секунды, которые останавливают зрителя. Вакансии называют хуки обязанностью, поэтому тренируйте эту обязанность.', tagRu:'10 минут · пять хуков'},
  {id:'creator-q10', t:'Take a screenshot of your best-performing post and write two lines about why it worked. That short analysis is gold for your portfolio.', tag:'5 minutes · your numbers', ru:'Сделайте скриншот вашего поста с лучшими цифрами и напишите две строки о том, почему он сработал. Этот короткий разбор — золото для вашего портфолио.', tagRu:'5 минут · ваши цифры'},
],
/* ================= ANALYST QUESTS ================= */
analyst: [
  {id:'analyst-q1', t:'Open one product analyst posting. Save it. Skip the dashboards-on-request pool.', tag:'5 minutes · eyes on the market', ru:'Откройте одну вакансию product analyst. Сохраните её. Пропустите пул «дашборды по запросу».', tagRu:'5 минут · глаза на рынке'},
  {id:'analyst-q2', t:'Write down the ONE seat you aim at. Product, analytics engineer, strategy, or data scientist.', tag:'5 minutes · one decision', ru:'Запишите ОДНО место, в которое целитесь. Product, analytics engineer, strategy или data scientist.', tagRu:'5 минут · одно решение'},
  {id:'analyst-q3', t:'Open 3 analyst postings. Count the ones that ask for SQL. In our scan: 43 of 46.', tag:'10 minutes · proof over paper', ru:'Откройте 3 вакансии аналитика. Посчитайте те, что просят SQL. В нашем скане: 43 из 46.', tagRu:'10 минут · доказательство вместо бумаг'},
  {id:'analyst-q4', t:'Write one SQL query on paper. One table, one filter, one sum. Ten minutes, no computer.', tag:'10 minutes · paper first', ru:'Напишите один SQL-запрос на бумаге. Одна таблица, один фильтр, одна сумма. Десять минут, без компьютера.', tagRu:'10 минут · сначала бумага'},
  {id:'analyst-q5', t:'Find one analytics engineer posting. Check the dbt line: 7 of 7 postings ask for it.', tag:'10 minutes · eyes on the market', ru:'Найдите одну вакансию analytics engineer. Проверьте строку dbt: её просят 7 из 7 вакансий.', tagRu:'10 минут · глаза на рынке'},
  {id:'analyst-q6', t:'Upload your resume on this page. Confirm one piece of evidence it finds.', tag:'10 minutes · your file', ru:'Загрузите резюме на этой странице. Подтвердите одно доказательство, которое оно найдёт.', tagRu:'10 минут · ваш файл'},
  {id:'analyst-q7', t:'Read today’s radar signal below. One item, with a date. That is the market moving.', tag:'5 minutes · one signal', ru:'Прочитайте сегодняшний сигнал радара ниже. Один пункт, с датой. Это рынок в движении.', tagRu:'5 минут · один сигнал'},
  {id:'analyst-q8', t:'Share your verdict card. Your people should know their path is being eaten too.', tag:'5 minutes · share it', ru:'Поделитесь карточкой вашего вердикта. Ваши люди тоже должны знать, что их путь едят.', tagRu:'5 минут · поделиться'},
  {id:'analyst-q9', t:'Pick one dashboard nobody opens. Write down the decision it was supposed to feed.', tag:'10 minutes · one page', ru:'Выберите один дашборд, который никто не открывает. Запишите решение, которое он должен был питать.', tagRu:'10 минут · одна страница'},
  {id:'analyst-q10', t:'Compare two BLS lines: $101,860 at +10% vs $120,230 at +35%. Write which house is yours.', tag:'10 minutes · one number', ru:'Сравните две строки BLS: $101,860 при +10% против $120,230 при +35%. Запишите, какой дом ваш.', tagRu:'10 минут · одна цифра'}
],
dataanalyst: [
  {id:'dataanalyst-q1', t:'Open one product analyst posting. Save it. Skip the dashboards-on-request pool.', tag:'5 minutes · eyes on the market', ru:'Откройте одну вакансию product analyst. Сохраните её. Пропустите пул «дашборды по запросу».', tagRu:'5 минут · глаза на рынке'},
  {id:'dataanalyst-q2', t:'Write down the ONE seat you aim at. Product, analytics engineer, or the data-scientist door.', tag:'5 minutes · one decision', ru:'Запишите ОДНО место, в которое целитесь. Product, analytics engineer или дверь data scientist.', tagRu:'5 минут · одно решение'},
  {id:'dataanalyst-q3', t:'Open 3 data analyst postings. Count the ones that ask for SQL. In our data-side scan: 24 of 24.', tag:'10 minutes · proof over paper', ru:'Откройте 3 вакансии data analyst. Посчитайте те, что просят SQL. В нашем скане стороны данных: 24 из 24.', tagRu:'10 минут · доказательство вместо бумаг'},
  {id:'dataanalyst-q4', t:'Write one SQL query on paper. One table, one filter, one sum. Ten minutes, no computer.', tag:'10 minutes · paper first', ru:'Напишите один SQL-запрос на бумаге. Одна таблица, один фильтр, одна сумма. Десять минут, без компьютера.', tagRu:'10 минут · сначала бумага'},
  {id:'dataanalyst-q5', t:'Find one analytics engineer posting. Check the dbt line: 7 of 7 postings ask for it.', tag:'10 minutes · eyes on the market', ru:'Найдите одну вакансию analytics engineer. Проверьте строку dbt: её просят 7 из 7 вакансий.', tagRu:'10 минут · глаза на рынке'},
  {id:'dataanalyst-q6', t:'Upload your resume on this page. Confirm one piece of evidence it finds.', tag:'10 minutes · your file', ru:'Загрузите резюме на этой странице. Подтвердите одно доказательство, которое оно найдёт.', tagRu:'10 минут · ваш файл'},
  {id:'dataanalyst-q7', t:'Read today’s radar signal below. One item, with a date. That is the market moving.', tag:'5 minutes · one signal', ru:'Прочитайте сегодняшний сигнал радара ниже. Один пункт, с датой. Это рынок в движении.', tagRu:'5 минут · один сигнал'},
  {id:'dataanalyst-q8', t:'Share your verdict card. Your people should know their path is being eaten too.', tag:'5 minutes · share it', ru:'Поделитесь карточкой вашего вердикта. Ваши люди тоже должны знать, что их путь едят.', tagRu:'5 минут · поделиться'},
  {id:'dataanalyst-q9', t:'Pick one dashboard nobody opens. Write down the decision it was supposed to feed.', tag:'10 minutes · one page', ru:'Выберите один дашборд, который никто не открывает. Запишите решение, которое он должен был питать.', tagRu:'10 минут · одна страница'},
  {id:'dataanalyst-q10', t:'Read the BLS data-scientist line: median $120,230, growth +35%. Write down what it means for your seat.', tag:'10 minutes · one number', ru:'Прочитайте строку BLS про data scientists: медиана $120,230, рост +35%. Запишите, что это значит для вашего места.', tagRu:'10 минут · одна цифра'}
],
businessanalyst: [
  {id:'businessanalyst-q1', t:'Open one strategy & operations analyst posting. Save it. Skip the documents-on-request pool.', tag:'5 minutes · eyes on the market', ru:'Откройте одну вакансию strategy & operations analyst. Сохраните её. Пропустите пул «документы по запросу».', tagRu:'5 минут · глаза на рынке'},
  {id:'businessanalyst-q2', t:'Write down the ONE seat you aim at. Documents, or strategy & operations.', tag:'5 minutes · one decision', ru:'Запишите ОДНО место, в которое целитесь. Документы или strategy & operations.', tagRu:'5 минут · одно решение'},
  {id:'businessanalyst-q3', t:'Open 3 business analyst postings. Count the ones that name Jira or Agile. In our scan: 9 of 15 BA-family postings.', tag:'10 minutes · proof over paper', ru:'Откройте 3 вакансии business analyst. Посчитайте те, что называют Jira или Agile. В нашем скане: 9 из 15 вакансий семьи BA.', tagRu:'10 минут · доказательство вместо бумаг'},
  {id:'businessanalyst-q4', t:'Take one document you wrote. Rewrite its first page as a decision brief: the call, the number, the ask.', tag:'10 minutes · paper first', ru:'Возьмите один документ, который вы написали. Перепишите его первую страницу как бриф решения: призыв, цифра, запрос.', tagRu:'10 минут · сначала бумага'},
  {id:'businessanalyst-q5', t:'Find one business-side posting that names an AI tool as a requirement. SanDisk has one.', tag:'10 minutes · eyes on the market', ru:'Найдите одну вакансию стороны бизнеса, которая называет AI-инструмент требованием. Такая есть у SanDisk.', tagRu:'10 минут · глаза на рынке'},
  {id:'businessanalyst-q6', t:'Upload your resume on this page. Confirm one piece of evidence it finds.', tag:'10 minutes · your file', ru:'Загрузите резюме на этой странице. Подтвердите одно доказательство, которое оно найдёт.', tagRu:'10 минут · ваш файл'},
  {id:'businessanalyst-q7', t:'Read today’s radar signal below. One item, with a date. That is the market moving.', tag:'5 minutes · one signal', ru:'Прочитайте сегодняшний сигнал радара ниже. Один пункт, с датой. Это рынок в движении.', tagRu:'5 минут · один сигнал'},
  {id:'businessanalyst-q8', t:'Share your verdict card. Your people should know their path is being eaten too.', tag:'5 minutes · share it', ru:'Поделитесь карточкой вашего вердикта. Ваши люди тоже должны знать, что их путь едят.', tagRu:'5 минут · поделиться'},
  {id:'businessanalyst-q9', t:'Write down one decision your work changed. One line, with the number.', tag:'10 minutes · one page', ru:'Запишите одно решение, которое изменила ваша работа. Одна строка, с цифрой.', tagRu:'10 минут · одна страница'},
  {id:'businessanalyst-q10', t:'Read the BLS management-analyst line: median $101,860, growth +10%, about 94,100 openings a year. Write down what it means for your seat.', tag:'10 minutes · one number', ru:'Прочитайте строку BLS про management analysts: медиана $101,860, рост +10%, около 94,100 открытых мест в год. Запишите, что это значит для вашего места.', tagRu:'10 минут · одна цифра'}
],
/* ================= AI CONTENT CREATOR QUESTS ================= */
aicreator: [
  {id:'aicreator-q1', t:'Write one sentence naming your seat: a real face with an AI crew, or AI video for brands. Pin it where you work.', tag:'5 minutes · one decision', ru:'Напишите одно предложение с вашим местом: настоящее лицо с AI-командой или AI-видео для брендов. Прикрепите его там, где работаете.', tagRu:'5 минут · одно решение'},
  {id:'aicreator-q2', t:'Re-cut one old video with your AI pipeline. Time it. Write the minutes down.', tag:'15 minutes · hands on', ru:'Перемонтируйте одно старое видео вашим AI-процессом. Засеките время. Запишите минуты.', tagRu:'15 минут · руками'},
  {id:'aicreator-q3', t:'Generate three hooks for one product. Pick the one a human would stop scrolling for.', tag:'10 minutes · three tries', ru:'Сгенерируйте три хука для одного продукта. Выберите тот, на котором человек остановит прокрутку.', tagRu:'10 минут · три попытки'},
  {id:'aicreator-q4', t:'Read the FTC fake-review rule in plain words. Check your current scripts against it — no AI person fakes a testimonial.', tag:'10 minutes · one check', ru:'Прочитайте правило FTC о фейковых отзывах простыми словами. Проверьте ваши текущие скрипты по нему — ни один AI-человек не изображает отзыв.', tagRu:'10 минут · одна проверка'},
  {id:'aicreator-q5', t:'Make one before/after pair: the same ad, filmed style vs AI-made. Save both for your rate card.', tag:'15 minutes · one page', ru:'Сделайте одну пару «до/после»: та же реклама, снятая и сгенерированная AI. Сохраните обе для вашей карточки цен.', tagRu:'15 минут · одна страница'},
  {id:'aicreator-q6', t:'Find one brand in your niche running AI-labeled ads. Write down what they sell and how the label shows.', tag:'10 minutes · eyes on the market', ru:'Найдите один бренд в вашей нише, который крутит рекламу с пометкой AI. Запишите, что они продают и как видна пометка.', tagRu:'10 минут · глаза на рынке'},
  {id:'aicreator-q7', t:'Pitch one local brand today: ten AI ad variants for the price of one filmed video. One message.', tag:'10 minutes · one send', ru:'Предложите одному локальному бренду сегодня: десять вариантов рекламы с AI по цене одного снятого видео. Одно сообщение.', tagRu:'10 минут · одна отправка'},
  {id:'aicreator-q8', t:'Share your verdict card. Your people should know their path is being eaten too.', tag:'5 minutes · share it', ru:'Поделитесь карточкой вашего вердикта. Ваши люди тоже должны знать, что их путь едят.', tagRu:'5 минут · поделиться'},
  {id:'aicreator-q9', t:'Dub one of your videos into a second language with the pipeline. Watch it fully once before posting.', tag:'15 minutes · one video', ru:'Продублируйте одно ваше видео на второй язык вашим процессом. Посмотрите его целиком один раз перед публикацией.', tagRu:'15 минут · одно видео'},
  {id:'aicreator-q10', t:'Write this month’s numbers: pieces shipped, minutes per piece, money in. Three lines.', tag:'10 minutes · your numbers', ru:'Запишите числа этого месяца: сколько работ отправлено, минут на работу, денег пришло. Три строки.', tagRu:'10 минут · ваши числа'}
]
};

/* ================= BIG GOAL =================
   One line per seat (grid leads fall back to BIGGOAL_PROF). This is
   the destination the daily micro-quests walk toward — the degree,
   the license, the money seat — shown as the GOAL, never as a task.
   Lines distill the packages' own door copy; digits unchanged. */
var BIGGOALS = {
  specialist:'The big goal: the specialist job that runs the AI — senior postings pay $135K–$200K, privacy postings pay $212K–$319K.',
  paralegal:'The big goal: leave the generalist job — middle pay $62,890, growth 0% — and move into one specialty. Specialist postings pay up to $150K–$200K.',
  docreview:'The big goal: leave document review and move into the senior specialist job that runs the review AI — $150K–$200K.',
  lawstudent:'The big goal: a law degree (J.D.) aimed at one specialty — privacy and AI-rules postings pay $212K–$319K.',
  bookkeeper:'The big goal: bachelor’s → CPA license → controller owning the ERP (company money software), $130–200K + bonus.',
  tax:'The big goal: specialized tax — firms taxed through their owners, and very rich clients, at $125–200K, with the license managers demand.',
  staff:'The big goal: a CPA aimed at one specialty — specialized tax at $125–200K, transaction advisory up to $225K.',
  audit:'The big goal: use audit as a bridge, not your final home — transaction advisory posts up to $225K.',
  technical:'The big goal: the SEC-reporting signature — postings pay $120–184K, and 6 of 6 require an active CPA license.',
  fdd:'The big goal: transaction advisory (checking firms pre-sale) — top money in our scan, up to $225K.',
  controller:'The big goal: controller who owns the ERP system and the monthly close — $130–200K + bonus, on the CFO path.',
  medsurg:'The big goal: med-surg (the general ward) as a ramp only, then a specialty such as ICU, ER, or OR, where travel, NP, and CRNA money opens.',
  specialty:'The big goal: one deep specialty, then the next step by the posted numbers: travel pay, a specialty NP job, or CRNA.',
  travel:'The big goal: specialty years first, then travel money saved for the NP or CRNA decision.',
  nstudent:'The big goal: get the RN license the cheap way, start in a specialty job, and let your employer pay for the next study step.',
  np:'The big goal: pick an NP specialty that pays a premium. Psych NP postings pay $200K–$257K.',
  crna:'The big goal: become a CRNA. Here the degree is the license itself, and the median pay is $236,590.',
  lpn:'The big goal: become an RN, not an LPN. Enter through the ADN program and skip the low pay ceiling.',
  reporting:'The big goal: move one job over. An FP&A partner posts up to $276,250, and the BI hybrid posts $138K–$180,600.',
  fpa:'The big goal: own one unit’s P&L (its profit-and-loss sheet) next to that unit. They pay for judgment, and top postings reach $276,250.',
  strategic:'The big goal: work in strategic finance, doing real case work on top of SQL. Top postings pay $231,940–$276,250.',
  hybrid:'The big goal: take the BI / analytics hybrid seat. It is the fastest way into finance, and it posts $138K–$180,600.',
  corpdev:'The big goal: enter corporate development inside its early window, or take the same pay on the FP&A partner path.',
  faceless:'The big goal: directed work with your face or voice inside it — the version that kept its pay.',
  streamer:'The big goal: a creator with a business — the stream is the shop window, the list and products are the shop.',
  personality:'The big goal: deals plus a business you control — a product line and an email list you own.',
  ugc:'The big goal: a UGC trade with a buyer file — raise the rate toward $500 as paid deliveries stack.',
  educator:'The big goal: one problem your audience pays to solve, taught by a face they can check — plus a product in your name.',
  creatorbiz:'The big goal: income you own — no single platform controls most of your money.',
  brandcreator:'The big goal: get a brand seat where you are the whole studio and do everything yourself. Then add the scarce half — the rare skill — that lifts your pay toward $115–125K.',
  facecreator:'The big goal: be a trusted face with real knowledge behind it. Face seats post $110K–$160K.',
  perfcreator:'The big goal: get a performance seat where your content carries a revenue number. The pay is $65–100K as base, plus KPI bonuses — extra money when your content hits the company’s numbers.',
  agencycreator:'The big goal: use the agency as a 1–3-year school. Then leave, portfolio in hand, for a brand, face or performance seat at $100K+.',
  mediacreator:'The big goal: get off the writing desk and into a brand or performance seat. The skills are the same, and the pay is $15–25K higher.',
  genba:'The big goal: a decision-making job — your years with managers carry to product analyst or strategy work. Document years do not.',
  reportda:'The big goal: keep SQL, the database language, but aim it at product analyst or analytics engineer work, which pays for decisions, not reports.',
  prodan:'The big goal: a product analyst who runs experiments from start to finish. Job postings pay $106K–$300,067.',
  aneng:'The big goal: analytics engineer. The data tool dbt is named in 7 of 7 postings, and pay for senior staff reaches $244,100.',
  bizops:'The big goal: strategy & operations — Google posts $124K–$177K. The way in is to show one decision you changed, with numbers to prove it.',
  dsgate:'The big goal: data scientist, a different job, not a promotion. Median pay $120,230, growing +35%.',
  aimass:'The big goal: the same video-making process, but with a real face or a paying client in it — the version of this work that kept its pay.',
  persona:'The big goal: a studio brands pay for AI characters — the service, not the character itself, is where the income is.',
  aistreamer:'The big goal: skills you can sell without the stream — what you built is software; sell it like software.',
  aipipeline:'The big goal: a face brands pay $154 a video for — helped by an AI team and by working in a second language.',
  aiservice:'The big goal: a list of clients who pay you every month — your judgment priced per month, never per clip.'
};

/* Grid (whole-map) leads: the profession-level big goal. */
var BIGGOAL_PROF = {
  law:'The big goal: pick one specialty — privacy and the rules for AI — where job postings pay $212K–$319K.',
  cpa:'The big goal: bachelor’s degree → CPA license → a chosen specialty at $120K–$225K.',
  nurse:'The big goal: get the RN license, then pick a specialty. Psych NP jobs post $200K–$257K, and the median pay for a CRNA is $236,590.',
  fin:'The big goal: a partner seat in FP&A, the money-planning team, next to one unit. Top postings reach $276,250.',
  creator:'The big goal: get a staff creator seat in a YES segment — brand, face or performance. The center of that market is about $77K, and the top seats post $140–160K.',
  analyst:'The big goal: a decision-making job, as a product analyst or an analytics engineer, at $96K–$300K.',
  dataanalyst:'The big goal: a decision-making job, as a product analyst or an analytics engineer, at $96K–$300K.',
  businessanalyst:'The big goal: a job where you help make decisions — strategy & operations pays $96K–$177K, and your years with managers count there. Years writing documents do not.',
  aicreator:'The big goal: AI as your team of helpers, not your product — a real face, or a list of clients that is yours.'
};

/* ================= HEALTHCARE ADMINISTRATOR QUESTS (wave 2) =================
   Appended 2026-11-01: pool order matches api/_lib/quests.mjs
   (index i <-> 'healthadmin-q<i+1>'). Texts trace to the package. */
Object.assign(QUESTS, {
healthadmin: [
  {id:'healthadmin-q1', t:'Write one sentence: which of the four seats is yours — hospital, practice, nursing home, or paperwork?', tag:'5 minutes · pen and paper', ru:'Напишите одно предложение: какое из четырёх мест — ваше: больница, врачебная практика, дом престарелых или бумажная очередь?', tagRu:'5 минут · ручка и бумага'},
  {id:'healthadmin-q2', t:'Open one live posting for your seat and save its pay line. One posting, one line.', tag:'10 minutes · job boards', ru:'Откройте одну живую вакансию вашего места и сохраните строку с зарплатой. Одна вакансия, одна строка.', tagRu:'10 минут · сайты вакансий'},
  {id:'healthadmin-q3', t:'Check the gate for your seat: your state’s nursing home licence rules, or your FACHE or CMPE eligibility page.', tag:'10 minutes · official sites', ru:'Проверьте ворота вашего места: правила лицензии штата для домов престарелых или страницу требований FACHE или CMPE (сертификатов вашего места).', tagRu:'10 минут · официальные сайты'},
  {id:'healthadmin-q4', t:'Read Epic’s own page about revenue cycle work. Write down which tasks it says it automates.', tag:'10 minutes · one page', ru:'Прочтите страницу самой Epic о работе цикла выручки. Запишите, какие задачи, по её словам, она автоматизирует.', tagRu:'10 минут · одна страница'},
  {id:'healthadmin-q5', t:'Write down one budget number you have touched at work — or one line from a practice budget you can explain.', tag:'10 minutes · pen and paper', ru:'Запишите одну цифру бюджета, к которой вы прикасались на работе, — или одну строку бюджета практики, которую вы можете объяснить.', tagRu:'10 минут · ручка и бумага'},
  {id:'healthadmin-q6', t:'Upload your resume on this page. Confirm one piece of evidence it finds.', tag:'10 minutes · on this page', ru:'Загрузите резюме на этой странице. Подтвердите одно доказательство, которое оно найдёт.', tagRu:'10 минут · на этой странице'},
  {id:'healthadmin-q7', t:'Read today’s radar signal below. One item, with a date. That is the market moving.', tag:'5 minutes · on this page', ru:'Прочтите сегодняшний сигнал радара ниже. Один пункт, с датой. Это рынок в движении.', tagRu:'5 минут · на этой странице'},
  {id:'healthadmin-q8', t:'Share your verdict card. Your people should know their path is being eaten too.', tag:'5 minutes · share it', ru:'Поделитесь карточкой вашего вердикта. Ваши люди тоже должны знать, что их путь едят.', tagRu:'5 минут · поделиться'},
  {id:'healthadmin-q9', t:'Time one paperwork task you repeat — a prior authorisation, a schedule, a denial follow-up. Write down the minutes.', tag:'15 minutes · a timer', ru:'Замерьте одну бумажную задачу, которую вы повторяете: предварительное согласование (prior authorisation), расписание или работу с отказом страховой. Запишите минуты.', tagRu:'15 минут · таймер'},
  {id:'healthadmin-q10', t:'Read the BLS line for this job — $123,860 median, +24.2% growth, 155,100 new jobs — and write what it means for your seat.', tag:'10 minutes · one page', ru:'Прочтите строку BLS (бюро статистики труда США) об этой профессии — медиана $123 860, рост +24,2%, 155 100 новых рабочих мест — и напишите, что это значит для вашего места.', tagRu:'10 минут · одна страница'}
]});
Object.assign(BIGGOALS, {
  hosops:'Run the operations of a hospital or a health system — its budget, its buildings, its staffing — the seat the BLS pays a $133,580 median.',
  clinicadmin:'Run a practice’s money like an owner: a P&L across one site, then several — the version of this seat that posts at $120,000–$160,000.',
  ltcadmin:'Hold the licence and a building whose survey record and budget both hold — the seat that pays $130,000–$150,000.',
  revcycle:'Own the automation of the money flow — denials, eligibility, prior authorisations — instead of working its queue. That job posts at $145,900–$170,200.'
});
BIGGOAL_PROF.healthadmin = 'Become the administrator owners and systems call when a building, a budget or a licence is on the line — in one of the three seats that grow.';

/* ================= DATA SCIENTIST QUESTS (wave 2) =================
   Pool order matches api/_lib/quests.mjs (index i <-> 'datascientist-q<i+1>'). */
Object.assign(QUESTS, {
datascientist: [
  {id:'datascientist-q1', t:'Write down the ONE seat you aim at. Product, core, ML, or research.', tag:'5 minutes · one decision', ru:'Запишите ОДНО место, в которое целитесь. Product, core, ML или research.', tagRu:'5 минут · одно решение'},
  {id:'datascientist-q2', t:'Open 3 data scientist postings in your seat. Count the ones that ask for a master’s. In our scan: 16 of 42 ask for a master’s or a PhD.', tag:'10 minutes · eyes on the market', ru:'Откройте 3 вакансии data scientist в вашем месте. Посчитайте те, что просят магистратуру. В нашем скане: 16 из 42 просят магистратуру или PhD.', tagRu:'10 минут · глаза на рынке'},
  {id:'datascientist-q3', t:'Write one SQL query on paper. One table, one filter, one group. Ten minutes, no computer.', tag:'10 minutes · paper first', ru:'Напишите один SQL-запрос на бумаге. Одна таблица, один фильтр, одна группировка. Десять минут, без компьютера.', tagRu:'10 минут · сначала бумага'},
  {id:'datascientist-q4', t:'Take one old analysis of yours. Write the decision it should have ended with. One sentence.', tag:'10 minutes · one sentence', ru:'Возьмите один ваш старый анализ. Напишите решение, которым он должен был закончиться. Одно предложение.', tagRu:'10 минут · одно предложение'},
  {id:'datascientist-q5', t:'Find one product data scientist posting. Check the experiment line: 10 of 12 product postings name experiments or causal work.', tag:'10 minutes · eyes on the market', ru:'Найдите одну вакансию product data scientist. Проверьте строку экспериментов: 10 из 12 вакансий product называют эксперименты или причинную работу.', tagRu:'10 минут · глаза на рынке'},
  {id:'datascientist-q6', t:'Upload your resume on this page. Confirm one piece of evidence it finds.', tag:'10 minutes · your file', ru:'Загрузите резюме на этой странице. Подтвердите одно доказательство, которое оно найдёт.', tagRu:'10 минут · ваш файл'},
  {id:'datascientist-q7', t:'Read today’s radar signal below. One item, with a date. That is the market moving.', tag:'5 minutes · one signal', ru:'Прочитайте сегодняшний сигнал радара ниже. Один пункт, с датой. Это рынок в движении.', tagRu:'5 минут · один сигнал'},
  {id:'datascientist-q8', t:'Share your verdict card. Your people should know their path is being eaten too.', tag:'5 minutes · share it', ru:'Поделитесь карточкой вашего вердикта. Ваши люди тоже должны знать, что их путь едят.', tagRu:'5 минут · поделиться'},
  {id:'datascientist-q9', t:'Pick one model you trained. Write down how you knew it was good. One honest paragraph.', tag:'10 minutes · one page', ru:'Выберите одну модель, которую вы обучили. Запишите, как вы поняли, что она хорошая. Один честный абзац.', tagRu:'10 минут · одна страница'},
  {id:'datascientist-q10', t:'Read the BLS data-scientist line: median $120,230, growth +34.6%. Write down what it means for your seat.', tag:'10 minutes · one number', ru:'Прочитайте строку BLS про data scientists: медиана $120,230, рост +34.6%. Запишите, что это значит для вашего места.', tagRu:'10 минут · одна цифра'}
]});
Object.assign(BIGGOALS, {
  prodds:'The big goal: a product data scientist who calls what ships — postings pay $250K–$380,000 for tested, defended calls.',
  coreds:'The big goal: a data scientist with a shipped model and a named specialty — senior core seats post to $250,000.',
  mlds:'The big goal: an ML data scientist who ships AI and can prove its output is good — the seat posts to $285,000.',
  ressci:'The big goal: research from inside a paying seat first — publish from the product or ML seat, and let the $320K–$400K research teams recruit you.'
});
BIGGOAL_PROF.datascientist = 'The big goal: a seat picked on purpose — product, ML, or specialized core — at $180K–$380K, reached with models and experiments, not with more certificates.';

/* --- TRUCK DRIVER pool (truckdriver-q1..q10) ---
   Every quest is doable from the cab or on a break, phone-only,
   in 5–15 minutes, never while driving (package spec §6). */
Object.assign(QUESTS, {
truckdriver: [
 {id:'truckdriver-q1', t:'Write your target seat in one sentence: local, tanker, flatbed, regional, long-haul or your own truck', tag:'5 min', ru:'Напишите ваше целевое место одним предложением: город, цистерна, платформа, региональные рейсы, дальние рейсы или свой грузовик', tagRu:'5 мин'},
 {id:'truckdriver-q2', t:'Check one CDL school on the federal Training Provider Registry — is it listed and active?', tag:'10 min', ru:'Проверьте одну школу CDL (коммерческие права на грузовик) в федеральном реестре Training Provider Registry — она в списке и активна?', tagRu:'10 мин'},
 {id:'truckdriver-q3', t:'From memory, list the checks you make before the truck moves (pre-trip inspection). Anything missed goes on the list', tag:'10 min', ru:'По памяти перечислите проверки перед выездом (pre-trip inspection — осмотр грузовика перед рейсом). Всё, что забыли, — в список', tagRu:'10 мин'},
 {id:'truckdriver-q4', t:'Find one driverless-truck headline from this month and write down which lane or state it names', tag:'10 min', ru:'Найдите один заголовок этого месяца про беспилотные грузовики и запишите, какой маршрут или штат там назван', tagRu:'10 мин'},
 {id:'truckdriver-q5', t:'Photograph the endorsement letters on your own CDL (H, N, T, X). Got none yet? The photo step is your shopping list', tag:'5 min', ru:'Сфотографируйте буквы-допуски на ваших правах CDL (H, N, T, X — опасные грузы, цистерна, двойные прицепы, цистерна+опасные грузы). Пока нет ни одной? Этот шаг — ваш список покупок', tagRu:'5 мин'},
 {id:'truckdriver-q6', t:'Add your work history on this page — carriers, years, freight hauled. Confirm one piece of evidence it finds.', tag:'10 min', ru:'Добавьте вашу историю работы на этой странице — перевозчики, годы, какой груз возили. Подтвердите одно найденное доказательство.', tagRu:'10 мин'},
 {id:'truckdriver-q7', t:'Open the PathCheck Radar for this week and do the one move it names.', tag:'10 min', ru:'Откройте PathCheck Radar за эту неделю и сделайте тот один шаг, который там назван.', tagRu:'10 мин'},
 {id:'truckdriver-q8', t:'Share your verdict card. Your people should know their path is being eaten too.', tag:'5 min', ru:'Поделитесь карточкой вашего вердикта. Ваши люди тоже должны знать, что их путь едят.', tagRu:'5 мин'},
 {id:'truckdriver-q9', t:'Write down your best pay week so far: miles run, gross pay, nights at home. Three numbers', tag:'5 min', ru:'Запишите вашу лучшую неделю по оплате: сколько миль проехали, сколько получили валом, сколько ночей были дома. Три числа', tagRu:'5 мин'},
 {id:'truckdriver-q10', t:'Read the BLS line for your job — median $58,640, +3.8% growth, about 214,500 openings a year — and write what it means for your seat', tag:'10 min', ru:'Прочитайте строку BLS (Бюро трудовой статистики США) про вашу работу: медиана 58 640 долларов, рост +3,8%, около 214 500 вакансий в год, — и напишите, что это значит для вашего места', tagRu:'10 мин'}
]});
Object.assign(BIGGOALS, {
  otr:'Turn the exposed seat into the bank: 12 clean months, the letter stack bought, then out — local, tanker or linehaul money with your record intact.',
  regional:'Hold the home-weekly seat and make it pay like long-haul: endorsements added, record spotless, and a lane check every quarter so the robot map never surprises you.',
  local:'Top of the city game: LTL money at $36 an hour, home daily, and the linehaul board — $100,000–$107,000 posted averages — as your seniority prize.',
  tanker:'Be the driver the law itself protects: full hazmat stack, spotless paperwork, first call for the loads no robot is allowed to touch.',
  flatbed:'Specialist money for specialist hands: oversize, step-deck or car haul — the $70,000–$120,000+ postings — with a securement album that hires you on sight.',
  ownerop:'A real small business on wheels: 85%+ of the load, bills known to the dollar, freight relationships that are yours — not the carrier’s.'
});
BIGGOAL_PROF.truckdriver = 'A seat the robots can’t price down: chosen on purpose, licensed to the top, with a clean-record file that makes carriers compete for you.';

/* --- MENTAL HEALTH COUNSELOR pool (counselor-q1..q10) --- */
Object.assign(QUESTS, {
counselor: [
  {id:'counselor-q1', t:'Open one licensed counselor posting in a group practice. Save it. Bands there run $75,000–$135,000 — that is the shape of your target.', tag:'5 minutes · eyes on the market', ru:'Откройте одну вакансию лицензированного консультанта в групповой практике. Сохраните её. Вилки там идут $75,000–$135,000 — это форма вашей цели.', tagRu:'5 минут · глаза на рынке'},
  {id:'counselor-q2', t:'Write down the ONE seat you aim at. One line: group practice, agency, or the license first — the gig is not a seat.', tag:'5 minutes · one decision', ru:'Запишите ОДНО место, в которое целитесь. Одна строка: групповая практика, агентство или сначала лицензия — платформа местом не является.', tagRu:'5 минут · одно решение'},
  {id:'counselor-q3', t:'Open 3 counselor postings. Write the license each one asks for: full license, associate, or certificate.', tag:'10 minutes · proof over paper', ru:'Откройте 3 вакансии консультантов. Запишите лицензию, которую просит каждая: полная лицензия, младший статус (associate) или сертификат.', tagRu:'10 минут · доказательство вместо бумаг'},
  {id:'counselor-q4', t:'Find your state’s supervised-hours number: 2,000, 3,000, or another figure. Write it down with your exam: NCE or NCMHCE.', tag:'10 minutes · one page', ru:'Найдите число часов под супервизией в вашем штате: 2,000, 3,000 или другая цифра. Запишите его вместе с вашим экзаменом: NCE или NCMHCE.', tagRu:'10 минут · одна страница'},
  {id:'counselor-q5', t:'Find one associate posting that offers free supervision in writing. Save it. That line is worth money — it is the toll, paid for you.', tag:'10 minutes · eyes on the market', ru:'Найдите одну вакансию младшего специалиста, которая предлагает бесплатную супервизию письменно. Сохраните её. Эта строка стоит денег — это пошлина, оплаченная за вас.', tagRu:'10 минут · глаза на рынке'},
  {id:'counselor-q6', t:'Upload your resume on this page. Confirm one piece of evidence it finds.', tag:'10 minutes · your file', ru:'Загрузите резюме на этой странице. Подтвердите одно доказательство, которое оно найдёт.', tagRu:'10 минут · ваш файл'},
  {id:'counselor-q7', t:'Read today’s radar signal below. One item, with a date. That is the market moving.', tag:'5 minutes · one signal', ru:'Прочитайте сегодняшний сигнал радара ниже. Один пункт, с датой. Это рынок в движении.', tagRu:'5 минут · один сигнал'},
  {id:'counselor-q8', t:'Share your verdict card. Your people should know their path is being eaten too.', tag:'5 minutes · share it', ru:'Поделитесь карточкой вашего вердикта. Ваши люди тоже должны знать, что их путь едят.', tagRu:'5 минут · поделиться'},
  {id:'counselor-q9', t:'Pick one named method — CBT, DBT, EMDR, or motivational interviewing. Find one real training in it and write down its price and dates.', tag:'10 minutes · one method', ru:'Выберите один названный метод — CBT, DBT, EMDR или мотивационное интервью. Найдите одно настоящее обучение по нему и запишите его цену и даты.', tagRu:'10 минут · один метод'},
  {id:'counselor-q10', t:'Check your state on the Counseling Compact map: enacted, live, or not in. Eleven states are live today. Write down which yours is.', tag:'10 minutes · one check', ru:'Проверьте ваш штат на карте Counseling Compact (соглашения штатов о лицензиях консультантов): закон принят, работает или штата нет. Одиннадцать штатов работают сегодня. Запишите, какой ваш.', tagRu:'10 минут · одна проверка'}
]
});
Object.assign(BIGGOALS, {
  groupcns:'The big goal: a full license sold where it is priced highest — a group or private practice at $75,000–$135,000, with one specialty that fills a waiting list.',
  agencycns:'The big goal: the stable licensed seat — agency pay with the quota read and accepted on purpose, or the supervision seat that carries you to the full license.',
  platform:'The big goal: hours you own — a practice or a group seat where the client list and the rate are yours, with the platform kept, if at all, as a side caseload.',
  sudcns:'The big goal: across the bridge — from the certificate seat into the licensed level, where your addiction experience finally meets the $75,000–$135,000 bands.',
  associate:'The big goal: the full license — 2,000–3,000 supervised hours, logged, with supervision you did not have to buy.'
});
BIGGOAL_PROF.counselor = 'The big goal: the full license, in the seat that prices it highest — group or private practice at $75,000–$135,000.';

/* ===== Skilled trades quest pools (Nov 1 2026) — verbatim from
   ~/workspace/cg-staging/trades/spec.md §6 of each part. ===== */
Object.assign(QUESTS, {
  electrician: [
    {
      id: 'electrician-q1',
      t: 'Write down your state’s journeyman license name and the hours it needs. One page, from your state board’s site.',
      tag: '10 minutes · one page',
      ru: 'Запишите название лицензии подмастерья (journeyman — лицензия электрика, который может работать сам) вашего штата и сколько часов она требует. Одна страница, с сайта board вашего штата.',
      tagRu: '10 минут · одна страница'
    },
    {
      id: 'electrician-q2',
      t: 'Find the next apprenticeship application window near you — union or non-union. Put the date in your calendar.',
      tag: '10 minutes · one date',
      ru: 'Найдите ближайшее окно приёма в ученичество (apprenticeship — оплачиваемое обучение на рабочем месте) рядом с вами — профсоюзное или нет. Поставьте дату в календарь.',
      tagRu: '10 минут · одна дата'
    },
    {
      id: 'electrician-q3',
      t: 'Compare two doors in writing: a registered apprenticeship ($0 tuition, paid) and one private school program (its real price).',
      tag: '15 minutes · two prices',
      ru: 'Сравните две двери письменно: зарегистрированное ученичество ($0 за обучение, вам платят) и одну частную школу (её настоящую цену).',
      tagRu: '15 минут · две цены'
    },
    {
      id: 'electrician-q4',
      t: 'Read one live journeyman posting fully. Write down the license it names and the pay it posts.',
      tag: '10 minutes · one posting',
      ru: 'Прочитайте одну живую вакансию подмастерья целиком. Запишите лицензию, которую она называет, и оплату, которую публикует.',
      tagRu: '10 минут · одна вакансия'
    },
    {
      id: 'electrician-q5',
      t: 'Start your hours log today: date, site, work type. Backfill this week from memory.',
      tag: '10 minutes · your log',
      ru: 'Начните журнал часов сегодня: дата, объект, вид работы. Заполните эту неделю по памяти.',
      tagRu: '10 минут · ваш журнал'
    },
    {
      id: 'electrician-q6',
      t: 'Upload your resume on this page. Confirm one license or certificate it finds.',
      tag: '10 minutes · your file',
      ru: 'Загрузите резюме на этой странице. Подтвердите одну лицензию или сертификат, который оно найдёт.',
      tagRu: '10 минут · ваш файл'
    },
    {
      id: 'electrician-q7',
      t: 'Read today’s radar signal below. One item, with a date. That is the market moving.',
      tag: '5 minutes · one signal',
      ru: 'Прочитайте сегодняшний сигнал радара ниже. Один пункт, с датой. Это рынок в движении.',
      tagRu: '5 минут · один сигнал'
    },
    {
      id: 'electrician-q8',
      t: 'Share your verdict card. Your people should know their path is being eaten too.',
      tag: '5 minutes · share it',
      ru: 'Поделитесь карточкой вашего вердикта. Ваши люди тоже должны знать, что их путь едят.',
      tagRu: '5 минут · поделиться'
    },
    {
      id: 'electrician-q9',
      t: 'Write down the pay gap in your city: one residential posting and one industrial or data-center posting, side by side.',
      tag: '10 minutes · two numbers',
      ru: 'Запишите разрыв оплаты в вашем городе: одна вакансия в жилом секторе и одна в промышленном или в дата-центрах, рядом.',
      tagRu: '10 минут · два числа'
    },
    {
      id: 'electrician-q10',
      t: 'Read the BLS electrician line: median $63,190, growth +9.2%, about 72,700 openings a year. Write down what it means for your seat.',
      tag: '10 minutes · one number',
      ru: 'Прочитайте строку BLS про электриков: медиана $63,190, рост +9.2%, около 72,700 открытых мест в год. Запишите, что это значит для вашего места.',
      tagRu: '10 минут · одно число'
    }
  ],
  hvac: [
    {
      id: 'hvac-q1',
      t: 'Check which EPA 608 types you hold — or book the exam. Universal is the version commercial shops ask for.',
      tag: '10 minutes · one card',
      ru: 'Проверьте, какие типы EPA 608 (федеральный сертификат на работу с хладагентом; Universal — все типы) у вас есть, — или запишитесь на экзамен. Universal — версия, которую просят коммерческие фирмы.',
      tagRu: '10 минут · одна карта'
    },
    {
      id: 'hvac-q2',
      t: 'Start your system log: last five systems you touched — type, tonnage, fault, fix. Paper is fine.',
      tag: '10 minutes · your log',
      ru: 'Начните журнал систем: последние пять систем, которых вы касались, — тип, тоннаж (tonnage — мощность охлаждения), неисправность, ремонт. Бумага подойдёт.',
      tagRu: '10 минут · ваш журнал'
    },
    {
      id: 'hvac-q3',
      t: 'Compare two doors in writing: the EPA 608 exam (a few hundred dollars) and one private HVAC program (its real price).',
      tag: '15 minutes · two prices',
      ru: 'Сравните две двери письменно: экзамен EPA 608 (несколько сотен долларов) и одну частную программу HVAC (её настоящую цену).',
      tagRu: '15 минут · две цены'
    },
    {
      id: 'hvac-q4',
      t: 'Read one live controls posting fully. Write down the platform it names and the pay it posts.',
      tag: '10 minutes · one posting',
      ru: 'Прочитайте одну живую вакансию по системам управления (controls — автоматика зданий) целиком. Запишите платформу, которую она называет, и оплату, которую публикует.',
      tagRu: '10 минут · одна вакансия'
    },
    {
      id: 'hvac-q5',
      t: 'Write your on-call terms as they are today: rotation, pay, nights per month. One honest page.',
      tag: '10 minutes · one page',
      ru: 'Запишите ваши условия дежурств (on-call — вызовы ночью и в выходные) как они есть сегодня: ротация, оплата, ночей в месяц. Одна честная страница.',
      tagRu: '10 минут · одна страница'
    },
    {
      id: 'hvac-q6',
      t: 'Upload your resume on this page. Confirm one license or certificate it finds.',
      tag: '10 minutes · your file',
      ru: 'Загрузите резюме на этой странице. Подтвердите одну лицензию или сертификат, который оно найдёт.',
      tagRu: '10 минут · ваш файл'
    },
    {
      id: 'hvac-q7',
      t: 'Read today’s radar signal below. One item, with a date. That is the market moving.',
      tag: '5 minutes · one signal',
      ru: 'Прочитайте сегодняшний сигнал радара ниже. Один пункт, с датой. Это рынок в движении.',
      tagRu: '5 минут · один сигнал'
    },
    {
      id: 'hvac-q8',
      t: 'Share your verdict card. Your people should know their path is being eaten too.',
      tag: '5 minutes · share it',
      ru: 'Поделитесь карточкой вашего вердикта. Ваши люди тоже должны знать, что их путь едят.',
      tagRu: '5 минут · поделиться'
    },
    {
      id: 'hvac-q9',
      t: 'Ask one commercial tech or controls tech one question: what platform should you learn first? Write the answer down.',
      tag: '10 minutes · one question',
      ru: 'Задайте одному коммерческому технику или технику по автоматике один вопрос: какую платформу учить первой? Запишите ответ.',
      tagRu: '10 минут · один вопрос'
    },
    {
      id: 'hvac-q10',
      t: 'Read the BLS HVAC line: median $61,010, growth +11%, about 40,600 openings a year. Write down what it means for your seat.',
      tag: '10 minutes · one number',
      ru: 'Прочитайте строку BLS про HVAC: медиана $61,010, рост +11%, около 40,600 открытых мест в год. Запишите, что это значит для вашего места.',
      tagRu: '10 минут · одно число'
    }
  ],
  plumber: [
    {
      id: 'plumber-q1',
      t: 'Write down your state’s ladder in order: apprentice, journeyman, master — and the years each step needs.',
      tag: '10 minutes · one ladder',
      ru: 'Запишите лестницу вашего штата по порядку: ученик (apprentice), подмастерье (journeyman — лицензия, с которой можно работать самому), мастер (master) — и сколько лет нужно на каждую ступень.',
      tagRu: '10 минут · одна лестница'
    },
    {
      id: 'plumber-q2',
      t: 'Find one registered apprenticeship near you and its next application date. Put the date in your calendar.',
      tag: '10 minutes · one date',
      ru: 'Найдите одно зарегистрированное ученичество (apprenticeship — оплачиваемое обучение на рабочем месте) рядом с вами и его следующую дату приёма. Поставьте дату в календарь.',
      tagRu: '10 минут · одна дата'
    },
    {
      id: 'plumber-q3',
      t: 'Read one chain training offer’s pay text fully. Write down what pay looks like after the training ends.',
      tag: '10 minutes · one contract',
      ru: 'Прочитайте текст оплаты одного предложения обучения от крупной сети целиком. Запишите, как выглядит оплата после конца обучения.',
      tagRu: '10 минут · один договор'
    },
    {
      id: 'plumber-q4',
      t: 'Start your hours log today: date, site, work type — service, construction, commercial, industrial.',
      tag: '10 minutes · your log',
      ru: 'Начните журнал часов сегодня: дата, объект, вид работы — сервис, строительство, коммерческая, промышленная.',
      tagRu: '10 минут · ваш журнал'
    },
    {
      id: 'plumber-q5',
      t: 'Find the backflow rule in your city: who must test backflow devices, and how often. One page of notes.',
      tag: '10 minutes · one rule',
      ru: 'Найдите правило обратных клапанов (backflow — устройства, которые не дают грязной воде уйти в чистую сеть) в вашем городе: кто обязан их проверять и как часто. Одна страница заметок.',
      tagRu: '10 минут · одно правило'
    },
    {
      id: 'plumber-q6',
      t: 'Upload your resume on this page. Confirm one license or certificate it finds.',
      tag: '10 minutes · your file',
      ru: 'Загрузите резюме на этой странице. Подтвердите одну лицензию или сертификат, который оно найдёт.',
      tagRu: '10 минут · ваш файл'
    },
    {
      id: 'plumber-q7',
      t: 'Read today’s radar signal below. One item, with a date. That is the market moving.',
      tag: '5 minutes · one signal',
      ru: 'Прочитайте сегодняшний сигнал радара ниже. Один пункт, с датой. Это рынок в движении.',
      tagRu: '5 минут · один сигнал'
    },
    {
      id: 'plumber-q8',
      t: 'Share your verdict card. Your people should know their path is being eaten too.',
      tag: '5 minutes · share it',
      ru: 'Поделитесь карточкой вашего вердикта. Ваши люди тоже должны знать, что их путь едят.',
      tagRu: '5 минут · поделиться'
    },
    {
      id: 'plumber-q9',
      t: 'Compare two postings side by side: one guaranteed-hourly and one commission. Write the slow-week pay for each.',
      tag: '10 minutes · two offers',
      ru: 'Сравните две вакансии рядом: одну с гарантированной почасовой оплатой и одну с комиссией. Запишите оплату медленной недели для каждой.',
      tagRu: '10 минут · два предложения'
    },
    {
      id: 'plumber-q10',
      t: 'Read the BLS plumber line: median $63,800, growth +7%, about 42,000 openings a year. Write down what it means for your seat.',
      tag: '10 minutes · one number',
      ru: 'Прочитайте строку BLS про сантехников: медиана $63,800, рост +7%, около 42,000 открытых мест в год. Запишите, что это значит для вашего места.',
      tagRu: '10 минут · одно число'
    }
  ]
});
Object.assign(BIGGOALS, {
  elcapp: 'Big goal: the journeyman license — earned inside a paid apprenticeship, with 8,000 logged hours and $0 of school debt.',
  elcjour: 'Big goal: the license aimed at the buildings that pay — industrial and data-center bands, not the residential floor.',
  elcdata: 'Big goal: the seat that wires the AI economy — $62.00/hr scale work with the safety cards the big sites screen for.',
  elcown: 'Big goal: a shop with your name on it — the master license, the contractor license, and a maintenance book a buyer would pay for.',
  elcsales: 'Big goal: the same license under a pay structure that pays for fixing — hourly, guaranteed, or your own name on the truck.',
  hvcapp: 'Big goal: the federal card plus a paid seat — a technician a shop can bill out, inside your first year, without a five-figure loan.',
  hvctech: 'Big goal: lead-tech pay on hourly terms — $30–$50 an hour for diagnosis people trust, with on-call priced in writing.',
  hvcomm: 'Big goal: the controls seat — one platform mastered, $60K–$125K of salary work, and no sales quota anywhere in the pay line.',
  hvcown: 'Big goal: a shop whose book is the asset — maintenance agreements and a local name a buyer prices in multiples.',
  hvcsales: 'Big goal: the same hands on a pay structure that pays for fixing — hourly, commercial, or your own name on the truck.',
  plbapp: 'Big goal: the journeyman license at the end of a wage-paid apprenticeship — 4–5 years that pay you while they make you.',
  plbserv: 'Big goal: the licensed seat on a guaranteed floor — $110K–$130K posted work, commission only ever as an option on top.',
  plbfit: 'Big goal: the industrial branch on union scale — plant work at $40.64–$54/hr posted, $60.50/hr on the published Chicago scale.',
  plbown: 'Big goal: a shop standing on your master license — with a maintenance book an acquirer prices in multiples.',
  plbsales: 'Big goal: the same hands on a guaranteed floor — hourly at a shop, industrial on scale, or your own name on the truck.'
});
BIGGOAL_PROF.electrician = 'Big goal: a license the shortage keeps repricing upward — and a seat chosen by building type, not by habit.';
BIGGOAL_PROF.hvac = 'Big goal: the trade AI cannot offshore and cannot do — aimed at the buildings AI lives in.';
BIGGOAL_PROF.plumber = 'Big goal: the license the whole market bids for — earned once, priced every year the shortage lasts.';
/* ===== Cybersecurity quest pool (Nov 1 2026) — verbatim from
   ~/workspace/cg-staging/cybersecurity/spec.md §6 (time-tags composed
   in house style; the spec's strand tags live in DNA_QUEST_TAGS). ===== */
Object.assign(QUESTS, {cybersecurity: [
  {
    id: 'cybersecurity-q1',
    t: 'Read 3 live SOC analyst postings. Write down the years each one asks for.',
    tag: '10 minutes · three postings',
    ru: 'Прочитайте 3 живые вакансии аналитика SOC — центра мониторинга атак. Запишите, сколько лет опыта просит каждая.',
    tagRu: '10 минут · три вакансии'
  },
  {
    id: 'cybersecurity-q2',
    t: 'Spend 10 minutes in a free Splunk or Sentinel practice lab. Sort one alert.',
    tag: '10 minutes · one lab',
    ru: 'Проведите 10 минут в бесплатной учебной лаборатории Splunk или Sentinel — систем разбора оповещений об атаках. Разберите одно оповещение.',
    tagRu: '10 минут · одна лаборатория'
  },
  {
    id: 'cybersecurity-q3',
    t: 'Write 5 plain lines: what a SOC analyst actually does all day.',
    tag: '10 minutes · five lines',
    ru: 'Напишите 5 простых строк: чем аналитик SOC — центра мониторинга атак — занимается весь день на самом деле.',
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
    t: 'List your IT time: every month of help desk, support or admin work counts. Count it.',
    tag: '10 minutes · your list',
    ru: 'Перечислите своё время в IT: засчитывается каждый месяц в поддержке, помощи пользователям и администрировании. Посчитайте его.',
    tagRu: '10 минут · ваш список'
  },
  {
    id: 'cybersecurity-q6',
    t: 'Upload your resume on this page. Confirm one piece of evidence it finds.',
    tag: '10 minutes · your file',
    ru: 'Загрузите своё резюме на этой странице. Подтвердите одно найденное им доказательство.',
    tagRu: '10 минут · ваш файл'
  },
  {
    id: 'cybersecurity-q7',
    t: 'Read today’s radar signal below. One item, with a date. That is the market moving.',
    tag: '5 minutes · one signal',
    ru: 'Прочитайте сегодняшний сигнал радара ниже. Один пункт, с датой. Так рынок и движется.',
    tagRu: '5 минут · один сигнал'
  },
  {
    id: 'cybersecurity-q8',
    t: 'Share your verdict card. Your people should know their path is being eaten too.',
    tag: '5 minutes · share it',
    ru: 'Поделитесь карточкой вашего вердикта. Ваши люди тоже должны знать, что их путь едят.',
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
  socanalyst: 'The big goal: reach Tier 2 investigation work within your first year — before the sorting rung shrinks under you.',
  secengineer: 'The big goal: own a detection area end to end: rules you wrote, numbers that prove they catch real attacks.',
  cloudsec: 'The big goal: guard a whole cloud estate on AWS or Azure — accounts, permissions and alerts — with the certificate the postings repeat.',
  pentester: 'The big goal: earn the OSCP after real security years, and test systems companies pay to have attacked before criminals do.',
  grcanalyst: 'The big goal: arrive at GRC from inside security work — with the years every posting demands, not with a bootcamp receipt.'
});
BIGGOAL_PROF.cybersecurity = 'The big goal: become the analyst who investigates, not the one who only sorts: real IT time, one specialty, and proof you can show.';
/* ===== AI PRODUCT MANAGER — quest pool (Nov 1 2026, spec §6).
   Specialty pool written to the scan. House slots (q6/q7/q8) reuse
   the standing texts verbatim. aipm-q1 is the seat-pick quest. ===== */
Object.assign(QUESTS, {aipm: [
  {
    id: 'aipm-q1',
    t: 'Decide your seat: platform, evals, feature, enterprise, growth, or the program door. Write it on this path. The six seats post $83,000 to $490,000 and screen for different pasts.',
    tag: '10 min',
    ru: 'Решите, какое у вас место: platform, evals, feature, enterprise, growth — или дверь программ. Запишите его на этом пути. Шесть мест публикуют от $83,000 до $490,000 и проверяют разное прошлое.',
    tagRu: '10 минут'
  },
  {
    id: 'aipm-q2',
    t: 'Count how many real postings in your seat ask for 5+ years. Write the number down. 20 of 26 postings that state years ask for 5+ — know your seat’s number before you plan.',
    tag: '10 min · a count',
    ru: 'Посчитайте, сколько настоящих вакансий вашего места просят 5+ лет. Запишите число. 20 из 26 вакансий, которые называют годы, просят 5+, — знайте число вашего места до планирования.',
    tagRu: '10 минут · подсчёт'
  },
  {
    id: 'aipm-q3',
    t: 'Grade one AI answer today: take a chatbot you use, ask it a hard question, and write down what its answer got wrong — confidently wrong counts double.',
    tag: '5 min',
    ru: 'Оцените один ответ AI сегодня: возьмите чат-бота, которым пользуетесь, задайте ему трудный вопрос и запишите, что его ответ сказал не так, — уверенная неправда считается вдвойне.',
    tagRu: '5 минут'
  },
  {
    id: 'aipm-q4',
    t: 'Write 5 test questions for the AI feature you know best, each with the right answer next to it. That is the start of an eval set.',
    tag: '15 min',
    ru: 'Напишите 5 тестовых вопросов для AI-функции, которую вы знаете лучше всего, — с правильным ответом рядом с каждым. Это начало набора evals.',
    tagRu: '15 минут'
  },
  {
    id: 'aipm-q5',
    t: 'Read one real platform PM posting end to end. Save the one requirement you cannot show yet.',
    tag: '10 min · one posting',
    ru: 'Прочитайте одну настоящую вакансию platform PM от начала до конца. Сохраните одно требование, которое вы пока не можете показать.',
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
    t: 'Read this week’s Radar slowly. Save the one signal that changes your plan.',
    tag: '5 min · radar',
    ru: 'Медленно прочитайте Радар этой недели. Сохраните один сигнал, который меняет ваш план.',
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
    t: 'Write down one failure your AI feature made with a real user — or would make. One honest line.',
    tag: '5 min',
    ru: 'Запишите одну ошибку, которую ваша AI-функция сделала с настоящим пользователем, — или сделает. Одна честная строка.',
    tagRu: '5 минут'
  },
  {
    id: 'aipm-q10',
    t: 'Say the honest market line about this job out loud: “The official statistics do not count this job.” Then look at your seat’s band again.',
    tag: '5 min',
    ru: 'Скажите честно вслух строку рынка об этой работе: «Официальная статистика не считает эту работу». Потом посмотрите на вилку вашего места ещё раз.',
    tagRu: '5 минут'
  }
]});
Object.assign(BIGGOALS, {
  platpm: 'The big goal: platform PM who owns what the model can do — the postings pay $347K–$490K for that judgment.',
  evalpm: 'The big goal: the person who can prove an AI’s answer is good — the seat eating the profession, $151K–$253K.',
  featpm: 'The big goal: an AI feature PM whose features survive evals — the biggest seat, grown from ordinary product work.',
  entpm: 'The big goal: agent PM inside one industry’s real work — law, health or finance, $149K–$300K.',
  growpm: 'The big goal: growth PM on an AI product where experiments are the proof — $275K–$305K.',
  apmpm: 'The big goal: inside a program or an adjacent seat by year two — the ladder, climbed honestly.'
});
BIGGOAL_PROF.aipm = 'The big goal: a seat picked on purpose from the scan’s real bands ($117K–$490K), reached with evals and shipped features, not with certificates.';
