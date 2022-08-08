//write averagePair. given SORTED array of integers and a TARGET average, determine if there is  a pair of values in the array where the average of the pair equals the TARGET average. o(n) space o(1)

function averagePair(arr, ave) {
 //left at 0, right at end of index
 //while left < right
 //const currAve =  (arr[left] + arr[right])/2
 //if currAve = ave return true;
 //if currAve > ave right -1
 //if currAve < ave left + 1

 //return false if it's gone through entire array and left is less than right and nothing found

 let left = 0;
 let right = arr.length - 1;

 while (left < right) {
  let currAve = ((arr[left] + arr[right]) / 2);

  if (currAve === ave) {
   return true;
  }
  else if (currAve > ave) {
   right--;
  }
  else if (currAve < ave) {
   left += 1;
  }
 }

 return false;
}

console.log(averagePair([1, 2, 3, 4, 5, 6, 7, 8, 9], 5));