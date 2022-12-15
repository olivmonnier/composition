/**
 * @description
 * removes false values from an array.
 * @example
 * compact([0, 1, false, 2, '', 3, 'a', 'e' * 23, NaN, 's', 34]); // [ 1, 2, 3, 'a', 's', 34 ]
 */
export function compact<T>(arr: T[]) {
  return arr.filter(Boolean);
}
