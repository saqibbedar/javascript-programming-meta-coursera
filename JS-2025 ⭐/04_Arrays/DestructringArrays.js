// Destructuring in JavaScript is a way to extract values from arrays or properties from objects and assign them to variables in a more concise and readable manner. It provides a shorter syntax for extracting multiple values at once.

const numbers = [1, 2, 3, 4, 5];

// Destructuring assignment
const [first, second, ...rest] = numbers;

console.log(first); // 1
console.log(second); // 2
console.log(rest); // [3, 4, 5]

let a = 1;
let b = 2;

// Swapping values using array destructuring
[a, b] = [b, a];

console.log(a); // 2
console.log(b); // 1
