/**
 * @description
 * can be used to get an array with elements that are included in two other arrays.
 * @example
 * intersection([1, 2, 3], [4, 3, 2]); // [2, 3]
 */
export function intersection(a: Array<any>, b: Array<any>): Array<any> {
  const s = new Set(b);
  return a.filter(x => s.has(x));
}
