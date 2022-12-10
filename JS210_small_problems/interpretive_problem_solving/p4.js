// Inputs: String and a key representing the right-shift 
//   Notes: If the right shift reaches the end of the alphabet (z);
//     It keeps counting from A.
//   - If the letter is non-alphabetic, it is left as is.
//   -What to do with negative keys? Ideally, count backwards instead of forwards
//  Output: Encrypted string
//  Data Structure:
//    -array of chars
//  Algorithm:
//  1. Split string into chars
//  2. Map each char to the caesarCharEncrypt(char)
//  3. return the joined string
//  CAESAR CHAR FUNCTION;
//  1. given a character and a shift value, return a new character. Input: string
//  2. downcase the letter. Ranges 97-122
//    - key REMAINDER 26 represents the shift value
//    - if negative, it is 26 - (key remainder 26)
//    - Instead of using char codes, use doubled array of letters
//      - move up the remainder in the doubled array of letters, depending on case use 
//        -different array of letters
//    return the character value at charcodeat plus the shift value
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

//test cases:
console.log(caesarEncrypt('#', 3)); //'#'
console.log(caesarEncrypt('A', 3)); //'D'
console.log(caesarEncrypt('A', -3)); //'X'
// simple shift
console.log(caesarEncrypt('A', 0));       // "A"
console.log(caesarEncrypt('A', 3));       // "D"

// wrap around
console.log(caesarEncrypt('y', 5));       // "d"
console.log(caesarEncrypt('a', 47));      // "v"

// all letters
console.log(caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25));
// "ZABCDEFGHIJKLMNOPQRSTUVWXY"
console.log(caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5));
// "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!"

// many non-letters
console.log(caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2));
// "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?"



