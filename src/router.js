/*
路由模块
 */

import VueRouter from 'vue-router'
import Home from './components/tabbar/Home.vue'
import Member from './components/tabbar/Member.vue'
import Shopcar from './components/tabbar/Shopcar.vue'
import Search from './components/tabbar/Search.vue'
import NewsList from './components/news/NewsList.vue'
import NewsInfo from './components/news/NewsInfo.vue'


export default new VueRouter({
    routes: [
        {
            path: '/',
            redirect:'/home'
        },
        {
            path: '/home',
            name: 'Home',
            component: Home
        },
        {
            path: '/member',
            name: 'Member',
            component: Member
        },
        {
            path: '/shopcar',
            name: 'Shopcar',
            component: Shopcar
        },
        {
            path: '/search',
            name: 'Search',
            component: Search
        },
        {
            path: '/home/newslist',
            name: 'NewsList',
            component: NewsList
        },
        {
            path: '/home/newsinfo/:id',
            name: 'NewsInfo',
            component: NewsInfo
        }
    ],
    linkActiveClass: 'mui-active'    //设置新的类名覆盖默认的类router-link-active
})