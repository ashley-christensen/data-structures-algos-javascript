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

 insert2(idx, val) {
  if (idx < 0 || idx >= this.length) return false;
  if (idx === 0) return !!this.addToHead2(val);
  if (idx === this.length) return !!this.addToTail2(val);

  let node = new Node(val);

  let beforeNode = this.get2(idx - 1);
  let afterNode = beforeNode.next;
  beforeNode.next = node;
  afterNode.prev = node;
  node.next = afterNode;
  node.prev = beforeNode;

  this.length++;
  return true;
 }

 remove2(idx) {
  // if (!this.head) return undefined;
  if (idx < 0 || idx >= this.length) return undefined;
  if (idx === 0) return this.removeFromHead2();
  if (idx === this.length - 1) return this.removeFromTail2();

  let foundNode = this.get2(idx);
  let prev = foundNode.prev;
  let after = foundNode.next;
  after.prev = prev, prev.next = after;
  foundNode.prev = null, foundNode.next = null;
  this.length--;
  return foundNode;
 }

 removeFromTail2() {
  if (!this.head) return null;
  let removed = this.tail;
  if (this.length === 1) {
   this.head = null;
   this.tail = null;
  } else {
   this.tail = removed.prev;
   removed.prev = null;
   this.tail.next = null;
  }
  this.length--;
  return removed;
 }

 removeFromHead2() {
  if (!this.head) return null;
  let removed = this.head;
  if (this.length === 1) {
   this.head = null;
   this.tail = null;
  } else {
   this.head = removed.next;
   removed.next = null;
   this.head.prev = null;
  }
  this.length--;
  return removed;
 }


 addToTail2(val) {
  let node = new Node(val);
  if (!this.head) {
   this.head = node;
   this.tail = this.head;
  } else {
   this.tail.next = node;
   node.prev = this.tail;
   this.tail = node;
  }
  this.length++;
  return this;
 }


 addToHead2(val) {
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

 get2(idx) {
  if (idx < 0 || idx >= this.length) return undefined;
  let count, current;
  if (idx <= this.length / 2) {
   count = 0;
   current = this.head;
   while (count !== idx) {
    current = current.next;
    count++;
   }
  } else {
   current = current.prev;
   count--;
  }
  return current;
 }

}

const list = new DoublyLinkedList();
list.addToTail2('double1');
list.addToTail2('double2');
list.addToTail2('double3');
list.insert2(2, 'hiiiii');

console.log(list.get(2));

//remove2
//removefromhead2




// remove2
//no check for !this.head

// remove from head:
// oldhead before checking 1 length
//  this.head = oldHead.next;
// this.head.prev = null;
// oldHead.next = null;