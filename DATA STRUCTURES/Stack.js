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
  this.size++;
  return this;

 }

 removeFromHead() {
  if (!this.first) return undefined;
  if (this.length === 0) {
   this.last = null;
  }
  let popped = this.first;
  this.first = popped.next;
  this.size--;
  return popped;
 }
}

let stack = new Stack();
stack.addToHead('you');
stack.addToHead('are');
stack.addToHead('how');
stack.addToHead('hello');
console.log(stack.removeFromHead());