'use strict';
// Input: String representing values and ranges
//   -Ranges are separated by ,
//   -Range delimiters are : - and ..
//   -Each value represents the next significant value
// Output: array of numbers
//
// Data structure: arrays (to work with the last significant value)
// ALGORITHM:
// 1. get ranges from input string
//    -array of strings
//    -remove whitespace from the input string
//    -split the input string by commas
// 2. expand the ranges
//   -input: array of strings, output: array of arrays, flattened
//   a. map each array of a string
//   1. split the strings according to delimiter regex /[-:]|../
// 3. Convert the expanded ranges into an output array
//   - initialize a counter var to 0
//   - inititalize an output arr
//   for each nested array:
//     - set current val to nextsif arr[0]
//     - add that to the output array
//     for each nested array element after 0 (for idx = 1 idx < arr.lenght
//     -While the current val is less than the next significant val
//     -iterate the current value by 1 and add it to output array
//  4. Function nextsig
//    -Input: two string values a and b
//      -if b is greater than a(base 10), return b
//      else, iterate a until the last B ARR LENGTH digits == string b ex 202 = 02
//        do this by String(a).split('').slice(-B LENGTH).join('') == b
//
//
const RANGE_DELIMITER = /[-:]|\.\./;

function getRanges(shorthandString) {
  let cleaned = shorthandString.replace(/\s/g, '');
  return cleaned.split(',');
}

console.log(getRanges("1-3, 1-2"));
console.log(getRanges("545, 64:11"));
console.log(getRanges("1:5:2"));

function expandRanges(stringRangesArray) {
  return stringRangesArray.map(arr => {
    return (
      arr.split(RANGE_DELIMITER)
    );
  });
}

console.log(expandRanges(getRanges("545, 64:11")));

function nextSig(n1, n2) {
  if (Number(n2) > Number(n1)) {
    return n2;
  }
  let scale = n2.split('').length;
  while (n1.slice(-scale) !== n2) {
    n1 = String(Number(n1) + 1);
  }
  return n1;
}
console.log(nextSig('01', '02'));

function expandShorthand(shorthand) {
  let ranges = getRanges(shorthand);
  ranges = expandRanges(ranges);
  let currentNum = 0;
  let output = [];
  ranges.forEach(nestedArr => {
    currentNum = nextSig(currentNum, nestedArr[0]);
    output.push(Number(currentNum));
    for (let idx = 1; idx < nestedArr.length; idx += 1) {
      let target = nextSig(currentNum, nestedArr[idx]);
      while (Number(currentNum) < Number(target)) {
        currentNum = String(Number(currentNum) + 1);
        output.push(Number(currentNum));
      }
    }
  });
  return output;
}


// TEST CASES
console.log(expandShorthand("545, 64:11")); // [545, 564, 565-611]
console.log(expandShorthand("1, 3, 7, 2, 4, 1" )); // [1, 3, 7, 12, 14, 21]
console.log(expandShorthand("1-3, 1-2")); // [1, 2, 3, 11, 12]
console.log(expandShorthand("1:5:2")); // [1, 2, 3, 4, 5, 6, 7..12];
console.log(expandShorthand("104-2")); // [104, 105, 106..112];
console.log(expandShorthand("104-02")); // [104, 105..175..200..202]
