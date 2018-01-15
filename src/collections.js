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
 * copy method
 * 
 * @param {Array} list
 * @return {Array}
 */
export const copy = list => [...list];

/**
 * each method
 * 
 * @param {Array} list
 * @param {Function} fn
 * @return {*}
 */
export const each = (list, fn) => from(list).forEach(fn);

/**
 * every method
 * 
 * @param {Array} list
 * @param {Function} fn
 * @return {*}
 */
export const every = (list, fn) => from(list).reduce((x, y) => x && fn(y), true);

/**
 * filter method
 * 
 * @param {Array} list
 * @param {Function} fn
 * @return {Array}
 */
export const filter = (list, fn) => from(list).reduce((x, y) => (fn(y) ? x.concat(y) : x), []);

/**
 * find method
 * 
 * @param {Array} list
 * @param {Function} fn
 * @return {*}
 */
export const find = (list, fn) => from(list).reduce((x, y) => (x === undefined && fn(y) ? y : x), undefined);

/**
 * findIndex method
 * 
 * @param {Array} list
 * @param {Function} fn
 * @return {Integer}
 */
export const findIndex = (list, fn) => from(list).reduce((x, y, i) => (x == -1 && fn(y) ? i : x), -1);

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
 * @param {*} x
 * @return {*}
 */
export const head = ([x]) => x;

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
 * @param {Array} list
 * @param {Function} fn
 * @return {Array}
 */
export const map = (list, fn) => from(list).map(fn);

/**
 * none method
 * @param {Array} list
 * @param {Function} fn
 */
export const none = (list, fn) => every(list, (v) => !fn(v));

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
 * @param {Array} list
 * @param {Function} fn
 * @return {Boolean}
 */
export const some = (list, fn) => from(list).reduce((x, y) => x || fn(y), false);

/**
 * sort method
 * 
 * @param {Array} list
 * @param {Function} fn
 * @return {Array}
 */
export const sort = (list, fn) => from(list).sort(fn);

/**
 * tail method
 * 
 * @param {Array} list
 * @return {Array}
 */
export const tail = ([x, ...xs]) => xs;

export const wrap = something => [something];