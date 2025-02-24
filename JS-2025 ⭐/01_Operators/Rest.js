// Rest Parameter: When ... is used in a function parameter, it's called the "rest parameter," and it gathers the remaining parameters into an array.

function example(...restParameters) {
    console.log(restParameters);
}

example(1, 2, 3, 4, 5);
// Output: [1, 2, 3, 4, 5]


// Spread Operator: When ... is used in a different context, such as in an array literal or function call, it's called the "spread operator," and it spreads the elements of an array into individual elements.

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const arraySum = array1.reduce()

const combinedArray = [...array1, ...array2];
console.log(combinedArray);
// Output: [1, 2, 3, 4, 5, 6]
