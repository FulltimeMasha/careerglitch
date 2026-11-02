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
  srcWhat: 'live AI product manager postings we opened',
  srcWhatRu: 'живых вакансий AI product manager, которые мы открыли'
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
    label: 'Enterprise / agent deployment PM',
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
    label: 'APM / entry AI PM',
    verdict: 'NO',
    conf: 'Medium'
  }
});

Object.assign(DOORS, {
  platpm: 'What to do: you are in a YES seat if you have owned a technical platform or shipped model-facing work — the path sequences that proof.',
  evalpm: 'What to do: you are in a YES seat if you can build a test set and defend a grade.',
  featpm: 'What to do: you are in a YES seat if you shipped one AI feature and can grade its answers.',
  entpm: 'What to do: you are in a YES seat if you know one industry’s real work and can ship into it.',
  growpm: 'What to do: you are in a YES seat if you already run growth on a real product and can read a funnel in numbers.',
  apmpm: 'What to do instead: apply to a program if you fit its screen — or take an adjacent seat whose years convert, and enter from year two.'
});

GRIDINFO.aipm = {
  head: 'Six jobs hide inside one title.',
  short: '“AI product manager” is six different jobs — platform and evals pay the top, feature is the biggest seat, and the beginner version is three programs, not an open market.'
};

