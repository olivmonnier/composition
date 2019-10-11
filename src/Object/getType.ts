/**
 * @description
 * This snippet can be used to get the type of a value.
 * @example
 * getType(new Set([1, 2, 3])); // 'set'
 */
export function getType(v: any): string {
  return v === undefined
    ? "undefined"
    : v === null
    ? "null"
    : v.constructor.name.toLowerCase();
}
