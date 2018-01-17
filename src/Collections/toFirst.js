import removeIndex from './removeIndex'

/**
 * toFirst method
 * 
 * @param {Array} list
 * @param {Integer} oldIndex
 * @returns {Array}
 */
export default toFirst = (list, oldIndex) => [].concat(
  list[oldIndex],
  removeIndex(list, oldIndex)
)