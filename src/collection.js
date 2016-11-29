const curry = require('./function').curry;

/**
 * compact method
 * @param {Array} list
 * @return {Array}
 */
const compact = list => list.filter(x => x !== null && x !== undefined);

/**
 * filter method
 * @param {Function} fn
 * @param {rray} list
 * @return {Array}
 */
const filter = curry((fn, list) => list.filter(fn));

/**
 * isEmpty method
 * @param {Array} list
 * @return {Boolean}
 */
const isEmpty = list => !(list && list.length > 0);

/**
 * join method
 * @param {String} str
 * @param {Array} list
 * @return {String}
 */
const join = (str, list) => list.join(str);

/**
 * map method
 * @param {Function} fn
 * @param {Array} list
 * @return {Array}
 */
const map = curry((fn, list) => list.map(fn));

/**
 * sort method
 * @param {Function} fn
 * @param {Array} list
 * @return {Array}
 */
const sort = curry((fn, list) => [].concat(list).sort(fn));

/**
 * tail method
 * @param {Array} list
 * @return {Array}
 */
const tail = list => isEmpty(list) ? [] : list.slice(1, list.length);

module.exports = {
  compact,
  filter,
  isEmpty,
  join,
  map,
  sort,
  tail
}
