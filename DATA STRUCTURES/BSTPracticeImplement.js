class Node {
 constructor(val) {
  this.val = val;
  this.left = null;
  this.right = null;
 }
}

class BST {
 constructor() {
  this.root = null;
 }
 insert(val) {
  let node = new Node(val);
  if (!this.root) {
   this.root = node;
   return this;
  }
  let current = this.root;
  while (true) {
   if (val === current.val) return undefined;
   if (val < current.val) {
    if (current.left === null) {
     current.left = node;
     return this;
    }
    current = current.left;
   } else {
    if (current.right === null) {
     current.right = node;
     return this;
    }
    current = current.right;
   }
  }
 }

 find(val) {
  if (!this.root) return undefined;
  let current = this.root;
  let found = false;
  while (current && !found) {
   if (val < current.val) {
    current = current.left;
   }
   else if (val > current.val) {
    current = current.right;
   } else {
    found = true;
   }
  }
  if (!found) return undefined;
  return current;
 }
 contains(val) {
  if (this.root === null) return false;
  let current = this.root;
  let found = false;
  while (current && !found) {
   if (val < current.val) {
    current = current.left;
   }
   else if (val > current.val) {
    current = current.right;
   } else {
    found = true;
   }
  }
  return found;
 }
 BFS() { }
 DFSPreOrder() { }
 DFSPostOrder() { }
 DFSInOrder() { }
}

let tree = new BST();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
console.log(tree);