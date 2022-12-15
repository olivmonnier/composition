/**
 * @description
 * converts a non-array value into array.
 * @example
 * castArray('foo'); // ['foo']
 * castArray([1]); // [1]
 */
export function castArray<T>(val: T) {
  return Array.isArray(val) ? val : [val];
}
