const LOOKBEHIND_REGEX = /(?<=[?.!])/g;

// Split the text into array of sentences using lookbehind regex
const getSentences = function(text) {
  return (text.split(LOOKBEHIND_REGEX).map(
    sentence => sentence.trim()
  ));
};

// return a count of words in a sentence`
const wordCount = sentence => sentence.split(' ').length;

// Helper callback function to be used with sort function
const byLongest = (s1, s2) => wordCount(s2) - wordCount(s1);

// Sorts an array of sentences by length, returning the longest
const getLongest = sentences => [...sentences].sort(byLongest)[0];


function longestSentence(text) {
  let sentences = getSentences(text);
  let longest = getLongest(sentences);

  console.log(longest);
  console.log(`The longest sentence has ${wordCount(longest)} words.`);
}

let longText = 'Four score and seven years ago our fathers brought forth' +
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

longestSentence(longText);

longestSentence(longText);
longestSentence("     I yam what I yam! Hi there!");
longestSentence("What's up, \"Doc\"?    The brown fox is superlative!");

longestSentence("The brown fox is superlative! To be or not to be?");
longestSentence("To be or not to be? The brown fox is superlative!");