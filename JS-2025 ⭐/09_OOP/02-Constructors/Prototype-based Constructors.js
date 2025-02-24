// JavaScript is a prototype-based language, and constructors can be used with prototypes to create objects that inherit properties and methods from other objects.

function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.sayHello = function() {
    console.log(`Hello, my name is ${this.name}!`);
};

Person.prototype.sayAge = function(){
    console.log(`I am ${this.age} years old.`)
}

const john = new Person('John', 30);
john.sayHello(); // Output: Hello, my name is John!
john.sayAge(); // I am 30 years old.