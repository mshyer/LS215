let text = 'The quick brown fox jumps over the lazy dog.';

function countWordInTextDEPRECATED(word, text) {
  // `replace` creates a new string
  let textArray = text.replace(/[^a-z ]/ig, '').split(' ');

  // filter/select only the needed words
  return textArray.filter(wordInText => {
    return word.toLowerCase() === wordInText.toLowerCase();
  }).length;
}

function countWordInText(word, text) {
  let regx = new RegExp(word, 'gi');
  console.log(regx);
  return text.match(regx).length;
}
console.log(countWordInText('the', text));    // 2
console.log(countWordInText('dog', text));    // 1
