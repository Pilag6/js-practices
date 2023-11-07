// Sort a list of numbers in ascending order using for loops

// Create a list of numbers

let numbers = [60, 50, 62, 58, 54, 54];

// Sort the list in ascending order

for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
        if (numbers[i] < numbers[j]) {
            let temp = numbers[i];
            numbers[i] = numbers[j];
            numbers[j] = temp;
        }
    }
}

// Print the sorted list

console.log(numbers);