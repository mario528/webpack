const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const Webpack = require('webpack')
module.exports = {
    mode: 'development',
    entry: {
        test: './src/test.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new Webpack.DllReferencePlugin({
            manifest: path.resolve(__dirname,'dist','manifest.json')
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html'
        })
    ]
}