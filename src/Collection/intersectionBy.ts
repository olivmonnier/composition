/**
 * @description
 * can be used to return a list of elements that exist in both arrays, after a particular function has been executed to each element of both arrays.
 * @example
 * intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor); // [2.1]
 */
export function intersectionBy(
  a: Array<any>,
  b: Array<any>,
  fn: (value: any, index?: number, array?: Array<any>) => any
) {
  const s = new Set(b.map(fn));
  return a.filter(x => s.has(fn(x)));
}
