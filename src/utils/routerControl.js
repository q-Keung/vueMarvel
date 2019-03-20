import router from "../router/index"
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css' // Progress 进度条样式
import vue from "vue"
import store from '../store/index'
//主要做些登录拦截
router.beforeEach((to, from, next) => {
  NProgress.start();
  next();
  NProgress.done();
})
// router.afterEach(() => {
//   NProgress.done() // 结束Progress
// })
