const myOwnEvery = function(array, func) {
  for (let idx = 0; idx < array.length; idx += 1) {
    if (!func(array[idx], idx, array)) {
      return false;
    }
  }
  return true;
};

let isAString = value => typeof value === 'string';

let miscArr = [1, 2, 'haha', 'boo'];
let strArr = ['these', 'are', 'all', 'strings'];

console.log(myOwnEvery(miscArr, isAString));
console.log(myOwnEvery(strArr, isAString));

function elementIsNumber(element) {
  return typeof element === 'number' && !Number.isNaN(element);
}

let areAllNumbers = function(array) {
  return myOwnEvery(array, elementIsNumber);
};

console.log(areAllNumbers(miscArr));

let numArr = [1, 2, 3, 4];
console.log(areAllNumbers(numArr));
console.log(areAllNumbers([1, 5, 6, 7, NaN]));
