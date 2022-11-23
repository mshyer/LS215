// Problem: given an array representing purchase orders, turn into a cart
// Input: nested array.
// Output: flat array
// Algorithm:
//   Using flatMAP:
//     set quantity to the value of the number at index 1 in nested arr
//     for loop within mapi, loop until quantity, create an array of strings

function buyFruit(basket) {
  //return basket.flatMap(function(subArray) {
  //  let quantity = subArray[1];
  //  let output = [];
  //  for (let idx = 0; idx < quantity; idx += 1) {
  //    output.push(subArray[0]);
  //  }
  //  return output;
  //});
  return basket.flatMap(([fruit, quantity]) => Array(quantity).fill(fruit));
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
