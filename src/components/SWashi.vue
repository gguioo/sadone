<script setup lang="ts">
// SWashi · 手账和纸胶带（锯齿两端 + 花纹）
// pattern: flower | grid | dot | stripe | wave | cross | heart | bow
const props = withDefaults(defineProps<{
  pattern?: string
  text?: string
  rotate?: number
  width?: number
}>(), { pattern: 'dot', text: '', rotate: -3, width: 150 })

const IDS: Record<string, string> = {
  flower: 'sdw-fl', grid: 'sdw-gr', dot: 'sdw-dot', stripe: 'sdw-st',
  wave: 'sdw-wv', cross: 'sdw-cx', heart: 'sdw-he', bow: 'sdw-bw',
}
</script>

<template>
  <div class="sd-tape-wrap" :style="{ transform: `rotate(${props.rotate}deg)`, width: props.width + 'px' }">
    <svg class="sd-ink" viewBox="0 0 150 26" :stroke="'var(--sd-ink)'" :stroke-width="1.3">
      <defs>
        <pattern id="sdw-fl" width="18" height="18" patternUnits="userSpaceOnUse">
          <circle cx="9" cy="9" r="2.2" fill="none" /><circle cx="4" cy="9" r="1.1" fill="none" /><circle cx="14" cy="9" r="1.1" fill="none" />
        </pattern>
        <pattern id="sdw-gr" width="9" height="9" patternUnits="userSpaceOnUse">
          <path d="M0 0h9v9" fill="none" />
        </pattern>
        <pattern id="sdw-dot" width="12" height="12" patternUnits="userSpaceOnUse">
          <circle cx="3" cy="3" r="1.8" fill="currentColor" stroke="none" /><circle cx="9" cy="9" r="1.8" fill="currentColor" stroke="none" />
        </pattern>
        <pattern id="sdw-st" width="8" height="8" patternUnits="userSpaceOnUse">
          <path d="M-2 10 10-2M2 14 14 2" fill="none" />
        </pattern>
        <pattern id="sdw-wv" width="14" height="8" patternUnits="userSpaceOnUse">
          <path d="M0 6c3.5-5 10.5-5 14 0" fill="none" />
        </pattern>
        <pattern id="sdw-cx" width="10" height="10" patternUnits="userSpaceOnUse">
          <path d="M-2 2 12 12M12 2-2 12" fill="none" />
        </pattern>
        <pattern id="sdw-he" width="16" height="12" patternUnits="userSpaceOnUse">
          <path d="M8 9c-1.6-1.3-3.2-2.7-3.2-4.4 0-1 .8-1.8 1.7-1.8.6 0 1.1.3 1.5.8.4-.5.9-.8 1.5-.8.9 0 1.7.8 1.7 1.8 0 1.7-1.6 3.1-3.2 4.4z" fill="currentColor" stroke="none" />
        </pattern>
        <pattern id="sdw-bw" width="20" height="12" patternUnits="userSpaceOnUse">
          <circle cx="6" cy="6" r="2.4" fill="none" /><circle cx="14" cy="6" r="2.4" fill="none" /><path d="M8.2 6h3.6" fill="none" />
        </pattern>
      </defs>
      <!-- 锯齿两端主体 -->
      <path d="M6 3h138l4 10-4 10H6l-4-10z" :fill="`url(#${IDS[props.pattern]})`" />
    </svg>
    <span v-if="props.text" class="sd-tape-text sd-base">{{ props.text }}</span>
  </div>
</template>

<style scoped>
.sd-tape-wrap { position: relative; display: inline-block; color: var(--sd-ink-soft); opacity: .92; }
.sd-tape-wrap svg { display: block; width: 100%; height: auto; }
.sd-tape-text { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; font-size: 13px; color: var(--sd-ink); }
</style>
