// Destructuring in JavaScript is a way to extract values from arrays or properties from objects and assign them to variables in a more concise and readable manner. It provides a shorter syntax for extracting multiple values at once.

const person = { 
    name: 'John', 
    age: 30, 
    city: 'New York' 
}

// Destructuring assignment
const { name, age, city } = person;

console.log(name); // John
console.log(age); // 30
console.log(city); // New York

// const person = { name: 'Bob' };

// Destructuring with default values
// const { name, age = 30 } = person;

// console.log(name); // Bob
// console.log(age); // 30
