// input: string
// output: array of strings
// Reqs: array of substrings only includes those beginning with first letter
//   Substrings ordered from short to long (can be done naturally)
// Algorithm:
//   1. Split string into chars
//   2. Current string = ''
//   3. for each character
//     1. current string += letter
//     2. substrings array push current string

function leadingSubstrings(string) {
  let substrings = [];
  let currentSubstring = '';
  let chars = string.split('');

  chars.forEach(char => {
    currentSubstring += char;
    substrings.push(currentSubstring);
  });

  return substrings;
}

console.log(leadingSubstrings('abc'));
console.log(leadingSubstrings('a'));
console.log(leadingSubstrings('xyzzy'));
