function myForEach(array, callback) {
  for (let idx = 0; idx < array.length; idx += 1) {
    callback(array[idx], idx, array);
  }
  return undefined;
}

let someArr = ['haha', 'ben', 'and', 'jerry'];

myForEach(someArr, console.log);

let min = Infinity;

let getMin = value => (min = value <= min ? value : min);

someArr = [1, 2, 3, 0, 3];

myForEach(someArr, getMin);

console.log(min);
