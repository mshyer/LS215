// input: string that may or may not have number words in it
// output: string with number words changed to numbers
// Data structure: arrays AND regex...
//   -We are going to convert each digit string into regex
//   -Then for each regex, replace the string with the number(index)
// Algorithm:
// 1. iterate through DIGITS
//  a. create a global regex from the string
//  b replace the input string with the index in the DIGITS arr.
// 2. return string

const NUM_STRINGS = ['zero', 'one', 'two',
                'three', 'four', 'five',
                'six', 'seven', 'eight',
                'nine'];

// function wordToDigit(text) {
//   NUM_STRINGS.forEach((numString) => {
//     let rgx = new RegExp('\\b' + numString + '\\b', 'gi');
//     text = text.replace(rgx, NUM_STRINGS.indexOf(numString));
//   });
//   return text;
// }
// "Please call me at 5 5 5 1 2 3 4. Thanks.");

const NUMBER_SPLITTER = /((?=one|two|three|four|five|six|seven|eight|nine)|(?<=one|two|three|four|five|six|seven|eight|nine))/;


function wordToDigit(text) {
  let words = text.split(NUMBER_SPLITTER).filter(element => element !== '');
  return words.map(word => {
    if (NUM_STRINGS.includes(word)) {
      return String(NUM_STRINGS.indexOf(word));
    }
    return word;
  }).join('');
}

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));


const NUMBER_REPLACER = /(?=(one|two|three|four|five|six|seven|eight|nine))\1/g;
const text = 'Please call me at five five five one two three four. Thanks.';

console.log(text.replace(NUMBER_REPLACER, '  $1  '));
console.log(text.replace(NUMBER_REPLACER, '  $1  ').split(/\s\s+/));
let test = text.replace(NUMBER_REPLACER, '  $1  ').split(/\s{2}(?=\w)/).map(word => {
  if (NUM_STRINGS.includes(word)) {
    return NUM_STRINGS.indexOf(word);
  }
  return word;
}).join('');
console.log(test);
