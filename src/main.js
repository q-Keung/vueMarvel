// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import BaiduMap from 'vue-baidu-map'
import elementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import request from './utils/request'


//播放器
import VueVideoPlayer from 'vue-video-player'
import 'video.js/dist/video-js.css'
// import 'vue-video-player/src/custom-theme.css'

Vue.use(VueVideoPlayer,
  /* {
  options: global default options,
  events: global videojs events
} */
)


//国际化语言包
import VueI18n from 'vue-i18n'
import locale from 'element-ui/lib/locale'
import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'

Vue.use(elementUi)
Vue.prototype.$axios = request;
Vue.config.productionTip = false
// Vue.prototype.$alert = elementUi.MessageBox.alert;
Vue.prototype.$confirm = elementUi.MessageBox.confirm;
Vue.prototype.$prompt = elementUi.MessageBox.prompt;
Vue.prototype.$notify = elementUi.Notification;
Vue.prototype.$message = elementUi.Message;
Vue.prototype.$loading = elementUi.Loading.service;
Vue.prototype.$msgbox = elementUi.MessageBox;
Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: 'Gj4pVfAeFPLn9gmaW4gfhrXOSZG1DaLG'
})



//改变element组件的尺寸和弹框的初始zIndex值
// Vue.use(elementUi, {
//   size: 'small',
//   zIndex: 3000
// });
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
