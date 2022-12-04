// Problem:
// Input: String
// Output: true/false
// Data structure: Array of arrays for data, and array for input word.
//   This way, if you remove one of the blocks, if the nested
//   array is not present, you can return false.
// Algorithm:
//   a. Initialize the nested array within function
//   b. if empty string or not string, return false
//   1. Upcase the input word and split into chars
//   2. loop through the characters
//     - If the nested array does not contain the char, return false
//     - If it does, remove the nested array with that char
//       -FILTER: filter to where sub array of 0 and 1 !== the char.
//   3. Return true

// TEST CASES:

function isBlockWord(string) {
  if (typeof string !== 'string' || string === '') {
    return false;
  }

  let blocks = [
    ['B', 'O'], ['X', 'K'], ['D', 'Q'],
    ['C', 'P'], ['N', 'A'], ['G', 'T'],
    ['R', 'E'], ['F', 'S'], ['J', 'W'],
    ['H', 'U'], ['V', 'I'], ['L', 'Y'],
    ['Z', 'M']
  ];

  string = string.toUpperCase();
  chars = string.split('');
  for (let idx = 0; idx < chars.length; idx += 1) {
    if (blocks.every(function(block) {
      return !block.includes(chars[idx]);
    })) {
      return false;
    }
    blocks = blocks.filter((block) => !block.includes(chars[idx]));
  }

  return true;
}

console.log(isBlockWord('')); // FALSE
console.log(isBlockWord(3)); // false
console.log(isBlockWord('BATCH')); // TRUE
console.log(isBlockWord('BUTCH')); // FALSE
console.log(isBlockWord('jest')); //TRUE
