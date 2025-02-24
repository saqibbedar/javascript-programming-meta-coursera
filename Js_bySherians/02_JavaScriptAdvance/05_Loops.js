// for...of loop
const numbers = [1, 2, 3, 4, 5];
for (const num of numbers){
    console.log(num) // 1 2 3 4 5
}

// for...in loop

person = {
    name: 'Saqib',
    age: '19',
    job: 'Programming'
};
for (const details in person){
    console.log(`${details}: ${person[details]}`) 
}

// arrow function
const myFunction = () =>{
    user = {
        name: 'Muzamil',
        age: '36',
        job: 'Sub-Registar'
    };
    for (const prop in user){
        console.log(`${prop}: ${user[prop]}`)
    }
}
myFunction(); // calling a function

// arrow function syntax 
const functionName = () =>{

}
