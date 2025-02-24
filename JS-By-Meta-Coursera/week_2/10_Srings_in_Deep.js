// for loop over Arrays

let arr = ['Saqib', 'Bedar']
for (let i=0; i < arr.length; i++){
    console.log(arr[i])
}

// for loop over Srings - output letters individually

let persons = "Saqib" 
for (let i = 0; i < persons.length; i++){
    console.log(persons[i]) 
}
// stings are not Arrays as their output is different from each other

// We can use the concat method to add two strings like we do using the + operator

let greet = 'Hi' 
let user = ' Saqib'

console.log(greet + user); // adding with + operator
console.log(greet.concat(user)); // Adding with .concat() method
