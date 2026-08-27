// ==========================================
// DAY 6 - JAVASCRIPT CORE CONCEPTS
// 30 Day Placement Preparation Challenge
// ==========================================


// ==========================================
// 1. ARRAYS & ARRAY METHODS
// ==========================================

const numbers = [1, 2, 3, 4, 5];

console.log("Original Array:", numbers);

// map() - creates a new array
const doubled = numbers.map((num) => num * 2);
console.log("Doubled:", doubled);

// filter() - returns elements based on condition
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log("Even Numbers:", evenNumbers);

// reduce() - reduces array to a single value
const sum = numbers.reduce((total, num) => total + num, 0);
console.log("Sum:", sum);

// forEach() - executes function for every element
numbers.forEach((num) => {
    console.log("Number:", num);
});

// find() - returns first matching element
const found = numbers.find((num) => num > 3);
console.log("First number greater than 3:", found);

// sort() - ascending order
const ascending = [...numbers].sort((a, b) => a - b);
console.log("Ascending:", ascending);

// descending order
const descending = [...numbers].sort((a, b) => b - a);
console.log("Descending:", descending);

// slice() - returns a portion of an array
const portion = numbers.slice(1, 4);
console.log("Slice:", portion);
//done

// ==========================================
// 2. FUNCTIONS
// ==========================================

// Function Declaration
function greet(name) {
    return `Hello, ${name}!`;
}

console.log(greet("Pratik"));


// Function Expression
const add = function (a, b) {
    return a + b;
};

console.log("Addition:", add(10, 20));

