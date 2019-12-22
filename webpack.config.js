// webpack 代码转换 文件优化 模块合并 自动校验 自动发布 热部署
// v1 webpack常见配置
// v2 webpack高级配置
// v3 webpack优化策略
// v4 webpack tabTable钩子
const path = require('path') 
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
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
                collapseWhitespace: false       // 折叠空行
            }
        }),
        new MiniCssExtractPlugin({              // 将css代码以link标签插入html模版中
            filename: 'main.css'
        })            
    ],
    // 模块
    module: {
        rules: [
            // 处理css文件 css-loader 解析 @import style-loader 把css插入到head中
            // loader执行顺序 从右向左执行
            // 自动添加浏览器前缀 autoprefixer postcss-loader
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                // {
                //     loader: 'style-loader',
                //     options: {
                //         insert: 'top'         // 文件插入顺序 top 置顶
                //     }
                // }, 
                'css-loader',
                'postcss-loader']
            }
        ]
    }
}