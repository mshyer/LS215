function anagram(word, wordsArr) {
  return wordsArr.filter((ele) =>  isAnagram(word, ele));
}

function isAnagram(target, candidate) {
  // returns true/false if all of the characters are the same.
  // default sort behavior is by string comparison
  // split both target and candidate into characters array
  // filter default
  // Compare that they are equal
  let targetChars = target.split('').sort();
  let candidateChars = candidate.split('').sort();
  return candidateChars.every((char, idx) => char === targetChars[idx])
    && targetChars.length === candidateChars.length;
}
console.log(anagram('listen', ['enlists', 'google', 'inlets', 'banana']));  // [ "inlets" ]
console.log(anagram('listen', ['enlist', 'google', 'inlets', 'banana']));
