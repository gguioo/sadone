<script setup lang="ts">
// SDateChip · 日期条 / 倒计时条（Date: / /  ·  D-n ♥）
const props = withDefaults(defineProps<{
  variant?: 'date' | 'countdown'
  year?: string
  month?: string
  day?: string
  dday?: number
}>(), { variant: 'date', year: '26', month: '09', day: '29', dday: 7 })
</script>

<template>
  <div class="sd-base sd-date">
    <svg class="sd-ink" viewBox="0 0 220 34" fill="none" :stroke="'var(--sd-ink)'" :stroke-width="1.7">
      <rect x="3" y="5" width="214" height="24" rx="7" />
      <template v-if="props.variant === 'date'">
        <text x="18" y="22" class="sd-date-txt">Date :</text>
        <text x="112" y="22" class="sd-date-txt">{{ props.year }}</text>
        <text x="140" y="22" class="sd-date-txt">/</text>
        <text x="158" y="22" class="sd-date-txt">{{ props.month }}</text>
        <text x="186" y="22" class="sd-date-txt">/</text>
      </template>
      <template v-else>
        <text x="18" y="22" class="sd-date-txt">D-{{ props.dday }}</text>
        <path d="M182 12c-2-1.6-4-3.4-4-5.6 0-1.3 1-2.2 2.1-2.2.8 0 1.5.4 1.9 1 .4-.6 1.1-1 1.9-1 1.1 0 2.1.9 2.1 2.2 0 2.2-2 4-4 5.6z" fill="var(--sd-accent)" stroke="none" />
      </template>
    </svg>
  </div>
</template>

<style scoped>
.sd-date { display: inline-block; width: 200px; }
.sd-date svg { display: block; width: 100%; height: auto; }
.sd-date-txt { font-family: var(--sd-font); font-size: 17px; fill: var(--sd-ink); stroke: none; }
</style>
