// for loop over Arrays

let arr = ['Saqib', 'Afsar']
for (let i=0; i < arr.length; i++){
    console.log(arr[i])
}

// for loop over Srings - output letters individually

let persons = "Saqib" 
for (let i = 0; i < persons.length; i++){
    console.log(persons[i]) 
}
// stings are not Arrays as their output is different from each other

// We can use concat method to add two strings like we do using + operator

let greet = 'Hi' 
let user = ' Afsar'

console.log(greet + user); // adding with + operator
console.log(greet.concat(user)); // Adding with .concat method
