/**
 * @description
 * can be used to reverse a string.
 * @example
 * reverseString('foobar'); // 'raboof'
 */
export function reverseString(str: string): string {
  return [...str].reverse().join("");
}
