import axios from 'axios'
import { Message } from 'element-ui';
import store from '../store/index'

import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css' // Progress 进度条样式


axios.defaults.baseURL = process.env.BASE_API;
axios.defaults.timeout = 15000;
axios.interceptors.request.use(config=>{
    NProgress.start();
    return config;
},error=>{
    Promise.reject(error);
})
axios.interceptors.response.use(response=>{
    if(response.data.data.statusCode === 200){
        NProgress.done();
        return response.data.data;
    }else{
        NProgress.done();
        return response
        // this.$alert()
    }
},err=>{
    NProgress.done();
    Promise.reject(err);
})
export default axios;