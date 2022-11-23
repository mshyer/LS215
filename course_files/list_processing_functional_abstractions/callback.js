function iterate(array, callback) {
  for (let i = 0; i < array.length; i += 1) {
    callback(array[i]);
  }
}

let arr = [1, 2, 3, 4, 5, 'poatoa'];

function logger(number) {
  console.log(number);
}

iterate(arr, logger);

