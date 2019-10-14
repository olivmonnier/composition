/**
 * @description
 * can be used to get an array with n elements removed from the end.
 * @example
 * takeRight([1, 2, 3], 2); // [ 2, 3 ]
 * takeRight([1, 2, 3]); // [3]
 */
export function takeRight(arr: Array<any>, n: number = 1): Array<any> {
  return arr.slice(arr.length - n, arr.length);
}
