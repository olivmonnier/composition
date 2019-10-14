/**
 * @description
 * can be used to order the elements of an array randomly using the Fisher-Yates algorithm.
 * @example
 * const foo = [1, 2, 3];
 * shuffle(foo); // [2, 3, 1]
 */
export function shuffle([...arr]: Array<any>): Array<any> {
  let m = arr.length;
  while (m) {
    const i = Math.floor(Math.random() * m--);
    [arr[m], arr[i]] = [arr[i], arr[m]];
  }
  return arr;
}
