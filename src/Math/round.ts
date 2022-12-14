/**
 * @description
 * can be used to round a number to a specified number of digits.
 * @example
 * round(1.005, 2); // 1.01
 */
export function round(n: number, decimals: number = 0) {
  return Number(`${Math.round(Number(`${n}e${decimals}`))}e-${decimals}`);
}
