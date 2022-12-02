'use strict';
// Problem: Given a string of sentences, figure out the sentence with the most words
//   Log the sentence and its word count to the console.
// Input: String of sentences. Sentence begins with word char, ends !?.
// Output: undefined/print to console/side effect.
//   Note: word is any sequence of 1 or more chatacters that are not space or .?!
// Algorithm: 
// 1. Get all the sentences from the string
//   Use global match method with regex to get sentences into array.
//   Regex: \w.*[!.?]?
// 2. Find the longest sentence
//   Reduce the sentences to an object. 
//     The object has the sentence as key and the word count as the value
// 3. Find the longest word
//   This will be the max of the values in the object (return the sentence key)
// 4. Print both of these to the console
//
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
  ' here have thus far so nobly advanced.ZIt is rather for' +
  ' us to be here dedicated to the great task remaining' +
  ' before us -- that from these honored dead we take' +
  ' increased devotion to that cause for which they gave' +
  ' the last full measure of devotion -- that we here highly' +
  ' resolve that these dead shall not have died in vain' +
  ' -- that this nation, under God, shall have a new birth' +
  ' of freedom -- and that government of the people, by' +
  ' the people, for the people, shall not perish from the' +
  ' earth.';

//const REGEX = /\w[^!.?]+?[!.?]/g;
//const getSentences = text => text.match(REGEX);


const LOOKBEHIND_REGEX = /(?<=[?.!])/g;

// Split the text into array of sentences using lookbehind regex
const getSentences = function(text) {
  return (text.split(LOOKBEHIND_REGEX).map(
    sentence => sentence.trim()
  ));
};

const wordCount = sentence => sentence.split(' ').length;

// Helper callback function to be used with sort function
const byLongest = (s1, s2) => wordCount(s2) - wordCount(s1);

// Sorts an array of sentences by length, returning the longest
const getLongestSentence = sentences => [...sentences].sort(byLongest)[0];


function logLongestSentence(text) {
  let sentences = getSentences(text);
  let longestSentence = getLongestSentence(sentences);

  console.log(longestSentence);
  console.log(`The longest sentence has ${wordCount(longestSentence)} words.`);
}

logLongestSentence(longText);
logLongestSentence("     I yam what I yam! Hi there!");
logLongestSentence("What's up, \"Doc\"?    The brown fox is superlative!");

logLongestSentence("The brown fox is superlative! To be or not to be?");
logLongestSentence("To be or not to be? The brown fox is superlative!");
