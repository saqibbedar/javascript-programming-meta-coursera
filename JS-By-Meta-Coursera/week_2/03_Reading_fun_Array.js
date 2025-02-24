// We learn about the functions and arrays and now let's try them together

// let me write an array first
// var kitchen1 = ["Salt", "Sugar", "black Papers"];

// console log it
// console.log(kitchen1[0]); //display only single item at 0 index
// console.log(kitchen1) //display all items in the array at once


// we will run a for loop here inside the function and use array
//function that takes an array as input and display all items of this array
function arrayList(arr){
    for (var i=0; i < arr.length; i++){
        console.log(i, arr[i]);
    }
}
var kitchen1 = ["Salt", "Sugar", "black Papers"];
arrayList(kitchen1)


// Bedar Faimly

console.log("\n" + "Bedar Faimly" + "\n")
function bedarFaimly1 (arr){
    for (var i=0; i< arr.length; i++){
        console.log(i, arr[i]);
    }
}
var bedarSons = ["Muzamil", "Mudasir", "Saqib" + "\n" ]
bedarFaimly1(bedarSons)


// practicing some other way
function bedarFaimly (arr){
        console.log(arr);
}
var candidates = ["Bakhshal" + " Chandio", "Muzamil", "Mudasir", "Saqib" ]
bedarFaimly(candidates)


//function that takes an array as input and display all items of this array
// function listArrayItems(arr) {
//     for (var i = 0; i < arr.length; i++) {
//         console.log(i, arr[i])
//     }
// }
// var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];
// listArrayItems(colors);


