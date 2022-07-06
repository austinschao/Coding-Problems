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

/*
88. Merge Sorted Array

You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

*/

function mergeSortedArrays(nums1, m, nums2, n) {
  let back = m + n - 1;
  m--;
  n--;

  while (n >= 0) {
    if (nums1[m] > nums2[n]) {
      nums1[back] = nums1[m];
      m--;
    } else {
      nums1[back] = nums2[n];
      n--;
    }
    back--;
  }
}

/*
 739. Daily Temperatures

 Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.

 */

function dailyTemperatures(temperatures) {
  const result = [];
  let idx = 0;
  let right = idx + 1;

  while (idx < temperatures.length) {

    if (right < temperatures.length && temperatures[right] > temperatures[idx]) {
      result.push(right - idx);
      idx++;
      right = idx + 1;
    } else if (right < temperatures.length && temperatures[right] <= temperatures[idx]) {
      right++;
    } else {
      result.push(0);
      idx++;
      right = idx + 1;
    }
  }
  return result;
}

/*
 2325. Decode the Message

 You are given the strings key and message, which represent a cipher key and a secret message, respectively. The steps to decode message are as follows:

1. Use the first appearance of all 26 lowercase English letters in key as the order of the substitution table.
2. Align the substitution table with the regular English alphabet.
3. Each letter in message is then substituted using the table.
4. Spaces ' ' are transformed to themselves.

For example, given key = "happy boy" (actual key would have at least one instance of each letter in the alphabet), we have the partial substitution table of ('h' -> 'a', 'a' -> 'b', 'p' -> 'c', 'y' -> 'd', 'b' -> 'e', 'o' -> 'f').

Return the decoded message.
 */

function decodeMessage(key, message) {
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  const subsitutionTable = {};
  const keyWithoutSpaces = key.replaceAll(" ", "");
  let ltrCount = 0;


  for (let char of keyWithoutSpaces) {
    // subsitutionTable[char] ??= alphabet[ltrCount];
    // subsitutionTable[char] = subsitutionTable[char] || alphabet[ltrCount]
    if (!subsitutionTable[char]) {
      subsitutionTable[char] = alphabet[ltrCount];
      ltrCount++;
    }
  }

  let decodedMessage = "";

  for (let i = 0; i < message.length; i++) {
    if (subsitutionTable[message[i]]) {
      decodedMessage += subsitutionTable[message[i]];
    } else {
      decodedMessage += message[i];
    }
  }

  return decodedMessage;
}

/*
1672. Richest Customer Wealth

You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.

A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.

*/

function maxiumumWealth(accounts) {
  let maxWealth = 0;

  for (let i = 0; i < accounts.length; i++) {
    let tempMaxWealth = 0;
    for (let j = 0; j < accounts[i].length; j++) {
      tempMaxWealth += accounts[i][j];
    }
    maxWealth = Math.max(tempMaxWealth, maxWealth);
  }
  return maxWealth;
}

/*
435. Non-overlapping Intervals

Given an array of intervals intervals where intervals[i] = [starti, endi], return the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.

*/

function nonOverlappingIntervals(intervals) {
  if (intervals.length === 1) {
    return 0;
  }

  const sortedIntervals = intervals.sort((a, b) => a[1] - b[1]);
  let minIntervals = 0;
  let left = 0;
  let right = 1;

  while (right <= sortedIntervals.length - 1) {
    if (sortedIntervals[left][1] > sortedIntervals[right][0]) {
      minIntervals++;
      right++;
    } else {
      left = right;
      right = left + 1;
    }
  }
  return minIntervals;
}

/*
121. Best Time to Buy and Sell Stock

You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
*/
function maxProfit(prices) {
  let maxProfit = 0;
  let left = 0;
  let right = 1;

  while (left < prices.length - 1) {
    if (prices[left] < prices[right]) {
      maxProfit = Math.max(maxProfit, prices[right] - prices[left]);
    } else {
      left = right;
    }
    right++;
  }
  return maxProfit;
}