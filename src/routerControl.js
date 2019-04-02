import router from "./router/index"
import vue from "vue"
import store from './store/index'
import {
  getToken
} from './utils/setAuth'
const whiteList = ['/login'];  //登陆白名单
let viewPort,mode = window.navigator.userAgent;;
console.log(router)
console.log(window.navigator.userAgent);
if(mode.indexOf('iPhone') != -1 || mode.indexOf('Android') != -1){
  store.commit('setMode',1);
}


//主要做些登录拦截
router.beforeEach((to, from, next) => {
  console.log(getToken())
  if (getToken()) {
    if (to.path === '/login') {
      next({ path: '/main' })
    }else{
      next();
    }
  } else {
    if (to.path === '/login') { // 在免登录白名单，直接进入
      next();
    } else {
      next('/login'); // 否则全部重定向到登录页
    }
  }
})
router.afterEach(() => {
//   NProgress.done() // 结束Progress
})
