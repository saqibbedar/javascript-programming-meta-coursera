const personPrototype = {
    greet() {
        console.log(`Hello, my name is ${this.name}!`);
    }
};

function createPerson(name) {
    const person = Object.create(personPrototype);
    person.name = name;
    return person;
}

const john = createPerson('John');
john.greet(); // Output: Hello, my name is John!


function createPerson(name, age) {
    const personObj = Object.create(personPrototype);
}