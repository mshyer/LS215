// Input: array of integers 0 to 19
// Output: an array of INTEGERS sorted based on the string of those integers: 
//   array of string representations of those numbers (one, two, zero)
// Requirements: Don't mutate argument. Sort method is mutating.
// Algorithm:
//   Create a constant dictionary of digits mapped to strings
//   Create a shallow copy of the digits array
//   return a sorted copy of the digits array
//     sort method:
//       if WordString1 > WordString2 return 1
//       if less return -1
//       if equal return 0

const DIGIT_STRINGS = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
};

const sortByDigitWord = function(digit1, digit2) {
  digit1 = DIGIT_STRINGS[digit1];
  digit2 = DIGIT_STRINGS[digit2];

  if (digit1 > digit2) {
    return 1;
  } else if (digit1 < digit2) {
    return -1;
  } else {
    return 0;
  }
};

const alphabeticNumberSort = function(digitArr) {
  let copy = [...digitArr];
  return copy.sort(sortByDigitWord);
};

console.log(alphabeticNumberSort(
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));
