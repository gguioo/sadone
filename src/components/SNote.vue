<script setup lang="ts">
// SNote · 手账便签纸卡（静态骨架版；可交互版见 STodoList）
// variant: todo(方勾) | check(方勾+折角) | plan(圆圈) | memo(虚线行) | notes(圆点) | shopping(方勾+篮)
const props = withDefaults(defineProps<{
  title?: string
  variant?: 'todo' | 'check' | 'plan' | 'memo' | 'notes' | 'shopping'
  rows?: number
}>(), { title: 'To Do List', variant: 'todo', rows: 4 })
</script>

<template>
  <div class="sd-base sd-note" :class="`v-${props.variant}`">
    <svg class="sd-note-bg sd-ink" viewBox="0 0 220 240" fill="none" :stroke="'var(--sd-ink)'" :stroke-width="1.8">
      <g v-if="props.variant === 'check'">
        <path d="M34 14h152l12 12v200H34z" />
        <path d="M186 14v12h12" />
        <path d="M148 10c2-5 6-7 11-5" />
      </g>
      <g v-else-if="props.variant === 'notes'">
        <path d="M30 14h160v212H30z" />
        <path d="M186 14l-14 14" />
      </g>
      <rect v-else x="30" y="14" width="160" height="212" rx="6" />
      <!-- 顶部装饰 -->
      <g v-if="props.variant === 'memo'">
        <path d="M104 12c4-4 10-4 14 0M106 8c2-2 6-2 8 0M118 9c2-2 6-2 8 0" transform="translate(-4 0)" />
      </g>
      <g v-else-if="props.variant === 'notes'">
        <path d="M150 10c2-4 6-6 10-5M155 8l1-4" />
      </g>
      <!-- 行与标记 -->
      <g v-for="i in props.rows" :key="i" :transform="`translate(0 ${(i - 1) * 38})`">
        <!-- 勾选框 -->
        <rect v-if="['todo', 'check', 'shopping'].includes(props.variant)" x="46" :y="66" width="15" height="15" rx="2" />
        <circle v-else-if="props.variant === 'plan'" cx="53" cy="73" r="7.5" />
        <circle v-else-if="props.variant === 'notes'" cx="53" cy="73" r="2.6" fill="var(--sd-ink)" />
        <line v-if="props.variant !== 'memo'" x1="70" y1="73.5" x2="176" y2="73.5" stroke-dasharray="0" />
        <line v-else x1="40" y1="73.5" x2="180" y2="73.5" stroke-dasharray="5 5" :stroke="'var(--sd-ink-soft)'" />
      </g>
      <!-- 角落点缀 -->
      <g v-if="props.variant === 'todo'">
        <path d="M182 96c2-5 6-8 11-9-1 5-4 8-9 9zM176 108c0-4 2-7 6-9-.4 4-2.4 7-6 9" />
      </g>
      <g v-else-if="props.variant === 'shopping'">
        <path d="M158 196h34l-3.5-20h-27z M163 176l4-8M187 176l-4-8M164 182l2 8M180 182l-2 8M172 182v8" />
      </g>
    </svg>
    <div class="sd-note-inner">
      <div class="sd-note-title">{{ props.title }} <span v-if="props.variant === 'plan'" class="dot">♥</span></div>
      <slot />
    </div>
  </div>
</template>

<style scoped>
.sd-note { position: relative; display: inline-block; width: 220px; background: var(--sd-paper); }
.sd-note-bg { display: block; width: 100%; height: auto; }
.sd-note-inner { position: absolute; inset: 0; padding: 16px 20px 14px; }
.sd-note-title { font-size: 21px; font-weight: 700; margin-bottom: 10px; letter-spacing: .04em; }
.sd-note .dot { color: var(--sd-accent); font-size: 15px; vertical-align: middle; }
.sd-note :deep(ul) { list-style: none; margin: 0; padding: 0 0 0 26px; font-size: 17px; }
.sd-note :deep(li) { margin-bottom: 12px; }
</style>
