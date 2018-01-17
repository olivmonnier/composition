/**
 * invert method
 * @param {Function} fn
 * @returns {*}
 */
export default invert = fn => (...args) => -fn(...args);