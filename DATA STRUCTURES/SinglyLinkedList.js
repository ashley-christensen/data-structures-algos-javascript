//node = piece of data - val
//reference to next node - next

class Node {
 constructor(val) {
  this.val = val;
  this.next = null;
 }
}

// const first = new Node('HI');
// first.next = new Node('THERE');
// first.next.next = new Node('ashley')
// console.log(first);
class SinglyLinkedList {
 constructor() {
  this.head = null;
  this.tail = null;
  this.length = 0;
 }

 addToTail(val) {
  const node = new Node(val);
  if (!this.head) {
   this.head = node;
   this.tail = this.head;
  } else {
   this.tail.next = node;
   this.tail = node;
  }
  this.length++;
  return this;
 }

 traverse() {
  let current = this.head;
  while (current) {
   current = current.next;
  }
 }

 removeFromTail() {
  if (!this.head) return undefined;
  if (this.length === 1) {
   this.head = null;
   this.tail = null;
  }

  let current = this.head;
  let newTail = current;//start together beore loop
  //loop over, while there is a next prop on current
  while (current.next) {
   newTail = current;//new tail is always lagging behind one, until nowhere to move forward to
   current = current.next;//move current foward one
  }//at end, current.val
  this.tail = newTail;
  this.tail.next = null;
  this.length--;
  return current;
 }

 removeFromHead() {
  if (!this.head) return undefined;
  let current = this.head;
  this.head = current.next;
  this.length--;
  if (this.length === 0) {
   this.tail = null;
  }
  return current;
 }

 addToHead(val) {
  let node = new Node(val);
  if (!this.head) {
   this.head = node;
   this.tail = this.head;
  } else {
   node.next = this.head;
   this.head = node;
   this.length++;
   return this;
  }
 }

 get(idx) {
  if (idx < 0 || idx >= this.length) return null;
  let count = 0;
  let current = this.head;
  while (count !== idx) {
   current = current.next;
   count++;
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
  if (idx < 0 || idx > this.length) return false;
  if (idx === 0) return !!this.addToHead(value);
  if (idx === this.length) return !!this.addToTail(value);

  let node = new Node(value);
  let prev = this.get(idx - 1);
  let temp = prev.next;
  prev.next = node;
  node.next = temp;
  this.length++;
  return true;

 }
}

const list = new SinglyLinkedList();

list.addToTail('ashley0');
list.addToTail('ashley1');
list.addToTail('ashley2');
list.addToTail('ashley3');
list.addToTail('ashley4');
list.insert(3, 'is this the third?');
console.log(list.get(3));
console.log(list.get(4));


