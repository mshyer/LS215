// Implement fibonacci as procedural
// Input: number
// Output: number (nth fibonacci)
// Data Structure: numbers and loops
// Algorithm:
//   -initialize previous, current and next

function fibonacci(num) {
  let prev = 0;
  let current = 1;
  let next;
  for (let counter = 1; counter < num; counter += 1) {
    next = current + prev;
    prev = current;
    current = next;
  }
  return current;
}

console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));      // 6765
