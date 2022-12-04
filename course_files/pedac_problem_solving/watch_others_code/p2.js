// 2323 2005 7766 3554
// 4343 4005 5736 6514
// 4 + 3 + 4 + 3 + 4 + 5 + 5 + 7 + 3 + 6 + 6 + 5 + 1 + 4
//
// Input: number in string format
//   -note: Can have other digits, like spaces and dashes
// Output: boolean true/false
// Data Structure: Array of digits
// Algorithm:
// a. Remove non-digit chars from string
// b if empty string, return false
// 1. Break the string into an array of digits
// 2. Reverse the array and map it so that every other digit 
//   -is doubled, if more than 10, subtract 9
// 3. Get the sum of the digits
//   -reduce the array to the sum of the digits
// 4. If the sum of the digits is divisible by 10, then return true, else false.
//

function checksum(digits) { 
  return digits.reverse().map(function(digit, idx) {
    if (idx % 2 !== 0) {
      let doubled = Number(digit) * 2;
      return doubled >= 10 ? doubled - 9 : doubled;
    } else {
      return Number(digit);
    }
  }).reduce((sum, digit) => sum + digit);
}
// TEST CASES:
//console.log(checksum([2,3,2,3,2,0,0,5,7,7,6,6,3,5,5,4])); // 60
//console.log(checksum(['8', '4', '2'])); // 18
//console.log(checksum([1,1,1,1])); // 6
//console.log(checksum([8,7,6,3])); // 20

function removeNonDigits(string) {
  return string.replace(/\D/g, '');
}


function luhn(string) {
  string = removeNonDigits(string);
  if (string === '') {
    return false;
  }

  let digits = string.split('');
  let check = checksum(digits);
  return (check % 10 === 0);
}

//console.log(luhn("2323 2005 7766 3554")); // true
//console.log(luhn("")); // false
//console.log(luhn('9')); // false
//console.log(luhn('5')); // false
//console.log(luhn("2323 2005 7766 35asdasdasdasd54")); // true
//console.log(luhn("1111")); // false
//console.log(luhn("842")); // false
//console.log(luhn("8763")); // true

// TEST CASE 2
// PROBLEM: given a string, if it is not a valid luhn,
//   -calculate the number needed to append to end to make it valid luhn
//   -return that NUMBER
// INPUT: Number that may or may not be valid luhn
// OUTPUT: String number that is a valid luhn
// Data structure: array (so we can use our checksum function)
// Algorithm:
//   -luhn function on string of number. If true, return the original string
//   - split a string of the number into digits and checksum the array PLUS ZERO AT END
//   - return the array of digits plus 10 - remainder of that checksum.
//     --JOINED INTO STRING, THEN CONVERTED TO NUMBER.

function makeValid(numString) {
  numString = removeNonDigits(numString);
  if (luhn(numString)) {
    return numString;
  }
  let digits = numString.split('').map(digString => Number(digString));
  let luhnDifference = 10 - (checksum([...digits, 0]) % 10);
  return [...digits, luhnDifference].join('');
}

console.log(checksum([2,3,2,3,2,0,0,5,7,7,6,6,3,5,5])); // 49
console.log(checksum([2,3,2,3,2,0,0,5,7,7,6,6,3,5,5,0])); //56 


console.log(makeValid('2323 2005 7766 355')); // 2323 2005 7766 3554













