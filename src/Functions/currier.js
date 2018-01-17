/**
 * currier method
 * 
 * @param {Function} fn 
 * @param {*} args1 
 * @returns {*}
 */
export default currier = (fn, ...args1) => (...args2) => fn(...args1, ...args2);