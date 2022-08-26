class Node {
 constructor(val) {
  this.val = val;
  this.next = null;
  this.prev = null;
 }
}

class DoublyLinkedList {
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
   node.prev = this.tail;
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
   this.head.prev = node;
   node.next = this.head;
   this.head = node;
  }
  this.length++;
  return this;
 }
 removeFromTail() {
  if (!this.head) return undefined;
  let oldTail = this.tail;
  if (this.length === 1) {
   this.head = null;
   this.tail = null;
  } else {
   let newTail = oldTail.prev;
   this.tail = newTail;
   oldTail.prev = null, oldTail.next = null;
  }
  this.length--;
  return oldTail;
 }

 removeFromHead() {
  if (!this.head) return undefined;
  let oldHead = this.head;
  if (this.length === 1) {
   this.head = null;
   this.tail = null;
  } else {
   let newHead = this.head.next;
   newHead.prev = this.head;
   this.head = newHead;
  }
  this.length--;
  return oldHead;
 }

 get(idx) {
  if (idx < 0 || idx >= this.length) return undefined;

  if (idx <= this.length / 2) {
   let count = 0;
   current = this.head;
   while (count !== idx) {
    current = current.next;
    count++;
   }
  } else {
   let count = this.length - 1;
   current = this.tail;
   while (count !== idx) {
    current = current.prev;
    count--;
   }
  }
  return current;
 }
 set(idx, val) {
  if (idx < 0 || idx >= this.length) return undefined;
  let found = this.get(idx);
  if (found) {
   found.val = val;
  }
 }

 insert(idx, val) {
  let node = new Node(val);
  if (idx <= 0 || idx >= this.length) return false;
  if (idx === 0) return !!this.addToHead(val);
  if (idx === this.length - 1) return !!this.addToTail(val);

  let before = this.get(idx - 1);
  let after = before.next;
  before.next = node, node.prev = before;
  after.prev = node, node.next = after;
  this.length++;
  return true;
 }

 remove(idx) {
  if (idx < 0 || idx >= this.length) return undefined;
  if (idx === 0) return this.removeFromHead();
  if (idx === this.length - 1) return this.removeFromTail;

  let current = this.get(idx);
  let before = current.prev;
  let after = current.next;
  before.next = after, after.prev = before;
  current.next = null, current.prev = null;
  this.length--;
  return current;
 }
}