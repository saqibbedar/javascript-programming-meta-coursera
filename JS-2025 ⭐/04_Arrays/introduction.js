// 2. Array:
// An array is an ordered iterable collection of values. 
// You use arrays when you need to store and later access a value under an index.

// Remember, we do not specify the index, JavaScript does this automatically. 
// You only use the index to access the specific value stored in the array.

// For example, to find the average grade for the task earlier, 
// you could loop over the array and calculate the total sum. 

let grades = [70, 60, 59, 98, 67, 80]
sumOfGrades = 0;

for (i=0; i<grades.length; i++){
    sumOfGrades += grades[i]
}
console.log(sumOfGrades / grades.length) // 72.33

// If you want to combine both arrays, you can use the spread operator
const combinedArray = [...array1, ...array2];
console.log(combinedArray);
// Output: [1, 2, 3, 4, 5, 6]