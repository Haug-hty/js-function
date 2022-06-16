/**
 * @description 数组相关方法 排序、去重
 * @author hu_ty
 */

/**
 * @description 数组 sort 排序
 */

const arr = [3, 2, 1, 4, 10, 5];
arr.sort((a, b) => a - b);
console.log("<== sort ==>", arr); // <== sort ==> [ 1, 2, 3, 4, 5, 10 ]

/**
 * @description 冒泡排序 bubble-sort
 */
function bubbleSort(arr) {
  let len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    // 从都一个元素开始，比较相邻的两个元素，前者大就交换位置
    for (let j = 0; j < len - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let num = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = num;
      }
    }
    // 每一次遍历结束找到一个最大值，放到数组最后
  }
  return arr;
}

// console.log('bubbleSort',bubbleSort([3,2,1,4,10,5])); // bubbleSort [ 1, 2, 3, 4, 5, 10 ]

/**
 * @description set 去重
 */
const newArr = [...new Set(arr)];
const newArr1 = Array.from(new Set(arr));

/**
 * @description indexOf 去重
 */
function resetArr(arr) {
  let res = [];
  arr.forEach((item) => {
    if (res.indexOf(item) === -1) {
      res.push(item);
    }
  });
  return res;
}

const resetarr = [1, 1, 1, 2, 2, 2, 3, 3, 4];
console.log("<== indexOf ==>", resetArr(resetarr)); // <== indexOf ==> [ 1, 2, 3, 4 ]
