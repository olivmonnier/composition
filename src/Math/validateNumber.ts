/**
 * @description
 * can be used to check whether a value is a number.
 * @example
 * validateNumber('10'); // true
 */
export function validateNumber(n: any): Boolean {
  return !isNaN(parseFloat(n)) && isFinite(n) && Number(n) == n;
}
