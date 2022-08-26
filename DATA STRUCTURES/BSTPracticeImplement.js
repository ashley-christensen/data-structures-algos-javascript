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
  if (this.root === null) {
   this.root = node;
   return this;
  }
  let current = this.root;
  while (true) {
   if (val === current.val) return undefined;//no duplicates wanted
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
 insert(val) {
  let node = new Node(val);
  if (this.root === null) {
   this.root = node;//memorize
  } else {
   let current = this.root;
   while (true) {
    if (current.val === val) return undefined;
    if (current.val < val) {
     current = current.right;
     if (current.right === null) {
      current.right = node;
      return true;
     }
     current = current.right;//remember to traverse!
    } else {
     current = current.left;
     if (current.left === null) {
      current.left = node;
      return true;
     }
     current = current.left;
    }
   }
  }
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
 contains(val) {
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
  return found;
 }

 BFS() {
  let node = this.root;//memo
  let data = [];
  let queue = [];

  queue.push(node);// <-- Q <--
  while (queue.length) {
   node = queue.shift();
   data.push(node.val);//take out val here because data inserted
   node.left && queue.push(node.left);
   node.right && queue.push(node.right);
  }
  return data;
 }
 DFSPreOrder() {
  let current = this.root;
  let data = [];

  function traverse(node) {
   data.push(node.val);
   node.left && traverse(node.left);
   node.right && traverse(node.right);
  }
  traverse(current);
  return data;
 }
 DFSPostOrder() {
  let current = this.root;
  let data = [];
  function traverse(node) {
   node.left && traverse(node.left);
   node.right && traverse(node.right);
   data.push(node.val);
  }
  traverse(current);
  return data;
 }
 DFSInOrder() {
  let current = this.root;
  let data = [];

  function traverse(node) {
   node.left && traverse(node.left);
   data.push(node.val);
   node.right && traverse(node.right);
  }
  traverse(current);
  return data;
 }
}

let tree = new BST();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
console.log(tree);