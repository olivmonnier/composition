/**
 * @description
 * iterates on each property of an object and iterates a callback for each one respectively.
 * @example
 * forOwn({ foo: 'bar', a: 1 }, v => console.log(v)); // 'bar', 1
 */
export function forOwn(
  obj: any,
  fn: (value: any, key: string, obj: any) => void
): void {
  return Object.keys(obj).forEach(key => fn(obj[key], key, obj));
}
