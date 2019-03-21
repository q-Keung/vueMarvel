import router from "../router/index"
import vue from "vue"
import store from '../store/index'
import {getToken} from './setAuth'
//主要做些登录拦截
router.beforeEach((to, from, next) => {
    if(store.state.token){
        next({ path: '/' })
    }else{
        next({ path: '/login' })
    }
})
// router.afterEach(() => {
//   NProgress.done() // 结束Progress
// })
