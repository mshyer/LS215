// 15
// Problem: given angle degrees, calculate the triangle type
// Input: three numbers as arguments array
// Output: string
// Data structure: numbers and math and conditional logic
// Algorithm:
// 1. check if valid:
//   - if sum is not equal to 180
//   - if any of the arguments are less than or equal to zero
// 2. check if any of the angles greater than 90
//   -
// 3. check if any of the angles equal 90
// 4. otherwise, acute

function invalid(angles) {
  return (angles.reduce((sum, angle) => sum + angle) !== 180
     || angles.some(angle => angle <= 0));
}

function triangle(...angles) {
  if (invalid(angles)) {
    return 'invalid';
  } else if (angles.some(angle => angle > 90)) {
    return 'obtuse';
  } else if (angles.some(angle => angle === 90)) {
    return 'right';
  }

  return 'acute';
}

console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"
