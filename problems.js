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

/*
53. Maximum Subarray

Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

A subarray is a contiguous part of an array.
*/

function maxSubArray(nums) {
  let maxSum = nums[0];
  let currSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    currSum = Math.max(nums[i], nums[i] + currSum);
    maxSum = Math.max(maxSum, currSum);
  }

  return maxSum;
};

/*
Given an array, find the average of all subarrays of ‘K’ contiguous elements in it.
*/

function avgSubArray(arr, k) {
  const averages = [];
  let tempSubarraySum = 0, windowStart = 0;
  for (let i = 0; i < arr.length; i++) {
    tempSubarraySum += arr[i];
    if (i >= k - 1) {
      averages.push(tempSubarraySum / k);
      tempSubarraySum -= arr[windowStart];
      windowStart += 1;
    }
  }
  return averages;
}

/*
Given an array of positive numbers and a positive number ‘k,’ find the maximum sum of any contiguous subarray of size ‘k’.
*/

function maxSumSubArray(arr, k) {
  let maxSum = 0;
  let windowStart = 0;
  let tempSum = 0;

  for (let i = 0; i < arr.length; i++) {
    tempSum += arr[i];
    if (i >= k - 1) {
      maxSum = Math.max(tempSum, maxSum);
      tempSum -= arr[windowStart];
      windowStart += 1;
    }
  }
  return maxSum;
}

/*
Given an array of positive numbers and a positive number ‘S,’ find the length of the smallest contiguous subarray whose sum is greater than or equal to ‘S’. Return 0 if no such subarray exists.
*/

function smallestSubarraySum(arr, s) {
  let smallestSubarrayLength = Infinity;
  let tempSmallestSubArray = 0;
  let windowStart = 0;

  for (let i = 0; i < arr.length; i++) {
    tempSmallestSubArray += arr[i];
    while (tempSmallestSubArray >= s) {
      smallestSubarrayLength = Math.min(smallestSubarrayLength, i - windowStart + 1);
      tempSmallestSubArray -= arr[windowStart];
      windowStart += 1;
    }
  }
  if (smallestSubarrayLength === Infinity) {
    return 0;
  }
  return smallestSubarrayLength;
}

/*
11. Container With Most Water

You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.
*/

function maxArea(height) {
  let maxArea = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    let area = Math.min(height[left], height[right]) * (right - left);
    maxArea = Math.max(area, maxArea);
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return maxArea;
};
/*
112. Path Sum

Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.
 */

function hasPathSum(root, targetSum) {
  if (!root) {
    return false;
  }

  targetSum -= root.val;

  if (!root.left && !root.right) {
    if (targetSum === 0) {
      return true;
    }
  }

  return hasPathSum(root.left, targetSum) || hasPathSum(root.right, targetSum);
};

/*
113. Path Sum II

Given the root of a binary tree and an integer targetSum, return all root-to-leaf paths where the sum of the node values in the path equals targetSum. Each path should be returned as a list of the node values, not node references.

A root-to-leaf path is a path starting from the root and ending at any leaf node. A leaf is a node with no children.
*/

function pathSum(root, targetSum) {
  const paths = [];

  if (!root) {
    return paths;
  }

  traverse(root);

  function traverse(root, result = [], sum = 0) {
    sum += root.val;
    result.push(root.val);

    if (root.left === null && root.right === null) {
      if (sum === targetSum) {
        paths.push([...result]);
      }
    }

    if (root.left) {
      traverse(root.left, result, sum);
    }
    if (root.right) {
      traverse(root.right, result, sum);
    }

    result.pop();
  }

  return paths;
}

/*
230. Kth Smallest Element in a BST

Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree.

 */

function kthSmallest(root, k) {
  const sortedNodes = [];

  function traverse(root) {
    if (root.left) traverse(root.left);
    sortedNodes.push(root.val);
    if (root.right) traverse(root.right);
  }

  traverse(root);
  return sortedNodes[k - 1];
};

/*
169. Majority Element

Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
*/

function majorityElement(nums) {
  const count = {};

  for (let i = 0; i < nums.length; i++) {
    let val = count[nums[i]] || 0;
    count[nums[i]] = val + 1;
    if (count[nums[i]] > nums.length / 2) {
      return nums[i];
    }
  }
};

/*
229. Majority Element II

Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.

*/

function majorityElement(nums) {
  const majorityElements = new Set();
  const counter = {};

  for (let i = 0; i < nums.length; i++) {
    let val = counter[nums[i]] || 0;
    counter[nums[i]] = val + 1;
    if (counter[nums[i]] > nums.length / 3) {
      majorityElements.add(nums[i]);
    }
  }
  return Array.from(majorityElements);
};

/*
226. Given a root of a binary tree, invert the tree and return the root.
*/

function invertBT(root) {
  function traverse(root) {
    if (!root) {
      return;
    }

    // [root.left, root.right] = [root.right, root.left] || works too

    let leftChild = root.left;
    let rightChild = root.right;

    root.left = rightChild;
    root.right = leftChild;

    if (root.left) traverse(root.left);
    if (root.right) traverse(root.right);
  }

  traverse(root);

  return root;
}