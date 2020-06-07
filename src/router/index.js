import Vue from "vue"
import VueRouter from 'vue-router'
import routes from './routes'
Vue.use(VueRouter)

//重写VueRouter上的push方法
const originPush = VueRouter.prototype.push
const originReplace = VueRouter.prototype.replace

VueRouter.prototype.push = function (location, onComplete, onAbort) {
    if (!onComplete && !onAbort) {
        return originPush.call(this, location).catch(error => {
            console.log('---push', error.message)
        })
    } else {
        originPush.call(this, location, onComplete, onAbort)
    }
}



VueRouter.prototype.replace = function (location, onComplete, onAbort) {
    if (!onComplete && !onAbort) {
        return originReplace.call(this, location).catch(error => {
            console.log('---replace', error.message)
        })
    } else {
        originReplace.call(this, location, onComplete, onAbort)
    }
}



export default new VueRouter({
    mode: "history",
    routes
})