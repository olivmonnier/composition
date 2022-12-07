/**
 * @description
 * can be used to generate a random integer in a specified range.
 * @example
 * randomIntegerInRange(0, 5); // 3
 */
export function randomIntegerInRange(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
