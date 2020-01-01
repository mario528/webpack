// webpack 动态链接库
const path = require('path')
const Webpack = require('webpack')
module.exports = {
    mode: 'development',
    entry: {
        dll: ['react','react-dom']
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname,'dist'),
        // 用library设定的参数承接打包的结果
        // libraryTarget 设定用何种方法承接打包结果
        library: 'dll'
    },
    plugins: [
        // 生成动态链接库
        new Webpack.DllPlugin({
            name: 'dll',   // name === library
            path: path.resolve(__dirname,'dist','manifest.json'),
        })
    ]

}