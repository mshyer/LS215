// Problem: check if a word can be spelled using a series of vanishing blocks
// Input: String
//   -NOT CASE SENSITIVE
//   -Empty string should be false.
// Output: boolean t/f
//   -empty string should return false
// DATA STRUCTURE: 
//   - blocks stored as nested array
//   - Array of chars
// Algorithm:
// 1. Initialize the blocks
// 2. Iterate through the uppercase chars in the string
// 3. if none of the sub arrays in blocks include the char, return false
//   -use every
// 4. if one of the blocks has one of the characters, remove that block
//   - use filter on the blocks. There should only be one of each in nested array.
// 5. return true

function isBlockWord(string) {
  if (string === '') {
    return false;
  }
  let blocks = [
    ['B', 'O'], ['X', 'K'], ['D', 'Q'],
    ['C', 'P'], ['N', 'A'], ['G', 'T'],
    ['R', 'E'], ['F', 'S'], ['J', 'W'],
    ['H', 'U'], ['V', 'I'], ['L', 'Y'],
    ['Z', 'M']
  ];
  let upChars = string.toUpperCase().split('');
  for (let idx = 0; idx < upChars.length; idx += 1) {
    let char = upChars[idx];
    if (!blocks.flat(2).includes(char)) {
      return false;
    } else {
      blocks = blocks.filter(block => !block.includes(char));
    }
  }
  return true;

}

// Test cases:
console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true
console.log(isBlockWord('')); // false
console.log(isBlockWord('123jest')); //false
console.log(isBlockWord('floW')); //true
console.log(isBlockWord('apPLE')); //false
