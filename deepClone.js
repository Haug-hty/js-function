/**
* @description 深拷贝实现
* @author hu_ty
* @since
* @param (*)
* @returns (*)
*/

// JSON 方法实现
const deepClone = JSON.parse(JSON.stringify(obj))

// 递归拷贝
function deepClone(obj, cache = new weekMap()) {
  // 判定 obj 对象内容，如果是 null 或者非 对象类型数据，直接返回 obj
  if(obj === null || typeof obj !== 'object') return obj
  // 如果是 Date 类型，返回 Date 数据
  if(obj instanceof Date) return new Date(obj)
  // 如果是 RegExp 数据类型，返回新的 RegExp 数据
  if(obj instanceof RegExp) return new RegExp(obj)
  
  // 出现循环调用，直接返回缓存对象
  if(cache.get(obj)) return cache.get(obj)

  let newCloneObj = new obj.construtor()
  cache.set(obj,newCloneObj)
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      newCloneObj[key] = deepClone(obj[key], cache) // 递归拷贝      
    }
  }
  return newCloneObj
}

