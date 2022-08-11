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

}
const list = new SinglyLinkedList();

list.push('HEYYYYY');
list.push('ASHLEY');
list.push('WHATSUP');
console.log(list.addToHead("1st item"));
console.log(list);


