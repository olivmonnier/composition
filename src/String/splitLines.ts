/**
 * @description
 * can be used to split a multi-line string into an array of lines.
 * @example
 * splitLines('This\nis a\nmultiline\nstring.\n'); // ['This', 'is a', 'multiline', 'string.' , '']
 */
export function splitLines(str: string): Array<string> {
  return str.split(/\r?\n/);
}
