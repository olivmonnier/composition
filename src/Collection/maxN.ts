/**
 * @description
 * returns the n largest elements from a list. If n is greater than or equal to the list’s length, then it will return the original list (sorted in descending order).
 * @example
 * maxN([1, 2, 3]); // [3]
 * maxN([1, 2, 3], 2); // [3,2]
 */
export function maxN(arr: Array<number>, n: number = 1): Array<number> {
  return [...arr].sort((a, b) => b - a).slice(0, n);
}
