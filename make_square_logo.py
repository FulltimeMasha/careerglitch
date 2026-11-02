from PIL import Image
import numpy as np

SRC = '/home/hatch/workspace/careerglitch-site/logo.jpg'
OUT = '/home/hatch/workspace/careerglitch-site/logo-square-rays-v2.png'

img = Image.open(SRC).convert('RGB')
W, H = img.size
print('source', img.size)
a = np.asarray(img).astype(int)
bg = a[2, 2]  # corner = light pink background
diff = np.abs(a - bg).sum(axis=2) > 40

# erase one stray dash fragment (source coords) that sits left of the arrow at mid-height
from PIL import ImageDraw as _ID
_ID.Draw(img).rectangle([160, 148, 218, 174], fill=tuple(bg))
# manual box around the arrow + rays only, tight: wordmark starts ~x .245; arrow tail ends ~y .97
x0, y0 = int(W * 0.105), int(H * 0.02)
x1, y1 = int(W * 0.240), int(H * 0.97)
pad = 4
x0 = max(0, x0 - pad); y0 = max(0, y0 - pad)
x1 = min(W, x1 + pad); y1 = min(H, y1 + pad)
crop = img.crop((x0, y0, x1, y1))
print('crop box', (x0, y0, x1, y1), 'crop', crop.size)

S = 1024
canvas = Image.new('RGB', (S, S), tuple(bg))
target = int(S * 0.80)
cw, ch = crop.size
scale = min(target / cw, target / ch)
new = crop.resize((int(cw * scale), int(ch * scale)), Image.LANCZOS)
canvas.paste(new, ((S - new.size[0]) // 2, (S - new.size[1]) // 2))
# clean leftover dash fragments in the left margin (arrow/rays live at x>=175, y<=560)
from PIL import ImageDraw as _ID2
_dd = _ID2.Draw(canvas)
_dd.rectangle([0, 540, 195, 1024], fill=tuple(int(v) for v in bg))
_dd.rectangle([0, 0, 120, 1024], fill=tuple(int(v) for v in bg))
canvas.save(OUT)
print('saved', OUT, canvas.size)
