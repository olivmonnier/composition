/**
 * sort method
 * 
 * @param {Array} list
 * @param {Function} fn
 * @returns {Array}
 */
export default sort = (list, fn) => from(list).sort(fn);