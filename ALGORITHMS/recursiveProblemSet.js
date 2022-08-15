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


function reverseStr(str) {
 if (str.length <= 1) return str;
 console.log(str);
 return reverseStr(str.slice(1)) + str[0];
}

console.log(reverseStr('hello'));

function isPalindrome(str) {
 let reverse = '';

 function helper(helperInput) {
  if (helperInput.length === 0) return;
  reverse = helperInput[0] + reverse;
  helper(helperInput.slice(1));
 }
 helper(str);
 if (reverse === str) return true;
 return false;

}

// console.log(isPalindrome('ashley'));