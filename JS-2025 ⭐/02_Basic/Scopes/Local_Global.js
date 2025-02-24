// Global Scope: anything which is not bound by braces is called global scope it means that variable, function, array etc can be acceded everywhere in whole program.

// Local Scope: it shows that scope of a particular variable and function or arrays etc is specific or we can say limited(within the braces{})

// Example
var a = 10;
function add(a, b) {
    var c = 10;
    return a + b;
}

// Now var c has local scope as it is limited to add() and it can't be accessed outside its scope, we can't write var sum = add(a, c); because c is limited because of its local scope while a can be accessed anywhere in the program as it has global scope. 

var sum = add(a, 5);
console.log(sum);