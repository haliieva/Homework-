'use strict';

/* 4. Напишите функцию, которая в переданной строке ищет самое длинное слово и возвращает его длину. */

let string = " ";

function findLongestWordLength(string) {
  const stringSplit = string.split(' ');
  let longestWord = "";

  for (const word of stringSplit) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord.length;
}

console.log(findLongestWordLength('Аргентина манит негра'));