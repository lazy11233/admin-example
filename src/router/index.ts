import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/dashboard/Dashboard.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login/Login.vue'),
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/views/register/Register.vue'),
    }
  ]
})

export default router
