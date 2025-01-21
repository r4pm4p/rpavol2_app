import { createRouter, createWebHistory } from 'vue-router'
import { requestStore } from '../stores/requestStore'
import ProtectedRoutesRules from '@/domain/rules/ProtectedRoutesRules'

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
      path: '/visitors/home',
      name: 'visitors_home',
      component: () => import('@/application/views/home/VisitorsHome.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/application/views/login/LoginView.vue'),
    },
    {
      path: '/register/user',
      name: 'register_user',
      component: () => import('@/application/views/register/RegisterUser.vue'),
    },
    {
      path: '/register/mc',
      name: 'register_mc',
      component: () => import('@/application/views/register/RegisterMc.vue'),
    },
  ],
})

router.beforeEach((to, from, next) => {
  const token = requestStore().request.getToken()
  if (ProtectedRoutesRules.can(to.name as string, token)) return next()
  else
    return next({
      name: 'login',
    })
})

export default router
