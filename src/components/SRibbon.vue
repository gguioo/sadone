<script setup lang="ts">
// SRibbon · 手账丝带标题
// variant: wing(双翼) | curve(上拱) | plain(斜切尾) | wide(宽幅) | bow(蝴蝶结)
const props = withDefaults(defineProps<{
  text?: string
  variant?: 'wing' | 'curve' | 'plain' | 'wide' | 'bow'
}>(), { text: 'Title', variant: 'wing' })
</script>

<template>
  <div class="sd-base sd-ribbon" :class="`v-${props.variant}`">
    <svg viewBox="0 0 240 64" class="sd-ink" fill="none" :stroke="'var(--sd-ink)'" :stroke-width="1.8">
      <!-- wing 双翼横幅 -->
      <g v-if="props.variant === 'wing'">
        <path d="M56 20 Q120 8 184 20 L184 44 Q120 54 56 44 Z" />
        <path d="M56 20 36 26 46 32 38 40 58 44" />
        <path d="M184 20 204 26 194 32 202 40 182 44" />
      </g>
      <!-- curve 上拱缎带 -->
      <g v-else-if="props.variant === 'curve'">
        <path d="M50 44 Q56 14 120 14 Q184 14 190 44 Q160 36 120 36 Q80 36 50 44 Z" />
        <path d="M50 44 40 52M190 44 200 52" />
      </g>
      <!-- plain 斜切尾 -->
      <g v-else-if="props.variant === 'plain'">
        <path d="M52 18h136v28H52z" />
        <path d="M52 18 40 24l12 6v10l-12 6 12 6M188 18l12 6-12 6v10l12 6-12 6" />
      </g>
      <!-- wide 宽幅 -->
      <g v-else-if="props.variant === 'wide'">
        <path d="M44 16h152a4 4 0 0 1 4 4v24a4 4 0 0 1-4 4H44a4 4 0 0 1-4-4V20a4 4 0 0 1 4-4z" />
        <path d="M40 22l-10 10 10 10M200 22l10 10-10 10" />
      </g>
      <!-- bow 蝴蝶结 -->
      <g v-else>
        <path d="M58 20 Q120 10 182 20 L182 46 Q120 56 58 46 Z" />
        <path d="M58 21c-8-6-18-6-22 0-3 5 2 11 10 12 5 .6 9-.6 12-4M182 21c8-6 18-6 22 0 3 5-2 11-10 12-5 .6-9-.6-12-4" />
        <circle cx="56" cy="33" r="3.2" /><circle cx="184" cy="33" r="3.2" />
      </g>
    </svg>
    <span class="sd-ribbon-text">{{ props.text }}</span>
  </div>
</template>

<style scoped>
.sd-ribbon { position: relative; display: inline-block; min-width: 180px; }
.sd-ribbon svg { display: block; width: 100%; height: auto; }
.sd-ribbon-text {
  position: absolute; inset: 0; display: flex; align-items: center; justify-content: center;
  font-size: 22px; font-weight: 700; letter-spacing: .06em; padding-bottom: 2px;
}
.v-bow .sd-ribbon-text { font-size: 20px; }
</style>
