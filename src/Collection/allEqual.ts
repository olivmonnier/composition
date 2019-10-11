/**
 * @description
 * checks whether all elements of the array are equal.
 * @example
 * allEqual([1, 2, 3, 4, 5, 6]); // false
 * allEqual([1, 1, 1, 1]); // true
 */
export function allEqual(arr: Array<any>): Boolean {
  return arr.every(val => val === arr[0]);
}
