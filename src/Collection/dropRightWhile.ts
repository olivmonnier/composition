/**
 * @description
 * removes elements from the right side of an array until the passed function returns true.
 * @example
 * dropRightWhile([1, 2, 3, 4], n => n < 3); // [1, 2]
 */
export function dropRightWhile(arr: Array<any>, func: Function): Array<any> {
  while (arr.length > 0 && !func(arr[arr.length - 1])) arr = arr.slice(0, -1);
  return arr;
}
