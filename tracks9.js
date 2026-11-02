/* Career Glitch — tracks wave 6 (AI Product Manager, Nov 1 2026).
   Same shape as tracks8.js. Loaded by app.html after tracks8.js.
   Source: ~/workspace/cg-staging/aipm/spec.md (42-posting scan + BLS
   layer; pilot: ~/workspace/pathcheck-aipm-pilot/). */

/* ================= AI PRODUCT MANAGER =================
   Cluster: AI PRODUCT MANAGER IS A YES. THE TITLE IS NOT THE JOB.
   (Medium). Code word: SHIP. */
PROF_META.aipm = {
  name: 'AI Product Manager',
  kick: 'AI Product Manager',
  code: 'SHIP',
  count: 42,
  srcWhat: 'real AI product manager job posts we opened',
  srcWhatRu: 'настоящих вакансий AI product manager, которые мы открыли'
};

Object.assign(SEATINFO, {
  platpm: {
    prof: 'aipm',
    label: 'Platform / model PM',
    verdict: 'YES',
    conf: 'Medium'
  },
  evalpm: {
    prof: 'aipm',
    label: 'Evals / AI quality PM',
    verdict: 'YES',
    conf: 'Medium'
  },
  featpm: {
    prof: 'aipm',
    label: 'AI feature PM',
    verdict: 'YES',
    conf: 'Medium'
  },
  entpm: {
    prof: 'aipm',
    label: 'Enterprise / AI agents for companies PM',
    verdict: 'YES',
    conf: 'Medium'
  },
  growpm: {
    prof: 'aipm',
    label: 'Growth AI PM',
    verdict: 'YES',
    conf: 'Medium'
  },
  apmpm: {
    prof: 'aipm',
    label: 'APM / beginner AI PM',
    verdict: 'NO',
    conf: 'Medium'
  }
});

Object.assign(DOORS, {
  platpm: 'What to do: this job is a YES if you ran a technical platform or shipped work with AI models. The path helps you prove it step by step.',
  evalpm: 'What to do: this job is a YES if you can build a test set and defend your scores.',
  featpm: 'What to do: this job is a YES if you shipped one AI feature and can score its answers.',
  entpm: 'What to do: this job is a YES if you know how one industry really works and can ship for it.',
  growpm: 'What to do: this job is a YES if you already grow a real product and can read a funnel (how many people sign up, then buy) in numbers.',
  apmpm: 'What to do instead: apply to a program if you fit its rules. Or take a nearby job where your years count. Then switch in your second year.'
});

GRIDINFO.aipm = {
  head: 'Six jobs hide inside one title.',
  short: '“AI product manager” is six different jobs. Platform and evals pay the most. Feature has the most jobs. For beginners, there are only three programs, not open jobs.'
};

