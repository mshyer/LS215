//PROBLEM: 3 rows infinite columns
//  - The coordinate system has x and y values. To make the cipher:
//  - The x position always increases by 1, the y position alternates.
//  - Y alternation: 0 1 2 1 0 1 2 1 0 etc.
//  - The length of the cipher (columns) should be equal to the string
//    -Therefore, to make the cipher, you can fill in three rows
//    - of dots . to the length of the string.
//  -SO FIRST WE MAKE THE CIPHER TABLE
//  -Then we take each of the rows and reduce them to three strings
//  - The three strings combined is the cipher output.
//
//DECODING:
//  -note: I think we should be returning output text...
//  -Then we use different methods to fill three arrays of dots.
//    -Create a sparse array of length length string
//    - Add a letter to every fourth position starting at the first
//      -Use shift
//      -Do this until we hit the end of the second array of dots
//    - Then add another letter every second space to second sparse a
//      -starting with 2 until end of array.
//    -Then add another letter every FOURTH
//      -starting with 3 until end of array.
// Data structure: working with nested arrays of letters 
//   and unnested arrays of dots.
//
// NOTES: remove spaces from input
// INPUT: string
// OUTPUT: print to console
//
// ALGORITHM: 
// 1. write method dotArrayFrom theat returns a nested array of
//   - 3 dot arrays length string
// 2. break the input string into chars
// 3. initialize a counter x position to 0
// 4. initialize a counter y position to 0
// 5. write method increment y that increments y from 1 to 3 and then back again.
//    -If the sign is positive
//      -increment by 1
//      -if you hit 3, turn the sign negative
//    -If the sign is negative
//      -degrement y by 1
//      -if you hit 1, turn the sign positive
// 6. for the length of the string:
//    - to nested array at Y POSITION, and X POSITION, add a letter
//    - Then use the increment Y function taking the current y and sign as args.
//    -Also increment x by 1
// log all 3 of the nested arrays
//
// DECRYPTING:
//   -Create 3 dot arrays again of length length
//   - split the string into chars array
//   -create 3 helper methods
//   1. fillFirstNested(the chars)
//     loop until the end of the array (nested0):
//       - Set counter to 0.
//       - if the counter is equal to the current array index:
//         -fill in the array with letter using SHIFT to MUTATE
//         -increment the counter by 4
//   2. fillSecondNested(the chars)
//     loop until end of nested array[1]
//       -set counter to 1
//       -if the idx == counter
//         -fill in with letter using SHIFT
//         -increment counter by 2
//   3. fillThirdNested(the chars)
//     loop until end 2
//       -set counter to 2
//       -if the idx == counter
//         -fill in using SHIFT
//         -increment counter by 4
//   -Log each of the 3 nested arrays

function dotArrayFrom(string) {
  return [
    Array(string.length).fill('.'),
    Array(string.length).fill('.'),
    Array(string.length).fill('.'),
  ];
}

function incrementY(currentY, sign) {
  return sign ? currentY + 1 : currentY - 1;
}

function readCipher(fence) {
  console.log(fence[0].join(' '));
  console.log(fence[1].join(' '));
  console.log(fence[2].join(' '));
}

function fenceCipher(string) {
  string = string.replace(/\s/g, '');
  let nestedArray = dotArrayFrom(string);
  let chars = string.split('');
  let x = 0;
  let y = 0;
  let sign = true;
  for (let idx = 0; idx < string.length; idx += 1) {
    nestedArray[y][x] = chars.shift();
    x += 1;
    y = incrementY(y, sign);
    if (y === 2 || y === 0) {
      sign = !sign;
    }
  }

  return readCipher(nestedArray);
}

function fillArray(array, start, increment, list) {
  let counter = start;
  for (let idx = 0; idx < array.length; idx += 1) {
    if (idx === counter) {
      array[counter] = list.shift();
      counter += increment;
    }
  }
}

function fillArrays(nestedArray, chars) {
  fillArray(nestedArray[0], 0, 4, chars);
  fillArray(nestedArray[1], 1, 2, chars);
  fillArray(nestedArray[2], 2, 4, chars);
  return undefined;
}

function fenceUncipher(string) {
  string = string.replace(/\s/g, '');
  let nestedArray = dotArrayFrom(string);
  let chars = string.split('');
  fillArrays(nestedArray, chars);
  return readCipher(nestedArray);
}

console.log(fenceCipher('WE ARE DISCOVERED FLEE AT ONCE')); //outputs three lines

console.log(fenceUncipher('WECRLTEERDSOEEFEAOCAIVDEN')); // Outputs the same three lines.
