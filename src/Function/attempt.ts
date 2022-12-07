/**
 * @description
 * executes a function, returning either the result or the caught error object.
 * @example
 * var elements = attempt(function(selector) {
 *   return document.querySelectorAll(selector);
 * }, '>_>');
 * if (elements instanceof Error) elements = []; // elements = []
 */
export function attempt(fn: Function, ...args: any[]): any {
  try {
    return fn(...args);
  } catch (e) {
    return e instanceof Error ? e : new Error(e);
  }
}
