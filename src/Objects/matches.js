/**
 * matches method
 * 
 * @param {Object} obj 
 * @param {Object} props 
 * @returns {Boolean}
 */
export default matches = (obj, props) => Object.keys(props).every((key) => obj[key] === props[key]);