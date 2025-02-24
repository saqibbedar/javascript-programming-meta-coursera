// Destructing: It is a way to breakdown an array or object into variables. 

// We know, we can access an array with their indexes and also can store those indexes into a variables and then print their result like this:

var a = [1, 2, 3];
var b = a[0];
var c = a[1];
var d = a[2];
console.log(b);
console.log(c);
console.log(d);

// Can you see how much big code we have written just to accessing the arrays elements with their indexes, so to skip this part we can follow an optimized way to fix this issue and there where destructing comes.

var arr1 = [1, 2, 3];
var [a, b, c] = arr1;
console.log(a, b, c) 

// Now above code, we breakdown an array into a variables a, b, and c, and then we access them so this is an optimized way to handle the data by following destructuring approach. 


// lets break an object into variable
const obj = { username: "Saqib Bedar", age: 19};
const { username, age} = obj;
console.log(username); // Saqib Bedar 
console.log(age); // 19