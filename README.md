![JavaScript GitHub](https://github.com/Pilag6/js-practices/assets/79191808/1665e20e-9ecc-4f11-8229-4d6da8382b6f)
---
## EXERCISES

### Beginner

1. [Iterate numbers](https://github.com/Pilag6/js-practices/blob/main/js/iterarNums.js)
1. [Sum numbers](https://github.com/Pilag6/js-practices/blob/main/js/sumNums.js)
1. [Count Numbers with a Loop](https://github.com/Pilag6/js-practices/blob/main/js/iterarNums.js)
1. [Print the Odd numbers from 1 to 100](https://github.com/Pilag6/js-practices/blob/main/js/oddNums.js)
1. [Print the Even numbers from 1 to 100](https://github.com/Pilag6/js-practices/blob/main/js/evenNums.js)
1. [Calculate the Sum of Array Elements](https://github.com/Pilag6/js-practices/blob/main/js/sumTotalArray.js)
1. [Calculate the Sum of Two Largest Numbers in an Array](https://github.com/Pilag6/js-practices/blob/main/js/sumNumsMax.js)
1. [Find the Smallest and Largest Numbers in an Array](https://github.com/Pilag6/js-practices/blob/main/js/findSmallLarge.js) 
1. [Random Numbers](https://github.com/Pilag6/js-practices/blob/main/js/randomNumbers.js)
1. [Calculate the Factorial of a Number](https://github.com/Pilag6/js-practices/blob/main/js/factorialNum.js)
1. [Calculate the Number of Digits and Letters in a String](https://github.com/Pilag6/js-practices/blob/main/js/numAndDigitsString.js)
1. [Fibonacci Sequence](https://github.com/Pilag6/js-practices/blob/main/js/fibonacci.js)
1. [Reverse String](https://github.com/Pilag6/js-practices/blob/main/js/reverseString.js)
1. [Sort Old Style](https://github.com/Pilag6/js-practices/blob/main/js/sortOldStyle.js)




## Hacks

### How can I view all the images from any website using the Chrome Console

```Javascript
$$('img').forEach(img => {
  const src = img.src;
  console.log(src)
})
```

### How can I download all the images from any website using the Chrome Console

```Javascript
$$('img').forEach(img => {
  const src = img.src;
  const [filename] = src.split('/').reverse()
  const [name] = filename.split('.')

  const a = document.createElement('a')
  a.setAttribute('href', src)
  a.setAttribute('download', name)
  a.click() 
})
```
