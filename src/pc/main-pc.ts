// 添加日志，确认 main-pc.ts 被加载
console.info('Loading main-pc.ts...');

import '../share/assets/main.css'
import { createApp } from 'vue'
import PcLayout from '@/pc/layouts/PcLayout.vue'
import router from '@/pc/router/pc-routes'
import { createPinia } from 'pinia'

console.info(' 准备 main-pc.ts 这个Vue json的加载')
createApp(PcLayout).use(router).use(createPinia()).mount('#app')
