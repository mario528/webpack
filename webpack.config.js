const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = {
    mode: 'development',
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
            template: './index.html',
            filename: 'home.html',
            chunks: ['home']
        }),
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: 'user.html',
            chunks: ['user']
        }),
        new CleanWebpackPlugin()
    ]
}