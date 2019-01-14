/**
 * findIndex method
 * 
 * @param {Array} list
 * @param {Function} fn
 * @returns {Integer}
 */
export default findIndex = (list, fn) => Array.from(list).findIndex(fn);