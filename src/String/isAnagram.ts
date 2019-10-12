/**
 * @description
 * can be used to check whether a particular string is an anagram with another string.
 * @example
 * isAnagram('iceman', 'cinema'); // true
 */
export function isAnagram(str1: string, str2: string): Boolean {
  const normalize = str =>
    str
      .toLowerCase()
      .replace(/[^a-z0-9]/gi, "")
      .split("")
      .sort()
      .join("");
  return normalize(str1) === normalize(str2);
}
