'use strict';
let bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silver mt. zion', country: 'Spain', active: true },
];

function processBands(data) {
  // set forEACH band countries to canada
  // forEach object, call a custom capitalize method on the band name
  //   CUSTOM CAPITALIZE METHOD: split name into words array. 
  //     Map the array so that word is capital first letter plus slice 1..end
  //     -return the array, joined
  //  then, for each object, remove commas from the band name
  //data.forEach(obj => setCanada(obj));
  //data.forEach(obj => {
  //  obj.name = capitalizeName(obj.name);
  //  obj.name = removeCommas(obj.name);
  //});
  return data.map(function(obj) {
    return {
      country: 'Canada',
      name: removeCommas(capitalizeName(obj.name)),
      active: obj.active,
    };
  });
}

function setCanada(obj) {
  obj['country'] = 'canada';
}

function capitalizeName(name) {
  let words = name.split(' ');
  words = words.map(word => {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
  });
  return words.join(' ');
}

function removeCommas(name) {
  return name.replace(/[.]/g, '');
}

console.log(processBands(bands));
console.log(bands);
