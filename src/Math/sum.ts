/**
 * @description
 * can be used to find the sum of two or more numbers or arrays.
 * @example
 * sum(1, 2, 3, 4); // 10
 * sum(...[1, 2, 3, 4]); // 10
 */
export function sum(...arr: Array<number>): number {
  return [...arr].reduce((acc, val) => acc + val, 0);
}
