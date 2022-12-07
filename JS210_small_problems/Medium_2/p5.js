// odd number multiple 7 is FEATURED number, all digits once. 
// Program finds the next featured number after the number
// Data structure: numbers
// Algorithm:
// 1. Find the next multiple of seven after the number
//   - add one until divisible by 7
// 2. loop plus 7, returning the first feature number you find.
//
const noRepeatDigits = num => {
  num = String(num);
  return !num.split('').some((digit, idx) => num.slice(idx + 1).includes(digit));
};

//console.log(noRepeatDigits(559));
//console.log(noRepeatDigits(567));

function isFeature(number) {
  return noRepeatDigits(number)
    && (number % 2 === 1)
    && number % 7 === 0
    && number < 9876543210;
}

// console.log(isFeature(49));
// console.log(isFeature(133));
// console.log(isFeature(97));

function getNextSeven(num) {
  do {
    num += 1;
  } while (num % 7 !== 0);
  return num;
}

function featured(num) {
  let nextSeven = getNextSeven(num);
  let current = nextSeven;
  if (num >= 9876543201) {
    return 'There is no possible number that fulfills the requirements';
  }

  while (!isFeature(current)) {
    current += 7;
  }
  return current;
}

console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9876543186));   // 9876543201
console.log(featured(9876543200));   // 9876543201
console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."
