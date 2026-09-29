<script setup lang="ts">
// SCheckbox · 手绘勾选框（点击打勾，带描线动画）
import { ref } from 'vue'

const props = withDefaults(defineProps<{ modelValue?: boolean; label?: string }>(), {
  modelValue: false, label: '',
})
const emit = defineEmits<{ (e: 'update:modelValue', v: boolean): void }>()
const checked = ref(props.modelValue)

function toggle() {
  checked.value = !checked.value
  emit('update:modelValue', checked.value)
}
</script>

<template>
  <label class="sd-base sd-checkbox" @click.prevent="toggle">
    <svg viewBox="0 0 28 28" class="sd-ink" fill="none" :stroke="'var(--sd-ink)'" :stroke-width="1.8">
      <rect x="3.5" y="3.5" width="21" height="21" rx="3.5" :class="{ dim: checked }" />
      <path v-if="checked" class="tick" d="M8 14.5 12.5 19 21 8.5" :stroke="'var(--sd-accent-2)'" :stroke-width="2.6" />
    </svg>
    <span v-if="props.label" class="sd-checkbox-label" :class="{ strike: checked }">{{ props.label }}</span>
  </label>
</template>

<style scoped>
.sd-checkbox { display: inline-flex; align-items: center; gap: 10px; cursor: pointer; user-select: none; }
.sd-checkbox svg { width: 26px; height: 26px; flex: none; }
.sd-checkbox rect { transition: opacity .25s; }
.sd-checkbox .dim { opacity: .38; }
.sd-checkbox .tick { stroke-dasharray: 24; stroke-dashoffset: 24; animation: sd-tick .35s ease forwards; }
@keyframes sd-tick { to { stroke-dashoffset: 0; } }
.sd-checkbox-label.strike { text-decoration: line-through; color: var(--sd-ink-soft); }
</style>
