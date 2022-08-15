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

 push(val) {
  let node = new Node(val);
  if (!this.first) {
   this.first = node;
   this.last = node;
  } else {
   this.last.next = node;
   this.last = node;
  }
  this.size++;
  return this.size;
 }

 pop() {
  if (!this.first) return undefined;
  if (this.length === 1) {
   this.first = null;
   this.last = null;
  }
  let newLast = this.first;
  let current = this.first;
  while (current.next) {
   newLast = current;
   current = current.next;
  }
  this.last = newLast;
  newLast.next = null;
  this.size--;
  return current;

 }
}

let stack = new Stack();
stack.push('hello');
stack.push('how');
stack.push('are');
stack.push('you');
console.log(stack.pop());