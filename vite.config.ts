import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// 库模式：产出 ES module + UMD（window.SadOne）+ style.css
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'SadOne',
      fileName: (f) => (f === 'es' ? 'sadone.js' : 'sadone.umd.cjs'),
    },
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      external: ['vue'],
      output: { globals: { vue: 'Vue' } },
    },
  },
})
