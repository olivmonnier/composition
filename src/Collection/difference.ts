/**
 * @description
 * finds the difference between two arrays.
 * @example
 * difference([1, 2, 3], [1, 2, 4]); // [3]
 */
export function difference(a: Array<any>, b: Array<any>): Array<any> {
  const s = new Set(b);
  return a.filter(x => !s.has(x));
}
