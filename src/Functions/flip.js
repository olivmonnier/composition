/**
 * flip method
 * 
 * @param {Function} fn
 * @returns {Function}
 */
export default flip = fn => (...args) => fn.apply(null, args.reverse());