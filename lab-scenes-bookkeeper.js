// Career Glitch Lab — Bookkeeper simulator scenes (pre-generated once, cached).
// Each scene: one real first-month task, bound to one Watchdog checklist item.
// `proof` is the by-the-numbers line the graduate record shows for a passed scene.
window.LAB_SCENES_BOOKKEEPER = [
  {
    "id": "bk-01-cleanup-plan",
    "order": 1,
    "checklist_id": "cleanup_sop_system",
    "title": "First look: a new client's messy books",
    "from_name": "Marcus",
    "from_role": "Marcus, your manager at the firm",
    "setup": "We just signed BrightPath Cleaning, a cleaning company with 9 employees. Their QBO file is a mess: nobody has reconciled anything since December, so January through March are all open. I counted 214 bank-feed transactions still unreviewed. A previous freelancer double-entered expenses — 38 duplicate entries totaling $6,214. The owner also ran personal spending through the business account: $1,870 across 11 transactions (family groceries, a streaming subscription, a personal car repair). The owner, Dana, wants clean books before she applies for a business loan in May. Before you touch a single transaction, I need your cleanup plan.",
    "pressure": "Dana just emailed: her loan officer moved the application up — she needs the document request list from us by end of day today, not Friday. Your plan has to be sendable today.",
    "task": "Write a cleanup plan document: (1) scope — exactly what is wrong, with the numbers above; (2) your step-by-step sequence, in the order you would actually work; (3) a week-by-week timeline to finish before the May loan application; (4) a document request list for Dana (statements, receipts, access) that can be sent today.",
    "answer_hint": "Structured document with 4 headed sections, 300-450 words. No transaction edits yet — this is the plan only.",
    "rubric": [
      "Scope names all four problems with exact figures: 3 unreconciled months (Jan-Mar), 214 unreviewed transactions, 38 duplicates totaling $6,214, $1,870 personal spending in 11 transactions",
      "Sequence puts reconciliation and duplicate removal before any reporting or P&L work",
      "Personal expenses are routed to owner draw / due-from-owner, not deleted or left in business expenses",
      "Timeline fits before the May loan application and works week by week, not 'ASAP'",
      "Document request list is specific (bank and card statements Jan-Mar, receipts for the 11 personal-flagged items, QBO admin access) and sendable today"
    ],
    "artifact": "Cleanup plan & SOP — BrightPath Cleaning onboarding",
    "proof": "Triaged 214 unreviewed bank-feed transactions and found 38 duplicate entries totalling $6,214; wrote the cleanup plan and SOP."
  },
  {
    "id": "bk-02-qbo-bank-rules",
    "order": 2,
    "checklist_id": "qbo_xero_proficiency",
    "title": "Tame the bank feed: categories and bank rules in QBO",
    "from_name": "Marcus",
    "from_role": "Marcus, your manager at the firm",
    "setup": "BrightPath's April bank feed is in. These 12 transactions need categorizing: (1) Shell gas station $86.40 — fuel for the two work vans; (2) Adobe $54.99 — monthly design software; (3) Home Depot $312.77 — cleaning supplies and a mop system; (4) Gusto $118.00 — payroll processing fee; (5) State Farm $486.00 — quarterly van insurance, this is month 1 of the quarter; (6) Uline $204.15 — gloves, trash bags, bottles; (7) Staples $67.29 — office paper and toner; (8) Comcast $149.99 — office internet; (9) Netflix $15.49 — charged on the business card; (10) IRS $2,140.00 — Q1 estimated tax payment; (11) Client payment received $3,850.00 — BrightPath invoice #221; (12) Amazon $129.99 — replacement vacuum part. Transactions 2, 4 and 8 hit the account every month at the same amount.",
    "pressure": "Dana's bookkeeper before you coded the Netflix charge to 'software' for six straight months. Marcus wants a note in your answer flagging anything that does not belong in the business at all — before it gets buried in a rule.",
    "task": "Produce a table of all 12 transactions: vendor, amount, QBO category, and one-line reason. Then write 3 bank rules for the recurring charges: rule name, the condition QBO should match (vendor and/or amount), and the category it auto-assigns. End with a flag note for anything that is not a business expense.",
    "answer_hint": "Table with 12 rows, then 3 rules in 'IF vendor/amount … THEN category' format, then a 1-2 sentence flag note.",
    "rubric": [
      "All 12 transactions categorized; #5 insurance treated as prepaid/quarterly ($486 covers 3 months, $162/month), not dumped into one month",
      "#9 Netflix flagged as personal — owner draw, not software or any business category",
      "#10 IRS $2,140 coded to estimated taxes / owner tax payments, not to an expense category like 'taxes and licenses' without note",
      "Bank rules cover exactly the 3 recurring same-amount charges (Adobe $54.99, Gusto $118.00, Comcast $149.99) with matching conditions",
      "#11 client payment coded to accounts receivable / invoice #221, not straight to income"
    ],
    "artifact": "Categorization table & bank rules — BrightPath April feed",
    "proof": "Categorized the April bank feed in QuickBooks Online and wrote bank rules for the recurring vendors — fuel, supplies, insurance, software, payroll fees."
  },
  {
    "id": "bk-03-bank-rec",
    "order": 3,
    "checklist_id": "month_end_mastery",
    "title": "Reconcile the operating account",
    "from_name": "Marcus",
    "from_role": "Marcus, your manager at the firm",
    "setup": "Time to reconcile BrightPath's operating account for April. The bank statement shows an ending balance of $18,432.17. QBO shows $18,912.17. You dig in and find: a client deposit of $1,250 recorded in QBO on April 30 that does not appear on the bank statement (it cleared May 2), and two outstanding checks — check #1042 for $480.00 to a supply vendor and check #1047 for $290.00 to a subcontractor — recorded in QBO but not yet cashed. Nothing else is unexplained.",
    "pressure": "Dana is asking why 'the bank says one number and your report says another.' Your summary has to explain the gap in plain words she can repeat to her loan officer — no jargon, no hand-waving.",
    "task": "Write a reconciliation summary: bank balance, each reconciling item with amount, adjusted bank balance, QBO balance, and the difference after adjustment (which must be zero). Close with a 2-3 sentence plain-English explanation for Dana of why the two numbers differed.",
    "answer_hint": "Summary format: starting balances, itemized adjustments with $ amounts, adjusted totals, difference line. Then the plain-English note.",
    "rubric": [
      "Adjusted bank balance computed as $18,432.17 + $1,250.00 − $480.00 − $290.00 = $18,912.17",
      "Deposit in transit identified as the April 30 $1,250 client deposit that cleared May 2",
      "Both outstanding checks listed separately with check numbers and amounts ($480.00 and $290.00, total $770.00)",
      "Final difference stated as $0.00 against the QBO balance of $18,912.17",
      "Explanation to Dana names timing (deposit and checks in transit) as the cause — not an error or missing money"
    ],
    "artifact": "Reconciliation summary — April operating account",
    "proof": "Reconciled the April operating account: bank $18,432.17 vs books $18,912.17 — every cent explained ($1,250 deposit in transit, $480 and $290 outstanding checks) down to a $0 difference."
  },
  {
    "id": "bk-04-payroll-entry",
    "order": 4,
    "checklist_id": "payroll_tax_basics",
    "title": "Book the payroll journal entry",
    "from_name": "Priya",
    "from_role": "Priya, senior bookkeeper at the firm (reviewing your work)",
    "setup": "BrightPath's biweekly payroll for the April 18 pay date just ran in Gusto. Gross wages: $9,840.00. Employee withholdings: Social Security and Medicare (FICA) 7.65% of gross, federal income tax $1,180.00, state income tax $394.00. The employer matches FICA dollar for dollar. All 9 employees passed the $7,000 FUTA wage base earlier this year, so FUTA on this run is $0. I need the full journal entry booked in QBO, and the total employer cost of this payroll — Dana keeps budgeting only the gross and wondering why cash runs short.",
    "pressure": "Gusto auto-posted a summary entry that lumped everything into 'payroll expenses' with no liability split. Priya wants your corrected entry to replace it today, because the liability balances feed the month-end close.",
    "task": "Write the complete journal entry: every debit and credit line with account name and amount, totals balanced. Below it, state the net pay, the total payroll tax liability created by this run, and the total employer cost of the payroll in one line each.",
    "answer_hint": "Journal entry table (account / debit / credit), then 3 summary lines. Amounts to the cent.",
    "rubric": [
      "Employee FICA computed as 7.65% × $9,840.00 = $752.76; employer match also $752.76",
      "Net pay = $9,840.00 − $752.76 − $1,180.00 − $394.00 = $7,513.24",
      "Debits: wage expense $9,840.00 + employer payroll tax expense $752.76 = $10,592.76",
      "Credits: FICA payable $1,505.52 (both halves), federal withholding payable $1,180.00, state withholding payable $394.00, net pay payable $7,513.24 — total credits $10,592.76, entry balances",
      "Total employer cost stated as $10,592.76 and FUTA correctly $0 with the wage-base reason"
    ],
    "artifact": "Payroll journal entry — April 18 run, BrightPath",
    "proof": "Booked the April 18 payroll journal entry: gross wages $9,840.00, FICA $752.76 matched on both sides, net pay $7,513.24 — the entry balances at $10,592.76."
  },
  {
    "id": "bk-05-ecommerce-payout",
    "order": 5,
    "checklist_id": "niche_ecommerce",
    "title": "Reconcile a Shopify payout that doesn't match sales",
    "from_name": "Leo",
    "from_role": "Leo, owner of a home-goods store (your client, sells on Shopify)",
    "setup": "Leo's store had a good week and he is confused: 'Shopify says I sold $12,480 but the deposit was only $11,204.50 — where did my money go?' The Shopify payout report for the week shows: gross sales $12,480.00; refunds $620.00; platform and processing fees $505.50; one chargeback $150.00. The deposit to his bank was $11,204.50. In QBO, Leo's previous helper recorded the $11,204.50 deposit as 'sales income' and stopped there, so revenue, refunds and fees are all wrong for the week.",
    "pressure": "Leo's sales tax filing pulls revenue from QBO. If gross sales stay understated, the filing is wrong too — he wants the corrected picture before his CPA sees the file Friday.",
    "task": "Produce (1) a payout reconciliation table: every component from gross sales down to the $11,204.50 deposit, proving the payout ties out; (2) a short correction summary stating what QBO currently shows, what it should show for revenue, refunds and fees, and the correcting entry lines (accounts and amounts).",
    "answer_hint": "Table first (component / amount / running total), then correction summary with entry lines. All amounts from the setup.",
    "rubric": [
      "Reconciliation ties out: $12,480.00 − $620.00 − $505.50 − $150.00 = $11,204.50 deposit",
      "States QBO revenue is understated by $1,275.50 (recorded $11,204.50 vs true gross $12,480.00)",
      "Correcting entry records gross sales $12,480.00 as revenue and books refunds $620.00 and fees $505.50 as their own lines, not netted",
      "Chargeback $150.00 shown as its own component, not folded into fees or refunds",
      "Notes the sales-tax consequence: filing must use gross sales, not the net deposit"
    ],
    "artifact": "Shopify payout reconciliation — Leo's store, weekly payout",
    "proof": "Reconciled a Shopify week: $12,480.00 in sales − $620.00 refunds − $505.50 fees − $150.00 chargeback = the $11,204.50 payout. Every cent accounted for."
  },
  {
    "id": "bk-06-ai-anomaly-review",
    "order": 6,
    "checklist_id": "ai_reconciliation_workflow",
    "title": "Review what the AI receipt scan flagged",
    "from_name": "Marcus",
    "from_role": "Marcus, your manager at the firm",
    "setup": "You ran BrightPath's April receipts through the capture tool. It matched most receipts automatically and flagged 5 items for human review: (1) a Home Depot receipt for $214.36 that appears twice — same date, same total, two different photos of the same receipt; (2) a fuel receipt totaling $89.10 that was entered in QBO as $98.10; (3) a mileage reimbursement: 340 miles claimed at the standard $0.67/mile, entered as $278.20; (4) a card charge of $512.00 at an office-supply store with no receipt attached — firm policy requires a receipt for anything over $75; (5) a $46.20 supply receipt the AI marked 'possible duplicate' — but the second charge is from a different date and a different store location. AI flags are leads, not verdicts. Clear the queue.",
    "pressure": "Two of these five are holding up the April close. Marcus wants verdicts today — but a wrong 'correction' on a legitimate charge is worse than a slow one, so every verdict needs its evidence stated.",
    "task": "Write an anomaly review table with one row per flag: the item, your verdict (real error / legitimate — no action / needs document), the evidence from the numbers, and the exact correction or next step. For errors, give the corrected amount and the dollar difference.",
    "answer_hint": "Table with 5 rows: flag / verdict / evidence / correction. Do the arithmetic — do not just restate the flags.",
    "rubric": [
      "Flag 1 verdict: real duplicate — one $214.36 entry removed; evidence: same date, same total, same receipt photographed twice",
      "Flag 2 verdict: transposition error — $98.10 entered vs $89.10 actual, correction reduces the expense by $9.00",
      "Flag 3 verdict: math error — 340 × $0.67 = $227.80, so the $278.20 entry overstates reimbursement by $50.40",
      "Flag 4 verdict: needs document — $512.00 charge held / receipt requested from client, citing the $75 policy threshold; not deleted and not blindly approved",
      "Flag 5 verdict: legitimate, no action — different date and store location means it is not a duplicate despite the AI flag"
    ],
    "artifact": "AI anomaly review — April receipt queue, BrightPath",
    "proof": "Reviewed 5 AI-flagged receipts: caught a double-scanned $214.36 receipt and a $89.10 fuel receipt mis-keyed as $98.10."
  },
  {
    "id": "bk-07-month-end-adjustments",
    "order": 7,
    "checklist_id": "month_end_mastery",
    "title": "Month-end close: the adjusting entries",
    "from_name": "Priya",
    "from_role": "Priya, senior bookkeeper at the firm (reviewing your work)",
    "setup": "April close for BrightPath. Before adjustments, the trial balance shows net income of $11,240. Three adjustments are needed: (1) Insurance — on April 1 the company paid $2,400 for a 12-month policy and the whole amount was expensed on day one; only April's portion belongs in April. (2) Accrued wages — the crew worked April 29 and 30 but gets paid May 2; two days of wages at $640 per day have not been recorded. (3) Depreciation — the van and equipment cost $18,000, straight-line over 5 years, no salvage value; no depreciation has been recorded yet this year, and you are booking April only (January-March were booked in the cleanup). Prepare the adjusting entries and tell me what April's profit actually is.",
    "pressure": "Dana has been quoting the $11,240 figure to her loan officer. If the real number is lower, Priya wants the adjusted figure and the 'why' in writing before Dana hears it from anyone else.",
    "task": "Produce a table of the 3 adjusting journal entries (accounts, debit, credit, one-line explanation each), then a short closing note: total adjustment to April profit and the corrected April net income.",
    "answer_hint": "Entry table first, then 2-3 sentence closing note with the corrected net income figure.",
    "rubric": [
      "Insurance adjustment: monthly portion $2,400 ÷ 12 = $200; correction moves $2,200 out of April expense into prepaid insurance (debit prepaid $2,200, credit insurance expense $2,200)",
      "Accrued wages: 2 × $640 = $1,280 debit wage expense, credit wages payable",
      "Depreciation: $18,000 ÷ 5 ÷ 12 = $300 for April — debit depreciation expense, credit accumulated depreciation",
      "Net effect on April profit: +$2,200 − $1,280 − $300 = +$620, so corrected net income = $11,240 + $620 = $11,860",
      "Closing note explains the profit went UP because 11 months of insurance had been dumped into April — the adjustment is a timing fix, not found money"
    ],
    "artifact": "Adjusting entries & corrected profit — April close, BrightPath",
    "proof": "Ran the April close: 3 adjusting entries (prepaid insurance, accrued wages, depreciation) corrected profit from $11,240 to $11,860."
  },
  {
    "id": "bk-08-month-end-report",
    "order": 8,
    "checklist_id": "monthly_reporting_portfolio",
    "title": "The month-end report Dana actually reads",
    "from_name": "Dana",
    "from_role": "Dana, owner of BrightPath Cleaning (your client)",
    "setup": "From Dana: 'My old bookkeeper sent me a 14-page PDF I never opened. Send me something I'll actually read.' April's final numbers: revenue $42,300 (March was $38,900). Corrected April net income is $11,860. The cleanup also fixed the books she was shown last month: her old March report showed net income of $4,120, but that report had expenses overstated by the $6,214 of duplicate entries — the corrected March net income is $10,334. Operating account reconciled to $18,912.17 with zero unexplained difference. Payroll runs $10,592.76 every two weeks in total employer cost.",
    "pressure": "The loan officer gets a copy of whatever you send Dana. It has to read clean and confident to a banker, but stay in words a cleaning-company owner understands — no accounting jargon without a plain translation.",
    "task": "Write the month-end report: a KPI table (revenue, month-over-month change, net income, bank balance) followed by a short narrative with three sections — What happened, What we fixed (the before/after on March), What to watch next month. Maximum 250 words of narrative.",
    "answer_hint": "KPI table + narrative under 250 words, 3 named sections. Write it for Dana, knowing the loan officer reads over her shoulder.",
    "rubric": [
      "Revenue growth computed correctly: ($42,300 − $38,900) ÷ $38,900 = +8.7% month over month",
      "Before/after stated exactly: March net income $4,120 as reported → $10,334 corrected, with the $6,214 duplicate-expense cause named",
      "April net income shown as $11,860 and bank balance as the reconciled $18,912.17",
      "'What to watch' names a concrete forward item (e.g. biweekly payroll cost $10,592.76 against cash), not generic advice",
      "Narrative stays within 250 words and contains no unexplained accounting jargon"
    ],
    "artifact": "Month-end report — April, BrightPath Cleaning",
    "proof": "Wrote the one-page April report a client actually reads: revenue $42,300, corrected profit $11,860 — and restated March profit from $4,120 to $10,334 after the cleanup."
  },
  {
    "id": "bk-09-cash-flow-advisory",
    "order": 9,
    "checklist_id": "advisory_kpi_package",
    "title": "Cash-flow forecast: can Dana afford a third van?",
    "from_name": "Dana",
    "from_role": "Dana, owner of BrightPath Cleaning (your client)",
    "setup": "Dana wants to buy a third van in June and asks: 'Will cash survive it?' Build her May forecast from what we know. Starting cash May 1: $14,600 (after April's reconciled balance, planned owner draw taken). Expected May inflows: $38,000 in client payments. Known May outflows: two biweekly payroll runs at the total employer cost of $10,592.76 each; office rent $3,200; fuel, supplies and other operating costs estimated at $6,400. The van she is looking at costs $9,500 used, cash. Separately, April's budget vs actuals: revenue was budgeted at $45,000 and came in at $42,300; expenses were budgeted at $33,000 and came in at $31,966.",
    "pressure": "The seller is holding the van only until Friday. Dana does not need a lecture — she needs a number, a verdict, and the condition that would change the verdict.",
    "task": "Produce (1) a May cash-flow forecast table: starting cash, inflows, each outflow line, ending cash; (2) the van scenario: ending cash if she pays $9,500 cash in May; (3) a budget-vs-actuals mini-table for April revenue and expenses with dollar and percent variances; (4) a 3-4 sentence advisory note: verdict on the van and one condition or alternative.",
    "answer_hint": "Two tables, one scenario line, short note. Every figure traceable to the setup.",
    "rubric": [
      "Payroll outflow computed as 2 × $10,592.76 = $21,185.52; total outflows $21,185.52 + $3,200 + $6,400 = $30,785.52",
      "Ending cash before van = $14,600 + $38,000 − $30,785.52 = $21,814.48",
      "Van scenario: $21,814.48 − $9,500 = $12,314.48 ending cash — still positive, above one payroll run",
      "Variances: revenue −$2,700 (−6.0% vs $45,000 budget); expenses $1,034 under budget ($33,000 → $31,966)",
      "Advisory note gives a clear verdict tied to the numbers and one condition (e.g. keep at least one payroll run — $10,592.76 — as a cash floor)"
    ],
    "artifact": "Cash-flow forecast & KPI note — May, BrightPath",
    "proof": "Built the May cash-flow forecast: $30,785.52 in known outflows, ending cash $21,814.48 — plus a buy-the-third-van scenario that still survives at $12,314.48."
  },
  {
    "id": "bk-10-linkedin-post",
    "order": 10,
    "checklist_id": "linkedin_visibility",
    "title": "Turn the cleanup into proof you know the work",
    "from_name": "Marcus",
    "from_role": "Marcus, your manager at the firm",
    "setup": "Last thing this month. The firm wants juniors building a visible track record. During the BrightPath cleanup you found 38 duplicate expense entries totaling $6,214 that had been sitting in the books for three months — the client's reported profit was understated by exactly that amount until the duplicates came out. Write the LinkedIn post about it. Rules: no client name, no firm name, no numbers you cannot back up, and no 'thrilled to announce' filler. The lesson has to be something a small-business owner or a hiring manager would save.",
    "pressure": "Marcus will read it before it goes up. If it reads like a textbook summary or a humble-brag, it comes back for a rewrite — he wants the actual mistake, the actual fix, in plain words.",
    "task": "Write a LinkedIn post of at most 120 words: a first line that stops a scroll, the mistake and what it did to the reported profit, the fix in one or two lines, and one practical takeaway (how an owner or bookkeeper catches duplicates before month-end). End with one question to readers or one line on what you check now — not both.",
    "answer_hint": "Max 120 words, short paragraphs or line breaks, first person. No hashtags stuffed at the end — two at most, or none.",
    "rubric": [
      "Uses the real figures: 38 duplicate entries, $6,214, profit understated by $6,214 — and no other invented numbers",
      "No client name, no firm name, no confidential details beyond the anonymized lesson",
      "Explains the fix concretely (how the duplicates were found and removed), not just 'we cleaned the books'",
      "Takeaway is an actionable check a reader can run (e.g. sort expenses by amount and vendor before close), not a platitude",
      "Within 120 words and free of announcement-style filler ('thrilled', 'excited to share', 'journey')"
    ],
    "artifact": "LinkedIn post — the $6,214 duplicate lesson",
    "proof": "Turned the $6,214 duplicate catch into a public LinkedIn post — the work, and the lesson, in public."
  }
];
