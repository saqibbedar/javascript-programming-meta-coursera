// Pure Functions: Those functions which returns always the same value on every call are called pure functions when values are passed same

const add = (a, b)=>{
    return a + b;
}

var result1 = add(1,2); 
var result2 = add(1,2); 

console.log(result1); // 3
console.log(result2); // 3

// so pure functions mainly returns the same value when they are called because they are fixed to specific tasks as add() function is specific to add two values so it will give the result same on each call because specific to one functionality that is addition.