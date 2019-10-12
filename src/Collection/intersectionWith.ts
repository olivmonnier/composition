/**
 * @description
 * can be used to return a list of elements that exist in both arrays by using a comparator function.
 * @example
 * intersectionWith([1, 1.2, 1.5, 3, 0], [1.9, 3, 0, 3.9], (a, b) => Math.round(a) === Math.round(b)); // [1.5, 3, 0]
 */
export function intersectionWith(
  a: Array<any>,
  b: Array<any>,
  comp: (a: Array<any>, b: Array<any>) => boolean
): Array<any> {
  return a.filter(x => b.findIndex(y => comp(x, y)) !== -1);
}
