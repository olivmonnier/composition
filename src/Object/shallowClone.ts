/**
 * @description
 * can be used to create a shallow clone of an object.
 * @example
 * const a = { x: true, y: 1 };
 * const b = shallowClone(a); // a !== b
 */
export function shallowClone(obj: any): any {
  return Object.assign({}, obj);
}
