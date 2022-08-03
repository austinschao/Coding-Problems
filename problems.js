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

/*
3. Longest Substring Without Repeating Characters

Given a string s, find the length of the longest substring without repeating characters.
*/

function lengthOfLongestSubstring(s) {
  let longestSubstring = 0;
  let windowStart = 0;

  for (let i = 0; i < s.length; i++) {
    for (let j = windowStart; j < i; j++) {
      // checks if the current letter matches any of the letters that will be checked
      if (s[i] === s[j]) {
        // Slides the window by 1
        windowStart = j + 1;
        break;
      }
    }
    // +1 because we want the length
    longestSubstring = Math.max(longestSubstring, i - windowStart + 1);
  }
  return longestSubstring;
};

/*
101. Symmetric Tree

Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).
*/

function isSymmetric(root) {
  if (!root) return true;

  function traverse(left, right) {
    if (!left && !right) return true;
    if (!left || !right) return false;
    if (left.val !== right.val) return false;

    return traverse(left.left, right.right) && traverse(left.right, right.left);
  }

  return traverse(root.left, root.right);
}

/*
129. Sum Root to Leaf Numbers

You are given the root of a binary tree containing digits from 0 to 9 only.

Each root-to-leaf path in the tree represents a number.

For example, the root-to-leaf path 1 -> 2 -> 3 represents the number 123.
Return the total sum of all root-to-leaf numbers. Test cases are generated so that the answer will fit in a 32-bit integer.

A leaf node is a node with no children.
*/

function sumNumbers(root) {
  let totalSum = 0;

  function traverse(root, path = "") {
    if (!root) return 0;
    path += root.val;

    if (!root.left && !root.right) {
      totalSum += Number(path);
    }
    traverse(root.left, path);
    traverse(root.right, path);
  }

  traverse(root);
  return totalSum;
};

/*
116. Populating Next Right Pointers in Each Node

You are given a perfect binary tree where all leaves are on the same level, and every parent has two children. The binary tree has the following definition:

struct Node {
  int val;
  Node *left;
  Node *right;
  Node *next;
}
Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.

Initially, all next pointers are set to NULL.
*/

var connect = function (root) {
  if (!root || !root.left) return root;

  root.left.next = root.right;

  if (root.next) {
    root.right.next = root.next.left;
  }

  connect(root.left);
  connect(root.right);
  //     if (!root) return null;
  //     const queue = [root];

  //     while (queue.length) {
  //         const level = queue.slice();

  //         for (let i = 0; i < level.length; i++) {
  //             const curr = queue.shift();
  //             curr.next = level[i + 1] || null;

  //             if (curr.left) queue.push(curr.left);
  //             if (curr.right) queue.push(curr.right);
  //         }
  //     }
  return root;
};

/*
13. Roman Integer

Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9.
X can be placed before L (50) and C (100) to make 40 and 90.
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.
*/

function romanToInt(s) {
  const romanConversion = { "I": 1, "IV": 4, "V": 5, "IX": 9, "X": 10, "XL": 40, "L": 50, "XC": 90, "C": 100, "CD": 500, "D": 500, "CM": 900, "M": 1000 };
  let result = 0;

  for (let i = 0; i < s.length; i++) {
    let currLtr = s[i];
    let nextLtr = s[i + 1];
    if (romanConversion[currLtr] < romanConversion[nextLtr]) {
      result += romanConversion[nextLtr] - romanConversion[currLtr];
      i++;
    } else {
      result += romanConversion[currLtr];
    }
  }
  return result;
};

/*
14. Longest Common Prefix

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".
*/

function longestCommonPrefix(strs) {
  let prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1);
      if (prefix.length === 0) {
        return "";
      }
    }
  }
  return prefix;

};

/*
20. Valid Parantheses

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
*/

function isValid(s) {
  const openingBrackets = { "(": ")", "{": "}", "[": "]" };
  const closingBrackets = { "]": "[", ")": "(", "}": "{" };
  const stack = [];

  for (let char of s) {
    if (openingBrackets[char]) {
      stack.push(openingBrackets[char]);
    } else if (closingBrackets[char] && char !== stack.pop()) {
      return false;
    }
  }
  return stack.length === 0;
};

/*
94. Binary Tree Inorder Traversal

Given the root of a binary tree, return the inorder traversal of its nodes' values.
*/

function inorderTraversal(root) {
  const result = [];
  const stack = [];
  let node = root;

  // iteratively
  while (stack.length || node !== null) {
    if (node !== null) {
      stack.push(node);
      node = node.left;
    } else {
      node = stack.pop();
      result.push(node.val);
      node = node.right;
    }
  }

  // recursively
  function traverse(root) {
    if (!root) return null;

    if (root.left) traverse(root.left);
    result.push(root.val);
    if (root.right) traverse(root.right);
  }

  return result;
}

/*
268. Missing Number
Given an array of nums containing n distinct numbers in the range [0,n], return the only number in the range that is missing from the array.
*/

