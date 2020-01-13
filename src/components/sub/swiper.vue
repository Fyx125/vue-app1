<template>
    <div>
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in lunboList" :key="lunboList.src">
                <img :src="item.src" alt="">
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
    export default {
        name: "swiper",
        props: ['lunboList']
    }
</script>

<style lang="less" scoped>
    .mint-swipe {
        height: 200px;

        .mint-swipe-item {
            text-align: center;
            img {
                height: 100%;
            }
        }
    }
</style>