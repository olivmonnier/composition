/**
 * @description
 * executes a function, returning either the result or the caught error object.
 * @example
 * var elements = attempt(function(selector) {
 *   return document.querySelectorAll(selector);
 * }, '>_>');
 * if (elements instanceof Error) elements = []; // elements = []
 */
export function attempt<T>(fn: Function, ...args: T[]) {
  try {
    return fn(...args);
  } catch (e) {
    throw e;
  }
}
