/**
 * filter method
 * 
 * @param {Array} list
 * @param {Function} fn
 * @returns {Array}
 */
export default filter = (list, fn) => from(list).reduce((x, y) => (fn(y) ? x.concat(y) : x), []);