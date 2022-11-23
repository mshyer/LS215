const totalArea = function(rectangles) {
  // map the rectangles to the multiple of each
  // reduce to the sum of the multiples
  let areas = rectangles.map(([length, width]) => length * width);
  return areas.reduce((accumulator, element) => accumulator + element);
};
let rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

console.log(totalArea(rectangles));    // 141

const totalSquareArea = function(rectangles) {
  let squares = rectangles.filter(([length, width]) => length === width);
  // let areas = squares.map(([length, width]) => length * width);
  // return areas.reduce((accumulator, element) => accumulator + element);
  return totalArea(squares);
};

console.log(totalSquareArea(rectangles));
