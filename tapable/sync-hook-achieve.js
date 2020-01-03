// 实现tapable 中SyncHook(同步钩子)
class SyncHook {
    constructor(args) {
        this.tasks = []
        this.parameter = [...args].join(' ')
    }
    /**
     * 订阅事件
     */
    tap(name, task) {
       this.tasks.push(task)
    }
    /** 
     * 调用订阅任务
    */
    call(...args) {
        this.tasks.forEach((task,index) => task(this.parameter))
    }
}
let syncHook = new SyncHook(['name','sex'])
syncHook.tap('webpack',function(name) {
    console.log('webpack hook is running',name)
})
syncHook.tap('plugins',function(name) {
    console.log('plugins hook is running',name)
})
syncHook.call()

