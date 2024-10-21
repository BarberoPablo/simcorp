/* 
  Write a function that returns the longest non-repeating substring for a string input.
  If multiple substrings tie in length, return the one which occurs first.
  Bonus: Can you solve this problem in linear time?
*/

/* 
  The idea would be to iterate the chars in the string, generating the longest word possible without repeated chars.
  If they repeat, slice the word from the right character of the repeated one to the end. 
  Compare the new word with longest.
  Return longest word.
  In order to make it linear time I would only iterate the string once and use a map to have constant times when searching
*/

function longestSubstring(str) {
  let longest = "";
  let chars = {};
  let origin = 0;

  for (let i = 0; i < str.length; i++) {
    if (chars[str[i]] !== undefined && chars[str[i]] >= origin) {
      origin = chars[str[i]] + 1;
    }

    chars[str[i]] = i;
    const substring = str.slice(origin, i + 1);

    if (substring.length > longest.length) {
      longest = substring;
    }
  }

  console.log(longest);
  return longest;
}

longestSubstring("abcabcbb"); // ➞ "abc"
longestSubstring("aaaaaa"); // ➞ "a"
longestSubstring("abcde"); // ➞ "abcde"
longestSubstring("abcda"); // ➞ "abcd"
longestSubstring("abba"); // ➞ "ab"
longestSubstring("abcdaqwe"); // ➞ "bcdaqwe"
longestSubstring("bbbbqweds"); // Expected: "bqweds"
longestSubstring("abcqacpoiuytr"); // Expected: "qacpoiuytr"
longestSubstring("abccp"); // Expected: "abc"
longestSubstring(""); // Expected: ""
