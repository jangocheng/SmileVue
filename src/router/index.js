import Vue from 'vue'
import Router from 'vue-router'
import ShoppingMall from '@/components/pages/ShoppingMall'
import Registry from '@/components/pages/Registry'
import Login from '@/components/pages/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ShoppingMall',
      component: ShoppingMall
    },
    {
      path: '/registry',
      name: 'Registry',
      component: Registry
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
