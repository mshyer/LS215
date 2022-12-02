// Input: array of strings
// Output: array of strings
//   Problem: given an array of strings, remove all of the vowels

function removeVowels(strings) {
  return strings.map(string => string.replace(/[aeiou]/i, ''));
}

console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]
