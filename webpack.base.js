// webpack 代码转换 文件优化 模块合并 自动校验 自动发布 热部署
// v1 webpack常见配置
// v2 webpack高级配置
// v3 webpack优化策略
// v4 webpack tabTable钩子
const path = require('path');
const Webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
module.exports = {
    mode: 'production',              // 打包模式 development production
    devServer: {                      // webpack-dev-server 配置
        port: 8080,
        progress: true,
        contentBase: './dist',
        open: true,
        compress: true                // gzip压缩
    },
    // [source-map] 生成.map文件 生成代码映射
    // [eval-source-map] 不生成.map文件 可以查看出错代码位置
    // [cheap-module-source-map] 生成.map映射文件 只提示问题语句
    // [cheap-module-eval-source-map] 不成声.map映射文件 可以查看出错代码位置
    devtool: 'cheap-module-eval-source-map',
    watch: true,    // 实时打包
    watchOptions: {
        poll: 1000,  // 1秒/poll次
        aggregateTimeout: 500,   // 防抖
        ignored: /node_modules/  // 忽略监控文件
    },
    entry: './src/index.js',   // 打包入口
    output: {
        filename: 'bundle.[hash:8].js',
        path: path.resolve(__dirname, 'dist')   // 打包输出文件 !!绝对路径
    },
    // reslove 解析
       // alias 别名
    resolve: {
        modules: [path.resolve(__dirname, 'node_modules')],
        alias: { 
            '@': path.resolve('/src')
        }
    },
    plugins: [   
        // 定义webpack环境
        // 定义DEV区分环境              
        new Webpack.DefinePlugin({
            // DEV: JSON.stringify('development'),
            FLAG: 'true',
            EXPORESSION: '1+1'
        }),                
        // html-webpack-plugin 将js打包引入html
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
        }),
        new Webpack.BannerPlugin('make by 马加奥'),
        new CopyWebpackPlugin([
            {
                from: './doc',
                to: './dist/doc'
            }
        ]),
        new CleanWebpackPlugin({
            verbose: true
        })
    ],
    // 模块
    module: {
        rules: [
            // 处理css文件 css-loader 解析 @import style-loader 把css插入到head中
            // loader执行顺序 从右向左执行
            // 自动添加浏览器前缀 autoprefixer postcss-loader
            // 
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
            },
            // 匹配js es6 -> es5
            {
                test: /\.js$/,
                exclude: '/node_modules/',
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env'
                        ],
                        plugins: [
                            // '@babel/plugin-transform-runtime'
                            '@babel/plugin-proposal-class-properties'
                        ]
                    }
                }]
            },
            // {
            //     test: /\.js$/,
            //     exclude: '/node_modules/',
            //     use: [{
            //         loader: 'eslint-loader',
            //         options: {
            //           enforce: 'pre'
            //         }
            //     }]
            // }
            // 图片加载loader file-loader
            // 当文件小时 使用url-loader将图片转化为base64格式
            {
                test: /\.png|.jpg|.gif$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            outputPath: './assets',
                            limit: 50 * 1024
                        }
                    }
                ]
            }
        ]
    }
}