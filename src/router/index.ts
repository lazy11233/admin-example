import { createRouter, createWebHistory } from 'vue-router'
import LayoutBase from '@/layouts/index.vue'
import autoRoutes from './utils'

console.log('参考输出', autoRoutes)

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      meta: { title: '登录', showInMenu: false },
      component: () => import('@/views/login/index.vue'),
    },
    {
      path: '/register',
      name: 'register',
      meta: { title: '注册', showInMenu: false },
      component: () => import('@/views/register/index.vue'),
    },
    {
      path: '/',
      component: LayoutBase,
      redirect: '/dashboard',
      meta: { title: '首页', showInMenu: true, order: 1 },
      children: [
        {
          path: 'dashboard',
          name: 'dashboard',
          meta: { title: '首页', showInMenu: true, order: 1 },
          component: () => import('@/views/dashboard/index.vue'),
        }
      ]
    },
  ]
})

export default router
