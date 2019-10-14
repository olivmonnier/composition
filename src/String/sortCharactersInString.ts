/**
 * @description
 * can be used to alphabetically sort the characters in a string.
 * @example
 * sortCharactersInString('cabbage'); // 'aabbceg'
 */
export function sortCharactersInString(str: string): string {
  return [...str].sort((a, b) => a.localeCompare(b)).join("");
}
