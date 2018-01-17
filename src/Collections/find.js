/**
 * find method
 * 
 * @param {Array} list
 * @param {Function} fn
 * @returns {*}
 */
export default find = (list, fn) => from(list).reduce((x, y) => (x === undefined && fn(y) ? y : x), undefined);