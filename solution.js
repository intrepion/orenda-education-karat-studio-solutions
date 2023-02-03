"use strict";

const songs1 = [
  'Down By the River',
  'River of Dreams',
  'Take me to the River',
  'Dreams',
  'Blues Hand Me Down',
  'Forever Young',
  'American Dreams',
  'All My Love',
  'Cantaloop',
  'Take it All',
  'Love is Forever',
  'Young American',
  'Every Breath You Take'
];
const song1_1 = 'Every Breath You Take';
const song1_2 = 'Dreams';
const song1_3 = 'Blues Hand Me Down';
const song1_4 = 'Cantaloop';

const songs2 = [
  'Bye Bye Love',
  'Nothing at All',
  'Money for Nothing',
  'Love Me Do',
  'Do You Feel Like We Do',
  'Bye Bye Bye',
  'Do You Believe in Magic',
  'Bye Bye Baby',
  'Baby Ride Easy',
  'Easy Money',
  'All Right Now'
];
const song2_1 = 'Bye Bye Bye';
const song2_2 = 'Bye Bye Love';

const songs3 = [
  'Love Me Do',
  'Do You Believe In Magic',
  'Magic You Do',
  'Magic Man',
  'Man In The Mirror'
];
const song3_1 = 'Love Me Do';

const findPair = (songTimes) => {
  let newSongTimes = [];
  for(let i = 0; i < songTimes.length; i += 1)
  {
    newSongTimes.push([]);
    newSongTimes[i].push(songTimes[i][0]);
    let parts = songTimes[i][1].split(':');
    let minutes = parseInt(parts[0]);
    let seconds = parseInt(parts[1]);
    newSongTimes[i].push((minutes * 60) + seconds)
  }

  for(let i = 0; i < newSongTimes.length; i += 1)
  {
    for (let j = 0; j < newSongTimes.length; j += 1)
    {
      if (i < j)
      {
        if (newSongTimes[i][1] + newSongTimes[j][1] === 420)
        {
          return [newSongTimes[i][0], newSongTimes[j][0]];
        }
      }
    }
  }
  
  return [];
}

const getLongest = (currentPlaylist, remainingSongs) => {
  if (remainingSongs.length === 0)
  {
    return currentPlaylist;
  }
  
  let currentWords = currentPlaylist[currentPlaylist.length - 1].split(' ');
  let currentLastWord = currentWords[currentWords.length - 1];
  
  let possibleSongs = []

  for(let i = 0; i < remainingSongs.length; i += 1)
  {
    let songWords = remainingSongs[i].split(' ');
    if (currentLastWord.localeCompare(songWords[0]) === 0)
    {
      let newCurrentPlaylist = currentPlaylist.concat([remainingSongs[i]]);
      let newRemainingSongs = remainingSongs.filter(song => song.localeCompare(remainingSongs[i]) !== 0);
      possibleSongs.push(getLongest(newCurrentPlaylist, newRemainingSongs));
    }
  }
  
  var longestLength = 0;
  let longestPlaylist = [];
    
  for(let i = 0; i < possibleSongs.length; i += 1)
  {
    let length = possibleSongs[i].length;
    if (length > longestLength) {
      longestLength = length;
      longestPlaylist = possibleSongs[i].concat([]);
    }
  }
  
  if (longestLength === 0)
  {
    return currentPlaylist;
  }
  
  return longestPlaylist;
}

const chaining = (songs, firstSong) => {
  let newSongs = [];
  for(let i = 0; i < songs.length; i += 1)
  {
    if (songs[i].localeCompare(firstSong) !== 0)
    {
      newSongs.push(songs[i]);
    }
  }
  
  return getLongest([firstSong], newSongs)
  
}

let longestPlaylist = chaining(songs1, song1_1);
console.log(longestPlaylist)

console.log(chaining(songs1, song1_1)); // => ['Every Breath You Take', 'Take it All', 'All My Love', 'Love is Forever', 'Forever Young', 'Young American', 'American Dreams', 'Dreams']
console.log(chaining(songs1, song1_2)); // => ['Dreams']
console.log(chaining(songs1, song1_3)); // => ['Blues Hand Me Down', 'Down By the River', 'River of Dreams', 'Dreams']
console.log(chaining(songs1, song1_4)); // => ['Cantaloop']
console.log(chaining(songs2, song2_1)); // => ['Bye Bye Bye', 'Bye Bye Baby', 'Baby Ride Easy', 'Easy Money', 'Money for Nothing', 'Nothing at All', 'All Right Now']
console.log(chaining(songs2, song2_2)); // => ['Bye Bye Love', 'Love Me Do', 'Do You Feel Like We Do', 'Do You Believe in Magic']
console.log(chaining(songs3, song3_1)); // => ['Love Me Do', 'Do You Believe in Magic', 'Magic Man', 'Man In The Mirror']

