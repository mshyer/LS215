const myFilter = function(array, callback) {
  let selection = [];
  for (let idx = 0; idx < array.length; idx += 1) {
    if (callback(array[idx], idx, array)) {
      selection.push(array[idx]);
    }
  }
  return selection;
};

let cb = function(element, idx, arr) {
  console.log(`currently at index ${idx} in ${arr}`);
  return element <= 5;
};

let someArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(myFilter(someArr, cb));

function isMultipleOfThreeOrFive(element) {
  return element % 5 === 0 || element % 3 === 0;
}

function multiplesOfThreeOrFive(values) {
  return myFilter(values, isMultipleOfThreeOrFive);
}

console.log(multiplesOfThreeOrFive(someArr));
