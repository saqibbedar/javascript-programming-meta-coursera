// why do we use return in js? it means output, in js the return statement is used in a function to specify the value that the function should output or return when it is called . It essentailly allows a function to produce a result that can be used elsewhere in your code.

// here is the example to illustrate how the return statement works:

// arrow function without braces {}
const addNumbers = (a,b)=> a * b;
const result = addNumbers(5, 3);
console.log(result); // 15

// the above example was using arrow function where I directly omit the curly braces {} and it is good way to consize your code

// regular function
function myFunction(a, b) {
    return a * b
}
let num_result = myFunction(5, 3)
console.log(num_result) // 15

/* Explanation of above example: in above example 
    1. I define a an arrow function addNumbers which take two parameters, a and b. 

    2. then I used return statement to specify that the function should return of adding a and b together.

    3. we then call the addNumbers function with the values 5 and 3, and the result of this function call is assigned to variable result.

    4. Finally, we use console.log to print the result variable the cosole, which will display 15.
*/

// So, return statement allows you to send a value back to the place where the function was called, and you can capture that value in a variable or use it directly.


// using return 0 

// The return statement can be used to explicitly return a value of 0 or any other vlaue. This can be useful in various scennarios. For instance, if you have a function that calculates a result and returns 0 when a certain condition is met, you can do it like this
const divide = (a,b)=> {
    if (b == 0){
        return 0;
    }
    return a / b
}
const result1 = divide(50, 5);
const result2 = divide(10, 0);
console.log(result1)
console.log(result2)

// when to use return statement? You should use it in a function, when you want that function to produce a result or value that can be used elsewhere in your code. 

const arrowFunction = ()=>{

}
function myFunction() {
    
}
