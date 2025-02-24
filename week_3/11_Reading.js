/* 
OOP helps developers to mimic the relationship between objects 
in the real world. In a way, 
it helps you to reason about relationships between things in your software, 
just like you would in the real world. 
Thus, OOP is an effective approach to come up with 
solutions in the code you write. OOP also:

 ✔ Allows you to write modular code,

 ✔ Makes your code more flexible and

 ✔ Makes your code reusable.
*/


class Animal { /* ...class code here... */ }

var myDog = Object.create(Animal)

console.log (Animal)

// class Animal { /* ...class code here... */ }

// var myDog = new Animal()

// console.log (Animal)

// class Bird extends Animal {} // extends use to show inheritence from a class

class Bird {
    useWings() {
        console.log("Flying!")
    }
}
class Eagle extends Bird {
    useWings() {
        super.useWings()
        console.log("Barely flapping!")
    }
}
class Penguin extends Bird {
    useWings() {
        console.log("Diving!")
    }
}
var baldEagle = new Eagle();
var kingPenguin = new Penguin();
baldEagle.useWings(); // "Flying! Barely flapping!"
kingPenguin.useWings(); // "Diving!"
