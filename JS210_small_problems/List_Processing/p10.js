const transactions = [
  { id: 101, movement: 'in',  quantity:  5 },
  { id: 105, movement: 'in',  quantity: 10 },
  { id: 102, movement: 'out', quantity: 17 },
  { id: 101, movement: 'in',  quantity: 12 },
  { id: 103, movement: 'out', quantity: 15 },
  { id: 102, movement: 'out', quantity: 15 },
  { id: 105, movement: 'in',  quantity: 25 },
  { id: 101, movement: 'out', quantity: 18 },
  { id: 102, movement: 'in',  quantity: 22 },
  { id: 103, movement: 'out', quantity: 15 },
];

// Input: id number and array of objects
// Output: boolean t/f
// Algorithm:
//   Get the matching transactions using transactionsFor
//   reduce the array of matches
//     acc set to 0
//     if movement in, acc + quantity
//     if movement out, acc - quantity
//   return check if the reduced number is > 0

function isItemAvailable(idNum, transactions) {
  let matches = transactionsFor(idNum, transactions);
  let sum = matches.reduce((sum, {movement, quantity}) => {
    if (movement === 'in') {
      return sum + quantity;
    } else {
      return sum - quantity;
    }
  }, 0);

  return sum > 0;
}

console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true

function transactionsFor(idNum, transactions) {
  return transactions.filter(({id}) => id === idNum);
}

// console.log(transactionsFor(101, transactions));

//return true/fase if inventory item is avalable


