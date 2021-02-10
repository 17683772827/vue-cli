import Vue from 'vue'
import VueRouter from 'vue-router'
/*import testcss from '@/views/testcss'*/

Vue.use(VueRouter)

const routes = [
  {
    name: 'testCss',
    path: '/',
    component: () => import('@/views/testcss')
  }
  ]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
