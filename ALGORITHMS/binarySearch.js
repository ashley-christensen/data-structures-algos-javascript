// function binarySearch(arr, elem) {
//  let start = 0;
//  let end = arr.length - 1;
//  let middle = Math.floor((start + end) / 2);

//  while (arr[middle] !== elem && start <= end) {
//   if (arr[middle] > elem) end = middle - 1;
//   else start = middle + 1;
//   middle = Math.floor((start + end) / 2); //get a new middle in the loop bc we have new start/end
//  }
//  if (arr[middle] === elem) return middle;
//  else return -1;
// }
// console.log(binarySearch([1, 3, 4, 7, 8, 9], 3));

// function binarySearch2(arr, el) {
//  let min = 0;
//  let max = arr.length - 1;

//  while (min <= max) {
//   let middle = Math.floor((min + max) / 2);
//   let current = arr[middle];
//   if (current === el) return middle;
//   if (current > el) {
//    max = middle - 1;
//   }
//   else if (current < el) {
//    min = middle + 1;
//   }
//  }

//  return -1;
// }

// console.log(binarySearch2([1, 3, 4, 7, 8, 9], 9));
// console.log('hi');

// function binarySearch(arr, n) {
//  let left = 0;
//  let right = arr.length - 1;

//  while (left <= right) {
//   let middle = Math.floor((left + right) / 2);
//   let current = arr[middle];
//   if (current === n) return middle;
//   if (current > n) {
//    right = middle - 1;
//   } else if (current < n) {
//    left = middle + 1;
//   }
//  }
//  return -1;
// }




// console.log(binarySearch([1, 3, 4, 7, 8, 9], 9));

function binaryyS(arr, val) {
 let start = 0;
 let end = arr.length - 1;

 while (start < end) {
  let mid = Math.floor((start + end) / 2);
  let current = arr[mid];

  if (val < current) {
   end = mid - 1;
  }
  else if (val > current) {
   start = mid + 1;
  }
  else if (val === current) {
   return mid;
  }

 }
 return -1;
}
// console.log(binaryyS([0, 1, 2, 3, 4, 5, 6, 7], 3));

function binarySearchhh(arr, el) {
 let start = 0;
 let end = arr.length - 1;

 while (start < end) {
  let mid = Math.floor((start + end) / 2);
  let temp = arr[mid];

  if (el < temp) {
   end = mid - 1;
  }
  else if (el > temp) {
   start = mid + 1;
  }
  else if (el === temp) {
   return mid;
  } else {
   return -1;
  }
 }

}
console.log(binarySearchhh([0, 1, 2, 3, 4, 5, 6, 7], 5));