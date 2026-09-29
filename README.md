# SadOne · 手账风 Vue 3 组件库

<p align="center">
  <b>ribbons · memos · tapes &amp; doodles — pure SVG, pure hand-drawn</b><br>
  丝带标题 · 手账便签 · 和纸胶带 · 涂鸦图标，全部 SVG 手绘，不贴一张图片
</p>

**SadOne**（saday + doodle / 「刷到过」的手账宇宙）是一套手账风 Vue 3 组件库。
铅笔灰描边、纸白底色、微微歪斜的圆角——把纸质手帐的质感搬到网页上。

- 🖍 **纯 SVG 手绘**：所有图形都是代码画的，改字换色不用再开设计软件
- 🧩 **21 个组件**：丝带标题、便签卡、题头框卡、气泡、标签、胶带、邮票、花环、月历、待办、打卡…
- ✏️ **~110 枚涂鸦图标**：天气/植物/动物/食物/文具/科技/交通，一套注册表全收录
- 📦 **双形态分发**：npm 包 + CDN 单文件（`<script>` 一行引入，任何页面直接用）
- 🍃 **零运行时依赖**：只 peer 依赖 Vue 3

## 在线 Demo

👉 **https://gguioo.github.io/sadone/**（GitHub Pages，每个组件可交互预览）

## CDN 快速上手（任何 HTML）

```html
<link rel="stylesheet" href="sadone.css">
<script src="https://cdn.jsdelivr.net/npm/vue@3.5.13/dist/vue.global.prod.js"></script>
<script src="sadone.umd.cjs"></script>
<script>
  Vue.createApp({ /* ... */ }).use(SadOne.default).mount('#app')
</script>

<s-ribbon text="To Do"></s-ribbon>
<s-note title="Memo" variant="memo"><ul><li>吃点心</li><li>写字</li></ul></s-note>
<s-washi pattern="heart" :rotate="-3"></s-washi>
```

## npm 安装

```bash
npm i sadone
```

```ts
import { createApp } from 'vue'
import SadOne from 'sadone'
import 'sadone/style.css'

createApp(App).use(SadOne)
```

## 组件清单

| 组件 | 说明 | 变体 |
|---|---|---|
| `SRibbon` | 丝带标题 | wing / curve / plain / wide / bow |
| `SFrame` | 装饰底板框 | dashed / clip / grid / hearts / cloud / wreath |
| `SNote` | 手账便签卡 | todo / check / plan / memo / notes / shopping |
| `SBoard` | 题头框卡 | ideas / schedule / goals / reminder / study / work |
| `SBubble` | 对话气泡 | cloud / rect / tail / dash / think / heart |
| `STag` | 小标签贴纸 | point / tips / important / remember / done / okay / nice |
| `SLabelCard` | 吊牌/书签 | tag / tag-line / tag-write / tag-round / bookmark ×4 |
| `SWashi` | 和纸胶带 | flower / grid / dot / stripe / wave / cross / heart / bow |
| `SStamp` | 手账邮票 | 任意 doodle 图标名 |
| `SWreath` | 花环 | round / hex |
| `SCorner` | L 角饰 | vine / dash / star / leaf / flower |
| `SPolaroid` | 拍立得框 | 顶部胶带可换花纹 |
| `SDivider` | 分隔线 | dash / heart-line / vine / bow-line / star-dot / diamond-wave / wave / dots / slash / loop |
| `SArrow` | 手绘箭头 | straight / dash / curve / thick / wavy / hook / dotted |
| `SDoodle` | 涂鸦图标 | ~110 枚，见注册表 |
| `SCheckbox` | 手绘勾选框 | 描线打勾动画 |
| `STodoList` | 交互待办清单 | 勾选自动划线 |
| `SHabit` | 习惯/周历/心情打卡 | habit / weekly / mood |
| `SCalendar` | 月历 | 可标记 heart / star / dot |
| `SDateChip` | 日期/倒计时条 | date / countdown |
| `SWeekbar` | 周条 | 可点选 |

## 主题换肤

全部颜色取自 CSS 变量，改一处全局换肤：

```css
:root {
  --sd-ink: #3b3a37;      /* 铅笔灰 */
  --sd-paper: #fffdf8;    /* 纸白 */
  --sd-accent: #e88b7d;   /* 胭脂粉 */
  --sd-accent-2: #7fb5a0; /* 抹茶绿 */
  --sd-accent-3: #f2c14e; /* 蜡笔黄 */
}
```

## 开发

```bash
npm install
npm run build   # 产物：dist/sadone.js / sadone.umd.cjs / sadone.css
```

## License

MIT © [gguioo](https://github.com/gguioo)
