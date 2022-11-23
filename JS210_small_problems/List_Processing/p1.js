// Input: one positive integer
// Output: positive integer representing the sum of digits
// Requirements: Use method calls, no for loops
// Data structure: array of digits
//   Algorithm: split number into array of digits
//   Reduce the array to a single number
//     Number(digit) + Number(digit)
//
const sum = function(num) {
  return String(num)
    .split('')
    .reduce((sum, digit) => sum + Number(digit), 0);
};

console.log(sum(23));
console.log(sum(496));
console.log(sum(123456789));
