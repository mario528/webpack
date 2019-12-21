// webpack 代码转换 文件优化 模块合并 自动校验 自动发布 热部署
// v1 webpack常见配置
// v2 webpack高级配置
// v3 webpack优化策略
// v4 webpack tabTable钩子
const path = require('path') 
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode: 'development',              // 打包模式 development production
    devServer: {                      // webpack-dev-server 配置
        port: 8080,
        progress: true,
        contentBase: './dist',
        open: true,
        // compress: true                // gzip压缩
    },
    entry: './src/index.js',   // 打包入口
    output: {
        filename: 'bundle.[hash:8].js',
        path: path.resolve(__dirname, 'dist')   // 打包输出文件 !!绝对路径
    },
    plugins: [                                  // html-webpack-plugin 将js打包引入html
        new HtmlWebpackPlugin({
            template: './src/index.html',       // 模版
            filename: 'index.html',
            minify: {                           // 压缩html
                removeAttributeQuotes: true,    // 将双引号转化为单引号
                collapseWhitespace: false        // 折叠空行
            }
        })
    ]
}