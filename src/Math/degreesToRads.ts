/**
 * @description
 * can be used to convert a value from degrees to radians.
 * @example
 * degreesToRads(90.0); // ~1.5708
 */
export function degreesToRads(deg: number): number {
  return (deg * Math.PI) / 180.0;
}
