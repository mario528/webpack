const path = require('path')
const Webpack = require('webpack')
module.exports = {
    mode: 'development',
    entry: {
        react: ['react','react-dom']
    },
    output: {
        filename: 'dll_[name].js',
        path: path.resolve(__dirname, 'dist'),
        library: '_dll_[name]',   // 接收打包后的参数
        libraryTarget: 'var' // var dll = 打包后的参数
    },
    plugins: [
        // 生成动态链接库清单 manifest.json 后续打包时会先查找manifest，若已经打包，则跳过打包
        new Webpack.DllPlugin({
            name: '_dll_[name]',
            path: path.resolve(__dirname,'dist','manifest.json')
        })
    ]
}