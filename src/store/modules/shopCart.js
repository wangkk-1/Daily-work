import {reqShopCart,reqAddToCart} from "../../api"
//管理购物车相关数据
const state = {
    cartList: [] //购物车的列表
}
const mutations = {
    //接受保存购物车列表
    RECEIVE_CART_LIST(state, cartList) {
        state.cartList = cartList
    }
}
const actions = {
    //获取购物车列表数据异步
    async getCartList({commit}){
        const result = await reqShopCart()
        if(result.code===200){
            const cartList = result.data
            commit("RECEIVE_CART_LIST",cartList)
        }
    },
    //添加到购物车的异步
    async addToCart1({commit},{skuId,skuNum,callback}){
        const result = await reqAddToCart(skuId,skuNum)
        if(result.code===200){
            callback()
        }else{
            callback('添加购物车失败')
        }
    },
    async addToCart2({commit},{skuId,skuNum,}){
        const result = await reqAddToCart(skuId,skuNum)
        if(result.code!==200){
            throw new Error('添加到购物车失败')
        }else{//可以省略
            return undefined
        }
    }
}
const getters = {

}

export default {
    state,
    mutations,
    actions,
    getters
}