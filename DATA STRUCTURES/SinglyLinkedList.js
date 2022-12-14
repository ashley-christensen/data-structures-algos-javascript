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
   this.tail = null;//update tail if taking last thing off list
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

}

const list = new SinglyLinkedList();

list.addToTail2('ashley0');
list.addToTail2('ashley1');
list.addToTail2('ashley2');
list.addToTail2('ashley3');
list.addToTail2('ashley4');
list.insert2(0, 'this is double 0');
console.log(list);




