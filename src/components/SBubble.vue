<script setup lang="ts">
// SBubble · 手账对话气泡（slot 放文字）
// variant: rect(矩形带尾) | cloud(云朵) | dash(虚线椭圆) | tail(带尖尾矩形) | think(思考泡) | heart(心形)
const props = withDefaults(defineProps<{ variant?: string }>(), { variant: 'cloud' })
</script>

<template>
  <div class="sd-base sd-bubble" :class="`v-${props.variant}`">
    <svg class="sd-bubble-svg sd-ink" viewBox="0 0 260 110" fill="var(--sd-paper)" :stroke="'var(--sd-ink)'" :stroke-width="1.8">
      <g v-if="props.variant === 'cloud'">
        <path d="M56 84c-18 0-30-11-27-26 2-11 11-19 23-20-2-15 9-27 25-28 9-.5 17 2 22 8 5-11 16-18 29-18 14 0 27 9 30 21 6-3 12-4 19-3 14 2 23 13 22 26 13 1 22 10 22 21 0 11-10 19-23 19z" />
      </g>
      <g v-else-if="props.variant === 'rect'">
        <path d="M28 22h204v56H120l-18 20 2-20H28z" />
      </g>
      <g v-else-if="props.variant === 'tail'">
        <path d="M30 20h200v54H96l24 26-52-26H30z" />
      </g>
      <g v-else-if="props.variant === 'dash'">
        <ellipse cx="122" cy="48" rx="92" ry="34" stroke-dasharray="8 7" />
        <path d="M66 82c-4 5-9 8-15 10M58 88c-2 2-5 4-8 5" />
      </g>
      <g v-else-if="props.variant === 'think'">
        <path d="M48 78c-16 0-26-9-24-21 1.6-10 9.5-17 20-18-2-13 8-24 22-25 8-.4 15 2 20 7 4-9 13-16 25-16 13 0 24 8 27 18 5-3 10-4 16-3 12 2 20 11 19 22 11 1 19 9 19 18 0 9-8 18-20 18z" />
        <circle cx="30" cy="92" r="6" /><circle cx="16" cy="102" r="3.4" />
      </g>
      <g v-else-if="props.variant === 'heart'">
        <path d="M130 96S30 60 30 34c0-13 9.5-22 21-22 7 0 14 4 18 11 5-9 14-15 25-15 15 0 28 11 28 26 0 8-3 16-8 24" />
        <path d="M114 78c8 8 16 14 16 14s-40-6-62-24" />
      </g>
      <g v-else>
        <rect x="26" y="20" width="208" height="60" rx="26" />
      </g>
    </svg>
    <div class="sd-bubble-text"><slot /></div>
  </div>
</template>

<style scoped>
.sd-bubble { position: relative; display: inline-block; min-width: 200px; }
.sd-bubble-svg { display: block; width: 100%; height: auto; }
.sd-bubble-text { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; text-align: center; font-size: 19px; padding: 6px 30px 14px; }
.v-heart .sd-bubble-text { padding-top: 4px; }
</style>
