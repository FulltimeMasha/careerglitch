# outbox/ — mini-report email pilot staging

Filled by `scripts/send_mini_manual.py` (see its docstring). For every
PathCheck lead that has not received its mini-report email, the script
writes `<lead-id>.html` + `<lead-id>.txt` here and appends one line to
`sent-mini-emails.jsonl` (lead id, to, subject, file paths, status).

Workflow while RESEND_API_KEY is not yet live:
1. Run the script with `--since <date>` — new pending emails land here.
2. The founder sends the rendered emails by hand.
3. Run the script with `--mark-sent` — each lead row gets
   `recommended[0].miniEmail = { status:'sent', via:'manual' }`, so the
   endpoint never double-sends once the key is added.

Once RESEND_API_KEY is in the Vercel env, POST /api/send-mini sends
automatically and this outbox is only a fallback for provider failures.
