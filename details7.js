/* Career Glitch — step details, expansion wave 6 (cybersecurity, Nov 1 2026).
   STEP_DETAILS for cybersecurity (cyb-g1..cyb-k4), verbatim from
   ~/workspace/cg-staging/cybersecurity/spec.md §8; links are the spec's
   verified set (fetched / returned with content on 1 Nov 2026).
   cyb-k3 and cyb-k4 carry no links — the spec found no canonical
   resource for them and ships none rather than a decorative one. */
var STEP_DETAILS = (typeof STEP_DETAILS !== "undefined" && STEP_DETAILS) || {};
Object.assign(STEP_DETAILS, {
  'cyb-g1': {
    what: 'Cybersecurity is five different jobs. This step makes you choose one before money leaves your pocket.',
    whatRu: 'Кибербезопасность — это пять разных профессий. Этот шаг заставляет выбрать одну до того, как деньги уйдут из кармана.',
    how: ['Read the five specialties on your verdict card, slowly.', 'Open the NICE Framework role list and read what each role does all day.', 'Write down the one specialty you choose, and the one you are dropping.'],
    howRu: ['Медленно прочитайте пять специальностей на карточке вердикта.', 'Откройте список ролей NICE Framework — официального каталога киберпрофессий — и прочитайте, чем каждая занимается весь день.', 'Запишите одну специальность, которую выбираете, и одну, которую отбрасываете.'],
    why: 'In our scan of 35 postings, the five families name different certificates, tools and years in almost every posting.',
    whyRu: 'В нашем разборе 35 вакансий пять семейств называют разные сертификаты, инструменты и годы опыта почти в каждой вакансии.',
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
    what: 'Employers pay for years of IT work, not for intentions. Help desk and IT support time is the cheapest real experience you can get.',
    whatRu: 'Работодатели платят за годы работы в IT, а не за намерения. Время в службе поддержки — самый дешёвый настоящий опыт, который можно получить.',
    how: ['Count every month you have fixed computers, accounts or networks for other people.', 'If the count is zero, apply to help desk and IT support roles this week — they are jobs, not a detour.', 'Keep the count written down. It is the number postings trade in.'],
    howRu: ['Посчитайте каждый месяц, когда вы чинили компьютеры, аккаунты или сети для других людей.', 'Если счёт равен нулю, откликнитесь на вакансии службы поддержки на этой неделе — это работа, а не объезд.', 'Держите число записанным. Именно этим числом торгуются в вакансиях.'],
    why: '90% of hiring managers would consider a candidate with only prior IT experience (ISC2, 2025). In our scan, every no-degree route is paid for in years.',
    whyRu: '90% менеджеров по найму рассмотрели бы кандидата, у которого есть только прошлый опыт в IT (ISC2, 2025). В нашем разборе каждый путь без диплома оплачивается годами.',
    links: [
      {
        t: 'CyberSeek — Supply & Demand Heat Map',
        u: 'https://www.cyberseek.org/heatmap.html'
      }
    ]
  },
  'cyb-g3': {
    what: 'Security+ is the basic-words certificate: it proves you know what the common threats, locks and alarms are called.',
    whatRu: 'Security+ — сертификат базовой грамотности: он доказывает, что вы знаете, как называются основные угрозы, замки и сигнализации.',
    how: ['Follow the official CompTIA pathway order: basics first, Security+ as the early-career step.', 'Study in short daily sessions and book the exam date before you feel ready.', 'Write the certificate on your resume exactly as postings write it: "CompTIA Security+".'],
    howRu: ['Идите по официальному порядку CompTIA: сначала основы, Security+ — шаг начала карьеры.', 'Занимайтесь короткими ежедневными сессиями и назначьте дату экзамена до того, как почувствуете готовность.', 'Пишите сертификат в резюме точно как в вакансиях: «CompTIA Security+».'],
    why: 'Security+ is named in 8 of our 35 postings — more than any other entry certificate — always next to experience, never instead of it.',
    whyRu: 'Security+ назван в 8 из наших 35 вакансий — чаще любого другого стартового сертификата — всегда рядом с опытом, никогда вместо него.',
    links: [
      {
        t: 'CompTIA — The Cybersecurity Career Pathway',
        u: 'https://www.comptia.org/en-us/blog/the-comptia-cybersecurity-career-pathway-employable-skills-found-here/'
      }
    ]
  },
  'cyb-g4': {
    what: 'Every security job assumes you know how data moves: addresses, name lookups, logs, Windows and Linux basics.',
    whatRu: 'Каждая работа в безопасности предполагает, что вы знаете, как движутся данные: адреса, поиск имён, журналы, основы Windows и Linux.',
    how: ['Learn what TCP/IP and DNS do, in plain words, until you can explain both to a 12-year-old.', 'Follow one piece of data from a laptop to a website and back, writing each step.', 'Read one real log file line by line and mark who did what, and when.'],
    howRu: ['Выучите, что делают TCP/IP и DNS, простыми словами, пока не сможете объяснить оба двенадцатилетнему.', 'Проследите один кусок данных от ноутбука до сайта и обратно, записывая каждый шаг.', 'Прочитайте один настоящий файл журнала строка за строкой и отметьте, кто что сделал и когда.'],
    why: 'The NICE Framework builds every security role on this knowledge; our scan\'s offensive postings test it directly (3+ years of Linux/Windows asked).',
    whyRu: 'NICE Framework строит каждую роль безопасности на этом знании; наступательные вакансии нашего разбора проверяют его прямо (просят 3+ года Linux/Windows).',
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
    what: 'A SIEM is the alarm desk of a company: one screen where every warning lands. Sorting those warnings is the Tier-1 job itself.',
    whatRu: 'SIEM (система сбора оповещений) — пульт сигнализации компании: один экран, куда падают все предупреждения. Разбор этих предупреждений и есть работа первого уровня.',
    how: ['Pick Splunk first if you have no reason to pick otherwise — it is named most in postings.', 'Use the free practice version and sort sample alerts for 20 minutes a day.', 'For every alert, write one line: real attack or noise, and how you know.'],
    howRu: ['Выбирайте Splunk первым, если нет причины выбрать другое, — его называют в вакансиях чаще всего.', 'Используйте бесплатную учебную версию и разбирайте учебные оповещения по 20 минут в день.', 'По каждому оповещению пишите одну строку: настоящая атака или шум, и откуда вы знаете.'],
    why: 'Splunk is named in 10 of our 35 postings and Microsoft Sentinel in 5. No other tools come close at the door.',
    whyRu: 'Splunk назван в 10 из наших 35 вакансий, Microsoft Sentinel — в 5. Никакие другие инструменты на входе и близко не стоят.',
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
    what: 'A written log of 20 alerts you sorted yourself: what each alert was, and what you decided. This is a work sample a beginner can actually own.',
    whatRu: 'Письменный журнал из 20 оповещений, которые вы разобрали сами: чем было каждое и что вы решили. Это образец работы, который новичок реально может иметь.',
    how: ['In your practice system, take alerts one at a time.', 'Write three lines per alert: what fired, what it really was, what you would do.', 'Keep the misses in the log. A log with no misses is not believed.'],
    howRu: ['В учебной системе берите оповещения по одному.', 'Пишите три строки на оповещение: что сработало, чем это было на самом деле, что бы вы сделали.', 'Оставляйте ошибки в журнале. Журналу без ошибок не верят.'],
    why: 'A CISO\'s hiring rule, in his own words: employers favor "traits over knowledge, which can be taught" (ISC2, 2025). A log is how a beginner shows the trait.',
    whyRu: 'Правило найма одного директора по безопасности, его словами: работодатели ценят «черты выше знаний, которым можно научить» (ISC2, 2025). Журнал — способ новичка показать черту.',
    links: [
      {
        t: 'GIAC — Certified Incident Handler (GCIH)',
        u: 'https://www.giac.org/certifications/certified-incident-handler-gcih'
      }
    ]
  },
  'cyb-p2': {
    what: 'One small script in Python — the coding language postings ask for most — that opens a log file and pulls out the lines that matter.',
    whatRu: 'Один маленький скрипт на Python — языке программирования, который вакансии просят чаще всего, — который открывает файл журнала и вытаскивает важные строки.',
    how: ['Take any sample log file from your practice system.', 'Write a script that prints only the lines with one word you choose, like "failed".', 'Save the script with a one-line note on what it does. It is proof, not homework.'],
    howRu: ['Возьмите любой учебный файл журнала из вашей учебной системы.', 'Напишите скрипт, который печатает только строки с одним выбранным вами словом, например «failed».', 'Сохраните скрипт с одной строкой пояснения, что он делает. Это доказательство, а не домашнее задание.'],
    why: 'Entry postings mentioning Python rose from 22.7% to 46.6% in two years (AKA Security, Oct 2026). At senior level in our scan it is simply required.',
    whyRu: 'Вакансии начального уровня с упоминанием Python выросли с 22,7% до 46,6% за два года (AKA Security, окт. 2026). На старшем уровне в нашем разборе он просто требуется.',
    links: [
      {
        t: 'Microsoft — SC-200 Study Guide (hunting and automation)',
        u: 'https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/sc-200'
      }
    ]
  },
  'cyb-p3': {
    what: 'An incident report is a short story of an attack: what happened, what was touched, what you did. Managers read these, not your certificates.',
    whatRu: 'Отчёт об инциденте — короткий рассказ об атаке: что произошло, что было затронуто, что вы сделали. Менеджеры читают их, а не ваши сертификаты.',
    how: ['Take three alerts or news hacks you already understand.', 'Write each report in six plain lines: what fired, what it was, what it touched, what you did, what happens next.', 'Cut every word a non-technical manager would have to look up.'],
    howRu: ['Возьмите три оповещения или новости о взломах, которые вы уже понимаете.', 'Напишите каждый отчёт в шесть простых строк: что сработало, чем это было, что затронуло, что вы сделали, что дальше.', 'Вырежьте каждое слово, которое нетехническому менеджеру пришлось бы искать.'],
    why: 'Documentation (43%) and reporting (32%) are two of the top three tasks employers give entry-level hires (ISC2, 2025).',
    whyRu: 'Документация (43%) и отчётность (32%) — две из трёх главных задач, которые работодатели дают новичкам (ISC2, 2025).',
    links: [
      {
        t: 'GIAC — Certified Incident Handler (GCIH)',
        u: 'https://www.giac.org/certifications/certified-incident-handler-gcih'
      }
    ]
  },
  'cyb-p4': {
    what: 'MITRE ATT&CK is the public catalog of how real attackers behave. Mapping an attack to it is how analysts talk to each other.',
    whatRu: 'MITRE ATT&CK — публичный каталог того, как ведут себя настоящие атакующие. Привязка атаки к нему — то, как аналитики говорят друг с другом.',
    how: ['Pick five known attack moves, like password spraying or phishing.', 'For each, write where it would show up in logs.', 'Keep the five pages. Interviewers ask exactly this.'],
    howRu: ['Выберите пять известных приёмов атак, например подбор паролей или фишинг — поддельные письма.', 'По каждому напишите, где он проявится в журналах.', 'Сохраните пять страниц. На собеседованиях спрашивают именно это.'],
    why: 'Postings in our scan name MITRE by name (Guidehouse, GDIT). It is the shared language of the sorting and hunting floors.',
    whyRu: 'Вакансии нашего разбора называют MITRE по имени (Guidehouse, GDIT). Это общий язык этажей разбора и охоты.',
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
    what: 'The second certificate is a specialty key, not a collection piece: CySA+ or SC-200 for SOC work, PenTest+ toward offensive work, AZ-500 or AWS Security for cloud work.',
    whatRu: 'Второй сертификат — ключ к специальности, а не предмет коллекции: CySA+ или SC-200 для работы в SOC (мониторинге атак), PenTest+ — к наступательной работе, AZ-500 или AWS Security — к облачной.',
    how: ['Name your specialty in one line.', 'Take the one certificate that specialty\'s postings repeat.', 'Stop there. The next dollar goes to experience, not to a third certificate.'],
    howRu: ['Назовите вашу специальность одной строкой.', 'Возьмите один сертификат, который повторяют вакансии этой специальности.', 'Остановитесь на этом. Следующий доллар идёт на опыт, а не на третий сертификат.'],
    why: 'In all 35 postings, certificates appear next to years of experience, never instead of them. Certificate-collecting is the trap this map names.',
    whyRu: 'Во всех 35 вакансиях сертификаты стоят рядом с годами опыта, никогда вместо них. Собирательство сертификатов — ловушка, которую называет эта карта.',
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
    what: 'Resume software searches for exact words. Live postings for your specialty are the word list — nothing else is.',
    whatRu: 'Программы отбора резюме ищут точные слова. Живые вакансии вашей специальности — и есть список слов, ничто другое.',
    how: ['Open 10 live postings for your specialty.', 'List every tool and certificate named in 3 or more of them.', 'Your resume must carry those exact words — where they are true of you.'],
    howRu: ['Откройте 10 живых вакансий вашей специальности.', 'Выпишите каждый инструмент и сертификат, названный в 3 и более из них.', 'В вашем резюме должны стоять эти точные слова — там, где они про вас правда.'],
    why: 'CyberSeek tracks which certificates postings request, by name. The door is a word-matching machine before it is a human.',
    whyRu: 'CyberSeek отслеживает, какие сертификаты просят вакансии, по именам. Дверь — это машина сравнения слов, прежде чем она станет человеком.',
    links: [
      {
        t: 'CyberSeek — Supply & Demand Heat Map',
        u: 'https://www.cyberseek.org/heatmap.html'
      }
    ]
  },
  'cyb-k2': {
    what: 'Two application piles at once: bridge jobs (help desk, IT support) that build your years, and analyst jobs that might say yes early.',
    whatRu: 'Две стопки откликов одновременно: переходные работы (служба поддержки), которые строят ваши годы, и аналитические вакансии, которые могут сказать «да» раньше.',
    how: ['Split each week: half the applications to bridge jobs, half to analyst jobs.', 'Track replies per pile, not feelings.', 'A bridge job offer is progress, not defeat — it is the currency the analyst door accepts.'],
    howRu: ['Делите каждую неделю: половина откликов — на переходные работы, половина — на аналитические.', 'Считайте ответы по стопкам, а не по ощущениям.', 'Предложение переходной работы — прогресс, а не поражение: это валюта, которую принимает аналитическая дверь.'],
    why: 'Of 29 postings in our scan that state years, one accepts zero. Applying only where you are not yet wanted is how a year disappears.',
    whyRu: 'Из 29 вакансий нашего разбора, указывающих годы, одна принимает ноль лет. Откликаться только туда, где вас пока не ждут, — способ потерять год.',
    links: [
      {
        t: 'CyberSeek — Supply & Demand Heat Map',
        u: 'https://www.cyberseek.org/heatmap.html'
      }
    ]
  },
  'cyb-k3': {
    what: 'Some security jobs sit inside government contracts and need US citizenship, a Public Trust check, or a clearance. If you qualify, it is a real advantage — say it in one plain line.',
    whatRu: 'Часть работ в безопасности находится внутри госконтрактов и требует гражданства США, проверки Public Trust или допуска. Если вы подходите, это настоящее преимущество — напишите об этом одной прямой строкой.',
    how: ['Read the citizenship and clearance lines in postings before applying.', 'If you qualify, put it at the top of the resume in plain words.', 'If you do not qualify, skip those postings fast and spend the time elsewhere.'],
    howRu: ['Читайте строки о гражданстве и допусках в вакансиях до отклика.', 'Если вы подходите, поставьте это в верх резюме простыми словами.', 'Если не подходите, пропускайте такие вакансии быстро и тратьте время на другие.'],
    why: '9 of 35 postings in our scan (26%) carry this requirement. Those jobs cannot be filled from offshore centers.',
    whyRu: '9 из 35 вакансий нашего разбора (26%) несут это требование. Эти работы нельзя заполнить из зарубежных центров.',
    links: []
  },
  'cyb-k4': {
    what: 'A decision rule, set in advance: 90 days of applications with no interviews means the target is wrong, not that you need another certificate.',
    whatRu: 'Правило решения, поставленное заранее: 90 дней откликов без собеседований означают, что неверна цель, а не что нужен ещё один сертификат.',
    how: ['Count your applications and replies honestly at day 90.', 'If interviews are zero, change one thing: specialty target, or add the bridge pile.', 'Do not buy a course as the change. Courses are the most expensive way to change nothing.'],
    howRu: ['Честно посчитайте отклики и ответы на 90-й день.', 'Если собеседований ноль, измените одно: цель-специальность или добавьте переходную стопку.', 'Не покупайте курс как изменение. Курсы — самый дорогой способ ничего не изменить.'],
    why: 'AKA Security\'s postings study (Oct 2026) shows the beginner door moving every year. A fixed review date is how you move with it instead of paying to stand still.',
    whyRu: 'Исследование вакансий AKA Security (окт. 2026) показывает, что дверь для новичков движется каждый год. Фиксированная дата пересмотра — способ двигаться вместе с ней, а не платить за стояние на месте.',
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
    what: 'Learn what a large language model can do, and how it fails — before you promise anyone a feature.',
    whatRu: 'Узнайте, что большая языковая модель умеет, и как она ошибается, — до того, как пообещаете кому-то функцию.',
    how: ['Use two or three chatbots for a week, on purpose: ask each the same hard question.', 'Write down every confident falsehood you catch. That list is your failure catalog.', 'Read one official guide end to end and mark the failure kinds it names that you also saw.'],
    howRu: ['Пользуйтесь двумя-тремя чат-ботами неделю, специально: задайте каждому один и тот же трудный вопрос.', 'Записывайте каждую уверенную неправду, которую поймаете. Этот список — ваш каталог ошибок.', 'Прочитайте одно официальное руководство от начала до конца и отметьте виды ошибок, которые оно называет и которые видели вы.'],
    why: 'Work with large language models or Generative AI is named in 26 of 42 postings. Fluency in failure kinds is the part that cannot be faked in an interview.',
    whyRu: 'Работа с большими языковыми моделями или генеративным AI названа в 26 из 42 вакансий. Свобода в видах ошибок — то, что нельзя подделать на собеседовании.',
    links: [
      { t: 'OpenAI — Working with evals (official guide)', u: 'https://platform.openai.com/docs/guides/evals' },
      { t: 'Anthropic — Developing test cases (official docs)', u: 'https://docs.anthropic.com/en/docs/test-and-evaluate/develop-tests' }
    ]
  },
  'apm-g2': {
    what: 'Pick which of the six seats your past points at. Applying to all six is applying to none.',
    whatRu: 'Выберите, на какое из шести мест указывает ваше прошлое. Подаваться на все шесть — значит подаваться ни на одно.',
    how: ['Read the six seats on your verdict card, slowly.', 'For each seat, write one line: what proof from your past fits it.', 'Keep the seat with the strongest line. Drop the rest, on paper.'],
    howRu: ['Медленно прочитайте шесть мест на вашей карточке вердикта.', 'Для каждого места напишите одну строку: какое доказательство из вашего прошлого ему подходит.', 'Оставьте место с самой сильной строкой. Остальные отбросьте — на бумаге.'],
    why: 'The six seats post $83,000 to $490,000 and screen for different pasts. The seat choice is the largest pay decision in this profession.',
    whyRu: 'Шесть мест публикуют от $83,000 до $490,000 и проверяют разное прошлое. Выбор места — самое большое решение о зарплате в этой профессии.',
    links: []
  },
  'apm-g3': {
    what: 'Count your product years the way a posting counts them, and match the plan to the count.',
    whatRu: 'Посчитайте ваши продуктовые годы так, как их считает вакансия, и подберите план под это число.',
    how: ['Write down every year where product decisions were part of your job.', 'Compare the number with your seat’s postings, not with job boards in general.', 'If the number is short, choose now: a named entry program, or an adjacent job that builds the years.'],
    howRu: ['Запишите каждый год, где продуктовые решения были частью вашей работы.', 'Сравните число с вакансиями вашего места, а не с досками вакансий вообще.', 'Если числа не хватает, выберите сейчас: названную программу входа или соседнюю работу, которая строит годы.'],
    why: '20 of the 26 postings that state a years number ask for 5+ years. The screen is mechanical — it does not read hope.',
    whyRu: '20 из 26 вакансий, которые называют число лет, просят 5+ лет. Экран механический — надежду он не читает.',
    links: [
      { t: 'BLS — Management Analysts (the adjacent job’s official numbers)', u: 'https://www.bls.gov/ooh/business-and-financial/management-analysts.htm' }
    ]
  },
  'apm-g4': {
    what: 'Become fluent enough to sit with engineers and judge a model’s limits — without becoming an engineer.',
    whatRu: 'Станьте достаточно грамотным, чтобы сидеть с инженерами и судить пределы модели, — не становясь инженером.',
    how: ['Follow one real feature from a user request to the model call, with an engineer explaining each step.', 'Write the three trade-offs you saw — cost, speed, accuracy — in plain words.', 'Repeat until you can predict where the next failure will come from.'],
    howRu: ['Пройдите одну настоящую функцию от запроса пользователя до вызова модели, с инженером, который объяснит каждый шаг.', 'Запишите три компромисса, которые вы увидели, — стоимость, скорость, точность — простыми словами.', 'Повторяйте, пока не сможете предсказать, откуда придёт следующая ошибка.'],
    why: '17 of 42 postings ask for a technical background; only 2 demand a computer-science degree. The market buys fluency, not a second diploma.',
    whyRu: '17 из 42 вакансий просят техническое прошлое; только 2 требуют диплом по компьютерным наукам. Рынок покупает грамотность, а не второй диплом.',
    links: [
      { t: 'Kaggle Learn — free hands-on micro-courses', u: 'https://www.kaggle.com/learn' }
    ]
  },
  'apm-p1': {
    what: 'Build the test set that grades one AI feature: questions, right answers, and a score.',
    whatRu: 'Соберите тестовый набор, который оценивает одну AI-функцию: вопросы, правильные ответы и балл.',
    how: ['Pick one AI feature and write 20 real questions its users actually ask.', 'Write the right answer next to each — that file is the golden set.', 'Run the feature on your set and score it. Keep the file; it is your portfolio piece.'],
    howRu: ['Выберите одну AI-функцию и напишите 20 настоящих вопросов, которые её пользователи правда задают.', 'Напишите правильный ответ рядом с каждым — этот файл и есть golden set, «золотой набор».', 'Прогоните функцию на вашем наборе и поставьте балл. Сохраните файл; это элемент вашего портфолио.'],
    why: 'Evaluation work is the core job in 10 of 42 postings. Humana’s posting names golden datasets and living evals in its own words.',
    whyRu: 'Работа с оценкой качества — ядро работы в 10 из 42 вакансий. Вакансия Humana называет золотые наборы данных и живые evals своими собственными словами.',
    links: [
      { t: 'OpenAI — Working with evals (official guide)', u: 'https://platform.openai.com/docs/guides/evals' },
      { t: 'Anthropic — Developing test cases (official docs)', u: 'https://docs.anthropic.com/en/docs/test-and-evaluate/develop-tests' }
    ]
  },
  'apm-p2': {
    what: 'Grade real answers by hand first, then automate the grading and check the machine against yourself.',
    whatRu: 'Сначала оцените настоящие ответы вручную, потом автоматизируйте оценку и сверьте машину с собой.',
    how: ['Collect 50 real answers from the feature and grade each one by hand.', 'Group the failures into kinds and name them.', 'Set up an automated grader — a second model grading answers — and compare its grades with yours on the same 50.'],
    howRu: ['Соберите 50 настоящих ответов функции и оцените каждый вручную.', 'Сгруппируйте ошибки по видам и назовите их.', 'Настройте автоматическую оценку — вторую модель, которая оценивает ответы, — и сравните её оценки с вашими на тех же 50.'],
    why: 'LinkedIn’s posting for this seat says the PM “owns quality end to end”. Hand grades are the only ground truth an automated grader can be checked against.',
    whyRu: 'Вакансия LinkedIn на это место говорит, что PM «владеет качеством от начала до конца». Ручные оценки — единственная правда, с которой можно сверить автоматическую оценку.',
    links: [
      { t: 'OpenAI — Working with evals (official guide)', u: 'https://platform.openai.com/docs/guides/evals' }
    ]
  },
  'apm-p3': {
    what: 'Ship one AI feature that real users touch — small is fine, shipped is the point.',
    whatRu: 'Отправьте одну AI-функцию, которой пользуются настоящие люди, — маленькая годится, отправленная — суть.',
    how: ['Pick the smallest feature that solves a real annoyance for real users.', 'Build it with the models that exist — agents and retrieval are features of the build, not research projects.', 'Put your eval set on it before users see it, and keep its score.'],
    howRu: ['Выберите самую маленькую функцию, которая решает настоящую боль настоящих пользователей.', 'Соберите её на существующих моделях — агенты и поиск данных перед ответом это элементы сборки, а не исследовательские проекты.', 'Поставьте на неё ваш набор evals до пользователей и сохраните её балл.'],
    why: 'Agents are named in 9 of 42 postings and zero postings ask a PM to fine-tune a model. The market wants shipped features with scores attached.',
    whyRu: 'Агенты названы в 9 из 42 вакансий, и ноль вакансий просит PM дообучать модель. Рынку нужны отправленные функции с приложенными баллами.',
    links: []
  },
  'apm-p4': {
    what: 'Learn to prototype with AI coding tools — the tools that write code with you — until a rough version takes an afternoon, not a sprint.',
    whatRu: 'Научитесь делать прототипы AI-инструментами для кода — инструментами, которые пишут код вместе с вами, — пока черновая версия не станет делом одного дня, а не спринта.',
    how: ['Take one small feature idea and build a clickable rough version with an AI coding tool.', 'Keep the prompts and the fixes — the process is the skill.', 'Show the prototype to one user and write what confused them.'],
    howRu: ['Возьмите одну маленькую идею функции и соберите кликабельную черновую версию AI-инструментом для кода.', 'Сохраняйте запросы и исправления — процесс и есть навык.', 'Покажите прототип одному пользователю и запишите, что его смутило.'],
    why: 'One posting in our scan names Claude Code, Cursor and Codex inside the job itself, and Square expects its beginner product managers to prototype with AI tools from day one. No link ships with this step — the tools themselves are the practice.',
    whyRu: 'Одна вакансия в нашем скане называет Claude Code, Cursor и Codex внутри самой работы, а Square ждёт, что её начинающие менеджеры продукта делают прототипы AI-инструментами с первого дня. Ссылка к этому шагу не прилагается — практика и есть сами инструменты.',
    links: []
  },
  'apm-p5': {
    what: 'Write the one page that says what “good” means for your feature — and which failures are not allowed.',
    whatRu: 'Напишите одну страницу, которая говорит, что значит «хорошо» для вашей функции, — и какие ошибки не разрешены.',
    how: ['List the failure kinds from your eval set.', 'Mark each: acceptable, or never acceptable. Put a number on “good” — a score your eval set produces.', 'Share the page with one engineer and one user-facing colleague. Fix what they cannot understand.'],
    howRu: ['Перечислите виды ошибок из вашего набора evals.', 'Отметьте каждый: допустим или никогда не допустим. Поставьте число слову «хорошо» — балл, который даёт ваш набор evals.', 'Покажите страницу одному инженеру и одному коллеге, который работает с пользователями. Исправьте то, что они не поняли.'],
    why: 'Judgment about data and metrics is named in 13 of 42 postings; SQL is named in 1. OpenAI’s posting asks a PM to “distinguish a useful metric from a convenient one”.',
    whyRu: 'Суждение о данных и метриках названо в 13 из 42 вакансий; SQL назван в 1. Вакансия OpenAI просит PM «отличать полезную метрику от удобной».',
    links: []
  },
  'apm-p6': {
    what: 'Watch real users use your AI feature, and fix the worst thing it does to them.',
    whatRu: 'Посмотрите, как настоящие пользователи пользуются вашей AI-функцией, и исправьте худшее, что она с ними делает.',
    how: ['Sit with three real users — or read three real support threads — and write down every failure.', 'Rank the failures by harm, not by how easy the fix is.', 'Fix the top one and re-run your eval set to prove the fix.'],
    howRu: ['Посидите с тремя настоящими пользователями — или прочитайте три настоящих треда поддержки — и запишите каждую ошибку.', 'Ранжируйте ошибки по вреду, а не по лёгкости исправления.', 'Исправьте первую и прогоните набор evals заново, чтобы доказать исправление.'],
    why: 'Enterprise postings ask for validation with customers and usage data — checking the feature against real users and what they actually did. Deployment truth is this seat’s moat.',
    whyRu: 'Корпоративные вакансии просят проверку с клиентами и данными использования — проверку функции на настоящих людях и их реальных действиях. Правда внедрения — ров этого места.',
    links: []
  },
  'apm-k1': {
    what: 'Apply to named seats, not to the generic AI PM pool.',
    whatRu: 'Подавайтесь на названные места, а не в общий пул AI PM.',
    how: ['Rewrite your applications per seat: platform, evals, feature, enterprise, growth.', 'Lead each application with the proof that seat screens for.', 'Track replies per seat. The seat with replies is data about your market.'],
    howRu: ['Перепишите отклики под каждое место: platform, evals, feature, enterprise, growth.', 'Начинайте каждый отклик с доказательства, которое проверяет это место.', 'Отслеживайте ответы по местам. Место с ответами — данные о вашем рынке.'],
    why: 'The same words cover six jobs posting $83,000–$490,000. A generic application competes with every generic resume; a seat application competes with a screen it can pass.',
    whyRu: 'Одни и те же слова покрывают шесть работ с публикациями $83,000–$490,000. Общий отклик конкурирует с каждым общим резюме; отклик на место конкурирует с экраном, который он может пройти.',
    links: []
  },
  'apm-k2': {
    what: 'Bring the eval portfolio into the room: your test set, your scores, and one failure you caught first.',
    whatRu: 'Приносите портфолио evals в комнату: ваш тестовый набор, ваши баллы и одну ошибку, которую вы поймали первым.',
    how: ['Print or tab-open the eval set from step apm-p1 and the grades from apm-p2.', 'Prepare the story of one failure you caught before users did.', 'When asked “how do you know it works”, show the file, not an opinion.'],
    howRu: ['Распечатайте или откройте вкладкой набор evals из шага apm-p1 и оценки из apm-p2.', 'Подготовьте историю одной ошибки, которую вы поймали до пользователей.', 'Когда спросят «как вы знаете, что это работает», показывайте файл, а не мнение.'],
    why: 'In 10 of 42 postings evals are the core job. The portfolio is the only proof that survives the interview room unchanged.',
    whyRu: 'В 10 из 42 вакансий evals — ядро работы. Портфолио — единственное доказательство, которое проходит комнату собеседования без изменений.',
    links: []
  },
  'apm-k3': {
    what: 'Negotiate from the scan’s bands, and treat a low band as a seat problem, not a you problem.',
    whatRu: 'Ведите переговоры от вилок скана и считайте низкую вилку проблемой места, а не вашей проблемой.',
    how: ['Write your seat’s band from the verdict card before any call.', 'If an offer lands below the band, name the band and the seat in the reply.', 'If the band itself is low, change seats — the scan shows where the same skills post higher.'],
    howRu: ['Запишите вилку вашего места с карточки вердикта до любого звонка.', 'Если оффер ниже вилки, назовите вилку и место в ответе.', 'Если сама вилка низкая, меняйте место — скан показывает, где те же навыки публикуют выше.'],
    why: 'The median band midpoint across the scan is $204,500; platform posts to $490,000; the entry programs pay $83,000–$150,000. Bands are printed facts — use them.',
    whyRu: 'Середина медианной вилки по скану — $204,500; platform публикует до $490,000; программы входа платят $83,000–$150,000. Вилки — напечатанные факты: пользуйтесь ими.',
    links: [
      { t: 'BLS — Computer and Information Systems Managers (the bracket above this job)', u: 'https://www.bls.gov/ooh/management/computer-and-information-systems-managers.htm' }
    ]
  },
  'apm-k4': {
    what: 'Re-check your seat’s screen every quarter against fresh postings — this profession’s door moves faster than its titles.',
    whatRu: 'Перепроверяйте экран вашего места каждый квартал по свежим вакансиям — дверь этой профессии движется быстрее её названий.',
    how: ['Each quarter, open 10 fresh postings in your seat.', 'Compare the screens with the ones in this path: years, evals, tools named.', 'If a screen changed, change the plan — and note the date you saw it move.'],
    howRu: ['Каждый квартал открывайте 10 свежих вакансий вашего места.', 'Сравнивайте экраны с теми, что в этом пути: годы, evals, названные инструменты.', 'Если экран изменился, меняйте план — и записывайте дату, когда вы увидели движение.'],
    why: 'Evals sat in 10 of 42 postings in this scan, up from a niche skill a year earlier. We re-check this verdict by June 2027; your own quarterly check keeps the path honest between our scans.',
    whyRu: 'Evals стояли в 10 из 42 вакансий этого скана — годом раньше это был нишевый навык. Мы перепроверяем этот вердикт к июню 2027 года; ваша собственная квартальная проверка держит путь честным между нашими сканами.',
    links: []
  }
});
