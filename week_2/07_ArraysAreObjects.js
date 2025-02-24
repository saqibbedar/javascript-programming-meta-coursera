// In JavaScript, arrays are objects. 
// That means that arrays also have some built-in properties and methods.
// One of the most commonly used built-in methods on arrays 
// are the push() and the pop() methods.

// To add new items to an array, I can use the push() method:

let fruit = []
fruit.push('Apple')
fruit.push('Banana')

console.log(fruit) // print it

// To remove the last item from an array, I can use the pop() method:  
// let vegetables = []
// vegetables.push('Potatos') //.push to add values in array
// vegetables.push("Tomatos")
// vegetables.pop() // remove last values from array
// console.log(vegetables); // output will be Potatos cause we remved the last child with pop

// let's build a function

function vegetablesArray (one, two){
    let vegetables = []
    vegetables.push(one) //.push to add values in array
    vegetables.push(two) 
    console.log(vegetables)
}
vegetablesArray('Potatos', 'Tomatos')

