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
   "Pick any product you own. Put it on a table in good light.",
   "Hold your phone upright. Film one take, about 20 seconds: show the product, say what it does, show it working.",
   "Say the best thing about it in the first two seconds. That first line is the hook: it makes people stop and watch.",
   "Watch it once. Can you see the product and hear your words? Then you're done! It doesn't need to be pretty."
  ],
  "howRu": [
   "Возьмите любой продукт, который у вас есть. Поставьте его на стол при хорошем свете.",
   "Держите телефон вертикально. Снимите один дубль, около 20 секунд: покажите продукт, скажите, что он делает, покажите в работе.",
   "Главное хорошее про продукт скажите в первые две секунды. Это хук: фраза, из-за которой зритель останавливается.",
   "Посмотрите видео один раз. Продукт видно, слова слышно? Тогда всё готово! Красота здесь не нужна."
  ]
 },
 "creator-q2": {
  "how": [
   "Open one old video in CapCut or Premiere. These are apps for editing video.",
   "Find the slowest 10 seconds: a long pause, a repeated line, or a slow start.",
   "Cut those 10 seconds out. Join the two ends together.",
   "Play it from the start. Feels faster and still makes sense? Quest done. Nice work!"
  ],
  "howRu": [
   "Откройте одно старое видео в CapCut или Premiere. Это программы для монтажа видео.",
   "Найдите самые скучные 10 секунд: долгую паузу, повтор или медленное начало.",
   "Вырежьте эти 10 секунд. Соедините два конца.",
   "Включите видео с начала. Стало бодрее и всё понятно? Квест выполнен. Отлично!"
  ]
 },
 "creator-q3": {
  "how": [
   "Open a job site, like Indeed, LinkedIn or Built In.",
   "Search for “content creator”. Open one job post that is still open.",
   "Find the list of what the company wants: tools, skills and duties. Unknown word? Ask ChatGPT or Claude.",
   "Save the job post or copy the list to your notes. Now you know what companies want, in their own words."
  ],
  "howRu": [
   "Откройте сайт с вакансиями, например Indeed, LinkedIn или Built In.",
   "Введите в поиск «content creator» (автор видео для компаний). Откройте одну вакансию, которая ещё открыта.",
   "Найдите список, что просит компания: инструменты, навыки и обязанности. Незнакомое слово? Спросите ChatGPT или Claude.",
   "Сохраните вакансию или скопируйте список в заметки. Теперь вы знаете, что хотят компании, их же словами."
  ]
 },
 "creator-q4": {
  "how": [
   "Choose one finished video. Your best one is great, but any finished video counts.",
   "Open the post and find how many views it has.",
   "Add the video to your portfolio page. Write the views next to it, like “12,400 views”.",
   "No portfolio page yet? Start one today with just this video. One video with a number beats an empty page."
  ],
  "howRu": [
   "Выберите одно законченное видео. Лучше самое сильное, но подойдёт любое.",
   "Откройте пост и найдите, сколько у него просмотров.",
   "Добавьте видео на страницу портфолио. Напишите рядом просмотры, например «12 400 просмотров».",
   "Портфолио ещё нет? Начните его сегодня с одного этого видео. Одно видео с цифрой лучше пустой страницы."
  ]
 },
 "creator-q5": {
  "how": [
   "Pick one industry you know or like. For example food, fitness, tools, beauty, or pet products.",
   "Write down 5 brands from it. Small and medium brands are great: they hire creators more often than giants.",
   "Open each brand's page. Check one thing: did they post a video this week?",
   "Keep the 5 that did. This list is the map of your niche (the narrow area you'll aim at)."
  ],
  "howRu": [
   "Выберите одну сферу, которую вы знаете или любите. Например еда, фитнес, инструменты, красота или товары для животных.",
   "Запишите 5 брендов оттуда. Малые и средние отлично подходят: они нанимают авторов видео чаще гигантов.",
   "Откройте страницу каждого бренда. Проверьте одно: было ли у них видео на этой неделе?",
   "Оставьте 5 брендов, у которых было. Это карта вашей ниши (узкой области, куда вы целитесь)."
  ]
 },
 "creator-q6": {
  "how": [
   "Pick one in-house creator or one hiring manager (the person who hires creators) at a brand you like.",
   "Look at their content. Find one thing you honestly like: a hook, a shot, or a series idea.",
   "Write one short message. Say what you liked in one sentence. Then ask one real question about how they work.",
   "Send it. Write down who you wrote to and when. That's the whole quest. A reply is a bonus!"
  ],
  "howRu": [
   "Выберите одного штатного автора видео в бренде, который вам нравится. Или менеджера, который нанимает таких авторов.",
   "Посмотрите их видео. Найдите одну вещь, которая вам правда нравится: хук, кадр или идею серии.",
   "Напишите короткое сообщение. Одним предложением скажите, что понравилось. Потом задайте один настоящий вопрос о том, как они работают.",
   "Отправьте. Запишите, кому и когда написали. Это весь квест. Ответ — приятный бонус!"
  ]
 },
 "creator-q7": {
  "how": [
   "Pick one step of your work a machine can do: captions (words on the video), a new version of a picture, or a first rough cut.",
   "Open one AI tool, like ChatGPT, the AI in CapCut, Runway or Firefly. Let it do that one step.",
   "Check what it made. Fix what's wrong by hand.",
   "Write one line: what did the tool save you? Minutes, effort, or a new idea? That's how you learn to work with AI, not fear it."
  ],
  "howRu": [
   "Выберите один шаг работы, который может сделать машина: субтитры (слова на видео), новый вариант картинки или черновой монтаж.",
   "Откройте один инструмент ИИ, например ChatGPT, ИИ внутри CapCut, Runway или Firefly. Пусть он сделает этот шаг.",
   "Проверьте результат. Исправьте руками то, что не так.",
   "Запишите одну строку: что сэкономил инструмент? Минуты, силы или новую идею? Так вы учитесь работать с AI, а не бояться его."
  ]
 },
 "creator-q8": {
  "how": [
   "Open your PathCheck result. Find the share card (the picture with your result).",
   "Post it in one story or post, where brands in your niche would see it.",
   "Add one line of your own: what you're looking for. For example: “I'm looking for an in-house creator job at a brand.”",
   "That's the whole quest! Brands hire creators they've already seen. Now one more has seen you."
  ],
  "howRu": [
   "Откройте результат PathCheck. Найдите карточку, которой можно поделиться (картинку с результатом).",
   "Опубликуйте её в одной сторис или посте там, где её увидят бренды вашей ниши.",
   "Добавьте свою строку: что вы ищете. Например: «Ищу работу штатным автором видео в бренде».",
   "Это весь квест! Бренды берут авторов, которых уже видели. Теперь вас увидел ещё один."
  ]
 },
 "creator-q9": {
  "how": [
   "Take one video idea — yours, or one from a brand in your niche.",
   "Write 5 different first lines for it. A hook is the first seconds of a video: what makes people stop and stay.",
   "Make each one different. One asks a question. One promises a result. One starts with a surprise. Stuck? Ask AI for ideas, then rewrite in your words.",
   "Read all 5 out loud. Mark the best one. Job posts list writing hooks as a duty, so this is real job practice!"
  ],
  "howRu": [
   "Возьмите одну идею видео: вашу или бренда из вашей ниши.",
   "Напишите для неё 5 разных первых фраз. Хук — первые секунды видео: то, из-за чего зритель остаётся.",
   "Сделайте их разными. Один — вопрос. Один — обещание результата. Один — с сюрприза. Застряли? Попросите идеи у AI и перепишите своими словами.",
   "Прочитайте все 5 вслух. Отметьте лучший. В вакансиях писать хуки — это обязанность, так что это настоящая тренировка работы!"
  ]
 },
 "creator-q10": {
  "how": [
   "Open your posts. Find the one with the best numbers: most views, or most people watching to the end.",
   "Take a screenshot with the numbers showing.",
   "Write two lines on why it worked: what the hook was, and what viewers got from it.",
   "Save both with your portfolio. This shows you can read numbers. Hiring managers look for exactly that."
  ],
  "howRu": [
   "Откройте свои посты. Найдите тот, где лучшие цифры: больше всего просмотров или досмотров до конца.",
   "Сделайте скриншот, чтобы цифры было видно.",
   "Напишите две строки, почему он сработал: какой был хук и что получил зритель.",
   "Сохраните это рядом с портфолио. Так видно, что вы умеете читать цифры. Те, кто нанимает, ищут именно это."
  ]
 }
});
