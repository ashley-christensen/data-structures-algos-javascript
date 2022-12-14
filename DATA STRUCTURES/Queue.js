//Build Queue with array

// let q= [];
// q.push('first');
// q.push('second');
// q.push('third');
//  q.shift();
// console.log(q);

class Node {
 constructor(val) {
  this.val = val;
  this.next = null;
 }
}

class Queue {
 constructor() {
  this.first = null;
  this.last = null;
  this.size = 0;
 }

 enqueue(val) {//addToTail
  let node = new Node(val);
  if (!this.first) {
   this.first = node;
   this.last = this.first;
  } else {
   this.last.next = node;
   this.last = node;
  }
  return ++this.size;
 }

 dequeue() {//removeFromHead
  if (!this.first) return null;

  let removed = this.first;
  if (this.first === this.last) {//if it's the last item, we work on head, need tail updated
   this.last = null;
  }
  this.first = this.first.next;//first is now the net item in the q
  this.size--;
  return removed.val;
 }

}

let q = new Queue();
q.enqueue('hello');
q.enqueue('how');
q.enqueue('are');
q.enqueue('you');
console.log(q);