/**
 * compact method
 * 
 * @param {Array} list
 * @returns {Array}
 */
export default function compact (list: []): any[] {
  return Array.from(list).filter(Boolean);
};