/**
 * Collections module
 * @module collections
 */

/**
 * compact method
 * 
 * @param {Array} list
 * @returns {Array}
 */
export const compact = list => from(list).filter(x => x !== null && x !== undefined);

/**
 * copy method
 * 
 * @param {Array} list
 * @returns {Array}
 */
export const copy = list => [...list];

/**
 * each method
 * 
 * @param {Array} list
 * @param {Function} fn
 * @returns {*}
 */
export const each = (list, fn) => from(list).forEach(fn);

/**
 * every method
 * 
 * @param {Array} list
 * @param {Function} fn
 * @returns {*}
 */
export const every = (list, fn) => from(list).reduce((x, y) => x && fn(y), true);

/**
 * filter method
 * 
 * @param {Array} list
 * @param {Function} fn
 * @returns {Array}
 */
export const filter = (list, fn) => from(list).reduce((x, y) => (fn(y) ? x.concat(y) : x), []);

/**
 * find method
 * 
 * @param {Array} list
 * @param {Function} fn
 * @returns {*}
 */
export const find = (list, fn) => from(list).reduce((x, y) => (x === undefined && fn(y) ? y : x), undefined);

/**
 * findIndex method
 * 
 * @param {Array} list
 * @param {Function} fn
 * @returns {Integer}
 */
export const findIndex = (list, fn) => from(list).reduce((x, y, i) => (x == -1 && fn(y) ? i : x), -1);

/**
 * from method
 * 
 * @param {Array} list
 * @returns {Array}
 */
export const from = list => Array.from(list);

/**
 * head method
 * 
 * @param {*} x
 * @returns {*}
 */
export const head = ([x]) => x;

/**
 * isArray method
 * 
 * @param {Array} list
 * @returns {Boolean}
 */
export const isArray = list => Array.isArray(list);

/**
 * isEmpty method
 * 
 * @param {Array} list
 * @returns {Boolean}
 */
export const isEmpty = list => !(list && list.length > 0);

/**
 * join method
 * 
 * @param {Array} list
 * @param {String} str
 * @returns {String}
 */
export const join = (list, str) => from(list).join(str);

/**
 * last method
 * 
 * @param {Array} list
 * @returns {*}
 */
export const last = list => list[list.length - 1];

/**
 * map method
 * 
 * @param {Array} list
 * @param {Function} fn
 * @returns {Array}
 */
export const map = (list, fn) => from(list).map(fn);

/**
 * none method
 * @param {Array} list
 * @param {Function} fn
 * @returns {*}
 */
export const none = (list, fn) => every(list, (v) => !fn(v));

/**
 * pluck method
 * 
 * @param {Array} list
 * @param {String} prop
 * @returns {Array}
 */
export const pluck = (list, prop) => from(list).map(o => o[prop]);

/**
 * random method
 * 
 * @param {Array} list
 * @returns {*}
 */
export const random = list => list[Math.floor(Math.random() * list.length)];

/**
 * removeIndex method
 * 
 * @param {Array} list
 * @param {Integer} oldIndex
 * @returns {Array}
 */
export const removeIndex = (list, oldIndex) => [].concat(
  list.slice(0, oldIndex),
  list.slice(oldIndex + 1, list.length)
)

/**
 * slice method
 * 
 * @param {Array} list
 * @returns {*}
 */
export const slice = (list, ...args) => from(list).slice(...args);

/**
 * some method
 * 
 * @param {Array} list
 * @param {Function} fn
 * @returns {Boolean}
 */
export const some = (list, fn) => from(list).reduce((x, y) => x || fn(y), false);

/**
 * sort method
 * 
 * @param {Array} list
 * @param {Function} fn
 * @returns {Array}
 */
export const sort = (list, fn) => from(list).sort(fn);

/**
 * tail method
 * 
 * @param {Array} list
 * @returns {Array}
 */
export const tail = ([x, ...xs]) => xs;

/**
 * toFirst method
 * 
 * @param {Array} list
 * @param {Integer} oldIndex
 * @returns {Array}
 */
export const toFirst = (list, oldIndex) => [].concat(
  list[oldIndex],
  removeIndex(list, oldIndex)
)

/**
 * toLast method
 * 
 * @param {Array} list
 * @param {Integer} oldIndex
 * @returns {Array}
 */
export const toLast = (list, oldIndex) => [].concat(
  removeIndex(list, oldIndex),
  list[oldIndex]
)

/**
 * wrap method
 * @param {*} something 
 * @returns {Array}
 */
export const wrap = something => [something];