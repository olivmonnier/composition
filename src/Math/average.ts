/**
 * @description
 * returns the average of two or more numerical values.
 * @example
 * average(...[1, 2, 3]); // 2
 * average(1, 2, 3); // 2
 */
export function average(...nums: number[]): number {
  return nums.reduce((acc, val) => acc + val, 0) / nums.length;
}
