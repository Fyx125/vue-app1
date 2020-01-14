<template>
    <div class="mui-numbox" data-numbox-step='1' data-numbox-min='1' data-numbox-max='99'>
        <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
        <input class="mui-input-numbox" type="number" :value="num" @change="countChanged" ref="numbox" readonly/>
        <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
    </div>
</template>

<script>
    import mui from '../../lib/mui/js/mui.js'

    export default {
        name: "shopcar_numbox",
        mounted() {
            mui('.mui-numbox').numbox();
        },
        methods: {
            countChanged() {
                var goodsinfo={id:this.goodsid,count:this.$refs.numbox.value};
                this.$store.commit('updateGoodsInfo',goodsinfo);
            }
        },
        props:['num','goodsid']
    }
</script>

<style scoped>
.mui-numbox {
    height: 25px;
}
</style>