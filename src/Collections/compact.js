/**
 * compact method
 * 
 * @param {Array} list
 * @returns {Array}
 */

export default compact = list => Array.from(list).filter(Boolean);