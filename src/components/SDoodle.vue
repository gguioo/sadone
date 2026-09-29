<script setup lang="ts">
// SDoodle · 单枚手绘图标（name 见注册表：sun/cloud/cat/pencil/bike... 约 110 枚）
import { computed } from 'vue'
import { NATURE_ICONS, type DoodleDef } from '../icons-nature'
import { LIFE_ICONS } from '../icons-life'

const props = withDefaults(defineProps<{ name: string; size?: number }>(), { size: 26 })
const ICONS: Record<string, DoodleDef> = { ...NATURE_ICONS, ...LIFE_ICONS }
const def = computed(() => ICONS[props.name])
</script>

<template>
  <svg v-if="def" :width="props.size" :height="props.size" viewBox="0 0 24 24" class="sd-doodle sd-ink" fill="none" :stroke="'var(--sd-ink)'" :stroke-width="1.7">
    <path v-for="(p, i) in def.d" :key="i" :d="p" :fill="def.fill ? 'currentColor' : 'none'" />
  </svg>
</template>

<style scoped>
.sd-doodle { display: inline-block; vertical-align: middle; }
</style>
