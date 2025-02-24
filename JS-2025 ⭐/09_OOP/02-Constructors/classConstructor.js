// JavaScript supports class syntax which includes constructors for initializing class instances. Class constructors are similar to constructor functions but are defined within class declarations.

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

const john = new Person('John', 30);
console.log(john) // returns an object