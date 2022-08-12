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

 removeFromHead() {
  if (!this.head) return undefined;
  let oldHead = this.head;
  if (this.length === 1) {
   this.head = null;
   this.tail = null;
  }
  this.head = oldHead.next;
  this.head.prev = null;
  oldHead.next = null;
  this.length--;
  return oldHead;

 }
 //  if (!this.head) return undefined;
 //  let head = this.head;
 //  this.head = this.head.next;
 //  head.prev = null;
 //  this.length--;
 //  return head;
 // }


}

const list = new DoublyLinkedList();
list.addToTail('double1');
list.addToTail('double2');
list.addToTail('double3');
console.log(list.removeFromHead());
console.log(list.length);
