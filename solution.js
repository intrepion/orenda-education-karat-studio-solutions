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
