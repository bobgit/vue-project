import { createRouter, createWebHistory } from "vue-router"


const routes = [
{ path: "/", component: () => import("@/mobile/Home.vue") },
{ path: "/user", component: () => import("@/mobile/User.vue") }
]


export default createRouter({
history: createWebHistory(),
routes
})
