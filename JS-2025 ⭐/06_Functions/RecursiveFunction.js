// Recursive Function
// When a function calls itself, this is what's known as recursion.
// Recursion is an alternative way to run repetitive code without the use of loops.

let counter = 3
function myCounter() {
    console.log(counter)
    counter -= 1
    if (counter === 0) {
        return
    } 
    myCounter()
}
myCounter()