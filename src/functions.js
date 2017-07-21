/**
 * Functions module
 * @module functions
 */

/**
 * compose method
 * 
 * @param {Function}
 * @return {Function}
 */
export const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);

/**
 * curry method
 * 
 * @param {Function} fn
 * @return {*}
 */
export const curry = fn => (...args) => fn.bind(null, ...args);

/**
 * flip method
 * 
 * @param {Function} fn
 * @return {Function}
 */
export const flip = curry((fn, ...args) => fn.apply(this, args.reverse()));

/**
 * isEven method
 * 
 * @param {*} val 
 * @return {Boolean}
 */
export const isEven = val => val % 2 === 0;

/**
 * isNot method
 * 
 * @param {*} val
 * @return {Boolean} 
 */
export const isNot = val => val == null || val == undefined;

/**
 * maybe method
 * 
 * @param {*} val 
 * @param {Function} fn 
 */
export const maybe = (val, fn) => isNot(val) ? null : fn(val);

/**
 * pipe method
 * 
 * @param {Function}
 * @return {Function}
 */
export const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);
