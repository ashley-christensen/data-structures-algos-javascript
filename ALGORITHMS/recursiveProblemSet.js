//Write a function called "power", which accepts a base and an exponent. the function should return the power of the base to the exponent. This function should mimic the functionality of Math.pow()
//inputs are base case and exponent
//outputs are one value that is hte base multiplied exp times to itself
//we can derive output
//base exp, return value that comes

//(2, 3) 2*2*2 = 8
//(1, 4) 1*1*1*1 = 4

//exp can be like count. so when exp is 1, return? 
//exp--
///base never changes but exp goes down
//call base * power()


function power(base, exp) {
 // base =2
 // exp=0
 if (exp <= 0) {
  return 1;
 } else {
  exp--;
  return base * power(base, exp);
 }
}

// console.log(power(2, 3));

function productOfArray(arr) {
 let product = 1;

 function helper(helperInput) {
  if (helperInput.length === 0) return;
  product *= helperInput[0];
  helper(helperInput.slice(1));
 }

 helper(arr);
 return product;
}

// console.log("result:", productOfArray([1, 2, 3]));

function recursiveRange(num) {
 if (num === 1) return 1;

 console.log(num);
 return num + recursiveRange(num - 1);
}

// console.log(recursiveRange(4));
//4 + 3 + 2 + 1

function fib(num) {
 if (num < 2) return num;
 console.log("number is:", num);
 return fib(num - 1) + fib(num - 2);
}

// console.log('solution', fib(7));


function reverse(str) {
 if (str.length <= 1) return str;
 return (reverse(str.slice(1))) + str[0];//stack returns these backwards
}
//reverse('appy') + h; yppa + h = yppah
//reverse('ppy') + a;ypp + a = yppa
//reverse('py') + p; yp + p = ypp
//reverse('y') + p; y + p = yp
//reverse('') + y; '' + y = y
//reverse('') this call to reverseStr and its input HITS our base case, move back up returns full return

// console.log((reverse('hello')));

function isPalindrome(str) {
 if (str.length === 1) return true;
 if (str.length === 2) return str[0] === str[1];
 if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1));
 return false;
}
//t and t equal each other so ..
//ispalindrome('acoca');true 
//ispalindrome('coc');true
//ispalindrome('o') true//

// console.log(isPalindrome('tacocat'));

//Write a recursive function called someRecursive which accepts an array, and a callback. the function returns true if a single value in the array returns true when passed to the callback. otherwise it returns false;

function someRecursive(arr, callback) {
 if (arr <= 0) return true;
 if (callback(arr[0])) return true;
 someRecursive(arr.slice(1), callback);
}

function flatten(arr) {


}

function capitalizeFirst(arr) {
 let newArr = [];

 function helper(helperInput) {
  if (helperInput.length === 0) return helperInput;

  newArr.push(helperInput[0].charAt(0).toUpperCase() + helperInput[0].slice(1));

  return helper(helperInput.slice(1));
 }
 helper(arr);
 return newArr;


}

//['cat', 'dog', 'Hello'] => ['Cat', 'Dog', 'Hello']
// console.log(capitalizeFirst(['dog', 'cat']));

function capitalizeWords(arr) {
 let newArr = [];

 function helper(helperInput) {
  if (helperInput.length === 0) return helperInput;
  newArr.push(helperInput[0].toUpperCase());
  helper(helperInput.slice(1));
 }

 helper(arr);
 return newArr;
}
// console.log(capitalizeWords(['cat', 'ashley', 'will']));

//write a function called prodOfArray() which takes an array of numbers and returns the product of them all

function prodOfArray(arr) {
 if (arr.length === 0) return 1;
 return arr[0] * prodOfArray(arr.slice(1));
}

// console.log(prodOfArray([1, 2, 3]));

function pow(base, exp) {
 if (exp <= 0) return 1;
 return base * pow(base, exp - 1);
}

// console.log(pow(2, 3));

//write function called recursive range that given a number returns the sum of all numbers added from 0 to num
function recRange(num) {
 if (num === 0) return 0;
 return num + recRange(num - 1);
}

// console.log(recRange(3));

function rev(str) {
 if (str.length === 1) return str;
 return rev(str.slice(1)) + str[0];
}

// console.log(rev('ashley'));

function isPal(str) {
 if (str.length === 1) return true;
 if (str.length === 2) return (str[0] === str[1]);
 if (str[0] === str.slice(-1)) return isPal(str.slice(1, -1));
 return false;
}

// console.log(isPal('tacocatt'));

// linearSearchRecursive
//This function should accept an array and value and return the index at which the value exists or - 1 if the value can not be found.Do not use indexOf to solve this! This function should use recursion.;
function linearSearchRecursive(arr, val) {
 let i = 0;
 function helper(helperInput) {
  if (helperInput[0] === val) return;
  i++;
  return helper(helperInput.slice(1), val);

 }
 helper(arr);
 return i;
}

// console.log(linearSearchRecursive([0, 1, 2, 3, 4], 4));


function capWords(arr) {
 let result = [];
 function helper(helperInput) {
  if (helperInput.length === 0) return;
  result.push(helperInput[0].charAt(0).toUpperCase() + helperInput[0].slice(1));
  helper(helperInput.slice(1));
 }
 helper(arr);
 return result;
}

//['dog', 'cat', 'House'] = ['Dog', 'Cat', 'House']
// console.log(capWords(['hello', 'whatsup']));

function binaryS(arr, v) {
 let left = 0;
 let right = arr.length - 1;


 while (left <= right) {
  let mid = Math.floor((left + right) / 2);
  let current = arr[mid];
  if (v === current) {
   return mid;
  }
  else if (v < current) {
   right = mid - 1;
  }
  else {
   left = mid + 1;
  }
 }

 return -1;
}
console.log(binaryS([0, 1, 2, 3, 4], 4));


//To study to understand recursion
function BinarySearchRec(arr, start, end, n) {
 if (start > end) return -1;
 let mid = Math.floor((start + end) / 2);

 if (arr[mid] === n) return mid;
 if (n > arr[mid]) {
  return BinarySearchRec(arr, mid + 1, end, n);
 } else if (n < arr[mid]) {
  return BinarySearchRec(arr, start, mid - 1, n);
 }
}
// let arr = [0, 1, 2, 3, 4, 5];
// console.log(BinarySearchRec(arr, 0, arr.length - 1, 2));