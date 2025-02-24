// calling an anonymous function by warping a function in ()
(function () {
    console.log('hello world')
})
()

function myFunction() {
    console.log('hello world');
    console.log('hello 1')
    console.log('hello 2')
}
myFunction()

// Recursive Function
// When a function calls itself, this is what's known as recursion
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