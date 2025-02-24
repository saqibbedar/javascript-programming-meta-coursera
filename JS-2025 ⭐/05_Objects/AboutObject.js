// Object literal syntax
// const customRender = (person, root)=>{
//   const newPerson = document.createElement(person.type);
// }

// const root = document.getElementById('root')

const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    fullName: function() {
      return this.firstName + ' ' + this.lastName;
    }
  };

  // In this example, person is an object with properties like firstName, lastName, age, and a method fullName.


// You can also use the Object constructor to create an empty object and then add properties and methods to it.

// Using Object constructor
person = new Object();
person.firstName = 'John';
person.lastName = 'Doe';
person.age = 25;
person.fullName = function() {
  return this.firstName + ' ' + this.lastName;
};

// While the object literal syntax is more concise and commonly used, the Object constructor provides a way to create objects dynamically.



// Using ES6 class syntax
// With ES6, you can use the class syntax to create objects and define methods within the class.
class Person {
    constructor(firstName, lastName, age) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
    }
  
    fullName() {
      return this.firstName + ' ' + this.lastName;
    }
  }
  
const person = new Person('John', 'Doe', 25);

// The ES6 class syntax is a more structured way to define objects and is especially useful for creating constructor functions and methods.
  



// Nested objects
const user = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    address: {
      street: '123 Main St',
      city: 'Anytown',
      zipCode: '12345'
    },
    contact: {
      email: 'john.doe@example.com',
      phone: '555-1234'
    }
  };

  // In this example, the person object has properties like firstName, lastName, and age. It also has nested objects address and contact, each with their own properties.


  // You can access nested properties using dot notation or bracket notation:
console.log(user.address.street); // Output: 123 Main St
console.log(user['contact']['email']); // Output: john.doe@example.com

  