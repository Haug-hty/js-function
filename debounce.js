
/**
 *  节流函数
 * @param {*} fn 
 * @param {*} delay 
 */
function debounce(fn, delay) {
    let timer  // 上次触发时间
    return function(...args){
        clearTimeout(timer)

        timer = setTimeout(function() {
            fn.apply(this, args)
        },delay)
    }
}

// function test() {
//     console.log('节流');
// }
// const throttleTask = throttle(test, 1000)
// window.addEventListener('scroll',throttleTask)