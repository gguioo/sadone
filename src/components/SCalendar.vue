<script setup lang="ts">
// SCalendar · 手账月历（heart-heart 版式，可标记日期）
// marks: { [day]: 'heart' | 'star' | 'dot' }
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  year?: number
  month?: number   // 1-12
  marks?: Record<number, string>
  title?: string
}>(), { year: 2026, month: 9, marks: () => ({ 14: 'heart', 20: 'star' }), title: 'Monthly ♥' })

const FIRST = ['M', 'T', 'W', 'T', 'F', 'S', 'S']
const cells = computed(() => {
  const y = props.year, m = props.month - 1
  const first = (new Date(y, m, 1).getDay() + 6) % 7  // 周一为首
  const days = new Date(y, m + 1, 0).getDate()
  const arr: (number | null)[] = Array(first).fill(null)
  for (let d = 1; d <= days; d++) arr.push(d)
  while (arr.length % 7) arr.push(null)
  return arr
})
</script>

<template>
  <div class="sd-base sd-cal">
    <div class="sd-cal-title">{{ props.title }}</div>
    <div class="sd-cal-head">
      <span v-for="(d, i) in FIRST" :key="i">{{ d }}</span>
    </div>
    <div class="sd-cal-grid">
      <div v-for="(c, i) in cells" :key="i" class="sd-cal-cell">
        <template v-if="c">
          <span class="n">{{ c }}</span>
          <span v-if="props.marks[c]" class="mk" :class="props.marks[c]">{{ props.marks[c] === 'heart' ? '♥' : props.marks[c] === 'star' ? '★' : '●' }}</span>
        </template>
      </div>
    </div>
  </div>
</template>

<style scoped>
.sd-cal { background: var(--sd-paper); border: 1.8px solid var(--sd-ink); border-radius: 12px; padding: 14px 16px; display: inline-block; }
.sd-cal-title { text-align: center; font-size: 20px; font-weight: 700; margin-bottom: 10px; color: var(--sd-accent); }
.sd-cal-head, .sd-cal-grid { display: grid; grid-template-columns: repeat(7, 1fr); gap: 2px 4px; }
.sd-cal-head span { text-align: center; font-size: 13px; color: var(--sd-ink-soft); }
.sd-cal-cell { width: 30px; height: 30px; border: 1.2px solid var(--sd-ink-soft); border-radius: 6px; display: flex; align-items: center; justify-content: center; position: relative; font-size: 14px; }
.sd-cal-cell:nth-child(7n) { border-color: var(--sd-accent); }
.sd-cal-cell .mk { position: absolute; top: -4px; right: 0px; font-size: 11px; color: var(--sd-accent); }
.sd-cal-cell .mk.star { color: var(--sd-accent-3); }
</style>
