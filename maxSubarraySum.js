function maxSubarraySum(arr, n) {
 //max and curr
 //find max ..of first subarray max += arr[i]
 //set curr to max
 //go from n to length and slide window curr = curr - arr[i-n] + arr[i];
 //max = Math.max(curr, max);
 let max = 0;
 let curr = 0;

 for (let i = 0; i < n; i++) {
  max += arr[i];
 }
 curr = max;
 for (let i = n; i < arr.length; i++) {
  curr = curr - arr[i - n] + arr[i];
  max = Math.max(curr, max);
 }
 return max;

}

console.log(maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));