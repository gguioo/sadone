<script setup lang="ts">
// SWeekbar · 周条（Mon~Sun 圆点，可点选）
import { ref } from 'vue'

const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
const props = withDefaults(defineProps<{ active?: number[] }>(), { active: () => [] })
const on = ref<Record<number, boolean>>({})
props.active.forEach((i) => (on.value[i] = true))
function flip(i: number) { on.value[i] = !on.value[i] }
</script>

<template>
  <div class="sd-base sd-week">
    <div v-for="(d, i) in DAYS" :key="i" class="sd-week-col">
      <span class="sd-week-day">{{ d }}</span>
      <button class="sd-week-dot" :class="{ on: on[i] }" type="button" @click="flip(i)"><span>✓</span></button>
    </div>
  </div>
</template>

<style scoped>
.sd-week { display: inline-flex; gap: 12px; padding: 10px 14px; border: 1.8px solid var(--sd-ink); border-radius: 10px; background: var(--sd-paper); }
.sd-week-col { display: flex; flex-direction: column; align-items: center; gap: 5px; }
.sd-week-day { font-size: 13px; color: var(--sd-ink-soft); }
.sd-week-dot { width: 24px; height: 24px; border-radius: 50%; border: 1.6px solid var(--sd-ink); background: transparent; cursor: pointer; font-size: 12px; color: var(--sd-ink); font-family: inherit; padding: 0; }
.sd-week-dot.on { background: var(--sd-accent); border-color: var(--sd-accent); color: #fff; }
</style>
