//24
//Problem:
//  -Compute the sum of squares of number
//  -Compute the Square of sums of number
//  - return square of sums - sum of squares
// Input: integer
//   -Represents range of numbers 1..num
//   -n is positive integer
// Output: number
// Data structure: array representing range of nums
// Algorithm:
// 1. get the array of numbers
//   - array from trick. Length is the input num
// 2. Compyte the square of sum
//   - reduce the array to sum, then multiply by 2
// 3. Compute the sum of squares
//   - map the array to squares of numbers, then reduce to the sum

const sumSquares = numbers => {
  return numbers.map(num => num ** 2).reduce((sum, square) => sum + square);
};

const squareOfSum = numbers => numbers.reduce((sum, num) => sum + num) ** 2;

function sumSquareDifference(num) {
  let numbers = Array.from({length: num}, (_, idx) => idx + 1);
  return squareOfSum(numbers) - sumSquares(numbers);
}

console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150
