const numbers = [1, 2, 3, 4, 5, 6];

// CON REDUCE

let reduce = numbers.reduce((acumulator, item) => acumulator + item, 0);

console.log(reduce);

// CON FOR

let acc = 0;
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];

    acc = acc + element;
}

console.log(acc);
