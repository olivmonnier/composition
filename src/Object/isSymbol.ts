/**
 * @description
 * can be used to check whether an argument is a symbol.
 * @example
 * isSymbol(Symbol('x')); // true
 */
export function isSymbol(val: any): Boolean {
  return typeof val === "symbol";
}
