/**
 * not method
 * 
 * @param {Function} fn
 * @returns {Boolean}
 */
export default not = fn => (...args) => !fn(...args);