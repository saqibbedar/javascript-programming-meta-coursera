// Constructor Function: A function in which this keyword is used inside its body and new keyword is used while calling it.

function Person(name, age) {
    this.name = name;
    this.age = age;
}
var john = new Person('John', 23)
console.log(john)

// lets create a constructor function a user in which accept username and password from user

function user(username, password){
    this.username = username;
    this.password = password;
}

const user1 = new user('john', '12345');
const user2 = new user('Saqib', '12434');
const user3 = new user('Ali', 'Hess0325');

console.log(...user)
