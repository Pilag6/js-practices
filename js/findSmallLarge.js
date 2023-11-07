// Find the Smallest and Largest Numbers in an Array

// With sort() method

// let numberArray = [40, 500, 1, 2350, 5, 25, 10];

// let numsOrd = numberArray.sort((a, b) => a - b);

// console.log(numsOrd);

// let small = numsOrd[0];
// let large = numsOrd[numsOrd.length - 1];

// console.log(`The Smallest number in the array is = ${small}`);
// console.log(`The Largest number in the array is = ${large}`);

//----------------------------------------------------------------------

// With Math.min() and Math.max() methods

// let numberArray = [40, 500, 1, 2350, 5, 25, 10];

// let small = Math.min(...numberArray);

// let large = Math.max(...numberArray);

// console.log(`The Smallest number in the array is = ${small}`);
// console.log(`The Largest number in the array is = ${large}`);

//----------------------------------------------------------------------

// With for loop

let numberArray = [40, 500, 1, 2350, 5, 25, 10];

let small = numberArray[0];
let large = numberArray[0];

for (let i = 0; i < numberArray.length; i++) {
    if (numberArray[i] < small) {
        small = numberArray[i];
    } else if (numberArray[i] > large) {
        large = numberArray[i];
    }
}

console.log(`The Smallest number in the array is = ${small}`);
console.log(`The Largest number in the array is = ${large}`);

//----------------------------------------------------------------------

// With forEach() method

// let numberArray = [40, 500, 1, 2350, 5, 25, 10];

// let small = numberArray[0];
// let large = numberArray[0];

// numberArray.forEach((num) => {
//     if (num < small) {
//         small = num;
//     } else if (num > large) {
//         large = num;
//     }
// });

// console.log(`The Smallest number in the array is = ${small}`);
// console.log(`The Largest number in the array is = ${large}`);

//----------------------------------------------------------------------

// With reduce() method

// let numberArray = [40, 500, 1, 2350, 5, 25, 10];

// let small = numberArray.reduce((a, b) => {
//     return Math.min(a, b);
// });

// let large = numberArray.reduce((a, b) => {
//     return Math.max(a, b);
// });

// console.log(`The Smallest number in the array is = ${small}`);
// console.log(`The Largest number in the array is = ${large}`);

//----------------------------------------------------------------------

