/**
 * findIndex method
 * 
 * @param {Array} list
 * @param {Function} fn
 * @returns {Integer}
 */
export default findIndex = (list, fn) => from(list).reduce((x, y, i) => (x == -1 && fn(y) ? i : x), -1);