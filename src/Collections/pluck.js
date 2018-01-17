/**
 * pluck method
 * 
 * @param {Array} list
 * @param {String} prop
 * @returns {Array}
 */
export default pluck = (list, prop) => from(list).map(o => o[prop]);