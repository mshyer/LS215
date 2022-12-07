// 35
// Bubble sort iterates through array and swaps if first greater than 2nd
// Input: array
//   -At least two elements in array. Can be anything comparable with >
// Output: SAME array (mutated).
// Data structure: looping, arrays and flag
// Algorithm:
// a. init flag to false
// 1. While a flag is false
//   set flag to true
//   a. loop through the whole array length - 2 using for loop
//     a. Store idx and idx + 1 in temp variables
//     1. if idx > idx + 1, swap the two
//       -and set flag to false
// 2. return the sorted array


function bubbleSort(array) {
  let flag = false;
  while (!flag) {
    flag = true;
    for (let idx = 0; idx < array.length - 1; idx += 1) {
      let val1 = array[idx];
      let val2 = array[idx + 1];
      if (val1 > val2) {
        array[idx] = val2;
        array[idx + 1] = val1;
        flag = false;
      }
    }
  }
  return array;
}
const array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

const array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

const array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]
