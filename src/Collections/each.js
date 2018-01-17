/**
 * each method
 * 
 * @param {Array} list
 * @param {Function} fn
 * @returns {*}
 */
export default each = (list, fn) => from(list).forEach(fn);