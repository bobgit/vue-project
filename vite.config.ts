import { fileURLToPath, URL } from 'node:url'
import {resolve} from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import Components from "unplugin-vue-components/vite"
import { VantResolver, ElementPlusResolver } from "unplugin-vue-components/resolvers"

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(),

    // 按需自动引入 Vant + ElementPlus
    Components({
      dts: true,
      resolvers: [
        VantResolver(),
        ElementPlusResolver(),
      ],
    }),

    vueDevTools()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),  //Vite / Vue3 / ESM 最安全、最兼容、最现代 的写法
    },
  },
  // build: {
  //   rollupOptions: {
  //     input: {
  //       mobile: resolve(__dirname, 'src/main.ts'),
  //       pc: resolve(__dirname, 'src/main.ts'),
  //     },
  //   },
  // },
  server: {
    port: 3001,
    open: true,
  },
})
