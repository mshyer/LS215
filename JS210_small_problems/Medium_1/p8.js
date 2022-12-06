// Use memoization to compute recursive fib more efficiently
// Input: number
// Output: number (nth fib)
//

function fibonacci(num) {
  const fibs = {1: 1, 2: 1,};
  fibs[num] = (fibs[num] || fibonacci(num - 1) + fibonacci(num - 2));
  return fibs[num];
}

console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));      // 6765
