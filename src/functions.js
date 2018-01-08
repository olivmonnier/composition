import { slice } from './collections';

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
 * currier method
 * 
 * @param {Function} fn 
 * @param {*} args1 
 * @return {*}
 */
export const currier = (fn, ...args1) => (...args2) => fn(...args1, ...args2);

/**
 * def method
 * 
 * @param {*} x
 * @return {Boolean} 
 */

export const def = x => typeof x !== 'undefined';

/**
 * flip method
 * 
 * @param {Function} fn
 * @return {Function}
 */
export const flip = (fn, ...args) => fn.bind(null, args.reverse());

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
 * once method
 */
export const once = fn => {
  let done = false;

  return (...args) => {
    if (!done) {
      done = true;
      fn(...args)
    }
  }
}

/**
 * onceAndAfter method
 */
export const onceAndAfter = (f, g = () => {}) => {
  let done = false;

  return (...args) => {
    if (!done) {
      done = true;
      f(...args)
    } else {
      g(...args)
    }
  }
}

/**
 * pipe method
 * 
 * @param {Function}
 * @return {Function}
 */
export const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);

export const unary = fn => fn.length === 1 ? fn : (something) => fn.call(this, something);

/**
 * undef method
 * 
 * @param {*} x
 * @return {Boolean}
 */
export const undef = x => !def(x)
