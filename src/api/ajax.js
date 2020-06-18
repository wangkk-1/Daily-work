import axios from "axios"
import NProgress from "nprogress"
import store from '../store'

// const instance = axios.create({
//     baseURL: 'http://182.92.128.115/api', //基础地址
//     timeout: 15000 //请求超时时间
// })
const instance = axios.create({
    baseURL: '/api', // 基础path
    // baseURL: 'http://182.92.128.115/api',
    timeout: 15000 // 请求超时时间
})

// //注册请求拦截器
instance.interceptors.request.use(config => {
    //显示进度条
    NProgress.start()
    config.headers['userTempId'] = store.state.user.userTempId
    const token = store.state.user.userInfo.token
    if (token) {
        config.headers['token'] = token
    }
    return config
})
// 注册响应拦截器
instance.interceptors.response.use(
    response => { //成功的回调
        //隐藏进度条
        NProgress.done()
        // return response
        return response.data
    },
    error => { //失败的回调
        NProgress.done()
        //统一处理错误
        // throw error
        return Promise.reject(error)
    }
)

//向外暴露必须是这个 instance 不能是 axios
export default instance