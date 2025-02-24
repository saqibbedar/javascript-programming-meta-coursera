// Declaring variables without initializing values is a undefined value, js will return the undefined if you are declaring a variable but not passing it a value and trying to access it so by default it will give an undefined value 

var a;
console.log(a); // undefined

// In other languages we would have face the error while achieving this behavior but not in javascript as it return undefined as a value which specify that variable is not holding any value but an undefined value without initialing a value into it and it is basically is a hoisting.

// From Interview prospective: What is undefined? when we have a particular thing, there is existence of specific thing but we don't know what exactly value it holds is called undefined.



// not-defined: anything which is not in existence is called not-defined
console.log(b); // error b is not defined 
