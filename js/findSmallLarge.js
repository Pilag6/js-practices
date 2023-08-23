// Find the Smallest and Largest Numbers in an Array

let numberArray = [40, 500, 1, 2350, 5, 25, 10];

let numsOrd = numberArray.sort((a, b) => a - b);

console.log(numsOrd);

let small = numsOrd[0];
let large = numsOrd[numsOrd.length - 1];

console.log(`The Smallest number in the array is = ${small}`);
console.log(`The Largest number in the array is = ${large}`);
