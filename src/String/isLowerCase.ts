/**
 * @description
 * can be used to determine whether a string is lower case.
 * @example
 * isLowerCase('abc'); // true
 * isLowerCase('a3@$'); // true
 * isLowerCase('Ab4'); // false
 */
export function isLowerCase(str: string): Boolean {
  return str === str.toLowerCase();
}
