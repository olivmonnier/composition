/**
 * @description
 * capitalizes the first letter of every word in a given string.
 * @example
 * capitalizeEveryWord('hello world!'); // 'Hello World!'
 */
export function capitalizeEveryWord(str: string): string {
  return str.replace(/\b[a-z]/g, char => char.toUpperCase());
}
