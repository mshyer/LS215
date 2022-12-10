// Input: odd integer greater than or equal to 7
// Output: log to the console n lines of strings
// Data structure: string formed by a loop
// Insights: 
//   -Each line spacing changes
//   -Each line has three stars
//   -Beginning with stars at 0 and -1, (n - 2 )/ 2 is the space between
//      -The end stars and the center star
//      -Each subsequent line, the stars begin one index later
//      -The amount of space decreases by 2
//   -The middle line has n stars and is at point Math.ceil(n / 2)
//   -After the midpoint:
//     - the lines go reversed
// Algorithm:
//  -const NUM_STARS = 3
//  -UNTIL THE MIDPOINT:
//   -init a string
//   -middle spaces = (n - 3 + (2 * line number)) / 2
//   -left spaces = line number
//     -add spaces until left spaces
//   -then add a star
//   -Then add MIDDLE SPACES spaces
//   Then add a star
//   Then add MIDDLE SPACES spaces
//   Then add the final star
// -THEN ADD THE MIDPOINT LINE (* repeat n times)
// -AFTER THE MIDPOINT, to n:
//   -init a string
//   -line number = iterating index
//   -LEFT SPACES = n - (3 + 2 * line number) / 2
//   -Middle spaces = line number (starting zero idx)
//   -ADD the LEFT SPACES
//   -add a star
//   ADD midle spaces
//   -add star
//   -ADD MIDDLE SPACES AGAIN
//   -add a final star
const NUM_STARS = 3;

function topHalfLine(n, idx) {
  let str = '';
  let MID_SPACES = (n - (NUM_STARS + (2 * idx))) / 2;
  let LEFT_SPACES = idx;
  str += ' '.repeat(LEFT_SPACES);
  str += '*';
  str += ' '.repeat(MID_SPACES);
  str += '*';
  str += ' '.repeat(MID_SPACES);
  str += '*';
  return str;
}

function middleLine(n) {
  return '*'.repeat(n);
}

function bottomHalfLine(n, idx) {
  let str = '';
  let MID_SPACES = idx;
  let LEFT_SPACES = (n - (NUM_STARS + (2 * idx))) / 2;
  str += ' '.repeat(LEFT_SPACES);
  str += '*';
  str += ' '.repeat(MID_SPACES);
  str += '*';
  str += ' '.repeat(MID_SPACES);
  str += '*';
  return str;
}

function star(n) {
  const N_STARS = 3;
  const MID = Math.ceil(n / 2);
  for (let idx = 0; idx < MID - 1; idx += 1) {
    console.log(topHalfLine(n, idx));
  }
  console.log(middleLine(n));
  for (let idx = 0; idx < (MID - 1); idx += 1) {
    console.log(bottomHalfLine(n, idx));
  }
}

//star(9);
//star(7);
star(11);
