/**
* @description 事件总线 | 发布订阅模式
* @author hu_ty
* @since
* @param (*)
* @returns (*)
*/

class EventEmitter {
  constructor() {
    this.cache = {}
  }

  on(name, fn) {
    if(this.cache[name]){
      this.cache[name].push(fn)
    } else {
      this.cache[name] = [fn]
    }
  }

  off(name, fn){
    const tasks = this.cache[name]
    if(tasks) {
      const index = tasks.findIndex(f => f === fn || f.callback === fn)
      if(index >= 0) {
        tasks.splice(index, 1)
      }
    }
  }

  emit(name, once = false) {
    if(this.cache[name]) {
      // 创建副本，如果回调函数内继续注册相同时间，会造成回调地狱
      const tasks = this.cache[name].slice()
      for(let fn of tasks) {
        fn();
      }
      if(once) {
        delete this.cache[name]
      }
    }
  }

}


const eventBus = new EventEmitter()
const task1 = () => {console.log('<== task1 ==>');}
const task2 = () => {console.log('<== task2 ==>');}

eventBus.on('task',task1)
eventBus.on('task',task2)
eventBus.off('task',task1)
setTimeout(() => {
  eventBus.emit('task')
}, 1000);


