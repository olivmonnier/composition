/**
 * every method
 * 
 * @param {Array} list
 * @param {Function} fn
 * @returns {Boolean}
 */
export default function every (list: [], fn: (value: never, index: number, array: never[]) => boolean): boolean {
  return Array.from(list).every(fn);
};