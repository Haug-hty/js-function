/** 
 * @description  validate 验证
 * @author hu_ty
 * @since 
 * @param (*) 
 * 
 */

/**
 * @description 判定传入路径是否是合法路径
 * @param {string} path
 * @returns {Boolean}
 */
 function isExternal(path) {
    return /^(https?:|mailto:|tel:)/.test(path)
}


/**
 * @description 校验内容是否合法，合法内容数组 valid_map
 * @param {string} str
 * @returns {Boolean}
 */
 function validUsername(str) {
    const valid_map = ['admin', 'editor']
    return valid_map.indexOf(str.trim()) >= 0
}

/**
 * @param {string} url
 * @returns {Boolean}
 */
 function validURL(url) {
    const reg = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
    return reg.test(url)
}

/**
 * @description 字符串全小写内容校验(全字母)
 * @param {string} str
 * @returns {Boolean}
 */
 function validLowerCase(str) {
    const reg = /^[a-z]+$/
    return reg.test(str)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
 function validUpperCase(str) {
    const reg = /^[A-Z]+$/
    return reg.test(str)
}

/**
 * @description 字符串全字母校验
 * @param {string} str
 * @returns {Boolean}
 */
 function validAlphabets(str) {
    const reg = /^[A-Za-z]+$/
    return reg.test(str)
}

/**
 * @description 邮箱格式校验
 * @param {string} email
 * @returns {Boolean}
 */
 function validEmail(email) {
    const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return reg.test(email)
}

/**
 * @description 字符串校验
 * @param {string} str
 * @returns {Boolean}
 */
 function isString(str) {
    if (typeof str === 'string' || str instanceof String) {
        return true
    }
    return false
}

/**
 * @description 数组校验
 * @param {Array} arg
 * @returns {Boolean}
 */
 function isArray(arg) {
    if (typeof Array.isArray === 'undefined') {
        return Object.prototype.toString.call(arg) === '[object Array]'
    }
    return Array.isArray(arg)
}