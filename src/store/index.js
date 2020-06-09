import Vue from "vue"
import Vuex from "vuex"
/* import home from "./modules/home"
import user from "./modules/user"
import search from "./modules/search" */
import modules from "./modules"
Vue.use(Vuex)

// const state = {}
const mutations = {}
const actions = {}
const getters = {}

export default new Vuex.Store({
    // state,
    mutations,
    actions,
    getters,
    modules
    /* modules: {
        home: home, //标识名称:vuex子模块
        user, //简写
        search
    } */
})