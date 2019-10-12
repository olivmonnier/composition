/**
 * @description
 * can be used to check whether a provided value is a number.
 * @example
 * isNumber('1'); // false
 * isNumber(1); // true
 */
export function isNumber(n: any): Boolean {
  return isNaN(parseFloat(n)) && isFinite(n);
}