function missingNumber(nums) {
  let sum = 0, total = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    total += i + 1;
  }
  return total - sum;
};

/*
26. Remove Duplicates from Sorted Array

Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.

Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

Return k after placing the final result in the first k slots of nums.

Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.
*/

function removeDuplicates(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      nums.splice(i, 1);
      i--;
    }
  }
  return nums.length;
};

/*
66. Plus One

You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

Increment the large integer by one and return the resulting array of digits.
*/

function plusOne(digits) {
  let carryOver = true;

  for (let i = digits.length - 1; i >= 0 && carryOver; i--) {
    digits[i]++;
    if (digits[i] >= 10) {
      digits[i] = 0;
    } else {
      carryOver = false;
    }
  }
  if (carryOver) {
    digits.unshift(1);
  }
  return digits;
};

/*
104. Maximum Depth of a Binary Tree

Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
*/

function maxDepth(root) {
  if (!root) return 0;
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
  //     Helper function
  //     function traverse(root) {
  //     if (!root) return 0;
  //     return 1 + Math.max(traverse(root.left), traverse(root.right));
  // }
  // return traverse(root);
};

/*
108. Convert Sorted Array to Binary Search Tree

Given an integer array nums where the elements are sorted in ascending order, convert it to a height-balanced binary search tree.

A height-balanced binary tree is a binary tree in which the depth of the two subtrees of every node never differs by more than one.
*/

function sortedArrayToBST(nums) {
  if (!nums.length) return null;
  let mid = Math.floor(nums.length / 2);
  let node = new TreeNode(nums[mid]);

  node.left = sortedArrayToBST(nums.slice(0, mid));
  node.right = sortedArrayToBST(nums.slice(mid + 1, nums.length));

  return node;
};

/*
257. Binary Tree Paths
Given the root of a binary tree, return all root-to-leaf paths in any order.

A leaf is a node with no children.

Input: root = [1,2,3,null,5]
Output: ["1->2->5","1->3"]
*/

function binaryTreePaths(root) {
  if (!root) return [];
  if (!root.left && !root.right) return [`${root.val}`];

  const leftPaths = binaryTreePaths(root.left);
  const rightPaths = binaryTreePaths(root.right);

  const paths = leftPaths.concat(rightPaths);

  for (let i = 0; i < paths.length; i++) {
    paths[i] = `${root.val}->` + paths[i];
  }
  return paths;
};

/*
463. Island Perimeter

You are given row x col grid representing a map where grid[i][j] = 1 represents land and grid[i][j] = 0 represents water.

Grid cells are connected horizontally/vertically (not diagonally). The grid is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells).

The island doesn't have "lakes", meaning the water inside isn't connected to the water around the island. One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island.
*/

function islandPerimeter(grid) {
  let perimeter = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        // check left
        if (grid[i][j - 1] !== 1) {
          perimeter += 1;
        }
        // check top
        if (i - 1 < 0 || grid[i - 1][j] !== 1) {
          perimeter += 1;
        }
        // check right
        if (grid[i][j + 1] !== 1) {
          perimeter += 1;
        }
        //check bottom
        if (i + 1 === grid.length || grid[i + 1][j] !== 1) {
          perimeter += 1;
        }
      }
    }
  }
  return perimeter;
};

/*
566. Reshape the Matrix

In MATLAB, there is a handy function called reshape which can reshape an m x n matrix into a new one with a different size r x c keeping its original data.

You are given an m x n matrix mat and two integers r and c representing the number of rows and the number of columns of the wanted reshaped matrix.

The reshaped matrix should be filled with all the elements of the original matrix in the same row-traversing order as they were.

If the reshape operation with given parameters is possible and legal, output the new reshaped matrix; Otherwise, output the original matrix.
*/

function matrixReshape(mat, r, c) {
  if (mat.length * mat[0].length !== r * c) return mat;
  const result = Array.from({ length: r }, i => []);

  let row = 0;
  let col = 0;
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++) {
      result[row][col] = mat[i][j];
      col++;
      if (col === c) {
        col = 0;
        row++;
      }
    }
  }
  return result;
};

/*
200. Number of Islands

Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.
*/

function numIslands(grid) {
  function findIslands(grid, row, col) {
    if (row === grid.length || row < 0) return;
    if (col === grid[0].length || col < 0) return;

    if (grid[row][col] === "1") {
      grid[row][col] = "0";
      findIslands(grid, row + 1, col);
      findIslands(grid, row, col + 1);
      findIslands(grid, row - 1, col);
      findIslands(grid, row, col - 1);
    }
  }

  let islands = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === '1') {
        islands += 1;
        grid[i][j] = '0';
        findIslands(grid, i + 1, j);
        findIslands(grid, i, j + 1);
      }
    }
  }
  return islands;
};

/*
2. Add Two Numbers

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.
*/

