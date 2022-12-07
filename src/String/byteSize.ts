/**
 * @description
 * returns the length of a string in bytes.
 * @example
 * byteSize('😀'); // 4
 * byteSize('Hello World'); // 11
 */
export function byteSize(str: string): number {
  return new Blob([str]).size;
}
