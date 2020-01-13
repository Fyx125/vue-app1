<template>
    <div class="mui-numbox" id="mynumbox" data-numbox-step='1' data-numbox-min='1' :data-numbox-max='max'>
        <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
        <input class="mui-input-numbox" type="number" value="1" @change="countChanged" ref="numbox"/>
        <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
    </div>
</template>

<script>
    import mui from '../../lib/mui/js/mui.js'

    export default {
        name: "numbox",
        mounted() {
            mui('#mynumbox').numbox();
        },
        methods: {
            countChanged() {
                this.$emit('getCount',parseInt(this.$refs.numbox.value));
            }
        },
        props:['max'],
        watch: {
            //设置可选购的最大值
            'max':function (newVal, oldVal) {
                mui('#mynumbox').numbox().setOption('max',newVal);
            }
        }
    }
</script>

<style scoped>

</style>