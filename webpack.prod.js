// 生产模式下webpack配置
let merge = require('webpack-merge')
let base = require('./webpack.base.js')
let webpack = require('webpack')
module.exports = merge(base, {
    mode: 'production',
    plugins: [
        new webpack.DefinePlugin({
            DEV: JSON.stringify('production')
        })
    ]
})