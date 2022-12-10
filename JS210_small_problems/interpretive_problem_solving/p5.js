// Vigenere Cipher
//
let LOWERCASE_LETTERS = 'abcdefghijklmnopqrstuvwxyz'.repeat(2).split('');
let UPPERCASE_LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.repeat(2).split('');

function caesarEncryptChar(letter, key) {
  if (!/[a-z]/i.test(letter)) {
    return letter;
  }
  let shift = key % 26;
  let code = letter.charCodeAt(0);
  if (code >= 97 && code <= 122) {
    return LOWERCASE_LETTERS[LOWERCASE_LETTERS.indexOf(letter) + shift];
  } else {
    return UPPERCASE_LETTERS[UPPERCASE_LETTERS.indexOf(letter) + shift];
  }
}
//console.log(caesarEncryptChar('a', 3));
//console.log(caesarEncryptChar('y', 5));
//console.log(caesarEncryptChar('a', 47));

function caesarEncrypt(string, key) {
  let chars = string.split('');
  return chars.map(chr => caesarEncryptChar(chr, key)).join('');
}

// Problem: call the caesarEncryptChar function with a different key
//   -value for each letter.
//   -The key value corresponds to the index of the letter in the alphabet
//   - of a keyword
// Input: String, keyword
//   -keyword can be longer than the string inputAa
// Output: The enciphered string
// Data structure:
//   arrays
// Algorithm:
//  1. Get chars array
//  2. Map each letter in the array of chars, 
//    -apply the caesar cipher to each char
//  3. GETTING THE KEY VALUE:
//    - repeat the key string until it is longer than input string
//      - if less length than input: 
//        - Math.ceil(string / key length) repeat that many times
//    -Using a for loop with counter, iterate through the chars
//      -call the caesarchar function with key corresponding to index of counter
//      -lowercase letters indexOf = the key value
//  4. return the joined mapped array
function extendKeyword(string, keyword) {
  if (string.length <= keyword.length) {
    return keyword.toLowerCase();
  } else {
    return keyword.repeat(Math.ceil(string.length / keyword.length)).toLowerCase();
  }
}
console.log(extendKeyword('aaaaaaaaaa', 'car'));

function vigenereCipher(string, keyword) {
  let chars = string.split('');
  let extendedKeyword = extendKeyword(string, keyword);
  let shiftIdx = 0;
  // for each char in the array, if it is a letter, shift it, else continue
  for (let idx = 0; idx < string.length; idx += 1) {
    if (/[a-z]/i.test(string[idx])) {
      let shift = LOWERCASE_LETTERS.indexOf(extendedKeyword[shiftIdx]);
      chars[idx] = caesarEncrypt(chars[idx], shift);
      shiftIdx += 1;
    }
  }
  return chars.join('');
}

console.log(vigenereCipher('Pineapples don\'t go on pizzas!', 'a'));
console.log(vigenereCipher('Pineapples don\'t go on pizzas!', 'Aa'));
console.log(vigenereCipher('Pineapples don\'t go on pizzas!', 'cab'));
console.log(vigenereCipher('Dog', 'Rabbit'));
console.log(UPPERCASE_LETTERS.indexOf('R'));
