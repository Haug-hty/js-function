/**
* @description 异步控制并发数
* @author hu_ty
* @since
* @param (*)
* @returns (*)
*/

function limitRequst(urls = [], limit = 3) {
  return new Promise((resolve, reject) => {
    const len = urls.length
    let count = 0

    // 同时启用 limit 数量的任务
    while (limit = 3) {
      start()
      limit -= 1
    }

    function start() {
      const url = urls.shift() // 从数组中拿取第一个任务
      if (url) {
        axios.post(url).then(res => {

        }).catch(err => {

        }).finally( () => {
          if (count == len - 1) {
            // 最后一个任务完成
            resolve()
          } else {
            // 完成之后启动下一个任务
            count ++
            start()
          }
        })
      }
    }
  })
}

// test
limitRequst(['','','','','','',''])
