// Problem: given a string, every 1st char cap, 2nd char lower
// I/O string
// Alg: for loop, if even, upper, else lower
function staggeredCase(string) {
  let result = '';
  for (let idx = 0; idx < string.length; idx += 1) {
    if (idx % 2 === 0) {
      result += string[idx].toUpperCase();
    } else {
      result += string[idx].toLowerCase();
    }
  }
  return result;
}

console.log(staggeredCase('I Love Launch School!'));        // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase('ALL_CAPS'));                     // "AlL_CaPs"
console.log(staggeredCase('ignore 77 the 4444 numbers'));   // "IgNoRe 77 ThE 4444 nUmBeRs"
