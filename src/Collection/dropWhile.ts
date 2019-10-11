/**
 * @description
 * removes elements from an array until the passed function returns true.
 * @example
 * dropWhile([1, 2, 3, 4], n => n >= 3); // [3,4]
 */
export function dropWhile(arr: Array<any>, func: Function): Array<any> {
  while (arr.length > 0 && !func(arr[0])) arr = arr.slice(1);
  return arr;
}