TRACKS.aipm = [
  {
    name: 'The gate',
    steps: [
      {
        id: 'apm-g1',
        t: 'Learn how a large language model actually behaves. A large language model is the AI system behind chatbots. Learn what it is good at, and the ways it fails — including hallucination, which means the model states false things with full confidence. Work with large language models or Generative AI is named in 26 of 42 postings we opened.',
        src: 'HR checklist · Part 6, item 1 — The gate',
        ru: 'Разберитесь, как большая языковая модель ведёт себя на самом деле. Большая языковая модель — это AI-система, которая стоит за чат-ботами. Узнайте, что у неё получается хорошо, и как она ошибается — включая галлюцинации: так называют случаи, когда модель уверенно говорит неправду. Работа с большими языковыми моделями или генеративным AI названа в 26 из 42 вакансий, которые мы открыли.',
        sru: 'HR-чек-лист · Часть 6, пункт 1 — Ворота'
      },
      {
        id: 'apm-g2',
        t: 'Pick your seat on purpose. Platform, evals, feature, enterprise, growth, or the program door. The six seats post $83,000 to $490,000 and screen for different pasts. Write down which seat your years and your proof point at today.',
        src: 'HR checklist · Part 6, item 2 — The gate',
        ru: 'Выберите своё место осознанно. Platform, evals, feature, enterprise, growth — или дверь программ. Шесть мест публикуют от $83,000 до $490,000 и проверяют разное прошлое. Запишите, на какое место указывают ваши годы и ваши доказательства сегодня.',
        sru: 'HR-чек-лист · Часть 6, пункт 2 — Ворота'
      },
      {
        id: 'apm-g3',
        t: 'Do the years check honestly. 20 of the 26 postings that state a number ask for 5+ years of product work. If you do not have the years, your plan is an adjacent job that builds them, or one of the three named entry programs — not applications into a wall.',
        src: 'HR checklist · Part 6, item 3 — The gate',
        ru: 'Проведите проверку лет честно. 20 из 26 вакансий, которые называют число, просят 5+ лет продуктовой работы. Если у вас нет этих лет, ваш план — соседняя работа, которая их строит, или одна из трёх названных программ входа, а не отклики в стену.',
        sru: 'HR-чек-лист · Часть 6, пункт 3 — Ворота'
      },
      {
        id: 'apm-g4',
        t: 'Build technical fluency to the level the postings screen for. 17 of 42 postings ask for a technical background, but only 2 demand a computer-science degree. Fluency means: you can read the engineers’ documents, judge a design trade-off, and say what the model can and cannot do.',
        src: 'HR checklist · Part 6, item 4 — The gate',
        ru: 'Поднимите техническую грамотность до уровня, который проверяют вакансии. 17 из 42 вакансий просят техническое прошлое, но только 2 требуют диплом по компьютерным наукам. Грамотность значит: вы читаете документы инженеров, оцениваете выбор в дизайне системы и говорите, что модель может, а что нет.',
        sru: 'HR-чек-лист · Часть 6, пункт 4 — Ворота'
      }
    ]
  },
  {
    name: 'Proof',
    steps: [
      {
        id: 'apm-p1',
        t: 'Build an eval set for one AI feature. An eval is a test that grades the AI’s answers. Your set needs test questions, the right answers written down — a golden set, in the postings’ own words — and a score. Evaluation work is the core job in 10 of 42 postings.',
        src: 'HR checklist · Part 6, item 5 — Proof',
        ru: 'Соберите набор evals для одной AI-функции. Eval — это тест, который оценивает ответы AI. Вашему набору нужны тестовые вопросы, правильные ответы, записанные заранее, — golden set, «золотой набор», словами самих вакансий — и итоговая оценка. Работа с оценкой качества — ядро работы в 10 из 42 вакансий.',
        sru: 'HR-чек-лист · Часть 6, пункт 5 — Доказательства'
      },
      {
        id: 'apm-p2',
        t: 'Run the evals and read the failures yourself. Grade 50 real model answers by hand. Then automate the grading — an LLM-as-judge setup means a second model grades the answers — and check the automated grades against your own hand grades.',
        src: 'HR checklist · Part 6, item 6 — Proof',
        ru: 'Прогоните evals и прочитайте ошибки сами. Оцените 50 настоящих ответов модели вручную. Потом автоматизируйте оценку — LLM-as-judge значит, что ответы оценивает вторая модель, — и сверьте автоматические оценки с вашими ручными.',
        sru: 'HR-чек-лист · Часть 6, пункт 6 — Доказательства'
      },
      {
        id: 'apm-p3',
        t: 'Ship one AI feature end to end, however small. Agents — software that does tasks on its own — are named in 9 of 42 postings. Retrieval, the AI looking things up before it answers, is named in 4. A shipped feature with real users beats a demo.',
        src: 'HR checklist · Part 6, item 7 — Proof',
        ru: 'Отправьте одну AI-функцию от начала до конца, пусть маленькую. Агенты — программы, которые сами выполняют задачи, — названы в 9 из 42 вакансий. Поиск данных перед ответом (retrieval — когда AI сначала смотрит в документы, потом отвечает) назван в 4. Отправленная функция с настоящими пользователями бьёт демо.',
        sru: 'HR-чек-лист · Часть 6, пункт 7 — Доказательства'
      },
      {
        id: 'apm-p4',
        t: 'Prototype with AI coding tools. Tools that write code with you. One posting in our scan names them inside the job itself — Claude Code, Cursor, Codex. Square expects its beginner product managers to prototype with AI tools from day one.',
        src: 'HR checklist · Part 6, item 8 — Proof',
        ru: 'Делайте прототипы AI-инструментами для кода — инструментами, которые пишут код вместе с вами. Одна вакансия в нашем скане называет их внутри самой работы — Claude Code, Cursor, Codex. Square ждёт, что её начинающие менеджеры продукта делают прототипы AI-инструментами с первого дня.',
        sru: 'HR-чек-лист · Часть 6, пункт 8 — Доказательства'
      },
      {
        id: 'apm-p5',
        t: 'Write the quality page for your feature. One page: what “good” means, which failures are acceptable, which are not, and the numbers that prove it. Judgment about data and metrics is named in 13 of 42 postings. SQL is named in 1. The ask is judgment, not dashboards.',
        src: 'HR checklist · Part 6, item 9 — Proof',
        ru: 'Напишите страницу качества вашей функции. Одна страница: что значит «хорошо», какие ошибки допустимы, какие нет, и числа, которые это доказывают. Суждение о данных и метриках названо в 13 из 42 вакансий. SQL назван в 1. Запрос — на суждение, а не на дашборды.',
        sru: 'HR-чек-лист · Часть 6, пункт 9 — Доказательства'
      },
      {
        id: 'apm-p6',
        t: 'Run one real-user loop. Watch people use your AI feature. Write down where it failed them. Fix the worst failure. Enterprise postings call this validation with customers and usage data — checking the feature against real users and what they actually did.',
        src: 'HR checklist · Part 6, item 10 — Proof',
        ru: 'Проведите один круг с настоящими пользователями. Посмотрите, как люди пользуются вашей AI-функцией. Запишите, где она их подвела. Исправьте худшую ошибку. Корпоративные вакансии называют это проверкой с клиентами и данными использования — проверкой функции на настоящих людях и их реальных действиях.',
        sru: 'HR-чек-лист · Часть 6, пункт 10 — Доказательства'
      }
    ]
  },
  {
    name: 'Get picked',
    steps: [
      {
        id: 'apm-k1',
        t: 'Apply to seats by name. Platform PM. Evals PM. Agent PM. The plain “AI product manager” pool is where the queue of identical resumes forms.',
        src: 'HR checklist · Part 6, item 11 — Get picked',
        ru: 'Подавайтесь на места по именам. Platform PM. Evals PM. Agent PM. Обычный пул «AI product manager» — это где образуется очередь одинаковых резюме.',
        sru: 'HR-чек-лист · Часть 6, пункт 11 — Выбор тебя'
      },
      {
        id: 'apm-k2',
        t: 'Bring the eval portfolio to the interview. Your test set, your scores, and one failure you caught before users did. That file is what the evals seat screens for.',
        src: 'HR checklist · Part 6, item 12 — Get picked',
        ru: 'Приносите портфолио evals на собеседование. Ваш тестовый набор, ваши оценки и одну ошибку, которую вы поймали до пользователей. Этот файл — то, что проверяет место evals.',
        sru: 'HR-чек-лист · Часть 6, пункт 12 — Выбор тебя'
      },
      {
        id: 'apm-k3',
        t: 'Price yourself from the scan. The median pay band midpoint is $204,500. Platform posts to $490,000. Feature posts $117,000–$300,000. The entry programs pay $83,000–$150,000. If your seat’s band is low, the seat is the problem, not your negotiation.',
        src: 'HR checklist · Part 6, item 13 — Get picked',
        ru: 'Оценивайте себя по скану. Середина медианной вилки зарплат — $204,500. Platform публикует до $490,000. Feature публикует $117,000–$300,000. Программы входа платят $83,000–$150,000. Если вилка вашего места низкая, место — проблема, а не ваши переговоры.',
        sru: 'HR-чек-лист · Часть 6, пункт 13 — Выбор тебя'
      },
      {
        id: 'apm-k4',
        t: 'Re-run this checklist every quarter, against fresh postings. Evals sat in 10 of 42 postings in this scan, and the line is moving. Your seat’s screen now changes that fast.',
        src: 'HR checklist · Part 6, item 14 — Get picked',
        ru: 'Перепроверяйте этот чек-лист каждый квартал по свежим вакансиям. Evals стояли в 10 из 42 вакансий этого скана, и строка движется. Экран вашего места теперь меняется так быстро.',
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
    h: 'The profession split in two: evals are a job now',
    d: 'In 10 of 42 real postings we opened, evaluation — building the tests that grade the AI’s answers — is the core of the job. LinkedIn’s Career Agents PM “owns quality end to end”. The other 32 postings can be filled by a strong conventional PM.',
    map: 'Moves steps apm-p1 and apm-p2 — build an eval set, and run it.',
    hRu: 'Профессия разделилась надвое: evals — теперь отдельная работа',
    dRu: 'В 10 из 42 настоящих вакансий, которые мы открыли, оценка качества — построение тестов, которые оценивают ответы AI, — это ядро работы. PM карьерных агентов в LinkedIn «владеет качеством от начала до конца». Остальные 32 вакансии может занять сильный обычный PM.',
    mapRu: 'Двигает шаги apm-p1 и apm-p2 — соберите набор evals и прогоните его.'
  },
  {
    h: 'The official statistics cannot see this job at all',
    d: 'The Bureau of Labor Statistics has no “product manager” occupation — checked on its A–Z index. The two nearest official occupations bracket the job: $175,140 and +16% for the people who direct computer work; $101,860 and +10% for the people paid to analyse problems and recommend new systems.',
    map: 'Moves step apm-g2 — pick your seat from the scan, not from a brochure.',
    hRu: 'Официальная статистика вообще не видит эту работу',
    dRu: 'У Бюро статистики труда нет профессии «product manager» — проверено по его индексу от A до Z. Две ближайшие официальные профессии обрамляют эту работу: $175,140 и +16% у тех, кто руководит компьютерной работой; $101,860 и +10% у тех, кому платят за анализ проблем и рекомендации новых систем.',
    mapRu: 'Двигает шаг apm-g2 — выбирайте место по скану, а не по брошюре.'
  },
  {
    h: 'The junior door is three named programs',
    d: 'Of 42 postings, exactly 3 take beginners, and all 3 are programs: Addepar Early Career ($83,000–$130,000), Databricks new-grad APM (a CS degree required, $133,000–$150,000), Square’s 12-month APM rotation. 20 of the 26 postings that state years ask for 5+.',
    map: 'Moves step apm-g3 — do the years check before you apply anywhere.',
    hRu: 'Дверь для новичков — три названные программы',
    dRu: 'Из 42 вакансий ровно 3 берут новичков, и все 3 — программы: ранняя карьера в Addepar ($83,000–$130,000), APM для выпускников в Databricks (нужен диплом по компьютерным наукам, $133,000–$150,000), 12-месячная ротация APM в Square. 20 из 26 вакансий с числом просят 5+ лет.',
    mapRu: 'Двигает шаг apm-g3 — проведите проверку лет до любых откликов.'
  },
  {
    h: 'SQL has left this job',
    d: 'SQL is named in 1 of 42 AI PM postings — in the entry-level one. The same week, the data-scientist scan named SQL in 23 of its 42 postings. At this job’s senior level the data ask is judgment: “distinguish a useful metric from a convenient one” (OpenAI).',
    map: 'Moves step apm-p5 — write the quality page; the numbers serve the judgment.',
    hRu: 'SQL ушёл из этой работы',
    dRu: 'SQL назван в 1 из 42 вакансий AI PM — в той, что для новичков. В ту же неделю скан data scientist назвал SQL в 23 из своих 42 вакансий. На старшем уровне этой работы запрос по данным — суждение: «отличайте полезную метрику от удобной» (OpenAI).',
    mapRu: 'Двигает шаг apm-p5 — напишите страницу качества; числа служат суждению.'
  },
  {
    h: 'Posting of the week: the plain title out-pays the fancy ones',
    d: 'The highest band in the scan belongs to a posting with no level word in its title: OpenAI’s Product Manager, Core Models, at $347,000–$490,000. Two other postings wear an AI title and ask for no AI work in their text. Price the seat and the work, never the title.',
    map: 'Moves step apm-k3 — price yourself from the scan.',
    hRu: 'Вакансия недели: обычное название платит больше громких',
    dRu: 'Самая высокая вилка скана — у вакансии без слова уровня в названии: Product Manager, Core Models в OpenAI, $347,000–$490,000. Две другие вакансии носят AI в названии и не просят никакой AI-работы в своём тексте. Оценивайте место и работу, никогда — название.',
    mapRu: 'Двигает шаг apm-k3 — оценивайте себя по скану.'
  },
  {
    h: 'Fine-tuning is not in the building',
    d: 'Zero of 42 postings ask an AI PM to fine-tune a model — to retrain it on new data. Agents are named in 9 postings, retrieval in 4, MCP in 2. The market wants PMs who judge and orchestrate models, not PMs who train them.',
    map: 'Moves step apm-p3 — ship one AI feature with the models that exist, and keep its score.',
    hRu: 'Дообучения моделей здесь нет',
    dRu: 'Ноль из 42 вакансий просит AI PM дообучать модель — переобучать её на новых данных. Агенты названы в 9 вакансиях, поиск данных перед ответом — в 4, MCP — в 2. Рынку нужны PM, которые судят модели и управляют ими, а не PM, которые их обучают.',
    mapRu: 'Двигает шаг apm-p3 — отправьте одну AI-функцию на существующих моделях и сохраните её оценку.'
  }
];

/* ===== AI Product Manager — Russian (RU) content layer ===== */
PROF_META_RU.aipm = 'AI-продакт-менеджер';

Object.assign(DOORS_RU, {
  platpm: 'Что делать: это ваше место, если вы владели технической платформой или отправляли работу, связанную с моделями, — путь выстраивает это доказательство.',
  evalpm: 'Что делать: это ваше место, если вы можете собрать тестовый набор и защитить оценку.',
  featpm: 'Что делать: это ваше место, если вы отправили одну AI-функцию и можете оценить её ответы.',
  entpm: 'Что делать: это ваше место, если вы знаете настоящую работу одной отрасли и можете внедрять в неё.',
  growpm: 'Что делать: это ваше место, если вы уже ведёте рост настоящего продукта и читаете воронку в числах.',
  apmpm: 'Что делать вместо этого: подавайтесь в программу, если проходите её экран, — или берите соседнее место, чьи годы засчитываются, и входите со второго года.'
});

GRIDINFO_RU.aipm = {
  head: 'Шесть работ прячутся внутри одного названия.',
  short: '«AI product manager» — это шесть разных работ. Platform и evals платят вершину, feature — самое большое место, а версия для новичков — это три программы, а не открытый рынок.'
};

DOORSTEP_RU.prof.aipm = {
  student: 'Первый шаг, как студент: цельтесь в экран программы, а не в название, — три двери для новичков просят диплом по компьютерным наукам, сроки выпускника или 0–2 года любой работы.',
  early: 'Первый шаг, в начале: отправьте одну AI-функцию там, где вы есть, и оцените её ответы — это доказательство читают двери на 1–3 года.',
  mid: 'Первый шаг, на среднем уровне: владейте качеством одной AI-функции — соберите её набор evals. Evals — тесты, которые оценивают ответы AI; они ядро работы в 10 из 42 вакансий.',
  senior: 'Первый шаг, на старшем уровне: оценивайте место, а не название, — platform публикует до $490,000, а середина медианной вилки — $204,500.'
};
DOORSTEP_RU.seat.platpm = {
  student: 'Первый шаг, как студент: разберитесь, как модели обслуживают и сколько стоят, — места platform проверяют техническую глубину, а не сертификаты.',
  early: 'Первый шаг, в начале: владейте одной поверхностью, связанной с моделью, там, где вы есть, — API (способ программ общаться между собой) или внутренний инструмент — и запишите её стоимость и виды её ошибок.',
  mid: 'Первый шаг, на среднем уровне: владейте рамкой оценки качества одной поверхности модели. Это старшее доказательство места platform.',
  senior: 'Первый шаг, на старшем уровне: оценивайте платформы, которыми владели, — OpenAI публикует $347K–$490K за суждение этого места.'
};
DOORSTEP_RU.seat.evalpm = {
  student: 'Первый шаг, как студент: соберите крошечный тестовый набор для чат-бота, которым пользуетесь, — 20 вопросов с записанными правильными ответами. Этот файл — это место в миниатюре.',
  early: 'Первый шаг, в начале: оцените 50 настоящих ответов AI-функции вашего продукта вручную и запишите виды ошибок. Ручные оценки идут до автоматических.',
  mid: 'Первый шаг, на среднем уровне: владейте качеством одной функции от начала до конца — набор тестов, правила оценки и решение об отправке. Это предложение — первая строка настоящей вакансии.',
  senior: 'Первый шаг, на старшем уровне: оценивайте системы качества, которые вы построили, — это место публикует $151K–$253K за защищённые оценки.'
};
DOORSTEP_RU.seat.featpm = {
  student: 'Первый шаг, как студент: возьмите одно приложение, которым пользуетесь каждый день, и напишите, какие его функции мог бы делать AI, — и как бы вы поняли, что он делает их хорошо.',
  early: 'Первый шаг, в начале: отправьте одну AI-функцию, пусть маленькую, в вашем текущем продукте — и оцените её ответы сами.',
  mid: 'Первый шаг, на среднем уровне: поставьте набор evals на вашу главную AI-функцию. Это граница между версией «да» этого места и его ловушкой.',
  senior: 'Первый шаг, на старшем уровне: оценивайте отправленные функции и их числа качества — места feature публикуют до $274,800 именно за это.'
};
DOORSTEP_RU.seat.entpm = {
  student: 'Первый шаг, как студент: выучите настоящую бумажную работу одной отрасли — право, здоровье или финансы. Это место проверяет отрасль раньше модели.',
  early: 'Первый шаг, в начале: сядьте с настоящими пользователями одного рабочего процесса и запишите, где агент его сломает. Правда внедрения бьёт демо.',
  mid: 'Первый шаг, на среднем уровне: проведите одно внедрение от начала до конца — пилот, список ошибок, исправление. Клиенты под правилами оценивают своих агентов; будьте тем, кто держит оценки.',
  senior: 'Первый шаг, на старшем уровне: оценивайте внедрения, которые вы отправили, — Harvey публикует $213.6K–$300K за послужной список этого места.'
};
DOORSTEP_RU.seat.growpm = {
  student: 'Первый шаг, как студент: выучите воронки раньше моделей — это место читает регистрации и конверсию, а не статьи о моделях.',
  early: 'Первый шаг, в начале: проведите один честный A/B-тест — сравнение версии A с версией B — на чём-то настоящем и запишите вывод, который вы из него сделали.',
  mid: 'Первый шаг, на среднем уровне: владейте одним числом роста AI-продукта — активацией или конверсией — и умейте показать эксперименты за ним.',
  senior: 'Первый шаг, на старшем уровне: оценивайте послужной список роста — Anthropic публикует $275K–$305K на 6–10 годах за него.'
};
DOORSTEP_RU.seat.apmpm = {
  student: 'Первый шаг, как студент: выберите, какой экран программы вы можете пройти, — диплом по компьютерным наукам (Databricks), сроки выпускника (Square) или 0–2 года любой работы (Addepar), — и цельтесь в этот экран.',
  early: 'Первый шаг, в начале: если программа вам не открыта, берите соседнее место, чьи годы засчитываются, — аналитик, данные, поддержка, инженерия — и отправьте внутри него одну AI-функцию.',
  mid: 'Первый шаг, на среднем уровне: эта дверь позади вас — цельтесь в место evals или feature; ваши годы — экран, который они правда читают.',
  senior: 'Первый шаг, на старшем уровне: это место позади вас. Оценивайте место над ним — середина медианной вилки в нашем скане $204,500.'
};

Object.assign(BIGGOALS_RU, {
  platpm: 'Большая цель: PM платформы, который владеет тем, что умеет модель, — вакансии платят за это $347K–$490K.',
  evalpm: 'Большая цель: человек, который может доказать, что ответ AI хороший, — место, которое ест профессию, $151K–$253K.',
  featpm: 'Большая цель: PM AI-функций, чьи функции выдерживают оценку, — самое большое место, выросшее из обычной продуктовой работы.',
  entpm: 'Большая цель: PM агентов внутри настоящей работы одной отрасли — право, здоровье или финансы, $149K–$300K.',
  growpm: 'Большая цель: PM роста на AI-продукте, где эксперименты — доказательство, — $275K–$305K.',
  apmpm: 'Большая цель: внутри программы или соседнего места ко второму году — лестница, поднятая честно.'
});
BIGGOAL_PROF_RU.aipm = 'Большая цель: место, выбранное осознанно, по настоящим вилкам скана ($117K–$490K), достигнутое evals и отправленными функциями, а не сертификатами.';
