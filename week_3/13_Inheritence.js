//  inheritance in JavaScript is based around the prototype object.

// creat an object with three properties


var saqib = {
    likeApples : true,
    readBooks : false,
    intestInTech : true
}

var afsar = Object.create(saqib) // new object using Object.create

/* 
I used object to create to instantiate the afsar object. 
I also have access to all the properties of the saqib object.
*/

console.log('Afsar Likes Apples:', afsar.likeApples);

afsar.readBooks = true; // access over the readBooks property because she is intested in tech and I want the value to be True
console.log('Afsar Read Books:', afsar.readBooks);

afsar.intestInTech = false; // value would be false now
console.log('Is she intreted in tech?', afsar.intestInTech)

// It's important to understand that the afsar object 
// has access to the property stored on the saqib object as its prototype.
