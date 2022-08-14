//node = piece of data - val
//reference to next node - next

class Node {
 constructor(val) {
  this.val = val;
  this.next = null;
 }
}
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
  const node = new Node(val);
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
  if (idx < 0 || idx >= this.length) return false;
  if (idx === 0) return !!this.addToHead(value);
  if (idx === this.length - 1) return !!this.addToTail(value);

  const newNode = new Node(value);
  let prev = this.get(idx - 1);
  let temp = prev.next;
  prev.next = newNode;
  newNode.next = temp;
  this.length++;
  return true;
 }

 remove(idx) {
  if (idx < 0 || idx >= this.length) return undefined;
  if (idx === 0) return this.removeFromHead();
  if (idx === this.length - 1) return this.removeFromTail();

  let prev = this.get(idx - 1);
  let removed = prev.next;
  prev.next = removed.next;
  this.length--;
  return removed;
 }


 reverse() {
 }

 insert2(idx, val) {
  let node = new Node(val);
  if (idx < 0 || idx >= this.length) return false;
  if (idx === 0) return !!this.addToHead2(val);
  if (idx === this.length) return !!this.addToTail2(val);

  let beforeNode = this.get(idx - 1);
  let afterNode = prev.next;
  beforeNode.next = node;
  node.next = afterNode;

  this.length++;
  return true;
 }

 remove2(idx) {
  if (idx < 0 || idx >= this.length) return undefined;
  if (idx === 0) return this.removeFromHead2();
  if (idx === this.length - 1) return this.removeFromTail2();
  let prev = this.get(idx - 1);
  let removed = prev.next;
  let afterNode = removed.next;
  prev.next = afterNode;
  this.length--;
  return removed;
 }

 get2(idx) {
  if (idx < 0 || idx >= this.length) return undefined;

  let count = 0;
  let current = this.head;

  while (count !== idx) {
   current = current.next;
   count++;
  }
  return current;
 }

 addToTail2(val) {
  let node = new Node(val);
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

 removeFromTail2() {
  if (!this.head) return undefined;
  if (this.length === 1) {
   this.head = null;
   this.tail = null;
  }
  // ??^
  let newTail = this.head;
  let current = this.head;
  while (current.next) {
   prev = current;
   current = current.next;
  }
  this.tail = newTail;
  newTail.next = null;
  this.length--;
  return current;

 }

 addToHead2(val) {
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

 removeFromHead2() {
  if (!this.head) return undefined;
  let oldHead = this.head;
  this.head = oldHead.next;
  // oldHead.next = null;??
  this.length--;
  if (this.length === 0) {
   this.tail = null;
  }
  // ??^
  return oldHead;
 }

}


const list = new SinglyLinkedList();

list.addToTail2('ashley0');
list.addToTail2('ashley1');
list.addToTail2('ashley2');
list.addToTail2('ashley3');
list.addToTail2('ashley4');
list.insert2(0, 'this is double 0');
console.log(list);




// remove from tail
//removefromhead2


// remove from tail
// while current.next, check for length of 1
//removefromhead2
//after decreasing length, if the last item was just taken out, tail needs to be set to null
