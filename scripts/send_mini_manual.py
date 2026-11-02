#!/usr/bin/env python3
"""Manual pilot for the PathCheck mini-report emails.

Until RESEND_API_KEY is live in the Vercel env, POST /api/send-mini
answers "queued / no-key" and sends nothing. This script is the pilot
bridge: it lists PathCheck leads in cg_leads that have NOT been sent a
mini email, renders each email with the same lib the endpoint uses
(api/_lib/miniemails.mjs via scripts/render_mini.mjs), writes the
.html/.txt into outbox/, and appends one line per lead to
outbox/sent-mini-emails.jsonl — ready for the founder to send by hand.

After the founder has sent a batch by hand, flip the markers so the
endpoint never double-sends once the key goes live:

  python3 scripts/send_mini_manual.py --mark-sent

Usage:
  CG_SUPABASE_URL=... CG_SUPABASE_KEY=... \
    python3 scripts/send_mini_manual.py --since 2026-11-01
  python3 scripts/send_mini_manual.py --lead 62458602-5c22-4569-8c82-6c5a21e92d90
  python3 scripts/send_mini_manual.py --mark-sent

Env: CG_SUPABASE_URL + CG_SUPABASE_KEY (the service-role key — run
locally only, never commit it, never put it in a client).
"""
import argparse, json, os, subprocess, sys, urllib.request, urllib.parse
from datetime import datetime, timezone

SITE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUTBOX = os.path.join(SITE, 'outbox')
JSONL = os.path.join(OUTBOX, 'sent-mini-emails.jsonl')


def sb(path, method='GET', body=None, prefer=None):
    url = os.environ['CG_SUPABASE_URL'].rstrip('/') + '/rest/v1/' + path
    key = os.environ['CG_SUPABASE_KEY']
    data = json.dumps(body).encode() if body is not None else None
    req = urllib.request.Request(url, data=data, method=method, headers={
        'apikey': key, 'Authorization': f'Bearer {key}',
        'Content-Type': 'application/json',
        **({'Prefer': prefer} if prefer else {}),
    })
    with urllib.request.urlopen(req) as r:
        txt = r.read().decode()
        return json.loads(txt) if txt else None


def render(row):
    p = subprocess.run(['node', os.path.join(SITE, 'scripts/render_mini.mjs')],
                       input=json.dumps(row), capture_output=True, text=True, timeout=60)
    out = json.loads(p.stdout)
    if 'error' in out:
        raise RuntimeError(out['error'])
    return out


def load_jsonl():
    if not os.path.isfile(JSONL):
        return []
    return [json.loads(l) for l in open(JSONL) if l.strip()]


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--since', help='only leads created on/after YYYY-MM-DD')
    ap.add_argument('--lead', help='render just this lead id')
    ap.add_argument('--force', action='store_true', help='re-render leads already in the outbox')
    ap.add_argument('--mark-sent', action='store_true',
                    help='mark every outbox entry with status "rendered" as sent (manual) on its lead row')
    args = ap.parse_args()

    if not os.environ.get('CG_SUPABASE_URL') or not os.environ.get('CG_SUPABASE_KEY'):
        print('Set CG_SUPABASE_URL and CG_SUPABASE_KEY in the environment first '
              '(service-role key; local runs only).')
        sys.exit(2)
    os.makedirs(OUTBOX, exist_ok=True)

    if args.mark_sent:
        entries = load_jsonl()
        done = 0
        for e in entries:
            if e.get('status') != 'rendered':
                continue
            rows = sb(f"cg_leads?id=eq.{urllib.parse.quote(e['lead_id'])}&select=id,recommended")
            if not rows:
                print('lead gone, skipped:', e['lead_id']); continue
            rec = rows[0]['recommended'][0]
            rec['miniEmail'] = {'status': 'sent', 'at': datetime.now(timezone.utc).isoformat(), 'via': 'manual'}
            sb(f"cg_leads?id=eq.{urllib.parse.quote(e['lead_id'])}", method='PATCH',
               body={'recommended': [rec]}, prefer='return=minimal')
            e['status'] = 'sent-manual'
            done += 1
            print('marked sent:', e['lead_id'], e['to'])
        with open(JSONL, 'w') as f:
            for e in entries:
                f.write(json.dumps(e, ensure_ascii=False) + '\n')
        print(f'marked {done} lead(s) sent')
        return

    q = 'cg_leads?select=id,email,name,self_role,recommended,created_at&order=created_at.asc'
    if args.lead:
        q += f"&id=eq.{urllib.parse.quote(args.lead)}"
    elif args.since:
        q += f"&created_at=gte.{args.since}T00:00:00Z"
    rows = sb(q) or []
    already = {e['lead_id'] for e in load_jsonl()}
    rendered = skipped = 0
    with open(JSONL, 'a') as jf:
        for row in rows:
            rec = (row.get('recommended') or [{}])[0]
            if rec.get('product') != 'pathcheck':
                continue
            if (rec.get('miniEmail') or {}).get('status') == 'sent':
                skipped += 1; continue
            if row['id'] in already and not args.force:
                skipped += 1; continue
            try:
                mail = render(row)
            except Exception as ex:
                print('render failed', row['id'], ex); continue
            hp = os.path.join(OUTBOX, row['id'] + '.html')
            tp = os.path.join(OUTBOX, row['id'] + '.txt')
            open(hp, 'w').write(mail['html'])
            open(tp, 'w').write(mail['text'])
            entry = {'lead_id': row['id'], 'to': mail['to'], 'subject': mail['subject'],
                     'html': f"outbox/{row['id']}.html", 'text': f"outbox/{row['id']}.txt",
                     'rendered_at': datetime.now(timezone.utc).isoformat(), 'status': 'rendered'}
            jf.write(json.dumps(entry, ensure_ascii=False) + '\n')
            rendered += 1
            print('rendered:', row['id'], '->', mail['to'], '|', mail['subject'])
    print(f'done: {rendered} rendered, {skipped} skipped (already sent or in outbox)')


if __name__ == '__main__':
    main()
