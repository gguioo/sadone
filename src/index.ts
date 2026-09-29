// SadOne · 手账风 Vue 3 组件库入口
import type { App, Component } from 'vue'
import SRibbon from './components/SRibbon.vue'
import SFrame from './components/SFrame.vue'
import SNote from './components/SNote.vue'
import SBubble from './components/SBubble.vue'
import STag from './components/STag.vue'
import SLabelCard from './components/SLabelCard.vue'
import SWashi from './components/SWashi.vue'
import SBoard from './components/SBoard.vue'
import SStamp from './components/SStamp.vue'
import SWreath from './components/SWreath.vue'
import SCorner from './components/SCorner.vue'
import SPolaroid from './components/SPolaroid.vue'
import SDivider from './components/SDivider.vue'
import SArrow from './components/SArrow.vue'
import SDoodle from './components/SDoodle.vue'
import SCheckbox from './components/SCheckbox.vue'
import STodoList from './components/STodoList.vue'
import SHabit from './components/SHabit.vue'
import SCalendar from './components/SCalendar.vue'
import SDateChip from './components/SDateChip.vue'
import SWeekbar from './components/SWeekbar.vue'

import './styles/sadone.css'

export const components: Record<string, Component> = {
  SRibbon, SFrame, SNote, SBubble, STag, SLabelCard, SWashi, SBoard,
  SStamp, SWreath, SCorner, SPolaroid, SDivider, SArrow, SDoodle,
  SCheckbox, STodoList, SHabit, SCalendar, SDateChip, SWeekbar,
}

export {
  SRibbon, SFrame, SNote, SBubble, STag, SLabelCard, SWashi, SBoard,
  SStamp, SWreath, SCorner, SPolaroid, SDivider, SArrow, SDoodle,
  SCheckbox, STodoList, SHabit, SCalendar, SDateChip, SWeekbar,
}
export { NATURE_ICONS, LIFE_ICONS } from './icons'
export type { DoodleDef } from './icons-nature'

// 全局安装：app.use(SadOne) 后 <s-ribbon> 等 kebab-case 可用
export default {
  install(app: App) {
    for (const [name, comp] of Object.entries(components)) {
      app.component(name, comp)
      app.component(name.replace(/^S([A-Z])/, (m, c) => 's-' + c.toLowerCase()), comp)
    }
  },
}
