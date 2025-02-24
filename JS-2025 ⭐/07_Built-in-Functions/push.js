let a = [1, 2, 3, 4, 5, 6];

var b = a.push(7); 
// here value for b is 7 because 7 is assigned to b and with the help of push() method 7 is assigned to a[] so when consoling a it update its array but b will have the 7 value inside it.

console.log(b);
console.log(a); [1, 2, 3,  4, 5, 6, 7]

a.push(99);
console.log(a); // [1, 2, 3,  4, 5, 6, 7, 99]
