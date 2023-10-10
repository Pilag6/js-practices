// RANDOM NUMBERS IN JAVASCRIPT

console.log(Math.ceil(2.1)); // 3
console.log(Math.floor(2.9)); // 2

console.log(Math.round(2.4)); // 2
console.log(Math.round(2.5)); // 3
console.log(Math.round(2.6)); // 3

console.log(Math.random()); // 0~1
console.log(Math.random()*10); // 0~10

console.log(Math.floor(Math.random()*10)); // 0~9
console.log(Math.floor(Math.random()*10)+1); // 1~10
console.log(Math.floor(Math.random()*45)+1); // 1~45

// RANDOM NUMBER BETWEEN 0 - 100

console.log(Math.floor(Math.random()*101)); // 0~100

// RANDOM NUMBER BETWEEN 50 - 150

console.log(Math.floor(Math.random()*101)+50); // 50~150

// RANDOM NUMBER BETWEEN -50 - 50

console.log(Math.floor(Math.random()*101)-50); // -50~50

// RANDOM NUMBER BETWEEN 0 - 100 (multiple of 10)

console.log(Math.floor(Math.random()*11)*10); // 0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100

// RANDOM NUMBER BETWEEN 5 - 95 (multiple of 5)

console.log(Math.floor(Math.random()*11)*10+5); // 5, 15, 25, 35, 45, 55, 65, 75, 85, 95

// RANDOM NUMBER BETWEEN 100 - 200 (multiple of 10)

console.log(Math.floor(Math.random()*11)*10+100); // 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200
