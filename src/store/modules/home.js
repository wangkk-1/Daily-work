import {reqCategoryList,reqBanners,reqFloors} from "../../api"
export default {
    state: {
        categoryList: [],//分类列表
        banners:[],//广告轮播
        floors:[], //楼层
    },
    mutations: {
        //接收3级列表
        RECEIVE_CATEGORY_LIST(state, categoryList) {
            state.categoryList = categoryList
        },
        //接收轮播图
        RECEIVE_BANNERS ( state, banners) {
            state.banners = banners
        },
        //接收楼层
        RECEIVE_FLOORS (state, floors) {
            state.floors = floors
        },
    },
    actions: {
        async getCategoryList({commit}) {
            const result = await reqCategoryList()
            if (result.code === 200) {
                const categoryList = result.data.filter((item, index) => index < 15)
                commit("RECEIVE_CATEGORY_LIST",categoryList)
            }
        },
        async getBanners ({commit}) {
            const result = await reqBanners()
            if (result.code===200) {
                const banners = result.data
                commit("RECEIVE_BANNERS", banners)
            }
        },
        async getFloors ({commit}) {
            const result = await reqFloors()
            if (result.code===200) {
                const floors = result.data
                commit("RECEIVE_FLOORS", floors)
            }
        },
    },
    getters: {}
}