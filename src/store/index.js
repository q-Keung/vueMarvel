import Vue from 'vue'
import Vuex from 'vuex'
import getters from './returnStore'
import {
  removeToken
} from '../utils/setAuth'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    rateStatus: 0 //评分状态
  },
  mutations: {
    setRate(state, rate) {
      state.rateStatus = rate;
    },
  },
  actions: {
    // 退出
    logout({
      commit,
      state
    }) {
      return new Promise((resolve, reject) => {
        // commit('SET_TOKEN', '')
        // commit('SET_ROLES', [])
        removeToken();
        resolve()
      })
    }
  },
  getters
})
