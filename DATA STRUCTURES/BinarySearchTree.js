//Binary Search Tree
class Node {
 constructor(val) {
  this.val = val;
  this.left = null;
  this.right = null;
 }
}
class BinarySearchTree {
 constructor() {
  this.root = null;
 }
 insert(val) {
  let node = new Node(val);
  if (this.root === null) {
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
   }
   else if (val > current.val) {
    if (current.right === null) {
     current.right = node;
     return this;
    }
    current = current.right;
   }
  }
 }
 contains(val) {
  if (this.root === null) return false;

  let current = this.root;
  let found = false;
  while (current && !found) {//cannot update current and loop over, and have not found
   if (val < current.val) {
    current = current.left;
   }
   else if (val > current.val) {
    current = current.right;
   } else {
    return true;
   }
  }
  return false;
 }

 contains2(val) {
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
    return true;
   }
  }
  return false;
 }

 find(val) {
  if (this.root === null) return undefined;
  let found = false;
  let current = this.root;
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
}


let tree = new BinarySearchTree();
tree.insert(12);
tree.insert(6);
tree.insert(13);
console.log(tree.find(7));

//Breadth First Search... siblings BEFORE children
//1. helper Q (push-to tail, shift-from head) and ARR return list of values
//2. root -> Q
//3. Loop while Q has values
//-DeQ node from front of Q and push into ARR
//if DeQed has left, add to Q
//if DeQed has right, add to Q
//4. return ARR (full of sibling values first, and then children)