//linearSearch
// This function should accept an array and value and return the index at which the value exists or - 1 if the value can not be found.Do not use indexOf to solve this! This function should use iteration not recursion.;

function search(arr, val) {
 for (let i = 0; i < arr.length; i++) {
  if (arr[i] === val) return i;
 }
 return -1;
}

// console.log(search([0, 1, 2, 3, 4, 5], 3));

function binarySearch(arr, val) {
 let left = 0;
 let right = arr.length - 1;

 while (left <= right) {
  let middle = Math.floor((left + right) / 2);
  let current = arr[middle];

  if (val < current) {
   right = middle - 1;
  } else {
   left = middle + 1;
  }
  if (val === current) return middle;
 }
 return -1;

}

console.log(binarySearch([0, 1, 2, 3, 4, 5], 3));