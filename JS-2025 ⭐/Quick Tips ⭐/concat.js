// spread is used to copy an array form array without running any loop, it automatically copy the values by just placing ... and array name at the end it will copy all the elements of array to another array.

var a = [1,2,3,4,5];
var b = [...a];
console.log(b); // [ 1, 2, 3, 4, 5 ]

// concat is used to join two arrays.

var a = [1,2,3,4,5];
var b = [6,7,8,9,10];
var c = a.concat(b);

console.log(c); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

var a = [1,2,3,4,5];
var b = [6,7,8,9,10];
var c = [...a,...b];

console.log(c); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]