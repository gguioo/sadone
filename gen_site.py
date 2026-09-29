#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""生成贴纸预览站到 docs/（数据内嵌 + 浏览器渲染，防模板膨胀）"""
import json, shutil
from pathlib import Path

ROOT = Path('/home/z/my-project/sadone')
STK, DOCS = ROOT / 'stickers', ROOT / 'docs'
if DOCS.exists():
    shutil.rmtree(DOCS)
DOCS.mkdir()
shutil.copytree(STK, DOCS / 'stickers')
mf = json.load(open(STK / 'manifest.json'))
data = [{"f": m['file'], "c": m['cat'], "cn": m['cat_cn'], "w": m['w'], "h": m['h']} for m in mf]

TPL = """<!DOCTYPE html>
<html lang="zh"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>SadOne Stickers · 手账贴纸库</title>
<style>
*{box-sizing:border-box}body{margin:0;padding:34px 16px 70px;background:#faf7f2;
background-image:radial-gradient(#e5e0d5 1px,transparent 1px);background-size:22px 22px;
font-family:'Caveat','Segoe Print','Bradley Hand','楷体',cursive;color:#3b3a37;text-align:center}
h1{font-size:42px;margin:6px 0 2px}.sub{color:#8a8880;font-size:18px;margin:0 0 26px}
nav{position:sticky;top:0;background:#faf7f2ee;padding:8px 0;z-index:9}
nav a{display:inline-block;margin:3px 4px;padding:3px 12px;border:1.6px solid #3b3a37;border-radius:20px;
text-decoration:none;color:#3b3a37;font-size:16px;background:#fffdf8}
nav a:hover{background:#e88b7d;color:#fff;border-color:#e88b7d}
section{margin-top:40px}h2{font-size:28px;display:inline-block;border-bottom:3px solid #e88b7d;padding:0 10px}
.cnt{color:#8a8880;font-size:17px;margin-left:6px}
.grid{display:flex;flex-wrap:wrap;gap:14px;justify-content:center;margin-top:18px}
.card{display:flex;flex-direction:column;align-items:center;width:112px;text-decoration:none;color:#3b3a37}
.ph{width:104px;height:104px;display:flex;align-items:center;justify-content:center;border-radius:10px;
background:repeating-conic-gradient(#f0ece2 0 25%,#fffdf8 0 50%) 0 0/16px 16px;border:1.4px solid #d8d3c6;overflow:hidden}
.ph:hover{border-color:#e88b7d}
.card img{max-width:92px;max-height:92px}
.nm{font-size:12px;color:#8a8880;margin-top:4px;line-height:1.3}
footer{margin-top:60px;color:#8a8880;font-size:15px}
</style></head><body>
<h1>SadOne Stickers</h1>
<p class="sub">__TOTAL__ 枚手账贴纸 · 全部原图抠切 · 透明底 PNG · 点击任意贴纸即可下载</p>
<nav id="nav"></nav><div id="main"></div>
<footer>SadOne Stickers · cut from Jimmy's doodle sheets · <a href="https://github.com/gguioo/sadone">GitHub</a></footer>
<script>const DATA = __DATA__;</script>
<script>
const order = [...new Set(DATA.map(d => d.c))];
const CAT_CN = {}; DATA.forEach(d => CAT_CN[d.c] = d.cn);
const nav = document.getElementById('nav'), main = document.getElementById('main');
order.forEach(c => {
  const items = DATA.filter(d => d.c === c);
  const a = document.createElement('a'); a.href = '#' + c;
  a.innerHTML = CAT_CN[c] + ' <span style="opacity:.55">' + items.length + '</span>';
  nav.appendChild(a);
  const sec = document.createElement('section'); sec.id = c;
  sec.innerHTML = '<h2>' + CAT_CN[c] + '</h2><span class="cnt">× ' + items.length + '</span>';
  const grid = document.createElement('div'); grid.className = 'grid';
  items.forEach(d => {
    const a = document.createElement('a'); a.className = 'card'; a.href = 'stickers/' + d.f; a.download = d.f.split('/').pop();
    a.innerHTML = '<span class="ph"><img loading="lazy" src="stickers/' + d.f + '"></span><span class="nm">' + d.f.split('/').pop() + '<br>' + d.w + '×' + d.h + '</span>';
    grid.appendChild(a);
  });
  sec.appendChild(grid); main.appendChild(sec);
});
</script></body></html>"""

(DOCS / 'index.html').write_text(TPL.replace('__TOTAL__', str(len(data))).replace('__DATA__', json.dumps(data, ensure_ascii=False)))
print('done:', len(data), 'stickers →', DOCS / 'index.html')
