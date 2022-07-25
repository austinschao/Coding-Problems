"use strict";

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');

const e = new Node('e');
const f = new Node('f');
const g = new Node('g');
const h = new Node('h');

e.next = f;
f.next = g;
g.next = h;


a.next = b;
b.next = c;
c.next = d;

/*
Traverse through the Linked List iteratively and print each node value
*/
const printLinkedList = (head) => {
  let curr = head;

  while (curr) {
    console.log(curr.val);
    curr = curr.next;
  }
};

/*
Traverse through the Linked List recursively and print each node value
*/
const printLLRecursively = (head) => {
  if (!head) return;

  console.log(head.val);
  printLLRecursively(head.next);
};

/*
Traverse through the Linked List recurively and return the node values in
an array.
*/
const linkedListVals = (head, result = []) => {
  // could do this instead without a result variable
  // if (!head) return [];
  // return [head.val, ...linkedListVals(head.next)]
  if (!head) return;
  result.push(head.val);
  linkedListVals(head.next, result);
  return result;
};

/*
Traverse through the Linked List iteratively and return the total sum of all nodes
*/
const sumLLIteratively = (head) => {
  let totalSum = 0;
  let curr = head;

  while (curr) {
    totalSum += curr.val;
    curr = curr.next;
  }
  return totalSum;
};

/*
Traverse through the Linked List recursively and return the total sum of all nodes
*/
const sumLLRecurisvely = (head) => {
  if (!head) return 0;
  return head.val + sumLLRecurisvely(head.next);
};

/*
Traverse through the Linked List iteratively and return true if the target is found.
*/
const findLLIteratively = (head, target) => {
  let curr = head;

  while (curr) {
    if (curr.val === target) return true;
    curr = curr.next;
  }
  return false;
};

/*
Traverse through the Linked List recursively and return true if the target is found.
*/
const findLLRecursively = (head, target) => {
  if (!head) return false;
  if (head.val == target) return true;
  return findLLRecursively(head.next, target);
};

/*
Traverse through the Linked List iteratively and return the value of the given target idx
*/
const findIdxIteratively = (head, idx) => {
  let count = 0;
  let curr = head;

  while (curr) {
    if (count === idx) {
      return curr.val;
    }
    count++;
    curr = curr.next;
  }
  return -1;
};

/*
Traverse through the Linked List recursively and return the value of the given target idx
*/
const findIdxRecursively = (head, target) => {
  if (!head) return -1;
  if (target === 0) return head.val;
  target -= 1;
  return findIdxRecursively(head.next, target);
};

/*
Traverse through the Linked List iteratively and reverse it. Return the Linked List
*/
const reverseLLIteratively = (head) => {
  let curr = head;
  let prev = null;

  if (!head) return prev;

  while (curr) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
};

/*
Traverse through the Linked List recursively and reverse it. Return the Linked List
*/
const reverseLLRecursively = (head, prev = null) => {
  if (!head) return prev;

  const next = head.next;
  head.next = prev;

  return reverseLLRecursively(next, head);
};

/*
Traverse through two Linked Lists iteratively and merge them together one by one
*/
const zipperListsIteratively = (list1, list2) => {
  let curr1 = list1.next;
  let curr2 = list2;
  let tail = list1;
  let count = 0;

  while (curr1 && curr2) {
    if (count % 2 === 0) {
      tail.next = curr2;
      curr2 = curr2.next;
    } else {
      tail.next = curr1;
      curr1 = curr1.next;
    }
    tail = tail.next;
    count++;
  }
  tail.next = curr1 ? curr1 : curr2;
  return list1;
};

/*
Traverse through two Linked Lists recursively and zipper them together one by one
*/
const zipperListsRecursively = (list1, list2) => {
  if (!list1 && !list2) return null;
  if (!list1) return list2;
  if (!list2) return list1;

  const next1 = list1.next;
  const next2 = list2.next;

  list1.next = list2;
  list2.next = zipperListsRecursively(next1, next2);

  return list1;
};

/*
Merge two Linked Lists in ascending order iteratively
*/
const mergeListsIteratively = (head1, head2) => {
  let curr1 = head1;
  let curr2 = head2;
  let head = new Node(null);
  let tail = head;

  while (curr1 && curr2) {
    if (curr1.val < curr2.val) {
      tail.next = curr1;
      curr1 = curr1.next;
    } else {
      tail.next = curr2;
      curr2 = curr2.next;
    }
    tail = tail.next;
  }

  if (curr1) tail.next = curr1;
  if (curr2) tail.next = curr2;

  return head.next;
};

/*
Merge two Linked Lists in ascending order recursively
*/
const mergeListsRecursively = (head1, head2) => {
  if (!head1 && !head2) return null;
  if (!head1) return head2;
  if (!head2) return head1;

  if (head1.val < head2.val) {
    const next1 = head1.next;
    head1.next = mergeListsRecursively(next1, head2);
    return head1;
  } else {
    const next2 = head2.next;
    head2.next = mergeListsRecursively(head1, next2);
    return head2;
  }
};

/*
Return a boolean if the Linked Lists contains one unique value.
*/
const isUnivalueList = (head, prev = null) => {
  //   let curr = head;

  //   while(curr) {
  //     if (curr.val !== head.val) return false;
  //     curr = curr.next;
  //   }
  //   return true;
  if (!head) return true;
  if (head.val !== prev && prev) return false;
  return isUnivalueList(head.next, head.val);
};

/*
Insert a node at a given index.
*/
const insertNode = (head, value, index) => {
  const newHead = new Node(value);

  if (index === 0) {
    newHead.next = head;
    return newHead;
  }
  let curr = head;
  let next = curr.next;
  let count = index - 1;

  while (count > 0) {
    curr = curr.next;
    next = curr.next;
    count--;
  }

  curr.next = newHead;
  newHead.next = next;

  return head;
  //   if (index === 0) {
  // const newHead = new Node(value);
  //     newHead.next = head;
  //     return newHead;
  //   }
  //   head.next = insertNode(head.next, value, index - 1)

  //   return head;
};

/*
Add two linked lists together that represents a number.
*/
const addLists = (head1, head2) => {
  //   if (!head1 && !head2 && !carry) return null;

  //   const val1 = head1 ? head1.val : 0;
  //   const val2 = head2 ? head2.val : 0;

  //   const sum = val1 + val2 + carry;
  //   const carryNext = sum > 9 ? 1 : 0;
  //   const digit = sum % 10;

  //   const resultNode = new Node(digit);

  //   const next1 = head1 ? head1.next : null;
  //   const next2 = head2 ? head2.next : null;
  //   resultNode.next = addLists(next1, next2, carryNext);
  //   return resultNode;
  const head = new Node(null);
  let tail = head;

  let curr1 = head1;
  let curr2 = head2;
  let carry = 0;

  while (curr1 || curr2 || carry) {
    const val1 = curr1 ? curr1.val : 0;
    const val2 = curr2 ? curr2.val : 0;

    const sum = val1 + val2 + carry;
    const digit = sum % 10;
    carry = sum > 9 ? 1 : 0;

    const node = new Node(digit);
    tail.next = node;
    tail = tail.next;

    curr1 = curr1 ? curr1.next : null;
    curr2 = curr2 ? curr2.next : null;
  }
  return head.next;
};