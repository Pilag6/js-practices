const numbers = [1,2,3,4,5,6]

let numsOrd = numbers.sort((a,b)=> a-b)

let sum1 = numsOrd[numsOrd.length -1] // 6
let sum2 = numsOrd[numsOrd.length -2] // 5

console.log(sum1 + sum2)