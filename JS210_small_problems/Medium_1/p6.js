// Find the nth fibonacci number using recursion
// Input: Integer
// Output: Integer
// Notes: Fib sequce starts from 1, 1, 2.. etch
// Data structure: Integers and recursion
// Algorithm:
//   1. End conditions
//     -Fibonacci of 5 equals fib 4 plus fib 3
//       -if 2 or 1, return 1
//   2. call self condition: return fib n - 1 + fib n - 2
//   TEST CASE:
//     fib 5 == fib 4 + fib3 == fib 3 == fib 2 + fib 1 (1 1)+ fib 2 (1)
function fibonacci(num) {
  if (num === 1 || num === 2) {
    return 1;
  }

  return fibonacci(num - 1) + fibonacci(num - 2);
}

console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));      // 6765
