/**
 * @description
 * can be used to check whether a string is upper case.
 * @example
 * isUpperCase('ABC'); // true
 * isUpperCase('A3@$'); // true
 * isUpperCase('aB4'); // false
 */
export function isUpperCase(str: string): Boolean {
  return str === str.toUpperCase();
}
