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
import PhotoList from './components/photos/PhotoList.vue'
import PhotoInfo from './components/photos/PhotoInfo.vue'
import GoodsList from './components/goods/GoodsList.vue'


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
        },
        {
            path: '/home/photolist',
            name: 'PhotoList',
            component: PhotoList
        },
        {
            path: '/home/photoinfo/:id',
            name: 'PhotoInfo',
            component: PhotoInfo
        },
        {
            path: '/home/goodslist',
            name: 'GoodsList',
            component: GoodsList
        }
    ],
    linkActiveClass: 'mui-active'    //设置新的类名覆盖默认的类router-link-active
})