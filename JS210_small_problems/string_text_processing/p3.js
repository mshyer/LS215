// Problem: Count the lower, upper and neither case letters in string
//           and put these properties in an object
// Input: String
// Output: Object with three properties
// Algorithm: 
//   1. Use 1 helper method with 3 rgx to count the number of each type of char
//   2. For each type of char, the length of the array returned by match
//       represents the number of chars
//      a. Use global regex for each 
//        -/[a-z]/g
//        -/[A-Z]/g
//        -/[^a-z]/gi

const LOWERCASE_REGEX = /[a-z]/g;
const UPPERCASE_REGEX = /[A-Z]/g;
const NEITHER_REGEX = /[^a-z]/gi;
const countLetterType = (string, rgx) => {
  let matches = string.match(rgx);
  return matches ? matches.length : 0;
};

function letterCaseCount(string) {
  let counts = {
    lowercase: countLetterType(string, LOWERCASE_REGEX),
    uppercase: countLetterType(string, UPPERCASE_REGEX),
    neither: countLetterType(string, NEITHER_REGEX),
  };
  return counts;
}

console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }
