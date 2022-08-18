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
  const node = new Node(val);
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

 removeFromTail() {
  if (!this.head) return undefined;
  let poppedNode = this.tail;
  if (this.length === 1) {
   this.head = null;
   this.tail = null;
  } else {
   this.tail = poppedNode.prev;
   this.tail.next = null;
   poppedNode.prev = null;
  }
  this.length--;
  return poppedNode;
 }

 removeFromHead() {
  if (!this.head) return undefined;
  let oldHead = this.head;
  if (this.length === 1) {
   this.head = null;
   this.tail = null;
  } else {
   this.head = oldHead.next;
   this.head.prev = null;
   oldHead.next = null;
  }
  this.length--;
  return oldHead;
 }

 addToHead(val) {
  const node = new Node(val);
  if (!this.head) {
   this.head = node;
   this.tail = node;
  } else {
   this.head.prev = node;
   node.next = this.head;
   this.head = node;
  }
  this.length++;
  return this;
 }

 get(idx) {
  if (idx < 0 || idx >= this.length) return undefined;
  let count, current;
  if (idx <= this.length / 2) {
   current = this.head;
   count = 0;
   while (count !== idx) {
    current = current.next;
    count++;
   }
  } else {

   current = this.tail;
   count = this.length - 1;
   while (count !== idx) {
    current = current.prev;
    count--;
   }
  }
  return current;
 }

 set(idx, value) {
  let foundNode = this.get(idx);
  if (foundNode) {
   foundNode.val = value;
   return true;
  }
  return false;
 }

 insert(idx, value) {
  const newNode = new Node(value);
  if (idx < 0 || idx >= this.length) return false;
  if (idx === 0) return !!this.addToHead(value);
  if (idx === this.length - 1) return !!this.addToTail(value);

  let beforeNode = this.get(idx - 1);
  let afterNode = beforeNode.next;//make third variable

  //setup 4 connections. 2 to current, one for each connecting to current 
  beforeNode.next = newNode, newNode.prev = beforeNode;
  newNode.next = afterNode, afterNode.prev = newNode;
  this.length++;
  return true;
 }

 remove(idx) {
  if (idx < 0 || idx >= this.length) return null;
  if (idx === 0) return this.removeFromHead();
  if (idx === this.length - 1) return this.removeFromTail();

  let removedNode = this.get(idx);
  let beforeNode = removedNode.prev;
  let afterNode = removedNode.next;
  beforeNode.next = afterNode;
  afterNode.prev = beforeNode;
  // removedNode.prev.next = removedNode.next;
  // removedNode.next.prev = removedNode.prev;
  removedNode.next = null, removedNode.prev = null;
  this.length--;
  return removedNode;
 }

}

const list = new DoublyLinkedList();
list.addToTail('double1');
list.addToTail('double2');
list.addToTail('double3');
list.insert(2, 'hiiiii');

console.log(list.get(2));


