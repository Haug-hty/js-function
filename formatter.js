/**
 * @description  格式化各类信息方法
 * @author hu_ty
 * @since
 * @param {*}
 * @returns {*}
 */

/**
 * @description 时间格式化
 * @author hu_ty
 * @since
 * @param (*)
 * @returns (*)
 */

/**
 * @description 获取时间戳
 * @param {string} type
 * @returns {Date}
 */
function getTime(type) {
  return new Date().getTime();
}

/**
 * @description 时间格式化工具，通过时间戳获取到时间的各个部分，随需拼接返回
 * @author hu_ty
 * @since
 * @param {string} now 时间戳数据
 * @returns (*) 返回需要的时间内容格式
 */
function formatDate(now) {
  // 当前时间戳对应日期
  const dates = new Date(parseInt(now));
  var year = dates.getFullYear(); // 取得4位数的年份
  var month = dates.getMonth() + 1; // 取得日期中的月份，其中0表示1月，11表示12月
  var date = dates.getDate(); // 返回日期月份中的天数（1到31）
  var hour = dates.getHours(); // 返回日期中的小时数（0到23）
  var minute = dates.getMinutes(); // 返回日期中的分钟数（0到59）
  var second = dates.getSeconds(); // 返回日期中的秒数（0到59）
  if (date < 10) {
    date = "0" + date;
  }
  if (hour < 10) {
    hour = "0" + hour;
  }
  return (
    year + "-" + month + "-" + date + "\t" + hour + ":" + minute + ":" + second
  );
}

/**
 * @description 首字母大小
 * @author hu_ty
 * @since
 * @param (*)
 * @returns (*)
 */
function titleCase(str) {
  return str.replace(/( |^)[a-z]/g, (L) => L.toUpperCase());
}

/**
 * @description 下划转驼峰
 * @author hu_ty
 * @since
 * @param (*)
 * @returns (*)
 */
function camelCase(str) {
  return str.replace(/-[a-z]/g, (str1) => str1.substr(-1).toUpperCase());
}
