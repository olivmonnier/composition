/**
 * @description
 * can be used to get the time from a Date object as a string.
 * @example
 * getColonTimeFromDate(new Date()); // "08:38:00"
 */
export function getColonTimeFromDate(date: Date): string {
  return date.toTimeString().slice(0, 8);
}
