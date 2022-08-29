function insertionSort(arr) {
 let n = arr.length;
 for (let i = 1; i < n; i++) {
  let currentVal = arr[i];
  let j = i - 1;
  for (; j >= 0 && arr[j] > currentVal; j--) {//each arr[j] is compared to CURRENTVAL 
   arr[j + 1] = arr[j];//move value forward one since it meets arr[j] > currentVal condition
   console.log(arr);
  }
  arr[j + 1] = currentVal;
 }
 return arr;
}

// console.log(insertionSort([2, 1, 9, 76, 4]));

function insertSort(arr) {
 let n = arr.length;
 for (let i = 1; i < n; i++) {
  let currentVal = arr[i], j = i - 1;
  for (; j >= 0 && arr[j] > currentVal; j--) {
   arr[j + 1] = arr[j];
  }
  arr[j + 1] = currentVal;
 }
 return arr;
}

