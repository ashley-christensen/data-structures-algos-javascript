const swap = (arr, idx1, idx2) => {
 [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};


// function selectionSort(arr) {
//  for (let i = 0; i < arr.length; i++) {
//   let lowest = i;
//   for (let j = i + 1; j < arr.length; j--) {
//    if (arr[j] < arr[lowest]) {
//     lowest = j;
//    }
//   }
//   if (i !== lowest) {
//    swap(arr, i, lowest);
//   }
//  }
//  return arr;
// }



// function selectionSort(arr) {
//  let n = arr.length;
//  for (let i = 0; i < n; i++) {
//   let lowest = i;
//   for (let j = i + 1; j < n; j++) {
//    if (arr[j] < arr[lowest]) lowest = j;
//   }
//   if (i !== lowest) {
//    swap(arr, i, lowest);
//   }
//  }
//  return arr;
// }

// console.log(selectionSort([1, 2, 19, 18, 17]));


//MOST WORKABLE FOR ME
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

// console.log(selectionSort([1, 2, 19, 18, 17]));

function selSort(arr) {
 let n = arr.length;
 for (let i = 0; i < n; i++) {
  let lowest = i;
  for (let j = i + 1; j < n; j++) {
   if (arr[j] < arr[lowest]) {
    lowest = j;
   }
  }
  if (i !== lowest) {
   swap(arr, i, lowest);
  }
 }
 return arr;
}

console.log(selSort([6, 5, 4, 8, 9, 0]));