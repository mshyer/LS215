function isAllUnique(string) {
  // divide the string into characters
  // iterate through the characters
  // For each char, if it is in a dictionary of used characters, return false
  let chars = string.toLowerCase().replace(/ /g, '').split('');
  console.log(chars);
  let dict = {};
  for (let idx = 0; idx < chars.length; idx += 1) {
    if (dict[chars[idx]]) {
      return false;
    } else {
      dict[chars[idx]] = true;
    }
  }
  return true;
}

console.log(isAllUnique('The quick brown fox jumped over a lazy dog'));  // false
console.log(isAllUnique('123,456,789'));                                 // false
console.log(isAllUnique('The big apple'));                               // false
console.log(isAllUnique('The big apPlE'));                               // false
console.log(isAllUnique('!@#$%^&*()'));                                  // true
console.log(isAllUnique('abcdefghijklmnopqrstuvwxyz'));                  // true
