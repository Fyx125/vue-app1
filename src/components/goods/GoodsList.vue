<template>
    <div class="good-list">
        <!--//也可以通过绑定事件跳转页面  &#45;&#45;this.$router.push('/home/goodsinfo/'+id)-->
        <router-link class="goods-item" v-for="item in goodslist" :key="item.id" :to="'/home/goodsinfo/'+item.id" tag="div">
            <img :src="item.src" alt="">
            <h2 class="title">{{item.title}}</h2>
            <div class="info">
                <p class="price">
                    <span class="now">￥ {{item.nowprice}}</span>
                    <span class="old">￥ {{item.oldprice}}</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩{{item.num}}件</span>
                </p>
            </div>
        </router-link>
        <mt-button type="danger" size="large" @click="getMore">加载更多</mt-button>
    </div>
</template>

<script>
    export default {
        name: "GoodsList",
        data() {
            return {
                pageindex: 1,
                goodslist: []
            }
        },
        created() {
          this.getGoodsList();
        },
        methods: {
            getGoodsList() {
                this.$http.get('getgoods/' + this.pageindex).then(result => {
                    this.goodslist = this.goodslist.concat(result.body);
                })
            },
            getMore() {
                this.pageindex++;
                this.getGoodsList();
            }
        }
    }
</script>

<style lang="less" scoped>
    .good-list {
        display: flex;
        flex-wrap: wrap;
        padding: 8px;
        justify-content: space-between;

        .goods-item {
            width: 49%;
            border: 1px solid #ccc;
            box-shadow: 0 0 8px #ccc;
            margin: 3px 0;
            padding: 2px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            min-height: 293px;

            img {
                width: 100%;
            }

            .title {
                font-size: 14px;
            }

            .info {
                background-color: #eee;

                p {
                    margin: 0;
                    padding: 5px;
                }

                .price {
                    .now {
                        color: #f00;
                        font-weight: 700;
                        font-size: 16px;
                    }

                    .old {
                        text-decoration: line-through;
                        font-size: 12px;
                        margin-left: 10px;
                    }
                }

                .sell {
                    display: flex;
                    justify-content: space-between;
                    font-size: 12px;
                }
            }
        }
    }
</style>