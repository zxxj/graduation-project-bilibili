import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: () => import('../views/home.vue')
    },
    {
      path: '/mood',
      component: () => import('../views/mood.vue')
    },
    {
      path: '/self',
      component: () => import('../views/self.vue')
    },
    {
      path: '/question',
      component: () => import('../views/question.vue')
    }
  ]
})

export default router
