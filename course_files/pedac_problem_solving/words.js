// Input: a sentence string composed of letters a-z, space and period
//   - Words are at most 20 letters, only letters
//   - One or more words
//   - Words separated by one or more spaces
//   -Sentence terminates in zero or more spaces. Last char point.
// Output:
//   -Sentence string of one or more words
//   -Odd index words reversed
//   - separated by A SINGLE SPACE
//   -Last word followed by zero spaces and a point.
// Algorithm:
//   -Format the string to contain only word letters and spaces
//     -replace dot with nothing, then trim it
//   - Split the string by any length whitespace
//   - Map this so that every other word is reversed
//   - Join the array with single space, plus a single period at end
//   TEST CASES:
//     "Whats the matter with kansas."




function reverseOddWords(string) {
  return ((string.replace('.', '').trim()
        .split(/\s+/)
        .map(function(word, idx) {
          if (idx % 2 === 0) {
            return word;
          } else {
            return word.split('').reverse().join('');
          }}
        )
        .join(' ')) + '.');
}

// TEST CASES

console.log(reverseOddWords('whats the matter with kansas') === 'whats eht matter htiw kansas.');
console.log(reverseOddWords('whats the matter with kansas.') === 'whats eht matter htiw kansas.');
console.log(reverseOddWords('    whats    the matter with kansas    .   ') === 'whats eht matter htiw kansas.');
