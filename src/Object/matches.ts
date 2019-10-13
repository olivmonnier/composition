/**
 * @description
 * compares two objects to determine if the first one contains the same property values as the second one.
 * @example
 * matches({ age: 25, hair: 'long', beard: true }, { hair: 'long', beard: true }); // true
 * matches({ hair: 'long', beard: true }, { age: 25, hair: 'long', beard: true }); // false
 */
export function matches(obj: any, source: any): Boolean {
  return Object.keys(source).every(
    key => obj.hasOwnProperty(key) && obj[key] === source[key]
  );
}
