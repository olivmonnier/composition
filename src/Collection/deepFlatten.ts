/**
 * @description
 * flattens an array recursively.
 * @example
 * deepFlatten([1, [2], [[3], 4], 5]); // [1,2,3,4,5]
 */
export function deepFlatten(arr: Array<any>): Array<any> {
  return [].concat(...arr.map(v => (Array.isArray(v) ? deepFlatten(v) : v)));
}
