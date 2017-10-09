/**
 * Collections module
 * @module collections
 */

/**
 * compact method
 * 
 * @param {Array} list
 * @return {Array}
 */
export const compact = list => from(list).filter(x => x !== null && x !== undefined);

/**
 * each method
 * 
 * @param {Function} fn
 * @param {Array} list
 * @return {*}
 */
export const each = (list, fn) => from(list).each(fn);

/**
 * every method
 * 
 * @param {Function} fn
 * @param {Array} list
 * @return {*}
 */
export const every = (list, fn) => from(list).every(fn);

/**
 * filter method
 * 
 * @param {Function} fn
 * @param {Array} list
 * @return {Array}
 */
export const filter = (list, fn) => from(list).filter(fn);

/**
 * find method
 * 
 * @param {Function} fn
 * @param {Array} list
 * @return {*}
 */
export const find = (list, fn) => from(list).find(fn);

/**
 * findIndex method
 * 
 * @param {Function} fn
 * @param {Array} list
 * @return {Integer}
 */
export const findIndex = (list, fn) => from(list).findIndex(fn);

/**
 * from method
 * 
 * @param {Array} list
 * @return {Array}
 */
export const from = list => Array.from(list);

/**
 * head method
 * 
 * @param {Array} list
 * @return {*}
 */
export const head = list => list[0];

/**
 * isArray method
 * 
 * @param {Array} list
 * @return {Boolean}
 */
export const isArray = list => Array.isArray(list);

/**
 * isEmpty method
 * 
 * @param {Array} list
 * @return {Boolean}
 */
export const isEmpty = list => !(list && list.length > 0);

/**
 * join method
 * 
 * @param {Array} list
 * @param {String} str
 * @return {String}
 */
export const join = (list, str) => from(list).join(str);

/**
 * last method
 * 
 * @param {Array} list
 * @return {*}
 */
export const last = list => list[list.length - 1];

/**
 * map method
 * 
 * @param {Function} fn
 * @param {Array} list
 * @return {Array}
 */
export const map = (list, fn) => from(list).map(fn);

/**
 * pluck method
 * 
 * @param {Array} list
 * @return {Array}
 */
export const pluck = (list, prop) => from(list).map(o => o.prop);

/**
 * random method
 * 
 * @param {Array} list
 * @return {*}
 */
export const random = list => list[Math.floor(Math.random() * list.length)];

/**
 * slice method
 * 
 * @param {Array} list
 * @return {*}
 */
export const slice = (list, ...args) => from(list).slice(...args);

/**
 * some method
 * 
 * @param {Function} fn
 * @param {Array} list
 * @return {Boolean}
 */
export const some = (list, fn) => from(list).some(fn);

/**
 * sort method
 * 
 * @param {Function} fn
 * @param {Array} list
 * @return {Array}
 */
export const sort = (list, fn) => from(list).sort(fn);

/**
 * tail method
 * 
 * @param {Array} list
 * @return {Array}
 */
export const tail = list => isEmpty(list) ? [] : from(list).slice(1, list.length);

export const wrap = something => [something];