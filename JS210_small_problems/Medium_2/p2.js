// Problem: find out what kind of a triangle we make from side lengths
// Input: 3 numbers
// Output: string
// Notes:
//   Invalid: side length 0 or
//     - array of the arguments sorted lowest to highest
//       arr [0] + arr [1] < arr[2]
//   Equilateral: all sides equal
//   Isosceles: two sides equal
//   Scalene: otherwise
// Algorithm:
//   - get the args in array using rest syntax ...
//   - check if they are INVALID using a function
//   - use conditional logic for the rest.

function invalidTriangle(sides) {
  if (sides.some(side => side === 0)) {
    return true;
  }

  let leastToGreatest = (sides.sort((s1, s2) => s1 - s2));
  if (leastToGreatest[0] + leastToGreatest[1] <= leastToGreatest[2]) {
    return true;
  }

  return false;
}


function triangle(...sides) {
  if (invalidTriangle(sides)) {
    return 'invalid';
  } else if (sides[0] === sides[1] && sides[1] === sides[2]) {
    return 'equilateral';
  } else if (sides[0] === sides[1] || sides[0] === sides[2] || sides[1] === sides[2]) {
    return 'isosceles';
  } else {
    return 'scalene';
  }
}

console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"
