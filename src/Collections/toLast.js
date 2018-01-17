import removeIndex from './removeIndex'

/**
 * toLast method
 * 
 * @param {Array} list
 * @param {Integer} oldIndex
 * @returns {Array}
 */
export default toLast = (list, oldIndex) => [].concat(
  removeIndex(list, oldIndex),
  list[oldIndex]
)