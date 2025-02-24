// forEach loop will always run on array

// write an array and add 2 to its each element 
var a = [1, 3, 4, 5, 6, 8, 9];

console.log('\nFirst Array\n')
// This loop will just copy the values of a array and update the values for each element 
let b = a.forEach((val)=>{
    val += 2;
    console.log(val);
})

// Still array a has same values because in earlier code it just fetch copy in for each loop and add +2 to each element so still array has the same elements
console.log('\nFirst Array displaying\n')
a.forEach((val)=>{
    console.log(val)
})

// check if element is on index 3 then -2 value for each
console.log('\nSecond Array\n')
let c = a.forEach((val)=>{
    if (a === 3) {
        val -= 2;
        console.log(val);
    }
    else{
        val += 2;
        console.log(val);
    }
})