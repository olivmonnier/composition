/**
 * @description
 * can be used to iterate over a callback n times.
 * @example
 * var output = '';
 * times(5, i => (output += i));
 * console.log(output); // 01234
 */
export function times(n: number, fn: Function, context: any = undefined): void {
  let i = 0;
  while (fn.call(context, i) !== false && ++i < n) {}
}
