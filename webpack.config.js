// webpack 代码转换 文件优化 模块合并 自动校验 自动发布 热部署
// v1 webpack常见配置
// v2 webpack高级配置
// v3 webpack优化策略
// v4 webpack tabTable钩子
const path = require('path') 
module.exports = {
    mode: 'development',              // 打包模式 development production
    entry: './src/index.js',   // 打包入口
    output: {
        filename: 'bundle.[hash:8].js',
        path: path.resolve(__dirname, 'dist')   // 打包输出文件 !!绝对路径
    }
}