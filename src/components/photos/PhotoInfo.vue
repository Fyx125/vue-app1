<template>
    <div class="photoinfo-container">
        <h3>{{photoInfo.title}}</h3>
        <p class="subtitle">
            <span>发表时间：{{photoInfo.time}}</span>
            <span>点击：{{photoInfo.num}}次</span>
        </p>
        <hr>
        <!--缩略图-->
        <vue-preview :slides="list" @close="handleClose"></vue-preview>
        <div class="content" v-html="photoInfo.content"></div>
        <!--评论子组件-->
        <cmt-box :id="id"></cmt-box>
    </div>
</template>

<script>
    import comment from '../sub/comment.vue'

    export default {
        name: "PhotoInfo",
        data() {
            return {
                id: this.$route.params.id,
                photoInfo: {},
                list: []
            }
        },
        created() {
            this.getPhotoInfo();
            this.getThumbs();
        },
        methods: {
            getPhotoInfo() {
                this.$http.get('getimginfo/' + this.id).then(result => {
                    this.photoInfo = result.body;
                })
            },
            getThumbs() {
                this.$http.get('getthumimages/' + this.id).then(result => {
                    result.body.forEach(item => {
                        item.w = 600;
                        item.h = 400;
                        item.msrc = item.src
                    });
                    this.list = result.body;
                    console.log(this.list);
                })
            },
            handleClose() {

            }
        },
        components: {
            'cmt-box': comment
        }
    }
</script>

<style lang="less" scoped>
    .photoinfo-container {
        padding: 6px;

        h3 {
            font-size: 15px;
            color: #26a2ff;
            text-align: center;
            margin: 15px 0;
        }

        .subtitle {
            display: flex;
            justify-content: space-between;
            font-size: 13px;
        }

        .content {
            font-size: 13px;
            line-height: 30px;
        }
        /*deep深层作用选择器*/
        /deep/ .my-gallery {
            display: flex;
            flex-wrap: wrap;

            figure {
                width: 30%;
                margin: 5px;
                height: 70px;

                img {
                    width: 100%;
                    height: 100%;
                    box-shadow: 0 0 8px #999;
                    border-radius: 5px;
                }
            }
        }
    }
</style>