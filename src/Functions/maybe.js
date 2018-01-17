import isNot from './isNot'

/**
 * maybe method
 * 
 * @param {*} val 
 * @param {Function} fn 
 * @returns {null | *}
 */
export default maybe = (val, fn) => isNot(val) ? null : fn(val);