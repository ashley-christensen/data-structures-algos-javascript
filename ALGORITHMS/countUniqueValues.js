//a list of numbers in ascending order, count the values that are unique 
//input is a sorted array of numbers
//empty? negative numbers yes, invalid? never
//output is a count variable returned that is the number of unique values
//derive output from input? 
//array, count, loop, 2 pointers next to each other

//[1,1,1,1,1,2] = 2
//[-1, 1,2,2,3] = 4
//[] == undefined

//pointer at index 0 and a a pointer at index 1 called left and right
//while the right pointer is less than array.length - 1, 
//if left index is 0, add 1 to counter
//check if values are the same. if so, continue
//else if values are not the same add one to counter add 1 to both left and right.
//if array is undefined, return [];

// function countUniqueValues(array) {
//  let left = 0;
//  let right = 1;
//  let count = 1;

//  while (right <= array.length - 1) {
//   if (array[left] === array[right]) {
//    left += 1;
//    right += 1;
//   } else {
//    count += 1;
//    left += 1;
//    right += 1;
//   }
//  }

//  return count;

// }

// console.log(countUniqueValues([1, 1, 1, 1, 1, 2, 3, 3, 3, 4]));



// //set i to 0 index, j to 1 index

// //while j is less= than array.length-1
// //see if they MATCH in value, 
// //keep i where it is and move j UP ONE
// //see if they don't match in value WE HAVE NEW UNIQUE
// //move i up one, set value at i to the value j just found
// // return i + 1

// function countUniqueValues2(array) {
//  let i = 0;
//  let j = 1;

//  while (j <= array.length - 1) {
//   if (array[i] === array[j]) {
//    j += 1;
//   } else {
//    i += 1;
//    array[i] = array[j];
//    j += 1;
//   }
//  }

//  return i + 1;

// }

// /a list of numbers in ascending order, count the values that are unique 
//input is a sorted array of numbers

// console.log(countUniqueValues2([-1, 1, 3, 3, 4, 4, 5, 5,]));

function countUnique(array) {


}