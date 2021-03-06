"use strict";

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

const depthFirstValuesIterative = (root) => {
  if (!root) {
    return [];
  }

  const stack = [root];

  while (stack.length) {
    const curr = stack.pop();
    console.log(curr.val);

    if (curr.right) stack.push(curr.right);
    if (curr.left) stack.push(curr.left);
  }
};

const depthFirstValuesRecursive = (root) => {
  if (!root) {
    return [];
  }

  return [root.val, ...depthFirstValuesRecursive(root.left), ...depthFirstValuesRecursive(root.right)];
};

const breadthFirstValues = (root) => {
  if (!root) {
    return [];
  }
  const queue = [root];
  const result = [];

  while (queue.length) {
    const curr = queue.shift();
    result.push(curr.val);

    if (curr.left) queue.push(curr.left);
    if (curr.right) queue.push(curr.right);
  }

  return result;
};

/*
Breadth First Search
Check if tree includes target
*/
const treeIncludesBFS = (root, target) => {
  if (!root) {
    return false;
  }
  const queue = [root];

  while (queue.length) {
    const curr = queue.shift();
    if (curr.val === target) return true;

    if (curr.left) queue.push(curr.left);
    if (curr.right) queue.push(curr.right);
  }
  return false;
};

/*
Recursive DFS
Check if tree includes target
*/
const treeIncludesRecursive = (root, target) => {
  if (!root) return false;
  if (root.val === target) return true;

  return treeIncludesRecursive(root.left, target) || treeIncludesRecursive(root.right, target);
};

/*
Recursive DFS
Get total sum of tree
*/
const treeSumRecursive = (root) => {
  if (!root) return 0;

  return root.val + treeSumRecursive(root.left) + treeSumRecursive(root.right);
};

/*
BFS
Get total sum of tree
*/
const treeSumBFS = (root) => {
  if (!root) return 0;

  let totalSum = 0;
  const queue = [root];

  while (queue.length) {
    const curr = queue.shift();
    totalSum += curr.val;

    if (curr.left) queue.push(curr.left);
    if (curr.right) queue.push(curr.right);
  }
  return totalSum;
};

/*
DFS Recursive
Find minimum value
*/
const treeMinValRecursive = (root) => {
  if (!root) return Infinity;

  return Math.min(root.val, treeMinValRecursive(root.left), treeMinValRecursive(root.right));
};

/*
BFS Iterative
Find minimum value
Assume the tree is not empty
*/
const treeMinValBFS = (root) => {
  let minVal = Infinity;
  const queue = [root];

  while (queue.length) {
    const curr = queue.shift();
    minVal = Math.min(minVal, curr.val);

    if (curr.left) queue.push(curr.left);
    if (curr.right) queue.push(curr.right);
  }
  return minVal;
};

/*
DFS Recursive

Find the max path sum from root to leaf
*/
const treeMaxPathSum = (root) => {
  if (!root) return -Infinity;
  if (!root.left && !root.right) return root.val;

  return Math.max((root.val + treeMaxPathSum(root.left)), treeMaxPathSum(root.val + root.right));
};

/*
Return an array representing a path to the target value from the root. If the target is not found, return null.
*/
const pathFinder = (root, target) => {
  if (!root) return null;
  if (root.val === target) return [root.val];

  const leftPath = pathFinder(root.left, target);
  const rightPath = pathFinder(root.right, target);

  if (leftPath) {
    return [root.val].concat(leftPath);
  }

  if (rightPath) {
    return [root.val].concat(rightPath);
  }

  return null;
};

/*
Return the number of times the target appears in the tree.
*/
const treeValueCount = (root, target) => {
  //recursively
  if (!root) return 0;
  if (root.val === target) return 1 + treeValueCount(root.left, target) + treeValueCount(root.right, target);

  const leftPathCount = treeValueCount(root.left, target);
  const rightPathCount = treeValueCount(root.right, target);

  return leftPathCount + rightPathCount;

  //iteratively
  // if (!root) return 0;

  // let count = 0;
  // const queue = [root];
  // while (queue.length) {
  //   const curr = queue.shift();
  //   if (curr.val === target) count++;

  //   if (curr.right) queue.push(curr.right);
  //   if (curr.left) queue.push(curr.left);
  // }
  // return count;
};

/*
Return the height of the tree, if it is empty return -1.
*/
const howHigh = (node) => {
  if (!node) return -1;
  return 1 + Math.max(howHigh(node.left), howHigh(node.right));
};

/*
Return the right-most value in the bottom-most level of the tree.
*/
const bottomRightValue = (root) => {
  const queue = [root];
  let curr;

  while (queue.length) {
    curr = queue.shift();
    if (curr.left) queue.push(curr.left);
    if (curr.right) queue.push(curr.right);
  }
  return curr.val;
};

/*
Return a 2-Dimensional array where each subarray represents a root-to-leaf path in the tree.
*/
const allTreePaths = (root) => {
  if (!root) return [];
  if (!root.left && !root.right) return [[root.val]];

  const leftPath = allTreePaths(root.left);
  const rightPath = allTreePaths(root.right);

  const paths = leftPath.concat(rightPath);

  for (let path of paths) {
    path.unshift(root.val);
  }

  return paths;
};

/*
Return a 2-D array where each subarray represents a level of the tree.
*/
const treeLevels = (root, level = 0, levels = []) => {
  // Recursively
  if (!root) return [];

  if (levels[level]) {
    levels[level].push(root.val);
  } else {
    levels[level] = [root.val];
  }

  level += 1;

  if (root.left) treeLevels(root.left, level, levels);
  if (root.right) treeLevels(root.right, level, levels);

  return levels;

  //   DFS Iteratively
  //   if (!root) return [];

  //   const result = [];
  //   const stack = [{node:root, level: 0}]

  //   while (stack.length) {
  //     const {node, level} = stack.pop();

  //     if (result[level]) {
  //       result[level].push(node.val);
  //     } else {
  //       result.push([node.val]);
  //     }
  // return result;


  //     if (node.right) stack.push({node: node.right, level: level + 1})
  //     if (node.left) stack.push({node: node.left, level: level + 1})
  //   }

  //   BFS
  //   while (queue.length) {
  //     if (!result.length) {
  //       result.push(tempLevel);
  //       tempLevel = [];
  //     }

  //     const curr = queue.shift();

  //     if (!result[result.length-1].includes(curr.val)) {
  //       result.push(tempLevel);
  //       tempLevel = [];
  //     }

  //     if (curr.left) {
  //       queue.push(curr.left);
  //       tempLevel.push(curr.left.val);
  //     }

  //     if (curr.right) {
  //       queue.push(curr.right);
  //       tempLevel.push(curr.right.val);
  //     }
  //   }
  // return result;
};

/*
Return the average of each level in the binary tree.
*/
const levelAverages = (root) => {
  const levels = [];
  fillLevels(root, levels, 0);
  return levels.map(findAvg);
};

const fillLevels = (root, levels, levelNum) => {
  if (!root) return;

  if (levels[levelNum]) {
    levels[levelNum].push(root.val);
  } else {
    levels.push([root.val]);
  }

  fillLevels(root.left, levels, levelNum + 1);
  fillLevels(root.right, levels, levelNum + 1);
};

const findAvg = (arr) => {
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  return sum / arr.length;
};

/*
Return all the leaves in left to right order.
*/
const leafList = (root) => {
  if (!root) return [];
  const leaves = [];

  const traverse = (root) => {
    if (!root) return;

    if (!root.left && !root.right) {
      leaves.push(root.val);
    }
    traverse(root.left);
    traverse(root.right);
  };
  traverse(root)

  return leaves;
};

