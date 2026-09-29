<script setup lang="ts">
// SLabelCard · 手账吊牌/书签
// variant: tag(方吊牌) | tag-line(虚线吊牌) | tag-write(写字吊牌) | tag-round(圆牌)
//          bookmark(燕尾书签) | bookmark-dash | bookmark-stripe | bookmark-heart
const props = withDefaults(defineProps<{
  text?: string
  variant?: string
  rotate?: number
}>(), { text: '', variant: 'tag', rotate: 0 })
</script>

<template>
  <div class="sd-base sd-label" :style="{ transform: `rotate(${props.rotate}deg)` }" :class="`v-${props.variant}`">
    <svg class="sd-label-bg sd-ink" viewBox="0 0 120 150" fill="var(--sd-paper)" :stroke="'var(--sd-ink)'" :stroke-width="1.8">
      <!-- 吊牌类 -->
      <g v-if="props.variant === 'tag'">
        <path d="M34 26h58l14 16-14 16v88H34V42L20 42z" transform="translate(0 -16) rotate(0)" />
        <path d="M34 10h52l16 14-16 14H34zM20 24h14M20 24l8-5M20 24l8 5" />
        <circle cx="46" cy="24" r="4" fill="var(--sd-paper)" />
      </g>
      <g v-else-if="props.variant === 'tag-line'">
        <path d="M30 16h60v100a4 4 0 0 1-4 4H34a4 4 0 0 1-4-4z" stroke-dasharray="6 5" />
        <path d="M26 22c4-5 9-7 15-6" />
        <circle cx="44" cy="28" r="4" />
      </g>
      <g v-else-if="props.variant === 'tag-write'">
        <path d="M26 20h68v116H26z" />
        <path d="M60 20c3-5 9-6 13-1M60 20v-4M73 16v4" />
        <line x1="36" y1="60" x2="84" y2="60" stroke-dasharray="5 5" />
        <line x1="36" y1="82" x2="84" y2="82" stroke-dasharray="5 5" />
        <path d="M70 34c2-3 6-3 8 0 2-3 6-3 8 0" transform="translate(-46 8)" />
      </g>
      <g v-else-if="props.variant === 'tag-round'">
        <ellipse cx="60" cy="70" rx="42" ry="48" />
        <circle cx="60" cy="30" r="4" fill="var(--sd-paper)" />
        <path d="M60 26c0-8 4-13 12-15" />
      </g>
      <!-- 书签类 -->
      <g v-else-if="props.variant === 'bookmark'">
        <path d="M34 10h52v120l-26-16-26 16z" />
      </g>
      <g v-else-if="props.variant === 'bookmark-dash'">
        <path d="M34 10h52v120l-26-16-26 16z" stroke-dasharray="6 5" fill="none" />
      </g>
      <g v-else-if="props.variant === 'bookmark-stripe'">
        <path d="M34 10h52v120l-26-16-26 16z" fill="none" />
        <path d="M40 12v96M50 12v104M60 12v108M70 12v104M80 12v96" stroke-dasharray="1 0" />
      </g>
      <g v-else-if="props.variant === 'bookmark-heart'">
        <path d="M34 10h52v120l-26-16-26 16z" />
        <path d="M60 62c-4-3-8-6.5-8-11 0-2.6 2-4.4 4.3-4.4 1.5 0 2.9.7 3.7 2 .8-1.3 2.2-2 3.7-2 2.3 0 4.3 1.8 4.3 4.4 0 4.5-4 8-8 11z" />
      </g>
    </svg>
    <div v-if="props.text" class="sd-label-text">{{ props.text }}</div>
    <div v-else class="sd-label-slot"><slot /></div>
  </div>
</template>

<style scoped>
.sd-label { position: relative; display: inline-block; width: 96px; }
.sd-label-bg { display: block; width: 100%; height: auto; }
.sd-label-text, .sd-label-slot { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; font-size: 17px; text-align: center; padding-top: 14px; }
.sd-label-slot { flex-direction: column; }
</style>
