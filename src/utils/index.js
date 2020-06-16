import {
    v4 as uuidv4
} from 'uuid'

export function getUserTempId() {
    let userTempId = localStorage.getItem('USER_TEMP_ID_KEY')
    if (!userTempId) {
        userTempId = uuidv4()
        //保存到localStorage中, 返回它
        localStorage.setItem('USER_TEMP_ID_KEY', userTempId)
    }
    return userTempId
}

//保存用户信息到local
export function saveUserInfo(userInfo) {
    window.localStorage.setItem('USER_INFO_KEY', JSON.stringify(userInfo))
}
//读取local 保存的用户信息
export function getUserInfo() {
    return JSON.parse(window.localStorage.getItem('USER_INFO_KEY')) || {}
}

//删除local 保存的用户信息
export function removeUserInfo() {
    window.localStorage.removeItem('USER_INFO_KEY')
}
