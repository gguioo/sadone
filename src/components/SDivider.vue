<script setup lang="ts">
// SDivider · 手账分隔线
// variant: dash | heart-line | vine | bow-line | star-dot | diamond-wave | wave | wave2 | dots | slash | loop
const props = withDefaults(defineProps<{ variant?: string; width?: number }>(), {
  variant: 'vine', width: 260,
})
</script>

<template>
  <svg class="sd-divider sd-ink" viewBox="0 0 260 20" fill="none" :stroke="'var(--sd-ink)'" :stroke-width="1.6" :style="{ width: props.width + 'px' }">
    <line v-if="props.variant === 'dash'" x1="6" y1="10" x2="254" y2="10" stroke-dasharray="7 6" />
    <g v-else-if="props.variant === 'heart-line'">
      <line x1="10" y1="10" x2="112" y2="10" /><line x1="148" y1="10" x2="250" y2="10" />
      <path d="M130 14c-3.4-2.6-6.8-5.4-6.8-8.8 0-2.2 1.7-3.7 3.6-3.7 1.3 0 2.5.6 3.2 1.7.7-1.1 1.9-1.7 3.2-1.7 1.9 0 3.6 1.5 3.6 3.7 0 3.4-3.4 6.2-6.8 8.8z" />
    </g>
    <path v-else-if="props.variant === 'vine'" d="M8 12c8-8 14-8 22 0s14 8 22 0 14-8 22 0 14 8 22 0 14-8 22 0 14 8 22 0 14-8 22 0 14 8 22 0 14-8 22 0 14 8 22 0 14-8 22 0" />
    <g v-else-if="props.variant === 'bow-line'">
      <line x1="10" y1="10" x2="105" y2="10" /><line x1="155" y1="10" x2="250" y2="10" />
      <circle cx="121" cy="10" r="4.4" /><circle cx="139" cy="10" r="4.4" /><path d="M125.4 10h9.2" />
    </g>
    <g v-else-if="props.variant === 'star-dot'">
      <path d="M130 4l1.6 4.4L136 10l-4.4 1.6L130 16l-1.6-4.4L124 10l4.4-1.6z" />
      <circle cx="90" cy="10" r="1.6" fill="currentColor" stroke="none" /><circle cx="110" cy="10" r="1.6" fill="currentColor" stroke="none" /><circle cx="170" cy="10" r="1.6" fill="currentColor" stroke="none" /><circle cx="190" cy="10" r="1.6" fill="currentColor" stroke="none" />
    </g>
    <g v-else-if="props.variant === 'diamond-wave'">
      <path d="M6 10c3-4 6-4 9 0s6 4 9 0" transform="translate(0 0)" />
      <path d="M30 6l4 4-4 4M50 6l4 4-4 4M70 6l4 4-4 4M90 6l4 4-4 4M110 6l4 4-4 4M130 6l4 4-4 4M150 6l4 4-4 4M170 6l4 4-4 4M190 6l4 4-4 4M210 6l4 4-4 4M230 6l4 4-4 4" />
    </g>
    <path v-else-if="props.variant === 'wave'" d="M6 10c6-7 11-7 17 0s11 7 17 0 11-7 17 0 11 7 17 0 11-7 17 0 11 7 17 0 11-7 17 0 11 7 17 0 11-7 17 0 11 7 17 0 11-7 17 0 11 7 17 0" />
    <path v-else-if="props.variant === 'wave2'" d="M6 14c5-8 10-8 15 0s10 8 15 0 10-8 15 0 10 8 15 0 10-8 15 0 10 8 15 0 10-8 15 0 10-8 15 0 10 8 15 0 10-8 15 0 10-8 15 0 10-8 15 0 10-8 15 0" />
    <g v-else-if="props.variant === 'dots'">
      <circle v-for="i in 17" :key="i" :cx="10 + (i - 1) * 15" cy="10" r="1.8" fill="currentColor" stroke="none" />
    </g>
    <g v-else-if="props.variant === 'slash'">
      <path v-for="i in 17" :key="i" :d="`M${6 + (i - 1) * 15} 14l7-8`" />
    </g>
    <path v-else-if="props.variant === 'loop'" d="M8 10c4-6 9-6 13 0s9 6 13 0 9-6 13 0 9 6 13 0 9-6 13 0 9 6 13 0 9-6 13 0 9 6 13 0 9-6 13 0 9-6 13 0 9 6 13 0 9-6 13 0 9-6 13 0 9-6 13 0 9 6 13 0 9-6 13 0 9-6 13 0" />
    <g v-else-if="props.variant === 'heart-chain'">
      <path v-for="i in 8" :key="i" :d="`M${16 + (i - 1) * 32} 12c-2.4-1.8-4.8-3.8-4.8-6.2 0-1.5 1.2-2.6 2.5-2.6.9 0 1.8.5 2.3 1.2.5-.7 1.4-1.2 2.3-1.2 1.3 0 2.5 1.1 2.5 2.6 0 2.4-2.4 4.4-4.8 6.2z`" transform="translate(0 -1)" />
    </g>
  </svg>
</template>

<style scoped>
.sd-divider { display: block; height: auto; color: var(--sd-ink); }
</style>
