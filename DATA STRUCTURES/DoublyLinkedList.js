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
  let newNode = new Node(val);
  if (!this.head) {
   this.head = newNode;
   this.tail = newNode;
  } else {
   this.tail.next = newNode;
   newNode.prev = this.tail;//set the .prev from new node back to old tail
   this.tail = newNode;//update tail to be new node.\
   this.length++;
   return this;
  }
 }

 removeFromTail() {
  if (!this.head) return undefined;
  let poppedNode = this.tail;
  if (this.length === 1) {
   this.head = null;
   this.tail = null;
  }

  this.tail = poppedNode.prev;
  this.tail.next = null;
  poppedNode.prev = null;

  this.length--;
  return poppedNode;



 }
}

const list = new DoublyLinkedList();
list.addToTail(99);
list.addToTail(98);
list.addToTail(97);
console.log(list.removeFromTail());
// console.log(list);
