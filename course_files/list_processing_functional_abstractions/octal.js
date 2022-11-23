function octalToDecimal(numString) {
  // Input: string representing an octal number
  // Output: number in base 10
  // steps:
  //  1:  we want to get the number in reverse. 
  //     split the string into digits arr and reverse it
  //  2: map the digit array to the value of the digits multiplied by powers of 8
  //  3: reduce these values to a single return value
  let digits = numString.split('').reverse();
  let decimalValues = digits.map(function(element, idx) {
    return parseInt(element) * (Math.pow(8, idx));
  });
  return decimalValues.reduce((acc, num) => acc + num);
}

console.log(octalToDecimal('233'));

