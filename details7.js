/* Career Glitch — step details, expansion wave 6 (cybersecurity, Nov 1 2026).
   STEP_DETAILS for cybersecurity (cyb-g1..cyb-k4), verbatim from
   ~/workspace/cg-staging/cybersecurity/spec.md §8; links are the spec's
   verified set (fetched / returned with content on 1 Nov 2026).
   cyb-k3 and cyb-k4 carry no links — the spec found no canonical
   resource for them and ships none rather than a decorative one. */
var STEP_DETAILS = (typeof STEP_DETAILS !== "undefined" && STEP_DETAILS) || {};
Object.assign(STEP_DETAILS, {
  'cyb-g1': {
    what: 'Cybersecurity is five different jobs. In this step you pick one before you spend any money.',
    whatRu: 'Кибербезопасность — это пять разных профессий. На этом шаге вы выбираете одну, пока не потратили деньги.',
    how: ['Slowly read the five types of jobs on your result card.', 'Open the NICE Framework (official list of cyber jobs). Read what each job does all day.', 'Write down the one job you pick, and the one you drop.'],
    howRu: ['Медленно прочитайте пять видов работы на карточке с результатом.', 'Откройте NICE Framework (официальный список киберпрофессий). Прочитайте, чем каждая занимается весь день.', 'Запишите одну работу, которую выбираете, и одну, от которой отказываетесь.'],
    why: 'We looked at 35 job posts. The five job types ask for different certificates, tools and years almost every time.',
    whyRu: 'Мы разобрали 35 вакансий. Пять видов работы почти всегда просят разные сертификаты, инструменты и стаж.',
    links: [
      {
        t: 'NIST NICE Framework — Getting Started',
        u: 'https://www.nist.gov/itl/applied-cybersecurity/nice/nice-framework-resource-center/getting-started'
      },
      {
        t: 'CyberSeek — Supply & Demand Heat Map',
        u: 'https://www.cyberseek.org/heatmap.html'
      }
    ]
  },
  'cyb-g2': {
    what: 'Employers pay for years of IT work, not for plans. Help desk (IT support) is the cheapest real experience you can get.',
    whatRu: 'Работодатели платят за годы работы в IT, а не за планы. Служба поддержки (help desk) — самый дешёвый настоящий опыт.',
    how: ['Count every month you fixed computers, accounts or networks for other people.', 'If it\'s zero, apply to help desk and IT support jobs this week. It\'s real work, not a detour.', 'Write the number down. Job posts care about exactly this number.'],
    howRu: ['Посчитайте все месяцы, когда вы чинили компьютеры, аккаунты или сети для других людей.', 'Если ноль — откликнитесь на работу в поддержке на этой неделе. Это настоящая работа, а не крюк.', 'Запишите это число. Вакансии смотрят именно на него.'],
    why: '90% of hiring managers would consider someone with only past IT work (ISC2, 2025). We found: every path without a degree needs years of work.',
    whyRu: '90% нанимающих менеджеров рассмотрят человека только с опытом в IT (ISC2, 2025). Мы увидели: любой путь без диплома требует лет работы.',
    links: [
      {
        t: 'CyberSeek — Supply & Demand Heat Map',
        u: 'https://www.cyberseek.org/heatmap.html'
      }
    ]
  },
  'cyb-g3': {
    what: 'Security+ is a basic certificate. It shows you know the names of common threats and protections.',
    whatRu: 'Security+ — базовый сертификат. Он показывает, что вы знаете названия главных угроз и способов защиты.',
    how: ['Follow the official CompTIA order: basics first, then Security+ early in your career.', 'Study a little every day. Book the exam date before you feel ready.', 'Write it on your resume exactly like job posts do: "CompTIA Security+".'],
    howRu: ['Идите по официальному порядку CompTIA: сначала основы, потом Security+ в начале карьеры.', 'Занимайтесь понемногу каждый день. Назначьте дату экзамена, пока не чувствуете себя готовыми.', 'Пишите его в резюме точно как в вакансиях: «CompTIA Security+».'],
    why: '8 of our 35 job posts name Security+. That\'s more than any other starter certificate. It always comes with experience, never instead of it.',
    whyRu: 'Security+ упоминают 8 из наших 35 вакансий. Это больше, чем любой другой стартовый сертификат. Но он всегда идёт вместе с опытом, а не вместо него.',
    links: [
      {
        t: 'CompTIA — The Cybersecurity Career Pathway',
        u: 'https://www.comptia.org/en-us/blog/the-comptia-cybersecurity-career-pathway-employable-skills-found-here/'
      }
    ]
  },
  'cyb-g4': {
    what: 'Every security job expects you to know how data moves: addresses, names, logs, Windows and Linux basics.',
    whatRu: 'Любая работа в безопасности ждёт, что вы знаете, как движутся данные: адреса, имена сайтов, журналы, основы Windows и Linux.',
    how: ['Learn what TCP/IP and DNS do in plain words. Keep going until you can explain them to a 12-year-old.', 'Follow one piece of data from a laptop to a website and back. Write down each step.', 'Read one real log file line by line. Mark who did what, and when.'],
    howRu: ['Узнайте простыми словами, что делают TCP/IP и DNS. Учите, пока не сможете объяснить двенадцатилетнему.', 'Проследите путь данных от ноутбука до сайта и обратно. Запишите каждый шаг.', 'Прочитайте один настоящий журнал (log) строку за строкой. Отметьте, кто что сделал и когда.'],
    why: 'Every security job in the NICE Framework is built on this. Hacking-side job posts test it directly (they ask 3+ years of Linux/Windows).',
    whyRu: 'В NICE Framework каждая работа в безопасности стоит на этом знании. Вакансии по взлому проверяют его прямо (просят 3+ года Linux/Windows).',
    links: [
      {
        t: 'NIST NICE Framework — Getting Started',
        u: 'https://www.nist.gov/itl/applied-cybersecurity/nice/nice-framework-resource-center/getting-started'
      },
      {
        t: 'CompTIA — The Cybersecurity Career Pathway',
        u: 'https://www.comptia.org/en-us/blog/the-comptia-cybersecurity-career-pathway-employable-skills-found-here/'
      }
    ]
  },
  'cyb-g5': {
    what: 'A SIEM is a company\'s alarm screen. Every warning lands there. Sorting those warnings is the Tier-1 (starter) job itself.',
    whatRu: 'SIEM — экран тревог компании. Туда приходят все предупреждения. Разбирать их — это и есть работа первого уровня (для новичков).',
    how: ['Start with Splunk if you have no other reason. Job posts name it most.', 'Use the free practice version. Sort sample alerts 20 minutes a day.', 'For each alert, write one line: real attack or noise, and how you know.'],
    howRu: ['Начните со Splunk, если нет другой причины. Его чаще всего просят в вакансиях.', 'Возьмите бесплатную учебную версию. Разбирайте учебные тревоги по 20 минут в день.', 'По каждой тревоге пишите одну строку: настоящая атака или шум, и почему вы так решили.'],
    why: '10 of our 35 job posts name Splunk. 5 name Microsoft Sentinel. No other tools come close for beginners.',
    whyRu: 'Splunk есть в 10 из наших 35 вакансий, Microsoft Sentinel — в 5. Для новичков другие инструменты и близко не стоят.',
    links: [
      {
        t: 'Microsoft — SC-200 Study Guide (Sentinel and Defender)',
        u: 'https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/sc-200'
      },
      {
        t: 'CompTIA — The Cybersecurity Career Pathway',
        u: 'https://www.comptia.org/en-us/blog/the-comptia-cybersecurity-career-pathway-employable-skills-found-here/'
      }
    ]
  },
  'cyb-p1': {
    what: 'Write a log of 20 alerts you sorted yourself: what each one was, and what you decided. A beginner can really make this as proof of work.',
    whatRu: 'Ведите журнал из 20 тревог, которые разобрали сами: что это было и что вы решили. Такое доказательство работы новичок реально может сделать.',
    how: ['In your practice system, take alerts one at a time.', 'Write three lines per alert: what went off, what it really was, what you\'d do.', 'Keep your mistakes in the log. Mistakes are normal, and they make the log believable.'],
    howRu: ['В учебной системе берите тревоги по одной.', 'Пишите по три строки: что сработало, что это было на самом деле, что бы вы сделали.', 'Оставляйте ошибки в журнале. Ошибаться нормально, и так журналу верят больше.'],
    why: 'A security chief (CISO) said it plainly: employers want "traits over knowledge, which can be taught" (ISC2, 2025). A log is how a beginner shows those traits.',
    whyRu: 'Директор по безопасности (CISO) сказал прямо: работодатели ценят «черты выше знаний, которым можно научить» (ISC2, 2025). Журнал помогает новичку показать эти черты.',
    links: [
      {
        t: 'GIAC — Certified Incident Handler (GCIH)',
        u: 'https://www.giac.org/certifications/certified-incident-handler-gcih'
      }
    ]
  },
  'cyb-p2': {
    what: 'Write one small Python script that opens a log file and pulls out the important lines. Python is the coding language job posts ask for most.',
    whatRu: 'Напишите один маленький скрипт на Python, который открывает журнал и достаёт важные строки. Python — язык программирования, который чаще всего просят в вакансиях.',
    how: ['Take any sample log file from your practice system.', 'Write a script that prints only lines with one word you pick, like "failed".', 'Save it with a one-line note on what it does. It\'s proof, not homework.'],
    howRu: ['Возьмите любой учебный журнал из вашей учебной системы.', 'Напишите скрипт, который печатает только строки с одним словом, например «failed».', 'Сохраните его с одной строкой о том, что он делает. Это доказательство, а не домашка.'],
    why: 'Beginner job posts asking for Python went from 22.7% to 46.6% in two years (AKA Security, Oct 2026). For senior jobs, it\'s simply required.',
    whyRu: 'Вакансий для новичков с Python стало больше: с 22,7% до 46,6% за два года (AKA Security, окт. 2026). На старших позициях он просто обязателен.',
    links: [
      {
        t: 'Microsoft — SC-200 Study Guide (hunting and automation)',
        u: 'https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/sc-200'
      }
    ]
  },
  'cyb-p3': {
    what: 'An incident report is a short story of an attack: what happened, what was hit, what you did. Managers read these, not your certificates.',
    whatRu: 'Отчёт об инциденте — короткий рассказ об атаке: что случилось, что пострадало, что вы сделали. Менеджеры читают их, а не ваши сертификаты.',
    how: ['Take three alerts or news hacks you already understand.', 'Write each report in six plain lines: what went off, what it was, what it hit, what you did, what\'s next.', 'Cut every word a non-tech manager would have to look up.'],
    howRu: ['Возьмите три тревоги или новости о взломах, которые вы уже понимаете.', 'Напишите каждый отчёт в шесть простых строк: что сработало, что это было, что пострадало, что вы сделали, что дальше.', 'Уберите каждое слово, которое менеджеру без технического опыта пришлось бы гуглить.'],
    why: 'Writing docs (43%) and reports (32%) are two of the top three tasks beginners get (ISC2, 2025).',
    whyRu: 'Документация (43%) и отчёты (32%) — две из трёх главных задач, которые дают новичкам (ISC2, 2025).',
    links: [
      {
        t: 'GIAC — Certified Incident Handler (GCIH)',
        u: 'https://www.giac.org/certifications/certified-incident-handler-gcih'
      }
    ]
  },
  'cyb-p4': {
    what: 'MITRE ATT&CK is a public list of how real hackers act. Analysts use it to talk to each other about attacks.',
    whatRu: 'MITRE ATT&CK — открытый список того, как действуют настоящие хакеры. Аналитики говорят друг с другом на его языке.',
    how: ['Pick five known attack tricks, like password guessing or phishing.', 'For each, write where it would show up in logs.', 'Keep the five pages. Interviews ask exactly this.'],
    howRu: ['Выберите пять известных приёмов атак, например подбор паролей или фишинг (поддельные письма).', 'По каждому напишите, где он будет виден в журналах.', 'Сохраните пять страниц. На собеседованиях спрашивают именно это.'],
    why: 'Job posts name MITRE directly (Guidehouse, GDIT). It\'s the shared language of people who catch attacks.',
    whyRu: 'Вакансии прямо называют MITRE (Guidehouse, GDIT). Это общий язык тех, кто ловит атаки.',
    links: [
      {
        t: 'NIST NICE Framework — Getting Started',
        u: 'https://www.nist.gov/itl/applied-cybersecurity/nice/nice-framework-resource-center/getting-started'
      },
      {
        t: 'GIAC — Certified Incident Handler (GCIH)',
        u: 'https://www.giac.org/certifications/certified-incident-handler-gcih'
      }
    ]
  },
  'cyb-p5': {
    what: 'Your second certificate should match your job type, not just add to a pile. CySA+ or SC-200 for SOC (attack monitoring). PenTest+ for hacking jobs. AZ-500 or AWS Security for cloud.',
    whatRu: 'Второй сертификат должен подходить к вашей работе, а не просто лежать в коллекции. CySA+ или SC-200 — для SOC (слежение за атаками). PenTest+ — для работы по взлому. AZ-500 или AWS Security — для облака.',
    how: ['Name your job type in one line.', 'Take the one certificate those job posts keep naming.', 'Stop there. Your next dollar goes to experience, not a third certificate.'],
    howRu: ['Назовите вашу работу одной строкой.', 'Возьмите один сертификат, который чаще всего просят эти вакансии.', 'На этом остановитесь. Следующий доллар — на опыт, а не на третий сертификат.'],
    why: 'In all 35 job posts, certificates come with years of experience, never instead of them. So skip collecting them. Experience is what moves you forward.',
    whyRu: 'Во всех 35 вакансиях сертификаты идут вместе с годами опыта, а не вместо них. Так что не собирайте их ради коллекции. Вперёд вас двигает опыт.',
    links: [
      {
        t: 'CompTIA — The Cybersecurity Career Pathway',
        u: 'https://www.comptia.org/en-us/blog/the-comptia-cybersecurity-career-pathway-employable-skills-found-here/'
      },
      {
        t: 'AWS Certified Security – Specialty',
        u: 'https://aws.amazon.com/certification/certified-security-specialty/'
      },
      {
        t: 'Microsoft — SC-200 Study Guide',
        u: 'https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/sc-200'
      }
    ]
  },
  'cyb-k1': {
    what: 'Resume software looks for exact words. Real job posts for your job type are your word list. Nothing else.',
    whatRu: 'Программы отбора резюме ищут точные слова. Ваш список слов — это настоящие вакансии по вашей работе. И больше ничего.',
    how: ['Open 10 real job posts for your job type.', 'List every tool and certificate named in 3 or more of them.', 'Your resume must use those exact words, where they\'re true about you.'],
    howRu: ['Откройте 10 настоящих вакансий по вашей работе.', 'Выпишите все инструменты и сертификаты, которые есть в 3 и более из них.', 'В резюме должны быть эти точные слова — там, где это про вас правда.'],
    why: 'CyberSeek tracks which certificates job posts ask for, by name. A machine matches words first. A person reads later.',
    whyRu: 'CyberSeek считает, какие сертификаты просят вакансии, по названиям. Сначала слова сверяет машина. Человек читает потом.',
    links: [
      {
        t: 'CyberSeek — Supply & Demand Heat Map',
        u: 'https://www.cyberseek.org/heatmap.html'
      }
    ]
  },
  'cyb-k2': {
    what: 'Apply to two kinds of jobs at once: starter IT jobs (help desk, IT support) that build your years, and analyst jobs that might say yes early.',
    whatRu: 'Откликайтесь на два вида работы сразу: простую работу в IT (поддержка), которая даёт стаж, и работу аналитика, где могут сказать «да» раньше.',
    how: ['Each week, send half your applications to starter IT jobs, half to analyst jobs.', 'Count replies for each kind, not feelings.', 'A starter IT job offer is progress, not failure. It\'s what analyst jobs want to see.'],
    howRu: ['Каждую неделю половину откликов — на простую работу в IT, половину — на аналитика.', 'Считайте ответы по каждому виду, а не по ощущениям.', 'Предложение простой работы в IT — шаг вперёд, а не провал. Именно такой опыт хотят видеть в аналитике.'],
    why: '29 job posts say how many years they want. Only one takes zero. Applying only where you\'re not wanted yet wastes a year.',
    whyRu: '29 вакансий пишут, сколько лет опыта нужно. Только одна берёт без опыта. Если откликаться только туда, где вас пока не ждут, можно потерять год.',
    links: [
      {
        t: 'CyberSeek — Supply & Demand Heat Map',
        u: 'https://www.cyberseek.org/heatmap.html'
      }
    ]
  },
  'cyb-k3': {
    what: 'Some security jobs are government contracts. They need US citizenship, a Public Trust check, or a clearance. If you qualify, it\'s a real plus. Say so in one plain line.',
    whatRu: 'Некоторые работы в безопасности — по госконтрактам. Там нужно гражданство США, проверка Public Trust или допуск. Если вы подходите, это большой плюс. Напишите об этом одной простой строкой.',
    how: ['Read the citizenship and clearance lines before applying.', 'If you qualify, put it at the top of your resume in plain words.', 'If you don\'t, skip those job posts fast and spend the time elsewhere.'],
    howRu: ['Читайте строки о гражданстве и допуске до отклика.', 'Если подходите, напишите это вверху резюме простыми словами.', 'Если нет — быстро пропускайте такие вакансии и тратьте время на другие.'],
    why: '9 of 35 job posts (26%) have this rule. These jobs can\'t be moved to offices in cheaper countries.',
    whyRu: '9 из 35 вакансий (26%) это требуют. Такую работу нельзя отдать офисам в дешёвых странах.',
    links: []
  },
  'cyb-k4': {
    what: 'Set a rule in advance: 90 days of applying with no interviews means you picked the wrong target. It doesn\'t mean you need another certificate.',
    whatRu: 'Заранее решите: 90 дней откликов без собеседований значат, что не та цель. А не что нужен ещё один сертификат.',
    how: ['On day 90, count your applications and replies honestly.', 'If there are zero interviews, change one thing: the job type, or add starter IT jobs.', 'Don\'t buy a course as the fix. A course often costs a lot and changes nothing. Change your target instead. You\'ve got this.'],
    howRu: ['На 90-й день честно посчитайте отклики и ответы.', 'Если собеседований ноль, поменяйте одно: вид работы или добавьте простую работу в IT.', 'Не покупайте курс как решение. Курс часто стоит дорого и ничего не меняет. Лучше поменяйте цель. У вас получится.'],
    why: 'AKA Security\'s job post study (Oct 2026) shows the way in for beginners changes every year. A set review date helps you keep up instead of paying to stand still.',
    whyRu: 'Исследование вакансий AKA Security (окт. 2026) показывает: вход для новичков меняется каждый год. Твёрдая дата проверки помогает успевать, а не платить за стояние на месте.',
    links: []
  }
});

