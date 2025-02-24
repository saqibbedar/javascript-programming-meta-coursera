// In older version of javascript, we had three types of functions:

// 1. function statement
// 2. function expression
// 3. anonymous function

// In new Javascript, there are three variations of one function called an arrow function.

// 1. Basic fat Arrow function
// 2. Arrow function with one parameter
// 3. arrow function with implicit return

// 1. Basic fat Arrow function
const basicArrowFunction = ()=>{

};
basicArrowFunction(); // calling arrow function

// 2. Arrow function with one parameter
var b = (val)=>{ 
    // we can remove (small braces) if we have one parameter in arrow function but if more than one then we have to cover the parameters with (small braces)
    console.log(val)
}
b(12);

// write above code without braces
var b = val =>{// removed braces, still work same
    console.log(val)
}
b(12);

// 3. arrow function with implicit return
// An implicit return is that function that return values without specifying the return statement

var c = (val)=> val * 2; // removed {braces} for implicit return
console.log(c(12)); // 24

var c = (val)=> 100; // 100 would be returned
console.log(c()); // 100

var c = ()=> 100; // 100 would be returned
console.log(c()); // 100