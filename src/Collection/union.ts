/**
 * @description
 * can be used to find the union of two arrays, resulting in an array that has elements that come from both arrays but that do not repeat.
 * @example
 * union([1, 2, 3], [4, 3, 2]); // [1,2,3,4]
 */
export function union(a: Array<any>, b: Array<any>): Array<any> {
  return Array.from(new Set([...a, ...b]));
}
