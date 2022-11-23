// input: string
// Output: array of all substrings
// Requirements:
//   Output strings are sorted by:
//     the starting index of the first character, shortest to longest
//     Best to do this naturally...
// Algorithm:
// 1. for the length of the string
//   -find the leading substrings of a slice from the index to end of str
//   -add this array flattened, to the output

function substrings(string) {
  //let substrings = [];
  //for (let idx = 0; idx < string.length; idx += 1) {
  //  substrings = substrings.concat(leadingSubstrings(string.slice(idx)));
  //}
  //
  //return substrings;
  //FURTHER EXPLORATION:
  let leadingSlices = [...string].map((_, idx) => string.slice(idx));
  return leadingSlices.flatMap(slice => leadingSubstrings(slice));
}

function leadingSubstrings(string) {
  //let substrings = [];
  //let currentSubstring = '';
  //let chars = string.split('');

  //chars.forEach(char => {
  //  currentSubstring += char;
  //  substrings.push(currentSubstring);
  //});


  //return substrings;
  //FURTHER EXPLORATION:
  //  Get an array of chars
  //  map to a slice from 0 to idx
  return [...string].map((_, idx) => string.slice(0, idx + 1));
}


console.log(substrings('abcde'));
