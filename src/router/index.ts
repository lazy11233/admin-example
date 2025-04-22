import { createRouter, createWebHistory } from 'vue-router'
import LayoutBase from '@/layouts/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/401',
      meta: { title: '未授权', showLink: false },
      component: () => import('@/views/error-page/401.vue'),
    },
    {
      path: '/404',
      name: '',
      meta: { title: 'Not-Found', showLink: false },
      component: () => import('@/views/error-page/404.vue'),
    },
    {
      path: '/login',
      name: 'login',
      meta: { title: '登录', showLink: false },
      component: () => import('@/views/login/Login.vue'),
    },
    {
      path: '/register',
      name: 'register',
      meta: { title: '注册', showLink: false },
      component: () => import('@/views/register/Register.vue'),
    },
    {
      path: '/',
      component: LayoutBase,
      redirect: '/dashboard',
      children: [
        {
          path: 'dashboard',
          name: 'dashboard',
          meta: { title: '首页', showLink: true, order: 1 },
          component: () => import('@/views/dashboard/Dashboard.vue'),
        }
      ]
    },
    {
      path: '/form',
      component: LayoutBase,
      redirect: '/form/index',
      children: [
        {
          path: 'index',
          name: 'form',
          meta: { title: '表单', showLink: true },
          component: () => import('@/views/form/FormPage.vue'),
        }
      ]
    },
    {
      path: '/table',
      component: LayoutBase,
      redirect: '/table/table-one',
      children: [
        {
          path: 'table-one',
          name: 'tableOne',
          meta: { title: '表格1', showLink: true },
          component: () => import('@/views/table/table-one/TableOne.vue')
        },
        {
          path: 'table-two',
          name: 'tableTwo',
          meta: { title: '表格2', showLink: true },
          component: () => import('@/views/table/table-two/TableTwo.vue'),
        },
        {
          path: 'table-three',
          name: 'tableThree',
          meta: { title: '表格3', showLink: true },
          component: () => import('@/views/table/table-three/TableThree.vue'),
        },
        {
          path: 'table-four',
          name: 'tableFour',
          redirect: '/table/table-four/one',
          meta: { title: '表格4', showLink: true },
          component: () => import('@/views/table/table-four/TableFour.vue'),
          children: [
            {
              path: 'one',
              name: 'tableFourOne',
              meta: { title: '表格4-1', showLink: true },
              component: () => import('@/views/table/table-four/table-four-one/TableFourOne.vue')
            },
            {
              path: 'two',
              name: 'tableFourTwo',
              meta: { title: '表格4-2', showLink: true },
              component: () => import('@/views/table/table-four/table-four-two/TableFourTwo.vue'),
            },
          ]
        }
      ]
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      redirect: '/404',
    },
  ]
})

export default router
