import {reqShopCart,reqAddToCart,reqCheckCartItem,reqDeleteCartItem} from "../../api"
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
    //购物车中 +/-/输入
    async addToCart2({commit},{skuId,skuNum,}){
        const result = await reqAddToCart(skuId,skuNum)
        if(result.code!==200){
            throw new Error('添加到购物车失败')
        }else{//可以省略
            return undefined
        }
    },
    //勾选/不勾选
    async checkCartItem({commit},{skuId,isChecked}){
        const result = await reqCheckCartItem(skuId,isChecked)
        if(result.code!==200){
            throw new Error(result.message || '勾选失败')
        }
    },
    //全选/全不选
    async checkAllCartItems ({commit, state, dispatch}, checked){
        const isChecked = checked ? '1' : '0'
        let promises = []
        state.cartList.forEach(item=>{
            if (item.isChecked!=isChecked) {
                const promise = dispatch('checkCartItem',{skuId: item.skuId, isChecked})
                promises.push(promise)
            }
        })
        return Promise.all(promises)
    },
    //删除某一项
    async deleteCartItem({commit},skuId){
        const result = await reqDeleteCartItem(skuId)
        if(result.code!==200){
            throw new Error('删除失败')
        }
    },
    //删除选中商品
    async deleteCheckedCartItems({ state, dispatch }) {
        const promises = state.cartList.reduce((pre, item) => {
          if (item.isChecked === 1) {
            pre.push(dispatch("deleteCartItem", item.skuId));
          }
          return pre;
        }, []);
        return Promise.all(promises);
    },
}
const getters = {
    //选中总数量
    totalCount(state){
        /* let total = 0
        state.cartList.forEach(item=>{
            total+=item.skuNum
        })
        return state.cartList */
        return state.cartList.reduce((preTotal, item) => preTotal + item.skuNum , 0)
         

    },
    //选中总价格
    totalPrice(state){
        return state.cartList.reduce((pre, item) => pre + item.skuNum*item.cartPrice , 0)
    },
    //是否全部选中了
    isCheckAll (state) {
        return state.cartList.length>0 && state.cartList.every((item) => item.isChecked===1)
    },
}   

export default {
    state,
    mutations,
    actions,
    getters
}