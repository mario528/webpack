// 开发环境下webpack配置
let merge = require('webpack-merge')
let base = require('./webpack.base.js')
let webpack = require('webpack')
module.exports = merge(base, {
    mode: 'development',
    plugins: [
        new webpack.DefinePlugin({
            DEV: JSON.stringify('development')
        })
    ]
})