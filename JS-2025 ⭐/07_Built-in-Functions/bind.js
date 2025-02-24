// bind(): bind is used to create a new function that, when called, has its this keyword set to a specified value. It takes one argument.

// syntax: functionToBind.bind(thisValue);

// Example:  

function myFunction() {
    console.log(this);
}
var obj = {name : "Saqib"}

var bindFunction = myFunction.bind(obj);
bindFunction();

// Output: { name: 'Saqib' }
