# 从0到1搭建优化webpack
## 项目完成情况
- [ ] v1 完成webpack项目的搭建
- [ ] v2 优化webpack
- [ ] v3 实现webpack打包和部分loader
## 概念
> 本段摘自 [webpack中文官网](https://www.webpackjs.com/concepts "webpack中文官网")
#### 本质上，webpack 是一个现代 JavaScript 应用程序的***静态模块打包器***。当 webpack 处理应用程序时，它会***递归***地构建一个依赖关系图，其中包含应用程序需要的每个模块，然后将所有这些模块打包成一个或多个 bundle
## 开始
``` javaScript
  const path = require('path')
  const HtmlWebpackPlugin = require('html-webpack-plugin')
  module.exports = {
      mode: 'development',
      entry: './src/index.js',
      output: {
          filename: 'bundle.[hash:8].js',
          path: path.reslove(__dirname,'dist')
      },
      plugins: [],
      modules: [
          {
              test: /^.js$/,
              use: []
          }
      ],
  }
```
### 
    以上是webpack入口文件的最基本配置,我们可以看出,在Webpack的配置中,共有
        . mode
        . entry
        . output
        . plugins
        . modules
