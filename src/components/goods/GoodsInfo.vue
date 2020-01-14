<template>
    <div class="good-info">
        <transition
            @before-enter="beforeEnter"
            @enter="enter"
            @after-enter="afterEnter">
            <div class="ball" v-show="ballFrag" ref="ball"></div>
        </transition>

        <div class="mui-card">
            <!--轮播图-->
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <swiper :lunboList="lunbotu"></swiper>
                </div>
            </div>
        </div>

        <div class="mui-card">
            <div class="mui-card-header">{{goodsinfo.title}}</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p class="price">
                        市场价:
                        <del>{{goodsinfo.oldprice}}</del>&nbsp;&nbsp;销售价: <span
                            class="now-price">{{goodsinfo.nowprice}}</span>
                    </p>
                    <div class="buy">
                        购买数量: <numbox @getCount="getSelectCount" :max="goodsinfo.num"></numbox>
                    </div>
                    <p>
                        <mt-button type="primary" size="small">立即购买</mt-button>
                        <mt-button type="danger" size="small" @click="addToShopCar">加入购物车</mt-button>
                    </p>
                </div>
            </div>
        </div>
        <div class="mui-card">
            <div class="mui-card-header">商品参数</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p>商品货号：{{goodsinfo.goods_no}}</p>
                    <p>库存情况：{{goodsinfo.num}}件</p>
                    <p>上架时间：{{goodsinfo.time}}</p>
                </div>
            </div>
            <div class="mui-card-footer">
                <mt-button type="primary" size="large" plain @click="goDesc(id)">图文介绍</mt-button>
                <mt-button type="danger" size="large" plain>商品评论</mt-button>
            </div>
        </div>
    </div>
</template>

<script>
    import swiper from '../sub/swiper.vue'
    import numbox from '../sub/numbox.vue'

    export default {
        name: "GoodsInfo",
        data() {
            return {
                id: this.$route.params.id,
                lunbotu: [],
                goodsinfo: {},
                ballFrag: false,
                selectCount:1
            }
        },
        created() {
            this.getLunbotu();
            this.getGoodsInfo();
        },
        methods: {
            getLunbotu() {
                this.$http.get('getgoodslunbo/' + this.id).then(result => {
                    this.lunbotu = result.body;
                })
            },
            getGoodsInfo() {
                this.$http.get('goods/info/' + this.id).then(result => {
                    this.goodsinfo = result.body;
                })
            },
            goDesc(id) {
                this.$router.push({name: "GoodsDesc", params: {id}});
            },
            addToShopCar() {
                this.ballFrag = !this.ballFrag;
                //{id:商品的id,count:商品的数量,price:商品的价格,selected:false商品在购物车中是否被选中,src:商品图片}
                var goodsinfo = {
                    id:this.id,
                    count:this.selectCount,
                    price:this.goodsinfo.nowprice,
                    selected:true,
                    src:this.goodsinfo.src
                };
                this.$store.commit('addToCar',goodsinfo);
            },
            beforeEnter(el){
                el.style.transform = "translate(0, 0)";
            },
            enter(el, done) {
                el.offsetWidth;
                //小球动画位置不能写死 需要适配
                //先得到购物车图标的横纵坐标，在获得小球的横纵坐标，两者差值为偏移距离
                //获取小球位置
                const ballPosition = this.$refs.ball.getBoundingClientRect();
                //获取购物车图标位置
                const badgePosition = document.getElementById("badge").getBoundingClientRect();

                const xDist = badgePosition.left - ballPosition.left;
                const yDist = badgePosition.top - ballPosition.top;

                el.style.transform = `translate(${xDist}px, ${yDist}px)`;
                el.style.transition = "all 0.6s cubic-bezier(.4,-0.3,1,.68)";
                done();
            },
            afterEnter(el) {
                this.ballFrag = !this.ballFrag;
            },
            getSelectCount(count) {
                this.selectCount = count;
            }
        },
        components: {
            swiper,
            numbox
        }
    }
</script>

<style lang="less" scoped>
    .good-info {
        background-color: #eee;
        overflow: hidden;

        .now-price {
            color: #f00;
            font-size: 16px;
            font-weight: bold;
        }

        .buy {
            margin: 5px;

            .mui-numbox {
                height: 30px;
            }
        }

        .mui-card-footer {
            display: block;

            .mint-button {
                margin: 15px 0;
                font-size: 16px;
            }
        }

        .ball {
            width: 15px;
            height: 15px;
            border-radius: 50%;
            background-color: #f00;
            position: absolute;
            z-index: 99;
            left: 147px;
            top: 389px;
        }
    }
</style>