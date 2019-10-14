/**
 * @description
 * can be used to generate a random hexadecimal color code.
 * @example
 * randomHexColorCode(); // "#e34155"
 */
export function randomHexColorCode(): string {
  let n = (Math.random() * 0xfffff * 1000000).toString(16);
  return "#" + n.slice(0, 6);
}
