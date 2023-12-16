// check who is winner among these?

// candidates 
var user1 = "Saqib"
var user2 = "Muzamil"
var user3 = "Mudasir"

// Qualify Message
var goodNews = " Congratualtion's 🎉 You qualify for the next round "
var sadNews = " Sorry! you didn't qualify for the next round. "


if (user1 == "Saqib"){
    console.log(user1 + goodNews);
}
else {
    console.log(sadNews);
}

var user4 = "John"

if (user4 == 2) {
    console.log(user4 + sadNews)
}
else if (user3 == "Mudasir") {
    console.log(user3 + goodNews);
    
}
else{
    console.log(sadNews)
}

// candidates
// var person1 = "John";
// var person2 = "David";
// var person3 = "Julia";
// var person4 = "Stephen";

// // Qualify or Not?
// var happyMsg = "Congratualtion's 🎉 You qualify for the next round,";
// var sadMsg = "You didn't qualify for the next round.";

// // Syntax - if (condition){code}

//         // ***if condition***

// if (person1 == "John") {
//     console.log(happyMsg, person1 + ".");
//     }
//     else {
//         console.log(sadMsg);
//      }

// // check if David qualified?
// if (person2 == "David") {
//     console.log(person2, sadMsg);
//     }
//     else {
//     console.log(happyMsg, person2)
//     }

//     // ***else if condition***

// // If it's sunday, Read the book.

// let today = "saturday";

// if (today == "sunday"){
//     console.log("Read the book");
// }   else if (today =="saturday")   {
//     console.log("Do your home work,", person4 +"."); //person4 from candidates list
// }
//     else {
//     console.log ("Go to school")
// }