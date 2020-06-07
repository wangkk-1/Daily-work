import ajax from "./ajax"
//登录 /api/passport/login
export function reqLogin(mobile, password) {

    // return ajax({
    //     url: "/user/passport/login",
    //     method: "POST",
    //     data: {
    //         mobile,
    //         password
    //     }
    // })
    return ajax.post('/user/passport/login', {
        mobile,
        password
    })


}
export const reqCategoryList = () => ajax('/product/getBaseCategoryList')