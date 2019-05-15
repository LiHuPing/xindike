import Vue from 'vue'
import Router from 'vue-router'

import Main from './views/main/Main.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/main'
    },
    {
      path: '/main',
      name: 'Main',
      component: Main
    },
    {
      path: '/buyCar',
      name: 'BuyCar',
      component: () => import('./views/buyCar/BuyCar.vue')
    },
    {
      path: '/sellCar',
      name: 'SellCar',
      component: () => import('./views/sellCar/SellCar.vue')
    },
    {
      path: '/carValuation',
      name: 'CarValuation',
      component: () => import('./views/carValuation/CarValuation.vue')
    }
  ]
})
