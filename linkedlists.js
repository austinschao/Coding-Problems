"use strict";

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
}

class Node {
  constructor(val) {
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