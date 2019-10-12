/**
 * @description
 * can be used to check whether a provided value is an object. It uses the Object constructor to create an object wrapper for the given value.
 * @example
 * isObject([1, 2, 3, 4]); // true
 * isObject([]); // true
 * isObject(['Hello!']); // true
 * isObject({ a: 1 }); // true
 * isObject({}); // true
 * isObject(true); // false
 */
export function isObject(obj: any): Boolean {
  return obj === Object(obj);
}
