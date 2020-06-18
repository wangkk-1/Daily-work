import Home from "../pages/Home"
import Login from "../pages/Login"
import Search from "../pages/Search"
import Register from "../pages/Register"
import Detail from "../pages/Detail"
import AddCartSuccess from "../pages/AddCartSuccess"
import ShopCart from "../pages/ShopCart"
import Trade from '../pages/Trade'
import Pay from "../pages/Pay"
import PaySuccess from "../pages/PaySuccess"
import Center from "../pages/Center"
import GroupBuy from "../pages/Center/GroupBuy"
import MyOrder from "../pages/Center/MyOrder"


import stote from '@/store'


export default [
    //
    {
        path: '/',
        component: Home
    },
    {
        path: '/login',
        component: Login,
        meta: {
            isHideFooter: true
        },

    },
    {
        path: '/search/:keyword?',
        component: Search,
        name: "search"
    },
    {
        path: '/register',
        component: Register,
        meta: {
            isHideFooter: true
        },
        beforeEnter: (to, from, next) => {
            const token = stote.state.user.userInfo.token
            if (token) {
                next('/')
            } else {
                next()
            }
        }
    },
    {
        path: "/detail/:id",
        component: Detail
    },
    {
        path: '/addcartsuccess',
        component: AddCartSuccess,
        beforeEnter: (to, from, next) => {
            //取出query
            const skuNum = to.query.skuNum
            const skuInfo = JSON.parse(window.sessionStorage.getItem('SKU_INFO_KEY'))
            if (skuNum && skuInfo instanceof Object) {
                next()
            } else {
                next('/shopcart')
            }
        }
    },
    {
        path: '/shopcart',
        component: ShopCart
    },
    {
        path: '/trade',
        component: Trade,
        beforeEnter: (to, from, next) => {
            if (from.path === '/shopcart') {
                next()
            } else {
                next('/shopcart')
            }
        }
    },
    {
        path: '/pay',
        component: Pay,
        beforeEnter: (to, from, next) => {
            if (from.path === '/trade') {
                next()
            } else {
                next('/trade')
            }
        }
    },
    {
        path: '/paysuccess',
        component: PaySuccess,
        beforeEnter: (to, from, next) => {
            if (from.path === '/pay') {
                next()
            } else {
                next('/pay')
            }
        }
    },
    {
        path: '/center',
        component: Center,
        children: [
            //
            {
                path: '/center/groupbuy',
                component: GroupBuy
            },
            {
                path: '/center/myorder',
                component: MyOrder
            },
            {
                path: '',
                redirect: '/center/myorder'
            }
        ]
    }
]