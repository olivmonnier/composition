/**
 * @description
 * can be used to return an array of elements that appear in two arrays.
 * @example
 * similarity([1, 2, 3], [1, 2, 4]); // [1, 2]
 */
export function similarity(arr: Array<any>, values: Array<any>): Array<any> {
  return arr.filter(v => values.includes(v));
}
