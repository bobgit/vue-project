import { createRouter, createWebHashHistory } from 'vue-router'

export default createRouter({
  // history: createWebHistory(''), // 在移动端的路由历史中添加前缀
  history: createWebHashHistory('/src/pc/'), // 在移动端的路由历史中添加前缀
  routes: [
    { path: '/', component: () => import('@/pc/Home.vue') },
    { path: '/dashboard', component: () => import('@/pc/Dashboard.vue') },
  ],
})