/* ===== AI PRODUCT MANAGER — step details (Nov 1 2026, spec §8).
   STEP_DETAILS for apm-g1..apm-k4. Links are the spec's verified set
   (fetched with content on 1 Nov 2026). apm-p4 and apm-p6 carry no
   links — named tools and the user's own product surface are the
   practice; no canonical free resource teaches them. */
Object.assign(STEP_DETAILS, {
  'apm-g1': {
    what: 'Learn what a large language model (the AI behind chatbots) can do, and how it fails. Do it before you promise anyone a feature.',
    whatRu: 'Узнайте, что умеет большая языковая модель (AI внутри чат-ботов) и как она ошибается. Сделайте это до того, как пообещаете кому-то функцию.',
    how: ['For a week, use two or three chatbots on purpose. Ask each the same hard question.', 'Write down every confident lie you catch. That\'s your list of failures.', 'Read one official guide fully. Mark the failure types it names that you also saw.'],
    howRu: ['Неделю специально пользуйтесь двумя-тремя чат-ботами. Задайте каждому один и тот же трудный вопрос.', 'Записывайте каждую уверенную неправду, которую поймаете. Это ваш список ошибок AI.', 'Прочитайте одно официальное руководство целиком. Отметьте виды ошибок, которые там названы и которые вы тоже видели.'],
    why: '26 of 42 job posts mention working with large language models or Generative AI. Knowing how they fail is the part you can\'t fake in an interview.',
    whyRu: '26 из 42 вакансий упоминают работу с большими языковыми моделями или генеративным AI. Знать, как они ошибаются, — то, что не подделать на собеседовании.',
    links: [
      { t: 'OpenAI — Working with evals (official guide)', u: 'https://platform.openai.com/docs/guides/evals' },
      { t: 'Anthropic — Developing test cases (official docs)', u: 'https://docs.anthropic.com/en/docs/test-and-evaluate/develop-tests' }
    ]
  },
  'apm-g2': {
    what: 'Pick which of the six roles fits your past. Trying for all six at once usually gets you none.',
    whatRu: 'Выберите, какая из шести ролей подходит вашему прошлому. Если подаваться на все шесть сразу, обычно не берут никуда.',
    how: ['Slowly read the six roles on your result card.', 'For each role, write one line: what from your past proves you fit.', 'Keep the role with the strongest line. Cross out the rest on paper.'],
    howRu: ['Медленно прочитайте шесть ролей на карточке с результатом.', 'Для каждой роли напишите одну строку: что из вашего прошлого доказывает, что вы подходите.', 'Оставьте роль с самой сильной строкой. Остальные вычеркните на бумаге.'],
    why: 'The six roles pay $83,000 to $490,000. Each wants a different past. Picking the role is your biggest pay decision here.',
    whyRu: 'Шесть ролей платят от $83,000 до $490,000. Каждой нужно своё прошлое. Выбор роли — самое большое решение о зарплате в этой профессии.',
    links: []
  },
  'apm-g3': {
    what: 'Count your product years the way a job post counts them. Then match your plan to that number.',
    whatRu: 'Посчитайте годы работы с продуктом так, как считают вакансии. И подберите план под это число.',
    how: ['Write down every year when product decisions were part of your job.', 'Compare the number with job posts for your role, not with job sites in general.', 'If it\'s too low, pick now: a known starter program, or a nearby job that builds the years.'],
    howRu: ['Запишите каждый год, когда вы принимали решения о продукте на работе.', 'Сравните число с вакансиями вашей роли, а не с сайтами вакансий вообще.', 'Если лет мало, выберите сейчас: известную программу для новичков или похожую работу, которая даст стаж.'],
    why: '20 of the 26 job posts that list years ask for 5+ years. The filter is automatic. It doesn\'t care about hope.',
    whyRu: '20 из 26 вакансий, где указан стаж, просят 5+ лет. Отбор автоматический. Надежду он не учитывает.',
    links: [
      { t: 'BLS — Management Analysts (the adjacent job’s official numbers)', u: 'https://www.bls.gov/ooh/business-and-financial/management-analysts.htm' }
    ]
  },
  'apm-g4': {
    what: 'Learn enough to sit with engineers and judge what a model can\'t do. You don\'t need to become an engineer.',
    whatRu: 'Разберитесь настолько, чтобы говорить с инженерами и понимать, чего модель не может. Становиться инженером не нужно.',
    how: ['Follow one real feature from a user\'s request to the model. Ask an engineer to explain each step.', 'Write down the three trade-offs you saw: cost, speed, accuracy. Use plain words.', 'Repeat until you can guess where the next failure will come from.'],
    howRu: ['Пройдите одну настоящую функцию от запроса пользователя до модели. Пусть инженер объяснит каждый шаг.', 'Запишите три компромисса, которые увидели: цена, скорость, точность. Простыми словами.', 'Повторяйте, пока не начнёте угадывать, где будет следующая ошибка.'],
    why: '17 of 42 job posts want a tech background. Only 2 need a computer science degree. They pay for understanding, not a second diploma.',
    whyRu: '17 из 42 вакансий хотят технический опыт. Только 2 требуют диплом по компьютерным наукам. Платят за понимание, а не за второй диплом.',
    links: [
      { t: 'Kaggle Learn — free hands-on micro-courses', u: 'https://www.kaggle.com/learn' }
    ]
  },
  'apm-p1': {
    what: 'Build a test set that checks one AI feature: questions, right answers, and a score.',
    whatRu: 'Соберите тестовый набор для одной AI-функции: вопросы, правильные ответы и оценка.',
    how: ['Pick one AI feature. Write 20 real questions its users actually ask.', 'Write the right answer next to each. That file is your golden set.', 'Run the feature on your set and score it. Keep the file. It goes in your portfolio.'],
    howRu: ['Выберите одну AI-функцию. Напишите 20 настоящих вопросов, которые задают её пользователи.', 'Рядом с каждым напишите правильный ответ. Этот файл — ваш golden set («золотой набор»).', 'Прогоните функцию на наборе и поставьте оценку. Сохраните файл. Он пойдёт в ваше портфолио.'],
    why: 'In 10 of 42 job posts, testing AI quality is the main job. Humana\'s job post itself names golden datasets and living evals (ongoing tests for AI).',
    whyRu: 'В 10 из 42 вакансий проверка качества AI — главная работа. Вакансия Humana прямо пишет про золотые наборы и живые evals (постоянные тесты для AI).',
    links: [
      { t: 'OpenAI — Working with evals (official guide)', u: 'https://platform.openai.com/docs/guides/evals' },
      { t: 'Anthropic — Developing test cases (official docs)', u: 'https://docs.anthropic.com/en/docs/test-and-evaluate/develop-tests' }
    ]
  },
  'apm-p2': {
    what: 'First grade real answers by hand. Then make a machine grade them, and check it against your grades.',
    whatRu: 'Сначала оцените настоящие ответы вручную. Потом поручите оценку машине и сверьте её с вашими оценками.',
    how: ['Collect 50 real answers from the feature. Grade each one by hand.', 'Sort the failures into types and name them.', 'Set up an auto-grader (a second AI that grades answers). Compare its grades with yours on the same 50.'],
    howRu: ['Соберите 50 настоящих ответов функции. Оцените каждый вручную.', 'Разложите ошибки по видам и дайте им названия.', 'Настройте автоматическую оценку (второй AI, который оценивает ответы). Сравните её оценки с вашими на тех же 50.'],
    why: 'LinkedIn\'s job post for this role says the PM "owns quality end to end". Your hand grades are the only truth to check a machine grader against.',
    whyRu: 'Вакансия LinkedIn на эту роль пишет, что PM «отвечает за качество от начала до конца». Только ваши ручные оценки могут проверить машину.',
    links: [
      { t: 'OpenAI — Working with evals (official guide)', u: 'https://platform.openai.com/docs/guides/evals' }
    ]
  },
  'apm-p3': {
    what: 'Launch one AI feature that real people use. Small is fine. Launching is what counts.',
    whatRu: 'Запустите одну AI-функцию, которой пользуются настоящие люди. Маленькая подойдёт. Главное — запустить.',
    how: ['Pick the smallest feature that fixes a real annoyance for real users.', 'Build it with existing models. Agents and search are just parts of the build, not research projects.', 'Test it with your eval set before users see it. Keep the score.'],
    howRu: ['Выберите самую маленькую функцию, которая решает настоящую проблему пользователей.', 'Соберите её на готовых моделях. Агенты и поиск — просто части сборки, а не научные проекты.', 'Проверьте её вашим набором evals до показа пользователям. Сохраните оценку.'],
    why: '9 of 42 job posts mention agents. Zero ask a PM to retrain a model. They want launched features with scores.',
    whyRu: 'Агентов упоминают 9 из 42 вакансий. Ни одна не просит PM переобучать модель. Им нужны запущенные функции с оценками.',
    links: []
  },
  'apm-p4': {
    what: 'Learn to make quick drafts with AI coding tools (tools that write code with you). Aim for a rough version in an afternoon, not two weeks.',
    whatRu: 'Научитесь делать быстрые черновики с AI-инструментами для кода (они пишут код вместе с вами). Цель — черновая версия за полдня, а не за две недели.',
    how: ['Take one small feature idea. Build a clickable rough version with an AI coding tool.', 'Keep your prompts and fixes. The process is the skill.', 'Show it to one user. Write down what confused them.'],
    howRu: ['Возьмите одну маленькую идею. Соберите кликабельный черновик с AI-инструментом для кода.', 'Сохраняйте запросы и исправления. Сам процесс и есть навык.', 'Покажите черновик одному пользователю. Запишите, что его запутало.'],
    why: 'One job post names Claude Code, Cursor and Codex as part of the job. Square expects new product managers to build drafts with AI tools from day one. There\'s no link for this step. You practice with the tools themselves.',
    whyRu: 'Одна вакансия прямо называет Claude Code, Cursor и Codex частью работы. Square ждёт, что новые менеджеры продукта делают черновики с AI-инструментами с первого дня. Ссылки к этому шагу нет. Практика — это сами инструменты.',
    links: []
  },
  'apm-p5': {
    what: 'Write one page that says what "good" means for your feature. And which failures are not allowed.',
    whatRu: 'Напишите одну страницу: что значит «хорошо» для вашей функции. И какие ошибки недопустимы.',
    how: ['List the failure types from your eval set.', 'Mark each one: OK, or never OK. Put a number on "good" — a score your eval set gives.', 'Show the page to one engineer and one coworker who talks to users. Fix what they don\'t get.'],
    howRu: ['Перечислите виды ошибок из вашего набора evals.', 'Отметьте каждый: допустимо или никогда. Дайте «хорошо» число — оценку, которую выдаёт ваш набор evals.', 'Покажите страницу одному инженеру и одному коллеге, который общается с пользователями. Исправьте то, что им непонятно.'],
    why: '13 of 42 job posts want good judgment about data and numbers. Only 1 names SQL. OpenAI\'s job post asks a PM to "distinguish a useful metric from a convenient one".',
    whyRu: '13 из 42 вакансий хотят умения разбираться в данных и цифрах. SQL упоминает только 1. Вакансия OpenAI просит PM «отличать полезную метрику от удобной».',
    links: []
  },
  'apm-p6': {
    what: 'Watch real people use your AI feature. Fix the worst thing it does to them.',
    whatRu: 'Посмотрите, как настоящие люди пользуются вашей AI-функцией. Исправьте самое плохое, что она с ними делает.',
    how: ['Sit with three real users, or read three real support chats. Write down every failure.', 'Rank failures by harm, not by how easy they are to fix.', 'Fix the top one. Run your eval set again to prove it\'s fixed.'],
    howRu: ['Посидите с тремя настоящими пользователями или прочитайте три настоящих обращения в поддержку. Запишите каждую ошибку.', 'Расставьте ошибки по вреду, а не по тому, как легко их исправить.', 'Исправьте самую вредную. Снова прогоните набор evals, чтобы доказать, что исправлено.'],
    why: 'Big-company job posts want you to check features with real customers and real usage data. Knowing how it works in real life protects you in this role.',
    whyRu: 'Вакансии больших компаний хотят, чтобы вы проверяли функцию на настоящих клиентах и данных о том, как ей пользуются. Знание реальной жизни продукта — ваша защита в этой роли.',
    links: []
  },
  'apm-k1': {
    what: 'Apply to specific roles, not to the general "AI PM" pile.',
    whatRu: 'Подавайтесь на конкретные роли, а не в общую кучу «AI PM».',
    how: ['Rewrite your application for each role: platform, evals, feature, enterprise, growth.', 'Start each application with the proof that role looks for.', 'Track replies by role. The role that replies tells you about your market.'],
    howRu: ['Переписывайте отклик под каждую роль: platform, evals, feature, enterprise, growth.', 'Начинайте каждый отклик с доказательства, которое ищет эта роль.', 'Считайте ответы по ролям. Роль, где отвечают, — подсказка о вашем рынке.'],
    why: 'The same title covers six jobs paying $83,000–$490,000. A general application competes with every general resume. A targeted one can pass the filter.',
    whyRu: 'Одно название скрывает шесть работ с оплатой $83,000–$490,000. Общий отклик соревнуется со всеми общими резюме. Точный отклик может пройти отбор.',
    links: []
  },
  'apm-k2': {
    what: 'Bring your eval work to the interview: your test set, your scores, and one failure you caught first.',
    whatRu: 'Приносите на собеседование вашу работу с evals: тестовый набор, оценки и одну ошибку, которую вы поймали первыми.',
    how: ['Print or open the eval set from step apm-p1 and the grades from apm-p2.', 'Prepare the story of one failure you caught before users did.', 'When asked "how do you know it works", show the file, not an opinion.'],
    howRu: ['Распечатайте или откройте набор evals из шага apm-p1 и оценки из apm-p2.', 'Подготовьте рассказ об одной ошибке, которую вы поймали раньше пользователей.', 'Когда спросят «откуда вы знаете, что это работает», покажите файл, а не мнение.'],
    why: 'In 10 of 42 job posts, evals are the main job. Your files are proof that holds up in any interview.',
    whyRu: 'В 10 из 42 вакансий evals — главная работа. Ваши файлы — доказательство, которое работает на любом собеседовании.',
    links: []
  },
  'apm-k3': {
    what: 'Negotiate using real pay ranges from job posts. If the range is low, it\'s about the role, not about you.',
    whatRu: 'Торгуйтесь, опираясь на реальную оплату из вакансий. Если платят мало, проблема в роли, а не в вас.',
    how: ['Before any call, write down your role\'s pay range from the result card.', 'If an offer is below the range, name the range and the role in your reply.', 'If the range itself is low, switch roles. The job posts show where the same skills pay more.'],
    howRu: ['До любого звонка запишите, сколько платят на вашей роли (с карточки результата).', 'Если оффер ниже, назовите в ответе эту оплату и роль.', 'Если на самой роли платят мало, меняйте роль. Вакансии показывают, где за те же навыки платят больше.'],
    why: 'The middle pay across all job posts is $204,500. Platform jobs pay up to $490,000. Starter programs pay $83,000–$150,000. These are real numbers. Use them.',
    whyRu: 'Средняя оплата по вакансиям — $204,500. Роли platform платят до $490,000. Программы для новичков — $83,000–$150,000. Это настоящие цифры. Пользуйтесь ими.',
    links: [
      { t: 'BLS — Computer and Information Systems Managers (the bracket above this job)', u: 'https://www.bls.gov/ooh/management/computer-and-information-systems-managers.htm' }
    ]
  },
  'apm-k4': {
    what: 'Every quarter, check fresh job posts for your role. Hiring rules here change faster than job titles.',
    whatRu: 'Каждый квартал проверяйте свежие вакансии вашей роли. Требования здесь меняются быстрее, чем названия должностей.',
    how: ['Each quarter, open 10 fresh job posts for your role.', 'Compare what they ask with this path: years, evals, tools.', 'If something changed, change your plan. Write down the date you noticed.'],
    howRu: ['Каждый квартал открывайте 10 свежих вакансий вашей роли.', 'Сравните, что они просят, с этим путём: стаж, evals, инструменты.', 'Если что-то изменилось, меняйте план. Запишите дату, когда заметили.'],
    why: '10 of 42 job posts asked for evals. A year earlier it was a rare skill. We\'ll re-check this result by June 2027. Your own quarterly check keeps you up to date until then.',
    whyRu: 'Evals просили 10 из 42 вакансий. Год назад это был редкий навык. Мы перепроверим этот результат к июню 2027 года. А ваша проверка раз в квартал держит вас в курсе до тех пор.',
    links: []
  }
});
