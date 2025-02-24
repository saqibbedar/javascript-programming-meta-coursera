var a = [12, 13, 14];
var b = a;

// Pop(): it is used to remove last element from any variable i.e: array etc

// lets remove last element from array a which is 14;

b.pop(); // remove last variable from an array

// display the final array

console.log(b); // [12, 13]
console.log(a); // [12, 13]

// This is the concept of reference in javascript that we can't copy the value of all reference types directly but we will use spread operator to specify the operation and doing this is wrong in javascript