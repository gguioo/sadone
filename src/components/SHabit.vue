<script setup lang="ts">
// SHabit · 习惯打卡 / 周历 / 心情打卡
// variant: habit(周打卡笑脸) | weekly(MTWTFSS 格) | mood(心情四格)
import { ref } from 'vue'

const props = withDefaults(defineProps<{ variant?: 'habit' | 'weekly' | 'mood'; title?: string }>(), {
  variant: 'habit', title: 'Habit Tracker',
})
const DAYS = ['M', 'T', 'W', 'T', 'F', 'S', 'S']
const on = ref<Record<number, boolean>>({})
function flip(i: number) { on.value[i] = !on.value[i] }
const MOODS = ['☺', '😐', '☹', '😤']
const mood = ref(0)
</script>

<template>
  <div class="sd-base sd-habit" :class="`v-${props.variant}`">
    <div v-if="props.variant === 'habit'" class="sd-hb-title">
      <svg viewBox="0 0 20 20" class="sd-ink" fill="none" :stroke="'var(--sd-ink)'" :stroke-width="1.6" width="18"><path d="M10 3a6.5 6.5 0 1 1-.2 13A6.5 6.5 0 0 1 10 3z" /><path d="M7.8 8.2h.01M12.2 8.2h.01M7.8 11.4c1.4 1.3 3 1.3 4.4 0" /></svg>
      {{ props.title }}
    </div>
    <div v-if="props.variant === 'habit'" class="sd-hb-row">
      <button v-for="i in 7" :key="i" class="sd-hb-dot" :class="{ on: on[i] }" @click="flip(i)" type="button"><span>☺</span></button>
    </div>
    <template v-else-if="props.variant === 'weekly'">
      <div class="sd-hb-title">Weekly</div>
      <div class="sd-wk-grid">
        <div v-for="(d, i) in DAYS" :key="i" class="sd-wk-col">
          <span class="sd-wk-day">{{ d }}</span>
          <button class="sd-hb-dot sm" :class="{ on: on[i] }" @click="flip(i)" type="button"><span>✓</span></button>
        </div>
      </div>
    </template>
    <template v-else>
      <div class="sd-hb-title">Mood :</div>
      <div class="sd-mood-row">
        <button v-for="(m, i) in MOODS" :key="i" class="sd-mood" :class="{ on: mood === i }" @click="mood = i" type="button">{{ m }}</button>
      </div>
    </template>
  </div>
</template>

<style scoped>
.sd-habit { background: var(--sd-paper); border: 1.8px solid var(--sd-ink); border-radius: 10px; padding: 12px 14px; display: inline-block; }
.sd-hb-title { font-size: 18px; font-weight: 700; display: flex; align-items: center; gap: 6px; margin-bottom: 10px; }
.sd-hb-dot { width: 30px; height: 30px; border-radius: 50%; border: 1.7px solid var(--sd-ink); background: transparent; cursor: pointer; font-family: inherit; font-size: 14px; color: var(--sd-ink); padding: 0; }
.sd-hb-dot.on { background: var(--sd-accent-2); border-color: var(--sd-accent-2); color: #fff; }
.sd-hb-row, .sd-mood-row { display: flex; gap: 8px; }
.sd-wk-grid { display: flex; gap: 8px; }
.sd-wk-col { display: flex; flex-direction: column; align-items: center; gap: 4px; }
.sd-wk-day { font-size: 13px; color: var(--sd-ink-soft); }
.sd-hb-dot.sm { width: 24px; height: 24px; font-size: 12px; }
.sd-mood { width: 34px; height: 34px; border-radius: 50%; border: 1.7px solid var(--sd-ink); background: transparent; cursor: pointer; font-size: 16px; font-family: inherit; }
.sd-mood.on { background: var(--sd-accent-3); }
</style>
