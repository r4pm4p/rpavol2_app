import { createRouter, createWebHistory } from 'vue-router'
import { requestStore } from '../stores/requestStore'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/application/views/home/HomeView.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/application/views/login/LoginView.vue'),
    },
    {
      path: '/register/user',
      name: 'register user',
      component: () => import('@/application/views/register/RegisterUser.vue'),
    },
    {
      path: '/register/mc',
      name: 'register mc',
      component: () => import('@/application/views/register/RegisterUser.vue'),
    },
  ],
})

export default router
