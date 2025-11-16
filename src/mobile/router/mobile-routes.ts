import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  { path: '/', component: () => import('@/mobile/Home.vue') },
  { path: '/user', component: () => import('@/mobile/User.vue') },
]

export default createRouter({
  // history: createWebHistory('/src/mobile/'), // 在移动端的路由历史中添加前缀
  history: createWebHashHistory(''), // 在移动端的路由历史中添加前缀
  routes,
})
