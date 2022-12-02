// Problem: Given a string, return an array with
//         each word followed by word length
// Edge Cases: Empty String, no argument: function returns []
// Input: String
// Output: Array of string words plus length as string.
// Algorithm: Arrays 
//   1. Split into words
//   2. Map the array of words
//     a. the word plus the word's length string
//   3. Return the mapped array/

function wordLengths(string) {
  if (!arguments[0] || string === '') {
    return [];
  }

  let words = string.split(' ');
  let mapped = words.map(word => {
    return word + ` ${word.length}`;
  });

  console.log(mapped);
}

wordLengths('cow sheep chicken');
// ["cow 3", "sheep 5", "chicken 7"]

wordLengths('baseball hot dogs and apple pie');
// ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

wordLengths("It ain't easy, is it?");
// ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

wordLengths('Supercalifragilisticexpialidocious');
// ["Supercalifragilisticexpialidocious 34"]

wordLengths('');      // []
wordLengths();        // []

