<script setup lang="ts">
// SArrow · 手账手绘箭头
// variant: straight | dash | curve | thick | wavy | hook | dotted
const props = withDefaults(defineProps<{ variant?: string; width?: number }>(), {
  variant: 'straight', width: 120,
})
</script>

<template>
  <svg class="sd-arrow sd-ink" viewBox="0 0 120 32" fill="none" :stroke="'var(--sd-ink)'" :stroke-width="1.8" :style="{ width: props.width + 'px' }">
    <g v-if="props.variant === 'straight'">
      <line x1="8" y1="16" x2="104" y2="16" /><path d="M96 9c3 3 6 5.5 10 7-4 1.5-7 4-10 7" />
    </g>
    <g v-else-if="props.variant === 'dash'">
      <line x1="8" y1="16" x2="100" y2="16" stroke-dasharray="7 6" /><path d="M94 9c3 3 6 5.5 10 7-4 1.5-7 4-10 7" />
    </g>
    <g v-else-if="props.variant === 'curve'">
      <path d="M8 24C30 8 62 6 100 13" /><path d="M92 7c3.5 2.4 6.5 4.4 11 6-4 1.8-7 4.2-10.5 7.4" />
    </g>
    <g v-else-if="props.variant === 'thick'">
      <path d="M8 22c14-8 30-12 88-12l-14-5M96 10l10 0 2 2-4 4-8 2" stroke-width="2.6" />
    </g>
    <g v-else-if="props.variant === 'wavy'">
      <path d="M8 16c5-7 10-7 15 0s10 7 15 0 10-7 15 0 10 7 15 0 10-7 15 0 10 7 15 0" /><path d="M90 9c3 3 6 5.5 10 7-4 1.5-7 4-10 7" />
    </g>
    <g v-else-if="props.variant === 'hook'">
      <path d="M14 26c0-12 10-20 24-20 14 0 22 6 24 14" /><path d="M56 15c2.6 1.6 5 2.6 9 3-3.4 2-5.4 4.2-7 8" />
    </g>
    <g v-else-if="props.variant === 'dotted'">
      <circle v-for="i in 7" :key="i" :cx="10 + (i - 1) * 14" :cy="16" r="1.7" fill="currentColor" stroke="none" /><path d="M96 9c3 3 6 5.5 10 7-4 1.5-7 4-10 7" />
    </g>
  </svg>
</template>

<style scoped>
.sd-arrow { display: block; height: auto; color: var(--sd-ink); }
</style>
