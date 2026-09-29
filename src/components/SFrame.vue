<script setup lang="ts">
// SFrame · 手账装饰底板框（slot 放内容）
// variant: dashed(虚线) | clip(长尾夹) | grid(格纹纸) | hearts(爱心虚线) | cloud(云朵) | wreath(花环角)
const props = withDefaults(defineProps<{ variant?: string }>(), { variant: 'dashed' })
</script>

<template>
  <div class="sd-base sd-frame" :class="`v-${props.variant}`">
    <svg v-if="props.variant === 'cloud'" class="sd-frame-svg sd-ink" viewBox="0 0 300 130" fill="none" :stroke="'var(--sd-ink)'" :stroke-width="1.8">
      <path d="M42 108c-16 0-26-10-24-24 1.6-11 10-18 21-19-2-14 8-26 23-27 8-.5 15 2 20 7 4-10 14-17 26-17 13 0 24 8 27 19 5-3 11-4 17-3 13 2 21 12 20 24 12 1 21 9 21 20 0 11-9 20-21 20z" />
      <path d="M228 30c3-3 8-3 11 0 3-3 8-3 11 0M233 27v-6M240 26v-5" />
    </svg>
    <svg v-else-if="props.variant === 'wreath'" class="sd-frame-svg sd-ink" viewBox="0 0 300 130" fill="none" :stroke="'var(--sd-ink)'" :stroke-width="1.6">
      <rect x="28" y="18" width="244" height="94" rx="14" />
      <path d="M34 30c8-4 16-3 22 2M34 100c8 4 16 3 22-2M266 30c-8-4-16-3-22 2M266 100c-8 4-16 3-22-2" />
      <path d="M52 22c3-3 8-3 11 0M60 108c3 3 8 3 11 0M248 22c-3-3-8-3-11 0M240 108c-3 3-8 3-11 0" />
      <path d="M270 46l2 5 5 2-5 2-2 5-2-5-5-2 5-2z" />
    </svg>
    <svg v-else-if="props.variant === 'clip'" class="sd-frame-svg sd-ink" viewBox="0 0 300 130" fill="none" :stroke="'var(--sd-ink)'" :stroke-width="1.8">
      <rect x="30" y="26" width="240" height="92" rx="10" stroke-dasharray="1 0" />
      <path d="M138 26c-2-7 2-12 9-12h6c7 0 11 5 9 12M141 14v-3M159 14v-3" />
      <circle cx="150" cy="18" r="3.4" />
    </svg>
    <svg v-else-if="props.variant === 'grid'" class="sd-frame-svg sd-ink" viewBox="0 0 300 130" fill="none" :stroke="'var(--sd-ink-soft)'" :stroke-width="1">
      <rect x="30" y="14" width="240" height="104" rx="4" />
      <path d="M60 14v104M90 14v104M120 14v104M150 14v104M180 14v104M210 14v104M240 14v104M270 14v104" />
      <path d="M30 40h240M30 66h240M30 92h240" />
      <g :stroke="'var(--sd-ink)'" :stroke-width="1.6">
        <path d="M226 14c8-6 16-6 24 0M226 14c8-2 16-2 24 0" />
        <rect x="230" y="8" width="16" height="9" rx="1.5" transform="rotate(-4 238 12)" />
      </g>
    </svg>
    <svg v-else-if="props.variant === 'hearts'" class="sd-frame-svg sd-ink" viewBox="0 0 300 130" fill="none" :stroke="'var(--sd-ink)'" :stroke-width="1.7">
      <rect x="34" y="20" width="232" height="90" rx="12" stroke-dasharray="7 6" />
      <path d="M52 34c-1.8-1.4-3.6-3-3.6-5 0-1.2.9-2 2-2 .7 0 1.3.3 1.6.9.3-.6.9-.9 1.6-.9 1.1 0 2 .8 2 2 0 2-1.8 3.6-3.6 5zM248 96c-1.8-1.4-3.6-3-3.6-5 0-1.2.9-2 2-2 .7 0 1.3.3 1.6.9.3-.6.9-.9 1.6-.9 1.1 0 2 .8 2 2 0 2-1.8 3.6-3.6 5z" />
      <path d="M60 96c-1.4-1.1-2.8-2.3-2.8-3.9 0-.9.7-1.6 1.6-1.6.5 0 1 .2 1.2.7.2-.5.7-.7 1.2-.7.9 0 1.6.7 1.6 1.6 0 1.6-1.4 2.8-2.8 3.9z" />
    </svg>
    <div v-else class="sd-frame-css"><slot /></div>
    <div v-if="props.variant !== 'dashed'" class="sd-frame-slot"><slot /></div>
  </div>
</template>

<style scoped>
.sd-frame { position: relative; display: inline-block; padding: 22px 26px; background: var(--sd-paper); }
.sd-frame-svg { display: block; position: absolute; inset: 0; width: 100%; height: 100%; }
.sd-frame-slot, .sd-frame-css { position: relative; z-index: 1; min-width: 200px; min-height: 64px; }
.v-dashed .sd-frame-css { border: 1.7px dashed var(--sd-ink); border-radius: var(--sd-radius); padding: 14px 18px; }
.v-dashed { background: transparent; padding: 0; }
</style>
