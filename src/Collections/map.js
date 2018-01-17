/**
 * map method
 * 
 * @param {Array} list
 * @param {Function} fn
 * @returns {Array}
 */
export default map = (list, fn) => from(list).map(fn);