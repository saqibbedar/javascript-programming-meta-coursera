/* 
JavaScript has a number of built-in object types, such as:

 Math, Date, Object, Function, Boolean, 
 Symbol, Array, Map, Set, Promise, JSON, etc. 

 These objects are sometimes referred to as "native objects".
 
 */

//  Math.pow(2,5)
//  console.log(Math)

// constructor function
 function Person(name, age) {
    this.name = name;
    this.age = age;
 }
 var john = new Person('John', 23)
 console.log(john);
 