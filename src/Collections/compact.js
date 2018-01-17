/**
 * compact method
 * 
 * @param {Array} list
 * @returns {Array}
 */
export default compact = list => from(list).filter(x => x !== null && x !== undefined);