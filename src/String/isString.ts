/**
 * @description
 * can be used to check whether an argument is a string.
 * @example
 * isString('10'); // true
 */
export function isString(val: any): Boolean {
  return typeof val === "string";
}
