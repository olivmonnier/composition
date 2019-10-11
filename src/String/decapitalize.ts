/**
 * @description
 * turns the first letter of a string into lowercase.
 * @example
 * decapitalize('FooBar'); // 'fooBar'
 * decapitalize('FooBar'); // 'fooBar'
 */
export function decapitalize([first, ...rest]: string) {
  return first.toLowerCase() + rest.join("");
}
