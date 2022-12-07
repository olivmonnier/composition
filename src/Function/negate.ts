/**
 * @description
 * can be used to apply the not operator (!) to a predicate function with its arguments.
 * @example
 * [1, 2, 3, 4, 5, 6].filter(negate(n => n % 2 === 0)); // [ 1, 3, 5 ]
 */
export function negate(func: Function): Function {
  return function(...args: Array<any>): any {
    return !func(...args);
  };
}
