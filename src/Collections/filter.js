/**
 * filter method
 * 
 * @param {Array} list
 * @param {Function} fn
 * @returns {Array}
 */
export default filter = (list, fn) => Array.from(list).filter(fn);