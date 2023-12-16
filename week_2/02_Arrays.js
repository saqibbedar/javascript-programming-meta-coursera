// why Arrays are used in javascript?
// a piece of functionality that allows you to store and rearrange sequenced collections of items. this is called array.

// let's understand it with code

// suppose we have 5 boxes in our kitchen where

var box0 = "Salt"; // first box is filled with salt
console.log(box0) // salt


// kitchen one
var box0 = "Salt";
var box1 = "Sugar";
var box2 = "black Papers";

// kitchen two
var kTwoBox0 = "Mirch";
var kTwoBox1 = "sawa dhana";

// Lets introduce Array
// it's syntax is square bracket - []
var kitchen1 = ["Salt", "Sugar", "black Papers"];
// console log it
console.log(kitchen1[0]); //display only single item at 0 index

// let's now invoke all the list item in kitchen1
console.log(kitchen1) //display all items in the array at once

// now we can acces any of the box using it's index number as we did for salt which is at index 0 so the output was salt

