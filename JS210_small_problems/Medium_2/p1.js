// Input: string (non-empty)
// Output: object with 3 properties
// Data structure: regex
// Algorithm:
// Regex:
//   - Use match and lengt
//   1. Count lowercase (/[a-z]/g)
//   2. uppercase same as above
//   3. neither: /[^a-zA-Z]/g
// Then once you have the counts, divide them by str length to get percentage
//   -then use toFixed to get 2 decimal places
//   -Add these percentages to an object
//   -return the object

function letterPercentages(string) {
  let lowercase = string.match(/[a-z]/g) || [];
  let uppercase = string.match(/[A-Z]/g) || [];
  let neither = string.match(/[^a-z]/gi) || [];

  let lcPercent = (lowercase.length / string.length * 100).toFixed(2);
  let ucPercent = (uppercase.length / string.length * 100).toFixed(2);
  let nePercent = (neither.length / string.length * 100).toFixed(2);

  return {
    lowercase: lcPercent,
    uppercase: ucPercent,
    neither: nePercent,
  };
}

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }^

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }

