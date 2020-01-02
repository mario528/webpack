const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = {
    mode: 'development',
    // webpack优化项
    // splitChunks 针对多页面应用 引用同一个模块的情况 将共同使用的模块 分割
    optimization: {
        splitChunks: {      // 分割代码块
            cacheGroups: {  // 缓存组
                common: {   // 公共模块
                    chunks: 'initial',  // 入口
                    minSize: 0,         // 被共用的大小
                    minChunks: 2        // 被共用的次数
                },
                vendor: {               // 抽离第三方模块
                    test: /node_modules/,
                    chunks: 'initial',
                    minSize: 0,
                    minChunks: 2,
                    priority: 1 // 执行权重
                }
            }
        }
    },
    // 多入口
    entry: {
        home: './src/home/index',
        user: './src/user/index'
    },
    output: {
        filename: '[name].[hash:8].js',
        path: path.resolve('dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'home.html',
            chunks: ['home']
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'user.html',
            chunks: ['user']
        }),
        new CleanWebpackPlugin()
    ]
}