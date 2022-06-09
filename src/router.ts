import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/pages/Home.vue'
import NotFound from '@/pages/NotFound.vue'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/:catchAll(.*)',
      name: 'Notfound',
      component: NotFound,
    },
  ],
})

export default router
