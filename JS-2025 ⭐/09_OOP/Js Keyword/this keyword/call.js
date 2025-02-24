// call(): it is method used in javascript to change this value by using .call() method.

// For Example: 

function add() {
    console.log(this); // In function value of this is window (check in browser) but lets change it to a object by using call() method
}
var obj = {name : "Saqib"};
add.call(obj); // call method is used to change the behavior of this to other element etc.

// Example with many parameters

function myFun(val1, val2, val3) {
    console.log(this, val1, val2, val3);
}
var object = {user2 : "Ali"}
myFun.call(object, 3, 4, 6);


