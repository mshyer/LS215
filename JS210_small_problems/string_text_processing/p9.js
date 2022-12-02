// Problem: given a word and text, count how many times the word appears in text
//   Notes: Word and text always provided.
//   Question: What about empty string?
// Input: two strings
// Output: Number (integer)
// Algorithm: 
//   1. convert the input string to global regex
//   2. use match function length to count the times it occurs in text
//     If no match, account for the null result
//   3. return that number

function searchWord(word, text) {
  let regx = new RegExp(`\\b${word}\\b`, 'gi');
  let result = text.match(regx);

  return result ? result.length : 0;
}

const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

console.log(searchWord('sed', text));      // 3
console.log(searchWord('qui', text));      // should return 4, NOT 13);
