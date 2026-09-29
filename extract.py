#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""SadOne 切片机：白底素材图 → 透明底贴纸 PNG
- 连通域检测元素（膨胀合并内部间隙）
- 洪泛判定背景白（只有连通到图边的白才透明，便签内部纸白保留）
- alpha 高斯羽化软边"""
import cv2
import numpy as np
from pathlib import Path
import json

JOBS = [
    ("/home/z/my-project/upload/6abafb4690340a9cd84af5c9_1000019070.png", "img1"),
    ("/home/z/my-project/upload/6abafba8d661555656563405_1000019071.png", "img2"),
]
OUT = Path("/home/z/my-project/sadone/stickers_raw")
OUT.mkdir(parents=True, exist_ok=True)

def merge_boxes(boxes, gap=14, yov=0.35, rounds=6):
    """两段式合并：
    pass1 contains——碎片（便签行线/勾选框/文字段）完全落入宿主 bbox 的并入宿主
    pass2 行内近邻——同一水平行、间隙 <16px、y 重叠 >50% 的碎块合并（如断裂丝带）
    不做跨行合并，独立贴纸之间的行距天然隔离"""
    boxes = [tuple(b) for b in boxes]
    # pass1: contains（大→小）
    for _ in range(4):
        boxes.sort(key=lambda b: (b[2] - b[0]) * (b[3] - b[1]), reverse=True)
        changed = False
        used = [False] * len(boxes)
        out = []
        for i in range(len(boxes)):
            if used[i]:
                continue
            x0, y0, x1, y1 = boxes[i]
            for j in range(i + 1, len(boxes)):
                if used[j]:
                    continue
                a0, b0, a1, b1 = boxes[j]
                if a0 >= x0 - 2 and a1 <= x1 + 2 and b0 >= y0 - 2 and b1 <= y1 + 2:
                    used[j] = True
                    changed = True
            used[i] = True
            out.append((x0, y0, x1, y1))
        boxes = out
        if not changed:
            break
    # pass2: 行内近邻
    for _ in range(3):
        changed = False
        used = [False] * len(boxes)
        out = []
        for i in range(len(boxes)):
            if used[i]:
                continue
            x0, y0, x1, y1 = boxes[i]
            for j in range(i + 1, len(boxes)):
                if used[j]:
                    continue
                a0, b0, a1, b1 = boxes[j]
                gap_x = max(a0 - x1, x0 - a1)
                inter_y = min(y1, b1) - max(y0, b0)
                if gap_x < 16 and inter_y > 0.5 * min(y1 - y0, b1 - b0):
                    x0, y0, x1, y1 = min(x0, a0), min(y0, b0), max(x1, a1), max(y1, b1)
                    used[j] = True
                    changed = True
            used[i] = True
            out.append((x0, y0, x1, y1))
        boxes = out
        if not changed:
            break
    return boxes

def extract(path: str, tag: str, dilate_k: int = 5, min_area: int = 350):
    img = cv2.imread(path)
    H, W = img.shape[:2]
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    # 非白前景
    fg = (gray < 243).astype(np.uint8) * 255
    # 膨胀合并间隙
    k = cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (dilate_k, dilate_k))
    merged = cv2.dilate(fg, k, iterations=2)
    # 连通域
    n, labels, stats, _ = cv2.connectedComponentsWithStats(merged, 8)
    # 背景白：从图边洪泛的白色区域
    bg_white = (gray >= 243).astype(np.uint8)
    bg_labels = np.zeros((H, W), np.int32)
    seed = 1
    for x in range(0, W, 24):
        for y in [0, H - 1]:
            if bg_white[y, x] and bg_labels[y, x] == 0:
                mask = np.zeros((H + 2, W + 2), np.uint8)
                cv2.floodFill(bg_labels.copy(), mask, (x, y), seed, loDiff=0, upDiff=0)
                # floodFill on int32 copy trick: redo properly below
        break
    # scipy 更省心：label 背景白，凡触边的 label 即背景
    from scipy import ndimage
    lbl, nl = ndimage.label(bg_white)
    border_ids = set(lbl[0, :]) | set(lbl[-1, :]) | set(lbl[:, 0]) | set(lbl[:, -1])
    border_ids.discard(0)
    bg_mask = np.isin(lbl, list(border_ids))
    # alpha：背景透明，前景不透明；边缘羽化
    alpha = np.where(bg_mask, 0, 255).astype(np.uint8)
    alpha = cv2.GaussianBlur(alpha, (3, 3), 0)
    # 分离白底图1/图2 之间的纯白边距大块（防止整页被当背景粘走）已在 bg_mask 处理

    results = []
    idx = 0
    raw_boxes = []
    for i in range(1, n):
        x, y, w, h, area = stats[i]
        if area < min_area or w < 14 or h < 12:
            continue
        raw_boxes.append((x, y, x + w, y + h))
    # 近邻/包含合并：把便签内部行线、丝带文字碎片并回主体
    merged_boxes = merge_boxes(raw_boxes)

    def split_by_projection(box):
        """列投影切割：并排元素之间必有全白列，找白谷切开（对粘连丝带行是杀手锏）"""
        x0, y0, x1, y1 = box
        sub = img[y0:y1, x0:x1]
        gray = cv2.cvtColor(sub, cv2.COLOR_BGR2GRAY)
        fgm = (gray < 243).astype(np.uint8)
        colsum = fgm.sum(axis=0)
        blank = colsum == 0
        segs, start = [], None
        for i, b in enumerate(blank):
            if not b and start is None:
                start = i
            if b and start is not None:
                if i - start >= 40:
                    segs.append((start, i))
                start = None
        if start is not None and len(blank) - start >= 40:
            segs.append((start, len(blank)))
        if len(segs) <= 1:
            return [box]
        out = []
        for (a, b) in segs:
            subsub = fgm[:, a:b]
            nz = np.where(subsub.sum(axis=1) > 0)[0]
            if len(nz) == 0:
                continue
            out.append((x0 + a, y0 + int(nz[0]), x0 + b, y0 + int(nz[-1]) + 1))
        return out if len(out) > 1 else [box]

    # 宽块二次细切：先投影切，投影不动再试小核连通域
    final_boxes = []
    for (bx0, by0, bx1, by1) in merged_boxes:
        w, h = bx1 - bx0, by1 - by0
        if w > 300 and h < 220:
            pieces = split_by_projection((bx0, by0, bx1, by1))
            if len(pieces) > 1:
                final_boxes.extend(pieces)
                continue
            sub_fg = fg[by0:by1, bx0:bx1]
            k2 = cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (2, 2))
            sub_m = cv2.dilate(sub_fg, k2, iterations=1)
            n2, _, stats2, _ = cv2.connectedComponentsWithStats(sub_m, 8)
            boxes2 = [(bx0 + s[0], by0 + s[1], bx0 + s[0] + s[2], by0 + s[1] + s[3])
                      for s in stats2[1:] if s[4] > 250 and s[2] > 12 and s[3] > 10]
            boxes2 = merge_boxes(boxes2, gap=0)  # 只走 contains
            if len(boxes2) > 1:
                final_boxes.extend(boxes2)
                continue
        final_boxes.append((bx0, by0, bx1, by1))
    for (bx0, by0, bx1, by1) in final_boxes:
        x, y, w, h = bx0, by0, bx1 - bx0, by1 - by0
        area = w * h
        if area < min_area or w < 14 or h < 12:
            continue
        pad = 3
        x0, y0 = max(0, x - pad), max(0, y - pad)
        x1, y1 = min(W, x + w + pad), min(H, y + h + pad)
        if (x1 - x0) > W * 0.55 and (y1 - y0) > H * 0.55:
            continue  # 异常巨块跳过
        sub_rgb = cv2.cvtColor(img[y0:y1, x0:x1], cv2.COLOR_BGR2RGB)
        sub_a = alpha[y0:y1, x0:x1]
        out = np.dstack([sub_rgb, sub_a])
        idx += 1
        name = f"{tag}_{idx:03d}.png"
        cv2.imwrite(str(OUT / name), cv2.cvtColor(out, cv2.COLOR_RGBA2BGRA))
        results.append({"name": name, "x": int(x0), "y": int(y0), "w": int(x1 - x0), "h": int(y1 - y0)})
    return results

all_items = []
for path, tag in JOBS:
    # 两轮参数：先常规
    res = extract(path, tag, dilate_k=5)
    if len(res) < 60:  # 太少说明粘连严重，减核重试
        res = extract(path, tag, dilate_k=3)
    print(f"{tag}: {len(res)} stickers")
    all_items += res

(OUT / "manifest.json").write_text(json.dumps(all_items, ensure_ascii=False, indent=1))
print("total:", len(all_items))

# contact sheet：缩略拼版带编号，供人工归类
from PIL import Image, ImageDraw
THUMB = 110
cols = 12
rows = (len(all_items) + cols - 1) // cols
sheet = Image.new("RGB", (cols * (THUMB + 8) + 8, rows * (THUMB + 26) + 8), (250, 247, 242))
dr = ImageDraw.Draw(sheet)
for i, it in enumerate(all_items):
    im = Image.open(OUT / it["name"]).convert("RGBA")
    im.thumbnail((THUMB, THUMB))
    cx, cy = 8 + (i % cols) * (THUMB + 8), 8 + (i // cols) * (THUMB + 26)
    bg = Image.new("RGBA", im.size, (255, 255, 255, 255))
    bg.alpha_composite(im)
    sheet.paste(bg.convert("RGB"), (cx, cy))
    dr.text((cx + 2, cy + THUMB + 2), it["name"].replace(".png", ""), fill=(60, 60, 60))
sheet.save("/home/z/my-project/sadone/contact_sheet.png")
print("contact sheet saved")
