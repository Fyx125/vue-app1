<template>
    <div>
        <!--顶部导航栏-->
        <div id="slider" class="mui-slider">
            <div id="sliderSegmentedControl"
                 class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                <div class="mui-scroll">
                    <a :class="['mui-control-item', item.id == 0 ? 'mui-active': '']" v-for="item in cates"
                       :key="item.id"
                       @tap="getPhotoByCateId(item.id)">{{item.title}}</a>
                </div>
            </div>
        </div>
        <!--内容区域-->
        <ul class="photo-list">
            <router-link v-for="item in list" :key="item.id" :to="'/home/photoinfo/'+item.id" tag="li">
                <img v-lazy="item.src">
                <div class="info">
                    <div class="info-title">{{item.title}}</div>
                    <div class="info-body">{{item.summary}}</div>
                </div>
            </router-link>
        </ul>
    </div>
</template>

<script>
    import mui from '../../lib/mui/js/mui.js'

    export default {
        name: "PhotoList",
        data() {
            return {
                cates: [],
                list: []
            }
        },
        created() {
            this.getAllCategory();
            this.getPhotoByCateId(0);
        },
        mounted() {
            //滑动组件初始化
            mui('.mui-scroll-wrapper').scroll({
                deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
            });
        },
        methods: {
            getAllCategory() {
                this.$http.get("getimgcategory").then(result => {
                    result.body.unshift({id: 0, title: '全部'});
                    this.cates = result.body;
                })
            },
            getPhotoByCateId(cateid) {
                this.$http.get("getimgs/" + cateid).then(result => {
                    this.list = result.body;
                })
            }
        }
    }
</script>

<style lang="less" scoped>
    /*解决Chrome浏览器滑动问题*/
    * {
        touch-action: pan-y;
    }

    .photo-list {
        margin: 0;
        padding: 10px 10px 0 10px;
        list-style: none;

        li {
            background-color: #ccc;
            text-align: center;
            margin-bottom: 10px;
            box-shadow: 0 0 9px #999;
            border-radius: 5px;
            overflow: hidden;
            position: relative;

            img {
                width: 100%;
                vertical-align: middle;
            }

            img[lazy=loading] {
                width: 40px;
                height: 300px;
                margin: auto;
            }

            .info {
                color: #fff;
                position: absolute;
                bottom: 0;
                background-color: rgba(0,0,0,0.4);
                max-height: 84px;
                width: 100%;

                .info-title {
                    font-size: 14px;
                }

                .info-body {
                    font-size: 13px;
                }
            }
        }
    }
</style>