function processReleaseData(data) {
  // function returns an array of objects
  // Input: array of objects
  // Step 1:
  //   filter the input and select only objects that have both ID and title keys
  // Step 2:
  //   Reduce each object to a new object that only has the correct keys
  //     Do this with map and then reduce.
  //  Step 3:
  //    Return the altered array of objects
  let selection = data.filter(hasIDAndTitle);
  selection = selection.map(selectIDTitle);
  return selection;
}

function hasIDAndTitle(movie) {
  return Object.keys(movie).includes('id') && Object.keys(movie).includes('title');
}

function selectIDTitle(obj) {
  // let entries = Object.entries(obj);
  // let result = entries.filter(([key,_]) => key === 'id' || key === 'title');
  // return Object.fromEntries(result);
  return {
    id: obj.id,
    title: obj.title,
  };
}

let newReleases = [
  {
    'id': 70111470,
    'title': 'Die Hard',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/DieHard.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [4.0],
    'bookmark': [],
  },
  {
    'id': 654356453,
    'boxart': 'http://cdn-0.nflximg.com/images/2891/BadBoys.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [5.0],
    'bookmark': [{ id:432534, time:65876586 }],
  },
  {
    'title': 'The Chamber',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/TheChamber.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [4.0],
    'bookmark': [],
  },
  {
    'id': 675465,
    'title': 'Fracture',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/Fracture.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [5.0],
    'bookmark': [{ id:432534, time:65876586 }],
  },
];

console.log(processReleaseData(newReleases));
