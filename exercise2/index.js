/* 
  Given a string of letters, create a function that returns an array with the separator that yields the longest possible substring, provided that:
  The substring starts and ends with the separator.
  The separator doesn't occur inside the substring other than at the ends.
  If two or more separators yield substrings with the same length, they should appear in alphabetical order.
*/

/*
  The idea would be to iterate the word a constant amount of times, once to get the letters indexes and another one to calculate the lengths of the substrings.
  By having the indexes already calculated in the map, we can have access to them in a constant time, achieving a O(n), instead of searching the index of the letter 
  in every iteration, potentially having O(n), making a O(n^2) algorithm
  Word length:
    greater => replace the previous
    equals => concat
*/

function separator(word) {
  let separators = [];
  let maxLength = 0;
  let letterIndexes = {};

  Array.from(word.toLowerCase()).forEach((letter, index) => {
    if (!letterIndexes[letter]) {
      letterIndexes[letter] = [];
    }
    letterIndexes[letter].push(index);
  });

  Object.keys(letterIndexes).forEach((letter) => {
    const indexes = letterIndexes[letter];

    for (let i = 0; i < indexes.length - 1; i++) {
      const length = indexes[i + 1] - indexes[i] + 1;

      if (length > maxLength) {
        maxLength = length;
        separators = [letter];
      } else {
        if (length === maxLength) {
          separators.push(letter);
        }
      }
    }
  });

  separators.length > 1 && separators.sort();
  console.log(separators);
  console.log("-----separator-----");
  return separators;
}

separator("supercalifragilistic"); // [s]
separator("laboratory"); // [a, o, r]
separator("candle"); // []
separator("happyanniversaryqontigo"); // [i]
separator("futureofwork"); // [f]
separator("Intranet"); // [t]
separator("zqqqzxqqqx"); // [z]
separator("zzzzzazzzz");
