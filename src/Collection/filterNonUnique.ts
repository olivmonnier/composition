/**
 * @description
 * removes duplicate values in an array.
 * @example
 * filterNonUnique([1, 2, 2, 3, 4, 4, 5]); // [1, 3, 5]
 */
export function filterNonUnique(arr: Array<any>): Array<any> {
  return arr.filter(i => arr.indexOf(i) === arr.lastIndexOf(i));
}
