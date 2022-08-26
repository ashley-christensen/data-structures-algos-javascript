class Node {
 constructor(val) {
  this.val = val;
  this.next = null;
 }
}

class LinkedList {
 constructor() {
  this.head = null;
  this.tail = null;
  this.length = 0;
 }

 addToTail(val) {
  let node = new Node(val);
  if (!this.head) {
   this.head = node;
   this.tail = node;
  } else {
   this.tail.next = node;
   this.tail = node;
  }
  this.length++;
  return this;
 }
 addToHead(val) {
  let node = new Node(val);
  if (!this.head) {
   this.head = node;
   this.tail = this.head;
  } else {
   node.next = this.head;
   this.head = node;
  }
  this.length++;
  return this;
 }

 removeFromTail() {
  if (!this.head) return undefined;
  if (this.length === 1) {
   this.head = null;
   this.tail = null;
  }
  let current = this.head;
  let newTail = this.head;

  while (current.next) {
   newTail = current;
   current = current.next;
  }
  this.tail = newTail;
  newTail.next = null;
  this.length--;
  return current;
 }
 removeFromHead() {
  if (!this.head) return undefined;
  let oldHead = this.head;
  let newHead = this.head.next;
  this.head = newHead;
  this.length--;
  if (this.length === 0) {
   this.tail = null;
  }
  return oldHead;
 }
 get(idx) {
  if (idx < 0 || idx >= this.length) return undefined;
  let count = 0;
  let current = this.head;
  while (count !== idx) {
   current = current.next;
   count++;
  }
  return current;
 }
 set(idx, val) {
  let found = this.get(idx);
  if (found) {
   found.val = val;
   return true;
  }
  return false;
 }
 insert(idx, val) {
  let node = new Node(val);
  if (idx < 0 || idx >= this.length) return false;
  if (idx === 0) return !!this.addToHead(val);
  if (idx === this.length - 1) return !!this.addToTail(val);

  let before = this.get(idx - 1);
  let after = before.next;
  before.next = node;
  node.next = after;
  this.length++;
  return true;
 }
 remove(idx) {
  if (idx < 0 || idx >= this.length) return undefined;
  if (idx === 0) return this.removeFromHead();
  if (idx === this.length - 1) return this.removeFromTail();

  let before = this.get(idx - 1);
  let current = before.next;
  before.next = current.next;//memorize this line for SLL remove(idx)
  current.next = null;
 }
}
