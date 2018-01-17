/**
 * unary method
 * 
 * @param {Function} fn
 * @returns {*}
 */
export default unary = fn => (...args) => fn(args[0])