/*
3. Longest Substring Without Repeating Characters

Given a string s, find the length of the longest substring without repeating characters.

 */

function longestSubString(str) {
  let longestString = 0;

  if (str.length === 0) {
    return 0;
  }

  let tempString = s[0];

  for (let i = 1; i < str.length; i++) {
    if (tempString.indexOf(str[i]) > -1) {
      longestString = Math.max(longestString, tempString.length);
      tempString = tempString.slice(tempString.indexOf(str[i]) + 1);
      tempString += str[i];
    } else {
      tempString += str[i];
    }
  }

  return Math.max(longestString, tempString.length);
}