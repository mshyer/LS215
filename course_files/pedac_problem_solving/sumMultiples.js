// Problem: given a natural number and a list of factors,
//   Produce a sum that corresponds to the list of numbers from 1..n
//   That are also multiples of one of the factors.
// Input: 
//   1. A natural number
//      -This is the max number for our range
//   2. An arrary of numbers
//      -Represents factors to search for
//      -If not given, defaults to [3, 5]
// Output: a number (sum) of all the multiples of factors from 1..n
// 
// Examples: 20, [3, 5] === 78
// 
// Algorithm:
// 1. create a counter var
// 2. for loop from 1 until MAX
//   - if the idx is divisible by a factor, add it to sum
//   - use any function
// 3. return the sum

function sumMultiples(max, factors = [3, 5]) {
  let counter = 0;

  for (let idx = 1; idx < max; idx += 1) {
    if (factors.some(factor => idx % factor === 0)) {
      counter += idx;
    }
  }

  return counter;
}


// Test Cases
console.log(sumMultiples(20, [3, 5]));
console.log(sumMultiples(20, [3, 5]) === 78);
console.log(sumMultiples(20) === 78);
console.log(sumMultiples(20, [19]));
console.log(sumMultiples(1, []));
