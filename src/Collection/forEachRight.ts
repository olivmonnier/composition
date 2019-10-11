/**
 * @description
 * executes a function for each element of an array starting from the array’s last element.
 * @example
 * forEachRight([1, 2, 3, 4], val => console.log(val)); // '4', '3', '2', '1'
 */
export function forEachRight(
  arr: Array<any>,
  callback: (value: any, index: number, array: Array<any>) => void
): void {
  return arr
    .slice(0)
    .reverse()
    .forEach(callback);
}
