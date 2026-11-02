/* ===== Quest detail content — Content Creator (STAFF), 2026-11-01.
   Same format as questdetails.js (the quest-fix build): QUEST_DETAILS,
   keyed by quest id, {how[], howRu[]} — 2–4 micro-steps per quest in
   full sentences a smart 12-year-old gets first try, in the founder's
   plain-words register («как для тупых», ruling 2026-11-01). The
   quest-fix header reserved `creator` for the staff-reframe build;
   this file is that addition. It accumulates onto the global
   QUEST_DETAILS via the same guard + Object.assign pattern, so load
   order against questdetails.js does not matter. Numbers only repeat
   the quest texts' own numbers — none invented. Registered in
   app.html right after questdetails.js. ===== */

var QUEST_DETAILS = (typeof QUEST_DETAILS !== "undefined" && QUEST_DETAILS) || {};
Object.assign(QUEST_DETAILS, {
 "creator-q1": {
  "how": [
   "Pick any product you own and put it on a table in good light.",
   "Hold your phone upright and film one take of about 20 seconds: show the product, say what it does, and show it working.",
   "Say the main good thing about the product in the first two seconds — that first line is the hook, the opening that stops a viewer.",
   "Watch the video once. If you can see the product clearly and hear your words, the quest is done. It does not need to be pretty."
  ],
  "howRu": [
   "Выберите любой продукт, который у вас есть, и поставьте его на стол при хорошем свете.",
   "Держите телефон вертикально и снимите один дубль примерно на 20 секунд: покажите продукт, скажите, что он делает, и покажите его в работе.",
   "Главное хорошее про продукт скажите в первые две секунды — эта первая строка и есть хук, начало, которое останавливает зрителя.",
   "Посмотрите видео один раз. Если продукт хорошо видно, а ваши слова хорошо слышно, квест выполнен. Красота здесь не нужна."
  ]
 },
 "creator-q2": {
  "how": [
   "Open one old video of yours in CapCut or Premiere — these are editing programs, apps for cutting video.",
   "Find the slowest 10 seconds: a long pause, a repeated line, or a slow start.",
   "Cut those 10 seconds out and join the two ends together.",
   "Play the video once from the start. If it feels tighter and still makes sense, the quest is done."
  ],
  "howRu": [
   "Откройте одно ваше старое видео в CapCut или Premiere — это программы для монтажа, то есть для нарезки видео.",
   "Найдите самые медленные 10 секунд: длинную паузу, повторную фразу или медленное начало.",
   "Вырежьте эти 10 секунд и соедините два конца вместе.",
   "Проиграйте видео один раз с начала. Если оно стало плотнее и смысл не потерялся, квест выполнен."
  ]
 },
 "creator-q3": {
  "how": [
   "Open a job board — a site with job postings, like Indeed, LinkedIn or Built In.",
   "Search for “content creator” and open one posting that is open now — open now is what “live” means.",
   "Find the list of what the company asks for: the tools, the skills and the duties.",
   "Save the posting, or copy the list into your notes. This list shows you what the market wants, in the company's own words."
  ],
  "howRu": [
   "Откройте сайт с вакансиями — место, где публикуют работу, например Indeed, LinkedIn или Built In.",
   "Найдите по поиску «content creator» и откройте одну вакансию, которая открыта сейчас. Открыта сейчас — это и значит «живая» вакансия.",
   "Найдите список того, что просит компания: инструменты, навыки и обязанности.",
   "Сохраните вакансию или скопируйте список в ваши заметки. Этот список показывает, что хочет рынок, словами самой компании."
  ]
 },
 "creator-q4": {
  "how": [
   "Choose one finished video of yours — your strongest one is best, but any finished piece counts.",
   "Find its view count: open the post and read the number of views.",
   "Add the video to your portfolio page and write the view count next to it, like “12,400 views”.",
   "If you do not have a portfolio page yet, start one today with this single piece. One piece with a number beats an empty page."
  ],
  "howRu": [
   "Выберите одно ваше законченное видео. Лучше самое сильное, но подойдёт любая законченная работа.",
   "Найдите число его просмотров: откройте пост и прочитайте цифру просмотров.",
   "Добавьте видео на вашу страницу портфолио и напишите рядом число просмотров, например «12 400 просмотров».",
   "Если страницы портфолио у вас ещё нет, начните её сегодня с этой одной работы. Одна работа с цифрой лучше пустой страницы."
  ]
 },
 "creator-q5": {
  "how": [
   "Pick one industry you know or like — for example food, fitness, tools, beauty, or pet products.",
   "Write down 5 brands from that industry. Small and middle brands count: they hire staff creators more often than the giants do.",
   "Open each brand's page and check one thing: did they post a video this week?",
   "Keep the 5 brands that did. This list is the map of your niche — your niche is the narrow area you will aim at."
  ],
  "howRu": [
   "Выберите одну отрасль, которую вы знаете или любите, — например еду, фитнес, инструменты, красоту или товары для животных.",
   "Запишите 5 брендов из этой отрасли. Малые и средние бренды считаются: они нанимают штатных креаторов чаще, чем гиганты.",
   "Откройте страницу каждого бренда и проверьте одну вещь: публиковали ли они видео на этой неделе?",
   "Оставьте те 5 брендов, которые публиковали. Этот список — карта вашей ниши. Ниша — это узкая область, в которую вы будете целиться."
  ]
 },
 "creator-q6": {
  "how": [
   "Pick one staff creator or one hiring manager — a hiring manager is the person who hires creators — from a brand you like.",
   "Open their content and find one specific thing you honestly like: a hook, a shot, or a series idea.",
   "Write one short message: name the thing you liked in one sentence, then ask one real question about how they work.",
   "Send it, and write down who you wrote to and when. One message is the whole quest — an answer is a bonus, not the goal."
  ],
  "howRu": [
   "Выберите одного штатного креатора или одного нанимающего менеджера из бренда, который вам нравится. Нанимающий менеджер — это человек, который нанимает креаторов.",
   "Откройте их контент и найдите одну конкретную вещь, которая вам честно нравится: хук, кадр или идею серии.",
   "Напишите одно короткое сообщение: назовите то, что вам понравилось, одним предложением, а потом задайте один настоящий вопрос о том, как они работают.",
   "Отправьте его и запишите, кому вы написали и когда. Одно сообщение — это весь квест. Ответ — бонус, а не цель."
  ]
 },
 "creator-q7": {
  "how": [
   "Pick one step of your normal work that a machine can do: the captions (the words shown on the video), a new variant of a picture, or a first rough cut.",
   "Open one AI tool — for example ChatGPT, the AI tools inside CapCut, Runway or Firefly — and let it do that one step.",
   "Check what it made, and fix with your own hands what is wrong.",
   "Write down one line: what did the tool save you — minutes, effort, or an idea you would not have had?"
  ],
  "howRu": [
   "Выберите один шаг вашей обычной работы, который может сделать машина: подписи (слова, которые показываются на видео), новый вариант картинки или первый грубый монтаж.",
   "Откройте один инструмент ИИ — например ChatGPT, инструменты ИИ внутри CapCut, Runway или Firefly — и дайте ему сделать этот один шаг.",
   "Проверьте, что он сделал, и исправьте своими руками то, что неверно.",
   "Запишите одну строку: что инструмент вам сэкономил — минуты, силы или идею, которая не пришла бы вам в голову?"
  ]
 },
 "creator-q8": {
  "how": [
   "Open your PathCheck result and find the share card — the picture with your verdict on it.",
   "Post it in one story or one post, on the platform where employers in your niche would see it.",
   "Add one line of your own next to it, saying what you are looking for — for example: “I am aiming at a staff creator seat at a brand.”",
   "That is the whole quest. The staff job goes to the creator the employers have already seen, and now one more employer has seen you."
  ],
  "howRu": [
   "Откройте ваш результат PathCheck и найдите карточку для шеринга — картинку с вашим вердиктом.",
   "Опубликуйте её в одной сторис или в одном посте на платформе, где её увидят работодатели вашей ниши.",
   "Добавьте рядом одну вашу строку о том, что вы ищете, — например: «Я целюсь в штатное место креатора у бренда».",
   "Это весь квест. Штатную работу получает креатор, которого работодатели уже видели, а теперь вас увидел ещё один работодатель."
  ]
 },
 "creator-q9": {
  "how": [
   "Take one video idea — yours, or one from a brand in your niche.",
   "Write 5 different first lines for it. A hook is the first seconds of a video: the line that makes a viewer stop and stay.",
   "Make each hook different: one can ask a question, one can promise a result, and one can start with a mistake or a surprise.",
   "Read the 5 hooks out loud and mark the strongest one. The postings name writing hooks as a duty, so this practice is the job itself, in small."
  ],
  "howRu": [
   "Возьмите одну идею видео — вашу или идею бренда из вашей ниши.",
   "Напишите 5 разных первых строк для неё. Хук — это первые секунды видео: строка, которая заставляет зрителя остановиться и остаться.",
   "Сделайте каждый хук разным: один может задавать вопрос, один — обещать результат, а один — начинаться с ошибки или сюрприза.",
   "Прочитайте 5 хуков вслух и отметьте самый сильный. Вакансии называют написание хуков обязанностью, поэтому эта тренировка — сама работа, только в малом виде."
  ]
 },
 "creator-q10": {
  "how": [
   "Open your own posts and find the one with the best numbers — the most views, or the most people who watched to the end.",
   "Take a screenshot of that post with its numbers visible.",
   "Write two lines about why it worked: what the hook was, and what the subject gave the viewer.",
   "Save the screenshot and the two lines with your portfolio. This short analysis is proof that you can read numbers, and hiring managers look for exactly that."
  ],
  "howRu": [
   "Откройте ваши посты и найдите тот, у которого лучшие цифры: больше всего просмотров или больше всего людей, досмотревших до конца.",
   "Сделайте скриншот этого поста так, чтобы цифры были видны.",
   "Напишите две строки о том, почему он сработал: каким был хук и что тема дала зрителю.",
   "Сохраните скриншот и две строки рядом с вашим портфолио. Этот короткий разбор — доказательство того, что вы умеете читать цифры, а нанимающие менеджеры ищут именно это."
  ]
 }
});
