
/**
 *  防抖函数
 * @param {*} fn 触发函数
 * @param {*} delay 函数之间的延迟
 */
function throttle (fn, delay) {
    let last = 0 // 上次触发时间
    return function (...args) {
        const now = Date.now()
        if(now - last > delay){
            last = now
            fn.apply(this, args)
        }
    }
}

// function task() {
//     console.log('防抖');
// }
// const throttleTask = throttle(task, 1000)
// window.addEventListener('scroll',throttleTask)

