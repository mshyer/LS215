const longText = 'Four score and seven years ago our fathers brought forth' +
  ' on this continent a new nation, conceived in liberty, and' +
  ' dedicated to the proposition that all men are created' +
  ' equal.' +
  ' Now we are engaged in a great civil war, testing whether' +
  ' that nation, or any nation so conceived and so dedicated,' +
  ' can long endure. We are met on a great battlefield of that' +
  ' war. We have come to dedicate a portion of that field, as' +
  ' a final resting place for those who here gave their lives' +
  ' that that nation might live. It is altogether fitting and' +
  ' proper that we should do this.' +
  ' But, in a larger sense, we can not dedicate, we can not' +
  ' consecrate, we can not hallow this ground. The brave' +
  ' men, living and dead, who struggled here, have' +
  ' consecrated it, far above our poor power to add or' +
  ' detract. The world will little note, nor long remember' +
  ' what we say here, but it can never forget what they' +
  ' did here. It is for us the living, rather, to be dedicated' +
  ' here to the unfinished work which they who fought' +
  ' here have thus far so nobly advanced. It is rather for' +
  ' us to be here dedicated to the great task remaining' +
  ' before us -- that from these honored dead we take' +
  ' increased devotion to that cause for which they gave' +
  ' the last full measure of devotion -- that we here highly' +
  ' resolve that these dead shall not have died in vain' +
  ' -- that this nation, under God, shall have a new birth' +
  ' of freedom -- and that government of the people, by' +
  ' the people, for the people, shall not perish from the' +
  ' earth.';


const shorter = 'Four score and seven years ago our fathers brought forth on this continent a new nation, conceived in liberty, and dedicated to the proposition that all men are created equal.';

// Program determines the sentence with the most words in a text. 
//   Sentences end with . ! ?
//   Sentences begin with a "Word Character" ie a-z0-9_
//   Any sequence of non-space and non-.!? characters are words. 
//   so a sentence is /w followed by any [^ .!?]
// Algorithm:
//   1. iterate until the length of the text is 0 (while loop)
//      find the index of the next [ .?!]
//      add a splice of the string to that index to a new array of sentences
//      find index of the next word character. Splice the string if it is not 0
//   2. Loop through the array of sentences
//      temporarilt adjust the string to not have !?.
//        Then split by spaces
//        Count the length of the array.
//          If it is The longest, add the index to the LONGEST var
//   3. Now that we have the longest var, log that sentence to the console.

function longestSentence(text) {
  let sentences = getSentences(text);
  let wordCounts = getWordCounts(sentences);
  let maxWordCount = Math.max(...wordCounts);
  let longestSentence = sentences[wordCounts.indexOf(maxWordCount)];
  console.log(longestSentence);
  console.log();
  console.log('The longest sentence has ' + maxWordCount + ' words.');
}

function getSentences(text) {
  let sentences = [];
  let startSentenceIdx;
  let endSentenceIdx;
  while (text.length > 0) {
    startSentenceIdx = text.search(/\w/);
    endSentenceIdx = text.search(/[!.?]/);
    sentences.push(text.slice(startSentenceIdx, endSentenceIdx + 1));
    text = text.slice(endSentenceIdx + 1);
  }

  return sentences;
}

function getWordCounts(sentences) {
  return sentences.map(sentence => sentence.split(' ').length);
}

longestSentence(longText);
console.log();
console.log(longestSentence(shorter));

