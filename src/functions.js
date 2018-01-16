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
export const flip = fn => (...args) => fn.apply(null, args.reverse());

/**
 * invert method
 * @param {Function} fn
 */
export const invert = fn => (...args) => -fn(...args);

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
 * memoize method
 * @param {Function} fn
 */
export const memoize = fn => {
  let cache = {};
  return (...args) => {
    let strX = JSON.stringify(args);
    return strX in cache ? cache[strX] : (cache[strX] = fn(...args));
  }
}

/**
 * not method
 * @param {Function} fn
 */
export const not = fn => (...args) => !fn(...args);

/**
 * once method
 */
export const once = fn => {
  let done = false;
  let result;

  return (...args) => {
    if (!done) {
      done = true;
      result = fn(...args)
    }

    return result;
  }
}

/**
 * onceAndAfter method
 */
export const onceAndAfter = (f, g) => {
  let toCall = f;

  return (...args) => {
    let result = toCall(...args);
    toCall = g;
    return result;
  }
}

/**
 * pipe method
 * 
 * @param {Function}
 * @return {Function}
 */
export const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);

/**
 * unary method
 * @param {Function}
 */
export const unary = fn => (...args) => fn(args[0])

/**
 * undef method
 * 
 * @param {*} x
 * @return {Boolean}
 */
export const undef = x => !def(x)
