// hoisting
// Def: variables and functions are hoisted which means their declearation is moved top of the code

// we can use a variable before declearing a variable

// Example: 

var a = 12;

var a; // this part is known as declearation 
a = 12; // this part is known as initialization


// Difference b/w undefined and not-defined:

// Undefined: is something which is present but whose value is not defined, 
// there is existence but we don't know what is it's actual value.

// Example: 
console.log(b) 
var b = 12; 

/* 
     output of above code is undefined because of hoisting as js will convert above code in two parts:

     1. declearation 2. initialization 
     
     js will take declearation part at top and initialization part will be at it's place, let's see how

     console.log(b)
     var b = 12;

     js will break var b = 12; into 
     var b;
     b = 12;

     and now it will take var b; to top and b = 12; to bottom here is how:

     var b;
     console.log(b) // undefined
     b = 12; 

     that's why it shows undefined as var b (the declearation part) has no value but it exist there.
     */

// Not-defined: anyting which is not in existence that is not defined
console.log(c) // error not-defined because c is not defined in code
