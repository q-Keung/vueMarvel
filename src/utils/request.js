import axios from 'axios'
import { Message } from 'element-ui';
import store from '../store/index'
axios.defaults.baseURL = process.env.BASE_API;
axios.defaults.timeout = 15000;
axios.interceptors.request.use(config=>{
    Message({
        message:'请求成功',
        type:'success',
        duration:1000
    });
    return config;
},error=>{
    Promise.reject(error);
})
axios.interceptors.response.use(response=>{
    if(response.data.data.statusCode === 200){
        return response.data.data;
    }else{
        return response
        // this.$alert()
    }
},err=>{
    Promise.reject(err);
})
export default axios;