// const swap = (arr, idx1, idx2) => {
//  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
// };

// function bubbleSort(arr) {
//  let noSwaps;
//  for (let i = arr.length - 1; i >= 0; i--) {
//   noSwaps = true;
//   for (let j = 0; j <= i - 1; j++) {
//    if (arr[j] > arr[i]) {
//     swap(arr, i, j);
//     noSwaps = false;
//    }
//   }
//   if (noSwaps) break;
//  }
//  return arr;
// }

// console.log(bubbleSort([3, 2, 1, 0, 4]));

const swap = (arr, idx1, idx2) => {
 [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

function bubbleSort(arr) {
 for (let i = arr.length; i >= 0; i--) {

  for (let j = 0; j <= i - 1; j++) {
   if (arr[j] > arr[i]) swap(arr, i, j);
  }
 }
 return arr;

};
// console.log(bubbleSort([3, 2, 1, 0, 4]));