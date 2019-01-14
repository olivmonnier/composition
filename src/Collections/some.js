/**
 * some method
 * 
 * @param {Array} list
 * @param {Function} fn
 * @returns {Boolean}
 */
export default some = (list, fn) => Array.from(list).some(fn);