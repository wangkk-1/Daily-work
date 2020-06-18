import Vue from "vue"
import App from "./App"
import router from "./router"
import store from "./store"
import TypeNav from "./components/TypeNav"
import Carousel from "./components/Carousel"
import Pagination from "./components/Pagination"

import 'swiper/css/swiper.min.css' //轮播图
import "./mock/mockServer" //引入加载
import "./validate" //引入表单校验的配置模块
import './elements' //引入elements
import * as API from "./api"

Vue.component("TypeNav", TypeNav)
Vue.component("Carousel", Carousel)
Vue.component("Pagination", Pagination)

Vue.prototype.$API = API

new Vue({
  beforeCreate() {
    Vue.prototype.$bus = this
  },
  // el: "#app",
  render: h => h(App),
  router,
  store
}).$mount('#app')