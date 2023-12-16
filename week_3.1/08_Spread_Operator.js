// 
/* 
 Spread Operator: 

 It is the shortest and simplest method to copy the properties 
 of an object onto a newly created object
*/

let top3 = [
    'Karachi',
    'Islamabad',
    'Lahore'
]

function showIt(place1, place2, place3) {
    console.log('visit ' + place1);
    console.log('Then visit ' + place2);
    console.log('Finally, visit ' + place3);
}
// showIt(top3[0], top3[1], top3[2])


// But what if I extended my function to have seven places that I want to visit?

// While this code will work, it seems a bit impractical 
// sthe spread operator simplifies things. Let's try it now.

// syntax of spread opertor is ... three dots

// now I'm calling again same function with the spread operator to acheive same results

// showIt(top3[0], top3[1], top3[2]) // instead of writing this I can spread operator below:
showIt(...top3)

/* The advantage of this approach is that you 
don't have to list each individual member of the array 
that you want to pass to your function. 
The syntax is clear, concise, and easy to type. */


