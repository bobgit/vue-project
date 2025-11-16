import { fileURLToPath, URL } from 'node:url'
// import { resolve } from 'node:path'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import Components from 'unplugin-vue-components/vite'
import { VantResolver, ElementPlusResolver } from 'unplugin-vue-components/resolvers'

console.info('调查，目前进入vite.mobile.ts主要配置')
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),

    // 按需自动引入 Vant + ElementPlus
    Components({
      dts: 'src/components.d.ts',
      resolvers: [VantResolver(), ElementPlusResolver()],
    }),

    vueDevTools(),
  ],
  resolve: {
    alias: {
      // '@': resolve(__dirname, 'src'),
      '@': fileURLToPath(new URL('./src', import.meta.url)), //Vite / Vue3 / ESM 最安全、最兼容、最现代 的写法
      // '@shared': fileURLToPath(new URL('./src/shared', import.meta.url)),
      // '@main': fileURLToPath(new URL('./src', import.meta.url)),
      // '@mobile': fileURLToPath(new URL('./src/mobile', import.meta.url)),
      // '@pc': fileURLToPath(new URL('./src/pc', import.meta.url)),
    },
  },
  build: {
    outDir: 'dist/mobile',
    rollupOptions: {
      // 明确指定移动端入口文件
      // input: resolve(__dirname, 'src/mobile/main-mobile.ts'),
      input: {
        // mobile: fileURLToPath(new URL('./src/mobile/main-mobile.ts', import.meta.url)),
        // mobile: fileURLToPath(new URL('./src/mobile/mobile.html', import.meta.url)),
        mobile: fileURLToPath(new URL('indexMobile.html', import.meta.url)), // Vite 默认使用 index.html 作为入口模板文件
      },
    },
  },
  server: {
    port: 3001,
    open: true,
  },
})
