/**
 * removeIndex method
 * 
 * @param {Array} list
 * @param {Integer} oldIndex
 * @returns {Array}
 */
export default removeIndex = (list, oldIndex) => [].concat(
  list.slice(0, oldIndex),
  list.slice(oldIndex + 1, list.length)
);