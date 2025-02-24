// Default Parameters: when you have parameters in a function but you are not passing any argument to the function which is called then it will give an undefined value, to counter this we can set a parameter value to 0 so that if any argument is not passed it must return the that value i.e 0, this is the concept of default parameters.

var a = (val)=>{
    console.log(val);
}
a(); // undefined because no value is passed as it has a parameter that must be passed so to counter this we can set val = 0 to not return undefined but 0 instead if any argument is not passed.

var b = (val = 0)=>{
    console.log(val);
}
b(); // 0 because of default parameter