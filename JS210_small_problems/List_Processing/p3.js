// input: two array lists of numbers
// output: new array sorted in ascending numeric order
//
// Big Steps:
//   1. for each element in the first array,
//   find product for each element in second array
//     -then append to the output array
//   2. sort the output array

function multiplyAllPairs(arr1, arr2) {
  let multiples = [];
  arr1.forEach(function(element) {
    arr2.forEach(function(element2) {
      multiples.push(element * element2);
    });
  });

  return multiples.sort((n1, n2) => n1 - n2);
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16);
