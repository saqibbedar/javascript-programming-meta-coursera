// there are mainly three differences in var and let const
// 1. var is from old js es5 and let const from new js es6
// 2. var is function scoped, it means it can be used anywhere in it's parent function
//    let const are braces scoped 
// 3. var adds itself to the window object while let and const don't 

// example:
function abcd() {
    for (var i = 1; i < 4; i++){
        console.log(i)
    }
    console.log(i) // here it will print 5 even though it is i being targated outside the braces
}
abcd()

// let example 
function myFunction() {
    for (let i = 10; i < 14; i++){
        console.log(i)
    }
    // here I can't add another console.log(i) because of let as it is braces scoped so it will not allow to target it beyond its scope
}
myFunction()

// browser context api:
// browser offers three things: 1. window 2. stack 3. memory and that is what browser context api is

// 1. what is window objects: features given by browser are called window objects and they are used by js
// js has alot of features but few we use in js are not part of js but of browser but still we are using them because js interact with window to use them 
// and window is box of features given by browser to use with js
// example:
// alert, console, prompt, document, fetch, setInterval, setTimeout etc
var a;
console.log('Enter your age:');
a = prompt();
console.log('You are: ' + a + ' years old');

// 2. stack: it means which thing will work in which way

// 3. heap memory: it is used hold your data 

// 1+2+3+4+5 = 15 // computer also follow same way like us to calculate the data as it will add 1+2 first then save three and then 3+3 = 6 and then save and finally to 15 which is output we willl see but where it stores the data while calculating it is the heap memory

