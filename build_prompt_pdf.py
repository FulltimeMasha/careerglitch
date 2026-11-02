import re, html
from reportlab.lib.pagesizes import LETTER
from reportlab.lib.units import inch
from reportlab.lib.colors import HexColor
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import (SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle,
                                KeepTogether, HRFlowable)
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.enums import TA_LEFT

F = '/home/hatch/workspace/life-map/fonts/'
pdfmetrics.registerFont(TTFont('Outfit', F + 'Outfit-800.ttf'))
pdfmetrics.registerFont(TTFont('Outfit7', F + 'Outfit-700.ttf'))
pdfmetrics.registerFont(TTFont('Instr', F + 'InstrumentSans-400.ttf'))
pdfmetrics.registerFont(TTFont('InstrB', F + 'InstrumentSans-700.ttf'))
pdfmetrics.registerFont(TTFont('Mono', F + 'DMMono-400.ttf'))

INK = HexColor('#1C1A1F'); PINK = HexColor('#FFD8EA'); SOFT = HexColor('#FFEEF5')
CREAM = HexColor('#FFFCF6'); BUTTER = HexColor('#F0E6CF'); GRAY = HexColor('#6E675F')
LINE = HexColor('#EAD9C8')

LINK = 'https://the-success-brain.notion.site/Career-Dashboard-Career-Glitch-Template-402c7f35440f81ed85d6ed727be6df5c'

raw = open('/home/hatch/workspace/careerglitch-site/master_prompt.txt', encoding='utf-8').read()

def sanitize(t):
    t = t.replace('●●●●○○○○○○', '(progress circles)')
    t = t.replace('●', '•').replace('○', 'o').replace('☐', '[ ]').replace('→', '->')
    t = re.sub(r'[\U0001F000-\U0001FAFF\u2600-\u27BF\uFE0F]', '', t)
    return t

raw = sanitize(raw)

styles = {
    'kicker': ParagraphStyle('kicker', fontName='Mono', fontSize=8.5, textColor=GRAY, spaceAfter=6),
    'title': ParagraphStyle('title', fontName='Outfit', fontSize=25, leading=29, textColor=INK),
    'sub': ParagraphStyle('sub', fontName='Instr', fontSize=11.5, leading=16, textColor=INK, spaceBefore=8),
    'h': ParagraphStyle('h', fontName='Outfit7', fontSize=12.5, leading=16, textColor=INK, spaceBefore=14, spaceAfter=4),
    'body': ParagraphStyle('body', fontName='Instr', fontSize=9.8, leading=14.2, textColor=INK, spaceAfter=5),
    'small': ParagraphStyle('small', fontName='Instr', fontSize=9, leading=12.5, textColor=GRAY),
    'link': ParagraphStyle('link', fontName='Mono', fontSize=8.2, leading=11.5, textColor=INK),
}

story = []
hdr = Table([[Paragraph('CAREER GLITCH — MASTER PROMPT', styles['kicker'])],
             [Paragraph('Turn AI into Your Personal Career Matchmaker', styles['title'])],
             [Paragraph('The full prompt + your Notion dashboard template. Keep this file — it is your backup copy.', styles['sub'])]],
            colWidths=[6.9 * inch])
hdr.setStyle(TableStyle([('BACKGROUND', (0, 0), (-1, -1), PINK),
                         ('LEFTPADDING', (0, 0), (-1, -1), 16), ('RIGHTPADDING', (0, 0), (-1, -1), 16),
                         ('TOPPADDING', (0, 0), (-1, 0), 12), ('BOTTOMPADDING', (0, -1), (-1, -1), 14),
                         ('ROUNDEDCORNERS', [10, 10, 10, 10])]))
story.append(hdr)
story.append(Spacer(1, 14))

story.append(Paragraph('HOW TO USE IT', styles['h']))
for line in ['1. Open Claude or ChatGPT and paste the whole prompt below into a fresh chat.',
             '2. Keep that chat — your matchmaker lives there. Give it a name when it asks.',
             '3. Duplicate the Notion template (link below) — your matchmaker fills it with your plan.']:
    story.append(Paragraph(line, styles['body']))
story.append(Spacer(1, 4))

tpl = Table([[Paragraph('YOUR NOTION DASHBOARD TEMPLATE', styles['kicker'])],
             [Paragraph('Career Dashboard — progress, weekly plan, your whole roadmap and job hunt:', styles['body'])],
             [Paragraph('<link href="' + LINK + '">' + LINK + '</link>', styles['link'])]],
            colWidths=[6.9 * inch])
tpl.setStyle(TableStyle([('BACKGROUND', (0, 0), (-1, -1), BUTTER),
                         ('LEFTPADDING', (0, 0), (-1, -1), 16), ('RIGHTPADDING', (0, 0), (-1, -1), 16),
                         ('TOPPADDING', (0, 0), (-1, 0), 12), ('BOTTOMPADDING', (0, -1), (-1, -1), 14),
                         ('ROUNDEDCORNERS', [10, 10, 10, 10])]))
story.append(tpl)
story.append(Spacer(1, 8))
story.append(HRFlowable(width='100%', thickness=1, color=LINE))
story.append(Paragraph('THE MASTER PROMPT — COPY EVERYTHING BELOW', styles['h']))

blocks = [b.strip() for b in raw.split('\n\n') if b.strip()]
HEAD = re.compile(r'^(PART \d|STEP \d|START|ROLE|THE RULES|CHECKPOINT|MASTER PROMPT|={3,})')
for b in blocks:
    if set(b) <= set('= '):
        continue
    esc = html.escape(b).replace('\n', '<br/>')
    if HEAD.match(b) or (len(b) < 60 and b.isupper()):
        story.append(Paragraph(esc, styles['h']))
    else:
        story.append(Paragraph(esc, styles['body']))

def footer(canvas, doc):
    canvas.saveState()
    canvas.setFont('Mono', 7.5)
    canvas.setFillColor(GRAY)
    canvas.drawString(0.8 * inch, 0.55 * inch, 'careerglitch.com — Turn AI into Your Personal Career Matchmaker')
    canvas.drawRightString(7.7 * inch, 0.55 * inch, str(doc.page))
    canvas.restoreState()

doc = SimpleDocTemplate('/home/hatch/workspace/careerglitch-site/Career_Mentor_Master_Prompt.pdf',
                        pagesize=LETTER, leftMargin=0.8 * inch, rightMargin=0.8 * inch,
                        topMargin=0.7 * inch, bottomMargin=0.8 * inch,
                        title='Turn AI into Your Personal Career Matchmaker — Master Prompt',
                        author='Career Glitch')
doc.build(story, onFirstPage=footer, onLaterPages=footer)
print('PDF built')
