import {
    reqCategoryList
} from "../../api"
export default {
    state: {
        categoryList: []
    },
    mutations: {
        RECEIVE_CATEGORY_LIST(state, categoryList) {
            state.categoryList = categoryList
        }
    },
    actions: {
        async getCategoryList({commit}) {
            const result = await reqCategoryList()
            if (result.code === 200) {
                const categoryList = result.data.filter((item, index) => index < 15)
                commit("RECEIVE_CATEGORY_LIST",categoryList)
            }
        }
    },
    getters: {}
}