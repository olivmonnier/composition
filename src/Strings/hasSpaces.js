import match from './match'

/**
 * hasSpaces method
 * 
 * @param {String} str
 * @returns {Boolean}
 */
export default hasSpaces = str => match(str, /\s+/g);