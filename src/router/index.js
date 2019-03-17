import Vue from 'vue'
import Router from 'vue-router'
import layout from '../views/layout/index.vue'
Vue.use(Router)

export default new Router({
  routes: [{
      path: '/login',
      name: 'login',
      component: () => import("../views/login.vue")
    },
    {
      path: '/',
      name: 'indexer',
      redirect:'/main',
      component: layout,
      children:[
        {
          path:'main',
          name:'main',
          component:()=>import("../views/main.vue")
        },
        {
          path:"marveldata",
          name:"marveldata",
          component:()=>import("../views/table/marvelData.vue")
        },
        {
          path:'showheros',
          name:'showheros',
          component:()=>import("../views/heros/showheros.vue")
        },
        {
          path:'herospeck',
          name:'herospeck',
          component:()=>import("../views/heros/herospeck.vue")
        }
      ]
      
    },
    
  ]
})
