<script setup lang="ts">
// SPolaroid · 手账拍立得（slot 放图，顶部胶带可换花纹）
import SWashi from './SWashi.vue'

const props = withDefaults(defineProps<{
  caption?: string
  tape?: string
  rotate?: number
}>(), { caption: '', tape: 'grid', rotate: -2 })
</script>

<template>
  <div class="sd-base sd-polaroid" :style="{ transform: `rotate(${props.rotate}deg)` }">
    <SWashi :pattern="props.tape" :rotate="-1" :width="96" class="sd-polaroid-tape" />
    <div class="sd-polaroid-photo"><slot /></div>
    <div class="sd-polaroid-caption">{{ props.caption }}</div>
  </div>
</template>

<style scoped>
.sd-polaroid { position: relative; display: inline-block; background: var(--sd-paper); border: 1.8px solid var(--sd-ink); border-radius: 4px; padding: 10px 10px 6px; }
.sd-polaroid-tape { position: absolute; top: -12px; left: 50%; margin-left: -48px; z-index: 2; }
.sd-polaroid-photo { width: 140px; height: 140px; border: 1.4px solid var(--sd-ink-soft); background: var(--sd-paper-tint); overflow: hidden; display: flex; align-items: center; justify-content: center; }
.sd-polaroid-photo :deep(img) { max-width: 100%; max-height: 100%; object-fit: cover; }
.sd-polaroid-caption { text-align: center; font-size: 16px; padding: 6px 2px 4px; min-height: 20px; }
</style>
