<template>
    <div class="shop-car">
        <!--商品列表项区域-->
        <div class="goods-list">
            <div class="mui-card" v-for="(item, index) in goodslist" :key="item.id">
                <div class="mui-card-content">
                    <div class="mui-card-content-inner">
                        <mt-switch v-model="item.selected" @change="selectedChanged(item.id,item.selected)"></mt-switch>
                        <img :src="item.src" alt="">
                        <div class="info">
                            <h1>{{item.title}}</h1>
                            <p>
                                <span class="price">￥ {{item.price}}</span>
                                <numbox :num="item.count" :goodsid="item.id"></numbox>
                                <a href="#" @click.prevent="remove(item.id, index)">删除</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--商品结算区域-->
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner account">
                    <div class="left">
                        <p>总计（不含运费）</p>
                        <p>已勾选商品 <span class="red">{{$store.getters.getGoodsCountAndAmount.count}}</span> 件 总价 <span class="red">￥ {{$store.getters.getGoodsCountAndAmount.amount}}</span></p>
                    </div>
                    <div class="right">
                        <mt-button type="danger">去结算</mt-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import numbox from '../sub/shopcar_numbox.vue'
    export default {
        data() {
            return {
                goodslist:JSON.parse(localStorage.getItem('car') || '[]')
            }
        },
        methods: {
          // getGoodsList() {
          //     //从localstorage获取购物车数据
          //
          // }
            remove(id,index){
                //删除商品
                this.goodslist.splice(index, 1);

                this.$store.commit('removeFromCar',id);
            },
            selectedChanged(id,val){
                this.$store.commit('updateGoodsSelected',{id,selected:val});
            }
        },
        components: {
            numbox
        }
    }
</script>

<style lang="less" scoped>
    .shop-car {
        background-color: #eee;
        overflow: hidden;
        .goods-list {
            .mui-card-content-inner {
                display: flex;
                align-items: center;
            }
            img {
                width: 60px;
                height: 60px;
            }
            h1 {
                font-size: 13px;
            }
            .info {
                p {
                    margin: 0;
                }
                .price {
                    color: #f00;
                    font-weight: bold;
                }
            }
        }
        .account {
            display: flex;
            justify-content: space-between;
            align-items: center;
            .red {
                color: #f00;
                font-size: 16px;
                font-weight: bold;
            }
        }
    }
</style>