// Constructor function: In JavaScript, constructor functions are used to create objects. These functions are invoked using the new keyword to create new instances of objects.

function Person(name, age){
    this.name = name;
    this.age = age;
}

var john = new Person('John', 23);
console.log(john); // return an object
