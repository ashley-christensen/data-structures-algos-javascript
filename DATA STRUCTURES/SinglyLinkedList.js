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
 push(val) {
  const newNode = new Node(val);
  if (!this.head) {
   this.head = newNode;
   this.tail = this.head;
  } else {
   this.tail.next = newNode;//put new node at end
   this.tail = newNode;//make the tail the new node
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

 pop() {
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

}
const list = new SinglyLinkedList();

list.push('HEYYYYY');
list.push('ASHLEY');
list.push('WHATSUP');
list.push('1');
list.push('2');
console.log(list);
list.pop();
console.log(list);

