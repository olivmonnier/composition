/**
 * @description
 * assigns default values for all properties in an object that are undefined.
 * @example
 * defaults({ a: 1 }, { b: 2 }, { b: 6 }, { a: 3 }); // { a: 1, b: 2 }
 */
export function defaults<T>(obj: Record<string, T>, defs: Record<string, T>[]) {
  return Object.assign({}, obj, ...defs.reverse(), obj);
}
