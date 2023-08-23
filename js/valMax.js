// Find the maximum value in an array using a "for...of" loop.

const numbers = [1,22,320,144,55,46]

let valMax = numbers.sort((a,b)=> a-b)

console.log(valMax[valMax.length-1])
