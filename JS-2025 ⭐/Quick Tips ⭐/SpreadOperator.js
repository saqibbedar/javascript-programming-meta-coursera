// spread is used to copy an array form array without running any loop. it automatically copy the values by just placing ... and array name at the end it will copy all the elements of array to another array.

var a = [1,2,3,4,5];
var b = [...a];
console.log(b); // [ 1, 2, 3, 4, 5 ]