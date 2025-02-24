//object literal syntax: {}
let user = {} // an object

//creating an object with properties and their values
let user2 = {
    name : 'John',
    health : 'goood',
    level : 4,
    Achievments : 'Player of the Day'
}
console.log(user2);

// furthermore I can print any single value among these as by declaring a single variable

console.log(user2.name); // value John will be printed because name is declared

// build object to sell a house

let house = {
    Room : 3, 
    Color : 'white',
    Price : '100$',
}
// let's add some new value to house with dot notation ***Always use lower case
house.windows = 11; // let's add new value to house with dot notation. Remmeber to write small letters for things you add after the dot notation
console.log(house)

//  alternative syntax to the dot notation is "brackets notation"
var house2 = {};
house2["rooms"] = 4;
house2['color']= "pink";
house2["priceUSD"] = 12345;
console.log(house2); // {rooms: 4, color: 'pink', priceUSD: 12345}


// update properties on objects using either the dot notation, 
// or the brackets notation, or a combination of both.

let car = {};
car.color = "white";
car['color'] = 'green';
car['speed'] = '200';
car.speed = 200;

console.log(car); // {color: "green", speed: 100}

// With the brackets notation, I can add space characters inside property names, like this: 

car["number of doors"] = 4;
console.log(car); // {color: 'green', speed: 100, number of doors: 5}

// Using array and object

var arrOfKeys = ['speed', 'altitude', 'color'];
var drone = {
    speed: 100,
    altitude: 200,
    color: "red"
}
for (var i = 0; i < arrOfKeys.length; i++) {
    console.log(drone[arrOfKeys[i]])
}

