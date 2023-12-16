/* 
There are actually several styles of coding, also known as paradigms. 
A common style is called functional programming, or FP for short
*/

// In functional programming, we use a lot of functions and variables.


// In functional programming, functions return new values 
// and then use those values somewhere else in the code.

function addTwoNums(a,b) {
    return a + b    
}
let num1 = 5
let num2 = 5
let sum = addTwoNums(num1, num2)
console.log(sum); // This here

/* Another style is object-oriented programming (OOP). 
 In this style, we group data and functionality 
as properties and methods inside objects. */

// Example: If I have a virtualPet object, 
// I can give it a sleepy property and a nap() method:


let virtualPet = {
    sleepy : true,
    nap : function(){
        this.sleepy = false
    }
}
console.log(virtualPet.sleepy) // true
virtualPet.nap()
console.log(virtualPet.sleepy) // false

