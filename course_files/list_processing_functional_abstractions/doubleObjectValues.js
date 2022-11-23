function doubleObjectValues(object) {
  let objEntries = Object.entries(object);
  let objMapped = objEntries.map(([key, val]) => [key + 'burger', val * 2]);

  return Object.fromEntries(objMapped);
}

console.log(doubleObjectValues({ a: 1, b: 2, c: 3 }));

function keepEvenValues(object) {
  let entries = Object.entries(object);
  let evenEntries = entries.filter(([_, value]) => value % 2 === 0);

  return Object.fromEntries(evenEntries);
}

let someObj = { a: 1, b: 2, c: 3 };

console.log(keepEvenValues(someObj));
