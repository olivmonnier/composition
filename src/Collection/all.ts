/**
 * @description
 * returns true if the predicate function returns true for all elements in a collection and false otherwise. You can omit the second argument fn if you want to use Boolean as a default value.
 * @example
 * all([4, 2, 3], x => x > 1); // true
 * all([1, 2, 3]); // true
 */
export function all(
  arr: Array<any>,
  fn: (value: any) => unknown = Boolean
): Boolean {
  return arr.every(fn);
}
