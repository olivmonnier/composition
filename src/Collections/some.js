/**
 * some method
 * 
 * @param {Array} list
 * @param {Function} fn
 * @returns {Boolean}
 */
export default some = (list, fn) => from(list).reduce((x, y) => x || fn(y), false);