function binarySearch(arr, elem) {
 let start = 0;
 let end = arr.length - 1;
 let middle = Math.floor((start + end) / 2);

 while (arr[middle] !== elem && start <= end) {
  if (arr[middle] > elem) end = middle - 1;
  else start = middle + 1;
  middle = Math.floor((start + end) / 2); //get a new middle in the loop bc we have new start/end
 }
 if (arr[middle] === elem) return middle;
 else return -1;
}
// console.log(binarySearch([1, 3, 4, 7, 8, 9], 3));

function binarySearch2(arr, el) {
 let min = 0;
 let max = arr.length - 1;

 while (min <= max) {
  let middle = Math.floor((min + max) / 2);
  let current = arr[middle];
  if (current === el) return middle;
  if (current > el) {
   max = middle - 1;
  }
  else if (current < el) {
   min = middle + 1;
  }
 }

 return -1;
}

console.log(binarySearch2([1, 3, 4, 7, 8, 9], 3));
// console.log('hi');