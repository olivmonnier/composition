/**
 * @description
 * can be used to check whether a value is null or undefined.
 * @example
 * isNil(null); // true
 * isNil(undefined); // true
 */
export function isNil(val: any): Boolean {
  return val === undefined || val === null;
}
