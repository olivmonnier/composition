/**
 * find method
 * 
 * @param {Array} list
 * @param {Function} fn
 * @returns {*}
 */
export default find = (list, fn) => Array.from(list).find(fn);