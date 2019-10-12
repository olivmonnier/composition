/**
 * @description
 * checks whether an object looks like a `Promise`.
 * @example
 * isPromiseLike({
 *   then: function() {
 *     return '';
 *   }
 * }); // true
 * isPromiseLike(null); // false
 * isPromiseLike({}); // false
 */
export function isPromiseLike(obj: any): Boolean {
  return (
    obj !== null &&
    (typeof obj === "object" || typeof obj === "function") &&
    typeof obj.then === "function"
  );
}
