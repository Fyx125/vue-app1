const path=require('path');
const Webpack=require('webpack');
const HtmlWebpackPlugin=require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports={
    mode: 'development',
    entry: path.join(__dirname,'./src/main.js'),
    output: {
        path: path.resolve('dist'),
        filename: "bundle.js"
    },
    plugins: [
        new Webpack.HotModuleReplacementPlugin(),    // 启用热更新的模块
        new HtmlWebpackPlugin({    //页面在内存中的插件 自动注入bundle.js  不需要再页面内引入bundle.js
            filename: 'index.html',   //指定生成页面
            template: path.join(__dirname,'./index.html')   //指定模板页面
        }),
        new VueLoaderPlugin()             //vue-loader 伴生插件
    ],
    devServer: {
        contentBase: 'src',  //指定托管的根目录
        port: 8080,
        hot: true,   //启用热更新
        historyApiFallback: true,
        // open:true   //自动打开浏览器
    },
    module: {
        rules: [
            {                 //配置babel来转换js的高级语法
                test: /\.js$/,
                exclude:/node_modules/,
                use: 'babel-loader',

            },
            {
                test: /\.css$/,
                use:['style-loader','css-loader']
            },
            {
                test: /\.less$/,
                use:['style-loader','css-loader','less-loader']
            },
            {
                test: /\.scss$/,
                use:['style-loader','css-loader','sass-loader']
            },
            {                      //处理图片路径
                test: /\.(jpg|png|gif|bmp|jpeg)$/,
                loader:'url-loader',
                options: {
                    name: '[name].[ext]?[hash]'
                }
                // use方式使用时  limit设置图片大小 单位byte 如果图片 >= 给定值就不会被转化为base64编码
                                                // 可以在添加参数name=[name].[ext]保持图片路径名称不变
                                                // 也可以name=[hash:8]-[name].[ext] 在原来图片的名称前加8位哈希值
            },
            {                      //处理字体文件
                test: /\.(ttf|eot|svg|woff|woff2)$/,
                use:'url-loader'
            },
            {                      //处理vue文件
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        'scss': [
                            'vue-style-loader',
                            'css-loader',
                            'sass-loader'
                        ],
                        'sass': [
                            'vue-style-loader',
                            'css-loader',
                            'sass-loader?indentedSyntax'
                        ]
                    }
                }
            }
        ]
    },
    resolve: {
        alias: {    //设置（修改）vue被导入时包的路径
            "vue$": "vue/dist/vue.esm.js"
        }
    }
};