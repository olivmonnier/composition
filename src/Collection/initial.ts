/**
 * @description
 * returns all elements of an array except the last one.
 * @example
 * initial([1, 2, 3]); // [1,2]
 */
export function initial(arr: Array<any>): Array<any> {
  return arr.slice(0, -1);
}