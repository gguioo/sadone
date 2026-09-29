#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""花环猫头像：猫图圆形裁切（抗锯齿）+ 花环预放大锐化"""
from PIL import Image, ImageDraw, ImageFilter
from pathlib import Path

OUT = Path('/home/z/my-project/sadone/docs/img')
OUT.mkdir(parents=True, exist_ok=True)

# 1. 猫图 → 圆形透明 PNG（圆心对准猫脸+皇冠，直径取原图 64%）
cat = Image.open('/home/z/my-project/upload/6abb14449d586031f0f43bfd_1000019031.jpg').convert('RGB')
W, H = cat.size
R = int(W * 0.32)                       # 半径 640
cx, cy = W // 2, int(H * 0.32)          # 圆心偏上：脸+皇冠在圆心附近
box = (cx - R, cy - R, cx + R, cy + R)
cat_c = cat.crop(box).resize((400, 400), Image.LANCZOS)

# 4x 超采样圆 mask（边缘平滑）
BIG = 400 * 4
mask = Image.new('L', (BIG, BIG), 0)
d = ImageDraw.Draw(mask)
d.ellipse((8, 8, BIG - 8, BIG - 8), fill=255)
mask = mask.resize((400, 400), Image.LANCZOS)

out = Image.new('RGBA', (400, 400), (0, 0, 0, 0))
out.paste(cat_c, (0, 0), mask)
out.save(OUT / 'cat-round.png')
print('cat-round.png:', out.size)

# 2. 花环 Lanczos 2.2x 放大 + 轻锐化（线稿放大后回缩显示，观感锐利）
wr = Image.open('/home/z/my-project/sadone/stickers/wreath/wreath_001.png').convert('RGBA')
big = wr.resize((int(wr.width * 2.2), int(wr.height * 2.2)), Image.LANCZOS)
r_, g_, b_, a_ = big.split()
rgb = Image.merge('RGB', (r_, g_, b_))
rgb = rgb.filter(ImageFilter.UnsharpMask(radius=1.6, percent=90, threshold=2))
big = Image.merge('RGBA', (*rgb.split(), a_))
big.save(OUT / 'wreath-big.png')
print('wreath-big.png:', big.size)
