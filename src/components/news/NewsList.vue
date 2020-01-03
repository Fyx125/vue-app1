<template>
    <div>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="item in newsList" :key="item.id">
                <router-link :to="'/home/newsinfo/'+item.id">
                    <img class="mui-media-object mui-pull-left" :src="item.src" alt="">
                    <div class="mui-media-body">
                        <h4>{{item.title}}</h4>
                        <p class='mui-ellipsis'>
<!--                            <span>发表时间：{{item.time | dataFormat('YYYY-MM-DD')}}</span>-->
                            <span>发表时间：{{item.time}}</span>
                            <span>点击：{{item.num}}次</span>
                        </p>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "NewsList",
        data() {
            return {
                newsList:[]
            }
        },
        created(){
            this.getNewsList();
        },
        methods: {
            getNewsList(){
                this.$http.get("getnewslist").then(result => {
                    this.newsList = result.body;
                })
            }
        }
    }
</script>

<style lang="less" scoped>
    .mui-table-view {
        li {
            h4 {
                font-size: 14px;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
            }
            .mui-ellipsis {
                font-size: 12px;
                color: #226aff;
                display: flex;
                justify-content: space-between;
            }
        }
    }
</style>