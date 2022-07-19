"use strict";

class LinkedList {
  constructor(head) {
    this.head = null;
    this.tail = null;
  }
}

class Node {
  constructor(val) {
    this._ll = [];
    this.val = val;
    this.next = null;
  }
}

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');

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
}