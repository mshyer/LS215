function rotateArray(arr) {
  if (!Array.isArray(arr)) {
    return undefined;
  }
  return arr.slice(1).concat(arr.slice(0, 1));
}

function rotateString(string) {
  return string.slice(1) + string.slice(0, 1);
}
// Input: number
// Output: number
// Data structure: arrays of chars (rotateArray)
// Examples: rotation must be positive integer
//   -Rotation of 1 does not change the string
//   -Rotation of the string length is the same as rotateArray
//   -rotation of other numbers can default to rotateArray I think.
// Algorithm: 
//   - return a slice of the string from 0 t0 string.length - num
//      added to a slice of the array from length - num to the end
//        -rotate this string (have to convert to array first, then join back)
function rotateRightmostDigits(num, rotation) {
  const NUM_LENGTH = String(num).length;
  const NUM_STRING = String(num);
  if (rotation < 1 || rotation > NUM_LENGTH) {
    rotation = NUM_LENGTH;
  }

  const firstPart = NUM_STRING.slice(0, NUM_LENGTH - rotation);
  const secondPart = NUM_STRING.slice(NUM_LENGTH - rotation);
  // return (NUM_STRING.slice(0, NUM_LENGTH - rotation)
  //         + rotateArray(NUM_STRING.slice(NUM_LENGTH - rotation)
  //                       .split(''))
  //          .join(''));
  return firstPart + rotateString(secondPart);
}

console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917
