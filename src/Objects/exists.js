/**
 * exists method
 * 
 * @param {Object} obj
 * @param {String} prop
 * @returns {Boolean}
 */
export default exists = (obj, prop) => obj.hasOwnProperty(prop);