/**
 * @description
 * can be used to get an array with n elements removed from the beginning.
 * @example
 * take([1, 2, 3], 5); // [1, 2, 3]
 * take([1, 2, 3], 0); // []
 */
export function take(arr: Array<any>, n: number = 1): Array<any> {
  return arr.slice(0, n);
}
