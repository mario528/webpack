// 当引入jqery时 需要对jquery依次向上打包 
// 但jquery并为在生产环境引用其他模块 所以可以忽略打包
import * as jquery from 'jquery'
import React from 'react'
import ReactDom from 'react-dom'
// 优化 例 引入moment时间库 moment会引入所有语言包 对于项目来说 只需要引入需要的语言包即可
import * as moment from 'moment'
import 'moment/locale/zh-cn';
console.log('webpack');
require('./index.css');
import imgaeAssets from'./image.png'
let fn = () => {
    console.log(10)
}
// fn();
let a = 10
// const ma = 'mario'
// class Person {
//     a = 10
// }
let image = new Image()
image.src = imgaeAssets
document.body.appendChild(image)
console.log("+++++++",DEV)
console.log(moment().format('LLLL'))
// webpack 动态链接库
ReactDom.render(<h1>webpack动态链接库</h1>,document.getElementById("app"))