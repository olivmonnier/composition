/**
 * @description
 * converts the elements to strings with comma-separated values.
 * @example
 * arrayToCSV([['a', 'b'], ['c', 'd']]); // '"a","b"\n"c","d"'
 * arrayToCSV([['a', 'b'], ['c', 'd']], ';'); // '"a";"b"\n"c";"d"'
 */
export function arrayToCSV(
  arr: (string | number)[][],
  delimiter: string = ","
) {
  return arr.map((v) => v.map((x) => `"${x}"`).join(delimiter)).join("\n");
}