function addTwoNumbers(head1, head2, carry = 0) {
  //   const head = new ListNode(null);
  //   let tail = head;

  //   let curr1 = head1;
  //   let curr2 = head2;
  //   let carry = 0;

  //   while (curr1 || curr2 || carry) {
  //     const val1 = curr1 ? curr1.val : 0;
  //     const val2 = curr2 ? curr2.val : 0;

  //     const sum = val1 + val2 + carry;
  //     const digit = sum % 10;
  //     carry = sum > 9 ? 1 : 0;

  //     const node = new ListNode(digit);
  //     tail.next = node;
  //     tail = tail.next;

  //     curr1 = curr1 ? curr1.next : null;
  //     curr2 = curr2 ? curr2.next : null;
  //   }
  //   return head.next;
  if (!head1 && !head2 && !carry) return null;

  const val1 = head1 ? head1.val : 0;
  const val2 = head2 ? head2.val : 0;

  const sum = val1 + val2 + carry;
  const carryNext = sum > 9 ? 1 : 0;
  const digit = sum % 10;

  const resultNode = new ListNode(digit);

  const next1 = head1 ? head1.next : null;
  const next2 = head2 ? head2.next : null;
  resultNode.next = addTwoNumbers(next1, next2, carryNext);
  return resultNode;
};

/*
1971. Find if Path Exists in Graph

There is a bi-directional graph with n vertices, where each vertex is labeled from 0 to n - 1 (inclusive). The edges in the graph are represented as a 2D integer array edges, where each edges[i] = [ui, vi] denotes a bi-directional edge between vertex ui and vertex vi. Every vertex pair is connected by at most one edge, and no vertex has an edge to itself.

You want to determine if there is a valid path that exists from vertex source to vertex destination.

Given edges and the integers n, source, and destination, return true if there is a valid path from source to destination, or false otherwise.
*/
const validPath = (n, edges, source, destination) => {
  if (source === destination) return true;

  const graph = buildGraph(edges);
  const visited = new Set();
  return hasPath(graph, source, destination, visited);
  //     const stack = [source];

  //     while (stack.length) {
  //         const curr = stack.pop();
  //         if (curr === destination) return true;

  //         visited.add(curr);

  //         for (let neighbor of graph[curr]) {
  //             if (!visited.has(neighbor)) {
  //                 stack.push(neighbor);
  //             }
  //         }
  //     }
  //     return false;
};

const buildGraph = (edges) => {
  const graph = {};

  for (let edge of edges) {
    const [a, b] = edge;
    if (!graph[a]) graph[a] = [];
    if (!graph[b]) graph[b] = [];
    graph[a].push(b);
    graph[b].push(a);
  }
  return graph;
};

const hasPath = (graph, src, dst, visited) => {
  if (src === dst) return true;
  if (visited.has(src)) return false;

  visited.add(src);

  for (let neighbor of graph[src]) {
    if (hasPath(graph, neighbor, dst, visited)) {
      return true;
    }
  }
  return false;
};


/*
Implement a document scanning function wordCountEngine, which receives a string document and returns a list of all unique words in it and their number of occurrences, sorted by the number of occurrences in a descending order. If two or more words have the same count, they should be sorted according to their order in the original sentence. Assume that all letters are in english alphabet. You function should be case-insensitive, so for instance, the words “Perfect” and “perfect” should be considered the same word.

The engine should strip out punctuation (even in the middle of a word) and use whitespaces to separate words.

Analyze the time and space complexities of your solution. Try to optimize for time while keeping a polynomial space complexity.

Examples:

input:  document = "Practice makes perfect. you'll only
                    get Perfect by practice. just practice!"

output: [ ["practice", "3"], ["perfect", "2"],
          ["makes", "1"], ["youll", "1"], ["only", "1"],
          ["get", "1"], ["by", "1"], ["just", "1"] ]


input: document = "Practice makes perfect. Perfect is practice."
output = [["practice", "2"], ["makes", "1"], ["perfect" , "2",], ["is", "1"]]

Iterate through the document and create a new string without punctuations

Create an object that will store the count of each word and its order in the document

Iterate through the new string and add key value pairs to the object.
*/

function wordCountEngine(document) {
  const punctuation = ".!,'?";
  let documentWithoutPunctuation = "";

  for (let char of document) {
    if (!punctuation.includes(char)) {
      documentWithoutPunctuation += char;
    }
  }

  const splitDocument = documentWithoutPunctuation.split(" ");
  const wordCount = {};
  const result = [];

  for (let i = 0; i < splitDocument.length; i++) {
    const lowerCaseWord = word.toLowerCase();
    if (wordCount[lowerCaseWord]) {
      wordCount[lowerCaseWord].count += 1;
    } else {
      wordCount[lowerCaseWord] = { pos: i, count: 1 };
    }
  }

  for (let word in wordCount) {
    result.push([word, String(wordCount[word].count)]);
  }

  result.sort((a, b) => b[1] === a[1] ? wordCount[[a][0]].pos - wordCount[[b][0]].pos : b[1] - a[1]);

  return result;
}
