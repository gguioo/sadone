<script setup lang="ts">
// STag · 手账小标签贴纸
// variant: point | tips | important | remember | done | okay | nice（或自定义 text）
const props = withDefaults(defineProps<{
  text?: string
  variant?: 'point' | 'tips' | 'important' | 'remember' | 'done' | 'okay' | 'nice'
}>(), { variant: 'point' })

const PRESET: Record<string, string> = {
  point: 'Point ♥', tips: 'Tips ❀', important: '¡Important!', remember: 'Remember 🎀',
  done: 'Done ♥', okay: 'Okay ☺', nice: 'Nice ✦',
}
</script>

<template>
  <span class="sd-base sd-tag" :class="`v-${props.variant}`">
    <svg class="sd-tag-bg sd-ink" viewBox="0 0 120 40" fill="var(--sd-paper)" :stroke="'var(--sd-ink)'" :stroke-width="1.7">
      <path v-if="['point', 'done'].includes(props.variant)" d="M10 8h100a6 6 0 0 1 6 6v12a6 6 0 0 1-6 6H10l-6-12z" />
      <path v-else-if="['tips', 'nice'].includes(props.variant)" d="M14 6h92a12 12 0 0 1 0 28H14A14 14 0 0 1 14 6z" />
      <path v-else-if="props.variant === 'important'" d="M12 6h96l8 14-8 14H12l-8-14z" />
      <path v-else d="M12 7h96a8 8 0 0 1 0 26H12a13 13 0 0 1 0-26z" />
    </svg>
    <span class="sd-tag-text">{{ props.text || PRESET[props.variant] }}</span>
  </span>
</template>

<style scoped>
.sd-tag { position: relative; display: inline-flex; padding: 2px 4px; }
.sd-tag-bg { display: block; width: 108px; height: 36px; }
.sd-tag-text { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; font-size: 17px; font-weight: 700; letter-spacing: .05em; padding-left: 8px; }
.sd-tag.v-important .sd-tag-text { font-size: 15px; }
</style>
