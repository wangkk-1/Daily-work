import Vue from "vue"
import App from "./App"
import router from "./router"
import store from "./store"
import TypeNav from "./components/TypeNav"
import "./mock/mockServer"
Vue.component("TypeNav", TypeNav)
new Vue({
  // el: "#app",
  render: h => h(App),
  router,
  store
}).$mount('#app')