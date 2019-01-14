/**
 * withConstructor method
 * 
 * @param {Function} constructor 
 * @returns {Object}
 */
export default withConstructor = constructor => obj => {
  const proto = Object.assign({},
    Object.getPrototypeOf(obj),
    { constructor }
  );
  return Object.assign(Object.create(proto), obj);
}