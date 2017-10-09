/**
 * Objects module
 * @module objects
 */
export const existProperty = (obj, prop) => obj.hasOwnProperty(prop);

export const extend = (...objs) => Object.assign(...objs);

export const matches = (obj, props) => Object.keys(props).every((key) => obj[key] === props[key]);

