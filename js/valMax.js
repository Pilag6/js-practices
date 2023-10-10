// Find the maximum value in an array using a variety of methods.


// FOR() LOOP METHOD

// const numbers = [1, 22, 320, 144, 55, 46];

// let valMax = 0;

// for (let number of numbers) {
//     if (number > valMax) {
//         valMax = number;
//     }
// }
// console.log(valMax);


//------------------------


//REDUCE() METHOD

const numbers = [1, 22, 320, 144, 55, 46];

let valMax = numbers.reduce((a, b) => Math.max(a, b));

console.log(valMax);


//------------------------


// SORT() METHOD

// const numbers = [1, 22, 320, 144, 55, 46];

// let valMax = numbers.sort((a, b) => a - b);

// console.log(valMax[valMax.length - 1]);


//------------------------


// MATH.MAX() METHOD

// const numbers = [1, 22, 320, 144, 55, 46];

// let valMax = Math.max(...numbers);

// console.log(valMax);


//------------------------


//MATH.MAX() METHOD AND APPLY

// const numbers = [1, 22, 320, 144, 55, 46];

// let valMax = Math.max.apply(null, numbers);

// console.log(valMax);


//------------------------


//MATH.MAX() METHOD AND SPREAD OPERATOR

// const numbers = [1, 22, 320, 144, 55, 46];

// let valMax = Math.max(...numbers);

// console.log(valMax);


