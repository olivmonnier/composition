/**
 * @description
 * converts a string into an array of words.
 * @example
 * words('I love javaScript!!'); // ["I", "love", "javaScript"]
 * words('python, javaScript & coffee'); // ["python", "javaScript", "coffee"]
 */
export function words(
  str: string,
  pattern: RegExp = /[^a-zA-Z-]+/
): Array<string> {
  return str.split(pattern).filter(Boolean);
}
