// What are template literals?

/* 
Template literals are an alternative way of working with strings, 
which was introduced in the ES6 addition to the JavaScript language.
*/

/* Up until ES6, the only way to build strings in JavaScript 
was to delimit them in either single quotes or double quotes: 

'Hello, World!'
"Hello, World!"

Alongside the previous ways to build strings, 
ES6 introduced the use of backtick characters as delimiters:

`Hello, World!`

The above code snippet is an example of a template string, 
which is also known as a template literal.
*/

// Differences between a template and regular string

/* 
There are several ways in which a template string is different from a regular string.

*/

let greet = "Hello";
let place = "World";
console.log(`${greet} ${place} !`) //display both variables using template literals

var greetings = "Hello";
var aPlace = "World";
console.log(greetings + " " + aPlace + "!"); //display both variables without using template literals


// Notice that this can't be done using string literals 
// (that is, strings delimited in single or double quotes): 

// [,lok,."Hello,
// World"


/* Additionally, the reason why it's possible to interpolate 
variables in template literals is because 
this syntax actually allows for expression evaluation */

// In other words, this:
// It is possible to perform arithmetic operation inside a template literal expression 
console.log(`${1 + 1 + 1 + 1 + 1} stars!`) 
// The above example will console log the following string: 5 stars!
