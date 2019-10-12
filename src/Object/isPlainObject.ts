/**
 * @description
 * checks whether a value is an object created by the Object constructor.
 * @example
 * isPlainObject({ a: 1 }); // true
 * isPlainObject(new Map()); // false
 */
export function isPlainObject(val: any): Boolean {
  return !!val && typeof val === "object" && val.constructor === Object;
}
