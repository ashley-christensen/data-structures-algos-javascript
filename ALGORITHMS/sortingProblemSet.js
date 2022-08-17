function swap(arr, idx1, idx2) {
 [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

// function bubbleSort(arr) {
//  let n = arr.length;
//  let noSwap = true;

//  for (let i = 0; i < n - 1; i++) {
//   for (let j = 0; j <= n - 1 - i; j++) {
//    if (arr[j] > arr[j + 1]) {
//     swap(arr, j, j + 1);
//     noSwap = false;
//    }
//   }
//   if (noSwap) break;
//  }
//  return arr;
// }

// // console.log(bubbleSort([4, 3, 2, 1]));


// function selectionSort(arr) {
//  let n = arr.length;
//  for (let i = 0; i < n; i++) {
//   let lowest = i;
//   for (let j = i + 1; j < n; j++) {
//    if (arr[j] < arr[lowest]) lowest = j;
//   }
//   if (i !== lowest) swap(arr, i, lowest);
//  }
//  return arr;
// }

// console.log(selectionSort([4, 3, 3, 3, 2, 6, 1]));

function bubbleSort(arr) {
 let n = arr.length;
 let noSwap = true;

 for (let i = 0; i < n - 1; i++) {
  for (let j = 0; j <= n - i - 1; j++) {
   if (arr[j] > arr[j + 1]) {
    swap(arr, j, j + 1);
    noSwap = false;
   }
  }
  if (noSwap) break;
 }
 return arr;
}

function selectionSort(arr) {
 let n = arr.length;

 for (let i = 0; i < n; i++) {
  let lowest = i;
  for (let j = i + 1; j < n; j++) {
   if (arr[j] < arr[lowest]) lowest = j;
  }
  if (i !== lowest) swap(arr, i, lowest);
 }
 return arr;
}

console.log(bubbleSort([5, 4, 3, 2, 1]));