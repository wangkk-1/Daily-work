import Vue from "vue"
import VueRouter from 'vue-router'
import routes from './routes'
import stote from "../store"
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

const router = new VueRouter({
    mode: "history",
    routes,
    scrollBehavior(to, from, savedPosition) {
        return {
            x: 0,
            y: 0
        }
    }
})


const checkPaths = ['/trade', '/pay', '/center']
router.beforeEach((to, from, next) => {
    //得到目标路径
    const targetPath = to.path
    const needCheck = !!checkPaths.find(path => targetPath.indexOf(path) === 0)
    if (needCheck) {
        const token = stote.state.user.userInfo.token
        if (token) {
            next()
        } else {
            next('/login')
        }
    } else {
        next()
    }
})



export default router