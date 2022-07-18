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

const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');

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
  if (!head) return;
  result.push(head.val);
  linkedListVals(head.next, result);
  return result;
};