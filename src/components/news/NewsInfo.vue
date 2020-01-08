<template>
    <div class="newsinfo-container">
        <h3 class="title">{{newsInfo.title}}</h3>
        <p class="subtitle">
            <span>发表时间：{{newsInfo.time}}</span>
            <span>点击：{{newsInfo.num}}</span>
        </p>
        <hr>
        <div class="content">
            {{newsInfo.content}}
        </div>
        <!--评论子组件区域-->
        <comment-box :id="this.id"></comment-box>
    </div>
</template>

<script>
    import comment from '../sub/comment.vue'
    export default {
        name: "NewsInfo",
        data() {
            return {
                id: this.$route.params.id,
                newsInfo:{}
            }
        },
        created(){
          this.getNewsInfo();
        },
        methods: {
            getNewsInfo(){
                this.$http.get("getnewsinfo/"+this.id).then(result => {
                    this.newsInfo = result.body;
                })
            }
        },
        components: {
            'comment-box': comment
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
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }
        .subtitle {
            font-size: 13px;
            color: #007aff;
            display: flex;
            justify-content: space-between;
        }
    }
</style>