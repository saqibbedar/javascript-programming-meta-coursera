// strings in ES5 are single or double quotes but not multi-line

// if we run a code below:

// let a = 'This is a single string'
// let b = "This is string 
// with doubble quotes"

// Here comes the backticks of ES6 which allow us to write the multiline strings 

let users = `user 1 
user 2
user 3
user 4
`
console.log(users)

// let's try something else

let first = 'ES6 got really great features, you know'
let second = 'Hmm! I know'
console.log(`${first} \n\ ${second}`)

/* By using template literals, 
JavaScript does not consider quotes, 
a string delimiters, meaning they are just regular characters here. 
Now I can use template literals again to interpolate 
the variables first and second on a different line. 
Instead of using the plus operator for concatenation, 
I can simply enclose the full desired string within backticks. 
I can then place the variable name by enclosing it 
within a set of curly braces preceded by a dollar symbol.*/ 
