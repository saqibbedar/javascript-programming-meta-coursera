// Join arrays, objects using the rest operator

// Using the spread operator, it's easy to concatenate arrays:
const fruits = ['Apples ', 'Mangos ', 'Pineapple ', 'Strawberry '];
const veggies = ['Potato ', 'Tomato ', 'Onion ', 'cabadge '];
const fruitAndVegies = [...fruits, ...veggies]; // concatenate
console.log(fruitAndVegies); //Outputs a single Array


// ⭐ It's also easy to join objects:

const flying = {
    wings : 2,
}
const car = {
    wheels : 4,
}
const flyingCar = {...flying, ...car}

console.log(flyingCar); // {wings: 2, wheels: 4}



// ⭐ Add new members to arrays without using the push() method

let veggies2 = ['onion', 'parsley'];
veggies2 = [...veggies2, 'carrot', 'beetroot'];
console.log(veggies2);  // ['onion', 'parsley', 'carrot', 'beetroot']


// ⭐ Convert a string to an array using the spread operator

// Given a string, it's easy to spread it out into separate array items:

const greetings = 'Hello';
const arrayOfSrings = [...greetings];
console.log(arrayOfSrings); //  ['H', 'e', 'l', 'l', 'o']


// ⭐ Copy either an object or an array into a separate one
// Here's how to copy an object into a completely separate object, using the spread operator

const car1 = {
    speed : 200,
    Brand : 'Honda',
    color : 'white'
}
const car2 = {...car1}

car1.speed = 250;

console.log(car1.speed, car2.speed); // 250, 200


// You can copy an array into a completely separate array, also using the spread operator, like this:
const fruits1 = ['apples', 'pears']
const fruits2 = [...fruits]
fruits1.pop()
console.log(fruits1, "not", fruits2) // ['apples'] 'not' ['apples','pears']


// Note that the spread operator only performs a shallow copy of the source array or object
