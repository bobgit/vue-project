import { createRouter, createWebHistory } from "vue-router"

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: () => import("@/pc/Home.vue") },
    { path: "/dashboard", component: () => import("@/pc/Dashboard.vue") }
  ]
})
