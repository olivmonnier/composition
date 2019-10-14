/**
 * @description
 * can be used to get a random number from an array.
 * @example
 * sample([3, 7, 9, 11]); // 9
 */
export function sample(arr: Array<any>): any {
  return arr[Math.floor(Math.random() * arr.length)];
}
