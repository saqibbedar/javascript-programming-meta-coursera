// toSorted(): this method is used for sorting an array in a natural order. It returns a new array with the elements sorted in ascending order. you can also pass a compare function just like our good old sort() method.

const arr = ["apple", "banana", "mango", "kiwi", "orange"];
const sortedArray = arr.toSorted();
console.log(sortedArray); // [ 'apple', 'banana', 'kiwi', 'mango', 'orange' ]

const n = [1, 3, 2, 5, 4, 7];
const sortedNumArray = n.toSorted();
console.log(sortedNumArray); // [ 1, 2, 3, 4, 5, 7 ]

var a = [1, 3, 2, 5, 4];
var result = a.sort();
console.log(result);