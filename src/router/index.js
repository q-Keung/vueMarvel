import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/login',
      name: 'login',
      component: () => import("../views/login.vue")
    },
    {
      path: '/',
      name: 'index',
      redirect: '/main',
      component: () => import('../views/index.vue'),
      children: [{
        path: 'main',
        name: 'main',
        component: () => import('../views/main.vue')
      }, ]
    },

  ]
})
