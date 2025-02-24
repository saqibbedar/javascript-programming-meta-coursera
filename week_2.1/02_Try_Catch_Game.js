// We will learn about error handling 

// let's try and catch to handle our previous code that stoped running
try{
    console.log(x, z); // The furhter code will run now
console("The above will never run")
}
catch (err){
    // something
}
console.log('hello world'); // code will execute


// let's try throw block inside the try and catch error

try{
   throw new error();
}
catch (err){
 console.log(err)
}

// check error separate by using throw block

throw new ReferenceError();