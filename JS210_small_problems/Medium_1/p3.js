function rotateArray(arr) {
  if (!Array.isArray(arr)) {
    return undefined;
  }
  return arr.slice(1).concat(arr.slice(0, 1));
}

function rotateString(string) {
  return string.slice(1) + string.slice(0, 1);
}

function rotateRightmostDigits(num, rotation) {
  const NUM_LENGTH = String(num).length;
  const NUM_STRING = String(num);
  if (rotation < 1 || rotation > NUM_LENGTH) {
    rotation = NUM_LENGTH;
  }

  const firstPart = NUM_STRING.slice(0, NUM_LENGTH - rotation);
  const secondPart = NUM_STRING.slice(NUM_LENGTH - rotation);

  return firstPart + rotateString(secondPart);
}

// 735291
// 352917
// 329175
// 321759
// 321597
// 321579

// Rotate the a slice of the str of decreasing length until you get to the end
// Use a for loop until the length of the string
// num = rotateRightmostDigits(num, length - idx)

function maxRotation(num) {
  let length = String(num).length;
  let numString = String(num);
  for (let idx = length; idx > 0; idx -= 1) {
    numString = rotateRightmostDigits(numString, idx);
  }

  return parseInt(numString, 10);
}

console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845
