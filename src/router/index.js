import { createRouter, createWebHistory } from 'vue-router'
import allview from '../views/all.vue'
import  themeview from '../views/themecss.vue'
import otherview from '../views/其它.vue'
import elemenview from '../views/元素.vue'
import backview from '../views/背景.vue'

 
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'allview',
      component: allview,
    },
    {
      path: '/theme',
      name: 'themeview',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component:themeview,
    },
    {
      path: '/backview',
      name: 'backview',
      component: backview,
    },
    {
      path: '/elemenview',
      name: 'elemenview',
      component: elemenview,
    },
    {
      path: '/otherview',
      name: 'otherview',
      component: otherview,
    }

  ],
})

export default router
