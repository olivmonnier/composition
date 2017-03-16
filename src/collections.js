import { curry } from './functions';
/**
 * Collections module
 * @module collections
 */

/**
 * compact method
 * @alias module:collection.compact
 * @param {Array} list
 * @return {Array}
 */
export const compact = list => list.filter(x => x !== null && x !== undefined);

/**
 * filter method
 * @param {Function} fn
 * @param {Array} list
 * @return {Array}
 */
export const filter = curry((fn, list) => list.filter(fn));

/**
 * head method
 * @param {Array} list
 * @return {*}
 */
export const head = list => list[0];

/**
 * isEmpty method
 * @param {Array} list
 * @return {Boolean}
 */
export const isEmpty = list => !(list && list.length > 0);

/**
 * join method
 * @param {String} str
 * @param {Array} list
 * @return {String}
 */
export const join = (str, list) => list.join(str);

/**
 * last method
 * @param {Array} list
 * @return {*}
 */
export const last = list => list[list.length - 1];

/**
 * map method
 * @param {Function} fn
 * @param {Array} list
 * @return {Array}
 */
export const map = curry((fn, list) => list.map(fn));

/**
 * pluck method
 * @param {Array} list
 * @return {Array}
 */
export const pluck = (list, prop) => list.map(o => o.prop);

/**
 * sort method
 * @param {Function} fn
 * @param {Array} list
 * @return {Array}
 */
export const sort = curry((fn, list) => [].concat(list).sort(fn));

/**
 * tail method
 * @param {Array} list
 * @return {Array}
 */
export const tail = list => isEmpty(list) ? [] : list.slice(1, list.length);
