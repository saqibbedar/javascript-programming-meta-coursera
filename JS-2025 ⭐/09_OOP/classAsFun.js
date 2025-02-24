// (1) Every JavaScript object has an internal property called [[Prototype]] (often referred to as the "prototype"). This [[Prototype]] property is either null or references another object. When you access a property or method on an object, and that property/method is not found directly on the object, JavaScript will look up the prototype chain to find it on the object's prototype and subsequent prototypes in the chain. 

// (2) When you define a constructor function in JavaScript, you can attach methods and properties to its prototype property. Objects created using this constructor will inherit these properties and methods via the prototype chain.

// Constructor function for User
function User(name, age) {
    this.name = name;
    this.age = age;
}

// Adding methods to the prototype of User
User.prototype.createUser = function(name, age) {
    this.name = name;
    this.age = age;
};

User.prototype.hello = function() {
    console.log(`Hello, ${this.name}!`);
};

// Usage
const p1 = new User("Saqib", 19);

p1.createUser("Ali", 18);
p1.hello(); // Output: Hello, Ali!

// Prototype: It is a property that points to another object. It is used to share properties and methods between objects. It is a mechanism that allows objects to inherit properties and methods from other objects. Example: An object inherits properties and methods from another object.
