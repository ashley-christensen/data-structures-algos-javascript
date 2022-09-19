class Heap {
 constructor() {
  this.values = [];
 }


 bubbleUp() {
  let index = this.values.length - 1;
  let element = this.values[index];
  while (index > 0) {//only need parentIndex to get to 0
   let parentIndex = Math.floor((index - 1) / 2);
   let parent = this.values[parentIndex];
   if (element <= parent) break;
   this.values[parentIndex] = element;
   this.values[index] = parent;
   index = parentIndex;
  }
 }
 insert(val) {
  this.values.push(val);
  this.bubbleUp();
 }
 sinkDown() {
  let idx = 0;//define idx0, length, elatidx0
  let length = this.values.length;
  let element = this.values[0];
  while (true) {//childindeces and el=arr[childindeces]
   let leftChildIdx = 2 * idx + 1;
   let rightChildIdx = 2 * idx + 2;
   let leftChild, rightChild;//must check bounds
   let swap = null;//keeps track of position we are going to swap with
   if (leftChildIdx < length) {
    leftChild = this.values[leftChildIdx];
    if (leftChild > element) {//easier to have both in variable
     swap = leftChildIdx;//variable keeps TRACK of position swapping with, reset to null each time thru
    }
   }

   if (swap === null) break;


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

 insert2(val) {
  this.values.push(val);
  this.bubbleUp();
 }

 bubbleUp2() {
  let index = this.values.length - 1;
  let element = this.values[index];
  while (index > 0) {
   let parentIndex = Math.floor((index - 1) / 2);
   let parent = this.values[parentIndex];
   if (parent >= element) break;
   this.values[parentIndex] = element;
   this.values[index] = parent;
   index = parentIndex;
  }
 }


}

let heap = new Heap();
heap.insert(4);
heap.insert(444);
heap.insert(5);
heap.insert(666);
heap.insert(44444);
console.log(heap);