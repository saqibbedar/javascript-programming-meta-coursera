// Factory functions are functions that return objects. They can be used as an alternative to constructor functions for object creation.

function createPerson(name, age) {
    return {
        name: name,
        age: age
    }
}

var person = createPerson("Saqib", 19);

console.log(person) // return an object