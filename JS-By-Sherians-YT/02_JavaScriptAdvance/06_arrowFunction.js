// arrow function syntax 
const functionName = () =>{

};

// arrow function can be created as anonymous but it is not recommended!
(() => {
    // this is anonymous arrow function 
    console.log("anonymous function");
})
();
// to call an anonymous function we are suppose to wrap it into small brackets () then write a function So syntax would be (()=>{})();

// best thing about arrow funtion we can omit {} if we want. we can pass anything to it whithout using braces {} 
const myNum = [1, 2, 3, 4];
const doubleNum = myNum.map((myNum)=> myNum * 2)
console.log(doubleNum)

// OR I could have written this as 
const myNum2 = [1, 2, 3, 4];
const doubleNum2 = myNum.map((myNum2)=> {
    return myNum2 * 2
})
console.log(doubleNum2)

const myFunction = () =>{
    // object 
    user = {
        name: 'Muzamil',
        age: '36',
        job: 'Sub-Registar'
    };
    // for...in loop
    for (const prop in user){
        console.log(`${prop}: ${user[prop]}`)
    }
}
myFunction()

const numbers = [1, 2, 3, 4];
const doubled = numbers.map((num) => num * 2)
console.log(doubled); // [ 2, 4, 6, 8 ]

// same example with regular function

const number2 = [1, 2, 3, 4];
function doubledNums(nums) {
    return nums * 2
} 
const double = number2.map(doubledNums);
console.log(double); // [ 2, 4, 6, 8 ]

// Regular Function 
function funcName() {
    // function body
}