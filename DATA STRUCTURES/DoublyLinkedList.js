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
  }
  this.tail.next = node;
  node.prev = this.tail;
  this.tail = node;
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
   this.tail = poppedNode;
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

}

const list = new DoublyLinkedList();
list.addToTail('double1');
list.addToTail('double2');
list.addToTail('double3');

console.log(list.set(0, 'zero'));
