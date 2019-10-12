/**
 * @description
 * can be used to check if a value is of a particular type.
 * @example
 * is(Array, [1]); // true
 * is(ArrayBuffer, new ArrayBuffer()); // true
 * is(Map, new Map()); // true
 * is(RegExp, /./g); // true
 * is(Set, new Set()); // true
 * is(WeakMap, new WeakMap()); // true
 * is(WeakSet, new WeakSet()); // true
 * is(String, ''); // true
 * is(String, new String('')); // true
 * is(Number, 1); // true
 * is(Number, new Number(1)); // true
 * is(Boolean, true); // true
 */
export function is(type: any, val: any): Boolean {
  return ![, null].includes(val) && val.constructor === type;
}
