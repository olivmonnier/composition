import { slice } from './collections';

/**
 * Functions module
 * @module functions
 */

/**
 * compose method
 * 
 * @param {Array} fns
 * @returns {Function}
 */
export const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);

/**
 * curry method
 * 
 * @param {Function} fn
 * @returns {*}
 */
export const curry = fn => (...args) => fn.apply(null, args);

/**
 * currier method
 * 
 * @param {Function} fn 
 * @param {*} args1 
 * @returns {*}
 */
export const currier = (fn, ...args1) => (...args2) => fn(...args1, ...args2);

/**
 * def method
 * 
 * @param {*} x
 * @returns {Boolean} 
 */

export const def = x => typeof x !== 'undefined';

/**
 * flip method
 * 
 * @param {Function} fn
 * @returns {Function}
 */
export const flip = fn => (...args) => fn.apply(null, args.reverse());

/**
 * invert method
 * @param {Function} fn
 * @returns {*}
 */
export const invert = fn => (...args) => -fn(...args);

/**
 * isEven method
 * 
 * @param {*} val 
 * @returns {Boolean}
 */
export const isEven = val => val % 2 === 0;

/**
 * isNot method
 * 
 * @param {*} val
 * @returns {Boolean} 
 */
export const isNot = val => val == null || val == undefined;

/**
 * maybe method
 * 
 * @param {*} val 
 * @param {Function} fn 
 * @returns {null | *}
 */
export const maybe = (val, fn) => isNot(val) ? null : fn(val);

/**
 * memoize method
 * 
 * @param {Function} fn
 * @returns {*}
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
 * 
 * @param {Function} fn
 * @returns {Boolean}
 */
export const not = fn => (...args) => !fn(...args);

/**
 * once method
 * 
 * @param {Function} fn
 * @returns {*} 
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
 * 
 * @param {Function} f
 * @param {Function} g
 * @returns {*}
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
 * @param {Array} fns
 * @returns {Function}
 */
export const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);

/**
 * unary method
 * 
 * @param {Function} fn
 * @returns {*}
 */
export const unary = fn => (...args) => fn(args[0])

/**
 * undef method
 * 
 * @param {*} x
 * @returns {Boolean}
 */
export const undef = x => !def(x)
