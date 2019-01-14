/**
 * each method
 * 
 * @param {Array} list
 * @param {Function} fn
 * @returns {*}
 */
export default function each (list: [], fn: (value: never, index: number, array: never[]) => void): void {
  return Array.from(list).forEach(fn);
};