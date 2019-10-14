/**
 * @description
 * can be used to get an array with all the elements of an array except for the first one. If the array has only one element, then that an array with that element will be returned instead.
 * @example
 * tail([1, 2, 3]); // [2,3]
 * tail([1]); // [1]
 */
export function tail(arr: Array<any>): Array<any> {
  return arr.length > 1 ? arr.slice(1) : arr;
}
