/**
 * @description
 * prints the name of a function into the console.
 * @example
 * functionName(Math.max); // max (logged in debug channel of console)
 */
export function functionName(fn: Function): void {
  return console.debug(fn.name);
}
