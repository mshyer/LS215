'use strict';
// Problem: Given a string, uppercase lowercase letters and lc uppecase letters
// Input: string
// Output: new string
// algorithm:
//   get an array of chars
//   Map the chars
//     if matches upper regex, lowercase
//     if matches lower regex, upper
//     else do nothing

function swapper(char) {
  if (/[a-z]/.test(char)) {
    return char.toUpperCase();
  } else if (/[A-Z]/.test(char)) {
    return char.toLowerCase();
  } else {
    return char;
  }
}

function swapCase(string) {
  return string.split('')
         .map(swapper)
         .join('');
}

console.log(swapCase('CamelCase'));
console.log(swapCase('Tonight on XYZ-TV'));
