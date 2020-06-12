import {
    reqDetailInfo
} from "../../api"

const state = {
    detailInfo: {}
}
const mutations = {
    RECEIVE_DETAIL_IMFO(state, detailInfo) {
        state.detailInfo = detailInfo
    }
}
const actions = {
    async getDetailInfo({
        commit
    }, skuId) {
        const result = await reqDetailInfo(skuId)
        if (result.code === 200) {
            const detailInfo = result.data
            commit("RECEIVE_DETAIL_IMFO", detailInfo)
        }
    }
}
const getters = {
    //3个分类名称
    categoryView(state) {
        return state.detailInfo.categoryView ? state.detailInfo.categoryView : {}
    },
    //商品信息对象
    skuInfo(state) {
        return state.detailInfo.skuInfo ? state.detailInfo.skuInfo : {}
    },
    //商品图片列表
    skuImageList(state) {
        const skuInfo = state.detailInfo.skuInfo
        return skuInfo ? skuInfo.skuImageList : []
    },

}

export default {
    state,
    mutations,
    actions,
    getters,
}