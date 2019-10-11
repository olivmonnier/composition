/**
 * @description
 * capitalizes the first letter of a string.
 * @example
 * capitalize('fooBar'); // 'FooBar'
 * capitalize('fooBar', true); // 'Foobar'
 */
export function capitalize([first, ...rest]: string): string {
  return first.toUpperCase() + rest.join("");
}
