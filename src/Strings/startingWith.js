/**
 * startingWith method
 * 
 * @param {String} str 
 * @param {String} strMatch 
 * @returns {Boolean}
 */
export default startingWith = (str, strMatch) => {
  const regex = new RegExp(`^${strMatch}`)
  return regex.test(str)
}