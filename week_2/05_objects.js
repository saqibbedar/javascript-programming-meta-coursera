// using JavaScript to build a game where the objective is to build your own cookie selling business. Your game is turn-based and uses tiles for characters to move, trade, and build their company. 

// first task is to build a store manager character.

let storeManagerMovement = 4;
let storeManagerSocialSKills = 50;
let storeManagerHealth = 38;

// You've created a store manager, but there are a few improvements that you could make in your code. One issue is the long length of the variable names. Another is that your code does not explain to JavaScript that these variables are related and all describe the same character.

// This is where objects come in we can resolver this by using objects

// let's create a storeManager using objects

let storeManager = {}
storeManager .health = 38;
storeManager .socialSkills = 50;
storeManager .specialAbility = "finding bussiness oppertunities";
storeManager .greetings = "let's make some money";
console.log(storeManager)

// Here you have built a store manager object using dot notation. 
// Each trait is a property of the object.

// In objects the variable become objects property key and value becomes object property value.

// Objects can be described as collections of related properties where each property is represented as a key value pair. This means that what is normally a variable name becomes a property key and what is normally a variable's value becomes the property value of the object. 



/* Objects can also be built by listing the key value pairs inside of the object literal, which specifies them as comma delimited properties.*/

// literal syntax
let nameOfObject = {}

//creating an object with properties and their values
// by specifying the object's properties, delimited as key-value pairs.
let storeManager = {
    health : 38,
    socialSkills : 50,
    specialAbility : "finding bussiness oppertunities",
    greetings : "let's make some money"
}
console.log(storeManager)
