import axios from "axios"
import NProgress from "nprogress"
const instance = axios.create({
    baseURL: '/mock', // 基础path
    timeout: 15000 // 请求超时时间
})

// //注册请求拦截器
instance.interceptors.request.use(config => {
    //显示进度条
    NProgress.start()
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
        console.log(111)
        return Promise.reject(error)
    }
)

//向外暴露必须是这个 instance 不能是 axios
export default instance