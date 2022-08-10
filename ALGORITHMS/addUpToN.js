function addUpToN(n) {
 return n * (n + 1) / 2;
}
// console.log(addUpToN(6));
let t1 = performance.now();
addUpToN(1000000000);
let t2 = performance.now();
// console.log(`time elapsed: ${(t1 - t2) / 1000} seconds `);