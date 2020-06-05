import Home from "../pages/Home"
import Lohin from "../pages/Lohin"
import Search from "../pages/Search"
import Register from "../pages/Register"
export default [
    //
    {
        path: '/',
        component: Home
    },
    {
        path: '/lohin',
        component: Lohin
    },
    {
        path: '/search',
        component: Search
    },
    {
        path: '/register',
        component: Register
    },
]