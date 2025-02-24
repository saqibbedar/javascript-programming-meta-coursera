// Higher Order Function: A higher order function is a function which accepts function in a parameter.

// There are two to ways HoF functions:

// 1. the first way is to pass a function as to function
// Example: 

function hoF(val) {

}
hoF(()=>{

})

// Now, hoF is a higher order function while another arrow function has been passed to it as an argument. 

function add(a, b){
    return a + b;
}
const result = add(add(2, 3), 2);
console.log(result); // output: 7


// 2. Second is to return a function in a function

function sub(a, b) {
    return ()=>{
        return a - b;
    }
}
const dif = sub(20, 5);
console.log(dif()); // 15

// Important: forEach() method is a higher function because it takes a function inside it. 

// So, HoF are those functions which accept a function in its parameter or return a function from its body.