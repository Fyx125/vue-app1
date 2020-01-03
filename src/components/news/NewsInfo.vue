<template>
    <div class="newsinfo-container">
        <h3 class="title">新闻标题</h3>
        <p class="subtitle">
            <span>发表时间：</span>
            <span>点击：</span>
        </p>
        <div class="content">

        </div>
    </div>
</template>

<script>
    export default {
        name: "NewsInfo",
        data() {
            return {
                id: this.$route.params.id,
                newsInfo:[]
            }
        },
        created(){
          this.getNewsInfo();
        },
        methods: {
            getNewsInfo(){
                this.$http.get("getnewsinfo/"+this.id).then(result => {
                    this.newsInfo = result.body;
                    console.log(this.newsInfo);
                })
            }
        }
    }
</script>

<style lang="less" scoped>
    .newsinfo-container {
        padding: 0 6px;
        .title {
            font-size: 16px;
            text-align: center;
            margin: 15px 0;
            color: #f00;
        }
        .subtitle {
            font-size: 13px;
            color: #007aff;
            display: flex;
            justify-content: space-between;
        }
    }
</style>