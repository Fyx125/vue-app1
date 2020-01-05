<template>
    <div class="cmt-container">
        <h3>发表评论</h3>
        <hr>
        <textarea placeholder="请输入要评论的内容（最多120字）" maxlength="120"></textarea>
        <mt-button type="primary" size="large">发表评论</mt-button>
        <!--评论内容区域-->
        <div class="cmt-list">
            <div class="cmt-item">
                <div class="cmt-title">
                    第一楼 用户：匿名用户 发表时间：2020-1-5 15:03:23
                </div>
                <div class="cmt-body">
                    愉快的周末
                </div>
            </div>
            <div class="cmt-item">
                <div class="cmt-title">
                    第一楼 用户：匿名用户 发表时间：2020-1-5 15:03:23
                </div>
                <div class="cmt-body">
                    愉快的周末
                </div>
            </div>
            <div class="cmt-item">
                <div class="cmt-title">
                    第一楼 用户：匿名用户 发表时间：2020-1-5 15:03:23
                </div>
                <div class="cmt-body">
                    愉快的周末
                </div>
            </div>
            <div class="cmt-item">
                <div class="cmt-title">
                    第一楼 用户：匿名用户 发表时间：2020-1-5 15:03:23
                </div>
                <div class="cmt-body">
                    愉快的周末
                </div>
            </div>
            <div class="cmt-item">
                <div class="cmt-title">
                    第一楼 用户：匿名用户 发表时间：2020-1-5 15:03:23
                </div>
                <div class="cmt-body">
                    愉快的周末
                </div>
            </div>
        </div>
        <mt-button type="danger" size="large" plain>加载更多</mt-button>
    </div>
</template>

<script>
    export default {
        name: "commet"
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