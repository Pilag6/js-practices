// Calculate the Number of Digits and Letters in a String

// 1. Using a for loop

let str = 'Hello World 123';

let digits = 0;

let letters = 0;

for (let i = 0; i < str.length; i++) {
        if (str[i] >= '0' && str[i] <= '9') {
            digits++;
        } else if ((str[i] >= 'a' && str[i] <= 'z') || (str[i] >= 'A' && str[i] <= 'Z')) {
            letters++;
        }
    }

console.log(`The number of digits in the string is ${digits}`); // 3

console.log(`The number of letters in the string is ${letters}`); // 10

// 2. Using a for...of loop

let str1 = 'Hello World 1234';

let digits1 = 0;

let letters1 = 0;

for (let char of str1) {
        if (char >= '0' && char <= '9') {
            digits1++;
        } else if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) {
            letters1++;
        }
    }

console.log(`The number of digits in the string is ${digits1}`); // 4

console.log(`The number of letters in the string is ${letters1}`); // 10
