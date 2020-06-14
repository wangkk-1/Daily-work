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


//获取购物车列表
export const reqShopCart = () => ajax.get('/cart/cartList')
//添加到购物车  skuId:商品ID  skuNum:商品数量
export const reqAddToCart = (skuId, skuNum) => ajax.post(`/cart/addToCart/${skuId}/${skuNum}`)
//切换商品(某个购物项)选中状态  isChecked:'0'代表取消选中 '1'代表选中
export const reqCheckChartItem = (skuId, isChecked) => ajax.get(`/cart/checkCart/${skuId}/${isChecked}`)
//删除购物车商品
export const reqDeleteCartItem = (skuId)=>ajax.delete(`/cart/deleteCart/${skuId}`)