// You need to make sure that your JavaScript code works before you launch it.

// function addingStrings(strA, strB){
//     return strA + strB
// }

// // To write this as an expectation in some testing frameworks such as JEST, 
// // I can use the function that has the name expect.

// expect(addingStrings(3,0).toBe('3'))

/* Testing code in this way ensures three things. 
Conciseness as it's straightforward and to the point, 
since there are only two function calls to explain what is the expected result. 
Clarity, because you know exactly what arguments you're providing, and repeatability, 
as you can run it again and again with the same arguments each time. */

// changing codes structure w/out changing it's functionality is called refactoring

/*Refactoring is the process in which I write my feature code so that 
it runs more efficiently or that it's easier to read and thus easier to understand 
for other programmers on the team. This is done without affecting the results 
that the code produces. */


/*TDD approach

First, you write a failing test, then you write your source code so 
that the previously failing test now passes. Finally, you optimize your 
source code without changing its results. */

// To sum up, testing is how you verify the expectations you have regarding the behavior of your code.





// var car = { mileage : 200}
// var carMileage = 100
// console.log(car.mileage);

// var result = 0;
// var i = 4;
// while (i > 0) {
//     result +=2
//     i--;
// }
// console.log(result);

// console.log(result);
// var result = 7; // undefined

// var result = 10
// for (var i = 0; i <5; i++){
//     result +=2
// }
// console.log(result);

// var cat ={}
// cat ['sound'] = 'meo'
// var catSound = 'purr'
// console.log(cat.sound);

// var result;
// console.log(result);
// result = 7;

// var msg = 'hello';
// msg += 'world'
// msg = 'goodbye'
// console.log(msg);

// try {
//     throw new Error();
//     console.log('sss');
// } catch(err){
//     console.log('ccc');
// }


function sub(a,b) {
    return a - b
}
var a = sub (2, 3);
console.log(a)