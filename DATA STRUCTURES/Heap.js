class MaxBinaryHeap {
 constructor() {
  this.values = [];
 }


 bubbleUp() {
  let index = this.values.length - 1;
  let element = this.values[index];
  while (index > 0) {//if index is 0, nothing to swap with
   let parentIndex = Math.floor((index - 1) / 2);
   let parent = this.values[parentIndex];
   if (element <= parent) break;
   this.values[parentIndex] = element;
   this.values[index] = parent;
   index = parentIndex;//NEED to update index, or it'll be the same each time!
  }
 }
 insert(val) {
  this.values.push(val);
  this.bubbleUp();
 }

 sinkDown() {
  let index = 0;
  const length = this.values.length;
  const element = this.values[0]; //always will be this VALUE

  while (true) {
   let leftChildIdx = 2 * index + 1;
   let rightChildIdx = 2 * index + 2;

   let leftChild, rightChild; //we don't know if they exist yet
   let swap = null;
   //if left child is inbounds
   if (leftChildIdx < length) {
    leftChild = this.values[leftChildIdx]; //have left child in variable, compare with element
    if (leftChild > element) {
     swap = leftChildIdx;
    }
   }
   if (rightChildIdx < length) {
    rightChild = this.values[rightChildIdx];
    if (
     swap === null && rightChild > element || //left side was not swapped
     swap !== null && rightChild > leftChild //left side was swapped
    ) {
     swap = rightChildIdx;
    }
   }
   if (swap === null) break;//at some point we swap=true, swap below
   this.values[index] = this.values[swap]; //index we chose to swap with 
   this.values[swap] = element;
   index = swap; //now looking at children of index that corresponds
  }
 }

 extractMax() {
  //take first element, remove, replace with last element
  let max = this.values[0];
  let end = this.values.pop();
  this.values[0] = end;
  this.sinkDown();
  return max;
 }



}

let heap = new MaxBinaryHeap();
heap.insert(55);
heap.insert(39);
heap.insert(42);
heap.insert(18);
console.log(heap.extractMax());
console.log(heap);