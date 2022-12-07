/**
 * @description
 * delays the execution of a function until the current call stack is cleared.
 * @example
 * defer(console.log, 'a'), console.log('b'); // logs 'b' then 'a'
 */
export function defer(fn: Function, ...args: any[]): number {
  return setTimeout(fn, 1, ...args);
}
