/**
 * @description
 * can be used to check whether an argument is a boolean.
 * @example
 * isBoolean(null); // false
 * isBoolean(false); // true
 */
export function isBoolean(val: any): Boolean {
  return typeof val === "boolean";
}
