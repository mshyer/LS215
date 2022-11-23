function substrings(string) {
  let leadingSlices = [...string].map((_, idx) => string.slice(idx));
  return leadingSlices.flatMap(slice => leadingSubstrings(slice));
}

function leadingSubstrings(string) {
  return [...string].map((_, idx) => string.slice(0, idx + 1));
}

// Problem: Find all substrings that are palindromic, case-sensitive
//   note: single chars are not palindromic
// Input: string
// Output: array of palindromic substrings
// Algorithm:
//  1. write function isPalindrome that checks if string is palindrome
//    a. break into chars, reverse, join check if equal
//  2. Get all of the substrings using substrings function
//  3. Filter out any substrings that are not palindromes
function isPalindrome(string) {
  return (string.length > 1)
  && (string === [...string].reverse().join(''));
}

function palindromes(string) {
  return substrings(string).filter(isPalindrome);
}

console.log(palindromes('knitting cassettes'));

console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]
console.log(palindromes('hello-madam-did-madam-goodbye'));
