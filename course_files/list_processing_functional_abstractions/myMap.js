function myMap(array, func) {
  let mapped = [];
  // array.forEach(function(element) {
  //   mapped.push(func(element));
  // });
  array.forEach(element => mapped.push(func(element)));

  return mapped;
}

let someArr = [1, 2, 3, 4];

let plusOne = num => num + 1;
console.log(myMap(someArr, plusOne));

let getTitles = function(books) {
  return myMap(books, getTitle);
};

function getTitle(book) {
  return book.title;
}

let books = [
  {
    title: 'JavaScript and JQuery: Interactive Front-End Web Development',
    author: 'Jon Ducket',
    edition: '1st',
  },
  {
    title: 'Eloquent JavaScript: A Modern Introduction to Programming',
    author: 'Haverbeke',
    edition: '2nd',
  },
  {
    title: "Learning Web Design: A Beginner's Guide to HTML, CSS, JavaScript, and Web Graphics",
    author: 'Jennifer Niederst Robbins',
    edition: '4th',
  },
];

console.log(getTitles(books));
