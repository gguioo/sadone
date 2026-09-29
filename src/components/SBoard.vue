<script setup lang="ts">
// SBoard · 手账题头框卡（标题图标 + 空行，slot 放正文）
// preset: ideas(灯泡) | schedule(时钟) | goals(靶心) | reminder(蝴蝶结) | study(书) | work(电脑)
import { NATURE_ICONS } from '../icons-nature'
import { LIFE_ICONS } from '../icons-life'

const props = withDefaults(defineProps<{
  title?: string
  preset?: string
  rows?: number
}>(), { title: '', preset: 'ideas', rows: 3 })

const ICONS = { ...NATURE_ICONS, ...LIFE_ICONS }
const TITLE_MAP: Record<string, string> = {
  ideas: 'Ideas :', schedule: 'Schedule :', goals: 'Goals :',
  reminder: 'Reminder :', study: 'Study :', work: 'Work :',
}
const ICON_MAP: Record<string, string> = {
  ideas: 'bulb', schedule: 'clock', goals: 'pin-location',
  reminder: 'bow', study: 'book', work: 'laptop',
}
</script>

<template>
  <div class="sd-base sd-board">
    <svg class="sd-board-bg sd-ink" viewBox="0 0 240 170" fill="none" :stroke="'var(--sd-ink)'" :stroke-width="1.8">
      <rect x="8" y="8" width="224" height="154" rx="10" />
      <g v-if="ICONS[ICON_MAP[props.preset]]" transform="translate(20 18) scale(1.05)" fill="none">
        <path v-for="(p, i) in ICONS[ICON_MAP[props.preset]].d" :key="i" :d="p" />
      </g>
      <g v-for="i in props.rows" :key="i">
        <rect v-if="props.preset === 'schedule' || props.preset === 'goals' || props.preset === 'work'" x="22" :y="40 + (i - 1) * 34" width="14" height="14" rx="2" />
        <line x1="42" :y1="47 + (i - 1) * 34" x2="218" :y2="47 + (i - 1) * 34" />
      </g>
    </svg>
    <div class="sd-board-inner">
      <div class="sd-board-title sd-ink">{{ props.title || TITLE_MAP[props.preset] }}</div>
      <div class="sd-board-body"><slot /></div>
    </div>
  </div>
</template>

<style scoped>
.sd-board { position: relative; display: inline-block; width: 240px; background: var(--sd-paper); }
.sd-board-bg { display: block; width: 100%; height: auto; }
.sd-board-inner { position: absolute; inset: 0; padding: 16px 20px; }
.sd-board-title { display: flex; align-items: center; gap: 8px; font-size: 20px; font-weight: 700; height: 26px; }
.sd-board-body { margin-top: 14px; font-size: 16px; }
</style>
