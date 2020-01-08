<template>
    <div class="cmt-container">
        <h3>发表评论</h3>
        <hr>
        <textarea placeholder="请输入要评论的内容（最多120字）" maxlength="120" v-model="msg"></textarea>
        <mt-button type="primary" size="large" @click="postComment">发表评论</mt-button>
        <!--评论内容区域-->
        <div class="cmt-list" v-for="(item, index) in comments">
            <div class="cmt-item">
                <div class="cmt-title">
                    第{{index+1}}楼&nbsp;&nbsp; 用户：{{item.username}} 发表时间：{{item.addtime | dataFormat}}
                </div>
                <div class="cmt-body">
                    {{item.content}}
                </div>
            </div>
        </div>
        <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
    </div>
</template>

<script>
    import {Toast} from 'mint-ui';
    export default {
        name: "comment",
        data() {
            return {
                pageIndex: 1,
                comments: [],
                msg: ''
            }
        },
        created() {
            this.getComments();
        },
        methods: {
            getComments() {
                this.$http.get("getcomments/" + this.id + "/" + this.pageIndex).then(result => {
                    // this.comments = result.body;
                    // console.log(this.comments);
                    //加载更多时 在原来数据后面拼接新加载的数据
                    this.comments = this.comments.concat(result.body);
                })
            },
            getMore() {     //加载更多
                this.pageIndex++;
                this.getComments();
            },
            postComment() {    //发表评论
                if (this.msg.trim().length === 0) {
                    return  Toast('评论内容不能为空！');
                }
                var cmt = {
                    username: '代码狗',
                    addtime: Date.now(),
                    content:this.msg.trim()
                };
                this.comments.unshift(cmt);
                this.msg='';
            }
        },
        props: ['id']
    }
</script>

<style lang="less" scoped>
    .cmt-container {
        h3 {
            font-size: 18px;
        }

        textarea {
            font-size: 14px;
            margin: 0;
            height: 85px;
        }

        .cmt-list {
            margin: 10px 0;

            .cmt-item {
                font-size: 13px;

                .cmt-title {
                    background-color: #eee;
                    line-height: 30px;
                }

                .cmt-body {
                    line-height: 35px;
                    text-indent: 2em;
                }
            }
        }
    }
</style>