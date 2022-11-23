function myReduce(array, func, initial) {
  let idx = 0;
  if (initial === undefined) {
    initial = array[0];
    idx += 1;
  }
  let accumulator = initial;
  // for each element in the array, the result of the callback
  // function becomes the new accumulator
  for ( ; idx < array.length; idx += 1 ) {
    accumulator = func(accumulator, array[idx]);
  }
  return accumulator;
}

let adder = function(accumulator, currentElement) {
  return accumulator + currentElement;
};

let someArr = [5, 12, 15, 1, 6];

console.log(myReduce(someArr, adder));

let smallest = (result, value) => (result <= value ? result : value);
console.log(myReduce([5, 12, 15, 1, 6], smallest));           // 1);


function longestWord(words) {
  //return myReduce(words, longerWord);
  return myReduce(words, function(accumulator, currentWord) {
    return currentWord.length >= accumulator.length ? currentWord : accumulator;
  });
}

function longerWord(accumulator, word) {
  return word.length >= accumulator.length ? word : accumulator;
}

let wordsArr = ['abc', 'launch', 'targets', ''];

console.log(longestWord(wordsArr));
