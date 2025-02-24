// Immediately invoked function expression (iife)
// it is used to create private variables and it is immediately invoked/called.

// syntax: (    function(){}    )()

(function() {
    var privateValue = 12;
    return{
        getter : function () {
            console.log(privateValue);
        },
        setter : function (value) {
            privateValue = value;
        }
    }
})()

// calling an anonymous function by warping a function in ()
(function () {
    console.log('hello world')
})()

function myFunction() {
    console.log('hello world');
    console.log('hello 1')
    console.log('hello 2')
}
myFunction()