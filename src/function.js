/**
 * compose method
 * @param {Function}
 * @return {Function}
 */
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);

/**
 * curry method
 * @param {Function} fn
 * @return {*}
 */
const curry = fn => (...args) => fn.bind(null, ...args);

/**
 * flip method
 * @param {Function} fn
 * @return {Function}
 */
const flip = curry((fn, ...args) => fn.apply(this, args.reverse()));

/**
 * pipe method
 * @param {Function}
 * @return {Function}
 */
const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);

module.exports = {
  compose,
  curry,
  flip,
  pipe
}
