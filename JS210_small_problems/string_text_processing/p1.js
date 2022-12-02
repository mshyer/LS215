// Input: String
// Output: boolean
// Problem: if all the alphabetic chars are uppercase, return true/false
// Algorithm:
//   1. Split into characters
//   2. Iterate through each character.
//     If lowercase? return false
//   3. Return true at the end

function isLowercase(letter) {
  return letter.charCodeAt(0) >= 97 && letter.charCodeAt(0) <= 122;
}

//function isUppercase(string) {
//  for (let idx = 0; idx < string.length; idx += 1) {
//    if (isLowercase(string[idx])) {
//      return false;
//    }
//  }
//  return true;
//}

function isUppercase(string) {
  return !/[a-z]/.test(string);
}
console.log(isUppercase('t'));               // false
console.log(isUppercase('T'));               // true
console.log(isUppercase('Four Score'));      // false
console.log(isUppercase('FOUR SCORE'));      // true
console.log(isUppercase('4SCORE!'));         // true
console.log(isUppercase(''));                // true
