/**
 * pluck method
 * 
 * @param {Array} list
 * @param {String} prop
 * @returns {Array}
 */
export default pluck = (list, prop) => Array.from(list).map(o => o[prop]);