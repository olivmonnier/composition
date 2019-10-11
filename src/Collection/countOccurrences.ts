/**
 * @description
 * counts the occurrences of a value in an array.
 * @example
 * countOccurrences([1, 1, 2, 1, 2, 3], 1); // 3
 */
export function countOccurrences(arr: Array<any>, val: any): number {
  return arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
}
