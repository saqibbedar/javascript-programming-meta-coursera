// Hoisting: To use variable and functions before their declaration is called Hoisting

console.log(a); // undefined
var a; 

// Understand more with example
var b = 5;

// Now javascript will convert 
// var a = 5; to var a; and a = 5;

// Now var a; is declaration and to initialize it with a value then we have to pass it a value which is called initialization as a = 5;

// Now declaration always move to top and initialize remain at the bottom means come after declaration
// var b;
// b = 10;
