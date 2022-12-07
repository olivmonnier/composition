/**
 * @description
 * returns the first key that satisfies a given function.
 * @example
 * findKey(
 *   {
 *     barney: { age: 36, active: true },
 *     fred: { age: 40, active: false },
 *     pebbles: { age: 1, active: true }
 *   },
 *   o => o['active']
 * ); // 'barney'
 */
export function findKey(
  obj: any,
  fn: (value: any, key: string, obj: any) => any
): any {
  return Object.keys(obj).find(key => fn(obj[key], key, obj));
}
