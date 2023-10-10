// Reverse the string passed in.

// Solution 1

// function reverseString(str) {
//     return str.split('').reverse().join('');
// }

// // Test

// console.log(reverseString('hello')); // olleh

// Step by Step

// 1. Split the string into an array of characters.
// 2. Reverse the array.
// 3. Join the array back into a string.
// 4. Return the string.

// Code Explanation

// Our goal is to take the input, str, and return it in reverse. Our first step is to split the string by characters using split(''). Notice that we don’t leave anything in between the single quotes, this tells the function to split the string by each character.

// Using the split() function will turn our string into an array of characters, keep that in mind as we move forward.

// Next we chain the reverse() function, which takes our array of characters and reverses them.

// Finally we chain join('') to put our characters back together into a string. Notice once again that we left no spaces in the argument for join, this makes sure that the array of characters is joined back together by each character.

// Solution 2

// function reverseString(str) {
//   return [...str].reverse().join('');
// }

// Test

// console.log(reverseString('hello')); // olleh

// Step by Step

// 1. Use the spread operator to transform str into an array of characters.
// 2. Use the reverse() method to reverse the new created array.
// 3. Use the join() method to join all elements of the array into a string.
// 4. Return the reversed string.

// Code Explanation

// This solution takes the approach of first using the spread operator (...) to transform our string into an array of characters. Then we chain the reverse() method, which takes our array of characters and reverses them. Finally, we chain join('') to put our characters back together into a string. Notice once again that we left no spaces in the argument for join, this makes sure that the array of characters is joined back together by each character.

// Solution 3

// function reverseString(str) {
//   let reversed = '';
//   for (let character of str) {
//     reversed = character + reversed;
//   }
//   return reversed;
// }

// // Test

// console.log(reverseString('hello')); // olleh

// Step by Step

// 1. Create an empty string called reversed.
// 2. For each character in the provided string, take the character and add it to the start of reversed.
// 3. Return the variable reversed.

// Code Explanation

// This solution takes the approach of first declaring an empty string, then looping through the given string from the first character to the last using a for...of loop. Inside of each iteration of the loop, we take the character and add it to the start of reversed using the += operator (which is shorthand for reversed = reversed + character).

// Solution 4

// function reverseString(str) {
//   let reversed = '';
//   for (let i = str.length - 1; i >= 0; i--) {
//     reversed += str[i];
//   }
//   return reversed;
// }

// Test

// console.log(reverseString('hello')); // olleh

// Step by Step

// 1. Create an empty string called reversed.
// 2. Create a for loop that iterates from 0 to the length of the string.
// 3. For each iteration, take the character and add it to the start of reversed.
// 4. Return the variable reversed.

// Code Explanation

// This solution takes the approach of first declaring an empty string, then looping through the given string from the last character to the first using a for loop. Inside of each iteration of the loop, we take the character and add it to the start of reversed using the += operator (which is shorthand for reversed = reversed + character).

// Solution 5

// function reverseString(str) {
//   let reversed = '';
//   str.split('').forEach(character => reversed = character + reversed);
//   return reversed;
// }

// Test

// console.log(reverseString('hello')); // olleh

// Step by Step

// 1. Create an empty string called reversed.
// 2. Split the string into an array of characters.
// 3. Use the forEach() method to iterate over each character in the array.
// 4. For each character, take the character and add it to the start of reversed.
// 5. Return the variable reversed.

// Code Explanation

// This solution takes the approach of first declaring an empty string, then splitting the given string into an array of characters using split(''). We then use the forEach() method to iterate over each character in the array, and for each character we take the character and add it to the start of reversed using the += operator (which is shorthand for reversed = reversed + character).

// Solution 6

// function reverseString(str) {
//     let reversed = "";
//     str.split("").map((character) => (reversed = character + reversed));
//     return reversed;
// }

// Test

// console.log(reverseString("hello")); // olleh

// Step by Step

// 1. Create an empty string called reversed.
// 2. Split the string into an array of characters.
// 3. Use the map() method to iterate over each character in the array.
// 4. For each character, take the character and add it to the start of reversed.
// 5. Return the variable reversed.

// Code Explanation

// This solution takes the approach of first declaring an empty string, then splitting the given string into an array of characters using split(''). We then use the map() method to iterate over each character in the array, and for each character we take the character and add it to the start of reversed using the += operator (which is shorthand for reversed = reversed + character).

// Solution 7

function reverseString(str) {
  return str.split('').reduce((reversed, character) => character + reversed, '');
}

// Test

console.log(reverseString('hello')); // olleh

// Step by Step

// 1. Split the string into an array of characters.
// 2. Use the reduce() method to iterate over each character in the array.
// 3. For each character, take the character and add it to the start of reversed.
// 4. Return the variable reversed.

// Code Explanation

// This solution takes the approach of first splitting the given string into an array of characters using split(''). We then use the reduce() method to iterate over each character in the array, and for each character we take the character and add it to the start of reversed using the += operator (which is shorthand for reversed = reversed + character).

// Solution 8

// function reverseString(str) {
//   return str.split('').reduceRight((reversed, character) => reversed + character, '');
// }

// Test

// console.log(reverseString('hello')); // olleh

// Step by Step

// 1. Split the string into an array of characters.
// 2. Use the reduceRight() method to iterate over each character in the array.
// 3. For each character, take the character and add it to the end of reversed.
// 4. Return the variable reversed.

// Code Explanation

// This solution takes the approach of first splitting the given string into an array of characters using split(''). We then use the reduceRight() method to iterate over each character in the array, and for each character we take the character and add it to the end of reversed using the += operator (which is shorthand for reversed = reversed + character).

// Notes

// The split() method splits a String object into an array of strings by separating the string into substrings, using a specified separator string to determine where to make each split.
// The reverse() method reverses an array in place. The first array element becomes the last, and the last array element becomes the first.
// The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.
// Notice that we don’t leave a space between the empty quote marks for .join(‘ ‘). The space is necessary otherwise the string returned would have each character separated from the rest by a comma.
// The spread operator is used to expand an iterable object into the list of arguments.
// The forEach() method executes a provided function once for each array element.
// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
// The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
// The reduceRight() method applies a function against an accumulator and each value of the array (from right-to-left) to reduce it to a single value.
// The reduceRight() method is similar to the reduce() method except that it applies the function from right to left instead of left to right (see also reduce()).
// The reduceRight() method does not change the original array.

// Resources

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/ReduceRight
// https://www.freecodecamp.org/news/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb/
