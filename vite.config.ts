import { fileURLToPath, URL } from 'node:url'
// import {resolve} from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import Components from 'unplugin-vue-components/vite'
import { VantResolver, ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import tailwindcss from '@tailwindcss/vite'

console.info('调查，目前进入vite.config.ts主要配置')
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
    // 按需自动引入 Vant + ElementPlus
    Components({
      dts: 'src/components.d.ts',
      resolvers: [VantResolver(), ElementPlusResolver()],
    }),

    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)), //Vite / Vue3 / ESM 最安全、最兼容、最现代 的写法
      '@shared': fileURLToPath(new URL('./src/shared', import.meta.url)),
      '@main': fileURLToPath(new URL('./src', import.meta.url)),
      '@mobile': fileURLToPath(new URL('./src/mobile', import.meta.url)),
      '@pc': fileURLToPath(new URL('./src/pc', import.meta.url)),
    },
  },
  // 多页面入口
  build: {
    outDir: 'dist/main',
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL('./src/main.ts', import.meta.url)),
        // shared: fileURLToPath(new URL('./src/shared/shared.ts', import.meta.url)),
        // mobile: fileURLToPath(new URL('./src/mobile/mobile.ts', import.meta.url)),
        // pc: fileURLToPath(new URL('./src/pc/main-pc.ts', import.meta.url)),

        // main: fileURLToPath(new URL('./src/index.html', import.meta.url)),
        // mobile: fileURLToPath(new URL('./src/mobile/mobile.html', import.meta.url)),
        // pc: fileURLToPath(new URL('./src/pc/pc.html', import.meta.url)),
        // shared: fileURLToPath(new URL('./src/shared/shared.ts', import.meta.url)),
        // shared: resolve(__dirname, 'src/main.ts'),
        // pc: resolve(__dirname, 'src/main.ts'),
      },
    },
  },
  server: {
    port: 3000,
    open: true,
  },
})
