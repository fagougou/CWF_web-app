const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin') // 动态在html中插入生成的js路径
const VueLoaderPlugin = require('vue-loader/lib/plugin') // 配合vue-loader的插件
const CleanWebpackPlugin = require('clean-webpack-plugin') // 清空之前打包的文件

module.exports = {
    entry: __dirname + '/src/index.js', // 入口文件
    output: {
        path: path.resolve(__dirname, 'dist'), // 出口文件路径，必须是已存在的路径，否则dev不能查看到页面
        filename: '[name].[hash:8].js', // 每次输出加上不同的hash值
        chunkFilename: '[name].[hash:8].js' // 指定分离出来的代码文件的名称
    },
    plugins: [ // 插件列表
        new CleanWebpackPlugin(['dist']), // 设置要清空的目录
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'static/index.html' // 按照给定的html模板进行输出，一般插入js路径和标题
        }),
        new VueLoaderPlugin()
    ],
    module: {
        rules: [ // loader配置
            {
                test: /\.vue$/, // resource.test
                include: [
                    path.resolve(__dirname, 'src')
                ], // resource.include
                loader: [
                    'vue-loader' // 依赖vue-template-compiler
                ]
            },
            {
                test: /\.css$/,
                include: [
                    path.resolve(__dirname, 'src')
                ],
                use: [
                    'style-loader', // vue-style-loader与之的区别？
                    {
                        loader: 'css-loader'
                    }
                ]
            },
            {
                test: /\.js$/,
                include: [
                    path.resolve(__dirname, 'src')
                ],
                use: [
                    {
                        loader: 'babel-loader', // 依赖@babel/core @babel/preset-env包
                        options: { //如果有这个设置则不用再添加.babelrc文件进行配置
                            babelrc: false // 不采用.babelrc的配置
                        }
                    }
                ]
            }
        ]
    },
    resolve: { // 模块解析设置
        extensions: ['.wasm', '.mjs', '.js', '.json', '.jsx', '.css', '.vue'] // 解析引入模块文件时，自动匹配的文件后缀列表
    },
    devServer: { // webpack-dev-server配置
        publicPath: '/',
        disableHostCheck: true
    }
}