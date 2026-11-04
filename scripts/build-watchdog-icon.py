#!/usr/bin/env python3
"""Build the Watchdog home-screen icon PNGs from the design in
icons/watchdog-radar.svg (kept as the source of truth — this script
renders the same geometry with PIL at 4x and downscales).

Design: radar scope, deep pink #F92A82 on the service's dark plum
#150A20, sweep wedge in the lighter pink #FFB8D9 with a solid
#F92A82 leading edge. Bold shapes only, no text. Outer ring r=178
(512-canvas units), inner ring r=94, cross lines, 52-degree sweep
wedge upper-right, three blips, center dot.
"""
from PIL import Image, ImageDraw
import os

PINK = (249, 42, 130)        # #F92A82
LIGHT = (255, 184, 217)      # #FFB8D9
PLUM = (21, 10, 32)          # #150A20
SS = 4                        # supersample factor
BASE = 512
W = BASE * SS
C = W // 2                    # center, 1024 at SS

def u(v):                     # 512-canvas units -> supersampled px
    return v * SS

img = Image.new('RGB', (W, W), PLUM)
ov = Image.new('RGBA', (W, W), (0, 0, 0, 0))
d = ImageDraw.Draw(ov)

R = u(178)
bbox = [C - R, C - R, C + R, C + R]

# sweep wedge: -90deg (up) to -38deg, solid lighter pink
d.pieslice(bbox, start=-90, end=-38, fill=LIGHT + (255,))
# cross lines (chords; the ring stroke covers the ends)
d.line([C, C - R, C, C + R], fill=PINK + (255,), width=u(13))
d.line([C - R, C, C + R, C], fill=PINK + (255,), width=u(13))
# leading edge of the sweep
d.line([C, C, u(396.3), u(146.4)], fill=PINK + (255,), width=u(15))
# rings
d.ellipse(bbox, outline=PINK + (255,), width=u(21))
r2 = u(94)
d.ellipse([C - r2, C - r2, C + r2, C + r2], outline=PINK + (255,), width=u(13))
# blips + center dot
for x, y, r in [(338, 330, 23), (172, 356, 19), (188, 160, 17), (256, 256, 24)]:
    cx, cy, rr = u(x), u(y), u(r)
    d.ellipse([cx - rr, cy - rr, cx + rr, cy + rr], fill=PINK + (255,))

img = Image.alpha_composite(img.convert('RGBA'), ov).convert('RGB')

out = os.path.join(os.path.dirname(__file__), '..', 'icons')
for size in (512, 192, 180):
    img.resize((size, size), Image.LANCZOS).save(
        os.path.join(out, 'watchdog-radar-%d.png' % size))
    print('watchdog-radar-%d.png' % size)
