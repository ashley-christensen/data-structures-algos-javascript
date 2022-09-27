function getLength(countA, countB, maxA, maxB) {
 let count = 0;
 function getOptimalStringLength(countA, countB, maxA, maxB) {
  if (countA <= 1 && countB <= 0) return count += 1;
  if (countB <= 1 && countA <= 0) return count += 1;

  if (countA > 0 && maxA > 0) {
   count++;
   return "A" + getOptimalStringLength(countA - 1, countB, maxA - 1, maxB);
  }
  else if (countB > 0 && maxB > 0) {
   count++;
   return "B" + getOptimalStringLength(countA, countB - 1, maxA, maxB - 1);
  }
  else if (countA > 0 && maxA <= 0) {
   count++;
   return "A" + getOptimalStringLength(countA - 1, countB, maxA - 1, maxB);
  }
  else if (countB > 0 && maxB <= 0) {
   count++;
   return "B" + getOptimalStringLength(countA, countB - 1, maxA, maxB - 1);
  }
 }
 getOptimalStringLength(countA, countB, maxA, maxB);
 return count;
}


console.log(getLength(3, 3, 2, 2));