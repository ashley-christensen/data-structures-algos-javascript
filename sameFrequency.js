//write a function called same frequency, given two positive integers find out if the two numbers have the same frequency of digits. your solution must have o(n) complexity

function sameFrequency(int1, int2) {
 const str1 = int1.toString();
 const str2 = int2.toString();
 const obj1 = {};

 //construct a string1 object holding frequency named ob1
 //go through char of string 2 and if !ob1[char2] return false or if it's 0
 //if ob1[char2], ob1[char2] = ob1[char2]-1
 //gone through entire string2 and for every character that matches in object take away one

 for (let char of str1) {
  obj1[char] = obj1[char] + 1 || 1;
 }

 for (let char2 of str2) {
  if (!obj1[char2]) return false;
  obj1[char2] = obj1[char2] - 1;
 }
 return true;
}

// console.log(sameFrequency(232, 322));