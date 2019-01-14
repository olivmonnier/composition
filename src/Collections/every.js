/**
 * every method
 * 
 * @param {Array} list
 * @param {Function} fn
 * @returns {*}
 */
export default every = (list, fn) => Array.from(list).reduce((x, y) => x && fn(y), true);