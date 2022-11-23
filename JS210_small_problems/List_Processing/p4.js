// input: array of numbers
// output: number
//
// Algorithm: use reduce twice
//   reduce starting with first digit
//     add the sum of the slice from 0 to idx

function sumOfSums(arr) {
  return arr.reduce(function(sum, _, idx) {
    return sum + arr.slice(0, idx + 1).reduce((a, b) => a + b);
  });
}

console.log(sumOfSums([3, 5, 2]));
console.log(sumOfSums([1, 5, 7, 3]));
console.log(sumOfSums([4]));
console.log(sumOfSums([1, 2, 3, 4, 5]));
