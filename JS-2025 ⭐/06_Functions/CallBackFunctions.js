// callback function: It is normal function that runs when a work is done, for example we have an arrow function below in which there is piece of code which will run after 3 seconds mentioned as 1st parameter in setTimeout()

// a function that would be called after certain period of time is called a callback function.
// Example calling an api using axios, fetch data from facebook, twitter etc, using promises, setTimeout and interval all are the examples of callback functions.

// callback function execute when any work has been has been done or any response has been made.

// check async and sync folder for more details

setTimeout(()=>{
    console.log("Statement will run after 2 seconds");
}, 3000);

function myFunction(){
    return console.log("Hello world")
}
setTimeout(myFunction, 3000)

// callback function is a part of async javascript we will study them later on