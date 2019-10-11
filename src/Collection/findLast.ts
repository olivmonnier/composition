/**
 * @description
 * returns the last element for which a given function returns a truthy value.
 * @example
 * findLast([1, 2, 3, 4], n => n % 2 === 1); // 3
 */
export function findLast(arr: Array<any>, fn: (value: any) => any): any {
  return arr.filter(fn).pop();
}
