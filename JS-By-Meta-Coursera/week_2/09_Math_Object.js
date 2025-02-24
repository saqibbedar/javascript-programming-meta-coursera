// Random Method - allows you to generate a decimal number between 0 and 0.99.
Math.random();

// let decimal = Math.random();

// console.log(decimal)

// console.log(decimal * 10);

// Ceil method - used to round up any decimal number to the nearest integer.

Math.ceil() //the seal method can only round upwards.

// let rounded = Math.ceil(0.005);     // output 1 - if zero then one
// let rounded = Math.ceil(0.99);   // output 1
// let rounded = Math.ceil(1.005);  // output 2 - if anyother num then coming next one would be the answer
// let rounded = Math.ceil(10.005); // output 11
// let rounded = Math.ceil(0.765);  // output 1
// console.log(rounded);

// combine these two 


let decimal = Math.random() * 10;
let rounded = Math.ceil(decimal);
console.log(rounded)

