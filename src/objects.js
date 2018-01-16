/**
 * Objects module
 * @module objects
 */

/**
 * existProperty method
 * 
 * @param {Object} obj
 * @param {String} prop
 * @returns {Boolean}
 */
export const existProperty = (obj, prop) => obj.hasOwnProperty(prop);

/**
 * extend method
 * 
 * @param {Array} objs 
 * @returns {Object}
 */
export const extend = (...objs) => Object.assign(...objs);

/**
 * matches method
 * 
 * @param {Object} obj 
 * @param {Object} props 
 * @returns {Boolean}
 */
export const matches = (obj, props) => Object.keys(props).every((key) => obj[key] === props[key]);

/**
 * withConstructor method
 * 
 * @param {Function} constructor 
 * @returns {Object}
 */
export const withConstructor = constructor => obj => {
  const proto = Object.assign({}, 
    Object.getPrototypeOf(obj),
    { constructor }
  );
  return Object.assign(Object.create(proto), obj)
}