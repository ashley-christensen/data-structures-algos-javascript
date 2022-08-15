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
// console.log(sumRange(3));


function factorial(num) {
 if (num <= 0) {
  console.log('done!');
  return 1;
 }

 console.log(num);
 return num * factorial(num - 1);
}
// console.log(factorial(10));

function factorial2(num) {
 let total = 1;
 for (let i = num; i > 1; i--) {
  total = total * i;//from num down to one we multiply to prev output
 }
 return total;
}

// console.log(factorial2(10));

function factorial3(num) {
 if (num <= 1) {//if multiplied by 0, goes back to 0
  console.log('in the if', num);
  return 1;// want to return 1, should be 1, don't multiply by 0 or anything less
 }
 return num * factorial3(num - 1);//basic logic without a stopping point

}

console.log(factorial3(10));