import {getUserTempId,saveUserInfo,getUserInfo,removeUserInfo} from '../../utils'
import {reqRegister,reqLogin,reqLogout} from '../../api'
export default {
    state: {
        userInfo: getUserInfo(), //登录用户的信息
        userTempId: getUserTempId(),
    },
    mutations: {
        RECIVE_USER_INFO(state, userInfo) {
            state.userInfo = userInfo
        },
        RESET_USER_INFO(state){
            state.userInfo={}
        }
    },
    actions: {
        //注册
        async register ({commit}, userInfo) {
            const result = await reqRegister(userInfo)
            if (result.code!==200) {
                throw new Error(result.data || '注册失败')
            }
        },
        //登录
        async login({commit}, {mobile, password}) {
            const result = await reqLogin(mobile, password)
            if (result.code == 200) {
                const userInfo = result.data
                commit('RECIVE_USER_INFO', userInfo)
                // window.localStorage.setItem('USER_INFO_KEY',JSON.stringify(userInfo))
                saveUserInfo(userInfo)
            } else {
                throw new Error(result.message || '登录失败')
            }
        },
       
        //退出登录
        async logout({commit}) {
            const result = await reqLogout()
            if (result.code === 200) {
                commit('RESET_USER_INFO')
                //删除local 保存的 userInfo
                removeUserInfo()
            } else {
                throw new Error(result.message || '退出登录失败')
            }
        },
    },
    getters: {}
}