/**
 * @description
 * can be used to check if a value is not null and that its typeof is “object”.
 * @example
 * isObjectLike({}); // true
 * isObjectLike([1, 2, 3]); // true
 * isObjectLike(x => x); // false
 * isObjectLike(null); // false
 */
export function isObjectLike(val: any): Boolean {
  return val !== null && typeof val === "object";
}
