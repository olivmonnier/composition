/**
 * @description
 * converts a non-array value into array.
 * @example
 * castArray('foo'); // ['foo']
 * castArray([1]); // [1]
 */
export function castArray(val: any): Array<any> {
  return Array.isArray(val) ? val : [val];
}
