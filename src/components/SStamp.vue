<script setup lang="ts">
// SStamp · 手账邮票（锯齿边框 + 内图，图标名见 SDoodle 注册表）
import { NATURE_ICONS, type DoodleDef } from '../icons-nature'
import { LIFE_ICONS } from '../icons-life'

const props = withDefaults(defineProps<{
  icon?: string
  text?: string
}>(), { icon: 'flower', text: '' })

const ICONS: Record<string, DoodleDef> = { ...NATURE_ICONS, ...LIFE_ICONS }
</script>

<template>
  <div class="sd-base sd-stamp">
    <svg class="sd-ink" viewBox="0 0 76 88" fill="var(--sd-paper)" :stroke="'var(--sd-ink)'" :stroke-width="1.6">
      <path d="M8 8h60v72H8z M8 8a4 4 0 0 1-4-4 4 4 0 0 0 4-4M20 8a4 4 0 0 1-4-4 4 4 0 0 0 4-4M32 8a4 4 0 0 1-4-4 4 4 0 0 0 4-4M44 8a4 4 0 0 1-4-4 4 4 0 0 0 4-4M56 8a4 4 0 0 1-4-4 4 4 0 0 0 4-4M68 8a4 4 0 0 1-4-4 4 4 0 0 0 4-4M80 8a4 4 0 0 1-4-4 4 4 0 0 0 4-4M8 0a4 4 0 0 0-4 4 4 4 0 0 1-4 4" transform="translate(4 4)" />
      <g transform="translate(14 14) scale(2)" fill="none">
        <path v-for="(p, i) in ICONS[props.icon]?.d || []" :key="i" :d="p" />
      </g>
    </svg>
    <div v-if="props.text" class="sd-stamp-text">{{ props.text }}</div>
  </div>
</template>

<style scoped>
.sd-stamp { position: relative; display: inline-block; width: 76px; }
.sd-stamp svg { display: block; width: 100%; height: auto; }
.sd-stamp-text { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; font-size: 15px; font-weight: 700; text-align: center; }
</style>
