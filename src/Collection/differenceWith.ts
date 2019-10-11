/**
 * @description
 * removes the values for which the comparator function returns false.
 * @example
 * differenceWith([1, 1.2, 1.5, 3, 0], [1.9, 3, 0], (a, b) => Math.round(a) === Math.round(b)); // [1, 1.2]
 */
export function differenceWith(
  arr: Array<any>,
  val: Array<any>,
  comp: (...values: any) => boolean
) {
  return arr.filter(a => val.findIndex(b => comp(a, b)) === -1);
}
