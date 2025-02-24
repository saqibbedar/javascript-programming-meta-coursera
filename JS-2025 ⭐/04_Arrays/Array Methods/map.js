// . The map method: The map method is used to create a new array by applying a given function to each element of the original array. It does not modify the original array but returns a new array with the results of applying the provided function.

// This method is used to map each array item over to another array's item, based on whatever work is performed inside the function that is passed-in to the map as a parameter. 

// For example:

const mapArray = [0,10,20,30,40,50].map( function(num) {
    return num / 10
})
console.log(mapArray)

// Output: [0,1,2,3,4,5]


// other way to write above code:

function divideByTen(num) {
    return num / 10;
}

const resultArray = [0, 10, 20, 30, 40, 50].map(divideByTen);

console.log(resultArray);
// Output: [0, 1, 2, 3, 4, 5]
