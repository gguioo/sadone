<script setup lang="ts">
// SCorner · 手账 L 角饰（页面四角点缀，CSS 定位）
// variant: vine(藤蔓) | dash(虚线) | star(星星) | leaf(叶) | flower(角花)
const props = withDefaults(defineProps<{ variant?: string; flip?: boolean; size?: number }>(), {
  variant: 'vine', flip: false, size: 72,
})
</script>

<template>
  <svg class="sd-corner sd-ink" :class="{ flip: props.flip }" viewBox="0 0 80 80" fill="none" :stroke="'var(--sd-ink)'" :stroke-width="1.6" :style="{ width: props.size + 'px' }">
    <g v-if="props.variant === 'vine'">
      <path d="M8 72C8 40 24 14 60 8M8 72c-1-14 2-26 10-36" />
      <path d="M18 52c-4-1-6-4-6-8 4 0 7 2 8 6zM28 38c-4-1-6-4-6-8 4 0 7 2 8 6zM40 26c-3-2-4-5-3-9 4 1 6 4 6 8zM52 16c-3-2-4-5-3-9 4 1 6 4 6 8z" />
    </g>
    <g v-else-if="props.variant === 'dash'">
      <path d="M6 74V20a14 14 0 0 1 14-14h54" stroke-dasharray="6 6" />
      <path d="M14 60c3-3 8-3 11 0M40 12c3-3 8-3 11 0" />
    </g>
    <g v-else-if="props.variant === 'star'">
      <path d="M6 74V18M6 18h56" stroke-dasharray="2 4" />
      <path d="M20 34l2 5 5 2-5 2-2 5-2-5-5-2 5-2z" />
      <path d="M40 12l1.6 4 4 1.6-4 1.6-1.6 4-1.6-4-4-1.6 4-1.6z" />
    </g>
    <g v-else-if="props.variant === 'leaf'">
      <path d="M8 72C10 42 26 18 64 10" />
      <path d="M22 50c6-1 10 1 12 6-6 1-10-1-12-6zM36 34c6-1 10 1 12 6-6 1-10-1-12-6zM52 20c5-1 9 1 11 5-5 1-9-1-11-5z" />
    </g>
    <g v-else>
      <path d="M6 70V22a16 16 0 0 1 16-16h48" />
      <path d="M22 22c2-6 7-9 13-8M22 22c-6 2-9 7-8 13" />
      <path d="M22 12v6M19 15h6M50 6v6M47 9h6" />
    </g>
  </svg>
</template>

<style scoped>
.sd-corner { display: inline-block; height: auto; }
.sd-corner.flip { transform: scaleX(-1); }
</style>
