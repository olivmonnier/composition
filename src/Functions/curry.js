/**
 * curry method
 * 
 * @param {Function} fn
 * @returns {*}
 */
export default curry = fn => (...args) => fn.apply(null, args);