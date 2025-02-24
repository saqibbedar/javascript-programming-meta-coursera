// Primitive Types: Any value which makes original copy to another variable is called a primitive type.

// Reference Types: And any which pass the reference copy to the another variable is a reference type it means it is passing an copy but sending an original copy

var a = [5,4,5,3,2];

// Primitive Types

let a = [12, 13, 14, 15]
let b = [...a];

// Now a is completely is completely copied to the b array because of spread operator (...) and changes don't effect array together. For example, if I am changing value of b array then it won't effect a and vice-versa. So, this is the reference type.


// let's remove an element from a and see whether it is affecting the b array or not.

a.pop();
console.log(a); // [12, 13, 14]
console.log(b); // [12, 13, 14, 15]

// now a has one less element from b because of using pop so it basically remove the last element from array list and final output is [12, 13, 14, 15] but still has the original value of a [12, 13, 14, 15] and it is not affected because of spread operator (...) / threeDotOperator