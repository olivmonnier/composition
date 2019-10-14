/**
 * @description
 * can be used to convert an angle from radians to degrees.
 * @example
 * radsToDegrees(Math.PI / 2); // 90
 */
export function radsToDegrees(rad: number): number {
  return (rad * 180.0) / Math.PI;
}
