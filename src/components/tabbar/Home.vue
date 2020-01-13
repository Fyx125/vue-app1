<template>
    <div>
        <!--轮播图-->
        <swiper :lunboList="lunboList"></swiper>
        <!--六个项目格子-->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newslist">
                <img :src="images[0]" alt="">
                <div class="mui-media-body">新闻资讯</div>
            </router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/photolist">
                <img :src="images[1]" alt="">
                <div class="mui-media-body">图片分享</div>
            </router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/goodslist">
                <img :src="images[2]" alt="">
                <div class="mui-media-body">商品购买</div>
            </router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="#">
                <img :src="images[0]" alt="">
                <div class="mui-media-body">留言反馈</div>
            </router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="#">
                <img :src="images[0]" alt="">
                <div class="mui-media-body">视频专区</div>
            </router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="#">
                <img :src="images[0]" alt="">
                <div class="mui-media-body">联系我们</div>
            </router-link></li>
        </ul>
    </div>
</template>

<script>
    import swiper from '../sub/swiper.vue'
    export default {
        data() {
            return {
                lunboList: [],
                images:[
                    '../../images/1.png',
                    '../../images/2.png',
                    '../../images/3.png'
                ]
            }
        },
        created() {
            this.getLunbo();
        },
        methods: {
            getLunbo() {
                this.$http.get("getlunbo").then(result => {
                    this.lunboList = result.body;
                })
            }
        },
        components: {
            swiper
        }
    }
</script>

<style lang="less" scoped>

    .mui-grid-view.mui-grid-9 {
        background-color: #fff;
        border: none;
        img {
            width: 60px;
            height: 60px;
        }
        .mui-media-body {
            font-size: 13px;
        }
    }

    .mui-grid-view.mui-grid-9 .mui-table-view-cell {
        border: none;
    }
</style>