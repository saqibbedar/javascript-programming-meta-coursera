/* What are functions?

In JavaScript, a function is a piece of reusable code that performs a specific task or calculation. It is designed to be called or invoked when needed, often with input values known as arguments or parameters.

We know that one the basic principal of progaramming is that acronym DRY which means don't reapeat yourself.
So, tahnks to functions for making things easy for us and avoid repetation. With functions you can take several lines of code that performs a set of related actions and then group them together under a single label.
Then when you need to run the code that you've saved, you just invoke or call the function.  You can run the code as many times as you want. */

// let's understand it with a example:
// suppose we have two variables:

var x= 9; 
var g= 5;
var c= x+g;
console.log(c)

// This piece of code works and adds two numbers together. 
// But what if you want to execute this code more than once? 
// Well you can do this by placing this block of code inside a function.

// decaleare a function

// syntax

function funtionName (){
    // your code will go here (This is known as a body of function)
}

// lets try a funciton with a code



// function without parameters

function myFunction (){
    // function body
    var a= 2;
    var b= 5;
    var n= a+b;
    console.info(n)
}
// It's important to remember that a function declaration on its own doesn't execute the code. 
// It's just specifying what operations should be performed. 
// Once the function is executed to run the functions code you need to call or invoke the function and this is achieved by typing the function named followed by the opening and closing parenthesis.


// function parameters: Parameters will go inside the parathesis - i.e. (a, b)

function addTwoNums(d,e){
    var h = d + e;
    console.log(h)
}
addTwoNums(3,9)

// we have set d and e as a parameters (d,e) instead of using variables and now we can add values as many times as we want.
addTwoNums(3,7)
addTwoNums(3,3)
addTwoNums(3,4)

// now run the code | the parameters helps you to assign as many as values as you want. And this is the clean way to write a code


function greet(name) {
    console.log("Hello, " + name + "!");
  }
  
  // Calling the function with an argument
  greet("John");


function myFun (user){
    console.log(user);
}
myFun("Saqib");
