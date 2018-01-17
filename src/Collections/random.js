/**
 * random method
 * 
 * @param {Array} list
 * @returns {*}
 */
export default random = list => list[Math.floor(Math.random() * list.length)];