"use strict";

const logs1 = [
  ["200", "user_1", "resource_5"],
  ["3", "user_1", "resource_1"],
  ["620", "user_1", "resource_1"],
  ["620", "user_3", "resource_1"],
  ["34", "user_6", "resource_2"],
  ["95", "user_9", "resource_1"],
  ["416", "user_6", "resource_1"],
  ["58523", "user_3", "resource_1"],
  ["53760", "user_3", "resource_3"],
  ["58522", "user_22", "resource_1"],
  ["100", "user_3", "resource_6"],
  ["400", "user_6", "resource_2"]
];

const logs2 = [
  ["357", "user", "resource_2"],
  ["1262", "user", "resource_1"],
  ["1462", "user", "resource_2"],
  ["1060", "user", "resource_1"],
  ["756", "user", "resource_3"],
  ["1090", "user", "resource_3"]
];

const logs3 = [
  ["300", "user_10", "resource_5"]
];

const logs4 = [
  ["1", "user_96", "resource_5"],
  ["1", "user_10", "resource_5"],
  ["301", "user_11", "resource_5"],
  ["301", "user_12", "resource_5"],
  ["603", "user_12", "resource_5"],
  ["1603", "user_12", "resource_7"]
];

const logs5 = [
  ["300", "user_1", "resource_3"],
  ["599", "user_1", "resource_3"],
  ["900", "user_1", "resource_3"],
  ["1199", "user_1", "resource_3"],
  ["1200", "user_1", "resource_3"],
  ["1201", "user_1", "resource_3"],
  ["1202", "user_1", "resource_3"]
];

const user_sessions = (logs) =>
{
  let dictionary = {};
  
  for(let i = 0; i < logs.length; i += 1) {
    let time = parseInt(logs[i][0]);
    let username = logs[i][1];
    let keys = Object.keys(dictionary);
    if (keys.includes(logs[i][1])) {
      let earliest = dictionary[username][0];
      let latest = dictionary[username][1];
      if (time < earliest) {
        dictionary[username] = [time, latest];
      } else if (time > latest) {
        dictionary[username] = [earliest, time];
      }
    } else {
      dictionary[username] = [time, time];
    }
  }
  
  return dictionary;
};

// console.log(user_sessions(logs1));
// console.log(user_sessions(logs2));
// console.log(user_sessions(logs3));
// console.log(user_sessions(logs4));
// console.log(user_sessions(logs5));

const most_requested_resource = (logs) =>
{
  let dictionary = {}
  
  for (let i = 0; i < logs.length; i += 1) {
    let time = parseInt(logs[i][0]);
    let file = logs[i][2];
    let keys = Object.keys(dictionary);
    if (keys.includes(file)) {
      dictionary[file].push(time);
    } else {
      dictionary[file] = [time];
    }
  }
  
  let mostResource = '';
  let mostValue = 0;

  let dictionaryKeys = Object.keys(dictionary);
  
  for (let i = 0; i < dictionaryKeys.length; i += 1)
  {
    let listOfTimes = dictionary[dictionaryKeys[i]];
    for (let j = 0; j < listOfTimes.length; j += 1)
    {
      let countBefore = 0;
      let countAfter = 0;
      let theTime = listOfTimes[j];
      let fiveBefore = theTime - 300;
      let fiveAfter = theTime + 300;
      for (let k = 0; k < listOfTimes.length; k += 1)
      {
        if (listOfTimes[k] >= fiveBefore && listOfTimes[k] <= theTime)
        {
          countBefore += 1;
          if (countBefore > mostValue) {
            mostResource = dictionaryKeys[i];
            mostValue = countBefore;
          }
        }
        if (listOfTimes[k] >= theTime && listOfTimes[k] <= fiveAfter)
        {
          countAfter += 1;
          if (countAfter > mostValue) {
            mostResource = dictionaryKeys[i];
            mostValue = countAfter;
          }
        }
      }
    }
  }
  
  return [mostResource, mostValue];
}

console.log(most_requested_resource(logs1)); // # => ('resource_1', 3) [resource_1 is accessed at 416, 620, 620]
console.log(most_requested_resource(logs2)); // # => ('resource_1', 2) [resource_1 is accessed at 1060, 1262]
console.log(most_requested_resource(logs3)); // # => ('resource_5', 1) [resource_5 is accessed at 300]
console.log(most_requested_resource(logs4)); // # => ('resource_5', 4) [resource_5 is accessed at 1, 1, 301, 301]
console.log(most_requested_resource(logs5)); // # => ('resource_3', 4) [resource_3 is accessed at 1199, 1200, 1201, and 1202]
