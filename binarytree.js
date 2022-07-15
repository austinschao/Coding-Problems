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

  let sum = 0;
  const queue = [root];

  while (queue.length) {
    const curr = queue.shift();
    sum += curr.val;

    if (curr.left) queue.push(curr.left);
    if (curr.right) queue.push(curr.right);
  }
  return sum;
};
