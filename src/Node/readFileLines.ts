const fs = require("fs");

/**
 * @description
 * can be used to read a file by getting an array of lines from a file.
 * @example
 * let arr = readFileLines('test.txt');
 * console.log(arr); // ['line1', 'line2', 'line3']
 */
export function readFileLines(filename: string): Array<string> {
  return fs
    .readFileSync(filename)
    .toString("UTF8")
    .split("\n");
}
