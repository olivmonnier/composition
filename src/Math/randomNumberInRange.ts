/**
 * @description
 * can be used to return a random number in a specified range.
 * @example
 * randomNumberInRange(2, 10); // 6.0211363285087005
 */
export function randomNumberInRange(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}
