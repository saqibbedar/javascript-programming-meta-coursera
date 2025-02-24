const user = Object.create(null);

user.name = 'John';
user.email = 'william.henry.moody@my-own-personal-domain.com';
user.login = function () {
    console.log('the user logged in');
};
user.logout = function () {
    console.log('the user logged out');
};


// Using Object constructor
const obj1 = new Object();
obj1.property1 = 'value1';
obj1.property2 = 'value2';

console.log(obj1); // { property1: 'value1', property2: 'value2' }

// Using object literal
const obj2 = {
    property1: 'value1',
    property2: 'value2'
  };
  
  console.log(obj2); // { property1: 'value1', property2: 'value2' }  