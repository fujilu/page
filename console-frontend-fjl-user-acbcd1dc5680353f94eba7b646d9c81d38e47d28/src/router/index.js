import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/theme.vue')
    },
    {
      path: '/resource',
      name: 'resource',
      component: () => import('@/views/resource_list.vue')
    }
  ]
})
