let text = 'The quick brown fox jumps over the lazy dog.';

function capitalize(text) {
  // break original string into words
  let textArray = text.split(' ');

  // declare result array and perform list processing - transformation
  let newTextArray = textArray.map(word => {
    return word[0].toUpperCase() + word.slice(1);
  });

  // join together
  return newTextArray.join(' ');
}

console.log(capitalize(text));    // "The Quick Brown Fox Jumps Over The Lazy Dog."
