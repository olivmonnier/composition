/**
 * @description
 * can be used to check if a provided argument is iterable like an array.
 * @example
 * isArrayLike(document.querySelectorAll('.className')); // true
 * isArrayLike('abc'); // true
 * isArrayLike(null); // false
 */
export function isArrayLike(obj: any): Boolean {
  return obj != null && typeof obj[Symbol.iterator] === "function";
}
