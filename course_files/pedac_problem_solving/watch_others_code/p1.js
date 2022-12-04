// Input: string of digits and possibly other characters
//   - If less than 10 digits, then bad input
//   - Special non-digit chars  must be ignored
//   - If 10 digits, it's a good number
//   - If more than 11 digits, bad number
//   - If 11 digits and 1st number is 1, it's good
//      -however, need to discard the 1. 
//      -If not 1 (ex 2 212 684 7792) then it's bad.
// Output: 10 digit string
// Data structure: 
//   String/
// Algorithm:
//   a. Convert input to string
//   1. Remove bad characters from the string
//     -str.replace(/[^0-9]/g, '')
//   2. Check if remaining digits are valid, if not return 10 02
//     - if length 10 or if length 11 && first digit equals 1
//   3. else, return (if length 11, 1-10) if (length 10, whole string)
// NOTE: if the input is number, convert to string 

function removeBadChars(num) {
  return num.replace(/[^0-9]/g, '');
}

function invalid(number) {
  return ( number.length < 10 ||
           number.length > 11 ||
           (number.length === 11 && number[0] !== '1'));
}

function cleanNumber(phoneNum) {
  let number = String(phoneNum);
  number = removeBadChars(number);
  if (invalid(number)) {
    return '0000000000';
  } else if (number.length === 11) {
    return number.slice(1);
  } else {
    return number;
  }
}

// TEST CASES
console.log(cleanNumber(9177044)); // 0000000000
console.log(cleanNumber(9177045854)); //'9177045864'
console.log(cleanNumber('9^$^1$&&$7704-5864')); // '9177045864
console.log(cleanNumber('19177045864')); // '9177045864
console.log(cleanNumber('119177045864')); // '0000000000'
console.log(cleanNumber('29177045864')); // '0000000000'

