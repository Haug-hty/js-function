/**
* @description 获取 URL 参数
* @author hu_ty
* @since
* @param (*)
* @returns (*)
*/

// URLSearchParams 方法

// const urlSearchParams = new URLSearchParams(window.location.search)
// const params = Object.fromEntries(urlSearchParams.entries())

// split 方法
function getParams(url) {
  const res = {}
  if(url.includes('?')){
    const str = url.split('?')[1]
    const arr = str.split('&')
    arr.forEach(item => {
      const key = item.split('=')[0]
      const value = item.split('=')[1]
      res[key] = decodeURIComponent(value) // 解码
    });
  }
  return res
}

const urlParam = getParams('https://t7.baidu.com/?u=1819248061,230866778&fm=193&f=GIF')
console.log('<== urlParam ==>',urlParam);