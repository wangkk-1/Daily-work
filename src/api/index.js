import ajax from "./ajax"
import mockAjax from "./mockAjax"

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
export const reqCheckCartItem = (skuId, isChecked) => ajax.get(`/cart/checkCart/${skuId}/${isChecked}`)
//删除购物车商品
export const reqDeleteCartItem = (skuId) => ajax.delete(`/cart/deleteCart/${skuId}`)


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
//注册    userInfo:{mobile/password/code}
export const reqRegister = (userInfo) => ajax.post('user/passport/register', userInfo)
//退出登录
export const reqLogout = () => ajax('user/passport/logout')

//获取订单列表
export const reqOrders = (page, limit) => ajax(`/order/auth/${page}/${limit}`)

//获取订单交易页信息
export const reqTradeInfo = () => ajax('/order/auth/trade')

//提交订单
export const reqSubmitOrder = (tradeNo, orderInfo) => ajax({
    url: '/order/auth/submitOrder',
    method: 'POST',
    // query: {tradeNo},
    params: {
        tradeNo
    },
    data: orderInfo
})
//获取订单支付信息
export const reqPayInfo = (orderId) => ajax(`/payment/weixin/createNative/${orderId}`)


//查询支付订单状态
export const reqPayStatus = (orderId) => ajax(`/payment/weixin/queryPayStatus/${orderId}`)