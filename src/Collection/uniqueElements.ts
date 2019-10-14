/**
 * @description
 * uses ES6 Set and the …rest operator to get every element only once.
 * @example
 * uniqueElements([1, 2, 2, 3, 4, 4, 5]); // [1, 2, 3, 4, 5]
 */
export function uniqueElements(arr: Array<any>): Array<any> {
  return [...new Set(arr)];
}
