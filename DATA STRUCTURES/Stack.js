// //Array Implemetation, store in a way that first thing is is last removed, last is first removed.
// let _stack = [];
// stack.unshift('create new file');
// stack.unshift('resize file');
// stack.unshift('cloned out wrinkle');

// console.log(stack.shift());
//pop is where most recently added thing is what i remove first

//Linked List Implementation 
class Node {
 constructor(val) {
  this.val = val;
  this.next = null;
 }
}

class Stack {
 constructor() {
  this.first = null;
  this.last = null;
  this.size = 0;
 }

 addToHead(val) {
  let node = new Node(val);
  if (!this.first) {
   this.first = node;
   this.last = node;
  } else {
   node.next = this.first;
   this.first = node;
  }
  return ++this.size;

 }

 removeFromHead() {
  if (!this.first) return null;
  let popped = this.first;
  if (this.first === this.last) {
   this.last = null;//if one thing left and you take it off, must update "last" 
  }
  this.first = popped.next;
  this.size--;
  return popped.val;//should return the value
 }
}

let stack = new Stack();

stack.addToHead('added to head first');
stack.addToHead('added to head 2nd');
stack.addToHead('added to head third');
console.log(stack);