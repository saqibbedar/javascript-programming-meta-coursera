// this: this is a special keyword in javascript and its value in global and local scope is window

console.log(this) // will return object {} but in browser it will return window

// In method value of this is an object {}

var obj = {
    methodFunction : function(){
        console.log(this);
    }
}
obj.methodFunction();

// Compiler will this return { methodFunction: [Function: methodFunction] } 

// In browser it will return an object

// use cases of this keyword: 
// this mainly focus on parent element which has specified as a variable or object etc now using this will refer to its parent element lets understand with example.

var button = document.querySelector(".btn");

button.addEventListener("click", function() {
    // 'this' refers to the button element
    this.style.color = "red";
});

// global => window
// function => window
// method => obj
// In event listeners this value return the parent element as button for above example