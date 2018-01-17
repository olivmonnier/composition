/**
 * none method
 * @param {Array} list
 * @param {Function} fn
 * @returns {*}
 */
export default none = (list, fn) => every(list, (v) => !fn(v));