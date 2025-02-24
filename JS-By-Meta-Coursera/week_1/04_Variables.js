//      ***Variables in JavaScript***

// There are two types of variables in JavaScript
// 1. var 2. let (Recommended to use)

let myNameIs = "Saqib"; // let variable
var person = "Saqib Bedar,"; // var variable

console.log("Hello", person) // will print Hello and Saqib Bedar because person is a vatriable in which Saqib Bedar value is stored.

// we can also create variables without var and let
hobby = "Programming,";
age = 19 + ","; // we can also add an string with a number (In same variable) - What will be the result of 1 + "2"? 12 [Read note at bottom]
state = "Sindh,";
Country = "Pakistan.";
let greetings = "Hello!";

console.log(greetings, person, hobby, age, state, Country) //Print the value
console.table([greetings, person, hobby, age, state, Country]); //Print the value in table form


/* Why do we use variables?
We use variables to store them values as Saqib is stored in myNameIs variable on line 6.
Variable allows you to save a variable so that you can re-use it in future.
In JavaScript, we declare variables with keyword var. */ 


// Note: Note that the value of 1 is of the number data type, and the value of "2" is of the string data type, and so JavaScript will coerce the number 1 to a string of "1", and then concatenate it with the string of "2", so the result is a string of "12".