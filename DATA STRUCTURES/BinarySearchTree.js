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
  } else {
   let current = this.root;
   while (true) {
    if (val < current.val) {
     if (current.left === null) {
      current.left = node;
      return this;
     } else {
      current = current.left;
     }
    }
    else if (val > current.val) {
     if (current.right === null) {
      current.right = node;
      return this;
     } else {
      current = current.right;
     }
    }
   }
  }
 }



}




let tree = new BinarySearchTree();
tree.insert2(12);
tree.insert2(6);
tree.insert2(3);
tree.insert2(14);
console.log(tree);