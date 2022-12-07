/**
 * @description
 * returns a new array with n elements removed from the left.
 * @example
 * drop([1, 2, 3]); // [2,3]
 * drop([1, 2, 3], 2); // [3]
 * drop([1, 2, 3], 42); // []
 */
export function drop(arr: Array<any>, n: number = 1): Array<any> {
  return arr.slice(n);
}
