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
        },
        {
          path:'herosposition',
          name:'herosposition',
          component:()=>import("../views/heros/herosposition.vue")
        },
        {
          path:'marvelupload',
          name:'marvelupload',
          component:()=>import("../views/qiuniu/marvelUpload.vue")
        },
        {
          path:'marvelvideo',
          name:'marvelvideo',
          component:()=>import("../views/marvelVideo/marvelVideo.vue")
        }
      ]
      
    },
    {
      path:'/marvelpanel',
      name:'marvelpanel',
      component:layout,
      redirect:'/marvelpanel/panelindex',
      // meta:{title:panelindex},
      children:[
        {
          path:'panelindex',
          name:'panelindex',
          component:()=>import('../views/panel/marvelPanel.vue')
        }
      ]
    }
  ]
})
