import { createApp } from "vue"
import MobileLayout from "@/mobile/MobileLayout.vue"
import router from "@/mobile/router/mobile-routes"
import { createPinia } from "pinia"

console.info(' 准备 main-mobile.ts 这个Vue json的加载')
createApp(MobileLayout).use(router).use(createPinia()).mount("#app")
