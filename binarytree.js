class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

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


const depthFirstValuesRecursive = (root) => {
  if (!root) {
    return [];
  }

  return [root.val, ...depthFirstValuesRecursive(root.left), ...depthFirstValuesRecursive(root.right)];
};

const breadthFirstVallues = (root) => {
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