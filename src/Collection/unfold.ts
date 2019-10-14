/**
 * @description
 * can be used to build an array using an iterator function and an initial seed value.
 * @example
 * var f = n => (n > 50 ? false : [-n, n + 10]);
 * unfold(f, 10); // [-10, -20, -30, -40, -50]
 */
export function unfold(fn: Function, seed: any): Array<any> {
  let result = [],
    val = [null, seed];
  while ((val = fn(val[1]))) result.push(val[0]);
  return result;
}