TRACKS.aipm = [
  {
    name: 'The gate',
    steps: [
      {
        id: 'apm-g1',
        t: 'Learn how a large language model really works. It\'s the AI behind chatbots. Learn what it does well and how it fails. One failure is hallucination: the AI says false things with full confidence. 26 of 42 job posts we opened ask for work with large language models or Generative AI.',
        src: 'HR checklist · Part 6, item 1 — The gate',
        ru: 'Разберитесь, как на самом деле работает большая языковая модель. Это AI, на котором работают чат-боты. Узнайте, что у неё выходит хорошо и где она ошибается. Например, галлюцинации: модель уверенно говорит неправду. Работу с большими языковыми моделями или генеративным AI просят 26 из 42 вакансий, которые мы открыли.',
        sru: 'HR-чек-лист · Часть 6, пункт 1 — Ворота'
      },
      {
        id: 'apm-g2',
        t: 'Pick your job on purpose. Platform, evals, feature, enterprise, growth, or a beginner program. The six jobs pay $83,000 to $490,000. Each wants a different background. Write down which job your years and proof fit today.',
        src: 'HR checklist · Part 6, item 2 — The gate',
        ru: 'Выберите свою работу сами, а не наугад. Platform, evals, feature, enterprise, growth — или программа для новичков. За шесть работ платят от $83,000 до $490,000. Каждая хочет разный опыт. Запишите, какой работе подходят ваши годы и доказательства сегодня.',
        sru: 'HR-чек-лист · Часть 6, пункт 2 — Ворота'
      },
      {
        id: 'apm-g3',
        t: 'Be honest about your years. 20 of the 26 job posts that name a number want 5+ years in product. Don\'t have them? Take a nearby job to build them. Or join one of the three beginner programs. Don\'t worry — there\'s always a next step.',
        src: 'HR checklist · Part 6, item 3 — The gate',
        ru: 'Честно посчитайте свой опыт. 20 из 26 вакансий, где указаны годы, просят 5+ лет в продукте. Нет такого опыта? Возьмите соседнюю работу, чтобы его набрать. Или идите в одну из трёх программ для новичков. Не переживайте — следующий шаг есть всегда.',
        sru: 'HR-чек-лист · Часть 6, пункт 3 — Ворота'
      },
      {
        id: 'apm-g4',
        t: 'Get technical enough for what job posts check. 17 of 42 job posts want a technical background. Only 2 require a computer science degree. Technical enough means: you read engineers\' documents. You can weigh design choices. You know what the AI can and can\'t do.',
        src: 'HR checklist · Part 6, item 4 — The gate',
        ru: 'Разберитесь в технике настолько, насколько проверяют вакансии. 17 из 42 вакансий хотят технический опыт. Но только 2 требуют диплом по компьютерным наукам. Достаточно, если вы: читаете документы инженеров, понимаете плюсы и минусы решений, знаете, что AI может, а что нет.',
        sru: 'HR-чек-лист · Часть 6, пункт 4 — Ворота'
      }
    ]
  },
  {
    name: 'Proof',
    steps: [
      {
        id: 'apm-p1',
        t: 'Build a set of evals for one AI feature. An eval is a test that scores the AI’s answers. You need test questions, the right answers written down, and a score. Job posts call the answers a “golden set”. In 10 of 42 job posts, evals are the main job.',
        src: 'HR checklist · Part 6, item 5 — Proof',
        ru: 'Соберите набор evals для одной AI-функции. Eval — это тест, который проверяет ответы AI. Нужны тестовые вопросы, заранее записанные правильные ответы и итоговая оценка. В вакансиях ответы называют golden set («золотой набор»). В 10 из 42 вакансий evals — главная работа.',
        sru: 'HR-чек-лист · Часть 6, пункт 5 — Доказательства'
      },
      {
        id: 'apm-p2',
        t: 'Run the evals and read the mistakes yourself. Score 50 real AI answers by hand. Then automate the scoring with LLM-as-judge (a second AI scores the answers). Compare its scores with yours.',
        src: 'HR checklist · Part 6, item 6 — Proof',
        ru: 'Запустите evals и сами прочитайте ошибки. Вручную оцените 50 настоящих ответов AI. Потом автоматизируйте оценку через LLM-as-judge (ответы оценивает второй AI). Сравните его оценки со своими.',
        sru: 'HR-чек-лист · Часть 6, пункт 6 — Доказательства'
      },
      {
        id: 'apm-p3',
        t: 'Ship one AI feature from start to finish, even a small one. 9 of 42 job posts name agents (AI that does tasks on its own). 4 name retrieval (AI looks things up before it answers). A shipped feature with real users beats a demo.',
        src: 'HR checklist · Part 6, item 7 — Proof',
        ru: 'Запустите одну AI-функцию от начала до конца, пусть маленькую. 9 из 42 вакансий упоминают агентов (AI, который сам выполняет задачи). 4 — retrieval (AI сначала ищет в документах, потом отвечает). Запущенная функция с настоящими пользователями лучше демо.',
        sru: 'HR-чек-лист · Часть 6, пункт 7 — Доказательства'
      },
      {
        id: 'apm-p4',
        t: 'Build prototypes with AI coding tools. These tools write code with you. One job post in our scan names them in the job itself: Claude Code, Cursor, Codex. Square wants its beginner product managers to use AI tools from day one.',
        src: 'HR checklist · Part 6, item 8 — Proof',
        ru: 'Делайте прототипы с AI-инструментами для кода. Они пишут код вместе с вами. Одна вакансия в нашем скане прямо их называет: Claude Code, Cursor, Codex. Square ждёт, что её начинающие продакт-менеджеры работают с AI с первого дня.',
        sru: 'HR-чек-лист · Часть 6, пункт 8 — Доказательства'
      },
      {
        id: 'apm-p5',
        t: 'Write a one-page quality guide for your feature. What “good” means. Which mistakes are OK and which aren\'t. The numbers that prove it. 13 of 42 job posts want good judgment about data and metrics. Only 1 names SQL. They want judgment, not dashboards.',
        src: 'HR checklist · Part 6, item 9 — Proof',
        ru: 'Напишите для своей функции страницу о качестве. Что значит «хорошо». Какие ошибки допустимы, а какие нет. Цифры, которые это доказывают. 13 из 42 вакансий хотят умения разбираться в данных и метриках. SQL назван только в 1. Им нужно здравое суждение, а не дашборды.',
        sru: 'HR-чек-лист · Часть 6, пункт 9 — Доказательства'
      },
      {
        id: 'apm-p6',
        t: 'Test with real users once. Watch people use your AI feature. Write down where it let them down. Fix the worst problem. Job posts for big companies call this checking with customers and usage data. That means seeing what real users actually did.',
        src: 'HR checklist · Part 6, item 10 — Proof',
        ru: 'Проверьте функцию на настоящих людях. Посмотрите, как они пользуются вашей AI-функцией. Запишите, где она их подвела. Исправьте самую серьёзную ошибку. В вакансиях больших компаний это называют проверкой с клиентами и данными. То есть смотрите, что люди делали на самом деле.',
        sru: 'HR-чек-лист · Часть 6, пункт 10 — Доказательства'
      }
    ]
  },
  {
    name: 'Get picked',
    steps: [
      {
        id: 'apm-k1',
        t: 'Apply to jobs by their exact names. Platform PM. Evals PM. Agent PM. Plain “AI product manager” jobs get piles of identical resumes.',
        src: 'HR checklist · Part 6, item 11 — Get picked',
        ru: 'Подавайтесь на работы по точному названию. Platform PM. Evals PM. Agent PM. На обычного «AI product manager» приходят горы одинаковых резюме.',
        sru: 'HR-чек-лист · Часть 6, пункт 11 — Выбор тебя'
      },
      {
        id: 'apm-k2',
        t: 'Bring your evals work to the interview. Your test set, your scores, and one mistake you caught before users did. That\'s exactly what evals jobs check.',
        src: 'HR checklist · Part 6, item 12 — Get picked',
        ru: 'Принесите свои evals на собеседование. Ваш тестовый набор, ваши оценки и одну ошибку, которую вы поймали раньше пользователей. Именно это проверяют на работе с evals.',
        sru: 'HR-чек-лист · Часть 6, пункт 12 — Выбор тебя'
      },
      {
        id: 'apm-k3',
        t: 'Know your price from real job posts. The typical middle of the pay range is $204,500. Platform pays up to $490,000. Feature pays $117,000–$300,000. Beginner programs pay $83,000–$150,000. If the pay is low, it\'s not your fault. It\'s the job — so look at a better one.',
        src: 'HR checklist · Part 6, item 13 — Get picked',
        ru: 'Узнайте свою цену по настоящим вакансиям. Обычно в середине — $204,500. Platform платит до $490,000. Feature — $117,000–$300,000. Программы для новичков — $83,000–$150,000. Если платят мало, вы не виноваты. Дело в самой работе — посмотрите на другую.',
        sru: 'HR-чек-лист · Часть 6, пункт 13 — Выбор тебя'
      },
      {
        id: 'apm-k4',
        t: 'Redo this checklist every quarter with fresh job posts. Evals were in 10 of 42 job posts in this scan, and that\'s changing. Things change fast now, so a quick check keeps you ahead.',
        src: 'HR checklist · Part 6, item 14 — Get picked',
        ru: 'Проходите этот чек-лист заново каждый квартал по свежим вакансиям. В этом скане evals были в 10 из 42 вакансий, и это меняется. Всё меняется быстро — короткая проверка поможет быть на шаг впереди.',
        sru: 'HR-чек-лист · Часть 6, пункт 14 — Выбор тебя'
      }
    ]
  }
];

