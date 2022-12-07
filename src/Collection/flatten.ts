/**
 * @description
 * flattens an array up to a specified depth using recursion.
 * @example
 * flatten([1, [2], 3, 4]); // [1, 2, 3, 4]
 * flatten([1, [2, [3, [4, 5], 6], 7], 8], 2); // [1, 2, 3, [4, 5], 6, 7, 8]
 */
export function flatten(arr: Array<any>, depth: number = 1): Array<any> {
  return arr.reduce(
    (a, v) =>
      a.concat(depth > 1 && Array.isArray(v) ? flatten(v, depth - 1) : v),
    []
  );
}
