/**
 * @description
 * splits values into two groups and then puts a truthy element of filter in the first group, and in the second group otherwise.
 * @example
 * bifurcate(['beep', 'boop', 'foo', 'bar'], [true, true, false, true]); // [ ['beep', 'boop', 'bar'], ['foo'] ]
 */
export function bifurcate(
  arr: Array<any>,
  filter: Array<any>
): Array<Array<any>> {
  return arr.reduce((acc, val, i) => (acc[filter[i] ? 0 : 1].push(val), acc), [
    [],
    []
  ]);
}
