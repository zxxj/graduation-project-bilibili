import { message } from 'ant-design-vue'
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
    },
    {
      path: '/info',
      component: () => import('../views/userInfo.vue')
    },
    {
      path: '/login',
      component: () => import('../views/login.vue')
    },
    {
      path: '/register',
      component: () => import('../views/register.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  const userId = localStorage.getItem('userId')
  if (userId) {
    if (to.path === '/login' || to.path === '/register') {
      next('/home')
      message.warn('退出登录后才能访问登录页与注册页哦!')
    } else {
      next()
    }
  } else {
    if (to.path == '/login' || to.path == '/register') {
      next()
    } else {
      next('/login')
      message.warn('请先登录!')
    }
  }
})

export default router
