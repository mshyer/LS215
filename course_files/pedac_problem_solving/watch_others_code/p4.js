// INPUT: String of ranges and values
// OUTPUT: array of values
// data structure: string to array of numbers to number
// Algorithm:
//   1. Split the input string into a long form range of numbers
//     -EX turn ranges into digits
//     - given an input string, output array of numbers
//     - remove whitespace
//     - then split by commas
//     -for each string, split by DELIMITER /[-:]|\.\./
//       map the array of arrays so that each nested array from start index to end index
//       ouput array gets a value each time. If there is no end index, map to the start index.
//     -Flatten the mapped
//   2. Add the next significant number to an output array
//     -initialize counter / current number var
//     - 5444 33
//     - 33, 2
//       if the next number is greater than the previous,
//         set current num to next num, push it to output array
//       else, iterate the current number by 1 until the last sig digits equals the next
//       if the num remainder 10*length > next number
//         - increment by 1 until last two digits === next number
//         -add this to the output array
//       
//   3. return the output array
//
const DELIMITERS = /[-:]|\.\./;

function getRange(string) {
  string = string.replace(/\s/g, '');
  let ranges = string.split(',');
  ranges = ranges.map(rangeString => {
    return rangeString.split(DELIMITERS).map(numString => Number(numString));
  });

  ranges = ranges.map(rangeArr => {
    let output = [];
    if (rangeArr[1] === undefined) {
      return rangeArr[0];
    }
    for (let idx = 1; idx <= rangeArr[1]
  return ranges;
}

console.log(getRange("1, 3, 7, 2, 4, 1"));
console.log(getRange("1-3, 1-2"));
