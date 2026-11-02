from PIL import Image, ImageDraw, ImageFont

F = '/home/hatch/workspace/banners/fonts/'
SRC = '/home/hatch/workspace/careerglitch-site/logo.jpg'
OUT = '/home/hatch/workspace/careerglitch-site/linkedin-company-banner-v1.png'
S = 4                      # render scale
W, H = 1128 * S, 191 * S   # LinkedIn company page cover

BG = (253, 234, 240); INK = (20, 18, 22); INK2 = (74, 66, 72)
PINK = (248, 28, 122)

img = Image.new('RGB', (W, H), BG)
d = ImageDraw.Draw(img)

def outfit(size, weight=900):
    f = ImageFont.truetype(F + 'Outfit.ttf', size)
    try: f.set_variation_by_axes([weight])
    except Exception: pass
    return f

def instr(size):
    return ImageFont.truetype(F + 'InstrumentSans.ttf', size)

def mono(size):
    return ImageFont.truetype(F + 'DMMono-Regular.ttf', size)

# arrow + rays cut from the full logo (same box as the square logo);
# erase the stray dash fragment left of the arrow first
logo = Image.open(SRC).convert('RGB')
ImageDraw.Draw(logo).rectangle([150, 135, 202, 185], fill=BG)
crop = logo.crop((185, 1, 405, 275))
th = int(H * 0.82)
crop = crop.resize((int(crop.size[0] * th / crop.size[1]), th), Image.LANCZOS)
img.paste(crop, (24 * S, (H - th) // 2))

X = 24 * S + crop.size[0] + 36 * S  # text starts right of the arrow, no overlap
# wordmark with hot-pink offset shadow, like the logo's glitch shadow
fw = outfit(52 * S, 900)
wm = "Career Glitch"
d.text((X + 2 * S, 26 * S + 2 * S), wm, font=fw, fill=PINK)
d.text((X, 26 * S), wm, font=fw, fill=INK)

# tagline — her chosen line
tag = "Career choices for the AI era — and the learning roadmap to get there."
ft = instr(25 * S)
while d.textlength(tag, font=ft) > W - X - 40 * S:
    ft = instr(ft.size - 2 * S)
d.text((X, 96 * S), tag, font=ft, fill=INK2)

# site, mono, bottom-right
s = "careerglitch.com"; fm = mono(15 * S)
d.text((W - 40 * S - d.textlength(s, font=fm), H - 34 * S), s, font=fm, fill=PINK)

img = img.resize((1128, 191), Image.LANCZOS)
img.save(OUT)
print('saved', OUT, img.size)
