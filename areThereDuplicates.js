///accepts a variable number of arguments, checks whethere there are any duplicates among the arguments passed in.

function areThereDuplicates(...args) {
 const array = [...args];
 const counter = {};

 for (let arg of array) {
  counter[arg] = counter[arg] + 1 || 1;
 }

 for (let key in counter) {
  if (counter[key] > 1) return true;
 }

 return false;

}

console.log(areThereDuplicates(3, 4, 5, 6));