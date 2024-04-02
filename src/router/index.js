import { createRouter, createWebHistory } from 'vue-router'
import VueHome from '@/pages/VueHome.vue'
import VueAbout from '@/pages/VueAbout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: VueHome
    },
    {
      path: '/about',
      name: 'about',
      component: VueAbout
    }
  ]
})

export default router
