// vendor.js
// Webpack实现插件加载功能
// 在Webpack lib/Compiler.js核心模块中 Webpack通过tapable模块实现Webpack按顺序打包的功能
const {
    SyncHook
} = require('tapable')
class Tapable {
    constructor() {
        // constructor Function
        this.hooks = {
            mock: new SyncHook(['name'])
        }
    }
    start(name) {
        console.log('--- start hook ---');
        // 调用注册的方法
        this.hooks.mock.call(name)
    }
}
let tapable = new Tapable()
// 注册事件
tapable.hooks.mock.tap('webpack', function (name) {
    console.log('webpack hook running',name)
})
tapable.hooks.mock.tap('nodeJS', function (name) {
    console.log('nodeJS hook running',name)
})
// 执行事件
tapable.start('majiaao')
