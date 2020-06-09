import Vue from "vue"
import 'swiper/css/swiper.min.css'
import App from "./App"
import router from "./router"
import store from "./store"
import TypeNav from "./components/TypeNav"
import Carousel from "./components/Carousel"
import "./mock/mockServer"
Vue.component("TypeNav", TypeNav)
Vue.component("Carousel", Carousel)
new Vue({
  // el: "#app",
  render: h => h(App),
  router,
  store
}).$mount('#app')