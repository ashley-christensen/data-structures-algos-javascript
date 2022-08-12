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
  }
  this.tail = poppedNode;
  this.tail.next = null;
  poppedNode.prev = null;
  this.length--;
  return poppedNode;
 }


}

const list = new DoublyLinkedList();
list.addToTail('double1');
list.addToTail('double2');
list.addToTail('double3');
list.removeFromTail();
console.log(list.length);
