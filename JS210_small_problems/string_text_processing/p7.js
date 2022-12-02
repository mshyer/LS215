// Problem: given a string, every other a-z letter  should alternate caps
//   Ignore non-a-z chars
// Use a counter variable. For loop, add to counter if a-z

//function staggeredCase(string) {
//  let result = '';
//  let needUpper = true;
//
//  for (let idx = 0; idx < string.length; idx += 1) {
//    let char = string[idx];
//    if (/[a-z]/i.test(char)) {
//      result += (
//        needUpper ? char.toUpperCase() : char.toLowerCase()
//      );
//      needUpper = !needUpper;
//    } else {
//      result += char;
//    }
//  }
//
//  return result;
//}

function staggeredCase(string) {
  let needUpper = true;
  let newChar;

  return string.split('')
         .map(char => {
           if (/[a-z]/i.test(char)) {
             if (needUpper) {
               newChar = char.toUpperCase();
             }
             else {
               newChar = char.toLowerCase()
             }

             needUpper = !needUpper;
             return newChar;
           } else {
             return char;
           }
         }).join('');
}

console.log(staggeredCase('I Love Launch School!'));        // "I lOvE lAuNcH sChOoL!"
console.log(staggeredCase('ALL CAPS'));                     // "AlL cApS"
console.log(staggeredCase('ignore 77 the 444 numbers'));    // "IgNoRe 77 ThE 444 nUmBeRs"
