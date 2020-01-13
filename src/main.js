/*
项目入口文件
 */

import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import router from './router.js'
import store from './store.js'
import app from './App.vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'
import VuePreview from 'vue-preview'
import Vuex from 'vuex'


Vue.use(Vuex);
Vue.use(MintUI);
Vue.use(VueRouter);
Vue.use(VueResource);
// 缩略图插件(图片预览)
Vue.use(VuePreview);

//设置请求的根路径
Vue.http.options.root = 'http://localhost:8081/';
//设置post时候 表单数据格式的组织形式
Vue.http.options.emulateJSON = true;
//定义一个全局时间过滤器
import moment from 'moment'
Vue.filter('dataFormat',function (dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
    return moment(dataStr).format(pattern);
});

var vm = new Vue({
    el:'#app',
    data:{},
    methods:{},
    render:function (createElements) {          //会将el选择的节点里面所有的内容覆盖
        return createElements(app);
    },
    router,
    store
});



//使用es6语法  大部分需要babel编译才能使用
/*
需要安装两套关于babel的包
  npm i babel-core babel-loader babel-plugin-transform-runtime -D
  npm i babel-preset-env babel-preset-stage-0 -D
 */
// class Person {
//     //静态属性  可以通过类名直接访问的属性
//     static info = {name: 'zs', age: 18}
// }
// console.log(Person.info);
/*
 npm i vue -S
 默认情况下webpack无法打包.vue文件  需要安装相关loader
 npm i vue-loader vue-template-compiler -D
 */
/*
在node中，
引入模块：
    var 变量名 = require('模块标识符')
向外暴露成员的形式：
    module.exports = {}   和 exports

在ES6中，
导入和导出模块方式：
    import 模块名称 from '模块标识符'
    export default {}  和 export
export default {} 在一个模块中只能暴露一次  可以用任意的变量名来接收
export 在一个模块中可以多次暴露，向外暴露的成员，只能用{}的形式接收 使用别名接收时 用as取别名
在一个模块中可以同时使用 export default {} 和 export
 */