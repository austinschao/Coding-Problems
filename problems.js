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