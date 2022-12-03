// PROBLEM: version numbers
// Input: two strings representing version numbers
//   - Input should contain either digits or . Otherwise return null
//   - What about if there are two dots? In my code, I will return null
//   - Each decimal is of lower priority than came before it. 
// Output: 1, -1, 0 or null. Null for invalid. 0 if equal.
//   1 if version1 > version2
//   -1 if version1 < version2
// Data Structures:
//   -Split string into an array of numbers
// Algorithm:
//  0. return null if the input string is invalid
//    -if the regex /[^.1-9]/ matches, return null
//  1. Split input strings into array of numbers
//    a. test if there are periods left. If there are, return null.
//    b. split on periods
//    c. Make the arrays the same length NEW METHOD.
//      d. Get the max length.
//      e. Change the length of the shorter array to the longer length
//      f. Fill in with zeros
//  2. Compare each array by index using for loop
//    a. if one of the NUMBERS is greater, return the result
//    b. If they are the same, continue the iteration
//  3. if nothing is returned and the arrays are the same lenght, return 0

function invalidString(string) {
  let regx = /[^0-9]/;
  return regx.test(string);
}

function fillZeros(arr) {
  for (let idx = 0; idx < arr.length; idx += 1) {
    if (arr[idx] === undefined) {
      arr[idx] = 0;
    }
  }
}

function equalizeLengths(arr1, arr2) {
  if (arr1.length < arr2.length) {
    arr1.length = arr2.length;
    arr1 = fillZeros(arr1);
  } else {
    arr2.length = arr1.length;
    arr2 = fillZeros(arr2);
  }
}

function compareVersions(version1, version2) {
  let numArr1 = version1.split('.');
  let numArr2 = version2.split('.');
  if ([...numArr1, ...numArr2].some(string => invalidString(string))) {
    return null;
  }
  if (numArr1.length !== numArr2.length) {
    equalizeLengths(numArr1, numArr2);
  }

  for (let idx = 0; idx < numArr1.length; idx += 1) {
    if (Number(numArr1[idx]) > Number(numArr2[idx])) {
      return 1;
    } else if (Number(numArr2[idx]) > Number(numArr1[idx])) {
      return -1;
    }
  }

  return 0;
}


// Test cases
console.log(compareVersions('0.1', '1'));
console.log(compareVersions('0.1', '0'));
console.log(compareVersions('0..1', '1'));
console.log(compareVersions('0.$1', '#'));
console.log(compareVersions('1.1', '1.0'));
console.log(compareVersions('1.18.2', '1.2.0.0'));
