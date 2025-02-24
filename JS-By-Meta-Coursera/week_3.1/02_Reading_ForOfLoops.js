// it's important to know that a 'for of loop' cannot work on an object directly, 
// since an object is not iterable

/* const car = {
    speed: 100,
    color: "blue"
}

for(prop of car) {
    console.log(prop)
} */

// Running the above code snippet will throw the following error:  

// Uncaught TypeError: car is not iterable

// Contrary to objects, arrays are iterable. For example:  

const colors = ['red','orange','yellow']
for (var color of colors) {
    console.log(color);
}

// output: red orange yellow

/* you can use the fact that a for of loop can be run on arrays to loop over objects.
   But how?
   To ansewr this before let's review three built-in methods: 
   Object.keys(), 
   Object.values(), 
   and Object.entries()
*/


// Built-in methods:

// 1. The Object.keys() method

/* 
The Object.keys() method receives an object as its parameter. 
Remember, this object is the object you want to loop over.

Below is the example of this method
*/

const car2 = {
    speed: 200,
    color: "red"
}
console.log(Object.keys(car2)); // ['speed','color']

/* So, when I run Object.keys() and pass it my car2 object, 
the returned value is an array of strings, 
where each string is a property key of the properties contained in my car2 object. */

// 2. Object.values() method

const car3 = {
    speed: 300,
    color: "yellow"
}
console.log(Object.values(car3)); // [300, 'yellow']


// 3. Object.entries() Method

// It returns an array listing both the keys and the values.

const car4 = {
    speed: 400,
    color: 'magenta'
}
console.log(Object.entries(car4));

// Output: [ ['speed', 400], ['color', 'magenta'] ]

/* 
This time, the values that get returned are 2-member arrays nested inside an array. 
In other words, you get an array of arrays, where each array item has two members, 
the first being a property's key, and the second being a property's value.

Effectively, it's as if you was listing all of a given object's properties, a bit like this:

[
    [propertyKey, propertyVal],
    [propertyKey, propertyVal],
    ...etc
]

*/




function testBracketsDynamicAccess() {
    var dynamicKey;
    if(Math.random() > 0.5) {
      dynamicKey = "speed";
     }else{
       dynamicKey = "color";
     }
  
      var drone = {
        speed: 15,
        color: "orange"
      }
  
      console.log(drone[dynamicKey]);
  }
  testBracketsDynamicAccess();

  classlist