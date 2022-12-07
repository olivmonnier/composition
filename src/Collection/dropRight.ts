/**
 * @description
 * returns a new array with n elements removed from the right.
 * @example
 * dropRight([1, 2, 3]); // [1,2]
 * dropRight([1, 2, 3], 2); // [1]
 * dropRight([1, 2, 3], 42); // []
 */
export function dropRight(arr: Array<any>, n: number = 1): Array<any> {
  return arr.slice(0, -n);
}
