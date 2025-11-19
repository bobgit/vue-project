import { createRouter, createWebHashHistory } from 'vue-router'

export default createRouter({
  // history: createWebHistory(''), // 在移动端的路由历史中添加前缀
  history: createWebHashHistory('/src/pc/'), // 在移动端的路由历史中添加前缀
  routes: [
    { path: '/', component: () => import('@/pc/Home.vue') },
    { path: '/dashboard', component: () => import('@/pc/Dashboard.vue') },
  ],
})

// replace 设置 replace 属性的话，当点击时，会调用 router.replace() 而不是 router.push()，导航后不会留下 history 记录。
// <router-link :to="{ path: '/abc'}" replace></router-link>
