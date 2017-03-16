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
 * each method
 * @param {Function} fn
 * @param {Array} list
 * @return {*}
 */
export const each = curry((fn, list) => list.each(fn));

/**
 * every method
 * @param {Function} fn
 * @param {Array} list
 * @return {*}
 */
export const every = curry((fn, list) => list.every(fn));

/**
 * filter method
 * @param {Function} fn
 * @param {Array} list
 * @return {Array}
 */
export const filter = curry((fn, list) => list.filter(fn));

/**
 * find method
 * @param {Function} fn
 * @param {Array} list
 * @return {*}
 */
export const find = curry((fn, list) => list.find(fn));

/**
 * findIndex method
 * @param {Function} fn
 * @param {Array} list
 * @return {Integer}
 */
export const findIndex = curry((fn, list) => list.findIndex(fn));

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
 * slice method
 * @param {Array} list
 * @return {*}
 */
export const slice = list => [].slice.call(list);

/**
 * some method
 * @param {Function} fn
 * @param {Array} list
 * @return {Boolean}
 */
export const some = curry((fn, list) => list.some(fn));

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
