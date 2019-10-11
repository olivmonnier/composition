/**
 * @description
 * returns the distance between two points by calculating the Euclidean distance.
 * @example
 * distance(1, 1, 2, 3); // 2.23606797749979
 */
export function distance(
  x0: number,
  y0: number,
  x1: number,
  y1: number
): number {
  return Math.hypot(x1 - x0, y1 - y0);
}
