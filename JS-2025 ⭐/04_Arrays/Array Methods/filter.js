// 2. The filter() method:
// It filters your arrays based on a specific test. 
// Those array items that pass the test are returned.

// Example:

const numArray = [0,10,20,30,40,50];
numArray.filter( function(num) {
    return num > 20;
})

// Output: [30,40,50]

// ***Similar to the forEach() method, the filter() method also accepts 
// a function and that function performs some work on each of the items in the array.