// A set is the collection of unique values

// To build a new set you need to build a set constructor

new Set();

const repetitiveFruits = ['apple','pear','apple','pear','plum', 'apple'];
const uniqueFruits = new Set(repetitiveFruits);
console.log(uniqueFruits);

// Output: Set(3) { 'apple', 'pear', 'plum' }