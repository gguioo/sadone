#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""按行归类 → 重命名 → 分类目录"""
import json, shutil
from pathlib import Path

RAW = Path('/home/z/my-project/sadone/stickers_raw')
OUT = Path('/home/z/my-project/sadone/stickers')
if OUT.exists():
    shutil.rmtree(OUT)
OUT.mkdir()

rows = json.load(open('/home/z/my-project/sadone/rows.json'))

# 行 → 类别映射（人工对照 sorted_sheet 定稿）
CAT = {
    ('img1', 0): 'ribbon', ('img1', 1): 'ribbon', ('img1', 2): 'frame', ('img1', 3): 'note',
    ('img1', 4): 'bubble', ('img1', 5): 'tag', ('img1', 6): 'symbol', ('img1', 7): 'doodle',
    ('img1', 8): 'doodle', ('img1', 9): 'doodle', ('img1', 10): 'divider', ('img1', 11): 'divider',
    ('img1', 12): 'wreath', ('img1', 13): 'label', ('img1', 14): 'tape', ('img1', 15): 'stamp',
    ('img1', 16): 'planner', ('img1', 17): 'icon', ('img1', 18): 'icon',
    ('img2', 0): 'ribbon', ('img2', 1): 'ribbon', ('img2', 2): 'ribbon', ('img2', 3): 'ribbon',
    ('img2', 5): 'bubble', ('img2', 6): 'label', ('img2', 7): 'label', ('img2', 8): 'frame',
    ('img2', 9): 'doodle', ('img2', 10): 'divider', ('img2', 11): 'icon', ('img2', 12): 'icon',
    ('img2', 13): 'icon', ('img2', 14): 'icon', ('img2', 15): 'icon', ('img2', 16): 'icon',
}
CAT_CN = {
    'ribbon': '丝带标题', 'frame': '边框底板', 'note': '便签卡', 'bubble': '对话气泡',
    'tag': '标签贴纸', 'symbol': '符号箭头', 'doodle': '涂鸦小图', 'divider': '分隔线',
    'wreath': '花环角饰', 'label': '吊牌书签', 'tape': '和纸胶带', 'stamp': '邮票邮戳',
    'planner': '日期计划', 'icon': '生活图标',
}
DEBRIS = ('img2', 4), ('img2', 5)

manifest = []
counters = {}
for r in rows:
    key = (r['tag'], r['row'])
    if key in DEBRIS:
        continue
    cat = CAT.get(key, 'misc')
    counters.setdefault(cat, 0)
    for fn in r['files']:
        counters[cat] += 1
        newname = f"{cat}_{counters[cat]:03d}.png"
        shutil.copy(RAW / fn, OUT / cat / newname) if (OUT / cat).exists() else (
            (OUT / cat).mkdir(parents=True, exist_ok=True), shutil.copy(RAW / fn, OUT / cat / newname))
        manifest.append({"file": f"{cat}/{newname}", "cat": cat, "cat_cn": CAT_CN[cat],
                         "src": fn, "w": next(m['w'] for m in json.load(open(RAW/'manifest.json')) if m['name']==fn),
                         "h": next(m['h'] for m in json.load(open(RAW/'manifest.json')) if m['name']==fn)})

json.dump(manifest, open(OUT / 'manifest.json', 'w'), ensure_ascii=False, indent=1)
print("分类完成：")
from collections import Counter
for cat, n in sorted(Counter(m['cat'] for m in manifest).items()):
    print(f"  {cat:10s} {CAT_CN[cat]:6s} × {n}")
print("总计:", len(manifest))
