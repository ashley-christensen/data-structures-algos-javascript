// function maxSubarraySum(arr, num) {
//     if (num > arr.length) {
//         return null;
//     }
//     let max = -Infinity
//     for (let i = 0; i < arr.length - num + 1; i++) {
//         temp = 0
//         for (let j = 0; j < num; j++) {
//             temp += arr[i + j]
//         }
//         if (temp > max) {
//             max = temp;
//         }
//         console.log(temp, max)
//     }
//     return max;
// }

// console.log(maxSubarraySum([2,6,9,2,1,8,5,6,3],3))

//set count to 3 
//set max to 0
//

function maxSubarraySum(arr, num) {
 let max = 0;
 let curr = 0;
 if (arr.length < num) return null;

 for (let i = 0; i < num; i++) {
  max += arr[i];
 }
 curr = max;

 for (let i = num; i < arr.length; i++) {
  curr = curr - arr[i - num] + arr[i];
  max = Math.max(curr, max);
 }
 return max;
}
// console.log(maxSubarraySum([2,6,9,2,1,8,5,6,3],3))


function maxSubarraySum2(array, n) {
 let max = 0;
 let currSum = 0;

 for (let i = 0; i < n; i++) {
  max += array[i];
 }
 currSum = max;

 for (let i = n; i < array.length - 1; i++) {
  currSum = currSum - array[i - n] + array[i];
  max = Math.max(currSum, max);
 }
 return max;
}
// console.log(maxSubarraySum2([2,6,9,2,1,8,5,6,3],3))

function maxSubarraySum3(arr, n) {
 if (arr.length < n) return null;
 //2 variables, one with winSum, and one with max
 let winSum = 0;
 let max = 0;

 //find max up to n and set it to max
 for (let i = 0; i < n; i++) {
  max += arr[i];
 }
 winSum = max;

 //to go in and find other subarray sums and compare max for each

 for (let i = n; i < arr.length; i++) {
  winSum = winSum - arr[i - n] + arr[i];
  max = Math.max(winSum, max);
 }
 return max;

}

// console.log(maxSubarraySum3([2,6,9,2,1,8,5,6,3],3))