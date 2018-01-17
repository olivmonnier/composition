/**
 * slice method
 * 
 * @param {Array} list
 * @returns {*}
 */
export default slice = (list, ...args) => from(list).slice(...args);