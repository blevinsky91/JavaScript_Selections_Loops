console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");


for (let i = 0; i <= 100; i++) {
if (i % 2 == 0) {
    continue;
}
else {
    console.log(i);
}
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

for (let i = 0; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FIZZBUZZ");
    }
    else if (i % 5 == 0) {
        console.log("BUZZ");
    }
    else if (i % 3 == 0) {
        console.log("FIZZ");
    }
    else {
        console.log(i);
    }
}

// Exercise 3 Section
console.log("EXERCISE 3:\n=========\n ");

//EX1 and EX2 in while and do-while loops

// while
let x = 1;
while (x <= 100) {
    if (x % 2 != 0) {
        console.log(x);
        }
        x++;
}

//do-while
let z = 1;
do {
    if (z % 3 == 0 && z % 5 == 0) {
        console.log("FIZZBUZZ");
    }
    else if (z % 5 == 0) {
        console.log("BUZZ");
    }
    else if (z % 3 == 0) {
        console.log("FIZZ");
    }
    else {
        console.log(z);
    }
    z++;
} while (z <= 100);

// Exercise 4 Section
console.log("EXERCISE 4:\n=========\n ");

let value = Math.round((Math.random() * 500)); 
let n = Math.round(Math.random() * (500 - 100) + 100); 

 for (i = 0; i <= n; i++) {
    if (i == n) {
        console.log("Found value!");
        break;
    }
    else {
        console.log("Did not find value");
    }
 }

 // Exercise 5 Section
console.log("EXERCISE 5:\n=========\n ");

let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
n = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);

let i = start;
do {
    if (i % fizzDivisor == 0 && i % buzzDivisor == 0) {
        console.log("FIZZBUZZ");
    }
    else if (i % fizzDivisor == 0) {
        console.log("FIZZ");
    }
    else if (i % buzzDivisor == 0) {
        console.log("BUZZ");
    }
    i++;
} while (i <= n);