Object.assign(RESUME_TERMS, {
  'apm-g1': ['llm', 'large language model', 'generative ai', 'genai', 'machine learning'],
  'apm-g4': ['api', 'python', 'sql', 'technical', 'engineering'],
  'apm-p1': ['eval', 'evaluation', 'golden set', 'benchmark'],
  'apm-p2': ['llm-as-judge', 'grading', 'evaluation'],
  'apm-p3': ['rag', 'retrieval', 'agent', 'agentic', 'shipped'],
  'apm-p4': ['prototype', 'cursor', 'claude code', 'codex', 'copilot'],
  'apm-p5': ['metrics', 'experimentation', 'a/b testing'],
  'apm-p6': ['user research', 'customer', 'deployment', 'enterprise'],
  'apm-k2': ['eval', 'evaluation', 'portfolio']
});

RADAR.aipm = [
  {
    h: 'This job split in two: evals are now their own job',
    d: 'In 10 of 42 real job posts we opened, evals are the main job. That means building tests that score the AI’s answers. LinkedIn’s Career Agents PM “owns quality end to end”. A strong regular PM could fill the other 32.',
    map: 'Helps with steps apm-p1 and apm-p2: build a set of evals, and run it.',
    hRu: 'Профессия разделилась надвое: evals — теперь отдельная работа',
    dRu: 'В 10 из 42 настоящих вакансий, которые мы открыли, evals — главная работа. То есть нужно делать тесты, которые проверяют ответы AI. PM карьерных агентов в LinkedIn «отвечает за качество от начала до конца». Остальные 32 вакансии подойдут сильному обычному PM.',
    mapRu: 'Помогает с шагами apm-p1 и apm-p2: соберите набор evals и запустите его.'
  },
  {
    h: 'Government statistics don\'t count this job at all',
    d: 'The Bureau of Labor Statistics (US job stats office) has no “product manager” job. We checked its A–Z list. The two closest jobs: people who run computer work get $175,140 and +16%. People who study problems and suggest new systems get $101,860 and +10%.',
    map: 'Helps with step apm-g2: pick your job from real job posts, not from ads.',
    hRu: 'Государство эту работу вообще не считает',
    dRu: 'В Бюро статистики труда США нет профессии «product manager». Мы проверили по их списку от A до Z. Две самые похожие: те, кто руководит компьютерной работой, — $175,140 и +16%. Те, кто разбирает проблемы и предлагает новые системы, — $101,860 и +10%.',
    mapRu: 'Помогает с шагом apm-g2: выбирайте работу по настоящим вакансиям, а не по рекламе.'
  },
  {
    h: 'Beginners have only three programs',
    d: 'Of 42 job posts, only 3 take beginners, and all 3 are programs. Addepar Early Career ($83,000–$130,000). Databricks new-grad APM (needs a CS degree, $133,000–$150,000). Square’s 12-month APM program. 20 of the 26 posts that name years want 5+.',
    map: 'Helps with step apm-g3: check your years before you apply anywhere.',
    hRu: 'Для новичков — только три программы',
    dRu: 'Из 42 вакансий только 3 берут новичков, и все 3 — программы. Addepar для начинающих ($83,000–$130,000). APM для выпускников в Databricks (нужен диплом по компьютерным наукам, $133,000–$150,000). 12-месячная программа APM в Square. 20 из 26 вакансий, где указаны годы, просят 5+ лет.',
    mapRu: 'Помогает с шагом apm-g3: честно посчитайте опыт, прежде чем куда-то подаваться.'
  },
  {
    h: 'This job doesn\'t need SQL anymore',
    d: 'Only 1 of 42 AI PM job posts names SQL. It\'s the one for beginners. That same week, 23 of 42 data scientist job posts named SQL. For senior AI PMs, they want judgment about data: “distinguish a useful metric from a convenient one” (OpenAI).',
    map: 'Helps with step apm-p5: write the quality guide. Numbers support your judgment.',
    hRu: 'Этой работе больше не нужен SQL',
    dRu: 'SQL просит только 1 из 42 вакансий AI PM — та, что для новичков. В ту же неделю SQL просили 23 из 42 вакансий data scientist. От опытных AI PM ждут умения судить о данных: «отличайте полезную метрику от удобной» (OpenAI).',
    mapRu: 'Помогает с шагом apm-p5: напишите страницу о качестве. Цифры нужны, чтобы подкрепить ваше решение.'
  },
  {
    h: 'Job post of the week: the plain title pays more than fancy ones',
    d: 'The best-paid job in the scan has no level word in its title. OpenAI’s Product Manager, Core Models pays $347,000–$490,000. Two other posts have AI in the title but ask for no AI work. Judge the job and the work, never the title.',
    map: 'Helps with step apm-k3: know your price from real job posts.',
    hRu: 'Вакансия недели: простое название платит больше громких',
    dRu: 'Самая высокая зарплата в скане — у вакансии без уровня в названии: Product Manager, Core Models в OpenAI, $347,000–$490,000. Ещё две вакансии пишут AI в названии, но AI-работы не просят. Смотрите на работу, а не на название.',
    mapRu: 'Помогает с шагом apm-k3: узнайте свою цену по настоящим вакансиям.'
  },
  {
    h: 'Nobody here asks you to fine-tune models',
    d: 'Zero of 42 job posts ask an AI PM to fine-tune a model (retrain it on new data). 9 posts name agents, 4 name retrieval, 2 name MCP. Companies want PMs who judge and manage AI models. Not PMs who train them.',
    map: 'Helps with step apm-p3: ship one AI feature on existing models. Track its score.',
    hRu: 'Дообучать модели здесь никто не просит',
    dRu: 'Ноль из 42 вакансий просит AI PM дообучать модель (учить её заново на новых данных). Агентов упоминают 9 вакансий, retrieval — 4, MCP — 2. Компаниям нужны PM, которые оценивают модели и управляют ими. А не те, кто их обучает.',
    mapRu: 'Помогает с шагом apm-p3: запустите одну AI-функцию на готовых моделях. Следите за её оценкой.'
  }
];

