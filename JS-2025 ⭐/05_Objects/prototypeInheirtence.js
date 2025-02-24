// Prototypal Inheritance: to get some similar properties from parents is called inheritance

// I have this human objects which has few defined properties and also a second object user which is also a human but it has some different properties and he is also a human so what human object holds the property it must be present to the user so lets get all the matching properties from human object and copy it to the user object this is what concept of inheritance as it will have all the properties which all humans have.

var human = {
    canFly : false,
    canSpeak : true,
    canWalk : true,
    hasTwoLegs : true,
    canDie : true,
    canBreathe : true
}

var user = {
    name : "Saqib",
    age : 19,
    gender : "Male",
    isStudent : true,
    knowProgramming : true,
    canCode : true,
}

user.__proto__ = human; // this is how we can inherit properties from one object to another object.

console.log(user.canFly);