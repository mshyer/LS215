// Problem: calculate the number of friday 13ths in a given year
// Input: Integer greater than 1752
// Output: number
// Data Structure: Date objects and increment using loops
// Algorithm:
// 1. Convert input to date object
//   -create template `1/1/${year}`
//   -create a new date from that template
// 2. Loop until idx > 365
//   -check if day is friday (5) and date (getDate) is 13
//   -if it is, add to counter var
//   -TEST CASE: make sure the last date logged to console is the first day of new year
//   increment date by 1
// 3. return the counter variable
//

function fridayThe13ths(year) {
  let dateString = `1/13/${year}`;
  let dateCounter = new Date(dateString);

  let friday13Count = 0;
  for (let idx = 0; idx < 11; idx += 1) {
    if ( dateCounter.getDay() === 5) {
      friday13Count += 1;
    }
    dateCounter.setMonth(dateCounter.getMonth() + 1);
  }

  return friday13Count;
}

console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2
