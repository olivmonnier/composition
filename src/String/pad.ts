/**
 * @description
 * can be used to pad a string on both sides with a specified character if it is shorter than the specified length.
 * @example
 * pad('cat', 8); // '  cat   '
 * pad(String(42), 6, '0'); // '004200'
 * pad('foobar', 3); // 'foobar'
 */
export function pad(str: string, length: number, char: string = " "): string {
  return str.padStart((str.length + length) / 2, char).padEnd(length, char);
}
