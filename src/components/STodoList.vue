<script setup lang="ts">
// STodoList · 可交互手绘待办清单（勾选自动划线）
import { ref } from 'vue'
import SCheckbox from './SCheckbox.vue'

const props = withDefaults(defineProps<{
  title?: string
  items: string[]
  mark?: string
}>(), { title: 'To Do List', mark: '❀' })

const done = ref<Record<number, boolean>>({})
</script>

<template>
  <div class="sd-base sd-todolist">
    <div class="sd-todo-title">{{ props.title }} <span v-if="props.mark" class="mark">{{ props.mark }}</span></div>
    <ul>
      <li v-for="(it, i) in props.items" :key="i">
        <SCheckbox v-model="done[i]" :label="it" />
      </li>
    </ul>
    <slot />
  </div>
</template>

<style scoped>
.sd-todolist { background: var(--sd-paper); border: 1.8px solid var(--sd-ink); border-radius: 10px; padding: 16px 18px; display: inline-block; min-width: 230px; }
.sd-todo-title { font-size: 21px; font-weight: 700; margin-bottom: 12px; letter-spacing: .04em; }
.sd-todo-title .mark { color: var(--sd-accent-2); font-size: 16px; }
.sd-todolist ul { list-style: none; margin: 0; padding: 0; font-size: 17px; }
.sd-todolist li { margin-bottom: 11px; }
</style>
