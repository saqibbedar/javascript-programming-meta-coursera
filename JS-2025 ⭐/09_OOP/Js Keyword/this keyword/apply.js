// apply(): It takes two arguments one for this keyword and seconde in all the values in a array that are to be passed

function hello(a, b, c) {
    console.log(this, a, b, c);
}

var obj = {
    name : "Saqib"
}
hello.apply(obj, [1, 2, 3]); // { name: 'Saqib' } 1 2 3
hello.apply(obj.name, [3, 5, 2]); // [String: 'Saqib'] 3 5 2

// Note: we have to place all arguments in an array syntax in second parameter and at first we have to use the obj name.  


// When apply is used?
// we use call, apply and bind when we want to change the this value to a object.
