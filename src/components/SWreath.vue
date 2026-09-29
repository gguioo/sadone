<script setup lang="ts">
// SWreath · 手账花环（slot 放中心内容）
// variant: round(圆形+蝴蝶结) | hex(六边)
const props = withDefaults(defineProps<{ variant?: 'round' | 'hex'; size?: number }>(), {
  variant: 'round', size: 160,
})
</script>

<template>
  <div class="sd-base sd-wreath" :style="{ width: props.size + 'px' }">
    <svg class="sd-ink" viewBox="0 0 120 130" fill="none" :stroke="'var(--sd-ink)'" :stroke-width="1.6">
      <g v-if="props.variant === 'round'">
        <path d="M60 12c14 0 25 8 27 20M60 12c-14 0-25 8-27 20M87 32c8 4 13 12 13 21M33 32c-8 4-13 12-13 21M100 53c0 12-5 22-13 28M20 53c0 12 5 22 13 28M87 81c-2 9-10 16-20 18M33 81c2 9 10 16 20 18" />
        <path d="M87 22c6-2 11-1 15 3M33 22C27 20 22 21 18 25" />
        <path d="M92 25c3-3 8-3 11 0M92 25c3-1.5 8-1.5 11 0M28 25c-3-3-8-3-11 0M28 25c-3-1.5-8-1.5-11 0" />
        <path d="M60 100c-6 2-11 7-12 14M60 100c6 2 11 7 12 14" />
        <path d="M60 104c-5-4-11-4.5-16-1 4 5 10 6.5 16 3zM60 104c5-4 11-4.5 16-1-4 5-10 6.5-16 3z" />
      </g>
      <g v-else>
        <path d="M60 8 106 34v52L60 112 14 86V34z" />
        <path d="M52 14c3 3 3 7 0 10M68 14c-3 3-3 7 0 10M60 8v4M52 106c3-3 3-7 0-10M68 106c-3 3-3 7 0 10" />
        <path d="M14 60h4M102 60h4" />
      </g>
    </svg>
    <div class="sd-wreath-center"><slot /></div>
  </div>
</template>

<style scoped>
.sd-wreath { position: relative; display: inline-block; }
.sd-wreath svg { display: block; width: 100%; height: auto; }
.sd-wreath-center { position: absolute; inset: 12% 18% 20%; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; font-size: 18px; }
</style>
