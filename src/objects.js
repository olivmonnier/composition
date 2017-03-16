/**
 * Objects module
 * @module objects
 */

export const matches = (obj, props) => Object.keys(props).every((key) => obj[key] === props[key]);
