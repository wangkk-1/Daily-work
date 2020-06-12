import ajax from "./ajax"
import mockAjax from "./mockAjax"
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

//定义mock接口的接口请求函数
export const reqBanners = () => mockAjax('/banners')
export const reqFloors = () => mockAjax('/floors')

//Search 商品列表reqCategoryList
export const reqProductList = (options) => ajax.post('/list', options)

//商品详细信息
export const reqDetailInfo = (skuId) => ajax.get(`/item/${skuId}`)