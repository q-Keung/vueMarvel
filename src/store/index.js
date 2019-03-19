import Vue from 'vue'
import Vuex from 'vuex'
import getters from './returnStore'
Vue.use(Vuex)
export default new Vuex.Store({
    state:{
        rateStatus:0  //评分状态
    },
    mutations:{
        setRate(state,rate){
            state.rateStatus = rate;
        },
    },
    action:{

    },
    getters
})