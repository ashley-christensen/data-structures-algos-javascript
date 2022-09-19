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


 mergeSortedLists(l1, l2) {
  let dummy = new Node(-Infinity);
  let prev = dummy;

  while (l1.val && l2.val) {
   if (l1 <= l2) {
    prev.next = l1;
    prev = l1;
    l1 = l1.next;
   } else {
    prev.next = l2;
    prev = l2;
    l2 = l2.next;
   }
  }
  if (!l1) {
   prev.next = l2;
  }
  if (!l2) {
   prev.next = l1;
  }

  return dummy.next;
 }
}
//Running pointer is beforeNode = DUMMy(-1000)

//addition or subtraction of Node? DUMMY NODE before to keep track of prev value
//let DUMMY = -10000
//let beforeNode = DUMMY

//traverse, while value in L1/L2 is not NULL
//if we run out of a list, we take remaining of other and attach