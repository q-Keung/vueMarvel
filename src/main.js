// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import elementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(elementUi)
Vue.config.productionTip = false
Vue.prototype.$alert = elementUi.MessageBox.alert;
Vue.prototype.$confirm = elementUi.MessageBox.confirm;
Vue.prototype.$prompt = elementUi.MessageBox.prompt;
Vue.prototype.$notify = elementUi.Notification;
Vue.prototype.$message = elementUi.Message;
Vue.prototype.$loading = elementUi.Loading.service;
Vue.prototype.$msgbox = elementUi.MessageBox;

//改变element组件的尺寸和弹框的初始zIndex值
// Vue.use(elementUi, {
//   size: 'small',
//   zIndex: 3000
// });
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
