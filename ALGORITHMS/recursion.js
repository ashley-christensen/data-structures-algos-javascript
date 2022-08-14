function countUp(num) {
 if (num >= 1000) {
  console.log('done!');
  return;
 }

 console.log(num);
 num = num * (num + 2);
 countUp(num);
}

function sumRange(num) {
 if (num === 1) {
  console.log('done');
  return 1;
 };
 return num + sumRange(num - 1);
}
console.log(sumRange(3));


function factorial(num) {
 if (num <= 0) {
  console.log('done!');
  return 1;
 }

 console.log(num);
 return num * factorial(num - 1);
}
// console.log(factorial(10));