/* ===== AI Product Manager — Russian (RU) content layer ===== */
PROF_META_RU.aipm = 'AI-продакт-менеджер';

Object.assign(DOORS_RU, {
  platpm: 'Что делать: это ваша работа, если вы отвечали за техническую платформу или запускали что-то с AI-моделями. Путь поможет это доказать шаг за шагом.',
  evalpm: 'Что делать: это ваша работа, если вы умеете собрать набор тестов и отстоять свои оценки.',
  featpm: 'Что делать: это ваша работа, если вы запустили одну AI-функцию и умеете оценить её ответы.',
  entpm: 'Что делать: это ваша работа, если вы знаете, как устроена одна отрасль, и можете запускать для неё продукты.',
  growpm: 'Что делать: это ваша работа, если вы уже растите настоящий продукт и понимаете воронку (сколько людей пришло, а сколько купило) в цифрах.',
  apmpm: 'Что делать вместо этого: подавайтесь в программу, если подходите под её условия. Или возьмите соседнюю работу, где засчитают ваш опыт. А со второго года переходите.'
});

GRIDINFO_RU.aipm = {
  head: 'Шесть работ прячутся внутри одного названия.',
  short: '«AI product manager» — это шесть разных работ. Больше всего платят в platform и evals. Больше всего вакансий — в feature. Для новичков есть только три программы, а не открытые вакансии.'
};

