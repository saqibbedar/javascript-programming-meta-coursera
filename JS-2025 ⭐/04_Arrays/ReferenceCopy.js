// Array is always passed by reference not by value, it means all the values would not be copied but passed as a reference and they would be stored on exact address on which first array is stored. 

var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var b = a; // this is a reference not a copy

console.log(a, b);
a.push(11);
console.log(a, b)

b.pop();
console.log(b, a) 

// Making a single change, either to array a or b will effect both because they both are on same memory location and array in its nature is passed by reference so to copy the values of an array a to b we can use ...spread operator


var arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var arr2 = [...arr1]; // pass by value (as a copy)

console.log(arr1, arr2);

arr1.push(11);
console.log(arr1, arr2);

arr2.pop();
console.log(arr1, arr2);

// Now no change will effect to arr1 because arr1 has been copied to arr2 so we can make changes to copy but it won't effect the original array.