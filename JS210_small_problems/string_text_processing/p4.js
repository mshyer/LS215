// Problem: given a string of words, capitalize first letter each word
//        The rest of the word should be lowercase
// Input: String of words (non-whitespace characters)
// Output: New String
// Algorithm:
//   1. Split string by whitespace
//   2. Return that array, mapped and joined
//     Map: Uppercase the first letter, lowercase the latter hald
'use strict';
//
//function wordCap(string) {
//  let words = string.split(/\s/);
//  let mapped =  words.map(word => {
//    return word[0].toUpperCase() + word.slice(1).toLowerCase();
//  });
//  return mapped.join(' ');
//}

function wordCap(string) {
  return string.split(' ')
         .map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())
         .join(' ');
}

console.log(wordCap('four score and seven'));       // "Four Score And Seven"
console.log(wordCap('the javaScript language'));    // "The Javascript Language"
console.log(wordCap('this is a "quoted" word'));    // 'This Is A "quoted" Word'
