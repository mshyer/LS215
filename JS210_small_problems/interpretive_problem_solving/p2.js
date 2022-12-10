// 44
// Problem: given an ODD integer, log a diamond to the console.
//   -Notes: a diamond has n rows AND n columns
//   -Each row has n + 2 stars until the midpoint
//     -after midpoint, has n - 2 stars.
//     -Midpoint is the Ceiling of num / 2
//     -special case for n === 1
// INPUT: ODD number num
// Output: print to the console num lines of spaces and stars
// Data structure: numbers and strings
// Algorithm:
//   1. if 1, return *
//    //NOPE 1. Calculate the midpoint (Math.ceil(num / 2))
//   2. num stars initialize to 1
//     -Num spaces = num - num stars / 2
//   3. Until num stars eqquals num:
//     a- log to the console (
//       num spaces spaces, num stars stas, and num spaces spaces
//     b. num stars += 2
//     c. num spaces = num - num stars
//   4. until num stars less than 1
//     a. log to console
//     1. num stars -= 2
//     2. num spaces = num 0 num stars / 2
//   5. return undefined

function diamond(num) {
  if (num === 1) {
    return console.log('*');
  }

  let numStars = 1;
  let numSpaces = (num - numStars) / 2;
  while (numStars < num) {
    let spaces = '*'.repeat(numSpaces);
    let stars = ' '.repeat(numStars);
    console.log(spaces + stars + spaces);
    numStars += 2;
    numSpaces = (num - numStars) / 2;
  }

  while (numStars > 0) {
    let spaces = ' '.repeat(numSpaces);
    let stars = '*'.repeat(numStars);
    console.log(spaces + stars + spaces);
    numStars -= 2;
    numSpaces = (num - numStars) / 2;
  }
}

diamond(3);
diamond(1);
diamond(9);
