import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/prime-vue-demo',
      name: 'prime-vue-demo',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/PrimeVueView.vue')
    },
    {
      path: '/vee-validate-demo',
      name: 'vee-validate-demo',

      component: () => import('../views/VeeValidateView.vue')
    },
    {
      path: '/amcharts-demo',
      name: 'amcharts-demo',

      component: () => import('../views/AmchartsView.vue')
    }
  ]
})

export default router