DOORSTEP_RU.prof.aipm = {
  student: 'Первый шаг, как студент: смотрите на условия программы, а не на название. Три программы для новичков просят диплом по компьютерным наукам, недавний выпуск или 0–2 года любой работы.',
  early: 'Первый шаг, в начале: запустите одну AI-функцию там, где вы работаете, и оцените её ответы. Именно это смотрят на работах для опыта 1–3 года.',
  mid: 'Первый шаг, на среднем уровне: отвечайте за качество одной AI-функции — соберите для неё evals. Evals — тесты, которые проверяют ответы AI. В 10 из 42 вакансий это главная работа.',
  senior: 'Первый шаг, на старшем уровне: смотрите на работу, а не на название. Platform платит до $490,000, а в середине обычно $204,500.'
};
DOORSTEP_RU.seat.platpm = {
  student: 'Первый шаг, как студент: разберитесь, как запускают модели и сколько это стоит. На platform проверяют знание техники, а не сертификаты.',
  early: 'Первый шаг, в начале: возьмите на себя одну вещь, связанную с моделью, там, где вы работаете. Например, API (способ программ общаться друг с другом) или внутренний инструмент. Запишите, сколько он стоит и как ломается.',
  mid: 'Первый шаг, на среднем уровне: отвечайте за то, как проверяют качество одной модели. Это главное доказательство для опытных людей на platform.',
  senior: 'Первый шаг, на старшем уровне: ваша ценность — платформы, за которые вы отвечали. OpenAI платит $347K–$490K за такой опыт.'
};
DOORSTEP_RU.seat.evalpm = {
  student: 'Первый шаг, как студент: сделайте маленький набор тестов для чат-бота, которым пользуетесь. 20 вопросов с записанными правильными ответами. Это и есть ваша будущая работа в миниатюре. Отличное начало! Отличное начало!',
  early: 'Первый шаг, в начале: вручную оцените 50 настоящих ответов AI-функции вашего продукта. Запишите, какие бывают ошибки. Сначала оценка руками, потом автоматика.',
  mid: 'Первый шаг, на среднем уровне: отвечайте за качество одной функции от начала до конца. Тесты, правила оценки и решение о запуске. Это дословно первая строка настоящей вакансии.',
  senior: 'Первый шаг, на старшем уровне: ваша ценность — системы проверки качества, которые вы построили. Здесь платят $151K–$253K за оценки, которые вы можете отстоять.'
};
DOORSTEP_RU.seat.featpm = {
  student: 'Первый шаг, как студент: возьмите приложение, которым пользуетесь каждый день. Напишите, что в нём мог бы делать AI. И как бы вы поняли, что он делает это хорошо.',
  early: 'Первый шаг, в начале: запустите одну AI-функцию, пусть маленькую, в вашем продукте. И сами оцените её ответы.',
  mid: 'Первый шаг, на среднем уровне: сделайте evals для вашей главной AI-функции. Именно это отличает хорошую версию этой работы от ловушки.',
  senior: 'Первый шаг, на старшем уровне: ваша ценность — запущенные функции и их цифры качества. За это в feature платят до $274,800.'
};
DOORSTEP_RU.seat.entpm = {
  student: 'Первый шаг, как студент: изучите, как на самом деле работает одна отрасль — право, медицина или финансы. Здесь сначала проверяют знание отрасли, а потом — AI.',
  early: 'Первый шаг, в начале: посидите с настоящими пользователями одного рабочего процесса. Запишите, где AI-агент его сломает. Правда с места лучше любого демо.',
  mid: 'Первый шаг, на среднем уровне: проведите одно внедрение от начала до конца — пилот, список ошибок, исправления. Клиенты со строгими правилами проверяют своих агентов. Будьте тем, кто ведёт эти проверки.',
  senior: 'Первый шаг, на старшем уровне: ваша ценность — внедрения, которые вы запустили. Harvey платит $213.6K–$300K за такой опыт.'
};
DOORSTEP_RU.seat.growpm = {
  student: 'Первый шаг, как студент: сначала изучите воронки (путь от первого клика до покупки), потом модели. Здесь смотрят на регистрации и конверсию, а не на статьи про AI.',
  early: 'Первый шаг, в начале: проведите один честный A/B-тест (сравните версию A с версией B) на чём-то настоящем. Запишите, какой вывод вы сделали.',
  mid: 'Первый шаг, на среднем уровне: отвечайте за одну цифру роста AI-продукта — активацию или конверсию. Умейте показать эксперименты, которые к ней привели.',
  senior: 'Первый шаг, на старшем уровне: ваша ценность — опыт роста продуктов. Anthropic платит за него $275K–$305K при опыте 6–10 лет.'
};
DOORSTEP_RU.seat.apmpm = {
  student: 'Первый шаг, как студент: выберите программу, под условия которой подходите. Диплом по компьютерным наукам (Databricks), недавний выпуск (Square) или 0–2 года любой работы (Addepar). Готовьтесь именно туда.',
  early: 'Первый шаг, в начале: если программа вам не подходит, возьмите соседнюю работу, где засчитают опыт. Аналитик, данные, поддержка, инженерия. И запустите там одну AI-функцию.',
  mid: 'Первый шаг, на среднем уровне: этот вход уже не для вас. Цельтесь в evals или feature — там как раз смотрят на ваш опыт.',
  senior: 'Первый шаг, на старшем уровне: эта работа уже не для вас. Цельтесь на уровень выше — в нашем скане в середине обычно $204,500.'
};

Object.assign(BIGGOALS_RU, {
  platpm: 'Большая цель: PM платформы, который отвечает за то, что умеет модель. Вакансии платят за это $347K–$490K.',
  evalpm: 'Большая цель: человек, который может доказать, что ответ AI хороший. Эта работа становится всё главнее в профессии. Платят $151K–$253K.',
  featpm: 'Большая цель: PM AI-функций, которые проходят проверку качества. Это самая массовая работа, выросшая из обычной работы с продуктом.',
  entpm: 'Большая цель: PM AI-агентов внутри одной отрасли — право, медицина или финансы. Платят $149K–$300K.',
  growpm: 'Большая цель: PM роста AI-продукта, где доказательство — это эксперименты. Платят $275K–$305K.',
  apmpm: 'Большая цель: ко второму году попасть в программу или на соседнюю работу. Расти честно, ступенька за ступенькой.'
});
BIGGOAL_PROF_RU.aipm = 'Большая цель: работа, которую вы выбрали сами. Платят $117K–$490K — это из настоящих вакансий. Туда ведут не сертификаты, а готовые функции и evals (тесты для AI).';
