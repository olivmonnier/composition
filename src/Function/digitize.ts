/**
 * @description
 * gets a number as input and returns an array of its digits.
 * @example
 * digitize(431); // [4, 3, 1]
 */
export function digitize(n: number): Array<number> {
  return [...`${n}`].map(i => parseInt(i));
}
